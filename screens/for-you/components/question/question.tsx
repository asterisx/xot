import React, { useContext } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

import { useGetCorrectAnswerQuery } from "@/store/services";
import { IQuestion, QuestionIdContext } from "@/common";
import { Answers, Reactions, Playlist, Summary } from "./components";
import styles from "./styles";

export const Question: React.FC<IQuestion> = ({
  question,
  image,
  options,
  user,
  description,
  playlist,
  reactions,
}) => {
  const questionId = useContext(QuestionIdContext);
  useGetCorrectAnswerQuery(questionId);

  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: image }}
      resizeMode="cover"
      imageStyle={{ opacity: 0.7 }}
    >
      <SafeAreaView style={styles.content}>
        <View style={styles.top}>
          <View style={styles.questionArea}>
            <View style={styles.questionMain}>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{question}</Text>
              </View>
              <Answers options={options} />
            </View>
            <Summary user={user} description={description} />
          </View>
          <Reactions {...reactions} />
        </View>
        <Playlist playlist={playlist} />
      </SafeAreaView>
    </ImageBackground>
  );
};
