from fastapi import APIRouter, HTTPException, Depends, Header
from pydantic import BaseModel
from typing import Optional
from app.services import firebase_admin_svc

router = APIRouter()

class TokenVerifyRequest(BaseModel):
    id_token: str

@router.post("/verify")
def verify_token(body: TokenVerifyRequest):
    try:
        decoded = firebase_admin_svc.verify_id_token(body.id_token)
        # return basic user info
        return {"uid": decoded.get("uid"), "email": decoded.get("email"), "name": decoded.get("name")}
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))
