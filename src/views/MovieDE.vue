<template>
<div class="movie-de">
    <h2>{{ pelicula.Title }}</h2>
    <p>{{ pelicula.Year }}</p>
    <p>{{ pelicula.Type }}</p>
    <img :src="pelicula.Poster" alt="Pelicula Poster" />
    <p>{{ pelicula.Plot }}</p>

</div>

</template>
<script>
import { ref, onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
 import env from '@/env.js';
export default{
    setup () {
        const pelicula = ref ({});
        const route = useRoute();

        onBeforeMount(()=> {
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                pelicula.value = data;
            })

        } );
        return {
            pelicula

        }
    }

}

</script>

<style lang="scss">
.movie-de {
    padding: 16px;

    h2 {
        color: #FFF;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .featured-img {
        display: block;
        max-width: 200px;
        margin-bottom: 16px;

    }

    p {
        color: #FFF;
        font-size: 18px;
        line-height: 1.4;
    }
}

</style>