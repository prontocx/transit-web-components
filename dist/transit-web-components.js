import { openBlock as s, createElementBlock as l, normalizeClass as c, renderSlot as b, toDisplayString as i, createCommentVNode as u, createElementVNode as g, mergeProps as p } from "vue";
const y = ["type"], k = {
  __name: "Button",
  props: {
    type: { type: String, default: "button" },
    onClick: { type: Function, default: null },
    secondary: Boolean,
    class: { type: String, default: "" },
    outline: Boolean
  },
  setup(e) {
    const t = e;
    function a() {
      const o = t.secondary ? "text-secondary-700 hover:bg-secondary-700" : "text-primary-700 hover:bg-primary-700", r = t.secondary ? "bg-secondary-700 hover:bg-secondary-800" : "bg-primary-700 hover:bg-primary-800";
      return [
        "font-medium rounded text-sm px-5 py-2.5 me-2 mb-2",
        !t.outline && `text-white ${r}`,
        t.outline && `bg-transparent outline outline-1 hover:text-white ${o}`,
        t.class
      ];
    }
    return (o, r) => (s(), l("button", {
      class: c(a()),
      onClick: r[0] || (r[0] = (...n) => e.onClick && e.onClick(...n)),
      type: e.type
    }, [
      b(o.$slots, "default")
    ], 10, y));
  }
}, f = ["for"], x = {
  key: 1,
  class: "mt-2 text-sm text-red-600 dark:text-red-500"
}, B = {
  __name: "Input",
  props: {
    label: String,
    id: String,
    name: String,
    type: String,
    class: String,
    wrapperClass: String,
    error: String,
    required: Boolean,
    placeholder: String,
    labelClass: String,
    maxlength: Number,
    pattern: String
  },
  setup(e) {
    const t = e;
    function a() {
      const { label: n, wrapperClass: d, error: C, labelClass: S, ...m } = t;
      return m;
    }
    function o() {
      const n = "border text-sm rounded-lg block w-full p-2.5";
      return t.error ? `${n} bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 outline-red-500` : `${n} border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500`;
    }
    function r() {
      return t.error ? "block mb-1 text-sm font-medium text-red-700 dark:text-red-500" : "block mb-1 text-sm font-medium text-gray-900";
    }
    return (n, d) => (s(), l("div", {
      class: c(e.wrapperClass)
    }, [
      e.label ? (s(), l("label", {
        key: 0,
        for: e.name,
        class: c(r())
      }, i(e.label), 11, f)) : u("", !0),
      g("input", p({
        class: o()
      }, a()), null, 16),
      e.error ? (s(), l("p", x, i(e.error), 1)) : u("", !0)
    ], 2));
  }
};
export {
  k as Button,
  B as Input
};
