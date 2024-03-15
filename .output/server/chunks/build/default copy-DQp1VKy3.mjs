import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './parmazip-logo-DNMBOJQA.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

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
  "winter"
];
const _sfc_main = {
  setup() {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem("daisyui-theme", value);
    });
    return {
      theme,
      themes: THEMES
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    "data-theme": $setup.theme,
    class: "bg-white"
  }, _attrs))}><div class="container flex justify-between items-center h-12 mx-auto"><div class="flex items-center"><a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2"><img${ssrRenderAttr("src", _imports_0)} alt="Your Logo" class="object-contain h-6 mt-1 w-auto dark:text-default-400"></a><ul class="items-stretch hidden space-x-3 lg:flex"><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 dark:border-transparent">True Privacy</a></li><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Discover Parmazip</a></li><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 dark:border-transparent">Features</a></li><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 dark:border-transparent">About Us</a></li></ul></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const default_copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_copy as default };
//# sourceMappingURL=default copy-DQp1VKy3.mjs.map
