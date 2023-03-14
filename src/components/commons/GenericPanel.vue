<template>
<div class="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-slate-200">
  {{isFullHeight}}
  <slot/>
</div>
</template>

<script>
import { toRef } from '#imports';
export default {
  props: {
    fullHeight: Boolean,
  },
  setup (props) {
    const isFullHeight = toRef(props, 'fullHeight');

    return {
      isFullHeight,
    };
  },
};
</script>
