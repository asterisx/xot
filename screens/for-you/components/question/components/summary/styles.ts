import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "white",
    flexDirection: "column",
    gap: 5,
  },
  name: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
  },
  descriptionContainer: {
    flexDirection: "row",
  },
  description: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16,
  },
  hashTag: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 16,
  },
});

export default styles;
