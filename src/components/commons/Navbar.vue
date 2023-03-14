<template>
<div class="bg-red-100 border-b border-gray-300">
  <generic-panel>
    <nav class="flex h-14 justify-between items-center">
      <div>
        <span>Logo</span>
      </div>
      <div>
        <div class="md:hidden">
          <button
          class=""
          @click="toggleMenu"
        >
            <i class="text-2xl las la-bars"></i>
          </button>
        </div>
        <div class="hidden md:block">
          <a class="px-4" href="#">Efren</a>
          <a class="px-4" href="#">Jem</a>
          <a class="px-4" href="#">Trista</a>
        </div>
      </div>
    </nav>
  </generic-panel>
  <div
    id="mobile-menu-overlay"
    class="absolute w-screen h-screen top-0 bg-black opacity-50 hover:cursor-pointer hidden md:hidden transition ease-out duration-1000"
    @click="toggleMenu"
  />
  <div
    id="mobile-menu-container"
    class="rounded-md h-5/6 w-11/12 bg-white align-middle absolute top-0 left-0 right-0 mx-auto mt-5 hidden md:hidden transition ease-out duration-1000"
  >
    <div class="h-10 px-5 bg-red-50 flex justify-start items-center rounded-tr-md rounded-tl-md">
      <span>Logo</span>
    </div>
    <div class="p-5 text-center">
      <a class="p-2 bg-slate-100 block mb-2 rounded-sm transition ease-out duration-300 hover:bg-slate-500" href="#">Efren</a>
      <a class="p-2 bg-slate-100 block mb-2 rounded-sm transition ease-out duration-300 hover:bg-slate-500" href="#">Jem</a>
      <a class="p-2 bg-slate-100 block mb-2 rounded-sm transition ease-out duration-300 hover:bg-slate-500" href="#">Trista</a>
    </div>
  </div>
</div>
</template>

<script>
import GenericPanel from '@/components/commons/GenericPanel.vue';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    function toggleMenu () {
      const mobileMenuOverlay = document.querySelector('#mobile-menu-overlay');
      if (mobileMenuOverlay?.classList.contains('hidden')) {
        mobileMenuOverlay?.classList.remove('hidden');
      } else {
        mobileMenuOverlay?.classList.add('hidden');
      }

      const mobileMenuContainer = document.querySelector('#mobile-menu-container');
      if (mobileMenuContainer?.classList.contains('hidden')) {
        mobileMenuContainer?.classList.remove('hidden');
      } else {
        mobileMenuContainer?.classList.add('hidden');
      }
    }

    return {
      toggleMenu,
    };
  },
};
</script>
