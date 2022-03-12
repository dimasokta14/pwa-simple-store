import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
