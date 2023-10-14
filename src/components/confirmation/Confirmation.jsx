const Confirmation = () => {
  return (
    <dialog open>
      <img src='/icon-check.svg' alt='' aria-hidden='true' />
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <form>
        <button formMethod='dialog'>Got it!</button>
      </form>
    </dialog>
  );
};

export default Confirmation;
