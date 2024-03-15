<template>
    <div :data-theme="theme" class="bg-white">
        <div class="container flex justify-between items-center h-12 mx-auto">
            <!-- Added 'items-center' class -->
            <div class="flex items-center">
                <!-- Added 'items-center' class -->
                <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Back to homepage"
                    class="flex items-center p-2"
                >
                    <img
                        src="../assets/images/parmazip-logo.png"
                        alt="Your Logo"
                        class="object-contain h-6 mt-1 w-auto dark:text-default-400"
                    />
                </a>
                <ul class="items-stretch hidden space-x-3 lg:flex">
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="flex items-center px-4 -mb-1 dark:border-transparent"
                            >True Privacy</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400"
                            >Discover Parmazip</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="flex items-center px-4 -mb-1 dark:border-transparent"
                            >Features</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="flex items-center px-4 -mb-1 dark:border-transparent"
                            >About Us</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <slot />
        <!-- <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold">Nuxt + Tailwind + DaisyUI Template</h1>
        <p class="md:font-bold">
          Create beautiful and fast websites without the tedious setup
        </p>
        <p>Copyright © {{new Date().getFullYear()}} - All right reserved</p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="#" target="_blank">
            <i class="lab la-twitter text-4xl"></i>
          </a>
          <a href="https://github.com/mycurelabs/nuxt-tailwind-template" target="_blank">
            <i class="lab la-github text-4xl"></i>
          </a>
          <a href="#" target="_blank">
            <i class="lab la-facebook text-4xl"></i>
          </a>
        </div>
      </div>
    </footer> -->
    </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
const THEMES = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
];
export default {
    setup() {
        const theme = ref(null);
        watch(theme, (value) => {
            localStorage.setItem("daisyui-theme", value);
        });
        onMounted(() => {
            theme.value = localStorage.getItem("daisyui-theme") || "dark";
        });
        return {
            theme,
            themes: THEMES,
        };
    },
};
</script>
