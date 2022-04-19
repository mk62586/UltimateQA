///<reference types="Cypress"/>
const content    = '.lwptoc_i'
const name       = "#et_pb_contact_name_1"
const email      = '#et_pb_contact_email_1'
const message    = '#et_pb_contact_message_1'
const captcha    = '//input[@name="et_pb_contact_captcha_2"]'
const submit     = "div[id='et_pb_contact_form_1'] button[name='et_builder_submit_button']"
const initBal    ='#initialBalance'
const minBal     ='#minimumBalance'
const loan       = '#loanProvider'
const loanProc   = '#loanProcessor'
class Content{
    titlePage(){
        return cy.title()
    }
    skill(){
        return cy.get(content).contains("Skills Improved:").click()
    }
    sectionButton(){
        return cy.get(content).contains("Section of Buttons").click()
    }
    socialMedia(){
        return cy.get(content).contains("Section of Social Media Follows").click()
    }
    sectionRandom(){
        return cy.get(content).contains("Section of Random Stuff").click()
    }
    latestBlog(){
        return cy.get(content).contains("Get Latest Blog Posts").click()
    }
    showLogin(){
        return cy.get(content).contains("Login").click()
    }
    showToggle(){
        return cy.get(content).contains("A toggle").click()
    }
    comments(){
        return cy.get(content).contains("Comments").click()
    }
    fillToggle(){
        return cy.get(content).contains("A toggle").click()
    }
    name(){
        return cy.get(name).type("Sachin")
    }
    emailAdd(){
        return cy.get(email).type("Sachin123@gmail.com")
    }
    messageAdd(){
        return cy.get(message).type("Sachin123@gmail.com")
    } 
    Captcha(){
        return cy.get(captcha).click().type("14")
    }
    Submit(){
        return cy.get(submit).click()
    }
    hideContent(){
        return cy.get(content).contains("hide").click()
    }
    showContent(){
        return cy.get(content).contains("show").click()
    }
}
export default new Content