import React from "react";
import { View, Text, FlatList } from "react-native";
import Contact from "../ContactOverview";

const ContactList = ({ data }) => {
	return (
		<View>
			<FlatList
				data={data}
				renderItem={({
					item: { name, phoneNumber, photo, fileName },
				}) => {
					return (
						<Contact
							name={name}
							phoneNumber={phoneNumber}
							photo={photo}
							fileName={fileName}
						/>
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
