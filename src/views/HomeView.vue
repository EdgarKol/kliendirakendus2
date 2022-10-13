<template>
  <div class="home"></div>
  <Login />
  <Images />
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Images from "@/components/ApiImages.vue";

export default {
  name: "HomeView",
  components: {
    Login,
    Images,
  },
};
</script>
