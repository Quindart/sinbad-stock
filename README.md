# **Stock Analytics Platform**
**Real-time AI-Powered Stock Intelligence for Vietnam Markets**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python 3.12](https://img.shields.io/badge/Python-3.12-blue)](https://python.org)
[![NestJS](https://img.shields.io/badge/NestJS-11.0-red?logo=nestjs&logoColor=white)](https://nestjs.com)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite&logoColor=white)](https://vitejs.dev)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Modern%20UI-black?logo=react&logoColor=white)](https://ui.shadcn.com)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.2-brightgreen)](https://fastapi.tiangolo.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://docker.com)

---

##  Overview

**Stock Analytics Platform** is a **real-time, AI-native financial analytics ecosystem** for Vietnam’s stock exchanges (HOSE, HNX, UPCOM).  
It combines **AI + market data + modular microservices** for traders, analysts, and fintech developers.

> **Tech Stack:**  
>  AI Chatbot (Gemini Pro) ·  NestJS Microservices ·  FastAPI Analytics Engine ·  Payment Gateway · Vite + shadcn/ui Frontend

---

## Features

-  **AI Chatbot (Gemini Pro)** — Natural language understanding for VN stocks  
- ⚡ **Real-time Market Data** — Integrated via [`vnstock`](https://pypi.org/project/vnstock/)  
-  **Technical & Fundamental Analysis Engine** — Powered by FastAPI  
- **Premium Access System** — Subscription-based via Payment microservice  
-  **Modular Microservices** — Scalable NestJS architecture  
-  **Modern Frontend** — Vite + React + shadcn/ui with dark/light theme  

---
## Services

| Service | Description | Status |
|-------|-------------|--------|
| **Chatbot** | AI-powered real-time Q&A on stocks | Active |
| **Analysis** | Technical & fundamental analysis engine | Active |
| **Payment** | Subscription & premium feature unlock | Active |
| **Portfolio** | Track holdings, P&L, risk (Future) | Planned |
| **Dashboard** | Admin + user analytics (Future) | Planned |

---

## Architecture

```mermaid
graph TD
    A[Client Apps] --> B[API Gateway]
    B --> C[Chatbot Service]
    B --> D[Analysis Service]
    B --> E[Payment Service]
    C --> F[MongoDB Atlas]
    D --> F
    E --> F
    D --> G[vnstock]
    C --> H[Gemini Pro API]
