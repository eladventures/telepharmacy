<template>
<generic-panel
  full-height
>
  <h1 class="text-7xl">Foo</h1>
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
