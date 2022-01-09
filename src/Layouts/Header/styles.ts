import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		minHeight: '60px',
		marginBottom: '20px',
	},
	iconSpace: {
		marginRight: '10px',
	},
	gridMarginLeft10: {
		marginLeft: '10px',
	},
	greyBackground: {
		background: '#F8FAFC',
		minHeight: '50%',
		boxShadow: 'none',
		color: 'black',
	},
	removePadding: {
		padding: '0',
	},
	leftSpace2: {
		paddingLeft: '2px',
	},
	rightSideIcons: {
		[theme.breakpoints.up('md')]: {
			justifyContent: 'space-around',
		},
	},
}));
