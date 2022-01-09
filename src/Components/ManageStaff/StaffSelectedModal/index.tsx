import React from 'react';
// @material-ui
import { Button, Dialog, DialogActions, Grid } from '@material-ui/core';
// @api
import { IStaffRead, DB } from 'DB/db.store';
// @components
import DeleteEntityModal from 'Components/Utilities/DeleteEntityModal';
// @local
import useStyles from './styles';
import EditStaffModal from '../EditStaff';

interface IStaffSelectedModalProps {
	open: boolean;
	handleClose: () => void;
	staff: IStaffRead;
}

const StaffSelectedModal = ({
	open,
	handleClose,
	staff,
}: IStaffSelectedModalProps) => {
	const classes = useStyles({});

	const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

	const [openEditStaffMember, setOpenEditStaffMember] = React.useState(false);

	const editStaffMember = () => {
		setOpenEditStaffMember(true);
	};

	const handleCloseStaffMember = () => {
		setOpenEditStaffMember(false);
	};

	const handleOpenDeleteModal = () => {
		setOpenDeleteModal(true);
	};

	const handleCloseDeleteModal = () => {
		setOpenDeleteModal(false);
	};

	const deleteStaffMember = async () => {
		if (staff.id) {
			await DB.staffs.delete(staff.id);
		}
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogActions>
					<Grid container>
						<Grid item xs={12} className={classes.gridSpacingTop}>
							<Button
								onClick={editStaffMember}
								className={`${classes.baseBtn} ${classes.actionOfficeBtn}`}
							>
								Edit Staff member
							</Button>
						</Grid>
						<Grid item xs={12} className={classes.gridSpacingTop}>
							<Button
								onClick={handleOpenDeleteModal}
								className={`${classes.baseBtn} ${classes.noBackgroundButton}`}
							>
								Delete Staff Member
							</Button>
						</Grid>
					</Grid>
				</DialogActions>
				{openDeleteModal ? (
					<DeleteEntityModal
						open={openDeleteModal}
						handleClose={handleCloseDeleteModal}
						entityName="staff"
						action={deleteStaffMember}
					/>
				) : null}
				{openEditStaffMember ? (
					<EditStaffModal
						open={openEditStaffMember}
						handleClose={handleCloseStaffMember}
						staff={staff}
					/>
				) : null}
			</Dialog>
		</div>
	);
};

export default StaffSelectedModal;
