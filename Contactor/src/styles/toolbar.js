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
		margin: 10,
		fontWeight: "bold",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: "#A5A5F7",
		width: "50%",
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.84,
		elevation: 5,
	},
	toolbarText: {
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
	},
	addNewContact: {
		marginTop: 20,
		width: "20%",
		paddingLeft: 10,
		paddingBottom: 10,
	},
	importContactsContainer: {
		width: "100%",
	},
	deleteAllContacts: {
		marginTop: 20,
		width: "20%",
		justifyContent: "center",
		paddingLeft: 10,
		paddingBottom: 10,
	},
	importContacts: {
		flex: 1,
		margin: 10,
		fontWeight: "bold",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: "#A5A5F7",
		width: "50%",
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
