import React from 'react'
import html from "../../../assets/html.png"
import css from "../../../assets/css.png"
import javascript from "../../../assets/javascript.png"
import typescript from "../../../assets/ts.png"
import react from "../../../assets/react.png"
import redux from "../../../assets/redux.png"
import tailwind from "../../../assets/tailwind.png"
import git from "../../../assets/git.png"
import postman from "../../../assets/postman.png"
import github from "../../../assets/github.png"
import jest from "../../../assets/jest.png"
import storybook from "../../../assets/storybook.png"
import mui from "../../../assets/mui.png"
import axios from "../../../assets/axios_logo_icon_168545.png"
import {Link as ScrollLink} from 'react-scroll';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-router-dom'
import next from "../../../assets/next.png";

const Techs = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: next,
            title: 'Next.js',
            style: 'shadow-white'
        },
    ]

    return (
        <section name='Technologies' className='relative w-full md:h-screen h-unset'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <h2 className='text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl' >Technologies</h2>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className='w-20 mx-auto py-2 md:py-6' src={src} alt="" />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }
                </div>

                <div className='flex justify-end mr-4'>
                    <Link to='technologies' className='hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center'>
                        See more technologies
                        <MdOutlineKeyboardArrowRight size={20} />
                        </Link>
                </div>
            </div>

            <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    )
}

export default Techs
