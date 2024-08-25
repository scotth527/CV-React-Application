import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeForm from './components/form';
import ResumeContainer from './components/resumeSections/resumeContainer';

function App() {
  const [count, setCount] = useState(0)

  const[personalInfo, setPersonalInfo] = useState({
    firstName: "Test",
    lastName: "Test Last Name",
    email: "test@aol.com",
    phone: "3042342345"
  })

  const[educationInfo, setEducationInfo] = useState(
    [{id:"434",
      name: "Kensington",
      degree: "Elementary Certificate",
      startDate: '12/2003',
      endDate: 'PResent' 
    }]
  )

  function handlePersonInfoChange(field, value) {
    setPersonalInfo({
      ...personalInfo,
      [field]: value,
    });
  }

  return (
    <div className='d-flex flex-wrap'>
      <div className="container mx-auto">
          <h1>CV Application</h1>
          <ResumeForm title="Personal Info" formFieldValues={{personalInfo}} onChange={{setPersonalInfo}} onPersonChange={handlePersonInfoChange} />
          <ResumeForm title="Education" />
          <ResumeForm title="Skillset" />
      </div>
      <div>
        <ResumeContainer personalInfo={personalInfo} educationInfo={educationInfo} />
      </div>
    </div>
  )
}

export default App
