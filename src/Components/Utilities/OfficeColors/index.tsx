import React from 'react';
// @material-ui
import { Grid, Button } from '@material-ui/core';
// @api
import { IOfficeRead } from 'DB/db.store';

interface IOfficeColorProps extends React.Attributes {
	predefinedOfficeColor: string;
	office?: IOfficeRead;
	selectedColor: string | null;
	setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
}

const OfficeCircleColor = ({
	predefinedOfficeColor,
	setSelectedColor,
	office,
	selectedColor,
}: IOfficeColorProps) => {
	const handleSelectedColor = (color: string) => {
		setSelectedColor(color);
	};

	const predefinedColorIsSelected =
		selectedColor && selectedColor === predefinedOfficeColor;

	const isAboutToEditOffice =
		office && office.officeColor === predefinedOfficeColor;

	return (
		<Grid item xs={2}>
			<Button onClick={() => handleSelectedColor(predefinedOfficeColor)}>
				<span
					style={{
						height: '30px',
						width: '30px',
						backgroundColor: predefinedOfficeColor,
						borderRadius: '50%',
						display: 'inline-block',
						marginRight: '10px',
						border: predefinedColorIsSelected
							? '4px solid #475569'
							: isAboutToEditOffice
							? '4px solid #000000'
							: ' ',
					}}
				/>
			</Button>
		</Grid>
	);
};

export default OfficeCircleColor;
