import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { useNavigate } from '@builder.io/qwik-city';
import { $, useSignal } from '@builder.io/qwik';


export const imagensCachorros = routeLoader$(async ({ params }) => {
  const nomeRaca = params.raca;
  const response = await fetch(`https://dog.ceo/api/breed/${nomeRaca}/images`);
  const data = await response.json();
  if (data.status !== "success") {
    return []; 
  }

  return data.message as string[]; 
});

export default component$(() => {
  const imagens = imagensCachorros();
  const nav = useNavigate();
  const loc = useLocation()

  const retornarPagina = $(() => {
    nav(`/`);
  });
  return (
    
    <div>
      <button class="btn" onClick$={retornarPagina}>voltar</button>
      <h1 class="title" id='title'>{loc.params.raca}</h1>
      <div class="divMain">
      {imagens.value.length === 0 ? (
        <p>Nenhuma foto encontrada para esta raça. Verifique a ortografia!</p>
      ) : (
        <div class="imgDiv">
          {imagens.value.map((url) => (
            <img key={url} src={url} class="img" alt="Dog" />
          ))}
        </div>
      )}
    </div>
    </div>
  );
});