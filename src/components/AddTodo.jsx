import React, { useState } from 'react';
import addTodo from '../utils/addTodo';
import { toast } from 'react-toastify';

const AddTodo = ({setUpdate}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = () => {
        if (title.trim() === '' || description.trim() === '') {
            toast.error('Name and description cannot be empty');
        } else {
            addTodo({
                title: title, 
                description: description,
                id: Math.random(),
                complete: false
            });
        }
        setTitle('');
        setDescription('');
        setUpdate(true);
    };

    return (
        <section className='bg-zinc-700 p-8 rounded-md w-full'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-white'>Name</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className='w-full rounded-xl px-4 py-2 focus:outline-none' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-white'>Description</label>
                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} className='w-full rounded-xl px-4 py-2 focus:outline-none' />
                </div>
                <div className='flex justify-center md:justify-end items-center'>
                    <button onClick={handleSubmit} className='bg-blue-500 rounded-full text-white px-4 py-2'>Add Todo</button>
                </div>
            </div>
        </section>
    )
}

export default AddTodo;