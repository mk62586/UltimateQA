import content from "../../PageObject/Content.page"
describe("Visit ultimate web",()=>{
    beforeEach("visit the UtlimateQA",()=>{
        cy.visit("/")
    })
    it('Validate the title of the page',()=>{
        content.titlePage().then(txt=>{
            expect(txt).to.eql('Complicated Page | Ultimate QA')
        })
    })
    it("User will fill the blog",()=>{
      content.showToggle()
      content.name()
      content.emailAdd()
      content.messageAdd()
      content.Submit()
    })
    it.only("User will click skills improved",()=>{
        content.skill().should("be.visible")
    })
    it("user will click on buttons",()=>{
       content.sectionButton().should("be.visible")
    })
    it("user will click on socialMedia",()=>{
        content.socialMedia().should("be.visible")
     })
     it("user will click on sectionRandom",()=>{
        content.sectionRandom().should("be.visible")
     })
     it("user will click on latestBlog",()=>{
        content.latestBlog().should("be.visible")
     })
     it("user will click on showLogin",()=>{
        content.showLogin()
     })
    it.skip("User can hide the content",()=>{
        content.hideContent()
    })
})