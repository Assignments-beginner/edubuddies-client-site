import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    const [formMsg, setFormMsg] = useState(true);

  
    const handleFormSubmit = (event) => {
        event.preventDefault();
  
        emailjs.sendForm(
            'service_nv4khp1', //service ID
            'template_dka5cee', //template id
            event.target,
            'user_LHVMNnpoRh5NOCx3QAi6S' //user ID
        ).then(result => {
            console.log('contact me result', result);
  
            
  
            if (result.status === 200) {
                setFormMsg(false)
                let timerInterval
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thanks you!',
                    text: 'Thanks! We will get back to you as soon as possible.',
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
  
        }).catch(error => {
            console.log('error', error);
            // setFormMsg(error)
        })
        event.target.reset();
    }





    return (
        <div className="contact">
            <div className="contact-box">
                
                {/* <form className="contact-form" onsubmit="sendEmail(); reset(); return false;"> */}
                <form className="contact-form" onSubmit={handleFormSubmit} >
                    <h3>GET IN TOUCH</h3>
                    <input type="text" id="name" name="User Name" placeholder="Your Name" required />
                    <input type="email" id="email" placeholder="Your Email" required name="email"/>
                    <input type="text" id="phone" placeholder="Your Phone No." required />
                    <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;