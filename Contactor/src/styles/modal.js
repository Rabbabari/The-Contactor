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
		borderRadius: 10,
		width: winWidth - 100,
		backgroundColor: "white",
		padding: 40,
	},
	textInput: {
		marginBottom: 35,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		paddingVertical: 10,
		width: 250,
	},
	icon: {
		fontSize: 60,
		marginVertical: 10,
		textAlign: "center",
	},
	colorOptionsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10,
		paddingVertical: 20,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		marginBottom: 35,
	},
	colorOption: {
		width: 35,
		height: 35,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginVertical: 10,
		marginHorizontal: 40,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
	text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
	checkmark: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: -12 }, { translateY: -12 }],
		color: "white",
		fontSize: 24,
	},
	icon: {
		fontSize: 60,
		textAlign: "center",
	},
});
