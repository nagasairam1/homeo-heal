import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../theme/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RemedyDetails({ route }) {
  const { item } = route.params;
  const [isFav, setIsFav] = useState(false);

  useEffect(()=>{ loadFav() },[]);

  const loadFav = async () => {
    const favs = JSON.parse(await AsyncStorage.getItem('favorites') || '[]');
    setIsFav(favs.some(f => f.id === item.id));
  };

  const toggleFav = async () => {
    let favs = JSON.parse(await AsyncStorage.getItem('favorites') || '[]');
    if (isFav) favs = favs.filter(f => f.id !== item.id);
    else favs.push(item);
    await AsyncStorage.setItem('favorites', JSON.stringify(favs));
    setIsFav(!isFav);
  };

  return (
    <ScrollView style={{ padding:20 }}>
      <TouchableOpacity onPress={toggleFav} style={{ alignSelf:'flex-end' }}>
        <Text style={{ fontSize:20 }}>{isFav ? '❤️' : '♡'}</Text>
      </TouchableOpacity>
      <Text style={{ fontSize:26, fontWeight:'bold', color: Colors.primary }}>{item.name}</Text>
      <Text style={{ marginTop:8 }}>Category: {item.category}</Text>
      <Text style={{ marginTop:12, fontWeight:'bold' }}>Indications:</Text>
      {item.indications_en && item.indications_en.map((s,idx)=>(<Text key={idx}>• {s}</Text>))}
      <Text style={{ marginTop:12 }}>Potency: {item.potency}</Text>
      <Text>Dosage: {item.dosage_en}</Text>
      <Text style={{ marginTop:12, color:'#666' }}>{item.notes_en}</Text>
    </ScrollView>
  );
}
