import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

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

  return (
    <div style={{ padding: '20px' }}>
      <h1>Fotos de cachorros</h1>

      {imagens.value.length === 0 ? (
        <p>Nenhuma foto encontrada para esta raça. Verifique a ortografia!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {imagens.value.map((url) => (
            <img key={url} src={url} style={{ width: '100%', borderRadius: '8px' }} alt="Dog" />
          ))}
        </div>
      )}
    </div>
  );
});