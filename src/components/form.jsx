import { Button, Form, Label, Input } from 'reactstrap';

export default function FormSection({title="Test", status="Edit", clearForm, formFields=[], formFieldValues, onPersonChange, isRepeater=false, addItemFunc}) {

    return(
        <>
        <Form action="">
             <h2>{title}</h2>
              {Array.isArray(formFields) && !isRepeater ? (
                    formFields.map((field, index) => (
                    <div key={index}>
                        <label>{field.label}</label>
                        <input type={field.type} defaultValue={formFieldValues[field.fieldName]} value={formFieldValues[field.fieldName]} onChange={(e)=>{onPersonChange(field.fieldName, e.target.value)}} name={field.name}  />
                    </div>
                    ))
                ) : Array.isArray(formFields) && isRepeater ? (
                    formFields.map((field, index) => (
                        <div key={index}>
                            <label>{field.label}</label>
                            <input type={field.type} defaultValue={formFieldValues[field.fieldName]} value={formFieldValues[field.fieldName]} onChange={(e)=>{onPersonChange(field.fieldName, e.target.value)}} name={field.name}  />
                        </div>
                        ))
                ) : (
                    <p>No form fields available</p>
                ) 
                }

             { isRepeater && <Button onClick={addItemFunc}>Add New</Button> }
             <Button color="primary">{status}</Button>
             <Button className='ml-4' onClick={clearForm}>Clear</Button>
        </Form>
        </>
    )
}