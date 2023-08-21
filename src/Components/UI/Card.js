const Card=(props)=>{
    return(
        <div className="p-[1rem] bg-[white] rounded-[14px] shadow-2xl">{props.children}</div>
    );

};
export default Card;