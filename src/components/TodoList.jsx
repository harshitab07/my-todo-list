import React from 'react'
import TodoItems from './TodoItems';

export default function TodoList({update, setUpdate, todo}) {

    return (
        <section className='bg-zinc-700 rounded-md mt-4 w-full'>
            <ul className='grid grid-cols-1 rounded-md'>
                {todo?.length > 0 ? (
                    todo?.map((item, i) => (
                        <TodoItems key={i} id={item?.id} title={item?.title} description={item?.description} complete={item?.complete || false} setUpdate={setUpdate} />
                    )))
                    : (<p className='text-white text-center p-4'>No items added. Please add!</p>)
                }
            </ul>
        </section>
    )
}