import { Link } from "react-router-dom";
import "./home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="container-home">
      <Header />
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bem-vindo ao BurguerBy</h1>
            <p className="hero-subtitle">Onde uma mordida torna-se numa sensação</p>
            <p className="hero-description">Uma experiência em um momento de felicidade</p>
            <div className="hero-image-container">
              <img src="/img.png" alt="Hambúrguer delicioso" className="hero-image"/>
            </div>
            <div className="hero-cta">
              <h2 className="cta-title">Está Pronto?</h2>
              <Link to="/menu" className="cta-button">
                Faça seu pedido
              </Link>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-text">
              <h3>Localização</h3>
              <p>Lisboa, Rua Jão 1º</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🕐</div>
            <div className="info-text">
              <h3>Horário</h3>
              <p>De Terça a Domingo: 8h-22h</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
