import React from "react";
import Title from "components/Title";
import Card from "components/Card";
import Layout from "Layout";
import { DATA } from "constants";

const App = () => {
	return (
		<Layout>
			<Title />
			<div className="flex flex-row justify-evenly">
				{DATA.map((elem, index) => (
					<Card key={index} data={elem} />
				))}
			</div>
		</Layout>
	);
};

export default App;
