import React from 'react';
// @material-ui
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Grid,
	Typography,
} from '@material-ui/core';
// @icons
import { ArrowBack } from '@material-ui/icons';
// @local
import useStyles from './styles';

type ModalNames = 'office' | 'staff';

interface IDeleteEntityModalProps {
	open: boolean;
	handleClose: () => void;
	entityName: ModalNames;
	action: () => void;
}

const DeleteEntityModal = ({
	open,
	handleClose,
	entityName,
	action,
}: IDeleteEntityModalProps) => {
	const classes = useStyles({});

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle className={classes.noPaddingSides}>
					<Grid container>
						<Grid item xs={2}>
							<Button
								onClick={handleClose}
								className={classes.textLeft}
							>
								<ArrowBack />
							</Button>
						</Grid>
						<Grid item xs={10}>
							<Typography
								color="secondary"
								variant="h3"
								className={`${classes.deleteModalHeadingText} ${classes.textLeft}`}
							>
								Are you sure you want to delete{' '}
								{entityName === 'office'
									? 'Office'
									: 'Staff Member'}{' '}
								?
							</Typography>
						</Grid>
					</Grid>
				</DialogTitle>
				<DialogActions>
					<Grid container>
						<Grid item xs={12} className={classes.gridSpacingTop}>
							<Button
								onClick={action}
								className={`${classes.baseBtn} ${classes.deleteButton}`}
							>
								Delete{' '}
								{entityName === 'office'
									? 'Office'
									: 'Staff Member'}
							</Button>
						</Grid>
						<Grid item xs={12} className={classes.gridSpacingTop}>
							<Button
								onClick={handleClose}
								className={`${classes.baseBtn} ${classes.noBackgroundButton}`}
							>
								Keep{' '}
								{entityName === 'office'
									? 'Office'
									: 'Staff Member'}
							</Button>
						</Grid>
					</Grid>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default DeleteEntityModal;
