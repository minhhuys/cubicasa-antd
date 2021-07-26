<template>
  <div class="home">
    <Header />

    <Setting />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Setting from "@/components/settings/Index";

export default {
  components: {
    Header,
    Setting,
  },
};
</script>
