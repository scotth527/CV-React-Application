import { Button, Form, Label, Input } from 'reactstrap';

export default function FormSection({title="Test", status="Edit", clearForm, formFields=[], formFieldValues, onPersonChange, onEducationInfoChange, isRepeater=false, addItemFunc}) {

    console.log("formFields", formFields);

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
                    // Mapping over formFields and nested fieldGroups
                    

                    formFields.map((fieldGroup, groupIndex) => (
                        <fieldset key={groupIndex}>
                            <legend>Group {groupIndex + 1}</legend>
                            {fieldGroup.map((field, fieldIndex) => (
                                <div className="form-group" key={fieldIndex}>
                                    <label htmlFor={`group-${groupIndex}-field-${fieldIndex}`}>
                                        {field.label}
                                    </label>
                                    <input
                                        id={`group-${groupIndex}-field-${fieldIndex}`}
                                        type={field.type}
                                        defaultValue={field.value}
                                        onChange={(e)=>{onEducationInfoChange( field , e.target.value, groupIndex); }}
                                    />
                                </div>
                            ))}
                        </fieldset>
                    ))
                ) : (
                    <p>No form fields available.</p>
                ) 
                }
             { isRepeater && <Button onClick={addItemFunc}>Add New</Button> }
             <Button color="primary">{status}</Button>
             <Button className='ml-4' onClick={clearForm}>Clear</Button>
        </Form>
        </>
    )
}