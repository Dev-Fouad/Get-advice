import { useState } from "react";
import "./styles.css";

export default function App() {
  const [Advice, SetAdvice] = useState("")
  const [Count, setCount] = useState(0)

  const getAdvice = async function(){
    const Res = await fetch('https://api.adviceslip.com/advice')
    const Data = await Res.json()

    console.log(Data)

    SetAdvice(Data.slip.advice)
    setCount((c) => c + 1)
  }

  return (
    <div>
      <h1>{Advice}</h1>
      <button onClick={getAdvice}>Get Advice.</button>
      <p>You got advice <strong>{Count}</strong> times. </p>
    </div>
  );
}