import Head from 'next/head';
import Login from '../../components/Auth/Login'
import styles from '../../styles/Auth.module.scss'

export default function Auth(props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <Login />
      </div>
    </div>
  )
}
