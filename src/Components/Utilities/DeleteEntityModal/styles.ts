import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
	createStyles({
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
		},
		noPaddingSides: {
			paddingLeft: '0px',
			paddingRight: '0px',
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
