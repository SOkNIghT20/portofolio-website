#!/usr/bin/env python3

# Read the current HTML file
with open('index.html', 'r') as file:
    content = file.read()

# Update projects section
old_projects = '''                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>E-Commerce Platform</h3>
                        <p>A full-stack e-commerce solution with React, Node.js, and MongoDB.</p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Task Management App</h3>
                        <p>A responsive task management application with real-time updates.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">CSS3</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-chart-line"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Data Visualization Dashboard</h3>
                        <p>Interactive dashboard for data analysis and visualization.</p>
                        <div class="project-tech">
                            <span class="tech-tag">D3.js</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Flask</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                        </div>
                    </div>
                </div>'''

new_projects = '''                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-briefcase"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Job Board Platform</h3>
                        <p>A comprehensive job board application connecting job seekers with employers, featuring advanced search, filtering, and application management.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">PHP</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/SOkNIghT20/job_board" class="project-link"><i class="fab fa-github"></i> Code</a>
                            <a href="https://github.com/SOkNIghT20/job_board" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-utensils"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Sun Devil Cafeteria</h3>
                        <p>A digital cafeteria management system for ASU, featuring menu management, ordering system, and real-time updates for students and staff.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Bootstrap</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/SOkNIghT20/SunDevilCafeteria" class="project-link"><i class="fab fa-github"></i> Code</a>
                            <a href="https://github.com/SOkNIghT20/SunDevilCafeteria" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-rocket"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Interactive Portfolio Website</h3>
                        <p>A modern, responsive portfolio website with parallax space background, interactive animations, and dynamic content management.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Canvas API</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                        </div>
                    </div>
                </div>'''

# Update skills section
old_skills = '''                <div class="skill-category">
                    <h3>Frontend</h3>
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
                            <i class="fab fa-react"></i>
                            <span>React</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-vuejs"></i>
                            <span>Vue.js</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Backend</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-node-js"></i>
                            <span>Node.js</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>MongoDB</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-server"></i>
                            <span>Express.js</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Tools & Others</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-docker"></i>
                            <span>Docker</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-aws"></i>
                            <span>AWS</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-cloud"></i>
                            <span>Firebase</span>
                        </div>
                    </div>
                </div>'''

new_skills = '''                <div class="skill-category">
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

# Replace the content
content = content.replace(old_projects, new_projects)
content = content.replace(old_skills, new_skills)

# Write the updated content back to the file
with open('index.html', 'w') as file:
    file.write(content)

print("Portfolio updated successfully!")
