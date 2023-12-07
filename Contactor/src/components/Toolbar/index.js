import React from "react";
import PropTypes from "prop-types";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
	View,
	TextInput,
	Text,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";
import styles from "../../styles/toolbar";

const Toolbar = ({
	searchQuery,
	handelSearch,
	createContact,
	importDeviceContacts,
	clearContacts,
}) => {
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
					<Entypo name="plus" size={40} color="black" />
				</TouchableHighlight>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					style={styles.importContacts}
					onPress={importDeviceContacts}
				>
					<Text style={styles.toolbarText}>Import Contacts</Text>
				</TouchableOpacity>
				<TouchableHighlight
					style={styles.deleteAllContacts}
					onPress={createContact}
				>
					<Ionicons
						style={styles.icon}
						name="trash-outline"
						size={40}
						color="black"
						onPress={clearContacts}
					/>
				</TouchableHighlight>
			</View>
		</View>
	);
};

Toolbar.propTypes = {
	// Whether or not there are any selected boards
	searchQuery: PropTypes.string.isRequired,
	handelSearch: PropTypes.func.isRequired,
	createContact: PropTypes.func.isRequired,
	importDeviceContacts: PropTypes.func.isRequired,
	clearContacts: PropTypes.func.isRequired,
};

export default Toolbar;
