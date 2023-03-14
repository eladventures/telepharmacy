<template>
<div class="mx-auto max-w-7xl px-5 bg-slate-200">
  <slot/>
</div>
</template>

<script>
import { toRef } from '#imports';
export default {
  setup (props) {
    const isFullHeight = toRef(props, 'fullHeight');

    return {
      isFullHeight,
    };
  },
};
</script>
