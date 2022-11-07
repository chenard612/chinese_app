import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../../styles/pages/auth/Login.module.scss';

const Login: NextPage = () => (
  <>
    <Head>
      <title>Voc Login</title>
      <meta name='description' content='' />
    </Head>

    <div className={styles.container}>
      <form action="">
              <input 
                  className={styles.inputField} 
                  type="text" 
                  placeholder="Username">
              </input>
              <input 
                  className={styles.inputField} 
                  type="text" 
                  placeholder="Password">
              </input>
              <input className={styles.button} type="submit" />
      </form>
    </div>
  </>
);

export default Login;
