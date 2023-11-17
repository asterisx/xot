import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#161616",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 4,
  },
  playlistContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 16,
    color: "rgba(255, 255, 255, 1)",
  },
});

export default styles;
