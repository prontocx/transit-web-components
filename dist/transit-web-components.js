import { reactive as zo, defineComponent as K, useAttrs as Kt, openBlock as w, createElementBlock as L, mergeProps as Re, unref as T, createTextVNode as dt, toDisplayString as ne, createBlock as Q, resolveDynamicComponent as xt, normalizeClass as H, withCtx as Z, ref as ie, provide as Oo, h as it, TransitionGroup as Eo, pushScopeId as Mo, popScopeId as Bo, toRefs as Ce, renderSlot as z, createCommentVNode as U, createElementVNode as R, nextTick as jo, onMounted as _t, computed as x, resolveComponent as ft, normalizeProps as rt, Fragment as Be, Comment as Ro, withDirectives as Ct, isRef as Qr, vModelDynamic as Fo, renderList as Jr, vModelSelect as Ho, vModelCheckbox as Vo, onBeforeMount as Wo, onBeforeUnmount as Go, useSlots as Uo, getCurrentInstance as qo, watch as ar, guardReactiveProps as kt, withScopeId as Ko, normalizeStyle as Dt, withKeys as Qo, createVNode as Ye, getCurrentScope as Jo, onScopeDispose as Yo, inject as Zo, mergeModels as gt, useModel as Yr, createSlots as Zr, vModelText as Xo } from "vue";
let Xr = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
const zt = zo({});
function ot(e, t) {
  return Wo(() => {
    e && (zt[e] = {
      id: e,
      flush: (t == null ? void 0 : t.flush) ?? !1,
      alwaysOpen: (t == null ? void 0 : t.alwaysOpen) ?? !1,
      openFirstItem: (t == null ? void 0 : t.openFirstItem) ?? !0,
      panels: {}
    });
  }), Go(() => {
    e && delete zt[e];
  }), {
    accordionsStates: zt
  };
}
const en = ["data-accordion-id"], tn = /* @__PURE__ */ K({
  __name: "FwbAccordion",
  props: {
    alwaysOpen: { type: Boolean, default: !1 },
    openFirstItem: { type: Boolean, default: !0 },
    flush: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = Xr();
    return ot(r, { ...t }), (o, n) => (w(), L("div", { "data-accordion-id": T(r) }, [
      z(o.$slots, "default")
    ], 8, en));
  }
});
function rn() {
  for (var e = 0, t, r, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = eo(t)) && (o && (o += " "), o += r);
  return o;
}
function eo(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", o = 0; o < e.length; o++)
    e[o] && (t = eo(e[o])) && (r && (r += " "), r += t);
  return r;
}
var Qt = "-";
function on(e) {
  var t = sn(e), r = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, n = o === void 0 ? {} : o;
  function i(l) {
    var d = l.split(Qt);
    return d[0] === "" && d.length !== 1 && d.shift(), to(d, t) || nn(l);
  }
  function s(l, d) {
    var p = r[l] || [];
    return d && n[l] ? [].concat(p, n[l]) : p;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function to(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), n = o ? to(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length !== 0) {
    var i = e.join(Qt);
    return (s = t.validators.find(function(l) {
      var d = l.validator;
      return d(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var lr = /^\[(.+)\]$/;
function nn(e) {
  if (lr.test(e)) {
    var t = lr.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function sn(e) {
  var t = e.theme, r = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, n = ln(Object.entries(e.classGroups), r);
  return n.forEach(function(i) {
    var s = i[0], l = i[1];
    jt(l, o, s, t);
  }), o;
}
function jt(e, t, r, o) {
  e.forEach(function(n) {
    if (typeof n == "string") {
      var i = n === "" ? t : ur(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (an(n)) {
        jt(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(function(s) {
      var l = s[0], d = s[1];
      jt(d, ur(t, l), r, o);
    });
  });
}
function ur(e, t) {
  var r = e;
  return t.split(Qt).forEach(function(o) {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function an(e) {
  return e.isThemeGetter;
}
function ln(e, t) {
  return t ? e.map(function(r) {
    var o = r[0], n = r[1], i = n.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(l) {
        var d = l[0], p = l[1];
        return [t + d, p];
      })) : s;
    });
    return [o, i];
  }) : e;
}
function un(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function n(i, s) {
    r.set(i, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = o.get(i)) !== void 0)
        return n(i, s), s;
    },
    set: function(i, s) {
      r.has(i) ? r.set(i, s) : n(i, s);
    }
  };
}
var ro = "!";
function dn(e) {
  var t = e.separator || ":", r = t.length === 1, o = t[0], n = t.length;
  return function(i) {
    for (var s = [], l = 0, d = 0, p, g = 0; g < i.length; g++) {
      var f = i[g];
      if (l === 0) {
        if (f === o && (r || i.slice(g, g + n) === t)) {
          s.push(i.slice(d, g)), d = g + n;
          continue;
        }
        if (f === "/") {
          p = g;
          continue;
        }
      }
      f === "[" ? l++ : f === "]" && l--;
    }
    var m = s.length === 0 ? i : i.substring(d), y = m.startsWith(ro), k = y ? m.substring(1) : m, _ = p && p > d ? p - d : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: k,
      maybePostfixModifierPosition: _
    };
  };
}
function cn(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(o) {
    var n = o[0] === "[";
    n ? (t.push.apply(t, r.sort().concat([o])), r = []) : r.push(o);
  }), t.push.apply(t, r.sort()), t;
}
function pn(e) {
  return {
    cache: un(e.cacheSize),
    splitModifiers: dn(e),
    ...on(e)
  };
}
var hn = /\s+/;
function fn(e, t) {
  var r = t.splitModifiers, o = t.getClassGroupId, n = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(hn).map(function(s) {
    var l = r(s), d = l.modifiers, p = l.hasImportantModifier, g = l.baseClassName, f = l.maybePostfixModifierPosition, m = o(f ? g.substring(0, f) : g), y = !!f;
    if (!m) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (m = o(g), !m)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      y = !1;
    }
    var k = cn(d).join(":"), _ = p ? k + ro : k;
    return {
      isTailwindClass: !0,
      modifierId: _,
      classGroupId: m,
      originalClassName: s,
      hasPostfixModifier: y
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var l = s.modifierId, d = s.classGroupId, p = s.hasPostfixModifier, g = l + d;
    return i.has(g) ? !1 : (i.add(g), n(d, p).forEach(function(f) {
      return i.add(l + f);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function gn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o, n, i, s = l;
  function l(p) {
    var g = t[0], f = t.slice(1), m = f.reduce(function(y, k) {
      return k(y);
    }, g());
    return o = pn(m), n = o.cache.get, i = o.cache.set, s = d, d(p);
  }
  function d(p) {
    var g = n(p);
    if (g)
      return g;
    var f = fn(p, o);
    return i(p, f), f;
  }
  return function() {
    return s(rn.apply(null, arguments));
  };
}
function G(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var oo = /^\[(?:([a-z-]+):)?(.+)\]$/i, mn = /^\d+\/\d+$/, bn = /* @__PURE__ */ new Set(["px", "full", "screen"]), yn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function le(e) {
  return Pe(e) || bn.has(e) || mn.test(e) || Rt(e);
}
function Rt(e) {
  return Ne(e, "length", Sn);
}
function xn(e) {
  return Ne(e, "size", no);
}
function _n(e) {
  return Ne(e, "position", no);
}
function Cn(e) {
  return Ne(e, "url", In);
}
function st(e) {
  return Ne(e, "number", Pe);
}
function Pe(e) {
  return !Number.isNaN(Number(e));
}
function kn(e) {
  return e.endsWith("%") && Pe(e.slice(0, -1));
}
function We(e) {
  return dr(e) || Ne(e, "number", dr);
}
function E(e) {
  return oo.test(e);
}
function Ge() {
  return !0;
}
function be(e) {
  return yn.test(e);
}
function $n(e) {
  return Ne(e, "", Tn);
}
function Ne(e, t, r) {
  var o = oo.exec(e);
  return o ? o[1] ? o[1] === t : r(o[2]) : !1;
}
function Sn(e) {
  return vn.test(e);
}
function no() {
  return !1;
}
function In(e) {
  return e.startsWith("url(");
}
function dr(e) {
  return Number.isInteger(Number(e));
}
function Tn(e) {
  return wn.test(e);
}
function Pn() {
  var e = G("colors"), t = G("spacing"), r = G("blur"), o = G("brightness"), n = G("borderColor"), i = G("borderRadius"), s = G("borderSpacing"), l = G("borderWidth"), d = G("contrast"), p = G("grayscale"), g = G("hueRotate"), f = G("invert"), m = G("gap"), y = G("gradientColorStops"), k = G("gradientColorStopPositions"), _ = G("inset"), I = G("margin"), S = G("opacity"), $ = G("padding"), O = G("saturate"), V = G("scale"), W = G("sepia"), F = G("skew"), J = G("space"), X = G("translate"), ee = function() {
    return ["auto", "contain", "none"];
  }, D = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, M = function() {
    return ["auto", E, t];
  }, A = function() {
    return [E, t];
  }, j = function() {
    return ["", le];
  }, C = function() {
    return ["auto", Pe, E];
  }, te = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, a = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, u = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, c = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, h = function() {
    return ["", "0", E];
  }, b = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, v = function() {
    return [Pe, st];
  }, N = function() {
    return [Pe, E];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ge],
      spacing: [le],
      blur: ["none", "", be, E],
      brightness: v(),
      borderColor: [e],
      borderRadius: ["none", "", "full", be, E],
      borderSpacing: A(),
      borderWidth: j(),
      contrast: v(),
      grayscale: h(),
      hueRotate: N(),
      invert: h(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kn, Rt],
      inset: M(),
      margin: M(),
      opacity: v(),
      padding: A(),
      saturate: v(),
      scale: v(),
      sepia: h(),
      skew: N(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
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
        columns: [be]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        object: [].concat(te(), [E])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
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
        z: ["auto", We]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
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
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: h()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: h()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", We]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ge]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", We]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ge]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [We]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
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
        justify: ["normal"].concat(c())
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
        content: ["normal"].concat(c(), ["baseline"])
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
        "place-content": [].concat(c(), ["baseline"])
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
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [I]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [I]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [I]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [I]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [I]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [I]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [I]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [I]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [I]
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
        w: ["auto", "min", "max", "fit", E, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", E, le]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [be]
        }, be, E]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [E, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", E, le]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [E, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", be, Rt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", st]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ge]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Pe, st]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", E, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
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
        "placeholder-opacity": [S]
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
        "text-opacity": [S]
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
        decoration: [].concat(a(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", E, le]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
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
        content: ["none", E]
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
        "bg-opacity": [S]
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
        bg: [].concat(te(), [_n])
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
        bg: ["auto", "cover", "contain", xn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cn]
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
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
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
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(a(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: a()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(a())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [le]
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
        ring: j()
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
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [le]
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
        shadow: ["", "inner", "none", be, $n]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ge]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": u()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": u()
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
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", be, E]
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
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [W]
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
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
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
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [W]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
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
        rotate: [We, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [X]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [X]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [F]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [F]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", E]
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
        stroke: [le, st]
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
var se = /* @__PURE__ */ gn(Pn);
const Ln = "p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900";
function An(e) {
  const t = x(() => e.value.parentElement.parentElement.dataset.accordionId), r = x(() => e.value.parentElement.dataset.panelId), { accordionsStates: o } = ot(), n = x(() => o[t.value]), i = x(() => o[t.value].panels[r.value]), s = x(() => Object.keys(o[t.value].panels[r.value]).length);
  return {
    contentClasses: x(() => se(
      Ln,
      !i.value.isVisible && "hidden",
      (i.value.order !== s.value - 1 || n.value.flush) && "border-b-0",
      i.value.order === s.value - 1 && "border-t-0",
      n.value.flush && "border-x-0"
    ))
  };
}
const Nn = /* @__PURE__ */ K({
  __name: "FwbAccordionContent",
  setup(e) {
    const t = ie(!1), r = ie();
    let o;
    return _t(() => {
      o = An(r).contentClasses, t.value = !0;
    }), (n, i) => (w(), L("div", {
      ref_key: "content",
      ref: r
    }, [
      t.value ? (w(), L("div", {
        key: 0,
        class: H(T(o))
      }, [
        z(n.$slots, "default")
      ], 2)) : U("", !0)
    ], 512));
  }
}), Dn = "flex items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800", zn = "w-6 h-6 shrink-0";
function On(e) {
  const t = x(() => e.value.parentElement.parentElement.dataset.accordionId), r = x(() => e.value.parentElement.dataset.panelId), { accordionsStates: o } = ot(), n = x(() => o[t.value]), i = x(() => n.value.panels[r.value]), s = x(() => Object.keys(i.value).length), l = x(() => i.value.order !== s.value - 1), d = x(() => l.value || n.value.flush && i.value.order === s.value - 1 && !i.value.isVisible), p = x(() => se(
    Dn,
    i.value.isVisible && "bg-gray-100 dark:bg-gray-800",
    i.value.order === 0 && !n.value.flush && "rounded-t-xl",
    i.value.order === 0 && n.value.flush && "border-t-0",
    d.value && "border-b-0",
    n.value.flush && "border-x-0"
  )), g = x(() => se(zn, i.value.isVisible && "rotate-180"));
  return {
    headerClasses: p,
    arrowClasses: g
  };
}
const En = { class: "w-full" }, Mn = /* @__PURE__ */ R("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
}, null, -1), Bn = [
  Mn
], jn = /* @__PURE__ */ K({
  __name: "FwbAccordionHeader",
  setup(e) {
    const t = ie(!1), r = ie(), o = x(() => r.value.parentElement.parentElement.dataset.accordionId), n = x(() => r.value.parentElement.dataset.panelId), { accordionsStates: i } = ot(), s = x(() => i[o.value]), l = x(() => s.value.panels[n.value]);
    let d, p;
    function g() {
      const y = l.value.isVisible;
      for (const k in s.value.panels) {
        const _ = s.value.panels[k];
        _.id !== n.value ? _.isVisible = !1 : _.isVisible = !y;
      }
    }
    function f() {
      l.value.isVisible = !l.value.isVisible;
    }
    function m() {
      if (s.value.alwaysOpen)
        return f();
      g();
    }
    return _t(() => {
      const y = On(r);
      d = y.headerClasses, p = y.arrowClasses, t.value = !0;
    }), (y, k) => (w(), L("div", {
      ref_key: "header",
      ref: r
    }, [
      t.value ? (w(), L("button", {
        key: 0,
        type: "button",
        class: H(T(d)),
        onClick: m
      }, [
        R("span", En, [
          z(y.$slots, "default")
        ]),
        (w(), L("svg", {
          "data-accordion-icon": "",
          class: H(T(p)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, Bn, 2))
      ], 2)) : U("", !0)
    ], 512));
  }
}), Rn = ["data-panel-id"], Fn = /* @__PURE__ */ K({
  __name: "FwbAccordionPanel",
  setup(e) {
    const { accordionsStates: t } = ot(), r = Xr(), o = ie(), n = x(() => o.value ? o.value.parentElement.dataset.accordionId : null), i = x(() => t[n.value]);
    return _t(() => {
      var l, d;
      const s = (d = Object.keys((l = i == null ? void 0 : i.value) == null ? void 0 : l.panels)) == null ? void 0 : d.length;
      i.value.panels[r] = {
        id: r,
        order: s,
        isVisible: (i.value.openFirstItem && s === 0) ?? !1
      };
    }), (s, l) => (w(), L("div", {
      ref_key: "panel",
      ref: o,
      "data-panel-id": T(r)
    }, [
      n.value ? z(s.$slots, "default", { key: 0 }) : U("", !0)
    ], 8, Rn));
  }
}), Ft = (e) => se(e);
function Hn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var io = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = [], n = 0; n < arguments.length; n++) {
        var i = arguments[n];
        if (i) {
          var s = typeof i;
          if (s === "string" || s === "number")
            o.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = r.apply(null, i);
              l && o.push(l);
            }
          } else if (s === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              o.push(i.toString());
              continue;
            }
            for (var d in i)
              t.call(i, d) && i[d] && o.push(d);
          }
        }
      }
      return o.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(io);
var Vn = io.exports;
const Wn = /* @__PURE__ */ Hn(Vn), Gn = {
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
}, Un = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function qn(e) {
  const t = x(() => Gn[e.size.value]), r = x(() => Un[e.color.value]), o = x(() => "text-gray-200 dark:text-gray-600"), n = x(() => "animate-spin");
  return { spinnerClasses: x(() => Wn(
    n.value,
    o.value,
    r.value,
    t.value
  )) };
}
const Kn = /* @__PURE__ */ R("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Qn = /* @__PURE__ */ R("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Jn = [
  Kn,
  Qn
], at = /* @__PURE__ */ K({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = qn(Ce(t));
    return (o, n) => (w(), L("svg", {
      class: H(T(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, Jn, 2));
  }
}), cr = {
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
}, pr = {
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
}, hr = {
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
}, fr = {
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
}, Yn = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, Zn = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, gr = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, Ot = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], Xn = ["alternative", "light"];
function ei(e) {
  const t = Uo(), r = x(() => e.square.value ? Zn[e.size.value] : Yn[e.size.value]), o = x(() => {
    const i = !!e.gradient.value, s = !!e.color.value, l = e.outline.value;
    let d = "", p = "";
    if (i && l)
      Ot.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (p = fr.default[e.gradient.value], e.disabled.value || (d = fr.hover[e.gradient.value]));
    else if (i)
      p = hr.default[e.gradient.value], e.disabled.value || (d = hr.hover[e.gradient.value]);
    else if (s && l)
      if (Xn.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const f = e.color.value;
        p = pr.default[f], e.disabled.value || (d = pr.hover[f]);
      }
    else {
      const f = e.color.value;
      p = cr.default[f], e.disabled.value || (d = cr.hover[f]);
    }
    let g = "";
    return e.shadow.value === "" ? e.gradient.value && Ot.includes(e.gradient.value) && (g = gr[e.gradient.value]) : typeof e.shadow.value == "string" && Ot.includes(e.shadow.value) && (g = gr[e.shadow.value]), [
      p,
      d,
      g,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      i && l ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((f) => f).join(" ");
  }), n = x(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((i) => i).join(" ") : "");
  return {
    wrapperClasses: o.value,
    spanClasses: n.value
  };
}
function ti(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = x(() => t[e.size.value]);
  return {
    color: x(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const ri = {
  key: 0,
  class: "mr-2"
}, oi = {
  key: 0,
  class: "mr-2"
}, ni = {
  key: 1,
  class: "ml-2"
}, ii = {
  key: 1,
  class: "ml-2"
}, si = /* @__PURE__ */ K({
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
    const t = e, r = x(() => ei(Ce(t))), o = x(() => Ft(r.value.wrapperClasses)), n = x(() => Ft(r.value.spanClasses)), i = x(() => t.outline && t.gradient), s = x(() => t.loading && t.loadingPosition === "prefix"), l = x(() => t.loading && t.loadingPosition === "suffix"), { color: d, size: p } = ti(Ce(t)), g = t.tag !== "a" ? ft(t.tag) : "a", f = t.href ? g : "button", m = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (y, k) => (w(), Q(xt(T(f)), rt({
      class: o.value,
      [T(m) || ""]: y.href,
      disabled: T(f) === "button" && y.disabled
    }), {
      default: Z(() => [
        !i.value && (y.$slots.prefix || s.value) ? (w(), L("div", ri, [
          s.value ? (w(), Q(at, {
            key: 0,
            color: T(d),
            size: T(p)
          }, null, 8, ["color", "size"])) : z(y.$slots, "prefix", { key: 1 })
        ])) : U("", !0),
        R("span", {
          class: H(n.value)
        }, [
          i.value && (y.$slots.prefix || s.value) ? (w(), L("span", oi, [
            s.value ? (w(), Q(at, {
              key: 0,
              color: T(d),
              size: T(p)
            }, null, 8, ["color", "size"])) : z(y.$slots, "prefix", { key: 1 })
          ])) : U("", !0),
          z(y.$slots, "default"),
          i.value && (y.$slots.suffix || l.value) ? (w(), L("span", ni, [
            l.value ? (w(), Q(at, {
              key: 0,
              color: T(d),
              size: T(p)
            }, null, 8, ["color", "size"])) : z(y.$slots, "suffix", { key: 1 })
          ])) : U("", !0)
        ], 2),
        !i.value && (y.$slots.suffix || l.value) ? (w(), L("div", ii, [
          l.value ? (w(), Q(at, {
            key: 0,
            color: T(d),
            size: T(p)
          }, null, 8, ["color", "size"])) : z(y.$slots, "suffix", { key: 1 })
        ])) : U("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
var mr;
const so = typeof window < "u", ai = (e) => typeof e < "u", li = (e) => typeof e == "function";
so && (mr = window == null ? void 0 : window.navigator) != null && mr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ui(e) {
  return typeof e == "function" ? e() : T(e);
}
function di(e) {
  return e;
}
function ci(e) {
  return Jo() ? (Yo(e), !0) : !1;
}
function pi(e, t, r = {}) {
  const {
    immediate: o = !0
  } = r, n = ie(!1);
  let i = null;
  function s() {
    i && (clearTimeout(i), i = null);
  }
  function l() {
    n.value = !1, s();
  }
  function d(...p) {
    s(), n.value = !0, i = setTimeout(() => {
      n.value = !1, i = null, e(...p);
    }, ui(t));
  }
  return o && (n.value = !0, so && d()), ci(l), {
    isPending: n,
    start: d,
    stop: l
  };
}
function hi(e) {
  return JSON.parse(JSON.stringify(e));
}
const br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yr = "__vueuse_ssr_handlers__";
br[yr] = br[yr] || {};
var vr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(vr || (vr = {}));
var fi = Object.defineProperty, wr = Object.getOwnPropertySymbols, gi = Object.prototype.hasOwnProperty, mi = Object.prototype.propertyIsEnumerable, xr = (e, t, r) => t in e ? fi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, bi = (e, t) => {
  for (var r in t || (t = {}))
    gi.call(t, r) && xr(e, r, t[r]);
  if (wr)
    for (var r of wr(t))
      mi.call(t, r) && xr(e, r, t[r]);
  return e;
};
const yi = {
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
bi({
  linear: di
}, yi);
function ao(e, t, r, o = {}) {
  var n, i, s;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: p,
    deep: g = !1,
    defaultValue: f
  } = o, m = qo(), y = r || (m == null ? void 0 : m.emit) || ((n = m == null ? void 0 : m.$emit) == null ? void 0 : n.bind(m)) || ((s = (i = m == null ? void 0 : m.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let k = p;
  t || (t = "modelValue"), k = p || k || `update:${t.toString()}`;
  const _ = (S) => l ? li(l) ? l(S) : hi(S) : S, I = () => ai(e[t]) ? _(e[t]) : f;
  if (d) {
    const S = I(), $ = ie(S);
    return ar(() => e[t], (O) => $.value = _(O)), ar($, (O) => {
      (O !== e[t] || g) && y(k, O);
    }, { deep: g }), $;
  } else
    return x({
      get() {
        return I();
      },
      set(S) {
        y(k, S);
      }
    });
}
var vi = typeof global == "object" && global && global.Object === Object && global;
const wi = vi;
var xi = typeof self == "object" && self && self.Object === Object && self, _i = wi || xi || Function("return this")();
const Jt = _i;
var Ci = Jt.Symbol;
const ke = Ci;
var lo = Object.prototype, ki = lo.hasOwnProperty, $i = lo.toString, Ue = ke ? ke.toStringTag : void 0;
function Si(e) {
  var t = ki.call(e, Ue), r = e[Ue];
  try {
    e[Ue] = void 0;
    var o = !0;
  } catch {
  }
  var n = $i.call(e);
  return o && (t ? e[Ue] = r : delete e[Ue]), n;
}
var Ii = Object.prototype, Ti = Ii.toString;
function Pi(e) {
  return Ti.call(e);
}
var Li = "[object Null]", Ai = "[object Undefined]", _r = ke ? ke.toStringTag : void 0;
function Yt(e) {
  return e == null ? e === void 0 ? Ai : Li : _r && _r in Object(e) ? Si(e) : Pi(e);
}
function Zt(e) {
  return e != null && typeof e == "object";
}
var Ni = "[object Symbol]";
function Xt(e) {
  return typeof e == "symbol" || Zt(e) && Yt(e) == Ni;
}
function Di(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = Array(o); ++r < o; )
    n[r] = t(e[r], r, e);
  return n;
}
var zi = Array.isArray;
const nt = zi;
var Oi = 1 / 0, Cr = ke ? ke.prototype : void 0, kr = Cr ? Cr.toString : void 0;
function uo(e) {
  if (typeof e == "string")
    return e;
  if (nt(e))
    return Di(e, uo) + "";
  if (Xt(e))
    return kr ? kr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Oi ? "-0" : t;
}
function mt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ei(e) {
  return e;
}
var Mi = "[object AsyncFunction]", Bi = "[object Function]", ji = "[object GeneratorFunction]", Ri = "[object Proxy]";
function Fi(e) {
  if (!mt(e))
    return !1;
  var t = Yt(e);
  return t == Bi || t == ji || t == Mi || t == Ri;
}
var Hi = Jt["__core-js_shared__"];
const Et = Hi;
var $r = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vi(e) {
  return !!$r && $r in e;
}
var Wi = Function.prototype, Gi = Wi.toString;
function Ui(e) {
  if (e != null) {
    try {
      return Gi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qi = /[\\^$.*+?()[\]{}|]/g, Ki = /^\[object .+?Constructor\]$/, Qi = Function.prototype, Ji = Object.prototype, Yi = Qi.toString, Zi = Ji.hasOwnProperty, Xi = RegExp(
  "^" + Yi.call(Zi).replace(qi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function es(e) {
  if (!mt(e) || Vi(e))
    return !1;
  var t = Fi(e) ? Xi : Ki;
  return t.test(Ui(e));
}
function ts(e, t) {
  return e == null ? void 0 : e[t];
}
function er(e, t) {
  var r = ts(e, t);
  return es(r) ? r : void 0;
}
function rs(e, t, r) {
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
var os = 800, ns = 16, is = Date.now;
function ss(e) {
  var t = 0, r = 0;
  return function() {
    var o = is(), n = ns - (o - r);
    if (r = o, n > 0) {
      if (++t >= os)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function as(e) {
  return function() {
    return e;
  };
}
var ls = function() {
  try {
    var e = er(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const bt = ls;
var us = bt ? function(e, t) {
  return bt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: as(t),
    writable: !0
  });
} : Ei;
const ds = us;
var cs = ss(ds);
const ps = cs;
var hs = 9007199254740991, fs = /^(?:0|[1-9]\d*)$/;
function co(e, t) {
  var r = typeof e;
  return t = t ?? hs, !!t && (r == "number" || r != "symbol" && fs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function gs(e, t, r) {
  t == "__proto__" && bt ? bt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function po(e, t) {
  return e === t || e !== e && t !== t;
}
var ms = Object.prototype, bs = ms.hasOwnProperty;
function ys(e, t, r) {
  var o = e[t];
  (!(bs.call(e, t) && po(o, r)) || r === void 0 && !(t in e)) && gs(e, t, r);
}
var Sr = Math.max;
function vs(e, t, r) {
  return t = Sr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, n = -1, i = Sr(o.length - t, 0), s = Array(i); ++n < i; )
      s[n] = o[t + n];
    n = -1;
    for (var l = Array(t + 1); ++n < t; )
      l[n] = o[n];
    return l[t] = r(s), rs(e, this, l);
  };
}
var ws = 9007199254740991;
function xs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ws;
}
var _s = "[object Arguments]";
function Ir(e) {
  return Zt(e) && Yt(e) == _s;
}
var ho = Object.prototype, Cs = ho.hasOwnProperty, ks = ho.propertyIsEnumerable, $s = Ir(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ir : function(e) {
  return Zt(e) && Cs.call(e, "callee") && !ks.call(e, "callee");
};
const fo = $s;
var Ss = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Is = /^\w*$/;
function Ts(e, t) {
  if (nt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Xt(e) ? !0 : Is.test(e) || !Ss.test(e) || t != null && e in Object(t);
}
var Ps = er(Object, "create");
const Ze = Ps;
function Ls() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function As(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ns = "__lodash_hash_undefined__", Ds = Object.prototype, zs = Ds.hasOwnProperty;
function Os(e) {
  var t = this.__data__;
  if (Ze) {
    var r = t[e];
    return r === Ns ? void 0 : r;
  }
  return zs.call(t, e) ? t[e] : void 0;
}
var Es = Object.prototype, Ms = Es.hasOwnProperty;
function Bs(e) {
  var t = this.__data__;
  return Ze ? t[e] !== void 0 : Ms.call(t, e);
}
var js = "__lodash_hash_undefined__";
function Rs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ze && t === void 0 ? js : t, this;
}
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ae.prototype.clear = Ls;
Ae.prototype.delete = As;
Ae.prototype.get = Os;
Ae.prototype.has = Bs;
Ae.prototype.set = Rs;
function Fs() {
  this.__data__ = [], this.size = 0;
}
function $t(e, t) {
  for (var r = e.length; r--; )
    if (po(e[r][0], t))
      return r;
  return -1;
}
var Hs = Array.prototype, Vs = Hs.splice;
function Ws(e) {
  var t = this.__data__, r = $t(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Vs.call(t, r, 1), --this.size, !0;
}
function Gs(e) {
  var t = this.__data__, r = $t(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Us(e) {
  return $t(this.__data__, e) > -1;
}
function qs(e, t) {
  var r = this.__data__, o = $t(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Fe.prototype.clear = Fs;
Fe.prototype.delete = Ws;
Fe.prototype.get = Gs;
Fe.prototype.has = Us;
Fe.prototype.set = qs;
var Ks = er(Jt, "Map");
const Qs = Ks;
function Js() {
  this.size = 0, this.__data__ = {
    hash: new Ae(),
    map: new (Qs || Fe)(),
    string: new Ae()
  };
}
function Ys(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function St(e, t) {
  var r = e.__data__;
  return Ys(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Zs(e) {
  var t = St(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Xs(e) {
  return St(this, e).get(e);
}
function ea(e) {
  return St(this, e).has(e);
}
function ta(e, t) {
  var r = St(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
De.prototype.clear = Js;
De.prototype.delete = Zs;
De.prototype.get = Xs;
De.prototype.has = ea;
De.prototype.set = ta;
var ra = "Expected a function";
function tr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ra);
  var r = function() {
    var o = arguments, n = t ? t.apply(this, o) : o[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = e.apply(this, o);
    return r.cache = i.set(n, s) || i, s;
  };
  return r.cache = new (tr.Cache || De)(), r;
}
tr.Cache = De;
var oa = 500;
function na(e) {
  var t = tr(e, function(o) {
    return r.size === oa && r.clear(), o;
  }), r = t.cache;
  return t;
}
var ia = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sa = /\\(\\)?/g, aa = na(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ia, function(r, o, n, i) {
    t.push(n ? i.replace(sa, "$1") : o || r);
  }), t;
});
const la = aa;
function ua(e) {
  return e == null ? "" : uo(e);
}
function It(e, t) {
  return nt(e) ? e : Ts(e, t) ? [e] : la(ua(e));
}
var da = 1 / 0;
function rr(e) {
  if (typeof e == "string" || Xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -da ? "-0" : t;
}
function ca(e, t) {
  t = It(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[rr(t[r++])];
  return r && r == o ? e : void 0;
}
function pa(e, t) {
  for (var r = -1, o = t.length, n = e.length; ++r < o; )
    e[n + r] = t[r];
  return e;
}
var Tr = ke ? ke.isConcatSpreadable : void 0;
function ha(e) {
  return nt(e) || fo(e) || !!(Tr && e && e[Tr]);
}
function go(e, t, r, o, n) {
  var i = -1, s = e.length;
  for (r || (r = ha), n || (n = []); ++i < s; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? go(l, t - 1, r, o, n) : pa(n, l) : o || (n[n.length] = l);
  }
  return n;
}
function fa(e) {
  var t = e == null ? 0 : e.length;
  return t ? go(e, 1) : [];
}
function ga(e) {
  return ps(vs(e, void 0, fa), e + "");
}
function ma(e, t) {
  return e != null && t in Object(e);
}
function ba(e, t, r) {
  t = It(t, e);
  for (var o = -1, n = t.length, i = !1; ++o < n; ) {
    var s = rr(t[o]);
    if (!(i = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return i || ++o != n ? i : (n = e == null ? 0 : e.length, !!n && xs(n) && co(s, n) && (nt(e) || fo(e)));
}
function ya(e, t) {
  return e != null && ba(e, t, ma);
}
function va(e, t, r, o) {
  if (!mt(e))
    return e;
  t = It(t, e);
  for (var n = -1, i = t.length, s = i - 1, l = e; l != null && ++n < i; ) {
    var d = rr(t[n]), p = r;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (n != s) {
      var g = l[d];
      p = o ? o(g, d, l) : void 0, p === void 0 && (p = mt(g) ? g : co(t[n + 1]) ? [] : {});
    }
    ys(l, d, p), l = l[d];
  }
  return e;
}
function wa(e, t, r) {
  for (var o = -1, n = t.length, i = {}; ++o < n; ) {
    var s = t[o], l = ca(e, s);
    r(l, s) && va(i, It(s, e), l);
  }
  return i;
}
function xa(e, t) {
  return wa(e, t, function(r, o) {
    return ya(e, o);
  });
}
var _a = ga(function(e, t) {
  return e == null ? {} : xa(e, t);
});
const Ca = _a;
function Ht(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(dt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Ht(o, t, r);
        return;
      }
      if (o.type === Be) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Ht(o.children, t, r);
      } else
        o.type !== Ro && r.push(o);
    }
  }), r;
}
function ka(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = Ht(o(r));
  return n.length === 1 ? n[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const $a = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Sa(e, t) {
  Object.entries($a).forEach(([, r]) => {
    r.forEach((o) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const n = e.props[o], i = t[o];
      n ? e.props[o] = (...s) => {
        n(...s), i(...s);
      } : e.props[o] = i;
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
    }, r = ka(e, "default"), o = [
      t
    ];
    return r != null && r.props && o.push(
      Ca(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Sa(
      r,
      {
        onBlur: (n) => {
          o.forEach((i) => {
            var s;
            (s = i == null ? void 0 : i.onBlur) == null || s.call(i, n);
          });
        },
        onFocus: (n) => {
          o.forEach((i) => {
            var s;
            (s = i == null ? void 0 : i.onFocus) == null || s.call(i, n);
          });
        },
        onClick: (n) => {
          o.forEach((i) => {
            var s;
            (s = i == null ? void 0 : i.onClick) == null || s.call(i, n);
          });
        },
        onMouseenter: (n) => {
          o.forEach((i) => {
            var s;
            (s = i == null ? void 0 : i.onMouseenter) == null || s.call(i, n);
          });
        },
        onMouseleave: (n) => {
          o.forEach((i) => {
            var s;
            (s = i == null ? void 0 : i.onMouseleave) == null || s.call(i, n);
          });
        }
      }
    ), r;
  }
});
(/* @__PURE__ */ new Date()).getFullYear();
const Ia = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, Ta = (e, t = Ia) => {
  const r = Object.keys(t).find((o) => e.includes(o));
  return r ? t[r](e) : e.substring(0, e.indexOf("-"));
};
function ct(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const o = Array.isArray(r) ? Array.from(r).map((p) => p.split(" ")).flat() : r.split(" "), n = o.map((p) => Ta(p)), i = n.filter((p) => !t.types.includes(p)), s = [...n.filter((p) => t.types.includes(p)), ...i], l = [.../* @__PURE__ */ new Set([...t.types, ...s])], d = l.map((p) => {
      if (s.includes(p)) {
        const f = n.indexOf(p);
        if (f >= 0)
          return o[f] || "";
      }
      const g = t.types.indexOf(p);
      return g >= 0 && t.classes[g] || "";
    }).filter((p) => !!p);
    return {
      types: l,
      classes: d
    };
  }, { types: [], classes: [] }).classes.join(" ");
}
const Pa = "flowbite-themable-injection-key", Oe = {
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
function La(e) {
  const t = Zo(Pa, ie(null)), r = x(() => e || t.value), o = x(() => !!(t != null && t.value)), n = x(
    () => r.value ? Oe[r.value].background : ""
  ), i = x(
    () => r.value ? Oe[r.value].border : ""
  ), s = x(() => (t == null ? void 0 : t.value) || void 0), l = x(
    () => r.value ? Oe[r.value].disabled : ""
  ), d = x(
    () => r.value ? Oe[r.value].focus : ""
  ), p = x(
    () => r.value ? Oe[r.value].hover : ""
  ), g = x(
    () => r.value ? Oe[r.value].text : ""
  );
  return {
    backgroundClasses: n,
    borderClasses: i,
    color: s,
    disabledClasses: l,
    focusClasses: d,
    hoverClasses: p,
    isActive: o,
    textClasses: g
  };
}
const Aa = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, Na = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, Pr = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", Lr = "text-sm font-normal";
function Da(e) {
  const t = x(() => Aa[e.type.value]), r = x(() => {
    const n = Na[e.alignment.value];
    return e.divide.value ? ct(Pr, "dark:divide-gray-700 divide-x divide-gray-200", n) : ct(Pr, n);
  }), o = x(() => e.type.value !== "empty" && e.divide.value ? ct(Lr, "pl-3") : Lr);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: o
  };
}
function za(e) {
  var d;
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: o,
    focusClasses: n,
    hoverClasses: i,
    isActive: s,
    textClasses: l
  } = La((d = e.theme) == null ? void 0 : d.value);
  return {
    classes: x(() => {
      if (!s.value)
        return "";
      const p = [];
      return e.apply.value.includes("text") && p.push(l.value), e.apply.value.includes("border") && p.push(r.value), e.apply.value.includes("background") && p.push(t.value), e.apply.value.includes("hover") && p.push(i.value), e.apply.value.includes("disabled") && p.push(o.value), e.apply.value.includes("focus") && p.push(n.value), p.join(" ");
    })
  };
}
const Oa = /* @__PURE__ */ K({
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
    const t = e, r = Kt(), { classes: o } = za(Ce(t)), n = x(() => r.class || "");
    return (i, s) => (w(), Q(xt(e.tag), {
      class: H(T(ct)(n.value, T(o)))
    }, {
      default: Z(() => [
        z(i.$slots, "default")
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
}, Ma = /* @__PURE__ */ R("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), Ba = [
  Ma
], ja = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ra = /* @__PURE__ */ R("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), Fa = [
  Ra
], Ha = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Va = /* @__PURE__ */ R("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), Wa = [
  Va
], Ga = /* @__PURE__ */ R("span", { class: "sr-only" }, "Close", -1), Ua = /* @__PURE__ */ R("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ R("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), qa = [
  Ga,
  Ua
], Ar = /* @__PURE__ */ K({
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
    const r = e, o = ie(!0), {
      typeClasses: n,
      wrapperClasses: i,
      contentClasses: s
    } = Da(Ce(r)), l = () => {
      t("close"), o.value = !1;
    };
    return (d, p) => o.value ? (w(), L("div", {
      key: 0,
      id: "toast-default",
      class: H(T(i)),
      role: "alert"
    }, [
      e.type !== "empty" || d.$slots.icon ? (w(), Q(Oa, {
        key: 0,
        apply: ["background", "text"],
        class: H(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", T(n)])
      }, {
        default: Z(() => [
          d.$slots.icon ? z(d.$slots, "icon", {
            key: 0,
            class: H({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (w(), L("svg", Ea, Ba)) : e.type === "danger" ? (w(), L("svg", ja, Fa)) : e.type === "warning" ? (w(), L("svg", Ha, Wa)) : U("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : U("", !0),
      R("div", {
        class: H([T(s), { "ml-3": d.$slots.icon || e.type !== "empty" }])
      }, [
        z(d.$slots, "default")
      ], 2),
      e.closable ? (w(), L("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: l
      }, qa)) : U("", !0)
    ], 2)) : U("", !0);
  }
}), Ka = "flowbite-toast-injection-key";
K({
  components: {
    FwbToast: Ar
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = ie([]), t = (i, s) => {
      pi(() => n(i), s);
    }, r = (i) => {
      const s = parseInt(((/* @__PURE__ */ new Date()).getTime() * Math.random()).toString()).toString();
      return e.value.push({
        id: s,
        ...i
      }), i.time > 0 && t(s, i.time), s;
    }, o = () => {
      if (e.value.length === 0)
        return "";
      const i = e.value[e.value.length - 1].id;
      return e.value.pop(), i;
    }, n = (i) => {
      const s = e.value.findIndex((l) => l.id === i);
      return s >= 0 && e.value.splice(s, 1), s >= 0;
    };
    return Oo(Ka, {
      add: r,
      pop: o,
      remove: n
    }), {
      toasts: e,
      removeToast: n
    };
  },
  render() {
    const { $props: e, $slots: t, toasts: r, removeToast: o } = this;
    return it("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      it(
        Eo,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (n) => n.component ? it(
              n.component,
              {
                key: n.id,
                onClose: () => o(n.id),
                ...n.componentProps ? n.componentProps : {}
              },
              () => n.text
            ) : it(
              Ar,
              {
                closable: !0,
                type: n.type,
                key: n.id,
                onClose: () => o(n.id)
              },
              () => n.text
            )
          )
        }
      )
    ]);
  }
});
function ue(e) {
  return e.split("-")[1];
}
function or(e) {
  return e === "y" ? "height" : "width";
}
function he(e) {
  return e.split("-")[0];
}
function He(e) {
  return ["top", "bottom"].includes(he(e)) ? "x" : "y";
}
function Nr(e, t, r) {
  let { reference: o, floating: n } = e;
  const i = o.x + o.width / 2 - n.width / 2, s = o.y + o.height / 2 - n.height / 2, l = He(t), d = or(l), p = o[d] / 2 - n[d] / 2, g = l === "x";
  let f;
  switch (he(t)) {
    case "top":
      f = { x: i, y: o.y - n.height };
      break;
    case "bottom":
      f = { x: i, y: o.y + o.height };
      break;
    case "right":
      f = { x: o.x + o.width, y: s };
      break;
    case "left":
      f = { x: o.x - n.width, y: s };
      break;
    default:
      f = { x: o.x, y: o.y };
  }
  switch (ue(t)) {
    case "start":
      f[l] -= p * (r && g ? -1 : 1);
      break;
    case "end":
      f[l] += p * (r && g ? -1 : 1);
  }
  return f;
}
const Qa = async (e, t, r) => {
  const { placement: o = "bottom", strategy: n = "absolute", middleware: i = [], platform: s } = r, l = i.filter(Boolean), d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let p = await s.getElementRects({ reference: e, floating: t, strategy: n }), { x: g, y: f } = Nr(p, o, d), m = o, y = {}, k = 0;
  for (let _ = 0; _ < l.length; _++) {
    const { name: I, fn: S } = l[_], { x: $, y: O, data: V, reset: W } = await S({ x: g, y: f, initialPlacement: o, placement: m, strategy: n, middlewareData: y, rects: p, platform: s, elements: { reference: e, floating: t } });
    g = $ ?? g, f = O ?? f, y = { ...y, [I]: { ...y[I], ...V } }, W && k <= 50 && (k++, typeof W == "object" && (W.placement && (m = W.placement), W.rects && (p = W.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: n }) : W.rects), { x: g, y: f } = Nr(p, m, d)), _ = -1);
  }
  return { x: g, y: f, placement: m, strategy: n, middlewareData: y };
};
function ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mo(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function qe(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Tt(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: o, y: n, platform: i, rects: s, elements: l, strategy: d } = e, { boundary: p = "clippingAncestors", rootBoundary: g = "viewport", elementContext: f = "floating", altBoundary: m = !1, padding: y = 0 } = ze(t, e), k = mo(y), _ = l[m ? f === "floating" ? "reference" : "floating" : f], I = qe(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(_))) == null || r ? _ : _.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)), boundary: p, rootBoundary: g, strategy: d })), S = f === "floating" ? { ...s.floating, x: o, y: n } : s.reference, $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), O = await (i.isElement == null ? void 0 : i.isElement($)) && await (i.getScale == null ? void 0 : i.getScale($)) || { x: 1, y: 1 }, V = qe(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: S, offsetParent: $, strategy: d }) : S);
  return { top: (I.top - V.top + k.top) / O.y, bottom: (V.bottom - I.bottom + k.bottom) / O.y, left: (I.left - V.left + k.left) / O.x, right: (V.right - I.right + k.right) / O.x };
}
const Xe = Math.min, Te = Math.max;
function Vt(e, t, r) {
  return Te(e, Xe(t, r));
}
const Ja = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: o, placement: n, rects: i, platform: s, elements: l } = t, { element: d, padding: p = 0 } = ze(e, t) || {};
  if (d == null)
    return {};
  const g = mo(p), f = { x: r, y: o }, m = He(n), y = or(m), k = await s.getDimensions(d), _ = m === "y", I = _ ? "top" : "left", S = _ ? "bottom" : "right", $ = _ ? "clientHeight" : "clientWidth", O = i.reference[y] + i.reference[m] - f[m] - i.floating[y], V = f[m] - i.reference[m], W = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
  let F = W ? W[$] : 0;
  F && await (s.isElement == null ? void 0 : s.isElement(W)) || (F = l.floating[$] || i.floating[y]);
  const J = O / 2 - V / 2, X = F / 2 - k[y] / 2 - 1, ee = Xe(g[I], X), D = Xe(g[S], X), M = ee, A = F - k[y] - D, j = F / 2 - k[y] / 2 + J, C = Vt(M, j, A), te = ue(n) != null && j != C && i.reference[y] / 2 - (j < M ? ee : D) - k[y] / 2 < 0 ? j < M ? M - j : A - j : 0;
  return { [m]: f[m] - te, data: { [m]: C, centerOffset: j - C + te } };
} }), Ya = ["top", "right", "bottom", "left"], Dr = Ya.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), Za = { left: "right", right: "left", bottom: "top", top: "bottom" };
function yt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Za[t]);
}
function bo(e, t, r) {
  r === void 0 && (r = !1);
  const o = ue(e), n = He(e), i = or(n);
  let s = n === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = yt(s)), { main: s, cross: yt(s) };
}
const Xa = { start: "end", end: "start" };
function pt(e) {
  return e.replace(/start|end/g, (t) => Xa[t]);
}
const el = function(e) {
  return e === void 0 && (e = {}), { name: "autoPlacement", options: e, async fn(t) {
    var r, o, n;
    const { rects: i, middlewareData: s, placement: l, platform: d, elements: p } = t, { crossAxis: g = !1, alignment: f, allowedPlacements: m = Dr, autoAlignment: y = !0, ...k } = ze(e, t), _ = f !== void 0 || m === Dr ? function(D, M, A) {
      return (D ? [...A.filter((j) => ue(j) === D), ...A.filter((j) => ue(j) !== D)] : A.filter((j) => he(j) === j)).filter((j) => !D || ue(j) === D || !!M && pt(j) !== j);
    }(f || null, y, m) : m, I = await Tt(t, k), S = ((r = s.autoPlacement) == null ? void 0 : r.index) || 0, $ = _[S];
    if ($ == null)
      return {};
    const { main: O, cross: V } = bo($, i, await (d.isRTL == null ? void 0 : d.isRTL(p.floating)));
    if (l !== $)
      return { reset: { placement: _[0] } };
    const W = [I[he($)], I[O], I[V]], F = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], { placement: $, overflows: W }], J = _[S + 1];
    if (J)
      return { data: { index: S + 1, overflows: F }, reset: { placement: J } };
    const X = F.map((D) => {
      const M = ue(D.placement);
      return [D.placement, M && g ? D.overflows.slice(0, 2).reduce((A, j) => A + j, 0) : D.overflows[0], D.overflows];
    }).sort((D, M) => D[1] - M[1]), ee = ((n = X.filter((D) => D[2].slice(0, ue(D[0]) ? 2 : 3).every((M) => M <= 0))[0]) == null ? void 0 : n[0]) || X[0][0];
    return ee !== l ? { data: { index: S + 1, overflows: F }, reset: { placement: ee } } : {};
  } };
}, tl = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: o, middlewareData: n, rects: i, initialPlacement: s, platform: l, elements: d } = t, { mainAxis: p = !0, crossAxis: g = !0, fallbackPlacements: f, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: k = !0, ..._ } = ze(e, t), I = he(o), S = he(s) === s, $ = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), O = f || (S || !k ? [yt(s)] : function(M) {
      const A = yt(M);
      return [pt(M), A, pt(A)];
    }(s));
    f || y === "none" || O.push(...function(M, A, j, C) {
      const te = ue(M);
      let a = function(u, c, h) {
        const b = ["left", "right"], v = ["right", "left"], N = ["top", "bottom"], P = ["bottom", "top"];
        switch (u) {
          case "top":
          case "bottom":
            return h ? c ? v : b : c ? b : v;
          case "left":
          case "right":
            return c ? N : P;
          default:
            return [];
        }
      }(he(M), j === "start", C);
      return te && (a = a.map((u) => u + "-" + te), A && (a = a.concat(a.map(pt)))), a;
    }(s, k, y, $));
    const V = [s, ...O], W = await Tt(t, _), F = [];
    let J = ((r = n.flip) == null ? void 0 : r.overflows) || [];
    if (p && F.push(W[I]), g) {
      const { main: M, cross: A } = bo(o, i, $);
      F.push(W[M], W[A]);
    }
    if (J = [...J, { placement: o, overflows: F }], !F.every((M) => M <= 0)) {
      var X, ee;
      const M = (((X = n.flip) == null ? void 0 : X.index) || 0) + 1, A = V[M];
      if (A)
        return { data: { index: M, overflows: J }, reset: { placement: A } };
      let j = (ee = J.filter((C) => C.overflows[0] <= 0).sort((C, te) => C.overflows[1] - te.overflows[1])[0]) == null ? void 0 : ee.placement;
      if (!j)
        switch (m) {
          case "bestFit": {
            var D;
            const C = (D = J.map((te) => [te.placement, te.overflows.filter((a) => a > 0).reduce((a, u) => a + u, 0)]).sort((te, a) => te[1] - a[1])[0]) == null ? void 0 : D[0];
            C && (j = C);
            break;
          }
          case "initialPlacement":
            j = s;
        }
      if (o !== j)
        return { reset: { placement: j } };
    }
    return {};
  } };
}, rl = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: o } = t, n = await async function(i, s) {
      const { placement: l, platform: d, elements: p } = i, g = await (d.isRTL == null ? void 0 : d.isRTL(p.floating)), f = he(l), m = ue(l), y = He(l) === "x", k = ["left", "top"].includes(f) ? -1 : 1, _ = g && y ? -1 : 1, I = ze(s, i);
      let { mainAxis: S, crossAxis: $, alignmentAxis: O } = typeof I == "number" ? { mainAxis: I, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...I };
      return m && typeof O == "number" && ($ = m === "end" ? -1 * O : O), y ? { x: $ * _, y: S * k } : { x: S * k, y: $ * _ };
    }(t, e);
    return { x: r + n.x, y: o + n.y, data: n };
  } };
};
function ol(e) {
  return e === "x" ? "y" : "x";
}
const nl = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: o, placement: n } = t, { mainAxis: i = !0, crossAxis: s = !1, limiter: l = { fn: (I) => {
      let { x: S, y: $ } = I;
      return { x: S, y: $ };
    } }, ...d } = ze(e, t), p = { x: r, y: o }, g = await Tt(t, d), f = He(he(n)), m = ol(f);
    let y = p[f], k = p[m];
    if (i) {
      const I = f === "y" ? "bottom" : "right";
      y = Vt(y + g[f === "y" ? "top" : "left"], y, y - g[I]);
    }
    if (s) {
      const I = m === "y" ? "bottom" : "right";
      k = Vt(k + g[m === "y" ? "top" : "left"], k, k - g[I]);
    }
    const _ = l.fn({ ...t, [f]: y, [m]: k });
    return { ..._, data: { x: _.x - r, y: _.y - o } };
  } };
}, il = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: r, rects: o, platform: n, elements: i } = t, { apply: s = () => {
    }, ...l } = ze(e, t), d = await Tt(t, l), p = he(r), g = ue(r), f = He(r) === "x", { width: m, height: y } = o.floating;
    let k, _;
    p === "top" || p === "bottom" ? (k = p, _ = g === (await (n.isRTL == null ? void 0 : n.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, k = g === "end" ? "top" : "bottom");
    const I = y - d[k], S = m - d[_], $ = !t.middlewareData.shift;
    let O = I, V = S;
    if (f) {
      const F = m - d.left - d.right;
      V = g || $ ? Xe(S, F) : F;
    } else {
      const F = y - d.top - d.bottom;
      O = g || $ ? Xe(I, F) : F;
    }
    if ($ && !g) {
      const F = Te(d.left, 0), J = Te(d.right, 0), X = Te(d.top, 0), ee = Te(d.bottom, 0);
      f ? V = m - 2 * (F !== 0 || J !== 0 ? F + J : Te(d.left, d.right)) : O = y - 2 * (X !== 0 || ee !== 0 ? X + ee : Te(d.top, d.bottom));
    }
    await s({ ...t, availableWidth: V, availableHeight: O });
    const W = await n.getDimensions(i.floating);
    return m !== W.width || y !== W.height ? { reset: { rects: !0 } } : {};
  } };
};
function ae(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fe(e) {
  return ae(e).getComputedStyle(e);
}
const zr = Math.min, Ke = Math.max, vt = Math.round;
function yo(e) {
  const t = fe(e);
  let r = parseFloat(t.width), o = parseFloat(t.height);
  const n = e.offsetWidth, i = e.offsetHeight, s = vt(r) !== n || vt(o) !== i;
  return s && (r = n, o = i), { width: r, height: o, fallback: s };
}
function $e(e) {
  return wo(e) ? (e.nodeName || "").toLowerCase() : "";
}
let lt;
function vo() {
  if (lt)
    return lt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (lt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), lt) : navigator.userAgent;
}
function ge(e) {
  return e instanceof ae(e).HTMLElement;
}
function xe(e) {
  return e instanceof ae(e).Element;
}
function wo(e) {
  return e instanceof ae(e).Node;
}
function Or(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ae(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pt(e) {
  const { overflow: t, overflowX: r, overflowY: o, display: n } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(n);
}
function sl(e) {
  return ["table", "td", "th"].includes($e(e));
}
function Wt(e) {
  const t = /firefox/i.test(vo()), r = fe(e), o = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!o && o !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((n) => r.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const i = r.contain;
    return i != null && i.includes(n);
  });
}
function xo() {
  return !/^((?!chrome|android).)*safari/i.test(vo());
}
function nr(e) {
  return ["html", "body", "#document"].includes($e(e));
}
function _o(e) {
  return xe(e) ? e : e.contextElement;
}
const Co = { x: 1, y: 1 };
function Me(e) {
  const t = _o(e);
  if (!ge(t))
    return Co;
  const r = t.getBoundingClientRect(), { width: o, height: n, fallback: i } = yo(t);
  let s = (i ? vt(r.width) : r.width) / o, l = (i ? vt(r.height) : r.height) / n;
  return s && Number.isFinite(s) || (s = 1), l && Number.isFinite(l) || (l = 1), { x: s, y: l };
}
function et(e, t, r, o) {
  var n, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), l = _o(e);
  let d = Co;
  t && (o ? xe(o) && (d = Me(o)) : d = Me(e));
  const p = l ? ae(l) : window, g = !xo() && r;
  let f = (s.left + (g && ((n = p.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / d.x, m = (s.top + (g && ((i = p.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / d.y, y = s.width / d.x, k = s.height / d.y;
  if (l) {
    const _ = ae(l), I = o && xe(o) ? ae(o) : o;
    let S = _.frameElement;
    for (; S && o && I !== _; ) {
      const $ = Me(S), O = S.getBoundingClientRect(), V = getComputedStyle(S);
      O.x += (S.clientLeft + parseFloat(V.paddingLeft)) * $.x, O.y += (S.clientTop + parseFloat(V.paddingTop)) * $.y, f *= $.x, m *= $.y, y *= $.x, k *= $.y, f += O.x, m += O.y, S = ae(S).frameElement;
    }
  }
  return { width: y, height: k, top: m, right: f + y, bottom: m + k, left: f, x: f, y: m };
}
function _e(e) {
  return ((wo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Lt(e) {
  return xe(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ko(e) {
  return et(_e(e)).left + Lt(e).scrollLeft;
}
function tt(e) {
  if ($e(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Or(e) && e.host || _e(e);
  return Or(t) ? t.host : t;
}
function $o(e) {
  const t = tt(e);
  return nr(t) ? t.ownerDocument.body : ge(t) && Pt(t) ? t : $o(t);
}
function wt(e, t) {
  var r;
  t === void 0 && (t = []);
  const o = $o(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ae(o);
  return n ? t.concat(i, i.visualViewport || [], Pt(o) ? o : []) : t.concat(o, wt(o));
}
function Er(e, t, r) {
  return t === "viewport" ? qe(function(o, n) {
    const i = ae(o), s = _e(o), l = i.visualViewport;
    let d = s.clientWidth, p = s.clientHeight, g = 0, f = 0;
    if (l) {
      d = l.width, p = l.height;
      const m = xo();
      (m || !m && n === "fixed") && (g = l.offsetLeft, f = l.offsetTop);
    }
    return { width: d, height: p, x: g, y: f };
  }(e, r)) : xe(t) ? qe(function(o, n) {
    const i = et(o, !0, n === "fixed"), s = i.top + o.clientTop, l = i.left + o.clientLeft, d = ge(o) ? Me(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * d.x, height: o.clientHeight * d.y, x: l * d.x, y: s * d.y };
  }(t, r)) : qe(function(o) {
    const n = _e(o), i = Lt(o), s = o.ownerDocument.body, l = Ke(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = Ke(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let p = -i.scrollLeft + ko(o);
    const g = -i.scrollTop;
    return fe(s).direction === "rtl" && (p += Ke(n.clientWidth, s.clientWidth) - l), { width: l, height: d, x: p, y: g };
  }(_e(e)));
}
function Mr(e) {
  return ge(e) && fe(e).position !== "fixed" ? e.offsetParent : null;
}
function Br(e) {
  const t = ae(e);
  let r = Mr(e);
  for (; r && sl(r) && fe(r).position === "static"; )
    r = Mr(r);
  return r && ($e(r) === "html" || $e(r) === "body" && fe(r).position === "static" && !Wt(r)) ? t : r || function(o) {
    let n = tt(o);
    for (; ge(n) && !nr(n); ) {
      if (Wt(n))
        return n;
      n = tt(n);
    }
    return null;
  }(e) || t;
}
function al(e, t, r) {
  const o = ge(t), n = _e(t), i = et(e, !0, r === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (o || !o && r !== "fixed")
    if (($e(t) !== "body" || Pt(n)) && (s = Lt(t)), ge(t)) {
      const d = et(t, !0);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      n && (l.x = ko(n));
  return { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
const ll = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: o, strategy: n } = e;
  const i = r === "clippingAncestors" ? function(p, g) {
    const f = g.get(p);
    if (f)
      return f;
    let m = wt(p).filter((I) => xe(I) && $e(I) !== "body"), y = null;
    const k = fe(p).position === "fixed";
    let _ = k ? tt(p) : p;
    for (; xe(_) && !nr(_); ) {
      const I = fe(_), S = Wt(_);
      (k ? S || y : S || I.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = I : m = m.filter(($) => $ !== _), _ = tt(_);
    }
    return g.set(p, m), m;
  }(t, this._c) : [].concat(r), s = [...i, o], l = s[0], d = s.reduce((p, g) => {
    const f = Er(t, g, n);
    return p.top = Ke(f.top, p.top), p.right = zr(f.right, p.right), p.bottom = zr(f.bottom, p.bottom), p.left = Ke(f.left, p.left), p;
  }, Er(t, l, n));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: o } = e;
  const n = ge(r), i = _e(r);
  if (r === i)
    return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((n || !n && o !== "fixed") && (($e(r) !== "body" || Pt(i)) && (s = Lt(r)), ge(r))) {
    const p = et(r);
    l = Me(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  return { width: t.width * l.x, height: t.height * l.y, x: t.x * l.x - s.scrollLeft * l.x + d.x, y: t.y * l.y - s.scrollTop * l.y + d.y };
}, isElement: xe, getDimensions: function(e) {
  return ge(e) ? yo(e) : e.getBoundingClientRect();
}, getOffsetParent: Br, getDocumentElement: _e, getScale: Me, async getElementRects(e) {
  let { reference: t, floating: r, strategy: o } = e;
  const n = this.getOffsetParent || Br, i = this.getDimensions;
  return { reference: al(t, await n(r), o), floating: { x: 0, y: 0, ...await i(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => fe(e).direction === "rtl" }, ul = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), n = { platform: ll, ...r }, i = { ...n.platform, _c: o };
  return Qa(e, t, { ...n, platform: i });
}, Le = {
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
function Gt(e, t) {
  let r = Le.themes[e] || {}, o;
  do
    o = r[t], typeof o > "u" ? r.$extend ? r = Le.themes[r.$extend] || {} : (r = null, o = Le[t]) : r = null;
  while (r);
  return o;
}
function dl(e) {
  const t = [e];
  let r = Le.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = Le.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((o) => `v-popper--theme-${o}`);
}
function jr(e) {
  const t = [e];
  let r = Le.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = Le.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let je = !1;
if (typeof window < "u") {
  je = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        je = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let So = !1;
typeof window < "u" && typeof navigator < "u" && (So = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const cl = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Rr = {
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
function Hr(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function Mt() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const de = [];
let Ie = null;
const Vr = {};
function Wr(e) {
  let t = Vr[e];
  return t || (t = Vr[e] = []), t;
}
let Ut = function() {
};
typeof window < "u" && (Ut = window.Element);
function B(e) {
  return function(t) {
    return Gt(t.theme, e);
  };
}
const Bt = "__floating-vue__popper", Io = () => K({
  name: "VPopper",
  provide() {
    return {
      [Bt]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Bt]: { default: null }
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
      default: B("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: B("positioningDisabled")
    },
    placement: {
      type: String,
      default: B("placement"),
      validator: (e) => cl.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: B("delay")
    },
    distance: {
      type: [Number, String],
      default: B("distance")
    },
    skidding: {
      type: [Number, String],
      default: B("skidding")
    },
    triggers: {
      type: Array,
      default: B("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: B("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: B("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: B("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: B("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: B("popperHideTriggers")
    },
    container: {
      type: [String, Object, Ut, Boolean],
      default: B("container")
    },
    boundary: {
      type: [String, Ut],
      default: B("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: B("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: B("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: B("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: B("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: B("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: B("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: B("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: B("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: B("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: B("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: B("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: B("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: B("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: B("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: B("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: B("flip")
    },
    shift: {
      type: Boolean,
      default: B("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: B("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: B("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: B("disposeTimeout")
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
      return (e = this[Bt]) == null ? void 0 : e.parentPopper;
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
      var o, n;
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (r || !this.disabled) && (((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
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
      (this.distance || this.skidding) && e.middleware.push(rl({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(el({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(nl({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(tl({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Ja({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: n, middlewareData: i }) => {
          let s;
          const { centerOffset: l } = i.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? s = Math.abs(l) > n.reference.width / 2 : s = Math.abs(l) > n.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: n, placement: i, middlewareData: s }) => {
            var l;
            if ((l = s.autoSize) != null && l.skip)
              return {};
            let d, p;
            return i.startsWith("top") || i.startsWith("bottom") ? d = n.reference.width : p = n.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = p != null ? `${p}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(il({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const r = await ul(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Ie && this.instantMove && Ie.instantMove && Ie !== this.parentPopper) {
        Ie.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Ie = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Mt(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...wt(this.$_referenceNode),
        ...wt(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), r = this.$_popperNode.querySelector(".v-popper__wrapper"), o = r.parentNode.getBoundingClientRect(), n = t.x + t.width / 2 - (o.left + r.offsetLeft), i = t.y + t.height / 2 - (o.top + r.offsetTop);
        this.result.transformOrigin = `${n}px ${i}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let r = 0; r < de.length; r++)
          t = de[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      de.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of jr(this.theme))
        Wr(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Mt(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Hr(de, this), de.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of jr(this.theme)) {
        const o = Wr(r);
        Hr(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      Ie === this && (Ie = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Mt(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Rr, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Rr, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Fr, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Fr, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((o) => o.addEventListener(t, r, je ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, r, o, n) {
      let i = r;
      o != null && (i = typeof o == "function" ? o(i) : o), i.forEach((s) => {
        const l = t[s];
        l && this.$_registerEventListeners(e, l, n);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((r) => {
        const { targetNodes: o, eventType: n, handler: i } = r;
        !e || e === n ? o.forEach((s) => s.removeEventListener(n, i)) : t.push(r);
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
        const o = r.getAttribute(e);
        o && (r.removeAttribute(e), r.setAttribute(t, o));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const r in e) {
          const o = e[r];
          o == null ? t.removeAttribute(r) : t.setAttribute(r, o);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.$_pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (Qe >= e.left && Qe <= e.right && Je >= e.top && Je <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = Qe - ye, o = Je - ve, n = t.left + t.width / 2 - ye + (t.top + t.height / 2) - ve + t.width + t.height, i = ye + r * n, s = ve + o * n;
        return ut(ye, ve, i, s, t.left, t.top, t.left, t.bottom) || // Left edge
        ut(ye, ve, i, s, t.left, t.top, t.right, t.top) || // Top edge
        ut(ye, ve, i, s, t.right, t.top, t.right, t.bottom) || // Right edge
        ut(ye, ve, i, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (So ? (document.addEventListener("touchstart", Gr, je ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", hl, je ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Gr, !0), window.addEventListener("click", pl, !0)), window.addEventListener("resize", ml));
function Gr(e) {
  for (let t = 0; t < de.length; t++) {
    const r = de[t];
    try {
      const o = r.popperNode();
      r.$_mouseDownContains = o.contains(e.target);
    } catch {
    }
  }
}
function pl(e) {
  To(e);
}
function hl(e) {
  To(e, !0);
}
function To(e, t = !1) {
  const r = {};
  for (let o = de.length - 1; o >= 0; o--) {
    const n = de[o];
    try {
      const i = n.$_containsGlobalTarget = fl(n, e);
      n.$_pendingHide = !1, requestAnimationFrame(() => {
        if (n.$_pendingHide = !1, !r[n.randomId] && Ur(n, i, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let l = n.parentPopper;
            for (; l; )
              r[l.randomId] = !0, l = l.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && Ur(s, s.$_containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function fl(e, t) {
  const r = e.popperNode();
  return e.$_mouseDownContains || r.contains(t.target);
}
function Ur(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || gl(e, r) && !t;
}
function gl(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function ml(e) {
  for (let t = 0; t < de.length; t++)
    de[t].$_computePosition(e);
}
let ye = 0, ve = 0, Qe = 0, Je = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ye = Qe, ve = Je, Qe = e.clientX, Je = e.clientY;
}, je ? {
  passive: !0
} : void 0);
function ut(e, t, r, o, n, i, s, l) {
  const d = ((s - n) * (t - i) - (l - i) * (e - n)) / ((l - i) * (r - e) - (s - n) * (o - t)), p = ((r - e) * (t - i) - (o - t) * (e - n)) / ((l - i) * (r - e) - (s - n) * (o - t));
  return d >= 0 && d <= 1 && p >= 0 && p <= 1;
}
const bl = {
  extends: Io()
}, ir = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
};
function yl(e, t, r, o, n, i) {
  return w(), L("div", {
    ref: "reference",
    class: H(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    z(e.$slots, "default", rt(kt(e.slotData)))
  ], 2);
}
const vl = /* @__PURE__ */ ir(bl, [["render", yl]]);
function wl() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let ht;
function qt() {
  qt.init || (qt.init = !0, ht = wl() !== -1);
}
var At = {
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
    qt(), jo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ht && this.$el.appendChild(e), e.data = "about:blank", ht || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ht && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const xl = /* @__PURE__ */ Ko("data-v-b329ee4c");
Mo("data-v-b329ee4c");
const _l = {
  class: "resize-observer",
  tabindex: "-1"
};
Bo();
const Cl = /* @__PURE__ */ xl((e, t, r, o, n, i) => (w(), Q("div", _l)));
At.render = Cl;
At.__scopeId = "data-v-b329ee4c";
At.__file = "src/components/ResizeObserver.vue";
const Po = (e = "theme") => ({
  computed: {
    themeClass() {
      return dl(this[e]);
    }
  }
}), kl = K({
  name: "VPopperContent",
  components: {
    ResizeObserver: At
  },
  mixins: [
    Po()
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
}), $l = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Sl = {
  ref: "inner",
  class: "v-popper__inner"
}, Il = /* @__PURE__ */ R("div", { class: "v-popper__arrow-outer" }, null, -1), Tl = /* @__PURE__ */ R("div", { class: "v-popper__arrow-inner" }, null, -1), Pl = [
  Il,
  Tl
];
function Ll(e, t, r, o, n, i) {
  const s = ft("ResizeObserver");
  return w(), L("div", {
    id: e.popperId,
    ref: "popover",
    class: H(["v-popper__popper", [
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
    style: Dt(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Qo((l) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    R("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
    }),
    R("div", {
      class: "v-popper__wrapper",
      style: Dt(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      R("div", Sl, [
        e.mounted ? (w(), L(Be, { key: 0 }, [
          R("div", null, [
            z(e.$slots, "default")
          ]),
          e.handleResize ? (w(), Q(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
          })) : U("", !0)
        ], 64)) : U("", !0)
      ], 512),
      R("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Dt(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Pl, 4)
    ], 4)
  ], 46, $l);
}
const Lo = /* @__PURE__ */ ir(kl, [["render", Ll]]), Ao = {
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
}, Al = K({
  name: "VPopperWrapper",
  components: {
    Popper: vl,
    PopperContent: Lo
  },
  mixins: [
    Ao,
    Po("finalTheme")
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
function Nl(e, t, r, o, n, i) {
  const s = ft("PopperContent"), l = ft("Popper");
  return w(), Q(l, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: H([
      e.themeClass
    ])
  }, {
    default: Z(({
      popperId: d,
      isShown: p,
      shouldMountContent: g,
      skipTransition: f,
      autoHide: m,
      show: y,
      hide: k,
      handleResize: _,
      onResize: I,
      classes: S,
      result: $
    }) => [
      z(e.$slots, "default", {
        shown: p,
        show: y,
        hide: k
      }),
      Ye(s, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: p,
        mounted: g,
        "skip-transition": f,
        "auto-hide": m,
        "handle-resize": _,
        classes: S,
        result: $,
        onHide: k,
        onResize: I
      }, {
        default: Z(() => [
          z(e.$slots, "popper", {
            shown: p,
            hide: k
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const sr = /* @__PURE__ */ ir(Al, [["render", Nl]]);
({
  ...sr
});
({
  ...sr
});
({
  ...sr
});
K({
  name: "VTooltipDirective",
  components: {
    Popper: Io(),
    PopperContent: Lo
  },
  mixins: [
    Ao
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Gt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Gt(e.theme, "loadingContent")
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
        r.then ? r.then((o) => this.onResult(t, o)) : this.onResult(t, r);
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
const Ee = {
  Success: "success",
  Error: "error"
}, Dl = "block mb-2 text-sm font-medium", zl = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", Ol = "cursor-not-allowed bg-gray-100", El = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, Ml = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Bl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function jl(e) {
  const t = x(() => {
    const o = e.validationStatus.value, n = o === Ee.Success ? Ml : o === Ee.Error ? Bl : "";
    return se(
      zl,
      n,
      El[e.size.value],
      e.disabled.value ? Ol : ""
    );
  }), r = x(() => {
    const o = e.validationStatus.value, n = o === Ee.Success ? "text-green-700 dark:text-green-500" : o === Ee.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return se(Dl, n);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const Rl = { class: "flex relative" }, Fl = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, Hl = ["disabled", "type", "required"], Vl = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, Wl = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Gl = /* @__PURE__ */ K({
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
    const t = e, r = ao(t, "modelValue"), { inputClasses: o, labelClasses: n } = jl(Ce(t)), i = x(() => se(
      "mt-2 text-sm",
      t.validationStatus === Ee.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === Ee.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (s, l) => (w(), L("div", null, [
      s.label ? (w(), L("label", {
        key: 0,
        class: H(T(n))
      }, ne(s.label), 3)) : U("", !0),
      R("div", Rl, [
        s.$slots.prefix ? (w(), L("div", Fl, [
          z(s.$slots, "prefix")
        ])) : U("", !0),
        Ct(R("input", Re(s.$attrs, {
          "onUpdate:modelValue": l[0] || (l[0] = (d) => Qr(r) ? r.value = d : null),
          disabled: s.disabled,
          type: s.type,
          required: s.required,
          class: [T(o), s.$slots.prefix ? "pl-10" : ""]
        }), null, 16, Hl), [
          [Fo, T(r)]
        ]),
        s.$slots.suffix ? (w(), L("div", Vl, [
          z(s.$slots, "suffix")
        ])) : U("", !0)
      ]),
      s.$slots.validationMessage ? (w(), L("p", {
        key: 1,
        class: H(i.value)
      }, [
        z(s.$slots, "validationMessage")
      ], 2)) : U("", !0),
      s.$slots.helper ? (w(), L("p", Wl, [
        z(s.$slots, "helper")
      ])) : U("", !0)
    ]));
  }
}), we = {
  Success: "success",
  Error: "error"
}, Ul = "block mb-2 text-sm font-medium", ql = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", Kl = "cursor-not-allowed bg-gray-100", Ql = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", Jl = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, Yl = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Zl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Xl(e) {
  const t = x(() => {
    const o = e.validationStatus.value, n = o === we.Success ? Yl : o === we.Error ? Zl : "", i = o === we.Success ? "focus:border-green-500" : o === we.Error ? "focus:border-red-500" : "";
    return se(
      ql,
      n,
      Jl[e.size.value],
      e.disabled.value && Kl,
      e.underline.value ? Ql : "border border-gray-300 rounded-lg",
      e.underline.value && i
    );
  }), r = x(() => {
    const o = e.validationStatus.value, n = o === we.Success ? "text-green-700 dark:text-green-500" : o === we.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return se(Ul, n);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const eu = ["disabled"], tu = {
  disabled: "",
  selected: "",
  value: ""
}, ru = ["value"], ou = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, nu = /* @__PURE__ */ K({
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
    const r = e, o = ao(r, "modelValue", t), { selectClasses: n, labelClasses: i } = Xl(Ce(r)), s = x(() => se(
      "mt-2 text-sm",
      r.validationStatus === we.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === we.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (l, d) => (w(), L("div", null, [
      R("label", null, [
        l.label ? (w(), L("span", {
          key: 0,
          class: H(T(i))
        }, ne(l.label), 3)) : U("", !0),
        Ct(R("select", {
          "onUpdate:modelValue": d[0] || (d[0] = (p) => Qr(o) ? o.value = p : null),
          disabled: l.disabled,
          class: H(T(n))
        }, [
          R("option", tu, ne(l.placeholder), 1),
          (w(!0), L(Be, null, Jr(l.options, (p, g) => (w(), L("option", {
            key: g,
            value: p.value
          }, ne(p.name), 9, ru))), 128))
        ], 10, eu), [
          [Ho, T(o)]
        ])
      ]),
      l.$slots.validationMessage ? (w(), L("p", {
        key: 0,
        class: H(s.value)
      }, [
        z(l.$slots, "validationMessage")
      ], 2)) : U("", !0),
      l.$slots.helper ? (w(), L("p", ou, [
        z(l.$slots, "helper")
      ])) : U("", !0)
    ]));
  }
}), iu = "w-fit relative inline-flex items-center cursor-pointer", su = 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', au = "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", lu = {
  lg: "w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4"
}, uu = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function du(e) {
  const t = x(() => iu), r = x(() => su), o = x(() => lu[e.size.value]), n = x(() => uu[e.color.value]), i = x(() => au);
  return {
    labelClasses: t,
    toggleSize: o,
    toggleClasses: r,
    toggleColor: n,
    toggleBallClasses: i
  };
}
const cu = ["disabled"], qr = /* @__PURE__ */ K({
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
    const r = e, o = x({
      get() {
        return r.modelValue;
      },
      set(p) {
        t("update:modelValue", p);
      }
    }), {
      labelClasses: n,
      toggleSize: i,
      toggleClasses: s,
      toggleColor: l,
      toggleBallClasses: d
    } = du(Ce(r));
    return (p, g) => (w(), L("label", {
      class: H(T(n))
    }, [
      Ct(R("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (f) => o.value = f),
        disabled: p.disabled,
        class: "sr-only peer",
        type: "checkbox"
      }, null, 8, cu), [
        [Vo, o.value]
      ]),
      R("span", {
        class: H([T(s), T(i), T(l)])
      }, null, 2),
      R("span", {
        class: H(T(d))
      }, ne(p.label), 3)
    ], 2));
  }
}), pu = ["href"], hu = /* @__PURE__ */ K({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (w(), L("a", {
      href: t.href,
      class: H([t.color, "inline-flex items-center hover:underline"])
    }, [
      z(t.$slots, "default")
    ], 10, pu));
  }
}), fu = /* @__PURE__ */ K({
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
    }, o = Kt(), n = se(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      o.class
    ), i = t.tag;
    return (s, l) => (w(), Q(xt(T(i)), Re(s.$attrs, { class: T(n) }), {
      default: Z(() => [
        z(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gu = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", mu = /* @__PURE__ */ K({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = x(() => Ft([
      gu,
      t.class
    ]));
    return (o, n) => (w(), L("p", {
      class: H(r.value)
    }, [
      z(o.$slots, "default")
    ], 2));
  }
}), Ve = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, bu = {
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
    const t = e, r = x(() => {
      let o = "TwcButton text-base";
      return t.flat ? `${o}border-0 bg-transparent text-gray-800 hover:bg-transparent focus:ring-0` : t.icon ? `${o}border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2` : t.link ? `${o}border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700` : o;
    });
    return (o, n) => (w(), Q(T(si), Re(o.$props, { class: r.value }), {
      default: Z(() => [
        z(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}, zu = /* @__PURE__ */ Ve(bu, [["__scopeId", "data-v-9c0172c8"]]), yu = { class: "flex justify-between" }, vu = { class: "font-semibold" }, wu = { class: "font-semibold" }, xu = { class: "flex flex-col" }, Kr = "font-light text-xs -mt-1", _u = {
  __name: "TwcToggle",
  props: /* @__PURE__ */ gt({
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
  emits: /* @__PURE__ */ gt(["change", "click"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = t, o = Yr(e, "modelValue");
    function n() {
      r("click");
    }
    return (i, s) => (w(), L("div", null, [
      R("div", yu, [
        i.$props.reverse ? (w(), L(Be, { key: 0 }, [
          R("label", vu, ne(i.$props.label), 1),
          Ye(T(qr), {
            modelValue: o.value,
            "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l),
            class: "TwcToggle -mr-3",
            disabled: i.$props.disabled,
            onClick: n
          }, null, 8, ["modelValue", "disabled"])
        ], 64)) : (w(), L(Be, { key: 1 }, [
          Ye(T(qr), {
            modelValue: o.value,
            "onUpdate:modelValue": s[1] || (s[1] = (l) => o.value = l),
            class: "TwcToggle",
            disabled: i.$props.disabled,
            onClick: n
          }, null, 8, ["modelValue", "disabled"]),
          R("label", wu, ne(i.$props.label), 1)
        ], 64))
      ]),
      R("div", xu, [
        i.$props.hint ? (w(), L("label", {
          key: 0,
          class: H(`${Kr} text-gray-500`)
        }, ne(i.$props.hint), 3)) : U("", !0),
        i.$props.errorMessage ? (w(), L("label", {
          key: 1,
          class: H(`${Kr} text-red-500`)
        }, ne(i.$props.errorMessage), 3)) : U("", !0)
      ])
    ]));
  }
}, Ou = /* @__PURE__ */ Ve(_u, [["__scopeId", "data-v-c43f0be6"]]), Eu = {
  __name: "TwcHeading",
  setup(e) {
    return (t, r) => (w(), Q(T(fu), rt(kt(t.$props)), {
      default: Z(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Cu = {
  __name: "TwcInput",
  setup(e) {
    return (t, r) => (w(), Q(T(Gl), Re(t.$props, { class: "TwcInput" }), Zr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: Z(() => [
          z(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      t.$slots.prefix ? {
        name: "prefix",
        fn: Z(() => [
          z(t.$slots, "prefix", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      t.$slots.suffix ? {
        name: "suffix",
        fn: Z(() => [
          z(t.$slots, "suffix", {}, void 0, !0)
        ]),
        key: "2"
      } : void 0
    ]), 1040));
  }
}, Mu = /* @__PURE__ */ Ve(Cu, [["__scopeId", "data-v-9a366333"]]), Bu = {
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
    return (o, n) => (w(), L("label", {
      class: H(r())
    }, [
      z(o.$slots, "default")
    ], 2));
  }
}, ju = {
  __name: "TwcLink",
  setup(e) {
    return (t, r) => (w(), Q(T(hu), rt(kt(t.$props)), {
      default: Z(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Ru = {
  __name: "TwcParagraph",
  setup(e) {
    return (t, r) => (w(), Q(T(mu), rt(kt(t.$props)), {
      default: Z(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, ku = {
  __name: "TwcSelect",
  setup(e) {
    return (t, r) => (w(), Q(T(nu), Re(t.$props, { class: "TwcSelect" }), Zr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: Z(() => [
          z(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}, Fu = /* @__PURE__ */ Ve(ku, [["__scopeId", "data-v-dab28e77"]]);
function $u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var No = { exports: {} };
(function(e) {
  (function(t) {
    e.exports ? e.exports = t() : window.intlTelInput = t();
  })(() => {
    var t = (() => {
      var r = Object.defineProperty, o = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, i = Object.prototype.hasOwnProperty, s = (a, u) => {
        for (var c in u)
          r(a, c, { get: u[c], enumerable: !0 });
      }, l = (a, u, c, h) => {
        if (u && typeof u == "object" || typeof u == "function")
          for (let b of n(u))
            !i.call(a, b) && b !== c && r(a, b, { get: () => u[b], enumerable: !(h = o(u, b)) || h.enumerable });
        return a;
      }, d = (a) => l(r({}, "__esModule", { value: !0 }), a), p = {};
      s(p, {
        Iti: () => A,
        default: () => te
      });
      var g = [
        [
          "af",
          // Afghanistan
          "93"
        ],
        [
          "ax",
          // Åland Islands
          "358",
          1,
          ["18"]
        ],
        [
          "al",
          // Albania
          "355"
        ],
        [
          "dz",
          // Algeria
          "213"
        ],
        [
          "as",
          // American Samoa
          "1",
          5,
          ["684"]
        ],
        [
          "ad",
          // Andorra
          "376"
        ],
        [
          "ao",
          // Angola
          "244"
        ],
        [
          "ai",
          // Anguilla
          "1",
          6,
          ["264"]
        ],
        [
          "ag",
          // Antigua and Barbuda
          "1",
          7,
          ["268"]
        ],
        [
          "ar",
          // Argentina
          "54"
        ],
        [
          "am",
          // Armenia
          "374"
        ],
        [
          "aw",
          // Aruba
          "297"
        ],
        [
          "ac",
          // Ascension Island
          "247"
        ],
        [
          "au",
          // Australia
          "61",
          0
        ],
        [
          "at",
          // Austria
          "43"
        ],
        [
          "az",
          // Azerbaijan
          "994"
        ],
        [
          "bs",
          // Bahamas
          "1",
          8,
          ["242"]
        ],
        [
          "bh",
          // Bahrain
          "973"
        ],
        [
          "bd",
          // Bangladesh
          "880"
        ],
        [
          "bb",
          // Barbados
          "1",
          9,
          ["246"]
        ],
        [
          "by",
          // Belarus
          "375"
        ],
        [
          "be",
          // Belgium
          "32"
        ],
        [
          "bz",
          // Belize
          "501"
        ],
        [
          "bj",
          // Benin
          "229"
        ],
        [
          "bm",
          // Bermuda
          "1",
          10,
          ["441"]
        ],
        [
          "bt",
          // Bhutan
          "975"
        ],
        [
          "bo",
          // Bolivia
          "591"
        ],
        [
          "ba",
          // Bosnia and Herzegovina
          "387"
        ],
        [
          "bw",
          // Botswana
          "267"
        ],
        [
          "br",
          // Brazil
          "55"
        ],
        [
          "io",
          // British Indian Ocean Territory
          "246"
        ],
        [
          "vg",
          // British Virgin Islands
          "1",
          11,
          ["284"]
        ],
        [
          "bn",
          // Brunei
          "673"
        ],
        [
          "bg",
          // Bulgaria
          "359"
        ],
        [
          "bf",
          // Burkina Faso
          "226"
        ],
        [
          "bi",
          // Burundi
          "257"
        ],
        [
          "kh",
          // Cambodia
          "855"
        ],
        [
          "cm",
          // Cameroon
          "237"
        ],
        [
          "ca",
          // Canada
          "1",
          1,
          ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905"]
        ],
        [
          "cv",
          // Cape Verde
          "238"
        ],
        [
          "bq",
          // Caribbean Netherlands
          "599",
          1,
          ["3", "4", "7"]
        ],
        [
          "ky",
          // Cayman Islands
          "1",
          12,
          ["345"]
        ],
        [
          "cf",
          // Central African Republic
          "236"
        ],
        [
          "td",
          // Chad
          "235"
        ],
        [
          "cl",
          // Chile
          "56"
        ],
        [
          "cn",
          // China
          "86"
        ],
        [
          "cx",
          // Christmas Island
          "61",
          2,
          ["89164"]
        ],
        [
          "cc",
          // Cocos (Keeling) Islands
          "61",
          1,
          ["89162"]
        ],
        [
          "co",
          // Colombia
          "57"
        ],
        [
          "km",
          // Comoros
          "269"
        ],
        [
          "cg",
          // Congo (Brazzaville)
          "242"
        ],
        [
          "cd",
          // Congo (Kinshasa)
          "243"
        ],
        [
          "ck",
          // Cook Islands
          "682"
        ],
        [
          "cr",
          // Costa Rica
          "506"
        ],
        [
          "ci",
          // Côte d'Ivoire
          "225"
        ],
        [
          "hr",
          // Croatia
          "385"
        ],
        [
          "cu",
          // Cuba
          "53"
        ],
        [
          "cw",
          // Curaçao
          "599",
          0
        ],
        [
          "cy",
          // Cyprus
          "357"
        ],
        [
          "cz",
          // Czech Republic
          "420"
        ],
        [
          "dk",
          // Denmark
          "45"
        ],
        [
          "dj",
          // Djibouti
          "253"
        ],
        [
          "dm",
          // Dominica
          "1",
          13,
          ["767"]
        ],
        [
          "do",
          // Dominican Republic
          "1",
          2,
          ["809", "829", "849"]
        ],
        [
          "ec",
          // Ecuador
          "593"
        ],
        [
          "eg",
          // Egypt
          "20"
        ],
        [
          "sv",
          // El Salvador
          "503"
        ],
        [
          "gq",
          // Equatorial Guinea
          "240"
        ],
        [
          "er",
          // Eritrea
          "291"
        ],
        [
          "ee",
          // Estonia
          "372"
        ],
        [
          "sz",
          // Eswatini
          "268"
        ],
        [
          "et",
          // Ethiopia
          "251"
        ],
        [
          "fk",
          // Falkland Islands (Malvinas)
          "500"
        ],
        [
          "fo",
          // Faroe Islands
          "298"
        ],
        [
          "fj",
          // Fiji
          "679"
        ],
        [
          "fi",
          // Finland
          "358",
          0
        ],
        [
          "fr",
          // France
          "33"
        ],
        [
          "gf",
          // French Guiana
          "594"
        ],
        [
          "pf",
          // French Polynesia
          "689"
        ],
        [
          "ga",
          // Gabon
          "241"
        ],
        [
          "gm",
          // Gambia
          "220"
        ],
        [
          "ge",
          // Georgia
          "995"
        ],
        [
          "de",
          // Germany
          "49"
        ],
        [
          "gh",
          // Ghana
          "233"
        ],
        [
          "gi",
          // Gibraltar
          "350"
        ],
        [
          "gr",
          // Greece
          "30"
        ],
        [
          "gl",
          // Greenland
          "299"
        ],
        [
          "gd",
          // Grenada
          "1",
          14,
          ["473"]
        ],
        [
          "gp",
          // Guadeloupe
          "590",
          0
        ],
        [
          "gu",
          // Guam
          "1",
          15,
          ["671"]
        ],
        [
          "gt",
          // Guatemala
          "502"
        ],
        [
          "gg",
          // Guernsey
          "44",
          1,
          ["1481", "7781", "7839", "7911"]
        ],
        [
          "gn",
          // Guinea
          "224"
        ],
        [
          "gw",
          // Guinea-Bissau
          "245"
        ],
        [
          "gy",
          // Guyana
          "592"
        ],
        [
          "ht",
          // Haiti
          "509"
        ],
        [
          "hn",
          // Honduras
          "504"
        ],
        [
          "hk",
          // Hong Kong SAR China
          "852"
        ],
        [
          "hu",
          // Hungary
          "36"
        ],
        [
          "is",
          // Iceland
          "354"
        ],
        [
          "in",
          // India
          "91"
        ],
        [
          "id",
          // Indonesia
          "62"
        ],
        [
          "ir",
          // Iran
          "98"
        ],
        [
          "iq",
          // Iraq
          "964"
        ],
        [
          "ie",
          // Ireland
          "353"
        ],
        [
          "im",
          // Isle of Man
          "44",
          2,
          ["1624", "74576", "7524", "7924", "7624"]
        ],
        [
          "il",
          // Israel
          "972"
        ],
        [
          "it",
          // Italy
          "39",
          0
        ],
        [
          "jm",
          // Jamaica
          "1",
          4,
          ["876", "658"]
        ],
        [
          "jp",
          // Japan
          "81"
        ],
        [
          "je",
          // Jersey
          "44",
          3,
          ["1534", "7509", "7700", "7797", "7829", "7937"]
        ],
        [
          "jo",
          // Jordan
          "962"
        ],
        [
          "kz",
          // Kazakhstan
          "7",
          1,
          ["33", "7"]
        ],
        [
          "ke",
          // Kenya
          "254"
        ],
        [
          "ki",
          // Kiribati
          "686"
        ],
        [
          "xk",
          // Kosovo
          "383"
        ],
        [
          "kw",
          // Kuwait
          "965"
        ],
        [
          "kg",
          // Kyrgyzstan
          "996"
        ],
        [
          "la",
          // Laos
          "856"
        ],
        [
          "lv",
          // Latvia
          "371"
        ],
        [
          "lb",
          // Lebanon
          "961"
        ],
        [
          "ls",
          // Lesotho
          "266"
        ],
        [
          "lr",
          // Liberia
          "231"
        ],
        [
          "ly",
          // Libya
          "218"
        ],
        [
          "li",
          // Liechtenstein
          "423"
        ],
        [
          "lt",
          // Lithuania
          "370"
        ],
        [
          "lu",
          // Luxembourg
          "352"
        ],
        [
          "mo",
          // Macao SAR China
          "853"
        ],
        [
          "mg",
          // Madagascar
          "261"
        ],
        [
          "mw",
          // Malawi
          "265"
        ],
        [
          "my",
          // Malaysia
          "60"
        ],
        [
          "mv",
          // Maldives
          "960"
        ],
        [
          "ml",
          // Mali
          "223"
        ],
        [
          "mt",
          // Malta
          "356"
        ],
        [
          "mh",
          // Marshall Islands
          "692"
        ],
        [
          "mq",
          // Martinique
          "596"
        ],
        [
          "mr",
          // Mauritania
          "222"
        ],
        [
          "mu",
          // Mauritius
          "230"
        ],
        [
          "yt",
          // Mayotte
          "262",
          1,
          ["269", "639"]
        ],
        [
          "mx",
          // Mexico
          "52"
        ],
        [
          "fm",
          // Micronesia
          "691"
        ],
        [
          "md",
          // Moldova
          "373"
        ],
        [
          "mc",
          // Monaco
          "377"
        ],
        [
          "mn",
          // Mongolia
          "976"
        ],
        [
          "me",
          // Montenegro
          "382"
        ],
        [
          "ms",
          // Montserrat
          "1",
          16,
          ["664"]
        ],
        [
          "ma",
          // Morocco
          "212",
          0
        ],
        [
          "mz",
          // Mozambique
          "258"
        ],
        [
          "mm",
          // Myanmar (Burma)
          "95"
        ],
        [
          "na",
          // Namibia
          "264"
        ],
        [
          "nr",
          // Nauru
          "674"
        ],
        [
          "np",
          // Nepal
          "977"
        ],
        [
          "nl",
          // Netherlands
          "31"
        ],
        [
          "nc",
          // New Caledonia
          "687"
        ],
        [
          "nz",
          // New Zealand
          "64"
        ],
        [
          "ni",
          // Nicaragua
          "505"
        ],
        [
          "ne",
          // Niger
          "227"
        ],
        [
          "ng",
          // Nigeria
          "234"
        ],
        [
          "nu",
          // Niue
          "683"
        ],
        [
          "nf",
          // Norfolk Island
          "672"
        ],
        [
          "kp",
          // North Korea
          "850"
        ],
        [
          "mk",
          // North Macedonia
          "389"
        ],
        [
          "mp",
          // Northern Mariana Islands
          "1",
          17,
          ["670"]
        ],
        [
          "no",
          // Norway
          "47",
          0
        ],
        [
          "om",
          // Oman
          "968"
        ],
        [
          "pk",
          // Pakistan
          "92"
        ],
        [
          "pw",
          // Palau
          "680"
        ],
        [
          "ps",
          // Palestinian Territories
          "970"
        ],
        [
          "pa",
          // Panama
          "507"
        ],
        [
          "pg",
          // Papua New Guinea
          "675"
        ],
        [
          "py",
          // Paraguay
          "595"
        ],
        [
          "pe",
          // Peru
          "51"
        ],
        [
          "ph",
          // Philippines
          "63"
        ],
        [
          "pl",
          // Poland
          "48"
        ],
        [
          "pt",
          // Portugal
          "351"
        ],
        [
          "pr",
          // Puerto Rico
          "1",
          3,
          ["787", "939"]
        ],
        [
          "qa",
          // Qatar
          "974"
        ],
        [
          "re",
          // Réunion
          "262",
          0
        ],
        [
          "ro",
          // Romania
          "40"
        ],
        [
          "ru",
          // Russia
          "7",
          0
        ],
        [
          "rw",
          // Rwanda
          "250"
        ],
        [
          "ws",
          // Samoa
          "685"
        ],
        [
          "sm",
          // San Marino
          "378"
        ],
        [
          "st",
          // São Tomé & Príncipe
          "239"
        ],
        [
          "sa",
          // Saudi Arabia
          "966"
        ],
        [
          "sn",
          // Senegal
          "221"
        ],
        [
          "rs",
          // Serbia
          "381"
        ],
        [
          "sc",
          // Seychelles
          "248"
        ],
        [
          "sl",
          // Sierra Leone
          "232"
        ],
        [
          "sg",
          // Singapore
          "65"
        ],
        [
          "sx",
          // Sint Maarten
          "1",
          21,
          ["721"]
        ],
        [
          "sk",
          // Slovakia
          "421"
        ],
        [
          "si",
          // Slovenia
          "386"
        ],
        [
          "sb",
          // Solomon Islands
          "677"
        ],
        [
          "so",
          // Somalia
          "252"
        ],
        [
          "za",
          // South Africa
          "27"
        ],
        [
          "kr",
          // South Korea
          "82"
        ],
        [
          "ss",
          // South Sudan
          "211"
        ],
        [
          "es",
          // Spain
          "34"
        ],
        [
          "lk",
          // Sri Lanka
          "94"
        ],
        [
          "bl",
          // St. Barthélemy
          "590",
          1
        ],
        [
          "sh",
          // St. Helena
          "290"
        ],
        [
          "kn",
          // St. Kitts & Nevis
          "1",
          18,
          ["869"]
        ],
        [
          "lc",
          // St. Lucia
          "1",
          19,
          ["758"]
        ],
        [
          "mf",
          // St. Martin
          "590",
          2
        ],
        [
          "pm",
          // St. Pierre & Miquelon
          "508"
        ],
        [
          "vc",
          // St. Vincent & Grenadines
          "1",
          20,
          ["784"]
        ],
        [
          "sd",
          // Sudan
          "249"
        ],
        [
          "sr",
          // Suriname
          "597"
        ],
        [
          "sj",
          // Svalbard & Jan Mayen
          "47",
          1,
          ["79"]
        ],
        [
          "se",
          // Sweden
          "46"
        ],
        [
          "ch",
          // Switzerland
          "41"
        ],
        [
          "sy",
          // Syria
          "963"
        ],
        [
          "tw",
          // Taiwan
          "886"
        ],
        [
          "tj",
          // Tajikistan
          "992"
        ],
        [
          "tz",
          // Tanzania
          "255"
        ],
        [
          "th",
          // Thailand
          "66"
        ],
        [
          "tl",
          // Timor-Leste
          "670"
        ],
        [
          "tg",
          // Togo
          "228"
        ],
        [
          "tk",
          // Tokelau
          "690"
        ],
        [
          "to",
          // Tonga
          "676"
        ],
        [
          "tt",
          // Trinidad & Tobago
          "1",
          22,
          ["868"]
        ],
        [
          "tn",
          // Tunisia
          "216"
        ],
        [
          "tr",
          // Turkey
          "90"
        ],
        [
          "tm",
          // Turkmenistan
          "993"
        ],
        [
          "tc",
          // Turks & Caicos Islands
          "1",
          23,
          ["649"]
        ],
        [
          "tv",
          // Tuvalu
          "688"
        ],
        [
          "ug",
          // Uganda
          "256"
        ],
        [
          "ua",
          // Ukraine
          "380"
        ],
        [
          "ae",
          // United Arab Emirates
          "971"
        ],
        [
          "gb",
          // United Kingdom
          "44",
          0
        ],
        [
          "us",
          // United States
          "1",
          0
        ],
        [
          "uy",
          // Uruguay
          "598"
        ],
        [
          "vi",
          // U.S. Virgin Islands
          "1",
          24,
          ["340"]
        ],
        [
          "uz",
          // Uzbekistan
          "998"
        ],
        [
          "vu",
          // Vanuatu
          "678"
        ],
        [
          "va",
          // Vatican City
          "39",
          1,
          ["06698"]
        ],
        [
          "ve",
          // Venezuela
          "58"
        ],
        [
          "vn",
          // Vietnam
          "84"
        ],
        [
          "wf",
          // Wallis & Futuna
          "681"
        ],
        [
          "eh",
          // Western Sahara
          "212",
          1,
          ["5288", "5289"]
        ],
        [
          "ye",
          // Yemen
          "967"
        ],
        [
          "zm",
          // Zambia
          "260"
        ],
        [
          "zw",
          // Zimbabwe
          "263"
        ]
      ], f = [];
      for (let a = 0; a < g.length; a++) {
        const u = g[a];
        f[a] = {
          name: "",
          // this is now populated in the plugin
          iso2: u[0],
          dialCode: u[1],
          priority: u[2] || 0,
          areaCodes: u[3] || null,
          nodeById: {}
        };
      }
      var m = f, y = {
        ad: "Andorra",
        ae: "United Arab Emirates",
        af: "Afghanistan",
        ag: "Antigua & Barbuda",
        ai: "Anguilla",
        al: "Albania",
        am: "Armenia",
        ao: "Angola",
        ar: "Argentina",
        as: "American Samoa",
        at: "Austria",
        au: "Australia",
        aw: "Aruba",
        ax: "Åland Islands",
        az: "Azerbaijan",
        ba: "Bosnia & Herzegovina",
        bb: "Barbados",
        bd: "Bangladesh",
        be: "Belgium",
        bf: "Burkina Faso",
        bg: "Bulgaria",
        bh: "Bahrain",
        bi: "Burundi",
        bj: "Benin",
        bl: "St. Barthélemy",
        bm: "Bermuda",
        bn: "Brunei",
        bo: "Bolivia",
        bq: "Caribbean Netherlands",
        br: "Brazil",
        bs: "Bahamas",
        bt: "Bhutan",
        bw: "Botswana",
        by: "Belarus",
        bz: "Belize",
        ca: "Canada",
        cc: "Cocos (Keeling) Islands",
        cd: "Congo - Kinshasa",
        cf: "Central African Republic",
        cg: "Congo - Brazzaville",
        ch: "Switzerland",
        ci: "Côte d’Ivoire",
        ck: "Cook Islands",
        cl: "Chile",
        cm: "Cameroon",
        cn: "China",
        co: "Colombia",
        cr: "Costa Rica",
        cu: "Cuba",
        cv: "Cape Verde",
        cw: "Curaçao",
        cx: "Christmas Island",
        cy: "Cyprus",
        cz: "Czechia",
        de: "Germany",
        dj: "Djibouti",
        dk: "Denmark",
        dm: "Dominica",
        do: "Dominican Republic",
        dz: "Algeria",
        ec: "Ecuador",
        ee: "Estonia",
        eg: "Egypt",
        eh: "Western Sahara",
        er: "Eritrea",
        es: "Spain",
        et: "Ethiopia",
        fi: "Finland",
        fj: "Fiji",
        fk: "Falkland Islands",
        fm: "Micronesia",
        fo: "Faroe Islands",
        fr: "France",
        ga: "Gabon",
        gb: "United Kingdom",
        gd: "Grenada",
        ge: "Georgia",
        gf: "French Guiana",
        gg: "Guernsey",
        gh: "Ghana",
        gi: "Gibraltar",
        gl: "Greenland",
        gm: "Gambia",
        gn: "Guinea",
        gp: "Guadeloupe",
        gq: "Equatorial Guinea",
        gr: "Greece",
        gt: "Guatemala",
        gu: "Guam",
        gw: "Guinea-Bissau",
        gy: "Guyana",
        hk: "Hong Kong SAR China",
        hn: "Honduras",
        hr: "Croatia",
        ht: "Haiti",
        hu: "Hungary",
        id: "Indonesia",
        ie: "Ireland",
        il: "Israel",
        im: "Isle of Man",
        in: "India",
        io: "British Indian Ocean Territory",
        iq: "Iraq",
        ir: "Iran",
        is: "Iceland",
        it: "Italy",
        je: "Jersey",
        jm: "Jamaica",
        jo: "Jordan",
        jp: "Japan",
        ke: "Kenya",
        kg: "Kyrgyzstan",
        kh: "Cambodia",
        ki: "Kiribati",
        km: "Comoros",
        kn: "St. Kitts & Nevis",
        kp: "North Korea",
        kr: "South Korea",
        kw: "Kuwait",
        ky: "Cayman Islands",
        kz: "Kazakhstan",
        la: "Laos",
        lb: "Lebanon",
        lc: "St. Lucia",
        li: "Liechtenstein",
        lk: "Sri Lanka",
        lr: "Liberia",
        ls: "Lesotho",
        lt: "Lithuania",
        lu: "Luxembourg",
        lv: "Latvia",
        ly: "Libya",
        ma: "Morocco",
        mc: "Monaco",
        md: "Moldova",
        me: "Montenegro",
        mf: "St. Martin",
        mg: "Madagascar",
        mh: "Marshall Islands",
        mk: "North Macedonia",
        ml: "Mali",
        mm: "Myanmar (Burma)",
        mn: "Mongolia",
        mo: "Macao SAR China",
        mp: "Northern Mariana Islands",
        mq: "Martinique",
        mr: "Mauritania",
        ms: "Montserrat",
        mt: "Malta",
        mu: "Mauritius",
        mv: "Maldives",
        mw: "Malawi",
        mx: "Mexico",
        my: "Malaysia",
        mz: "Mozambique",
        na: "Namibia",
        nc: "New Caledonia",
        ne: "Niger",
        nf: "Norfolk Island",
        ng: "Nigeria",
        ni: "Nicaragua",
        nl: "Netherlands",
        no: "Norway",
        np: "Nepal",
        nr: "Nauru",
        nu: "Niue",
        nz: "New Zealand",
        om: "Oman",
        pa: "Panama",
        pe: "Peru",
        pf: "French Polynesia",
        pg: "Papua New Guinea",
        ph: "Philippines",
        pk: "Pakistan",
        pl: "Poland",
        pm: "St. Pierre & Miquelon",
        pr: "Puerto Rico",
        ps: "Palestinian Territories",
        pt: "Portugal",
        pw: "Palau",
        py: "Paraguay",
        qa: "Qatar",
        re: "Réunion",
        ro: "Romania",
        rs: "Serbia",
        ru: "Russia",
        rw: "Rwanda",
        sa: "Saudi Arabia",
        sb: "Solomon Islands",
        sc: "Seychelles",
        sd: "Sudan",
        se: "Sweden",
        sg: "Singapore",
        sh: "St. Helena",
        si: "Slovenia",
        sj: "Svalbard & Jan Mayen",
        sk: "Slovakia",
        sl: "Sierra Leone",
        sm: "San Marino",
        sn: "Senegal",
        so: "Somalia",
        sr: "Suriname",
        ss: "South Sudan",
        st: "São Tomé & Príncipe",
        sv: "El Salvador",
        sx: "Sint Maarten",
        sy: "Syria",
        sz: "Eswatini",
        tc: "Turks & Caicos Islands",
        td: "Chad",
        tg: "Togo",
        th: "Thailand",
        tj: "Tajikistan",
        tk: "Tokelau",
        tl: "Timor-Leste",
        tm: "Turkmenistan",
        tn: "Tunisia",
        to: "Tonga",
        tr: "Turkey",
        tt: "Trinidad & Tobago",
        tv: "Tuvalu",
        tw: "Taiwan",
        tz: "Tanzania",
        ua: "Ukraine",
        ug: "Uganda",
        us: "United States",
        uy: "Uruguay",
        uz: "Uzbekistan",
        va: "Vatican City",
        vc: "St. Vincent & Grenadines",
        ve: "Venezuela",
        vg: "British Virgin Islands",
        vi: "U.S. Virgin Islands",
        vn: "Vietnam",
        vu: "Vanuatu",
        wf: "Wallis & Futuna",
        ws: "Samoa",
        ye: "Yemen",
        yt: "Mayotte",
        za: "South Africa",
        zm: "Zambia",
        zw: "Zimbabwe"
      }, k = y, _ = {
        selectedCountryAriaLabel: "Selected country",
        noCountrySelected: "No country selected",
        countryListAriaLabel: "List of countries",
        searchPlaceholder: "Search",
        zeroSearchResults: "No results found",
        oneSearchResult: "1 result found",
        multipleSearchResults: "${count} results found",
        // additional countries (not supported by country-list library)
        ac: "Ascension Island",
        xk: "Kosovo"
      }, I = _, S = { ...k, ...I }, $ = S;
      for (let a = 0; a < m.length; a++)
        m[a].name = $[m[a].iso2];
      var O = 0, V = {
        //* Whether or not to allow the dropdown.
        allowDropdown: !0,
        //* Add a placeholder in the input with an example number for the selected country.
        autoPlaceholder: "polite",
        //* Modify the parentClass.
        containerClass: "",
        //* The order of the countries in the dropdown. Defaults to alphabetical.
        countryOrder: null,
        //* Add a country search input at the top of the dropdown.
        countrySearch: !0,
        //* Modify the auto placeholder.
        customPlaceholder: null,
        //* Append menu to specified element.
        dropdownContainer: null,
        //* Don't display these countries.
        excludeCountries: [],
        //* Fix the dropdown width to the input width (rather than being as wide as the longest country name).
        fixDropdownWidth: !0,
        //* Format the number as the user types
        formatAsYouType: !0,
        //* Format the input value during initialisation and on setNumber.
        formatOnDisplay: !0,
        //* geoIp lookup function.
        geoIpLookup: null,
        //* Inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber.
        hiddenInput: null,
        //* Internationalise the plugin text e.g. search input placeholder, country names.
        i18n: {},
        //* Initial country.
        initialCountry: "",
        //* National vs international formatting for numbers e.g. placeholders and displaying existing numbers.
        nationalMode: !0,
        //* Display only these countries.
        onlyCountries: [],
        //* Number type to use for placeholders.
        placeholderNumberType: "MOBILE",
        //* Show flags - for both the selected country, and in the country dropdown
        showFlags: !0,
        //* Display the international dial code next to the selected flag.
        separateDialCode: !1,
        //* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
        strictMode: !1,
        //* Use full screen popup instead of dropdown for country list.
        useFullscreenPopup: typeof navigator < "u" && typeof window < "u" ? (
          //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
          //* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
          /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth <= 500
        ) : !1,
        //* Specify the path to the libphonenumber script to enable validation/formatting.
        utilsScript: "",
        //* The number type to enforce during validation.
        validationNumberType: "MOBILE"
      }, W = [
        "800",
        "822",
        "833",
        "844",
        "855",
        "866",
        "877",
        "880",
        "881",
        "882",
        "883",
        "884",
        "885",
        "886",
        "887",
        "888",
        "889"
      ], F = (a) => a.replace(/\D/g, ""), J = (a = "") => a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), X = (a) => {
        const u = F(a);
        if (u.charAt(0) === "1") {
          const c = u.substr(1, 3);
          return W.indexOf(c) !== -1;
        }
        return !1;
      }, ee = (a, u, c, h) => {
        if (c === 0 && !h)
          return 0;
        let b = 0;
        for (let v = 0; v < u.length; v++) {
          if (/[+0-9]/.test(u[v]) && b++, b === a && !h)
            return v + 1;
          if (h && b === a + 1)
            return v;
        }
        return u.length;
      }, D = (a, u, c) => {
        const h = document.createElement(a);
        return u && Object.entries(u).forEach(([b, v]) => h.setAttribute(b, v)), c && c.appendChild(h), h;
      }, M = (a) => {
        const { instances: u } = C;
        Object.values(u).forEach((c) => c[a]());
      }, A = class {
        constructor(a, u = {}) {
          this.id = O++, this.telInput = a, this.highlightedItem = null, this.options = Object.assign({}, V, u), this.hadInitialPlaceholder = !!a.getAttribute("placeholder");
        }
        //* Can't be private as it's called from intlTelInput convenience wrapper.
        _init() {
          this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.onlyCountries.length === 1 && (this.options.initialCountry = this.options.onlyCountries[0]), this.options.separateDialCode && (this.options.nationalMode = !1), this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode && (this.options.nationalMode = !1), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isAndroid = typeof navigator < "u" ? /Android/i.test(navigator.userAgent) : !1, this.isRTL = !!this.telInput.closest("[dir=rtl]");
          const a = this.options.allowDropdown || this.options.separateDialCode;
          this.showSelectedCountryOnLeft = this.isRTL ? !a : a, this.options.separateDialCode && (this.isRTL ? this.originalPaddingRight = this.telInput.style.paddingRight : this.originalPaddingLeft = this.telInput.style.paddingLeft), this.options.i18n = { ...$, ...this.options.i18n };
          const u = new Promise((h, b) => {
            this.resolveAutoCountryPromise = h, this.rejectAutoCountryPromise = b;
          }), c = new Promise((h, b) => {
            this.resolveUtilsScriptPromise = h, this.rejectUtilsScriptPromise = b;
          });
          this.promise = Promise.all([u, c]), this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
        }
        //********************
        //*  PRIVATE METHODS
        //********************
        //* Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
        _processCountryData() {
          this._processAllCountries(), this._processDialCodes(), this._translateCountryNames(), this._sortCountries();
        }
        //* Sort countries by countryOrder option (if present), then name.
        _sortCountries() {
          this.options.countryOrder && (this.options.countryOrder = this.options.countryOrder.map((a) => a.toLowerCase())), this.countries.sort((a, u) => {
            const { countryOrder: c } = this.options;
            if (c) {
              const h = c.indexOf(a.iso2), b = c.indexOf(u.iso2), v = h > -1, N = b > -1;
              if (v || N)
                return v && N ? h - b : v ? -1 : 1;
            }
            return a.name.localeCompare(u.name);
          });
        }
        //* Add a dial code to this.dialCodeToIso2Map.
        _addToDialCodeMap(a, u, c) {
          u.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = u.length), this.dialCodeToIso2Map.hasOwnProperty(u) || (this.dialCodeToIso2Map[u] = []);
          for (let b = 0; b < this.dialCodeToIso2Map[u].length; b++)
            if (this.dialCodeToIso2Map[u][b] === a)
              return;
          const h = c !== void 0 ? c : this.dialCodeToIso2Map[u].length;
          this.dialCodeToIso2Map[u][h] = a;
        }
        //* Process onlyCountries or excludeCountries array if present.
        _processAllCountries() {
          const { onlyCountries: a, excludeCountries: u } = this.options;
          if (a.length) {
            const c = a.map(
              (h) => h.toLowerCase()
            );
            this.countries = m.filter(
              (h) => c.indexOf(h.iso2) > -1
            );
          } else if (u.length) {
            const c = u.map(
              (h) => h.toLowerCase()
            );
            this.countries = m.filter(
              (h) => c.indexOf(h.iso2) === -1
            );
          } else
            this.countries = m;
        }
        //* Translate Countries by object literal provided on config.
        _translateCountryNames() {
          for (let a = 0; a < this.countries.length; a++) {
            const u = this.countries[a].iso2.toLowerCase();
            this.options.i18n.hasOwnProperty(u) && (this.countries[a].name = this.options.i18n[u]);
          }
        }
        //* Generate this.dialCodes and this.dialCodeToIso2Map.
        _processDialCodes() {
          this.dialCodes = {}, this.dialCodeMaxLen = 0, this.dialCodeToIso2Map = {};
          for (let a = 0; a < this.countries.length; a++) {
            const u = this.countries[a];
            this.dialCodes[u.dialCode] || (this.dialCodes[u.dialCode] = !0), this._addToDialCodeMap(u.iso2, u.dialCode, u.priority);
          }
          for (let a = 0; a < this.countries.length; a++) {
            const u = this.countries[a];
            if (u.areaCodes) {
              const c = this.dialCodeToIso2Map[u.dialCode][0];
              for (let h = 0; h < u.areaCodes.length; h++) {
                const b = u.areaCodes[h];
                for (let v = 1; v < b.length; v++) {
                  const N = u.dialCode + b.substr(0, v);
                  this._addToDialCodeMap(c, N), this._addToDialCodeMap(u.iso2, N);
                }
                this._addToDialCodeMap(u.iso2, u.dialCode + b);
              }
            }
          }
        }
        //* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
        _generateMarkup() {
          var Se;
          this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
          const {
            allowDropdown: a,
            separateDialCode: u,
            showFlags: c,
            containerClass: h,
            hiddenInput: b,
            dropdownContainer: v,
            fixDropdownWidth: N,
            useFullscreenPopup: P,
            countrySearch: re,
            i18n: q
          } = this.options;
          let oe = "iti";
          a && (oe += " iti--allow-dropdown"), c && (oe += " iti--show-flags"), h && (oe += ` ${h}`), P || (oe += " iti--inline-dropdown");
          const Y = D("div", { class: oe });
          if ((Se = this.telInput.parentNode) == null || Se.insertBefore(Y, this.telInput), a || c || u) {
            this.countryContainer = D(
              "div",
              { class: "iti__country-container" },
              Y
            ), this.showSelectedCountryOnLeft ? this.countryContainer.style.left = "0px" : this.countryContainer.style.right = "0px", a ? (this.selectedCountry = D(
              "button",
              {
                type: "button",
                class: "iti__selected-country",
                "aria-expanded": "false",
                "aria-label": this.options.i18n.selectedCountryAriaLabel,
                "aria-haspopup": "true",
                "aria-controls": `iti-${this.id}__dropdown-content`,
                role: "combobox"
              },
              this.countryContainer
            ), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = D(
              "div",
              { class: "iti__selected-country" },
              this.countryContainer
            );
            const ce = D("div", { class: "iti__selected-country-primary" }, this.selectedCountry);
            if (this.selectedCountryInner = D("div", { class: "iti__flag" }, ce), this.selectedCountryA11yText = D(
              "span",
              { class: "iti__a11y-text" },
              this.selectedCountryInner
            ), a && (this.dropdownArrow = D(
              "div",
              { class: "iti__arrow", "aria-hidden": "true" },
              ce
            )), u && (this.selectedDialCode = D(
              "div",
              { class: "iti__selected-dial-code" },
              this.selectedCountry
            )), a) {
              const pe = N ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = D("div", {
                id: `iti-${this.id}__dropdown-content`,
                class: `iti__dropdown-content iti__hide ${pe}`
              }), re && (this.searchInput = D(
                "input",
                {
                  type: "text",
                  class: "iti__search-input",
                  placeholder: q.searchPlaceholder,
                  role: "combobox",
                  "aria-expanded": "true",
                  "aria-label": q.searchPlaceholder,
                  "aria-controls": `iti-${this.id}__country-listbox`,
                  "aria-autocomplete": "list",
                  autocomplete: "off"
                },
                this.dropdownContent
              ), this.searchResultsA11yText = D(
                "span",
                { class: "iti__a11y-text" },
                this.dropdownContent
              )), this.countryList = D(
                "ul",
                {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  "aria-label": q.countryListAriaLabel
                },
                this.dropdownContent
              ), this._appendListItems(), re && this._updateSearchResultsText(), v) {
                let me = "iti iti--container";
                P ? me += " iti--fullscreen-popup" : me += " iti--inline-dropdown", this.dropdown = D("div", { class: me }), this.dropdown.appendChild(this.dropdownContent);
              } else
                this.countryContainer.appendChild(this.dropdownContent);
            }
          }
          if (Y.appendChild(this.telInput), this._updateInputPadding(), b) {
            const ce = this.telInput.getAttribute("name") || "", pe = b(ce);
            pe.phone && (this.hiddenInput = D("input", {
              type: "hidden",
              name: pe.phone
            }), Y.appendChild(this.hiddenInput)), pe.country && (this.hiddenInputCountry = D("input", {
              type: "hidden",
              name: pe.country
            }), Y.appendChild(this.hiddenInputCountry));
          }
        }
        //* For each country: add a country list item <li> to the countryList <ul> container.
        _appendListItems() {
          for (let a = 0; a < this.countries.length; a++) {
            const u = this.countries[a], c = a === 0 ? "iti__highlight" : "", h = D(
              "li",
              {
                id: `iti-${this.id}__item-${u.iso2}`,
                class: `iti__country ${c}`,
                tabindex: "-1",
                role: "option",
                "data-dial-code": u.dialCode,
                "data-country-code": u.iso2,
                "aria-selected": "false"
              },
              this.countryList
            );
            u.nodeById[this.id] = h;
            let b = "";
            this.options.showFlags && (b += `<div class='iti__flag iti__${u.iso2}'></div>`), b += `<span class='iti__country-name'>${u.name}</span>`, b += `<span class='iti__dial-code'>+${u.dialCode}</span>`, h.insertAdjacentHTML("beforeend", b);
          }
        }
        //* Set the initial state of the input value and the selected country by:
        //* 1. Extracting a dial code from the given number
        //* 2. Using explicit initialCountry
        _setInitialState(a = !1) {
          const u = this.telInput.getAttribute("value"), c = this.telInput.value, b = u && u.charAt(0) === "+" && (!c || c.charAt(0) !== "+") ? u : c, v = this._getDialCode(b), N = X(b), { initialCountry: P, geoIpLookup: re } = this.options, q = P === "auto" && re;
          if (v && !N)
            this._updateCountryFromNumber(b);
          else if (!q || a) {
            const oe = P ? P.toLowerCase() : "";
            oe && this._getCountryData(oe, !0) ? this._setCountry(oe) : v && N ? this._setCountry("us") : this._setCountry();
          }
          b && this._updateValFromNumber(b);
        }
        //* Initialise the main event listeners: input keyup, and click selected country.
        _initListeners() {
          this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.hiddenInput || this.hiddenInputCountry) && this.telInput.form && this._initHiddenInputListener();
        }
        //* Update hidden input on form submit.
        _initHiddenInputListener() {
          var a;
          this._handleHiddenInputSubmit = () => {
            this.hiddenInput && (this.hiddenInput.value = this.getNumber()), this.hiddenInputCountry && (this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "");
          }, (a = this.telInput.form) == null || a.addEventListener(
            "submit",
            this._handleHiddenInputSubmit
          );
        }
        //* initialise the dropdown listeners.
        _initDropdownListeners() {
          this._handleLabelClick = (u) => {
            this.dropdownContent.classList.contains("iti__hide") ? this.telInput.focus() : u.preventDefault();
          };
          const a = this.telInput.closest("label");
          a && a.addEventListener("click", this._handleLabelClick), this._handleClickSelectedCountry = () => {
            this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly && this._openDropdown();
          }, this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry), this._handleCountryContainerKeydown = (u) => {
            this.dropdownContent.classList.contains("iti__hide") && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === "Tab" && this._closeDropdown();
          }, this.countryContainer.addEventListener(
            "keydown",
            this._handleCountryContainerKeydown
          );
        }
        //* Init many requests: utils script / geo ip lookup.
        _initRequests() {
          const { utilsScript: a, initialCountry: u, geoIpLookup: c } = this.options;
          a && !C.utils ? C.documentReady() ? C.loadUtils(a) : window.addEventListener("load", () => {
            C.loadUtils(a);
          }) : this.resolveUtilsScriptPromise(), u === "auto" && c && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
        }
        //* Perform the geo ip lookup.
        _loadAutoCountry() {
          C.autoCountry ? this.handleAutoCountry() : C.startedLoadingAutoCountry || (C.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(
            (a = "") => {
              const u = a.toLowerCase();
              u && this._getCountryData(u, !0) ? (C.autoCountry = u, setTimeout(() => M("handleAutoCountry"))) : (this._setInitialState(!0), M("rejectAutoCountryPromise"));
            },
            () => {
              this._setInitialState(!0), M("rejectAutoCountryPromise");
            }
          ));
        }
        _openDropdownWithPlus() {
          this._openDropdown(), this.searchInput.value = "+", this._filterCountries("", !0);
        }
        //* Initialize the tel input listeners.
        _initTelInputListeners() {
          const { strictMode: a, formatAsYouType: u, separateDialCode: c, formatOnDisplay: h, allowDropdown: b, countrySearch: v } = this.options;
          let N = !1;
          new RegExp("\\p{L}", "u").test(this.telInput.value) && (N = !0), this._handleInputEvent = (P) => {
            if (this.isAndroid && (P == null ? void 0 : P.data) === "+" && c && b && v) {
              const Y = this.telInput.selectionStart || 0, Se = this.telInput.value.substring(0, Y - 1), ce = this.telInput.value.substring(Y);
              this.telInput.value = Se + ce, this._openDropdownWithPlus();
              return;
            }
            this._updateCountryFromNumber(this.telInput.value) && this._triggerCountryChange();
            const re = (P == null ? void 0 : P.data) && /[^+0-9]/.test(P.data), q = (P == null ? void 0 : P.inputType) === "insertFromPaste" && this.telInput.value;
            re || q && !a ? N = !0 : /[^+0-9]/.test(this.telInput.value) || (N = !1);
            const oe = (P == null ? void 0 : P.detail) && P.detail.isSetNumber && !h;
            if (u && !N && !oe) {
              const Y = this.telInput.selectionStart || 0, ce = this.telInput.value.substring(0, Y).replace(/[^+0-9]/g, "").length, pe = (P == null ? void 0 : P.inputType) === "deleteContentForward", me = this._formatNumberAsYouType(), Nt = ee(ce, me, Y, pe);
              this.telInput.value = me, this.telInput.setSelectionRange(Nt, Nt);
            }
          }, this.telInput.addEventListener("input", this._handleInputEvent), (a || c) && (this._handleKeydownEvent = (P) => {
            if (P.key && P.key.length === 1 && !P.altKey && !P.ctrlKey && !P.metaKey) {
              if (c && b && v && P.key === "+") {
                P.preventDefault(), this._openDropdownWithPlus();
                return;
              }
              if (a) {
                const re = this.telInput.selectionStart === 0 && P.key === "+", q = /^[0-9]$/.test(P.key), oe = c ? q : re || q, Y = this._getFullNumber(), Se = C.utils.getCoreNumber(Y, this.selectedCountryData.iso2), ce = this.maxCoreNumberLength && Se.length >= this.maxCoreNumberLength, pe = this.telInput.value.substring(this.telInput.selectionStart, this.telInput.selectionEnd), me = /\d/.test(pe), Do = (this.telInput.selectionStart || 0) === this.telInput.value.length;
                (!oe || ce && !me && Do) && P.preventDefault();
              }
            }
          }, this.telInput.addEventListener("keydown", this._handleKeydownEvent));
        }
        //* Adhere to the input's maxlength attr.
        _cap(a) {
          const u = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
          return u && a.length > u ? a.substr(0, u) : a;
        }
        //* Trigger a custom event on the input.
        _trigger(a, u = {}) {
          const c = new CustomEvent(a, {
            bubbles: !0,
            cancelable: !0,
            detail: u
          });
          this.telInput.dispatchEvent(c);
        }
        //* Open the dropdown.
        _openDropdown() {
          const { fixDropdownWidth: a, countrySearch: u } = this.options;
          if (a && (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`), this.dropdownContent.classList.remove("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), u) {
            const c = this.countryList.firstElementChild;
            c && (this._highlightListItem(c, !1), this.countryList.scrollTop = 0), this.searchInput.focus();
          }
          this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
        }
        //* Set the dropdown position
        _setDropdownPosition() {
          if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
            const a = this.telInput.getBoundingClientRect(), u = this.telInput.offsetHeight;
            this.options.dropdownContainer && (this.dropdown.style.top = `${a.top + u}px`, this.dropdown.style.left = `${a.left}px`, this._handleWindowScroll = () => this._closeDropdown(), window.addEventListener("scroll", this._handleWindowScroll));
          }
        }
        //* We only bind dropdown listeners when the dropdown is open.
        _bindDropdownListeners() {
          this._handleMouseoverCountryList = (h) => {
            var v;
            const b = (v = h.target) == null ? void 0 : v.closest(".iti__country");
            b && this._highlightListItem(b, !1);
          }, this.countryList.addEventListener(
            "mouseover",
            this._handleMouseoverCountryList
          ), this._handleClickCountryList = (h) => {
            var v;
            const b = (v = h.target) == null ? void 0 : v.closest(".iti__country");
            b && this._selectListItem(b);
          }, this.countryList.addEventListener("click", this._handleClickCountryList);
          let a = !0;
          this._handleClickOffToClose = () => {
            a || this._closeDropdown(), a = !1;
          }, document.documentElement.addEventListener(
            "click",
            this._handleClickOffToClose
          );
          let u = "", c = null;
          if (this._handleKeydownOnDropdown = (h) => {
            ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(h.key) && (h.preventDefault(), h.stopPropagation(), h.key === "ArrowUp" || h.key === "ArrowDown" ? this._handleUpDownKey(h.key) : h.key === "Enter" ? this._handleEnterKey() : h.key === "Escape" && this._closeDropdown()), !this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(h.key) && (h.stopPropagation(), c && clearTimeout(c), u += h.key.toLowerCase(), this._searchForCountry(u), c = setTimeout(() => {
              u = "";
            }, 1e3));
          }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
            const h = () => {
              const v = this.searchInput.value.trim();
              v ? this._filterCountries(v) : this._filterCountries("", !0);
            };
            let b = null;
            this._handleSearchChange = () => {
              b && clearTimeout(b), b = setTimeout(() => {
                h(), b = null;
              }, 100);
            }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", (v) => v.stopPropagation());
          }
        }
        //* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
        _searchForCountry(a) {
          for (let u = 0; u < this.countries.length; u++) {
            const c = this.countries[u];
            if (c.name.substr(0, a.length).toLowerCase() === a) {
              const b = c.nodeById[this.id];
              this._highlightListItem(b, !1), this._scrollTo(b);
              break;
            }
          }
        }
        //* Country search enabled: Filter the countries according to the search query.
        _filterCountries(a, u = !1) {
          let c = !0;
          this.countryList.innerHTML = "";
          const h = J(a);
          for (let b = 0; b < this.countries.length; b++) {
            const v = this.countries[b], N = J(v.name), P = v.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((q) => q[0]).join("").toLowerCase(), re = `+${v.dialCode}`;
            if (u || N.includes(h) || re.includes(h) || v.iso2.includes(h) || P.includes(h)) {
              const q = v.nodeById[this.id];
              q && this.countryList.appendChild(q), c && (this._highlightListItem(q, !1), c = !1);
            }
          }
          c && this._highlightListItem(null, !1), this.countryList.scrollTop = 0, this._updateSearchResultsText();
        }
        //* Update search results text (for a11y).
        _updateSearchResultsText() {
          const { i18n: a } = this.options, u = this.countryList.childElementCount;
          let c;
          u === 0 ? c = a.zeroSearchResults : u === 1 ? c = a.oneSearchResult : c = a.multipleSearchResults.replace("${count}", u.toString()), this.searchResultsA11yText.textContent = c;
        }
        //* Highlight the next/prev item in the list (and ensure it is visible).
        _handleUpDownKey(a) {
          var c, h;
          let u = a === "ArrowUp" ? (c = this.highlightedItem) == null ? void 0 : c.previousElementSibling : (h = this.highlightedItem) == null ? void 0 : h.nextElementSibling;
          !u && this.countryList.childElementCount > 1 && (u = a === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), u && (this._scrollTo(u), this._highlightListItem(u, !1));
        }
        //* Select the currently highlighted item.
        _handleEnterKey() {
          this.highlightedItem && this._selectListItem(this.highlightedItem);
        }
        //* Update the input's value to the given val (format first if possible)
        //* NOTE: this is called from _setInitialState, handleUtils and setNumber.
        _updateValFromNumber(a) {
          let u = a;
          if (this.options.formatOnDisplay && C.utils && this.selectedCountryData) {
            const c = this.options.nationalMode || u.charAt(0) !== "+" && !this.options.separateDialCode, { NATIONAL: h, INTERNATIONAL: b } = C.utils.numberFormat, v = c ? h : b;
            u = C.utils.formatNumber(
              u,
              this.selectedCountryData.iso2,
              v
            );
          }
          u = this._beforeSetNumber(u), this.telInput.value = u;
        }
        //* Check if need to select a new country based on the given number
        //* Note: called from _setInitialState, keyup handler, setNumber.
        _updateCountryFromNumber(a) {
          const u = a.indexOf("+");
          let c = u ? a.substring(u) : a;
          const h = this.selectedCountryData.dialCode;
          c && h === "1" && c.charAt(0) !== "+" && (c.charAt(0) !== "1" && (c = `1${c}`), c = `+${c}`), this.options.separateDialCode && h && c.charAt(0) !== "+" && (c = `+${h}${c}`);
          const v = this._getDialCode(c, !0), N = F(c);
          let P = null;
          if (v) {
            const re = this.dialCodeToIso2Map[F(v)], q = re.indexOf(this.selectedCountryData.iso2) !== -1 && N.length <= v.length - 1;
            if (!(h === "1" && X(N)) && !q) {
              for (let Y = 0; Y < re.length; Y++)
                if (re[Y]) {
                  P = re[Y];
                  break;
                }
            }
          } else
            c.charAt(0) === "+" && N.length ? P = "" : (!c || c === "+") && !this.selectedCountryData.iso2 && (P = this.defaultCountry);
          return P !== null ? this._setCountry(P) : !1;
        }
        //* Remove highlighting from other list items and highlight the given item.
        _highlightListItem(a, u) {
          const c = this.highlightedItem;
          if (c && (c.classList.remove("iti__highlight"), c.setAttribute("aria-selected", "false")), this.highlightedItem = a, this.highlightedItem) {
            this.highlightedItem.classList.add("iti__highlight"), this.highlightedItem.setAttribute("aria-selected", "true");
            const h = this.highlightedItem.getAttribute("id") || "";
            this.selectedCountry.setAttribute("aria-activedescendant", h), this.options.countrySearch && this.searchInput.setAttribute("aria-activedescendant", h);
          }
          u && this.highlightedItem.focus();
        }
        //* Find the country data for the given iso2 code
        //* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
        _getCountryData(a, u) {
          for (let c = 0; c < this.countries.length; c++)
            if (this.countries[c].iso2 === a)
              return this.countries[c];
          if (u)
            return null;
          throw new Error(`No country data for '${a}'`);
        }
        //* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
        //* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
        _setCountry(a) {
          const { separateDialCode: u, showFlags: c, i18n: h } = this.options, b = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
          if (this.selectedCountryData = a ? this._getCountryData(a, !1) || {} : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedCountryInner) {
            let v = "", N = "";
            a && c ? (v = `iti__flag iti__${a}`, N = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`) : (v = "iti__flag iti__globe", N = h.noCountrySelected), this.selectedCountryInner.className = v, this.selectedCountryA11yText.textContent = N;
          }
          if (this._setSelectedCountryTitleAttribute(a, u), u) {
            const v = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
            this.selectedDialCode.innerHTML = v, this._updateInputPadding();
          }
          return this._updatePlaceholder(), this._updateMaxLength(), b.iso2 !== a;
        }
        //* Update the input padding to make space for the selected country/dial code.
        _updateInputPadding() {
          if (this.selectedCountry) {
            const u = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth()) + 6;
            this.showSelectedCountryOnLeft ? this.telInput.style.paddingLeft = `${u}px` : this.telInput.style.paddingRight = `${u}px`;
          }
        }
        //* Update the maximum valid number length for the currently selected country.
        _updateMaxLength() {
          const { strictMode: a, placeholderNumberType: u, validationNumberType: c } = this.options;
          if (a && C.utils)
            if (this.selectedCountryData.iso2) {
              const h = C.utils.numberType[u];
              let b = C.utils.getExampleNumber(
                this.selectedCountryData.iso2,
                !1,
                h,
                !0
              ), v = b;
              for (; C.utils.isPossibleNumber(b, this.selectedCountryData.iso2, c); )
                v = b, b += "0";
              const N = C.utils.getCoreNumber(v, this.selectedCountryData.iso2);
              this.maxCoreNumberLength = N.length;
            } else
              this.maxCoreNumberLength = null;
        }
        _setSelectedCountryTitleAttribute(a = null, u) {
          if (!this.selectedCountry)
            return;
          let c;
          a && !u ? c = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}` : a ? c = this.selectedCountryData.name : c = "Unknown", this.selectedCountry.setAttribute("title", c);
        }
        //* When the input is in a hidden container during initialisation, we must inject some markup
        //* into the end of the DOM to calculate the correct offsetWidth.
        //* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
        //* will definitely exist.
        _getHiddenSelectedCountryWidth() {
          if (this.telInput.parentNode) {
            const a = this.telInput.parentNode.cloneNode(!1);
            a.style.visibility = "hidden", document.body.appendChild(a);
            const u = this.countryContainer.cloneNode();
            a.appendChild(u);
            const c = this.selectedCountry.cloneNode(!0);
            u.appendChild(c);
            const h = c.offsetWidth;
            return document.body.removeChild(a), h;
          }
          return 0;
        }
        //* Update the input placeholder to an example number from the currently selected country.
        _updatePlaceholder() {
          const {
            autoPlaceholder: a,
            placeholderNumberType: u,
            nationalMode: c,
            customPlaceholder: h
          } = this.options, b = a === "aggressive" || !this.hadInitialPlaceholder && a === "polite";
          if (C.utils && b) {
            const v = C.utils.numberType[u];
            let N = this.selectedCountryData.iso2 ? C.utils.getExampleNumber(
              this.selectedCountryData.iso2,
              c,
              v
            ) : "";
            N = this._beforeSetNumber(N), typeof h == "function" && (N = h(N, this.selectedCountryData)), this.telInput.setAttribute("placeholder", N);
          }
        }
        //* Called when the user selects a list item from the dropdown.
        _selectListItem(a) {
          const u = this._setCountry(
            a.getAttribute("data-country-code")
          );
          this._closeDropdown(), this._updateDialCode(a.getAttribute("data-dial-code")), this.telInput.focus(), u && this._triggerCountryChange();
        }
        //* Close the dropdown and unbind any listeners.
        _closeDropdown() {
          this.dropdownContent.classList.add("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "false"), this.selectedCountry.removeAttribute("aria-activedescendant"), this.highlightedItem && this.highlightedItem.setAttribute("aria-selected", "false"), this.options.countrySearch && this.searchInput.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener(
            "click",
            this._handleClickOffToClose
          ), this.countryList.removeEventListener(
            "mouseover",
            this._handleMouseoverCountryList
          ), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
        }
        //* Check if an element is visible within it's container, else scroll until it is.
        _scrollTo(a) {
          const u = this.countryList, c = document.documentElement.scrollTop, h = u.offsetHeight, b = u.getBoundingClientRect().top + c, v = b + h, N = a.offsetHeight, P = a.getBoundingClientRect().top + c, re = P + N, q = P - b + u.scrollTop;
          if (P < b)
            u.scrollTop = q;
          else if (re > v) {
            const oe = h - N;
            u.scrollTop = q - oe;
          }
        }
        //* Replace any existing dial code with the new one
        //* Note: called from _selectListItem and setCountry
        _updateDialCode(a) {
          const u = this.telInput.value, c = `+${a}`;
          let h;
          if (u.charAt(0) === "+") {
            const b = this._getDialCode(u);
            b ? h = u.replace(b, c) : h = c, this.telInput.value = h;
          }
        }
        //* Try and extract a valid international dial code from a full telephone number.
        //* Note: returns the raw string inc plus character and any whitespace/dots etc.
        _getDialCode(a, u) {
          let c = "";
          if (a.charAt(0) === "+") {
            let h = "";
            for (let b = 0; b < a.length; b++) {
              const v = a.charAt(b);
              if (!isNaN(parseInt(v, 10))) {
                if (h += v, u)
                  this.dialCodeToIso2Map[h] && (c = a.substr(0, b + 1));
                else if (this.dialCodes[h]) {
                  c = a.substr(0, b + 1);
                  break;
                }
                if (h.length === this.dialCodeMaxLen)
                  break;
              }
            }
          }
          return c;
        }
        //* Get the input val, adding the dial code if separateDialCode is enabled.
        _getFullNumber() {
          const a = this.telInput.value.trim(), { dialCode: u } = this.selectedCountryData;
          let c;
          const h = F(a);
          return this.options.separateDialCode && a.charAt(0) !== "+" && u && h ? c = `+${u}` : c = "", c + a;
        }
        //* Remove the dial code if separateDialCode is enabled also cap the length if the input has a maxlength attribute
        _beforeSetNumber(a) {
          let u = a;
          if (this.options.separateDialCode) {
            let c = this._getDialCode(u);
            if (c) {
              c = `+${this.selectedCountryData.dialCode}`;
              const h = u[c.length] === " " || u[c.length] === "-" ? c.length + 1 : c.length;
              u = u.substr(h);
            }
          }
          return this._cap(u);
        }
        //* Trigger the 'countrychange' event.
        _triggerCountryChange() {
          this._trigger("countrychange");
        }
        //* Format the number as the user types.
        _formatNumberAsYouType() {
          const a = this._getFullNumber(), u = C.utils ? C.utils.formatNumberAsYouType(a, this.selectedCountryData.iso2) : a, { dialCode: c } = this.selectedCountryData;
          return this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && u.includes(`+${c}`) ? (u.split(`+${c}`)[1] || "").trim() : u;
        }
        //**************************
        //*  SECRET PUBLIC METHODS
        //**************************
        //* This is called when the geoip call returns.
        handleAutoCountry() {
          this.options.initialCountry === "auto" && C.autoCountry && (this.defaultCountry = C.autoCountry, this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe") || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
        }
        //* This is called when the utils request completes.
        handleUtils() {
          C.utils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())), this.resolveUtilsScriptPromise();
        }
        //********************
        //*  PUBLIC METHODS
        //********************
        //* Remove plugin.
        destroy() {
          var b, v;
          const { allowDropdown: a, separateDialCode: u } = this.options;
          if (a) {
            this._closeDropdown(), this.selectedCountry.removeEventListener(
              "click",
              this._handleClickSelectedCountry
            ), this.countryContainer.removeEventListener(
              "keydown",
              this._handleCountryContainerKeydown
            );
            const N = this.telInput.closest("label");
            N && N.removeEventListener("click", this._handleLabelClick);
          }
          const { form: c } = this.telInput;
          this._handleHiddenInputSubmit && c && c.removeEventListener("submit", this._handleHiddenInputSubmit), this.telInput.removeEventListener("input", this._handleInputEvent), this._handleKeydownEvent && this.telInput.removeEventListener("keydown", this._handleKeydownEvent), this.telInput.removeAttribute("data-intl-tel-input-id"), u && (this.isRTL ? this.telInput.style.paddingRight = this.originalPaddingRight : this.telInput.style.paddingLeft = this.originalPaddingLeft);
          const h = this.telInput.parentNode;
          (b = h == null ? void 0 : h.parentNode) == null || b.insertBefore(this.telInput, h), (v = h == null ? void 0 : h.parentNode) == null || v.removeChild(h), delete C.instances[this.id];
        }
        //* Get the extension from the current number.
        getExtension() {
          return C.utils ? C.utils.getExtension(
            this._getFullNumber(),
            this.selectedCountryData.iso2
          ) : "";
        }
        //* Format the number to the given format.
        getNumber(a) {
          if (C.utils) {
            const { iso2: u } = this.selectedCountryData;
            return C.utils.formatNumber(
              this._getFullNumber(),
              u,
              a
            );
          }
          return "";
        }
        //* Get the type of the entered number e.g. landline/mobile.
        getNumberType() {
          return C.utils ? C.utils.getNumberType(
            this._getFullNumber(),
            this.selectedCountryData.iso2
          ) : -99;
        }
        //* Get the country data for the currently selected country.
        getSelectedCountryData() {
          return this.selectedCountryData;
        }
        //* Get the validation error.
        getValidationError() {
          if (C.utils) {
            const { iso2: a } = this.selectedCountryData;
            return C.utils.getValidationError(this._getFullNumber(), a);
          }
          return -99;
        }
        //* Validate the input val
        isValidNumber() {
          if (!this.selectedCountryData.iso2)
            return !1;
          const a = this._getFullNumber(), u = a.search(new RegExp("\\p{L}", "u"));
          if (u > -1) {
            const c = a.substring(0, u), h = this._utilsIsPossibleNumber(c), b = this._utilsIsPossibleNumber(a);
            return h && b;
          }
          return this._utilsIsPossibleNumber(a);
        }
        _utilsIsPossibleNumber(a) {
          return C.utils ? C.utils.isPossibleNumber(a, this.selectedCountryData.iso2, this.options.validationNumberType) : null;
        }
        //* Validate the input val (precise)
        isValidNumberPrecise() {
          if (!this.selectedCountryData.iso2)
            return !1;
          const a = this._getFullNumber(), u = a.search(new RegExp("\\p{L}", "u"));
          if (u > -1) {
            const c = a.substring(0, u), h = this._utilsIsValidNumber(c), b = this._utilsIsValidNumber(a);
            return h && b;
          }
          return this._utilsIsValidNumber(a);
        }
        _utilsIsValidNumber(a) {
          return C.utils ? C.utils.isValidNumber(a, this.selectedCountryData.iso2) : null;
        }
        //* Update the selected country, and update the input val accordingly.
        setCountry(a) {
          const u = a == null ? void 0 : a.toLowerCase(), c = this.selectedCountryData.iso2;
          (a && u !== c || !a && c) && (this._setCountry(u), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
        }
        //* Set the input value and update the country.
        setNumber(a) {
          const u = this._updateCountryFromNumber(a);
          this._updateValFromNumber(a), u && this._triggerCountryChange(), this._trigger("input", { isSetNumber: !0 });
        }
        //* Set the placeholder number typ
        setPlaceholderNumberType(a) {
          this.options.placeholderNumberType = a, this._updatePlaceholder();
        }
        setDisabled(a) {
          this.telInput.disabled = a, a ? this.selectedCountry.setAttribute("disabled", "true") : this.selectedCountry.removeAttribute("disabled");
        }
      }, j = (a) => !C.utils && !C.startedLoadingUtilsScript ? (C.startedLoadingUtilsScript = !0, new Promise((u, c) => {
        import(
          /* webpackIgnore: true */
          /* @vite-ignore */
          a
        ).then(({ default: h }) => {
          C.utils = h, M("handleUtils"), u(!0);
        }).catch(() => {
          M("rejectUtilsScriptPromise"), c();
        });
      })) : null, C = Object.assign(
        (a, u) => {
          const c = new A(a, u);
          return c._init(), a.setAttribute("data-intl-tel-input-id", c.id.toString()), C.instances[c.id] = c, c;
        },
        {
          defaults: V,
          //* Using a static var like this allows us to mock it in the tests.
          documentReady: () => document.readyState === "complete",
          //* Get the country data object.
          getCountryData: () => m,
          //* A getter for the plugin instance.
          getInstance: (a) => {
            const u = a.getAttribute("data-intl-tel-input-id");
            return u ? C.instances[u] : null;
          },
          //* A map from instance ID to instance object.
          instances: {},
          loadUtils: j,
          version: "24.4.0"
        }
      ), te = C;
      return d(p);
    })();
    return t.default;
  });
})(No);
var Su = No.exports;
const Iu = /* @__PURE__ */ $u(Su), Tu = ["placeholder", "data-testid"], Hu = {
  __name: "TwcPhoneInput",
  props: /* @__PURE__ */ gt({
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
  }, {
    modelValue: {
      default: "",
      type: String
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["change", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = ie(null), o = ie(null), n = ie(!1), i = Yr(e, "modelValue"), s = e, l = t;
    function d() {
      n.value = o.value.isValidNumber(), n.value ? l("change", r.value.value, !0, o.value.getNumber()) : l("change", r.value.value, !1);
    }
    const p = x(() => {
      let g = "TwcPhoneInput mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input";
      return n.value && (g += " border-green-500 focus:border-green-500 focus:outline-green-500 focus:ring-green-500 bg-green-50"), s.displayError && (g += " border-red-500 focus:border-red-500 focus:outline-red-500 bg-red-50"), g;
    });
    return _t(() => {
      const g = (f) => {
        localStorage != null && localStorage.getItem("ipCountry") ? f(localStorage.getItem("ipCountry")) : s.ipInfoKey ? fetch(`https://ipinfo.io/json?token=${s.ipInfoKey}`, {
          headers: { Accept: "application/json" }
        }).then((m) => m.json()).then((m) => {
          f(m.country), localStorage == null || localStorage.setItem("ipCountry", m.country);
        }).catch(() => {
          f("US");
        }) : f("US");
      };
      o.value = Iu(r.value, {
        initialCountry: "auto",
        geoIpLookup: g,
        autoPlaceholder: "off",
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.4.0/build/js/utils.js"
      });
    }), (g, f) => Ct((w(), L("input", {
      "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
      ref_key: "phoneInput",
      ref: r,
      type: "tel",
      placeholder: g.$props.placeholder,
      class: H(p.value),
      "data-testid": g.$props.dataTestid,
      onInput: d
    }, null, 42, Tu)), [
      [Xo, i.value]
    ]);
  }
}, Vu = {
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
    return (o, n) => (w(), L("div", {
      class: H(`h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface ${r()} ${t.color} ${t.class}`),
      role: "status"
    }, null, 2));
  }
}, Wu = {
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
    return (o, n) => (w(), L("i", {
      class: H(`${r()} ${t.class}`)
    }, null, 2));
  }
}, Pu = {
  __name: "TwcAccordionTable",
  setup(e) {
    return (t, r) => (w(), Q(T(tn), { class: "TwcAccordionTable" }, {
      default: Z(() => [
        z(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Gu = /* @__PURE__ */ Ve(Pu, [["__scopeId", "data-v-7d937965"]]), Lu = { class: "flex" }, Au = {
  key: 0,
  class: "flex-1 mr-5"
}, Nu = {
  __name: "TwcAccordionTableRow",
  props: {
    data: {
      type: Array,
      required: !0,
      default: () => []
    }
  },
  setup(e) {
    return (t, r) => (w(), Q(T(Fn), { class: "TwcAccordionTableRow" }, {
      default: Z(() => [
        Ye(T(jn), null, {
          default: Z(() => [
            R("div", Lu, [
              (w(!0), L(Be, null, Jr(e.data, (o, n) => (w(), L("div", {
                key: n,
                class: "flex-1 self-center first:font-bold uppercase"
              }, ne(o), 1))), 128)),
              t.$slots.action ? (w(), L("div", Au, [
                z(t.$slots, "action", {}, void 0, !0)
              ])) : U("", !0)
            ])
          ]),
          _: 3
        }),
        Ye(T(Nn), null, {
          default: Z(() => [
            z(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, Uu = /* @__PURE__ */ Ve(Nu, [["__scopeId", "data-v-3a028803"]]);
export {
  Gu as TwcAccordionTable,
  Uu as TwcAccordionTableRow,
  zu as TwcButton,
  Eu as TwcHeading,
  Wu as TwcIcon,
  Mu as TwcInput,
  Bu as TwcLabel,
  ju as TwcLink,
  Ru as TwcParagraph,
  Hu as TwcPhoneInput,
  Fu as TwcSelect,
  Vu as TwcSpinner,
  Ou as TwcToggle
};
