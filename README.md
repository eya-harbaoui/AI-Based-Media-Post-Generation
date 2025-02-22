# PostIt: AI-Based Media Post Generation

PostIt is a web application that uses AI to generate customized social media posts for LinkedIn, Facebook, and Twitter (X) based on user-provided context.

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- DaisyUI
- Responsive design for all devices

### Backend
- Django
- Django REST Framework
- SQLite3 Database
- JWT Authentication

## Features

### Landing Page
- Modern, attractive UI with hero section
- Features showcase
- About section
- Navigation bar with authentication options

### User Authentication
- Complete user authentication flow (Sign up, Login, Logout)
- Secure token-based authentication 

### Post Generation
- Intuitive form for entering post context
- AI-powered processing
- Multiple platform formatting (LinkedIn, Facebook, Twitter/X)

### Post Management
- Preview generated posts
- Copy-to-clipboard functionality
- Download posts as text files

### Responsive Design
- Fully mobile-friendly interface

## Installation and Setup

### Prerequisites
- Docker and Docker Compose installed on your system
- Git

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/eya-harbaoui/AI-Based-Media-Post-Generation
cd AI-Based-Media-Post-Generation
```

2. Run the application using Docker

#### For Linux/Mac:
```bash
chmod +x run.sh
./run.sh
```

#### For Windows (Git Bash):
```bash
sh run.sh
```

#### For Windows (CMD):
```bash
run.sh
```

3. Access the application
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:8000](http://localhost:8000)

## API Endpoints

- `/api/users/register/` - User registration
- `/api/users/login/` - User login
- `/api/users/logout/` - User logout
- `/api/posts/create/` - Generate new social media posts
- `/api/posts/user` - List saved posts

## Development

### Running Development Servers Locally

#### Frontend
```bash
cd frontend-client/postlt-app
npm install
npm run dev
```

#### Backend
```bash
cd backend-server
python -m venv venv
venv\Scripts\activate  (or source venv/bin/activate)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.