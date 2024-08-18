import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeForm from './components/form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container mx-auto">
          <h1>CV Application</h1>
          <ResumeForm title="Personal Info" />
          <ResumeForm title="Education" />
          <ResumeForm title="Skillset" />
      </div>
    </>
  )
}

export default App
