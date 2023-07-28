/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    // Footer
    public get social() {
        return $(".social");
    }
    public get socialTwitter() {
        return $("a[href='https://twitter.com/saucelabs']");
    }
    public get socialFacebook() {
        return $("a[href='https://www.facebook.com/saucelabs']");
    }
    public get socialLinkedin() {
        return $("a[href='https://www.linkedin.com/company/sauce-labs/']");
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   // saucedemo.com
    public open (path: string) {
        return browser.url(`${path}`);
    }
    async assertFooter(){
        await this.clickTwitterLink();
        await this.clickFacebookLink();
        await this.clickLinkedinLink();

    }
    async clickTwitterLink() {
        await this.social.scrollIntoView();
        await this.socialTwitter.waitForDisplayed();
        await this.socialTwitter.click();
        await this.closeNewTab();
    }
      async clickFacebookLink() {
        await this.social.scrollIntoView();
        await this.socialFacebook.waitForDisplayed();
        await this.socialFacebook.click();
        await this.closeNewTab();
    }
      async clickLinkedinLink() {
        await this.social.scrollIntoView();
        await this.socialLinkedin.waitForDisplayed();
        await this.socialLinkedin.click();
        await this.closeNewTab();
    }
    public async closeNewTab(): Promise<void> {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
          await browser.switchToWindow(handles[1]);
          await browser.closeWindow();
          await browser.switchToWindow(handles[0]);
        }
    }
}