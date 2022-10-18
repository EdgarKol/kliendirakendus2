<template>
<<<<<<< HEAD
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
        @click="removeFavorite(favorite.id)"
        type="button"
        class="btn btn-danger"
      >
        Delete Uploaded Photo
      </button>
=======
  <div class="height-100 d-flex justify-content-center align-items-center">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Upload your own image
    </button>
    <!-- Modal -->
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Uploading a new photo
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="body-desc">
            You can upload the image in JPG, GIF or PNG format.
          </p>
          <div class="photo-input">
            <input
              type="file"
              @change="handleFileUpload($event)"
              id="loadFile"
            />
            <button
              class="btn btn-sm btn-primary"
              onclick="document.getElementById('loadFile').click()"
            >
              Select a file
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <p class="footer-title">
            If you're having problems uploading, try choosing a smaller photo.
          </p>
          <button @click="submitFile(file)" class="btn btn-sm btn-primary">
            Save
          </button>
        </div>
      </div>
>>>>>>> 1ce0a20639918103f8a23b8268bc020fc902d9b7
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UploadedPhotos",
<<<<<<< HEAD
  props: {
=======
  probs: {
>>>>>>> 1ce0a20639918103f8a23b8268bc020fc902d9b7
    msg: String,
  },
  data() {
    return {
      uploadedPhotos: [],
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] =
      "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7";
    this.getUpploadedPhotos();
  },
  methods: {
<<<<<<< HEAD
    async getUpploadedPhotos() {
=======
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      let post_body = {
        file: this.file,
        sub_id: "User-123",
      };
      console.log(post_body);
      await axios
        .post("https://api.thedogapi.com/v1/images/upload", post_body, {
          headers: {
            "x-api-key":
              "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7",
          },
        })
        .then(function () {
          console.log("SUCCESS");
        })
        .catch(function () {
          console.log("FAIL");
        });
    },
    // get uploaded photos
    async getUpploadFoto() {
>>>>>>> 1ce0a20639918103f8a23b8268bc020fc902d9b7
      try {
        let res = await axios.get("https://api.thedogapi.com/v1/images");
        this.uploadedPhotos = res.data;
        console.log(this.uploadedPhotos);
      } catch (error) {
        this.error_message = error.respone.data.message;
      }
    },
  },
};
</script>
<style scoped>
h2 {
  align-items: left;
}
</style>
