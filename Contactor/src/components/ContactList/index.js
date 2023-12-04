import React from "react";
import { View, Text, FlatList } from "react-native";
import Contact from "../ContactOverview";

const ContactList = ({ data }) => {
	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item: { name, number } }) => {
					return <Contact name={name} number={number} />;
				}}
			/>
		</View>
	);
};

export default ContactList;

{
	/* <Text>The list of all contacts</Text>
			<Contact /> */
}
