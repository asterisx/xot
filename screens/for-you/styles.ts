import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
  },
  content: {
    minHeight: "100%",
    width: "100%",
  },
  skeletonContainer: {
    flexGrow: 1,
    minHeight: "100%",
    paddingTop: 100,
  },
});

export default styles;
