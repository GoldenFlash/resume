import SectionTitle from './SectionTitle'
import RichText from './RichText'
import { workExperience, projects, selfEvaluation } from '../data/resume'

export default function MainContent() {
  return (
    <main className="main">
      <section className="section section--work">
        <SectionTitle>工作经历</SectionTitle>
        <div className="main-body">
          <div className="jobs">
            {workExperience.map(({ period, company, position, duties }) => (
              <div className="job" key={period}>
                <div className="job-head">
                  <span>{period}</span>
                  <span>{company}</span>
                  <span>{position}</span>
                </div>
                <ul className="duties">
                  {duties.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--projects">
        <SectionTitle>项目经验</SectionTitle>
        <div className="main-body">
          {projects.map(({ title, intro, stack, link }) => (
            <article className="project" key={title}>
              <h3 className="project-title">{title}</h3>
              <p className="project-line">
                <strong>项目介绍：</strong>
                {intro}
              </p>
              <p className="project-line">
                <strong>技术栈：</strong>
                {stack}
              </p>
              {link && (
                <p className="project-line">
                  <strong>项目地址：</strong>
                  <a className="link" href={link.href}>
                    {link.text}
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--eval">
        <SectionTitle>自我评价</SectionTitle>
        <div className="main-body">
          <ul className="evaluation">
            {selfEvaluation.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
