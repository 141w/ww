#!/usr/bin/env bash
# 一键部署个人站：构建 -> 同步到自建服务器；推送到 GitHub 则 Pages 自动部署。
#
#   ./scripts/deploy.sh              # 构建 + 同步到服务器
#   ./scripts/deploy.sh --push       # 构建 + 同步服务器 + git push（触发 GitHub Pages）
#   ./scripts/deploy.sh --server-only # 只同步已有 dist，不重新构建
#
# 服务器地址放在 .deploy.env（已被 .gitignore 忽略，不进公开仓库）。
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

SERVER_ENV="$ROOT/.deploy.env"
[ -f "$SERVER_ENV" ] || { echo "缺少 $SERVER_ENV，请先复制 .deploy.env.example 并填写"; exit 1; }
# shellcheck disable=SC1090
source "$SERVER_ENV"
: "${WEB_REMOTE:?未设置 WEB_REMOTE，如 root@1.2.3.4}"
: "${WEB_DIR:?未设置 WEB_DIR，如 /var/www/ww}"

PUSH=0
BUILD=1
for arg in "$@"; do
  case "$arg" in
    --push) PUSH=1 ;;
    --server-only) BUILD=0 ;;
    *) echo "未知参数: $arg"; exit 1 ;;
  esac
done

if [ "$BUILD" = 1 ]; then
  echo "==> 构建"
  npm run build
fi
[ -d dist ] || { echo "dist 不存在，无法同步"; exit 1; }

echo "==> 同步到 $WEB_REMOTE:$WEB_DIR"
rsync -az --delete dist/ "$WEB_REMOTE:$WEB_DIR/"

echo "==> 远端自检"
ssh "$WEB_REMOTE" "code=\$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1/); \
  js=\$(find '$WEB_DIR'/assets -name '*.js' | head -1); \
  jsc=\$(curl -s -o /dev/null -w '%{http_code}' \"http://127.0.0.1\${js#$WEB_DIR}\"); \
  n=\$(find '$WEB_DIR' -type f | wc -l); \
  echo \"  首页 HTTP \$code | 主 JS HTTP \$jsc | 文件 \$n 个\"; \
  [ \"\$code\" = 200 ] && [ \"\$jsc\" = 200 ] || exit 1"

if [ "$PUSH" = 1 ]; then
  echo "==> git push origin main（GitHub Actions 会自动构建并发布 Pages）"
  git push origin main
fi

echo "完成：自建服务器 http://${WEB_HOST:-<见 .deploy.env>}/ 与 https://141w.github.io"
