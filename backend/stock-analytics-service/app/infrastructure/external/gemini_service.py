# app/external/gemini_ai/gemini/gemini.py
import google.generativeai as genai
from typing import Generator
import os

class GeminiFinanceAI:
    def __init__(self, api_key: str = os.getenv("GEMINI_API_KEY"), gemini_model: str = "gemini-2.5-flash"):
        if not api_key:
            raise ValueError("GEMINI_API_KEY not set in .env")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel(gemini_model)
        self.chat = None

    def start_chat(self, instruction: str = ""):
        self.chat = self.model.start_chat(history=[])
        if instruction:
            self.chat.send_message(instruction)

    def ask(self, prompt: str, stream: bool = True) -> Generator[str, None, None]:
        """Alias cho send_message – dễ dùng hơn"""
        return self.send_message(prompt, stream=stream)

    def send_message(self, prompt: str, stream: bool = True) -> Generator[str, None, None]:
        if not self.chat:
            self.start_chat()
        response = self.chat.send_message(prompt, stream=stream)
        if stream:
            for chunk in response:
                yield chunk.text
        else:
            yield response.text

    def history(self):
        return self.chat.history if self.chat else []

    def _token_counts(self):
        return {"total": 999}