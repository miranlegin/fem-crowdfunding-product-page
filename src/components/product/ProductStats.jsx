const ProductStats = ({ data }) => {
  const { backedTotal, backedMax, backersTotal, daysLeft } = data;

  const numberDelimiter = (number) => {
    return parseInt(number).toLocaleString('en-US');
  };

  return (
    <div className='card'>
      <ul>
        <li>
          <strong>${numberDelimiter(backedTotal)}</strong>
          <br />
          of ${numberDelimiter(backedMax)} backed
        </li>
        <li>
          <strong>{numberDelimiter(backersTotal)}</strong>
          <br />
          total backers
        </li>
        <li>
          <strong>{daysLeft}</strong>
          <br />
          days left
        </li>
      </ul>
      <meter value={backedTotal} max={backedMax}>
        {backedTotal} of {backedMax}
      </meter>
    </div>
  );
};

export default ProductStats;
