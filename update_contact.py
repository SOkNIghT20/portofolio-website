#!/usr/bin/env python3

# Read the current HTML file
with open('index.html', 'r') as file:
    content = file.read()

# Update the phone number to GitHub username
old_contact = '''                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Phone</h4>
                                <span>+1</span>
                            </div>
                        </div>'''

new_contact = '''                        <div class="contact-item">
                            <i class="fab fa-github"></i>
                            <div>
                                <h4>GitHub</h4>
                                <span>SOkNIghT20</span>
                            </div>
                        </div>'''

# Replace the content
content = content.replace(old_contact, new_contact)

# Write the updated content back to the file
with open('index.html', 'w') as file:
    file.write(content)

print("Contact section updated with GitHub username!")
