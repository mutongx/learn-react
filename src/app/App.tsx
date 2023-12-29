import React, { ChangeEvent, Dispatch, useState } from "react";

interface NumberInputOption {
  value: number,
  setValue: Dispatch<number>
}

function NumberInput({ value, setValue }: NumberInputOption) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
  }
  return (
    <input type="text" value={value.toString()} onChange={handleOnChange} />
  )
}

interface ResultDisplayOption {
  a: number,
  b: number,
}

function ResultDisplay({ a, b }: ResultDisplayOption) {
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
