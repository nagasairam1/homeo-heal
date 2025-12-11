import { loadRemedies } from '../utils/dataLoader';
import { translateToEnglish } from './translate';

const remedies = loadRemedies();

export function analyzeSymptomsLocal(inputText, lang='en', topK=5) {
  const normalized = (lang === 'te') ? translateToEnglish(inputText) : inputText;
  const text = normalized.toLowerCase();
  const tokens = text.split(/[^a-zA-Z0-9ఀ-౿]+/).filter(Boolean); // include Telugu range

  const results = remedies.map(r => {
    let score = 0;
    r.symptoms.forEach(sym => {
      tokens.forEach(t => {
        if (sym.includes(t)) score += 1;
      });
    });
    return { ...r, score };
  });

  results.sort((a,b) => b.score - a.score);
  return results.filter(r => r.score>0).slice(0, topK);
}
