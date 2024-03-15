import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto md:max-w-6xl px-5 py-5 md:py-7" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/commons/GenericPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GenericPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const ogBanner = "" + buildAssetsURL("parmazip-banner.BnREyAgI.png");
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

export { GenericPanel as G, _imports_1 as _, _imports_2 as a, _imports_3 as b, _imports_4 as c, _imports_5 as d, _imports_6 as e, _imports_7 as f, _imports_8 as g, _imports_9 as h, _imports_10 as i, ogBanner as o };
//# sourceMappingURL=parmazip-trista-BIwwhH9z.mjs.map
