import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AboutPage extends Page {
    /**
     * define selectors using getter methods
     */
    //Header

    //Body
    public get aboutpageHeadline() {
        return $('.MuiBox-root.css-mntjpt');
    }
    public get aboutpageDescription() {
        return $('.MuiTypography-root.MuiTypography-body1.css-sere2z');
    }
    public get startFreeButton() {
        return $('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedAccentGreen.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedAccentGreen.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.css-as8hpy');
    }
    public get requestDemoButton() {
        return $('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedDark.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-disableElevation.MuiButton-root.MuiButton-outlined.MuiButton-outlinedDark.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-disableElevation.css-hy804n');
    }
    public get headerImg() {
        return $("(//*[name()='svg'])[1]");
    }
    public get partnerCaption() {
        return $(".MuiTypography-root.MuiTypography-h4.css-18w5klh");
    }
    /* 
    *
    *   Methods
    *
    * */
    public open () {
        // eslint-disable-next-line ui-testing/no-absolute-url
        return browser.url(`https://saucelabs.com/`);
    }
    async assertTitle() {
        await expect(browser).toHaveTitleContaining(
          "Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing"
        );
      }
    async assertAboutpage(){
        await this.assertTitle();  
        await this.assertBody();    
    }
    async assertBody(){
        // eslint-disable-next-line ui-testing/no-hard-wait
        await browser.pause(500);
        await expect(this.aboutpageHeadline).toBeExisting();
        await expect(this.aboutpageHeadline).toHaveTextContaining("Website and mobile testingat every stage of development");
        await expect(this.aboutpageDescription).toBeExisting();
        await expect(this.aboutpageDescription).toHaveTextContaining("The world relies on your code. Test on thousands of device, browser, and OS configurations – anywhere, any time.");
        await expect(this.startFreeButton).toBeExisting();
        await expect(this.requestDemoButton).toBeExisting();
        await expect(this.headerImg).toBeExisting();
        await expect(this.partnerCaption).toBeExisting();
        await expect(this.partnerCaption).toHaveTextContaining("Trusted by industry leaders")  
    }
}

export default new AboutPage();
