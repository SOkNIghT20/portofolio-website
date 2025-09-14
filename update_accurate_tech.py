#!/usr/bin/env python3

# Read the current HTML file
with open('index.html', 'r') as file:
    content = file.read()

# Update SunDevilCafeteria project
old_sundevil = '''                        <h3>Sun Devil Cafeteria</h3>
                        <p>A comprehensive job board application connecting job seekers with employers, featuring advanced search, filtering, and application management.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Bootstrap</span>
                        </div>'''

new_sundevil = '''                        <h3>Sun Devil Cafeteria</h3>
                        <p>A comprehensive Java-based cafeteria management system for ASU, featuring role-based access (Customer, Operator, Admin), menu management, ordering system, and data persistence using SQLite.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Java</span>
                            <span class="tech-tag">JavaFX</span>
                            <span class="tech-tag">Maven</span>
                            <span class="tech-tag">SQLite</span>
                        </div>'''

# Update Job Board project
old_jobboard = '''                        <h3>Job Board Platform</h3>
                        <p>A comprehensive job board application connecting job seekers with employers, featuring advanced search, filtering, and application management.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">PHP</span>
                        </div>'''

new_jobboard = '''                        <h3>Job Board Platform</h3>
                        <p>A comprehensive job board application built with C# and ASP.NET, featuring WCF services, role-based authentication (Member, Staff, Admin), and SQL Server integration.</p>
                        <div class="project-tech">
                            <span class="tech-tag">C#</span>
                            <span class="tech-tag">ASP.NET</span>
                            <span class="tech-tag">WCF Services</span>
                            <span class="tech-tag">SQL Server</span>
                        </div>'''

# Update Portfolio project
old_portfolio = '''                        <h3>Interactive Portfolio Website</h3>
                        <p>A modern, responsive portfolio website with parallax space background, interactive animations, and dynamic content management.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Canvas API</span>
                        </div>'''

new_portfolio = '''                        <h3>Interactive Portfolio Website</h3>
                        <p>A modern, responsive portfolio website with Three.js 3D rendering, parallax space animations, and automated content management using Python scripts.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Three.js</span>
                        </div>'''

# Update skills section
old_skills = '''                <div class="skill-category">
                    <h3>Frontend Development</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-html5"></i>
                            <span>HTML5</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-css3-alt"></i>
                            <span>CSS3</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-js-square"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-bootstrap"></i>
                            <span>Bootstrap</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-paint-brush"></i>
                            <span>Canvas API</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Backend Development</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-php"></i>
                            <span>PHP</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>MySQL</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-server"></i>
                            <span>Apache</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-code"></i>
                            <span>REST APIs</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Tools & Technologies</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-mobile-alt"></i>
                            <span>Responsive Design</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-palette"></i>
                            <span>UI/UX Design</span>
                        </div>
                    </div>
                </div>'''

new_skills = '''                <div class="skill-category">
                    <h3>Programming Languages</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-java"></i>
                            <span>Java</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-js-square"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-code"></i>
                            <span>C#</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Frameworks & Technologies</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fas fa-leaf"></i>
                            <span>JavaFX</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-cube"></i>
                            <span>Maven</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-globe"></i>
                            <span>ASP.NET</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-cube"></i>
                            <span>Three.js</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Databases & Tools</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>SQLite</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>SQL Server</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>'''

# Replace the content
content = content.replace(old_sundevil, new_sundevil)
content = content.replace(old_jobboard, new_jobboard)
content = content.replace(old_portfolio, new_portfolio)
content = content.replace(old_skills, new_skills)

# Write the updated content back to the file
with open('index.html', 'w') as file:
    file.write(content)

print("Portfolio updated with accurate technologies!")
