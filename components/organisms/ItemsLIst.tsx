import { dishes } from "@/db/random";
import { FlatList, View } from "react-native";
import CustomText from "../atoms/CustomText";
import { useCallback } from "react";
import { Image } from "expo-image";
import { DishType } from "@/types/random";

export default function ItemsLIst({filter} : {filter: string}) {
    const filteredItems = dishes.filter((dish) => dish.name.toLowerCase().includes(filter.toLowerCase()))

    const renderItem = useCallback(({item}: {item: DishType}) => (
      <View key={item.name} style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{flexBasis: '60%', display: 'flex', flexDirection: 'column', gap: 8}}>
          <CustomText size="m">{item.name}</CustomText>
          <CustomText size="s" style={{color: '#314551'}}>{item.description}</CustomText>
          <CustomText size="s" style={{color: '#314551'}}>${item.price}</CustomText>
        </View>
        <Image style={{width: 100, height: 100, flexBasis: '35%', borderRadius: 8, overflow: "hidden"}} source={item.image} alt='logo image' contentFit='cover' transition={250}/>
      </View>
    ), []);
    
  return (
    <FlatList ItemSeparatorComponent={()=><View style={{marginTop: 16, marginBottom: 16, borderTopWidth: 1, borderColor: '#cbd2d9'}}/>} renderItem={renderItem} data={filteredItems} style={{display: 'flex', flexDirection: 'column', gap: 16, padding: 16}}/>
  )
}