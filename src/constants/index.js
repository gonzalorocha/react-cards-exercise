import { addDays } from "date-fns";

export const DATA = [
	{
		id: 1,
		category: "Gastronomia",
		title: "Las 7 chocolaterías mas famosas de Bariloche",
		location: "Bariloche, Río Negro",
		date: new Date(),
		tags: ["Cafetería", "Casa de té"],
		imageName: "choco",
	},
	{
		id: 2,
		category: "Aventura",
		title: "Recomendaciones para la excursión Cruce de los Andres",
		location: "San Martín, Neuquén",
		date: addDays(new Date(), 7),
		tags: ["Cabalgata"],
		imageName: "excursion",
	},
	{
		id: 3,
		category: "Fotografía",
		title: "Puntos panorámicos infaltables en la ruta de los 7 Lagos",
		location: "Villa la Angostura, Neuquén",
		date: addDays(new Date(), 14),
		tags: ["Lagos", "Miradores", "7 Lagos"],
		imageName: "panoramic",
	},
];
