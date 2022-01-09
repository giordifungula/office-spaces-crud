import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
	createStyles({
		greyBackground: {
			background: '#F8FAFC',
			position: 'relative',
			overflowX: 'hidden',
			[theme.breakpoints.up('lg')]: {
				maxWidth: '1200px',
				display: 'block',
				margin: '0 auto',
			},
		},
		fab: {
			position: 'fixed',
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
	}),
);
