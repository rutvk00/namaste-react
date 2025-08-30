# Netflix GPT
- create react app
- configured tailwind
- Header
- Routing
- Login form  
- Sign Up form  
- Form validations
- useRef hook
- Firebase setup
- Deploying our app to production
- Create SignUp User Account
- Implement SignIn User API
- Create Redux Store with userSlice
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add Constants file 
- Register TMDB API & create an app and get access token
- Get data from TMDB now playing list API
- Custome Hook for nowPlayingMovies
- Create movieSlice
- Update Store with movies Data
- Fetch Data for Trailer Video
- Update store for Trailer video data
- Embedded the youtube video and make it autoplay and mute  


# Deploy on Firebase :
- Install Firebase CLI - `npm install -g firebase tools`
- Firebase Login - `firebase login`
- Initialize Firebase - `firebase init`then select Hosting
- Deploy Command - `firebase deploy`

# Features
- Login/Sign Up
    - Sign In/ Sign up Page
    - redirect to Browse Page

- Browse (after authentication)
    - Header
    - Main Movie   
        - Trailer in Background
        - Title & Descriptions
        - MovieSuggestions
            - MovieLists * N

- NetflixGPT
    - Search Bar
    - Movie Suggestions