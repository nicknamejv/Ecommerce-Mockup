import React from 'react';
import './cover.css';
import CoverImg from '../../assets/images/CoverImg.png'

const Cover = () => {
    return (
        <div id="cover">
            <img src={CoverImg} id='cover-bg' alt="cover-img" />
            <div className='cover-box'>
                <section className='cover-right'>
                    <h1 className='cover-title'>SHOES GALORE</h1>
                    <h3 className='cover-year'>2022</h3>
                    <a href="#">
                        <p className='cover-text'>Discover now</p>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Cover;