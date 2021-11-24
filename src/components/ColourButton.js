import React from 'react';


const ColourButton = ({colour,pickColor}) =>{
	return(
		colour.map((item,key) => {
			return(
				<button onClick={()=>{pickColor(item.color)}} style={{backgroundColor:item.color+"",padding:"50px",cursor:"pointer"}} key={key}>{item.color}</button>
				)
		})
		)
}
export default ColourButton;