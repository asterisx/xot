import { NativeModules, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: NativeModules.StatusBarManager.HEIGHT,
    height: 55,
    backgroundColor: "transparent",
    width: "100%",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStartColor: "red",
    opacity: 1,
    zIndex: 1000,
  },
  clockContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  quizTime: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    position: "absolute",
    left: 20,
  },
  headerContainer: {
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 6,
  },
  header: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginRight: -10,
    marginLeft: -10,
    letterSpacing: -0.2,
  },
});
