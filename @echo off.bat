@echo off

:: Create the main repository directory
mkdir "zn.spectra-portfolio"
cd "zn.spectra-portfolio"

:: Create the folder structure
mkdir "research\projects\llm-experiments\code"
mkdir "research\projects\llm-experiments\experiments"
mkdir "research\projects\llm-experiments\results"
mkdir "research\projects\rag-pipelines\code"
mkdir "research\projects\rag-pipelines\results"
mkdir "research\projects\model-integration\code"
mkdir "research\projects\model-integration\results"
mkdir "research\papers"
mkdir "research\posters"
mkdir "services\llm-powered\service1\app"
mkdir "services\llm-powered\service1\docker"
mkdir "services\llm-powered\service2"
mkdir "services\fastapi\api1\app"
mkdir "services\fastapi\api1\tests"
mkdir "services\fastapi\api2"
mkdir "experiments\experiment1\code"
mkdir "experiments\experiment1\results"
mkdir "experiments\experiment2"
mkdir "assets\images"
mkdir "assets\videos"

:: Create placeholder README.md files
echo # LLM Experiments > "research\projects\llm-experiments\README.md"
echo # RAG Pipelines > "research\projects\rag-pipelines\README.md"
echo # Model Integration > "research\projects\model-integration\README.md"
echo # LLM-Powered Service 1 > "services\llm-powered\service1\README.md"
echo # LLM-Powered Service 2 > "services\llm-powered\service2\README.md"
echo # FastAPI Service 1 > "services\fastapi\api1\README.md"
echo # FastAPI Service 2 > "services\fastapi\api2\README.md"
echo # Experiment 1 > "experiments\experiment1\README.md"
echo # Experiment 2 > "experiments\experiment2\README.md"

:: Create the main README.md
echo # Zitouni Nidhal | AI Research Master's Student > README.md
echo. >> README.md
echo **Specializing in Applied AI Research, LLM-Powered Services, and Experimentation Workflows** >> README.md
echo. >> README.md
echo "[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/your-profile)" >> README.md
echo "[![GitHub](https://img.shields.io/badge/GitHub-Profile-black)](https://github.com/your-username)" >> README.md
echo "[![Email](https://img.shields.io/badge/Email-Contact-red)](mailto:your-email@example.com)" >> README.md
echo "[![Kaggle](https://img.shields.io/badge/Kaggle-Profile-green)](https://www.kaggle.com/your-profile)" >> README.md
echo. >> README.md
echo "---" >> README.md
echo. >> README.md
echo "## 🎓 **About Me**" >> README.md
echo "AI Research Master's student with a **solid academic foundation** in **machine learning and artificial intelligence**. Skilled in **research-oriented workflows**, including **experimentation, assessment, and model integration**. Proficient in **creating AI-powered services** using **Python, LLMs, FastAPI, Docker, and RAG**, with a focus on **applied AI research and practical implementation**." >> README.md
echo. >> README.md
echo "---" >> README.md
echo. >> README.md
echo "## 🔧 **Core Competencies**" >> README.md
echo "- **AI Research:** Experimentation, model assessment, and integration." >> README.md
echo "- **LLM-Powered Services:** Building and deploying AI services with LLMs." >> README.md
echo "- **Retrieval-Augmented Generation (RAG):** Vector databases, FAISS, and Pinecone." >> README.md
echo "- **Backend Development:** FastAPI, RESTful APIs, and Docker." >> README.md
echo "- **Databases:** SQL, PostgreSQL, and vector databases." >> README.md
echo "- **DevOps & Workflows:** Docker, CI/CD, and automation." >> README.md
echo. >> README.md
echo "---" >> README.md
echo. >> README.md
echo "## 🛠 **Technical Skills**" >> README.md
echo. >> README.md
echo "**Programming Languages**" >> README.md
echo "- Python, SQL" >> README.md
echo. >> README.md
echo "**AI & Machine Learning**" >> README.md
echo "- **LLMs:** Prompt engineering, fine-tuning, and deployment." >> README.md
echo "- **RAG Pipelines:** FAISS, Pinecone, Chroma." >> README.md
echo "- **Vector Databases & Similarity Search**" >> README.md
echo "- **Model Integration & Assessment**" >> README.md
echo. >> README.md
echo "**Backend Development**" >> README.md
echo "- FastAPI, RESTful APIs" >> README.md
echo. >> README.md
echo "**Databases**" >> README.md
echo "- PostgreSQL, SQL, Vector Databases (FAISS, Pinecone)" >> README.md
echo. >> README.md
echo "**DevOps & Tools**" >> README.md
echo "- Docker, Git, CI/CD" >> README.md
echo. >> README.md
echo "**Research Workflows**" >> README.md
echo "- Experimentation, assessment, and model integration." >> README.md

:: Create a placeholder CV file
type nul > "CV_Zitouni_Nidhal_AI_Research.pdf"

:: Create a .gitignore file
echo # OS-specific files > .gitignore
echo .DS_Store >> .gitignore
echo Thumbs.db >> .gitignore
echo. >> .gitignore
echo # Python >> .gitignore
echo __pycache__/ >> .gitignore
echo *.py[cod] >> .gitignore
echo *$py.class >> .gitignore
echo venv/ >> .gitignore
echo .env >> .gitignore
echo. >> .gitignore
echo # Jupyter >> .gitignore
echo .ipynb_checkpoints/ >> .gitignore
echo. >> .gitignore
echo # Data files >> .gitignore
echo data/ >> .gitignore
echo *.csv >> .gitignore
echo *.json >> .gitignore
echo *.h5 >> .gitignore
echo *.pkl >> .gitignore
echo. >> .gitignore
echo # IDE >> .gitignore
echo .idea/ >> .gitignore
echo .vscode/ >> .gitignore
echo. >> .gitignore
echo # Logs >> .gitignore
echo *.log >> .gitignore

:: Create a LICENSE file (MIT)
echo MIT License > LICENSE
echo. >> LICENSE
echo Copyright (c) 2026 Zitouni Nidhal >> LICENSE
echo. >> LICENSE
echo Permission is hereby granted, free of charge, to any person obtaining a copy >> LICENSE
echo of this software and associated documentation files (the "Software"), to deal >> LICENSE
echo in the Software without restriction, including without limitation the rights >> LICENSE
echo to use, copy, modify, merge, publish, distribute, sublicense, and/or sell >> LICENSE
echo copies of the Software, and to permit persons to whom the Software is >> LICENSE
echo furnished to do so, subject to the following conditions: >> LICENSE
echo. >> LICENSE
echo The above copyright notice and this permission notice shall be included in all >> LICENSE
echo copies or substantial portions of the Software. >> LICENSE
echo. >> LICENSE
echo THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR >> LICENSE
echo IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, >> LICENSE
echo FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE >> LICENSE
echo AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER >> LICENSE
echo LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, >> LICENSE
echo OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE >> LICENSE
echo SOFTWARE. >> LICENSE

echo ✅ AI Research Master's Student portfolio structure created successfully!
