# AmberAssignment

1.Clone Repo
git clone https://github.com/pranavkavitkar/AmberAssignment.git

2.Npm install
In repo folder amberstudent, run > 
npm i

3.Open Cypress >
npx cypress open
It will install cypress within a few seconds and will open a Cypress Dashboard, just press Continue.
a.Click on E2E Testing.
b.Select a browser.
c.Click on the file ‘amber.cy.js’ and it will run the file.

4.Alternatively, 
The file can also be run by the following command >
npx cypress run --spec cypress/e2e/amberScripts.cy.js --headed

Note: –headed is a argument just to to run the script in a headed mode and can be ignored.
