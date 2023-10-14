const ProductIntro = ({ data }) => {
  const { productName, productDescription } = data;

  return (
    <div className='card'>
      <img src='/logo-mastercraft.svg' alt='' />
      <h1>{productName}</h1>
      <p>{productDescription}</p>
      <button>Back this project</button>
      <button>
        <img src='/icon-bookmark.svg' />
        <span>Bookmark</span>
      </button>
    </div>
  );
};

export default ProductIntro;
