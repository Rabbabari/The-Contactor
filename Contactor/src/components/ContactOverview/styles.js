import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#f5f5f5",
	},
	imageContainer: {
		marginBottom: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 200,
		margin: 10,
		marginRight: 20,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 4,
	},
	number: {
		fontSize: 18,
		color: "gray",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "lightgray",
		padding: 10,
		borderRadius: 20,
	},
	buttonText: {
		color: "white",
		fontSize: 18,
	},
});
