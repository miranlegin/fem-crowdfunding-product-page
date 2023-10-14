import ProductIntro from './ProductIntro';
import ProductStats from './ProductStats';
import ProductPledgesHolder from './ProductPledgesHolder';

const Product = ({ data }) => {
  return (
    <div className='container'>
      <ProductIntro data={data}></ProductIntro>
      <ProductStats data={data}></ProductStats>
      <ProductPledgesHolder data={data}></ProductPledgesHolder>
    </div>
  );
};

export default Product;
