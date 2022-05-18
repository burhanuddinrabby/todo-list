import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useTodos from '../../hooks/useTodo';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Services from './Services';

const LoadServices = () => {
    const [todos, setTodos] = useTodos();
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='mt-5'>
            <div className='w-75 mx-auto mb-5'>
                <Button variant="warning" onClick={() => setModalShow(true)}>
                    Add new todo
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            {
                todos?.length === 0 ? <div className='w-75 mx-auto text-center fs-1 fw-bold'>Loading..</div> :
                    <Table className='w-75 mx-auto' striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo, index) => <Services key={todo._id} todos={todos} setTodos={setTodos} index={index} todo={todo}></Services>)
                            }
                        </tbody>
                    </Table>
            }
        </div>
    );
};

export default LoadServices;