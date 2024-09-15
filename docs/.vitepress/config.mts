import { defineConfig } from 'vitepress'
import path from 'path';
import markdownItTaskLists from 'markdown-it-task-lists';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // vite: {
  //   plugins: [
  //     // 确保 client.js 被引入
  //     {
  //       name: 'vitepress-client-plugin',
  //       transformIndexHtml: {
  //         enforce: 'pre',
  //         transform(html) {
  //           return html.replace(
  //             /<\/head>/,
  //             `<script type="module" src="/path/to/client.js"></script></head>`
  //           );
  //         },
  //       },
  //     },
  //   ],
  // },
  title: "work",
  description: "work",
  lang: "zh-CN",
  lastUpdated: true,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/lxgwwenkaiscreen.min.css' }]
    , ['script', { src: './scripts/client.js', type: 'text/javascript' }]
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItTaskLists);
    }
  },

  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    outline: {
      // level:[1,6],
      level: "deep",//2，6
      label: "目录"
    }
    ,nav: [
      { text: 'Home', link: '/' },
    
    ],
    

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '开始', link: '/work' },
          {
            text: '开发', 
            items: [
              { text: '后端', link: '/code/back-end', },
              { text: '前端', link: '/code/front-end', },
              { text: '游戏', link: '/code/game' },
               { text: '数据', link: '/code/data' },
              { text: '单片机/嵌入式', link: '/code/embedd' },
              { text: '人工智能', link: '/code/ai' },
              { text: '算法岗位', link: '/code/algorithm' }
            ]
          }, {
            text: '不写代码',
            items: [
              
              { text: '产品', link: '/notcode/product' },
  
              { text: '设计', link: '/notcode/design' },
              { text: '测试', link: '/notcode/test' },
              { text: '运维', link: '/notcode/ops' },
              {text:'网络安全', link:'/notcode/security'},
              {text:'实施', link:'/notcode/implement'}
            ]
          }
        ]
      }
    ],
    lastUpdated: {
      text: '最后更新在 ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        },
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    darkModeSwitchLabel: "夜间模式",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    externalLinkIcon: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: {
      prev: '上一章节',
      next: '下一章节'
    },
  },
})
