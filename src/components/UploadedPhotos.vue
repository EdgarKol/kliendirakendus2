<!-- eslint-disable prettier/prettier -->
<template>
  <h2>Uploaded Photos</h2>
  <div class="container">
    <div v-for="uploaded in uploadedPhotos" :key="uploaded.url" class="card" style="width: 15rem">
      <img class="card-img-top" :src="uploaded.url" alt="Card image cap" />

      <div class="card-body">
        <button @click="deletePhoto(uploaded.id)" type="button" class="btn btn-danger" id="deletePhoto">
          Delete Uploaded Photo
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import env from "../env.js";
import axios from "axios";
export default {
  name: "UploadedPhotos",
  props: {
    msg: String,
  },
  data() {
    return {
      limit: 5,
      uploadedPhotos: [],
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] = env.apikey;
    this.getUpploadedPhotos();
  },
  methods: {
    async getUpploadedPhotos() {
      try {
        let query_params = {
          limit: this.limit,
          order: "DESC",
          page: this.page - 1,
        };
        let res = await axios.get("https://api.thedogapi.com/v1/images", {
          params: query_params,
        });
        this.uploadedPhotos = res.data;
        console.log(this.uploadedPhotos);
      } catch (error) {
        this.error_message = error.respone.data.message;
      }
    },
    async deletePhoto(image_id) {
      try {
        await axios.delete("https://api.thedogapi.com/v1/images/" + image_id);
      } catch (error) {
        console.log(this.error);
      }
      console.log("Photo deleted successfully");
      this.getUpploadedPhotos();
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
}

#deletePhoto {
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 100%;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
}
</style>
