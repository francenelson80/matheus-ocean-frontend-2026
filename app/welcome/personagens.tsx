import { useEffect, useState } from "react";
import { Personagem } from "./components/personagem";
import { Titulo } from "./components/titulo";

export function Personagens() {
  // Declara a variável de estado `personagens`
  const [personagens, setPersonagens] = useState<{
    name: string;
    image: string;
    species: string;
    status: string;
  }[]>([])

  useEffect(() => {
    async function buscarPersonagens() {
      // Busca dados na API do Rick and Morty
      const resposta = await fetch("https://rickandmortyapi.com/api/character")
      // Converte os dados para JSON
      const resultado = await resposta.json()
      // Salva os dados na variável de estado `personagens`
      setPersonagens(resultado.results)
    }

    buscarPersonagens()
  }, [])

  return (
    <>
      <Titulo />
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
                nome={personagem.name}
                imagem={personagem.image}
                especie={personagem.species}
                vida={personagem.status}
              />
            )
          })
        }
      </div>
    </>
  );
}
