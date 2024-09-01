import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeForm from './components/form';
import ResumeContainer from './components/resumeSections/resumeContainer';

const personalInfoFields = [
  {
   label:'First Name',
   type: 'text',
   fieldName: 'firstName'
  },
  { 
    label: 'Last Name',
    type:'text',
    fieldName: 'lastName'
  },
  {
    label: 'Phone',
    type:'phone',
    fieldName: 'phone'
  }, 
  {
    label: 'Email',
    type: 'email',
    fieldName: 'email'
  }
];

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

  function clearPersonalInfo() {
    setPersonalInfo({});
  }

  function clearEducation() {
    setEducationInfo([]);
  }

  return (
    <div className='d-flex flex-wrap'>
      <div className="container mx-auto">
          <h1>CV Application</h1>
          <ResumeForm title="Personal Info" formFields={personalInfoFields} formFieldValues={{personalInfo}} onChange={{setPersonalInfo}} onPersonChange={handlePersonInfoChange} clearForm={clearPersonalInfo} />
          <ResumeForm title="Education" formFieldValues={educationInfo} clearForm={clearEducation} />
          <ResumeForm title="Skillset" />
      </div>
      <div>
        <ResumeContainer personalInfo={personalInfo} educationInfo={educationInfo}  />
      </div>
    </div>
  )
}

export default App
