<template>
  <div class="Favorite"></div>
  <ApiFavorites />
</template>
<script>
import ApiFavorites from "@/components/ApiFavorites.vue";
export default {
  name: "FavoriteView",
  components: { ApiFavorites },
};
</script>
