// import logo from './logo.svg';
import './App.css';
import Page from "./Page/Page";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
     < Page  store={store}/>
    </div>
  );
}

export default App;
