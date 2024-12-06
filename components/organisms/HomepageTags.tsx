import { Text, View } from "react-native";
import CustomText from "../atoms/CustomText";
import { tags } from "@/db/random";

export default function HomepageTags() {
  return (
    <View style={{padding: 16, display: 'flex', flexDirection: 'column', gap: 16}}>
        <CustomText size='s' style={{fontWeight: '700'}}>ORDER FOR DELIVERY!</CustomText>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
            {tags.map((tag) => <Text key={tag} style={{backgroundColor: '#cbd2d9', color: '#314551', fontWeight: 700, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, overflow: 'hidden'}}>{tag}</Text>)}
        </View>
    </View>
  )
}
