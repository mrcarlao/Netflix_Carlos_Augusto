import React, { useEffect, useReducer, useState } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileToEdit from './screen/ProfileToEdit';
import Tabs from './routes/Tabs';
import ChooseIcon from './screen/ChooseIcon';
import Camera from './screen/Camera';
import ProfileContext from './Context/ProfileContext';
import { configureLanguageToI18n } from "./languages/utils";

const Stack = createStackNavigator();

configureLanguageToI18n();


export default function App(props) {

	const App = () => {
		useEffect(() => {
			const unsubscribe = messaging().onMessage(async remoteMessage => {
				Alert.alert('Chegou uma nova mensagem para você!', JSON.stringify(remoteMessage));
			});

			return unsubscribe;

		}, []);

	}
	const [user, changeUser] = useState("Jose");
	return (
		<ProfileContext.Provider value={{ user, changeUser }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
					<Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
					<Stack.Screen name="ChooseIcon" component={ChooseIcon} />
					<Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
		</ProfileContext.Provider>
	);
};


