import logo from "./logo.svg";
import "./App.css";

function App() {
  const useState = initialValue => {
    let _val = initialValue;

    const state = () => {
      return _val;
    }
    const setState = newValue => {
      _val = newValue;
    }

    return [state, setState];
  };

  const Counter = () => {
    const [count, setCount] = useState(0);

    return {
      click: () => setCount(count() + 1),
      render: () => console.log('render: ', count())
    }

  }

  const

  return <div>hello</div>;
}

export default App;
