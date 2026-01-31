import { useSignal } from "@builder.io/qwik";
import { $ } from "@builder.io/qwik" 
import { useNavigate } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from './index/index.css'

export default component$(() => {

  const raca = useSignal('');
  const nav = useNavigate();

  const buscarRaca = $(() => {
    if(raca.value.trim() !== ''){
      nav(`/dog/${raca.value.toLowerCase().trim()}/`)
    }

  });

  return (
    <>
      <h1>DOP API</h1>
      <input type="text" 
      placeholder="Digite um penis"
      bind:value={raca}

      onKeyDown$={(event) => {
        if(event.key === 'Enter'){
          buscarRaca();
        }
      }}

      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Busca de pintinhos",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
