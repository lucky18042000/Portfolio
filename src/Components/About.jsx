import React from "react";
import image from "../../src/assets/Western Man.png";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={image}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p>About</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a self-taught individual Who is very motivated to work toward
              future technology with love and passion. I am a highly passionate
              individual who takes the initiative and considers the future. I
              value teamwork, and smart work above hard effort, and I enjoy
              getting to know new people and sharing future knowledge with them.
              I'm constantly searching for methods to improve and succeed. I
              want to work in a positive atmosphere where I can use my knowledge
              and abilities to the best of my ability, contribute to the
              company's success, and hone my technical and people skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
