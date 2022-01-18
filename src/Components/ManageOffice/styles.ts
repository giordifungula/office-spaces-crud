import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(() =>
	createStyles({
		textLeft: {
			textAlign: 'left',
		},
		deleteModalHeadingText: {
			color: '#000000',
			fontWeight: 700,
			fontStyle: 'normal',
			fontSize: '24px',
		},
		gridSpacingTop: {
			marginTop: '15px',
		},
		outlinedInputBorderLight: {
			borderColor: '#E8F3FC !important',
			borderRadius: '8px',
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
		actionOfficeBtn: {
			backgroundColor: '#489DDA !important',
		},
		noBackgroundButton: {
			backgroundColor: 'transparent !important',
			color: '#489DDA',
		},
		deleteButton: {
			backgroundColor: '#F44336 !important',
			color: '#fff',
		},
		noPaddingSides: {
			paddingLeft: '0px',
			paddingRight: '0px',
		},
		headingText: {
			fontWeight: 600,
			color: '#000000',
			fontSize: '24px',
			marginBottom: '15px',
		},
		textLabelGrey: {
			'& .MuiFormLabel-root': {
				color: '#787F89',
				fontWeight: 420,
			},
		},
	}),
);
