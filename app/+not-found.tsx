import { Link } from 'expo-router';
import {  Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This screen doesn't exist.</Text>
        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
  );
}

