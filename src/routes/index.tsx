import { component$, useSignal, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const raca = useSignal('');
  const nav = useNavigate();

  const searchDog = $(() => {
    if (raca.value.trim()) {
      // Redireciona para a rota dinâmica: /dog/[raça]
      nav(`/dog/${raca.value.toLowerCase().trim()}`);
    }
  });

  return (
    <div class="flex flex-col gap-4 p-8">
      <input 
        type="text" 
        bind:value={raca} 
        placeholder="Digite a raça (ex: husky)"
      />
      <button onClick$={searchDog}>Ver Fotos</button>
    </div>
  );
});