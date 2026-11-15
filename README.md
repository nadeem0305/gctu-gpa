# GCTU GPA Calculator

A one-page GPA and class-of-degree calculator for Ghana Communication Technology University students.
Enter each course's credit hours and grade; it weights by credits and shows your GPA and class.

**Live:** https://nadeem0305.github.io/gctu-gpa/

- No build step, no dependencies: `index.html` + `gpa.js`.
- Courses are saved in your browser (localStorage), nothing is sent anywhere.
- Tests: `node --test`

The grade points and class boundaries live at the top of `gpa.js`. They follow the common Ghanaian
4.0 scale; check them against the current student handbook.
