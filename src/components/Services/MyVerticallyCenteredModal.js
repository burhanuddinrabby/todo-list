import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
    const { todos, setTodos } = props;


    const addTodo = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const newTodo = { title, description, completed: false };
        setTodos([...todos, newTodo]);
        //adding item to database
        fetch('https://shielded-sea-23140.herokuapp.com/add-todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, completed: false })
        })
        //reset form
        e.target.reset();
        props.onHide();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new todo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='w-75 mx-auto my-5' onSubmit={addTodo}>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Your task Name" name='title' required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Description" name='description' required />
                    </Form.Group>
                    <Button variant="primary" type="submit">Add todo</Button>
                    <br />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant='danger'>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;