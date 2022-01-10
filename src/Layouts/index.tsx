import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// @material-ui
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Header from './Header';
import useStyles from './styles';

const Layout = () => {
	const classes = useStyles();
	const hideAddButtonViews = ['/new-office', '/edit-office', '/add-staff'];
	const location = useLocation();
	const hideAddButtonRoutes = hideAddButtonViews.includes(location.pathname);

	const navigate = useNavigate();

	const handlePageChange = () => {
		switch (location.pathname) {
			case '/':
				navigate('/new-office');
				break;

			default:
				navigate(`/add-staff`);
		}
	};

	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			{hideAddButtonRoutes ? null : (
				<Fab color="primary" aria-label="add" className={classes.fab}>
					<Add onClick={handlePageChange} />
				</Fab>
			)}
		</div>
	);
};

export default Layout;
