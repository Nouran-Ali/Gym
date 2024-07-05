import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { selectTasks, setTaskList } from '../features/taskSlice';

const Home = () => {

    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const parsedTasks = JSON.parse(storedTasks);
            dispatch(setTaskList(parsedTasks));
        }
    }, [dispatch]);

    return (
        <div className='scrollStyle'>
            {
                tasks != 0 ? <TaskList tasks={tasks} /> :
                    <div className='flex justify-center items-center mt-20 max-xl:mt-3'>
                        <div>
                            <dotlottie-player
                                src="https://lottie.host/8c3d1a45-fde2-41e8-bace-9bcd50c0ff8e/rWWLhi6IOn.json"
                                background="transparent"
                                speed="1"
                                style={{ width: "200px", height: "200px" }}
                                loop
                                autoplay
                            ></dotlottie-player>
                            <p className='text-[#666666] text-center'>No tasks added</p>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Home