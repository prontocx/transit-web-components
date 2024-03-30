import { reactive as wn, defineComponent as J, useAttrs as Ot, openBlock as L, createElementBlock as O, mergeProps as ct, unref as A, createTextVNode as tt, toDisplayString as pe, createBlock as q, resolveDynamicComponent as pt, normalizeClass as V, withCtx as Z, ref as he, provide as _n, h as Ye, TransitionGroup as xn, pushScopeId as kn, popScopeId as Cn, toRefs as me, renderSlot as B, createCommentVNode as Q, createElementVNode as G, nextTick as Sn, computed as P, resolveComponent as it, normalizeProps as ye, Fragment as Ft, Comment as $n, withDirectives as Mt, isRef as Fr, vModelDynamic as Tn, renderList as In, vModelSelect as Ln, vModelCheckbox as Pn, useSlots as An, getCurrentInstance as En, watch as Jt, guardReactiveProps as Se, withScopeId as Nn, normalizeStyle as xt, withKeys as Dn, createVNode as zn, getCurrentScope as On, onScopeDispose as Fn, inject as Mn, createSlots as Mr, onMounted as Bn } from "vue";
wn({});
function jn() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Br(t)) && (n && (n += " "), n += r);
  return n;
}
function Br(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = Br(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Bt = "-";
function Rn(e) {
  var t = Un(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function s(u) {
    var c = u.split(Bt);
    return c[0] === "" && c.length !== 1 && c.shift(), jr(c, t) || Hn(u);
  }
  function a(u, c) {
    var p = r[u] || [];
    return c && o[u] ? [].concat(p, o[u]) : p;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: a
  };
}
function jr(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), o = n ? jr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var s = e.join(Bt);
    return (a = t.validators.find(function(u) {
      var c = u.validator;
      return c(s);
    })) == null ? void 0 : a.classGroupId;
  }
}
var Zt = /^\[(.+)\]$/;
function Hn(e) {
  if (Zt.test(e)) {
    var t = Zt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Un(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Vn(Object.entries(e.classGroups), r);
  return o.forEach(function(s) {
    var a = s[0], u = s[1];
    Tt(u, n, a, t);
  }), n;
}
function Tt(e, t, r, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var s = o === "" ? t : Xt(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Gn(o)) {
        Tt(o(n), t, r, n);
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
      Tt(c, Xt(t, u), r, n);
    });
  });
}
function Xt(e, t) {
  var r = e;
  return t.split(Bt).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Gn(e) {
  return e.isThemeGetter;
}
function Vn(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], o = r[1], s = o.map(function(a) {
      return typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(u) {
        var c = u[0], p = u[1];
        return [t + c, p];
      })) : a;
    });
    return [n, s];
  }) : e;
}
function Wn(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(s, a) {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set: function(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}
var Rr = "!";
function qn(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], o = t.length;
  return function(s) {
    for (var a = [], u = 0, c = 0, p, g = 0; g < s.length; g++) {
      var m = s[g];
      if (u === 0) {
        if (m === n && (r || s.slice(g, g + o) === t)) {
          a.push(s.slice(c, g)), c = g + o;
          continue;
        }
        if (m === "/") {
          p = g;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    var b = a.length === 0 ? s : s.substring(c), _ = b.startsWith(Rr), k = _ ? b.substring(1) : b, C = p && p > c ? p - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: _,
      baseClassName: k,
      maybePostfixModifierPosition: C
    };
  };
}
function Kn(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function Qn(e) {
  return {
    cache: Wn(e.cacheSize),
    splitModifiers: qn(e),
    ...Rn(e)
  };
}
var Yn = /\s+/;
function Jn(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, o = t.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return e.trim().split(Yn).map(function(a) {
    var u = r(a), c = u.modifiers, p = u.hasImportantModifier, g = u.baseClassName, m = u.maybePostfixModifierPosition, b = n(m ? g.substring(0, m) : g), _ = !!m;
    if (!b) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (b = n(g), !b)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      _ = !1;
    }
    var k = Kn(c).join(":"), C = p ? k + Rr : k;
    return {
      isTailwindClass: !0,
      modifierId: C,
      classGroupId: b,
      originalClassName: a,
      hasPostfixModifier: _
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var u = a.modifierId, c = a.classGroupId, p = a.hasPostfixModifier, g = u + c;
    return s.has(g) ? !1 : (s.add(g), o(c, p).forEach(function(m) {
      return s.add(u + m);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function Zn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, s, a = u;
  function u(p) {
    var g = t[0], m = t.slice(1), b = m.reduce(function(_, k) {
      return k(_);
    }, g());
    return n = Qn(b), o = n.cache.get, s = n.cache.set, a = c, c(p);
  }
  function c(p) {
    var g = o(p);
    if (g)
      return g;
    var m = Jn(p, n);
    return s(p, m), m;
  }
  return function() {
    return a(jn.apply(null, arguments));
  };
}
function U(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Hr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xn = /^\d+\/\d+$/, eo = /* @__PURE__ */ new Set(["px", "full", "screen"]), to = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ro = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, no = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ee(e) {
  return xe(e) || eo.has(e) || Xn.test(e) || It(e);
}
function It(e) {
  return $e(e, "length", uo);
}
function oo(e) {
  return $e(e, "size", Ur);
}
function io(e) {
  return $e(e, "position", Ur);
}
function so(e) {
  return $e(e, "url", co);
}
function Je(e) {
  return $e(e, "number", xe);
}
function xe(e) {
  return !Number.isNaN(Number(e));
}
function ao(e) {
  return e.endsWith("%") && xe(e.slice(0, -1));
}
function Fe(e) {
  return er(e) || $e(e, "number", er);
}
function N(e) {
  return Hr.test(e);
}
function Me() {
  return !0;
}
function le(e) {
  return to.test(e);
}
function lo(e) {
  return $e(e, "", po);
}
function $e(e, t, r) {
  var n = Hr.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function uo(e) {
  return ro.test(e);
}
function Ur() {
  return !1;
}
function co(e) {
  return e.startsWith("url(");
}
function er(e) {
  return Number.isInteger(Number(e));
}
function po(e) {
  return no.test(e);
}
function ho() {
  var e = U("colors"), t = U("spacing"), r = U("blur"), n = U("brightness"), o = U("borderColor"), s = U("borderRadius"), a = U("borderSpacing"), u = U("borderWidth"), c = U("contrast"), p = U("grayscale"), g = U("hueRotate"), m = U("invert"), b = U("gap"), _ = U("gradientColorStops"), k = U("gradientColorStopPositions"), C = U("inset"), T = U("margin"), I = U("opacity"), $ = U("padding"), E = U("saturate"), R = U("scale"), H = U("sepia"), F = U("skew"), K = U("space"), Y = U("translate"), y = function() {
    return ["auto", "contain", "none"];
  }, h = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, i = function() {
    return ["auto", N, t];
  }, l = function() {
    return [N, t];
  }, d = function() {
    return ["", ee];
  }, f = function() {
    return ["auto", xe, N];
  }, v = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, w = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, x = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, S = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", N];
  }, W = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, M = function() {
    return [xe, Je];
  }, j = function() {
    return [xe, N];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Me],
      spacing: [ee],
      blur: ["none", "", le, N],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", le, N],
      borderSpacing: l(),
      borderWidth: d(),
      contrast: M(),
      grayscale: D(),
      hueRotate: j(),
      invert: D(),
      gap: l(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ao, It],
      inset: i(),
      margin: i(),
      opacity: M(),
      padding: l(),
      saturate: M(),
      scale: M(),
      sepia: D(),
      skew: j(),
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
        aspect: ["auto", "square", "video", N]
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
        columns: [le]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [].concat(v(), [N])
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
        overscroll: y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": y()
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
        z: ["auto", Fe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: i()
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
        flex: ["1", "auto", "initial", "none", N]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Me]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Fe]
        }, N]
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
        "grid-rows": [Me]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Fe]
        }, N]
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
        "auto-cols": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", N]
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
        justify: ["normal"].concat(S())
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
        content: ["normal"].concat(S(), ["baseline"])
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
        "place-content": [].concat(S(), ["baseline"])
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
        m: [T]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [T]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [T]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [T]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [T]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [T]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [T]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [T]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [T]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [K]
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
        "space-y": [K]
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
        w: ["auto", "min", "max", "fit", N, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", N, ee]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [le]
        }, le, N]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [N, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", N, ee]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [N, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", le, It]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Je]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Me]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", xe, Je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", N, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", N]
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
        "placeholder-opacity": [I]
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
        "text-opacity": [I]
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
        decoration: [].concat(w(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", N, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
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
        content: ["none", N]
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
        "bg-opacity": [I]
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
        bg: [].concat(v(), [io])
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
        bg: ["auto", "cover", "contain", oo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, so]
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
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(w(), ["hidden"])
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
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: w()
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
        outline: [""].concat(w())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [N, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ee]
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
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ee]
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
        shadow: ["", "inner", "none", le, lo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Me]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": x()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": x()
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
        "drop-shadow": ["", "none", le, N]
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
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
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
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: j()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", N]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: j()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", N]
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
        rotate: [Fe, N]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Y]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Y]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
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
        "will-change": ["auto", "scroll", "contents", "transform", N]
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
        stroke: [ee, Je]
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
var se = /* @__PURE__ */ Zn(ho);
const Lt = (e) => se(e);
function fo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gr = { exports: {} };
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
        var s = arguments[o];
        if (s) {
          var a = typeof s;
          if (a === "string" || a === "number")
            n.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var u = r.apply(null, s);
              u && n.push(u);
            }
          } else if (a === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              n.push(s.toString());
              continue;
            }
            for (var c in s)
              t.call(s, c) && s[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Gr);
var go = Gr.exports;
const mo = /* @__PURE__ */ fo(go), vo = {
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
}, bo = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function yo(e) {
  const t = P(() => vo[e.size.value]), r = P(() => bo[e.color.value]), n = P(() => "text-gray-200 dark:text-gray-600"), o = P(() => "animate-spin");
  return { spinnerClasses: P(() => mo(
    o.value,
    n.value,
    r.value,
    t.value
  )) };
}
const wo = /* @__PURE__ */ G("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), _o = /* @__PURE__ */ G("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), xo = [
  wo,
  _o
], Ze = /* @__PURE__ */ J({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = yo(me(t));
    return (n, o) => (L(), O("svg", {
      class: V(A(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, xo, 2));
  }
}), tr = {
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
}, rr = {
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
}, or = {
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
}, ko = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, Co = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, ir = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, kt = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], So = ["alternative", "light"];
function $o(e) {
  const t = An(), r = P(() => e.square.value ? Co[e.size.value] : ko[e.size.value]), n = P(() => {
    const s = !!e.gradient.value, a = !!e.color.value, u = e.outline.value;
    let c = "", p = "";
    if (s && u)
      kt.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (p = or.default[e.gradient.value], e.disabled.value || (c = or.hover[e.gradient.value]));
    else if (s)
      p = nr.default[e.gradient.value], e.disabled.value || (c = nr.hover[e.gradient.value]);
    else if (a && u)
      if (So.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const m = e.color.value;
        p = rr.default[m], e.disabled.value || (c = rr.hover[m]);
      }
    else {
      const m = e.color.value;
      p = tr.default[m], e.disabled.value || (c = tr.hover[m]);
    }
    let g = "";
    return e.shadow.value === "" ? e.gradient.value && kt.includes(e.gradient.value) && (g = ir[e.gradient.value]) : typeof e.shadow.value == "string" && kt.includes(e.shadow.value) && (g = ir[e.shadow.value]), [
      p,
      c,
      g,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      s && u ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((m) => m).join(" ");
  }), o = P(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((s) => s).join(" ") : "");
  return {
    wrapperClasses: n.value,
    spanClasses: o.value
  };
}
function To(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = P(() => t[e.size.value]);
  return {
    color: P(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const Io = {
  key: 0,
  class: "mr-2"
}, Lo = {
  key: 0,
  class: "mr-2"
}, Po = {
  key: 1,
  class: "ml-2"
}, Ao = {
  key: 1,
  class: "ml-2"
}, Eo = /* @__PURE__ */ J({
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
    const t = e, r = P(() => $o(me(t))), n = P(() => Lt(r.value.wrapperClasses)), o = P(() => Lt(r.value.spanClasses)), s = P(() => t.outline && t.gradient), a = P(() => t.loading && t.loadingPosition === "prefix"), u = P(() => t.loading && t.loadingPosition === "suffix"), { color: c, size: p } = To(me(t)), g = t.tag !== "a" ? it(t.tag) : "a", m = t.href ? g : "button", b = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (_, k) => (L(), q(pt(A(m)), ye({
      class: n.value,
      [A(b) || ""]: _.href,
      disabled: A(m) === "button" && _.disabled
    }), {
      default: Z(() => [
        !s.value && (_.$slots.prefix || a.value) ? (L(), O("div", Io, [
          a.value ? (L(), q(Ze, {
            key: 0,
            color: A(c),
            size: A(p)
          }, null, 8, ["color", "size"])) : B(_.$slots, "prefix", { key: 1 })
        ])) : Q("", !0),
        G("span", {
          class: V(o.value)
        }, [
          s.value && (_.$slots.prefix || a.value) ? (L(), O("span", Lo, [
            a.value ? (L(), q(Ze, {
              key: 0,
              color: A(c),
              size: A(p)
            }, null, 8, ["color", "size"])) : B(_.$slots, "prefix", { key: 1 })
          ])) : Q("", !0),
          B(_.$slots, "default"),
          s.value && (_.$slots.suffix || u.value) ? (L(), O("span", Po, [
            u.value ? (L(), q(Ze, {
              key: 0,
              color: A(c),
              size: A(p)
            }, null, 8, ["color", "size"])) : B(_.$slots, "suffix", { key: 1 })
          ])) : Q("", !0)
        ], 2),
        !s.value && (_.$slots.suffix || u.value) ? (L(), O("div", Ao, [
          u.value ? (L(), q(Ze, {
            key: 0,
            color: A(c),
            size: A(p)
          }, null, 8, ["color", "size"])) : B(_.$slots, "suffix", { key: 1 })
        ])) : Q("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
var sr;
const Vr = typeof window < "u", No = (e) => typeof e < "u", Do = (e) => typeof e == "function";
Vr && (sr = window == null ? void 0 : window.navigator) != null && sr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zo(e) {
  return typeof e == "function" ? e() : A(e);
}
function Oo(e) {
  return e;
}
function Fo(e) {
  return On() ? (Fn(e), !0) : !1;
}
function Mo(e, t, r = {}) {
  const {
    immediate: n = !0
  } = r, o = he(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function u() {
    o.value = !1, a();
  }
  function c(...p) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...p);
    }, zo(t));
  }
  return n && (o.value = !0, Vr && c()), Fo(u), {
    isPending: o,
    start: c,
    stop: u
  };
}
function Bo(e) {
  return JSON.parse(JSON.stringify(e));
}
const ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lr = "__vueuse_ssr_handlers__";
ar[lr] = ar[lr] || {};
var ur;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ur || (ur = {}));
var jo = Object.defineProperty, dr = Object.getOwnPropertySymbols, Ro = Object.prototype.hasOwnProperty, Ho = Object.prototype.propertyIsEnumerable, cr = (e, t, r) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Uo = (e, t) => {
  for (var r in t || (t = {}))
    Ro.call(t, r) && cr(e, r, t[r]);
  if (dr)
    for (var r of dr(t))
      Ho.call(t, r) && cr(e, r, t[r]);
  return e;
};
const Go = {
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
Uo({
  linear: Oo
}, Go);
function Wr(e, t, r, n = {}) {
  var o, s, a;
  const {
    clone: u = !1,
    passive: c = !1,
    eventName: p,
    deep: g = !1,
    defaultValue: m
  } = n, b = En(), _ = r || (b == null ? void 0 : b.emit) || ((o = b == null ? void 0 : b.$emit) == null ? void 0 : o.bind(b)) || ((a = (s = b == null ? void 0 : b.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(b == null ? void 0 : b.proxy));
  let k = p;
  t || (t = "modelValue"), k = p || k || `update:${t.toString()}`;
  const C = (I) => u ? Do(u) ? u(I) : Bo(I) : I, T = () => No(e[t]) ? C(e[t]) : m;
  if (c) {
    const I = T(), $ = he(I);
    return Jt(() => e[t], (E) => $.value = C(E)), Jt($, (E) => {
      (E !== e[t] || g) && _(k, E);
    }, { deep: g }), $;
  } else
    return P({
      get() {
        return T();
      },
      set(I) {
        _(k, I);
      }
    });
}
var Vo = typeof global == "object" && global && global.Object === Object && global;
const Wo = Vo;
var qo = typeof self == "object" && self && self.Object === Object && self, Ko = Wo || qo || Function("return this")();
const jt = Ko;
var Qo = jt.Symbol;
const ve = Qo;
var qr = Object.prototype, Yo = qr.hasOwnProperty, Jo = qr.toString, Be = ve ? ve.toStringTag : void 0;
function Zo(e) {
  var t = Yo.call(e, Be), r = e[Be];
  try {
    e[Be] = void 0;
    var n = !0;
  } catch {
  }
  var o = Jo.call(e);
  return n && (t ? e[Be] = r : delete e[Be]), o;
}
var Xo = Object.prototype, ei = Xo.toString;
function ti(e) {
  return ei.call(e);
}
var ri = "[object Null]", ni = "[object Undefined]", pr = ve ? ve.toStringTag : void 0;
function Rt(e) {
  return e == null ? e === void 0 ? ni : ri : pr && pr in Object(e) ? Zo(e) : ti(e);
}
function Ht(e) {
  return e != null && typeof e == "object";
}
var oi = "[object Symbol]";
function Ut(e) {
  return typeof e == "symbol" || Ht(e) && Rt(e) == oi;
}
function ii(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var si = Array.isArray;
const Ke = si;
var ai = 1 / 0, hr = ve ? ve.prototype : void 0, fr = hr ? hr.toString : void 0;
function Kr(e) {
  if (typeof e == "string")
    return e;
  if (Ke(e))
    return ii(e, Kr) + "";
  if (Ut(e))
    return fr ? fr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ai ? "-0" : t;
}
function st(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function li(e) {
  return e;
}
var ui = "[object AsyncFunction]", di = "[object Function]", ci = "[object GeneratorFunction]", pi = "[object Proxy]";
function hi(e) {
  if (!st(e))
    return !1;
  var t = Rt(e);
  return t == di || t == ci || t == ui || t == pi;
}
var fi = jt["__core-js_shared__"];
const Ct = fi;
var gr = function() {
  var e = /[^.]+$/.exec(Ct && Ct.keys && Ct.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function gi(e) {
  return !!gr && gr in e;
}
var mi = Function.prototype, vi = mi.toString;
function bi(e) {
  if (e != null) {
    try {
      return vi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var yi = /[\\^$.*+?()[\]{}|]/g, wi = /^\[object .+?Constructor\]$/, _i = Function.prototype, xi = Object.prototype, ki = _i.toString, Ci = xi.hasOwnProperty, Si = RegExp(
  "^" + ki.call(Ci).replace(yi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $i(e) {
  if (!st(e) || gi(e))
    return !1;
  var t = hi(e) ? Si : wi;
  return t.test(bi(e));
}
function Ti(e, t) {
  return e == null ? void 0 : e[t];
}
function Gt(e, t) {
  var r = Ti(e, t);
  return $i(r) ? r : void 0;
}
function Ii(e, t, r) {
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
var Li = 800, Pi = 16, Ai = Date.now;
function Ei(e) {
  var t = 0, r = 0;
  return function() {
    var n = Ai(), o = Pi - (n - r);
    if (r = n, o > 0) {
      if (++t >= Li)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ni(e) {
  return function() {
    return e;
  };
}
var Di = function() {
  try {
    var e = Gt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const at = Di;
var zi = at ? function(e, t) {
  return at(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ni(t),
    writable: !0
  });
} : li;
const Oi = zi;
var Fi = Ei(Oi);
const Mi = Fi;
var Bi = 9007199254740991, ji = /^(?:0|[1-9]\d*)$/;
function Qr(e, t) {
  var r = typeof e;
  return t = t ?? Bi, !!t && (r == "number" || r != "symbol" && ji.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ri(e, t, r) {
  t == "__proto__" && at ? at(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Yr(e, t) {
  return e === t || e !== e && t !== t;
}
var Hi = Object.prototype, Ui = Hi.hasOwnProperty;
function Gi(e, t, r) {
  var n = e[t];
  (!(Ui.call(e, t) && Yr(n, r)) || r === void 0 && !(t in e)) && Ri(e, t, r);
}
var mr = Math.max;
function Vi(e, t, r) {
  return t = mr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, s = mr(n.length - t, 0), a = Array(s); ++o < s; )
      a[o] = n[t + o];
    o = -1;
    for (var u = Array(t + 1); ++o < t; )
      u[o] = n[o];
    return u[t] = r(a), Ii(e, this, u);
  };
}
var Wi = 9007199254740991;
function qi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wi;
}
var Ki = "[object Arguments]";
function vr(e) {
  return Ht(e) && Rt(e) == Ki;
}
var Jr = Object.prototype, Qi = Jr.hasOwnProperty, Yi = Jr.propertyIsEnumerable, Ji = vr(/* @__PURE__ */ function() {
  return arguments;
}()) ? vr : function(e) {
  return Ht(e) && Qi.call(e, "callee") && !Yi.call(e, "callee");
};
const Zr = Ji;
var Zi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xi = /^\w*$/;
function es(e, t) {
  if (Ke(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ut(e) ? !0 : Xi.test(e) || !Zi.test(e) || t != null && e in Object(t);
}
var ts = Gt(Object, "create");
const Ge = ts;
function rs() {
  this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
}
function ns(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var os = "__lodash_hash_undefined__", is = Object.prototype, ss = is.hasOwnProperty;
function as(e) {
  var t = this.__data__;
  if (Ge) {
    var r = t[e];
    return r === os ? void 0 : r;
  }
  return ss.call(t, e) ? t[e] : void 0;
}
var ls = Object.prototype, us = ls.hasOwnProperty;
function ds(e) {
  var t = this.__data__;
  return Ge ? t[e] !== void 0 : us.call(t, e);
}
var cs = "__lodash_hash_undefined__";
function ps(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ge && t === void 0 ? cs : t, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = rs;
Ce.prototype.delete = ns;
Ce.prototype.get = as;
Ce.prototype.has = ds;
Ce.prototype.set = ps;
function hs() {
  this.__data__ = [], this.size = 0;
}
function ht(e, t) {
  for (var r = e.length; r--; )
    if (Yr(e[r][0], t))
      return r;
  return -1;
}
var fs = Array.prototype, gs = fs.splice;
function ms(e) {
  var t = this.__data__, r = ht(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : gs.call(t, r, 1), --this.size, !0;
}
function vs(e) {
  var t = this.__data__, r = ht(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function bs(e) {
  return ht(this.__data__, e) > -1;
}
function ys(e, t) {
  var r = this.__data__, n = ht(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = hs;
De.prototype.delete = ms;
De.prototype.get = vs;
De.prototype.has = bs;
De.prototype.set = ys;
var ws = Gt(jt, "Map");
const _s = ws;
function xs() {
  this.size = 0, this.__data__ = {
    hash: new Ce(),
    map: new (_s || De)(),
    string: new Ce()
  };
}
function ks(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ft(e, t) {
  var r = e.__data__;
  return ks(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Cs(e) {
  var t = ft(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ss(e) {
  return ft(this, e).get(e);
}
function $s(e) {
  return ft(this, e).has(e);
}
function Ts(e, t) {
  var r = ft(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = xs;
Te.prototype.delete = Cs;
Te.prototype.get = Ss;
Te.prototype.has = $s;
Te.prototype.set = Ts;
var Is = "Expected a function";
function Vt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Is);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, n);
    return r.cache = s.set(o, a) || s, a;
  };
  return r.cache = new (Vt.Cache || Te)(), r;
}
Vt.Cache = Te;
var Ls = 500;
function Ps(e) {
  var t = Vt(e, function(n) {
    return r.size === Ls && r.clear(), n;
  }), r = t.cache;
  return t;
}
var As = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Es = /\\(\\)?/g, Ns = Ps(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(As, function(r, n, o, s) {
    t.push(o ? s.replace(Es, "$1") : n || r);
  }), t;
});
const Ds = Ns;
function zs(e) {
  return e == null ? "" : Kr(e);
}
function gt(e, t) {
  return Ke(e) ? e : es(e, t) ? [e] : Ds(zs(e));
}
var Os = 1 / 0;
function Wt(e) {
  if (typeof e == "string" || Ut(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Os ? "-0" : t;
}
function Fs(e, t) {
  t = gt(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Wt(t[r++])];
  return r && r == n ? e : void 0;
}
function Ms(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var br = ve ? ve.isConcatSpreadable : void 0;
function Bs(e) {
  return Ke(e) || Zr(e) || !!(br && e && e[br]);
}
function Xr(e, t, r, n, o) {
  var s = -1, a = e.length;
  for (r || (r = Bs), o || (o = []); ++s < a; ) {
    var u = e[s];
    t > 0 && r(u) ? t > 1 ? Xr(u, t - 1, r, n, o) : Ms(o, u) : n || (o[o.length] = u);
  }
  return o;
}
function js(e) {
  var t = e == null ? 0 : e.length;
  return t ? Xr(e, 1) : [];
}
function Rs(e) {
  return Mi(Vi(e, void 0, js), e + "");
}
function Hs(e, t) {
  return e != null && t in Object(e);
}
function Us(e, t, r) {
  t = gt(t, e);
  for (var n = -1, o = t.length, s = !1; ++n < o; ) {
    var a = Wt(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != o ? s : (o = e == null ? 0 : e.length, !!o && qi(o) && Qr(a, o) && (Ke(e) || Zr(e)));
}
function Gs(e, t) {
  return e != null && Us(e, t, Hs);
}
function Vs(e, t, r, n) {
  if (!st(e))
    return e;
  t = gt(t, e);
  for (var o = -1, s = t.length, a = s - 1, u = e; u != null && ++o < s; ) {
    var c = Wt(t[o]), p = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != a) {
      var g = u[c];
      p = n ? n(g, c, u) : void 0, p === void 0 && (p = st(g) ? g : Qr(t[o + 1]) ? [] : {});
    }
    Gi(u, c, p), u = u[c];
  }
  return e;
}
function Ws(e, t, r) {
  for (var n = -1, o = t.length, s = {}; ++n < o; ) {
    var a = t[n], u = Fs(e, a);
    r(u, a) && Vs(s, gt(a, e), u);
  }
  return s;
}
function qs(e, t) {
  return Ws(e, t, function(r, n) {
    return Gs(e, n);
  });
}
var Ks = Rs(function(e, t) {
  return e == null ? {} : qs(e, t);
});
const Qs = Ks;
function Pt(e, t = !0, r = []) {
  return e.forEach((n) => {
    if (n !== null) {
      if (typeof n != "object") {
        (typeof n == "string" || typeof n == "number") && r.push(tt(String(n)));
        return;
      }
      if (Array.isArray(n)) {
        Pt(n, t, r);
        return;
      }
      if (n.type === Ft) {
        if (n.children === null)
          return;
        Array.isArray(n.children) && Pt(n.children, t, r);
      } else
        n.type !== $n && r.push(n);
    }
  }), r;
}
function Ys(e, t = "default", r = void 0) {
  const n = e[t];
  if (!n)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = Pt(n(r));
  return o.length === 1 ? o[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const Js = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Zs(e, t) {
  Object.entries(Js).forEach(([, r]) => {
    r.forEach((n) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const o = e.props[n], s = t[n];
      o ? e.props[n] = (...a) => {
        o(...a), s(...a);
      } : e.props[n] = s;
    });
  });
}
J({
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
    }, r = Ys(e, "default"), n = [
      t
    ];
    return r != null && r.props && n.push(
      Qs(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Zs(
      r,
      {
        onBlur: (o) => {
          n.forEach((s) => {
            var a;
            (a = s == null ? void 0 : s.onBlur) == null || a.call(s, o);
          });
        },
        onFocus: (o) => {
          n.forEach((s) => {
            var a;
            (a = s == null ? void 0 : s.onFocus) == null || a.call(s, o);
          });
        },
        onClick: (o) => {
          n.forEach((s) => {
            var a;
            (a = s == null ? void 0 : s.onClick) == null || a.call(s, o);
          });
        },
        onMouseenter: (o) => {
          n.forEach((s) => {
            var a;
            (a = s == null ? void 0 : s.onMouseenter) == null || a.call(s, o);
          });
        },
        onMouseleave: (o) => {
          n.forEach((s) => {
            var a;
            (a = s == null ? void 0 : s.onMouseleave) == null || a.call(s, o);
          });
        }
      }
    ), r;
  }
});
(/* @__PURE__ */ new Date()).getFullYear();
const Xs = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, ea = (e, t = Xs) => {
  const r = Object.keys(t).find((n) => e.includes(n));
  return r ? t[r](e) : e.substring(0, e.indexOf("-"));
};
function rt(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const n = Array.isArray(r) ? Array.from(r).map((p) => p.split(" ")).flat() : r.split(" "), o = n.map((p) => ea(p)), s = o.filter((p) => !t.types.includes(p)), a = [...o.filter((p) => t.types.includes(p)), ...s], u = [.../* @__PURE__ */ new Set([...t.types, ...a])], c = u.map((p) => {
      if (a.includes(p)) {
        const m = o.indexOf(p);
        if (m >= 0)
          return n[m] || "";
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
const ta = "flowbite-themable-injection-key", Pe = {
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
function ra(e) {
  const t = Mn(ta, he(null)), r = P(() => e || t.value), n = P(() => !!(t != null && t.value)), o = P(
    () => r.value ? Pe[r.value].background : ""
  ), s = P(
    () => r.value ? Pe[r.value].border : ""
  ), a = P(() => (t == null ? void 0 : t.value) || void 0), u = P(
    () => r.value ? Pe[r.value].disabled : ""
  ), c = P(
    () => r.value ? Pe[r.value].focus : ""
  ), p = P(
    () => r.value ? Pe[r.value].hover : ""
  ), g = P(
    () => r.value ? Pe[r.value].text : ""
  );
  return {
    backgroundClasses: o,
    borderClasses: s,
    color: a,
    disabledClasses: u,
    focusClasses: c,
    hoverClasses: p,
    isActive: n,
    textClasses: g
  };
}
const na = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, oa = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, yr = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", wr = "text-sm font-normal";
function ia(e) {
  const t = P(() => na[e.type.value]), r = P(() => {
    const o = oa[e.alignment.value];
    return e.divide.value ? rt(yr, "dark:divide-gray-700 divide-x divide-gray-200", o) : rt(yr, o);
  }), n = P(() => e.type.value !== "empty" && e.divide.value ? rt(wr, "pl-3") : wr);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: n
  };
}
function sa(e) {
  var c;
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: n,
    focusClasses: o,
    hoverClasses: s,
    isActive: a,
    textClasses: u
  } = ra((c = e.theme) == null ? void 0 : c.value);
  return {
    classes: P(() => {
      if (!a.value)
        return "";
      const p = [];
      return e.apply.value.includes("text") && p.push(u.value), e.apply.value.includes("border") && p.push(r.value), e.apply.value.includes("background") && p.push(t.value), e.apply.value.includes("hover") && p.push(s.value), e.apply.value.includes("disabled") && p.push(n.value), e.apply.value.includes("focus") && p.push(o.value), p.join(" ");
    })
  };
}
const aa = /* @__PURE__ */ J({
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
    const t = e, r = Ot(), { classes: n } = sa(me(t)), o = P(() => r.class || "");
    return (s, a) => (L(), q(pt(e.tag), {
      class: V(A(rt)(o.value, A(n)))
    }, {
      default: Z(() => [
        B(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), la = {
  key: 1,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ua = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), da = [
  ua
], ca = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, pa = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), ha = [
  pa
], fa = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ga = /* @__PURE__ */ G("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), ma = [
  ga
], va = /* @__PURE__ */ G("span", { class: "sr-only" }, "Close", -1), ba = /* @__PURE__ */ G("svg", {
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
], -1), ya = [
  va,
  ba
], _r = /* @__PURE__ */ J({
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
    const r = e, n = he(!0), {
      typeClasses: o,
      wrapperClasses: s,
      contentClasses: a
    } = ia(me(r)), u = () => {
      t("close"), n.value = !1;
    };
    return (c, p) => n.value ? (L(), O("div", {
      key: 0,
      id: "toast-default",
      class: V(A(s)),
      role: "alert"
    }, [
      e.type !== "empty" || c.$slots.icon ? (L(), q(aa, {
        key: 0,
        apply: ["background", "text"],
        class: V(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", A(o)])
      }, {
        default: Z(() => [
          c.$slots.icon ? B(c.$slots, "icon", {
            key: 0,
            class: V({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (L(), O("svg", la, da)) : e.type === "danger" ? (L(), O("svg", ca, ha)) : e.type === "warning" ? (L(), O("svg", fa, ma)) : Q("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : Q("", !0),
      G("div", {
        class: V([A(a), { "ml-3": c.$slots.icon || e.type !== "empty" }])
      }, [
        B(c.$slots, "default")
      ], 2),
      e.closable ? (L(), O("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: u
      }, ya)) : Q("", !0)
    ], 2)) : Q("", !0);
  }
}), wa = "flowbite-toast-injection-key";
J({
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
    const e = he([]), t = (s, a) => {
      Mo(() => o(s), a);
    }, r = (s) => {
      const a = parseInt(((/* @__PURE__ */ new Date()).getTime() * Math.random()).toString()).toString();
      return e.value.push({
        id: a,
        ...s
      }), s.time > 0 && t(a, s.time), a;
    }, n = () => {
      if (e.value.length === 0)
        return "";
      const s = e.value[e.value.length - 1].id;
      return e.value.pop(), s;
    }, o = (s) => {
      const a = e.value.findIndex((u) => u.id === s);
      return a >= 0 && e.value.splice(a, 1), a >= 0;
    };
    return _n(wa, {
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
    return Ye("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      Ye(
        xn,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (o) => o.component ? Ye(
              o.component,
              {
                key: o.id,
                onClose: () => n(o.id),
                ...o.componentProps ? o.componentProps : {}
              },
              () => o.text
            ) : Ye(
              _r,
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
function te(e) {
  return e.split("-")[1];
}
function qt(e) {
  return e === "y" ? "height" : "width";
}
function ne(e) {
  return e.split("-")[0];
}
function ze(e) {
  return ["top", "bottom"].includes(ne(e)) ? "x" : "y";
}
function xr(e, t, r) {
  let { reference: n, floating: o } = e;
  const s = n.x + n.width / 2 - o.width / 2, a = n.y + n.height / 2 - o.height / 2, u = ze(t), c = qt(u), p = n[c] / 2 - o[c] / 2, g = u === "x";
  let m;
  switch (ne(t)) {
    case "top":
      m = { x: s, y: n.y - o.height };
      break;
    case "bottom":
      m = { x: s, y: n.y + n.height };
      break;
    case "right":
      m = { x: n.x + n.width, y: a };
      break;
    case "left":
      m = { x: n.x - o.width, y: a };
      break;
    default:
      m = { x: n.x, y: n.y };
  }
  switch (te(t)) {
    case "start":
      m[u] -= p * (r && g ? -1 : 1);
      break;
    case "end":
      m[u] += p * (r && g ? -1 : 1);
  }
  return m;
}
const _a = async (e, t, r) => {
  const { placement: n = "bottom", strategy: o = "absolute", middleware: s = [], platform: a } = r, u = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let p = await a.getElementRects({ reference: e, floating: t, strategy: o }), { x: g, y: m } = xr(p, n, c), b = n, _ = {}, k = 0;
  for (let C = 0; C < u.length; C++) {
    const { name: T, fn: I } = u[C], { x: $, y: E, data: R, reset: H } = await I({ x: g, y: m, initialPlacement: n, placement: b, strategy: o, middlewareData: _, rects: p, platform: a, elements: { reference: e, floating: t } });
    g = $ ?? g, m = E ?? m, _ = { ..._, [T]: { ..._[T], ...R } }, H && k <= 50 && (k++, typeof H == "object" && (H.placement && (b = H.placement), H.rects && (p = H.rects === !0 ? await a.getElementRects({ reference: e, floating: t, strategy: o }) : H.rects), { x: g, y: m } = xr(p, b, c)), C = -1);
  }
  return { x: g, y: m, placement: b, strategy: o, middlewareData: _ };
};
function Ie(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function en(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function je(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function mt(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: s, rects: a, elements: u, strategy: c } = e, { boundary: p = "clippingAncestors", rootBoundary: g = "viewport", elementContext: m = "floating", altBoundary: b = !1, padding: _ = 0 } = Ie(t, e), k = en(_), C = u[b ? m === "floating" ? "reference" : "floating" : m], T = je(await s.getClippingRect({ element: (r = await (s.isElement == null ? void 0 : s.isElement(C))) == null || r ? C : C.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(u.floating)), boundary: p, rootBoundary: g, strategy: c })), I = m === "floating" ? { ...a.floating, x: n, y: o } : a.reference, $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u.floating)), E = await (s.isElement == null ? void 0 : s.isElement($)) && await (s.getScale == null ? void 0 : s.getScale($)) || { x: 1, y: 1 }, R = je(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: I, offsetParent: $, strategy: c }) : I);
  return { top: (T.top - R.top + k.top) / E.y, bottom: (R.bottom - T.bottom + k.bottom) / E.y, left: (T.left - R.left + k.left) / E.x, right: (R.right - T.right + k.right) / E.x };
}
const Ve = Math.min, _e = Math.max;
function At(e, t, r) {
  return _e(e, Ve(t, r));
}
const xa = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: n, placement: o, rects: s, platform: a, elements: u } = t, { element: c, padding: p = 0 } = Ie(e, t) || {};
  if (c == null)
    return {};
  const g = en(p), m = { x: r, y: n }, b = ze(o), _ = qt(b), k = await a.getDimensions(c), C = b === "y", T = C ? "top" : "left", I = C ? "bottom" : "right", $ = C ? "clientHeight" : "clientWidth", E = s.reference[_] + s.reference[b] - m[b] - s.floating[_], R = m[b] - s.reference[b], H = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
  let F = H ? H[$] : 0;
  F && await (a.isElement == null ? void 0 : a.isElement(H)) || (F = u.floating[$] || s.floating[_]);
  const K = E / 2 - R / 2, Y = F / 2 - k[_] / 2 - 1, y = Ve(g[T], Y), h = Ve(g[I], Y), i = y, l = F - k[_] - h, d = F / 2 - k[_] / 2 + K, f = At(i, d, l), v = te(o) != null && d != f && s.reference[_] / 2 - (d < i ? y : h) - k[_] / 2 < 0 ? d < i ? i - d : l - d : 0;
  return { [b]: m[b] - v, data: { [b]: f, centerOffset: d - f + v } };
} }), ka = ["top", "right", "bottom", "left"], kr = ka.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), Ca = { left: "right", right: "left", bottom: "top", top: "bottom" };
function lt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ca[t]);
}
function tn(e, t, r) {
  r === void 0 && (r = !1);
  const n = te(e), o = ze(e), s = qt(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = lt(a)), { main: a, cross: lt(a) };
}
const Sa = { start: "end", end: "start" };
function nt(e) {
  return e.replace(/start|end/g, (t) => Sa[t]);
}
const $a = function(e) {
  return e === void 0 && (e = {}), { name: "autoPlacement", options: e, async fn(t) {
    var r, n, o;
    const { rects: s, middlewareData: a, placement: u, platform: c, elements: p } = t, { crossAxis: g = !1, alignment: m, allowedPlacements: b = kr, autoAlignment: _ = !0, ...k } = Ie(e, t), C = m !== void 0 || b === kr ? function(h, i, l) {
      return (h ? [...l.filter((d) => te(d) === h), ...l.filter((d) => te(d) !== h)] : l.filter((d) => ne(d) === d)).filter((d) => !h || te(d) === h || !!i && nt(d) !== d);
    }(m || null, _, b) : b, T = await mt(t, k), I = ((r = a.autoPlacement) == null ? void 0 : r.index) || 0, $ = C[I];
    if ($ == null)
      return {};
    const { main: E, cross: R } = tn($, s, await (c.isRTL == null ? void 0 : c.isRTL(p.floating)));
    if (u !== $)
      return { reset: { placement: C[0] } };
    const H = [T[ne($)], T[E], T[R]], F = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], { placement: $, overflows: H }], K = C[I + 1];
    if (K)
      return { data: { index: I + 1, overflows: F }, reset: { placement: K } };
    const Y = F.map((h) => {
      const i = te(h.placement);
      return [h.placement, i && g ? h.overflows.slice(0, 2).reduce((l, d) => l + d, 0) : h.overflows[0], h.overflows];
    }).sort((h, i) => h[1] - i[1]), y = ((o = Y.filter((h) => h[2].slice(0, te(h[0]) ? 2 : 3).every((i) => i <= 0))[0]) == null ? void 0 : o[0]) || Y[0][0];
    return y !== u ? { data: { index: I + 1, overflows: F }, reset: { placement: y } } : {};
  } };
}, Ta = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: o, rects: s, initialPlacement: a, platform: u, elements: c } = t, { mainAxis: p = !0, crossAxis: g = !0, fallbackPlacements: m, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: _ = "none", flipAlignment: k = !0, ...C } = Ie(e, t), T = ne(n), I = ne(a) === a, $ = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), E = m || (I || !k ? [lt(a)] : function(i) {
      const l = lt(i);
      return [nt(i), l, nt(l)];
    }(a));
    m || _ === "none" || E.push(...function(i, l, d, f) {
      const v = te(i);
      let w = function(x, S, D) {
        const W = ["left", "right"], M = ["right", "left"], j = ["top", "bottom"], ae = ["bottom", "top"];
        switch (x) {
          case "top":
          case "bottom":
            return D ? S ? M : W : S ? W : M;
          case "left":
          case "right":
            return S ? j : ae;
          default:
            return [];
        }
      }(ne(i), d === "start", f);
      return v && (w = w.map((x) => x + "-" + v), l && (w = w.concat(w.map(nt)))), w;
    }(a, k, _, $));
    const R = [a, ...E], H = await mt(t, C), F = [];
    let K = ((r = o.flip) == null ? void 0 : r.overflows) || [];
    if (p && F.push(H[T]), g) {
      const { main: i, cross: l } = tn(n, s, $);
      F.push(H[i], H[l]);
    }
    if (K = [...K, { placement: n, overflows: F }], !F.every((i) => i <= 0)) {
      var Y, y;
      const i = (((Y = o.flip) == null ? void 0 : Y.index) || 0) + 1, l = R[i];
      if (l)
        return { data: { index: i, overflows: K }, reset: { placement: l } };
      let d = (y = K.filter((f) => f.overflows[0] <= 0).sort((f, v) => f.overflows[1] - v.overflows[1])[0]) == null ? void 0 : y.placement;
      if (!d)
        switch (b) {
          case "bestFit": {
            var h;
            const f = (h = K.map((v) => [v.placement, v.overflows.filter((w) => w > 0).reduce((w, x) => w + x, 0)]).sort((v, w) => v[1] - w[1])[0]) == null ? void 0 : h[0];
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
}, Ia = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, o = await async function(s, a) {
      const { placement: u, platform: c, elements: p } = s, g = await (c.isRTL == null ? void 0 : c.isRTL(p.floating)), m = ne(u), b = te(u), _ = ze(u) === "x", k = ["left", "top"].includes(m) ? -1 : 1, C = g && _ ? -1 : 1, T = Ie(a, s);
      let { mainAxis: I, crossAxis: $, alignmentAxis: E } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return b && typeof E == "number" && ($ = b === "end" ? -1 * E : E), _ ? { x: $ * C, y: I * k } : { x: I * k, y: $ * C };
    }(t, e);
    return { x: r + o.x, y: n + o.y, data: o };
  } };
};
function La(e) {
  return e === "x" ? "y" : "x";
}
const Pa = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: o } = t, { mainAxis: s = !0, crossAxis: a = !1, limiter: u = { fn: (T) => {
      let { x: I, y: $ } = T;
      return { x: I, y: $ };
    } }, ...c } = Ie(e, t), p = { x: r, y: n }, g = await mt(t, c), m = ze(ne(o)), b = La(m);
    let _ = p[m], k = p[b];
    if (s) {
      const T = m === "y" ? "bottom" : "right";
      _ = At(_ + g[m === "y" ? "top" : "left"], _, _ - g[T]);
    }
    if (a) {
      const T = b === "y" ? "bottom" : "right";
      k = At(k + g[b === "y" ? "top" : "left"], k, k - g[T]);
    }
    const C = u.fn({ ...t, [m]: _, [b]: k });
    return { ...C, data: { x: C.x - r, y: C.y - n } };
  } };
}, Aa = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: r, rects: n, platform: o, elements: s } = t, { apply: a = () => {
    }, ...u } = Ie(e, t), c = await mt(t, u), p = ne(r), g = te(r), m = ze(r) === "x", { width: b, height: _ } = n.floating;
    let k, C;
    p === "top" || p === "bottom" ? (k = p, C = g === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (C = p, k = g === "end" ? "top" : "bottom");
    const T = _ - c[k], I = b - c[C], $ = !t.middlewareData.shift;
    let E = T, R = I;
    if (m) {
      const F = b - c.left - c.right;
      R = g || $ ? Ve(I, F) : F;
    } else {
      const F = _ - c.top - c.bottom;
      E = g || $ ? Ve(T, F) : F;
    }
    if ($ && !g) {
      const F = _e(c.left, 0), K = _e(c.right, 0), Y = _e(c.top, 0), y = _e(c.bottom, 0);
      m ? R = b - 2 * (F !== 0 || K !== 0 ? F + K : _e(c.left, c.right)) : E = _ - 2 * (Y !== 0 || y !== 0 ? Y + y : _e(c.top, c.bottom));
    }
    await a({ ...t, availableWidth: R, availableHeight: E });
    const H = await o.getDimensions(s.floating);
    return b !== H.width || _ !== H.height ? { reset: { rects: !0 } } : {};
  } };
};
function X(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(e) {
  return X(e).getComputedStyle(e);
}
const Cr = Math.min, Re = Math.max, ut = Math.round;
function rn(e) {
  const t = oe(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const o = e.offsetWidth, s = e.offsetHeight, a = ut(r) !== o || ut(n) !== s;
  return a && (r = o, n = s), { width: r, height: n, fallback: a };
}
function be(e) {
  return on(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Xe;
function nn() {
  if (Xe)
    return Xe;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Xe = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Xe) : navigator.userAgent;
}
function ie(e) {
  return e instanceof X(e).HTMLElement;
}
function fe(e) {
  return e instanceof X(e).Element;
}
function on(e) {
  return e instanceof X(e).Node;
}
function Sr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof X(e).ShadowRoot || e instanceof ShadowRoot;
}
function vt(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function Ea(e) {
  return ["table", "td", "th"].includes(be(e));
}
function Et(e) {
  const t = /firefox/i.test(nn()), r = oe(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((o) => r.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const s = r.contain;
    return s != null && s.includes(o);
  });
}
function sn() {
  return !/^((?!chrome|android).)*safari/i.test(nn());
}
function Kt(e) {
  return ["html", "body", "#document"].includes(be(e));
}
function an(e) {
  return fe(e) ? e : e.contextElement;
}
const ln = { x: 1, y: 1 };
function Ee(e) {
  const t = an(e);
  if (!ie(t))
    return ln;
  const r = t.getBoundingClientRect(), { width: n, height: o, fallback: s } = rn(t);
  let a = (s ? ut(r.width) : r.width) / n, u = (s ? ut(r.height) : r.height) / o;
  return a && Number.isFinite(a) || (a = 1), u && Number.isFinite(u) || (u = 1), { x: a, y: u };
}
function We(e, t, r, n) {
  var o, s;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), u = an(e);
  let c = ln;
  t && (n ? fe(n) && (c = Ee(n)) : c = Ee(e));
  const p = u ? X(u) : window, g = !sn() && r;
  let m = (a.left + (g && ((o = p.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, b = (a.top + (g && ((s = p.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / c.y, _ = a.width / c.x, k = a.height / c.y;
  if (u) {
    const C = X(u), T = n && fe(n) ? X(n) : n;
    let I = C.frameElement;
    for (; I && n && T !== C; ) {
      const $ = Ee(I), E = I.getBoundingClientRect(), R = getComputedStyle(I);
      E.x += (I.clientLeft + parseFloat(R.paddingLeft)) * $.x, E.y += (I.clientTop + parseFloat(R.paddingTop)) * $.y, m *= $.x, b *= $.y, _ *= $.x, k *= $.y, m += E.x, b += E.y, I = X(I).frameElement;
    }
  }
  return { width: _, height: k, top: b, right: m + _, bottom: b + k, left: m, x: m, y: b };
}
function ge(e) {
  return ((on(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function bt(e) {
  return fe(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function un(e) {
  return We(ge(e)).left + bt(e).scrollLeft;
}
function qe(e) {
  if (be(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Sr(e) && e.host || ge(e);
  return Sr(t) ? t.host : t;
}
function dn(e) {
  const t = qe(e);
  return Kt(t) ? t.ownerDocument.body : ie(t) && vt(t) ? t : dn(t);
}
function dt(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = dn(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = X(n);
  return o ? t.concat(s, s.visualViewport || [], vt(n) ? n : []) : t.concat(n, dt(n));
}
function $r(e, t, r) {
  return t === "viewport" ? je(function(n, o) {
    const s = X(n), a = ge(n), u = s.visualViewport;
    let c = a.clientWidth, p = a.clientHeight, g = 0, m = 0;
    if (u) {
      c = u.width, p = u.height;
      const b = sn();
      (b || !b && o === "fixed") && (g = u.offsetLeft, m = u.offsetTop);
    }
    return { width: c, height: p, x: g, y: m };
  }(e, r)) : fe(t) ? je(function(n, o) {
    const s = We(n, !0, o === "fixed"), a = s.top + n.clientTop, u = s.left + n.clientLeft, c = ie(n) ? Ee(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: u * c.x, y: a * c.y };
  }(t, r)) : je(function(n) {
    const o = ge(n), s = bt(n), a = n.ownerDocument.body, u = Re(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), c = Re(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let p = -s.scrollLeft + un(n);
    const g = -s.scrollTop;
    return oe(a).direction === "rtl" && (p += Re(o.clientWidth, a.clientWidth) - u), { width: u, height: c, x: p, y: g };
  }(ge(e)));
}
function Tr(e) {
  return ie(e) && oe(e).position !== "fixed" ? e.offsetParent : null;
}
function Ir(e) {
  const t = X(e);
  let r = Tr(e);
  for (; r && Ea(r) && oe(r).position === "static"; )
    r = Tr(r);
  return r && (be(r) === "html" || be(r) === "body" && oe(r).position === "static" && !Et(r)) ? t : r || function(n) {
    let o = qe(n);
    for (; ie(o) && !Kt(o); ) {
      if (Et(o))
        return o;
      o = qe(o);
    }
    return null;
  }(e) || t;
}
function Na(e, t, r) {
  const n = ie(t), o = ge(t), s = We(e, !0, r === "fixed", t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((be(t) !== "body" || vt(o)) && (a = bt(t)), ie(t)) {
      const c = We(t, !0);
      u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop;
    } else
      o && (u.x = un(o));
  return { x: s.left + a.scrollLeft - u.x, y: s.top + a.scrollTop - u.y, width: s.width, height: s.height };
}
const Da = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const s = r === "clippingAncestors" ? function(p, g) {
    const m = g.get(p);
    if (m)
      return m;
    let b = dt(p).filter((T) => fe(T) && be(T) !== "body"), _ = null;
    const k = oe(p).position === "fixed";
    let C = k ? qe(p) : p;
    for (; fe(C) && !Kt(C); ) {
      const T = oe(C), I = Et(C);
      (k ? I || _ : I || T.position !== "static" || !_ || !["absolute", "fixed"].includes(_.position)) ? _ = T : b = b.filter(($) => $ !== C), C = qe(C);
    }
    return g.set(p, b), b;
  }(t, this._c) : [].concat(r), a = [...s, n], u = a[0], c = a.reduce((p, g) => {
    const m = $r(t, g, o);
    return p.top = Re(m.top, p.top), p.right = Cr(m.right, p.right), p.bottom = Cr(m.bottom, p.bottom), p.left = Re(m.left, p.left), p;
  }, $r(t, u, o));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const o = ie(r), s = ge(r);
  if (r === s)
    return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((o || !o && n !== "fixed") && ((be(r) !== "body" || vt(s)) && (a = bt(r)), ie(r))) {
    const p = We(r);
    u = Ee(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - a.scrollLeft * u.x + c.x, y: t.y * u.y - a.scrollTop * u.y + c.y };
}, isElement: fe, getDimensions: function(e) {
  return ie(e) ? rn(e) : e.getBoundingClientRect();
}, getOffsetParent: Ir, getDocumentElement: ge, getScale: Ee, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const o = this.getOffsetParent || Ir, s = this.getDimensions;
  return { reference: Na(t, await o(r), n), floating: { x: 0, y: 0, ...await s(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => oe(e).direction === "rtl" }, za = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = { platform: Da, ...r }, s = { ...o.platform, _c: n };
  return _a(e, t, { ...o, platform: s });
}, ke = {
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
function Nt(e, t) {
  let r = ke.themes[e] || {}, n;
  do
    n = r[t], typeof n > "u" ? r.$extend ? r = ke.themes[r.$extend] || {} : (r = null, n = ke[t]) : r = null;
  while (r);
  return n;
}
function Oa(e) {
  const t = [e];
  let r = ke.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = ke.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((n) => `v-popper--theme-${n}`);
}
function Lr(e) {
  const t = [e];
  let r = ke.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = ke.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let Ne = !1;
if (typeof window < "u") {
  Ne = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Ne = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let cn = !1;
typeof window < "u" && typeof navigator < "u" && (cn = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Fa = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Pr = {
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
function Er(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function St() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const re = [];
let we = null;
const Nr = {};
function Dr(e) {
  let t = Nr[e];
  return t || (t = Nr[e] = []), t;
}
let Dt = function() {
};
typeof window < "u" && (Dt = window.Element);
function z(e) {
  return function(t) {
    return Nt(t.theme, e);
  };
}
const $t = "__floating-vue__popper", pn = () => J({
  name: "VPopper",
  provide() {
    return {
      [$t]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [$t]: { default: null }
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
      default: z("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: z("positioningDisabled")
    },
    placement: {
      type: String,
      default: z("placement"),
      validator: (e) => Fa.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: z("delay")
    },
    distance: {
      type: [Number, String],
      default: z("distance")
    },
    skidding: {
      type: [Number, String],
      default: z("skidding")
    },
    triggers: {
      type: Array,
      default: z("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: z("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: z("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: z("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: z("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: z("popperHideTriggers")
    },
    container: {
      type: [String, Object, Dt, Boolean],
      default: z("container")
    },
    boundary: {
      type: [String, Dt],
      default: z("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: z("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: z("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: z("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: z("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: z("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: z("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: z("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: z("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: z("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: z("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: z("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: z("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: z("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: z("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: z("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: z("flip")
    },
    shift: {
      type: Boolean,
      default: z("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: z("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: z("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: z("disposeTimeout")
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
      return (e = this[$t]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Ia({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push($a({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Pa({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Ta({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(xa({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: o, middlewareData: s }) => {
          let a;
          const { centerOffset: u } = s.arrow;
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
          fn: ({ rects: o, placement: s, middlewareData: a }) => {
            var u;
            if ((u = a.autoSize) != null && u.skip)
              return {};
            let c, p;
            return s.startsWith("top") || s.startsWith("bottom") ? c = o.reference.width : p = o.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = c != null ? `${c}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = p != null ? `${p}px` : null, {
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
        apply: ({ availableWidth: n, availableHeight: o }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null;
        }
      })));
      const r = await za(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), we && this.instantMove && we.instantMove && we !== this.parentPopper) {
        we.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (we = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await St(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...dt(this.$_referenceNode),
        ...dt(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), r = this.$_popperNode.querySelector(".v-popper__wrapper"), n = r.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (n.left + r.offsetLeft), s = t.y + t.height / 2 - (n.top + r.offsetTop);
        this.result.transformOrigin = `${o}px ${s}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let r = 0; r < re.length; r++)
          t = re[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      re.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Lr(this.theme))
        Dr(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await St(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Er(re, this), re.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of Lr(this.theme)) {
        const n = Dr(r);
        Er(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      we === this && (we = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await St(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Pr, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Pr, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ar, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ar, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((n) => n.addEventListener(t, r, Ne ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, r, n, o) {
      let s = r;
      n != null && (s = typeof n == "function" ? n(s) : n), s.forEach((a) => {
        const u = t[a];
        u && this.$_registerEventListeners(e, u, o);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((r) => {
        const { targetNodes: n, eventType: o, handler: s } = r;
        !e || e === o ? n.forEach((a) => a.removeEventListener(o, s)) : t.push(r);
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
      if (He >= e.left && He <= e.right && Ue >= e.top && Ue <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = He - ue, n = Ue - de, o = t.left + t.width / 2 - ue + (t.top + t.height / 2) - de + t.width + t.height, s = ue + r * o, a = de + n * o;
        return et(ue, de, s, a, t.left, t.top, t.left, t.bottom) || // Left edge
        et(ue, de, s, a, t.left, t.top, t.right, t.top) || // Top edge
        et(ue, de, s, a, t.right, t.top, t.right, t.bottom) || // Right edge
        et(ue, de, s, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (cn ? (document.addEventListener("touchstart", zr, Ne ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", Ba, Ne ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", zr, !0), window.addEventListener("click", Ma, !0)), window.addEventListener("resize", Ha));
function zr(e) {
  for (let t = 0; t < re.length; t++) {
    const r = re[t];
    try {
      const n = r.popperNode();
      r.$_mouseDownContains = n.contains(e.target);
    } catch {
    }
  }
}
function Ma(e) {
  hn(e);
}
function Ba(e) {
  hn(e, !0);
}
function hn(e, t = !1) {
  const r = {};
  for (let n = re.length - 1; n >= 0; n--) {
    const o = re[n];
    try {
      const s = o.$_containsGlobalTarget = ja(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !r[o.randomId] && Or(o, s, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let u = o.parentPopper;
            for (; u; )
              r[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let a = o.parentPopper;
          for (; a && Or(a, a.$_containsGlobalTarget, e); )
            a.$_handleGlobalClose(e, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function ja(e, t) {
  const r = e.popperNode();
  return e.$_mouseDownContains || r.contains(t.target);
}
function Or(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || Ra(e, r) && !t;
}
function Ra(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function Ha(e) {
  for (let t = 0; t < re.length; t++)
    re[t].$_computePosition(e);
}
let ue = 0, de = 0, He = 0, Ue = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ue = He, de = Ue, He = e.clientX, Ue = e.clientY;
}, Ne ? {
  passive: !0
} : void 0);
function et(e, t, r, n, o, s, a, u) {
  const c = ((a - o) * (t - s) - (u - s) * (e - o)) / ((u - s) * (r - e) - (a - o) * (n - t)), p = ((r - e) * (t - s) - (n - t) * (e - o)) / ((u - s) * (r - e) - (a - o) * (n - t));
  return c >= 0 && c <= 1 && p >= 0 && p <= 1;
}
const Ua = {
  extends: pn()
}, Qt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function Ga(e, t, r, n, o, s) {
  return L(), O("div", {
    ref: "reference",
    class: V(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    B(e.$slots, "default", ye(Se(e.slotData)))
  ], 2);
}
const Va = /* @__PURE__ */ Qt(Ua, [["render", Ga]]);
function Wa() {
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
let ot;
function zt() {
  zt.init || (zt.init = !0, ot = Wa() !== -1);
}
var yt = {
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
    zt(), Sn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ot && this.$el.appendChild(e), e.data = "about:blank", ot || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ot && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const qa = /* @__PURE__ */ Nn("data-v-b329ee4c");
kn("data-v-b329ee4c");
const Ka = {
  class: "resize-observer",
  tabindex: "-1"
};
Cn();
const Qa = /* @__PURE__ */ qa((e, t, r, n, o, s) => (L(), q("div", Ka)));
yt.render = Qa;
yt.__scopeId = "data-v-b329ee4c";
yt.__file = "src/components/ResizeObserver.vue";
const fn = (e = "theme") => ({
  computed: {
    themeClass() {
      return Oa(this[e]);
    }
  }
}), Ya = J({
  name: "VPopperContent",
  components: {
    ResizeObserver: yt
  },
  mixins: [
    fn()
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
}), Ja = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Za = {
  ref: "inner",
  class: "v-popper__inner"
}, Xa = /* @__PURE__ */ G("div", { class: "v-popper__arrow-outer" }, null, -1), el = /* @__PURE__ */ G("div", { class: "v-popper__arrow-inner" }, null, -1), tl = [
  Xa,
  el
];
function rl(e, t, r, n, o, s) {
  const a = it("ResizeObserver");
  return L(), O("div", {
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
    style: xt(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Dn((u) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    G("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => e.autoHide && e.$emit("hide"))
    }),
    G("div", {
      class: "v-popper__wrapper",
      style: xt(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      G("div", Za, [
        e.mounted ? (L(), O(Ft, { key: 0 }, [
          G("div", null, [
            B(e.$slots, "default")
          ]),
          e.handleResize ? (L(), q(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (u) => e.$emit("resize", u))
          })) : Q("", !0)
        ], 64)) : Q("", !0)
      ], 512),
      G("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: xt(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, tl, 4)
    ], 4)
  ], 46, Ja);
}
const gn = /* @__PURE__ */ Qt(Ya, [["render", rl]]), mn = {
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
}, nl = J({
  name: "VPopperWrapper",
  components: {
    Popper: Va,
    PopperContent: gn
  },
  mixins: [
    mn,
    fn("finalTheme")
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
function ol(e, t, r, n, o, s) {
  const a = it("PopperContent"), u = it("Popper");
  return L(), q(u, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: V([
      e.themeClass
    ])
  }, {
    default: Z(({
      popperId: c,
      isShown: p,
      shouldMountContent: g,
      skipTransition: m,
      autoHide: b,
      show: _,
      hide: k,
      handleResize: C,
      onResize: T,
      classes: I,
      result: $
    }) => [
      B(e.$slots, "default", {
        shown: p,
        show: _,
        hide: k
      }),
      zn(a, {
        ref: "popperContent",
        "popper-id": c,
        theme: e.finalTheme,
        shown: p,
        mounted: g,
        "skip-transition": m,
        "auto-hide": b,
        "handle-resize": C,
        classes: I,
        result: $,
        onHide: k,
        onResize: T
      }, {
        default: Z(() => [
          B(e.$slots, "popper", {
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
const Yt = /* @__PURE__ */ Qt(nl, [["render", ol]]);
({
  ...Yt
});
({
  ...Yt
});
({
  ...Yt
});
J({
  name: "VTooltipDirective",
  components: {
    Popper: pn(),
    PopperContent: gn
  },
  mixins: [
    mn
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Nt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Nt(e.theme, "loadingContent")
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
const Ae = {
  Success: "success",
  Error: "error"
}, il = "block mb-2 text-sm font-medium", sl = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", al = "cursor-not-allowed bg-gray-100", ll = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, ul = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", dl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function cl(e) {
  const t = P(() => {
    const n = e.validationStatus.value, o = n === Ae.Success ? ul : n === Ae.Error ? dl : "";
    return se(
      sl,
      o,
      ll[e.size.value],
      e.disabled.value ? al : ""
    );
  }), r = P(() => {
    const n = e.validationStatus.value, o = n === Ae.Success ? "text-green-700 dark:text-green-500" : n === Ae.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return se(il, o);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const pl = { class: "flex relative" }, hl = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, fl = ["disabled", "type", "required"], gl = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, ml = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, vl = /* @__PURE__ */ J({
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
    const t = e, r = Wr(t, "modelValue"), { inputClasses: n, labelClasses: o } = cl(me(t)), s = P(() => se(
      "mt-2 text-sm",
      t.validationStatus === Ae.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === Ae.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (a, u) => (L(), O("div", null, [
      a.label ? (L(), O("label", {
        key: 0,
        class: V(A(o))
      }, pe(a.label), 3)) : Q("", !0),
      G("div", pl, [
        a.$slots.prefix ? (L(), O("div", hl, [
          B(a.$slots, "prefix")
        ])) : Q("", !0),
        Mt(G("input", ct(a.$attrs, {
          "onUpdate:modelValue": u[0] || (u[0] = (c) => Fr(r) ? r.value = c : null),
          disabled: a.disabled,
          type: a.type,
          required: a.required,
          class: [A(n), a.$slots.prefix ? "pl-10" : ""]
        }), null, 16, fl), [
          [Tn, A(r)]
        ]),
        a.$slots.suffix ? (L(), O("div", gl, [
          B(a.$slots, "suffix")
        ])) : Q("", !0)
      ]),
      a.$slots.validationMessage ? (L(), O("p", {
        key: 1,
        class: V(s.value)
      }, [
        B(a.$slots, "validationMessage")
      ], 2)) : Q("", !0),
      a.$slots.helper ? (L(), O("p", ml, [
        B(a.$slots, "helper")
      ])) : Q("", !0)
    ]));
  }
}), ce = {
  Success: "success",
  Error: "error"
}, bl = "block mb-2 text-sm font-medium", yl = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", wl = "cursor-not-allowed bg-gray-100", _l = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", xl = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, kl = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Cl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Sl(e) {
  const t = P(() => {
    const n = e.validationStatus.value, o = n === ce.Success ? kl : n === ce.Error ? Cl : "", s = n === ce.Success ? "focus:border-green-500" : n === ce.Error ? "focus:border-red-500" : "";
    return se(
      yl,
      o,
      xl[e.size.value],
      e.disabled.value && wl,
      e.underline.value ? _l : "border border-gray-300 rounded-lg",
      e.underline.value && s
    );
  }), r = P(() => {
    const n = e.validationStatus.value, o = n === ce.Success ? "text-green-700 dark:text-green-500" : n === ce.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return se(bl, o);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const $l = ["disabled"], Tl = {
  disabled: "",
  selected: "",
  value: ""
}, Il = ["value"], Ll = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Pl = /* @__PURE__ */ J({
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
    const r = e, n = Wr(r, "modelValue", t), { selectClasses: o, labelClasses: s } = Sl(me(r)), a = P(() => se(
      "mt-2 text-sm",
      r.validationStatus === ce.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === ce.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (u, c) => (L(), O("div", null, [
      G("label", null, [
        u.label ? (L(), O("span", {
          key: 0,
          class: V(A(s))
        }, pe(u.label), 3)) : Q("", !0),
        Mt(G("select", {
          "onUpdate:modelValue": c[0] || (c[0] = (p) => Fr(n) ? n.value = p : null),
          disabled: u.disabled,
          class: V(A(o))
        }, [
          G("option", Tl, pe(u.placeholder), 1),
          (L(!0), O(Ft, null, In(u.options, (p, g) => (L(), O("option", {
            key: g,
            value: p.value
          }, pe(p.name), 9, Il))), 128))
        ], 10, $l), [
          [Ln, A(n)]
        ])
      ]),
      u.$slots.validationMessage ? (L(), O("p", {
        key: 0,
        class: V(a.value)
      }, [
        B(u.$slots, "validationMessage")
      ], 2)) : Q("", !0),
      u.$slots.helper ? (L(), O("p", Ll, [
        B(u.$slots, "helper")
      ])) : Q("", !0)
    ]));
  }
}), Al = "w-fit relative inline-flex items-center cursor-pointer", El = 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', Nl = "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", Dl = {
  lg: "w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4"
}, zl = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function Ol(e) {
  const t = P(() => Al), r = P(() => El), n = P(() => Dl[e.size.value]), o = P(() => zl[e.color.value]), s = P(() => Nl);
  return {
    labelClasses: t,
    toggleSize: n,
    toggleClasses: r,
    toggleColor: o,
    toggleBallClasses: s
  };
}
const Fl = ["disabled"], Ml = /* @__PURE__ */ J({
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
    const r = e, n = P({
      get() {
        return r.modelValue;
      },
      set(p) {
        t("update:modelValue", p);
      }
    }), {
      labelClasses: o,
      toggleSize: s,
      toggleClasses: a,
      toggleColor: u,
      toggleBallClasses: c
    } = Ol(me(r));
    return (p, g) => (L(), O("label", {
      class: V(A(o))
    }, [
      Mt(G("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (m) => n.value = m),
        disabled: p.disabled,
        class: "sr-only peer",
        type: "checkbox"
      }, null, 8, Fl), [
        [Pn, n.value]
      ]),
      G("span", {
        class: V([A(a), A(s), A(u)])
      }, null, 2),
      G("span", {
        class: V(A(c))
      }, pe(p.label), 3)
    ], 2));
  }
}), Bl = ["href"], jl = /* @__PURE__ */ J({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (L(), O("a", {
      href: t.href,
      class: V([t.color, "inline-flex items-center hover:underline"])
    }, [
      B(t.$slots, "default")
    ], 10, Bl));
  }
}), Rl = /* @__PURE__ */ J({
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
    }, n = Ot(), o = se(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      n.class
    ), s = t.tag;
    return (a, u) => (L(), q(pt(A(s)), ct(a.$attrs, { class: A(o) }), {
      default: Z(() => [
        B(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hl = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", Ul = /* @__PURE__ */ J({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = P(() => Lt([
      Hl,
      t.class
    ]));
    return (n, o) => (L(), O("p", {
      class: V(r.value)
    }, [
      B(n.$slots, "default")
    ], 2));
  }
}), Yl = {
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
    const t = e, r = P(() => {
      let n = "text-sm";
      return t.flat ? `${n}border-0 bg-transparent text-gray-800 hover:bg-gray-300` : t.icon ? `${n}border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2` : t.link ? `${n}border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700` : n;
    });
    return (n, o) => (L(), q(A(Eo), ct(n.$props, { class: r.value }), {
      default: Z(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}, Jl = {
  __name: "TwcCheckbox",
  setup(e) {
    return (t, r) => (L(), q(A(Ml), ye(Se(t.$props)), null, 16));
  }
}, Zl = {
  __name: "TwcHeading",
  setup(e) {
    return (t, r) => (L(), q(A(Rl), ye(Se(t.$props)), {
      default: Z(() => [
        B(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Xl = {
  __name: "TwcInput",
  setup(e) {
    return (t, r) => (L(), q(A(vl), ye(Se(t.$props)), Mr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: Z(() => [
          B(t.$slots, "helper")
        ]),
        key: "0"
      } : void 0,
      t.$slots.prefix ? {
        name: "prefix",
        fn: Z(() => [
          B(t.$slots, "prefix")
        ]),
        key: "1"
      } : void 0,
      t.$slots.suffix ? {
        name: "suffix",
        fn: Z(() => [
          B(t.$slots, "suffix")
        ]),
        key: "2"
      } : void 0
    ]), 1040));
  }
}, eu = {
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
    return (n, o) => (L(), O("label", {
      class: V(r())
    }, [
      B(n.$slots, "default")
    ], 2));
  }
}, tu = {
  __name: "TwcLink",
  setup(e) {
    return (t, r) => (L(), q(A(jl), ye(Se(t.$props)), {
      default: Z(() => [
        B(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, ru = {
  __name: "TwcParagraph",
  setup(e) {
    return (t, r) => (L(), q(A(Ul), ye(Se(t.$props)), {
      default: Z(() => [
        B(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, nu = {
  __name: "TwcSelect",
  setup(e) {
    return (t, r) => (L(), q(A(Pl), ye(Se(t.$props)), Mr({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: Z(() => [
          B(t.$slots, "helper")
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
};
function Gl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} };
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
      function s(y) {
        for (var h = 1; h < arguments.length; h++) {
          var i = arguments[h] != null ? Object(arguments[h]) : {}, l = Object.keys(i);
          typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(i).filter(function(d) {
            return Object.getOwnPropertyDescriptor(i, d).enumerable;
          })), l.forEach(function(d) {
            a(y, d, i[d]);
          });
        }
        return y;
      }
      function a(y, h, i) {
        return h = T(h), h in y ? Object.defineProperty(y, h, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : y[h] = i, y;
      }
      function u(y, h) {
        return b(y) || m(y, h) || p(y, h) || c();
      }
      function c() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function p(y, h) {
        if (y) {
          if (typeof y == "string")
            return g(y, h);
          var i = Object.prototype.toString.call(y).slice(8, -1);
          if (i === "Object" && y.constructor && (i = y.constructor.name), i === "Map" || i === "Set")
            return Array.from(y);
          if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return g(y, h);
        }
      }
      function g(y, h) {
        (h == null || h > y.length) && (h = y.length);
        for (var i = 0, l = new Array(h); i < h; i++)
          l[i] = y[i];
        return l;
      }
      function m(y, h) {
        var i = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
        if (i != null) {
          var l, d, f, v, w = [], x = !0, S = !1;
          try {
            if (f = (i = i.call(y)).next, h === 0) {
              if (Object(i) !== i)
                return;
              x = !1;
            } else
              for (; !(x = (l = f.call(i)).done) && (w.push(l.value), w.length !== h); x = !0)
                ;
          } catch (D) {
            S = !0, d = D;
          } finally {
            try {
              if (!x && i.return != null && (v = i.return(), Object(v) !== v))
                return;
            } finally {
              if (S)
                throw d;
            }
          }
          return w;
        }
      }
      function b(y) {
        if (Array.isArray(y))
          return y;
      }
      function _(y, h) {
        if (!(y instanceof h))
          throw new TypeError("Cannot call a class as a function");
      }
      function k(y, h) {
        for (var i = 0; i < h.length; i++) {
          var l = h[i];
          l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(y, T(l.key), l);
        }
      }
      function C(y, h, i) {
        return h && k(y.prototype, h), i && k(y, i), Object.defineProperty(y, "prototype", {
          writable: !1
        }), y;
      }
      function T(y) {
        var h = I(y, "string");
        return typeof h == "symbol" ? h : String(h);
      }
      function I(y, h) {
        if (typeof y != "object" || y === null)
          return y;
        var i = y[Symbol.toPrimitive];
        if (i !== t) {
          var l = i.call(y, h || "default");
          if (typeof l != "object")
            return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (h === "string" ? String : Number)(y);
      }
      var $ = {
        getInstance: function(h) {
          var i = h.getAttribute("data-intl-tel-input-id");
          return window.intlTelInputGlobals.instances[i];
        },
        instances: {},
        // using a global like this allows us to mock it in the tests
        documentReady: function() {
          return document.readyState === "complete";
        }
      };
      typeof window == "object" && (window.intlTelInputGlobals = $);
      var E = 0, R = {
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
      }, H = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], F = function(h) {
        var i = window.intlTelInputGlobals.instances;
        Object.values(i).forEach(function(l) {
          return l[h]();
        });
      }, K = /* @__PURE__ */ function() {
        function y(h) {
          var i = arguments.length > 1 && arguments[1] !== t ? arguments[1] : {};
          _(this, y), this.id = E++, this.telInput = h, this.activeItem = null, this.highlightedItem = null, this.options = Object.assign({}, R, i), this.hadInitialPlaceholder = !!h.getAttribute("placeholder");
        }
        return C(y, [{
          key: "_init",
          value: function() {
            var i = this;
            this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.countrySearch && !this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !0), this.options.nationalMode && (this.options.autoInsertDialCode = !1), this.options.showSelectedDialCode && (this.options.autoInsertDialCode = !1);
            var l = this.options.allowDropdown && !this.options.showSelectedDialCode;
            if (!this.options.showFlags && l && (this.options.showFlags = !0), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isRTL = !!this.telInput.closest("[dir=rtl]"), typeof Promise < "u") {
              var d = new Promise(function(v, w) {
                i.resolveAutoCountryPromise = v, i.rejectAutoCountryPromise = w;
              }), f = new Promise(function(v, w) {
                i.resolveUtilsScriptPromise = v, i.rejectUtilsScriptPromise = w;
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
          value: function(i, l, d) {
            l.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = l.length), this.dialCodeToIso2Map.hasOwnProperty(l) || (this.dialCodeToIso2Map[l] = []);
            for (var f = 0; f < this.dialCodeToIso2Map[l].length; f++)
              if (this.dialCodeToIso2Map[l][f] === i)
                return;
            var v = d !== t ? d : this.dialCodeToIso2Map[l].length;
            this.dialCodeToIso2Map[l][v] = i;
          }
        }, {
          key: "_processAllCountries",
          value: function() {
            if (this.options.onlyCountries.length) {
              var i = this.options.onlyCountries.map(function(d) {
                return d.toLowerCase();
              });
              this.countries = r.filter(function(d) {
                return i.indexOf(d.iso2) > -1;
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
            for (var i = 0; i < this.countries.length; i++) {
              var l = this.countries[i].iso2.toLowerCase();
              this.options.i18n.hasOwnProperty(l) && (this.countries[i].name = this.options.i18n[l]);
            }
          }
        }, {
          key: "_countryNameSort",
          value: function(i, l) {
            return i.name < l.name ? -1 : i.name > l.name ? 1 : 0;
          }
        }, {
          key: "_processDialCodes",
          value: function() {
            this.dialCodes = {}, this.dialCodeMaxLen = 0, this.dialCodeToIso2Map = {};
            for (var i = 0; i < this.countries.length; i++) {
              var l = this.countries[i];
              this.dialCodes[l.dialCode] || (this.dialCodes[l.dialCode] = !0), this._addToDialCodeMap(l.iso2, l.dialCode, l.priority);
            }
            for (var d = 0; d < this.countries.length; d++) {
              var f = this.countries[d];
              if (f.areaCodes)
                for (var v = this.dialCodeToIso2Map[f.dialCode][0], w = 0; w < f.areaCodes.length; w++) {
                  for (var x = f.areaCodes[w], S = 1; S < x.length; S++) {
                    var D = f.dialCode + x.substr(0, S);
                    this._addToDialCodeMap(v, D), this._addToDialCodeMap(f.iso2, D);
                  }
                  this._addToDialCodeMap(f.iso2, f.dialCode + x);
                }
            }
          }
        }, {
          key: "_processPreferredCountries",
          value: function() {
            this.preferredCountries = [];
            for (var i = 0; i < this.options.preferredCountries.length; i++) {
              var l = this.options.preferredCountries[i].toLowerCase(), d = this._getCountryData(l, !0);
              d && this.preferredCountries.push(d);
            }
          }
        }, {
          key: "_createEl",
          value: function(i, l, d) {
            var f = document.createElement(i);
            return l && Object.entries(l).forEach(function(v) {
              var w = u(v, 2), x = w[0], S = w[1];
              return f.setAttribute(x, S);
            }), d && d.appendChild(f), f;
          }
        }, {
          key: "_generateMarkup",
          value: function() {
            this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
            var i = this.options, l = i.allowDropdown, d = i.showSelectedDialCode, f = i.showFlags, v = i.containerClass, w = i.hiddenInput, x = i.dropdownContainer, S = i.fixDropdownWidth, D = i.useFullscreenPopup, W = i.countrySearch, M = "iti";
            l && (M += " iti--allow-dropdown"), d && (M += " iti--show-selected-dial-code"), f && (M += " iti--show-flags"), v && (M += " ".concat(v)), D || (M += " iti--inline-dropdown");
            var j = this._createEl("div", {
              class: M
            });
            this.telInput.parentNode.insertBefore(j, this.telInput);
            var ae = l || f || d;
            if (ae && (this.flagsContainer = this._createEl("div", {
              class: "iti__flag-container"
            }, j)), j.appendChild(this.telInput), ae && (this.selectedFlag = this._createEl("div", s({
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
              var bn = S ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = this._createEl("div", {
                class: "iti__dropdown-content iti__hide ".concat(bn)
              }), W && (this.searchInput = this._createEl("input", {
                type: "text",
                class: "iti__search-input",
                placeholder: this.options.i18n.searchPlaceholder || "Search"
              }, this.dropdownContent)), this.countryList = this._createEl("ul", {
                class: "iti__country-list",
                id: "iti-".concat(this.id, "__country-listbox"),
                role: "listbox",
                "aria-label": this.options.i18n.countryListAriaLabel || "List of countries"
              }, this.dropdownContent), this.preferredCountries.length && !W && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", {
                class: "iti__divider",
                "aria-hidden": "true"
              }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), x) {
                var Qe = "iti iti--container";
                D ? Qe += " iti--fullscreen-popup" : Qe += " iti--inline-dropdown", W && (Qe += " iti--country-search"), this.dropdown = this._createEl("div", {
                  class: Qe
                }), this.dropdown.appendChild(this.dropdownContent);
              } else
                this.flagsContainer.appendChild(this.dropdownContent);
            }
            if (w) {
              var wt = this.telInput.getAttribute("name"), Oe = w(wt), yn = Oe !== null && typeof Oe == "object", Le, _t;
              if (yn ? (Le = Oe.phone || wt, _t = Oe.country || "".concat(Le, "_country")) : (Le = Oe || wt, _t = "".concat(Le, "_country")), !Le)
                return;
              this.hiddenInput = this._createEl("input", {
                type: "hidden",
                name: Le
              }), this.hiddenInputCountry = this._createEl("input", {
                type: "hidden",
                name: _t
              }), j.appendChild(this.hiddenInput), j.appendChild(this.hiddenInputCountry);
            }
          }
        }, {
          key: "_appendListItems",
          value: function(i, l, d) {
            for (var f = 0; f < i.length; f++) {
              var v = i[f], w = d ? "-preferred" : "", x = this._createEl("li", {
                id: "iti-".concat(this.id, "__item-").concat(v.iso2).concat(w),
                class: "iti__country ".concat(l),
                tabindex: "-1",
                role: "option",
                "data-dial-code": v.dialCode,
                "data-country-code": v.iso2,
                "aria-selected": "false"
              }, this.countryList);
              v.nodeById[this.id] = x;
              var S = "";
              this.options.showFlags && (S += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(v.iso2, "'></div></div>")), S += "<span class='iti__country-name'>".concat(v.name, "</span>"), S += "<span class='iti__dial-code'>+".concat(v.dialCode, "</span>"), x.insertAdjacentHTML("beforeend", S);
            }
          }
        }, {
          key: "_setInitialState",
          value: function() {
            var i = arguments.length > 0 && arguments[0] !== t ? arguments[0] : !1, l = this.telInput.getAttribute("value"), d = this.telInput.value, f = l && l.charAt(0) === "+" && (!d || d.charAt(0) !== "+"), v = f ? l : d, w = this._getDialCode(v), x = this._isRegionlessNanp(v), S = this.options, D = S.initialCountry, W = S.autoInsertDialCode, M = S.defaultToFirstCountry;
            if (w && !x)
              this._updateFlagFromNumber(v);
            else if (D !== "auto" || i) {
              var j = D ? D.toLowerCase() : "", ae = j && this._getCountryData(j, !0);
              ae ? this._setFlag(j) : w && x ? this._setFlag("us") : M && !v ? (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, this._setFlag(this.defaultCountry)) : this._setFlag(), !v && W && (this.telInput.value = "+".concat(this.selectedCountryData.dialCode));
            }
            v && this._updateValFromNumber(v);
          }
        }, {
          key: "_initListeners",
          value: function() {
            this._initKeyListeners(), this.options.autoInsertDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener();
          }
        }, {
          key: "_initHiddenInputListener",
          value: function() {
            var i = this;
            this._handleHiddenInputSubmit = function() {
              i.hiddenInput.value = i.getNumber(), i.hiddenInputCountry.value = i.getSelectedCountryData().iso2;
            }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
          }
        }, {
          key: "_initDropdownListeners",
          value: function() {
            var i = this;
            this._handleLabelClick = function(d) {
              i.dropdownContent.classList.contains("iti__hide") ? i.telInput.focus() : d.preventDefault();
            };
            var l = this.telInput.closest("label");
            l && l.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function() {
              i.dropdownContent.classList.contains("iti__hide") && !i.telInput.disabled && !i.telInput.readOnly && i._showDropdown();
            }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function(d) {
              var f = i.dropdownContent.classList.contains("iti__hide");
              f && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(d.key) && (d.preventDefault(), d.stopPropagation(), i._showDropdown()), d.key === "Tab" && i._closeDropdown();
            }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
          }
        }, {
          key: "_initRequests",
          value: function() {
            var i = this;
            this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function() {
              window.intlTelInputGlobals.loadUtils(i.options.utilsScript);
            }) : this.resolveUtilsScriptPromise(), this.options.initialCountry === "auto" && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
          }
        }, {
          key: "_loadAutoCountry",
          value: function() {
            var i = this;
            window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(function() {
              var l = arguments.length > 0 && arguments[0] !== t ? arguments[0] : "", d = l.toLowerCase(), f = d && i._getCountryData(d, !0);
              f ? (window.intlTelInputGlobals.autoCountry = d, setTimeout(function() {
                return F("handleAutoCountry");
              })) : (i._setInitialState(!0), F("rejectAutoCountryPromise"));
            }, function() {
              return F("rejectAutoCountryPromise");
            }));
          }
        }, {
          key: "_initKeyListeners",
          value: function() {
            var i = this, l = !1;
            this._handleKeyEvent = function(d) {
              i._updateFlagFromNumber(i.telInput.value) && i._triggerCountryChange();
              var f = d && d.data && /[^+0-9]/.test(d.data), v = d && d.inputType === "insertFromPaste" && i.telInput.value;
              if (f || v ? l = !0 : /[^+0-9]/.test(i.telInput.value) || (l = !1), i.options.formatAsYouType && !l && d.inputType !== "insertFromPaste") {
                var w = i.telInput.selectionStart, x = i.telInput.value.substring(0, w), S = x.replace(/[^+0-9]/g, "").length, D = d && d.inputType === "deleteContentForward", W = i._formatNumberAsYouType(), M = i._translateCursorPosition(S, W, w, D);
                i.telInput.value = W, i.telInput.setSelectionRange(M, M);
              }
            }, this.telInput.addEventListener("input", this._handleKeyEvent), this._handleClipboardEvent = function() {
              setTimeout(i._handleKeyEvent);
            }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent);
          }
        }, {
          key: "_translateCursorPosition",
          value: function(i, l, d, f) {
            if (d === 0 && !f)
              return 0;
            for (var v = 0, w = 0; w < l.length; w++) {
              if (/[+0-9]/.test(l[w]) && v++, v === i && !f)
                return w + 1;
              if (f && v === i + 1)
                return w;
            }
            return l.length;
          }
        }, {
          key: "_cap",
          value: function(i) {
            var l = this.telInput.getAttribute("maxlength");
            return l && i.length > l ? i.substr(0, l) : i;
          }
        }, {
          key: "_initBlurListeners",
          value: function() {
            var i = this;
            this._handleSubmitOrBlurEvent = function() {
              i._removeEmptyDialCode();
            }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
          }
        }, {
          key: "_removeEmptyDialCode",
          value: function() {
            if (this.telInput.value.charAt(0) === "+") {
              var i = this._getNumeric(this.telInput.value);
              (!i || this.selectedCountryData.dialCode === i) && (this.telInput.value = "");
            }
          }
        }, {
          key: "_getNumeric",
          value: function(i) {
            return i.replace(/\D/g, "");
          }
        }, {
          key: "_trigger",
          value: function(i) {
            var l = new Event(i, {
              bubbles: !0,
              cancelable: !0
            });
            this.telInput.dispatchEvent(l);
          }
        }, {
          key: "_showDropdown",
          value: function() {
            if (this.options.fixDropdownWidth && (this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px")), this.dropdownContent.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.options.countrySearch) {
              var i = this.countryList.firstElementChild;
              i && this._highlightListItem(i, !1), this.searchInput.focus();
            } else
              this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0));
            this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
          }
        }, {
          key: "_toggleClass",
          value: function(i, l, d) {
            d && !i.classList.contains(l) ? i.classList.add(l) : !d && i.classList.contains(l) && i.classList.remove(l);
          }
        }, {
          key: "_setDropdownPosition",
          value: function() {
            var i = this;
            if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
              var l = this.telInput.getBoundingClientRect(), d = document.documentElement.scrollTop, f = l.top + d, v = this.dropdownContent.offsetHeight, w = f + this.telInput.offsetHeight + v < d + window.innerHeight, x = f - v > d, S = !this.options.countrySearch && !w && x;
              if (this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", S), this.options.dropdownContainer) {
                var D = S ? 0 : this.telInput.offsetHeight;
                this.dropdown.style.top = "".concat(f + D, "px"), this.dropdown.style.left = "".concat(l.left + document.body.scrollLeft, "px"), this._handleWindowScroll = function() {
                  return i._closeDropdown();
                }, window.addEventListener("scroll", this._handleWindowScroll);
              }
            }
          }
        }, {
          key: "_bindDropdownListeners",
          value: function() {
            var i = this;
            this._handleMouseoverCountryList = function(x) {
              var S = x.target.closest(".iti__country");
              S && i._highlightListItem(S, !1);
            }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function(x) {
              var S = x.target.closest(".iti__country");
              S && i._selectListItem(S);
            }, this.countryList.addEventListener("click", this._handleClickCountryList);
            var l = !0;
            this._handleClickOffToClose = function() {
              l || i._closeDropdown(), l = !1;
            }, document.documentElement.addEventListener("click", this._handleClickOffToClose);
            var d = "", f = null;
            if (this._handleKeydownOnDropdown = function(x) {
              ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(x.key) && (x.preventDefault(), x.stopPropagation(), x.key === "ArrowUp" || x.key === "ArrowDown" ? i._handleUpDownKey(x.key) : x.key === "Enter" ? i._handleEnterKey() : x.key === "Escape" && i._closeDropdown()), !i.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(x.key) && (x.stopPropagation(), f && clearTimeout(f), d += x.key.toLowerCase(), i._searchForCountry(d), f = setTimeout(function() {
                d = "";
              }, 1e3));
            }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
              var v = function() {
                var S = i.searchInput.value.trim();
                S ? i._filterCountries(S) : i._filterCountries("", !0);
              }, w = null;
              this._handleSearchChange = function() {
                w && clearTimeout(w), w = setTimeout(function() {
                  v(), w = null;
                }, 100);
              }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", function(x) {
                return x.stopPropagation();
              });
            }
          }
        }, {
          key: "_normaliseString",
          value: function() {
            var i = arguments.length > 0 && arguments[0] !== t ? arguments[0] : "";
            return i.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          }
        }, {
          key: "_filterCountries",
          value: function(i) {
            var l = arguments.length > 1 && arguments[1] !== t ? arguments[1] : !1, d = !0;
            this.countryList.innerHTML = "";
            for (var f = this._normaliseString(i), v = 0; v < this.countries.length; v++) {
              var w = this.countries[v], x = this._normaliseString(w.name), S = "+".concat(w.dialCode);
              (l || x.includes(f) || S.includes(f) || w.iso2.includes(f)) && (this.countryList.appendChild(w.nodeById[this.id]), d && (this._highlightListItem(w.nodeById[this.id], !1), d = !1));
            }
          }
        }, {
          key: "_handleUpDownKey",
          value: function(i) {
            var l = i === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
            if (l ? l.classList.contains("iti__divider") && (l = i === "ArrowUp" ? l.previousElementSibling : l.nextElementSibling) : this.countryList.childElementCount > 1 && (l = i === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), l) {
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
          value: function(i) {
            for (var l = 0; l < this.countries.length; l++)
              if (this._startsWith(this.countries[l].name, i)) {
                var d = this.countries[l].nodeById[this.id];
                this._highlightListItem(d, !1), this._scrollTo(d, !0);
                break;
              }
          }
        }, {
          key: "_startsWith",
          value: function(i, l) {
            return i.substr(0, l.length).toLowerCase() === l;
          }
        }, {
          key: "_updateValFromNumber",
          value: function(i) {
            var l = i;
            if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
              var d = this.options.nationalMode || l.charAt(0) !== "+" && !this.options.showSelectedDialCode, f = intlTelInputUtils.numberFormat, v = f.NATIONAL, w = f.INTERNATIONAL, x = d ? v : w;
              l = intlTelInputUtils.formatNumber(l, this.selectedCountryData.iso2, x);
            }
            l = this._beforeSetNumber(l), this.telInput.value = l;
          }
        }, {
          key: "_updateFlagFromNumber",
          value: function(i) {
            var l = i.indexOf("+"), d = l ? i.substring(l) : i, f = this.selectedCountryData.dialCode, v = f === "1";
            d && v && d.charAt(0) !== "+" && (d.charAt(0) !== "1" && (d = "1".concat(d)), d = "+".concat(d)), this.options.showSelectedDialCode && f && d.charAt(0) !== "+" && (d = "+".concat(f).concat(d));
            var w = this._getDialCode(d, !0), x = this._getNumeric(d), S = null;
            if (w) {
              var D = this.dialCodeToIso2Map[this._getNumeric(w)], W = D.indexOf(this.selectedCountryData.iso2) !== -1 && x.length <= w.length - 1, M = f === "1" && this._isRegionlessNanp(x);
              if (!M && !W) {
                for (var j = 0; j < D.length; j++)
                  if (D[j]) {
                    S = D[j];
                    break;
                  }
              }
            } else
              d.charAt(0) === "+" && x.length ? S = "" : (!d || d === "+") && !this.selectedCountryData.iso2 && (S = this.defaultCountry);
            return S !== null ? this._setFlag(S) : !1;
          }
        }, {
          key: "_isRegionlessNanp",
          value: function(i) {
            var l = this._getNumeric(i);
            if (l.charAt(0) === "1") {
              var d = l.substr(1, 3);
              return H.indexOf(d) !== -1;
            }
            return !1;
          }
        }, {
          key: "_highlightListItem",
          value: function(i, l) {
            var d = this.highlightedItem;
            d && d.classList.remove("iti__highlight"), this.highlightedItem = i, this.highlightedItem.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", i.getAttribute("id")), l && this.highlightedItem.focus();
          }
        }, {
          key: "_getCountryData",
          value: function(i, l) {
            for (var d = 0; d < this.countries.length; d++)
              if (this.countries[d].iso2 === i)
                return this.countries[d];
            if (l)
              return null;
            throw new Error("No country data for '".concat(i, "'"));
          }
        }, {
          key: "_setFlag",
          value: function(i) {
            var l = this.options, d = l.allowDropdown, f = l.showSelectedDialCode, v = l.showFlags, w = l.countrySearch, x = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            if (this.selectedCountryData = i ? this._getCountryData(i, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), v) {
              var S = i ? "iti__".concat(i) : "iti__globe";
              this.selectedFlagInner.setAttribute("class", "iti__flag ".concat(S));
            }
            if (this._setSelectedCountryFlagTitleAttribute(i, f), f) {
              var D = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
              this.selectedDialCode.innerHTML = D;
              var W = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
              this.isRTL ? this.telInput.style.paddingRight = "".concat(W + 6, "px") : this.telInput.style.paddingLeft = "".concat(W + 6, "px");
            }
            if (this._updatePlaceholder(), d && !w) {
              var M = this.activeItem;
              if (M && (M.classList.remove("iti__active"), M.setAttribute("aria-selected", "false")), i) {
                var j = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(i, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(i));
                j.setAttribute("aria-selected", "true"), j.classList.add("iti__active"), this.activeItem = j;
              }
            }
            return x.iso2 !== i;
          }
        }, {
          key: "_setSelectedCountryFlagTitleAttribute",
          value: function(i, l) {
            if (this.selectedFlag) {
              var d;
              i && !l ? d = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : i ? d = this.selectedCountryData.name : d = "Unknown", this.selectedFlag.setAttribute("title", d);
            }
          }
        }, {
          key: "_getHiddenSelectedFlagWidth",
          value: function() {
            var i = this.telInput.parentNode.cloneNode();
            i.style.visibility = "hidden", document.body.appendChild(i);
            var l = this.flagsContainer.cloneNode();
            i.appendChild(l);
            var d = this.selectedFlag.cloneNode(!0);
            l.appendChild(d);
            var f = d.offsetWidth;
            return i.parentNode.removeChild(i), f;
          }
        }, {
          key: "_updatePlaceholder",
          value: function() {
            var i = this.options, l = i.autoPlaceholder, d = i.placeholderNumberType, f = i.nationalMode, v = i.customPlaceholder, w = l === "aggressive" || !this.hadInitialPlaceholder && l === "polite";
            if (window.intlTelInputUtils && w) {
              var x = intlTelInputUtils.numberType[d], S = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, f, x) : "";
              S = this._beforeSetNumber(S), typeof v == "function" && (S = v(S, this.selectedCountryData)), this.telInput.setAttribute("placeholder", S);
            }
          }
        }, {
          key: "_selectListItem",
          value: function(i) {
            var l = this._setFlag(i.getAttribute("data-country-code"));
            this._closeDropdown(), this._updateDialCode(i.getAttribute("data-dial-code")), this.telInput.focus(), l && this._triggerCountryChange();
          }
        }, {
          key: "_closeDropdown",
          value: function() {
            this.dropdownContent.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
          }
        }, {
          key: "_scrollTo",
          value: function(i, l) {
            var d = this.countryList, f = document.documentElement.scrollTop, v = d.offsetHeight, w = d.getBoundingClientRect().top + f, x = w + v, S = i.offsetHeight, D = i.getBoundingClientRect().top + f, W = D + S, M = D - w + d.scrollTop, j = v / 2 - S / 2;
            if (D < w)
              l && (M -= j), d.scrollTop = M;
            else if (W > x) {
              l && (M += j);
              var ae = v - S;
              d.scrollTop = M - ae;
            }
          }
        }, {
          key: "_updateDialCode",
          value: function(i) {
            var l = this.telInput.value, d = "+".concat(i), f;
            if (l.charAt(0) === "+") {
              var v = this._getDialCode(l);
              v ? f = l.replace(v, d) : f = d, this.telInput.value = f;
            } else
              this.options.autoInsertDialCode && (l ? f = d + l : f = d, this.telInput.value = f);
          }
        }, {
          key: "_getDialCode",
          value: function(i, l) {
            var d = "";
            if (i.charAt(0) === "+")
              for (var f = "", v = 0; v < i.length; v++) {
                var w = i.charAt(v);
                if (!isNaN(parseInt(w, 10))) {
                  if (f += w, l)
                    this.dialCodeToIso2Map[f] && (d = i.substr(0, v + 1));
                  else if (this.dialCodes[f]) {
                    d = i.substr(0, v + 1);
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
            var i = this.telInput.value.trim(), l = this.selectedCountryData.dialCode, d, f = this._getNumeric(i);
            return this.options.showSelectedDialCode && !this.options.nationalMode && i.charAt(0) !== "+" && l && f ? d = "+".concat(l) : d = "", d + i;
          }
        }, {
          key: "_beforeSetNumber",
          value: function(i) {
            var l = i;
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
            var i = this._getFullNumber(), l = window.intlTelInputUtils ? intlTelInputUtils.formatNumberAsYouType(i, this.selectedCountryData.iso2) : i, d = this.selectedCountryData.dialCode;
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
            var i = this.telInput.form;
            if (this.options.allowDropdown) {
              this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
              var l = this.telInput.closest("label");
              l && l.removeEventListener("click", this._handleLabelClick);
            }
            this.hiddenInput && i && i.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoInsertDialCode && (i && i.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("input", this._handleKeyEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
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
          value: function(i) {
            if (window.intlTelInputUtils) {
              var l = this.selectedCountryData.iso2;
              return intlTelInputUtils.formatNumber(this._getFullNumber(), l, i);
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
              var i = this.selectedCountryData.iso2;
              return intlTelInputUtils.getValidationError(this._getFullNumber(), i);
            }
            return -99;
          }
        }, {
          key: "isValidNumber",
          value: function(i) {
            var l = this._getFullNumber();
            return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(l, this.selectedCountryData.iso2, i) : null;
          }
        }, {
          key: "isValidNumberPrecise",
          value: function() {
            var i = this._getFullNumber();
            return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(i, this.selectedCountryData.iso2) : null;
          }
        }, {
          key: "setCountry",
          value: function(i) {
            var l = i.toLowerCase();
            this.selectedCountryData.iso2 !== l && (this._setFlag(l), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
          }
        }, {
          key: "setNumber",
          value: function(i) {
            var l = this._updateFlagFromNumber(i);
            this._updateValFromNumber(i), l && this._triggerCountryChange();
          }
        }, {
          key: "setPlaceholderNumberType",
          value: function(i) {
            this.options.placeholderNumberType = i, this._updatePlaceholder();
          }
        }]), y;
      }();
      $.getCountryData = function() {
        return r;
      };
      var Y = function(h, i, l) {
        var d = document.createElement("script");
        d.onload = function() {
          F("handleUtils"), i && i();
        }, d.onerror = function() {
          F("rejectUtilsScriptPromise"), l && l();
        }, d.className = "iti-load-utils", d.async = !0, d.src = h, document.body.appendChild(d);
      };
      return $.loadUtils = function(y) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
          if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, typeof Promise < "u")
            return new Promise(function(h, i) {
              return Y(y, h, i);
            });
          Y(y);
        }
        return null;
      }, $.defaults = R, $.version = "19.5.7", function(y, h) {
        var i = new K(y, h);
        return i._init(), y.setAttribute("data-intl-tel-input-id", i.id), window.intlTelInputGlobals.instances[i.id] = i, i;
      };
    }();
  });
})(vn);
var Vl = vn.exports, Wl = Vl;
const ql = /* @__PURE__ */ Gl(Wl), Kl = ["placeholder", "data-testid"], ou = {
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
    const r = he(null), n = he(null), o = he(!1), s = e, a = t;
    function u() {
      o.value = n.value.isValidNumber(), o.value ? a("change", r.value.value, !0) : a("change", r.value.value, !1);
    }
    return Bn(() => {
      const c = (p) => {
        localStorage != null && localStorage.getItem("ipCountry") ? p(localStorage.getItem("ipCountry")) : s.ipInfoKey ? fetch(`https://ipinfo.io/json?token=${s.ipInfoKey}`, {
          headers: { Accept: "application/json" }
        }).then((g) => g.json()).then((g) => {
          p(g.country), localStorage == null || localStorage.setItem("ipCountry", g.country);
        }).catch(() => {
          p("US");
        }) : p("US");
      };
      n.value = ql(r.value, {
        initialCountry: "auto",
        geoIpLookup: c,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.5.7/js/utils.js"
      });
    }), (c, p) => (L(), O("input", {
      ref_key: "phoneInput",
      ref: r,
      placeholder: c.$props.placeholder,
      class: V(`mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input ${o.value ? "border-green-500 focus:outline-green-500 bg-green-50" : ""} ${e.displayError ? "border-red-500 focus:outline-red-500 bg-red-50" : ""}`),
      "data-testid": c.$props.dataTestid,
      onInput: u
    }, null, 42, Kl));
  }
}, iu = {
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
    return (n, o) => (L(), O("div", {
      class: V(`h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface ${r()} ${t.color} ${t.class}`),
      role: "status"
    }, null, 2));
  }
}, su = {
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
    return (n, o) => (L(), O("i", {
      class: V(`${r()} ${t.class}`)
    }, null, 2));
  }
};
export {
  Yl as TwcButton,
  Jl as TwcCheckbox,
  Zl as TwcHeading,
  su as TwcIcon,
  Xl as TwcInput,
  eu as TwcLabel,
  tu as TwcLink,
  ru as TwcParagraph,
  ou as TwcPhoneInput,
  nu as TwcSelect,
  iu as TwcSpinner
};
