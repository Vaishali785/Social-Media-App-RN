import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
	return (
		<SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
			<ScrollView contentContainerStyle={globalStyle.flexGrow}>
				<View style={styles.profileImageContainer}>
					<View style={styles.profileImageContent}>
						<Image
							source={require('../../assets/images/default_profile.png')}
							style={styles.profileImage}
						/>
					</View>
				</View>
				<Text style={styles.userName}>Vaishali Aggarwal</Text>
				<View style={styles.statContainer}>
					<View>
						<Text style={styles.statAmount}>45</Text>
						<Text style={styles.statType}>Following</Text>
					</View>
					<View style={styles.statBorder} />
					<View>
						<Text style={styles.statAmount}>30M</Text>
						<Text style={styles.statType}>Followers</Text>
					</View>
					<View style={styles.statBorder} />
					<View>
						<Text style={styles.statAmount}>100</Text>
						<Text style={styles.statType}>Posts</Text>
					</View>
				</View>
				<View style={globalStyle.flex}>
					<ProfileTabsNavigation />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;
