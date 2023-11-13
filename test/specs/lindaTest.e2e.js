describe("Linda Tran Web page testing demo", () => {
  it("web page test steps", async () => {
    // step 1 go to web page
    await browser.url("https://codelinda.com/");

    // step 2 scroll down to contact
    const contact = await $("//span[contains(text(),'Get in touch')]");

    // scroll to specific element
    await contact.scrollIntoView();

    // center element within the viewport
    await contact.scrollIntoView({ block: "center", inline: "center" });

    // step 3: Find Name input place and type name in name area
    const NameInput = await $("//input[@placeholder='Your name']");
    await NameInput.setValue("Linda Test Demo");

    // step 4: Find LastName input place and type lastname in lastname area
    //const LastNameInput = await $("//input[@placeholder='Your last name'");
    const LastNameInput = await $("input[placeholder='Your last name']");
    await LastNameInput.setValue("LastName Test Demo");

    // step 5:: Find email input place and type email in email area
    const emailInput = await $("//input[@placeholder='Your email address']");
    await emailInput.setValue("email@TestDemo.coom");

    // step 6: Find message input place and type message in massage area
    const messageInput = await $("//textarea[@placeholder='Enter your message']");
    await messageInput.setValue("Hello this is message for 'Test Demo'");

    // step 7:: Find submit place and click submit button
    const submitButton = await $("//button[normalize-space()='Submit']");
    await submitButton.click();

    // step 8 verify message sent
    const succesMessage = await $("//div[@class='success-message__heading']");
    await expect(succesMessage).toBeDisplayed();
  });
});
