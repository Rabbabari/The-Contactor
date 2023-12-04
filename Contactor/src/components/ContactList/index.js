import React from "react";
import { View, Text, FlatList } from "react-native";
import Contact from "../ContactOverview";

const ContactList = ({ data }) => {
	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item: { name, number, photo } }) => {
					return (
						<Contact name={name} number={number} photo={photo} />
					);
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
