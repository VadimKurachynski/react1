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
            <div>{props.likes}</div>
            <div>{props.disliks}</div>
            <div><textarea onChange={props.change} value={props.chanText}></textarea></div>
            <div>низ</div>
        </div>
    );
}

let mapStateToProps = (state) => {
    console.log("mapStateProps");
    return {
        likes: state.likes,
        disliks:state.disliks,
        chantext:state.chantext,
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
        change:(e)=>{
            console.log("mapDispatchToProps-----","clicdis");
            let text=e.target.value;
            const action ={type:"change",onchtext:text};
            dispatch(action);
        },

    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(PageStr);
export default DialogsContainer


//export default PageStr

