describe('Amber Student Automation Scripts', () => {
  const serverId = 'ztdzhxnw'; 
  const testEmail = `something2@${serverId}.mailosaur.net`


  it('Regression Task for https://amberstudent.com/', () => {
    cy.visit('https://amberstudent.com/')
    cy.get('#main-search').type('London').wait(2000).type('{enter}')
    //cy.get('.location-search-button').click()
    cy.url().should('include', '/places/search/london')


    cy.get("input[value='private_room']").check()
    cy.get("input[value='private_bathroom']").check()
    cy.get(".search-list-element-container:nth-child(3) div.search-list-element-inner-container.box-1 div.search-list-element-main-inner-container div.right-container.is-pulled-left h3.inventory-heading > a.search-list-element-link-container")
      .should('have.attr', 'href').then((href) => {
        cy.visit('www.amberstudent.com' + href)
      })


    cy.get("h1[class='title']").should('have.text', 'Chapter Old Street, London')
    cy.get("[class='location-name-container']").should('have.text', 'Paul St, London, EC2A 4JH, United Kingdom')


  })
  it('Bonus Task 1', () => {
    cy.visit('https://amberstudent.com/')
    //cy.title().should('equal', 'Forgot your password?')
    cy.get('.nav-item.login-item').click()
    cy.get('#user_login_email').type(testEmail)
    cy.contains('Send OTP').should('be.visible').click()


    cy.wait(10000)
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail
    }).then(email => {
      cy.log('email reading start')
      cy.log(email.subject)
      const regEx = new RegExp('([0-9]{6})')
      const otp = email.subject
      const matches = regEx.exec(otp)
      // cy.log(matches[0])
      cy.get('#user_login_otp').type(matches[0])
      cy.get("button[type='submit'] i[class='icon-arrow-right']").click()
    })
    cy.get('#main-search').click().type('Berlin').wait(2000).type('{enter}')
    cy.url().should('include', '/places/search/berlin')
    cy.get("input[value='entire_place']").check()
    cy.get("input[value='private_kitchen']").check()










  })
  it('Bonus Task 2', () => {
    cy.visit('https://amberstudent.com/')
    cy.get('.nav-item.login-item').click()
    cy.get('#user_login_email').type(testEmail)
    cy.contains('Send OTP').should('be.visible').click()
    cy.wait(5000)
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail
    }).then(email => {
      cy.log('email reading start')
      cy.log(email.subject)
      const regEx = new RegExp('([0-9]{6})')
      const otp = email.subject
      const matches = regEx.exec(otp)
      // cy.log(matches[0])
      cy.get('#user_login_otp').type(matches[0])
      cy.get("button[type='submit'] i[class='icon-arrow-right']").click()
    })
    cy.get('#main-search').click().type('London').wait(2000).type('{enter}')
    cy.url().should('include', '/places/search/london')
    cy.get("input[value='private_room']").check()
    cy.get("input[value='private_bathroom']").check()
    cy.get(".search-list-element-container:nth-child(3) div.search-list-element-inner-container.box-1 div.search-list-element-main-inner-container div.right-container.is-pulled-left h3.inventory-heading > a.search-list-element-link-container")
      .should('have.attr', 'href').then((href) => {
        cy.visit('www.amberstudent.com' + href)
      })
    cy.url().should('include', '/places/chapter-old-street-london-2203164613042')
    cy.get("h1[class='title']").should('have.text', 'Chapter Old Street, London')
    cy.get("[class='location-name-container']").should('have.text', 'Paul St, London, EC2A 4JH, United Kingdom')
    cy.contains('Book Now').click()
    
    // Fill Place Request Form
    cy.get("input[placeholder='Full Name']").clear().type('Abc Xyz')
    cy.get("input[placeholder='Email Id']").clear().type('pranavkavitkar@gmail.com')
    cy.get('.select > .input').select('+54').first()
    cy.get("input[placeholder='Phone Number']").clear().type('9999999999')
    cy.get("#lead-modal-button").click()
    cy.contains('Your university name/campus?').should('be.visible')
    cy.get("input[placeholder='Write university name along with campus.']").clear().type('ABCD Uni')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    // Move-in date?
    cy.get("div[class='column is-4'] select").select('22')
    cy.get("div[class='column is-4 month'] select").select('March')
    cy.get("div[class='column is-4 year'] select").select('2023')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    //Lease duration?
    cy.get(".lease-duration").select('more than 51 weeks')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    // Number of students?
    cy.get(".no-of-students").select('2')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    // Budget per student
    cy.get(".no-of-students").select('100')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    // Your room/apartment type?
    cy.get(".configuration").select('Private room with shared bath and shared living area and kitchen')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    // Any other preference/details?
    cy.get("textarea[placeholder='Any specific preferences. For example you might want a private kitchen or a swimming pool.']").type('Defined Pref')
    cy.get(".button.next-button.is-success.is-medium-1").click()
    // Complete booking
    cy.contains("Complete Booking").should('be.visible').should('have.attr', 'href').then((href) => {
      cy.visit(href)
    })
    cy.contains('Your booking is just a step away!').should('be.visible')
    //  Your booking is just a step away!
    cy.wait(5000)
    
    // Logout
    cy.get('.navbar-item > [href="/profile"]').click({ force: true });

  })
})
