import React, {useEffect} from 'react'
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/ts.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import git from "../../assets/git.png";
import postman from "../../assets/postman.png";
import github from "../../assets/github.png";
import jest from "../../assets/jest.png";
import tailwind from "../../assets/tailwind.png";
import storybook from "../../assets/storybook.png";
import mui from "../../assets/mui.png";
import axios from "../../assets/axios_logo_icon_168545.png";
import formik from "../../assets/formik.png";
import next from "../../assets/next.png";
import antd from "../../assets/antd.jpeg";
import shadcn from "../../assets/shadcn.png";
import {Link} from "react-router-dom";

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
        src: next,
        title: 'Next.js',
        style: 'shadow-white'
    },
    {
        id: 4,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 5,
        src: typescript,
        title: 'TypeScript',
        style: 'shadow-blue-500'
    },
    {
        id: 6,
        src: react,
        title: 'React',
        style: 'shadow-blue-600'
    },
    {
        id: 7,
        src: redux,
        title: 'Redux',
        style: 'shadow-purple-500'
    },
    {
        id: 8,
        src: shadcn,
        title: 'Shadcn',
        style: 'shadow-white'
    },
    {
        id: 9,
        src: antd,
        title: 'AntD',
        style: 'shadow-blue-600'
    },
    {
        id: 10,
        src: git,
        title: 'Git',
        style: 'shadow-purple-500'
    },
    {
        id: 11,
        src: postman,
        title: 'Postman',
        style: 'shadow-orange-500'
    },
    {
        id: 12,
        src: github,
        title: 'Github',
        style: 'shadow-white'
    },
    {
        id: 13,
        src: jest,
        title: 'Jest',
        style: 'shadow-green-400'
    },
    {
        id: 14,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
    {
        id: 15,
        src: storybook,
        title: 'Storybook',
        style: 'shadow-pink-400'
    },
    {
        id: 16,
        src: mui,
        title: 'Material UI',
        style: 'shadow-sky-400'
    },
    {
        id: 17,
        src: axios,
        title: 'Axios',
        style: 'shadow-sky-400'
    },
    {
        id: 18,
        src: formik,
        title: 'Formik',
        style: 'shadow-sky-400'
    },
]


const AllTechsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <h2 className='text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl'>Technologies</h2>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>
                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className='w-20 mx-auto py-2 md:py-6' src={src} alt=""/>
                                <p className='mt-4'>{title}</p>
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

export default AllTechsPage
