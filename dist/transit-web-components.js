import { openBlock as l, createElementBlock as a, normalizeClass as i, renderSlot as c } from "vue";
const u = ["type"], d = {
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
    function r() {
      const o = t.secondary ? "text-secondary-700 hover:bg-secondary-700" : "text-primary-700 hover:bg-primary-700", n = t.secondary ? "bg-secondary-700 hover:bg-secondary-800" : "bg-primary-700 hover:bg-primary-800";
      return [
        "font-medium rounded text-sm px-5 py-2.5 me-2 mb-2",
        !t.outline && `text-white ${n}`,
        t.outline && `bg-transparent outline outline-1 hover:text-white ${o}`,
        t.class
      ];
    }
    return (o, n) => (l(), a("button", {
      class: i(r()),
      onClick: n[0] || (n[0] = (...s) => e.onClick && e.onClick(...s)),
      type: e.type
    }, [
      c(o.$slots, "default")
    ], 10, u));
  }
};
export {
  d as Button
};
