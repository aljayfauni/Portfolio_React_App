 import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data_skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Programming- HTML/CSS, JavaScript, JSON, PHP, Visual Basic.Net (CRUD), Basic C# (Crud), Basic Python, Java8/Android, OOP
Frameworks / Libraries - Laravel, JQuery, Materialize CSS, Tailwind , Bootstrap, Basic ReactJS, Basic VueJS, Basic NodeJS
Databases - MySQL, MSSQL, PostgreSQL, MongoDB, Firebase.
Tools - Xampp, Wamp, Visual Studio, Postman 
Basic version control - (Git/GitHub), 
Design tools - Adobe Photoshop, Adobe Illustrator.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      
        </div>
      </div>
    </section>
  );
}