<template>
  <div class="Favorite"></div>
  <ApiFavorites />
  <UploadedPhotos />
</template>
<script>
import ApiFavorites from "@/components/ApiFavorites.vue";
import UploadedPhotos from "@/components/UploadedPhotos.vue";
export default {
  name: "FavoriteView",
  components: { ApiFavorites, UploadedPhotos },
};
</script>
