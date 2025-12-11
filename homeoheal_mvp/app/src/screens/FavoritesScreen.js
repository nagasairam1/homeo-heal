import React, {useState, useEffect} from 'react';
import { View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RemedyCard from '../components/RemedyCard';
import Colors from '../theme/Colors';

export default function FavoritesScreen({ navigation }) {
  const [favs, setFavs] = useState([]);

  useEffect(()=>{ loadFavs() },[]);

  const loadFavs = async () => {
    const data = JSON.parse(await AsyncStorage.getItem('favorites') || '[]');
    setFavs(data);
  };

  return (
    <View style={{ padding:20, flex:1, backgroundColor: Colors.background }}>
      <Text style={{ fontSize:22, fontWeight:'bold', marginBottom:12 }}>Favorites</Text>
      <FlatList data={favs} keyExtractor={i=>String(i.id)} renderItem={({item}) =>
        <RemedyCard item={item} onPress={() => navigation.navigate('Details', { item })} />
      } />
    </View>
  );
}
