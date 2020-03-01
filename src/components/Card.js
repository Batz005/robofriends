import React from 'react';



//we can use Card = ({name,email,id})=>{} ,if what we require is props.name,etc but 
//since we need props.robo.name etc that doesn't work the way we want it to...
const Card =  ({name,email,id})=>{
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src = {`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;