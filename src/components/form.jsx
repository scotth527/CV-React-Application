import { Button, Form, Label, Input } from 'reactstrap';

export default function FormSection({title="Test", status="Edit", clearForm, formFields=[], formFieldValues, onChange}) {

    console.log(formFields)

    return(
        <>
        <Form action="">
             <h2>{title}</h2>
              {Array.isArray(formFields) ? (
                    formFields.map((field, index) => (
                    <div key={index}>
                        <label>{field.label}</label>
                        <input type={field.type} value={formFieldValues[field.fieldName]} onChange={(e)=>{onChange(field.fieldName, e.target.value)}} name={field.name} value={field.value || ''} />
                    </div>
                    ))
                ) : (
                    <p>No form fields available</p>
                )}
             <Button color="primary">{status}</Button>
             <Button className='ml-4' onClick={clearForm}>Clear</Button>
        </Form>
        </>
    )
}