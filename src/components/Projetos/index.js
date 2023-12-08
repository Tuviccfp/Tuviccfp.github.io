import * as React from "react";
import { WarningCircle } from "@phosphor-icons/react";
export default function Projetos() {
  const [modelInformativo, setModelInformativo] = React.useState(false);

  const handleClick = () => {
    setModelInformativo(!modelInformativo);
  };

  return (
    <section>
      <article>
        <p>
          Aqui está alguns dos projetos que já desenvolvi, alguns foram desafios
          que criei.
        </p>
        <p>
          Para visualiza-lôs basta clicar <a href="https://drive.google.com/drive/folders/1ZIyyEOXk2LfhiaeITHyysyQYs2z5pARv">aqui.</a>
        </p>
        <span style={{marginTop: '5em', color: "grey", fontSize: 13 }}>
          Por questões de otimização os vídeos estão salvos em nuvem, vocês
          podem acessar o link e ver todos os detalhes.
        </span>
      </article>
    </section>
  );
}
