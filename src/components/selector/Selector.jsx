import SelectPledgesHolder from './SelectPledgesHolder';

const Selector = ({ data }) => {
  return (
    <dialog open>
      <h2>Back this project</h2>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <SelectPledgesHolder data={data}></SelectPledgesHolder>
    </dialog>
  );
};

export default Selector;
