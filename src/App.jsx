import data from './data/pledges.json';
import './styles/main.scss';

import Product from './components/product/Product';
import Selector from './components/selector/Selector';
import Confirmation from './components/confirmation/Confirmation';

function App() {
  return (
    <>
      <Product data={data}></Product>
      {/* <Selector data={data}></Selector> */}
      {/* <Confirmation></Confirmation> */}
    </>
  );
}

export default App;
