import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
// @form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// @material-ui
import {
	Button,
	Dialog,
	DialogActions,
	Grid,
	IconButton,
	MobileStepper,
	Typography,
	DialogTitle,
	DialogContent,
	TextField,
} from '@material-ui/core';
// @icons
import { ArrowBack } from '@material-ui/icons';
// @utilities
import { AVATARS } from 'utilities/constants';
// @api
import { IStaffRead, DB } from 'DB/db.store';
// @components
import AvatarSelect from 'Components/Utilities/AvatarSelect';
// @local
import { StaffSection } from '../AddStaff';
import useStyles from '../styles';

interface IEditStaffModalProps {
	open: boolean;
	handleClose: () => void;
	staff: IStaffRead;
}

const schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
});

interface IAddStaffForm {
	firstName: string;
	lastName: string;
}

const EditStaffModal = ({ open, handleClose, staff }: IEditStaffModalProps) => {
	const classes = useStyles({});

	const [activeStep, setActiveStep] = React.useState(StaffSection.names);
	const [selectedAvatar, setSelectedAvatar] = React.useState<string | null>(
		null,
	);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const {
		control,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<IAddStaffForm>({
		resolver: yupResolver(schema),
	});

	const { firstName, lastName } = watch();

	const nextPage = (data: IAddStaffForm) => {
		handleNext();
	};

	const updateStaff = async () => {
		if (staff.id) {
			if (selectedAvatar) {
				await DB.staffs.update(staff.id, {
					firstName,
					lastName,
					avatar: selectedAvatar,
				});
				toast.success('Staff member has been edited');
			} else {
				await DB.staffs.update(staff.id, {
					firstName,
					lastName,
				});
				toast.success('Staff member has been updated');
			}
		}
	};

	React.useEffect(() => {
		if (staff) {
			reset(staff);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Toaster />
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle className={classes.noPaddingSides}>
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						style={{ overflowX: 'hidden' }}
					>
						{activeStep === StaffSection.names ? (
							<>
								<Grid
									item
									xs={10}
									style={{ marginLeft: '10px' }}
								>
									<Typography
										color="secondary"
										variant="h2"
										className={`${classes.newStaffMemberHeading} ${classes.textLeft}`}
									>
										Edit Staff Member
									</Typography>
								</Grid>
								<Grid
									item
									xs={1}
									style={{ marginRight: '10px' }}
								>
									<IconButton
										color="primary"
										onClick={handleClose}
									>
										<img
											alt="closeIcon"
											width="20"
											src="https://user-images.githubusercontent.com/27930281/133470287-29ef857d-6e40-4a4f-a16d-feefd211c52f.png"
										/>
									</IconButton>
								</Grid>
							</>
						) : (
							<>
								<Grid item xs={2}>
									<Button
										onClick={handleBack}
										className={classes.textLeft}
									>
										<ArrowBack />
									</Button>
								</Grid>
								<Grid item xs={8}>
									<Typography
										color="secondary"
										variant="h2"
										className={`${classes.newStaffMemberHeading} ${classes.textLeft}`}
									>
										Edit Staff Member
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<IconButton
										color="primary"
										onClick={handleClose}
									>
										<img
											alt="closeIcon"
											width="20"
											src="https://user-images.githubusercontent.com/27930281/133470287-29ef857d-6e40-4a4f-a16d-feefd211c52f.png"
										/>
									</IconButton>
								</Grid>
							</>
						)}
					</Grid>
				</DialogTitle>
				<form onSubmit={handleSubmit(nextPage)}>
					<DialogContent>
						<Grid container spacing={2}>
							{activeStep === StaffSection.names ? (
								<>
									<Grid item xs={12}>
										<Controller
											control={control}
											name="firstName"
											render={({ ...props }) => (
												<TextField
													{...props.field}
													label="First Name"
													className={
														classes.textLabelGrey
													}
													variant="outlined"
													InputProps={{
														classes: {
															notchedOutline:
																classes.outlinedInputBorderLight,
														},
													}}
													type="text"
													fullWidth
													error={Boolean(
														errors?.firstName,
													)}
													helperText={
														errors?.firstName
															?.message
													}
												/>
											)}
										/>
									</Grid>
									<Grid item xs={12}>
										<Controller
											control={control}
											name="lastName"
											render={({ ...props }) => (
												<TextField
													{...props.field}
													label="Last Name"
													className={
														classes.textLabelGrey
													}
													variant="outlined"
													InputProps={{
														classes: {
															notchedOutline:
																classes.outlinedInputBorderLight,
														},
													}}
													type="text"
													fullWidth
													error={Boolean(
														errors?.lastName,
													)}
													helperText={
														errors?.lastName
															?.message
													}
												/>
											)}
										/>
									</Grid>
								</>
							) : (
								<>
									<Grid item xs={12}>
										<Typography
											variant="h2"
											className={classes.avatarText}
										>
											Avatar
										</Typography>
									</Grid>
									<Grid item container xs={12}>
										{AVATARS.map((avatar: string) => (
											<AvatarSelect
												predefinedAvatar={avatar}
												selectedAvatar={selectedAvatar}
												setSelectedAvatar={
													setSelectedAvatar
												}
												staff={staff}
											/>
										))}
									</Grid>
								</>
							)}
						</Grid>
						<MobileStepper
							variant="dots"
							steps={2}
							position="static"
							color="primary"
							activeStep={activeStep}
							nextButton={null}
							backButton={null}
							classes={{ root: classes.root }}
						/>
					</DialogContent>

					<DialogActions>
						<Grid item xs={12} className={classes.gridSpacingTop}>
							{activeStep === StaffSection.names ? (
								<Button
									type="submit"
									className={`${classes.baseBtn} ${classes.actionOfficeBtn}`}
								>
									Next
								</Button>
							) : (
								<Button
									onClick={updateStaff}
									className={`${classes.baseBtn} ${classes.actionOfficeBtn}`}
								>
									Update Staff Member
								</Button>
							)}
						</Grid>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
};

export default EditStaffModal;
