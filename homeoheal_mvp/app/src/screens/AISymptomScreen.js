import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { analyzeSymptomsLocal } from '../ai/symptomMatcher';
import SymptomResultCard from '../components/SymptomResultCard';
import Colors from '../theme/Colors';

export default function AISymptomScreen() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const runAI = () => {
    const res = analyzeSymptomsLocal(input, 'en', 5);
    setResults(res);
  };

  return (
    <ScrollView style={{ padding:20 }}>
      <TextInput placeholder="Describe your symptoms (English or Telugu)..." value={input} onChangeText={setInput} style={{ backgroundColor:'#fff', padding:12, borderRadius:10, marginBottom:12 }} />
      <TouchableOpacity onPress={runAI} style={{ backgroundColor: Colors.primary, padding:12, borderRadius:10 }}>
        <Text style={{ color:'#fff', textAlign:'center' }}>Analyze Symptoms</Text>
      </TouchableOpacity>

      {results.map(r => <SymptomResultCard key={r.id} item={r} />)}
    </ScrollView>
  );
}
