# PromptCraft ✨

> **Master the Art of AI Prompting** — Transform vague ideas into perfectly engineered AI prompts.

PromptCraft is a full-stack prompt engineering tool that generates, refines, and compares **4 optimized prompt variations** (Professional, Creative, Concise, Technical) powered by **Google Gemini**.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![Express](https://img.shields.io/badge/Express-4.21-000?logo=express)
![Gemini](https://img.shields.io/badge/Google%20Gemini-2.5%20Flash-4285F4?logo=google)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?logo=turborepo)

---

## 🚀 Features

- **4 Prompt Variations** — Generate Professional, Creative, Concise, and Technical prompts simultaneously
- **SSE Streaming** — Real-time streaming results from the API
- **Smart Templates** — 8 pre-built templates for Marketing, Code, Academic, and more
- **Refinement Chat** — Iteratively improve prompts with natural language instructions
- **Prompt Enhancement** — Auto-enhance vague descriptions before generation
- **History Tracking** — Browse and reuse past generations (stored locally)
- **Compare Mode** — Side-by-side diff comparison of prompt iterations
- **Variable Support** — Define `{{variables}}` that are preserved across all variations
- **Token Estimation** — Approximate token counts for each variation
- **Command Palette** — Quick navigation with `Ctrl+K` / `⌘K`

## 🏗️ Architecture

```
promptcraft/
├── apps/
│   ├── api/          # Express.js backend (port 3001)
│   │   ├── src/
│   │   │   ├── config/       # Environment validation (Zod)
│   │   │   ├── lib/          # Gemini AI client
│   │   │   ├── middleware/   # Validation & error handling
│   │   │   ├── prompts/      # Prompt engineering templates
│   │   │   ├── routes/       # API endpoints (generate, refine, enhance)
│   │   │   └── utils/        # Retry logic, token estimation
│   │   └── index.ts
│   └── web/          # Next.js 14 frontend (port 3000)
│       └── src/
│           ├── app/          # Pages (home, generate, templates, history)
│           ├── components/   # UI components
│           ├── hooks/        # Custom React hooks
│           ├── lib/          # API client (SSE + REST)
│           ├── providers/    # Theme & Query providers
│           └── stores/       # Zustand state management
├── packages/
│   ├── types/        # Shared TypeScript types
│   └── ui/           # Shared UI component library
├── turbo.json        # Turborepo pipeline config
└── pnpm-workspace.yaml
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/v1/generate` | Generate 4 prompt variations (SSE stream) |
| `POST` | `/api/v1/refine` | Refine existing variations with instructions |
| `POST` | `/api/v1/enhance` | Enhance a vague description |

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 9+ (`npm install -g pnpm`)
- **Google Gemini API Key** — [Get one here](https://aistudio.google.com/apikey)

### Installation

```bash
# Clone the repo
git clone https://github.com/DammalaptiHariNagaSeshu/PromptCraft.git
cd PromptCraft

# Install dependencies
pnpm install
```

### Configuration

Create the environment files:

```bash
# API environment (apps/api/.env)
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env and add your Gemini API key

# Web environment (apps/web/.env.local) — usually no changes needed
cp apps/web/.env.local.example apps/web/.env.local
```

### Running Locally

```bash
# Start both API + Web simultaneously (recommended)
pnpm dev

# Or start them individually:
# Terminal 1 — API Server
pnpm --filter @promptcraft/api dev

# Terminal 2 — Web App
pnpm --filter @promptcraft/web dev
```

- **Web App:** http://localhost:3000
- **API Server:** http://localhost:3001

### Building for Production

```bash
pnpm build
```

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS 3.4, Framer Motion |
| **State** | Zustand, TanStack React Query |
| **UI Components** | Radix UI, Lucide Icons, Sonner (toasts) |
| **Backend** | Express.js, TypeScript |
| **AI** | Google Gemini 2.5 Flash (`@google/generative-ai`) |
| **Validation** | Zod (API input validation) |
| **Monorepo** | Turborepo, pnpm workspaces |
| **Code Editor** | Monaco Editor (in-browser) |

## 📝 Environment Variables

### API (`apps/api/.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Your Google Gemini API key | **(required)** |
| `PORT` | API server port | `3001` |
| `NODE_ENV` | Environment mode | `development` |
| `CORS_ORIGIN` | Allowed frontend origin | `http://localhost:3000` |

### Web (`apps/web/.env.local`)

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3001` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source.

---

<p align="center">
  Built with ❤️ using Next.js, Express, and Google Gemini
</p>
