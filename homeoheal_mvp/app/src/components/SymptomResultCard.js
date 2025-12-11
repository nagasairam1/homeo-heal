import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../theme/Colors';

export default function SymptomResultCard({ item }) {
  return (
    <View style={{ backgroundColor: '#fff', padding: 15, borderRadius:10, marginVertical:10 }}>
      <Text style={{ fontSize:18, fontWeight:'bold', color: Colors.primary }}>{item.name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Potency: {item.potency}</Text>
      <Text>Dosage: {item.dosage_en}</Text>
      <Text style={{ marginTop:8, color:'#666' }}>{item.notes_en}</Text>
    </View>
  );
}
