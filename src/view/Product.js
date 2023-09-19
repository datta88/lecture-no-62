import './Product.css';
import { useState } from 'react';
import Img from './Image/gold.jpg';

export default function Product() {

    let [count, setCount] = useState(0);

    function incre() {
        setCount(count + 1)
    }
    function dicre() {
        setCount(count - 1)
    }

    return (
        <>
            <div className='contener'>
                <img src={Img} alt='React Logo' className='img' />
                <div><h3>Hello Good Morning This is <br/> 24 carret gold</h3></div>
                <div className='product-card'>
                    <button onClick={incre} className='btn'> Increment </button>
                    <h1 className='a'>{count}</h1>
                    <button onClick={dicre} className='btn'> Decrement </button>
                </div>
            </div>






        </>
    )
}