import './App.css'
import { DisperseText } from './components/DisperseText'

function PhoneMockup({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      className={['phoneShot', className].filter(Boolean).join(' ')}
      src={src}
      alt={alt}
      loading="lazy"
    />
  )
}

function App() {
  const base = {
    name: '蔡鹏宇',
    hometown: '福建莆田',
    email: '619044601@qq.com',
    github: { label: 'PengYu6669', href: 'https://github.com/PengYu6669' },
    role: '全栈开发者 / AI 应用开发 / 前端工程师',
  } as const

  const education = {
    school: '集美大学诚毅学院',
    major: '计算机科学与技术',
    degree: '本科在读',
  } as const

  const skills = [
    {
      title: '前端 / 全栈',
      items: [
        'React 18 / Next.js 15–16 / Vue 2/3',
        'Tailwind CSS / Ant Design',
        'Node.js / Express / TypeScript',
        'RESTful API / Prisma / PostgreSQL / MySQL',
        '工程化与性能优化',
      ],
    },
    {
      title: 'AI 应用',
      items: ['LangChain / LangGraph', 'RAG / MCP 协议', 'Agent 智能体 / 多步推理'],
    },
    {
      title: '实时通信',
      items: ['WebSocket', 'MQTT', 'Axios 封装 / 弱网兼容'],
    },
    {
      title: '部署',
      items: ['Linux', 'Docker 容器化', 'Python 脚本'],
    },
  ] as const

  const internships = [
    {
      company: 'fAIshion（海外公司）',
      role: '全栈开发',
      period: '2026.02 – 2026.04',
      stack: 'Next.js 15 + React 19 + TypeScript + Plasmo + Prisma + PostgreSQL',
      bullets: [
        '负责穿搭 Agent 系统落地：基于 Vercel AI SDK 实现流式输出、工具调用与多轮对话上下文管理，通过颜色/预算/场景等约束完成 需求理解 → 检索 → 组套 → 推荐 全流程',
        '设计规则守卫机制，避免重复推荐与无效请求，提升推荐准确率与用户体验',
        '负责 AI 试穿功能全链路：Chrome 插件端 + Web 端，商品信息采集、截图上传、进度展示、异步任务处理',
        '服务端采用任务队列架构：单件试穿/多件混搭两种模式，并加入 3 次重试、5 分钟超时、失败自动退款、并发控制等稳定性策略',
      ],
    },
    {
      company: '新魔登文化',
      role: '前端开发实习生',
      period: '2025.04 – 2025.10',
      stack: 'Next.js 15 + React 19 + TypeScript + Ant Design 5 + MQTT + lightweight-charts',
      bullets: [
        '负责公众号分享功能全链路：在 Next.js 服务端完成 JSSDK 签名与 URL 处理，保证分享稳定高可用',
        '基于 MQTT 实时通信实现多人实时联动动画：设计消息协议与状态机，端到端延迟稳定在百毫秒级',
        '使用 lightweight-charts 开发行情图表与价格动画：封装通用交互 Hooks，优化渲染性能，解决弱网与低端机卡顿问题',
        '封装 Axios 请求、错误处理、缓存策略与本地状态管理，提升页面加载速度与用户体验',
      ],
    },
  ] as const

  return (
    <div className="page">
      <div className="bg" aria-hidden="true" />

      <main className="container">
        <section className="hero" id="about">
          <div className="heroTop">
            <div className="heroName">{base.name}</div>
            <div className="heroActions" id="contact">
              <a className="btn btn--ghost" href={`mailto:${base.email}`}>
                {base.email}
              </a>
              <a className="btn btn--ghost" href={base.github.href} target="_blank" rel="noreferrer">
                GitHub · {base.github.label}
              </a>
            </div>
          </div>

          <p className="kicker">{base.role}</p>
          <p className="heroIntro">
            全栈前端开发者｜专注AI智能体应用落地，具备完整Web全栈开发、实时交互、项目上线部署经验，致力于将创意需求落地为稳定可用的产品
          </p>
          <h1 className="title">
            <DisperseText
              zh="我能把你的想法变成现实"
              en="I can turn your ideas into reality"
              ariaLabel="个人介绍：悬停逐字切换中英文"
            />
          </h1>

          <div className="metaRow" aria-label="个人基础信息">
            <div className="meta">
              <span className="meta__k">籍贯</span>
              <span className="meta__v">{base.hometown}</span>
            </div>
            <div className="meta">
              <span className="meta__k">教育</span>
              <span className="meta__v">
                {education.school}｜{education.major}｜{education.degree}
              </span>
            </div>
          </div>

        </section>

        <section className="section" id="skills">
          <div className="section__head">
            <h2 className="section__title">核心技能</h2>
          </div>

          <div className="skillGrid">
            {skills.map((g) => (
              <div key={g.title} className="skillCard">
                <div className="skillCard__title">{g.title}</div>
                <div className="skillCard__tags">
                  {g.items.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="internships">
          <div className="section__head">
            <h2 className="section__title">实习经历</h2>
          </div>

          <div className="timeline">
            {internships.map((it) => (
              <article key={it.company} className="tlItem">
                <div className="tlItem__dot" aria-hidden="true" />
                <div className="tlItem__body">
                  <div className="tlItem__head">
                    <h3 className="tlItem__title">{it.company}</h3>
                    <span className="tlItem__role">{it.role}</span>
                  </div>
                  <div className="tlItem__meta">
                    <span>{it.period}</span>
                    <span className="tlItem__sep" aria-hidden="true">
                      ·
                    </span>
                    <span>{it.stack}</span>
                  </div>
                  <ul className="tlItem__list">
                    {it.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section__head">
            <h2 className="section__title">作品集</h2>
          </div>

          <div className="showcase">
            <section className="showcaseItem">
              <div className="showcaseItem__media">
                <div className="showcaseMediaBox">
                  <img className="showcaseImgFill" src="/projects/3.png" alt="NexMind 展示图" loading="lazy" />
                </div>
              </div>
              <div className="showcaseItem__text showcaseItem__text--below">
                <div className="showcaseTitle showcaseTitle--xl">NexMind</div>
                <div className="showcaseDesc">
                  NexMind｜个人知识库 AI 系统（RAG / MCP / LangGraph）。覆盖笔记管理、检索增强、工作流编排、可视化与稳定性策略。
                </div>
                <div className="showcaseTags showcaseTags--glass">
                  {['RAG', 'LangGraph', 'MCP', 'React', 'Prisma', 'PostgreSQL'].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a className="btn" href="https://github.com/PengYu6669/NexMind" target="_blank" rel="noreferrer">
                  查看仓库
                </a>
              </div>
            </section>

            <section className="showcaseItem">
              <div className="showcaseItem__media">
                <div className="showcaseMediaBox">
                  <img className="showcaseImgFill" src="/projects/image.png" alt="fAIshion Web 展示图" loading="lazy" />
                </div>
              </div>
              <div className="showcaseItem__text showcaseItem__text--below">
                <div className="showcaseTitle showcaseTitle--xl">fAIshion</div>
                <div className="showcaseDesc">
                  海外穿搭 Agent Web 应用：流式输出、工具调用、多轮上下文管理与规则守卫；插件 + Web 双端联动，异步任务与稳定性策略。
                </div>
                <div className="showcaseTags showcaseTags--glass">
                  {['Next.js', 'Vercel AI SDK', 'Tool Calling', 'Prisma', 'PostgreSQL'].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="showcaseItem">
              <div className="showcaseItem__media">
                <div className="frame frame--glow frame--metric">
                  <div className="phoneWall">
                    <PhoneMockup src="/projects/4.jpg" alt="理财通截图 4" className="phoneShot--left" />
                    <PhoneMockup src="/projects/5.jpg" alt="理财通截图 5" className="phoneShot--center" />
                    <PhoneMockup src="/projects/6.jpg" alt="理财通截图 6" className="phoneShot--right" />
                  </div>
                </div>
              </div>
              <div className="showcaseItem__text">
                <div className="showcaseTitle">理财通</div>
                <div className="showcaseDesc">
                  实时行情与图表交互：MQTT 推送、协议与状态机、轻量图表封装与性能优化，把“数据”做成可读、可用、可复用的 UI。
                </div>
                <div className="showcaseTags">
                  {['MQTT', 'lightweight-charts', 'Ant Design', 'Hooks', '性能优化'].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
