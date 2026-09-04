import { defineConfig, type HeadConfig } from 'vitepress';
import { mermaidMarkdownPlugin } from './plugins/mermaid-markdown-it';

const SITE_URL = 'https://patterns.totorojam.com';
const DEFAULT_TITLE = 'Battle-Tested Patterns — Code from React, Linux, Go & More';
const DEFAULT_DESC =
  '46 production-proven patterns with interactive visualizations, precise source links, multi-language implementations, and exercises.';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default defineConfig({
  title: 'Battle-Tested Patterns',
  description:
    'Battle-tested programming patterns from production codebases. Interactive visualizations, precise source links, multi-language implementations.',

  base: '/',

  sitemap: {
    hostname: 'https://patterns.totorojam.com',
  },

  transformHead({ pageData }) {
    const head: HeadConfig[] = [];
    const title = pageData.title ? `${pageData.title} | Battle-Tested Patterns` : DEFAULT_TITLE;
    const desc = pageData.frontmatter.description || DEFAULT_DESC;
    const url = `${SITE_URL}/${pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')}`;

    head.push(['meta', { property: 'og:title', content: title }]);
    head.push(['meta', { property: 'og:description', content: desc }]);
    head.push(['meta', { property: 'og:url', content: url }]);
    head.push(['meta', { name: 'twitter:title', content: title }]);
    head.push(['meta', { name: 'twitter:description', content: desc }]);

    const isZh = pageData.relativePath.startsWith('zh/');
    const enPath = isZh ? pageData.relativePath.replace(/^zh\//, '') : pageData.relativePath;
    const zhPath = isZh ? pageData.relativePath : `zh/${pageData.relativePath}`;
    // Canonical must match this page's language-specific URL; never point ZH→EN.
    // This avoids duplicate content, preserves hreflang, and stays consistent with og:url.
    const selfPath = isZh ? zhPath : enPath;
    head.push([
      'link',
      {
        rel: 'canonical',
        href: `${SITE_URL}/${selfPath.replace(/index\.md$/, '').replace(/\.md$/, '')}`,
      },
    ]);
    head.push([
      'link',
      {
        rel: 'alternate',
        hreflang: 'en',
        href: `${SITE_URL}/${enPath.replace(/index\.md$/, '').replace(/\.md$/, '')}`,
      },
    ]);
    head.push([
      'link',
      {
        rel: 'alternate',
        hreflang: 'zh-CN',
        href: `${SITE_URL}/${zhPath.replace(/index\.md$/, '').replace(/\.md$/, '')}`,
      },
    ]);
    head.push([
      'link',
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${SITE_URL}/${enPath.replace(/index\.md$/, '').replace(/\.md$/, '')}`,
      },
    ]);

    const isPattern = /^(zh\/)?patterns\/[^/]+\/index\.md$/.test(pageData.relativePath);
    const isHome = pageData.relativePath === 'index.md' || pageData.relativePath === 'zh/index.md';

    if (isHome) {
      const ld = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Battle-Tested Patterns',
        url: SITE_URL,
        description: DEFAULT_DESC,
        author: { '@type': 'Person', name: 'Totoro-jam' },
        inLanguage: isZh ? 'zh-CN' : 'en',
      };
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(ld)]);
    } else if (isPattern) {
      const breadcrumbs = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isZh ? '首页' : 'Home',
            item: isZh ? `${SITE_URL}/zh/` : `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isZh ? '模式' : 'Patterns',
            item: isZh ? `${SITE_URL}/zh/patterns/` : `${SITE_URL}/patterns/`,
          },
          { '@type': 'ListItem', position: 3, name: pageData.title },
        ],
      };
      const article = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: pageData.title,
        description: desc,
        url,
        author: { '@type': 'Person', name: 'Totoro-jam' },
        publisher: { '@type': 'Organization', name: 'Battle-Tested Patterns' },
        inLanguage: isZh ? 'zh-CN' : 'en',
        ...(pageData.lastUpdated
          ? { dateModified: new Date(pageData.lastUpdated).toISOString() }
          : {}),
      };
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumbs)]);
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(article)]);
    }

    return head;
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Battle-Tested Patterns' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:locale:alternate', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['meta', { name: 'author', content: 'Totoro-jam' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'programming patterns, design patterns, interactive visualizations, system design, data structures, concurrency patterns, algorithms, React, Linux, Go, Rust, TypeScript, Python, Redis, PostgreSQL, Kafka, production code, computer science, software engineering',
      },
    ],
    // Privacy-friendly analytics (Umami Cloud, no cookies, no PII). The
    // website-id is a public identifier, not a secret. Loaded with `defer` so
    // a failed fetch never blocks page rendering.
    [
      'script',
      {
        defer: '',
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': 'b5a7c694-8975-4f11-a9c9-5982bf2a4248',
      },
    ],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/what-is-this' },
          { text: 'Patterns', link: '/patterns/' },
          { text: 'By Project', link: '/by-project/react' },
          { text: 'Case Studies', link: '/case-studies/react-fiber' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'What is This?', link: '/guide/what-is-this' },
                { text: 'Learning Paths', link: '/guide/learning-paths' },
                { text: 'Exercise Guide', link: '/guide/exercises' },
              ],
            },
            {
              text: 'Explore',
              items: [
                { text: 'Pattern Connections', link: '/guide/pattern-connections' },
                { text: 'Pattern Comparison', link: '/guide/pattern-comparison' },
                { text: 'Pattern Timeline', link: '/guide/timeline' },
                { text: 'Use Cases', link: '/guide/use-cases' },
              ],
            },
            {
              text: 'Reference',
              items: [
                { text: 'Cheat Sheet', link: '/guide/cheatsheet' },
                { text: 'Complexity Cheat Sheet', link: '/guide/complexity' },
                { text: 'Interview Guide', link: '/guide/interview' },
              ],
            },
            {
              text: 'Community',
              items: [{ text: 'How to Contribute', link: '/guide/how-to-contribute' }],
            },
          ],
          '/patterns/': [
            {
              text: 'Data Structures',
              collapsed: false,
              items: [
                { text: 'Bitmask', link: '/patterns/bitmask/' },
                { text: 'Min Heap', link: '/patterns/min-heap/' },
                { text: 'Ring Buffer', link: '/patterns/ring-buffer/' },
                { text: 'Trie (Prefix Tree)', link: '/patterns/trie/' },
                { text: 'Skip List', link: '/patterns/skip-list/' },
                { text: 'Bloom Filter', link: '/patterns/bloom-filter/' },
                { text: 'LRU Cache', link: '/patterns/lru-cache/' },
                { text: 'B+ Tree', link: '/patterns/b-plus-tree/' },
                { text: 'Tagged Union', link: '/patterns/tagged-union/' },
                { text: 'Merkle Tree', link: '/patterns/merkle-tree/' },
                { text: 'Merge Iterator', link: '/patterns/merge-iterator/' },
              ],
            },
            {
              text: 'Concurrency',
              collapsed: false,
              items: [
                { text: 'Semaphore', link: '/patterns/semaphore/' },
                { text: 'Actor Model', link: '/patterns/actor-model/' },
                { text: 'Work Stealing', link: '/patterns/work-stealing/' },
                { text: 'MVCC', link: '/patterns/mvcc/' },
                { text: 'Cooperative Scheduling', link: '/patterns/cooperative-scheduling/' },
                { text: 'Double Buffering', link: '/patterns/double-buffering/' },
                { text: 'Backpressure', link: '/patterns/backpressure/' },
                { text: 'Event Loop', link: '/patterns/event-loop/' },
                { text: 'Logical Clock', link: '/patterns/logical-clock/' },
              ],
            },
            {
              text: 'System',
              collapsed: false,
              items: [
                { text: 'Circuit Breaker', link: '/patterns/circuit-breaker/' },
                { text: 'Rate Limiter', link: '/patterns/rate-limiter/' },
                { text: 'Retry with Exponential Backoff', link: '/patterns/retry-backoff/' },
                { text: 'Write-Ahead Log', link: '/patterns/write-ahead-log/' },
                { text: 'Batch Processing', link: '/patterns/batch-processing/' },
                { text: 'Consistent Hashing', link: '/patterns/consistent-hashing/' },
                { text: 'Dependency Graph', link: '/patterns/dependency-graph/' },
                { text: 'Middleware / Pipeline Chain', link: '/patterns/middleware-chain/' },
                { text: 'Registry', link: '/patterns/registry/' },
                { text: 'Dirty Flag', link: '/patterns/dirty-flag/' },
                { text: 'LSM Tree', link: '/patterns/lsm-tree/' },
                { text: 'Checkpointing', link: '/patterns/checkpointing/' },
              ],
            },
            {
              text: 'Memory',
              collapsed: false,
              items: [
                { text: 'Object Pool', link: '/patterns/object-pool/' },
                { text: 'Flyweight', link: '/patterns/flyweight/' },
                { text: 'Arena Allocator', link: '/patterns/arena-allocator/' },
                { text: 'Free List', link: '/patterns/free-list/' },
                { text: 'Copy-on-Write', link: '/patterns/copy-on-write/' },
                { text: 'Reference Counting', link: '/patterns/reference-counting/' },
                { text: 'Tombstone', link: '/patterns/tombstone/' },
                { text: 'Interning', link: '/patterns/interning/' },
              ],
            },
            {
              text: 'Behavioral',
              collapsed: false,
              items: [
                { text: 'State Machine', link: '/patterns/state-machine/' },
                { text: 'Observer / Pub-Sub', link: '/patterns/observer/' },
                { text: 'Iterator / Lazy Evaluation', link: '/patterns/iterator/' },
                { text: 'Diff / Patch', link: '/patterns/diff-patch/' },
                { text: 'Vtable / Ops Dispatch', link: '/patterns/vtable/' },
                { text: 'Visitor / Tree Walker', link: '/patterns/visitor/' },
              ],
            },
          ],
          '/by-project/': [
            {
              text: 'By Source Project',
              items: [
                { text: 'React', link: '/by-project/react' },
                { text: 'Linux Kernel', link: '/by-project/linux' },
                { text: 'Go', link: '/by-project/go-runtime' },
                { text: 'Git', link: '/by-project/git' },
                { text: 'Node.js Ecosystem', link: '/by-project/nodejs' },
                { text: 'Rust', link: '/by-project/rust' },
                { text: 'Game Engines', link: '/by-project/game-engines' },
                { text: 'Distributed Systems', link: '/by-project/distributed-systems' },
                { text: 'More Projects', link: '/by-project/more-projects' },
              ],
            },
          ],
          '/case-studies/': [
            {
              text: 'Case Studies',
              items: [
                { text: 'React Fiber: Three Patterns', link: '/case-studies/react-fiber' },
                { text: 'Git Commit: Three Patterns', link: '/case-studies/git-commit' },
                { text: 'Go Scheduler: Three Patterns', link: '/case-studies/go-scheduler' },
                { text: 'Linux read(): Three Patterns', link: '/case-studies/linux-read' },
                { text: 'Node.js Request: Three Patterns', link: '/case-studies/nodejs-request' },
                {
                  text: 'Redis Single Thread: Three Patterns',
                  link: '/case-studies/redis-single-thread',
                },
                { text: 'PostgreSQL MVCC: Three Patterns', link: '/case-studies/postgres-mvcc' },
                { text: 'LevelDB LSM: Three Patterns', link: '/case-studies/leveldb-lsm' },
                { text: 'SQLite WAL: Three Patterns', link: '/case-studies/sqlite-wal' },
                { text: 'Kafka Log: Three Patterns', link: '/case-studies/kafka-log' },
                { text: 'Lucene Index: Three Patterns', link: '/case-studies/lucene-index' },
              ],
            },
          ],
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/what-is-this' },
          { text: '模式', link: '/zh/patterns/' },
          { text: '按项目', link: '/zh/by-project/react' },
          { text: '案例研究', link: '/zh/case-studies/react-fiber' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '快速开始',
              items: [
                { text: '这是什么？', link: '/zh/guide/what-is-this' },
                { text: '学习路径', link: '/zh/guide/learning-paths' },
                { text: '练习指南', link: '/zh/guide/exercises' },
              ],
            },
            {
              text: '探索',
              items: [
                { text: '模式如何协作', link: '/zh/guide/pattern-connections' },
                { text: '模式对比', link: '/zh/guide/pattern-comparison' },
                { text: '模式时间线', link: '/zh/guide/timeline' },
                { text: '使用场景', link: '/zh/guide/use-cases' },
              ],
            },
            {
              text: '参考',
              items: [
                { text: '速查表', link: '/zh/guide/cheatsheet' },
                { text: '复杂度速查表', link: '/zh/guide/complexity' },
                { text: '面试指南', link: '/zh/guide/interview' },
              ],
            },
            {
              text: '社区',
              items: [{ text: '如何贡献', link: '/zh/guide/how-to-contribute' }],
            },
          ],
          '/zh/patterns/': [
            {
              text: '数据结构',
              collapsed: false,
              items: [
                { text: '位掩码 (Bitmask)', link: '/zh/patterns/bitmask/' },
                { text: '最小堆 (Min Heap)', link: '/zh/patterns/min-heap/' },
                { text: '环形缓冲区 (Ring Buffer)', link: '/zh/patterns/ring-buffer/' },
                { text: '前缀树 (Trie)', link: '/zh/patterns/trie/' },
                { text: '跳表 (Skip List)', link: '/zh/patterns/skip-list/' },
                { text: '布隆过滤器 (Bloom Filter)', link: '/zh/patterns/bloom-filter/' },
                { text: 'LRU 缓存 (LRU Cache)', link: '/zh/patterns/lru-cache/' },
                { text: 'B+ 树 (B+ Tree)', link: '/zh/patterns/b-plus-tree/' },
                { text: '标签联合体 (Tagged Union)', link: '/zh/patterns/tagged-union/' },
                { text: 'Merkle 树 (Merkle Tree)', link: '/zh/patterns/merkle-tree/' },
                { text: '合并迭代器 (Merge Iterator)', link: '/zh/patterns/merge-iterator/' },
              ],
            },
            {
              text: '并发',
              collapsed: false,
              items: [
                { text: '信号量 (Semaphore)', link: '/zh/patterns/semaphore/' },
                { text: 'Actor 模型 (Actor Model)', link: '/zh/patterns/actor-model/' },
                { text: '工作窃取 (Work Stealing)', link: '/zh/patterns/work-stealing/' },
                { text: 'MVCC 多版本并发控制 (MVCC)', link: '/zh/patterns/mvcc/' },
                {
                  text: '协作调度 (Cooperative Scheduling)',
                  link: '/zh/patterns/cooperative-scheduling/',
                },
                { text: '双缓冲 (Double Buffering)', link: '/zh/patterns/double-buffering/' },
                { text: '背压 (Backpressure)', link: '/zh/patterns/backpressure/' },
                { text: '事件循环 (Event Loop)', link: '/zh/patterns/event-loop/' },
                { text: '逻辑时钟 (Logical Clock)', link: '/zh/patterns/logical-clock/' },
              ],
            },
            {
              text: '系统',
              collapsed: false,
              items: [
                { text: '熔断器 (Circuit Breaker)', link: '/zh/patterns/circuit-breaker/' },
                { text: '限流器 (Rate Limiter)', link: '/zh/patterns/rate-limiter/' },
                { text: '指数退避重试 (Retry with Backoff)', link: '/zh/patterns/retry-backoff/' },
                { text: '预写日志 (Write-Ahead Log)', link: '/zh/patterns/write-ahead-log/' },
                { text: '批处理 (Batch Processing)', link: '/zh/patterns/batch-processing/' },
                {
                  text: '一致性哈希 (Consistent Hashing)',
                  link: '/zh/patterns/consistent-hashing/',
                },
                { text: '依赖图 (Dependency Graph)', link: '/zh/patterns/dependency-graph/' },
                {
                  text: '中间件 / 管道链 (Middleware / Pipeline Chain)',
                  link: '/zh/patterns/middleware-chain/',
                },
                { text: '注册表 (Registry)', link: '/zh/patterns/registry/' },
                { text: '脏标记 (Dirty Flag)', link: '/zh/patterns/dirty-flag/' },
                { text: 'LSM 树 (Log-Structured Merge Tree)', link: '/zh/patterns/lsm-tree/' },
                { text: '检查点 (Checkpointing)', link: '/zh/patterns/checkpointing/' },
              ],
            },
            {
              text: '内存',
              collapsed: false,
              items: [
                { text: '对象池 (Object Pool)', link: '/zh/patterns/object-pool/' },
                { text: '享元 / 驻留 (Flyweight)', link: '/zh/patterns/flyweight/' },
                { text: 'Arena 分配器 (Arena Allocator)', link: '/zh/patterns/arena-allocator/' },
                { text: '空闲链表 (Free List)', link: '/zh/patterns/free-list/' },
                { text: '写时复制 (Copy-on-Write)', link: '/zh/patterns/copy-on-write/' },
                { text: '引用计数 (Reference Counting)', link: '/zh/patterns/reference-counting/' },
                { text: '墓碑 (Tombstone)', link: '/zh/patterns/tombstone/' },
                { text: '驻留 (Interning)', link: '/zh/patterns/interning/' },
              ],
            },
            {
              text: '行为型',
              collapsed: false,
              items: [
                { text: '状态机 (State Machine)', link: '/zh/patterns/state-machine/' },
                { text: '观察者 (Observer)', link: '/zh/patterns/observer/' },
                { text: '迭代器 (Iterator)', link: '/zh/patterns/iterator/' },
                { text: '差异/补丁 (Diff / Patch)', link: '/zh/patterns/diff-patch/' },
                { text: '虚函数表 (Vtable)', link: '/zh/patterns/vtable/' },
                { text: '访问者 (Visitor)', link: '/zh/patterns/visitor/' },
              ],
            },
          ],
          '/zh/by-project/': [
            {
              text: '按来源项目',
              items: [
                { text: 'React', link: '/zh/by-project/react' },
                { text: 'Linux 内核', link: '/zh/by-project/linux' },
                { text: 'Go', link: '/zh/by-project/go-runtime' },
                { text: 'Git', link: '/zh/by-project/git' },
                { text: 'Node.js 生态', link: '/zh/by-project/nodejs' },
                { text: 'Rust', link: '/zh/by-project/rust' },
                { text: '游戏引擎', link: '/zh/by-project/game-engines' },
                { text: '分布式系统', link: '/zh/by-project/distributed-systems' },
                { text: '更多项目', link: '/zh/by-project/more-projects' },
              ],
            },
          ],
          '/zh/case-studies/': [
            {
              text: '案例研究',
              items: [
                { text: 'React Fiber：三种模式', link: '/zh/case-studies/react-fiber' },
                { text: 'Git Commit：三种模式', link: '/zh/case-studies/git-commit' },
                { text: 'Go 调度器：三种模式', link: '/zh/case-studies/go-scheduler' },
                { text: 'Linux read()：三种模式', link: '/zh/case-studies/linux-read' },
                { text: 'Node.js 请求：三种模式', link: '/zh/case-studies/nodejs-request' },
                { text: 'Redis 单线程：三种模式', link: '/zh/case-studies/redis-single-thread' },
                { text: 'PostgreSQL MVCC：三种模式', link: '/zh/case-studies/postgres-mvcc' },
                { text: 'LevelDB LSM：三种模式', link: '/zh/case-studies/leveldb-lsm' },
                { text: 'SQLite WAL：三种模式', link: '/zh/case-studies/sqlite-wal' },
                { text: 'Kafka 日志：三种模式', link: '/zh/case-studies/kafka-log' },
                { text: 'Lucene 索引：三种模式', link: '/zh/case-studies/lucene-index' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/Totoro-jam/battle-tested-patterns/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        outline: {
          level: [2, 3],
          label: '页面导航',
        },
        lastUpdated: {
          text: '最后更新于',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        footer: {
          message: '基于 MIT 许可证发布。',
          copyright: 'Copyright © 2026 Totoro-jam',
        },
        notFound: {
          title: '页面未找到',
          quote: '看起来你迷路了。不过别担心，46 个模式正在等你探索。',
          linkLabel: '返回首页',
          linkText: '返回首页',
        },
      },
    },
  },

  lastUpdated: true,

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/Totoro-jam/battle-tested-patterns' }],
    notFound: {
      title: 'Page Not Found',
      quote:
        "Looks like you wandered off the path. But don't worry — 46 battle-tested patterns are waiting for you.",
      linkLabel: 'Go to home page',
      linkText: 'Take me home',
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          options: {
            tokenize(text: string) {
              const segmenter = (Intl as any).Segmenter;
              if (segmenter) {
                const seg = new segmenter('zh-CN', { granularity: 'word' });
                return [...seg.segment(text)]
                  .filter((s: any) => s.isWordLike)
                  .map((s: any) => s.segment.toLowerCase());
              }
              return text
                .split(/[\s-]+/)
                .filter(Boolean)
                .map((w) => w.toLowerCase());
            },
          },
          searchOptions: {
            combineWith: 'AND',
            fuzzy: 0.2,
            boost: { title: 4, text: 2 },
          },
        },
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },

    outline: { level: [2, 3] },

    editLink: {
      pattern: 'https://github.com/Totoro-jam/battle-tested-patterns/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Totoro-jam',
    },
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 500,
    },
  },

  markdown: {
    config: (md) => {
      md.use(mermaidMarkdownPlugin);
    },
  },
});
