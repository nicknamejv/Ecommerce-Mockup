import React from 'react';
import '../Contact/contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <div className='contact-bg'>
                <div className='contact-form'>
                    <section className='contact-top'>
                        <p>Newsletter via e-mail</p>
                        <input type="text" name="email" id="contact-email" />
                        <a href="#" className='contact-subscribe'>Subscribe</a>
                    </section>
                    <div className='contact-radio'>
                        <input type="checkbox" name="checkbox" id="email-checkbox" />
                        <p>
                            I have been able to read and understand the information on the use of my personal data explained in the <a href="#"><span style={{ textDecoration: 'underline', color: '#D9624E' }}>privacy policy.</span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='contact-footer'>
                <div className="contact-footer-top">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis odio explicabo inventore quo, officia voluptas labore nihil! Minus blanditiis consequuntur labore ipsa? Consectetur labore fugiat voluptate, ea doloremque deleniti eum.
                    </p>
                </div>
                <div className="contact-footer-bottom">
                    <ul className='product-category'>
                        <a href="#"><li>Shoe</li></a>
                        <a href="#"><li>Bag's</li></a>
                        <a href="#"><li>T-shirts</li></a>
                        <a href="#"><li>Pants</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;