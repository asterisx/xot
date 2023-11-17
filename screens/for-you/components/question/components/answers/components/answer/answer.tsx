import React, { useContext, useState } from "react";
import { View, Text, Image } from "react-native";

import { useGetCorrectAnswerQuery } from "@/store/services";
import { QuestionIdContext } from "@/common";
import styles from "./styles";

interface Props {
  id: string;
  answer: string;
}

export const Answer: React.FC<Props> = ({ id, answer }) => {
  const [isSelected, setIsSelected] = useState(false);
  const questionId = useContext(QuestionIdContext);
  const { data: correctAnswers, isLoading } =
    useGetCorrectAnswerQuery(questionId);

  const isCorrect = isLoading
    ? false
    : correctAnswers?.find((ca) => ca.id === id);
  const containerStyles =
    isSelected && !isLoading
      ? [
          styles.container,
          isCorrect ? styles.optionCorrect : styles.optionWrong,
        ]
      : styles.container;

  return (
    <View style={[containerStyles]} onTouchEnd={() => setIsSelected(true)}>
      <Text style={styles.text}>{answer}</Text>
      {isSelected && !isLoading && isCorrect && (
        <Image
          source={require("@/assets/icons/thumbs-up.gif")}
          style={styles.thumbsStyle}
        />
      )}
      {isSelected && !isLoading && !isCorrect && (
        <Image
          source={require("@/assets/icons/thumbs-down.gif")}
          style={[styles.thumbsStyle, styles.thumbsDownStyle]}
        />
      )}
    </View>
  );
};
