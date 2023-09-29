<template>
  <div class="Favorite"></div>
  <button @click="loggout">Loggout</button>
  <UploadPhotos />
  <UploadedPhotos />
  <ApiFavorites />
</template>
<script>
import ApiFavorites from "@/components/ApiFavorites.vue";
import UploadPhotos from "@/components/UploadPhotos.vue";
import UploadedPhotos from "@/components/UploadedPhotos.vue";

export default {
  name: "FavoriteView",
  components: { ApiFavorites, UploadPhotos, UploadedPhotos },
  data() {
    function loggout() {
      localStorage.clear();
      console.log("Logged out");
    }
    return {
      loggout,
    };
  },
};
</script>
