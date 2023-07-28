// eslint-disable-next-line ui-testing/no-unused-imports
import generator from "../../../generator";

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get headerCaption() {
        return $('.app_logo');
    }
    public get headerCartImg() {
        return $('.shopping_cart_link');
    }
    public get headerMenu() {
        return $('#react-burger-menu-btn');
    }
    public get homeCaption() {
        return $('.title');
    }
    public get homeFilterbar() {
        return $('.product_sort_container');
    }
    // Product
    public get productCaption() {
        return $('.inventory_list .inventory_item_name');
    }

    public get productDescription() {
        return $('.inventory_list .inventory_item_desc');
    }
    public get productPrice() {
        return $('.inventory_list .inventory_item_price');
    }
    public get productImg() {
        return $('.inventory_list .inventory_item_img');
    }
    public get addCartButton() {
        return $('.inventory_list button');
    }
    public get addCartBadge() {
        return $('.shopping_cart_badge');
    }
    public productImgListe(imageNumber: number) {
        return $$('item_' + imageNumber + '_img_link');
    }
    /* 
    *
    *   Methods
    *
    * */
    // saucedemo.com/inverntory
    public open () {
        return browser.url(``) //inventory
    }
    async assertHomepage(){
        // eslint-disable-next-line ui-testing/no-absolute-url
        await browser.url('https://www.saucedemo.com/inventory.html')
        await expect(this.homeCaption).toBeExisting();
        await expect(this.homeCaption).toHaveTextContaining("Products");
        await expect(this.homeFilterbar).toBeExisting();
        //await this.addCart();
    }
    async assertHeader(){
        await expect(this.headerCaption).toBeExisting();
        await expect(this.headerCaption).toHaveTextContaining("Swag Labs");
        await expect(this.headerCartImg).toBeExisting();
        await this.headerCartImg.getAttribute("")
        //await expect(this.headerCartImg).toHaveAttrContaining("media", "./cart3x.3669d74a.svg");
        await expect(this.headerMenu).toBeExisting();
        //await expect(this.headerMenu).toHaveAttrContaining("media", "./menu3x.52cc17a3.svg");
    }
    async assertProduct(){
        await expect(this.productCaption).toBeExisting();
        await expect(this.productDescription).toBeExisting();
        await expect(this.productPrice).toBeExisting();
        await expect(this.productImg).toBeExisting();
        await expect(this.addCartButton).toBeExisting();
    }
    async addCart(){
        const cartBadgeComponent = this.addCartBadge.waitForDisplayed();
        const itemInCart = this.addCartButton.click;
        (await this.addCartButton).isDisplayed;
        (await this.addCartButton).isClickable;
        (await this.addCartButton).click;
        var count = 0;
        if(cartBadgeComponent/* && itemInCart*/){
            while(itemInCart){
                count++;
                await expect(this.addCartBadge).toHaveTextContaining(""+ count);              
            }
        }
    }
    /*public async compareImgTrue(){ //import generator does not work properly
        const random_image = generator.generateNumberBetween( 1, 5 );
        if(!(this.productImgListe(random_image) == this.productImgListe(1))){
            console.log("IMAGE EQUAL");
        }
    }*/
    /*public async compareImgFalse(){ //foreach has a problem
        const allImages = [""];
        await this.productImgListe.forEach(async (productImgages) => {
            allImages.push(await productImgages.getAttribute("src"));
        });
        const uniqueImage = Array.from(
            new Set(allImages.map((item: string) => item))
          );
          await expect(allImages.length).toBe(uniqueImage.length);
    }*/
}

export default new HomePage();
