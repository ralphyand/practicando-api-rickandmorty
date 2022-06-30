import React, {useEffect, useState} from "react";

import Navbar from "./navbar.jsx"
import Card from "./card.jsx"
import Paginas from "./paginas.jsx";
//include images into your bundle


//create your first component


const Home = () => {
	

	const [personajes, setpersonajes] = useState ([]);

	const url = "https://rickandmortyapi.com/api/character"
	
	const fetcCharaters = (url)  => {
	fetch(url)
		.then(response => response.json())
		.then(data => setpersonajes(data.results))
		.catch(error => console.log(error))


	};
	
	const onPrevius =() => {
		fetcCharaters(info.prev)


	}
	const onNext =() => {
		fetcCharaters(url)
			
		}


	useEffect(() => {
		fetcCharaters(url);
	}, [])
	return (

		<>
		<Navbar brand="aprendiendo apis "/>
<Paginas />
		<div className="container mt-5">

	<Card characters={personajes}/>
	<Paginas/>
</div>
		
	</>
	) 
};

export default Home;
