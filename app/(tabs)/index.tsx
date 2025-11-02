import Remedy from '@/components/Remedy';
import { ScrollView } from '@gluestack-ui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={{
        paddingHorizontal: 15,
      }}>
        <Remedy time="04:12" name="Tylenol" color="#FF751F"/>
        <Remedy time="04:13" name="Ritalina" color="#FF751F"/>
        <Remedy time="04:13" name="Cafeína" color="#FF751F"/>
      </ScrollView>
    </SafeAreaView>
  )
}