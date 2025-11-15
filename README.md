# Jobzi

A modern, full-stack job portal application designed to connect job seekers with employers through advanced search, AI-powered matching, and comprehensive analytics. Built with a responsive React frontend and a robust Node.js backend, Jobzi offers a seamless experience for both candidates and recruiters.

## 🚀 Features

### For Job Seekers
- **Advanced Job Search**: Filter by salary, experience, location, skills, and company size
- **AI-Powered Job Matching**: Personalized recommendations based on profile and preferences
- **Skill Assessment**: Interactive tests with instant results and certifications
- **Application Tracking**: Monitor applied jobs and application status
- **Saved Jobs**: Bookmark favorite opportunities
- **Dark/Light Theme**: Customizable interface with persistent preferences

### For Recruiters
- **Company Dashboard**: Manage job postings and view applications
- **Analytics Dashboard**: Gain insights into hiring metrics and market trends
- **Applicant Management**: Review and shortlist candidates efficiently
- **Job Posting Tools**: Create and edit job listings with ease

### Additional Features
- **Real-time Notifications**: Stay updated on job matches and applications
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Secure Authentication**: JWT-based login and registration
- **Cloud Media Storage**: Integrated with Cloudinary for profile and company images

## 🛠 Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Router** for navigation
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose for database
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **Cloudinary** for media management

### Deployment
- **Frontend**: Vercel/Netlify
- **Backend**: Railway/Render

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/suvankar11223/Jobzi.git
   cd Jobzi
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file with required environment variables (see `.env.example`)
   - Run database seeding (optional)
     ```bash
     npm run seed
     ```
   - Start the backend server
     ```bash
     npm run dev
     ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:8000`

## 🚀 Usage

1. **Register/Login**: Create an account or sign in
2. **Browse Jobs**: Use advanced filters to find suitable positions
3. **Apply**: Submit applications directly through the platform
4. **Track Progress**: Monitor your applications in the dashboard
5. **Take Assessments**: Improve your skills with built-in tests

For recruiters:
1. **Set up Company**: Register and configure your company profile
2. **Post Jobs**: Create detailed job listings
3. **Review Applications**: Manage incoming applications
4. **Analyze Performance**: Use the analytics dashboard for insights

## 📁 Project Structure

```
jobportal-main/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── hooks/
│   │   └── utils/
│   ├── public/
│   └── index.html
├── NEW_FEATURES.md
└── README.md
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please reach out to the development team.

---

**Jobzi** - Connecting talent with opportunity, powered by technology.
