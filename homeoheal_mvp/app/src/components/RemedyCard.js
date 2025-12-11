import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Colors from '../theme/Colors';

export default function RemedyCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{
      backgroundColor: Colors.card, padding: 15, marginBottom: 12, borderRadius: 10
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.primary }}>{item.name}</Text>
      <Text style={{ color: '#555' }}>{item.category}</Text>
    </TouchableOpacity>
  );
}
