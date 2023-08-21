import { Fragment } from 'react';
import classes from '../UI/Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) =>{
    return <div className={`${classes.backdrop}  `} onClick={props.onClose} ></div>
}

const Modaloverlay = (props) =>{
    return <div className={`${classes.Modal}`}>
           <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement=document.getElementById('overlays');

const Modal = props =>{ 
return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,portalElement)} 
    {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalElement)}
 
 
</Fragment>
};
export default Modal;