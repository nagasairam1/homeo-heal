import React, {useState, useEffect} from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import RemedyCard from '../components/RemedyCard';
import { loadRemedies } from '../utils/dataLoader';
import Colors from '../theme/Colors';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [remedies, setRemedies] = useState([]);

  useEffect(()=> {
    setRemedies(loadRemedies());
  },[]);

  const filtered = remedies.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symptoms.join(' ').includes(search.toLowerCase())
  );

  return (
    <View style={{ padding:20, flex:1, backgroundColor: Colors.background }}>
      <TouchableOpacity onPress={() => navigation.navigate('AI')} style={{ backgroundColor: Colors.primary, padding:12, borderRadius:10, marginBottom:12 }}>
        <Text style={{ color:'#fff', textAlign:'center' }}>🔍 AI Symptom Checker</Text>
      </TouchableOpacity>

      <View style={{ backgroundColor:'#fff', padding:10, borderRadius:10, flexDirection:'row', alignItems:'center', marginBottom:12 }}>
        <TextInput placeholder="Search symptoms or remedies..." value={search} onChangeText={setSearch} style={{ flex:1 }} />
      </View>

      <FlatList data={filtered} keyExtractor={i=>String(i.id)} renderItem={({item}) =>
        <RemedyCard item={item} onPress={() => navigation.navigate('Details', { item })} />
      } />
    </View>
  );
}
