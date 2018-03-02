import Api from './Api'
import VueNotifications from 'vue-notifications'
import routes from '../routes/routes'



export default {
  register(credentials) {
    return Api().post('register', credentials).then(() => {
        routes.push({path: '/thanks'});
        VueNotifications.success({
          message: 'Ви успішно зареєструвалися'
        });
      })
      .catch(() => {
        VueNotifications.error({
          message: 'Виникла якась помилка'
        });
      })
  },
  login(credentials){  

    
    const auth_token = {
      access_token: 'KJSDrfgugYFWE@U$234JFRGESDJGF#423tfuYTAWD'
    }
    return Api().post('login', credentials).then(() => {
      window.localStorage.setItem('authUser', JSON.stringify(auth_token))
      location.reload()
      routes.push({path: '/users'});
      VueNotifications.success({
        message: 'Ви успішно авторизувалися'
      });
    })
    .catch(() => {
      VueNotifications.error({
        message: 'Неправильні дані'
      });
    })
  }
}