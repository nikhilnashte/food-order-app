import React from "react";
const Input = React.forwardRef((props,ref) =>{
      return <div className={props.className}>
        <label className="font-bold" htmlFor={props.input.id}> {props.label} : </label>
        <input className="border-2 rounded-md text-center" ref={ref} {...props.input} />
      </div>
}) ;
export default Input;