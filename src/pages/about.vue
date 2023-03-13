<template>
<div>
  <h1>App name: {{appName}}</h1>
  <h1>App description: {{appDescription}}</h1>
  <i class="text-9xl las la-battery-three-quarters"></i>
</div>
</template>

<script>
import { useHead } from '#app';
import { ref, useRoute, definePageMeta } from '#imports';
export default {
  setup () {
    definePageMeta({
      layout: 'custom',
    });

    useHead({
      title: 'About Page',
      description: 'Dolore do culpa non est non. Id enim dolor laboris occaecat incididunt.',
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
