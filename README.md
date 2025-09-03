
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

   * Configure **Supabase** project and credentials
   * Run **FastAPI** backend for AI predictions


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



##  Literature Review

* [Adaptive Swin-CNN Framework for Retinal Disease Diagnosis](https://www.mdpi.com/2673-2688/6/2/28)
* [Early Detection of Diabetic Retinopathy: A Deep Learning Approach](https://www.mdpi.com/2673-2688/5/4/125)
* [Trustworthy AI in Indian Healthcare: Challenges & Opportunities](https://www.mdpi.com/2673-2688/6/1/10)



##  Our Approach & Innovation

* **Affordable Eye Screening** using fundus images captured with a 20D lens (readily available for \~₹1200)
* **Integrated Eye Care Package** combining disease detection, screening tests, prescription tracking, and general care
* **Personalized User Experience** with history tracking, insights, and health tips



## 🩺 Supported Eye Conditions

* **Diabetic Retinopathy (DR)** – AI analysis of fundus images for early detection
* **Age-related Macular Degeneration (AMD)** – AI-based risk flagging for Dry/Wet AMD
* **Refractive Errors** – Digital Snellen test for myopia, hyperopia, and astigmatism
* **Color Vision Deficiency (CVD)** – Digital Ishihara test simulation



##  Eye Care Management System

* **Power Tracker** – Track vision power (spherical, cylindrical, axis)
* **Prescription Manager** – Store & share prescriptions
* **Blue Light Exposure Log** – Monitor device screen time & get recommendations
* **Medical Record Vault** – Securely store past diagnostics and treatments



##  Team

* **Supervisor**: Dr. Pratosh Kumar Pal
* **Members**:
  * Pankhuri Shrivastava (24BHI10005)
  * Heeral Jiwnani (24BHI10009)
  * Siya Sanjit Sawant Dessai (24BHI10083)
  * Salvin P V (24BHI10110)

---

##  License

This project is licensed under the **MIT License**.

---

##  References

* [Ishihara Color Blind Test](https://www.color-blind-test.com/ishihara-color-blind-test-more)
* [Snellen Chart Reference](https://www.rockimg.com/eye-test-chart.html)
* [Mayo Clinic: Diabetic Retinopathy](https://www.mayoclinic.org/diseases-conditions/diabetic-retinopathy/symptoms-causes/syc-20371611)
* [NIH: Age-related Macular Degeneration](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/age-related-macular-degeneration)

