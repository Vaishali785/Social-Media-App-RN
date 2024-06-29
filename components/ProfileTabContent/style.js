import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	profileTabContentContainer: {
		backgroundColor: '#fff',
	},
	profileTabContent: {
		padding: 20,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		rowGap: 30,
		justifyContent: 'space-between',
	},
	image: {
		width: 180,
		height: 120,
	},
});

export default styles;
