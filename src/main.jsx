import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./components/pages/HomePage.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import GeneralFooter from "./components/GeneralFooter.jsx";

const router = createBrowserRouter([{path: "/", element: <HomePage/>}])


//
// <Route path="/about-me" element={<AboutPage/>}/>
//
// <Route path="/projects" element={<AllProjectsPage/>}/>
//
// <Route path="/technologies" element={<AllTechsPage/>}/>

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <ParticlesBackground/>
        <SocialLinks/>

        <RouterProvider router={router}/>

        <GeneralFooter/>

    </React.StrictMode>,
)
