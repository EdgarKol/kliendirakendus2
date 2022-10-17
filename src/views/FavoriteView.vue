<template>
  <div class="Favorite"></div>
  <UploadedPhotos />
  <ApiFavorites />
</template>
<script>
import ApiFavorites from "@/components/ApiFavorites.vue";
import UploadedPhotos from "@/components/UploadedPhotos.vue";

export default {
  name: "FavoriteView",
  components: { ApiFavorites, UploadedPhotos },
};
</script>
