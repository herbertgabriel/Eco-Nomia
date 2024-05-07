import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rodape from "../../components/Footer/Footer";
import { SectionReciclagem } from "../../components/SectionReciclagem/SectionReciclagem";
import "./App.css";
import sectionImg1 from "../../assets/images/section1.png";
import sectionImg2 from "../../assets/images/section2.png";
import sectionImg3 from "../../assets/images/section3.png";
import sectionImg4 from "../../assets/images/section4.png";

class Reciclagem extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SectionReciclagem
          className="Section1"
          title="Coleta Seletiva"
          description="A coleta seletiva é um sistema de recolhimento de resíduos que separa e classifica diferentes tipos de materiais descartados, como papel, plástico, metal e vidro, para posterior reciclagem ou reutilização. Os materiais são separados em diferentes recipientes, como caixas ou contêineres coloridos, identificados por cores específicas para cada tipo de material."
          thumbnail={sectionImg1}
          items={[
            "Azul: Papel",
            "Verde: Vidro",
            "Amarelo: Metal",
            "Marrom: Lixo Orgânico",
            "Vermelho: Plástico",
          ]}
        />

        <SectionReciclagem
          title="Arborização"
          description="A arborização é crucial para nossa qualidade de vida e saúde ambiental.
          As árvores purificam o ar, regulam o clima, conservam água e solo, promovem a biodiversidade e proporcionam beleza paisagística.
          Além disso, contribuem para a saúde física e mental das pessoas, reduzem o ruído urbano e valorizam as propriedades.
          Investir na plantação e manutenção de árvores é essencial para promover um ambiente mais saudável, sustentável e agradável para todos."
          thumbnail={sectionImg2}
        />
        <SectionReciclagem
          title="Energia Renovável"
          description="As energias renováveis desempenham um papel crucial na transição para um futuro mais sustentável e resiliente. Diferentemente dos combustíveis fósseis, as fontes renováveis, como solar, eólica, hidrelétrica, geotérmica e biomassa, oferecem uma fonte de energia limpa e inesgotável. 
          Ao reduzir nossa dependência dos combustíveis fósseis, as energias renováveis ajudam a mitigar as mudanças climáticas, reduzir a poluição do ar e proteger o meio ambiente."
          thumbnail={sectionImg3}
        />
        <SectionReciclagem
          title="Como Ser Sustentável"
          descriptionLi={[
            "1. Separe os Materiais Adequadamente: Separe os materiais como plásticos, papel, vidro e metal em recipientes designados.",
            "2. Reduza, Reutilize e Recicle: Evitar produtos descartáveis, reutilizar itens sempre que possível.",
            "3. Compre Produtos Reciclados: Apoie a reciclagem comprando produtos feitos com materiais reciclados.",
            "4. Eduque-se e Eduque os Outros: Educar amigos, familiares e colegas sobre a importância da reciclagem aumentará a conscientização e promoverá a adoção de hábitos sustentáveis.",
          ]}
          thumbnail={sectionImg4}
        />

        <Rodape />
      </>
    );
  }
}

export default Reciclagem;
