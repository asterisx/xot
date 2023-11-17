import React from "react";
import { View, Text } from "react-native";

import PlaylistIcon from "@/assets/icons/playlist.svg";
import ArrowIcon from "@/assets/icons/arrow.svg";
import styles from "./styles";
interface Props {
  playlist: string;
}

export const Playlist: React.FC<Props> = ({ playlist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.playlistContainer}>
        <PlaylistIcon />
        <Text style={styles.text}>Playlist • {playlist}</Text>
      </View>
      <ArrowIcon />
    </View>
  );
};
