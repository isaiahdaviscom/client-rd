import styles from './Footer.module.css'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <small>Copyright &copy; {currentYear}</small>
      </footer>
    </>
  )
}
