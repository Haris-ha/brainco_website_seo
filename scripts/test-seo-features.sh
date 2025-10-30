#!/bin/bash

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}🧪 测试 Publisher 和 X-Robots-Tag 功能${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# 检查服务是否运行
echo -e "${YELLOW}📋 检查开发服务器...${NC}"
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo -e "${RED}❌ 开发服务器未运行。请先启动: npm run dev${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 开发服务器运行中${NC}"
echo ""

# 测试 X-Robots-Tag HTTP Header
echo -e "${YELLOW}📋 测试 X-Robots-Tag HTTP Header:${NC}"
ROBOTS_TAG=$(curl -s -I http://localhost:3000/zh-CN 2>/dev/null | grep -i "x-robots-tag:" | cut -d' ' -f2- | tr -d '\r')
if [ -n "$ROBOTS_TAG" ]; then
    echo -e "${GREEN}✅ X-Robots-Tag: ${ROBOTS_TAG}${NC}"
else
    echo -e "${RED}❌ 未找到 X-Robots-Tag header${NC}"
    echo -e "${YELLOW}   提示: 检查 middleware.ts 是否正确配置${NC}"
fi
echo ""

# 测试 Publisher Meta Tag
echo -e "${YELLOW}📋 测试 Publisher Meta Tag:${NC}"
PAGE_HTML=$(curl -s http://localhost:3000/zh-CN 2>/dev/null)
PUBLISHER=$(echo "$PAGE_HTML" | grep -o '<meta name="publisher" content="[^"]*"' | cut -d'"' -f4)
if [ -n "$PUBLISHER" ]; then
    echo -e "${GREEN}✅ Publisher Meta Tag: ${PUBLISHER}${NC}"
else
    echo -e "${RED}❌ 未找到 publisher meta tag${NC}"
    echo -e "${YELLOW}   提示: 检查 CMS 中是否配置了 publisher 字段${NC}"
fi
echo ""

# 测试结构化数据中的 Publisher
echo -e "${YELLOW}📋 测试结构化数据中的 Publisher:${NC}"
if echo "$PAGE_HTML" | grep -q '"@type":"WebPage"'; then
    echo -e "${GREEN}✅ 找到 WebPage schema${NC}"
    
    # 尝试提取 publisher name
    PUBLISHER_IN_SCHEMA=$(echo "$PAGE_HTML" | grep -A 20 '"@type":"WebPage"' | grep -o '"name":"[^"]*"' | head -n 2 | tail -n 1 | cut -d'"' -f4)
    if [ -n "$PUBLISHER_IN_SCHEMA" ]; then
        echo -e "${GREEN}   Publisher in Schema: ${PUBLISHER_IN_SCHEMA}${NC}"
    fi
else
    echo -e "${RED}❌ 未找到 WebPage schema${NC}"
    echo -e "${YELLOW}   提示: 确保页面使用了 StructuredData 组件${NC}"
fi
echo ""

# 测试多语言支持
echo -e "${YELLOW}📋 测试多语言支持:${NC}"

# 中文
ROBOTS_ZH=$(curl -s -I http://localhost:3000/zh-CN 2>/dev/null | grep -i "x-robots-tag:" | cut -d' ' -f2- | tr -d '\r')
if [ -n "$ROBOTS_ZH" ]; then
    echo -e "${GREEN}✅ 中文 (zh-CN): ${ROBOTS_ZH}${NC}"
else
    echo -e "${RED}❌ 中文页面未找到 X-Robots-Tag${NC}"
fi

# 英文
ROBOTS_EN=$(curl -s -I http://localhost:3000/en-US 2>/dev/null | grep -i "x-robots-tag:" | cut -d' ' -f2- | tr -d '\r')
if [ -n "$ROBOTS_EN" ]; then
    echo -e "${GREEN}✅ 英文 (en-US): ${ROBOTS_EN}${NC}"
else
    echo -e "${RED}❌ 英文页面未找到 X-Robots-Tag${NC}"
fi

# 繁体中文
ROBOTS_TW=$(curl -s -I http://localhost:3000/zh-TW 2>/dev/null | grep -i "x-robots-tag:" | cut -d' ' -f2- | tr -d '\r')
if [ -n "$ROBOTS_TW" ]; then
    echo -e "${GREEN}✅ 繁体中文 (zh-TW): ${ROBOTS_TW}${NC}"
else
    echo -e "${RED}❌ 繁体中文页面未找到 X-Robots-Tag${NC}"
fi
echo ""

# 测试 CMS 连接
echo -e "${YELLOW}📋 测试 CMS API 连接:${NC}"
CMS_URL="${NEXT_PUBLIC_CMS_API_URL:-http://localhost:1337}"
if curl -s "${CMS_URL}/api/page-seos?filters[pagePath][\$eq]=/&locale=zh-Hans" > /dev/null 2>&1; then
    echo -e "${GREEN}✅ CMS API 连接正常: ${CMS_URL}${NC}"
else
    echo -e "${RED}❌ 无法连接到 CMS API: ${CMS_URL}${NC}"
    echo -e "${YELLOW}   提示: 确保 Strapi 正在运行，或检查 .env.local 配置${NC}"
fi
echo ""

# 总结
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}📊 测试总结${NC}"
echo -e "${BLUE}========================================${NC}"

PASS_COUNT=0
TOTAL_TESTS=5

# 计算通过的测试数量
[ -n "$ROBOTS_TAG" ] && PASS_COUNT=$((PASS_COUNT + 1))
[ -n "$PUBLISHER" ] && PASS_COUNT=$((PASS_COUNT + 1))
echo "$PAGE_HTML" | grep -q '"@type":"WebPage"' && PASS_COUNT=$((PASS_COUNT + 1))
[ -n "$ROBOTS_ZH" ] && [ -n "$ROBOTS_EN" ] && [ -n "$ROBOTS_TW" ] && PASS_COUNT=$((PASS_COUNT + 1))
curl -s "${CMS_URL}/api/page-seos" > /dev/null 2>&1 && PASS_COUNT=$((PASS_COUNT + 1))

echo ""
if [ $PASS_COUNT -eq $TOTAL_TESTS ]; then
    echo -e "${GREEN}🎉 所有测试通过！(${PASS_COUNT}/${TOTAL_TESTS})${NC}"
    echo -e "${GREEN}   Publisher 和 X-Robots-Tag 功能已正确配置。${NC}"
else
    echo -e "${YELLOW}⚠️  部分测试通过 (${PASS_COUNT}/${TOTAL_TESTS})${NC}"
    echo -e "${YELLOW}   请查看上面的错误信息并进行修复。${NC}"
fi
echo ""

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}📚 相关文档:${NC}"
echo -e "  - docs/PUBLISHER_AND_ROBOTS_TAG.md"
echo -e "  - docs/TESTING_PUBLISHER_AND_ROBOTS.md"
echo -e "${BLUE}========================================${NC}"

