# 🌱 EcoTrack – Carbon Footprint Awareness Platform

## Overview

EcoTrack is a web-based Carbon Footprint Awareness Platform developed to help individuals calculate, monitor, and reduce their environmental impact through data-driven insights. The platform enables users to estimate carbon emissions from transportation, electricity consumption, and food habits while providing actionable sustainability recommendations.

By transforming complex environmental calculations into an intuitive and interactive experience, EcoTrack promotes awareness, responsible decision-making, and sustainable living.

---

## Problem Statement

Climate change is one of the most significant global challenges, yet many individuals are unaware of how their everyday activities contribute to carbon emissions. Existing solutions often lack simplicity, accessibility, or meaningful visualization of environmental impact.

EcoTrack addresses this challenge by providing a user-friendly platform that allows users to:

* Calculate their carbon footprint instantly
* Track environmental impact over time
* Generate sustainability reports
* Receive actionable insights for reducing emissions
* Develop environmentally responsible habits

---

## Key Features

### 🌍 Carbon Footprint Calculator

Calculate estimated carbon emissions based on:

* Transportation distance traveled
* Electricity consumption
* Food consumption patterns

### 📊 Carbon Analytics Dashboard

An interactive dashboard displaying:

* Current carbon footprint score
* Sustainability status indicator
* Monthly carbon footprint summary
* Activity statistics and environmental insights

### 📈 Historical Activity Tracking

Track and review previous calculations to monitor sustainability progress over time.

### 🏆 Sustainability Status Classification

Automatically categorizes users into:

* Sustainable
* Moderate Impact
* High Impact

based on their calculated carbon footprint.

### 💡 Sustainability Insights

Provides practical recommendations for reducing environmental impact through lifestyle improvements.

### 📄 PDF Report Generation

Generate professional downloadable reports containing:

* Carbon footprint records
* Activity summaries
* Historical environmental data
* Sustainability metrics

### 💾 Local Data Persistence

Stores user activity securely using browser Local Storage, ensuring data remains available across sessions.

### ♿ Accessibility Enhancements

Implemented accessibility improvements including:

* Proper form labels
* Accessible input fields
* ARIA attributes for interactive elements
* Improved usability and navigation

### 🧪 Unit Testing

Implemented automated testing using:

* Vitest
* React Testing Library

to verify component rendering and application functionality.

### 📱 Responsive Design

Optimized for:

* Desktop
* Tablet
* Mobile devices

---

## Technology Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS

### Libraries & Tools

* jsPDF
* jsPDF-AutoTable
* React Hooks
* Local Storage API

### Testing

* Vitest
* React Testing Library

### Deployment

* Vercel

---

## Project Architecture

```text
src/
├── Components/
│   ├── CarbonForm.jsx
│   ├── Dashboard.jsx
│   └── CarbonChart.jsx
│
├── __tests__/
│   ├── App.test.jsx
│   ├── CarbonForm.test.jsx
│   └── Dashboard.test.jsx
│
├── App.jsx
├── main.jsx
├── index.css
│
vitest.config.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/varsha-valavan/ecotrack-carbon-footprint.git
```

### Navigate to Project

```bash
cd ecotrack-carbon-footprint
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Run Tests

```bash
npm test
```

### Build for Production

```bash
npm run build
```

---

## Live Demo

### Deployment URL

https://ecotrack-carbon-footprint-h7pl-faxozs104.vercel.app/

### GitHub Repository

https://github.com/varsha-valavan/ecotrack-carbon-footprint

---

## Impact

EcoTrack empowers users to understand the environmental consequences of their daily activities by providing clear visualizations, sustainability insights, and measurable carbon footprint calculations.

The platform contributes to climate awareness by encouraging informed decisions and promoting sustainable behavior through continuous monitoring and reporting.

---

## Future Enhancements

* AI-powered sustainability recommendations
* Carbon footprint trend visualizations
* Personalized reduction goals
* Carbon offset recommendations
* User authentication and profiles
* Cloud database integration
* Community sustainability challenges

---

## Key Learnings

During the development of EcoTrack, the following skills were strengthened:

* React component architecture
* State management with React Hooks
* Local Storage integration
* PDF report generation using jsPDF
* Unit testing with Vitest
* Accessibility best practices
* Responsive UI development
* Frontend deployment using Vercel

---

## Author

**Varsha V**

GitHub Profile:
https://github.com/varsha-valavan

Project Repository:
https://github.com/varsha-valavan/ecotrack-carbon-footprint

---

## License

This project is developed for educational purposes, sustainability awareness initiatives, and hackathon participation.
