# list_models.py
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load .env
load_dotenv()

# Lấy API key
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("LỖI: GEMINI_API_KEY không có trong .env")
    exit()

# Cấu hình Gemini
genai.configure(api_key=api_key)

print("Các model hỗ trợ generateContent:")
print("-" * 50)
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(f"  {m.name}")
print("-" * 50)