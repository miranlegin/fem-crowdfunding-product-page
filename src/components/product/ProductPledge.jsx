const ProductPledge = ({ pledge }) => {
  const { pledgeName, pledgeDescription, pledgeMin, pledgeLeft } = pledge;

  const isLeft = parseInt(pledgeLeft);
  const isActive = isLeft === 0 ? 'inactive' : '';

  return (
    <div className='product__pledge' data-state={isActive}>
      <h3>{pledgeName}</h3>
      <p>Pledge ${pledgeMin} or more</p>
      <p>{pledgeDescription}</p>
      <p>{pledgeLeft} left</p>
      {isLeft !== 0 ? (
        <button>Select Reward</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </div>
  );
};

export default ProductPledge;
