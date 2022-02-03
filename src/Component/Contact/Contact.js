import React from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const handleContactSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_uwd00mm','template_qq4n27d',e.target,
        'user_z70rTODekCC0VrP6by2Ys')
        .then(res=>{
            if(res.status == 200){
                alert(`
                Thanks for Your Feedback !
                We will reach you soon`)
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="container my-5">
            <div className="main-container">
                <div className="input-container p-5 shadow">
                    <h5 style={{color:'orange'}}>Get In Touch</h5>
                    <h3>Write Us A Message</h3>
                    <form onSubmit={handleContactSubmit}>
                        <div className="inner-input mt-4">
                            <div className='form-group'>
                                <label htmlFor="name">Your Name:</label>
                                <input 
                                type="text"
                                name="name"
                                className="form-control"
                                
                                id="inputName3"
                                label="name" 
                                required/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="subject">Your Subjects:</label>
                                <input 
                                type="text"
                                name="subject"
                                className="form-control"
                                
                                id="inputSubject3"
                                label="subject" 
                                required/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Your Email:</label>
                                <input 
                                type="email"
                                name="email"
                                className="form-control"
                                
                                id="inputEmail3"
                                label="email" 
                                required/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="phone">Your Phone:</label>
                                <input 
                                type="number"
                                name="phone"
                                className="form-control"
                                
                                id="inputPhone3"
                                label="phone" 
                                required/>
                            </div>
                        </div>
                        <div style={{marginTop:'30px', marginBottom:'20px'}} className='form-group'>
                                <label htmlFor="message">Your Message:</label>
                                <textarea style={{height:'150px'}} 
                                name="message"
                                className="form-control"
                                
                                id="inputMessage3"
                                label="message" 
                                required/>
                        </div>
                        <input className='btn btn-dark' type="submit" name="" id="" value="SEND MESSAGE" />
                    </form>
                        
                </div>
                <div className="info-container p-5 shadow">
                    <div>
                        <h5 style={{color:'orange'}}> <i class="fas fa-phone-square-alt"></i> Call Us Now:</h5>
                        <p>+8801648308424</p>
                    </div>
                    <div style={{margin:'30px 0'}}>
                        <h5 style={{color:'orange'}}> <i class="fas fa-envelope"></i> Email:</h5>
                        <p>dev.Abdurrahman01@gmail.com</p>
                    </div>
                    <div>
                        <h5 style={{color:'orange'}}> <i class="fas fa-location-arrow"></i> Our Address:</h5>
                        <p>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;