import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// @form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// @material-ui
import { Grid, Typography, TextField, Button } from '@material-ui/core';
// @api
import { DB } from 'DB/db.store';
// @utilities
import { OFFICE_COLORS } from 'utilities/constants';
import { OfficeHeadings } from 'utilities/globals';
// @components
import ManageOfficeView from 'Components/Utilities/ManageOfficeView';
import OfficeCircleColor from 'Components/Utilities/OfficeColors';
// @local
import useStyles from '../styles';

interface IAddOfficeInputs {
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

interface IAddOfficeProps {
	heading: OfficeHeadings;
}

const AddOfice = ({ heading }: IAddOfficeProps) => {
	const classes = useStyles({});
	const navigate = useNavigate();

	const [selectedColor, setSelectedColor] = React.useState<string | null>(
		null,
	);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IAddOfficeInputs>({
		resolver: yupResolver(schema),
	});

	const addOffice = async (data: IAddOfficeInputs) => {
		if (selectedColor) {
			await DB.offices.add({ ...data, officeColor: selectedColor });
			toast.success('Office has been added');
			goBack();
		} else {
			toast.error('Please select a color');
		}
	};

	const goBack = () => {
		navigate('/');
	};

	return (
		<Grid container>
			<form onSubmit={handleSubmit(addOffice)}>
				<Grid item>
					<Toaster />
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
									{OFFICE_COLORS.map((circle: string) => (
										<OfficeCircleColor
											predefinedOfficeColor={circle}
											setSelectedColor={setSelectedColor}
											selectedColor={selectedColor}
											key={circle}
										/>
									))}
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
										Add Office
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</ManageOfficeView>
				</Grid>
			</form>
		</Grid>
	);
};

export default AddOfice;
