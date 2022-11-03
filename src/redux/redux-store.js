import {legacy_createStore} from "redux";

const one = 'one';
const initialState={
    likes:10
}
const reducer=(state=initialState, action)=>{
    console.log("reducer",state);
    switch (action.type) {
        case one:
            return{
                ...state.likes=20
            };
        default:
            return state;
    }
}
let store=legacy_createStore(reducer);// создали стор
export default store;
window.store=store;
