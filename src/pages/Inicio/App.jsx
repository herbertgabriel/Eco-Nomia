import React, { useEffect } from "react";
import $ from "jquery";
import Navbar from "../../components/Navbar/Navbar";
import Rodape from "../../components/Footer/Footer";
import "./App.css";
import flortestBackgraund from "../../assets/images/flortest-backgraund.png";

const App = () => {
  useEffect(() => {
    const $elements = $(".each-event, .title");
    const $window = $(window);

    function check_for_fade() {
      if ($window.width() > 768) {
        const window_height = $window.height();

        $elements.each(function () {
          const $element = $(this);
          const element_height = $element.outerHeight();
          const element_offset = $element.offset().top;
          const space =
            window_height -
            (element_height + element_offset - $window.scrollTop());
          if (space < 60) {
            $element.addClass("non-focus");
          } else {
            $element.removeClass("non-focus");
          }
        });
      } else {
        $elements.removeClass("non-focus");
      }
    }

    $window.on("scroll resize", check_for_fade);
    $window.trigger("scroll");

    return () => {
      $window.off("scroll resize", check_for_fade);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="main-container"
        style={{ backgroundImage: `url(${flortestBackgraund})` }}
      >
        <p>
          Transforme seus usados em um futuro sustentável: descubra lojas que
          reciclam e dê vida nova aos seus produtos!
        </p>
        <a href="#wrapper" className="btn-conferir">
          Conferir
        </a>
      </div>

      <div id="wrapper" className="wrapper">
        <section className="block">
          <div className="each-year">
            <div className="each-event">
              <div className="event-description">
                <h2>Bem vindo ao nosso site!</h2>
                <p>
                  Somos apaixonados pela preservação do meio ambiente e pela
                  promoção de práticas sustentáveis. Em nosso site, buscamos
                  reunir informações sobre lojas comprometidas com a reciclagem
                  de produtos usados, com o objetivo de incentivar e facilitar
                  essa prática para todos.
                </p>
              </div>
            </div>

            <div className="each-event">
              <div className="event-description">
                <h2>O que oferecemos</h2>
                <p>
                  Em nossa plataforma, você encontrará uma variedade de lojas
                  que aceitam produtos usados para reciclagem e oferecem
                  descontos ou benefícios exclusivos, além disso, você também
                  poderá encontrar dicas e informações sobre reciclagem.
                </p>
              </div>
            </div>

            <div className="each-event">
              <div className="event-description">
                <h2>Nossa missão</h2>
                <p>
                  Acreditamos que cada pequena ação pode fazer a diferença e que
                  a reciclagem é um passo importante em direção a um futuro mais
                  sustentável para todos. Nosso site tem o único objetivo de
                  informar, inspirar e capacitar indivíduos a adotarem práticas
                  de consumo responsável e a apoiarem empresas comprometidas com
                  a preservação do meio ambiente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Rodape />
    </>
  );
};

export default App;
