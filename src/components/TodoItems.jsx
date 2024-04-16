import React, { useEffect, useState } from 'react';
import deleteTodo from '../utils/deleteTodo';
import { toast } from 'react-toastify';
import updateTodo from '../utils/updateTodo';

export default function TodoItems({ id, title, description, complete, setUpdate }) {

    const handleDelete = (id) => {
        deleteTodo({id});
        toast.success('Item deleted successfully');
        setUpdate(true);
    }

    const handleComplete = (id) => {
        updateTodo({id});
        toast.success('Item updated successfully');
        setUpdate(true);
    }

    return (
        <li className=' w-full p-4 border-2 border-zinc-700 border-b-zinc-900'>
            <div className='flex flex-col justify-between items-center md:flex-row'>
                <div className='flex flex-col'>
                    <div className={`${!complete ? "text-green-500" : " line-through text-gray-500"} text-2xl `}>
                        {title}
                    </div>
                    <div className={`${!complete ? "text-white" : " line-through text-gray-500"} `}>
                        {description}
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    {!complete &&
                        <button onClick={() => handleComplete(id)} className='rounded-full bg-white font-semibold p-1 px-2 bg-green-500 text-white text-center'>
                            Complete
                        </button>
                    }
                    <button onClick={() => handleDelete(id)} className='rounded-full bg-red-400 font-semibold p-1 px-3 text-white'>
                        Delete
                    </button>
                </div>
            </div>
        </li>
    )
};

