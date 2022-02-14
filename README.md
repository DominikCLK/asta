
## Automated Software Testing Arena (ASTA) Project


ASTA is a platform created by PGS Software that supports learning to write automated tests. The application contains 10 tasks that are excerpts of various functionalities often found on websites.

My project uses automatic tests in Cypress

## 📄 Documentation

[Test plan](https://drive.google.com/file/d/1MtwA7Xsa-cGp2EOWjwkYQTQj9VOojYZU/view?usp=sharing)

[Test cases](https://docs.google.com/spreadsheets/d/1tdGWR5ITr_3hLUnS_onb6P_1kwYMqAE8MTsyNhb0SHU/edit?usp=sharing)

[Tested app](https://buggy-testingcup.pgs-soft.com/)

## 🛠 Tools
[Cypress](https://docs.cypress.io/guides/overview/why-cypress)

[Trello board](https://trello.com/invite/b/5UqQ7gyl/b3ec05cd062f96266c67747fdbed3d7c/astatask1)



# Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
Node.js Cypress

## Installing

#### Install Node.js
```bash
  https://nodejs.org/en/download/
```

#### Install Cypress
```bash
  https://docs.cypress.io/guides/getting-started/installing-cypress
```

#### Clone repository
```bash
  https://github.com/DominikCLK/ASTA_Project.git
```

## Running the test
Locally tests should be run with Cypress Runner. To launch Cypress runner add npm script to you package.jason file, than use:
```bash
  npm run cypress:open
```

## Coding style
There is a test ID in - describe('ID'), and test case description in - it ('Test case description')

```bash
  describe('ASTA_TASK_1001', () => {
   it('App starts correctly ', () => {
     cy.visit('https://buggy-testingcup.pgs-soft.com/task_1')
  })
})
```




## 🎧 Support

For support visit [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)


## Authors

- Dominik Calak


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dominik-calak/)


