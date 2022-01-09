import React from 'react';
// @material-ui
import { Grid, Typography, Button } from '@material-ui/core';
// @icons
import { ArrowBack } from '@material-ui/icons';
// @utilities
import { OfficeHeadings } from 'utilities/globals';
// @local
import useStyles from './styles';

interface IManageOfficeProps {
	heading: OfficeHeadings;
	goBack: () => void;
	children?: React.ReactNode;
}

const ManageOfficeView = ({
	heading,
	goBack,
	children,
}: IManageOfficeProps) => {
	const classes = useStyles({});
	return (
		<Grid
			container
			className={classes.headingBottomSpace}
			justifyContent="center"
			alignItems="center"
		>
			<Grid item xs={5}>
				<Button onClick={goBack} className={classes.textLeft}>
					<ArrowBack />
				</Button>
			</Grid>
			<Grid item xs={7}>
				<Typography
					color="secondary"
					variant="h3"
					className={`${classes.headingText} ${classes.textLeft}`}
				>
					{heading}
				</Typography>
			</Grid>
			{children}
		</Grid>
	);
};

export default ManageOfficeView;
