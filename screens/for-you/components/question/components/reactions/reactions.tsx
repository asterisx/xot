import React from "react";
import { View, Text } from "react-native";

import FavIcon from "@/assets/icons/fav.svg";
import LoveIcon from "@/assets/icons/love.svg";
import CommentIcon from "@/assets/icons/comment.svg";
import BookmarkIcon from "@/assets/icons/bookmark.svg";
import ShareIcon from "@/assets/icons/share.svg";
import styles from "./styles";

interface ReactionProps {
  icon: React.ReactNode;
  count: number;
}

const Reaction: React.FC<ReactionProps> = ({ icon, count }) => (
  <View style={styles.reactionContainer}>
    {icon}
    <Text style={styles.text}>{count}</Text>
  </View>
);

interface Props {
  likes: number;
  comments: number;
  bookmarks: number;
  shares: number;
}

export const Reactions: React.FC<Props> = ({
  likes,
  comments,
  bookmarks,
  shares,
}) => (
  <View style={styles.container}>
    <FavIcon />
    <Reaction icon={<LoveIcon />} count={likes} />
    <Reaction icon={<CommentIcon />} count={comments} />
    <Reaction icon={<BookmarkIcon />} count={bookmarks} />
    <Reaction icon={<ShareIcon />} count={shares} />
  </View>
);
