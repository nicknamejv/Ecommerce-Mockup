import React from 'react';
import aboutImg from '../../assets/images/AboutImg.png'
import '../About/about.css';

const About = () => {
    return (
        <div id="about">
            <div className="about-section">
                <div className="about-column-left">
                    <div className="about-info">
                        <p className='about-title'>instashop</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, quae. Recusandae minus nisi quae, expedita blanditiis vitae. Odit repellat earum consectetur veniam quos ex, voluptatem assumenda impedit obcaecati asperiores facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo porro hic distinctio reprehenderit exercitationem eius eveniet consequatur obcaecati ea. Quisquam autem repellat, accusamus facilis aperiam illum enim pariatur quam ducimus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum voluptates, autem enim quasi ad recusandae, labore delectus rerum voluptatem aliquid totam consequatur est debitis quam, hic voluptatum provident tenetur.</p>
                    </div>
                </div>
                <div className="about-column-right">
                    <img src={aboutImg} alt="about-img" />
                </div>
            </div>
        </div>
    )
}

export default About;