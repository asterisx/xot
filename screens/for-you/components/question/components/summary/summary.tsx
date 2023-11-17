import React from "react";
import { View, Text } from "react-native";

import { IUser } from "@/common";
import styles from "./styles";
interface Props {
  user: IUser;
  description: string;
}

export const Summary: React.FC<Props> = ({ user, description }) => {
  const descriptionWithoutHashTags = description.split("#")[0];
  const hashTags = description
    .split(" ")
    .filter((word) => word.startsWith("#"));

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{descriptionWithoutHashTags}</Text>
        <>
          {hashTags.map((hashTag) => (
            <Text key={hashTag} style={styles.hashTag}>
              {hashTag}
            </Text>
          ))}
        </>
      </View>
    </View>
  );
};
