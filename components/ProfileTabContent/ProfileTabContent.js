import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';

const ProfileTabContent = () => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.profileTabContentContainer}
		>
			<View style={styles.profileTabContent}>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
				<Image
					resizeMode="contain"
					source={require('../../assets/images/default_post.png')}
					style={styles.image}
				/>
			</View>
		</ScrollView>
	);
};

export default ProfileTabContent;
