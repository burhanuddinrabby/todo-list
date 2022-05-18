import React, { useState } from 'react';

const Services = ({ todo, index, todos, setTodos }) => {
    const { _id, title, completed, description } = todo;
    const [completedTo, setCompletedTodo] = useState(completed);

    const completedTodo = (id) => {
        todo.completed = !completedTo;
        setCompletedTodo(!completedTo);
        fetch(`https://shielded-sea-23140.herokuapp.com/update-todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo),
        }).then(res => res.json())
            .then(data => {

            });
    }

    const deleteTodo = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?');
        //removing todo from database
        if (confirm) {
            fetch(`https://shielded-sea-23140.herokuapp.com/todo/${id}`, {
                method: 'DELETE',
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = todos.filter(user => user._id !== id);
                        setTodos(remaining);
                    }
                });
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td style={{ textDecoration: `${completedTo ? 'line-through' : 'none'}` }}>{title}</td>
            <td style={{ textDecoration: `${completedTo ? 'line-through' : 'none'}` }}>{description?.length > 90 ? description.slice(0, 90) + '...' : description}</td>
            <td>{completedTo ? <span className='text-success'>Completed</span> : <button className='btn btn-primary' onClick={() => completedTodo(_id)}>Complete</button>}</td>
            <td><button className='btn btn-primary' onClick={() => deleteTodo(_id)}>Delete</button></td>
        </tr>
    );
};

export default Services;