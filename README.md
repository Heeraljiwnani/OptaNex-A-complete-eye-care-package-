
#  OptaNex – Your Eye Care Companion

**Smart Vision Starts Here**  

OptaNex is a **Progressive Web App (PWA)** for **smart and accessible eye care**.  
It enables early detection of eye conditions, provides essential screening tools, and helps users manage their eye health over time — all while ensuring **AI support, privacy, and compliance**.  



##  Problem Statement
Timely screening and management of eye diseases such as **Diabetic Retinopathy (DR)** and **Age-related Macular Degeneration (AMD)** remain a challenge, especially in **low-access areas**.  
Existing tools are fragmented, lack AI support, and don’t provide personalized care. OptaNex solves this by offering a **unified, accessible, and intelligent eye health solution**.  



##  Features
- **AI-Powered Disease Detection**  
  - Fundus image analysis for **Diabetic Retinopathy (DR)** and **Age-related Macular Degeneration (AMD)**  

- **Vision Screening Tools (OptiScreen)**  
  - **Snellen Chart** for vision clarity testing  
  - **Pseudo-Ishihara Test** for color blindness detection  

- **Personalized Eye Care (OptiTracker & PrescriptTracker)**  
  - Vision power tracker with trend visualization  
  - Prescription manager to store and access eyeglass/contact lens records  
  - Medical Record Vault for surgeries, reports, and diagnostics  

- **General Eye Care (OptiKnow & GlareGuard)**  
  - Information hub for common eye care questions  
  - Blue light monitoring based on daily device usage  

- **AI Guidance**  
  - Smart suggestions and preventive tips for healthy vision  



##  Tech Stack
- **Frontend**: React.js (PWA)  
- **Backend & API**: FastAPI, Supabase API  
- **ML Frameworks**: TensorFlow, Keras, Scikit-learn  
- **Models**: EfficientNetB0, CNN, Swin Transformers  
- **Image Processing**: OpenCV  
- **Data Handling**: Pandas  
- **Explainability**: Grad-CAM  
- **External APIs**: OpenAI model API  



## Installation & Setup

###  Clone & Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/optanex.git
   cd optanex
````

2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Backend Setup:

    ```bash
   * Configure **Supabase** project and credentials
   * Run **FastAPI** backend for AI predictions
       ```


###  Installing as a PWA

OptaNex can be installed on desktop and mobile like a native app:

####  On Mobile (Android / iOS):

1. Open OptaNex in **Chrome** (Android) or **Safari** (iOS)
2. Tap the **menu/share button**
3. Select **"Add to Home Screen"**
4. The app will now appear on your home screen and launch like a native app

####  On Desktop (Windows / macOS / Linux):

1. Open OptaNex in **Chrome / Edge** browser
2. Click the **Install App** (➕ icon in the address bar)
3. Confirm installation
4. OptaNex will now be available in your apps menu and run in a standalone window




