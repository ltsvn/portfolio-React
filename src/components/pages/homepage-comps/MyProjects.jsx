import React from 'react'
import fitnessapp from '/public/images/projectsImages/fitnessApp.png'
import socialnetwork from '/public/images/projectsImages/socialNetwork.png'
import todolist from '/public/images/projectsImages/Screenshot 2023-07-02 at 23.23.24.png'
import relvise from '/public/images/projectsImages/relvise.png'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const MyProjects = () => {

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
            name: 'Social Network',
            src: socialnetwork,
            demo: 'https://ltsvn.github.io/React_Social_Network/',
            code: 'https://github.com/ltsvn/React_Social_Network',
            status: 'In progress'
        },
        {
            id: 3,
            name: 'Relvise',
            src: relvise,
            demo: 'https://ltsvn.github.io/RELVISE/',
            code: 'https://github.com/ltsvn/RELVISE',
            status: 'Finished'
        },
        {
            id: 4,
            name: 'ToDo List',
            src: todolist,
            demo: 'https://ltsvn.github.io/ToDoList/',
            code: 'https://github.com/ltsvn/ToDoList',
            status: 'In progress'
        },
        // {
        //     id: 5,
        //     src: weatherapp,
        //     demo: 'https://weatherappbydt.netlify.app/',
        //     code: 'https://github.com/diegotellezc/weather-app'
        // },
        // {
        //
        //     id: 6,
        //     src: rickandmorty,
        //     demo: 'https://rickandmorty-bydt.netlify.app/',
        //     code: 'https://github.com/diegotellezc/RickAndMortyApp'
        // }
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
        <section name="Projects" className='relative w-full text-white md:h-screen h-unset'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mb-4'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1'>Projects</h2>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6'>
                    {
                        projects.map(({ id,name, src, demo, code, status }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto hover:transform hover:scale-110 transition duration-300'>
                                    <div className='text-center m-5 '>{name}</div>
                                    <img src={src} alt="project card" className='rounded-md duration-200 ' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 '>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 '>Code</button>
                                    </div>
                                    <p className={status === 'Finished' ? 'text-green-500' : 'text-red-500'} style={{ margin: '10px' }}>{status}</p>
                                </div>
                        ))
                    }
                </div>

                <div className='flex justify-end mr-4'>
                    <Link to='projects' className='hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center'>
                        See more projects
                        <MdOutlineKeyboardArrowRight size={20} />
                        </Link>
                </div>
            </div>

            <ScrollLink to="Technologies" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    )
}

export default MyProjects
