```python
 
 python3 -m venv .venv
 source .venv/bin/activate
 pip install fastapi uvicorn
 mkdir -p app/{api/v1,core,domain,application,infrastructure/{repositories,external,db},interfaces}

 touch app/__init__.py app/core/__init__.py app/infrastructure/__init__.py app/infrastructure/db/__init__.py

 uvicorn app.main:app --reload

```
