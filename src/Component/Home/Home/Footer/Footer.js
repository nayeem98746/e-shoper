import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                     <div className='col-12 col-lg-10 mx-auto'>
                         <div className='row'>
                             <div className='col-6 col-lg-3'>
                                <h2>Company</h2>
                                <ul>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                </ul>
                             </div>
                             <div className='col-6 col-lg-3'>
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                </ul>
                             </div>
                             <div className='col-6 col-lg-3'>
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                </ul>
                             </div>
                             <div className='col-6 col-lg-3'>
                                <h2>Follow Us</h2>
                                <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-facebook fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-twitter fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                </div>
                             </div>   
                         </div>
                          <hr />
                          <div className='mt-5'>
                          <p className='text-center w-100'>
                              Copyright @ 2022 e-shop. All right Reserved.
                          </p>
                          </div>
                      </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;