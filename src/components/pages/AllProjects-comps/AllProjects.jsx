import React from 'react'
import { Link } from 'react-router-dom'

import fitnessapp from '/public/images/projectsImages/fitnessApp.png'
import socialnetwork from '/public/images/projectsImages/SocialNetwork.png'
import todolist from '/public/images/projectsImages/Screenshot 2023-07-02 at 23.23.24.png'
import relvise from '/public/images/projectsImages/relvise.png'
import ewmar from '/public/images/projectsImages/ewmar.png'
const AllProjects = () => {

    const projects = [
        {
            id: 1,
            name: 'Fitness App',
            src: fitnessapp,
            demo: 'https://ltsvn.github.io/myFitnessApp/',
            code: 'https://github.com/ltsvn/myFitnessApp',
            status: 'Finished'
        },
        {
            id: 2,
            name: 'EWMAR',
            src: ewmar,
            demo: 'https://www.firmaewmar.com/',
            code: 'https://github.com/ltsvn/Ewmar',
            status: 'Finished'
        },
        // {
        //     id: 1,
        //     name: 'Fitness App',
        //     src: fitnessapp,
        //     demo: 'https://ltsvn.github.io/myFitnessApp/',
        //     code: 'https://github.com/ltsvn/myFitnessApp',
        //     status: 'Finished'
        // },
        {
            id: 3,
            name: 'Social Network',
            src: socialnetwork,
            demo: 'https://ltsvn.github.io/React_Social_Network/',
            code: 'https://github.com/ltsvn/React_Social_Network',
            status: 'In progress'
        },
        {
            id: 4,
            name: 'Relvise',
            src: relvise,
            demo: 'https://ltsvn.github.io/RELVISE/',
            code: 'https://github.com/ltsvn/RELVISE',
            status: 'Finished'
        },
        {
            id: 5,
            name: 'ToDo List',
            src: todolist,
            demo: 'https://ltsvn.github.io/ToDoList/',
            code: 'https://github.com/ltsvn/ToDoList',
            status: 'In progress'
        }
    ]

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }


    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
