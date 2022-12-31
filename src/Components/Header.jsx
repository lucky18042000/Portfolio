import React from 'react'
import image from '../../src/assets/Western Man.png'

function Header() {
    return (
        <div className='header'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-4 py-20 lg:px-20 lg:pt-36 md:px-5 md:py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className='header-firstpara'>Hey I am Rohit</p>
                        <h1 className="header-main title-font  mb-4">I am a <span className='header-profile'>Front End Developer</span>
                            <br className="hidden lg:inline-block"/>
                        </h1>
                        <p className="mb-8 leading-relaxed">There are a lot of reasons why someone might want to become a front end developer: Money,Challenge,Impact But I Started to Learn Front End Just Because I Like it</p>
                        <div className="flex justify-center">
                            <button className="header-button  inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-3 focus:outline-none rounded hover:shadow-2xl">Get In Touch</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded " alt="hero" src={image}></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
