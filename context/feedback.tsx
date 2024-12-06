import { FeedbackContextType, FeedbackType } from "@/types/feedback";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedback, setFeedback] = useState<FeedbackType>({
    type: 'informational',
    message: null
  });

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback({type: 'informational', message: null}), 5000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};