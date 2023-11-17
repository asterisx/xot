import React, { useState } from "react";
import { View } from "react-native";
import InfinitePager from "react-native-infinite-pager";

import { useGetQuestionsQuery } from "@/store/services";
import { QuestionIdContext } from "@/common";
import { Question, Skeleton, TopBar } from "./components";
import styles from "./styles";

const ForYou: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { data: questions, isLoading } = useGetQuestionsQuery(index);

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        {false ? (
          <Skeleton />
        ) : (
          <InfinitePager
            renderPage={({ index }) => {
              if (questions && index >= 0 && index < questions?.length) {
                return (
                  <QuestionIdContext.Provider value={questions[index].id}>
                    <Question {...questions[index]} />
                  </QuestionIdContext.Provider>
                );
              } else
                return (
                  <View style={styles.skeletonContainer}>
                    <Skeleton />
                  </View>
                );
            }}
            style={{ flexGrow: 1 }}
            vertical={true}
            onPageChange={(page) => {
              setIndex((i) => i + 1);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default ForYou;
