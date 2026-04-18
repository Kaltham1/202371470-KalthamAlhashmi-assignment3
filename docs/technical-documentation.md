# Technical Documentation

## 📁 Project Structure

The project is organized into the following structure:

- index.html → Main structure of the website  
- css/styles.css → Styling, layout, and responsive design  
- js/script.js → JavaScript logic (API, filtering, validation, state)  
- assets/ → Images and CV file  
- docs/ → Documentation files  

This structure keeps the code modular and easy to maintain.

---

## 🧠 Technologies Used

- HTML → Page structure and content  
- CSS → Styling, layout, responsiveness, dark mode  
- JavaScript → Interactivity, API integration, logic, validation  

---

## 🔧 Features Implementation

### 1. API Integration
- Used GitHub API to fetch repositories dynamically  
- Data is retrieved using `fetch()`  
- Repositories are displayed using DOM manipulation  
- Error handling shows a user-friendly message if the API fails  

---

### 2. Complex Logic (Filtering and Sorting)
- Projects are filtered using `data-category` attributes  
- Sorting is implemented using project dates  
- JavaScript dynamically updates visible projects without reloading the page  

---

### 3. State Management
- Dark mode is implemented using a toggle button  
- User preference is stored using `localStorage`  
- Theme is restored automatically when the page reloads  

---

### 4. Form Validation
- Input fields are checked for:
  - empty values  
  - valid email format  
  - valid phone number  
- Feedback messages guide the user  

---

## ⚡ Performance Optimization
- Images were compressed (reduced from large sizes to under 250 KB)  
- Efficient DOM updates were used  
- Removed unused CSS and unnecessary code  

---

## 🧪 Testing and Compatibility

### Lighthouse Results
- Performance: 98  
- Accessibility: 84  
- Best Practices: 96  
- SEO: 91  

### Compatibility
Tested on:
- Google Chrome  
- Microsoft Edge
- Safari

Also tested on different screen sizes to ensure responsiveness.

---

## ⚠️ Limitations
- Contact form does not store data (no backend)  
- API depends on external GitHub availability  

---

## 🎯 Summary
The project demonstrates advanced frontend development through API integration, dynamic logic, and state management, while maintaining performance and usability.
