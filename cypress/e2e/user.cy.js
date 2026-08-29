import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage() 
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.acessDashboardPage()
    menuPage.acessMyInfo()
    myInfoPage.fillMyInfo()
    myInfoPage.saveMyInfoPage()


  })
})