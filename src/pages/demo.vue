<template>
<div class="p-10 bg-slate-50">
  <h1>Line Awesome Icons</h1>
  <i class="text-9xl las la-battery-three-quarters"></i>
  <i class="text-9xl las la-hippo"></i>
  <i class="text-9xl las la-cat"></i>
  <i class="text-9xl las la-dragon"></i>
  <i class="text-9xl las la-frog"></i>
  <i class="text-9xl las la-kiwi-bird"></i>
  <i class="text-9xl las la-crow"></i>
  <i class="text-9xl las la-otter"></i>
  <i class="text-9xl las la-dog"></i>
  <i class="text-9xl las la-horse"></i>
  <i class="text-9xl las la-fish"></i>
  <i class="text-9xl las la-spider"></i>
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
