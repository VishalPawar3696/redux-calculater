import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { plus, minus, add, subtract, multiply, divide } from "./Store/action";
import { Store } from "./Store/store";

function App() {
  // console.log(store.getState());
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const [x, setX] = useState("");
  console.log(x);
  const handleChange = (e) => {
    setX(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={() => dispatch(minus())}
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            height: "20px",
            width: "30px",
          }}
        >
          -
        </button>
        <button
          onClick={() => dispatch(plus())}
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            height: "20px",
            width: "30px",
          }}
        >
          +
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          margin: "auto",
          marginTop: "30px",
          width: "30%",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          padding: "10px 0px"
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Enter any number : X"
            onChange={(e) => handleChange(e)}
            value={x}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "5px",
          }}
        >
          <button
            onClick={() => dispatch(add(x))}
            style={{
              backgroundColor: "teal",
              color: "white",
              border: "none",
              height: "50px",
              width: "60px",
            }}
          >
            Add
          </button>
          <button
            onClick={() => dispatch(subtract(x))}
            style={{
              backgroundColor: "teal",
              color: "white",
              border: "none",
              height: "50px",
              width: "60px",
            }}
          >
            Subtract
          </button>
          <button
            onClick={() => dispatch(multiply(x))}
            style={{
              backgroundColor: "teal",
              color: "white",
              border: "none",
              height: "50px",
              width: "60px",
            }}
          >
            Multiply
          </button>
          <button
            onClick={() => dispatch(divide(x))}
            style={{
              backgroundColor: "teal",
              color: "white",
              border: "none",
              height: "50px",
              width: "60px",
            }}
          >
            Divide
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;