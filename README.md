# 🌐 Group Coursework for 4COSC011W

**Module:** Web Design & Development (4COSC011W)  
**Team:** Sansith (ST1), Lison (ST2), Emika (ST3), Oshan (ST4)  
**Due Date:** 10 March 2025  
**Submission:** ZIP file (code + reports) + Group Agreement via Blackboard  

---

## 📌 Project Overview
Design and develop a website focused on **one** UN Sustainable Development Goal (SDG). The project emphasizes teamwork, adherence to web standards (HTML/CSS/JS), accessibility, and validation.  

### Key Deliverables:
- **Website Pages** (assigned per student below)  
- **Individual Reports** (Page Editor pages)  
- **Validation Reports**  
- **Group Coursework Agreement**  

---

## Project Usage:
 - Make sure *git* is installed and works with *VSCode*.
 - Create a directory for the project and open it in *VSCode*.
 - Open up a terminal in *VSCode* and run `git clone https://github.com/xerosf/web-dev-coursework.git` to download and set up the repo locally.
 - Use the *Source Control* GUI in *VSCode* to conveniently commit and sync changes to the repo.

---

## 🗺️ Roadmap & Timeline

| Phase                | Timeline       | Tasks                                                                 |
|----------------------|----------------|-----------------------------------------------------------------------|
| **Planning & Setup** | Feb 16 - Feb 18 | - Finalize SDG topic <br> - Define design/style guidelines <br> - Setup GitHub repo & folder structure |
| **Template Development** | Feb 16 - 17 | - Lison (ST2) creates Global CSS & template <br> - Team reviews design consistency |
| **Page Development** | Feb 17 - Feb 28 | - Individual page implementation <br> - Weekly progress checks       |
| **Integration & Testing** | Mar 1 - Mar 7 | - Cross-test pages <br> - Validate HTML/CSS <br> - Fix accessibility issues |
| **Final Submission** | Mar 8 - Mar 10 | - Compress files <br> - Submit reports & signed agreement            |

---

## 👥 Workload Division

### Individual Assignments
| Student   | Pages & Responsibilities                                                                 | Files to Develop                          |
|-----------|------------------------------------------------------------------------------------------|-------------------------------------------|
| **Sansith (ST1)** | Splash Screen, Volunteer Page, Content Page (ST1)                                        | `splash.html`, `volunteer.html`, `content_ST1.html`, `pageEditor_ST1.html`, `validation_ST1.html` |
| **Lison (ST2)**   | **Template/Global CSS**, Home Page, Table Page, Content Page (ST2)                       | `home.html`, `table.html`, `content_ST2.html`, `pageEditor_ST2.html`, `validation_ST2.html` |
| **Emika (ST3)**   | Feedback Page, Team Page, Content Page (ST3)                                             | `feedback.html`, `team.html`, `content_ST3.html`, `pageEditor_ST3.html`, `validation_ST3.html` |
| **Oshan (ST4)**   | User Profile Page, Sitemap (SVG), Content Page (ST4)                                     | `profile.html`, `sitemap.html`, `content_ST4.html`, `pageEditor_ST4.html`, `validation_ST4.html` |

### Shared Responsibilities
- **All Students**  
- Content Pages (`content_STx.html`)  
- Page Editor & Validation Reports  
- Code comments, accessibility compliance, validation  
- Group meetings (min. 5) & agreement submission  

---

## 🛠️ Repository Structure

```
src/
├── style.css # Global CSS (Lison)
├── splash.html # Sansith
├── home.html # Lison
├── volunteer.html # Sansith
├── table.html # Lison
├── profile.html # Oshan
├── feedback.html # Emika
├── sitemap.html # Oshan
├── team.html # Emika
├── content_ST1.html # Sansith
├── content_ST2.html # Lison
├── content_ST3.html # Emika
├── content_ST4.html # Oshan
├── pageEditor_ST1.html # Sansith
├── ... (other editor/validation pages)
res/ # Images, icons, etc.
```

---

## 📋 Issues & Progress Tracking
Use GitHub Issues to:
- Report bugs or design inconsistencies  
- Track task completion (e.g., "Splash Screen - Done ✅")  
- Document meeting summaries  

**Label System:**  
- `bug` 🐞, `design` 🎨, `priority` 🔥, `completed` ✅  

---

## 📞 Contact & Meetings
- **All Communications:** Group WhatsApp and SayGex Discord

---
## Header, Footer Usage
To include the header and the footer in your pages, add this to your HTML file:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Climate Change</title>
    <link rel="icon" href="https://img.icons8.com/color/48/united-nations.png" type="image/x-icon">
    <link rel="stylesheet" href="/src/css/home-styles.css">

</head>

<body>
    <header>
        <div class="logo-container">
            <img src="/res/logo.png" alt="Logo" class="logo" style="width: 200px; height: auto;">
        </div>

        <nav>
            <ul class="nav-list">
                <li><a href="#">Home</a></li>
                <li class="dropdown-item"><a href="#">Content</a>
                    <ul class="dropdown">
                        <li><a href="#">Content1</a></li>
                        <li><a href="#">Content2</a></li>
                        <li><a href="#">Content3</a></li>
                        <li><a href="#">Content4</a></li>
                    </ul>
                </li>

                <li class="dropdown-item"><a href="#">Validation</a>

                    <ul class="dropdown">
                        <li><a href="#">Validation1</a></li>
                        <li><a href="#">Validation2</a></li>
                        <li><a href="#">Validation3</a></li>
                        <li><a href="#">Validation4</a></li>
                    </ul>
                </li>

                <li><a href="#">Feedback</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div class="profile-picture">
            <img src="/res/profile.jpg" alt="Profile Picture" style="width: 50px; height: 50px; border-radius: 50%;">
        </div>

    </header>

    <main>
        content
    </main>
    <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <img src="/res/logo.png" alt="Company Logo">
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <h3>Learn More</h3>
                    <ul>
                        <li><a href="/src/content/content_ST1.html">Content 1</a></li>
                        <li><a href="/src/content/content_ST2.html">Content 2</a></li>
                        <li><a href="/src/content/content_ST3html">Content 3</a></li>
                        <li><a href="/src/content/content_ST4.html">Content 4</a></li>
                        <li><a href="/src/content/content_ST5.html">Content 5</a></li>
                        <li><a href="/src/content/content_ST6.html">Content 6</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Validation</h3>
                    <ul>
                        <li><a href="#">Lison's Validation</a></li>
                        <li><a href="#">Sansith's Validation</a></li>
                        <li><a href="#">Emika's Validation</a></li>
                        <li><a href="#">Oshan's Validation</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <p> <strong></strong></p>
                    <p> <strong></strong></p>
                </div>
                <div class="footer-column social">
                    <h3>Social</h3>
                    <a href="#"><i class="facebook"></i></a>
                    <a href="#"><i class="instagram"></i></a>
                    <a href="#"><i class="twitter"></i></a>
                    <a href="#"><i class="youtube"></i></a>
                    <a href="#"><i class="wordpress"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Apilage Company | All Rights Reserved</p>
        </div>
    </footer>

</body>

</html>
```
---

**Ruwan Egodawatte Pihitai!** 🙏 

