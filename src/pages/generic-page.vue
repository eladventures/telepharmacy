<template>
<generic-panel>
  <h1 class="text-7xl text-primary">Primary Color</h1>
</generic-panel>
<generic-panel>
  <div class="sm:flex sm:flex-col md:grid md:grid-cols-5 gap-4 mb-5">
    <div class="col-span-1 p-14 bg-red-100"></div>
    <div class="col-span-1 p-14 bg-blue-100"></div>
    <div class="col-span-1 p-14 bg-green-100"></div>
    <div class="col-span-1 p-14 bg-pink-100"></div>
    <div class="col-span-1 p-14 bg-orange-100"></div>
    <div class="col-span-1 p-14 bg-red-100"></div>
    <div class="col-span-1 p-14 bg-blue-100"></div>
    <div class="col-span-1 p-14 bg-green-100"></div>
  </div>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="col-span-1 p-14 bg-red-100"></div>
    <div class="col-span-1 p-14 bg-blue-100"></div>
    <div class="col-span-1 p-14 bg-green-100"></div>
  </div>
</generic-panel>
</template>

<script>
import GenericPanel from '~~/src/components/commons/GenericPanel.vue';
import { useHead } from '#app';
import { ref, useRoute, definePageMeta } from '#imports';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'main',
    });

    useHead({
      title: 'Generic Page',
      description: 'Officia labore officia sit pariatur anim nostrud commodo ullamco ea aliqua ea ex do cillum.',
    });

    const route = useRoute();
    console.warn('route', route.name);
    const appName = ref('');
    const appDescription = ref('');

    return {
      appName,
      appDescription,
    };
  },
};
</script>
