import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './parmazip-logo-DNMBOJQA.mjs';
import { _ as _imports_0$1 } from './parmazip-logo-long-BKq7oyRf.mjs';
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
const _imports_1 = "" + buildAssetsURL("parmazip-tele-video.DJVfjk6l.mp4");
const _imports_2 = "" + buildAssetsURL("parmazip-mobile-video.giQZBO4i.mp4");
const _imports_3 = "" + buildAssetsURL("parmazip-how-1.CmSgZ3rQ.png");
const _imports_4 = "" + buildAssetsURL("parmazip-how-2.G29zQtNc.png");
const _imports_5 = "" + buildAssetsURL("parmazip-how-3.DlL1HD1V.png");
const _imports_6 = "" + buildAssetsURL("parmazip-benefit-1.BBRZu5xB.png");
const _imports_7 = "" + buildAssetsURL("parmazip-benefit-2.COWsLIFy.png");
const _imports_8 = "" + buildAssetsURL("parmazip-benefit-3.mC0rMkgd.png");
const _imports_9 = "" + buildAssetsURL("parmazip-benefit-4.CEABMCKp.png");
const _imports_10 = "" + buildAssetsURL("parmazip-trista.BdhNVSJu.png");
const _sfc_main = {
  name: "Hero",
  components: {
    GenericPanel
  },
  setup() {
    useHead({
      title: "Parmazip",
      description: "Parmazip provides a Telehealth App for Pharmacists in Canada.",
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-4a787cdf><section class="bg-white" data-v-4a787cdf><div class="dark:bg-violet-400" data-v-4a787cdf><div class="container flex flex-col items-center px-4 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-gray-900" data-v-4a787cdf><div class="logo-container" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo" data-v-4a787cdf></div><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter" data-v-4a787cdf> Supercharge your workflows with Telepharmacy AI. </h1><p class="mt-5 text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-900 font-inter" data-v-4a787cdf> Make minor ailment consultations more efficient with Parmazip\u2014 the first AI-powered Telepharmacy tool that gets you out of the admin work and more onto patient care.`);
  _push(ssrRenderComponent(_component_Input58t, null, null, _parent));
  _push(`</p><div class="flex flex-wrap items-center justify-center -mt-5" data-v-4a787cdf></div></div></div></section><section data-v-4a787cdf><div class="dark:bg-violet-400" data-v-4a787cdf></div><video class="max-w-6xl mx-auto mt-5 lg:mt-5 dark:bg-gray-500 border-4 border-gray-700" controls autoplay loop muted data-v-4a787cdf><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-4a787cdf> Your browser does not support the video tag. </video></section><section class="bg-white mt-20" data-v-4a787cdf><div class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100 text-gray-800" data-v-4a787cdf><div class="flex flex-col md:flex-row justify-center mt-4" data-v-4a787cdf><div class="mx-5 w-full md:w-1/3 card card-compact w-96" data-v-4a787cdf><div class="card-body" data-v-4a787cdf><h2 class="card-title text-xl" data-v-4a787cdf> Designed for Everyday Use </h2><p class="text-xl" data-v-4a787cdf> Very easy interface that you can access anytime. Consult, prescribe, and document. That&#39;s it! </p></div></div><div class="mx-5 w-full md:w-1/3 card card-compact w-96 text-gray-800" data-v-4a787cdf><div class="card-body" data-v-4a787cdf><h2 class="card-title text-xl" data-v-4a787cdf> Partner with Dedicated Pharmacists </h2><p class="text-xl" data-v-4a787cdf> Practice with confidence by partnering up with your trusted pharmacists anywhere in Canada. </p></div></div><div class="mx-5 w-full md:w-1/3 card card-compact w-96 text-gray-800" data-v-4a787cdf><div class="card-body" data-v-4a787cdf><h2 class="card-title text-xl" data-v-4a787cdf> Secure Telehealth Platform </h2><p class="text-xl" data-v-4a787cdf> Parmazip is built with data privacy and security at its core. Has end-to-end encryptuon. No data is stored in the cloud. </p></div></div></div></div></section><section class="dark:bg-gray-800 dark:text-gray-100" data-v-4a787cdf><div class="container max-w-xl p-6 py-12 mx-auto mt-20 space-y-24 lg:px-8 lg:max-w-7xl" data-v-4a787cdf><div data-v-4a787cdf><div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-v-4a787cdf><div class="lg:col-start-2" data-v-4a787cdf><h3 class="text-2xl font-bold tracking-tight sm:text-5xl dark:text-gray-50" data-v-4a787cdf> Patient-focused care with minor ailments AI </h3><div class="mt-12 space-y-12" data-v-4a787cdf><div class="flex" data-v-4a787cdf><div class="flex" data-v-4a787cdf></div><div data-v-4a787cdf><p class="text-xl font-medium leading-6 text-gray-700 dark:text-gray-50 font-inter" data-v-4a787cdf> With Parmazip AI bot for minor ailments, your patients can book ahead of time and talk to a bot to describe their symptoms, medical history, drug history, and allergies. All you have to do when they get there is review what they answered and start consulting! </p></div></div><div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" data-v-4a787cdf><a rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScW0Y_HX0KdZWMICk3EHOoQxHj0pl5TKR6s4tQK1IBTiN2tEQ/viewform" target="_blank" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white" data-v-4a787cdf>Join the Waitlist</a></div></div></div><div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-v-4a787cdf><video class="mx-auto rounded-3xl shadow-lg dark:bg-gray-500" width="450" height="auto" controls autoplay loop muted playsinline data-v-4a787cdf><source${ssrRenderAttr("src", _imports_2)} type="video/mp4" data-v-4a787cdf> Your browser does not support the video tag. </video></div></div></div></div></section><div class="dark:bg-violet-400" data-v-4a787cdf><div class="container flex flex-col items-center px-4 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-gray-900" data-v-4a787cdf><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter" data-v-4a787cdf> How it works </h1></div></div><section class="flex items-center" data-v-4a787cdf><div class="max-w-7xl mx-auto text-center" data-v-4a787cdf><div class="flex justify-center mt-4" data-v-4a787cdf><div class="mx-2 w-1/3 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_3)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><p class="text-xl font-inter text-center" data-v-4a787cdf> Your patient books an appointment with your pharmacy </p></div><div class="mx-2 w-1/3 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_4)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><p class="text-xl font-inter text-center" data-v-4a787cdf> Your telepharmacist will provide virtual consultation and treatment plan </p></div><div class="mx-2 w-1/3 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_5)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><p class="text-xl font-inter text-center" data-v-4a787cdf> Your pharmacy receives the digital prescriptions for dispensing </p></div></div></div></section><div class="dark:bg-violet-400" data-v-4a787cdf><div class="container flex flex-col items-center px-4 mt-10 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-gray-900" data-v-4a787cdf><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter" data-v-4a787cdf> What happens when you use telehealth in your pharmacy? </h1></div></div><section class="flex items-center" data-v-4a787cdf><div class="max-w-7xl mx-auto text-center mb-20" data-v-4a787cdf><div class="flex justify-center mt-4" data-v-4a787cdf><div class="mx-5 w-1/4 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_6)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-4a787cdf> Increased foot traffic </h2><p class="text-xl font-inter text-center" data-v-4a787cdf> More consultations that can be done remotely mean more patients ready to purchase. </p></div><div class="mx-5 w-1/4 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_7)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-4a787cdf> Improved workflows </h2><p class="text-xl font-inter text-center" data-v-4a787cdf> With virtual pharmacists on call, your staff pharmacist can focus more on their primary activities. </p></div><div class="mx-5 w-1/4 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_8)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-4a787cdf> Boost your brand </h2><p class="text-xl font-inter text-center" data-v-4a787cdf> Be one of the pioneer independent telepharmacy businesses in Canada that patients trust. </p></div><div class="mx-5 w-1/4 text-left" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_9)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-4a787cdf><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-4a787cdf> More flexible time </h2><p class="text-xl font-inter text-center" data-v-4a787cdf> Communicate with more pharmacists who are available whenever you aren\u2019t. </p></div></div></div></section><section class="dark:bg-gray-800 dark:text-gray-100 bg-red-200 mt-20" data-v-4a787cdf><div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl" data-v-4a787cdf><div data-v-4a787cdf><div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-v-4a787cdf><div class="lg:col-start-2" data-v-4a787cdf><h3 class="text-2xl font-bold tracking-tight sm:text-5xl dark:text-gray-50" data-v-4a787cdf> Can&#39;t wait?<br data-v-4a787cdf> Let&#39;s have coffee. </h3><div class="mt-12 space-y-12" data-v-4a787cdf><div class="flex" data-v-4a787cdf><div class="flex" data-v-4a787cdf></div><div data-v-4a787cdf><h4 class="text-lg font-medium leading-6 dark:text-gray-50" data-v-4a787cdf> One of our co-founders, Trista, roams around Ontario to talk with pharmacy owners and pharmacists to make sure what we\u2019re doing is something that you will love to use everyday. <br data-v-4a787cdf><br data-v-4a787cdf>As we&#39;re polishing this awesome telehealth app that will change the Canadian pharmacy space, we&#39;re in search for pharmacists and pharmacy owners who are really, really willing enough to get started and give us brutal, honest feedback on how we&#39;re doing. <br data-v-4a787cdf><br data-v-4a787cdf>Sounds like you? Perfect\u2014coffee is on us! </h4></div></div><div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" data-v-4a787cdf><a rel="noopener noreferrer" href="https://calendly.com/parmazip-trista/talk" target="_blank" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white" data-v-4a787cdf>Talk to Trista</a></div></div></div><div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_10)} alt="" class="mx-auto dark:bg-gray-500" data-v-4a787cdf></div></div></div></div></section><div class="dark:bg-gray-800 dark:text-gray-100 my-30" data-v-4a787cdf><footer class="footer items-center p-4 text-neutral-content px-40" data-v-4a787cdf><aside class="items-center grid-flow-col" data-v-4a787cdf><img${ssrRenderAttr("src", _imports_0$1)} alt="Your Logo" class="object-contain h-10 mt-1 w-auto dark:text-default-400" data-v-4a787cdf></aside><nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end" data-v-4a787cdf><a href="https://twitter.com/ParmaZip" target="blank" data-v-4a787cdf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-4a787cdf><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-v-4a787cdf></path></svg></a><a href="https://www.facebook.com/parmazip/" target="_blank" rel="noopener noreferrer" data-v-4a787cdf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-4a787cdf><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" data-v-4a787cdf></path></svg></a><a href="https://www.linkedin.com/company/parmazip/" target="_blank" rel="noopener noreferrer" data-v-4a787cdf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-4a787cdf><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5m7 2a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5m0 8a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3m4.5-8.5A1.5 1.5 0 0016.5 5 1.5 1.5 0 0015 6.5 1.5 1.5 0 0016.5 8 1.5 1.5 0 0018 6.5z" data-v-4a787cdf></path></svg></a></nav></footer></div><div class="dark:bg-gray-800 dark:text-gray-100 my-30" data-v-4a787cdf><div class="py-6 text-sm text-center dark:text-gray-400" data-v-4a787cdf> \xA9 2024 Parmazip. All rights reserved. </div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a787cdf"]]);

export { index as default };
//# sourceMappingURL=index-BXLPnu52.mjs.map
