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

    const login = document.getElementById('login-link');
    const users = document.getElementById('users-link');

    return Api().post('login', credentials).then(() => {
      
      login.style.display = 'none';
      users.style.display = 'block';

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