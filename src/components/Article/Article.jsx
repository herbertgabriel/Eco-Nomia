import React from "react";
import "./Article.css";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

export class Article extends React.Component {
  render() {
    const { thumbnail, title, description, provider, verified } = this.props;
    
    return (
      <article id="article">
        <img src={thumbnail} alt="" />
        <div className="article-infos">
          <div className="title-verify">
            <h2>{title}</h2>
            {verified && (
              <div className="verified">
                <p>
                  Loja Verificada <MdOutlineVerified />
                </p>
              </div>
            )}
          </div>

          <p className="description">{description}</p>
          <div className="storeInfoSection">
            <h3>
              <a href={provider}>Ir para o site da LOJA</a>
            </h3>
            {/* <div className="iconsContainer">
              <a href="/">
                <CiShare2 />
              </a>
              <a href="/">
                <CiCircleInfo />
              </a>
            </div> */}
          </div>
        </div>
      </article>
    );
  }
}
