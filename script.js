document.addEventListener("DOMContentLoaded", function () {
    // List of computer skills courses
    const courses = [
        "Introduction to Programming",
        "Web Development",
        "Data Science Basics",
        "Machine Learning",
        "Cyber Security",
        "Java Programming Tutorial",
        "Full Stack Development",
        "Android App Development",
        "Cloud Computing",
        "Artificial Intelligence",
    ];

    // Get the course list element
    const courseList = document.getElementById("courseList");

    // Populate the course list with items
    courses.forEach((course) => {
        const listItem = document.createElement("li");
        listItem.textContent = course;
        courseList.appendChild(listItem);
    });
});

// functionality to implement scrolling on clicking nav-links


document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        // Calculate the offset position for the smooth scroll
        const offsetPosition = targetElement.offsetTop - document.querySelector('header').offsetHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  