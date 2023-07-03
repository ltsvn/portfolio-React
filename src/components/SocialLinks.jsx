import React from "react";
import {FaFileDownload, FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import cv from '/public/Anastasiia_Lutsiv_CV.pdf'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/anastasiia-lutsiv/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/ltsvn'
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:nastaluciv@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                Resume <FaFileDownload size={30} />
                </>
            ),
            href: 'Anastasiia_Lutsiv_CV.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className="hidden desktop:flex flex-col top-[35%] left-0 fixed z-30">
            <ul>
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-primary-color/90 ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px]" + " " + style }>
                        <a href={href} className="flex justify-between items-center w-full text-black font-semibold ml-4" download={download} target="_blank" rel="noreferrer">
                        {child}
                        </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default SocialLinks;
