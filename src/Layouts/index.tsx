import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
// @material-ui
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Header from './Header';
import useStyles from './styles';

const Layout = () => {
	const classes = useStyles();
	const hideAddButtonViews = ['/new-office', '/edit-office'];
	const location = useLocation();
	const hideAddButtonRoutes = hideAddButtonViews.includes(location.pathname);

	const navigate = useNavigate();
	const params = useParams();

	const officeId = params.officeId as string;
	console.log('officeId', params);

	const handlePageChange = () => {
		switch (location.pathname) {
			case '/':
				navigate('/new-office');
				break;

			case '/office/':
				navigate('/add-staff');
				break;
			default:
				console.log('location', officeId);
				navigate(`/add-staff/officeId=${officeId}`);
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
