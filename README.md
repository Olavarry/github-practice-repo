# github-practice-repo

This repository is for practicing Git and GitHub workflows, including managing branches and running automated tests with Cypress.

---

## 🚀 Getting Started

To get the Cypress tests running locally, follow these steps.

### Prerequisites

* **Node.js & npm:** Download and install from [https://nodejs.org](https://nodejs.org/es/download/). To confirm installation, open your command line and type `node -v`.
* **Git:** Download and install from [https://git-scm.com](https://git-scm.com/download/win).

### Installation and Setup

1.  **Clone the Repository:** Create a new folder on your computer and open your command line or terminal within that folder. Then, run the following command to clone the repo:

    ```bash
    git clone [https://github.com/Olavarry/github-practice-repo.git](https://github.com/Olavarry/github-practice-repo.git)
    ```

2.  **Navigate to the Project:** Move into the newly cloned project directory:

    ```bash
    cd github-practice-repo
    ```

3.  **Configure Git:** Set your Git user name and email to associate your commits with your GitHub account.

    ```bash
    git config user.email "yourEmail@example.com"
    git config user.name "Your Name"
    ```

4.  **Install Dependencies:** Install all the required Node.js packages for the project. This will create a `node_modules` folder.

    ```bash
    npm install
    ```

5.  **Open Cypress:** Launch the Cypress test runner GUI.

    ```bash
    npm run cypress:open
    ```
    You should now be able to select and run tests from the Cypress window.

---

## 🌿 Git Branching Workflow

Here are the basic commands for managing branches in this repository.

### Create a New Feature Branch

Use the `checkout -b` command to create a new branch and switch to it in a single step.

```bash
git checkout -b feature/add-new-test-for-home-page
