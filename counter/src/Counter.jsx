import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "2px solid white",
        padding: "20px",
        width: "300px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div>
        <button onClick={() => setCount((prev) => prev - 1)} style={{padding:"30px", margin:"10px", backgroundColor:"gray",}}>−</button>
        <button onClick={() => setCount((prev) => prev + 1)} style={{padding:"30px", margin:"10px", backgroundColor:"gray",}}>+</button>
        <button onClick={() => setCount(0)} style={{padding:"10px", margin:"50px", backgroundColor:"gray",}}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
