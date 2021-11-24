import './App.css';
import React,{useState} from 'react';
import Heading from '../components/Heading';
import ColourButton from '../components/ColourButton';
import Paintbox from '../components/Paintbox';
import Secondbox from '../components/Secondbox';
import Thirbox from '../components/Thirbox';



const Data=[
  {color:"red"},
  {color:"green"},
  {color:"orange"}
]

function App() {
  const [backColor,setBackColor]=useState({backgroundColor:""});

  const pickColor = (c) =>{
    setBackColor({backgroundColor:c});  
  }
  return (
    <div>
      <Heading />
      <ColourButton colour={Data} pickColor={pickColor}/>
      <Paintbox spray={backColor.backgroundColor}/>
      <Secondbox spray={backColor.backgroundColor}/>
      <Thirbox spray={backColor.backgroundColor}/>
    </div>
  );
}

export default App;
