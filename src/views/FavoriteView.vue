<template>
  <div class="Favorite"></div>
  <ApiFavorites />
  <UpploadedPhotos />
</template>
<script>
import ApiFavorites from "@/components/ApiFavorites.vue";
import UpploadedPhotos from "@/components/UpploadedPhotos.vue";
export default {
  name: "FavoriteView",
  components: { ApiFavorites, UpploadedPhotos },
};
</script>
