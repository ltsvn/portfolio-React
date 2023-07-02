import React from 'react'
import aboutME from '/public/images/me.jpeg'

const AboutSectionAbout = () => {
    return (
        <section name="About" className="relative w-full min-h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-full px-4 py-8 md:py-16 lg:py-0 lg:flex-row lg:gap-8 mt-40">
                <div className="flex mt-8 md:mt-0">
                    <img
                        src={aboutME}
                        alt="My profile"
                        className="rounded-2xl mx-auto w-full md:w-2/3 max-w-lg object-cover shadow-2xl shadow-primary-color/20"
                        style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }}
                    />
                </div>

                <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Who I am?</h1>

                    <div className="flex items-center bg-primary-color/20 rounded-md py-2 px-4 mb-4">
                        <img className="h-6 w-auto mr-2" src="/icons/icons8-country-67.png" alt="country" />
                        <h2 className="text-base md:text-2xl md:py-1 font-semibold text-white">Ukrainian - 21 years old</h2>
                    </div>

                    <p className="text-sm md:text-lg text-gray-300 py-4 max-w-md text-center">
                        My story began on the paths of psychological management but quickly transformed into an exciting adventure in the world of IT.
                        With great enthusiasm and a dream in my heart, I set off from Ukraine to pursue studies in psychology with a focus on management.
                        However, fate led me to an entirely different realm.
                    </p>

                    <p className="text-sm md:text-lg text-gray-300 py-4 max-w-md text-center">
                        Already on my second year of studies, I decided to test my skills in recruiting and started working as a recruiter at a job agency.
                        Yet, I always had a dream of becoming a recruiter/HR manager in an IT company, and I managed to make that dream come true.
                        During nine months of working with programmers, my interest in technology grew, and I frequently attended technical interviews as an observer.
                        From that moment on, my adventure with programming began.
                    </p>

                    <p className="text-sm md:text-lg text-gray-300 py-4 max-w-md text-center">
                        Thus, my captivating journey into the world of programming commenced. Each day brings new challenges and discoveries,
                        and programming has become a true passion for me.
                        Regardless of the path I choose for my career, I am confident that my steps will always be intertwined with code and technology.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionAbout
