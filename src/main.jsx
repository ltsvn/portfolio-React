import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./components/pages/HomePage.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import GeneralFooter from "./components/GeneralFooter.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import AllProjectsPage from "./components/pages/AllProjectsPage.jsx";
import AllTechsPage from "./components/pages/AllTechsPage.jsx";

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/about-me", element: <AboutPage/>},
    {path: "/projects", element: <AllProjectsPage/>},
    {path: "/technologies", element: <AllTechsPage/>}

], {basename: '/portfolio-React'})


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <ParticlesBackground/>
        <SocialLinks/>

        <RouterProvider router={router}/>

        <GeneralFooter/>

    </React.StrictMode>,
)
