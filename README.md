Song Mood Classifier 🎵
Drop a song name. Get its mood, energy, and emotional fingerprint — instantly.

The Song Mood Classifier is a full-stack AI-powered application that takes any song title and returns a deep emotional analysis. By leveraging advanced language models, the app decodes the song's core themes, energy levels, and overall emotional vibe.

🚀 Features
Instant Analysis: Simply type a song name (and optionally the artist) to get an immediate emotional breakdown.
Detailed Emotional Fingerprints: Discover the mood, energy, and thematic elements embedded in the music.
AI-Powered: Utilizes Anthropic's Claude API to generate accurate, context-aware song analyses.
Modern User Interface: Built with React and CSS Modules for a smooth, responsive, and beautiful user experience.
🛠️ Technologies Used
Frontend
React 18 - Component-based UI framework
Vite - Lightning-fast frontend tooling
CSS Modules - Scoped styling for individual components (App.module.css, MoodCard.module.css)
Backend
Node.js & Express - Scalable REST API server
Anthropic SDK - Integration with Claude AI for natural language understanding and song analysis
Express Rate Limit - API protection and abuse prevention
Dotenv - Environment variable management
📂 Project Structure
text

Song-Mood-Classifier/
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/        # React components (SearchForm, MoodCard)
│   │   ├── hooks/             # Custom React hooks (useAnalyze)
│   │   ├── styles/            # Global styles
│   │   └── utils/             # API utilities
│   ├── index.html
│   └── package.json           
├── backend/                   # Node.js + Express API server
│   ├── src/
│   │   ├── routes/            # API endpoints (analyze.js)
│   │   ├── services/          # Business logic and AI integration (claudeService.js)
│   │   └── index.js           # Express server entry point
│   ├── .env.example
│   └── package.json
└── README.md                  # Project documentation
💻 Getting Started
Prerequisites
Node.js (v16 or higher recommended)
An API Key from Anthropic
Backend Setup
Navigate to the backend directory:
bash

cd backend
Install dependencies:
bash

npm install
Set up environment variables:
Rename .env.example to .env or create a new .env file.
Add your Anthropic API key and the server port:
env

ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
Start the backend development server:
bash

npm run dev
Frontend Setup
Open a new terminal and navigate to the frontend directory:
bash

cd frontend
Install dependencies:
bash

npm install
Start the Vite development server:
bash

npm run dev
Open your browser and navigate to the local URL provided by Vite (usually http://localhost:5173).
🤝 Contributing
Contributions are always welcome! Feel free to fork the repository, make improvements, and submit a pull request.

📝 License
This project is open-source and available for educational and personal use.
