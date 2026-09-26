# 🎵 Song Mood Classifier

Drop a song name. Get its mood, energy, and emotional fingerprint instantly.

The Song Mood Classifier is a full-stack AI-powered application that analyzes songs and provides a detailed emotional breakdown. By leveraging Anthropic's Claude AI, the application interprets a song's themes, mood, energy, and emotional tone, helping users gain deeper insight into the music they love.

---

## 🚀 Features

### 🎧 Instant Song Analysis
Simply enter a song title, and optionally an artist name, to receive an immediate emotional assessment.

### 🧠 AI-Powered Insights
Uses Anthropic Claude AI to generate context-aware interpretations of songs and their emotional characteristics.

### 💭 Emotional Fingerprint
Discover detailed insights including:

- Overall Mood
- Energy Level
- Emotional Tone
- Dominant Themes
- Listener Experience

### 🎨 Modern User Experience
A responsive and intuitive interface built with React, Vite, and CSS Modules for a seamless user experience.

---

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite
- CSS Modules
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- Anthropic SDK
- Express Rate Limit
- Dotenv

### AI Integration
- Anthropic Claude API
- Natural Language Processing (NLP)
- Contextual Mood Analysis

---

## 📂 Project Structure

```text
Song-Mood-Classifier/
├── frontend/
│   ├── src/
│   │   ├── components/        # UI components
│   │   │   ├── SearchForm.jsx
│   │   │   └── MoodCard.jsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useAnalyze.js
│   │   ├── styles/            # Global styles
│   │   └── utils/             # API utilities
│   │
│   ├── index.html
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── analyze.js
│   │   ├── services/
│   │   │   └── claudeService.js
│   │   └── index.js
│   │
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

Before running the application, ensure you have:

- Node.js (v16 or later)
- npm or yarn
- Anthropic API Key

---

## 🔧 Backend Setup

### 1. Navigate to the backend directory

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Add your Anthropic API credentials:

```env
ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
```

### 4. Start the backend server

```bash
npm run dev
```

The API server will start on:

```text
http://localhost:3000
```

---

## 🎨 Frontend Setup

### 1. Navigate to the frontend directory

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

Open the URL in your browser to start using the application.

---

## 🔍 How It Works

1. User enters a song title and optional artist name.
2. The request is sent to the Express backend.
3. The backend communicates with Anthropic Claude AI.
4. Claude analyzes the song's emotional themes and characteristics.
5. Results are returned to the frontend.
6. Users receive a detailed mood profile and emotional fingerprint.

---

## 🎼 Analysis Output

The generated analysis may include:

- 🎵 Song Mood
- ⚡ Energy Rating
- 💭 Emotional Tone
- 🎨 Music Atmosphere
- 📝 Lyrical Themes
- 🌈 Overall Vibe
- 🎧 Listening Experience

---

## 📊 Application Workflow

```text
User Input Song Title
           │
           ▼
      React Frontend
           │
           ▼
      Express API
           │
           ▼
   Anthropic Claude AI
           │
           ▼
     Mood Analysis
           │
           ▼
    Emotional Profile
           │
           ▼
     Results Display
```

---

## 🎯 Key Highlights

- AI-based song understanding
- Real-time mood analysis
- Fast and responsive interface
- Secure API integration
- Clean component-based architecture
- Scalable full-stack design

---

## 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 📝 License
