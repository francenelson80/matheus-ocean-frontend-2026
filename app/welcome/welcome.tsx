import { Personagem } from "./components/personagem";

const personagens = [
  {
    nome: "Rick Sanchez",
    imagem: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    especie: "Human",
    vida: "Alive"
  },
  {
    nome: "Morty Smith",
    imagem: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    especie: "Human",
    vida: "Alive"
  },
  {
    nome: "Summer Smith",
    imagem: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    especie: "Human",
    vida: "Alive"
  }
];

export function Welcome() {
  return (
    <>
      <div className="header">
        <h1>
          Rick and Morty
        </h1>
      </div>
      <div className="personagens">
        {
          // Aqui percorremos a lista de personagems
          personagens.map((
            personagem
            // Aqui eu acesso a variavel que corresponde
            // ao item da lista que estou percorrendo
          ) => {
            return (
              // Retorno o componente do meu personagem
              // com os dados do personagem
              <Personagem 
                nome={personagem.nome}
                imagem={personagem.imagem}
                especie={personagem.especie}
                vida={personagem.vida}
              />
            )
          })
        }
      </div>
    </>
  );
}
