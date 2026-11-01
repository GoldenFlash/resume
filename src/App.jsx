import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import './styles/resume.css'

export default function App() {
  return (
    <div className="stage">
      <div className="page">
        <div className="page-inner">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}
