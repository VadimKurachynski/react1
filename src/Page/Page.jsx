import s from "./Page.module.css"
import {connect} from "react-redux";

const PageStr = (props) => {
console.log("pagestr   ----   ",props);
    return (
        <div className={s.content}>
            <div>верх</div>
            <div><button>1</button><button>2</button></div>
            <div>{props.like}</div>
            <div>низ</div>
        </div>
    )
}


function mapStateToProps(state){

    return {
        like:state.likes
    }
}

export default PageStr;