import Page from "./page.js";


class NavigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get menu() {
        return $("#react-burger-menu-btn");
    }
    public get inventoryMenu() {
        return $("#inventory_sidebar_link");
    }
    public get aboutMenu() {
        return $("#about_sidebar_link");
    }
    public get logoutMenu() {
        return $("#logout_sidebar_link");
    }
    public get resetMenu() {
        return $("#reset_sidebar_link");
    }

    /* 
    *
    *   Methods
    *
    * */
    async clickMenu(){
        await this.menu.waitForDisplayed();
        await this.menu.waitForClickable();
        await this.menu.click();
    }
    async assertMenu(){
        await expect(this.inventoryMenu).toBeExisting();
        await expect(this.inventoryMenu).toHaveTextContaining("All Items");
        await expect(this.aboutMenu).toBeExisting();
        await expect(this.aboutMenu).toHaveTextContaining("About");
        await expect(this.logoutMenu).toBeExisting();
        await expect(this.logoutMenu).toHaveTextContaining("Logout");
        await expect(this.resetMenu).toBeExisting();
        await expect(this.resetMenu).toHaveTextContaining("Reset App State");
    }
    async clickMenuInstances(){
        await this.clickInventory();
        await this.clickAbout();
        await this.checkLogout();
        await this.clickReset();
    }
    async clickInventory(){
        await this.inventoryMenu.waitForDisplayed();
        await this.inventoryMenu.waitForClickable();
        //await this.inventoryMenu.click();
    }
    async clickAbout(){
        await this.aboutMenu.waitForDisplayed();
        await this.aboutMenu.waitForClickable();
        //await this.aboutMenu.click();
    }
    async checkLogout(){
        await this.logoutMenu.waitForDisplayed();
        await this.logoutMenu.waitForClickable();
    }
    async clickLogout(){
        await this.logoutMenu.waitForDisplayed();
        await this.logoutMenu.waitForClickable();
        await this.logoutMenu.click();
    }
    async clickReset(){
        await this.resetMenu.waitForDisplayed();
        await this.resetMenu.waitForClickable();
        //await this.resetMenu.click();
    }

}

export default new NavigationPage();