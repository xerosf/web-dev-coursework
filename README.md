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
    <title>Document</title>
    <link rel="stylesheet" href="../css/home-styles.css">
</head>

<body>
    <div id="header"></div>
    <script>
        fetch("../template.html")
            .then(response => response.text())
            .then(data => document.getElementById("header").innerHTML = data);
    </script>
</body>

</html>
```
---

**Ruwan Egodawatte Pihitai!** 🙏 

