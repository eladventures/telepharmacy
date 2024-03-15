import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { G as GenericPanel, _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4, d as _imports_5, e as _imports_6, f as _imports_7, g as _imports_8, h as _imports_9, i as _imports_10, o as ogBanner } from './parmazip-trista-BIwwhH9z.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './parmazip-logo-DNMBOJQA.mjs';
import { _ as _imports_0$1 } from './parmazip-logo-long-BKq7oyRf.mjs';
import { u as useHead } from './vue.f36acd1f-BXTgS32W.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-5c74990f><section class="bg-white" data-v-5c74990f><div data-v-5c74990f><div class="container flex flex-col items-center px-4 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 text-gray-900" data-v-5c74990f><div class="logo-container" data-v-5c74990f><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo" data-v-5c74990f></div><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl font-inter" data-v-5c74990f> Supercharge your workflows with Telepharmacy AI. </h1><p class="mt-5 text-2xl sm:mb-12 xl:max-w-3xl font-inter" data-v-5c74990f> Make minor ailment consultations more efficient with Parmazip\u2014 the first AI-powered Telepharmacy tool that gets you out of the admin work and more onto patient care.`);
  _push(ssrRenderComponent(_component_Input58t, null, null, _parent));
  _push(`</p><div class="flex flex-wrap items-center justify-center -mt-5" data-v-5c74990f></div></div></div></section><section data-v-5c74990f><div data-v-5c74990f></div><video class="max-w-6xl mx-auto mt-5 lg:mt-5 border-4 border-gray-700" controls autoplay loop muted data-v-5c74990f><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-5c74990f> Your browser does not support the video tag. </video></section><section class="bg-white mt-20" data-v-5c74990f><div class="max-w-7xl mx-auto text-gray-800" data-v-5c74990f><div class="flex flex-col md:flex-row justify-center mt-4" data-v-5c74990f><div class="mx-5 w-full md:w-1/3 card card-compact w-96" data-v-5c74990f><div class="card-body" data-v-5c74990f><h2 class="card-title text-xl" data-v-5c74990f> Designed for Everyday Use </h2><p class="text-xl" data-v-5c74990f> Very easy interface that you can access anytime. Consult, prescribe, and document. That&#39;s it! </p></div></div><div class="mx-5 w-full md:w-1/3 card card-compact w-96 text-gray-800" data-v-5c74990f><div class="card-body" data-v-5c74990f><h2 class="card-title text-xl" data-v-5c74990f> Partner with Dedicated Pharmacists </h2><p class="text-xl" data-v-5c74990f> Practice with confidence by partnering up with your trusted pharmacists anywhere in Canada. </p></div></div><div class="mx-5 w-full md:w-1/3 card card-compact w-96 text-gray-800" data-v-5c74990f><div class="card-body" data-v-5c74990f><h2 class="card-title text-xl" data-v-5c74990f> Secure Telehealth Platform </h2><p class="text-xl" data-v-5c74990f> Parmazip is built with data privacy and security at its core. Has end-to-end encryptuon. No data is stored in the cloud. </p></div></div></div></div></section><section data-v-5c74990f><div class="container max-w-xl p-6 py-12 mx-auto mt-20 space-y-24 lg:px-8 lg:max-w-7xl" data-v-5c74990f><div data-v-5c74990f><div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-v-5c74990f><div class="lg:col-start-2" data-v-5c74990f><h3 class="text-2xl font-bold tracking-tight sm:text-5xl" data-v-5c74990f> Patient-focused care with minor ailments AI </h3><div class="mt-12 space-y-12" data-v-5c74990f><div class="flex" data-v-5c74990f><div class="flex" data-v-5c74990f></div><div data-v-5c74990f><p class="text-xl font-medium leading-6 text-gray-700 font-inter" data-v-5c74990f> With Parmazip AI bot for minor ailments, your patients can book ahead of time and talk to a bot to describe their symptoms, medical history, drug history, and allergies. All you have to do when they get there is review what they answered and start consulting! </p></div></div><div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" data-v-5c74990f><a rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScW0Y_HX0KdZWMICk3EHOoQxHj0pl5TKR6s4tQK1IBTiN2tEQ/viewform" target="_blank" class="px-8 py-3 text-lg font-semibold rounded bg-red-400 text-white" data-v-5c74990f>Join the Waitlist</a></div></div></div><div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-v-5c74990f><video class="mx-auto rounded-3xl shadow-lg" width="450" height="auto" controls autoplay loop muted playsinline data-v-5c74990f><source${ssrRenderAttr("src", _imports_2)} type="video/mp4" data-v-5c74990f> Your browser does not support the video tag. </video></div></div></div></div></section><div data-v-5c74990f><div class="container flex flex-col items-center px-4 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 text-gray-900" data-v-5c74990f><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl font-inter" data-v-5c74990f> How it works </h1></div></div><section class="flex items-center" data-v-5c74990f><div class="max-w-7xl mx-auto text-center" data-v-5c74990f><div class="flex justify-center mt-4" data-v-5c74990f><div class="mx-2 w-1/3 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_3)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><p class="text-xl font-inter text-center" data-v-5c74990f> Your patient books an appointment with your pharmacy </p></div><div class="mx-2 w-1/3 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_4)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><p class="text-xl font-inter text-center" data-v-5c74990f> Your telepharmacist will provide virtual consultation and treatment plan </p></div><div class="mx-2 w-1/3 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_5)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><p class="text-xl font-inter text-center" data-v-5c74990f> Your pharmacy receives the digital prescriptions for dispensing </p></div></div></div></section><div data-v-5c74990f><div class="container flex flex-col items-center px-4 mt-10 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 text-gray-900" data-v-5c74990f><h1 class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl font-inter" data-v-5c74990f> What happens when you use telehealth in your pharmacy? </h1></div></div><section class="flex items-center" data-v-5c74990f><div class="max-w-7xl mx-auto text-center mb-20" data-v-5c74990f><div class="flex justify-center mt-4" data-v-5c74990f><div class="mx-5 w-1/4 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_6)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-5c74990f> Increased foot traffic </h2><p class="text-xl font-inter text-center" data-v-5c74990f> More consultations that can be done remotely mean more patients ready to purchase. </p></div><div class="mx-5 w-1/4 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_7)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-5c74990f> Improved workflows </h2><p class="text-xl font-inter text-center" data-v-5c74990f> With virtual pharmacists on call, your staff pharmacist can focus more on their primary activities. </p></div><div class="mx-5 w-1/4 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_8)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-5c74990f> Boost your brand </h2><p class="text-xl font-inter text-center" data-v-5c74990f> Be one of the pioneer independent telepharmacy businesses in Canada that patients trust. </p></div><div class="mx-5 w-1/4 text-left" data-v-5c74990f><img${ssrRenderAttr("src", _imports_9)} alt="Your Image Description" class="w-full rounded" data-aos="zoom-in" data-v-5c74990f><h2 class="text-xl font-bold mt-2 mb-5 font-inter text-center" data-v-5c74990f> More flexible time </h2><p class="text-xl font-inter text-center" data-v-5c74990f> Communicate with more pharmacists who are available whenever you aren\u2019t. </p></div></div></div></section><section class="bg-red-200 mt-20" data-v-5c74990f><div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl" data-v-5c74990f><div data-v-5c74990f><div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-v-5c74990f><div class="lg:col-start-2" data-v-5c74990f><h3 class="text-2xl font-bold tracking-tight sm:text-5xl" data-v-5c74990f> Can&#39;t wait?<br data-v-5c74990f> Let&#39;s have coffee. </h3><div class="mt-12 space-y-12" data-v-5c74990f><div class="flex" data-v-5c74990f><div class="flex" data-v-5c74990f></div><div data-v-5c74990f><h4 class="text-lg font-medium leading-6" data-v-5c74990f> One of our co-founders, Trista, roams around Ontario to talk with pharmacy owners and pharmacists to make sure what we\u2019re doing is something that you will love to use everyday. <br data-v-5c74990f><br data-v-5c74990f>As we&#39;re polishing this awesome telehealth app that will change the Canadian pharmacy space, we&#39;re in search for pharmacists and pharmacy owners who are really, really willing enough to get started and give us brutal, honest feedback on how we&#39;re doing. <br data-v-5c74990f><br data-v-5c74990f>Sounds like you? Perfect\u2014coffee is on us! </h4></div></div><div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" data-v-5c74990f><a rel="noopener noreferrer" href="https://calendly.com/parmazip-trista/talk" target="_blank" class="px-8 py-3 text-lg font-semibold rounded bg-red-400 text-white" data-v-5c74990f>Talk to Trista</a></div></div></div><div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-v-5c74990f><img${ssrRenderAttr("src", _imports_10)} alt="" class="mx-auto" data-v-5c74990f></div></div></div></div></section><div class="my-30" data-v-5c74990f><footer class="footer items-center p-4 text-neutral-content px-40" data-v-5c74990f><aside class="items-center grid-flow-col" data-v-5c74990f><img${ssrRenderAttr("src", _imports_0$1)} alt="Your Logo" class="object-contain h-10 mt-1 w-auto" data-v-5c74990f></aside><nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end" data-v-5c74990f><a href="https://twitter.com/ParmaZip" target="blank" data-v-5c74990f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-5c74990f><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-v-5c74990f></path></svg></a><a href="https://www.facebook.com/parmazip/" target="_blank" rel="noopener noreferrer" data-v-5c74990f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-5c74990f><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" data-v-5c74990f></path></svg></a><a href="https://www.linkedin.com/company/parmazip/" target="_blank" rel="noopener noreferrer" data-v-5c74990f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-5c74990f><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5m7 2a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5m0 8a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3m4.5-8.5A1.5 1.5 0 0016.5 5 1.5 1.5 0 0015 6.5 1.5 1.5 0 0016.5 8 1.5 1.5 0 0018 6.5z" data-v-5c74990f></path></svg></a></nav></footer></div><div class="my-30" data-v-5c74990f><div class="py-6 text-sm text-center" data-v-5c74990f> \xA9 2024 Parmazip. All rights reserved. </div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5c74990f"]]);

export { index as default };
//# sourceMappingURL=index-B4WY4y8p.mjs.map
