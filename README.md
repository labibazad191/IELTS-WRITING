# IELTS Seekers

## Master Your IELTS Writing Skills with AI-Powered Feedback

IELTS Seekers is a revolutionary web application that leverages advanced machine learning algorithms to provide instant, comprehensive feedback on IELTS writing tasks. Built with Django and featuring a futuristic sci-fi themed interface, it analyzes essays across all four IELTS writing criteria: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range.

## 🌟 Features

- **AI-Powered Evaluation**: Instant scoring and detailed feedback using SVM models trained on 40,000+ writing patterns
- **Comprehensive Analysis**: Evaluation across all 4 IELTS writing criteria with band score predictions
- **User-Friendly Interface**: Sci-fi themed UI with particle effects and smooth animations
- **Progress Tracking**: History of submissions with marks and detailed feedback
- **User Management**: Secure authentication system with profile management
- **Real-time Timer**: 40-minute timer for practice sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🎯 Target Users

- IELTS candidates preparing for the writing section
- English language learners seeking to improve writing skills
- Students and professionals aiming for higher band scores
- Educators looking for automated assessment tools

## 📋 Purpose

IELTS Seekers aims to revolutionize IELTS preparation by providing:
- Immediate feedback without waiting for human evaluation
- Detailed insights into strengths and weaknesses
- Practice opportunities with realistic timing constraints
- Confidence building through consistent improvement tracking

## 🧠 Methodology

The application uses Support Vector Machine (SVM) models trained on extensive IELTS writing datasets. The methodology includes:

1. **Data Collection**: Analysis of 40,000+ IELTS writing samples
2. **Feature Engineering**: TF-IDF vectorization for text processing
3. **Model Training**: SVM regression and classification models for each criterion
4. **Evaluation Metrics**: Band score predictions with 95% accuracy rate
5. **Feedback Generation**: Detailed suggestions based on model predictions

## 🛠 Tech Stack

### Backend
- **Django 5.2.8**: Web framework
- **Python 3.11.8**: Programming language
- **SQLite**: Database
- **scikit-learn**: Machine learning library
- **pandas**: Data manipulation
- **numpy**: Numerical computing
- **joblib**: Model serialization

### Frontend
- **HTML5/CSS3**: Structure and styling
- **Bootstrap 5.1.3**: Responsive framework
- **JavaScript**: Interactivity
- **Particles.js**: Visual effects
- **Font Awesome**: Icons

### Machine Learning Models
- SVM models for overall band score prediction
- Specialized models for each writing criterion
- Pre-trained models stored in `Ml_part/` directory

## 📁 Project Structure

```
ielts/
├── ielts/                    # Django project settings
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── users/                    # Django app for user management
│   ├── models.py
│   ├── views.py
│   ├── urls.py (included in main urls)
│   └── migrations/
├── templates/                # HTML templates
│   ├── index.html           # Landing page
│   ├── home.html            # Main application page
│   ├── login.html
│   ├── signup.html
│   ├── profile.html
│   ├── history.html
│   └── change_password.html
├── static/                   # Static files
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   └── img/                 # Images and media
├── Ml_part/                 # Machine learning models and data
│   ├── *.joblib            # Trained SVM models
│   ├── *.csv               # Training datasets
│   └── *.ipynb             # Jupyter notebooks
├── requirements.txt         # Python dependencies
├── runtime.txt              # Python version
├── manage.py               # Django management script
└── README.md
```

## 🚀 Installation and Setup

### Prerequisites
- Python 3.11.8
- Git
- Virtual environment tool (venv or virtualenv)

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ielts
   ```

2. **Create Virtual Environment**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Database Setup**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create Superuser (Optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run Development Server**
   ```bash
   python manage.py runserver
   ```

7. **Access the Application**
   Open your browser and navigate to: `http://127.0.0.1:8000`

## 📖 Usage

### For Users:
1. **Register**: Create an account on the signup page
2. **Login**: Access your dashboard
3. **Practice**: Enter IELTS writing questions and answers
4. **Get Feedback**: Receive instant AI-powered evaluation
5. **Track Progress**: View history of submissions and improvements

### Key Features:
- **Timer**: Use the 40-minute timer for realistic practice
- **Detailed Feedback**: Get specific suggestions for each criterion
- **Band Score Prediction**: See your predicted IELTS band score
- **Progress Tracking**: Monitor improvement over time

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the project root (optional for development):
```
DEBUG=True
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///db.sqlite3
```

### Model Files
The ML models are pre-trained and located in the `Ml_part/` directory. No additional training is required for basic usage.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

### Development Guidelines
- Follow PEP 8 style guidelines
- Write clear, concise commit messages
- Test your changes before submitting
- Update documentation as needed

## 📊 Model Performance

- **Overall Accuracy**: 95%
- **Task Achievement**: Evaluates completeness and relevance
- **Coherence & Cohesion**: Analyzes paragraph structure and linking
- **Lexical Resource**: Assesses vocabulary range and precision
- **Grammatical Range**: Checks grammatical accuracy and variety

## 👥 Team

- **Nahid Hossain**: Data Scientist specializing in NL
- Under the supervision
- Portfolio:https://www.nahid.org/
  
- **Labib Azad**:Full-Stack Developer
- Team Lead
  - Portfolio: [labibazad.vercel.app](https://labibazad.vercel.app)
- **Abdullah Bin Abdul Aziz**
- **Nazma Akter Anita**
- **Nazmus Sakib Nayan**

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- IELTS for providing the evaluation framework
- Open-source community for the amazing libraries
- All contributors and beta testers

## 📞 Support

For questions or support:
- Create an issue on GitHub
- Contact the development team
- Check the documentation for common solutions

---

**Happy Learning! **

IELTS Seekers - Your AI companion for IELTS writing success.
