import React from 'react';
import { productData } from '../../data/productData';
import '../Product/product.css';

const Product = () => {
    return (
        <div id="product">
            {productData.map((product) => (
                <div className='product-list'>
                    <div>
                        <p style={{
                            fontWeight: '300',
                            display: 'flex',
                            zIndex: '99',
                            position: 'absolute',
                            margin: '40px',
                            fontWeight: '400',
                            color: '#DD604A'
                        }}>
                            {product.salePercent}
                        </p>
                        <p style={{
                            fontWeight: '300',
                            display: 'flex',
                            zIndex: '99',
                            position: 'absolute',
                            margin: '40px',
                            fontWeight: '400',
                            color: '#474747'
                        }}>
                            {product.shipping}
                        </p>
                    </div>
                    <img
                        src={require(`../../assets/images/${product.fileName}.png`)}
                        alt={product.name}
                    />
                    <p>{product.name}</p>

                    {/* Using the data file I can conditional render what I need if I create a conditional and return statement */}

                    {(() => {
                        if (product.sale === true) {
                            return (
                                <div style={{ display: 'flex', gap: '15px', fontWeight: '300' }}>
                                    <p style={{ textDecoration: 'line-through', color: '#767676' }}>
                                        {product.price}
                                    </p>
                                    <p style={{ color: '#D28072' }}>
                                        {product.salePrice}
                                    </p>
                                </div>
                            )
                        } else {
                            return (
                                <>
                                    <p style={{ fontWeight: '300' }}>
                                        {product.price}
                                    </p>
                                </>
                            )
                        }
                    })()}
                </div>
            ))}
        </div>
    )
}

export default Product;