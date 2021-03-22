<template>
  <div>
    <navigations />
    <div class="home_contaiener mt-4">
      <h2>О нас</h2>
      <p class="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam
        eligendi commodi exercitationem corrupti fugiat. Sed soluta fuga
        temporibus consectetur dicta laborum facilis, aut exercitationem
        recusandae architecto explicabo autem laudantium.
      </p>
    </div>
  </div>
</template>

<script>
import navigations from "@/pages/navigations.vue";

export default {
  components: {
    navigations,
  },
};
</script>

<style scoped>
.home_contaiener {
  padding: 0 20px;
  margin: 0 40px;
  text-align: center;
}
</style>
