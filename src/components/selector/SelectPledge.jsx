const SelectPledge = ({ pledge }) => {
  const { pledgeId, pledgeName, pledgeDescription, pledgeMin, pledgeLeft } =
    pledge;

  const isMin = parseInt(pledgeMin);
  const isLeft = parseInt(pledgeLeft);
  const isActive = isLeft === 0 ? 'inactive' : '';
  let showInputs = false;

  if (isMin > 0 && isLeft > 0) {
    showInputs = true;
  }

  return (
    <div className='selector__pledge' data-state={isActive}>
      <div>
        <label>
          <input
            type='radio'
            name='pledge-amount'
            disabled={isLeft > 0 ? false : true}
          />
          {pledgeName}
        </label>
        {isMin > 0 && <p>Pledge ${pledgeMin} or more</p>}
        <p>{pledgeDescription}</p>
        {isMin > 0 && <p>{pledgeLeft} left</p>}
      </div>

      {showInputs && (
        <div>
          <hr />

          <div>
            <label htmlFor={`input${pledgeId}`}>Enter your pledge</label>
            <input type='tel' id={`input${pledgeId}`} />
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPledge;
