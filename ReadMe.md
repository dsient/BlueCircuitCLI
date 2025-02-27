




# Project Overview
!!!THIS IS NOT ANYWHERE NEAR COMPLETION!!! this specific repo is being redone entirely, current version is !!NOT!! here.

**Concept:**  
BlueCirc will be A web-based “CLI OS” that mimics a command-line interface operating system. The project serves as my cybersecurity portfolio and blog, specifically made to be highly secure. 

Featuring:
- A terminal-like interface with cinematic startup animations.
- A custom command syntax (similar to Bash) that powers navigation and interactive commands.
- A secure login and user management system with both frontend and backend components.
- Modularized components where the initial startup script (`mainLoop.js`) plays the OS startup, then transitions to a fully interactive CLI after secure authentication.
- File strucutre segregates the project into secular modules and high levels of security.
- Each component is seperated, and easily maintainable.
- Structure is inspired by patterns similar to hexagonal or onion architecture to ensure security.

**Technology Stack:**
- **Frontend:**  
  - **HTML/CSS/JavaScript:** Structure, styling, and interactivity.
  - **Bootstrap 5.3:** For a responsive layout; terminal window (2/3 of the screen) and a syntax/tutorial window (1/3 of the screen).
  - **Typed.js:** For cinematic typing animations and cool effects.
  - **Custom CLI Parser:** To process unique command syntax. (Syntax sheet coming soon)
  
- **Backend:**  
  - **Node.js with Express:** To handle API endpoints for authentication and command processing.
  - **Database (MongoDB/PostgreSQL):** For securely storing user credentials and other data.
  - **Authentication & Security:**  
    - Password hashing using **bcrypt** (or **argon2,** not sure quite yet).
    - JWT (JSON Web Tokens) for session management.
    - Middleware such as **helmet**, **cors**, and rate limiting.
    - Environment variables with **dotenv** for secret management.
  
- **Additional Tools:**  
  - **HTTPS:** All communications will be over HTTPS.
  - **Logging and Monitoring:** logging for authentication and command attempts (using tools like Winston or Morgan, undecided).

**Usage:**  
Users access the project through a web browser. On load, they see an OS startup animation (Typed.js) and are prompted with a login/create-user screen. Once authenticated, the rest of the CLI OS loads with secure, modular components that handle user commands, display cinematic effects, and allow access to portfolio/blog content, including direct download of my github projects, securely.




# File Structure

Somewhat unusual but efficient file structure to keep the project modular and maintainable, with high levels of security:

```
/bluecircuit-os
├── /client
│   ├── /assets
│   │   ├── /css
│   │   │   └── styles.css           # Global styles: dark background, white text; index panel silver
│   │   ├── /js
│   │   │   ├── mainLoop.js          # Startup script: OS animations, login, load CLI OS
│   │   │   ├── cliHandler.js        # Handles command input, parsing, and terminal updates
│   │   │   └── typedSetup.js        # Initialization for Typed.js animations
│   │   └── /images
│   │       └── logo.png             # Custom branding assets
│   ├── index.html                   # Main HTML file with Bootstrap integration
│   └── favicon.ico                  # Favicon for the site
│
├── /server
│   ├── /config
│   │   └── db.js                    # Database connection and config
│   ├── /controllers
│   │   ├── authController.js        # Registration and login logic
│   │   └── commandController.js     # Secure handling of sensitive commands
│   ├── /middleware
│   │   ├── authenticateToken.js     # JWT verification middleware
│   │   ├── rateLimiter.js           # Rate limiting to prevent brute-force attacks
│   │   └── inputValidator.js        # Input sanitization/validation (using libraries like Joi)
│   ├── /models
│   │   └── User.js                  # User schema/model for your chosen DB
│   ├── /routes
│   │   ├── authRoutes.js            # Routes for user registration and login
│   │   └── commandRoutes.js         # Routes for processing commands
│   ├── .env                         # Environment variables (do not commit to version control)
│   ├── package.json                 # Node.js dependencies and scripts
│   └── server.js                    # Main Express server file; loads middleware and routes
│
└── README.md                        # Project documentation and setup instructions
```




# Security Measures

1. **Frontend Security:**
   - **Input Sanitization:** All user input in the CLI is sanitized before processing.
   - **Dependency Management:** Use trusted CDNs (or local copies) of libraries like Bootstrap and Typed.js.
   - **Script Ordering:** Load dependencies before main scripts to prevent runtime errors.

2. **Backend Security:**
   - **Password Hashing:** Use bcrypt/argon2 with a strong salt to hash passwords.
   - **JWT Authentication:** Issue JWTs on login and protect API routes with middleware.
   - **Secure Headers:** Use Helmet to set secure HTTP headers.
   - **Rate Limiting:** Implement rate limiting on login and sensitive endpoints.
   - **Environment Variables:** Store secrets and configuration outside of your source code using dotenv.
   - **Input Validation:** Use robust input validation to prevent injection attacks.
   - **HTTPS Enforcement:** Ensure all communications are encrypted.

3. **Additional Security Enhancements:**
   - **Audit Logging:** Log authentication attempts and sensitive actions.
   - **Two-Factor Authentication (2FA):** Consider adding 2FA for admin-level access.
   - **Regular Dependency Updates:** Keep all packages updated to address vulnerabilities.
   - **Content Security Policy (CSP):** Set up CSP headers to restrict resource loading.
   - **Error Handling:** Avoid exposing stack traces or internal error details to the client.

# EXTRAS

- **Interactive Portfolio & Blog:**
  - Integrate a blog section that shows your cybersecurity posts.
  - Use the CLI OS commands to navigate between blog posts, project demos, and your portfolio.
  
- **Custom Command Syntax & Cinematic Effects:**
  - Animate transitions between different system states with Typed.js and CSS animations.
  - Allow for per-user animation / font preferences from a small list using cookies (as these settings are not entirely important to working order)

- **Live Demo Mode:**
  - Will eventually implement an option to simulate a live cyber-attack / CTF guide using my own gained knowledge.
  
- **User Personalization:**
  - Allow users to create custom profiles or “shell environments” that personalize their experience.
  
- **Dark Mode & Theming:**
  - Although the default is a dark theme (pure black background and white text), offer toggles for alternative themes that reflect different “modes” of operation.
  
- **Engaging Documentation:**
  - Include a comprehensive README and in-OS help command (e.g., `help` or `man`) that describes your project, commands, and security measures.
  
- **Source Code & Security Audits:**
  - If appropriate for your portfolio, provide a secure, read-only view of your source code along with commentary on your security implementations.
  
- **Performance & Accessibility:**
  - Optimize performance with efficient JavaScript and lazy loading of components.
  - Ensure that your CLI OS is accessible (keyboard navigability, ARIA roles, etc.).
 
- **Color Scheme:**
  - 4 bit color theme (16 colors, 2^4)
  - Guide for terminal coloring: [ https://hamvocke.com/blog/lets-create-a-terminal-color-scheme/ ]





