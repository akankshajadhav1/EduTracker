# EduTracker
EduTracker is a Student Progress Management System designed for TLE Eliminators, an EdTech platform focused on competitive programming. The system helps manage student records, visualize Codeforces performance data, detect inactivity, and automate communication—all within an intuitive dashboard.

🚀 Features
📋 View and manage student records (Add/Edit/Delete/CSV Export)
👤 Individual student profile with detailed statistics
📈 Contest history visualization (graph + filters)
🧠 Problem-solving analytics with heatmaps & bar charts
🔄 Daily Codeforces data sync via cron jobs
✉️ Inactivity detection and email reminders
🌗 Light/Dark mode toggle
📱 Mobile and tablet responsive UI


🛠️ Technologies Used
Programming Language: JavaScript, TypeScript
Frameworks/Libraries:
React.js (Frontend)
Node.js + Express (Backend)
MongoDB (Database)
Charting libraries (Recharts, Heatmap)
Tools: Git, GitHub, Cron Jobs, CI/CD pipelines
Database: MongoDB (for student data and sync logs)

📋 Prerequisites
Before running this project, ensure you have:
Node.js v18+ and npm
MongoDB installed and running
Git for version control
(Optional) Python 3+ for any scripting components

🔧 Installation & Setup
 -> npm install
Configuration
   Create a .env file in the root directory with the following environment variables:
PORT=5000
JWT_SECRET=your_jwt_secret_key
SMTP_USER=your_smtp_user_email
SMTP_PASS=your_smtp_password
MONGODB_URI=your_mongodb_connection_string

# Codeforces API (optional if using rate-limited access)
CF_API_KEY=your_codeforces_api_key
CF_API_SECRET=your_codeforces_api_secret

-> Replace placeholder values with actual credentials.
->Ensure this file is not committed to version control by including .env in your .gitignore.


# Start the backend
cd backend
npm run dev
# (Make sure scripts are defined in backend/package.json)

# Start the frontend
cd frontend
npm run dev



