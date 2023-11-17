import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import styles from "./styles";

export const Skeleton = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder
        highlightColor="rgba(255,255,255, 0.5)"
        backgroundColor="rgba(0,0,0, 0.5)"
      >
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width="70%" height={20} />
          <SkeletonPlaceholder.Item marginTop={5} width="30%" height={25} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        highlightColor="rgba(255,255,255, 0.5)"
        backgroundColor="rgba(0,0,0, 0.5)"
      >
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width="50%" height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width="100%" height={15} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default Skeleton;
