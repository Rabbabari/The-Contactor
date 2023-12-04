import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Contacts from "../views/Contacts";
import DetailedContacts from "../views/DatailedContact";

// Sets up all the routs in the app
const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Contacts" component={Contacts} />
				<Stack.Screen
					name="DetailedContacts"
					component={DetailedContacts}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
