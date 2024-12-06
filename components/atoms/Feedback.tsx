import { useFeedback } from "@/hooks/useFeedback";
import { feedbackStyles } from "@/style/feedback";
import { Text, View } from "react-native";

export default function Feedback() {
    const { feedback } = useFeedback();
    let containerStyle: 'container_informational' | 'container_error' |  'container_success'

    switch (feedback.type) {
      case "error":
        containerStyle = 'container_error'
        break;
      case "informational":
        containerStyle = 'container_informational'
        break;
      case "success":
        containerStyle = 'container_success'
        break;
    }

    if (!feedback.message) {
        return
    }

  return (
    <View style={feedbackStyles.main}>
      <View style={feedbackStyles[containerStyle]}>
        <Text style={feedbackStyles[feedback.type]}>
          {feedback.message}
        </Text>
      </View>
    </View>
  )
}
