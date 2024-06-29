import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App() {
	return (
		<NavigationContainer>
			<MainNavigation />
		</NavigationContainer>
	);
}

export default App;
