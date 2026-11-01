import SectionTitle from './SectionTitle'
import { profile, personalInfo, education } from '../data/resume'

function InfoList({ items }) {
  return (
    <dl className="info-list">
      {items.map(({ label, value }) => (
        <div className="info-row" key={label}>
          <dt className="info-label">{label}</dt>
          <dd className="info-value">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="profile">
        <img className="avatar" src={profile.avatar} alt={profile.name} />
        <h1 className="name">{profile.name}</h1>
        <p className="intention">{profile.intention}</p>
      </header>

      <section className="section">
        <SectionTitle>个人信息</SectionTitle>
        <InfoList items={personalInfo} />
      </section>

      <section className="section">
        <SectionTitle>教育背景</SectionTitle>
        <InfoList items={education} />
      </section>
    </aside>
  )
}
