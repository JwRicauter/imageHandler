import React from 'react';
import './styles/About.scss';

const About = () => {


    return (
        <div className='about'>
            <p>
                In this work I created a hybrid application between django and react. 
                The django template system was used to make a redirection and thus be 
                able to use react with all its potential.
            </p>
            <p>
                The application in django only has one application -api- which contains four main 
                endpoints, detail, create, comment update and list, which are consumed by the project 
                in react. boto3 was used as a library to manage the interactions between our system
                and the aws storage where we store the images.
            </p>
            <p>
                Storybook stories and modularization of all components are also used in the front end system.
                I found difficulties to show dicom files in the image detail since with the cornerstone 
                documentation I couldn't come up with an acceptable solution
            </p>
            <p>
                It would improve many aspects of this project, the first is an error when refreshing the page. 
                I know that I have to better configure the django templates proxy with react but I preferred to 
                relegate it. Improvements in the design of the api, in the user interface (which could use some 
                system such as bootstrap or material), as well as adding all the stories from the storybook, many 
                more unit tests, among others, are pending.
            </p>
        </div>
    )
}

export default About;