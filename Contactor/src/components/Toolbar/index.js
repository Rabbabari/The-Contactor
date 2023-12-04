import React from "react";
// import PropTypes from "prop-types";
import { View, TextInput, Text } from "react-native";
import styles from "../../styles/toolbar";

const Toolbar = ({ searchQuery, handelSearch }) => {
	// Checking if exactly one list is selected for enabling the Edit functionality

	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<View style={styles.toolbarAction}>
				<TextInput
					placeholder="search..."
					clearButtonMode="always"
					style={styles.searchInput}
					autoCapitalize="none"
					autoCorrect={false}
					value={searchQuery}
					onChangeText={(query) => handelSearch(query)}
				/>
				{/* add an icon? */}
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
