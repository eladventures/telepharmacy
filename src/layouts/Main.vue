<template>
  <div class="h-screen bg-slate-300 text-gray-700">
    <navbar/>
    <slot/>
  </div>
</template>

<script>
import navbar from '~~/src/components/commons/Navbar.vue';
export default {
  components: {
    navbar,
  },
};
</script>
