import React from 'react';
import '../Body/body.css';
import BodyImg from '../../assets/images/BodyImg.png';

const Body = () => {
    return (
        <div id="body">
            <div className="body-row">
                <div className="img-column">
                    <img src={BodyImg} alt="body-img" />
                </div>
                <div className="text1">
                    <ul className='text-col1'>
                        <li>
                            Part of our responsible edit
                        </li>
                        <li>
                            Waterproof up to 10,000mm
                        </li>
                        <li>
                            10,000gm breathable
                        </li>
                        <li>
                            Signature printed lining
                        </li>
                        <li>
                            Two internal pockets
                        </li>
                        <li>
                            Adjustable hood
                        </li>
                        <br />
                        <li class="text-col-bottom">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est rem assumenda ipsa cum! Veritatis quisquam quam eveniet. Quidem odit quos harum cum est hic nobis eligendi autem voluptatem repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur, magnam optio quis error saepe id accusantium animi dignissimos necessitatibus sequi, sunt, repellat vitae nulla maiores culpa nam rerum repudiandae?
                        </li>
                    </ul>
                </div>
                <div className="text2">
                    <ul className='text-col2'>
                        <li>
                            Funnel neck
                        </li>
                        <li>
                            Storm placket
                        </li>
                        <li>
                            Long Sleeves
                        </li>
                        <li>
                            Adjustable wrist cuffs with built
                        </li>
                        <br />
                        <br />
                        <br />
                        <li className='text-col-bottom'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, incidunt. Deleniti saepe reiciendis, iste perspiciatis, ducimus inventore, quo nisi nemo cum ratione accusamus adipisci repudiandae voluptatibus consequatur illum debitis enim?
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body;