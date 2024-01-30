AIML MODELS:
-> Vicuna 13b- running using Cmake visual studio environment and cpp-transformers library
-> This setup would be hosted in the cloud


2. Frontend: 
	-> Web application coded in React.js
	-> Mobile/Desktop app coded in React Native
	-> The package manager is node
For running in dev mode, clone the repository and use npm install to install dependencies and packages, and run using npm start; keep localhost:300 free



3. Backend:
	-> Made using express.js
	-> Uploads data to database setup in MongoDB
	-> to run in dev mode follow same steps as frontend; keep localhost:5000 free
4. AIML Backend:
	-> Uses Python and Flask to scrape data, run the model and upload data to the server (MongoDB)
	-> The model is locally hosted and needs the model dependency to run the code
	-> The model is finetuned and run using the localllama and cpp transformers libraries


5. Extension
	-> Made using react.js with support for typescript
	-> Different extensions for Chrome, firefox, and safari in development
	-> The backend uploads the URL and/or the site data to the database, where the Python program picks it up for analysis
