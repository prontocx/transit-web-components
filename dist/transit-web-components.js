import { reactive as Pn, defineComponent as K, useAttrs as Ht, openBlock as x, createElementBlock as E, mergeProps as Ne, unref as A, createTextVNode as it, toDisplayString as X, createBlock as Q, resolveDynamicComponent as gt, normalizeClass as R, withCtx as Y, ref as ee, provide as An, h as et, TransitionGroup as En, pushScopeId as Nn, popScopeId as Dn, toRefs as ve, renderSlot as N, createCommentVNode as W, createElementVNode as B, nextTick as On, onMounted as vt, computed as k, resolveComponent as ut, normalizeProps as Ye, Fragment as Ae, Comment as zn, withDirectives as Vt, isRef as Gr, vModelDynamic as Fn, renderList as Wr, vModelSelect as Mn, vModelCheckbox as Bn, onBeforeMount as jn, onBeforeUnmount as Rn, useSlots as Hn, getCurrentInstance as Vn, watch as rr, guardReactiveProps as mt, withScopeId as Un, normalizeStyle as Tt, withKeys as Gn, createVNode as Ge, getCurrentScope as Wn, onScopeDispose as qn, inject as Kn, mergeModels as nr, useModel as Qn, createSlots as qr } from "vue";
let Kr = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
const It = Pn({});
function Je(e, t) {
  return jn(() => {
    e && (It[e] = {
      id: e,
      flush: (t == null ? void 0 : t.flush) ?? !1,
      alwaysOpen: (t == null ? void 0 : t.alwaysOpen) ?? !1,
      openFirstItem: (t == null ? void 0 : t.openFirstItem) ?? !0,
      panels: {}
    });
  }), Rn(() => {
    e && delete It[e];
  }), {
    accordionsStates: It
  };
}
const Yn = ["data-accordion-id"], Jn = /* @__PURE__ */ K({
  __name: "FwbAccordion",
  props: {
    alwaysOpen: { type: Boolean, default: !1 },
    openFirstItem: { type: Boolean, default: !0 },
    flush: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = Kr();
    return Je(r, { ...t }), (n, o) => (x(), E("div", { "data-accordion-id": A(r) }, [
      N(n.$slots, "default")
    ], 8, Yn));
  }
});
function Zn() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Qr(t)) && (n && (n += " "), n += r);
  return n;
}
function Qr(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = Qr(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Ut = "-";
function Xn(e) {
  var t = to(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function i(u) {
    var c = u.split(Ut);
    return c[0] === "" && c.length !== 1 && c.shift(), Yr(c, t) || eo(u);
  }
  function a(u, c) {
    var p = r[u] || [];
    return c && o[u] ? [].concat(p, o[u]) : p;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: a
  };
}
function Yr(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), o = n ? Yr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var i = e.join(Ut);
    return (a = t.validators.find(function(u) {
      var c = u.validator;
      return c(i);
    })) == null ? void 0 : a.classGroupId;
  }
}
var or = /^\[(.+)\]$/;
function eo(e) {
  if (or.test(e)) {
    var t = or.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function to(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = no(Object.entries(e.classGroups), r);
  return o.forEach(function(i) {
    var a = i[0], u = i[1];
    Nt(u, n, a, t);
  }), n;
}
function Nt(e, t, r, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : ir(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ro(o)) {
        Nt(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(a) {
      var u = a[0], c = a[1];
      Nt(c, ir(t, u), r, n);
    });
  });
}
function ir(e, t) {
  var r = e;
  return t.split(Ut).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function ro(e) {
  return e.isThemeGetter;
}
function no(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], o = r[1], i = o.map(function(a) {
      return typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(u) {
        var c = u[0], p = u[1];
        return [t + c, p];
      })) : a;
    });
    return [n, i];
  }) : e;
}
function oo(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(i, a) {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return o(i, a), a;
    },
    set: function(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    }
  };
}
var Jr = "!";
function io(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], o = t.length;
  return function(i) {
    for (var a = [], u = 0, c = 0, p, g = 0; g < i.length; g++) {
      var v = i[g];
      if (u === 0) {
        if (v === n && (r || i.slice(g, g + o) === t)) {
          a.push(i.slice(c, g)), c = g + o;
          continue;
        }
        if (v === "/") {
          p = g;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    var m = a.length === 0 ? i : i.substring(c), y = m.startsWith(Jr), S = y ? m.substring(1) : m, C = p && p > c ? p - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: y,
      baseClassName: S,
      maybePostfixModifierPosition: C
    };
  };
}
function so(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function ao(e) {
  return {
    cache: oo(e.cacheSize),
    splitModifiers: io(e),
    ...Xn(e)
  };
}
var lo = /\s+/;
function uo(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(lo).map(function(a) {
    var u = r(a), c = u.modifiers, p = u.hasImportantModifier, g = u.baseClassName, v = u.maybePostfixModifierPosition, m = n(v ? g.substring(0, v) : g), y = !!v;
    if (!m) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (m = n(g), !m)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      y = !1;
    }
    var S = so(c).join(":"), C = p ? S + Jr : S;
    return {
      isTailwindClass: !0,
      modifierId: C,
      classGroupId: m,
      originalClassName: a,
      hasPostfixModifier: y
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var u = a.modifierId, c = a.classGroupId, p = a.hasPostfixModifier, g = u + c;
    return i.has(g) ? !1 : (i.add(g), o(c, p).forEach(function(v) {
      return i.add(u + v);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function co() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, i, a = u;
  function u(p) {
    var g = t[0], v = t.slice(1), m = v.reduce(function(y, S) {
      return S(y);
    }, g());
    return n = ao(m), o = n.cache.get, i = n.cache.set, a = c, c(p);
  }
  function c(p) {
    var g = o(p);
    if (g)
      return g;
    var v = uo(p, n);
    return i(p, v), v;
  }
  return function() {
    return a(Zn.apply(null, arguments));
  };
}
function G(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Zr = /^\[(?:([a-z-]+):)?(.+)\]$/i, po = /^\d+\/\d+$/, ho = /* @__PURE__ */ new Set(["px", "full", "screen"]), fo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, go = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ne(e) {
  return _e(e) || ho.has(e) || po.test(e) || Dt(e);
}
function Dt(e) {
  return Ce(e, "length", xo);
}
function mo(e) {
  return Ce(e, "size", Xr);
}
function bo(e) {
  return Ce(e, "position", Xr);
}
function yo(e) {
  return Ce(e, "url", ko);
}
function tt(e) {
  return Ce(e, "number", _e);
}
function _e(e) {
  return !Number.isNaN(Number(e));
}
function wo(e) {
  return e.endsWith("%") && _e(e.slice(0, -1));
}
function Me(e) {
  return sr(e) || Ce(e, "number", sr);
}
function O(e) {
  return Zr.test(e);
}
function Be() {
  return !0;
}
function de(e) {
  return fo.test(e);
}
function _o(e) {
  return Ce(e, "", Co);
}
function Ce(e, t, r) {
  var n = Zr.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function xo(e) {
  return go.test(e);
}
function Xr() {
  return !1;
}
function ko(e) {
  return e.startsWith("url(");
}
function sr(e) {
  return Number.isInteger(Number(e));
}
function Co(e) {
  return vo.test(e);
}
function So() {
  var e = G("colors"), t = G("spacing"), r = G("blur"), n = G("brightness"), o = G("borderColor"), i = G("borderRadius"), a = G("borderSpacing"), u = G("borderWidth"), c = G("contrast"), p = G("grayscale"), g = G("hueRotate"), v = G("invert"), m = G("gap"), y = G("gradientColorStops"), S = G("gradientColorStopPositions"), C = G("inset"), L = G("margin"), P = G("opacity"), I = G("padding"), D = G("saturate"), V = G("scale"), U = G("sepia"), M = G("skew"), J = G("space"), Z = G("translate"), w = function() {
    return ["auto", "contain", "none"];
  }, h = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, s = function() {
    return ["auto", O, t];
  }, l = function() {
    return [O, t];
  }, d = function() {
    return ["", ne];
  }, f = function() {
    return ["auto", _e, O];
  }, b = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, _ = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, $ = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, T = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, z = function() {
    return ["", "0", O];
  }, q = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, j = function() {
    return [_e, tt];
  }, H = function() {
    return [_e, O];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Be],
      spacing: [ne],
      blur: ["none", "", de, O],
      brightness: j(),
      borderColor: [e],
      borderRadius: ["none", "", "full", de, O],
      borderSpacing: l(),
      borderWidth: d(),
      contrast: j(),
      grayscale: z(),
      hueRotate: H(),
      invert: z(),
      gap: l(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wo, Dt],
      inset: s(),
      margin: s(),
      opacity: j(),
      padding: l(),
      saturate: j(),
      scale: j(),
      sepia: z(),
      skew: H(),
      space: l(),
      translate: l()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", O]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [de]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(b(), [O])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: h()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": h()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": h()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: w()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": w()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": w()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [C]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [C]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [C]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [C]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [C]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [C]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [C]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [C]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [C]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Me]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: s()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Be]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Me]
        }, O]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": f()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": f()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Be]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Me]
        }, O]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": f()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": f()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(T())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(T(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(T(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [I]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [I]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [I]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [I]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [I]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [I]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [I]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [I]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [I]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [L]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [L]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [L]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [L]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [L]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [L]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [L]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [L]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [L]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [J]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [J]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", O, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", O, ne]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [de]
        }, de, O]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [O, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", O, ne]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [O, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", de, Dt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", tt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Be]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _e, tt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", O, ne]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", O]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [P]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(_(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ne]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", O, ne]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: l()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [P]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(b(), [bo])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", mo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yo]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [S]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [S]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(_(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [u]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: _()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(_())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [O, ne]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ne]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: d()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ne]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", de, _o]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Be]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": $()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", de, O]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [D]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [U]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [D]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [U]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", O]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [V]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [V]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [V]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Me, O]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": l()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": l()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": l()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": l()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": l()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": l()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": l()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": l()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": l()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": l()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": l()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": l()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": l()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": l()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": l()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": l()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": l()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": l()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ne, tt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var te = /* @__PURE__ */ co(So);
const $o = "p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900";
function To(e) {
  const t = k(() => e.value.parentElement.parentElement.dataset.accordionId), r = k(() => e.value.parentElement.dataset.panelId), { accordionsStates: n } = Je(), o = k(() => n[t.value]), i = k(() => n[t.value].panels[r.value]), a = k(() => Object.keys(n[t.value].panels[r.value]).length);
  return {
    contentClasses: k(() => te(
      $o,
      !i.value.isVisible && "hidden",
      (i.value.order !== a.value - 1 || o.value.flush) && "border-b-0",
      i.value.order === a.value - 1 && "border-t-0",
      o.value.flush && "border-x-0"
    ))
  };
}
const Io = /* @__PURE__ */ K({
  __name: "FwbAccordionContent",
  setup(e) {
    const t = ee(!1), r = ee();
    let n;
    return vt(() => {
      n = To(r).contentClasses, t.value = !0;
    }), (o, i) => (x(), E("div", {
      ref_key: "content",
      ref: r
    }, [
      t.value ? (x(), E("div", {
        key: 0,
        class: R(A(n))
      }, [
        N(o.$slots, "default")
      ], 2)) : W("", !0)
    ], 512));
  }
}), Lo = "flex items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800", Po = "w-6 h-6 shrink-0";
function Ao(e) {
  const t = k(() => e.value.parentElement.parentElement.dataset.accordionId), r = k(() => e.value.parentElement.dataset.panelId), { accordionsStates: n } = Je(), o = k(() => n[t.value]), i = k(() => o.value.panels[r.value]), a = k(() => Object.keys(i.value).length), u = k(() => i.value.order !== a.value - 1), c = k(() => u.value || o.value.flush && i.value.order === a.value - 1 && !i.value.isVisible), p = k(() => te(
    Lo,
    i.value.isVisible && "bg-gray-100 dark:bg-gray-800",
    i.value.order === 0 && !o.value.flush && "rounded-t-xl",
    i.value.order === 0 && o.value.flush && "border-t-0",
    c.value && "border-b-0",
    o.value.flush && "border-x-0"
  )), g = k(() => te(Po, i.value.isVisible && "rotate-180"));
  return {
    headerClasses: p,
    arrowClasses: g
  };
}
const Eo = { class: "w-full" }, No = /* @__PURE__ */ B("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
}, null, -1), Do = [
  No
], Oo = /* @__PURE__ */ K({
  __name: "FwbAccordionHeader",
  setup(e) {
    const t = ee(!1), r = ee(), n = k(() => r.value.parentElement.parentElement.dataset.accordionId), o = k(() => r.value.parentElement.dataset.panelId), { accordionsStates: i } = Je(), a = k(() => i[n.value]), u = k(() => a.value.panels[o.value]);
    let c, p;
    function g() {
      const y = u.value.isVisible;
      for (const S in a.value.panels) {
        const C = a.value.panels[S];
        C.id !== o.value ? C.isVisible = !1 : C.isVisible = !y;
      }
    }
    function v() {
      u.value.isVisible = !u.value.isVisible;
    }
    function m() {
      if (a.value.alwaysOpen)
        return v();
      g();
    }
    return vt(() => {
      const y = Ao(r);
      c = y.headerClasses, p = y.arrowClasses, t.value = !0;
    }), (y, S) => (x(), E("div", {
      ref_key: "header",
      ref: r
    }, [
      t.value ? (x(), E("button", {
        key: 0,
        type: "button",
        class: R(A(c)),
        onClick: m
      }, [
        B("span", Eo, [
          N(y.$slots, "default")
        ]),
        (x(), E("svg", {
          "data-accordion-icon": "",
          class: R(A(p)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, Do, 2))
      ], 2)) : W("", !0)
    ], 512));
  }
}), zo = ["data-panel-id"], Fo = /* @__PURE__ */ K({
  __name: "FwbAccordionPanel",
  setup(e) {
    const { accordionsStates: t } = Je(), r = Kr(), n = ee(), o = k(() => n.value ? n.value.parentElement.dataset.accordionId : null), i = k(() => t[o.value]);
    return vt(() => {
      var u, c;
      const a = (c = Object.keys((u = i == null ? void 0 : i.value) == null ? void 0 : u.panels)) == null ? void 0 : c.length;
      i.value.panels[r] = {
        id: r,
        order: a,
        isVisible: (i.value.openFirstItem && a === 0) ?? !1
      };
    }), (a, u) => (x(), E("div", {
      ref_key: "panel",
      ref: n,
      "data-panel-id": A(r)
    }, [
      o.value ? N(a.$slots, "default", { key: 0 }) : W("", !0)
    ], 8, zo));
  }
}), Ot = (e) => te(e);
function Mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var en = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var u = r.apply(null, i);
              u && n.push(u);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(en);
var Bo = en.exports;
const jo = /* @__PURE__ */ Mo(Bo), Ro = {
  0: "w-0 h-0",
  0.5: "w-0.5 h-0.5",
  1: "w-1 h-1",
  1.5: "w-1.5 h-1.5",
  10: "w-10 h-10",
  11: "w-11 h-11",
  12: "w-12 h-12",
  2: "w-2 h-2",
  2.5: "w-2.5 h-2.5",
  3: "w-3 h-3",
  4: "w-4 h-4",
  5: "w-5 h-5",
  6: "w-6 h-6",
  7: "w-7 h-7",
  8: "w-8 h-8",
  9: "w-9 h-9"
}, Ho = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function Vo(e) {
  const t = k(() => Ro[e.size.value]), r = k(() => Ho[e.color.value]), n = k(() => "text-gray-200 dark:text-gray-600"), o = k(() => "animate-spin");
  return { spinnerClasses: k(() => jo(
    o.value,
    n.value,
    r.value,
    t.value
  )) };
}
const Uo = /* @__PURE__ */ B("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Go = /* @__PURE__ */ B("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Wo = [
  Uo,
  Go
], rt = /* @__PURE__ */ K({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = Vo(ve(t));
    return (n, o) => (x(), E("svg", {
      class: R(A(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, Wo, 2));
  }
}), ar = {
  default: {
    default: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
    blue: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
    alternative: "font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600",
    dark: "text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700",
    green: "focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800",
    red: "focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900",
    yellow: "focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900",
    purple: "focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900",
    pink: "focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900"
  },
  hover: {
    default: "hover:bg-blue-800 dark:hover:bg-blue-700",
    blue: "hover:bg-blue-800 dark:hover:bg-blue-700",
    alternative: "hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700",
    dark: "hover:bg-gray-900 dark:hover:bg-gray-700",
    light: "hover:bg-gray-100 dark:hover:border-gray-600",
    green: "hover:bg-green-800 dark:hover:bg-green-700",
    red: "hover:bg-red-800 dark:hover:bg-red-700",
    yellow: "hover:bg-yellow-500",
    purple: "hover:bg-purple-800 dark:hover:bg-purple-700",
    pink: "hover:bg-pink-800 dark:hover:bg-pink-700"
  }
}, lr = {
  default: {
    dark: "text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800",
    default: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
    blue: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
    green: "text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800",
    purple: "text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:focus:ring-purple-900",
    pink: "text-pink-700 border border-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm text-center dark:border-pink-400 dark:text-pink-400 dark:focus:ring-pink-900",
    red: "text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900",
    yellow: "text-yellow-400 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900"
  },
  hover: {
    dark: "hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600",
    default: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
    blue: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
    green: "hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600",
    purple: "hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500",
    pink: "hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500",
    red: "hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400"
  }
}, ur = {
  hover: {
    "cyan-blue": "hover:bg-gradient-to-bl",
    "green-blue": "hover:bg-gradient-to-bl",
    "pink-orange": "hover:bg-gradient-to-bl",
    "purple-blue": "hover:bg-gradient-to-bl",
    "purple-pink": "hover:bg-gradient-to-l",
    "red-yellow": "hover:bg-gradient-to-bl",
    "teal-lime": "hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200",
    blue: "hover:bg-gradient-to-br",
    cyan: "hover:bg-gradient-to-br",
    green: "hover:bg-gradient-to-br",
    lime: "hover:bg-gradient-to-br",
    pink: "hover:bg-gradient-to-br",
    purple: "hover:bg-gradient-to-br",
    red: "hover:bg-gradient-to-br",
    teal: "hover:bg-gradient-to-br"
  },
  default: {
    "cyan-blue": "text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg",
    "green-blue": "text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg",
    "pink-orange": "text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg",
    "purple-blue": "text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg",
    "purple-pink": "text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg",
    "red-yellow": "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg",
    "teal-lime": "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg",
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg",
    cyan: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg",
    green: "text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg",
    lime: "text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg",
    pink: "text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg",
    red: "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg",
    teal: "text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg"
  }
}, dr = {
  default: {
    "cyan-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
    "green-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
    "pink-orange": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
    "purple-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    "purple-pink": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
    "red-yellow": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
    "teal-lime": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
  },
  hover: {
    "cyan-blue": "group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white",
    "green-blue": "group-hover:from-green-400 group-hover:to-blue-600 hover:text-white",
    "pink-orange": "group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white",
    "purple-blue": "group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white",
    "purple-pink": "group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white",
    "red-yellow": "group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:hover:text-gray-900",
    "teal-lime": "group-hover:from-teal-300 group-hover:to-lime-300 dark:hover:text-gray-900"
  }
}, qo = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, Ko = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, cr = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, Lt = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], Qo = ["alternative", "light"];
function Yo(e) {
  const t = Hn(), r = k(() => e.square.value ? Ko[e.size.value] : qo[e.size.value]), n = k(() => {
    const i = !!e.gradient.value, a = !!e.color.value, u = e.outline.value;
    let c = "", p = "";
    if (i && u)
      Lt.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (p = dr.default[e.gradient.value], e.disabled.value || (c = dr.hover[e.gradient.value]));
    else if (i)
      p = ur.default[e.gradient.value], e.disabled.value || (c = ur.hover[e.gradient.value]);
    else if (a && u)
      if (Qo.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const v = e.color.value;
        p = lr.default[v], e.disabled.value || (c = lr.hover[v]);
      }
    else {
      const v = e.color.value;
      p = ar.default[v], e.disabled.value || (c = ar.hover[v]);
    }
    let g = "";
    return e.shadow.value === "" ? e.gradient.value && Lt.includes(e.gradient.value) && (g = cr[e.gradient.value]) : typeof e.shadow.value == "string" && Lt.includes(e.shadow.value) && (g = cr[e.shadow.value]), [
      p,
      c,
      g,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      i && u ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((v) => v).join(" ");
  }), o = k(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((i) => i).join(" ") : "");
  return {
    wrapperClasses: n.value,
    spanClasses: o.value
  };
}
function Jo(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = k(() => t[e.size.value]);
  return {
    color: k(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const Zo = {
  key: 0,
  class: "mr-2"
}, Xo = {
  key: 0,
  class: "mr-2"
}, ei = {
  key: 1,
  class: "ml-2"
}, ti = {
  key: 1,
  class: "ml-2"
}, ri = /* @__PURE__ */ K({
  __name: "FwbButton",
  props: {
    class: { default: "" },
    color: { default: "default" },
    gradient: { default: null },
    size: { default: "md" },
    shadow: { default: null },
    pill: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingPosition: { default: "prefix" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "" },
    tag: { default: "a" }
  },
  setup(e) {
    const t = e, r = k(() => Yo(ve(t))), n = k(() => Ot(r.value.wrapperClasses)), o = k(() => Ot(r.value.spanClasses)), i = k(() => t.outline && t.gradient), a = k(() => t.loading && t.loadingPosition === "prefix"), u = k(() => t.loading && t.loadingPosition === "suffix"), { color: c, size: p } = Jo(ve(t)), g = t.tag !== "a" ? ut(t.tag) : "a", v = t.href ? g : "button", m = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (y, S) => (x(), Q(gt(A(v)), Ye({
      class: n.value,
      [A(m) || ""]: y.href,
      disabled: A(v) === "button" && y.disabled
    }), {
      default: Y(() => [
        !i.value && (y.$slots.prefix || a.value) ? (x(), E("div", Zo, [
          a.value ? (x(), Q(rt, {
            key: 0,
            color: A(c),
            size: A(p)
          }, null, 8, ["color", "size"])) : N(y.$slots, "prefix", { key: 1 })
        ])) : W("", !0),
        B("span", {
          class: R(o.value)
        }, [
          i.value && (y.$slots.prefix || a.value) ? (x(), E("span", Xo, [
            a.value ? (x(), Q(rt, {
              key: 0,
              color: A(c),
              size: A(p)
            }, null, 8, ["color", "size"])) : N(y.$slots, "prefix", { key: 1 })
          ])) : W("", !0),
          N(y.$slots, "default"),
          i.value && (y.$slots.suffix || u.value) ? (x(), E("span", ei, [
            u.value ? (x(), Q(rt, {
              key: 0,
              color: A(c),
              size: A(p)
            }, null, 8, ["color", "size"])) : N(y.$slots, "suffix", { key: 1 })
          ])) : W("", !0)
        ], 2),
        !i.value && (y.$slots.suffix || u.value) ? (x(), E("div", ti, [
          u.value ? (x(), Q(rt, {
            key: 0,
            color: A(c),
            size: A(p)
          }, null, 8, ["color", "size"])) : N(y.$slots, "suffix", { key: 1 })
        ])) : W("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
var pr;
const tn = typeof window < "u", ni = (e) => typeof e < "u", oi = (e) => typeof e == "function";
tn && (pr = window == null ? void 0 : window.navigator) != null && pr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ii(e) {
  return typeof e == "function" ? e() : A(e);
}
function si(e) {
  return e;
}
function ai(e) {
  return Wn() ? (qn(e), !0) : !1;
}
function li(e, t, r = {}) {
  const {
    immediate: n = !0
  } = r, o = ee(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), i = null);
  }
  function u() {
    o.value = !1, a();
  }
  function c(...p) {
    a(), o.value = !0, i = setTimeout(() => {
      o.value = !1, i = null, e(...p);
    }, ii(t));
  }
  return n && (o.value = !0, tn && c()), ai(u), {
    isPending: o,
    start: c,
    stop: u
  };
}
function ui(e) {
  return JSON.parse(JSON.stringify(e));
}
const hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fr = "__vueuse_ssr_handlers__";
hr[fr] = hr[fr] || {};
var gr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(gr || (gr = {}));
var di = Object.defineProperty, vr = Object.getOwnPropertySymbols, ci = Object.prototype.hasOwnProperty, pi = Object.prototype.propertyIsEnumerable, mr = (e, t, r) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, hi = (e, t) => {
  for (var r in t || (t = {}))
    ci.call(t, r) && mr(e, r, t[r]);
  if (vr)
    for (var r of vr(t))
      pi.call(t, r) && mr(e, r, t[r]);
  return e;
};
const fi = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
hi({
  linear: si
}, fi);
function rn(e, t, r, n = {}) {
  var o, i, a;
  const {
    clone: u = !1,
    passive: c = !1,
    eventName: p,
    deep: g = !1,
    defaultValue: v
  } = n, m = Vn(), y = r || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((a = (i = m == null ? void 0 : m.proxy) == null ? void 0 : i.$emit) == null ? void 0 : a.bind(m == null ? void 0 : m.proxy));
  let S = p;
  t || (t = "modelValue"), S = p || S || `update:${t.toString()}`;
  const C = (P) => u ? oi(u) ? u(P) : ui(P) : P, L = () => ni(e[t]) ? C(e[t]) : v;
  if (c) {
    const P = L(), I = ee(P);
    return rr(() => e[t], (D) => I.value = C(D)), rr(I, (D) => {
      (D !== e[t] || g) && y(S, D);
    }, { deep: g }), I;
  } else
    return k({
      get() {
        return L();
      },
      set(P) {
        y(S, P);
      }
    });
}
var gi = typeof global == "object" && global && global.Object === Object && global;
const vi = gi;
var mi = typeof self == "object" && self && self.Object === Object && self, bi = vi || mi || Function("return this")();
const Gt = bi;
var yi = Gt.Symbol;
const me = yi;
var nn = Object.prototype, wi = nn.hasOwnProperty, _i = nn.toString, je = me ? me.toStringTag : void 0;
function xi(e) {
  var t = wi.call(e, je), r = e[je];
  try {
    e[je] = void 0;
    var n = !0;
  } catch {
  }
  var o = _i.call(e);
  return n && (t ? e[je] = r : delete e[je]), o;
}
var ki = Object.prototype, Ci = ki.toString;
function Si(e) {
  return Ci.call(e);
}
var $i = "[object Null]", Ti = "[object Undefined]", br = me ? me.toStringTag : void 0;
function Wt(e) {
  return e == null ? e === void 0 ? Ti : $i : br && br in Object(e) ? xi(e) : Si(e);
}
function qt(e) {
  return e != null && typeof e == "object";
}
var Ii = "[object Symbol]";
function Kt(e) {
  return typeof e == "symbol" || qt(e) && Wt(e) == Ii;
}
function Li(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var Pi = Array.isArray;
const Ze = Pi;
var Ai = 1 / 0, yr = me ? me.prototype : void 0, wr = yr ? yr.toString : void 0;
function on(e) {
  if (typeof e == "string")
    return e;
  if (Ze(e))
    return Li(e, on) + "";
  if (Kt(e))
    return wr ? wr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ai ? "-0" : t;
}
function dt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ei(e) {
  return e;
}
var Ni = "[object AsyncFunction]", Di = "[object Function]", Oi = "[object GeneratorFunction]", zi = "[object Proxy]";
function Fi(e) {
  if (!dt(e))
    return !1;
  var t = Wt(e);
  return t == Di || t == Oi || t == Ni || t == zi;
}
var Mi = Gt["__core-js_shared__"];
const Pt = Mi;
var _r = function() {
  var e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bi(e) {
  return !!_r && _r in e;
}
var ji = Function.prototype, Ri = ji.toString;
function Hi(e) {
  if (e != null) {
    try {
      return Ri.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vi = /[\\^$.*+?()[\]{}|]/g, Ui = /^\[object .+?Constructor\]$/, Gi = Function.prototype, Wi = Object.prototype, qi = Gi.toString, Ki = Wi.hasOwnProperty, Qi = RegExp(
  "^" + qi.call(Ki).replace(Vi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yi(e) {
  if (!dt(e) || Bi(e))
    return !1;
  var t = Fi(e) ? Qi : Ui;
  return t.test(Hi(e));
}
function Ji(e, t) {
  return e == null ? void 0 : e[t];
}
function Qt(e, t) {
  var r = Ji(e, t);
  return Yi(r) ? r : void 0;
}
function Zi(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Xi = 800, es = 16, ts = Date.now;
function rs(e) {
  var t = 0, r = 0;
  return function() {
    var n = ts(), o = es - (n - r);
    if (r = n, o > 0) {
      if (++t >= Xi)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ns(e) {
  return function() {
    return e;
  };
}
var os = function() {
  try {
    var e = Qt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ct = os;
var is = ct ? function(e, t) {
  return ct(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ns(t),
    writable: !0
  });
} : Ei;
const ss = is;
var as = rs(ss);
const ls = as;
var us = 9007199254740991, ds = /^(?:0|[1-9]\d*)$/;
function sn(e, t) {
  var r = typeof e;
  return t = t ?? us, !!t && (r == "number" || r != "symbol" && ds.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function cs(e, t, r) {
  t == "__proto__" && ct ? ct(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function an(e, t) {
  return e === t || e !== e && t !== t;
}
var ps = Object.prototype, hs = ps.hasOwnProperty;
function fs(e, t, r) {
  var n = e[t];
  (!(hs.call(e, t) && an(n, r)) || r === void 0 && !(t in e)) && cs(e, t, r);
}
var xr = Math.max;
function gs(e, t, r) {
  return t = xr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, i = xr(n.length - t, 0), a = Array(i); ++o < i; )
      a[o] = n[t + o];
    o = -1;
    for (var u = Array(t + 1); ++o < t; )
      u[o] = n[o];
    return u[t] = r(a), Zi(e, this, u);
  };
}
var vs = 9007199254740991;
function ms(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vs;
}
var bs = "[object Arguments]";
function kr(e) {
  return qt(e) && Wt(e) == bs;
}
var ln = Object.prototype, ys = ln.hasOwnProperty, ws = ln.propertyIsEnumerable, _s = kr(/* @__PURE__ */ function() {
  return arguments;
}()) ? kr : function(e) {
  return qt(e) && ys.call(e, "callee") && !ws.call(e, "callee");
};
const un = _s;
var xs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ks = /^\w*$/;
function Cs(e, t) {
  if (Ze(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Kt(e) ? !0 : ks.test(e) || !xs.test(e) || t != null && e in Object(t);
}
var Ss = Qt(Object, "create");
const We = Ss;
function $s() {
  this.__data__ = We ? We(null) : {}, this.size = 0;
}
function Ts(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Is = "__lodash_hash_undefined__", Ls = Object.prototype, Ps = Ls.hasOwnProperty;
function As(e) {
  var t = this.__data__;
  if (We) {
    var r = t[e];
    return r === Is ? void 0 : r;
  }
  return Ps.call(t, e) ? t[e] : void 0;
}
var Es = Object.prototype, Ns = Es.hasOwnProperty;
function Ds(e) {
  var t = this.__data__;
  return We ? t[e] !== void 0 : Ns.call(t, e);
}
var Os = "__lodash_hash_undefined__";
function zs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = We && t === void 0 ? Os : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = $s;
ke.prototype.delete = Ts;
ke.prototype.get = As;
ke.prototype.has = Ds;
ke.prototype.set = zs;
function Fs() {
  this.__data__ = [], this.size = 0;
}
function bt(e, t) {
  for (var r = e.length; r--; )
    if (an(e[r][0], t))
      return r;
  return -1;
}
var Ms = Array.prototype, Bs = Ms.splice;
function js(e) {
  var t = this.__data__, r = bt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Bs.call(t, r, 1), --this.size, !0;
}
function Rs(e) {
  var t = this.__data__, r = bt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Hs(e) {
  return bt(this.__data__, e) > -1;
}
function Vs(e, t) {
  var r = this.__data__, n = bt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = Fs;
De.prototype.delete = js;
De.prototype.get = Rs;
De.prototype.has = Hs;
De.prototype.set = Vs;
var Us = Qt(Gt, "Map");
const Gs = Us;
function Ws() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (Gs || De)(),
    string: new ke()
  };
}
function qs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function yt(e, t) {
  var r = e.__data__;
  return qs(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ks(e) {
  var t = yt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qs(e) {
  return yt(this, e).get(e);
}
function Ys(e) {
  return yt(this, e).has(e);
}
function Js(e, t) {
  var r = yt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = Ws;
Se.prototype.delete = Ks;
Se.prototype.get = Qs;
Se.prototype.has = Ys;
Se.prototype.set = Js;
var Zs = "Expected a function";
function Yt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zs);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, n);
    return r.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (Yt.Cache || Se)(), r;
}
Yt.Cache = Se;
var Xs = 500;
function ea(e) {
  var t = Yt(e, function(n) {
    return r.size === Xs && r.clear(), n;
  }), r = t.cache;
  return t;
}
var ta = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ra = /\\(\\)?/g, na = ea(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ta, function(r, n, o, i) {
    t.push(o ? i.replace(ra, "$1") : n || r);
  }), t;
});
const oa = na;
function ia(e) {
  return e == null ? "" : on(e);
}
function wt(e, t) {
  return Ze(e) ? e : Cs(e, t) ? [e] : oa(ia(e));
}
var sa = 1 / 0;
function Jt(e) {
  if (typeof e == "string" || Kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -sa ? "-0" : t;
}
function aa(e, t) {
  t = wt(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Jt(t[r++])];
  return r && r == n ? e : void 0;
}
function la(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Cr = me ? me.isConcatSpreadable : void 0;
function ua(e) {
  return Ze(e) || un(e) || !!(Cr && e && e[Cr]);
}
function dn(e, t, r, n, o) {
  var i = -1, a = e.length;
  for (r || (r = ua), o || (o = []); ++i < a; ) {
    var u = e[i];
    t > 0 && r(u) ? t > 1 ? dn(u, t - 1, r, n, o) : la(o, u) : n || (o[o.length] = u);
  }
  return o;
}
function da(e) {
  var t = e == null ? 0 : e.length;
  return t ? dn(e, 1) : [];
}
function ca(e) {
  return ls(gs(e, void 0, da), e + "");
}
function pa(e, t) {
  return e != null && t in Object(e);
}
function ha(e, t, r) {
  t = wt(t, e);
  for (var n = -1, o = t.length, i = !1; ++n < o; ) {
    var a = Jt(t[n]);
    if (!(i = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && ms(o) && sn(a, o) && (Ze(e) || un(e)));
}
function fa(e, t) {
  return e != null && ha(e, t, pa);
}
function ga(e, t, r, n) {
  if (!dt(e))
    return e;
  t = wt(t, e);
  for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
    var c = Jt(t[o]), p = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != a) {
      var g = u[c];
      p = n ? n(g, c, u) : void 0, p === void 0 && (p = dt(g) ? g : sn(t[o + 1]) ? [] : {});
    }
    fs(u, c, p), u = u[c];
  }
  return e;
}
function va(e, t, r) {
  for (var n = -1, o = t.length, i = {}; ++n < o; ) {
    var a = t[n], u = aa(e, a);
    r(u, a) && ga(i, wt(a, e), u);
  }
  return i;
}
function ma(e, t) {
  return va(e, t, function(r, n) {
    return fa(e, n);
  });
}
var ba = ca(function(e, t) {
  return e == null ? {} : ma(e, t);
});
const ya = ba;
function zt(e, t = !0, r = []) {
  return e.forEach((n) => {
    if (n !== null) {
      if (typeof n != "object") {
        (typeof n == "string" || typeof n == "number") && r.push(it(String(n)));
        return;
      }
      if (Array.isArray(n)) {
        zt(n, t, r);
        return;
      }
      if (n.type === Ae) {
        if (n.children === null)
          return;
        Array.isArray(n.children) && zt(n.children, t, r);
      } else
        n.type !== zn && r.push(n);
    }
  }), r;
}
function wa(e, t = "default", r = void 0) {
  const n = e[t];
  if (!n)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = zt(n(r));
  return o.length === 1 ? o[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const _a = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function xa(e, t) {
  Object.entries(_a).forEach(([, r]) => {
    r.forEach((n) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const o = e.props[n], i = t[n];
      o ? e.props[n] = (...a) => {
        o(...a), i(...a);
      } : e.props[n] = i;
    });
  });
}
K({
  name: "SlotListener",
  props: {
    trigger: {
      type: String,
      default: "click"
    }
  },
  emits: ["click", "focus", "blur", "mouseenter", "mouseleave"],
  setup(e, { emit: t }) {
    return {
      handleClick: (r) => {
        t("click", r);
      },
      handleBlur: (r) => {
        t("blur", r);
      },
      handleFocus: (r) => {
        t("focus", r);
      },
      handleMouseLeave: (r) => {
        t("mouseleave", r);
      },
      handleMouseEnter: (r) => {
        t("mouseenter", r);
      }
    };
  },
  render() {
    const {
      $slots: e
    } = this, t = {
      onClick: this.handleClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }, r = wa(e, "default"), n = [
      t
    ];
    return r != null && r.props && n.push(
      ya(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && xa(
      r,
      {
        onBlur: (o) => {
          n.forEach((i) => {
            var a;
            (a = i == null ? void 0 : i.onBlur) == null || a.call(i, o);
          });
        },
        onFocus: (o) => {
          n.forEach((i) => {
            var a;
            (a = i == null ? void 0 : i.onFocus) == null || a.call(i, o);
          });
        },
        onClick: (o) => {
          n.forEach((i) => {
            var a;
            (a = i == null ? void 0 : i.onClick) == null || a.call(i, o);
          });
        },
        onMouseenter: (o) => {
          n.forEach((i) => {
            var a;
            (a = i == null ? void 0 : i.onMouseenter) == null || a.call(i, o);
          });
        },
        onMouseleave: (o) => {
          n.forEach((i) => {
            var a;
            (a = i == null ? void 0 : i.onMouseleave) == null || a.call(i, o);
          });
        }
      }
    ), r;
  }
});
(/* @__PURE__ */ new Date()).getFullYear();
const ka = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, Ca = (e, t = ka) => {
  const r = Object.keys(t).find((n) => e.includes(n));
  return r ? t[r](e) : e.substring(0, e.indexOf("-"));
};
function st(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const n = Array.isArray(r) ? Array.from(r).map((p) => p.split(" ")).flat() : r.split(" "), o = n.map((p) => Ca(p)), i = o.filter((p) => !t.types.includes(p)), a = [...o.filter((p) => t.types.includes(p)), ...i], u = [.../* @__PURE__ */ new Set([...t.types, ...a])], c = u.map((p) => {
      if (a.includes(p)) {
        const v = o.indexOf(p);
        if (v >= 0)
          return n[v] || "";
      }
      const g = t.types.indexOf(p);
      return g >= 0 && t.classes[g] || "";
    }).filter((p) => !!p);
    return {
      types: u,
      classes: c
    };
  }, { types: [], classes: [] }).classes.join(" ");
}
const Sa = "flowbite-themable-injection-key", Ie = {
  blue: {
    background: "bg-blue-700 dark:bg-blue-600",
    disabled: "",
    hover: "hover:bg-blue-800 dark:hover:bg-blue-700",
    text: "text-blue-600 dark:text-blue-500",
    border: "border-blue-600 dark:border-blue-500",
    focus: "focus:ring-blue-300 dark:focus:ring-blue-800"
  },
  green: {
    background: "bg-green-700 dark:bg-green-600",
    disabled: "",
    hover: "hover:bg-green-800 dark:hover:bg-green-700",
    text: "text-green-600 dark:text-green-500",
    border: "border-green-600 dark:border-green-500",
    focus: "focus:ring-green-300 dark:focus:ring-green-800"
  },
  pink: {
    background: "bg-pink-700 dark:bg-pink-600",
    disabled: "",
    hover: "hover:bg-pink-800 dark:hover:bg-pink-700",
    text: "text-pink-600 dark:text-pink-500",
    border: "border-pink-600 dark:border-pink-500",
    focus: "focus:ring-pink-300 dark:focus:ring-pink-900"
  },
  purple: {
    background: "bg-purple-700 dark:bg-purple-600",
    disabled: "",
    hover: "hover:bg-purple-800 dark:hover:bg-purple-700",
    text: "text-purple-600 dark:text-purple-500",
    border: "border-purple-600 dark:border-purple-500",
    focus: "focus:ring-purple-300 dark:focus:ring-purple-900"
  },
  red: {
    background: "bg-red-700 dark:bg-red-600",
    disabled: "",
    hover: "hover:bg-red-800 dark:hover:bg-red-700",
    text: "text-red-600 dark:text-red-500",
    border: "border-red-600 dark:border-red-500",
    focus: "focus:ring-red-300 dark:focus:ring-red-900"
  }
};
function $a(e) {
  const t = Kn(Sa, ee(null)), r = k(() => e || t.value), n = k(() => !!(t != null && t.value)), o = k(
    () => r.value ? Ie[r.value].background : ""
  ), i = k(
    () => r.value ? Ie[r.value].border : ""
  ), a = k(() => (t == null ? void 0 : t.value) || void 0), u = k(
    () => r.value ? Ie[r.value].disabled : ""
  ), c = k(
    () => r.value ? Ie[r.value].focus : ""
  ), p = k(
    () => r.value ? Ie[r.value].hover : ""
  ), g = k(
    () => r.value ? Ie[r.value].text : ""
  );
  return {
    backgroundClasses: o,
    borderClasses: i,
    color: a,
    disabledClasses: u,
    focusClasses: c,
    hoverClasses: p,
    isActive: n,
    textClasses: g
  };
}
const Ta = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, Ia = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, Sr = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", $r = "text-sm font-normal";
function La(e) {
  const t = k(() => Ta[e.type.value]), r = k(() => {
    const o = Ia[e.alignment.value];
    return e.divide.value ? st(Sr, "dark:divide-gray-700 divide-x divide-gray-200", o) : st(Sr, o);
  }), n = k(() => e.type.value !== "empty" && e.divide.value ? st($r, "pl-3") : $r);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: n
  };
}
function Pa(e) {
  var c;
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: n,
    focusClasses: o,
    hoverClasses: i,
    isActive: a,
    textClasses: u
  } = $a((c = e.theme) == null ? void 0 : c.value);
  return {
    classes: k(() => {
      if (!a.value)
        return "";
      const p = [];
      return e.apply.value.includes("text") && p.push(u.value), e.apply.value.includes("border") && p.push(r.value), e.apply.value.includes("background") && p.push(t.value), e.apply.value.includes("hover") && p.push(i.value), e.apply.value.includes("disabled") && p.push(n.value), e.apply.value.includes("focus") && p.push(o.value), p.join(" ");
    })
  };
}
const Aa = /* @__PURE__ */ K({
  __name: "FlowbiteThemableChild",
  props: {
    apply: {
      type: Array,
      required: !0
    },
    tag: {
      type: String,
      default: "div"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const t = e, r = Ht(), { classes: n } = Pa(ve(t)), o = k(() => r.class || "");
    return (i, a) => (x(), Q(gt(e.tag), {
      class: R(A(st)(o.value, A(n)))
    }, {
      default: Y(() => [
        N(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ea = {
  key: 1,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Na = /* @__PURE__ */ B("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), Da = [
  Na
], Oa = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, za = /* @__PURE__ */ B("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), Fa = [
  za
], Ma = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ba = /* @__PURE__ */ B("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), ja = [
  Ba
], Ra = /* @__PURE__ */ B("span", { class: "sr-only" }, "Close", -1), Ha = /* @__PURE__ */ B("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ B("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), Va = [
  Ra,
  Ha
], Tr = /* @__PURE__ */ K({
  __name: "FwbToast",
  props: {
    type: {
      type: String,
      default: "empty"
    },
    alignment: {
      type: String,
      default: "center"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    divide: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = ee(!0), {
      typeClasses: o,
      wrapperClasses: i,
      contentClasses: a
    } = La(ve(r)), u = () => {
      t("close"), n.value = !1;
    };
    return (c, p) => n.value ? (x(), E("div", {
      key: 0,
      id: "toast-default",
      class: R(A(i)),
      role: "alert"
    }, [
      e.type !== "empty" || c.$slots.icon ? (x(), Q(Aa, {
        key: 0,
        apply: ["background", "text"],
        class: R(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", A(o)])
      }, {
        default: Y(() => [
          c.$slots.icon ? N(c.$slots, "icon", {
            key: 0,
            class: R({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (x(), E("svg", Ea, Da)) : e.type === "danger" ? (x(), E("svg", Oa, Fa)) : e.type === "warning" ? (x(), E("svg", Ma, ja)) : W("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : W("", !0),
      B("div", {
        class: R([A(a), { "ml-3": c.$slots.icon || e.type !== "empty" }])
      }, [
        N(c.$slots, "default")
      ], 2),
      e.closable ? (x(), E("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: u
      }, Va)) : W("", !0)
    ], 2)) : W("", !0);
  }
}), Ua = "flowbite-toast-injection-key";
K({
  components: {
    FwbToast: Tr
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = ee([]), t = (i, a) => {
      li(() => o(i), a);
    }, r = (i) => {
      const a = parseInt(((/* @__PURE__ */ new Date()).getTime() * Math.random()).toString()).toString();
      return e.value.push({
        id: a,
        ...i
      }), i.time > 0 && t(a, i.time), a;
    }, n = () => {
      if (e.value.length === 0)
        return "";
      const i = e.value[e.value.length - 1].id;
      return e.value.pop(), i;
    }, o = (i) => {
      const a = e.value.findIndex((u) => u.id === i);
      return a >= 0 && e.value.splice(a, 1), a >= 0;
    };
    return An(Ua, {
      add: r,
      pop: n,
      remove: o
    }), {
      toasts: e,
      removeToast: o
    };
  },
  render() {
    const { $props: e, $slots: t, toasts: r, removeToast: n } = this;
    return et("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      et(
        En,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (o) => o.component ? et(
              o.component,
              {
                key: o.id,
                onClose: () => n(o.id),
                ...o.componentProps ? o.componentProps : {}
              },
              () => o.text
            ) : et(
              Tr,
              {
                closable: !0,
                type: o.type,
                key: o.id,
                onClose: () => n(o.id)
              },
              () => o.text
            )
          )
        }
      )
    ]);
  }
});
function oe(e) {
  return e.split("-")[1];
}
function Zt(e) {
  return e === "y" ? "height" : "width";
}
function se(e) {
  return e.split("-")[0];
}
function Oe(e) {
  return ["top", "bottom"].includes(se(e)) ? "x" : "y";
}
function Ir(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = n.x + n.width / 2 - o.width / 2, a = n.y + n.height / 2 - o.height / 2, u = Oe(t), c = Zt(u), p = n[c] / 2 - o[c] / 2, g = u === "x";
  let v;
  switch (se(t)) {
    case "top":
      v = { x: i, y: n.y - o.height };
      break;
    case "bottom":
      v = { x: i, y: n.y + n.height };
      break;
    case "right":
      v = { x: n.x + n.width, y: a };
      break;
    case "left":
      v = { x: n.x - o.width, y: a };
      break;
    default:
      v = { x: n.x, y: n.y };
  }
  switch (oe(t)) {
    case "start":
      v[u] -= p * (r && g ? -1 : 1);
      break;
    case "end":
      v[u] += p * (r && g ? -1 : 1);
  }
  return v;
}
const Ga = async (e, t, r) => {
  const { placement: n = "bottom", strategy: o = "absolute", middleware: i = [], platform: a } = r, u = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let p = await a.getElementRects({ reference: e, floating: t, strategy: o }), { x: g, y: v } = Ir(p, n, c), m = n, y = {}, S = 0;
  for (let C = 0; C < u.length; C++) {
    const { name: L, fn: P } = u[C], { x: I, y: D, data: V, reset: U } = await P({ x: g, y: v, initialPlacement: n, placement: m, strategy: o, middlewareData: y, rects: p, platform: a, elements: { reference: e, floating: t } });
    g = I ?? g, v = D ?? v, y = { ...y, [L]: { ...y[L], ...V } }, U && S <= 50 && (S++, typeof U == "object" && (U.placement && (m = U.placement), U.rects && (p = U.rects === !0 ? await a.getElementRects({ reference: e, floating: t, strategy: o }) : U.rects), { x: g, y: v } = Ir(p, m, c)), C = -1);
  }
  return { x: g, y: v, placement: m, strategy: o, middlewareData: y };
};
function $e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cn(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Re(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function _t(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: a, elements: u, strategy: c } = e, { boundary: p = "clippingAncestors", rootBoundary: g = "viewport", elementContext: v = "floating", altBoundary: m = !1, padding: y = 0 } = $e(t, e), S = cn(y), C = u[m ? v === "floating" ? "reference" : "floating" : v], L = Re(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(C))) == null || r ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)), boundary: p, rootBoundary: g, strategy: c })), P = v === "floating" ? { ...a.floating, x: n, y: o } : a.reference, I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)), D = await (i.isElement == null ? void 0 : i.isElement(I)) && await (i.getScale == null ? void 0 : i.getScale(I)) || { x: 1, y: 1 }, V = Re(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: P, offsetParent: I, strategy: c }) : P);
  return { top: (L.top - V.top + S.top) / D.y, bottom: (V.bottom - L.bottom + S.bottom) / D.y, left: (L.left - V.left + S.left) / D.x, right: (V.right - L.right + S.right) / D.x };
}
const qe = Math.min, we = Math.max;
function Ft(e, t, r) {
  return we(e, qe(t, r));
}
const Wa = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: n, placement: o, rects: i, platform: a, elements: u } = t, { element: c, padding: p = 0 } = $e(e, t) || {};
  if (c == null)
    return {};
  const g = cn(p), v = { x: r, y: n }, m = Oe(o), y = Zt(m), S = await a.getDimensions(c), C = m === "y", L = C ? "top" : "left", P = C ? "bottom" : "right", I = C ? "clientHeight" : "clientWidth", D = i.reference[y] + i.reference[m] - v[m] - i.floating[y], V = v[m] - i.reference[m], U = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
  let M = U ? U[I] : 0;
  M && await (a.isElement == null ? void 0 : a.isElement(U)) || (M = u.floating[I] || i.floating[y]);
  const J = D / 2 - V / 2, Z = M / 2 - S[y] / 2 - 1, w = qe(g[L], Z), h = qe(g[P], Z), s = w, l = M - S[y] - h, d = M / 2 - S[y] / 2 + J, f = Ft(s, d, l), b = oe(o) != null && d != f && i.reference[y] / 2 - (d < s ? w : h) - S[y] / 2 < 0 ? d < s ? s - d : l - d : 0;
  return { [m]: v[m] - b, data: { [m]: f, centerOffset: d - f + b } };
} }), qa = ["top", "right", "bottom", "left"], Lr = qa.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), Ka = { left: "right", right: "left", bottom: "top", top: "bottom" };
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ka[t]);
}
function pn(e, t, r) {
  r === void 0 && (r = !1);
  const n = oe(e), o = Oe(e), i = Zt(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = pt(a)), { main: a, cross: pt(a) };
}
const Qa = { start: "end", end: "start" };
function at(e) {
  return e.replace(/start|end/g, (t) => Qa[t]);
}
const Ya = function(e) {
  return e === void 0 && (e = {}), { name: "autoPlacement", options: e, async fn(t) {
    var r, n, o;
    const { rects: i, middlewareData: a, placement: u, platform: c, elements: p } = t, { crossAxis: g = !1, alignment: v, allowedPlacements: m = Lr, autoAlignment: y = !0, ...S } = $e(e, t), C = v !== void 0 || m === Lr ? function(h, s, l) {
      return (h ? [...l.filter((d) => oe(d) === h), ...l.filter((d) => oe(d) !== h)] : l.filter((d) => se(d) === d)).filter((d) => !h || oe(d) === h || !!s && at(d) !== d);
    }(v || null, y, m) : m, L = await _t(t, S), P = ((r = a.autoPlacement) == null ? void 0 : r.index) || 0, I = C[P];
    if (I == null)
      return {};
    const { main: D, cross: V } = pn(I, i, await (c.isRTL == null ? void 0 : c.isRTL(p.floating)));
    if (u !== I)
      return { reset: { placement: C[0] } };
    const U = [L[se(I)], L[D], L[V]], M = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], { placement: I, overflows: U }], J = C[P + 1];
    if (J)
      return { data: { index: P + 1, overflows: M }, reset: { placement: J } };
    const Z = M.map((h) => {
      const s = oe(h.placement);
      return [h.placement, s && g ? h.overflows.slice(0, 2).reduce((l, d) => l + d, 0) : h.overflows[0], h.overflows];
    }).sort((h, s) => h[1] - s[1]), w = ((o = Z.filter((h) => h[2].slice(0, oe(h[0]) ? 2 : 3).every((s) => s <= 0))[0]) == null ? void 0 : o[0]) || Z[0][0];
    return w !== u ? { data: { index: P + 1, overflows: M }, reset: { placement: w } } : {};
  } };
}, Ja = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: o, rects: i, initialPlacement: a, platform: u, elements: c } = t, { mainAxis: p = !0, crossAxis: g = !0, fallbackPlacements: v, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: S = !0, ...C } = $e(e, t), L = se(n), P = se(a) === a, I = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), D = v || (P || !S ? [pt(a)] : function(s) {
      const l = pt(s);
      return [at(s), l, at(l)];
    }(a));
    v || y === "none" || D.push(...function(s, l, d, f) {
      const b = oe(s);
      let _ = function($, T, z) {
        const q = ["left", "right"], j = ["right", "left"], H = ["top", "bottom"], ue = ["bottom", "top"];
        switch ($) {
          case "top":
          case "bottom":
            return z ? T ? j : q : T ? q : j;
          case "left":
          case "right":
            return T ? H : ue;
          default:
            return [];
        }
      }(se(s), d === "start", f);
      return b && (_ = _.map(($) => $ + "-" + b), l && (_ = _.concat(_.map(at)))), _;
    }(a, S, y, I));
    const V = [a, ...D], U = await _t(t, C), M = [];
    let J = ((r = o.flip) == null ? void 0 : r.overflows) || [];
    if (p && M.push(U[L]), g) {
      const { main: s, cross: l } = pn(n, i, I);
      M.push(U[s], U[l]);
    }
    if (J = [...J, { placement: n, overflows: M }], !M.every((s) => s <= 0)) {
      var Z, w;
      const s = (((Z = o.flip) == null ? void 0 : Z.index) || 0) + 1, l = V[s];
      if (l)
        return { data: { index: s, overflows: J }, reset: { placement: l } };
      let d = (w = J.filter((f) => f.overflows[0] <= 0).sort((f, b) => f.overflows[1] - b.overflows[1])[0]) == null ? void 0 : w.placement;
      if (!d)
        switch (m) {
          case "bestFit": {
            var h;
            const f = (h = J.map((b) => [b.placement, b.overflows.filter((_) => _ > 0).reduce((_, $) => _ + $, 0)]).sort((b, _) => b[1] - _[1])[0]) == null ? void 0 : h[0];
            f && (d = f);
            break;
          }
          case "initialPlacement":
            d = a;
        }
      if (n !== d)
        return { reset: { placement: d } };
    }
    return {};
  } };
}, Za = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, o = await async function(i, a) {
      const { placement: u, platform: c, elements: p } = i, g = await (c.isRTL == null ? void 0 : c.isRTL(p.floating)), v = se(u), m = oe(u), y = Oe(u) === "x", S = ["left", "top"].includes(v) ? -1 : 1, C = g && y ? -1 : 1, L = $e(a, i);
      let { mainAxis: P, crossAxis: I, alignmentAxis: D } = typeof L == "number" ? { mainAxis: L, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...L };
      return m && typeof D == "number" && (I = m === "end" ? -1 * D : D), y ? { x: I * C, y: P * S } : { x: P * S, y: I * C };
    }(t, e);
    return { x: r + o.x, y: n + o.y, data: o };
  } };
};
function Xa(e) {
  return e === "x" ? "y" : "x";
}
const el = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: o } = t, { mainAxis: i = !0, crossAxis: a = !1, limiter: u = { fn: (L) => {
      let { x: P, y: I } = L;
      return { x: P, y: I };
    } }, ...c } = $e(e, t), p = { x: r, y: n }, g = await _t(t, c), v = Oe(se(o)), m = Xa(v);
    let y = p[v], S = p[m];
    if (i) {
      const L = v === "y" ? "bottom" : "right";
      y = Ft(y + g[v === "y" ? "top" : "left"], y, y - g[L]);
    }
    if (a) {
      const L = m === "y" ? "bottom" : "right";
      S = Ft(S + g[m === "y" ? "top" : "left"], S, S - g[L]);
    }
    const C = u.fn({ ...t, [v]: y, [m]: S });
    return { ...C, data: { x: C.x - r, y: C.y - n } };
  } };
}, tl = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: r, rects: n, platform: o, elements: i } = t, { apply: a = () => {
    }, ...u } = $e(e, t), c = await _t(t, u), p = se(r), g = oe(r), v = Oe(r) === "x", { width: m, height: y } = n.floating;
    let S, C;
    p === "top" || p === "bottom" ? (S = p, C = g === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, S = g === "end" ? "top" : "bottom");
    const L = y - c[S], P = m - c[C], I = !t.middlewareData.shift;
    let D = L, V = P;
    if (v) {
      const M = m - c.left - c.right;
      V = g || I ? qe(P, M) : M;
    } else {
      const M = y - c.top - c.bottom;
      D = g || I ? qe(L, M) : M;
    }
    if (I && !g) {
      const M = we(c.left, 0), J = we(c.right, 0), Z = we(c.top, 0), w = we(c.bottom, 0);
      v ? V = m - 2 * (M !== 0 || J !== 0 ? M + J : we(c.left, c.right)) : D = y - 2 * (Z !== 0 || w !== 0 ? Z + w : we(c.top, c.bottom));
    }
    await a({ ...t, availableWidth: V, availableHeight: D });
    const U = await o.getDimensions(i.floating);
    return m !== U.width || y !== U.height ? { reset: { rects: !0 } } : {};
  } };
};
function re(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  return re(e).getComputedStyle(e);
}
const Pr = Math.min, He = Math.max, ht = Math.round;
function hn(e) {
  const t = ae(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const o = e.offsetWidth, i = e.offsetHeight, a = ht(r) !== o || ht(n) !== i;
  return a && (r = o, n = i), { width: r, height: n, fallback: a };
}
function be(e) {
  return gn(e) ? (e.nodeName || "").toLowerCase() : "";
}
let nt;
function fn() {
  if (nt)
    return nt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (nt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), nt) : navigator.userAgent;
}
function le(e) {
  return e instanceof re(e).HTMLElement;
}
function fe(e) {
  return e instanceof re(e).Element;
}
function gn(e) {
  return e instanceof re(e).Node;
}
function Ar(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof re(e).ShadowRoot || e instanceof ShadowRoot;
}
function xt(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function rl(e) {
  return ["table", "td", "th"].includes(be(e));
}
function Mt(e) {
  const t = /firefox/i.test(fn()), r = ae(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((o) => r.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const i = r.contain;
    return i != null && i.includes(o);
  });
}
function vn() {
  return !/^((?!chrome|android).)*safari/i.test(fn());
}
function Xt(e) {
  return ["html", "body", "#document"].includes(be(e));
}
function mn(e) {
  return fe(e) ? e : e.contextElement;
}
const bn = { x: 1, y: 1 };
function Pe(e) {
  const t = mn(e);
  if (!le(t))
    return bn;
  const r = t.getBoundingClientRect(), { width: n, height: o, fallback: i } = hn(t);
  let a = (i ? ht(r.width) : r.width) / n, u = (i ? ht(r.height) : r.height) / o;
  return a && Number.isFinite(a) || (a = 1), u && Number.isFinite(u) || (u = 1), { x: a, y: u };
}
function Ke(e, t, r, n) {
  var o, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), u = mn(e);
  let c = bn;
  t && (n ? fe(n) && (c = Pe(n)) : c = Pe(e));
  const p = u ? re(u) : window, g = !vn() && r;
  let v = (a.left + (g && ((o = p.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, m = (a.top + (g && ((i = p.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / c.y, y = a.width / c.x, S = a.height / c.y;
  if (u) {
    const C = re(u), L = n && fe(n) ? re(n) : n;
    let P = C.frameElement;
    for (; P && n && L !== C; ) {
      const I = Pe(P), D = P.getBoundingClientRect(), V = getComputedStyle(P);
      D.x += (P.clientLeft + parseFloat(V.paddingLeft)) * I.x, D.y += (P.clientTop + parseFloat(V.paddingTop)) * I.y, v *= I.x, m *= I.y, y *= I.x, S *= I.y, v += D.x, m += D.y, P = re(P).frameElement;
    }
  }
  return { width: y, height: S, top: m, right: v + y, bottom: m + S, left: v, x: v, y: m };
}
function ge(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function kt(e) {
  return fe(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function yn(e) {
  return Ke(ge(e)).left + kt(e).scrollLeft;
}
function Qe(e) {
  if (be(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ar(e) && e.host || ge(e);
  return Ar(t) ? t.host : t;
}
function wn(e) {
  const t = Qe(e);
  return Xt(t) ? t.ownerDocument.body : le(t) && xt(t) ? t : wn(t);
}
function ft(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = wn(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = re(n);
  return o ? t.concat(i, i.visualViewport || [], xt(n) ? n : []) : t.concat(n, ft(n));
}
function Er(e, t, r) {
  return t === "viewport" ? Re(function(n, o) {
    const i = re(n), a = ge(n), u = i.visualViewport;
    let c = a.clientWidth, p = a.clientHeight, g = 0, v = 0;
    if (u) {
      c = u.width, p = u.height;
      const m = vn();
      (m || !m && o === "fixed") && (g = u.offsetLeft, v = u.offsetTop);
    }
    return { width: c, height: p, x: g, y: v };
  }(e, r)) : fe(t) ? Re(function(n, o) {
    const i = Ke(n, !0, o === "fixed"), a = i.top + n.clientTop, u = i.left + n.clientLeft, c = le(n) ? Pe(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: u * c.x, y: a * c.y };
  }(t, r)) : Re(function(n) {
    const o = ge(n), i = kt(n), a = n.ownerDocument.body, u = He(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), c = He(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let p = -i.scrollLeft + yn(n);
    const g = -i.scrollTop;
    return ae(a).direction === "rtl" && (p += He(o.clientWidth, a.clientWidth) - u), { width: u, height: c, x: p, y: g };
  }(ge(e)));
}
function Nr(e) {
  return le(e) && ae(e).position !== "fixed" ? e.offsetParent : null;
}
function Dr(e) {
  const t = re(e);
  let r = Nr(e);
  for (; r && rl(r) && ae(r).position === "static"; )
    r = Nr(r);
  return r && (be(r) === "html" || be(r) === "body" && ae(r).position === "static" && !Mt(r)) ? t : r || function(n) {
    let o = Qe(n);
    for (; le(o) && !Xt(o); ) {
      if (Mt(o))
        return o;
      o = Qe(o);
    }
    return null;
  }(e) || t;
}
function nl(e, t, r) {
  const n = le(t), o = ge(t), i = Ke(e, !0, r === "fixed", t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((be(t) !== "body" || xt(o)) && (a = kt(t)), le(t)) {
      const c = Ke(t, !0);
      u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop;
    } else
      o && (u.x = yn(o));
  return { x: i.left + a.scrollLeft - u.x, y: i.top + a.scrollTop - u.y, width: i.width, height: i.height };
}
const ol = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const i = r === "clippingAncestors" ? function(p, g) {
    const v = g.get(p);
    if (v)
      return v;
    let m = ft(p).filter((L) => fe(L) && be(L) !== "body"), y = null;
    const S = ae(p).position === "fixed";
    let C = S ? Qe(p) : p;
    for (; fe(C) && !Xt(C); ) {
      const L = ae(C), P = Mt(C);
      (S ? P || y : P || L.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = L : m = m.filter((I) => I !== C), C = Qe(C);
    }
    return g.set(p, m), m;
  }(t, this._c) : [].concat(r), a = [...i, n], u = a[0], c = a.reduce((p, g) => {
    const v = Er(t, g, o);
    return p.top = He(v.top, p.top), p.right = Pr(v.right, p.right), p.bottom = Pr(v.bottom, p.bottom), p.left = He(v.left, p.left), p;
  }, Er(t, u, o));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const o = le(r), i = ge(r);
  if (r === i)
    return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((o || !o && n !== "fixed") && ((be(r) !== "body" || xt(i)) && (a = kt(r)), le(r))) {
    const p = Ke(r);
    u = Pe(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - a.scrollLeft * u.x + c.x, y: t.y * u.y - a.scrollTop * u.y + c.y };
}, isElement: fe, getDimensions: function(e) {
  return le(e) ? hn(e) : e.getBoundingClientRect();
}, getOffsetParent: Dr, getDocumentElement: ge, getScale: Pe, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const o = this.getOffsetParent || Dr, i = this.getDimensions;
  return { reference: nl(t, await o(r), n), floating: { x: 0, y: 0, ...await i(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ae(e).direction === "rtl" }, il = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = { platform: ol, ...r }, i = { ...o.platform, _c: n };
  return Ga(e, t, { ...o, platform: i });
}, xe = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5e3,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Bt(e, t) {
  let r = xe.themes[e] || {}, n;
  do
    n = r[t], typeof n > "u" ? r.$extend ? r = xe.themes[r.$extend] || {} : (r = null, n = xe[t]) : r = null;
  while (r);
  return n;
}
function sl(e) {
  const t = [e];
  let r = xe.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = xe.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((n) => `v-popper--theme-${n}`);
}
function Or(e) {
  const t = [e];
  let r = xe.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = xe.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let Ee = !1;
if (typeof window < "u") {
  Ee = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Ee = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let _n = !1;
typeof window < "u" && typeof navigator < "u" && (_n = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const al = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), zr = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Fr = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Mr(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function At() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const ie = [];
let ye = null;
const Br = {};
function jr(e) {
  let t = Br[e];
  return t || (t = Br[e] = []), t;
}
let jt = function() {
};
typeof window < "u" && (jt = window.Element);
function F(e) {
  return function(t) {
    return Bt(t.theme, e);
  };
}
const Et = "__floating-vue__popper", xn = () => K({
  name: "VPopper",
  provide() {
    return {
      [Et]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Et]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: F("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: F("positioningDisabled")
    },
    placement: {
      type: String,
      default: F("placement"),
      validator: (e) => al.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: F("delay")
    },
    distance: {
      type: [Number, String],
      default: F("distance")
    },
    skidding: {
      type: [Number, String],
      default: F("skidding")
    },
    triggers: {
      type: Array,
      default: F("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: F("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: F("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: F("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: F("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: F("popperHideTriggers")
    },
    container: {
      type: [String, Object, jt, Boolean],
      default: F("container")
    },
    boundary: {
      type: [String, jt],
      default: F("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: F("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: F("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: F("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: F("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: F("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: F("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: F("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: F("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: F("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: F("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: F("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: F("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: F("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: F("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: F("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: F("flip")
    },
    shift: {
      type: Boolean,
      default: F("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: F("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: F("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: F("disposeTimeout")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Et]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    ...[
      "triggers",
      "positioningDisabled"
    ].reduce((e, t) => (e[t] = "$_refreshListeners", e), {}),
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: r = !1 } = {}) {
      var n, o;
      (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (r || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var r;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((r = this.parentPopper) == null ? void 0 : r.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(Za({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Ya({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(el({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Ja({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Wa({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: o, middlewareData: i }) => {
          let a;
          const { centerOffset: u } = i.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? a = Math.abs(u) > o.reference.width / 2 : a = Math.abs(u) > o.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: o, placement: i, middlewareData: a }) => {
            var u;
            if ((u = a.autoSize) != null && u.skip)
              return {};
            let c, p;
            return i.startsWith("top") || i.startsWith("bottom") ? c = o.reference.width : p = o.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = c != null ? `${c}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = p != null ? `${p}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(tl({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: o }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null;
        }
      })));
      const r = await il(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: {
          ...r.middlewareData.arrow,
          ...r.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ye && this.instantMove && ye.instantMove && ye !== this.parentPopper) {
        ye.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ye = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await At(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...ft(this.$_referenceNode),
        ...ft(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), r = this.$_popperNode.querySelector(".v-popper__wrapper"), n = r.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (n.left + r.offsetLeft), i = t.y + t.height / 2 - (n.top + r.offsetTop);
        this.result.transformOrigin = `${o}px ${i}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let r = 0; r < ie.length; r++)
          t = ie[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      ie.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Or(this.theme))
        jr(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await At(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Mr(ie, this), ie.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of Or(this.theme)) {
        const n = jr(r);
        Mr(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      ye === this && (ye = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await At(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (r) => {
        this.isShown && !this.$_hideInProgress || (r.usedByTooltip = !0, !this.$_preventShow && this.show({ event: r }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, zr, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], zr, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Fr, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Fr, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((n) => n.addEventListener(t, r, Ee ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, r, n, o) {
      let i = r;
      n != null && (i = typeof n == "function" ? n(i) : n), i.forEach((a) => {
        const u = t[a];
        u && this.$_registerEventListeners(e, u, o);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((r) => {
        const { targetNodes: n, eventType: o, handler: i } = r;
        !e || e === o ? n.forEach((a) => a.removeEventListener(o, i)) : t.push(r);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const r of this.$_targetNodes) {
        const n = r.getAttribute(e);
        n && (r.removeAttribute(e), r.setAttribute(t, n));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const r in e) {
          const n = e[r];
          n == null ? t.removeAttribute(r) : t.setAttribute(r, n);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.$_pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (Ve >= e.left && Ve <= e.right && Ue >= e.top && Ue <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = Ve - ce, n = Ue - pe, o = t.left + t.width / 2 - ce + (t.top + t.height / 2) - pe + t.width + t.height, i = ce + r * o, a = pe + n * o;
        return ot(ce, pe, i, a, t.left, t.top, t.left, t.bottom) || // Left edge
        ot(ce, pe, i, a, t.left, t.top, t.right, t.top) || // Top edge
        ot(ce, pe, i, a, t.right, t.top, t.right, t.bottom) || // Right edge
        ot(ce, pe, i, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (_n ? (document.addEventListener("touchstart", Rr, Ee ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", ul, Ee ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Rr, !0), window.addEventListener("click", ll, !0)), window.addEventListener("resize", pl));
function Rr(e) {
  for (let t = 0; t < ie.length; t++) {
    const r = ie[t];
    try {
      const n = r.popperNode();
      r.$_mouseDownContains = n.contains(e.target);
    } catch {
    }
  }
}
function ll(e) {
  kn(e);
}
function ul(e) {
  kn(e, !0);
}
function kn(e, t = !1) {
  const r = {};
  for (let n = ie.length - 1; n >= 0; n--) {
    const o = ie[n];
    try {
      const i = o.$_containsGlobalTarget = dl(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !r[o.randomId] && Hr(o, i, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let u = o.parentPopper;
            for (; u; )
              r[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let a = o.parentPopper;
          for (; a && Hr(a, a.$_containsGlobalTarget, e); )
            a.$_handleGlobalClose(e, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function dl(e, t) {
  const r = e.popperNode();
  return e.$_mouseDownContains || r.contains(t.target);
}
function Hr(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || cl(e, r) && !t;
}
function cl(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function pl(e) {
  for (let t = 0; t < ie.length; t++)
    ie[t].$_computePosition(e);
}
let ce = 0, pe = 0, Ve = 0, Ue = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ce = Ve, pe = Ue, Ve = e.clientX, Ue = e.clientY;
}, Ee ? {
  passive: !0
} : void 0);
function ot(e, t, r, n, o, i, a, u) {
  const c = ((a - o) * (t - i) - (u - i) * (e - o)) / ((u - i) * (r - e) - (a - o) * (n - t)), p = ((r - e) * (t - i) - (n - t) * (e - o)) / ((u - i) * (r - e) - (a - o) * (n - t));
  return c >= 0 && c <= 1 && p >= 0 && p <= 1;
}
const hl = {
  extends: xn()
}, er = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function fl(e, t, r, n, o, i) {
  return x(), E("div", {
    ref: "reference",
    class: R(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    N(e.$slots, "default", Ye(mt(e.slotData)))
  ], 2);
}
const gl = /* @__PURE__ */ er(hl, [["render", fl]]);
function vl() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let lt;
function Rt() {
  Rt.init || (Rt.init = !0, lt = vl() !== -1);
}
var Ct = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Rt(), On(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", lt && this.$el.appendChild(e), e.data = "about:blank", lt || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!lt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const ml = /* @__PURE__ */ Un("data-v-b329ee4c");
Nn("data-v-b329ee4c");
const bl = {
  class: "resize-observer",
  tabindex: "-1"
};
Dn();
const yl = /* @__PURE__ */ ml((e, t, r, n, o, i) => (x(), Q("div", bl)));
Ct.render = yl;
Ct.__scopeId = "data-v-b329ee4c";
Ct.__file = "src/components/ResizeObserver.vue";
const Cn = (e = "theme") => ({
  computed: {
    themeClass() {
      return sl(this[e]);
    }
  }
}), wl = K({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ct
  },
  mixins: [
    Cn()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), _l = ["id", "aria-hidden", "tabindex", "data-popper-placement"], xl = {
  ref: "inner",
  class: "v-popper__inner"
}, kl = /* @__PURE__ */ B("div", { class: "v-popper__arrow-outer" }, null, -1), Cl = /* @__PURE__ */ B("div", { class: "v-popper__arrow-inner" }, null, -1), Sl = [
  kl,
  Cl
];
function $l(e, t, r, n, o, i) {
  const a = ut("ResizeObserver");
  return x(), E("div", {
    id: e.popperId,
    ref: "popover",
    class: R(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: Tt(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Gn((u) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    B("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => e.autoHide && e.$emit("hide"))
    }),
    B("div", {
      class: "v-popper__wrapper",
      style: Tt(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      B("div", xl, [
        e.mounted ? (x(), E(Ae, { key: 0 }, [
          B("div", null, [
            N(e.$slots, "default")
          ]),
          e.handleResize ? (x(), Q(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (u) => e.$emit("resize", u))
          })) : W("", !0)
        ], 64)) : W("", !0)
      ], 512),
      B("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Tt(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Sl, 4)
    ], 4)
  ], 46, _l);
}
const Sn = /* @__PURE__ */ er(wl, [["render", $l]]), $n = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
}, Tl = K({
  name: "VPopperWrapper",
  components: {
    Popper: gl,
    PopperContent: Sn
  },
  mixins: [
    $n,
    Cn("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function Il(e, t, r, n, o, i) {
  const a = ut("PopperContent"), u = ut("Popper");
  return x(), Q(u, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: R([
      e.themeClass
    ])
  }, {
    default: Y(({
      popperId: c,
      isShown: p,
      shouldMountContent: g,
      skipTransition: v,
      autoHide: m,
      show: y,
      hide: S,
      handleResize: C,
      onResize: L,
      classes: P,
      result: I
    }) => [
      N(e.$slots, "default", {
        shown: p,
        show: y,
        hide: S
      }),
      Ge(a, {
        ref: "popperContent",
        "popper-id": c,
        theme: e.finalTheme,
        shown: p,
        mounted: g,
        "skip-transition": v,
        "auto-hide": m,
        "handle-resize": C,
        classes: P,
        result: I,
        onHide: S,
        onResize: L
      }, {
        default: Y(() => [
          N(e.$slots, "popper", {
            shown: p,
            hide: S
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const tr = /* @__PURE__ */ er(Tl, [["render", Il]]);
({
  ...tr
});
({
  ...tr
});
({
  ...tr
});
K({
  name: "VTooltipDirective",
  components: {
    Popper: xn(),
    PopperContent: Sn
  },
  mixins: [
    $n
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Bt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Bt(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, r = this.content(this);
        r.then ? r.then((n) => this.onResult(t, n)) : this.onResult(t, r);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const Le = {
  Success: "success",
  Error: "error"
}, Ll = "block mb-2 text-sm font-medium", Pl = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", Al = "cursor-not-allowed bg-gray-100", El = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, Nl = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Dl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Ol(e) {
  const t = k(() => {
    const n = e.validationStatus.value, o = n === Le.Success ? Nl : n === Le.Error ? Dl : "";
    return te(
      Pl,
      o,
      El[e.size.value],
      e.disabled.value ? Al : ""
    );
  }), r = k(() => {
    const n = e.validationStatus.value, o = n === Le.Success ? "text-green-700 dark:text-green-500" : n === Le.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return te(Ll, o);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const zl = { class: "flex relative" }, Fl = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, Ml = ["disabled", "type", "required"], Bl = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, jl = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Rl = /* @__PURE__ */ K({
  __name: "FwbInput",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { default: "" },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    type: { default: "text" },
    validationStatus: { default: void 0 }
  },
  setup(e) {
    const t = e, r = rn(t, "modelValue"), { inputClasses: n, labelClasses: o } = Ol(ve(t)), i = k(() => te(
      "mt-2 text-sm",
      t.validationStatus === Le.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === Le.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (a, u) => (x(), E("div", null, [
      a.label ? (x(), E("label", {
        key: 0,
        class: R(A(o))
      }, X(a.label), 3)) : W("", !0),
      B("div", zl, [
        a.$slots.prefix ? (x(), E("div", Fl, [
          N(a.$slots, "prefix")
        ])) : W("", !0),
        Vt(B("input", Ne(a.$attrs, {
          "onUpdate:modelValue": u[0] || (u[0] = (c) => Gr(r) ? r.value = c : null),
          disabled: a.disabled,
          type: a.type,
          required: a.required,
          class: [A(n), a.$slots.prefix ? "pl-10" : ""]
        }), null, 16, Ml), [
          [Fn, A(r)]
        ]),
        a.$slots.suffix ? (x(), E("div", Bl, [
          N(a.$slots, "suffix")
        ])) : W("", !0)
      ]),
      a.$slots.validationMessage ? (x(), E("p", {
        key: 1,
        class: R(i.value)
      }, [
        N(a.$slots, "validationMessage")
      ], 2)) : W("", !0),
      a.$slots.helper ? (x(), E("p", jl, [
        N(a.$slots, "helper")
      ])) : W("", !0)
    ]));
  }
}), he = {
  Success: "success",
  Error: "error"
}, Hl = "block mb-2 text-sm font-medium", Vl = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", Ul = "cursor-not-allowed bg-gray-100", Gl = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", Wl = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, ql = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Kl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Ql(e) {
  const t = k(() => {
    const n = e.validationStatus.value, o = n === he.Success ? ql : n === he.Error ? Kl : "", i = n === he.Success ? "focus:border-green-500" : n === he.Error ? "focus:border-red-500" : "";
    return te(
      Vl,
      o,
      Wl[e.size.value],
      e.disabled.value && Ul,
      e.underline.value ? Gl : "border border-gray-300 rounded-lg",
      e.underline.value && i
    );
  }), r = k(() => {
    const n = e.validationStatus.value, o = n === he.Success ? "text-green-700 dark:text-green-500" : n === he.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return te(Hl, o);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const Yl = ["disabled"], Jl = {
  disabled: "",
  selected: "",
  value: ""
}, Zl = ["value"], Xl = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, eu = /* @__PURE__ */ K({
  __name: "FwbSelect",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    options: { default: () => [] },
    placeholder: { default: "Please select one" },
    disabled: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    size: { default: "md" },
    validationStatus: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = rn(r, "modelValue", t), { selectClasses: o, labelClasses: i } = Ql(ve(r)), a = k(() => te(
      "mt-2 text-sm",
      r.validationStatus === he.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === he.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (u, c) => (x(), E("div", null, [
      B("label", null, [
        u.label ? (x(), E("span", {
          key: 0,
          class: R(A(i))
        }, X(u.label), 3)) : W("", !0),
        Vt(B("select", {
          "onUpdate:modelValue": c[0] || (c[0] = (p) => Gr(n) ? n.value = p : null),
          disabled: u.disabled,
          class: R(A(o))
        }, [
          B("option", Jl, X(u.placeholder), 1),
          (x(!0), E(Ae, null, Wr(u.options, (p, g) => (x(), E("option", {
            key: g,
            value: p.value
          }, X(p.name), 9, Zl))), 128))
        ], 10, Yl), [
          [Mn, A(n)]
        ])
      ]),
      u.$slots.validationMessage ? (x(), E("p", {
        key: 0,
        class: R(a.value)
      }, [
        N(u.$slots, "validationMessage")
      ], 2)) : W("", !0),
      u.$slots.helper ? (x(), E("p", Xl, [
        N(u.$slots, "helper")
      ])) : W("", !0)
    ]));
  }
}), tu = "w-fit relative inline-flex items-center cursor-pointer", ru = 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', nu = "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", ou = {
  lg: "w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4"
}, iu = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function su(e) {
  const t = k(() => tu), r = k(() => ru), n = k(() => ou[e.size.value]), o = k(() => iu[e.color.value]), i = k(() => nu);
  return {
    labelClasses: t,
    toggleSize: n,
    toggleClasses: r,
    toggleColor: o,
    toggleBallClasses: i
  };
}
const au = ["disabled"], Vr = /* @__PURE__ */ K({
  __name: "FwbToggle",
  props: {
    color: { default: "" },
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 },
    size: { default: "md" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = k({
      get() {
        return r.modelValue;
      },
      set(p) {
        t("update:modelValue", p);
      }
    }), {
      labelClasses: o,
      toggleSize: i,
      toggleClasses: a,
      toggleColor: u,
      toggleBallClasses: c
    } = su(ve(r));
    return (p, g) => (x(), E("label", {
      class: R(A(o))
    }, [
      Vt(B("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (v) => n.value = v),
        disabled: p.disabled,
        class: "sr-only peer",
        type: "checkbox"
      }, null, 8, au), [
        [Bn, n.value]
      ]),
      B("span", {
        class: R([A(a), A(i), A(u)])
      }, null, 2),
      B("span", {
        class: R(A(c))
      }, X(p.label), 3)
    ], 2));
  }
}), lu = ["href"], uu = /* @__PURE__ */ K({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (x(), E("a", {
      href: t.href,
      class: R([t.color, "inline-flex items-center hover:underline"])
    }, [
      N(t.$slots, "default")
    ], 10, lu));
  }
}), du = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "FwbHeading",
  props: {
    tag: { default: "h1" },
    color: { default: "text-gray-900 dark:text-white" },
    customSize: { default: "" }
  },
  setup(e) {
    const t = e, r = {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl font-bold",
      h3: "text-3xl font-bold",
      h4: "text-2xl font-bold",
      h5: "text-xl font-bold",
      h6: "text-lg font-bold"
    }, n = Ht(), o = te(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      n.class
    ), i = t.tag;
    return (a, u) => (x(), Q(gt(A(i)), Ne(a.$attrs, { class: A(o) }), {
      default: Y(() => [
        N(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cu = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", pu = /* @__PURE__ */ K({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = k(() => Ot([
      cu,
      t.class
    ]));
    return (n, o) => (x(), E("p", {
      class: R(r.value)
    }, [
      N(n.$slots, "default")
    ], 2));
  }
}), ze = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, hu = {
  __name: "TwcButton",
  props: {
    flat: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = k(() => {
      let n = "TwcButton text-base";
      return t.flat ? `${n}border-0 bg-transparent text-gray-800 hover:bg-transparent focus:ring-0` : t.icon ? `${n}border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2` : t.link ? `${n}border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700` : n;
    });
    return (n, o) => (x(), Q(A(ri), Ne(n.$props, { class: r.value }), {
      default: Y(() => [
        N(n.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}, Au = /* @__PURE__ */ ze(hu, [["__scopeId", "data-v-9c0172c8"]]), fu = { class: "flex" }, gu = { class: "mr-4 font-semibold" }, vu = { class: "mr-4 font-semibold" }, mu = { class: "flex flex-col" }, Ur = "font-light text-xs mt-1", bu = {
  __name: "TwcToggle",
  props: /* @__PURE__ */ nr({
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    reverse: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {
      default: !1,
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ nr(["change", "click"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = t, n = Qn(e, "modelValue");
    function o() {
      r("click");
    }
    return (i, a) => (x(), E("div", null, [
      B("div", fu, [
        i.$props.reverse ? (x(), E(Ae, { key: 0 }, [
          B("label", gu, X(i.$props.label), 1),
          Ge(A(Vr), {
            modelValue: n.value,
            "onUpdate:modelValue": a[0] || (a[0] = (u) => n.value = u),
            class: "TwcToggle",
            disabled: i.$props.disabled,
            onClick: o
          }, null, 8, ["modelValue", "disabled"])
        ], 64)) : (x(), E(Ae, { key: 1 }, [
          Ge(A(Vr), {
            modelValue: n.value,
            "onUpdate:modelValue": a[1] || (a[1] = (u) => n.value = u),
            class: "TwcToggle",
            disabled: i.$props.disabled,
            onClick: o
          }, null, 8, ["modelValue", "disabled"]),
          B("label", vu, X(i.$props.label), 1)
        ], 64))
      ]),
      B("div", mu, [
        i.$props.hint ? (x(), E("label", {
          key: 0,
          class: R(`${Ur} text-gray-500`)
        }, X(i.$props.hint), 3)) : W("", !0),
        i.$props.errorMessage ? (x(), E("label", {
          key: 1,
          class: R(`${Ur} text-red-500`)
        }, X(i.$props.errorMessage), 3)) : W("", !0)
      ])
    ]));
  }
}, Eu = /* @__PURE__ */ ze(bu, [["__scopeId", "data-v-5c702ba2"]]), Nu = {
  __name: "TwcHeading",
  setup(e) {
    return (t, r) => (x(), Q(A(du), Ye(mt(t.$props)), {
      default: Y(() => [
        N(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, yu = {
  __name: "TwcInput",
  setup(e) {
    return (t, r) => (x(), Q(A(Rl), Ne(t.$props, { class: "TwcInput" }), qr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: Y(() => [
          N(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      t.$slots.prefix ? {
        name: "prefix",
        fn: Y(() => [
          N(t.$slots, "prefix", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      t.$slots.suffix ? {
        name: "suffix",
        fn: Y(() => [
          N(t.$slots, "suffix", {}, void 0, !0)
        ]),
        key: "2"
      } : void 0
    ]), 1040));
  }
}, Du = /* @__PURE__ */ ze(yu, [["__scopeId", "data-v-9a366333"]]), Ou = {
  __name: "TwcLabel",
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    function r() {
      return `block text-sm font-medium ${t.class}`;
    }
    return (n, o) => (x(), E("label", {
      class: R(r())
    }, [
      N(n.$slots, "default")
    ], 2));
  }
}, zu = {
  __name: "TwcLink",
  setup(e) {
    return (t, r) => (x(), Q(A(uu), Ye(mt(t.$props)), {
      default: Y(() => [
        N(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Fu = {
  __name: "TwcParagraph",
  setup(e) {
    return (t, r) => (x(), Q(A(pu), Ye(mt(t.$props)), {
      default: Y(() => [
        N(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, wu = {
  __name: "TwcSelect",
  setup(e) {
    return (t, r) => (x(), Q(A(eu), Ne(t.$props, { class: "TwcSelect" }), qr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: Y(() => [
          N(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}, Mu = /* @__PURE__ */ ze(wu, [["__scopeId", "data-v-dab28e77"]]);
function _u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tn = { exports: {} };
(function(e) {
  (function(t) {
    e.exports ? e.exports = t() : window.intlTelInput = t();
  })(function(t) {
    return function() {
      for (var r = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua & Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria", "at", "43"], ["Azerbaijan", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus", "by", "375"], ["Belgium", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia & Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros", "km", "269"], ["Congo - Brazzaville", "cg", "242"], ["Congo - Kinshasa", "cd", "243"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus", "cy", "357"], ["Czech Republic", "cz", "420"], ["Denmark", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands", "fk", "500"], ["Faroe Islands", "fo", "298"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49"], ["Ghana", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece", "gr", "30"], ["Greenland", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852"], ["Hungary", "hu", "36"], ["Iceland", "is", "354"], ["India", "in", "91"], ["Indonesia", "id", "62"], ["Iran", "ir", "98"], ["Iraq", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel", "il", "972"], ["Italy", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996"], ["Laos", "la", "856"], ["Latvia", "lv", "371"], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco", "ma", "212", 0], ["Mozambique", "mz", "258"], ["Myanmar (Burma)", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea", "kp", "850"], ["North Macedonia", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway", "no", "47", 0], ["Oman", "om", "968"], ["Pakistan", "pk", "92"], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63"], ["Poland", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["Réunion", "re", "262", 0], ["Romania", "ro", "40"], ["Russia", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé & Príncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82"], ["South Sudan", "ss", "211"], ["Spain", "es", "34"], ["Sri Lanka", "lk", "94"], ["St Barthélemy", "bl", "590", 1], ["St Helena", "sh", "290"], ["St Kitts & Nevis", "kn", "1", 18, ["869"]], ["St Lucia", "lc", "1", 19, ["758"]], ["St Martin", "mf", "590", 2], ["St Pierre & Miquelon", "pm", "508"], ["St Vincent & Grenadines", "vc", "1", 20, ["784"]], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard & Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden", "se", "46"], ["Switzerland", "ch", "41"], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad & Tobago", "tt", "1", 22, ["868"]], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks & Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380"], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["US Virgin Islands", "vi", "1", 24, ["340"]], ["Uzbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis & Futuna", "wf", "681"], ["Western Sahara", "eh", "212", 1, ["5288", "5289"]], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], n = 0; n < r.length; n++) {
        var o = r[n];
        r[n] = {
          name: o[0],
          iso2: o[1],
          dialCode: o[2],
          priority: o[3] || 0,
          areaCodes: o[4] || null,
          nodeById: {}
        };
      }
      function i(w) {
        for (var h = 1; h < arguments.length; h++) {
          var s = arguments[h] != null ? Object(arguments[h]) : {}, l = Object.keys(s);
          typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(d) {
            return Object.getOwnPropertyDescriptor(s, d).enumerable;
          })), l.forEach(function(d) {
            a(w, d, s[d]);
          });
        }
        return w;
      }
      function a(w, h, s) {
        return h = L(h), h in w ? Object.defineProperty(w, h, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : w[h] = s, w;
      }
      function u(w, h) {
        return m(w) || v(w, h) || p(w, h) || c();
      }
      function c() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function p(w, h) {
        if (w) {
          if (typeof w == "string")
            return g(w, h);
          var s = Object.prototype.toString.call(w).slice(8, -1);
          if (s === "Object" && w.constructor && (s = w.constructor.name), s === "Map" || s === "Set")
            return Array.from(w);
          if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
            return g(w, h);
        }
      }
      function g(w, h) {
        (h == null || h > w.length) && (h = w.length);
        for (var s = 0, l = new Array(h); s < h; s++)
          l[s] = w[s];
        return l;
      }
      function v(w, h) {
        var s = w == null ? null : typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
        if (s != null) {
          var l, d, f, b, _ = [], $ = !0, T = !1;
          try {
            if (f = (s = s.call(w)).next, h === 0) {
              if (Object(s) !== s)
                return;
              $ = !1;
            } else
              for (; !($ = (l = f.call(s)).done) && (_.push(l.value), _.length !== h); $ = !0)
                ;
          } catch (z) {
            T = !0, d = z;
          } finally {
            try {
              if (!$ && s.return != null && (b = s.return(), Object(b) !== b))
                return;
            } finally {
              if (T)
                throw d;
            }
          }
          return _;
        }
      }
      function m(w) {
        if (Array.isArray(w))
          return w;
      }
      function y(w, h) {
        if (!(w instanceof h))
          throw new TypeError("Cannot call a class as a function");
      }
      function S(w, h) {
        for (var s = 0; s < h.length; s++) {
          var l = h[s];
          l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(w, L(l.key), l);
        }
      }
      function C(w, h, s) {
        return h && S(w.prototype, h), s && S(w, s), Object.defineProperty(w, "prototype", {
          writable: !1
        }), w;
      }
      function L(w) {
        var h = P(w, "string");
        return typeof h == "symbol" ? h : String(h);
      }
      function P(w, h) {
        if (typeof w != "object" || w === null)
          return w;
        var s = w[Symbol.toPrimitive];
        if (s !== t) {
          var l = s.call(w, h || "default");
          if (typeof l != "object")
            return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (h === "string" ? String : Number)(w);
      }
      var I = {
        getInstance: function(h) {
          var s = h.getAttribute("data-intl-tel-input-id");
          return window.intlTelInputGlobals.instances[s];
        },
        instances: {},
        // using a global like this allows us to mock it in the tests
        documentReady: function() {
          return document.readyState === "complete";
        }
      };
      typeof window == "object" && (window.intlTelInputGlobals = I);
      var D = 0, V = {
        // whether or not to allow the dropdown
        allowDropdown: !0,
        // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
        autoInsertDialCode: !1,
        // add a placeholder in the input with an example number for the selected country
        autoPlaceholder: "polite",
        // add a country search input at the top of the dropdown
        countrySearch: !0,
        // modify the parentClass
        containerClass: "",
        // modify the auto placeholder
        customPlaceholder: null,
        // by default, initialise with the first country in the list selected (if no country set via the initial value or initialCountry option)
        defaultToFirstCountry: !0,
        // append menu to specified element
        dropdownContainer: null,
        // don't display these countries
        excludeCountries: [],
        // fix the dropdown width to the input width (rather than being as wide as the longest country name)
        fixDropdownWidth: !0,
        // format the number as the user types
        formatAsYouType: !0,
        // format the input value during initialisation and on setNumber
        formatOnDisplay: !0,
        // geoIp lookup function
        geoIpLookup: null,
        // inject a hidden input with this name, and on submit, populate it with the result of getNumber
        hiddenInput: null,
        // internationalise the plugin text e.g. search input placeholder, country names
        i18n: {},
        // initial country
        initialCountry: "",
        // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
        nationalMode: !0,
        // display only these countries
        onlyCountries: [],
        // number type to use for placeholders
        placeholderNumberType: "MOBILE",
        // the countries at the top of the list
        preferredCountries: [],
        // option to hide the flags - must be used with showSelectedDialCode, or allowDropdown=false
        showFlags: !0,
        // display the international dial code next to the selected flag
        showSelectedDialCode: !1,
        // use full screen popup instead of dropdown for country list
        useFullscreenPopup: typeof navigator < "u" && typeof window < "u" ? (
          // we cannot just test screen size as some smartphones/website meta tags will report desktop
          // resolutions
          // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
          /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500
        ) : !1,
        // specify the path to the libphonenumber script to enable validation/formatting
        utilsScript: ""
      }, U = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], M = function(h) {
        var s = window.intlTelInputGlobals.instances;
        Object.values(s).forEach(function(l) {
          return l[h]();
        });
      }, J = /* @__PURE__ */ function() {
        function w(h) {
          var s = arguments.length > 1 && arguments[1] !== t ? arguments[1] : {};
          y(this, w), this.id = D++, this.telInput = h, this.activeItem = null, this.highlightedItem = null, this.options = Object.assign({}, V, s), this.hadInitialPlaceholder = !!h.getAttribute("placeholder");
        }
        return C(w, [{
          key: "_init",
          value: function() {
            var s = this;
            this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.countrySearch && !this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !0), this.options.nationalMode && (this.options.autoInsertDialCode = !1), this.options.showSelectedDialCode && (this.options.autoInsertDialCode = !1);
            var l = this.options.allowDropdown && !this.options.showSelectedDialCode;
            if (!this.options.showFlags && l && (this.options.showFlags = !0), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isRTL = !!this.telInput.closest("[dir=rtl]"), typeof Promise < "u") {
              var d = new Promise(function(b, _) {
                s.resolveAutoCountryPromise = b, s.rejectAutoCountryPromise = _;
              }), f = new Promise(function(b, _) {
                s.resolveUtilsScriptPromise = b, s.rejectUtilsScriptPromise = _;
              });
              this.promise = Promise.all([d, f]);
            } else
              this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {
              }, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {
              };
            this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
          }
        }, {
          key: "_processCountryData",
          value: function() {
            this._processAllCountries(), this._processDialCodes(), this._processPreferredCountries(), this._translateCountryNames(), (this.options.onlyCountries.length || this.options.i18n) && this.countries.sort(this._countryNameSort);
          }
        }, {
          key: "_addToDialCodeMap",
          value: function(s, l, d) {
            l.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = l.length), this.dialCodeToIso2Map.hasOwnProperty(l) || (this.dialCodeToIso2Map[l] = []);
            for (var f = 0; f < this.dialCodeToIso2Map[l].length; f++)
              if (this.dialCodeToIso2Map[l][f] === s)
                return;
            var b = d !== t ? d : this.dialCodeToIso2Map[l].length;
            this.dialCodeToIso2Map[l][b] = s;
          }
        }, {
          key: "_processAllCountries",
          value: function() {
            if (this.options.onlyCountries.length) {
              var s = this.options.onlyCountries.map(function(d) {
                return d.toLowerCase();
              });
              this.countries = r.filter(function(d) {
                return s.indexOf(d.iso2) > -1;
              });
            } else if (this.options.excludeCountries.length) {
              var l = this.options.excludeCountries.map(function(d) {
                return d.toLowerCase();
              });
              this.countries = r.filter(function(d) {
                return l.indexOf(d.iso2) === -1;
              });
            } else
              this.countries = r;
          }
        }, {
          key: "_translateCountryNames",
          value: function() {
            for (var s = 0; s < this.countries.length; s++) {
              var l = this.countries[s].iso2.toLowerCase();
              this.options.i18n.hasOwnProperty(l) && (this.countries[s].name = this.options.i18n[l]);
            }
          }
        }, {
          key: "_countryNameSort",
          value: function(s, l) {
            return s.name < l.name ? -1 : s.name > l.name ? 1 : 0;
          }
        }, {
          key: "_processDialCodes",
          value: function() {
            this.dialCodes = {}, this.dialCodeMaxLen = 0, this.dialCodeToIso2Map = {};
            for (var s = 0; s < this.countries.length; s++) {
              var l = this.countries[s];
              this.dialCodes[l.dialCode] || (this.dialCodes[l.dialCode] = !0), this._addToDialCodeMap(l.iso2, l.dialCode, l.priority);
            }
            for (var d = 0; d < this.countries.length; d++) {
              var f = this.countries[d];
              if (f.areaCodes)
                for (var b = this.dialCodeToIso2Map[f.dialCode][0], _ = 0; _ < f.areaCodes.length; _++) {
                  for (var $ = f.areaCodes[_], T = 1; T < $.length; T++) {
                    var z = f.dialCode + $.substr(0, T);
                    this._addToDialCodeMap(b, z), this._addToDialCodeMap(f.iso2, z);
                  }
                  this._addToDialCodeMap(f.iso2, f.dialCode + $);
                }
            }
          }
        }, {
          key: "_processPreferredCountries",
          value: function() {
            this.preferredCountries = [];
            for (var s = 0; s < this.options.preferredCountries.length; s++) {
              var l = this.options.preferredCountries[s].toLowerCase(), d = this._getCountryData(l, !0);
              d && this.preferredCountries.push(d);
            }
          }
        }, {
          key: "_createEl",
          value: function(s, l, d) {
            var f = document.createElement(s);
            return l && Object.entries(l).forEach(function(b) {
              var _ = u(b, 2), $ = _[0], T = _[1];
              return f.setAttribute($, T);
            }), d && d.appendChild(f), f;
          }
        }, {
          key: "_generateMarkup",
          value: function() {
            this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
            var s = this.options, l = s.allowDropdown, d = s.showSelectedDialCode, f = s.showFlags, b = s.containerClass, _ = s.hiddenInput, $ = s.dropdownContainer, T = s.fixDropdownWidth, z = s.useFullscreenPopup, q = s.countrySearch, j = "iti";
            l && (j += " iti--allow-dropdown"), d && (j += " iti--show-selected-dial-code"), f && (j += " iti--show-flags"), b && (j += " ".concat(b)), z || (j += " iti--inline-dropdown");
            var H = this._createEl("div", {
              class: j
            });
            this.telInput.parentNode.insertBefore(H, this.telInput);
            var ue = l || f || d;
            if (ue && (this.flagsContainer = this._createEl("div", {
              class: "iti__flag-container"
            }, H)), H.appendChild(this.telInput), ue && (this.selectedFlag = this._createEl("div", i({
              class: "iti__selected-flag"
            }, l && {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-controls": "iti-".concat(this.id, "__country-listbox"),
              "aria-expanded": "false",
              "aria-label": this.options.i18n.selectedCountryAriaLabel || "Selected country"
            }), this.flagsContainer)), f && (this.selectedFlagInner = this._createEl("div", {
              class: "iti__flag"
            }, this.selectedFlag)), this.selectedFlag && this.telInput.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"), d && (this.selectedDialCode = this._createEl("div", {
              class: "iti__selected-dial-code"
            }, this.selectedFlag)), l) {
              this.telInput.disabled || this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", {
                class: "iti__arrow"
              }, this.selectedFlag);
              var In = T ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = this._createEl("div", {
                class: "iti__dropdown-content iti__hide ".concat(In)
              }), q && (this.searchInput = this._createEl("input", {
                type: "text",
                class: "iti__search-input",
                placeholder: this.options.i18n.searchPlaceholder || "Search"
              }, this.dropdownContent)), this.countryList = this._createEl("ul", {
                class: "iti__country-list",
                id: "iti-".concat(this.id, "__country-listbox"),
                role: "listbox",
                "aria-label": this.options.i18n.countryListAriaLabel || "List of countries"
              }, this.dropdownContent), this.preferredCountries.length && !q && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", {
                class: "iti__divider",
                "aria-hidden": "true"
              }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), $) {
                var Xe = "iti iti--container";
                z ? Xe += " iti--fullscreen-popup" : Xe += " iti--inline-dropdown", q && (Xe += " iti--country-search"), this.dropdown = this._createEl("div", {
                  class: Xe
                }), this.dropdown.appendChild(this.dropdownContent);
              } else
                this.flagsContainer.appendChild(this.dropdownContent);
            }
            if (_) {
              var St = this.telInput.getAttribute("name"), Fe = _(St), Ln = Fe !== null && typeof Fe == "object", Te, $t;
              if (Ln ? (Te = Fe.phone || St, $t = Fe.country || "".concat(Te, "_country")) : (Te = Fe || St, $t = "".concat(Te, "_country")), !Te)
                return;
              this.hiddenInput = this._createEl("input", {
                type: "hidden",
                name: Te
              }), this.hiddenInputCountry = this._createEl("input", {
                type: "hidden",
                name: $t
              }), H.appendChild(this.hiddenInput), H.appendChild(this.hiddenInputCountry);
            }
          }
        }, {
          key: "_appendListItems",
          value: function(s, l, d) {
            for (var f = 0; f < s.length; f++) {
              var b = s[f], _ = d ? "-preferred" : "", $ = this._createEl("li", {
                id: "iti-".concat(this.id, "__item-").concat(b.iso2).concat(_),
                class: "iti__country ".concat(l),
                tabindex: "-1",
                role: "option",
                "data-dial-code": b.dialCode,
                "data-country-code": b.iso2,
                "aria-selected": "false"
              }, this.countryList);
              b.nodeById[this.id] = $;
              var T = "";
              this.options.showFlags && (T += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(b.iso2, "'></div></div>")), T += "<span class='iti__country-name'>".concat(b.name, "</span>"), T += "<span class='iti__dial-code'>+".concat(b.dialCode, "</span>"), $.insertAdjacentHTML("beforeend", T);
            }
          }
        }, {
          key: "_setInitialState",
          value: function() {
            var s = arguments.length > 0 && arguments[0] !== t ? arguments[0] : !1, l = this.telInput.getAttribute("value"), d = this.telInput.value, f = l && l.charAt(0) === "+" && (!d || d.charAt(0) !== "+"), b = f ? l : d, _ = this._getDialCode(b), $ = this._isRegionlessNanp(b), T = this.options, z = T.initialCountry, q = T.autoInsertDialCode, j = T.defaultToFirstCountry;
            if (_ && !$)
              this._updateFlagFromNumber(b);
            else if (z !== "auto" || s) {
              var H = z ? z.toLowerCase() : "", ue = H && this._getCountryData(H, !0);
              ue ? this._setFlag(H) : _ && $ ? this._setFlag("us") : j && !b ? (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, this._setFlag(this.defaultCountry)) : this._setFlag(), !b && q && (this.telInput.value = "+".concat(this.selectedCountryData.dialCode));
            }
            b && this._updateValFromNumber(b);
          }
        }, {
          key: "_initListeners",
          value: function() {
            this._initKeyListeners(), this.options.autoInsertDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener();
          }
        }, {
          key: "_initHiddenInputListener",
          value: function() {
            var s = this;
            this._handleHiddenInputSubmit = function() {
              s.hiddenInput.value = s.getNumber(), s.hiddenInputCountry.value = s.getSelectedCountryData().iso2;
            }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
          }
        }, {
          key: "_initDropdownListeners",
          value: function() {
            var s = this;
            this._handleLabelClick = function(d) {
              s.dropdownContent.classList.contains("iti__hide") ? s.telInput.focus() : d.preventDefault();
            };
            var l = this.telInput.closest("label");
            l && l.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function() {
              s.dropdownContent.classList.contains("iti__hide") && !s.telInput.disabled && !s.telInput.readOnly && s._showDropdown();
            }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function(d) {
              var f = s.dropdownContent.classList.contains("iti__hide");
              f && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(d.key) && (d.preventDefault(), d.stopPropagation(), s._showDropdown()), d.key === "Tab" && s._closeDropdown();
            }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
          }
        }, {
          key: "_initRequests",
          value: function() {
            var s = this;
            this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function() {
              window.intlTelInputGlobals.loadUtils(s.options.utilsScript);
            }) : this.resolveUtilsScriptPromise(), this.options.initialCountry === "auto" && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
          }
        }, {
          key: "_loadAutoCountry",
          value: function() {
            var s = this;
            window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(function() {
              var l = arguments.length > 0 && arguments[0] !== t ? arguments[0] : "", d = l.toLowerCase(), f = d && s._getCountryData(d, !0);
              f ? (window.intlTelInputGlobals.autoCountry = d, setTimeout(function() {
                return M("handleAutoCountry");
              })) : (s._setInitialState(!0), M("rejectAutoCountryPromise"));
            }, function() {
              return M("rejectAutoCountryPromise");
            }));
          }
        }, {
          key: "_initKeyListeners",
          value: function() {
            var s = this, l = !1;
            this._handleKeyEvent = function(d) {
              s._updateFlagFromNumber(s.telInput.value) && s._triggerCountryChange();
              var f = d && d.data && /[^+0-9]/.test(d.data), b = d && d.inputType === "insertFromPaste" && s.telInput.value;
              if (f || b ? l = !0 : /[^+0-9]/.test(s.telInput.value) || (l = !1), s.options.formatAsYouType && !l && d.inputType !== "insertFromPaste") {
                var _ = s.telInput.selectionStart, $ = s.telInput.value.substring(0, _), T = $.replace(/[^+0-9]/g, "").length, z = d && d.inputType === "deleteContentForward", q = s._formatNumberAsYouType(), j = s._translateCursorPosition(T, q, _, z);
                s.telInput.value = q, s.telInput.setSelectionRange(j, j);
              }
            }, this.telInput.addEventListener("input", this._handleKeyEvent), this._handleClipboardEvent = function() {
              setTimeout(s._handleKeyEvent);
            }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent);
          }
        }, {
          key: "_translateCursorPosition",
          value: function(s, l, d, f) {
            if (d === 0 && !f)
              return 0;
            for (var b = 0, _ = 0; _ < l.length; _++) {
              if (/[+0-9]/.test(l[_]) && b++, b === s && !f)
                return _ + 1;
              if (f && b === s + 1)
                return _;
            }
            return l.length;
          }
        }, {
          key: "_cap",
          value: function(s) {
            var l = this.telInput.getAttribute("maxlength");
            return l && s.length > l ? s.substr(0, l) : s;
          }
        }, {
          key: "_initBlurListeners",
          value: function() {
            var s = this;
            this._handleSubmitOrBlurEvent = function() {
              s._removeEmptyDialCode();
            }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
          }
        }, {
          key: "_removeEmptyDialCode",
          value: function() {
            if (this.telInput.value.charAt(0) === "+") {
              var s = this._getNumeric(this.telInput.value);
              (!s || this.selectedCountryData.dialCode === s) && (this.telInput.value = "");
            }
          }
        }, {
          key: "_getNumeric",
          value: function(s) {
            return s.replace(/\D/g, "");
          }
        }, {
          key: "_trigger",
          value: function(s) {
            var l = new Event(s, {
              bubbles: !0,
              cancelable: !0
            });
            this.telInput.dispatchEvent(l);
          }
        }, {
          key: "_showDropdown",
          value: function() {
            if (this.options.fixDropdownWidth && (this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px")), this.dropdownContent.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.options.countrySearch) {
              var s = this.countryList.firstElementChild;
              s && this._highlightListItem(s, !1), this.searchInput.focus();
            } else
              this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0));
            this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
          }
        }, {
          key: "_toggleClass",
          value: function(s, l, d) {
            d && !s.classList.contains(l) ? s.classList.add(l) : !d && s.classList.contains(l) && s.classList.remove(l);
          }
        }, {
          key: "_setDropdownPosition",
          value: function() {
            var s = this;
            if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
              var l = this.telInput.getBoundingClientRect(), d = document.documentElement.scrollTop, f = l.top + d, b = this.dropdownContent.offsetHeight, _ = f + this.telInput.offsetHeight + b < d + window.innerHeight, $ = f - b > d, T = !this.options.countrySearch && !_ && $;
              if (this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", T), this.options.dropdownContainer) {
                var z = T ? 0 : this.telInput.offsetHeight;
                this.dropdown.style.top = "".concat(f + z, "px"), this.dropdown.style.left = "".concat(l.left + document.body.scrollLeft, "px"), this._handleWindowScroll = function() {
                  return s._closeDropdown();
                }, window.addEventListener("scroll", this._handleWindowScroll);
              }
            }
          }
        }, {
          key: "_bindDropdownListeners",
          value: function() {
            var s = this;
            this._handleMouseoverCountryList = function($) {
              var T = $.target.closest(".iti__country");
              T && s._highlightListItem(T, !1);
            }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function($) {
              var T = $.target.closest(".iti__country");
              T && s._selectListItem(T);
            }, this.countryList.addEventListener("click", this._handleClickCountryList);
            var l = !0;
            this._handleClickOffToClose = function() {
              l || s._closeDropdown(), l = !1;
            }, document.documentElement.addEventListener("click", this._handleClickOffToClose);
            var d = "", f = null;
            if (this._handleKeydownOnDropdown = function($) {
              ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes($.key) && ($.preventDefault(), $.stopPropagation(), $.key === "ArrowUp" || $.key === "ArrowDown" ? s._handleUpDownKey($.key) : $.key === "Enter" ? s._handleEnterKey() : $.key === "Escape" && s._closeDropdown()), !s.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test($.key) && ($.stopPropagation(), f && clearTimeout(f), d += $.key.toLowerCase(), s._searchForCountry(d), f = setTimeout(function() {
                d = "";
              }, 1e3));
            }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
              var b = function() {
                var T = s.searchInput.value.trim();
                T ? s._filterCountries(T) : s._filterCountries("", !0);
              }, _ = null;
              this._handleSearchChange = function() {
                _ && clearTimeout(_), _ = setTimeout(function() {
                  b(), _ = null;
                }, 100);
              }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", function($) {
                return $.stopPropagation();
              });
            }
          }
        }, {
          key: "_normaliseString",
          value: function() {
            var s = arguments.length > 0 && arguments[0] !== t ? arguments[0] : "";
            return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          }
        }, {
          key: "_filterCountries",
          value: function(s) {
            var l = arguments.length > 1 && arguments[1] !== t ? arguments[1] : !1, d = !0;
            this.countryList.innerHTML = "";
            for (var f = this._normaliseString(s), b = 0; b < this.countries.length; b++) {
              var _ = this.countries[b], $ = this._normaliseString(_.name), T = "+".concat(_.dialCode);
              (l || $.includes(f) || T.includes(f) || _.iso2.includes(f)) && (this.countryList.appendChild(_.nodeById[this.id]), d && (this._highlightListItem(_.nodeById[this.id], !1), d = !1));
            }
          }
        }, {
          key: "_handleUpDownKey",
          value: function(s) {
            var l = s === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
            if (l ? l.classList.contains("iti__divider") && (l = s === "ArrowUp" ? l.previousElementSibling : l.nextElementSibling) : this.countryList.childElementCount > 1 && (l = s === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), l) {
              var d = !this.options.countrySearch;
              this._highlightListItem(l, d), this.options.countrySearch && this._scrollTo(l, !1);
            }
          }
        }, {
          key: "_handleEnterKey",
          value: function() {
            this.highlightedItem && this._selectListItem(this.highlightedItem);
          }
        }, {
          key: "_searchForCountry",
          value: function(s) {
            for (var l = 0; l < this.countries.length; l++)
              if (this._startsWith(this.countries[l].name, s)) {
                var d = this.countries[l].nodeById[this.id];
                this._highlightListItem(d, !1), this._scrollTo(d, !0);
                break;
              }
          }
        }, {
          key: "_startsWith",
          value: function(s, l) {
            return s.substr(0, l.length).toLowerCase() === l;
          }
        }, {
          key: "_updateValFromNumber",
          value: function(s) {
            var l = s;
            if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
              var d = this.options.nationalMode || l.charAt(0) !== "+" && !this.options.showSelectedDialCode, f = intlTelInputUtils.numberFormat, b = f.NATIONAL, _ = f.INTERNATIONAL, $ = d ? b : _;
              l = intlTelInputUtils.formatNumber(l, this.selectedCountryData.iso2, $);
            }
            l = this._beforeSetNumber(l), this.telInput.value = l;
          }
        }, {
          key: "_updateFlagFromNumber",
          value: function(s) {
            var l = s.indexOf("+"), d = l ? s.substring(l) : s, f = this.selectedCountryData.dialCode, b = f === "1";
            d && b && d.charAt(0) !== "+" && (d.charAt(0) !== "1" && (d = "1".concat(d)), d = "+".concat(d)), this.options.showSelectedDialCode && f && d.charAt(0) !== "+" && (d = "+".concat(f).concat(d));
            var _ = this._getDialCode(d, !0), $ = this._getNumeric(d), T = null;
            if (_) {
              var z = this.dialCodeToIso2Map[this._getNumeric(_)], q = z.indexOf(this.selectedCountryData.iso2) !== -1 && $.length <= _.length - 1, j = f === "1" && this._isRegionlessNanp($);
              if (!j && !q) {
                for (var H = 0; H < z.length; H++)
                  if (z[H]) {
                    T = z[H];
                    break;
                  }
              }
            } else
              d.charAt(0) === "+" && $.length ? T = "" : (!d || d === "+") && !this.selectedCountryData.iso2 && (T = this.defaultCountry);
            return T !== null ? this._setFlag(T) : !1;
          }
        }, {
          key: "_isRegionlessNanp",
          value: function(s) {
            var l = this._getNumeric(s);
            if (l.charAt(0) === "1") {
              var d = l.substr(1, 3);
              return U.indexOf(d) !== -1;
            }
            return !1;
          }
        }, {
          key: "_highlightListItem",
          value: function(s, l) {
            var d = this.highlightedItem;
            d && d.classList.remove("iti__highlight"), this.highlightedItem = s, this.highlightedItem.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", s.getAttribute("id")), l && this.highlightedItem.focus();
          }
        }, {
          key: "_getCountryData",
          value: function(s, l) {
            for (var d = 0; d < this.countries.length; d++)
              if (this.countries[d].iso2 === s)
                return this.countries[d];
            if (l)
              return null;
            throw new Error("No country data for '".concat(s, "'"));
          }
        }, {
          key: "_setFlag",
          value: function(s) {
            var l = this.options, d = l.allowDropdown, f = l.showSelectedDialCode, b = l.showFlags, _ = l.countrySearch, $ = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            if (this.selectedCountryData = s ? this._getCountryData(s, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), b) {
              var T = s ? "iti__".concat(s) : "iti__globe";
              this.selectedFlagInner.setAttribute("class", "iti__flag ".concat(T));
            }
            if (this._setSelectedCountryFlagTitleAttribute(s, f), f) {
              var z = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
              this.selectedDialCode.innerHTML = z;
              var q = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
              this.isRTL ? this.telInput.style.paddingRight = "".concat(q + 6, "px") : this.telInput.style.paddingLeft = "".concat(q + 6, "px");
            }
            if (this._updatePlaceholder(), d && !_) {
              var j = this.activeItem;
              if (j && (j.classList.remove("iti__active"), j.setAttribute("aria-selected", "false")), s) {
                var H = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(s, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(s));
                H.setAttribute("aria-selected", "true"), H.classList.add("iti__active"), this.activeItem = H;
              }
            }
            return $.iso2 !== s;
          }
        }, {
          key: "_setSelectedCountryFlagTitleAttribute",
          value: function(s, l) {
            if (this.selectedFlag) {
              var d;
              s && !l ? d = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : s ? d = this.selectedCountryData.name : d = "Unknown", this.selectedFlag.setAttribute("title", d);
            }
          }
        }, {
          key: "_getHiddenSelectedFlagWidth",
          value: function() {
            var s = this.telInput.parentNode.cloneNode();
            s.style.visibility = "hidden", document.body.appendChild(s);
            var l = this.flagsContainer.cloneNode();
            s.appendChild(l);
            var d = this.selectedFlag.cloneNode(!0);
            l.appendChild(d);
            var f = d.offsetWidth;
            return s.parentNode.removeChild(s), f;
          }
        }, {
          key: "_updatePlaceholder",
          value: function() {
            var s = this.options, l = s.autoPlaceholder, d = s.placeholderNumberType, f = s.nationalMode, b = s.customPlaceholder, _ = l === "aggressive" || !this.hadInitialPlaceholder && l === "polite";
            if (window.intlTelInputUtils && _) {
              var $ = intlTelInputUtils.numberType[d], T = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, f, $) : "";
              T = this._beforeSetNumber(T), typeof b == "function" && (T = b(T, this.selectedCountryData)), this.telInput.setAttribute("placeholder", T);
            }
          }
        }, {
          key: "_selectListItem",
          value: function(s) {
            var l = this._setFlag(s.getAttribute("data-country-code"));
            this._closeDropdown(), this._updateDialCode(s.getAttribute("data-dial-code")), this.telInput.focus(), l && this._triggerCountryChange();
          }
        }, {
          key: "_closeDropdown",
          value: function() {
            this.dropdownContent.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
          }
        }, {
          key: "_scrollTo",
          value: function(s, l) {
            var d = this.countryList, f = document.documentElement.scrollTop, b = d.offsetHeight, _ = d.getBoundingClientRect().top + f, $ = _ + b, T = s.offsetHeight, z = s.getBoundingClientRect().top + f, q = z + T, j = z - _ + d.scrollTop, H = b / 2 - T / 2;
            if (z < _)
              l && (j -= H), d.scrollTop = j;
            else if (q > $) {
              l && (j += H);
              var ue = b - T;
              d.scrollTop = j - ue;
            }
          }
        }, {
          key: "_updateDialCode",
          value: function(s) {
            var l = this.telInput.value, d = "+".concat(s), f;
            if (l.charAt(0) === "+") {
              var b = this._getDialCode(l);
              b ? f = l.replace(b, d) : f = d, this.telInput.value = f;
            } else
              this.options.autoInsertDialCode && (l ? f = d + l : f = d, this.telInput.value = f);
          }
        }, {
          key: "_getDialCode",
          value: function(s, l) {
            var d = "";
            if (s.charAt(0) === "+")
              for (var f = "", b = 0; b < s.length; b++) {
                var _ = s.charAt(b);
                if (!isNaN(parseInt(_, 10))) {
                  if (f += _, l)
                    this.dialCodeToIso2Map[f] && (d = s.substr(0, b + 1));
                  else if (this.dialCodes[f]) {
                    d = s.substr(0, b + 1);
                    break;
                  }
                  if (f.length === this.dialCodeMaxLen)
                    break;
                }
              }
            return d;
          }
        }, {
          key: "_getFullNumber",
          value: function() {
            var s = this.telInput.value.trim(), l = this.selectedCountryData.dialCode, d, f = this._getNumeric(s);
            return this.options.showSelectedDialCode && !this.options.nationalMode && s.charAt(0) !== "+" && l && f ? d = "+".concat(l) : d = "", d + s;
          }
        }, {
          key: "_beforeSetNumber",
          value: function(s) {
            var l = s;
            if (this.options.showSelectedDialCode) {
              var d = this._getDialCode(l);
              if (d) {
                d = "+".concat(this.selectedCountryData.dialCode);
                var f = l[d.length] === " " || l[d.length] === "-" ? d.length + 1 : d.length;
                l = l.substr(f);
              }
            }
            return this._cap(l);
          }
        }, {
          key: "_triggerCountryChange",
          value: function() {
            this._trigger("countrychange");
          }
        }, {
          key: "_formatNumberAsYouType",
          value: function() {
            var s = this._getFullNumber(), l = window.intlTelInputUtils ? intlTelInputUtils.formatNumberAsYouType(s, this.selectedCountryData.iso2) : s, d = this.selectedCountryData.dialCode;
            if (this.options.showSelectedDialCode && !this.options.nationalMode && this.telInput.value.charAt(0) !== "+" && l.includes("+".concat(d))) {
              var f = l.split("+".concat(d))[1] || "";
              return f.trim();
            }
            return l;
          }
        }, {
          key: "handleAutoCountry",
          value: function() {
            this.options.initialCountry === "auto" && (this.defaultCountry = window.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
          }
        }, {
          key: "handleUtils",
          value: function() {
            window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this.selectedCountryData.iso2 && this._updatePlaceholder()), this.resolveUtilsScriptPromise();
          }
        }, {
          key: "destroy",
          value: function() {
            var s = this.telInput.form;
            if (this.options.allowDropdown) {
              this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
              var l = this.telInput.closest("label");
              l && l.removeEventListener("click", this._handleLabelClick);
            }
            this.hiddenInput && s && s.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoInsertDialCode && (s && s.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("input", this._handleKeyEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
            var d = this.telInput.parentNode;
            d.parentNode.insertBefore(this.telInput, d), d.parentNode.removeChild(d), delete window.intlTelInputGlobals.instances[this.id];
          }
        }, {
          key: "getExtension",
          value: function() {
            return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : "";
          }
        }, {
          key: "getNumber",
          value: function(s) {
            if (window.intlTelInputUtils) {
              var l = this.selectedCountryData.iso2;
              return intlTelInputUtils.formatNumber(this._getFullNumber(), l, s);
            }
            return "";
          }
        }, {
          key: "getNumberType",
          value: function() {
            return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99;
          }
        }, {
          key: "getSelectedCountryData",
          value: function() {
            return this.selectedCountryData;
          }
        }, {
          key: "getValidationError",
          value: function() {
            if (window.intlTelInputUtils) {
              var s = this.selectedCountryData.iso2;
              return intlTelInputUtils.getValidationError(this._getFullNumber(), s);
            }
            return -99;
          }
        }, {
          key: "isValidNumber",
          value: function(s) {
            var l = this._getFullNumber();
            return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(l, this.selectedCountryData.iso2, s) : null;
          }
        }, {
          key: "isValidNumberPrecise",
          value: function() {
            var s = this._getFullNumber();
            return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(s, this.selectedCountryData.iso2) : null;
          }
        }, {
          key: "setCountry",
          value: function(s) {
            var l = s.toLowerCase();
            this.selectedCountryData.iso2 !== l && (this._setFlag(l), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
          }
        }, {
          key: "setNumber",
          value: function(s) {
            var l = this._updateFlagFromNumber(s);
            this._updateValFromNumber(s), l && this._triggerCountryChange();
          }
        }, {
          key: "setPlaceholderNumberType",
          value: function(s) {
            this.options.placeholderNumberType = s, this._updatePlaceholder();
          }
        }]), w;
      }();
      I.getCountryData = function() {
        return r;
      };
      var Z = function(h, s, l) {
        var d = document.createElement("script");
        d.onload = function() {
          M("handleUtils"), s && s();
        }, d.onerror = function() {
          M("rejectUtilsScriptPromise"), l && l();
        }, d.className = "iti-load-utils", d.async = !0, d.src = h, document.body.appendChild(d);
      };
      return I.loadUtils = function(w) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
          if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, typeof Promise < "u")
            return new Promise(function(h, s) {
              return Z(w, h, s);
            });
          Z(w);
        }
        return null;
      }, I.defaults = V, I.version = "19.5.7", function(w, h) {
        var s = new J(w, h);
        return s._init(), w.setAttribute("data-intl-tel-input-id", s.id), window.intlTelInputGlobals.instances[s.id] = s, s;
      };
    }();
  });
})(Tn);
var xu = Tn.exports, ku = xu;
const Cu = /* @__PURE__ */ _u(ku), Su = ["placeholder", "data-testid"], Bu = {
  __name: "TwcPhoneInput",
  props: {
    ipInfoKey: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    displayError: {
      type: Boolean,
      default: !1
    },
    dataTestid: {
      type: String,
      default: ""
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = ee(null), n = ee(null), o = ee(!1), i = e, a = t;
    function u() {
      o.value = n.value.isValidNumber(), a("change", r.value.value, n.value.getNumber() || !1);
    }
    const c = k(() => {
      let p = "TwcPhoneInput mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input";
      return o.value && (p += " border-green-500 focus:border-green-500 focus:outline-green-500 focus:ring-green-500 bg-green-50"), i.displayError && (p += " border-red-500 focus:border-red-500 focus:outline-red-500 bg-red-50"), p;
    });
    return vt(() => {
      const p = (g) => {
        localStorage != null && localStorage.getItem("ipCountry") ? g(localStorage.getItem("ipCountry")) : i.ipInfoKey ? fetch(`https://ipinfo.io/json?token=${i.ipInfoKey}`, {
          headers: { Accept: "application/json" }
        }).then((v) => v.json()).then((v) => {
          g(v.country), localStorage == null || localStorage.setItem("ipCountry", v.country);
        }).catch(() => {
          g("US");
        }) : g("US");
      };
      n.value = Cu(r.value, {
        initialCountry: "auto",
        geoIpLookup: p,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.5.7/js/utils.js"
      });
    }), (p, g) => (x(), E("input", {
      ref_key: "phoneInput",
      ref: r,
      placeholder: p.$props.placeholder,
      class: R(c.value),
      "data-testid": p.$props.dataTestid,
      onInput: u
    }, null, 42, Su));
  }
}, ju = {
  __name: "TwcSpinner",
  props: {
    color: {
      type: String,
      default: "text-black"
    },
    duration: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    function r() {
      switch (t.duration) {
        case "1":
          return "!animate-[spin_1.0s_linear_infinite]";
        case "1.5":
          return "!animate-[spin_1.5s_linear_infinite]";
        case "2":
          return "!animate-[spin_2.0s_linear_infinite]";
        case "3":
          return "!animate-[spin_3.0s_linear_infinite]";
        default:
          return "!animate-[spin_0.75s_linear_infinite]";
      }
    }
    return (n, o) => (x(), E("div", {
      class: R(`h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface ${r()} ${t.color} ${t.class}`),
      role: "status"
    }, null, 2));
  }
}, Ru = {
  __name: "TwcIcon",
  props: {
    type: {
      type: String,
      default: "regular"
    },
    sharp: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      required: !0
    },
    class: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "1x"
    },
    custom: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    function r() {
      return t.custom ? `fa-kit fa-${t.icon} fa-${t.size}` : `${t.sharp ? "fa-sharp " : ""}fa-${t.type} fa-${t.icon} fa-${t.size}`;
    }
    return (n, o) => (x(), E("i", {
      class: R(`${r()} ${t.class}`)
    }, null, 2));
  }
}, $u = {
  __name: "TwcAccordionTable",
  setup(e) {
    return (t, r) => (x(), Q(A(Jn), { class: "TwcAccordionTable" }, {
      default: Y(() => [
        N(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Hu = /* @__PURE__ */ ze($u, [["__scopeId", "data-v-7d937965"]]), Tu = { class: "flex" }, Iu = {
  key: 0,
  class: "flex-1 mr-5"
}, Lu = {
  __name: "TwcAccordionTableRow",
  props: {
    data: {
      type: Array,
      required: !0,
      default: () => []
    }
  },
  setup(e) {
    return (t, r) => (x(), Q(A(Fo), { class: "TwcAccordionTableRow" }, {
      default: Y(() => [
        Ge(A(Oo), null, {
          default: Y(() => [
            B("div", Tu, [
              (x(!0), E(Ae, null, Wr(e.data, (n, o) => (x(), E("div", {
                key: o,
                class: "flex-1 self-center first:font-bold uppercase"
              }, X(n), 1))), 128)),
              t.$slots.action ? (x(), E("div", Iu, [
                N(t.$slots, "action", {}, void 0, !0)
              ])) : W("", !0)
            ])
          ]),
          _: 3
        }),
        Ge(A(Io), null, {
          default: Y(() => [
            N(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, Vu = /* @__PURE__ */ ze(Lu, [["__scopeId", "data-v-3a028803"]]);
export {
  Hu as TwcAccordionTable,
  Vu as TwcAccordionTableRow,
  Au as TwcButton,
  Nu as TwcHeading,
  Ru as TwcIcon,
  Du as TwcInput,
  Ou as TwcLabel,
  zu as TwcLink,
  Fu as TwcParagraph,
  Bu as TwcPhoneInput,
  Mu as TwcSelect,
  ju as TwcSpinner,
  Eu as TwcToggle
};
