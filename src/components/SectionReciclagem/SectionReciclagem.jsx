import React from "react";
import "./SectionReciclagem.css";

export class SectionReciclagem extends React.Component {
  render() {
    const { thumbnail, title, description, items, descriptionLi } = this.props;

    return (
      <section id="article-section">
        <div className="info-section">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {items && items.length > 0 && (
            <ul className="items">
              {items.map((item, index) => (
                <li key={index}>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          )}
          {descriptionLi && descriptionLi.length > 0 && (
            <ul className="descriptionLi">
              {descriptionLi.map((desc, index) => {
                const [key, value] = desc.split(":");
                return (
                  <li key={index}>
                    <strong>{key.trim()}</strong>:<br />
                    {value.trim()}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="img-container">
          <img src={thumbnail} alt="" />
        </div>
      </section>
    );
  }
}
