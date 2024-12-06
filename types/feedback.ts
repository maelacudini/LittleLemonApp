export type FeedbackType = {
    type: 'informational' | 'error' | 'success',
    message: string | null
}

export type FeedbackContextType = {
    feedback: FeedbackType;
    setFeedback: (feedback: FeedbackType) => void;
};