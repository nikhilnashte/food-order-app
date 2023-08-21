import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const cartItems= <ul>{cartCtx.items.map((item)=><li>{item.name}</li>)}</ul>;
  const TotalAmt = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemsRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          kry={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemsRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between ">
        <span className="text-xl">Total Amount : </span>
        <span className=" font-bold"> {TotalAmt}</span>
      </div>
      <div className="text-right gap-4 mt-2">
        <button
          className=" bg-[#B31312] border-0 py-1 px-3 focus:outline-none hover:bg-[#EC7272] rounded text-white mt-4 md:mt-0"
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button className=" ml-3 bg-[#263A29] border-0 py-1 px-3 focus:outline-none hover:bg-[#9CA777] rounded text-white mt-4 md:mt-0">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
