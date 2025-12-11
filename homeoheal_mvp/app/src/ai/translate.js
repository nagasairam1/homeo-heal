import symptomMap from '../../data/symptom_map.json';

export function translateToEnglish(text) {
  let out = text;
  if (symptomMap && typeof symptomMap === 'object') {
    Object.keys(symptomMap).forEach(tel => {
      if (out.includes(tel)) {
        out = out.replaceAll(tel, symptomMap[tel]);
      }
    });
  }
  return out;
}
