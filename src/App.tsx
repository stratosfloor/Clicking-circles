import React from "react";

import "./App.css";

function App() {
	function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
		console.log("x");
	}

	return <div className="App" onClick={handlePlaceCircle}></div>;
}

export default App;
