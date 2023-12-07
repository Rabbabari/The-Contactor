import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth } = Dimensions.get("window");

export default StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 0.4,
		width: winWidth - 100,
		backgroundColor: "white",
		padding: 40,
		borderRadius: 20,
	},
	textInput: {
		marginBottom: 35,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
		borderRadius: 5,
		paddingVertical: 10,
		backgroundColor: "#A5A5F7",
		width: 250,
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.84,
		elevation: 5,
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
	},
	icon: {
		fontSize: 60,
		marginVertical: 10,
		textAlign: "center",
	},
	button: {
		marginVertical: 10,
		marginHorizontal: 40,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 12,
		textAlign: "center",
		justifyContent: "center",
		fontWeight: "bold",
		fontSize: 17,
		backgroundColor: "#A5A5F7",

		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.84,
		elevation: 5,
	},
	text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
});
