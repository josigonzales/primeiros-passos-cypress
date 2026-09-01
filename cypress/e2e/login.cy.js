import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Orange HRM Tests', () => {
  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage() 
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.acessDashboardPage()
  })

  it('User Info Update - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUserFail(userData.userFail.username, userData.userFail.password, )
    
  })
})
