
import { useSession } from '@/context/auth';
import { Redirect, Stack, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Pressable } from 'react-native';
import images from '@/assets/images';
import { headerStyles } from '@/style/header';

export default function AppLayout() {
  const { session, user } = useSession();
  const router = useRouter();

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session || !user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }
  
  return (
    <Stack screenOptions={{
        headerRight: ()=> 
          <Pressable onPress={() => router.navigate(`/profile`)}>
            <Image style={headerStyles.profileButtonImage} source={user.avatar} alt='profile image' contentFit='contain' transition={250}/>
          </Pressable>,
        headerTitle: ()=> 
          <Image style={headerStyles.logoImage} source={images.Logo} alt='logo image' contentFit='contain' transition={250}/>,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerBackButtonDisplayMode: 'minimal'
      }}
    >
      <Stack.Screen name='index' options={{title: 'Home'}} />
      <Stack.Screen name='profile' options={{title: 'Profile'}} />
    </Stack>
  );
}
