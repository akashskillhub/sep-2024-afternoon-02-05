# Hosting a MERN App on Render.com

## Backend Setup

### Step 1: Update `package.json`
Add the following entries:
```json
"engines": {
  "node": "20.11.0",
  "npm": "10.0.0"
},
"scripts": {
  "start": "node index.js"
}
```

### Step 2: Add a `.gitignore` File
Ensure `.gitignore` includes:
```
node_modules
.env
```

### Step 3: Update `.env` with Live MongoDB URL
Set the MongoDB connection string in your backend `.env` file:
```
MONGO_URL=mongodb+srv://your-live-mongo-url
```

## Push Backend Code to GitHub

### Step 4: Create a GitHub Repository
Go to [GitHub](https://github.com) and create a new repository.

### Step 5: Initialize Git and Push Code
Run the following commands:
```sh
git init
git remote add origin YOUR_GITHUB_REPOSITORY_LINK
git add .
git commit -m "initial commit"
git push origin master
```

## Frontend Setup

### Step 6: Update `.env` with Backend URL
Set the backend URL in your frontend `.env` file:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

### Step 7: Build Frontend for Production
Run:
```sh
npm run build
```

### Step 8: Move `dist` Folder to Server
Move the generated `dist` folder inside the backend directory.

## Update Backend for Deployment

### Step 9: Update CORS Configuration
Ensure CORS allows requests from your frontend:
```js
const cors = require('cors');
app.use(cors({ origin: "https://your-frontend-url.onrender.com" }));
```

### Step 10: Serve Static Files
Modify `index.js` to serve frontend files:
```js
const path = require("path");
app.use(express.static("dist"));
```

### Step 11: Update the 404 Route
Modify your 404 handler:
```js
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
```

### Step 12: Push Updated Code to GitHub
Run:
```sh
git add .
git commit -m "updated backend with frontend integration"
git push origin master
```

