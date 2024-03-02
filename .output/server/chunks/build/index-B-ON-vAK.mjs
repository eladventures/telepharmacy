import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { _ as _export_sfc } from './server.mjs';
import { ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './parmazip-logo-DNMBOJQA.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto md:max-w-6xl px-5 py-5 md:py-7" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/commons/GenericPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GenericPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ogBanner = "" + buildAssetsURL("nuxtwind-daisy-og-banner.C8-CIcPr.jpg");
const _imports_1 = "" + buildAssetsURL("parmazip-tele3.DJGQbgpd.png");
const _imports_2 = "" + buildAssetsURL("parmazip-feature-1.DiARJiuO.png");
const _imports_3 = "" + buildAssetsURL("parmazip-feature-2.Dd4uJyIi.png");
const _imports_4 = "" + buildAssetsURL("parmazip-feature-3.C2wS21m_.png");
const _imports_5 = "" + buildAssetsURL("parmazip-draw.BR4ydgtT.png");
const _imports_6 = "" + buildAssetsURL("parmazip-works-1.CKhinP7Q.png");
const _imports_7 = "" + buildAssetsURL("parmazip-works-2.Dm12x8AS.png");
const _imports_8 = "" + buildAssetsURL("parmazip-face.ADGeLvem.png");
const _sfc_main = {
  name: "Hero",
  components: {
    GenericPanel
  },
  setup() {
    useHead({
      title: "EasyJoey",
      description: "EasyJoey is the first and only local-first health records management system.",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: ogBanner
        }
      ]
    });
    return {};
  },
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "For Canadian Pharmacies",
        "It's Secure",
        "Truly Private",
        "It's Encrypted"
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2e3,
      displayTextArrayIndex: 0,
      charIndex: 0
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1e3);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Input58t = resolveComponent("Input:t");
  _push(`<!--[--><section class="bg-white" data-v-2642da8a><div class="dark:bg-violet-400" data-v-2642da8a><div class="container flex flex-col items-center px-4 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-gray-900" data-v-2642da8a><div class="logo-container" data-v-2642da8a><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo" data-v-2642da8a></div><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter" data-v-2642da8a> Supercharge your workflows with Privacy-First Telepharmacy. </h1><div class="custom-container" data-v-2642da8a><h1 class="custom-heading items-center font-inter" data-v-2642da8a><span class="typed-text" data-v-2642da8a>${ssrInterpolate(_ctx.typeValue)}</span><span class="blinking-cursor" data-v-2642da8a>|</span><span class="${ssrRenderClass([{ typing: _ctx.typeStatus }, "cursor"])}" data-v-2642da8a>\xA0</span></h1></div><p class="mb-0 text-2xl sm:mb-12 xl:max-w-2xl dark:text-gray-900 font-inter" data-v-2642da8a> Easily setup your own Telepharmacy System. More minor ailment consultations and prescription counselings!`);
  _push(ssrRenderComponent(_component_Input58t, null, null, _parent));
  _push(`</p><div class="flex flex-wrap items-center justify-center -mt-5" data-v-2642da8a><input type="text" placeholder="Your email address" class="input bg-white border-1 border-gray-600 w-full max-w-xs md:w-auto" data-v-2642da8a><button type="button" class="ml-2 px-8 py-3 text-lg border-1 text-white bg-red-400 rounded dark:text-gray-300" data-v-2642da8a> Join Waitlist </button></div></div></div><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-3/4 pt-40 mx-auto mb-20 rounded-lg lg:-mt-40 dark:bg-gray-500" data-aos="zoom-in" data-v-2642da8a></section><section class="bg-white mb-20" data-v-2642da8a><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2642da8a><h1 class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2642da8a> Your Own TelePharmacy </h1><p class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500" data-v-2642da8a> Affordable robust telepharmacy setup right in your pharmacy. </p></div><div class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100 text-white" data-v-2642da8a><div class="flex flex-col md:flex-row justify-center mt-4" data-v-2642da8a><div class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-red-400 shadow-xl" , data-aos="zoom-in" data-v-2642da8a><figure data-v-2642da8a><img${ssrRenderAttr("src", _imports_2)} alt="Shoes" data-v-2642da8a></figure><div class="card-body" data-v-2642da8a><h2 class="card-title" data-v-2642da8a>Designed for Everyday Use</h2><p data-v-2642da8a> Very easy interface that you can access anytime. Consult, prescribe, and document. That&#39;s it! </p></div></div><div class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-red-400 shadow-xl" , data-aos="zoom-in" data-v-2642da8a><figure data-v-2642da8a><img${ssrRenderAttr("src", _imports_3)} alt="Shoes" data-v-2642da8a></figure><div class="card-body" data-v-2642da8a><h2 class="card-title" data-v-2642da8a> Partner with Dedicated Pharmacists </h2><p data-v-2642da8a> Practive with confidence by partnering up with your trusted pharmacists anywhere in Canada. </p></div></div><div class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-red-400 shadow-xl" , data-aos="zoom-in" data-v-2642da8a><figure data-v-2642da8a><img${ssrRenderAttr("src", _imports_4)} alt="Shoes" data-v-2642da8a></figure><div class="card-body" data-v-2642da8a><h2 class="card-title" data-v-2642da8a>Secure Telehealth Platform</h2><p data-v-2642da8a> Parmazip is built with data privacy and security at its core. Has end-to-end encryptuon. No data is stored in the cloud. </p></div></div></div></div></section><section class="bg-white pb-20" data-v-2642da8a><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2642da8a><h1 class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2642da8a> How it works </h1><p class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500" data-v-2642da8a> There are two ways the patient can consult with the pharmacist. </p></div><img${ssrRenderAttr("src", _imports_5)} alt="" class="max-w-7xl pt-40 mx-auto mb-20 rounded-xl lg:-mt-40 dark:bg-gray-500 border shadow-xl" data-aos="zoom-in" data-v-2642da8a><div class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100" data-v-2642da8a><div class="flex flex-col md:flex-row justify-center mt-4" data-v-2642da8a><div class="mx-2 w-full md:w-1/2 card card-compact w-96 border bg-white shadow-xl" data-v-2642da8a><figure data-v-2642da8a><img${ssrRenderAttr("src", _imports_6)} alt="Shoes" data-v-2642da8a></figure><div class="card-body" data-v-2642da8a><section class="dark:bg-gray-800 dark:text-gray-100 text-gray-700" data-v-2642da8a><div class="container px-4 mx-auto space-y-8 lg:max-w-3xl" data-v-2642da8a><h2 class="text-2xl font-bold md:text-3xl" data-v-2642da8a> When the Patient is at Home. </h2><div class="space-y-8" data-v-2642da8a><div data-v-2642da8a><ul class="space-y-4" data-v-2642da8a><li class="space-y-1" data-v-2642da8a><div class="flex items-center space-x-2" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400" data-v-2642da8a><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2642da8a></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2642da8a></polygon></svg><h4 class="text-xl font-medium" data-v-2642da8a> Patient books a consultation with a pharmacist. </h4></div><p class="ml-7 dark:text-gray-400" data-v-2642da8a> More details here. </p></li><li class="space-y-1" data-v-2642da8a><div class="flex items-center space-x-2" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400" data-v-2642da8a><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2642da8a></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2642da8a></polygon></svg><h4 class="text-xl font-medium" data-v-2642da8a> Pharmacist consults and provides prescription. </h4></div><p class="ml-7 dark:text-gray-400" data-v-2642da8a> More details here. </p></li><li class="space-y-1" data-v-2642da8a><div class="flex items-center space-x-2" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400" data-v-2642da8a><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2642da8a></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2642da8a></polygon></svg><h4 class="text-xl font-medium" data-v-2642da8a> Prescription is sent to preferred pharmacy. </h4></div><p class="ml-7 dark:text-gray-400" data-v-2642da8a> More details here. </p></li></ul></div></div></div></section></div></div><div class="mx-2 w-full md:w-1/2 card card-compact w-96 border bg-white shadow-xl" data-v-2642da8a><figure data-v-2642da8a><img${ssrRenderAttr("src", _imports_7)} alt="Shoes" data-v-2642da8a></figure><div class="card-body" data-v-2642da8a><section class="dark:bg-gray-800 dark:text-gray-100 text-gray-700" data-v-2642da8a><div class="container px-4 mx-auto space-y-8 lg:max-w-3xl" data-v-2642da8a><h2 class="text-2xl font-bold md:text-3xl" data-v-2642da8a> When the Patient is at the Pharmacy. </h2><div class="space-y-8" data-v-2642da8a><div data-v-2642da8a><ul class="space-y-4" data-v-2642da8a><li class="space-y-1" data-v-2642da8a><div class="flex items-center space-x-2" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400" data-v-2642da8a><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2642da8a></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2642da8a></polygon></svg><h4 class="text-xl font-medium" data-v-2642da8a> Patient visits the pharmacy and registers in the telehealth kiosk. </h4></div><p class="ml-7 dark:text-gray-400" data-v-2642da8a> More details here. </p></li><li class="space-y-1" data-v-2642da8a><div class="flex items-center space-x-2" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400" data-v-2642da8a><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2642da8a></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2642da8a></polygon></svg><h4 class="text-xl font-medium" data-v-2642da8a> Pharmacist consults and provides prescription. </h4></div><p class="ml-7 dark:text-gray-400" data-v-2642da8a> More details here. </p></li><li class="space-y-1" data-v-2642da8a><div class="flex items-center space-x-2" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400" data-v-2642da8a><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2642da8a></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2642da8a></polygon></svg><h4 class="text-xl font-medium" data-v-2642da8a> Patient receives the prescribed medications. </h4></div><p class="ml-7 dark:text-gray-400" data-v-2642da8a> More details here. </p></li></ul></div></div></div></section></div></div></div></div></section><section class="dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800" data-v-2642da8a><div class="container max-w-xl mx-auto p-6 lg:max-w-7xl" data-v-2642da8a><div class="text-center" data-v-2642da8a><h2 class="text-3xl mt-20 font-bold tracki sm:text-5xl dark:text-gray-50 font-inter" data-v-2642da8a> True Data Freedom. </h2><p class="max-w-4xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter" data-v-2642da8a> With Parmazip, you control the software, you own your data. Total Autonomy. </p></div></div></section><section class="bg-white py-2" data-v-2642da8a><div data-v-2642da8a><img${ssrRenderAttr("src", _imports_8)} alt="" class="w-3/4 mx-auto mb-12 rounded-3xl shadow-md lg:mt-10 dark:bg-gray-500" data-v-2642da8a></div><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2642da8a><h1 class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2642da8a> Can&#39;t wait? Let&#39;s have coffee. </h1><p class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500" data-v-2642da8a> We&#39;d love to talk to you&#39;. </p><div class="flex flex-wrap items-center justify-center mt-20" data-v-2642da8a><input type="text" placeholder="Your email address" class="input bg-white border-1 border-gray-600 w-full max-w-xs md:w-auto" data-v-2642da8a><button type="button" class="ml-2 px-8 py-3 text-lg border-1 text-white bg-red-400 rounded dark:text-gray-300" data-v-2642da8a> Join Waitlist </button></div></div></section><div class="dark:bg-gray-800 dark:text-gray-100 my-30" data-v-2642da8a><footer class="px-4 divide-y dark:bg-gray-800 dark:text-gray-100" data-v-2642da8a><div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0" data-v-2642da8a><div class="lg:w-1/3" data-v-2642da8a><a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start" data-v-2642da8a><div class="flex items-left justify-left h-10 rounded-full dark:bg-default-400" data-v-2642da8a><a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center" data-v-2642da8a><img${ssrRenderAttr("src", _imports_0)} alt="Your Logo" class="object-contain h-10 mt-1 w-auto dark:text-default-400" data-v-2642da8a></a></div></a></div><div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4" data-v-2642da8a><div class="space-y-3" data-v-2642da8a><h3 class="tracki uppercase dark:text-gray-50" data-v-2642da8a> Product </h3><ul class="space-y-1" data-v-2642da8a><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Features</a></li><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Integrations</a></li><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Pricing</a></li><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>FAQ</a></li></ul></div><div class="space-y-3" data-v-2642da8a><h3 class="tracki uppercase dark:text-gray-50" data-v-2642da8a> Company </h3><ul class="space-y-1" data-v-2642da8a><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Privacy</a></li><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Terms of Service</a></li></ul></div><div class="space-y-3" data-v-2642da8a><h3 class="uppercase dark:text-gray-50" data-v-2642da8a>Developers</h3><ul class="space-y-1" data-v-2642da8a><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Public API</a></li><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Documentation</a></li><li data-v-2642da8a><a rel="noopener noreferrer" href="#" data-v-2642da8a>Guides</a></li></ul></div><div class="space-y-3" data-v-2642da8a><div class="uppercase dark:text-gray-50" data-v-2642da8a> Social media </div><div class="flex justify-start space-x-3" data-v-2642da8a><a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current" data-v-2642da8a><path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" data-v-2642da8a></path></svg></a><a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1" data-v-2642da8a><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" data-v-2642da8a><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" data-v-2642da8a></path></svg></a><a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1" data-v-2642da8a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current" data-v-2642da8a><path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z" data-v-2642da8a></path></svg></a></div></div></div></div><div class="py-6 text-sm text-center dark:text-gray-400" data-v-2642da8a> \xA9 2024 Parmazip. All rights reserved. </div></footer></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2642da8a"]]);

export { index as default };
//# sourceMappingURL=index-B-ON-vAK.mjs.map
