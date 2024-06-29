import {View, Text} from 'react-native';
import React from 'react';
import {PropTypes} from 'prop-types';
import styles from './style';

const ProfileTabTitle = props => {
	return (
		<Text style={[styles.title, !props.isFocused && styles.titleNotFocused]}>
			{props.title}
		</Text>
	);
};

ProfileTabTitle.propTypes = {
	title: PropTypes.string.isRequired,
	isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
