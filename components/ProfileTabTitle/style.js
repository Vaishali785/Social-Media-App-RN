import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
	title: {
		color: '#022150',
		fontFamily: getFontFamily('Inter', '500'),
		fontSize: 16,
		padding: 15,
	},
	titleNotFocused: {
		color: '#79869f',
		fontFamily: getFontFamily('Inter', '400'),
	},
});

export default styles;
