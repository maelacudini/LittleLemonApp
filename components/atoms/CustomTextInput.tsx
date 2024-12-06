import { customTextInput } from '@/style/customTextInput'
import { CustomTextInputPropTypes } from '@/types/customTextInput'
import { TextInput, View } from 'react-native'

export default function CustomTextInput(props: CustomTextInputPropTypes) {
    const { icon, onChangeText, onBlur, value, placeholder, variant = 'dark', ...rest } = props
    
    const style = icon ? [customTextInput[variant], { paddingLeft: 40 }] : customTextInput[variant]

  return (
    <View style={customTextInput.container}>
      {icon && icon}
      <TextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor='#495e57'
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        style={style}
      />
    </View>
  )
}
