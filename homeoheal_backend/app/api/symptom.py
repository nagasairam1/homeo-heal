from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
import json, re
from pathlib import Path

router = APIRouter()

DATA = Path(__file__).resolve().parents[2] / "data" / "remedies.json"
with open(DATA, 'r', encoding='utf-8') as f:
    REMEDIES_RAW = json.load(f)

def normalize(rem):
    indications_en = rem.get("indications_en") or rem.get("indications") or []
    indications_te = rem.get("indications_te") or []
    symptoms = [s.lower() for s in indications_en + indications_te if isinstance(s, str)]
    return {
        "id": rem.get("id"),
        "name": rem.get("name"),
        "category": rem.get("category","General"),
        "symptoms": symptoms,
        "potency": rem.get("potency",""),
        "dosage_en": rem.get("dosage_en") or rem.get("dosage",""),
        "notes_en": rem.get("notes_en") or rem.get("notes","")
    }

REMEDIES = [normalize(r) for r in REMEDIES_RAW]

class SymptomRequest(BaseModel):
    text: str
    lang: str = "en"

@router.post("/check", response_model=List[dict])
def check_symptoms(req: SymptomRequest):
    text = req.text.lower()
    tokens = re.findall(r"\w+", text)
    results = []
    for r in REMEDIES:
        score = 0
        for s in r['symptoms']:
            for t in tokens:
                if t in s:
                    score += 1
        if score>0:
            rr = r.copy()
            rr['score'] = score
            results.append(rr)
    results.sort(key=lambda x: x['score'], reverse=True)
    return results[:10]
