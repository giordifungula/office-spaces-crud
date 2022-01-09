import React from 'react';
// @material-ui
import {
	Avatar,
	IconButton,
	makeStyles,
	createStyles,
	Theme,
	Grid,
	Typography,
} from '@material-ui/core';
// @icons
import { MoreVert } from '@material-ui/icons';
// @api
import { IStaffRead } from 'DB/db.store';
// @local
import StaffSelectedModal from '../StaffSelectedModal';

interface IStaffListProps extends React.Attributes {
	staff: IStaffRead;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		staffText: {
			fontWeight: 400,
			fontStyle: 'normal',
			fontSize: '16px',
			color: '#000000',
		},
		rightText: {
			textAlign: 'right',
		},
	}),
);

const StaffList = ({ staff }: IStaffListProps) => {
	const classes = useStyles({});

	const [openSelectedStaff, setOpenSelectedStaff] = React.useState(false);

	const handleOpenSelectedStaff = () => {
		setOpenSelectedStaff(true);
	};

	const handleCloseSelectedStaff = () => {
		setOpenSelectedStaff(false);
	};

	return (
		<Grid item container>
			<Grid item xs={2}>
				<Avatar
					alt={`Avatar n°${staff.firstName}`}
					src={`${staff.avatar}`}
				/>
			</Grid>
			<Grid item xs={8}>
				<Typography
					className={classes.staffText}
				>{`${staff.firstName} ${staff.lastName}`}</Typography>
			</Grid>
			<Grid item xs={2} className={classes.rightText}>
				<IconButton onClick={handleOpenSelectedStaff}>
					<MoreVert />
				</IconButton>
			</Grid>
			{openSelectedStaff ? (
				<StaffSelectedModal
					open={openSelectedStaff}
					handleClose={handleCloseSelectedStaff}
					staff={staff}
				/>
			) : null}
		</Grid>
	);
};

export default StaffList;
