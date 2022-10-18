<template>
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
              style="display: none"
              ref="image"
              accept="image/*"
              @change="onFilePicked"
            />
            <button class="btn btn-sm btn-primary" @click="pickFile">
              Select a file
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <p class="footer-title">
            If you're having problems uploading, try choosing a smaller photo.
          </p>
          <button @click="uploadFile()" class="btn btn-sm btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UploadedPhotos",
  probs: {
    msg: String,
  },
  data() {
    return {
      image_name: "",
      image_file: "",
      image_url: "",

      uploading: false,
      // returned on successful upload
      uploaded_image: {},
      image_analysis: [],
      headers: [{ text: "Name" }, { text: "Confidence" }],

      error_message: null,
    };
  },

  created() {
    axios.defaults.headers.common["x-api-key"] =
      "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7";
  },
  methods: {
    pickFile() {
      this.error_message = null;
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.image_name = files[0].name;
        if (this.image_name.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.image_url = fr.result;
          this.image_file = files[0];
        });
      } else {
        this.image_name = "";
        this.image_file = "";
        this.image_url = "";
      }
    },
    async uploadFile() {
      this.uploading = true;
      let formData = new FormData();
      formData.append("file", this.image_file);

      try {
        axios.defaults.headers.common[
          "x-api-key"
        ] = `live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7`; // Replace this with your API Key
        let response = await axios.post(
          "https://api.thedogapi.com/v1/images/upload",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        console.log(response.data);
        this.uploaded_image = response.data;
        this.uploading = false;
        this.image_file = null;
        // this.loadImageAnaylsis(this.uploaded_image.id);
      } catch (error) {
        console.log(error);
        this.error_message = error.response.data.message;
        this.uploading = false;
        this.image_file = null;
      }
    },
  },
};
</script>
