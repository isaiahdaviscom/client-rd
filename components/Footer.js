import styles from './Footer.module.css'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p><small>Copyright &copy; {currentYear} Built by <a href="https://www.isaiahdavis.com">Isaiah Davis Designs</a></small></p>
      </footer>
    </>
  )
}
