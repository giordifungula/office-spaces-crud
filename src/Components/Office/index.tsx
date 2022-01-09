import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
// @form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// @material-ui
import {
	Typography,
	Grid,
	Button,
	Collapse,
	IconButton,
	InputAdornment,
	TextField,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
// @icons
import { ExpandMore, ExpandLess, Search } from '@material-ui/icons';
// @api
import { IStaffRead, IOfficeRead, DB } from 'DB/db.store';
// @utilities
import { OfficeHeadings } from 'utilities/globals';
// @components
import ManageOfficeView from 'Components/Utilities/ManageOfficeView';
// @local
import useStyles from './styles';
import StaffList from '../ManageStaff/StaffList';

interface IOfficeProps extends React.Attributes {
	office: IOfficeRead;
	goToEditPage?: (officeId: string) => void;
	goToOfficePage?: (officeId: string) => void;
	setSelectedOffice?: React.Dispatch<React.SetStateAction<number | null>>;
	heading?: OfficeHeadings;
	goBack?: () => void;
}

interface ISearchStaffInput {
	searchStaff: string;
}

const schema = yup.object().shape({
	searchStaff: yup.string().required(),
});

const Office = ({
	office,
	goToEditPage,
	setSelectedOffice,
	goToOfficePage,
	heading,
	goBack,
}: IOfficeProps) => {
	const classes = useStyles({});

	const [expanded, setExpanded] = React.useState(false);
	const fetchStaffs = useLiveQuery(() => DB.staffs.toArray(), []);

	const officeUsers = fetchStaffs
		? fetchStaffs.filter((user) => user.officeId === Number(office.id))
		: [];

	const [officeStaffMembers, setOfficeStaffMembers] = React.useState<
		IStaffRead[] | undefined
	>(officeUsers);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleOfficeClicked = (id: string) => {
		goToOfficePage ? goToOfficePage(id) : null;
	};

	const briefSummaryOnOffice = (currentOffice: IOfficeRead) => {
		return officeStaffMembers
			? officeStaffMembers.filter(
					(user) => user.officeId === Number(currentOffice.id),
			  ).length
			: 0;
	};

	React.useEffect(() => {
		if (fetchStaffs) {
			const filterOfficeUsers = fetchStaffs.filter(
				(user) => user.officeId === Number(office.id),
			);
			setOfficeStaffMembers(filterOfficeUsers);
		}
	}, [JSON.stringify(fetchStaffs)]);

	return (
		<>
			<Grid
				container
				className={classes.officeBorderedGrid}
				style={{
					borderLeft: `15px solid ${office.officeColor}`,
				}}
			>
				<Grid
					item
					container
					className={classes.gridLineThrough}
					alignItems="center"
				>
					<Grid
						item
						xs={10}
						onClick={() => handleOfficeClicked(String(office.id))}
					>
						<Typography
							className={classes.officeTextLeft}
							color="secondary"
							variant="h2"
						>
							{office.officeName}
						</Typography>
					</Grid>
					<Grid item xs={2} />

					<Grid item xs={2}>
						<IconButton className={classes.itemIconSpace}>
							<img
								src="https://user-images.githubusercontent.com/27930281/133585466-bef2de47-244a-4535-8caf-69d4dd8266b1.png"
								width="30"
								alt="groupIcon"
							/>
						</IconButton>
					</Grid>
					<Grid
						item
						xs={9}
						onClick={() => handleOfficeClicked(String(office.id))}
					>
						<Typography
							variant="body1"
							color="secondary"
							className={classes.staffText}
						>
							<span style={{ fontWeight: 700 }}>
								{briefSummaryOnOffice(office)}
							</span>{' '}
							Staff Members in Office
						</Typography>
					</Grid>
				</Grid>
				<Grid
					item
					container
					className={classes.gridMoreInfoLeft}
					alignItems="center"
				>
					<Grid item xs={12}>
						<div className={classes.centerText}>
							<Button
								classes={{
									root: classes.buttonRemoveTextTransform,
								}}
								onClick={handleExpandClick}
							>
								<Typography>More info</Typography>
								{expanded ? (
									<ExpandLess color="primary" />
								) : (
									<ExpandMore color="primary" />
								)}
							</Button>
						</div>
					</Grid>
					<Grid item className={classes.gridItemCenter}>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<Grid container spacing={1}>
								<Grid container item alignItems="center">
									<IconButton
										className={classes.itemIconSpace}
									>
										<img
											src="https://user-images.githubusercontent.com/27930281/133578060-83249d88-535c-4353-bf40-e99a1dd52e92.png"
											width="30"
											alt="phoneIcon"
										/>
									</IconButton>
									<Typography
										align="center"
										color="secondary"
									>
										{office.phoneNumber}
									</Typography>
								</Grid>
								<Grid container item alignItems="center">
									<Grid item>
										<IconButton
											className={classes.itemIconSpace}
										>
											<img
												src="https://user-images.githubusercontent.com/27930281/133578137-78ca1cea-fdd0-4aca-ba7f-c7ca36993068.png"
												width="30"
												alt="emailIcon"
											/>
										</IconButton>
									</Grid>
									<Grid item>
										<Typography
											align="center"
											color="secondary"
										>
											{office.emailAddress}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center">
									<Grid item>
										<IconButton
											className={classes.itemIconSpace}
										>
											<img
												src="https://user-images.githubusercontent.com/27930281/133578192-2e6254bd-80c1-4b99-84c5-e9945b9e1d6f.png"
												width="30"
												alt="groupIcon"
											/>
										</IconButton>
									</Grid>
									<Grid item>
										<Typography color="secondary">
											Office Capacity : {office.capacity}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center">
									<Grid item>
										<IconButton
											className={classes.itemIconSpace}
										>
											<img
												src="https://user-images.githubusercontent.com/27930281/133578409-7ef1cd66-b70a-409e-8017-7b1be7425b80.png"
												width="30"
												alt="locationIcon"
											/>
										</IconButton>
									</Grid>
									<Grid item>
										<Typography color="secondary">
											{office.physicalAddress}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Collapse>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Office;
