export default function AddToCartBtn() {
  function add() {}

  return (
    <button
      onClick={add}
      className="font-mono font-bold rounded-full bg-teal-100  p-2 hover:bg-cyan-700 hover:text-white active:border-2 active:border-black "
    >
      <h2>Add to card</h2>
    </button>
  );
}
