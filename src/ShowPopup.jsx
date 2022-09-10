import React from "react";
import { CgCloseO,CgPlayTrackNextO } from 'react-icons/cg';
import Input from "./Input";

function ShowPopup (props){
const onChange =()=>{
 props.onChange(props.input); 
}
  
  let secondryPopup= <div className="flex flex-col items-center justify-end  ">
    <div className="flex text-black  p-2 ">
   {props.hidden && <Input value={props.value} placeholder={props.placeholder} onChange={props.onValueChange}></Input>}
   <div className=" flex flex-col text-white"> 
   {props.hidden && <h1 className="border border-white" >next</h1>}{props.hidden && <CgPlayTrackNextO onClick={onChange}></CgPlayTrackNextO> }
    {props.hidden ||<CgCloseO onClick={onChange}></CgCloseO> }
   </div> </div>  </div>;
  if(props.theme === "secondry"){
    secondryPopup= <div className="flex  justify-end  p-2 ">
      
      <CgCloseO onClick={props.onClose}></CgCloseO> 
      </div>
  }
  return(
    <div className="fixed 
  top-0 left-0 h-screen w-screen flex justify-center item-center
 ">
  <div className=" rounded-md bg-black text-white font-bold w-80 h-40 ">
    {props.theme==="secondry" && secondryPopup} 
    <div className="flex flex-col items-center justify-center ">
         <h1 className="text-3xl ">{props.children}</h1>
         <h2 className="text-xl">{props.input}</h2></div>
    {props.theme!=="secondry" && secondryPopup} 
   </div>
         </div>
  )
    
}
export default ShowPopup;