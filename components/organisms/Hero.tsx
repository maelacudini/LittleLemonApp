import { heroStyle } from "@/style/heroStyle";
import { View } from "react-native";
import CustomTextInput from "../atoms/CustomTextInput";
import CustomText from "../atoms/CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import images from "@/assets/images";
import { Image } from "expo-image";

export default function Hero({setFilter}: {setFilter: ((filter: string) => void)}) {
  return (
    <View style={heroStyle.main}>
      <View style={heroStyle.title}>
        <CustomText size="xl" style={{color: "#f4ce14"}}>Little Lemon</CustomText>
        <CustomText size="l" style={{color: "#fff"}}>Chicago</CustomText>
      </View>
      <View style={heroStyle.description}>
        <CustomText size="s" style={{color: "#fff", flexBasis: '60%'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</CustomText>
        <Image style={heroStyle.image} source={images.HeroImage} alt='logo image' contentFit='cover' transition={250}/>
      </View>
      <CustomTextInput 
        icon={<Ionicons style={{ position: 'absolute', left: 8, zIndex: 1 }} name="search" size={24} color="#495e57" />} 
        onChangeText={(text) => setFilter(text)} 
        placeholder="Look for a dish" 
        variant="light" 
      />
    </View>
  )
}
