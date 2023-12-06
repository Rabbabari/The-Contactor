import React from "react";
// import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import { View, TextInput, Text, TouchableHighlight } from "react-native";
import styles from "../../styles/toolbar";

const Toolbar = ({
	searchQuery,
	handelSearch,
	createContact,
	importDeviceContacts,
}) => {
	// Checking if exactly one list is selected for enabling the Edit functionality

	return (
		<View style={styles.toolbar}>
			<View style={styles.row}>
				<View style={styles.searchBox}>
					<TextInput
						placeholder="search..."
						clearButtonMode="always"
						style={styles.toolbarText}
						autoCapitalize="none"
						autoCorrect={false}
						value={searchQuery}
						onChangeText={(query) => handelSearch(query)}
					/>
				</View>
				<TouchableHighlight
					style={styles.addNewContact}
					onPress={createContact}
				>
					<Entypo
						style={styles.icon}
						name="plus"
						size={40}
						color="black"
					/>
				</TouchableHighlight>
			</View>
			<View style={styles.importContactsContainer}>
				<TouchableHighlight
					style={styles.importContacts}
					onPress={importDeviceContacts}
				>
					<Text style={styles.toolbarText}>Import Contacts</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
};

// Toolbar.propTypes = {
// 	// Whether or not there are any selected boards
// 	hasSelectedBoards: PropTypes.bool.isRequired,
// 	onCreateBoard: PropTypes.func.isRequired,
// 	deleteBoard: PropTypes.func.isRequired,
// };

export default Toolbar;
