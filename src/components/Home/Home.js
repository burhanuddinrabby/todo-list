import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className='mt-5'>
            <div className='d-flex align-items-center' style={{ height: '100%' }}>
                <div className='my-5 w-75 mx-auto text-center'>
                    <h1>Organize your</h1>
                    <h1>work and life, finally.</h1>
                    <p>Become focused, organized, and calm with Todoist. <br /> The world's #1 task manager <br />
                        and to-do list app.</p>

                    <Button as={Link} to='todo-list' className='btn btn-primary'>Go to todo list</Button>
                </div>
            </div>
        </div>
    );
};

export default Body;