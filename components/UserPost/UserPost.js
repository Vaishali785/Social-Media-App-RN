import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import UserStory from '../UserStory/UserStory'
import UserProfileImage from '../UserProfileImage/UserProfileImage'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import styles from './style';

const UserPost = (props) => {
    return (
        <View style={styles.userPostContainer}>
            <View style={styles.user}>
                <View style={styles.userContainer}>
                    <UserProfileImage profileImage={props.profileImage}
                        imageDimensions={48} />
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userName}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={styles.location}>{props.location}</Text>}
                    </View>
                </View>

                <FontAwesomeIcon icon={faEllipsisH} color='#79869f' size={24} />
            </View>
            <View style={styles.postImage}>
                <Image source={props.image} style={styles.image} />
            </View>

            <View style={styles.userPostStats}>
                <View style={styles.userPostStatsButton}>
                    <FontAwesomeIcon icon={faHeart} color={"#79869f"} />
                    <Text style={styles.userPostStatsText}>{props.likes}</Text>
                </View>
                <View style={styles.userPostStatsButton}>
                    <FontAwesomeIcon icon={faMessage} color={"#79869f"} />
                    <Text style={styles.userPostStatsText}>{props.comments}</Text>
                </View>
                <View style={styles.userPostStatsButton}>
                    <FontAwesomeIcon icon={faBookmark} color={"#79869f"} />
                    <Text style={styles.userPostStatsText}>{props.bookmarks}</Text>
                </View>
            </View>
        </View>
    )
}

UserPost.props = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.object.isRequired,
    profileImage: PropTypes.object.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,

}

export default UserPost