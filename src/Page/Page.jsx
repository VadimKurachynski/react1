import s from "./Page.module.css"
import {connect} from "react-redux";

const PageStr = (props) => {
console.log("pagestr   ----   ",props);
    return (
        <div className={s.content}>
            <div>верх</div>
            <div><button>1</button><button>2</button></div>
            <div>{props.likes}</div>
            <div>низ</div>
        </div>
    )
}


function mapStateToProps(state){
console.log("mapStateToProps-----   ",state )
    return {
        likes:state.likes
    }
}

export default connect(mapStateToProps)(state);
export default PageStr;