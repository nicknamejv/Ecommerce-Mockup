import React from 'react';
import '../Sale/sale.css';
import ProductImg from '../../assets/images/ProductImg.png';

const Sale = () => {
    return (
        <div id="sale">
            <div id='vans-img'>
                <img src={ProductImg} alt="sale" className='saleImg' />
            </div>
            <div className='sale-image'>
                <section className='sale-right'>
                    <p>
                        70% off
                    </p>
                    <a href="#" style={{
                        textDecoration: 'none'
                    }}>
                        <p style={{
                            border: '1px solid white',
                            padding: '25px',
                            width: '250px',
                            color: 'white'
                        }}>
                            Shop now
                        </p>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Sale;