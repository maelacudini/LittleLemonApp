import { FeedbackContext } from "@/context/feedback";
import { FeedbackContextType } from "@/types/feedback";
import { useContext } from "react";

export const useFeedback = (): FeedbackContextType => {
    const context = useContext(FeedbackContext);
    if (!context) {
      throw new Error("useFeedback must be used within a FeedbackProvider");
    }
    return context;
  };
  