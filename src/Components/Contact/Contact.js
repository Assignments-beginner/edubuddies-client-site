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
        <div className="contact py-16">


<div className="contact-map px-7 mx-5">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1312072706355!2d91.41332071455426!3d22.982202184973552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f065795d95%3A0xf921aca48f8cf70a!2sDhaka%20-%20Chittagong%20Hwy%2C%20Bangladesh!5e0!3m2!1sen!2sde!4v1646679709300!5m2!1sen!2sde" width="600" height="auto"  loading="lazy"></iframe>
</div>



{/* <div>
    <p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703965239!2d90.27923822956306!3d23.780573256519364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sde!4v1646677948094!5m2!1sen!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </p>
</div> */}

            <div className="contact-box">                
                {/* <form className="contact-form" onsubmit="sendEmail(); reset(); return false;"> */}
                <form className="contact-form" onSubmit={handleFormSubmit} >
                    <h3 className="mt-4 text-2xl">GET IN TOUCH</h3>
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