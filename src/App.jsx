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

let defaultPersonalInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
}

let newEducationItem = {
    id: '101',
    name: "Insert info here",
    degree: "",
    startDate: '',
    endDate: '' 
}

let defaultEducationInfoFields = [ 
    {
      label: 'School Name',
      type: 'text',
      fieldName: 'name'
    },
    {
      label: 'Degree',
      type: 'text',
      fieldName: 'degree'
    },
    {
      label: 'Start Date',
      type: 'date',
      fieldName: 'startDate'
    },
    {
      label: 'End Date',
      type: 'date',
      fieldName: 'endDate'
    }
  ]



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
      endDate: 'Present' 
    }]
  )

  const[educationInfoFields, setEducationInfoFields] = useState(
    [defaultEducationInfoFields]
  )

  const[experienceInfo, setExperienceInfo] = useState(
    [
      {
        company: "Nintendo",
        title: "Level Developer",
        startDate: '12/28/2009',
        endDate: "Present",
        description: "Designed the levels to the latest Mario Game"
      }
    ]
  )

  function handlePersonInfoChange(field, value) {
    console.log("Field", field, "Value", value);
    setPersonalInfo({
      ...personalInfo,
      [field]: value,
    });
  }

  function clearPersonalInfo() {
    setPersonalInfo(defaultPersonalInfo);
  }

  function clearEducation() {
    setEducationInfo([]);
  }

  //Add new item 
  function addEducationItem() {
    setEducationInfoFields(
      [...educationInfoFields, defaultEducationInfoFields]
    );

    setEducationInfo(
      [...educationInfo, newEducationItem]
    );
  }

  return (
    <div className='d-flex flex-wrap'>
      <div className="container mx-auto">
          <h1>CV Application</h1>
          <ResumeForm title="Personal Info" formFields={personalInfoFields} formFieldValues={personalInfo} onPersonChange={handlePersonInfoChange} clearForm={clearPersonalInfo} />
          <ResumeForm title="Education" formFields={educationInfoFields} formFieldValues={educationInfo} clearForm={clearEducation} isRepeater={true} addItemFunc={addEducationItem} />
          <ResumeForm title="Experience" isRepeater={true}  />
      </div>
      <div>
        <ResumeContainer personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
      </div>
    </div>
  )
}

export default App
