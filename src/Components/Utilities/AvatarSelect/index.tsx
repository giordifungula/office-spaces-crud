import React from 'react';
// @material-ui
import { Grid, Button, Avatar } from '@material-ui/core';
// @api
import { IStaffRead } from 'DB/db.store';

interface IOfficeColorProps {
	predefinedAvatar: string;
	staff?: IStaffRead;
	selectedAvatar: string | null;
	setSelectedAvatar: React.Dispatch<React.SetStateAction<string | null>>;
}

const AvatarSelect = ({
	predefinedAvatar,
	setSelectedAvatar,
	staff,
	selectedAvatar,
}: IOfficeColorProps) => {
	const handleSelectedAvatar = (avatar: string) => {
		setSelectedAvatar(avatar);
	};

	const predefinedAvatarIsSelected =
		selectedAvatar && selectedAvatar === predefinedAvatar;

	const isAboutToEditAvatar = staff && staff.avatar === predefinedAvatar;

	return (
		<Grid item xs={3}>
			<Button onClick={() => handleSelectedAvatar(predefinedAvatar)}>
				<Avatar
					alt={`Avatar n°${predefinedAvatar}`}
					src={`${predefinedAvatar}`}
					style={{
						border: predefinedAvatarIsSelected
							? '4px solid #475569'
							: isAboutToEditAvatar
							? '4px solid #000000'
							: '',
					}}
				/>
			</Button>
		</Grid>
	);
};

export default AvatarSelect;
