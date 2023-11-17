import React from "react";
import { View } from "react-native";

import { IOption } from "@/common";
import { Answer } from "./components";
import styles from "./styles";
interface Props {
  options: IOption[];
}

export const Answers: React.FC<Props> = ({ options }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Answer key={option.id} {...option} />
      ))}
    </View>
  );
};
