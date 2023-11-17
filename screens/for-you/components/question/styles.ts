import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    minHeight: "100%",
    minWidth: "100%",
  },
  content: {
    flexDirection: "column",
    flexGrow: 1,
  },
  top: {
    flexGrow: 1,
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "flex-end",
  },
  questionArea: {
    flexGrow: 1,
    flexDirection: "column",
    maxWidth: "80%",
  },
  questionMain: {
    flexGrow: 1,
    justifyContent: "space-between",
    marginBottom: 30,
  },
  questionContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    borderRadius: 12,
  },
  question: {
    fontSize: 22,
    fontWeight: "500",
    padding: 7,
    color: "rgba(255, 255, 255, 1)",
  },
});

export default styles;
