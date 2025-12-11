# HomeoHeal - Minimal MVP

This archive contains a Minimal MVP of the HomeoHeal mobile app (Expo React Native).

## Features included
- Home screen with search
- AI Symptom Checker (local, offline matching)
- Remedy Details screen
- Favorites (AsyncStorage)
- Offline remedies database (data/remedies.json)
- Bilingual-ready: simple symptom_map.json for Telugu->English mapping

## How to run
1. Install dependencies (in app folder):
   ```
   cd app
   npm install
   expo start
   ```

2. Open in Expo Go or run on simulator.

## Files
See `app/` folder. The `app/data/remedies.json` is included (your uploaded file).

## Notes
This is a Minimal MVP for showcase/demo. Backend, auth, maps, RAG, and advanced features are not included in this package.
