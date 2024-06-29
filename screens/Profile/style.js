import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
	profileImage: {
		width: 110,
		height: 110,
		borderRadius: 100,
	},
	profileImageContainer: {
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 32,
	},
	profileImageContent: {
		borderWidth: 1,
		borderColor: '#0150ec',
		padding: 4,
		borderRadius: 110,
	},
	userName: {
		marginTop: 20,
		textAlign: 'center',
		fontFamily: getFontFamily('Inter', '600'),
		fontSize: 20,
	},
	statAmount: {
		fontFamily: getFontFamily('Inter', '600'),
		fontSize: 20,
		color: '#022150',
		textAlign: 'center',
	},
	statType: {
		fontFamily: getFontFamily('Inter', '400'),
		fontSize: 16,
		color: '#79869f',
		textAlign: 'center',
	},
	statContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginHorizontal: 40,
		paddingVertical: 30,
		borderBottomWidth: 1,
		borderColor: '#e9eff1',
	},
	statBorder: {
		borderRightWidth: 1,
		borderColor: '#e9eff1',
	},
});

export default styles;
