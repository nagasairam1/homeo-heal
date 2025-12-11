# HomeoHeal - Basic Backend (FastAPI)

This minimal backend provides:
- /auth/verify : Verify Firebase ID token (requires Firebase service account)
- /symptom/check : Simple symptom matcher using remedies.json

## Run locally
1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
2. Set Firebase service account JSON (optional for auth):
   ```
   export FIREBASE_SERVICE_ACCOUNT_PATH=/path/to/serviceAccountKey.json
   ```
   or
   ```
   export FIREBASE_SERVICE_ACCOUNT_JSON='{"type":...}'
   ```
3. Start server:
   ```
   uvicorn app.main:app --reload --port 8000
   ```

## Notes
- This is a minimal server for demo. For production secure CORS, env vars and secrets must be configured.
