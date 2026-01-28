// Componente para renderizar os detalhes do personagem

type PropriedadesPersonagem = {
    nome: string;
    imagem: string;
    especie: string;
    vida: string;
}

export function Personagem({
    nome,
    imagem,
    especie,
    vida
}: PropriedadesPersonagem) {
    return (
        <div className="personagem">
          <img 
            src={imagem}
          />
          <div className="detalhes">
            <p className="nome">
              {nome}
            </p>
            <p className="especie">
              {especie}
            </p>
            <span className="vida">
              {vida}
            </span>
          </div>
        </div>
    )
}