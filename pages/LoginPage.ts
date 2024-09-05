import {Page, Locator} from '@playwright/test'

export default class LoginPage{

    readonly page : Page;
    readonly username_input : Locator;
    readonly password_input : Locator;
    readonly loginbtn : Locator;

    constructor(page: Page){
        this.page = page;
        this.username_input = page.locator('#LoginUser');
        this.password_input = page.locator('#password-field');
        this.loginbtn = page.locator('#Login');
    }

    public async launchPage(){
        await this.page.goto("/");
    }

    public async login(){
        await this.username_input.fill("Mohang");
        await this.password_input.fill("Pass@1234");
        await this.loginbtn.click();
        await this.page.waitForTimeout(5000);
        await this.page.goBack();
    }




}