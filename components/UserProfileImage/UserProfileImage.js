import { View, Text, Image } from 'react-native'
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

const UserProfileImage = (props) => {
    return (
        <View style={[styles.userImageContainer, { borderRadius: props.imageDimensions }]}>
            <Image source={props.profileImage} style={{ width: props.imageDimensions, height: props.imageDimensions }} />
        </View>
    )
}

UserProfileImage.props = {
    profileImage: PropTypes.object.isRequired,
    imageDimensions: PropTypes.number.isRequired
}

export default UserProfileImage