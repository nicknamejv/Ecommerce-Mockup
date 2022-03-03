import React from 'react';
import { productData } from '../../data/productData';
import '../Product/product.css';

const Product = () => {
    return (
        <div id="product">
            {productData.map((product) => (
                <div className='product-list'>
                    <p>{product.name}</p>
                    <img
                        src={require(`../../assets/images/${product.fileName}.png`)}
                        alt={product.name}
                    />
                    {/* <>
                        {
                            product.sale 
                            ? 
                            <p>{product.price}</p>
                            <p>{product.salePrice}</p>
                            :
                            <p>{product.price}</p>
                        }
                    </> */}
                    <p>{product.price}</p>
                    <p>{product.salePrice}</p>
                </div>
            ))}
        </div >
    )
}

export default Product;