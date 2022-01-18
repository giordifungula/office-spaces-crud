import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import toast, { Toaster } from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
// @form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// @material-ui
import { Grid, Typography, TextField, Button } from '@material-ui/core';
// @api
import { DB, IOfficeRead } from 'DB/db.store';
// @utilities
import { OFFICE_COLORS } from 'utilities/constants';
import { OfficeHeadings } from 'utilities/globals';
// @components
import DeleteEntityModal from 'Components/Utilities/DeleteEntityModal';
import ManageOfficeView from 'Components/Utilities/ManageOfficeView';
import OfficeCircleColor from 'Components/Utilities/OfficeColors';
// @local
import useStyles from '../styles';

interface IEditOfficeInputs {
	officeName: string;
	physicalAddress: string;
	emailAddress: string;
	phoneNumber: string;
	capacity: number;
}

const schema = yup.object().shape({
	officeName: yup.string().required(),
	phoneNumber: yup.string().required(),
	physicalAddress: yup.string().required(),
	emailAddress: yup.string().required().email(),
	capacity: yup.number().positive().integer().required(),
});

interface IEditOfficeProps {
	heading: OfficeHeadings;
}

const EditOffice = ({ heading }: IEditOfficeProps) => {
	const classes = useStyles({});

	const params = useParams();
	const navigate = useNavigate();

	const officeId = params.id as string;

	const [selectedOffice, setFindOffice] = React.useState<IOfficeRead | null>(
		null,
	);

	const findOfficeById = async (id: number) => {
		const getOffice = await DB.offices.get({ id });

		if (getOffice) {
			setFindOffice(getOffice);
			reset(getOffice);
		}
	};

	const [selectedColor, setSelectedColor] = React.useState<string | null>(
		null,
	);
	const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

	const fetchStaffs = useLiveQuery(() => DB.staffs.toArray(), []);

	const goBack = () => {
		navigate('/');
	};

	const officeUsers = fetchStaffs
		? fetchStaffs.filter((user) => user.officeId === Number(1))
		: [];

	const bulkdDeleteUsers = async () => {
		if (officeUsers) {
			officeUsers.forEach((element) => {
				DB.staffs.delete(Number(element.id));
			});
		}
	};

	const handleOpenDeleteModal = () => {
		setOpenDeleteModal(true);
	};

	const handleCloseDeleteModal = () => {
		setOpenDeleteModal(false);
	};

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IEditOfficeInputs>({
		resolver: yupResolver(schema),
	});

	const editOffice = async (data: IEditOfficeInputs) => {
		if (selectedOffice) {
			if (selectedColor) {
				await DB.offices.update(selectedOffice.id, {
					...data,
					officeColor: selectedColor,
				});
				toast.success('Office has been edited');
			} else {
				await DB.offices.update(selectedOffice.id, {
					...data,
				});
				toast.success('Office has been updated');
			}
		}
		goBack();
	};

	React.useEffect(() => {
		findOfficeById(Number(officeId));
	}, [officeId]);

	const deleteOffice = async () => {
		if (selectedOffice) {
			await DB.offices.delete(selectedOffice.id);
			goBack();
			toast.success('Office has been removed');
			bulkdDeleteUsers();
		}
	};

	return (
		<Grid container>
			<Toaster />
			<form onSubmit={handleSubmit(editOffice)}>
				<Grid item>
					<ManageOfficeView heading={heading} goBack={goBack}>
						<Grid
							item
							container
							spacing={2}
							className={classes.gridSpacingTop}
						>
							<Grid item xs={12}>
								<Controller
									control={control}
									name="officeName"
									render={({ ...props }) => (
										<TextField
											{...props.field}
											label="Office Name"
											className={classes.textLabelGrey}
											variant="outlined"
											InputLabelProps={{ shrink: true }}
											InputProps={{
												classes: {
													notchedOutline:
														classes.outlinedInputBorderLight,
												},
											}}
											type="text"
											fullWidth
											error={Boolean(errors?.officeName)}
											helperText={
												errors?.officeName?.message
											}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Controller
									control={control}
									name="physicalAddress"
									render={({ ...props }) => (
										<TextField
											{...props.field}
											label="Physical Address"
											className={classes.textLabelGrey}
											InputLabelProps={{ shrink: true }}
											variant="outlined"
											type="text"
											InputProps={{
												classes: {
													notchedOutline:
														classes.outlinedInputBorderLight,
												},
											}}
											fullWidth
											error={Boolean(
												errors?.physicalAddress,
											)}
											helperText={
												errors?.physicalAddress?.message
											}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Controller
									control={control}
									name="emailAddress"
									render={({ ...props }) => (
										<TextField
											{...props.field}
											label="Email Address"
											className={classes.textLabelGrey}
											variant="outlined"
											type="email"
											fullWidth
											InputLabelProps={{ shrink: true }}
											InputProps={{
												classes: {
													notchedOutline:
														classes.outlinedInputBorderLight,
												},
											}}
											error={Boolean(
												errors?.emailAddress,
											)}
											helperText={
												errors?.emailAddress?.message
											}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Controller
									control={control}
									name="phoneNumber"
									render={({ ...props }) => (
										<TextField
											{...props.field}
											label="Phone Number"
											variant="outlined"
											className={classes.textLabelGrey}
											InputLabelProps={{ shrink: true }}
											type="text"
											InputProps={{
												classes: {
													notchedOutline:
														classes.outlinedInputBorderLight,
												},
											}}
											fullWidth
											error={Boolean(errors?.phoneNumber)}
											helperText={
												errors?.phoneNumber?.message
											}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Controller
									control={control}
									name="capacity"
									render={({ ...props }) => (
										<TextField
											{...props.field}
											label="Maximum Capacity"
											InputLabelProps={{ shrink: true }}
											className={classes.textLabelGrey}
											variant="outlined"
											type="number"
											InputProps={{
												classes: {
													notchedOutline:
														classes.outlinedInputBorderLight,
												},
											}}
											fullWidth
											error={Boolean(errors?.capacity)}
											helperText={
												errors?.capacity?.message
											}
										/>
									)}
								/>
							</Grid>

							<Grid item container xs={12}>
								<Grid item xs={12}>
									<Typography
										color="secondary"
										variant="h3"
										className={`${classes.headingText}`}
									>
										Office Colour
									</Typography>
								</Grid>
								<Grid item container xs={12}>
									{selectedOffice
										? OFFICE_COLORS.map(
												(circle: string) => (
													<OfficeCircleColor
														predefinedOfficeColor={
															circle
														}
														setSelectedColor={
															setSelectedColor
														}
														selectedColor={
															selectedColor
														}
														office={selectedOffice}
														key={selectedOffice.id}
													/>
												),
										  )
										: null}
								</Grid>
								<Grid
									item
									xs={12}
									className={classes.gridSpacingTop}
								>
									<Button
										type="submit"
										className={`${classes.baseBtn} ${classes.actionOfficeBtn}`}
									>
										Update Office
									</Button>
								</Grid>
								<Grid
									item
									xs={12}
									className={classes.gridSpacingTop}
								>
									<Button
										onClick={handleOpenDeleteModal}
										className={`${classes.baseBtn} ${classes.noBackgroundButton}`}
									>
										Delete Office
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</ManageOfficeView>
					{openDeleteModal ? (
						<DeleteEntityModal
							open={openDeleteModal}
							handleClose={handleCloseDeleteModal}
							action={deleteOffice}
							entityName="office"
						/>
					) : null}
				</Grid>
			</form>
		</Grid>
	);
};

export default EditOffice;
