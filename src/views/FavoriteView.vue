<template>
  <div class="Favorite"></div>
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
};
</script>
