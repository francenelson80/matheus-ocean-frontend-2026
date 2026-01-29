import { useEffect, useState } from "react";
import { Personagem } from "./components/personagem";
import { Titulo } from "./components/titulo";

export function Personagens() {
  const [personagens, setPersonagens] = useState<{
    name: string;
    image: string;
    species: string;
    status: string;
  }[]>([])

  useEffect(() => {
    async function buscarPersonagens() {
      const resposta = await fetch("https://rickandmortyapi.com/api/character")
      const resultado = await resposta.json()
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
