import SelectPledge from './SelectPledge';

const SelectPledgesHolder = ({ data }) => {
  const { pledges } = data;
  return (
    <div>
      {pledges.map((pledge) => (
        <SelectPledge key={pledge.pledgeId} pledge={pledge}></SelectPledge>
      ))}
    </div>
  );
};

export default SelectPledgesHolder;
