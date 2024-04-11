var vo = Object.defineProperty;
var wo = (e, t, r) => t in e ? vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var T = (e, t, r) => (wo(e, typeof t != "symbol" ? t + "" : t, r), r);
import { reactive as xo, defineComponent as X, useAttrs as Ot, openBlock as $, createElementBlock as O, mergeProps as Te, unref as D, createTextVNode as rt, toDisplayString as ge, createBlock as K, resolveDynamicComponent as pt, normalizeClass as V, withCtx as te, ref as me, provide as _o, h as Ye, TransitionGroup as Co, pushScopeId as ko, popScopeId as $o, toRefs as ve, renderSlot as j, createCommentVNode as Q, createElementVNode as G, nextTick as Io, computed as S, resolveComponent as st, normalizeProps as Ke, Fragment as Bt, Comment as To, withDirectives as jt, isRef as Br, vModelDynamic as So, renderList as Lo, vModelSelect as Po, vModelCheckbox as No, useSlots as Ao, getCurrentInstance as Do, watch as Zt, guardReactiveProps as ht, withScopeId as zo, normalizeStyle as Ct, withKeys as Eo, createVNode as Mo, getCurrentScope as Oo, onScopeDispose as Bo, inject as jo, createSlots as jr, onMounted as Fo } from "vue";
xo({});
function Ro() {
  for (var e = 0, t, r, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Fr(t)) && (o && (o += " "), o += r);
  return o;
}
function Fr(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", o = 0; o < e.length; o++)
    e[o] && (t = Fr(e[o])) && (r && (r += " "), r += t);
  return r;
}
var Ft = "-";
function Ho(e) {
  var t = Go(e), r = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, n = o === void 0 ? {} : o;
  function i(u) {
    var c = u.split(Ft);
    return c[0] === "" && c.length !== 1 && c.shift(), Rr(c, t) || Uo(u);
  }
  function s(u, c) {
    var p = r[u] || [];
    return c && n[u] ? [].concat(p, n[u]) : p;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function Rr(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), n = o ? Rr(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length !== 0) {
    var i = e.join(Ft);
    return (s = t.validators.find(function(u) {
      var c = u.validator;
      return c(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Xt = /^\[(.+)\]$/;
function Uo(e) {
  if (Xt.test(e)) {
    var t = Xt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Go(e) {
  var t = e.theme, r = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, n = Wo(Object.entries(e.classGroups), r);
  return n.forEach(function(i) {
    var s = i[0], u = i[1];
    St(u, o, s, t);
  }), o;
}
function St(e, t, r, o) {
  e.forEach(function(n) {
    if (typeof n == "string") {
      var i = n === "" ? t : er(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Vo(n)) {
        St(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(function(s) {
      var u = s[0], c = s[1];
      St(c, er(t, u), r, o);
    });
  });
}
function er(e, t) {
  var r = e;
  return t.split(Ft).forEach(function(o) {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function Vo(e) {
  return e.isThemeGetter;
}
function Wo(e, t) {
  return t ? e.map(function(r) {
    var o = r[0], n = r[1], i = n.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(u) {
        var c = u[0], p = u[1];
        return [t + c, p];
      })) : s;
    });
    return [o, i];
  }) : e;
}
function qo(e) {
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
var Hr = "!";
function Ko(e) {
  var t = e.separator || ":", r = t.length === 1, o = t[0], n = t.length;
  return function(i) {
    for (var s = [], u = 0, c = 0, p, g = 0; g < i.length; g++) {
      var f = i[g];
      if (u === 0) {
        if (f === o && (r || i.slice(g, g + n) === t)) {
          s.push(i.slice(c, g)), c = g + n;
          continue;
        }
        if (f === "/") {
          p = g;
          continue;
        }
      }
      f === "[" ? u++ : f === "]" && u--;
    }
    var b = s.length === 0 ? i : i.substring(c), y = b.startsWith(Hr), w = y ? b.substring(1) : b, x = p && p > c ? p - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: w,
      maybePostfixModifierPosition: x
    };
  };
}
function Qo(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(o) {
    var n = o[0] === "[";
    n ? (t.push.apply(t, r.sort().concat([o])), r = []) : r.push(o);
  }), t.push.apply(t, r.sort()), t;
}
function Jo(e) {
  return {
    cache: qo(e.cacheSize),
    splitModifiers: Ko(e),
    ...Ho(e)
  };
}
var Yo = /\s+/;
function Zo(e, t) {
  var r = t.splitModifiers, o = t.getClassGroupId, n = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Yo).map(function(s) {
    var u = r(s), c = u.modifiers, p = u.hasImportantModifier, g = u.baseClassName, f = u.maybePostfixModifierPosition, b = o(f ? g.substring(0, f) : g), y = !!f;
    if (!b) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (b = o(g), !b)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      y = !1;
    }
    var w = Qo(c).join(":"), x = p ? w + Hr : w;
    return {
      isTailwindClass: !0,
      modifierId: x,
      classGroupId: b,
      originalClassName: s,
      hasPostfixModifier: y
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var u = s.modifierId, c = s.classGroupId, p = s.hasPostfixModifier, g = u + c;
    return i.has(g) ? !1 : (i.add(g), n(c, p).forEach(function(f) {
      return i.add(u + f);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Xo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o, n, i, s = u;
  function u(p) {
    var g = t[0], f = t.slice(1), b = f.reduce(function(y, w) {
      return w(y);
    }, g());
    return o = Jo(b), n = o.cache.get, i = o.cache.set, s = c, c(p);
  }
  function c(p) {
    var g = n(p);
    if (g)
      return g;
    var f = Zo(p, o);
    return i(p, f), f;
  }
  return function() {
    return s(Ro.apply(null, arguments));
  };
}
function U(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Ur = /^\[(?:([a-z-]+):)?(.+)\]$/i, en = /^\d+\/\d+$/, tn = /* @__PURE__ */ new Set(["px", "full", "screen"]), rn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, on = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function oe(e) {
  return ke(e) || tn.has(e) || en.test(e) || Lt(e);
}
function Lt(e) {
  return Se(e, "length", cn);
}
function sn(e) {
  return Se(e, "size", Gr);
}
function an(e) {
  return Se(e, "position", Gr);
}
function ln(e) {
  return Se(e, "url", pn);
}
function Ze(e) {
  return Se(e, "number", ke);
}
function ke(e) {
  return !Number.isNaN(Number(e));
}
function un(e) {
  return e.endsWith("%") && ke(e.slice(0, -1));
}
function Oe(e) {
  return tr(e) || Se(e, "number", tr);
}
function E(e) {
  return Ur.test(e);
}
function Be() {
  return !0;
}
function ce(e) {
  return rn.test(e);
}
function dn(e) {
  return Se(e, "", hn);
}
function Se(e, t, r) {
  var o = Ur.exec(e);
  return o ? o[1] ? o[1] === t : r(o[2]) : !1;
}
function cn(e) {
  return on.test(e);
}
function Gr() {
  return !1;
}
function pn(e) {
  return e.startsWith("url(");
}
function tr(e) {
  return Number.isInteger(Number(e));
}
function hn(e) {
  return nn.test(e);
}
function fn() {
  var e = U("colors"), t = U("spacing"), r = U("blur"), o = U("brightness"), n = U("borderColor"), i = U("borderRadius"), s = U("borderSpacing"), u = U("borderWidth"), c = U("contrast"), p = U("grayscale"), g = U("hueRotate"), f = U("invert"), b = U("gap"), y = U("gradientColorStops"), w = U("gradientColorStopPositions"), x = U("inset"), _ = U("margin"), C = U("opacity"), k = U("padding"), z = U("saturate"), R = U("scale"), H = U("sepia"), N = U("skew"), W = U("space"), J = U("translate"), Y = function() {
    return ["auto", "contain", "none"];
  }, F = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, B = function() {
    return ["auto", E, t];
  }, L = function() {
    return [E, t];
  }, l = function() {
    return ["", oe];
  }, a = function() {
    return ["auto", ke, E];
  }, d = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, h = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, m = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, v = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, A = function() {
    return ["", "0", E];
  }, P = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [ke, Ze];
  }, q = function() {
    return [ke, E];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Be],
      spacing: [oe],
      blur: ["none", "", ce, E],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ce, E],
      borderSpacing: L(),
      borderWidth: l(),
      contrast: I(),
      grayscale: A(),
      hueRotate: q(),
      invert: A(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [un, Lt],
      inset: B(),
      margin: B(),
      opacity: I(),
      padding: L(),
      saturate: I(),
      scale: I(),
      sepia: A(),
      skew: q(),
      space: L(),
      translate: L()
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
        columns: [ce]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        object: [].concat(d(), [E])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", Oe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        grow: A()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: A()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Oe]
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
          span: ["full", Oe]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": a()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": a()
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
          span: [Oe]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": a()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": a()
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
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(v())
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
        content: ["normal"].concat(v(), ["baseline"])
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
        "place-content": [].concat(v(), ["baseline"])
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [W]
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
        "space-y": [W]
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
        "min-w": ["min", "max", "fit", E, oe]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ce]
        }, ce, E]
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
        "min-h": ["min", "max", "fit", E, oe]
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
        text: ["base", ce, Lt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ze]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ke, Ze]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", E, oe]
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
        "placeholder-opacity": [C]
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
        "text-opacity": [C]
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
        decoration: [].concat(h(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", oe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", E, oe]
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
        indent: L()
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
        "bg-opacity": [C]
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
        bg: [].concat(d(), [an])
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
        bg: ["auto", "cover", "contain", sn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ln]
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
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(h(), ["hidden"])
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: h()
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
        outline: [""].concat(h())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [oe]
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
        ring: l()
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [oe]
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
        shadow: ["", "inner", "none", ce, dn]
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
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": m()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": m()
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ce, E]
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
        saturate: [z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [H]
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
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [H]
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
        duration: q()
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
        delay: q()
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
        scale: [R]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [R]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [R]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Oe, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [J]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [J]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
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
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
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
        stroke: [oe, Ze]
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
var ue = /* @__PURE__ */ Xo(fn);
const Pt = (e) => ue(e);
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vr = { exports: {} };
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
              var u = r.apply(null, i);
              u && o.push(u);
            }
          } else if (s === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              o.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && o.push(c);
          }
        }
      }
      return o.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Vr);
var mn = Vr.exports;
const bn = /* @__PURE__ */ gn(mn), yn = {
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
}, vn = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function wn(e) {
  const t = S(() => yn[e.size.value]), r = S(() => vn[e.color.value]), o = S(() => "text-gray-200 dark:text-gray-600"), n = S(() => "animate-spin");
  return { spinnerClasses: S(() => bn(
    n.value,
    o.value,
    r.value,
    t.value
  )) };
}
const xn = /* @__PURE__ */ G("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), _n = /* @__PURE__ */ G("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Cn = [
  xn,
  _n
], Xe = /* @__PURE__ */ X({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = wn(ve(t));
    return (o, n) => ($(), O("svg", {
      class: V(D(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, Cn, 2));
  }
}), rr = {
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
}, or = {
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
}, nr = {
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
}, ir = {
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
}, kn = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, $n = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, sr = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, kt = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], In = ["alternative", "light"];
function Tn(e) {
  const t = Ao(), r = S(() => e.square.value ? $n[e.size.value] : kn[e.size.value]), o = S(() => {
    const i = !!e.gradient.value, s = !!e.color.value, u = e.outline.value;
    let c = "", p = "";
    if (i && u)
      kt.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (p = ir.default[e.gradient.value], e.disabled.value || (c = ir.hover[e.gradient.value]));
    else if (i)
      p = nr.default[e.gradient.value], e.disabled.value || (c = nr.hover[e.gradient.value]);
    else if (s && u)
      if (In.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const f = e.color.value;
        p = or.default[f], e.disabled.value || (c = or.hover[f]);
      }
    else {
      const f = e.color.value;
      p = rr.default[f], e.disabled.value || (c = rr.hover[f]);
    }
    let g = "";
    return e.shadow.value === "" ? e.gradient.value && kt.includes(e.gradient.value) && (g = sr[e.gradient.value]) : typeof e.shadow.value == "string" && kt.includes(e.shadow.value) && (g = sr[e.shadow.value]), [
      p,
      c,
      g,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      i && u ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((f) => f).join(" ");
  }), n = S(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((i) => i).join(" ") : "");
  return {
    wrapperClasses: o.value,
    spanClasses: n.value
  };
}
function Sn(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = S(() => t[e.size.value]);
  return {
    color: S(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const Ln = {
  key: 0,
  class: "mr-2"
}, Pn = {
  key: 0,
  class: "mr-2"
}, Nn = {
  key: 1,
  class: "ml-2"
}, An = {
  key: 1,
  class: "ml-2"
}, Dn = /* @__PURE__ */ X({
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
    const t = e, r = S(() => Tn(ve(t))), o = S(() => Pt(r.value.wrapperClasses)), n = S(() => Pt(r.value.spanClasses)), i = S(() => t.outline && t.gradient), s = S(() => t.loading && t.loadingPosition === "prefix"), u = S(() => t.loading && t.loadingPosition === "suffix"), { color: c, size: p } = Sn(ve(t)), g = t.tag !== "a" ? st(t.tag) : "a", f = t.href ? g : "button", b = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (y, w) => ($(), K(pt(D(f)), Ke({
      class: o.value,
      [D(b) || ""]: y.href,
      disabled: D(f) === "button" && y.disabled
    }), {
      default: te(() => [
        !i.value && (y.$slots.prefix || s.value) ? ($(), O("div", Ln, [
          s.value ? ($(), K(Xe, {
            key: 0,
            color: D(c),
            size: D(p)
          }, null, 8, ["color", "size"])) : j(y.$slots, "prefix", { key: 1 })
        ])) : Q("", !0),
        G("span", {
          class: V(n.value)
        }, [
          i.value && (y.$slots.prefix || s.value) ? ($(), O("span", Pn, [
            s.value ? ($(), K(Xe, {
              key: 0,
              color: D(c),
              size: D(p)
            }, null, 8, ["color", "size"])) : j(y.$slots, "prefix", { key: 1 })
          ])) : Q("", !0),
          j(y.$slots, "default"),
          i.value && (y.$slots.suffix || u.value) ? ($(), O("span", Nn, [
            u.value ? ($(), K(Xe, {
              key: 0,
              color: D(c),
              size: D(p)
            }, null, 8, ["color", "size"])) : j(y.$slots, "suffix", { key: 1 })
          ])) : Q("", !0)
        ], 2),
        !i.value && (y.$slots.suffix || u.value) ? ($(), O("div", An, [
          u.value ? ($(), K(Xe, {
            key: 0,
            color: D(c),
            size: D(p)
          }, null, 8, ["color", "size"])) : j(y.$slots, "suffix", { key: 1 })
        ])) : Q("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
var ar;
const Wr = typeof window < "u", zn = (e) => typeof e < "u", En = (e) => typeof e == "function";
Wr && (ar = window == null ? void 0 : window.navigator) != null && ar.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Mn(e) {
  return typeof e == "function" ? e() : D(e);
}
function On(e) {
  return e;
}
function Bn(e) {
  return Oo() ? (Bo(e), !0) : !1;
}
function jn(e, t, r = {}) {
  const {
    immediate: o = !0
  } = r, n = me(!1);
  let i = null;
  function s() {
    i && (clearTimeout(i), i = null);
  }
  function u() {
    n.value = !1, s();
  }
  function c(...p) {
    s(), n.value = !0, i = setTimeout(() => {
      n.value = !1, i = null, e(...p);
    }, Mn(t));
  }
  return o && (n.value = !0, Wr && c()), Bn(u), {
    isPending: n,
    start: c,
    stop: u
  };
}
function Fn(e) {
  return JSON.parse(JSON.stringify(e));
}
const lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ur = "__vueuse_ssr_handlers__";
lr[ur] = lr[ur] || {};
var dr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(dr || (dr = {}));
var Rn = Object.defineProperty, cr = Object.getOwnPropertySymbols, Hn = Object.prototype.hasOwnProperty, Un = Object.prototype.propertyIsEnumerable, pr = (e, t, r) => t in e ? Rn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Gn = (e, t) => {
  for (var r in t || (t = {}))
    Hn.call(t, r) && pr(e, r, t[r]);
  if (cr)
    for (var r of cr(t))
      Un.call(t, r) && pr(e, r, t[r]);
  return e;
};
const Vn = {
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
Gn({
  linear: On
}, Vn);
function qr(e, t, r, o = {}) {
  var n, i, s;
  const {
    clone: u = !1,
    passive: c = !1,
    eventName: p,
    deep: g = !1,
    defaultValue: f
  } = o, b = Do(), y = r || (b == null ? void 0 : b.emit) || ((n = b == null ? void 0 : b.$emit) == null ? void 0 : n.bind(b)) || ((s = (i = b == null ? void 0 : b.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(b == null ? void 0 : b.proxy));
  let w = p;
  t || (t = "modelValue"), w = p || w || `update:${t.toString()}`;
  const x = (C) => u ? En(u) ? u(C) : Fn(C) : C, _ = () => zn(e[t]) ? x(e[t]) : f;
  if (c) {
    const C = _(), k = me(C);
    return Zt(() => e[t], (z) => k.value = x(z)), Zt(k, (z) => {
      (z !== e[t] || g) && y(w, z);
    }, { deep: g }), k;
  } else
    return S({
      get() {
        return _();
      },
      set(C) {
        y(w, C);
      }
    });
}
var Wn = typeof global == "object" && global && global.Object === Object && global;
const qn = Wn;
var Kn = typeof self == "object" && self && self.Object === Object && self, Qn = qn || Kn || Function("return this")();
const Rt = Qn;
var Jn = Rt.Symbol;
const we = Jn;
var Kr = Object.prototype, Yn = Kr.hasOwnProperty, Zn = Kr.toString, je = we ? we.toStringTag : void 0;
function Xn(e) {
  var t = Yn.call(e, je), r = e[je];
  try {
    e[je] = void 0;
    var o = !0;
  } catch {
  }
  var n = Zn.call(e);
  return o && (t ? e[je] = r : delete e[je]), n;
}
var ei = Object.prototype, ti = ei.toString;
function ri(e) {
  return ti.call(e);
}
var oi = "[object Null]", ni = "[object Undefined]", hr = we ? we.toStringTag : void 0;
function Ht(e) {
  return e == null ? e === void 0 ? ni : oi : hr && hr in Object(e) ? Xn(e) : ri(e);
}
function Ut(e) {
  return e != null && typeof e == "object";
}
var ii = "[object Symbol]";
function Gt(e) {
  return typeof e == "symbol" || Ut(e) && Ht(e) == ii;
}
function si(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = Array(o); ++r < o; )
    n[r] = t(e[r], r, e);
  return n;
}
var ai = Array.isArray;
const Qe = ai;
var li = 1 / 0, fr = we ? we.prototype : void 0, gr = fr ? fr.toString : void 0;
function Qr(e) {
  if (typeof e == "string")
    return e;
  if (Qe(e))
    return si(e, Qr) + "";
  if (Gt(e))
    return gr ? gr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -li ? "-0" : t;
}
function at(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function ui(e) {
  return e;
}
var di = "[object AsyncFunction]", ci = "[object Function]", pi = "[object GeneratorFunction]", hi = "[object Proxy]";
function fi(e) {
  if (!at(e))
    return !1;
  var t = Ht(e);
  return t == ci || t == pi || t == di || t == hi;
}
var gi = Rt["__core-js_shared__"];
const $t = gi;
var mr = function() {
  var e = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mi(e) {
  return !!mr && mr in e;
}
var bi = Function.prototype, yi = bi.toString;
function vi(e) {
  if (e != null) {
    try {
      return yi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wi = /[\\^$.*+?()[\]{}|]/g, xi = /^\[object .+?Constructor\]$/, _i = Function.prototype, Ci = Object.prototype, ki = _i.toString, $i = Ci.hasOwnProperty, Ii = RegExp(
  "^" + ki.call($i).replace(wi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ti(e) {
  if (!at(e) || mi(e))
    return !1;
  var t = fi(e) ? Ii : xi;
  return t.test(vi(e));
}
function Si(e, t) {
  return e == null ? void 0 : e[t];
}
function Vt(e, t) {
  var r = Si(e, t);
  return Ti(r) ? r : void 0;
}
function Li(e, t, r) {
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
var Pi = 800, Ni = 16, Ai = Date.now;
function Di(e) {
  var t = 0, r = 0;
  return function() {
    var o = Ai(), n = Ni - (o - r);
    if (r = o, n > 0) {
      if (++t >= Pi)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function zi(e) {
  return function() {
    return e;
  };
}
var Ei = function() {
  try {
    var e = Vt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const lt = Ei;
var Mi = lt ? function(e, t) {
  return lt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zi(t),
    writable: !0
  });
} : ui;
const Oi = Mi;
var Bi = Di(Oi);
const ji = Bi;
var Fi = 9007199254740991, Ri = /^(?:0|[1-9]\d*)$/;
function Jr(e, t) {
  var r = typeof e;
  return t = t ?? Fi, !!t && (r == "number" || r != "symbol" && Ri.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Hi(e, t, r) {
  t == "__proto__" && lt ? lt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Yr(e, t) {
  return e === t || e !== e && t !== t;
}
var Ui = Object.prototype, Gi = Ui.hasOwnProperty;
function Vi(e, t, r) {
  var o = e[t];
  (!(Gi.call(e, t) && Yr(o, r)) || r === void 0 && !(t in e)) && Hi(e, t, r);
}
var br = Math.max;
function Wi(e, t, r) {
  return t = br(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, n = -1, i = br(o.length - t, 0), s = Array(i); ++n < i; )
      s[n] = o[t + n];
    n = -1;
    for (var u = Array(t + 1); ++n < t; )
      u[n] = o[n];
    return u[t] = r(s), Li(e, this, u);
  };
}
var qi = 9007199254740991;
function Ki(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qi;
}
var Qi = "[object Arguments]";
function yr(e) {
  return Ut(e) && Ht(e) == Qi;
}
var Zr = Object.prototype, Ji = Zr.hasOwnProperty, Yi = Zr.propertyIsEnumerable, Zi = yr(/* @__PURE__ */ function() {
  return arguments;
}()) ? yr : function(e) {
  return Ut(e) && Ji.call(e, "callee") && !Yi.call(e, "callee");
};
const Xr = Zi;
var Xi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, es = /^\w*$/;
function ts(e, t) {
  if (Qe(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Gt(e) ? !0 : es.test(e) || !Xi.test(e) || t != null && e in Object(t);
}
var rs = Vt(Object, "create");
const Ge = rs;
function os() {
  this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
}
function ns(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var is = "__lodash_hash_undefined__", ss = Object.prototype, as = ss.hasOwnProperty;
function ls(e) {
  var t = this.__data__;
  if (Ge) {
    var r = t[e];
    return r === is ? void 0 : r;
  }
  return as.call(t, e) ? t[e] : void 0;
}
var us = Object.prototype, ds = us.hasOwnProperty;
function cs(e) {
  var t = this.__data__;
  return Ge ? t[e] !== void 0 : ds.call(t, e);
}
var ps = "__lodash_hash_undefined__";
function hs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ge && t === void 0 ? ps : t, this;
}
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ie.prototype.clear = os;
Ie.prototype.delete = ns;
Ie.prototype.get = ls;
Ie.prototype.has = cs;
Ie.prototype.set = hs;
function fs() {
  this.__data__ = [], this.size = 0;
}
function ft(e, t) {
  for (var r = e.length; r--; )
    if (Yr(e[r][0], t))
      return r;
  return -1;
}
var gs = Array.prototype, ms = gs.splice;
function bs(e) {
  var t = this.__data__, r = ft(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : ms.call(t, r, 1), --this.size, !0;
}
function ys(e) {
  var t = this.__data__, r = ft(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function vs(e) {
  return ft(this.__data__, e) > -1;
}
function ws(e, t) {
  var r = this.__data__, o = ft(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ee.prototype.clear = fs;
Ee.prototype.delete = bs;
Ee.prototype.get = ys;
Ee.prototype.has = vs;
Ee.prototype.set = ws;
var xs = Vt(Rt, "Map");
const _s = xs;
function Cs() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (_s || Ee)(),
    string: new Ie()
  };
}
function ks(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gt(e, t) {
  var r = e.__data__;
  return ks(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function $s(e) {
  var t = gt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Is(e) {
  return gt(this, e).get(e);
}
function Ts(e) {
  return gt(this, e).has(e);
}
function Ss(e, t) {
  var r = gt(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function Le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Le.prototype.clear = Cs;
Le.prototype.delete = $s;
Le.prototype.get = Is;
Le.prototype.has = Ts;
Le.prototype.set = Ss;
var Ls = "Expected a function";
function Wt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ls);
  var r = function() {
    var o = arguments, n = t ? t.apply(this, o) : o[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = e.apply(this, o);
    return r.cache = i.set(n, s) || i, s;
  };
  return r.cache = new (Wt.Cache || Le)(), r;
}
Wt.Cache = Le;
var Ps = 500;
function Ns(e) {
  var t = Wt(e, function(o) {
    return r.size === Ps && r.clear(), o;
  }), r = t.cache;
  return t;
}
var As = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ds = /\\(\\)?/g, zs = Ns(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(As, function(r, o, n, i) {
    t.push(n ? i.replace(Ds, "$1") : o || r);
  }), t;
});
const Es = zs;
function Ms(e) {
  return e == null ? "" : Qr(e);
}
function mt(e, t) {
  return Qe(e) ? e : ts(e, t) ? [e] : Es(Ms(e));
}
var Os = 1 / 0;
function qt(e) {
  if (typeof e == "string" || Gt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Os ? "-0" : t;
}
function Bs(e, t) {
  t = mt(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[qt(t[r++])];
  return r && r == o ? e : void 0;
}
function js(e, t) {
  for (var r = -1, o = t.length, n = e.length; ++r < o; )
    e[n + r] = t[r];
  return e;
}
var vr = we ? we.isConcatSpreadable : void 0;
function Fs(e) {
  return Qe(e) || Xr(e) || !!(vr && e && e[vr]);
}
function eo(e, t, r, o, n) {
  var i = -1, s = e.length;
  for (r || (r = Fs), n || (n = []); ++i < s; ) {
    var u = e[i];
    t > 0 && r(u) ? t > 1 ? eo(u, t - 1, r, o, n) : js(n, u) : o || (n[n.length] = u);
  }
  return n;
}
function Rs(e) {
  var t = e == null ? 0 : e.length;
  return t ? eo(e, 1) : [];
}
function Hs(e) {
  return ji(Wi(e, void 0, Rs), e + "");
}
function Us(e, t) {
  return e != null && t in Object(e);
}
function Gs(e, t, r) {
  t = mt(t, e);
  for (var o = -1, n = t.length, i = !1; ++o < n; ) {
    var s = qt(t[o]);
    if (!(i = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return i || ++o != n ? i : (n = e == null ? 0 : e.length, !!n && Ki(n) && Jr(s, n) && (Qe(e) || Xr(e)));
}
function Vs(e, t) {
  return e != null && Gs(e, t, Us);
}
function Ws(e, t, r, o) {
  if (!at(e))
    return e;
  t = mt(t, e);
  for (var n = -1, i = t.length, s = i - 1, u = e; u != null && ++n < i; ) {
    var c = qt(t[n]), p = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (n != s) {
      var g = u[c];
      p = o ? o(g, c, u) : void 0, p === void 0 && (p = at(g) ? g : Jr(t[n + 1]) ? [] : {});
    }
    Vi(u, c, p), u = u[c];
  }
  return e;
}
function qs(e, t, r) {
  for (var o = -1, n = t.length, i = {}; ++o < n; ) {
    var s = t[o], u = Bs(e, s);
    r(u, s) && Ws(i, mt(s, e), u);
  }
  return i;
}
function Ks(e, t) {
  return qs(e, t, function(r, o) {
    return Vs(e, o);
  });
}
var Qs = Hs(function(e, t) {
  return e == null ? {} : Ks(e, t);
});
const Js = Qs;
function Nt(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(rt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Nt(o, t, r);
        return;
      }
      if (o.type === Bt) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Nt(o.children, t, r);
      } else
        o.type !== To && r.push(o);
    }
  }), r;
}
function Ys(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = Nt(o(r));
  return n.length === 1 ? n[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const Zs = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Xs(e, t) {
  Object.entries(Zs).forEach(([, r]) => {
    r.forEach((o) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const n = e.props[o], i = t[o];
      n ? e.props[o] = (...s) => {
        n(...s), i(...s);
      } : e.props[o] = i;
    });
  });
}
X({
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
    }, r = Ys(e, "default"), o = [
      t
    ];
    return r != null && r.props && o.push(
      Js(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Xs(
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
const ea = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, ta = (e, t = ea) => {
  const r = Object.keys(t).find((o) => e.includes(o));
  return r ? t[r](e) : e.substring(0, e.indexOf("-"));
};
function ot(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const o = Array.isArray(r) ? Array.from(r).map((p) => p.split(" ")).flat() : r.split(" "), n = o.map((p) => ta(p)), i = n.filter((p) => !t.types.includes(p)), s = [...n.filter((p) => t.types.includes(p)), ...i], u = [.../* @__PURE__ */ new Set([...t.types, ...s])], c = u.map((p) => {
      if (s.includes(p)) {
        const f = n.indexOf(p);
        if (f >= 0)
          return o[f] || "";
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
const ra = "flowbite-themable-injection-key", Ne = {
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
function oa(e) {
  const t = jo(ra, me(null)), r = S(() => e || t.value), o = S(() => !!(t != null && t.value)), n = S(
    () => r.value ? Ne[r.value].background : ""
  ), i = S(
    () => r.value ? Ne[r.value].border : ""
  ), s = S(() => (t == null ? void 0 : t.value) || void 0), u = S(
    () => r.value ? Ne[r.value].disabled : ""
  ), c = S(
    () => r.value ? Ne[r.value].focus : ""
  ), p = S(
    () => r.value ? Ne[r.value].hover : ""
  ), g = S(
    () => r.value ? Ne[r.value].text : ""
  );
  return {
    backgroundClasses: n,
    borderClasses: i,
    color: s,
    disabledClasses: u,
    focusClasses: c,
    hoverClasses: p,
    isActive: o,
    textClasses: g
  };
}
const na = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, ia = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, wr = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", xr = "text-sm font-normal";
function sa(e) {
  const t = S(() => na[e.type.value]), r = S(() => {
    const n = ia[e.alignment.value];
    return e.divide.value ? ot(wr, "dark:divide-gray-700 divide-x divide-gray-200", n) : ot(wr, n);
  }), o = S(() => e.type.value !== "empty" && e.divide.value ? ot(xr, "pl-3") : xr);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: o
  };
}
function aa(e) {
  var c;
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: o,
    focusClasses: n,
    hoverClasses: i,
    isActive: s,
    textClasses: u
  } = oa((c = e.theme) == null ? void 0 : c.value);
  return {
    classes: S(() => {
      if (!s.value)
        return "";
      const p = [];
      return e.apply.value.includes("text") && p.push(u.value), e.apply.value.includes("border") && p.push(r.value), e.apply.value.includes("background") && p.push(t.value), e.apply.value.includes("hover") && p.push(i.value), e.apply.value.includes("disabled") && p.push(o.value), e.apply.value.includes("focus") && p.push(n.value), p.join(" ");
    })
  };
}
const la = /* @__PURE__ */ X({
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
    const t = e, r = Ot(), { classes: o } = aa(ve(t)), n = S(() => r.class || "");
    return (i, s) => ($(), K(pt(e.tag), {
      class: V(D(ot)(n.value, D(o)))
    }, {
      default: te(() => [
        j(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ua = {
  key: 1,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, da = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), ca = [
  da
], pa = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ha = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), fa = [
  ha
], ga = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ma = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), ba = [
  ma
], ya = /* @__PURE__ */ G("span", { class: "sr-only" }, "Close", -1), va = /* @__PURE__ */ G("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ G("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), wa = [
  ya,
  va
], _r = /* @__PURE__ */ X({
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
    const r = e, o = me(!0), {
      typeClasses: n,
      wrapperClasses: i,
      contentClasses: s
    } = sa(ve(r)), u = () => {
      t("close"), o.value = !1;
    };
    return (c, p) => o.value ? ($(), O("div", {
      key: 0,
      id: "toast-default",
      class: V(D(i)),
      role: "alert"
    }, [
      e.type !== "empty" || c.$slots.icon ? ($(), K(la, {
        key: 0,
        apply: ["background", "text"],
        class: V(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", D(n)])
      }, {
        default: te(() => [
          c.$slots.icon ? j(c.$slots, "icon", {
            key: 0,
            class: V({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? ($(), O("svg", ua, ca)) : e.type === "danger" ? ($(), O("svg", pa, fa)) : e.type === "warning" ? ($(), O("svg", ga, ba)) : Q("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : Q("", !0),
      G("div", {
        class: V([D(s), { "ml-3": c.$slots.icon || e.type !== "empty" }])
      }, [
        j(c.$slots, "default")
      ], 2),
      e.closable ? ($(), O("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: u
      }, wa)) : Q("", !0)
    ], 2)) : Q("", !0);
  }
}), xa = "flowbite-toast-injection-key";
X({
  components: {
    FwbToast: _r
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = me([]), t = (i, s) => {
      jn(() => n(i), s);
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
      const s = e.value.findIndex((u) => u.id === i);
      return s >= 0 && e.value.splice(s, 1), s >= 0;
    };
    return _o(xa, {
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
    return Ye("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      Ye(
        Co,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (n) => n.component ? Ye(
              n.component,
              {
                key: n.id,
                onClose: () => o(n.id),
                ...n.componentProps ? n.componentProps : {}
              },
              () => n.text
            ) : Ye(
              _r,
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
function ne(e) {
  return e.split("-")[1];
}
function Kt(e) {
  return e === "y" ? "height" : "width";
}
function se(e) {
  return e.split("-")[0];
}
function Me(e) {
  return ["top", "bottom"].includes(se(e)) ? "x" : "y";
}
function Cr(e, t, r) {
  let { reference: o, floating: n } = e;
  const i = o.x + o.width / 2 - n.width / 2, s = o.y + o.height / 2 - n.height / 2, u = Me(t), c = Kt(u), p = o[c] / 2 - n[c] / 2, g = u === "x";
  let f;
  switch (se(t)) {
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
  switch (ne(t)) {
    case "start":
      f[u] -= p * (r && g ? -1 : 1);
      break;
    case "end":
      f[u] += p * (r && g ? -1 : 1);
  }
  return f;
}
const _a = async (e, t, r) => {
  const { placement: o = "bottom", strategy: n = "absolute", middleware: i = [], platform: s } = r, u = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let p = await s.getElementRects({ reference: e, floating: t, strategy: n }), { x: g, y: f } = Cr(p, o, c), b = o, y = {}, w = 0;
  for (let x = 0; x < u.length; x++) {
    const { name: _, fn: C } = u[x], { x: k, y: z, data: R, reset: H } = await C({ x: g, y: f, initialPlacement: o, placement: b, strategy: n, middlewareData: y, rects: p, platform: s, elements: { reference: e, floating: t } });
    g = k ?? g, f = z ?? f, y = { ...y, [_]: { ...y[_], ...R } }, H && w <= 50 && (w++, typeof H == "object" && (H.placement && (b = H.placement), H.rects && (p = H.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: n }) : H.rects), { x: g, y: f } = Cr(p, b, c)), x = -1);
  }
  return { x: g, y: f, placement: b, strategy: n, middlewareData: y };
};
function Pe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function to(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Fe(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function bt(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: o, y: n, platform: i, rects: s, elements: u, strategy: c } = e, { boundary: p = "clippingAncestors", rootBoundary: g = "viewport", elementContext: f = "floating", altBoundary: b = !1, padding: y = 0 } = Pe(t, e), w = to(y), x = u[b ? f === "floating" ? "reference" : "floating" : f], _ = Fe(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(x))) == null || r ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)), boundary: p, rootBoundary: g, strategy: c })), C = f === "floating" ? { ...s.floating, x: o, y: n } : s.reference, k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)), z = await (i.isElement == null ? void 0 : i.isElement(k)) && await (i.getScale == null ? void 0 : i.getScale(k)) || { x: 1, y: 1 }, R = Fe(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: C, offsetParent: k, strategy: c }) : C);
  return { top: (_.top - R.top + w.top) / z.y, bottom: (R.bottom - _.bottom + w.bottom) / z.y, left: (_.left - R.left + w.left) / z.x, right: (R.right - _.right + w.right) / z.x };
}
const Ve = Math.min, Ce = Math.max;
function At(e, t, r) {
  return Ce(e, Ve(t, r));
}
const Ca = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: o, placement: n, rects: i, platform: s, elements: u } = t, { element: c, padding: p = 0 } = Pe(e, t) || {};
  if (c == null)
    return {};
  const g = to(p), f = { x: r, y: o }, b = Me(n), y = Kt(b), w = await s.getDimensions(c), x = b === "y", _ = x ? "top" : "left", C = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", z = i.reference[y] + i.reference[b] - f[b] - i.floating[y], R = f[b] - i.reference[b], H = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
  let N = H ? H[k] : 0;
  N && await (s.isElement == null ? void 0 : s.isElement(H)) || (N = u.floating[k] || i.floating[y]);
  const W = z / 2 - R / 2, J = N / 2 - w[y] / 2 - 1, Y = Ve(g[_], J), F = Ve(g[C], J), B = Y, L = N - w[y] - F, l = N / 2 - w[y] / 2 + W, a = At(B, l, L), d = ne(n) != null && l != a && i.reference[y] / 2 - (l < B ? Y : F) - w[y] / 2 < 0 ? l < B ? B - l : L - l : 0;
  return { [b]: f[b] - d, data: { [b]: a, centerOffset: l - a + d } };
} }), ka = ["top", "right", "bottom", "left"], kr = ka.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), $a = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $a[t]);
}
function ro(e, t, r) {
  r === void 0 && (r = !1);
  const o = ne(e), n = Me(e), i = Kt(n);
  let s = n === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ut(s)), { main: s, cross: ut(s) };
}
const Ia = { start: "end", end: "start" };
function nt(e) {
  return e.replace(/start|end/g, (t) => Ia[t]);
}
const Ta = function(e) {
  return e === void 0 && (e = {}), { name: "autoPlacement", options: e, async fn(t) {
    var r, o, n;
    const { rects: i, middlewareData: s, placement: u, platform: c, elements: p } = t, { crossAxis: g = !1, alignment: f, allowedPlacements: b = kr, autoAlignment: y = !0, ...w } = Pe(e, t), x = f !== void 0 || b === kr ? function(F, B, L) {
      return (F ? [...L.filter((l) => ne(l) === F), ...L.filter((l) => ne(l) !== F)] : L.filter((l) => se(l) === l)).filter((l) => !F || ne(l) === F || !!B && nt(l) !== l);
    }(f || null, y, b) : b, _ = await bt(t, w), C = ((r = s.autoPlacement) == null ? void 0 : r.index) || 0, k = x[C];
    if (k == null)
      return {};
    const { main: z, cross: R } = ro(k, i, await (c.isRTL == null ? void 0 : c.isRTL(p.floating)));
    if (u !== k)
      return { reset: { placement: x[0] } };
    const H = [_[se(k)], _[z], _[R]], N = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], { placement: k, overflows: H }], W = x[C + 1];
    if (W)
      return { data: { index: C + 1, overflows: N }, reset: { placement: W } };
    const J = N.map((F) => {
      const B = ne(F.placement);
      return [F.placement, B && g ? F.overflows.slice(0, 2).reduce((L, l) => L + l, 0) : F.overflows[0], F.overflows];
    }).sort((F, B) => F[1] - B[1]), Y = ((n = J.filter((F) => F[2].slice(0, ne(F[0]) ? 2 : 3).every((B) => B <= 0))[0]) == null ? void 0 : n[0]) || J[0][0];
    return Y !== u ? { data: { index: C + 1, overflows: N }, reset: { placement: Y } } : {};
  } };
}, Sa = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: o, middlewareData: n, rects: i, initialPlacement: s, platform: u, elements: c } = t, { mainAxis: p = !0, crossAxis: g = !0, fallbackPlacements: f, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: w = !0, ...x } = Pe(e, t), _ = se(o), C = se(s) === s, k = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), z = f || (C || !w ? [ut(s)] : function(B) {
      const L = ut(B);
      return [nt(B), L, nt(L)];
    }(s));
    f || y === "none" || z.push(...function(B, L, l, a) {
      const d = ne(B);
      let h = function(m, v, A) {
        const P = ["left", "right"], I = ["right", "left"], q = ["top", "bottom"], Z = ["bottom", "top"];
        switch (m) {
          case "top":
          case "bottom":
            return A ? v ? I : P : v ? P : I;
          case "left":
          case "right":
            return v ? q : Z;
          default:
            return [];
        }
      }(se(B), l === "start", a);
      return d && (h = h.map((m) => m + "-" + d), L && (h = h.concat(h.map(nt)))), h;
    }(s, w, y, k));
    const R = [s, ...z], H = await bt(t, x), N = [];
    let W = ((r = n.flip) == null ? void 0 : r.overflows) || [];
    if (p && N.push(H[_]), g) {
      const { main: B, cross: L } = ro(o, i, k);
      N.push(H[B], H[L]);
    }
    if (W = [...W, { placement: o, overflows: N }], !N.every((B) => B <= 0)) {
      var J, Y;
      const B = (((J = n.flip) == null ? void 0 : J.index) || 0) + 1, L = R[B];
      if (L)
        return { data: { index: B, overflows: W }, reset: { placement: L } };
      let l = (Y = W.filter((a) => a.overflows[0] <= 0).sort((a, d) => a.overflows[1] - d.overflows[1])[0]) == null ? void 0 : Y.placement;
      if (!l)
        switch (b) {
          case "bestFit": {
            var F;
            const a = (F = W.map((d) => [d.placement, d.overflows.filter((h) => h > 0).reduce((h, m) => h + m, 0)]).sort((d, h) => d[1] - h[1])[0]) == null ? void 0 : F[0];
            a && (l = a);
            break;
          }
          case "initialPlacement":
            l = s;
        }
      if (o !== l)
        return { reset: { placement: l } };
    }
    return {};
  } };
}, La = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: o } = t, n = await async function(i, s) {
      const { placement: u, platform: c, elements: p } = i, g = await (c.isRTL == null ? void 0 : c.isRTL(p.floating)), f = se(u), b = ne(u), y = Me(u) === "x", w = ["left", "top"].includes(f) ? -1 : 1, x = g && y ? -1 : 1, _ = Pe(s, i);
      let { mainAxis: C, crossAxis: k, alignmentAxis: z } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return b && typeof z == "number" && (k = b === "end" ? -1 * z : z), y ? { x: k * x, y: C * w } : { x: C * w, y: k * x };
    }(t, e);
    return { x: r + n.x, y: o + n.y, data: n };
  } };
};
function Pa(e) {
  return e === "x" ? "y" : "x";
}
const Na = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: o, placement: n } = t, { mainAxis: i = !0, crossAxis: s = !1, limiter: u = { fn: (_) => {
      let { x: C, y: k } = _;
      return { x: C, y: k };
    } }, ...c } = Pe(e, t), p = { x: r, y: o }, g = await bt(t, c), f = Me(se(n)), b = Pa(f);
    let y = p[f], w = p[b];
    if (i) {
      const _ = f === "y" ? "bottom" : "right";
      y = At(y + g[f === "y" ? "top" : "left"], y, y - g[_]);
    }
    if (s) {
      const _ = b === "y" ? "bottom" : "right";
      w = At(w + g[b === "y" ? "top" : "left"], w, w - g[_]);
    }
    const x = u.fn({ ...t, [f]: y, [b]: w });
    return { ...x, data: { x: x.x - r, y: x.y - o } };
  } };
}, Aa = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: r, rects: o, platform: n, elements: i } = t, { apply: s = () => {
    }, ...u } = Pe(e, t), c = await bt(t, u), p = se(r), g = ne(r), f = Me(r) === "x", { width: b, height: y } = o.floating;
    let w, x;
    p === "top" || p === "bottom" ? (w = p, x = g === (await (n.isRTL == null ? void 0 : n.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = p, w = g === "end" ? "top" : "bottom");
    const _ = y - c[w], C = b - c[x], k = !t.middlewareData.shift;
    let z = _, R = C;
    if (f) {
      const N = b - c.left - c.right;
      R = g || k ? Ve(C, N) : N;
    } else {
      const N = y - c.top - c.bottom;
      z = g || k ? Ve(_, N) : N;
    }
    if (k && !g) {
      const N = Ce(c.left, 0), W = Ce(c.right, 0), J = Ce(c.top, 0), Y = Ce(c.bottom, 0);
      f ? R = b - 2 * (N !== 0 || W !== 0 ? N + W : Ce(c.left, c.right)) : z = y - 2 * (J !== 0 || Y !== 0 ? J + Y : Ce(c.top, c.bottom));
    }
    await s({ ...t, availableWidth: R, availableHeight: z });
    const H = await n.getDimensions(i.floating);
    return b !== H.width || y !== H.height ? { reset: { rects: !0 } } : {};
  } };
};
function re(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  return re(e).getComputedStyle(e);
}
const $r = Math.min, Re = Math.max, dt = Math.round;
function oo(e) {
  const t = ae(e);
  let r = parseFloat(t.width), o = parseFloat(t.height);
  const n = e.offsetWidth, i = e.offsetHeight, s = dt(r) !== n || dt(o) !== i;
  return s && (r = n, o = i), { width: r, height: o, fallback: s };
}
function xe(e) {
  return io(e) ? (e.nodeName || "").toLowerCase() : "";
}
let et;
function no() {
  if (et)
    return et;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (et = e.brands.map((t) => t.brand + "/" + t.version).join(" "), et) : navigator.userAgent;
}
function le(e) {
  return e instanceof re(e).HTMLElement;
}
function be(e) {
  return e instanceof re(e).Element;
}
function io(e) {
  return e instanceof re(e).Node;
}
function Ir(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof re(e).ShadowRoot || e instanceof ShadowRoot;
}
function yt(e) {
  const { overflow: t, overflowX: r, overflowY: o, display: n } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(n);
}
function Da(e) {
  return ["table", "td", "th"].includes(xe(e));
}
function Dt(e) {
  const t = /firefox/i.test(no()), r = ae(e), o = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!o && o !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((n) => r.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const i = r.contain;
    return i != null && i.includes(n);
  });
}
function so() {
  return !/^((?!chrome|android).)*safari/i.test(no());
}
function Qt(e) {
  return ["html", "body", "#document"].includes(xe(e));
}
function ao(e) {
  return be(e) ? e : e.contextElement;
}
const lo = { x: 1, y: 1 };
function De(e) {
  const t = ao(e);
  if (!le(t))
    return lo;
  const r = t.getBoundingClientRect(), { width: o, height: n, fallback: i } = oo(t);
  let s = (i ? dt(r.width) : r.width) / o, u = (i ? dt(r.height) : r.height) / n;
  return s && Number.isFinite(s) || (s = 1), u && Number.isFinite(u) || (u = 1), { x: s, y: u };
}
function We(e, t, r, o) {
  var n, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), u = ao(e);
  let c = lo;
  t && (o ? be(o) && (c = De(o)) : c = De(e));
  const p = u ? re(u) : window, g = !so() && r;
  let f = (s.left + (g && ((n = p.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / c.x, b = (s.top + (g && ((i = p.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / c.y, y = s.width / c.x, w = s.height / c.y;
  if (u) {
    const x = re(u), _ = o && be(o) ? re(o) : o;
    let C = x.frameElement;
    for (; C && o && _ !== x; ) {
      const k = De(C), z = C.getBoundingClientRect(), R = getComputedStyle(C);
      z.x += (C.clientLeft + parseFloat(R.paddingLeft)) * k.x, z.y += (C.clientTop + parseFloat(R.paddingTop)) * k.y, f *= k.x, b *= k.y, y *= k.x, w *= k.y, f += z.x, b += z.y, C = re(C).frameElement;
    }
  }
  return { width: y, height: w, top: b, right: f + y, bottom: b + w, left: f, x: f, y: b };
}
function ye(e) {
  return ((io(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vt(e) {
  return be(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function uo(e) {
  return We(ye(e)).left + vt(e).scrollLeft;
}
function qe(e) {
  if (xe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ir(e) && e.host || ye(e);
  return Ir(t) ? t.host : t;
}
function co(e) {
  const t = qe(e);
  return Qt(t) ? t.ownerDocument.body : le(t) && yt(t) ? t : co(t);
}
function ct(e, t) {
  var r;
  t === void 0 && (t = []);
  const o = co(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = re(o);
  return n ? t.concat(i, i.visualViewport || [], yt(o) ? o : []) : t.concat(o, ct(o));
}
function Tr(e, t, r) {
  return t === "viewport" ? Fe(function(o, n) {
    const i = re(o), s = ye(o), u = i.visualViewport;
    let c = s.clientWidth, p = s.clientHeight, g = 0, f = 0;
    if (u) {
      c = u.width, p = u.height;
      const b = so();
      (b || !b && n === "fixed") && (g = u.offsetLeft, f = u.offsetTop);
    }
    return { width: c, height: p, x: g, y: f };
  }(e, r)) : be(t) ? Fe(function(o, n) {
    const i = We(o, !0, n === "fixed"), s = i.top + o.clientTop, u = i.left + o.clientLeft, c = le(o) ? De(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * c.x, height: o.clientHeight * c.y, x: u * c.x, y: s * c.y };
  }(t, r)) : Fe(function(o) {
    const n = ye(o), i = vt(o), s = o.ownerDocument.body, u = Re(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), c = Re(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let p = -i.scrollLeft + uo(o);
    const g = -i.scrollTop;
    return ae(s).direction === "rtl" && (p += Re(n.clientWidth, s.clientWidth) - u), { width: u, height: c, x: p, y: g };
  }(ye(e)));
}
function Sr(e) {
  return le(e) && ae(e).position !== "fixed" ? e.offsetParent : null;
}
function Lr(e) {
  const t = re(e);
  let r = Sr(e);
  for (; r && Da(r) && ae(r).position === "static"; )
    r = Sr(r);
  return r && (xe(r) === "html" || xe(r) === "body" && ae(r).position === "static" && !Dt(r)) ? t : r || function(o) {
    let n = qe(o);
    for (; le(n) && !Qt(n); ) {
      if (Dt(n))
        return n;
      n = qe(n);
    }
    return null;
  }(e) || t;
}
function za(e, t, r) {
  const o = le(t), n = ye(t), i = We(e, !0, r === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (o || !o && r !== "fixed")
    if ((xe(t) !== "body" || yt(n)) && (s = vt(t)), le(t)) {
      const c = We(t, !0);
      u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop;
    } else
      n && (u.x = uo(n));
  return { x: i.left + s.scrollLeft - u.x, y: i.top + s.scrollTop - u.y, width: i.width, height: i.height };
}
const Ea = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: o, strategy: n } = e;
  const i = r === "clippingAncestors" ? function(p, g) {
    const f = g.get(p);
    if (f)
      return f;
    let b = ct(p).filter((_) => be(_) && xe(_) !== "body"), y = null;
    const w = ae(p).position === "fixed";
    let x = w ? qe(p) : p;
    for (; be(x) && !Qt(x); ) {
      const _ = ae(x), C = Dt(x);
      (w ? C || y : C || _.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = _ : b = b.filter((k) => k !== x), x = qe(x);
    }
    return g.set(p, b), b;
  }(t, this._c) : [].concat(r), s = [...i, o], u = s[0], c = s.reduce((p, g) => {
    const f = Tr(t, g, n);
    return p.top = Re(f.top, p.top), p.right = $r(f.right, p.right), p.bottom = $r(f.bottom, p.bottom), p.left = Re(f.left, p.left), p;
  }, Tr(t, u, n));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: o } = e;
  const n = le(r), i = ye(r);
  if (r === i)
    return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((n || !n && o !== "fixed") && ((xe(r) !== "body" || yt(i)) && (s = vt(r)), le(r))) {
    const p = We(r);
    u = De(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - s.scrollLeft * u.x + c.x, y: t.y * u.y - s.scrollTop * u.y + c.y };
}, isElement: be, getDimensions: function(e) {
  return le(e) ? oo(e) : e.getBoundingClientRect();
}, getOffsetParent: Lr, getDocumentElement: ye, getScale: De, async getElementRects(e) {
  let { reference: t, floating: r, strategy: o } = e;
  const n = this.getOffsetParent || Lr, i = this.getDimensions;
  return { reference: za(t, await n(r), o), floating: { x: 0, y: 0, ...await i(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ae(e).direction === "rtl" }, Ma = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), n = { platform: Ea, ...r }, i = { ...n.platform, _c: o };
  return _a(e, t, { ...n, platform: i });
}, $e = {
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
function zt(e, t) {
  let r = $e.themes[e] || {}, o;
  do
    o = r[t], typeof o > "u" ? r.$extend ? r = $e.themes[r.$extend] || {} : (r = null, o = $e[t]) : r = null;
  while (r);
  return o;
}
function Oa(e) {
  const t = [e];
  let r = $e.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = $e.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((o) => `v-popper--theme-${o}`);
}
function Pr(e) {
  const t = [e];
  let r = $e.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = $e.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let ze = !1;
if (typeof window < "u") {
  ze = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ze = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let po = !1;
typeof window < "u" && typeof navigator < "u" && (po = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ba = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Nr = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Ar = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Dr(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function It() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const ie = [];
let _e = null;
const zr = {};
function Er(e) {
  let t = zr[e];
  return t || (t = zr[e] = []), t;
}
let Et = function() {
};
typeof window < "u" && (Et = window.Element);
function M(e) {
  return function(t) {
    return zt(t.theme, e);
  };
}
const Tt = "__floating-vue__popper", ho = () => X({
  name: "VPopper",
  provide() {
    return {
      [Tt]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Tt]: { default: null }
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
      default: M("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: M("positioningDisabled")
    },
    placement: {
      type: String,
      default: M("placement"),
      validator: (e) => Ba.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: M("delay")
    },
    distance: {
      type: [Number, String],
      default: M("distance")
    },
    skidding: {
      type: [Number, String],
      default: M("skidding")
    },
    triggers: {
      type: Array,
      default: M("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: M("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: M("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: M("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: M("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: M("popperHideTriggers")
    },
    container: {
      type: [String, Object, Et, Boolean],
      default: M("container")
    },
    boundary: {
      type: [String, Et],
      default: M("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: M("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: M("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: M("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: M("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: M("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: M("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: M("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: M("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: M("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: M("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: M("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: M("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: M("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: M("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: M("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: M("flip")
    },
    shift: {
      type: Boolean,
      default: M("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: M("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: M("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: M("disposeTimeout")
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
      return (e = this[Tt]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(La({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Ta({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Na({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Sa({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Ca({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: n, middlewareData: i }) => {
          let s;
          const { centerOffset: u } = i.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? s = Math.abs(u) > n.reference.width / 2 : s = Math.abs(u) > n.reference.height / 2, {
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
            var u;
            if ((u = s.autoSize) != null && u.skip)
              return {};
            let c, p;
            return i.startsWith("top") || i.startsWith("bottom") ? c = n.reference.width : p = n.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = c != null ? `${c}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = p != null ? `${p}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Aa({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const r = await Ma(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), _e && this.instantMove && _e.instantMove && _e !== this.parentPopper) {
        _e.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (_e = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await It(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...ct(this.$_referenceNode),
        ...ct(this.$_popperNode)
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
        for (let r = 0; r < ie.length; r++)
          t = ie[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      ie.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Pr(this.theme))
        Er(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await It(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Dr(ie, this), ie.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of Pr(this.theme)) {
        const o = Er(r);
        Dr(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      _e === this && (_e = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await It(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Nr, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Nr, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ar, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ar, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((o) => o.addEventListener(t, r, ze ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, r, o, n) {
      let i = r;
      o != null && (i = typeof o == "function" ? o(i) : o), i.forEach((s) => {
        const u = t[s];
        u && this.$_registerEventListeners(e, u, n);
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
      if (He >= e.left && He <= e.right && Ue >= e.top && Ue <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = He - pe, o = Ue - he, n = t.left + t.width / 2 - pe + (t.top + t.height / 2) - he + t.width + t.height, i = pe + r * n, s = he + o * n;
        return tt(pe, he, i, s, t.left, t.top, t.left, t.bottom) || // Left edge
        tt(pe, he, i, s, t.left, t.top, t.right, t.top) || // Top edge
        tt(pe, he, i, s, t.right, t.top, t.right, t.bottom) || // Right edge
        tt(pe, he, i, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (po ? (document.addEventListener("touchstart", Mr, ze ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", Fa, ze ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Mr, !0), window.addEventListener("click", ja, !0)), window.addEventListener("resize", Ua));
function Mr(e) {
  for (let t = 0; t < ie.length; t++) {
    const r = ie[t];
    try {
      const o = r.popperNode();
      r.$_mouseDownContains = o.contains(e.target);
    } catch {
    }
  }
}
function ja(e) {
  fo(e);
}
function Fa(e) {
  fo(e, !0);
}
function fo(e, t = !1) {
  const r = {};
  for (let o = ie.length - 1; o >= 0; o--) {
    const n = ie[o];
    try {
      const i = n.$_containsGlobalTarget = Ra(n, e);
      n.$_pendingHide = !1, requestAnimationFrame(() => {
        if (n.$_pendingHide = !1, !r[n.randomId] && Or(n, i, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let u = n.parentPopper;
            for (; u; )
              r[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && Or(s, s.$_containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Ra(e, t) {
  const r = e.popperNode();
  return e.$_mouseDownContains || r.contains(t.target);
}
function Or(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || Ha(e, r) && !t;
}
function Ha(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function Ua(e) {
  for (let t = 0; t < ie.length; t++)
    ie[t].$_computePosition(e);
}
let pe = 0, he = 0, He = 0, Ue = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  pe = He, he = Ue, He = e.clientX, Ue = e.clientY;
}, ze ? {
  passive: !0
} : void 0);
function tt(e, t, r, o, n, i, s, u) {
  const c = ((s - n) * (t - i) - (u - i) * (e - n)) / ((u - i) * (r - e) - (s - n) * (o - t)), p = ((r - e) * (t - i) - (o - t) * (e - n)) / ((u - i) * (r - e) - (s - n) * (o - t));
  return c >= 0 && c <= 1 && p >= 0 && p <= 1;
}
const Ga = {
  extends: ho()
}, Jt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
};
function Va(e, t, r, o, n, i) {
  return $(), O("div", {
    ref: "reference",
    class: V(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    j(e.$slots, "default", Ke(ht(e.slotData)))
  ], 2);
}
const Wa = /* @__PURE__ */ Jt(Ga, [["render", Va]]);
function qa() {
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
let it;
function Mt() {
  Mt.init || (Mt.init = !0, it = qa() !== -1);
}
var wt = {
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
    Mt(), Io(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", it && this.$el.appendChild(e), e.data = "about:blank", it || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!it && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ka = /* @__PURE__ */ zo("data-v-b329ee4c");
ko("data-v-b329ee4c");
const Qa = {
  class: "resize-observer",
  tabindex: "-1"
};
$o();
const Ja = /* @__PURE__ */ Ka((e, t, r, o, n, i) => ($(), K("div", Qa)));
wt.render = Ja;
wt.__scopeId = "data-v-b329ee4c";
wt.__file = "src/components/ResizeObserver.vue";
const go = (e = "theme") => ({
  computed: {
    themeClass() {
      return Oa(this[e]);
    }
  }
}), Ya = X({
  name: "VPopperContent",
  components: {
    ResizeObserver: wt
  },
  mixins: [
    go()
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
}), Za = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Xa = {
  ref: "inner",
  class: "v-popper__inner"
}, el = /* @__PURE__ */ G("div", { class: "v-popper__arrow-outer" }, null, -1), tl = /* @__PURE__ */ G("div", { class: "v-popper__arrow-inner" }, null, -1), rl = [
  el,
  tl
];
function ol(e, t, r, o, n, i) {
  const s = st("ResizeObserver");
  return $(), O("div", {
    id: e.popperId,
    ref: "popover",
    class: V(["v-popper__popper", [
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
    style: Ct(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Eo((u) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    G("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => e.autoHide && e.$emit("hide"))
    }),
    G("div", {
      class: "v-popper__wrapper",
      style: Ct(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      G("div", Xa, [
        e.mounted ? ($(), O(Bt, { key: 0 }, [
          G("div", null, [
            j(e.$slots, "default")
          ]),
          e.handleResize ? ($(), K(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (u) => e.$emit("resize", u))
          })) : Q("", !0)
        ], 64)) : Q("", !0)
      ], 512),
      G("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Ct(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, rl, 4)
    ], 4)
  ], 46, Za);
}
const mo = /* @__PURE__ */ Jt(Ya, [["render", ol]]), bo = {
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
}, nl = X({
  name: "VPopperWrapper",
  components: {
    Popper: Wa,
    PopperContent: mo
  },
  mixins: [
    bo,
    go("finalTheme")
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
function il(e, t, r, o, n, i) {
  const s = st("PopperContent"), u = st("Popper");
  return $(), K(u, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: V([
      e.themeClass
    ])
  }, {
    default: te(({
      popperId: c,
      isShown: p,
      shouldMountContent: g,
      skipTransition: f,
      autoHide: b,
      show: y,
      hide: w,
      handleResize: x,
      onResize: _,
      classes: C,
      result: k
    }) => [
      j(e.$slots, "default", {
        shown: p,
        show: y,
        hide: w
      }),
      Mo(s, {
        ref: "popperContent",
        "popper-id": c,
        theme: e.finalTheme,
        shown: p,
        mounted: g,
        "skip-transition": f,
        "auto-hide": b,
        "handle-resize": x,
        classes: C,
        result: k,
        onHide: w,
        onResize: _
      }, {
        default: te(() => [
          j(e.$slots, "popper", {
            shown: p,
            hide: w
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const Yt = /* @__PURE__ */ Jt(nl, [["render", il]]);
({
  ...Yt
});
({
  ...Yt
});
({
  ...Yt
});
X({
  name: "VTooltipDirective",
  components: {
    Popper: ho(),
    PopperContent: mo
  },
  mixins: [
    bo
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => zt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => zt(e.theme, "loadingContent")
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
const Ae = {
  Success: "success",
  Error: "error"
}, sl = "block mb-2 text-sm font-medium", al = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", ll = "cursor-not-allowed bg-gray-100", ul = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, dl = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", cl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function pl(e) {
  const t = S(() => {
    const o = e.validationStatus.value, n = o === Ae.Success ? dl : o === Ae.Error ? cl : "";
    return ue(
      al,
      n,
      ul[e.size.value],
      e.disabled.value ? ll : ""
    );
  }), r = S(() => {
    const o = e.validationStatus.value, n = o === Ae.Success ? "text-green-700 dark:text-green-500" : o === Ae.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return ue(sl, n);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const hl = { class: "flex relative" }, fl = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, gl = ["disabled", "type", "required"], ml = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, bl = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, yl = /* @__PURE__ */ X({
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
    const t = e, r = qr(t, "modelValue"), { inputClasses: o, labelClasses: n } = pl(ve(t)), i = S(() => ue(
      "mt-2 text-sm",
      t.validationStatus === Ae.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === Ae.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (s, u) => ($(), O("div", null, [
      s.label ? ($(), O("label", {
        key: 0,
        class: V(D(n))
      }, ge(s.label), 3)) : Q("", !0),
      G("div", hl, [
        s.$slots.prefix ? ($(), O("div", fl, [
          j(s.$slots, "prefix")
        ])) : Q("", !0),
        jt(G("input", Te(s.$attrs, {
          "onUpdate:modelValue": u[0] || (u[0] = (c) => Br(r) ? r.value = c : null),
          disabled: s.disabled,
          type: s.type,
          required: s.required,
          class: [D(o), s.$slots.prefix ? "pl-10" : ""]
        }), null, 16, gl), [
          [So, D(r)]
        ]),
        s.$slots.suffix ? ($(), O("div", ml, [
          j(s.$slots, "suffix")
        ])) : Q("", !0)
      ]),
      s.$slots.validationMessage ? ($(), O("p", {
        key: 1,
        class: V(i.value)
      }, [
        j(s.$slots, "validationMessage")
      ], 2)) : Q("", !0),
      s.$slots.helper ? ($(), O("p", bl, [
        j(s.$slots, "helper")
      ])) : Q("", !0)
    ]));
  }
}), fe = {
  Success: "success",
  Error: "error"
}, vl = "block mb-2 text-sm font-medium", wl = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", xl = "cursor-not-allowed bg-gray-100", _l = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", Cl = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, kl = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", $l = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Il(e) {
  const t = S(() => {
    const o = e.validationStatus.value, n = o === fe.Success ? kl : o === fe.Error ? $l : "", i = o === fe.Success ? "focus:border-green-500" : o === fe.Error ? "focus:border-red-500" : "";
    return ue(
      wl,
      n,
      Cl[e.size.value],
      e.disabled.value && xl,
      e.underline.value ? _l : "border border-gray-300 rounded-lg",
      e.underline.value && i
    );
  }), r = S(() => {
    const o = e.validationStatus.value, n = o === fe.Success ? "text-green-700 dark:text-green-500" : o === fe.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return ue(vl, n);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const Tl = ["disabled"], Sl = {
  disabled: "",
  selected: "",
  value: ""
}, Ll = ["value"], Pl = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Nl = /* @__PURE__ */ X({
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
    const r = e, o = qr(r, "modelValue", t), { selectClasses: n, labelClasses: i } = Il(ve(r)), s = S(() => ue(
      "mt-2 text-sm",
      r.validationStatus === fe.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === fe.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (u, c) => ($(), O("div", null, [
      G("label", null, [
        u.label ? ($(), O("span", {
          key: 0,
          class: V(D(i))
        }, ge(u.label), 3)) : Q("", !0),
        jt(G("select", {
          "onUpdate:modelValue": c[0] || (c[0] = (p) => Br(o) ? o.value = p : null),
          disabled: u.disabled,
          class: V(D(n))
        }, [
          G("option", Sl, ge(u.placeholder), 1),
          ($(!0), O(Bt, null, Lo(u.options, (p, g) => ($(), O("option", {
            key: g,
            value: p.value
          }, ge(p.name), 9, Ll))), 128))
        ], 10, Tl), [
          [Po, D(o)]
        ])
      ]),
      u.$slots.validationMessage ? ($(), O("p", {
        key: 0,
        class: V(s.value)
      }, [
        j(u.$slots, "validationMessage")
      ], 2)) : Q("", !0),
      u.$slots.helper ? ($(), O("p", Pl, [
        j(u.$slots, "helper")
      ])) : Q("", !0)
    ]));
  }
}), Al = "w-fit relative inline-flex items-center cursor-pointer", Dl = 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', zl = "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", El = {
  lg: "w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4"
}, Ml = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function Ol(e) {
  const t = S(() => Al), r = S(() => Dl), o = S(() => El[e.size.value]), n = S(() => Ml[e.color.value]), i = S(() => zl);
  return {
    labelClasses: t,
    toggleSize: o,
    toggleClasses: r,
    toggleColor: n,
    toggleBallClasses: i
  };
}
const Bl = ["disabled"], jl = /* @__PURE__ */ X({
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
    const r = e, o = S({
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
      toggleColor: u,
      toggleBallClasses: c
    } = Ol(ve(r));
    return (p, g) => ($(), O("label", {
      class: V(D(n))
    }, [
      jt(G("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (f) => o.value = f),
        disabled: p.disabled,
        class: "sr-only peer",
        type: "checkbox"
      }, null, 8, Bl), [
        [No, o.value]
      ]),
      G("span", {
        class: V([D(s), D(i), D(u)])
      }, null, 2),
      G("span", {
        class: V(D(c))
      }, ge(p.label), 3)
    ], 2));
  }
}), Fl = ["href"], Rl = /* @__PURE__ */ X({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => ($(), O("a", {
      href: t.href,
      class: V([t.color, "inline-flex items-center hover:underline"])
    }, [
      j(t.$slots, "default")
    ], 10, Fl));
  }
}), Hl = /* @__PURE__ */ X({
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
    }, o = Ot(), n = ue(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      o.class
    ), i = t.tag;
    return (s, u) => ($(), K(pt(D(i)), Te(s.$attrs, { class: D(n) }), {
      default: te(() => [
        j(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ul = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", Gl = /* @__PURE__ */ X({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = S(() => Pt([
      Ul,
      t.class
    ]));
    return (o, n) => ($(), O("p", {
      class: V(r.value)
    }, [
      j(o.$slots, "default")
    ], 2));
  }
}), xt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Vl = {
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
    const t = e, r = S(() => {
      let o = "TwcButton text-base";
      return t.flat ? `${o}border-0 bg-transparent text-gray-800 hover:bg-transparent focus:ring-0` : t.icon ? `${o}border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2` : t.link ? `${o}border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700` : o;
    });
    return (o, n) => ($(), K(D(Dn), Te(o.$props, { class: r.value }), {
      default: te(() => [
        j(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}, tu = /* @__PURE__ */ xt(Vl, [["__scopeId", "data-v-9c0172c8"]]), Wl = {
  __name: "TwcCheckbox",
  setup(e) {
    return (t, r) => ($(), K(D(jl), Te(t.$props, { class: "TwcCheckbox" }), null, 16));
  }
}, ru = /* @__PURE__ */ xt(Wl, [["__scopeId", "data-v-f06c62a4"]]), ou = {
  __name: "TwcHeading",
  setup(e) {
    return (t, r) => ($(), K(D(Hl), Ke(ht(t.$props)), {
      default: te(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, ql = {
  __name: "TwcInput",
  setup(e) {
    return (t, r) => ($(), K(D(yl), Te(t.$props, { class: "TwcInput" }), jr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: te(() => [
          j(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      t.$slots.prefix ? {
        name: "prefix",
        fn: te(() => [
          j(t.$slots, "prefix", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      t.$slots.suffix ? {
        name: "suffix",
        fn: te(() => [
          j(t.$slots, "suffix", {}, void 0, !0)
        ]),
        key: "2"
      } : void 0
    ]), 1040));
  }
}, nu = /* @__PURE__ */ xt(ql, [["__scopeId", "data-v-9a366333"]]), iu = {
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
    return (o, n) => ($(), O("label", {
      class: V(r())
    }, [
      j(o.$slots, "default")
    ], 2));
  }
}, su = {
  __name: "TwcLink",
  setup(e) {
    return (t, r) => ($(), K(D(Rl), Ke(ht(t.$props)), {
      default: te(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, au = {
  __name: "TwcParagraph",
  setup(e) {
    return (t, r) => ($(), K(D(Gl), Ke(ht(t.$props)), {
      default: te(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Kl = {
  __name: "TwcSelect",
  setup(e) {
    return (t, r) => ($(), K(D(Nl), Te(t.$props, { class: "TwcSelect" }), jr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: te(() => [
          j(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}, lu = /* @__PURE__ */ xt(Kl, [["__scopeId", "data-v-dab28e77"]]);
function Ql(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yo = { exports: {} };
(function(e) {
  (function(t) {
    e.exports ? e.exports = t() : window.intlTelInput = t();
  })(() => {
    var t = (() => {
      var r = Object.defineProperty, o = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, i = Object.prototype.hasOwnProperty, s = (l, a) => {
        for (var d in a)
          r(l, d, { get: a[d], enumerable: !0 });
      }, u = (l, a, d, h) => {
        if (a && typeof a == "object" || typeof a == "function")
          for (let m of n(a))
            !i.call(l, m) && m !== d && r(l, m, { get: () => a[m], enumerable: !(h = o(a, m)) || h.enumerable });
        return l;
      }, c = (l) => u(r({}, "__esModule", { value: !0 }), l), p = {};
      s(p, {
        Iti: () => J,
        default: () => L
      });
      var g = [
        [
          "Afghanistan",
          "af",
          "93"
        ],
        [
          "Albania",
          "al",
          "355"
        ],
        [
          "Algeria",
          "dz",
          "213"
        ],
        [
          "American Samoa",
          "as",
          "1",
          5,
          ["684"]
        ],
        [
          "Andorra",
          "ad",
          "376"
        ],
        [
          "Angola",
          "ao",
          "244"
        ],
        [
          "Anguilla",
          "ai",
          "1",
          6,
          ["264"]
        ],
        [
          "Antigua & Barbuda",
          "ag",
          "1",
          7,
          ["268"]
        ],
        [
          "Argentina",
          "ar",
          "54"
        ],
        [
          "Armenia",
          "am",
          "374"
        ],
        [
          "Aruba",
          "aw",
          "297"
        ],
        [
          "Ascension Island",
          "ac",
          "247"
        ],
        [
          "Australia",
          "au",
          "61",
          0
        ],
        [
          "Austria",
          "at",
          "43"
        ],
        [
          "Azerbaijan",
          "az",
          "994"
        ],
        [
          "Bahamas",
          "bs",
          "1",
          8,
          ["242"]
        ],
        [
          "Bahrain",
          "bh",
          "973"
        ],
        [
          "Bangladesh",
          "bd",
          "880"
        ],
        [
          "Barbados",
          "bb",
          "1",
          9,
          ["246"]
        ],
        [
          "Belarus",
          "by",
          "375"
        ],
        [
          "Belgium",
          "be",
          "32"
        ],
        [
          "Belize",
          "bz",
          "501"
        ],
        [
          "Benin",
          "bj",
          "229"
        ],
        [
          "Bermuda",
          "bm",
          "1",
          10,
          ["441"]
        ],
        [
          "Bhutan",
          "bt",
          "975"
        ],
        [
          "Bolivia",
          "bo",
          "591"
        ],
        [
          "Bosnia & Herzegovina",
          "ba",
          "387"
        ],
        [
          "Botswana",
          "bw",
          "267"
        ],
        [
          "Brazil",
          "br",
          "55"
        ],
        [
          "British Indian Ocean Territory",
          "io",
          "246"
        ],
        [
          "British Virgin Islands",
          "vg",
          "1",
          11,
          ["284"]
        ],
        [
          "Brunei",
          "bn",
          "673"
        ],
        [
          "Bulgaria",
          "bg",
          "359"
        ],
        [
          "Burkina Faso",
          "bf",
          "226"
        ],
        [
          "Burundi",
          "bi",
          "257"
        ],
        [
          "Cambodia",
          "kh",
          "855"
        ],
        [
          "Cameroon",
          "cm",
          "237"
        ],
        [
          "Canada",
          "ca",
          "1",
          1,
          ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
        ],
        [
          "Cape Verde",
          "cv",
          "238"
        ],
        [
          "Caribbean Netherlands",
          "bq",
          "599",
          1,
          ["3", "4", "7"]
        ],
        [
          "Cayman Islands",
          "ky",
          "1",
          12,
          ["345"]
        ],
        [
          "Central African Republic",
          "cf",
          "236"
        ],
        [
          "Chad",
          "td",
          "235"
        ],
        [
          "Chile",
          "cl",
          "56"
        ],
        [
          "China",
          "cn",
          "86"
        ],
        [
          "Christmas Island",
          "cx",
          "61",
          2,
          ["89164"]
        ],
        [
          "Cocos (Keeling) Islands",
          "cc",
          "61",
          1,
          ["89162"]
        ],
        [
          "Colombia",
          "co",
          "57"
        ],
        [
          "Comoros",
          "km",
          "269"
        ],
        [
          "Congo - Brazzaville",
          "cg",
          "242"
        ],
        [
          "Congo - Kinshasa",
          "cd",
          "243"
        ],
        [
          "Cook Islands",
          "ck",
          "682"
        ],
        [
          "Costa Rica",
          "cr",
          "506"
        ],
        [
          "Côte d’Ivoire",
          "ci",
          "225"
        ],
        [
          "Croatia",
          "hr",
          "385"
        ],
        [
          "Cuba",
          "cu",
          "53"
        ],
        [
          "Curaçao",
          "cw",
          "599",
          0
        ],
        [
          "Cyprus",
          "cy",
          "357"
        ],
        [
          "Czech Republic",
          "cz",
          "420"
        ],
        [
          "Denmark",
          "dk",
          "45"
        ],
        [
          "Djibouti",
          "dj",
          "253"
        ],
        [
          "Dominica",
          "dm",
          "1",
          13,
          ["767"]
        ],
        [
          "Dominican Republic",
          "do",
          "1",
          2,
          ["809", "829", "849"]
        ],
        [
          "Ecuador",
          "ec",
          "593"
        ],
        [
          "Egypt",
          "eg",
          "20"
        ],
        [
          "El Salvador",
          "sv",
          "503"
        ],
        [
          "Equatorial Guinea",
          "gq",
          "240"
        ],
        [
          "Eritrea",
          "er",
          "291"
        ],
        [
          "Estonia",
          "ee",
          "372"
        ],
        [
          "Eswatini",
          "sz",
          "268"
        ],
        [
          "Ethiopia",
          "et",
          "251"
        ],
        [
          "Falkland Islands",
          "fk",
          "500"
        ],
        [
          "Faroe Islands",
          "fo",
          "298"
        ],
        [
          "Fiji",
          "fj",
          "679"
        ],
        [
          "Finland",
          "fi",
          "358",
          0
        ],
        [
          "France",
          "fr",
          "33"
        ],
        [
          "French Guiana",
          "gf",
          "594"
        ],
        [
          "French Polynesia",
          "pf",
          "689"
        ],
        [
          "Gabon",
          "ga",
          "241"
        ],
        [
          "Gambia",
          "gm",
          "220"
        ],
        [
          "Georgia",
          "ge",
          "995"
        ],
        [
          "Germany",
          "de",
          "49"
        ],
        [
          "Ghana",
          "gh",
          "233"
        ],
        [
          "Gibraltar",
          "gi",
          "350"
        ],
        [
          "Greece",
          "gr",
          "30"
        ],
        [
          "Greenland",
          "gl",
          "299"
        ],
        [
          "Grenada",
          "gd",
          "1",
          14,
          ["473"]
        ],
        [
          "Guadeloupe",
          "gp",
          "590",
          0
        ],
        [
          "Guam",
          "gu",
          "1",
          15,
          ["671"]
        ],
        [
          "Guatemala",
          "gt",
          "502"
        ],
        [
          "Guernsey",
          "gg",
          "44",
          1,
          ["1481", "7781", "7839", "7911"]
        ],
        [
          "Guinea",
          "gn",
          "224"
        ],
        [
          "Guinea-Bissau",
          "gw",
          "245"
        ],
        [
          "Guyana",
          "gy",
          "592"
        ],
        [
          "Haiti",
          "ht",
          "509"
        ],
        [
          "Honduras",
          "hn",
          "504"
        ],
        [
          "Hong Kong",
          "hk",
          "852"
        ],
        [
          "Hungary",
          "hu",
          "36"
        ],
        [
          "Iceland",
          "is",
          "354"
        ],
        [
          "India",
          "in",
          "91"
        ],
        [
          "Indonesia",
          "id",
          "62"
        ],
        [
          "Iran",
          "ir",
          "98"
        ],
        [
          "Iraq",
          "iq",
          "964"
        ],
        [
          "Ireland",
          "ie",
          "353"
        ],
        [
          "Isle of Man",
          "im",
          "44",
          2,
          ["1624", "74576", "7524", "7924", "7624"]
        ],
        [
          "Israel",
          "il",
          "972"
        ],
        [
          "Italy",
          "it",
          "39",
          0
        ],
        [
          "Jamaica",
          "jm",
          "1",
          4,
          ["876", "658"]
        ],
        [
          "Japan",
          "jp",
          "81"
        ],
        [
          "Jersey",
          "je",
          "44",
          3,
          ["1534", "7509", "7700", "7797", "7829", "7937"]
        ],
        [
          "Jordan",
          "jo",
          "962"
        ],
        [
          "Kazakhstan",
          "kz",
          "7",
          1,
          ["33", "7"]
        ],
        [
          "Kenya",
          "ke",
          "254"
        ],
        [
          "Kiribati",
          "ki",
          "686"
        ],
        [
          "Kosovo",
          "xk",
          "383"
        ],
        [
          "Kuwait",
          "kw",
          "965"
        ],
        [
          "Kyrgyzstan",
          "kg",
          "996"
        ],
        [
          "Laos",
          "la",
          "856"
        ],
        [
          "Latvia",
          "lv",
          "371"
        ],
        [
          "Lebanon",
          "lb",
          "961"
        ],
        [
          "Lesotho",
          "ls",
          "266"
        ],
        [
          "Liberia",
          "lr",
          "231"
        ],
        [
          "Libya",
          "ly",
          "218"
        ],
        [
          "Liechtenstein",
          "li",
          "423"
        ],
        [
          "Lithuania",
          "lt",
          "370"
        ],
        [
          "Luxembourg",
          "lu",
          "352"
        ],
        [
          "Macau",
          "mo",
          "853"
        ],
        [
          "Madagascar",
          "mg",
          "261"
        ],
        [
          "Malawi",
          "mw",
          "265"
        ],
        [
          "Malaysia",
          "my",
          "60"
        ],
        [
          "Maldives",
          "mv",
          "960"
        ],
        [
          "Mali",
          "ml",
          "223"
        ],
        [
          "Malta",
          "mt",
          "356"
        ],
        [
          "Marshall Islands",
          "mh",
          "692"
        ],
        [
          "Martinique",
          "mq",
          "596"
        ],
        [
          "Mauritania",
          "mr",
          "222"
        ],
        [
          "Mauritius",
          "mu",
          "230"
        ],
        [
          "Mayotte",
          "yt",
          "262",
          1,
          ["269", "639"]
        ],
        [
          "Mexico",
          "mx",
          "52"
        ],
        [
          "Micronesia",
          "fm",
          "691"
        ],
        [
          "Moldova",
          "md",
          "373"
        ],
        [
          "Monaco",
          "mc",
          "377"
        ],
        [
          "Mongolia",
          "mn",
          "976"
        ],
        [
          "Montenegro",
          "me",
          "382"
        ],
        [
          "Montserrat",
          "ms",
          "1",
          16,
          ["664"]
        ],
        [
          "Morocco",
          "ma",
          "212",
          0
        ],
        [
          "Mozambique",
          "mz",
          "258"
        ],
        [
          "Myanmar (Burma)",
          "mm",
          "95"
        ],
        [
          "Namibia",
          "na",
          "264"
        ],
        [
          "Nauru",
          "nr",
          "674"
        ],
        [
          "Nepal",
          "np",
          "977"
        ],
        [
          "Netherlands",
          "nl",
          "31"
        ],
        [
          "New Caledonia",
          "nc",
          "687"
        ],
        [
          "New Zealand",
          "nz",
          "64"
        ],
        [
          "Nicaragua",
          "ni",
          "505"
        ],
        [
          "Niger",
          "ne",
          "227"
        ],
        [
          "Nigeria",
          "ng",
          "234"
        ],
        [
          "Niue",
          "nu",
          "683"
        ],
        [
          "Norfolk Island",
          "nf",
          "672"
        ],
        [
          "North Korea",
          "kp",
          "850"
        ],
        [
          "North Macedonia",
          "mk",
          "389"
        ],
        [
          "Northern Mariana Islands",
          "mp",
          "1",
          17,
          ["670"]
        ],
        [
          "Norway",
          "no",
          "47",
          0
        ],
        [
          "Oman",
          "om",
          "968"
        ],
        [
          "Pakistan",
          "pk",
          "92"
        ],
        [
          "Palau",
          "pw",
          "680"
        ],
        [
          "Palestine",
          "ps",
          "970"
        ],
        [
          "Panama",
          "pa",
          "507"
        ],
        [
          "Papua New Guinea",
          "pg",
          "675"
        ],
        [
          "Paraguay",
          "py",
          "595"
        ],
        [
          "Peru",
          "pe",
          "51"
        ],
        [
          "Philippines",
          "ph",
          "63"
        ],
        [
          "Poland",
          "pl",
          "48"
        ],
        [
          "Portugal",
          "pt",
          "351"
        ],
        [
          "Puerto Rico",
          "pr",
          "1",
          3,
          ["787", "939"]
        ],
        [
          "Qatar",
          "qa",
          "974"
        ],
        [
          "Réunion",
          "re",
          "262",
          0
        ],
        [
          "Romania",
          "ro",
          "40"
        ],
        [
          "Russia",
          "ru",
          "7",
          0
        ],
        [
          "Rwanda",
          "rw",
          "250"
        ],
        [
          "Samoa",
          "ws",
          "685"
        ],
        [
          "San Marino",
          "sm",
          "378"
        ],
        [
          "São Tomé & Príncipe",
          "st",
          "239"
        ],
        [
          "Saudi Arabia",
          "sa",
          "966"
        ],
        [
          "Senegal",
          "sn",
          "221"
        ],
        [
          "Serbia",
          "rs",
          "381"
        ],
        [
          "Seychelles",
          "sc",
          "248"
        ],
        [
          "Sierra Leone",
          "sl",
          "232"
        ],
        [
          "Singapore",
          "sg",
          "65"
        ],
        [
          "Sint Maarten",
          "sx",
          "1",
          21,
          ["721"]
        ],
        [
          "Slovakia",
          "sk",
          "421"
        ],
        [
          "Slovenia",
          "si",
          "386"
        ],
        [
          "Solomon Islands",
          "sb",
          "677"
        ],
        [
          "Somalia",
          "so",
          "252"
        ],
        [
          "South Africa",
          "za",
          "27"
        ],
        [
          "South Korea",
          "kr",
          "82"
        ],
        [
          "South Sudan",
          "ss",
          "211"
        ],
        [
          "Spain",
          "es",
          "34"
        ],
        [
          "Sri Lanka",
          "lk",
          "94"
        ],
        [
          "St Barthélemy",
          "bl",
          "590",
          1
        ],
        [
          "St Helena",
          "sh",
          "290"
        ],
        [
          "St Kitts & Nevis",
          "kn",
          "1",
          18,
          ["869"]
        ],
        [
          "St Lucia",
          "lc",
          "1",
          19,
          ["758"]
        ],
        [
          "St Martin",
          "mf",
          "590",
          2
        ],
        [
          "St Pierre & Miquelon",
          "pm",
          "508"
        ],
        [
          "St Vincent & Grenadines",
          "vc",
          "1",
          20,
          ["784"]
        ],
        [
          "Sudan",
          "sd",
          "249"
        ],
        [
          "Suriname",
          "sr",
          "597"
        ],
        [
          "Svalbard & Jan Mayen",
          "sj",
          "47",
          1,
          ["79"]
        ],
        [
          "Sweden",
          "se",
          "46"
        ],
        [
          "Switzerland",
          "ch",
          "41"
        ],
        [
          "Syria",
          "sy",
          "963"
        ],
        [
          "Taiwan",
          "tw",
          "886"
        ],
        [
          "Tajikistan",
          "tj",
          "992"
        ],
        [
          "Tanzania",
          "tz",
          "255"
        ],
        [
          "Thailand",
          "th",
          "66"
        ],
        [
          "Timor-Leste",
          "tl",
          "670"
        ],
        [
          "Togo",
          "tg",
          "228"
        ],
        [
          "Tokelau",
          "tk",
          "690"
        ],
        [
          "Tonga",
          "to",
          "676"
        ],
        [
          "Trinidad & Tobago",
          "tt",
          "1",
          22,
          ["868"]
        ],
        [
          "Tunisia",
          "tn",
          "216"
        ],
        [
          "Turkey",
          "tr",
          "90"
        ],
        [
          "Turkmenistan",
          "tm",
          "993"
        ],
        [
          "Turks & Caicos Islands",
          "tc",
          "1",
          23,
          ["649"]
        ],
        [
          "Tuvalu",
          "tv",
          "688"
        ],
        [
          "Uganda",
          "ug",
          "256"
        ],
        [
          "Ukraine",
          "ua",
          "380"
        ],
        [
          "United Arab Emirates",
          "ae",
          "971"
        ],
        [
          "United Kingdom",
          "gb",
          "44",
          0
        ],
        [
          "United States",
          "us",
          "1",
          0
        ],
        [
          "Uruguay",
          "uy",
          "598"
        ],
        [
          "US Virgin Islands",
          "vi",
          "1",
          24,
          ["340"]
        ],
        [
          "Uzbekistan",
          "uz",
          "998"
        ],
        [
          "Vanuatu",
          "vu",
          "678"
        ],
        [
          "Vatican City",
          "va",
          "39",
          1,
          ["06698"]
        ],
        [
          "Venezuela",
          "ve",
          "58"
        ],
        [
          "Vietnam",
          "vn",
          "84"
        ],
        [
          "Wallis & Futuna",
          "wf",
          "681"
        ],
        [
          "Western Sahara",
          "eh",
          "212",
          1,
          ["5288", "5289"]
        ],
        [
          "Yemen",
          "ye",
          "967"
        ],
        [
          "Zambia",
          "zm",
          "260"
        ],
        [
          "Zimbabwe",
          "zw",
          "263"
        ],
        [
          "Åland Islands",
          "ax",
          "358",
          1,
          ["18"]
        ]
      ], f = [];
      for (let l = 0; l < g.length; l++) {
        const a = g[l];
        f[l] = {
          name: a[0],
          iso2: a[1],
          dialCode: a[2],
          priority: a[3] || 0,
          areaCodes: a[4] || null,
          nodeById: {}
        };
      }
      var b = f, y = 0, w = {
        // whether or not to allow the dropdown
        allowDropdown: !0,
        // add a placeholder in the input with an example number for the selected country
        autoPlaceholder: "polite",
        // add a country search input at the top of the dropdown
        countrySearch: !0,
        // modify the parentClass
        containerClass: "",
        // modify the auto placeholder
        customPlaceholder: null,
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
        // inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber
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
        // only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length
        strictMode: !1,
        // use full screen popup instead of dropdown for country list
        useFullscreenPopup: typeof navigator < "u" && typeof window < "u" ? (
          // we cannot just test screen size as some smartphones/website meta tags will report desktop
          // resolutions
          // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
          /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth <= 500
        ) : !1,
        // specify the path to the libphonenumber script to enable validation/formatting
        utilsScript: ""
      }, x = [
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
      ], _ = (l) => l.replace(/\D/g, ""), C = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), k = (l, a, d) => {
        d && !l.classList.contains(a) ? l.classList.add(a) : !d && l.classList.contains(a) && l.classList.remove(a);
      }, z = (l) => {
        const a = _(l);
        if (a.charAt(0) === "1") {
          const d = a.substr(1, 3);
          return x.indexOf(d) !== -1;
        }
        return !1;
      }, R = (l, a) => l.name < a.name ? -1 : l.name > a.name ? 1 : 0, H = (l, a, d, h) => {
        if (d === 0 && !h)
          return 0;
        let m = 0;
        for (let v = 0; v < a.length; v++) {
          if (/[+0-9]/.test(a[v]) && m++, m === l && !h)
            return v + 1;
          if (h && m === l + 1)
            return v;
        }
        return a.length;
      }, N = (l, a, d) => {
        const h = document.createElement(l);
        return a && Object.entries(a).forEach(([m, v]) => h.setAttribute(m, v)), d && d.appendChild(h), h;
      }, W = (l) => {
        const { instances: a } = window.intlTelInputGlobals;
        Object.values(a).forEach((d) => d[l]());
      }, J = class {
        constructor(l, a = {}) {
          // can't be private as it's called from intlTelInput convenience wrapper
          T(this, "id");
          // not private!
          T(this, "promise");
          // private
          T(this, "telInput");
          T(this, "activeItem");
          T(this, "highlightedItem");
          T(this, "options");
          T(this, "hadInitialPlaceholder");
          T(this, "isRTL");
          T(this, "selectedCountryData");
          T(this, "countries");
          T(this, "dialCodeMaxLen");
          T(this, "dialCodeToIso2Map");
          T(this, "dialCodes");
          T(this, "preferredCountries");
          T(this, "countryContainer");
          T(this, "selectedCountry");
          T(this, "selectedCountryInner");
          T(this, "selectedCountryA11yText");
          T(this, "selectedDialCode");
          T(this, "dropdownArrow");
          T(this, "dropdownContent");
          T(this, "searchInput");
          T(this, "searchResultsA11yText");
          T(this, "countryList");
          T(this, "dropdown");
          T(this, "hiddenInput");
          T(this, "hiddenInputCountry");
          T(this, "maxCoreNumberLength");
          T(this, "defaultCountry");
          T(this, "_handleHiddenInputSubmit");
          T(this, "_handleLabelClick");
          T(this, "_handleClickSelectedCountry");
          T(this, "_handleCountryContainerKeydown");
          T(this, "_handleInputEvent");
          T(this, "_handleKeydownEvent");
          T(this, "_handleWindowScroll");
          T(this, "_handleMouseoverCountryList");
          T(this, "_handleClickCountryList");
          T(this, "_handleClickOffToClose");
          T(this, "_handleKeydownOnDropdown");
          T(this, "_handleSearchChange");
          T(this, "resolveAutoCountryPromise");
          T(this, "rejectAutoCountryPromise");
          T(this, "resolveUtilsScriptPromise");
          T(this, "rejectUtilsScriptPromise");
          this.id = y++, this.telInput = l, this.activeItem = null, this.highlightedItem = null, this.options = Object.assign({}, w, a), this.hadInitialPlaceholder = !!l.getAttribute("placeholder");
        }
        // can't be private as it's called from intlTelInput convenience wrapper
        _init() {
          this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.countrySearch && !this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !0);
          const l = this.options.allowDropdown && !this.options.showSelectedDialCode;
          !this.options.showFlags && l && (this.options.showFlags = !0), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isRTL = !!this.telInput.closest("[dir=rtl]");
          const a = new Promise((h, m) => {
            this.resolveAutoCountryPromise = h, this.rejectAutoCountryPromise = m;
          }), d = new Promise((h, m) => {
            this.resolveUtilsScriptPromise = h, this.rejectUtilsScriptPromise = m;
          });
          this.promise = Promise.all([a, d]), this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
        }
        //********************
        //*  PRIVATE METHODS
        //********************
        // prepare all of the country data, including onlyCountries, excludeCountries and
        // preferredCountries options
        _processCountryData() {
          this._processAllCountries(), this._processDialCodes(), this._processPreferredCountries(), this._translateCountryNames(), (this.options.onlyCountries.length || this.options.i18n) && this.countries.sort(R);
        }
        // add a dial code to this.dialCodeToIso2Map
        _addToDialCodeMap(l, a, d) {
          a.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = a.length), this.dialCodeToIso2Map.hasOwnProperty(a) || (this.dialCodeToIso2Map[a] = []);
          for (let m = 0; m < this.dialCodeToIso2Map[a].length; m++)
            if (this.dialCodeToIso2Map[a][m] === l)
              return;
          const h = d !== void 0 ? d : this.dialCodeToIso2Map[a].length;
          this.dialCodeToIso2Map[a][h] = l;
        }
        // process onlyCountries or excludeCountries array if present
        _processAllCountries() {
          const { onlyCountries: l, excludeCountries: a } = this.options;
          if (l.length) {
            const d = l.map(
              (h) => h.toLowerCase()
            );
            this.countries = b.filter(
              (h) => d.indexOf(h.iso2) > -1
            );
          } else if (a.length) {
            const d = a.map(
              (h) => h.toLowerCase()
            );
            this.countries = b.filter(
              (h) => d.indexOf(h.iso2) === -1
            );
          } else
            this.countries = b;
        }
        // Translate Countries by object literal provided on config
        _translateCountryNames() {
          for (let l = 0; l < this.countries.length; l++) {
            const a = this.countries[l].iso2.toLowerCase();
            this.options.i18n.hasOwnProperty(a) && (this.countries[l].name = this.options.i18n[a]);
          }
        }
        // generate this.dialCodes and this.dialCodeToIso2Map
        _processDialCodes() {
          this.dialCodes = {}, this.dialCodeMaxLen = 0, this.dialCodeToIso2Map = {};
          for (let l = 0; l < this.countries.length; l++) {
            const a = this.countries[l];
            this.dialCodes[a.dialCode] || (this.dialCodes[a.dialCode] = !0), this._addToDialCodeMap(a.iso2, a.dialCode, a.priority);
          }
          for (let l = 0; l < this.countries.length; l++) {
            const a = this.countries[l];
            if (a.areaCodes) {
              const d = this.dialCodeToIso2Map[a.dialCode][0];
              for (let h = 0; h < a.areaCodes.length; h++) {
                const m = a.areaCodes[h];
                for (let v = 1; v < m.length; v++) {
                  const A = a.dialCode + m.substr(0, v);
                  this._addToDialCodeMap(d, A), this._addToDialCodeMap(a.iso2, A);
                }
                this._addToDialCodeMap(a.iso2, a.dialCode + m);
              }
            }
          }
        }
        // process preferred countries - iterate through the preferences, fetching the country data for
        // each one
        _processPreferredCountries() {
          this.preferredCountries = [];
          for (let l = 0; l < this.options.preferredCountries.length; l++) {
            const a = this.options.preferredCountries[l].toLowerCase(), d = this._getCountryData(a, !0);
            d && this.preferredCountries.push(d);
          }
        }
        // generate all of the markup for the plugin: the selected country overlay, and the dropdown
        _generateMarkup() {
          var Je;
          this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
          const {
            allowDropdown: l,
            showSelectedDialCode: a,
            showFlags: d,
            containerClass: h,
            hiddenInput: m,
            dropdownContainer: v,
            fixDropdownWidth: A,
            useFullscreenPopup: P,
            countrySearch: I,
            i18n: q
          } = this.options;
          let Z = "iti";
          l && (Z += " iti--allow-dropdown"), a && (Z += " iti--show-selected-dial-code"), d && (Z += " iti--show-flags"), h && (Z += ` ${h}`), P || (Z += " iti--inline-dropdown");
          const ee = N("div", { class: Z });
          if ((Je = this.telInput.parentNode) == null || Je.insertBefore(ee, this.telInput), (d || a) && (this.countryContainer = N(
            "div",
            { class: "iti__country-container" },
            ee
          ), this.selectedCountry = N(
            "button",
            {
              type: "button",
              class: "iti__selected-country",
              ...l && {
                "aria-expanded": "false",
                "aria-label": this.options.i18n.selectedCountryAriaLabel || "Selected country",
                "aria-haspopup": I ? "true" : "listbox",
                "aria-controls": I ? `iti-${this.id}__dropdown-content` : `iti-${this.id}__country-listbox`,
                ...I ? { role: "combobox" } : {}
              }
            },
            this.countryContainer
          ), this.selectedCountryInner = N("div", null, this.selectedCountry), this.selectedCountryA11yText = N(
            "span",
            { class: "iti__a11y-text" },
            this.selectedCountryInner
          )), ee.appendChild(this.telInput), this.selectedCountry && this.telInput.disabled && this.selectedCountry.setAttribute("aria-disabled", "true"), a && (this.selectedDialCode = N(
            "div",
            { class: "iti__selected-dial-code" },
            this.selectedCountry
          )), l) {
            this.telInput.disabled || this.selectedCountry.setAttribute("tabindex", "0"), this.dropdownArrow = N(
              "div",
              { class: "iti__arrow", "aria-hidden": "true" },
              this.selectedCountry
            );
            const _t = A ? "" : "iti--flexible-dropdown-width";
            if (this.dropdownContent = N("div", {
              id: `iti-${this.id}__dropdown-content`,
              class: `iti__dropdown-content iti__hide ${_t}`
            }), I && (this.searchInput = N(
              "input",
              {
                type: "text",
                class: "iti__search-input",
                placeholder: q.searchPlaceholder || "Search",
                role: "combobox",
                "aria-expanded": "true",
                "aria-label": q.searchPlaceholder || "Search",
                "aria-controls": `iti-${this.id}__country-listbox`,
                "aria-autocomplete": "list",
                autocomplete: "off"
              },
              this.dropdownContent
            ), this.searchResultsA11yText = N(
              "span",
              { class: "iti__a11y-text" },
              this.dropdownContent
            )), this.countryList = N(
              "ul",
              {
                class: "iti__country-list",
                id: `iti-${this.id}__country-listbox`,
                role: "listbox",
                "aria-label": q.countryListAriaLabel || "List of countries"
              },
              this.dropdownContent
            ), this.preferredCountries.length && !I && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), N(
              "li",
              {
                class: "iti__divider",
                "aria-hidden": "true"
              },
              this.countryList
            )), this._appendListItems(this.countries, "iti__standard"), I && this._updateSearchResultsText(), v) {
              let de = "iti iti--container";
              P ? de += " iti--fullscreen-popup" : de += " iti--inline-dropdown", I && (de += " iti--country-search"), this.dropdown = N("div", { class: de }), this.dropdown.appendChild(this.dropdownContent);
            } else
              this.countryContainer.appendChild(this.dropdownContent);
          }
          if (m) {
            const _t = this.telInput.getAttribute("name") || "", de = m(_t);
            de.phone && (this.hiddenInput = N("input", {
              type: "hidden",
              name: de.phone
            }), ee.appendChild(this.hiddenInput)), de.country && (this.hiddenInputCountry = N("input", {
              type: "hidden",
              name: de.country
            }), ee.appendChild(this.hiddenInputCountry));
          }
        }
        // for each of the passed countries: add a country <li> to the countryList <ul> container
        _appendListItems(l, a, d) {
          for (let h = 0; h < l.length; h++) {
            const m = l[h], v = d ? "-preferred" : "", A = N(
              "li",
              {
                id: `iti-${this.id}__item-${m.iso2}${v}`,
                class: `iti__country ${a}`,
                tabindex: "-1",
                role: "option",
                "data-dial-code": m.dialCode,
                "data-country-code": m.iso2,
                "aria-selected": "false"
              },
              this.countryList
            );
            m.nodeById[this.id] = A;
            let P = "";
            this.options.showFlags && (P += `<div class='iti__flag-box'><div class='iti__flag iti__${m.iso2}'></div></div>`), P += `<span class='iti__country-name'>${m.name}</span>`, P += `<span class='iti__dial-code'>+${m.dialCode}</span>`, A.insertAdjacentHTML("beforeend", P);
          }
        }
        // set the initial state of the input value and the selected country by:
        // 1. extracting a dial code from the given number
        // 2. using explicit initialCountry
        // 3. picking the first preferred country
        // 4. picking the first country
        _setInitialState(l = !1) {
          const a = this.telInput.getAttribute("value"), d = this.telInput.value, m = a && a.charAt(0) === "+" && (!d || d.charAt(0) !== "+") ? a : d, v = this._getDialCode(m), A = z(m), { initialCountry: P } = this.options;
          if (v && !A)
            this._updateCountryFromNumber(m);
          else if (P !== "auto" || l) {
            const I = P ? P.toLowerCase() : "";
            I && this._getCountryData(I, !0) ? this._setCountry(I) : v && A ? this._setCountry("us") : this._setCountry();
          }
          m && this._updateValFromNumber(m);
        }
        // initialise the main event listeners: input keyup, and click selected country
        _initListeners() {
          this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.hiddenInput || this.hiddenInputCountry) && this.telInput.form && this._initHiddenInputListener();
        }
        // update hidden input on form submit
        _initHiddenInputListener() {
          var l;
          this._handleHiddenInputSubmit = () => {
            this.hiddenInput && (this.hiddenInput.value = this.getNumber()), this.hiddenInputCountry && (this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "");
          }, (l = this.telInput.form) == null || l.addEventListener(
            "submit",
            this._handleHiddenInputSubmit
          );
        }
        // initialise the dropdown listeners
        _initDropdownListeners() {
          this._handleLabelClick = (a) => {
            this.dropdownContent.classList.contains("iti__hide") ? this.telInput.focus() : a.preventDefault();
          };
          const l = this.telInput.closest("label");
          l && l.addEventListener("click", this._handleLabelClick), this._handleClickSelectedCountry = () => {
            this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly && this._openDropdown();
          }, this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry), this._handleCountryContainerKeydown = (a) => {
            this.dropdownContent.classList.contains("iti__hide") && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(a.key) && (a.preventDefault(), a.stopPropagation(), this._openDropdown()), a.key === "Tab" && this._closeDropdown();
          }, this.countryContainer.addEventListener(
            "keydown",
            this._handleCountryContainerKeydown
          );
        }
        // init many requests: utils script / geo ip lookup
        _initRequests() {
          this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", () => {
            window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
          }) : this.resolveUtilsScriptPromise(), this.options.initialCountry === "auto" && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
        }
        // perform the geo ip lookup
        _loadAutoCountry() {
          window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(
            (l = "") => {
              const a = l.toLowerCase();
              a && this._getCountryData(a, !0) ? (window.intlTelInputGlobals.autoCountry = a, setTimeout(() => W("handleAutoCountry"))) : (this._setInitialState(!0), W("rejectAutoCountryPromise"));
            },
            () => {
              this._setInitialState(!0), W("rejectAutoCountryPromise");
            }
          ));
        }
        // initialize the tel input listeners
        _initTelInputListeners() {
          const { strictMode: l, formatAsYouType: a } = this.options;
          let d = !1;
          this._handleInputEvent = (h) => {
            this._updateCountryFromNumber(this.telInput.value) && this._triggerCountryChange();
            const m = h && h.data && /[^+0-9]/.test(h.data), v = h && h.inputType === "insertFromPaste" && this.telInput.value;
            if (m || v && !l ? d = !0 : /[^+0-9]/.test(this.telInput.value) || (d = !1), a && !d) {
              const A = this.telInput.selectionStart || 0, I = this.telInput.value.substring(0, A).replace(/[^+0-9]/g, "").length, q = h && h.inputType === "deleteContentForward", Z = this._formatNumberAsYouType(), ee = H(I, Z, A, q);
              this.telInput.value = Z, this.telInput.setSelectionRange(ee, ee);
            }
          }, this.telInput.addEventListener("input", this._handleInputEvent), l && (this._handleKeydownEvent = (h) => {
            if (h.key.length === 1 && !h.altKey && !h.ctrlKey && !h.metaKey) {
              const m = this.telInput.selectionStart === 0 && h.key === "+", v = /^[0-9]$/.test(h.key), A = m || v, P = this._getFullNumber(), I = window.intlTelInputUtils.getCoreNumber(P, this.selectedCountryData.iso2), q = this.maxCoreNumberLength && I.length >= this.maxCoreNumberLength;
              (!A || q) && h.preventDefault();
            }
          }, this.telInput.addEventListener("keydown", this._handleKeydownEvent));
        }
        // adhere to the input's maxlength attr
        _cap(l) {
          const a = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
          return a && l.length > a ? l.substr(0, a) : l;
        }
        // trigger a custom event on the input
        _trigger(l) {
          const a = new Event(l, {
            bubbles: !0,
            cancelable: !0
          });
          this.telInput.dispatchEvent(a);
        }
        // open the dropdown
        _openDropdown() {
          const { fixDropdownWidth: l, countrySearch: a } = this.options;
          if (l && (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`), this.dropdownContent.classList.remove("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.activeItem && !a)
            this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0);
          else {
            const d = this.countryList.firstElementChild;
            d && (this._highlightListItem(d, !1), this.countryList.scrollTop = 0), a && this.searchInput.focus();
          }
          this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
        }
        // decide if should position dropdown above or below input (depends on position within viewport, and scroll)
        _setDropdownPosition() {
          if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
            const l = this.telInput.getBoundingClientRect(), a = document.documentElement.scrollTop, d = l.top + a, h = this.dropdownContent.offsetHeight, m = d + this.telInput.offsetHeight + h < a + window.innerHeight, v = d - h > a, A = !this.options.countrySearch && !m && v;
            if (k(
              this.dropdownContent,
              "iti__dropdown-content--dropup",
              A
            ), this.options.dropdownContainer) {
              const P = A ? 0 : this.telInput.offsetHeight;
              this.dropdown.style.top = `${d + P}px`, this.dropdown.style.left = `${l.left + document.body.scrollLeft}px`, this._handleWindowScroll = () => this._closeDropdown(), window.addEventListener("scroll", this._handleWindowScroll);
            }
          }
        }
        // we only bind dropdown listeners when the dropdown is open
        _bindDropdownListeners() {
          this._handleMouseoverCountryList = (h) => {
            var v;
            const m = (v = h.target) == null ? void 0 : v.closest(".iti__country");
            m && this._highlightListItem(m, !1);
          }, this.countryList.addEventListener(
            "mouseover",
            this._handleMouseoverCountryList
          ), this._handleClickCountryList = (h) => {
            var v;
            const m = (v = h.target) == null ? void 0 : v.closest(".iti__country");
            m && this._selectListItem(m);
          }, this.countryList.addEventListener("click", this._handleClickCountryList);
          let l = !0;
          this._handleClickOffToClose = () => {
            l || this._closeDropdown(), l = !1;
          }, document.documentElement.addEventListener(
            "click",
            this._handleClickOffToClose
          );
          let a = "", d = null;
          if (this._handleKeydownOnDropdown = (h) => {
            ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(h.key) && (h.preventDefault(), h.stopPropagation(), h.key === "ArrowUp" || h.key === "ArrowDown" ? this._handleUpDownKey(h.key) : h.key === "Enter" ? this._handleEnterKey() : h.key === "Escape" && this._closeDropdown()), !this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(h.key) && (h.stopPropagation(), d && clearTimeout(d), a += h.key.toLowerCase(), this._searchForCountry(a), d = setTimeout(() => {
              a = "";
            }, 1e3));
          }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
            const h = () => {
              const v = this.searchInput.value.trim();
              v ? this._filterCountries(v) : this._filterCountries("", !0);
            };
            let m = null;
            this._handleSearchChange = () => {
              m && clearTimeout(m), m = setTimeout(() => {
                h(), m = null;
              }, 100);
            }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", (v) => v.stopPropagation());
          }
        }
        _filterCountries(l, a = !1) {
          let d = !0;
          this.countryList.innerHTML = "";
          const h = C(l);
          for (let m = 0; m < this.countries.length; m++) {
            const v = this.countries[m], A = C(v.name), P = `+${v.dialCode}`;
            if (a || A.includes(h) || P.includes(h) || v.iso2.includes(h)) {
              const I = v.nodeById[this.id];
              I && this.countryList.appendChild(I), d && (this._highlightListItem(I, !1), d = !1);
            }
          }
          this.countryList.scrollTop = 0, this._updateSearchResultsText();
        }
        // update search results text (for a11y)
        _updateSearchResultsText() {
          const { i18n: l } = this.options, a = this.countryList.childElementCount;
          let d;
          a === 0 ? d = l.zeroSearchResults || "No results found" : a === 1 ? d = l.oneSearchResult || "1 result found" : d = l.multipleSearchResults ? l.multipleSearchResults.replace("${count}", a.toString()) : `${a} results found`, this.searchResultsA11yText.textContent = d;
        }
        // highlight the next/prev item in the list (and ensure it is visible)
        _handleUpDownKey(l) {
          var d, h;
          let a = l === "ArrowUp" ? (d = this.highlightedItem) == null ? void 0 : d.previousElementSibling : (h = this.highlightedItem) == null ? void 0 : h.nextElementSibling;
          if (a ? a.classList.contains("iti__divider") && (a = l === "ArrowUp" ? a.previousElementSibling : a.nextElementSibling) : this.countryList.childElementCount > 1 && (a = l === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), a) {
            this._scrollTo(a, !1);
            const m = !this.options.countrySearch;
            this._highlightListItem(a, m);
          }
        }
        // select the currently highlighted item
        _handleEnterKey() {
          this.highlightedItem && this._selectListItem(this.highlightedItem);
        }
        // find the first list item whose name starts with the query string
        _searchForCountry(l) {
          for (let a = 0; a < this.countries.length; a++) {
            const d = this.countries[a];
            if (d.name.substr(0, l.length).toLowerCase() === l) {
              const m = d.nodeById[this.id];
              this._highlightListItem(m, !1), this._scrollTo(m, !0);
              break;
            }
          }
        }
        // update the input's value to the given val (format first if possible)
        // NOTE: this is called from _setInitialState, handleUtils and setNumber
        _updateValFromNumber(l) {
          let a = l;
          if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
            const d = this.options.nationalMode || a.charAt(0) !== "+" && !this.options.showSelectedDialCode, { NATIONAL: h, INTERNATIONAL: m } = window.intlTelInputUtils.numberFormat, v = d ? h : m;
            a = window.intlTelInputUtils.formatNumber(
              a,
              this.selectedCountryData.iso2,
              v
            );
          }
          a = this._beforeSetNumber(a), this.telInput.value = a;
        }
        // check if need to select a new country based on the given number
        // Note: called from _setInitialState, keyup handler, setNumber
        _updateCountryFromNumber(l) {
          const a = l.indexOf("+");
          let d = a ? l.substring(a) : l;
          const h = this.selectedCountryData.dialCode;
          d && h === "1" && d.charAt(0) !== "+" && (d.charAt(0) !== "1" && (d = `1${d}`), d = `+${d}`), this.options.showSelectedDialCode && h && d.charAt(0) !== "+" && (d = `+${h}${d}`);
          const v = this._getDialCode(d, !0), A = _(d);
          let P = null;
          if (v) {
            const I = this.dialCodeToIso2Map[_(v)], q = I.indexOf(this.selectedCountryData.iso2) !== -1 && A.length <= v.length - 1;
            if (!(h === "1" && z(A)) && !q) {
              for (let ee = 0; ee < I.length; ee++)
                if (I[ee]) {
                  P = I[ee];
                  break;
                }
            }
          } else
            d.charAt(0) === "+" && A.length ? P = "" : (!d || d === "+") && !this.selectedCountryData.iso2 && (P = this.defaultCountry);
          return P !== null ? this._setCountry(P) : !1;
        }
        // remove highlighting from other list items and highlight the given item
        _highlightListItem(l, a) {
          const d = this.highlightedItem;
          d && (d.classList.remove("iti__highlight"), d.setAttribute("aria-selected", "false")), this.highlightedItem = l, this.highlightedItem.classList.add("iti__highlight"), this.highlightedItem.setAttribute("aria-selected", "true"), this.selectedCountry.setAttribute(
            "aria-activedescendant",
            l.getAttribute("id") || ""
          ), this.options.countrySearch && this.searchInput.setAttribute(
            "aria-activedescendant",
            l.getAttribute("id") || ""
          ), a && this.highlightedItem.focus();
        }
        // find the country data for the given iso2 code
        // the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
        _getCountryData(l, a) {
          for (let d = 0; d < this.countries.length; d++)
            if (this.countries[d].iso2 === l)
              return this.countries[d];
          if (a)
            return null;
          throw new Error(`No country data for '${l}'`);
        }
        // update the selected country, dial code (if showSelectedDialCode), placeholder, title, and active list item
        // Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry
        _setCountry(l) {
          const { allowDropdown: a, showSelectedDialCode: d, showFlags: h, countrySearch: m, i18n: v } = this.options, A = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
          if (this.selectedCountryData = l ? this._getCountryData(l, !1) || {} : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedCountryInner) {
            let P = "", I = "";
            l ? h && (P = `iti__flag iti__${l}`, I = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`) : (P = "iti__flag iti__globe", I = v.noCountrySelected || "No country selected"), this.selectedCountryInner.className = P, this.selectedCountryA11yText.textContent = I;
          }
          if (this._setSelectedCountryTitleAttribute(l, d), d) {
            const P = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
            this.selectedDialCode.innerHTML = P;
            const I = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth();
            this.isRTL ? this.telInput.style.paddingRight = `${I + 6}px` : this.telInput.style.paddingLeft = `${I + 6}px`;
          }
          if (this._updatePlaceholder(), this._updateMaxLength(), a && !m) {
            const P = this.activeItem;
            if (P && (P.classList.remove("iti__active"), P.setAttribute("aria-selected", "false")), l) {
              const I = this.countryList.querySelector(
                `#iti-${this.id}__item-${l}-preferred`
              ) || this.countryList.querySelector(
                `#iti-${this.id}__item-${l}`
              );
              I && (I.setAttribute("aria-selected", "true"), I.classList.add("iti__active"), this.activeItem = I);
            }
          }
          return A.iso2 !== l;
        }
        // update the maximum valid number length for the currently selected country
        _updateMaxLength() {
          if (this.options.strictMode && window.intlTelInputUtils)
            if (this.selectedCountryData.iso2) {
              const l = window.intlTelInputUtils.numberType[this.options.placeholderNumberType];
              let a = window.intlTelInputUtils.getExampleNumber(
                this.selectedCountryData.iso2,
                !1,
                l,
                !0
              ), d = a;
              for (; window.intlTelInputUtils.isPossibleNumber(a, this.selectedCountryData.iso2); )
                d = a, a += "0";
              const h = window.intlTelInputUtils.getCoreNumber(d, this.selectedCountryData.iso2);
              this.maxCoreNumberLength = h.length;
            } else
              this.maxCoreNumberLength = null;
        }
        _setSelectedCountryTitleAttribute(l = null, a) {
          if (!this.selectedCountry)
            return;
          let d;
          l && !a ? d = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}` : l ? d = this.selectedCountryData.name : d = "Unknown", this.selectedCountry.setAttribute("title", d);
        }
        // when the input is in a hidden container during initialisation, we must inject some markup
        // into the end of the DOM to calculate the correct offsetWidth
        // NOTE: this is only used when showSelectedDialCode is enabled, so countryContainer and selectedCountry
        // will definitely exist
        _getHiddenSelectedCountryWidth() {
          if (this.telInput.parentNode) {
            const l = this.telInput.parentNode.cloneNode(!1);
            l.style.visibility = "hidden", document.body.appendChild(l);
            const a = this.countryContainer.cloneNode();
            l.appendChild(a);
            const d = this.selectedCountry.cloneNode(!0);
            a.appendChild(d);
            const h = d.offsetWidth;
            return document.body.removeChild(l), h;
          }
          return 0;
        }
        // update the input placeholder to an example number from the currently selected country
        _updatePlaceholder() {
          const {
            autoPlaceholder: l,
            placeholderNumberType: a,
            nationalMode: d,
            customPlaceholder: h
          } = this.options, m = l === "aggressive" || !this.hadInitialPlaceholder && l === "polite";
          if (window.intlTelInputUtils && m) {
            const v = window.intlTelInputUtils.numberType[a];
            let A = this.selectedCountryData.iso2 ? window.intlTelInputUtils.getExampleNumber(
              this.selectedCountryData.iso2,
              d,
              v
            ) : "";
            A = this._beforeSetNumber(A), typeof h == "function" && (A = h(A, this.selectedCountryData)), this.telInput.setAttribute("placeholder", A);
          }
        }
        // called when the user selects a list item from the dropdown
        _selectListItem(l) {
          const a = this._setCountry(
            l.getAttribute("data-country-code")
          );
          this._closeDropdown(), this._updateDialCode(l.getAttribute("data-dial-code")), this.telInput.focus(), a && this._triggerCountryChange();
        }
        // close the dropdown and unbind any listeners
        _closeDropdown() {
          this.dropdownContent.classList.add("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "false"), this.selectedCountry.removeAttribute("aria-activedescendant"), this.highlightedItem && this.highlightedItem.setAttribute("aria-selected", "false"), this.options.countrySearch && this.searchInput.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener(
            "click",
            this._handleClickOffToClose
          ), this.countryList.removeEventListener(
            "mouseover",
            this._handleMouseoverCountryList
          ), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
        }
        // check if an element is visible within it's container, else scroll until it is
        _scrollTo(l, a) {
          const d = this.countryList, h = document.documentElement.scrollTop, m = d.offsetHeight, v = d.getBoundingClientRect().top + h, A = v + m, P = l.offsetHeight, I = l.getBoundingClientRect().top + h, q = I + P;
          let Z = I - v + d.scrollTop;
          const ee = m / 2 - P / 2;
          if (I < v)
            a && (Z -= ee), d.scrollTop = Z;
          else if (q > A) {
            a && (Z += ee);
            const Je = m - P;
            d.scrollTop = Z - Je;
          }
        }
        // replace any existing dial code with the new one
        // Note: called from _selectListItem and setCountry
        _updateDialCode(l) {
          const a = this.telInput.value, d = `+${l}`;
          let h;
          if (a.charAt(0) === "+") {
            const m = this._getDialCode(a);
            m ? h = a.replace(m, d) : h = d, this.telInput.value = h;
          }
        }
        // try and extract a valid international dial code from a full telephone number
        // Note: returns the raw string inc plus character and any whitespace/dots etc
        _getDialCode(l, a) {
          let d = "";
          if (l.charAt(0) === "+") {
            let h = "";
            for (let m = 0; m < l.length; m++) {
              const v = l.charAt(m);
              if (!isNaN(parseInt(v, 10))) {
                if (h += v, a)
                  this.dialCodeToIso2Map[h] && (d = l.substr(0, m + 1));
                else if (this.dialCodes[h]) {
                  d = l.substr(0, m + 1);
                  break;
                }
                if (h.length === this.dialCodeMaxLen)
                  break;
              }
            }
          }
          return d;
        }
        // get the input val, adding the dial code if showSelectedDialCode is enabled
        _getFullNumber() {
          const l = this.telInput.value.trim(), { dialCode: a } = this.selectedCountryData;
          let d;
          const h = _(l);
          return this.options.showSelectedDialCode && !this.options.nationalMode && l.charAt(0) !== "+" && a && h ? d = `+${a}` : d = "", d + l;
        }
        // remove the dial code if showSelectedDialCode is enabled
        // also cap the length if the input has a maxlength attribute
        _beforeSetNumber(l) {
          let a = l;
          if (this.options.showSelectedDialCode) {
            let d = this._getDialCode(a);
            if (d) {
              d = `+${this.selectedCountryData.dialCode}`;
              const h = a[d.length] === " " || a[d.length] === "-" ? d.length + 1 : d.length;
              a = a.substr(h);
            }
          }
          return this._cap(a);
        }
        // trigger the 'countrychange' event
        _triggerCountryChange() {
          this._trigger("countrychange");
        }
        // format the number as the user types
        _formatNumberAsYouType() {
          const l = this._getFullNumber(), a = window.intlTelInputUtils ? window.intlTelInputUtils.formatNumberAsYouType(l, this.selectedCountryData.iso2) : l, { dialCode: d } = this.selectedCountryData;
          return this.options.showSelectedDialCode && !this.options.nationalMode && this.telInput.value.charAt(0) !== "+" && a.includes(`+${d}`) ? (a.split(`+${d}`)[1] || "").trim() : a;
        }
        //**************************
        //*  SECRET PUBLIC METHODS
        //**************************
        // this is called when the geoip call returns
        handleAutoCountry() {
          this.options.initialCountry === "auto" && window.intlTelInputGlobals.autoCountry && (this.defaultCountry = window.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
        }
        // this is called when the utils request completes
        handleUtils() {
          window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())), this.resolveUtilsScriptPromise();
        }
        //********************
        //*  PUBLIC METHODS
        //********************
        // remove plugin
        destroy() {
          var d, h;
          if (this.options.allowDropdown) {
            this._closeDropdown(), this.selectedCountry.removeEventListener(
              "click",
              this._handleClickSelectedCountry
            ), this.countryContainer.removeEventListener(
              "keydown",
              this._handleCountryContainerKeydown
            );
            const m = this.telInput.closest("label");
            m && m.removeEventListener("click", this._handleLabelClick);
          }
          const { form: l } = this.telInput;
          this._handleHiddenInputSubmit && l && l.removeEventListener("submit", this._handleHiddenInputSubmit), this.telInput.removeEventListener("input", this._handleInputEvent), this._handleKeydownEvent && this.telInput.removeEventListener("keydown", this._handleKeydownEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
          const a = this.telInput.parentNode;
          (d = a == null ? void 0 : a.parentNode) == null || d.insertBefore(this.telInput, a), (h = a == null ? void 0 : a.parentNode) == null || h.removeChild(a), delete window.intlTelInputGlobals.instances[this.id];
        }
        // get the extension from the current number
        getExtension() {
          return window.intlTelInputUtils ? window.intlTelInputUtils.getExtension(
            this._getFullNumber(),
            this.selectedCountryData.iso2
          ) : "";
        }
        // format the number to the given format
        getNumber(l) {
          if (window.intlTelInputUtils) {
            const { iso2: a } = this.selectedCountryData;
            return window.intlTelInputUtils.formatNumber(
              this._getFullNumber(),
              a,
              l
            );
          }
          return "";
        }
        // get the type of the entered number e.g. landline/mobile
        getNumberType() {
          return window.intlTelInputUtils ? window.intlTelInputUtils.getNumberType(
            this._getFullNumber(),
            this.selectedCountryData.iso2
          ) : -99;
        }
        // get the country data for the currently selected country
        getSelectedCountryData() {
          return this.selectedCountryData;
        }
        // get the validation error
        getValidationError() {
          if (window.intlTelInputUtils) {
            const { iso2: l } = this.selectedCountryData;
            return window.intlTelInputUtils.getValidationError(this._getFullNumber(), l);
          }
          return -99;
        }
        // validate the input val - assumes the global function isPossibleNumber (from utilsScript)
        isValidNumber(l = !0) {
          const a = this._getFullNumber();
          return new RegExp("\\p{L}", "u").test(a) ? !1 : window.intlTelInputUtils ? window.intlTelInputUtils.isPossibleNumber(a, this.selectedCountryData.iso2, l) : null;
        }
        // validate the input val (precise) - assumes the global function isValidNumber (from utilsScript)
        isValidNumberPrecise() {
          const l = this._getFullNumber();
          return new RegExp("\\p{L}", "u").test(l) ? !1 : window.intlTelInputUtils ? window.intlTelInputUtils.isValidNumber(l, this.selectedCountryData.iso2) : null;
        }
        // update the selected country, and update the input val accordingly
        setCountry(l) {
          const a = l.toLowerCase();
          this.selectedCountryData.iso2 !== a && (this._setCountry(a), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
        }
        // set the input value and update the country
        setNumber(l) {
          const a = this._updateCountryFromNumber(l);
          this._updateValFromNumber(l), a && this._triggerCountryChange();
        }
        // set the placeholder number typ
        setPlaceholderNumberType(l) {
          this.options.placeholderNumberType = l, this._updatePlaceholder();
        }
      }, Y = (l, a, d) => {
        const h = document.createElement("script");
        h.onload = () => {
          W("handleUtils"), a && a();
        }, h.onerror = () => {
          W("rejectUtilsScriptPromise"), d && d();
        }, h.className = "iti-load-utils", h.async = !0, h.src = l, document.body.appendChild(h);
      }, F = (l) => !window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript ? (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, new Promise(
        (a, d) => Y(l, a, d)
      )) : null;
      if (typeof window == "object") {
        const l = {
          defaults: w,
          // using a global like this allows us to mock it in the tests
          documentReady: () => document.readyState === "complete",
          // get the country data object
          getCountryData: () => b,
          // a getter for the plugin instance
          getInstance: (a) => {
            const d = a.getAttribute("data-intl-tel-input-id");
            return d ? l.instances[d] : null;
          },
          // a map from instance ID to instance object
          instances: {},
          loadUtils: F,
          version: "21.0.4"
        };
        window.intlTelInputGlobals = l;
      }
      var B = (l, a) => {
        const d = new J(l, a);
        return d._init(), l.setAttribute("data-intl-tel-input-id", d.id.toString()), window.intlTelInputGlobals.instances[d.id] = d, d;
      }, L = B;
      return c(p);
    })();
    return t.default;
  });
})(yo);
var Jl = yo.exports;
const Yl = /* @__PURE__ */ Ql(Jl), Zl = ["placeholder", "data-testid"], uu = {
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
    const r = me(null), o = me(null), n = me(!1), i = e, s = t;
    function u() {
      n.value = o.value.isValidNumber(), s("change", r.value.value, o.value.getNumber() || !1);
    }
    const c = S(() => {
      let p = "TwcPhoneInput mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input";
      return n.value && (p += " border-green-500 focus:border-green-500 focus:outline-green-500 focus:ring-green-500 bg-green-50"), i.displayError && (p += " border-red-500 focus:border-red-500 focus:outline-red-500 bg-red-50"), p;
    });
    return Fo(() => {
      const p = (g) => {
        localStorage != null && localStorage.getItem("ipCountry") ? g(localStorage.getItem("ipCountry")) : i.ipInfoKey ? fetch(`https://ipinfo.io/json?token=${i.ipInfoKey}`, {
          headers: { Accept: "application/json" }
        }).then((f) => f.json()).then((f) => {
          g(f.country), localStorage == null || localStorage.setItem("ipCountry", f.country);
        }).catch(() => {
          g("US");
        }) : g("US");
      };
      o.value = Yl(r.value, {
        initialCountry: "auto",
        geoIpLookup: p,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.5.7/js/utils.js"
      });
    }), (p, g) => ($(), O("input", {
      ref_key: "phoneInput",
      ref: r,
      placeholder: p.$props.placeholder,
      class: V(c.value),
      "data-testid": p.$props.dataTestid,
      onInput: u
    }, null, 42, Zl));
  }
}, du = {
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
    return (o, n) => ($(), O("div", {
      class: V(`h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface ${r()} ${t.color} ${t.class}`),
      role: "status"
    }, null, 2));
  }
}, cu = {
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
    return (o, n) => ($(), O("i", {
      class: V(`${r()} ${t.class}`)
    }, null, 2));
  }
};
export {
  tu as TwcButton,
  ru as TwcCheckbox,
  ou as TwcHeading,
  cu as TwcIcon,
  nu as TwcInput,
  iu as TwcLabel,
  su as TwcLink,
  au as TwcParagraph,
  uu as TwcPhoneInput,
  lu as TwcSelect,
  du as TwcSpinner
};
