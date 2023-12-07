import React from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";
import Contact from "../ContactOverview";

const ContactList = ({ data, callNumber }) => {
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
							callNumber={callNumber}
						/>
					);
				}}
				ListFooterComponent={<View style={{ height: 310 }} />}
			/>
		</View>
	);
};

ContactList.propTypes = {
	data: PropTypes.array.isRequired,
	callNumber: PropTypes.func.isRequired,
};

export default ContactList;
