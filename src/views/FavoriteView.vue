<template>
  <div class="Favorite"></div>
  <ApiFavorites />
  <UpploadedFotos />
</template>
<script>
import ApiFavorites from "@/components/ApiFavorites.vue";
import UpploadedFotos from "@/components/UpploadedFotos.vue";
export default {
  name: "FavoriteView",
  components: { ApiFavorites, UpploadedFotos },
};
</script>
