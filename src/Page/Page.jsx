import s from "./Page.module.css"
import {connect} from "react-redux";

const PageStr = (props) => {
    console.log("pagestr   ----   ", props);
    return (
        <div className={s.content}>
            <div>верх</div>
            <div>
                <button onClick={onAdd}>1</button>
                <button>2</button>
            </div>
            <div>{props.state.likes}</div>
            <div>низ</div>
        </div>
    );
}

let onAdd = () => {
    dispatch({type: 'one'})
}


let mapStateToProps = (state) => {
    return {
        state
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch({ type: 'one' })
    }



}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(PageStr);
export default DialogsContainer


//export default PageStr

