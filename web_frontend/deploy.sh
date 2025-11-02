#!/bin/bash

echo "🚀 EmireQ Frontend Deployment Setup"
echo "==================================="

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "📦 Installing Firebase CLI..."
    npm install -g firebase-tools
fi

# Build the project
echo "🏗️ Building the project..."
npm run build

# Initialize Firebase (if not already done)
if [ ! -f ".firebaserc" ]; then
    echo "🔥 Setting up Firebase..."
    firebase login
    firebase init hosting
else
    echo "✅ Firebase already configured"
fi

# Deploy to Firebase
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy

echo "✅ Deployment complete!"
echo "🌐 Your app is now live!"