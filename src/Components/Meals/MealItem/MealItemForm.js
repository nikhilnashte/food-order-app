import Input from "../../UI/Input";
import { useRef,useState } from "react";

const MealItemForm =  props=> {
  const [amountIsValid,setAmountIsValid]=useState(true);
     const ammountInputRef=useRef();
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount=ammountInputRef.current.value
        const enteredAmountNumber=+enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return ;
        }
        props.onAddToCart(enteredAmountNumber);
    }

return <form className="" onSubmit={submitHandler}>
     {/* <input className="border-2" /> */}
<Input
    ref={ammountInputRef}
    label="Amount" className="mb-3" input={{
    id:'amount_' + props.id,
    type:'number',
    min:'1',
    max:'5',
    step:'1',
    defaultValue:'1'
}} />
     <button className="ml-5 font-bold inline-flex items-center bg-[#8C3333] border-0 py-1 px-3 focus:outline-none hover:bg-[#CECE5A] rounded text-base mt-4 md:mt-0">
       + Add
       </button>
{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
</form>
};
export default MealItemForm;