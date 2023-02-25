import React from "react";
import Title from "components/Title";
import Card from "components/Card";

const DATA = [
	{
		id: 1,
		category: "Gastronomia",
		title: "Las 7 chocolaterías mas famosas de Bariloche",
		location: "Bariloche, Río Negro",
		date: "23 de febrero",
		tags: ["Cafetería", "Casa de té"],
		imageName: "choco",
	},
	{
		id: 2,
		category: "Aventura",
		title: "Recomendaciones para la excursión Cruce de los Andres",
		location: "San Martín, Neuquén",
		date: "18 de febrero",
		tags: ["Cabalgata"],
		imageName: "excursion",
	},
	{
		id: 3,
		category: "Fotografía",
		title: "Puntos panorámicos infaltables en la ruta de los 7 Lagos",
		location: "Villa la Angostura, Neuquén",
		date: "18 de febrero",
		tags: ["Lagos", "Miradores", "7 Lagos"],
		imageName: "panoramic",
	},
];
const App = () => {
	return (
		<div className="">
			<div className="wrapper flex flex-col  ">
				<Title />
				<div className="flex flex-row justify-evenly">
					{DATA.map((elem, index) => (
						<Card key={index} data={elem} />
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
