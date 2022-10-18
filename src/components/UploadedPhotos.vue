<template>
  <h2>Uploaded Photos</h2>
  <div
    v-for="uploaded in uploadedPhotos"
    :key="uploaded.url"
    class="card"
    style="width: 15rem"
  >
    <img class="card-img-top" :src="uploaded.url" alt="Card image cap" />

    <div class="card-body">
      <button
        @click="deletePhoto(uploaded.id)"
        type="button"
        class="btn btn-danger"
      >
        Delete Uploaded Photo
      </button>
    </div>
  </div>
</template>
<script>
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
    axios.defaults.headers.common["x-api-key"] =
      "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7";
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
h2 {
  align-items: left;
}
</style>
