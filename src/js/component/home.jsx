import React, { useState } from "react";


//create your first component
const Home = () => {
	const [isRojo, setRojo] = useState(false);

	const [isAmarillo, setAmarillo] = useState(false);
	
	const [isVerde, setVerde] = useState(false);

	return (
		<div className="">
			<div className="soporte text-center mx-auto"></div>
			<div className="caja text-center mx-auto">
				<div>
					<button
						onClick={() => {
							setRojo(true);
							setAmarillo(false);
							setVerde(false);
						}}
						className={`${
							isRojo === true ? "rojo" : ""
						} rounded-circle`}></button>
				</div>
				<div className="">
					<button
						onClick={() => {
							setRojo(false);
							setAmarillo(true);
							setVerde(false);
						}}
						className={`${
							isAmarillo === true ? "amarillo" : ""
						} rounded-circle h-33`}></button>
				</div>
				<div>
					<button
						onClick={() => {
							setRojo(false);
							setAmarillo(false);
							setVerde(true);
						}}
						className={`${
							isVerde === true ? "verde" : ""
						} rounded-circle h-33`}></button>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
