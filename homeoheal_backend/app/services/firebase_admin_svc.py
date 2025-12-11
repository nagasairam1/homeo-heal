import os
import json
from firebase_admin import credentials, initialize_app, auth
import firebase_admin

# Initialize Firebase Admin using SERVICE_ACCOUNT JSON in env var or file path
# Set either FIREBASE_SERVICE_ACCOUNT_JSON (raw JSON) or FIREBASE_SERVICE_ACCOUNT_PATH (file path)

def _init_firebase():
    if firebase_admin._apps:
        return
    sa_json = os.getenv("FIREBASE_SERVICE_ACCOUNT_JSON")
    sa_path = os.getenv("FIREBASE_SERVICE_ACCOUNT_PATH")
    if sa_json:
        info = json.loads(sa_json)
        cred = credentials.Certificate(info)
        initialize_app(cred)
    elif sa_path and os.path.exists(sa_path):
        cred = credentials.Certificate(sa_path)
        initialize_app(cred)
    else:
        # Not initialized - raise when used
        return

_init_firebase()

def verify_id_token(id_token: str):
    if not firebase_admin._apps:
        raise Exception("Firebase Admin not initialized. Set FIREBASE_SERVICE_ACCOUNT_JSON or PATH.")
    decoded = auth.verify_id_token(id_token)
    return decoded
