import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import styles from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props) => {
    return (
        <View style={styles.storyContainer}>
            <UserProfileImage
                profileImage={props.profileImage}
                imageDimensions={65} />
            <Text style={styles.firstName}>{props.firstName}</Text>
        </View>
    )
}

UserStory.props = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.object.isRequired
}


export default UserStory