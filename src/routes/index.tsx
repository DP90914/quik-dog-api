import { component$, useSignal, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const raca = useSignal('');
  const nav = useNavigate();

  const buscaRaca = $(() => {
    if (raca.value.trim()) {
      // Redireciona para a rota dinâmica: /dog/[raça]
      nav(`/dog/${raca.value.toLowerCase().trim()}`);
    }
  });

  return (
    <main>
      <div class="container">
        <div class="letras">
          <h1 class="titulo1">D</h1>
          <h1 class="titulo2">o</h1>
          <h1 class="titulo3">g</h1>
          <h1 class="titulo1">A</h1>
          <h1 class="titulo5">p</h1>
          <h1 class="titulo2">i</h1>
        </div>
        <input 
          class="imput"
          type="text" 
          bind:value={raca} 
          placeholder="Digite a raça"
          onKeyDown$={(event) => {
            if (event.key === 'Enter') {
              buscaRaca();
            }
          }}
        />
      </div>
    </main>
    
  );
});