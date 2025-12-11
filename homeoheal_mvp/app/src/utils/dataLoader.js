import remediesRaw from '../../data/remedies.json';

export function loadRemedies() {
  return remediesRaw.map(item => ({
    id: item.id || item.name,
    name: item.name,
    category: item.category || 'General',
    indications_en: item.indications_en || item.indications || [],
    indications_te: item.indications_te || [],
    symptoms: [
      ...(item.indications_en || item.indications || []),
      ...(item.indications_te || [])
    ].map(s => (typeof s === 'string' ? s.toLowerCase() : s)),
    potency: item.potency || '',
    dosage_en: item.dosage_en || item.dosage || '',
    notes_en: item.notes_en || item.notes || '',
    precautions_en: item.precautions_en || item.precautions || ''
  }));
}
