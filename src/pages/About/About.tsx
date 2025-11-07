import "./about.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="container-about">
      <Header />
      <div className="about-wrapper">
        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">🍔 Sobre o BurguerBy</h1>
            <div className="about-divider"></div>
          </div>
          
          <div className="about-main">
            <div className="about-text-section">
              <p className="about-intro">
                No <strong>BurguerBy</strong>, acreditamos que comer bem não precisa ser demorado.
              </p>
              <p className="about-description">
                Fazemos hambúrgueres artesanais com ingredientes frescos, pães macios e molhos
                únicos — tudo preparado com muito cuidado e sabor.
              </p>
              <p className="about-description">
                Cada mordida é uma experiência única, onde tradição e inovação se encontram para
                criar sabores inesquecíveis. Nossa paixão pela qualidade e pelo sabor autêntico
                está presente em cada prato que servimos.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🌱</div>
                <h3>Ingredientes Frescos</h3>
                <p>Selecionamos apenas os melhores ingredientes locais e frescos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🍳</div>
                <h3>Preparação Artesanal</h3>
                <p>Cada prato é preparado com dedicação e atenção aos detalhes</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">❤️</div>
                <h3>Feito com Amor</h3>
                <p>Nossa receita secreta de família transmite sabor e carinho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
