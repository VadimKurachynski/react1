import {legacy_createStore} from "redux";

const one = 'one';
const initialState={
    likes:10,
    disliks:100,
}
const reducer=(state=initialState, action)=>{
    console.log("reducer",action);
    switch (action.type) {
        case one:
            return{
                ...state,
                likes:state.likes+1,
                disliks:state.disliks-1

            };
        default:
            return state;
    }
}
let store=legacy_createStore(reducer);// создали стор
export default store;
window.store=store;
