import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AISymptomScreen from '../screens/AISymptomScreen';
import RemedyDetails from '../screens/RemedyDetails';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AI" component={AISymptomScreen} />
      <Stack.Screen name="Details" component={RemedyDetails} options={{ title: 'Remedy Details' }} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
