

export default function ResumeContainer({personalInfo, educationInfo}) {


    return(
       <div className="p-3">
            <section>
                <h2>Personal Info</h2>
                <p>{personalInfo && personalInfo.firstName} {personalInfo.lastName} </p>
                <p>{personalInfo.email} </p>
                <p>{personalInfo.phone} </p>
            </section>
            <section>
                <h2>Education</h2>
                {educationInfo.map((school)=>(
                    <div key={school.id}>
                    <h4>{school.name}</h4>
                    <p>{school.degree}</p>
                    <p>Attended: {school.startDate}  - {school.endDate} </p>
                    </div>
                ))}
            </section>
            <section>
                <h2>Experience</h2>
            </section>
       </div>
    )
}