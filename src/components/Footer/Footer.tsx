import footerStyle from "./Footer.module.css"
function Footer() {
  return (
    <footer>
      <p className={footerStyle.footerText}>
       © 2024. <a className={footerStyle.atag} href="https://ozcodingschool.com/" target="_blank">ozcodingschool</a>. Mini project. Developed by <a href="#">[변경원, 김태율, 이하연, 연나연, 한채원]</a>.
      
      </p>
    </footer>
  )
}

export default Footer