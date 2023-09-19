import ReactDOM from 'react-dom/client';
import Product from './view/Product';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='index-contener'>
  <Product/>
  <Product/>
  <Product/>
  </div>
);