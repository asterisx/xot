import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    alignitems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    radius: 8,
    padding: 16,
    minHeight: 30,
    borderRadius: 8,
  },
  text: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    maxWidth: "90%",
  },
  optionCorrect: {
    backgroundColor: "#28B18FB2",
  },
  optionWrong: {
    backgroundColor: "#DC5F5FB2",
  },
  thumbsStyle: {
    position: "absolute",
    right: 10,
    height: 40,
    width: 50,
    marginLeft: "auto",
    padding: 0,
    marginTop: 0,
    marginRight: -10,
    transform: [{ scaleX: -1 }, { translateY: 0 }],
  },
  thumbsDownStyle: {
    transform: [{ scaleX: 1 }, { scaleY: -1 }, { translateY: -20 }],
  },
});

export default styles;
