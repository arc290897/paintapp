import React,{useState} from 'react';


const Secondbox = ({spray}) =>{
	const [divColor,setDivColor]=useState({backdivColor:""});


	const divChange = () =>{
		setDivColor({backdivColor:spray});
	}
	return(
		<div>
			<div onClick={divChange} style={{border:"3px solid black",marginTop:"50px",padding:"10px",backgroundColor:divColor.backdivColor}}>Selection</div>
		</div>
		)
}
export default Secondbox;