import "./menu.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const menuItems = [
  {
    id: 1,
    name: "Hamburger",
    description: "Pão, hambúrguer, tomate, cebola, alface e nossa receita secreta de família.",
    price: "€3.99",
    image: "/food1.png"
  },
  {
    id: 2,
    name: "X-Burger",
    description: "Semelhante ao nosso hambúrguer, mas com queijo.",
    price: "€4.99",
    image: "/food2.png"
  },
  {
    id: 3,
    name: "Hambúrguer duplo com queijo",
    description: "Semelhante ao nosso cheeseburger, mas com um hambúrguer extra.",
    price: "€6.99",
    image: "/food3.png"
  },
  {
    id: 4,
    name: "Bife",
    description: "Um bife suculento preparado exatamente como você gosta.",
    price: "€9.99",
    image: "/food4.png"
  },
  {
    id: 5,
    name: "Costelas de churrasco",
    description: "Costelas de churrasco com acompanhamentos à sua escolha.",
    price: "€7.89",
    image: "/food5.png"
  },
  {
    id: 6,
    name: "Sanduíche de queijo grelhado",
    description: "Um sanduíche de queijo tostado e grelhado, mergulhado em nosso molho especial.",
    price: "€5.39",
    image: "/food6.png"
  },
  {
    id: 7,
    name: "Salada Caesar",
    description: "Uma típica salada Caesar, servida com o molho de sua preferência.",
    price: "€7.10",
    image: "/food7.png"
  },
  {
    id: 8,
    name: "Batatas fritas",
    description: "Às vezes você não quer comer seu hambúrguer sozinho, então por que não adicionar algumas batatas fritas.",
    price: "€2.10",
    image: "/food8.png"
  }
];

function Menu() {
  return (
    <div className="container-menu">
      <Header />
      <div className="menu-wrapper">
        <div className="menu-header">
          <h1 className="menu-title">🍽️ Nosso Menu</h1>
          <img src="/icone.png" alt="Ícone do restaurante" className="menu-icon"/>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-image-container">
                <img src={item.image} alt={item.name} className="menu-card-image"/>
                <div className="menu-card-overlay"></div>
              </div>
              <div className="menu-card-content">
                <h2 className="menu-card-title">{item.name}</h2>
                <p className="menu-card-description">{item.description}</p>
                <div className="menu-card-footer">
                  <span className="menu-card-price">{item.price}</span>
                  <button className="menu-card-button">Pedir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
