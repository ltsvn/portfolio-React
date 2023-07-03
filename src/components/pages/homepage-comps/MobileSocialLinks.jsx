import React from "react";
import {FaFileDownload, FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import cv from '/public/Anastasiia_Lutsiv_CV.pdf';

const MobileSocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} /> LinkedIn
                </>
            ),
            href: 'https://www.linkedin.com/in/anastasiia-lutsiv/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} /> GitHub 
                </>
            ),
            href: 'https://github.com/ltsvn'
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={20} /> Mail
                </>
            ),
            href: 'mailto:nastaluciv@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    <FaFileDownload size={20} /> Resume
                </>
            ),
            href: 'Anastasiia_Lutsiv_CV.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className="flex mt-4 desktop:hidden">
            <ul className="flex gap-2 flex-wrap justify-center">
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" + " " + style }>
                            <a href={href} className="flex gap-3 items-center w-full text-white text-sm" download={download} target="_blank" rel="noreferrer">
                            {child}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default MobileSocialLinks;
