import {test as BaseTest} from '@playwright/test'
import LoginPage from '../pages/LoginPage'



const test = BaseTest.extend<{
    loginpage : LoginPage
}>

({
    loginpage : async({page}, use)=>{
        await use (new LoginPage(page))

    }
})

export default test;
export const expect = test.expect;
