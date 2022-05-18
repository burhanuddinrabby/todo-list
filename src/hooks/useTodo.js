import { useEffect, useState } from 'react';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://shielded-sea-23140.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);
    return [todos, setTodos];
};

export default useTodos;