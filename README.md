# Vertice Security Insight

Personalized cybersecurity solutions and insights.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

This project is configured for easy deployment on Vercel as a full-stack application (Vite + Express).

### Prerequisites
- A GitHub account.
- A Vercel account.

### Steps
1. **Push your code to GitHub:** (Done)
2. **Connect to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your `Vertice-Security-Insight` repository.
3. **Configure Settings:**
   - Vercel should automatically detect the settings from `vercel.json`.
   - **Framework Preset:** Other (or Vite).
   - **Build Command:** `npm run build`.
   - **Output Directory:** `dist/public`.
4. **Deploy:**
   - Click "Deploy".

### Database Configuration
The project currently uses in-memory storage. For production, connect a database (e.g., Supabase) and update `server/storage.ts`.
