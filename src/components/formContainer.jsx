
import { Button, Form } from 'reactstrap';
import { FormSection } from 'form';

export default function FormContainer({title="Test", status="Edit", clearForm, formFields, formFieldValues, onPersonChange=()=>{}, isRepeater, addItemFunc }) {

    function submitForm() {
        
    }

    function toggleEditSubmit() {
        
    }

    function validateFields() {

    }

    return(
        <>
            <FormSection title status clearForm formFields formFieldValues onPersonChange isRepeater addItemFunc />
        </>
    )
}