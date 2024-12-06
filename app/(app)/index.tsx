
import Hero from '@/components/organisms/Hero';
import HomepageTags from '@/components/organisms/HomepageTags';
import ItemsLIst from '@/components/organisms/ItemsLIst';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [filter, setFilter] = useState<string>('');  

  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar style="dark" />
        <Hero setFilter={setFilter} />
        <HomepageTags />
        <ItemsLIst filter={filter}/>
    </SafeAreaView>
  );
}
