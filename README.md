## 🌲 Cypress - From Zero to the Cloud ☁️

Sample project developed during the **"Cypress: From Zero to the Cloud"** course from the **Talking About Testing** online school.

This project demonstrates automated testing using Cypress, supporting both **desktop** and **mobile** viewports.

---

## 📋 Prerequisites

Before running this project, make sure the following tools are installed on your machine:

- Node.js
- npm
- Git

Versions used during development:

| Tool | Version |
|--------|----------|
| Git | 2.54.0|
| Node.js | v22.22.3 |
| npm | 10.9.8 |

> Recommended: Use these versions or newer for better compatibility.

---

## 🚀 Installation

Run ```npm install ``` (or ```npm i``` for the short version) to intsall the dev dependencies.

## 🧪 Running Tests

This project supports test execution in both **Desktop** and **Mobile** environments.

### 🖥 Desktop Mode

Run tests in headless mode:

```bash
npm test
```

or:

```bash
npm t
```

Open Cypress Test Runner:

```bash
npm run cy:open
```

---

### 📱 Mobile Mode

Run tests in headless mode with a mobile viewport:

```bash
npm run cy:mobile
```

Open Cypress Test Runner using mobile configuration:

```bash
npm run cy:open:mobile
```

---

## 📂 Project Structure

```bash
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── support/       # Custom commands and configurations
│
├── package.json
├── cypress.config.js
└── README.md
```

---

## 📚 About

This repository was created for learning purposes and serves as a practical example of Cypress test automation following best practices.

---

Made with ❤️ using Cypress