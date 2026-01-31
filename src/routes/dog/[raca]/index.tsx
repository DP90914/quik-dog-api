import { routeLoader$ } from "@builder.io/qwik-city";

export const usarFotosCachorros = routeLoader$(async ({ params }) => {
    const urlRaca = params.raca;

    try {
        const response =await fetch(`https://dog.ceo/api/breeds/${urlRaca}/images/random`);
        const cachorros = await response.json();
        console.log(cachorros)
    } catch (error) {
        
    }

});