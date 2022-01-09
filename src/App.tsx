import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from 'Layouts';
import AddOffice from 'Components/ManageOffice/AddOffice';
import EditOffice from 'Components/ManageOffice/EditOffice';
import LandingPage from 'Components/Home';
import Office from 'Components/Office';
import ViewOffice from 'Components/Office/Page';

function Dashboard() {
	return <h1>Dashboard</h1>;
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<LandingPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route
					path="/add-staff"
					element={<ViewOffice heading="Office" />}
				>
					<Route path=":officeId" element={<Dashboard />} />
				</Route>
				<Route
					path="/new-office"
					element={<AddOffice heading="New Office" />}
				/>
				<Route
					path="/edit-office/:id"
					element={<EditOffice heading="Edit Office" />}
				/>
				<Route
					path="/office/:id"
					element={<ViewOffice heading="Office" />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
