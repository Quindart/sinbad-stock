# **Stock Analytics API**  
**Real-time AI-Powered Stock Analysis Platform**  

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Python 3.12](https://img.shields.io/badge/Python-3.12-blue)](https://python.org)  
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.2-brightgreen)](https://fastapi.tiangolo.com)  
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://docker.com)  

---

## Overview

**Stock Analytics API** is a **high-performance, AI-native backend platform** for real-time stock market intelligence in Vietnam (HOSE, HNX, UPCOM). It powers intelligent financial applications with:

- **AI Chatbot (Gemini Pro)** – Natural language stock queries  
- **Real-time Market Data** – via `vnstock`  
- **Premium Payment Gateway** – Subscription & access control  
- **Modular Microservices** – Scalable, future-ready architecture  

> **Target Users**: Investors, traders, fintech apps, portfolio managers  
> **Target Platforms**: Web, Mobile (React Native), Admin Dashboard  

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
