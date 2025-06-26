"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  plugin: () => plugin
});
module.exports = __toCommonJS(src_exports);
var plugin = {
  httpRequestActions: [
    {
      label: "Copy Full URL",
      icon: "copy",
      async onSelect(ctx, args) {
        const rendered_request = await ctx.httpRequest.render({ httpRequest: args.httpRequest, purpose: "preview" });
        await ctx.clipboard.copyText(quote(rendered_request.url));
        await ctx.toast.show({
          color: "success",
          message: `Copied Full URL to your clipboard!`
        });
      }
    }
  ]
};
function quote(arg) {
  const escaped = arg.replace(/'/g, "\\'");
  return `${escaped}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugin
});
