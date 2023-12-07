import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 20,
	},
	imageContainer: {
		marginBottom: 20,
	},
	image: {
		width: 400,
		height: 400,
		borderRadius: 200,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 4,
	},
	number: {
		fontSize: 18,
		color: "gray",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#A5A5F7",
		padding: 15,
		borderRadius: 9,
		margin: 10,
		width: 200,
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.84,
		elevation: 5,
	},
	buttonText: {
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
	},
});
