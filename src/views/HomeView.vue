<template>
<div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0096697">
        <img src="https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" alt=" Poster" class="featured-img" />
       
          <h3> The Simpsons </h3>
          <h3> 1989- </h3>
          <p> serie </p>

      </router-link>
    </div>

    <div class="feature-card">
      <router-link to="/movie/tt2861424">
        <img src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg" alt=" Poster" class="featured-img" />
       
          <h3> Rick and Morty </h3>
          <h3> 2013- </h3>
          <p> serie </p>

      </router-link>
    </div>
    <div class="feature-card">
      <router-link to="/movie/tt0877057">
        <img src="https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg" alt=" Poster" class="featured-img" />
       
          <h3> Death Note </h3>
          <h3> 2006-2007 </h3>
          <p> serie </p>

      </router-link>
    </div>
        <div class="feature-card">
      <router-link to="/movie/tt1637725">
        <img src="https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_SX300.jpg" alt=" Poster" class="featured-img" />
       
          <h3> Ted </h3>
          <h3> 2012 </h3>
          <p> movie </p>

      </router-link>
    </div>
     <div class="feature-card">
      <router-link to="/movie/tt0232500">
        <img src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" alt=" Poster" class="featured-img" />
       
          <h3> The Fast and the Furious </h3>
          <h3> 2001 </h3>
          <p> movie </p>

      </router-link>
    </div>
         <div class="feature-card">
      <router-link to="/movie/tt0800369">
        <img src="https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg" alt=" Poster" class="featured-img" />
       
          <h3> Thor </h3>
          <h3> 2011 </h3>
          <p> movie </p>

      </router-link>
    </div>
    
    </div>

    
<form @submit.prevent="BuscarPeliculas()" class="search-box">
      <input type="text" placeholder="Que estas mirando?" v-model="Buscar" />
      <input type="submit" value="Buscar" />
      
    </form>
    <div class="movies-list">
      
      <div class="pelicula" v-for="pelicula in Peliculas" :key="pelicula.imdbID">
        <router-link :to="'/movie/' + pelicula.imdbID" class="pelicula-link">
        <div class="product-image">
          <img :src="pelicula.Poster" alt="Pelicula Poster" />
        </div>
        <div class="detail">
          <p class="year">{{ pelicula.Year }}</p>
        <h3>{{ pelicula.Title }}</h3>
        <p class="type=">{{ pelicula.Type }}</p>
        </div>


        </router-link>
        
      </div>
    </div>
   

  
</template>


<script>
import { ref } from 'vue';
import env from '@/env.js';
export default {
  setup() {
    const Buscar = ref("");
    const Peliculas = ref ([]);
    

    const BuscarPeliculas = () => {
      if (Buscar.value != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${Buscar.value}`)
        .then(response => response.json())
        .then(data => {
          
          Peliculas.value = data.Search;
          Buscar.value= "";

        });
      }
    }

    return {
      Buscar,
      Peliculas,
      BuscarPeliculas
    }
  }

}
</script>
<style lang="scss">
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #FFF;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus{
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42B883;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3B8070;
        }

      }

    }
  }
.home {
      display: flex;
    flex-wrap: nowrap;
    margin: 0px 8px;
  .feature-card {

      padding: 16px 8px; 
          width: max-content;
    .featured-img {
    position: relative;
    }
    
      h3 {
        color:#FFF;
        font-weight: 600;
            font-size: 18px;
        
      }
      p {
        color: rgb(226, 12, 12);
      }
    }
  }



  .movies-list{
    display: flex;
    flex-wrap: nowrap;
    margin: 0px 8px;

    .pelicula {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .pelicula-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image {
          
          display: block;
          width: max-content;
          height: max-content;

          img {
      display: block;
      width: 100%;
      height: 400px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    

          }

        }
          .year {
            color: #AAA;
            font-size: 14px ;
          }
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
          }
          .detail {
            color: rgb(226, 12, 12);
            font-size: 18px;
          }
        }
      }

    
  

  
}

</style>