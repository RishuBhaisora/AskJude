import React from 'react';
import Header from './Header';
import Discription from './Discription';
import Input from './Input';
import ShowPopup from './ShowPopup'
import H2 from './H2'

let counter=0;
function AskJudPage() {
const fixedCode="Jud,please answer my question.";

const [showQuestion,setShowQuestion]=React.useState(false) ; 
const [showAnswer,setShowAnswer]=React.useState(false) ;
const [magicMode,setMagicMode]=React.useState(false) ;
const [pitition,setPitition]=React.useState('');
const [userAnswer,setUserAnswer]=React.useState('');
const [answer,setAnswer]=React.useState('I am not intrested to answer you.');
const [question,setQuestion]=React.useState('');
 const[judQuestion,setJudQuestion]=React.useState([
   {title:"What is your name?",hidden:true,message:"first you answer",id:counter++}, 
 ]); 

const updateUserAnswer=(event)=>{
  const newUserAnswer=event.target.value;
  setUserAnswer(newUserAnswer);
}
  
const onQuestionClose =(data)=>{
  
  if(data==="What is your name?"){
const firstQues=judQuestion.filter(j=>j!==data)
  setJudQuestion(firstQues)
  setJudQuestion([...judQuestion,{title:`How are you?`,message:`Hii, ${userAnswer}`,hidden:true,
    id:counter++, }])
   setUserAnswer("")
    
  }if(data===`How are you?`&&userAnswer==="fine"){
const secondQues=judQuestion.filter(j=>j!==data)
  setJudQuestion(secondQues)    
  setJudQuestion([...judQuestion,{title:"are you exited for answer?",message:"Great,",hidden:true,
  id:counter++, }]) 
  setUserAnswer("")
    
  }else if(data===`How are you?`&&userAnswer!=="fine"){
    const secondReply=judQuestion.filter(j=>j!==data)
  setJudQuestion(secondReply)    
  setJudQuestion([...judQuestion,{title:"Get well soon and try again",message:"Sad!",hidden:false,
  id:counter++, }]) 
  setUserAnswer("")
    
  }if(data==="Get well soon and try again"){
  setPitition(""); 
  setQuestion("");
  setJudQuestion([{title:"What is your name?",hidden:true,message:"first you answer",id:counter++}]) 
  setShowQuestion(false);
  setShowAnswer(false); 
  setMagicMode(false);
  setAnswer("sorry,i will not answer you.");  
  
 }else if(data==="are you exited for answer?"&&userAnswer==="yes"){
  setJudQuestion([{title:"What is your name?",hidden:true,message:"first you answer",id:counter++}])
  setUserAnswer("");  
  setShowQuestion(false);
  setShowAnswer(true);
    
  }else if(data==="are you exited for answer?"&&userAnswer!=="yes"){
  const thirdReply=judQuestion.filter(j=>j!==data)
  setJudQuestion(thirdReply)    
  setJudQuestion([...judQuestion,{title:"so try when you get exited bye",message:"okey!",hidden:false,
  id:counter++, }]) 
  setUserAnswer("")
    
  } if(data==="so try when you get exited bye"){
  setPitition(""); 
  setQuestion("");
  setJudQuestion([{title:"What is your name?",hidden:true,message:"first you answer",id:counter++}]) 
  setShowQuestion(false);
  setShowAnswer(false); 
  setMagicMode(false);
  setAnswer("i hate you ,don't ask me anything.");  
}
}
  
const onAnswerClose =()=>{
  setShowAnswer(false);
  setPitition("");
  setMagicMode(false);
  setQuestion("");
  setAnswer("i don't like you ,so i will not answer.");
}
const onQuestionChange =(event)=>{
const newQuestion=event.target.value;

if(newQuestion.includes('?')){ 
  setShowQuestion(true)

}else{
  setQuestion(newQuestion)
}
}
  
const onPititionChange =(event)=>{
const newPitition=event.target.value;

const newLength =newPitition.length;
const oldLength =pitition.length;
 
 if(newPitition.includes('[')){
   setMagicMode(true);
   setAnswer("");
   setPitition(fixedCode.substring(0, newLength));
   
   }
  else if(newPitition.includes(']')){
  setMagicMode(false);  
  }
 else if(magicMode){
    
   setPitition(fixedCode.substring(0, newLength));
    
  
  if(newLength < oldLength){
     setAnswer(answer.substring(0, answer.length - 1));
    
   }else{ 
   setAnswer(answer+newPitition.substring(newPitition.length-1));
   }
   }else{
   setPitition(newPitition);
   }
 } 

  
  return (
<>
   <div className="mx-auto mt-10 space-y-4  max-w-md">
    <Header> </Header>
    <Discription>Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want. However, before each question you must write a petition. If the answer is not what you expected, at least you make catharsis and ask again.
     </Discription>
     
      <div className="pt-20 space-y-4 pb-20">
     <Input value={pitition} onChange={onPititionChange} placeholder="You must enter the petition." >Type Your Petition</Input> 
     <Input value={question} onChange={onQuestionChange} placeholder="What can I answer for you?" >Type Your Question</Input>
     </div>

     {showQuestion &&
       <>
      { judQuestion.map(j=> <ShowPopup  
 id={j.id} key={j.id} input={j.title} placeholder="type answer" value={userAnswer} onValueChange={updateUserAnswer} hidden={j.hidden} onChange={onQuestionClose}  >{j.message} </ ShowPopup>)}</>
     }
     
     {showAnswer && 
     <ShowPopup theme="secondry" onClose={onAnswerClose} input={answer} >Answer Is</ ShowPopup>}
    
     <H2>How to use AskJud</H2>
     <H2>The world's best virtual tarot</H2>
     <Discription>Jud is a virtual tarot that that can answer all kinds of questions. Questions about the present, the past, and your future. He can be a bit tempermental, requiring that each question be presented with a petition of "Jud, please answer the following question" or "Jud, please answer" before each question is asked. Failure to correctly petition will not bring results</Discription>
     <H2>The history of AskJud</H2>
     <Discription>
Jud was born in 2007. As he began to age, he realized he had an ability to read the fortunes of others, and quickly became a star in his small hometown. To expand his operaion, he knew he had to join the digital age. Through the use of modern technology, he is able to answer thousands of questions every day from people all over the world.
<br/>
<br/>       
In early 2016, the demand for Jud's services became so high, he brougt on 10 additional team members from around the country to increase answer throughput. With a large team, and his mind in overdrive, he is now able to answer upwards of 13,240 questions per day (Average over the past 30 days), with pinpoint accuracy. Though the team members are new, they are just as tempermental. Requiring a correct petition each and every time.</Discription>
       </div>
   
</>
  );
}

export default AskJudPage;