<template>
  <h1>Favorites</h1>
  <div
    v-for="favorite in favorites"
    :key="favorite.image.url"
    class="card"
    style="width: 15rem"
  >
    <img class="card-img-top" :src="favorite.image.url" alt="Card image cap" />

    <div class="card-body">
      <button
        @click="removeFavorite(favorite.id)"
        type="button"
        class="btn btn-danger"
      >
        Remove from favorites
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ApiFavorites",
  props: {
    msg: String,
  },
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] =
      "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7";
    this.getFavourites();
  },
  methods: {
    async getFavourites() {
      try {
        let query_params = {
          limit: this.limit,
          order: "DESC",
          page: this.page - 1,
        };
        let res = await axios.get("https://api.thedogapi.com/v1/favourites", {
          params: query_params,
        });
        this.favorites = res.data;
        console.log(this.favorites);
        // this.pagination_count = response.headers["pagination-count"];
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async removeFavorite(favorite_id) {
      try {
        await axios.delete(
          "https://api.thedogapi.com/v1/favourites/" + favorite_id
        );
      } catch (error) {
        console.log(error.message);
      }
      alert("Favorites deleted");
      this.getFavourites();
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 100%;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
}
.card-img-top {
  max-width: 500px;
}
</style>
