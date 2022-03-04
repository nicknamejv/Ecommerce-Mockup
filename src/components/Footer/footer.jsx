import React from "react";
import "../Footer/footer.css";
import SocialImg from "../../assets/images/social.png";
import PayPalImg from "../../assets/images/PayPal.svg.png";
import VisaImg from "../../assets/images/visa.png";
import MastercardImg from "../../assets/images/Mastercard.png";

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-contact">
                <ul className="footer-col1">
                    <li className="footer-contact-title">Services</li>
                    <a href="#">
                        <li>Sale</li>
                    </a>
                    <a href="#">
                        <li>Men's collection</li>
                    </a>
                    <a href="#">
                        <li>Woman's collection</li>
                    </a>
                </ul>
                <ul>
                    <li className="footer-contact-title">Company</li>
                    <a href="#">
                        <li>About Us</li>
                    </a>
                    <a href="#">
                        <li>Stores location</li>
                    </a>
                    <a href="#">
                        <li>Contact Us</li>
                    </a>
                </ul>
                <ul>
                    <li className="footer-contact-title">Help</li>
                    <a href="#">
                        <li>Clothing care</li>
                    </a>
                    <a href="#">
                        <li>Shoe care</li>
                    </a>
                    <a href="#">
                        <li>Delivery</li>
                    </a>
                </ul>
                <ul>
                    <li className="social-media">
                        <img src={SocialImg} alt="social" />
                    </li>
                    <hr />
                    <section className="credit-list">
                        <li className="credit-card">
                            <img src={MastercardImg} alt="mastercard" />
                        </li>
                        <li className="credit-card">
                            <img src={VisaImg} alt="visa" />
                        </li>
                        <li className="credit-card">
                            <img src={PayPalImg} alt="paypal" />
                        </li>
                    </section>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
