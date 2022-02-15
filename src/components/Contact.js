import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {BiPhone} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr'
import { socialdata } from './data';
import {SocialLinks} from './SocialLinks';

export const Contact = () => {
    const socialList = socialdata.map( element => {
        return(
            <SocialLinks
                src = {element.src}
                logo = {element.logo}
            />
        )
    })

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxk3skf', 'template_zl9qz67', form.current, 'user_4qEGUFWqdcsuOHL8qmdY2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
        <h1 style = {{textAlign: "center"}}></h1>
        <div className='Contact'>
            <h4 style = {{textAlign: "center"}}>get in touch!</h4>
            <h1 style = {{textAlign: "center"}}>CONTACT</h1>
            <div className='contactcontainer'>
                <div className='innercontactone'>
                    <a href='tel:03092379137'><h3>{<BiPhone style = {{paddingRight: "10px"}}/>}03092379137</h3></a>
                    <a href='mailto:muzzammilzia20@gmail.com'><h3>{<AiOutlineMail style = {{paddingRight: "10px"}}/>}muzzammilzia20@gmail.com</h3></a>
                    <a><h3>{<GrLocation style = {{paddingRight: "10px"}}/>}Karachi Pakistan</h3></a>
                    <div className='SocialLinksContainer'>
                        {socialList}
                    </div>

                </div>
                <div className='innercontacttwo'>
                    <form ref = {form} onSubmit={sendEmail}>
                        <div>Your Name</div>
                        <input placeholder='Name' name='name' className='inputfields'/>
                        <div>Your Email</div>
                        <input placeholder='Email' name='email' className='inputfields'/>
                        <div>Your Message</div>
                        <textarea cols="34" rows = "10" name='message'></textarea>
                        <button type = "submit">Send!</button>
                    </form>    
                </div>
            </div>
            <br/><br/>
        </div>
        </>
    );
}