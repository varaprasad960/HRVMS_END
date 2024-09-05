import test, {expect} from '../../Fixtures/BasePage'

test.describe('login functionality', async()=>{
    test('login with valid cred', async({page, loginpage})=>{
        await loginpage.launchPage();
        await loginpage.login();

    })





})