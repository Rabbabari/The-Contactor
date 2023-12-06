import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
		height: 150,
		backgroundColor: "white",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	searchBox: {
		flex: 1,
		marginTop: 15,
		alignItems: "center",
		padding: 10,
		marginVertical: 10,
		marginHorizontal: 5,
		borderRadius: 10,
		borderColor: "black",
		backgroundColor: "lightgray",
	},
	toolbarText: {
		fontSize: 17,
		textAlign: "center",
	},
	addNewContact: {
		marginTop: 20,
		width: "10%",
	},
	importContactsContainer: {
		width: "90%",
	},
	importContacts: {
		margin: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		borderColor: "black",
		backgroundColor: "lightgray",
	},
});
