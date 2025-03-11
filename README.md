# 🌐 Group Coursework for 4COSC011W

**Module:** Web Design & Development (4COSC011W)  
**Team:** Sansith (ST1), Lison (ST2), Emika (ST3), Oshan (ST4)  
**Due Date:** 10 March 2025  
**Submission:** ZIP file (code + reports) + Group Agreement via Blackboard\
**Github Repository:** https://github.com/xerosf/web-dev-coursework \
**Github Pages:** https://xerosf.github.io/web-dev-coursework/

---

## 📌 Project Overview

Design and develop a website focused on **one** UN Sustainable Development Goal (SDG). The project emphasizes teamwork, adherence to web standards (HTML/CSS/JS), accessibility, and validation.

### Key Deliverables:

-   **Website Pages** (assigned per student below)
-   **Individual Reports** (Page Editor pages)
-   **Validation Reports**
-   **Group Coursework Agreement**

---

## Project Usage:

-   Make sure _git_ is installed and works with _VSCode_.
-   Create a directory for the project and open it in _VSCode_.
-   Open up a terminal in _VSCode_ and run `git clone https://github.com/xerosf/web-dev-coursework.git` to download and set up the repo locally.
-   Use the _Source Control_ GUI in _VSCode_ to conveniently commit and sync changes to the repo.

---

## 🗺️ Roadmap & Timeline

| Phase                     | Timeline        | Tasks                                                                                                  |
| ------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| **Planning & Setup**      | Feb 16 - Feb 18 | - Finalize SDG topic <br> - Define design/style guidelines <br> - Setup GitHub repo & folder structure |
| **Template Development**  | Feb 16 - 17     | - Lison (ST2) creates Global CSS & template <br> - Team reviews design consistency                     |
| **Page Development**      | Feb 17 - Feb 28 | - Individual page implementation <br> - Weekly progress checks                                         |
| **Integration & Testing** | Mar 1 - Mar 7   | - Cross-test pages <br> - Validate HTML/CSS <br> - Fix accessibility issues                            |
| **Final Submission**      | Mar 8 - Mar 10  | - Compress files <br> - Submit reports & signed agreement                                              |

---

## 👥 Workload Division

### Individual Assignments

| Student           | Pages & Responsibilities                                           | Files to Develop                                                                                  |
| ----------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Sansith (ST1)** | Splash Screen, Volunteer Page, Content Page (ST1)                  | `splash.html`, `volunteer.html`, `content_ST1.html`, `pageEditor_ST1.html`, `validation_ST1.html` |
| **Lison (ST2)**   | **Template/Global CSS**, Home Page, Table Page, Content Page (ST2) | `home.html`, `table.html`, `content_ST2.html`, `pageEditor_ST2.html`, `validation_ST2.html`       |
| **Emika (ST3)**   | Feedback Page, Team Page, Content Page (ST3)                       | `feedback.html`, `team.html`, `content_ST3.html`, `pageEditor_ST3.html`, `validation_ST3.html`    |
| **Oshan (ST4)**   | User Profile Page, Sitemap (SVG), Content Page (ST4)               | `profile.html`, `sitemap.html`, `content_ST4.html`, `pageEditor_ST4.html`, `validation_ST4.html`  |

### Shared Responsibilities

-   **All Students**
-   Content Pages (`content_STx.html`)
-   Page Editor & Validation Reports
-   Code comments, accessibility compliance, validation
-   Group meetings (min. 5) & agreement submission

---

## 📋 Issues & Progress Tracking

Use GitHub Issues to:

-   Report bugs or design inconsistencies
-   Track task completion (e.g., "Splash Screen - Done ✅")
-   Document meeting summaries

**Label System:**

-   `bug` 🐞, `design` 🎨, `priority` 🔥, `completed` ✅

---

## 📞 Contact & Meetings

-   **All Communications:** Group WhatsApp and Discord

---

## Header, Footer Usage

To include the header and the footer in your pages, use this HTMl template:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Climate Action</title>
		<link
			rel="icon"
			href="https://img.icons8.com/color/48/united-nations.png"
			type="image/x-icon" />

		<!-- Base styles -->
		<link rel="stylesheet" href="../../src/css/style.css" />

		<!-- Font Awesome (Social media icons)-->
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

		<script src="../js/theme.js" defer></script>
		<script src="../js/hamburger-menu.js" defer></script>
		<script src="../js/back-to-top.js" defer></script>
	</head>

	<body>
		<div id="header-container"></div>
        <br><br><br><br><br><br>
			
		</main>
		<div id="footer-container"></div>
		<div id="theme-switcher"></div>
		<div id="back-to-top"></div>
		<script>
			document.addEventListener('DOMContentLoaded', function () {
				fetch('../components/header.html')
					.then((response) => response.text())
					.then((data) => {
						document.getElementById('header-container').innerHTML =
							data;
						if (typeof adjustBodyPadding === 'function') {
							adjustBodyPadding();
						}
						if (typeof initHamburgerMenu === 'function') {
							initHamburgerMenu();
						}
					})
					.catch((error) =>
						console.error('Error loading header:', error)
					);

				// Load the footer
				fetch('../components/footer.html')
					.then((response) => response.text())
					.then((data) => {
						document.getElementById('footer-container').innerHTML =
							data;
					})
					.catch((error) =>
						console.error('Error loading footer:', error)
					);
				// Load the theme switcher
				fetch('../components/theme_switcher.html')
					.then((response) => response.text())
					.then((data) => {
						document.getElementById('theme-switcher').innerHTML =
							data;
						if (typeof initThemeToggle === 'function') {
							initThemeToggle();
						}
					})
					.catch((error) =>
						console.error('Error loading theme switcher:', error)
					);
				// Load the back to top button
				fetch('../components/back_to_top.html')
					.then((response) => response.text())
					.then((data) => {
						document.getElementById('back-to-top').innerHTML =
							data;
						if (typeof initBackToTop === 'function') {
							initBackToTop();
						}
					})
					.catch((error) =>
						console.error('Error loading back to top button:', error)
					);
			});
		</script>
	</body>
</html>
```

---
