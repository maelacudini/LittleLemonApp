import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, View } from 'react-native'
import CustomText from './CustomText'
import { CustomCheckboxPropsType } from '@/types/customCheckbox'

export default function CustomCheckbox(props: CustomCheckboxPropsType) {
    const { label, checked, ...rest } = props;

  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, width: '100%'}}>
        <Pressable
        {...rest}
            role="checkbox"
            style={{
                width: 24, 
                height: 24, 
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                borderWidth: 2,
                borderColor: '#314551',
                backgroundColor: checked ? '#314551' : "#fff",
            }}
            aria-checked={checked}>
            {checked && <Ionicons name="checkmark" size={16} color={checked ? '#fff' : "#314551"} />}
        </Pressable>
        <CustomText size="s">{label}</CustomText>
    </View>
  )
}
