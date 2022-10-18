<template>
  <div class="container">
    <div
      v-for="image in images"
      :key="image.id"
      class="card"
      style="width: 15rem"
    >
      <img class="card-img-top" :src="image.url" alt="Card image cap" />

      <div class="card-body">
        <button
          id="addFavorite"
          @click="addFavorites(image.id)"
          type="button"
          class="btn btn-primary"
        >
          Add Favorites
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ApiImages",
  props: {
    msg: String,
  },

  data() {
    return {
      images: [],
      page: 1,
      error_message: null,
      limit: 6,
      sessions: [],
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] =
      "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7";
    this.getImages();
  },
  methods: {
    async getImages() {
      try {
        let query_params = {
          limit: this.limit,
        };
        let res = await axios.get(
          "https://api.thedogapi.com/v1/images/search",
          {
            params: query_params,
          }
        );
        this.images = res.data;
        console.log(this.images);
      } catch (err) {
        console.log(err);
      }
    },
    async addFavorites(image_id) {
      try {
        let post_body = {
          image_id: image_id,
          sub_id: "User-123",
        };
        await axios.post("https://api.thedogapi.com/v1/favourites", post_body);
      } catch (error) {
        console.log(error);
        this.error_message = error.respone.data.message;
      }
      console.log("Favorite added");
      this.getImages();
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
}
.card {
  display: flex;
  margin: 10px auto;
}
.card-img-top {
  max-width: 500px;
}
#addFavorite {
  justify-content: center;
  align-content: center;
}
</style>
