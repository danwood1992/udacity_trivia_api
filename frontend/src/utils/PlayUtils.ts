export const getNextQuestionIndex = (currentQuestionIndex: number, questions: string | any[]) => {
    return currentQuestionIndex + 1 < questions.length ? currentQuestionIndex + 1 : currentQuestionIndex;
  };
