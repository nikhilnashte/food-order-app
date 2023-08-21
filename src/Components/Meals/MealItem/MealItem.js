import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx=useContext(CartContext);

  const addToCartHandler=amount=>{
cartCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
})
  };

  return (
    <li className="flex border-b-2 p-3 px-8 justify-between">
      <div >
        <h3 className="italic font-bold text-xl">{props.name}</h3>
        <div className="italic ">{props.description}</div>
        <div className="text-[#8C3333] font-bold">{price}</div>
      </div>
      <div className="">
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
