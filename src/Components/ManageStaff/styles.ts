import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
	createStyles({
		root: {
			justifyContent: 'center',
			background: 'none',
		},
		avatarText: {
			color: '#000000',
			fontWeight: 600,
			fontStyle: 'normal',
			fontSize: '24px',
			textTransform: 'capitalize',
		},
		textLabelGrey: {
			'& .MuiFormLabel-root': {
				color: '#787F89',
				fontWeight: 420,
			},
		},
		newStaffText: {
			color: '#000000',
		},
		noPaddingSides: {
			paddingLeft: '0px',
			paddingRight: '0px',
		},
		newStaffMemberHeading: {
			fontWeight: 800,
			fontStyle: 'normal',
			fontSize: '24px',
			color: '#000000',
			lineHeight: '30px',
			textTransform: 'capitalize',
		},
		// from old code either remove
		actionOfficeBtn: {
			backgroundColor: '#489DDA !important',
		},
		deleteModalHeadingText: {
			color: '#000000',
			fontWeight: 700,
			fontStyle: 'normal',
			fontSize: '24px',
		},
		textLeft: {
			textAlign: 'left',
		},
		gridSpacingTop: {
			marginTop: '15px',
			marginBottom: '10px',
		},
		baseBtn: {
			width: '232px',
			height: '48px',
			color: '#fff',
			margin: '0 auto',
			display: 'block',
			fontWeight: 500,
			fontSize: '16px',
			borderRadius: '100px',
		},
		outlinedInputBorderLight: {
			borderColor: '#E8F3FC !important',
			borderRadius: '8px',
		},
		noBackgroundButton: {
			backgroundColor: 'transparent !important',
			color: '#489DDA',
		},
		deleteButton: {
			backgroundColor: '#F44336 !important',
			color: '#fff',
		},
	}),
);
