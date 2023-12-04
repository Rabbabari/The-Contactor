import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		backgroundColor: "white",
	},
	toolbarAction: {
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
	toolbarActionText: {
		fontSize: 17,
		fontWeight: "bold",
		color: "white",
	},
	search: {},
	searchInput: {},
});
