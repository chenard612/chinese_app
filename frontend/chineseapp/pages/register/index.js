import Head from 'next/head';
import Register from '../../components/Register/Register'
import styles from '../../styles/Register.module.scss'

export default function Auth(props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <Register />
      </div>
    </div>
  )
}
