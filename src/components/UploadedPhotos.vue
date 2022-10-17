<template>
  <div
    class="modal fade bd-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
    aria-hidden="true"
  >
    <input
      class="form-control"
      type="file"
      @change="handleFileUpload($event)"
    />
    <button @click="submitFile()" class="btn btn-primary">
      Upload Picture
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UploadedFotos",
  probs: {
    msg: String,
  },
  data() {
    return {
      uploadedFotos: [],
      file: "",
    };
  },
  created() {
    axios.defaults.headers.common["x-api-key"] =
      "live_FzHtoSZSl9gOwUuXd51TR9gCgMPkwJoEio4vfguvspyzMQKqTC6Bpjt165nkBlR7";
    this.getUpploadFoto();
  },
  methods: {
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

    async getUpploadFoto() {
      try {
        let res = await axios.get("https://api.thedogapi.com/v1/images");
        this.uploadedFotos = res.data;
        console.log(this.uploadedFotos);
      } catch (error) {
        this.error_message = error.respone.data.message;
      }
    },
  },
};
</script>
