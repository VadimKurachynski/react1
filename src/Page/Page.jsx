import s from "./Page.module.css"
import {connect} from "react-redux";

const PageStr = (props) => {
    console.log("pagestr   ----   ", props);
    return (
        <div className={s.content}>
            <div>верх</div>
            <div>
                <button onClick={props.cliclike}>1</button>
                <button onClick={props.clicdis}>2</button>
            </div>
            <div>{props.state.likes}</div>
            <div>{props.state.disliks}</div>
            <div>низ</div>
        </div>
    );
}




let mapStateToProps = (state) => {
    console.log("mapStateProps");
    return {

        state
    }
}

let mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps");
    return{
        cliclike:()=>{
    console.log("mapDispatchToProps-----","click");
const action ={type:"one"};
dispatch(action);
},
        clicdis:()=>{
            console.log("mapDispatchToProps-----","clicdis");
            const action ={type:"two"};
            dispatch(action);
        },


    }

}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(PageStr);
export default DialogsContainer


//export default PageStr

