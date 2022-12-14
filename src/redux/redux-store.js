import {legacy_createStore} from "redux";

const one = 'one';
const two = 'two';
const change = 'change';
const clicpost = 'clicpost';

const initialState = {
    posts: [
        {id: 1, message: "privet"},
        {id: 2, message: "buy"},
        {id: 3, message: "hello"}
],
    likes:10,
    disliks: 100,
    chantext: "текст_начальный",
}
const reducer = (state = initialState, action) => {

    console.log("reducer", action);

    switch (action.type) {
        case one:
            return {
                ...state,
                likes: state.likes + 1,
            };
        case two:
            return {
                ...state,
                disliks: state.disliks - 1,
            };

        case change:
            return {
                ...state,
                chantext: action.chantext,
            };
        case clicpost:
            return {
                ...state,
               posts: [...state.posts,{id:7, message:state.chantext}]

            }

        default:
            return state;
    }
}
let store = legacy_createStore(reducer);// создали стор
export default store;
window.store = store;