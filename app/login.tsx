import { useSession } from '@/context/auth';
import { Text, View } from 'react-native';
import { loginStyles } from '@/style/login';
import { useForm, Controller } from "react-hook-form"
import { LogInDataType } from '@/types/auth';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/atoms/CustomButton';
import CustomTextInput from '@/components/atoms/CustomTextInput';
import { StatusBar } from 'expo-status-bar';
import CustomText from '@/components/atoms/CustomText';
import images from '@/assets/images';
import { Image } from 'expo-image';

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })
  const { logIn } = useSession();
  const router = useRouter()

  const onSubmit = (data: LogInDataType) => {
    logIn({password: data.password, username: data.username})
    router.replace('/');
  }

  return (
    <View style={loginStyles.main}>
      <StatusBar style="dark" />
      <View style={{position: 'absolute', left: 0, right: 0, top: 32, display: 'flex', alignItems: 'center'}}>
        <Image style={{width: 200, height: 100}} source={images.Logo} alt='logo image' contentFit='contain' transition={250}/>
      </View>
      <View style={loginStyles.form}>
        <CustomText style={{color: '#314551', textAlign: 'center'}}>Let us get to know you</CustomText>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 1,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput onChangeText={onChange} onBlur={onBlur} placeholder='Username' value={value} variant='dark'/>
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 1,
            validate: (value) => value.trim().length !== 0
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput onChangeText={onChange} onBlur={onBlur} placeholder='Password' value={value} variant='dark' secureTextEntry />
          )}
          name="password"
        />
        
        <View style={loginStyles.formButtons}>
          <CustomButton title='Login' onPress={handleSubmit(onSubmit)} disabled={isLoading || !isValid} variant='full'/>
          <CustomButton title='Reset' onPress={() => reset()} disabled={isLoading} variant='outline'/>
        </View>
      </View>
    </View>
  );
}
