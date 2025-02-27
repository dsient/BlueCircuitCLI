




# PROJECT OVERVIEW
__**!!!THIS IS NOT ANYWHERE NEAR COMPLETION!!!**__
this specific repo is being redone entirely, current version is __**!!NOT!!**__ here.

**Concept:**  
BlueCirc will be A web-based “CLI OS” that mimics a command-line interface operating system. The project serves as my cybersecurity portfolio and blog, specifically made to be highly secure. 

Featuring:
- A terminal-like interface with cinematic startup animations.
- A custom command syntax (somewhat similar to Bash) that powers navigation and interactive commands.
- A secure login and user management system with both frontend and backend components.
- Modularized components where the initial startup script (`mainLoop.js`) plays the OS startup, then transitions to a fully interactive CLI after secure authentication.
- File structure segregates the project into secular modules and high levels of security.
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

# BASIC FUNCTIONS

  1 **Interactive Portfolio & Blog:**
    - Integrating a blog section that shows cybersec related posts.
    - Using the CLI OS commands will allow you to navigate between blog posts, and software (direct download from my github); as well as more mostly undetermined functions and "applications".
    
  2 **Custom Command Syntax & Cinematic Effects:**
    - Animating transitions between different system states with Typed.js and CSS animations.
    - Allowing for per-user animation / font preferences from a set list stored on the server


# File Structure

Somewhat unusual but efficient file structure to keep the project modular and maintainable, with high levels of security:

```
/bluecircuit-os
├── /client
|   |
│   ├── /bulk                # holds the "bulk", or most of / entirety of the client side.
│   │
│   │   ├── /glSty               # Global styles
│   │   │   ├── userProfile.css       # Hold user preferences (font, anims, etc.)
│   │   │   └── deepSty.css           # 'deep' refers to admin only / system config files not to be accessed by normal users
│   │   |
│   │   ├── /boot                # mimics boot startup
│   │   │   └── clientSTR.js          # Startup script: OS animations, login, load CLI OS
│   │   |
│   │   └── /ast                 # main client asset bin     
│   │   |   └── logo.png              # Custom assets
│   │   |
|   |   └── /inp                 # Input handlers 
|   |       ├── inpHandler.js         # Handles command input, parsing, and terminal updates
|   |       └── typdInit.js           # Initialization for Typed.js animations
|   |   
│   │ 
│   ├── /blg  
│   │   ├── /priv                # Pages for priv blog access
│   │   |   └── blgReqACC.js          # Client request with password (3 month auto-reset), then wait for page info. (Active connection to display page without access to the internal files)
│   │   └── /publ                # Assets and pages for public blog posts
│   │       └── blgCONN.js            # Active connection to display page without access to the internal files
│   │
│   └── /sftwre              # Requests server for active software list; Displays it
│
|
|
├── /server
|   |
│   ├── /constella          # "Constellation" of databases, interGuard utilities as a shield
|   |   ├── blgDb.js                  # blog database
│   │   └── db.js                     # Database of user accounts !!SECURE!!
|   |
│   ├── /controllers
│   │   ├── authCTRL.js               # Registration and login logic
│   │   ├── blgCTRL.js                # Defines the API endpoints fore blog ops
│   │   ├── pBlgCTRL.js               # Private blog endpoint from client recACC.js
│   │   └── commandCTRL.js            # Secure handling of **sensitive** commands
|   |
│   ├── /interGuard         # Intermediary layer between OS and apps, which enables communication and data management after cleansing.
│   │   ├── authTOK.js                # JWT verification middleware
│   │   ├── inpVAL.js                 # Input sanitization/validation (using libraries like Joi or something)
│   │   └── rateLIM.js                # Rate limiting to prevent brute-force attacks
|   |
│   ├── /dummys            # User account schemas
│   │   ├── deepR.js                  # Admin account schema for chosen DB
│   │   ├── frIEN.js                  # 'Friend' account, access code asked for per use case. (priv / public blog, perhaps?) [access code changes automatically every 3 months]
│   │   └── user.js                   # Basic User schema/model for chosen DB
|   |
│   ├── /circuits           # "Routes" - denoted as circ / circuit per use case
│   │   ├── authCirc.js               # Routes for user registration and login
│   │   ├── blgCirc.js                # Defines the API endpoints fore blog ops
│   │   └── commandCirc.js            # Routes for processing normal user commands
|   |
│   ├── .env                     # Environment variables (!!!do not commit to version control!!!) sensitive configs
│   ├── package.json             # Node.js dependencies and scripts
│   └── server.js                # Main Express server file; loads middleware and routes
│
└── README.md                # Project documentation and setup instructions
```




# Security Measures

  1. **Frontend Security:**
     - **Input Sanitization:** All user input in the CLI is sanitized before processing.
     - **Dependency Management:** Using trusted CDNs like Bootstrap and Typed.js.
     - **Script Ordering:** Load dependencies before main scripts to prevent runtime errors.
     - **Needed access:** Minimized amount of front end accessible files as much as possible.
  
  2. **Backend Security:**
     - **Password Hashing:** Using bcrypt/argon2 with a strong salt to hash passwords.
     - **JWT Authentication:** Issuing JWTs on login and protect API routes with middleware.
     - **Secure Headers:** Using Helmet to set secure HTTP headers.
     - **Rate Limiting:** Implementing rate limiting on login and sensitive endpoints.
     - **Environment Variables:** Storing secrets and configuration outside of source code using dotenv.
     - **Input Validation:** Using __robust__ input validation to prevent injection attacks.
     - **HTTPS Enforcement:** Ensuring all communications are encrypted.
  
  3. **Additional Security Enhancements:**
     - **Audit Logging:** Log authentication attempts and sensitive actions.
     - **Two-Factor Authentication (2FA):** Might be adding 2FA for admin-level access.
     - **Regular Dependency Updates:** Keeping all packages updated to address vulnerabilities.
     - **Content Security Policy (CSP):** Setting up CSP headers to restrict resource loading.
     - **Error Handling:** Avoid exposing stack traces or internal error details to the client.




# ROADMAP (As of 2/27/2025)

1 **User Personalization:**
  - Allow users to create custom profiles or “shell environments” that personalize their experience.

2 **Live Demo Mode:**
  - Will eventually implement an option to simulate a live cyber-attack / CTF guide using my own gained knowledge.
  
3 **Dark Mode & Theming:**
  - Although the default is a dark theme (pure black background and white text), offer toggles for alternative themes that reflect different “modes” of operation.
  
4 **Engaging Documentation:**
  - Include a comprehensive README and in-OS help command (e.g., `help` or `man`) that describes your project, commands, and security measures.
  
- **Performance & Accessibility:**
  - Optimize performance with efficient JavaScript and lazy loading of components.
  - Ensure that your CLI OS is accessible (keyboard navigability, ARIA roles, etc.).
 
- **Color Scheme:**
  - 4 bit color theme (16 colors, 2^4)
  - My guide for terminal coloring: [ https://hamvocke.com/blog/lets-create-a-terminal-color-scheme/ ]

- **Source Code & Security Audits:**
  - Provide a read-only view of the source code, with commentary on security implementations and development.




