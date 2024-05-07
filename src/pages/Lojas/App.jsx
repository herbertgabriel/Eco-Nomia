import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rodape from "../../components/Footer/Footer";
import { Article } from "../../components/Article/Article";
import article1Img from "../../assets/images/article1.png";
import article2Img from "../../assets/images/article2.png";
import article3Img from "../../assets/images/article3.png";
import article4Img from "../../assets/images/article4.png";
import article5Img from "../../assets/images/article5.png";
import article6Img from "../../assets/images/article6.png";
import article7Img from "../../assets/images/article7.png";
import article8Img from "../../assets/images/article8.png";
import article9Img from "../../assets/images/article9.png";
import article10Img from "../../assets/images/article10.png";
import "./App.css";

class Lojas extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="search-container">
          <h1>Reunimos as melhores iniciativas de reciclagem para você!</h1>
        </div>
        <section id="articles">
          <Article
            title="Boticário"
            provider="https://www.boticario.com.br/boti-recicla/"
            description=" O programa Boti RECICLA recebe também embalagens de qualquer marca, desde que sejam de cosméticos e as encaminham para a reciclagem apropriada. E na troca de três embalagens vazias a loja concede R$15 de desconto nas compras acima de R$150. "
            thumbnail={article1Img}
            verified={true}
          />
          <Article
            title="Natura"
            provider="https://www.natura.com.br/logistica-reversa"
            description="Além de suas próprias embalagens, também recebem recipientes cosméticos das marcas do grupo (The Body Shop,  Aesop e Avon).  A cada cinco recipientes de cosméticos destas marcas ou da própria Natura, você recebe um brinde."
            thumbnail={article2Img}
            verified={true}
          />
          <Article
            title="Havainas"
            provider="https://havaianas.com.br/reciclo-sustentabilidade.html"
            description="A iniciativa 'Domingos', um jogo de dominó especialmente desenvolvido para idosos. Com foco na promoção do bem-estar psicológico, essa ideia inovadora conquistou a atenção de uma banca avaliadora, garantindo um investimento significativo de 10 mil reais. Saiba mais sobre como essa iniciativa está transformando a vida dos idosos, proporcionando momentos de entretenimento e fortalecimento da saúde mental."
            thumbnail={article3Img}
            verified={true}
          />
          <Article
            title="Renner"
            provider="https://www.lojasrenner.com.br/sustentabilidade/eco-estilo"
            description="Dispõe de coletores, para roupas de qualquer marca e peças sem utilidade. Através do Programa de logística reversa Ecoestilo, são encaminhadas a instituição parceira, podendo ser recicladas, reutilizadas ou destinadas à doação, caso estejam em bom estado. Também recebe frascos usados de produtos de perfumaria, comprados ou não na loja. "
            thumbnail={article4Img}
            verified={true}
          />
          <Article
            title="Zara"
            provider="https://www.zara.com/br/pt/help-center/ClothesCollectionProgram"
            description="Próximos aos caixas das lojas, os coletores recebem quaisquer marcas. 
            Filiada a Liga Solidária, tem por objetivo contribuir com o financiamento de projetos sociais de organizações sem fins lucrativos, que podem ser doadas, recicladas ou vendidas. "
            thumbnail={article5Img}
            verified={true}
          />
          <Article
            title="C&A"
            provider="https://sustentabilidade.cea.com.br/pt-br/Paginas/MovimentoReciclo.aspx"
            description="Através do Movimento ReCiclo, também recebem roupas, de quaisquer marcas, desde que estejam higienizadas e de acordo com o regulamento do projeto, sendo encaminhadas para reuso, além de ser também uma opção para o descarte adequado de peças que não podem ser reaproveitadas. "
            thumbnail={article6Img}
            verified={true}
          />
          <Article
            title="Puket"
            provider="https://meiasdobem.com.br/"
            description="Aquelas meias desgastadas, furadas e sem par já não servem mais, certo? Elas podem ser destinadas na campanha Meias do Bem, criada pela empresa Puket. As peças são recicladas na própria fábrica e transformadas em cobertores e novas meias, destinadas a instituições sociais. "
            thumbnail={article7Img}
            verified={true}
          />
          <Article
            title="Quem disse, Berenice?"
            provider="https://www.quemdisseberenice.com.br/recicla/"
            description="Aquelas meias desgastadas, furadas e sem par já não servem mais, certo? Elas podem ser destinadas na campanha Meias do Bem, criada pela empresa Puket. As peças são recicladas na própria fábrica e transformadas em cobertores e novas meias, destinadas a instituições sociais. "
            thumbnail={article8Img}
            verified={true}
          />
          <Article
            title="Nagem"
            provider="https://www.nagem.com.br/"
            description="Em parceria com a Planet Patners Hp, possui ponto de coleta para cartuchos de tinta e toner, bem como garrafas de tinta da marca. O programa desde a sua implantação, tem transformado a vida de catadores, com a venda e reinserção dos componentes à indústria."
            thumbnail={article9Img}
          />
          <Article
            title="Drogasil"
            provider="https://www.drogasil.com.br/descarte-consciente"
            description="A Drogasil participa do programa Descarte Consciente que tem o objetivo realizar o descarte correto de medicamentos vencidos ou sem uso e suas embalagens. No site da fármacia, você pode achar as informações do que descartar."
            thumbnail={article10Img}
            verified={true}
          />
        </section>
        <Rodape />
      </>
    );
  }
}

export default Lojas;
