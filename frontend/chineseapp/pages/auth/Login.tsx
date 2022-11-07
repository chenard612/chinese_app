import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import styles from '../../../styles/pages/es/index.module.scss';
import createCookie from './api/login';
import config from '../../../utils/fetchUrl';
import cookie from 'js-cookie';
import axios from 'axios';

const Login = () => {
    return (
        <div className={styles.container}>
        <div className={styles.title}>Sign In to your account</div>
        <div className={styles.login_container} id='container'>
            <form className={styles.form_container}>
              <label className={styles.form_label}>
                E-mail*:
              </label>
              <br />
              <input type='text' name='email' className={styles.input_field}/>
              <br />
              <label className={styles.form_label}>
                Password*:
              </label>
              <br />
              <input type='password' name='password' className={styles.input_field}/>
              <br />
            </form>
            <button type='submit' value='Sign In' className={styles.signin_button} onClick={() => {
              const username = document.getElementsByClassName('es_input_field___fJEB')[0].value;
              const password = document.getElementsByClassName('es_input_field___fJEB')[1].value;
              axios({
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                url: `${config.auth_url}/api/token/`,
                data: {
                      'username':username, 
                      'password':password
                      },
                })
            .then((response) => {
                const data = response.data;
                const access = data.access;
                const refresh = data.refresh;
                axios({
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  url: '/api/login/',
                  data: {
                          'access':access,
                          'refresh':refresh
                        },
                  })
                  .then((response) => {
                    const data = response.data;
                    window.location.href = '/crystal/';
                  })
                  .catch((response) => {
                    console.error(response);
                  });
            })
            .catch((response) => {
                if (response.request.status == 401){
                  const container = document.getElementById('container');
                  if (!document.getElementsByClassName('errorMessage')[0]){
                    const newBox = document.createElement('DIV');
                    newBox.innerHTML = 'Incorrect email or password, please try again';
                    newBox.setAttribute('class', 'errorMessage');
                    container?.append(newBox);
                    document.getElementsByClassName('es_input_field___fJEB')[0].value = '';
                    document.getElementsByClassName('es_input_field___fJEB')[1].value = '';
                  }
                }
                else{
                  console.error(response);
                }
            });

            }}>
              Sign In
              </button>
              <p></p>
            <div className={styles.login_footer}>
                 <p className={styles.signup_phrase}>If you have not created an account yet, then please
                 <a href="{% url 'signup' %}" className={styles.signup_link}> sign up</a> first.</p>
            </div>
        </div>
      </div>
        );
};

export default Login;