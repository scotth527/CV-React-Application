import { Button, Form } from 'reactstrap';

export default function FormSection({title="Test", status="Edit"}) {
    return(
        <>
        <Form action="">
             <h2>{title}</h2>
             <Button color="primary">{status}</Button>
        </Form>
        </>
    )
}