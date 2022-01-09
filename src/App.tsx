import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from 'Layouts';

function Home() {
	return <h1>Home</h1>;
}

function Dashboard() {
	return <h1>Dashboard</h1>;
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
