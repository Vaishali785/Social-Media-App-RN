import React from 'react';
import Home from '../screens/Home/Home';
import {Routes} from './Routes';
import Profile from '../screens/Profile/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
	return (
		<ProfileTabs.Navigator
			screenOptions={{
				tabBarIndicatorStyle: {backgroundColor: 'transparent'},
				tabBarStyle: {
					zIndex: 0,
					elevation: 0,
				},
			}}
		>
			<ProfileTabs.Screen
				name="Tab1"
				component={ProfileTabContent}
				options={{
					tabBarLabel: ({focused}) => (
						<ProfileTabTitle isFocused={focused} title={'Photos'} />
					),
				}}
			/>
			<ProfileTabs.Screen
				name="Tab2"
				component={ProfileTabContent}
				options={{
					tabBarLabel: ({focused}) => (
						<ProfileTabTitle isFocused={focused} title={'Videos'} />
					),
				}}
			/>
			<ProfileTabs.Screen
				name="Tab3"
				component={ProfileTabContent}
				options={{
					tabBarLabel: ({focused}) => (
						<ProfileTabTitle isFocused={focused} title={'Saved'} />
					),
				}}
			/>
		</ProfileTabs.Navigator>
	);
};
const MainMenuNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{header: () => null, headerShown: false}}
			initialRouteName={Routes.Home}
		>
			<Drawer.Screen name={Routes.Home} component={Home} />
			<Drawer.Screen name={Routes.Profile} component={Profile} />
		</Drawer.Navigator>
	);
};

const MainNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{header: () => null, headerShown: false}}
			initialRouteName={Routes.Home}
		>
			<Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
		</Stack.Navigator>
	);
};

export default MainNavigation;
