import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">🍔 BurguerBy</h3>
          <p className="footer-description">
            Onde uma mordida torna-se numa sensação. 
            Uma experiência em um momento de felicidade.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Links Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">Sobre</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contacto</h4>
          <ul className="footer-info">
            <li>📍 Lisboa, Rua Jão 1º</li>
            <li>🕐 Terça a Domingo: 8h-22h</li>
            <li>📞 +351 545 233 890</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BurguerBy. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;