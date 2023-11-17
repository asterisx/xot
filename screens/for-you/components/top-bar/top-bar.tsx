import React from "react";
import { View, Text } from "react-native";

import ClockIcon from "@/assets/icons/clock.svg";
import SearchIcon from "@/assets/icons/search.svg";
import { useTimeSpent } from "@/common";
import { styles } from "./styles";

export const TopBar: React.FC = () => {
  const timeSpent = useTimeSpent();
  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <ClockIcon fillOpacity={0.6} />
        <Text style={styles.quizTime}>{timeSpent}</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>For You</Text>
      </View>
      <SearchIcon />
    </View>
  );
};
