import React from 'react';
// @material-ui
import { AppBar, Typography, Grid, IconButton } from '@material-ui/core';
// @local
import useStyles from './styles';

const Header = () => {
	const classes = useStyles({});

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.greyBackground}>
				<Grid
					container
					direction="row"
					alignItems="center"
					className={classes.gridMarginLeft10}
				>
					<Grid item xs={8} container alignItems="center">
						<Grid item className={classes.iconSpace}>
							<Typography color="secondary" variant="h4">
								19:00
							</Typography>
						</Grid>
						<Grid item>
							<IconButton>
								<img
									src="https://user-images.githubusercontent.com/27930281/133587891-12ae14c2-77b5-45a9-966c-4c086b767dda.png"
									alt="speechIcon"
									width="20"
								/>
							</IconButton>
						</Grid>
					</Grid>
					<Grid
						item
						xs={4}
						container
						alignItems="center"
						className={classes.rightSideIcons}
					>
						<Grid item>
							<IconButton className={classes.leftSpace2}>
								<img
									src="https://user-images.githubusercontent.com/27930281/133588459-a8bd40b4-c120-42f3-b48c-02ec1962a170.png"
									alt="volumeIcon"
									width="20"
								/>
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton className={classes.leftSpace2}>
								<img
									src="https://user-images.githubusercontent.com/27930281/133588589-13a66ba6-99b5-4e32-83da-5c09d5caf537.png"
									alt="navigationIcon"
									width="20"
								/>
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton className={classes.removePadding}>
								<img
									src="https://user-images.githubusercontent.com/27930281/133588604-a4f26ca9-bdce-4d1c-b455-4b53938aa3ba.png"
									alt="callIcon"
									width="20"
								/>
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</AppBar>
		</div>
	);
};

export default Header;
