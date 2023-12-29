import React, { ChangeEvent, useState } from "react";

function NumberInput({ value, setValue }) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
  }
  return (
    <input type="text" value={value.toString()} onChange={handleOnChange} />
  )
}

function ResultDisplay({ a, b }) {
  return (
    <>
      {a} + {b} = {a + b}
    </>
  )
}

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h1 className="green">a + b</h1>
      <p>
        <NumberInput value={a} setValue={setA} />
        <span> + </span>
        <NumberInput value={b} setValue={setB} />
      </p>
      <p>
        <ResultDisplay a={a} b={b} />
      </p>
    </div>
  )
}
