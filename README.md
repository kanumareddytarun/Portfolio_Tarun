# 💼 Kanumareddy Tarun – Personal Portfolio Website

This is a **responsive**, **interactive**, and **theme-switchable** personal portfolio website created by **Kanumareddy Tarun**, a Java Full Stack Developer. It showcases my **skills**, **projects**, **education**, **experience**, and includes a **contact form** – all built using modern web technologies with a clean and professional design inspired by popular portfolio layouts.

🔗 **Live Demo:** [https://your-deployed-portfolio-link.com](https://kanumareddytarunportfolio.netlify.app/)  
📧 **Contact:** [kanumareddytarun@gmail.com](mailto:kanumareddytarun@gmail.com)


---

## ✨ Features

- ✅ **Fully Responsive** – Mobile-friendly layout adapts to all screen sizes
- 🔀 **Single Page Navigation** – Smooth transitions between sections
- 🎯 **Dynamic Typing Animation** – Profession titles animated with Typed.js
- 🧾 **About Me Section**
  - Personal info and downloadable CV
  - Skill bars with percentage
  - Education and Experience timelines
- 🛠️ **Services Section** – Key services and offerings
- 💼 **Portfolio Section** – Projects with images, details, and live/demo links
- 📬 **Contact Section**
  - Direct contact info
  - Functional contact form (can integrate backend or use Formspree/Web3Forms)
- 🎨 **Theme Switcher**
  - Light/Dark mode toggle
  - Multiple color skins
  - User preferences stored in `localStorage`
- 📱 **Mobile Navigation** – Hamburger menu for small screens

---

## 🛠️ Tech Stack

- **HTML5** – Semantic and structured markup
- **CSS3**
  - CSS Variables for easy theming
  - Flexbox & Grid for layout
  - Animations and transitions
- **Vanilla JavaScript**
  - Typing animation using [Typed.js](https://github.com/mattboldt/typed.js/)
  - Style and theme switching
- **Font Awesome** – Scalable icons for UI

---

## 📁 Folder Structure

portfolio-website/
├── index.html
├── css/
│ ├── style.css # Main stylesheet
│ ├── style-switcher.css # Styles for theme and mode toggling
│ ├── color-1.css # Default Blue Theme
│ ├── color-2.css # Orange Theme
│ ├── color-3.css # Green Theme
│ ├── color-4.css # Red/Pink Theme
│ └── color-5.css # Purple Theme
├── js/
│ ├── script.js # Main interactivity script
│ └── style-switcher.js # Handles theme switching logic
├── images/
│ ├── hero.jpg # Profile image
│ ├── portfolio-1.png # IExam project screenshot
│ ├── portfolio-2.png # Blockchain project screenshot
│ ├── portfolio-3.png # Food Store project screenshot
│ └── favicon.png # Site favicon
└── cv/
└── Kanumareddy_Tarun_Resume.pdf

---

## ⚙️ Getting Started

1. **Clone the Repository:**

git clone https://github.com/kanumareddytarun/Portfolio_Tarun.git
cd Portfolio_Tarun

2. Run Locally:

Open the index.html file in your browser (double-click or use a Live Server extension in VS Code).

🧩 Customization Guide
🔄 Replace Content
Edit index.html to update your:

Name, intro text, and profession strings (in script.js)

Skill progress values

Projects (images + links)

Education & Experience timeline

Contact details

🖼 Update Images
Replace files in the /images/ folder:

hero.jpg – profile picture

portfolio-1.png to portfolio-3.png – project thumbnails

favicon.png – your custom favicon

📄 Add Your Resume
Replace Kanumareddy_Tarun_Resume.pdf in the cv/ folder with your latest resume.

🎨 Theme Color Default
To change the default color:

Change the active stylesheet in index.html (color-*.css)

Or set it in style-switcher.js → setActiveStyle('color-1')

✏️ Typing Animation
Modify text in script.js (under Typed initialization) to set your desired profession titles.

📬 Make Contact Form Functional
Integrate a backend or use services like:

Formspree

Web3Forms

Netlify Forms

🚧 Future Enhancements
Backend email integration for the contact form

Add project filter or category tabs

Blog or article writing section

Hosting using GitHub Pages or Netlify

📄 License
This project is open-source and available under the MIT License.

👨‍💻 Author
Kanumareddy Tarun
📫 Email: kanumareddytarun@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/kanumareddytarun/
💻 GitHub:  https://github.com/kanumareddytarun



