import React from 'react';
import H2 from './H2';

function Input (props) {
  return (
    <>
    <H2>{props.children}</H2>
    <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="border  border-black w-full p-3" ></input>
    </>
  );
}

export default Input;