import { reactive as po, defineComponent as H, useAttrs as zt, openBlock as y, createElementBlock as T, mergeProps as Ot, unref as k, createTextVNode as Ke, toDisplayString as ae, createBlock as R, resolveDynamicComponent as lt, normalizeClass as L, withCtx as G, ref as Ge, provide as fo, h as Qe, TransitionGroup as ho, pushScopeId as go, popScopeId as mo, toRefs as we, renderSlot as P, createCommentVNode as I, createElementVNode as j, nextTick as bo, computed as x, resolveComponent as tt, normalizeProps as te, Fragment as Nt, Comment as vo, withDirectives as At, vModelCheckbox as yo, isRef as Nr, vModelDynamic as wo, renderList as xo, vModelSelect as ko, useSlots as _o, getCurrentInstance as $o, watch as Gt, guardReactiveProps as fe, withScopeId as Co, normalizeStyle as gt, withKeys as So, createVNode as To, getCurrentScope as Po, onScopeDispose as zo, inject as Oo, createSlots as Ar } from "vue";
po({});
function No() {
  for (var e = 0, t, r, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Mr(t)) && (o && (o += " "), o += r);
  return o;
}
function Mr(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", o = 0; o < e.length; o++)
    e[o] && (t = Mr(e[o])) && (r && (r += " "), r += t);
  return r;
}
var Mt = "-";
function Ao(e) {
  var t = Eo(e), r = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, n = o === void 0 ? {} : o;
  function i(l) {
    var a = l.split(Mt);
    return a[0] === "" && a.length !== 1 && a.shift(), Er(a, t) || Mo(l);
  }
  function s(l, a) {
    var u = r[l] || [];
    return a && n[l] ? [].concat(u, n[l]) : u;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function Er(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), n = o ? Er(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length !== 0) {
    var i = e.join(Mt);
    return (s = t.validators.find(function(l) {
      var a = l.validator;
      return a(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var qt = /^\[(.+)\]$/;
function Mo(e) {
  if (qt.test(e)) {
    var t = qt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Eo(e) {
  var t = e.theme, r = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, n = Lo(Object.entries(e.classGroups), r);
  return n.forEach(function(i) {
    var s = i[0], l = i[1];
    wt(l, o, s, t);
  }), o;
}
function wt(e, t, r, o) {
  e.forEach(function(n) {
    if (typeof n == "string") {
      var i = n === "" ? t : Qt(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (jo(n)) {
        wt(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(function(s) {
      var l = s[0], a = s[1];
      wt(a, Qt(t, l), r, o);
    });
  });
}
function Qt(e, t) {
  var r = e;
  return t.split(Mt).forEach(function(o) {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function jo(e) {
  return e.isThemeGetter;
}
function Lo(e, t) {
  return t ? e.map(function(r) {
    var o = r[0], n = r[1], i = n.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(l) {
        var a = l[0], u = l[1];
        return [t + a, u];
      })) : s;
    });
    return [o, i];
  }) : e;
}
function Ro(e) {
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
var jr = "!";
function Io(e) {
  var t = e.separator || ":", r = t.length === 1, o = t[0], n = t.length;
  return function(i) {
    for (var s = [], l = 0, a = 0, u, c = 0; c < i.length; c++) {
      var d = i[c];
      if (l === 0) {
        if (d === o && (r || i.slice(c, c + n) === t)) {
          s.push(i.slice(a, c)), a = c + n;
          continue;
        }
        if (d === "/") {
          u = c;
          continue;
        }
      }
      d === "[" ? l++ : d === "]" && l--;
    }
    var p = s.length === 0 ? i : i.substring(a), f = p.startsWith(jr), g = f ? p.substring(1) : p, h = u && u > a ? u - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: h
    };
  };
}
function Bo(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(o) {
    var n = o[0] === "[";
    n ? (t.push.apply(t, r.sort().concat([o])), r = []) : r.push(o);
  }), t.push.apply(t, r.sort()), t;
}
function Fo(e) {
  return {
    cache: Ro(e.cacheSize),
    splitModifiers: Io(e),
    ...Ao(e)
  };
}
var Ho = /\s+/;
function Do(e, t) {
  var r = t.splitModifiers, o = t.getClassGroupId, n = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Ho).map(function(s) {
    var l = r(s), a = l.modifiers, u = l.hasImportantModifier, c = l.baseClassName, d = l.maybePostfixModifierPosition, p = o(d ? c.substring(0, d) : c), f = !!d;
    if (!p) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (p = o(c), !p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      f = !1;
    }
    var g = Bo(a).join(":"), h = u ? g + jr : g;
    return {
      isTailwindClass: !0,
      modifierId: h,
      classGroupId: p,
      originalClassName: s,
      hasPostfixModifier: f
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var l = s.modifierId, a = s.classGroupId, u = s.hasPostfixModifier, c = l + a;
    return i.has(c) ? !1 : (i.add(c), n(a, u).forEach(function(d) {
      return i.add(l + d);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Wo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o, n, i, s = l;
  function l(u) {
    var c = t[0], d = t.slice(1), p = d.reduce(function(f, g) {
      return g(f);
    }, c());
    return o = Fo(p), n = o.cache.get, i = o.cache.set, s = a, a(u);
  }
  function a(u) {
    var c = n(u);
    if (c)
      return c;
    var d = Do(u, o);
    return i(u, d), d;
  }
  return function() {
    return s(No.apply(null, arguments));
  };
}
function A(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Lr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Vo = /^\d+\/\d+$/, Go = /* @__PURE__ */ new Set(["px", "full", "screen"]), qo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Uo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function U(e) {
  return ve(e) || Go.has(e) || Vo.test(e) || xt(e);
}
function xt(e) {
  return ke(e, "length", en);
}
function Jo(e) {
  return ke(e, "size", Rr);
}
function Zo(e) {
  return ke(e, "position", Rr);
}
function Yo(e) {
  return ke(e, "url", tn);
}
function Ue(e) {
  return ke(e, "number", ve);
}
function ve(e) {
  return !Number.isNaN(Number(e));
}
function Ko(e) {
  return e.endsWith("%") && ve(e.slice(0, -1));
}
function Me(e) {
  return Ut(e) || ke(e, "number", Ut);
}
function _(e) {
  return Lr.test(e);
}
function Ee() {
  return !0;
}
function ne(e) {
  return qo.test(e);
}
function Xo(e) {
  return ke(e, "", rn);
}
function ke(e, t, r) {
  var o = Lr.exec(e);
  return o ? o[1] ? o[1] === t : r(o[2]) : !1;
}
function en(e) {
  return Qo.test(e);
}
function Rr() {
  return !1;
}
function tn(e) {
  return e.startsWith("url(");
}
function Ut(e) {
  return Number.isInteger(Number(e));
}
function rn(e) {
  return Uo.test(e);
}
function on() {
  var e = A("colors"), t = A("spacing"), r = A("blur"), o = A("brightness"), n = A("borderColor"), i = A("borderRadius"), s = A("borderSpacing"), l = A("borderWidth"), a = A("contrast"), u = A("grayscale"), c = A("hueRotate"), d = A("invert"), p = A("gap"), f = A("gradientColorStops"), g = A("gradientColorStopPositions"), h = A("inset"), v = A("margin"), m = A("opacity"), b = A("padding"), $ = A("saturate"), M = A("scale"), E = A("sepia"), O = A("skew"), D = A("space"), q = A("translate"), W = function() {
    return ["auto", "contain", "none"];
  }, N = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, z = function() {
    return ["auto", _, t];
  }, w = function() {
    return [_, t];
  }, S = function() {
    return ["", U];
  }, B = function() {
    return ["auto", ve, _];
  }, V = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, re = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, he = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ge = function() {
    return ["", "0", _];
  }, Ae = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, oe = function() {
    return [ve, Ue];
  }, Ce = function() {
    return [ve, _];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ee],
      spacing: [U],
      blur: ["none", "", ne, _],
      brightness: oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ne, _],
      borderSpacing: w(),
      borderWidth: S(),
      contrast: oe(),
      grayscale: ge(),
      hueRotate: Ce(),
      invert: ge(),
      gap: w(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ko, xt],
      inset: z(),
      margin: z(),
      opacity: oe(),
      padding: w(),
      saturate: oe(),
      scale: oe(),
      sepia: ge(),
      skew: Ce(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", _]
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
        columns: [ne]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ae()
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
        object: [].concat(V(), [_])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        basis: z()
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
        flex: ["1", "auto", "initial", "none", _]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ge()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ge()
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
        "grid-cols": [Ee]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Me]
        }, _]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ee]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Me]
        }, _]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", _]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", _]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(he())
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
        content: ["normal"].concat(he(), ["baseline"])
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
        "place-content": [].concat(he(), ["baseline"])
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", _, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", _, U]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ne]
        }, ne, _]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [_, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", _, U]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [_, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ne, xt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ee]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ve, Ue]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", _]
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
        "placeholder-opacity": [m]
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
        "text-opacity": [m]
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
        decoration: [].concat(F(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", U]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _, U]
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
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _]
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
        content: ["none", _]
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
        "bg-opacity": [m]
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
        bg: [].concat(V(), [Zo])
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
        bg: ["auto", "cover", "contain", Jo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yo]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
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
        "border-opacity": [m]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(F(), ["hidden"])
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
        "divide-opacity": [m]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: F()
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
        outline: [""].concat(F())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [U]
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
        ring: S()
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
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [U]
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
        shadow: ["", "inner", "none", ne, Xo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ee]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": re()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        contrast: [a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ne, _]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-contrast": [a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ce()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", _]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ce()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", _]
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
        scale: [M]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [M]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [M]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Me, _]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [q]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [q]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _]
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        "will-change": ["auto", "scroll", "contents", "transform", _]
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
        stroke: [U, Ue]
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
var ee = /* @__PURE__ */ Wo(on);
const kt = (e) => ee(e);
function nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ir = { exports: {} };
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
            for (var a in i)
              t.call(i, a) && i[a] && o.push(a);
          }
        }
      }
      return o.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ir);
var sn = Ir.exports;
const ln = /* @__PURE__ */ nn(sn), an = {
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
}, un = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function dn(e) {
  const t = x(() => an[e.size.value]), r = x(() => un[e.color.value]), o = x(() => "text-gray-200 dark:text-gray-600"), n = x(() => "animate-spin");
  return { spinnerClasses: x(() => ln(
    n.value,
    o.value,
    r.value,
    t.value
  )) };
}
const cn = /* @__PURE__ */ j("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), pn = /* @__PURE__ */ j("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), fn = [
  cn,
  pn
], Je = /* @__PURE__ */ H({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = dn(we(t));
    return (o, n) => (y(), T("svg", {
      class: L(k(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, fn, 2));
  }
}), Jt = {
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
}, Zt = {
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
}, Yt = {
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
}, Kt = {
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
}, hn = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, gn = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, Xt = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, mt = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], mn = ["alternative", "light"];
function bn(e) {
  const t = _o(), r = x(() => e.square.value ? gn[e.size.value] : hn[e.size.value]), o = x(() => {
    const i = !!e.gradient.value, s = !!e.color.value, l = e.outline.value;
    let a = "", u = "";
    if (i && l)
      mt.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (u = Kt.default[e.gradient.value], e.disabled.value || (a = Kt.hover[e.gradient.value]));
    else if (i)
      u = Yt.default[e.gradient.value], e.disabled.value || (a = Yt.hover[e.gradient.value]);
    else if (s && l)
      if (mn.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const d = e.color.value;
        u = Zt.default[d], e.disabled.value || (a = Zt.hover[d]);
      }
    else {
      const d = e.color.value;
      u = Jt.default[d], e.disabled.value || (a = Jt.hover[d]);
    }
    let c = "";
    return e.shadow.value === "" ? e.gradient.value && mt.includes(e.gradient.value) && (c = Xt[e.gradient.value]) : typeof e.shadow.value == "string" && mt.includes(e.shadow.value) && (c = Xt[e.shadow.value]), [
      u,
      a,
      c,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      i && l ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((d) => d).join(" ");
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
function vn(e) {
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
const yn = {
  key: 0,
  class: "mr-2"
}, wn = {
  key: 0,
  class: "mr-2"
}, xn = {
  key: 1,
  class: "ml-2"
}, kn = {
  key: 1,
  class: "ml-2"
}, _n = /* @__PURE__ */ H({
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
    const t = e, r = x(() => bn(we(t))), o = x(() => kt(r.value.wrapperClasses)), n = x(() => kt(r.value.spanClasses)), i = x(() => t.outline && t.gradient), s = x(() => t.loading && t.loadingPosition === "prefix"), l = x(() => t.loading && t.loadingPosition === "suffix"), { color: a, size: u } = vn(we(t)), c = t.tag !== "a" ? tt(t.tag) : "a", d = t.href ? c : "button", p = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (f, g) => (y(), R(lt(k(d)), te({
      class: o.value,
      [k(p) || ""]: f.href,
      disabled: k(d) === "button" && f.disabled
    }), {
      default: G(() => [
        !i.value && (f.$slots.prefix || s.value) ? (y(), T("div", yn, [
          s.value ? (y(), R(Je, {
            key: 0,
            color: k(a),
            size: k(u)
          }, null, 8, ["color", "size"])) : P(f.$slots, "prefix", { key: 1 })
        ])) : I("", !0),
        j("span", {
          class: L(n.value)
        }, [
          i.value && (f.$slots.prefix || s.value) ? (y(), T("span", wn, [
            s.value ? (y(), R(Je, {
              key: 0,
              color: k(a),
              size: k(u)
            }, null, 8, ["color", "size"])) : P(f.$slots, "prefix", { key: 1 })
          ])) : I("", !0),
          P(f.$slots, "default"),
          i.value && (f.$slots.suffix || l.value) ? (y(), T("span", xn, [
            l.value ? (y(), R(Je, {
              key: 0,
              color: k(a),
              size: k(u)
            }, null, 8, ["color", "size"])) : P(f.$slots, "suffix", { key: 1 })
          ])) : I("", !0)
        ], 2),
        !i.value && (f.$slots.suffix || l.value) ? (y(), T("div", kn, [
          l.value ? (y(), R(Je, {
            key: 0,
            color: k(a),
            size: k(u)
          }, null, 8, ["color", "size"])) : P(f.$slots, "suffix", { key: 1 })
        ])) : I("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
var er;
const Br = typeof window < "u", $n = (e) => typeof e < "u", Cn = (e) => typeof e == "function";
Br && (er = window == null ? void 0 : window.navigator) != null && er.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Sn(e) {
  return typeof e == "function" ? e() : k(e);
}
function Tn(e) {
  return e;
}
function Pn(e) {
  return Po() ? (zo(e), !0) : !1;
}
function zn(e, t, r = {}) {
  const {
    immediate: o = !0
  } = r, n = Ge(!1);
  let i = null;
  function s() {
    i && (clearTimeout(i), i = null);
  }
  function l() {
    n.value = !1, s();
  }
  function a(...u) {
    s(), n.value = !0, i = setTimeout(() => {
      n.value = !1, i = null, e(...u);
    }, Sn(t));
  }
  return o && (n.value = !0, Br && a()), Pn(l), {
    isPending: n,
    start: a,
    stop: l
  };
}
function On(e) {
  return JSON.parse(JSON.stringify(e));
}
const tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rr = "__vueuse_ssr_handlers__";
tr[rr] = tr[rr] || {};
var or;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(or || (or = {}));
var Nn = Object.defineProperty, nr = Object.getOwnPropertySymbols, An = Object.prototype.hasOwnProperty, Mn = Object.prototype.propertyIsEnumerable, ir = (e, t, r) => t in e ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, En = (e, t) => {
  for (var r in t || (t = {}))
    An.call(t, r) && ir(e, r, t[r]);
  if (nr)
    for (var r of nr(t))
      Mn.call(t, r) && ir(e, r, t[r]);
  return e;
};
const jn = {
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
En({
  linear: Tn
}, jn);
function Fr(e, t, r, o = {}) {
  var n, i, s;
  const {
    clone: l = !1,
    passive: a = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: d
  } = o, p = $o(), f = r || (p == null ? void 0 : p.emit) || ((n = p == null ? void 0 : p.$emit) == null ? void 0 : n.bind(p)) || ((s = (i = p == null ? void 0 : p.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let g = u;
  t || (t = "modelValue"), g = u || g || `update:${t.toString()}`;
  const h = (m) => l ? Cn(l) ? l(m) : On(m) : m, v = () => $n(e[t]) ? h(e[t]) : d;
  if (a) {
    const m = v(), b = Ge(m);
    return Gt(() => e[t], ($) => b.value = h($)), Gt(b, ($) => {
      ($ !== e[t] || c) && f(g, $);
    }, { deep: c }), b;
  } else
    return x({
      get() {
        return v();
      },
      set(m) {
        f(g, m);
      }
    });
}
var Ln = typeof global == "object" && global && global.Object === Object && global;
const Rn = Ln;
var In = typeof self == "object" && self && self.Object === Object && self, Bn = Rn || In || Function("return this")();
const Et = Bn;
var Fn = Et.Symbol;
const ce = Fn;
var Hr = Object.prototype, Hn = Hr.hasOwnProperty, Dn = Hr.toString, je = ce ? ce.toStringTag : void 0;
function Wn(e) {
  var t = Hn.call(e, je), r = e[je];
  try {
    e[je] = void 0;
    var o = !0;
  } catch {
  }
  var n = Dn.call(e);
  return o && (t ? e[je] = r : delete e[je]), n;
}
var Vn = Object.prototype, Gn = Vn.toString;
function qn(e) {
  return Gn.call(e);
}
var Qn = "[object Null]", Un = "[object Undefined]", sr = ce ? ce.toStringTag : void 0;
function jt(e) {
  return e == null ? e === void 0 ? Un : Qn : sr && sr in Object(e) ? Wn(e) : qn(e);
}
function Lt(e) {
  return e != null && typeof e == "object";
}
var Jn = "[object Symbol]";
function Rt(e) {
  return typeof e == "symbol" || Lt(e) && jt(e) == Jn;
}
function Zn(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = Array(o); ++r < o; )
    n[r] = t(e[r], r, e);
  return n;
}
var Yn = Array.isArray;
const qe = Yn;
var Kn = 1 / 0, lr = ce ? ce.prototype : void 0, ar = lr ? lr.toString : void 0;
function Dr(e) {
  if (typeof e == "string")
    return e;
  if (qe(e))
    return Zn(e, Dr) + "";
  if (Rt(e))
    return ar ? ar.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Kn ? "-0" : t;
}
function rt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Xn(e) {
  return e;
}
var ei = "[object AsyncFunction]", ti = "[object Function]", ri = "[object GeneratorFunction]", oi = "[object Proxy]";
function ni(e) {
  if (!rt(e))
    return !1;
  var t = jt(e);
  return t == ti || t == ri || t == ei || t == oi;
}
var ii = Et["__core-js_shared__"];
const bt = ii;
var ur = function() {
  var e = /[^.]+$/.exec(bt && bt.keys && bt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function si(e) {
  return !!ur && ur in e;
}
var li = Function.prototype, ai = li.toString;
function ui(e) {
  if (e != null) {
    try {
      return ai.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var di = /[\\^$.*+?()[\]{}|]/g, ci = /^\[object .+?Constructor\]$/, pi = Function.prototype, fi = Object.prototype, hi = pi.toString, gi = fi.hasOwnProperty, mi = RegExp(
  "^" + hi.call(gi).replace(di, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bi(e) {
  if (!rt(e) || si(e))
    return !1;
  var t = ni(e) ? mi : ci;
  return t.test(ui(e));
}
function vi(e, t) {
  return e == null ? void 0 : e[t];
}
function It(e, t) {
  var r = vi(e, t);
  return bi(r) ? r : void 0;
}
function yi(e, t, r) {
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
var wi = 800, xi = 16, ki = Date.now;
function _i(e) {
  var t = 0, r = 0;
  return function() {
    var o = ki(), n = xi - (o - r);
    if (r = o, n > 0) {
      if (++t >= wi)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function $i(e) {
  return function() {
    return e;
  };
}
var Ci = function() {
  try {
    var e = It(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ot = Ci;
var Si = ot ? function(e, t) {
  return ot(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $i(t),
    writable: !0
  });
} : Xn;
const Ti = Si;
var Pi = _i(Ti);
const zi = Pi;
var Oi = 9007199254740991, Ni = /^(?:0|[1-9]\d*)$/;
function Wr(e, t) {
  var r = typeof e;
  return t = t ?? Oi, !!t && (r == "number" || r != "symbol" && Ni.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ai(e, t, r) {
  t == "__proto__" && ot ? ot(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Vr(e, t) {
  return e === t || e !== e && t !== t;
}
var Mi = Object.prototype, Ei = Mi.hasOwnProperty;
function ji(e, t, r) {
  var o = e[t];
  (!(Ei.call(e, t) && Vr(o, r)) || r === void 0 && !(t in e)) && Ai(e, t, r);
}
var dr = Math.max;
function Li(e, t, r) {
  return t = dr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, n = -1, i = dr(o.length - t, 0), s = Array(i); ++n < i; )
      s[n] = o[t + n];
    n = -1;
    for (var l = Array(t + 1); ++n < t; )
      l[n] = o[n];
    return l[t] = r(s), yi(e, this, l);
  };
}
var Ri = 9007199254740991;
function Ii(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ri;
}
var Bi = "[object Arguments]";
function cr(e) {
  return Lt(e) && jt(e) == Bi;
}
var Gr = Object.prototype, Fi = Gr.hasOwnProperty, Hi = Gr.propertyIsEnumerable, Di = cr(/* @__PURE__ */ function() {
  return arguments;
}()) ? cr : function(e) {
  return Lt(e) && Fi.call(e, "callee") && !Hi.call(e, "callee");
};
const qr = Di;
var Wi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vi = /^\w*$/;
function Gi(e, t) {
  if (qe(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Rt(e) ? !0 : Vi.test(e) || !Wi.test(e) || t != null && e in Object(t);
}
var qi = It(Object, "create");
const He = qi;
function Qi() {
  this.__data__ = He ? He(null) : {}, this.size = 0;
}
function Ui(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ji = "__lodash_hash_undefined__", Zi = Object.prototype, Yi = Zi.hasOwnProperty;
function Ki(e) {
  var t = this.__data__;
  if (He) {
    var r = t[e];
    return r === Ji ? void 0 : r;
  }
  return Yi.call(t, e) ? t[e] : void 0;
}
var Xi = Object.prototype, es = Xi.hasOwnProperty;
function ts(e) {
  var t = this.__data__;
  return He ? t[e] !== void 0 : es.call(t, e);
}
var rs = "__lodash_hash_undefined__";
function os(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = He && t === void 0 ? rs : t, this;
}
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
xe.prototype.clear = Qi;
xe.prototype.delete = Ui;
xe.prototype.get = Ki;
xe.prototype.has = ts;
xe.prototype.set = os;
function ns() {
  this.__data__ = [], this.size = 0;
}
function at(e, t) {
  for (var r = e.length; r--; )
    if (Vr(e[r][0], t))
      return r;
  return -1;
}
var is = Array.prototype, ss = is.splice;
function ls(e) {
  var t = this.__data__, r = at(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : ss.call(t, r, 1), --this.size, !0;
}
function as(e) {
  var t = this.__data__, r = at(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function us(e) {
  return at(this.__data__, e) > -1;
}
function ds(e, t) {
  var r = this.__data__, o = at(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Oe.prototype.clear = ns;
Oe.prototype.delete = ls;
Oe.prototype.get = as;
Oe.prototype.has = us;
Oe.prototype.set = ds;
var cs = It(Et, "Map");
const ps = cs;
function fs() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (ps || Oe)(),
    string: new xe()
  };
}
function hs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ut(e, t) {
  var r = e.__data__;
  return hs(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function gs(e) {
  var t = ut(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ms(e) {
  return ut(this, e).get(e);
}
function bs(e) {
  return ut(this, e).has(e);
}
function vs(e, t) {
  var r = ut(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
_e.prototype.clear = fs;
_e.prototype.delete = gs;
_e.prototype.get = ms;
_e.prototype.has = bs;
_e.prototype.set = vs;
var ys = "Expected a function";
function Bt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ys);
  var r = function() {
    var o = arguments, n = t ? t.apply(this, o) : o[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = e.apply(this, o);
    return r.cache = i.set(n, s) || i, s;
  };
  return r.cache = new (Bt.Cache || _e)(), r;
}
Bt.Cache = _e;
var ws = 500;
function xs(e) {
  var t = Bt(e, function(o) {
    return r.size === ws && r.clear(), o;
  }), r = t.cache;
  return t;
}
var ks = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _s = /\\(\\)?/g, $s = xs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ks, function(r, o, n, i) {
    t.push(n ? i.replace(_s, "$1") : o || r);
  }), t;
});
const Cs = $s;
function Ss(e) {
  return e == null ? "" : Dr(e);
}
function dt(e, t) {
  return qe(e) ? e : Gi(e, t) ? [e] : Cs(Ss(e));
}
var Ts = 1 / 0;
function Ft(e) {
  if (typeof e == "string" || Rt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ts ? "-0" : t;
}
function Ps(e, t) {
  t = dt(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[Ft(t[r++])];
  return r && r == o ? e : void 0;
}
function zs(e, t) {
  for (var r = -1, o = t.length, n = e.length; ++r < o; )
    e[n + r] = t[r];
  return e;
}
var pr = ce ? ce.isConcatSpreadable : void 0;
function Os(e) {
  return qe(e) || qr(e) || !!(pr && e && e[pr]);
}
function Qr(e, t, r, o, n) {
  var i = -1, s = e.length;
  for (r || (r = Os), n || (n = []); ++i < s; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Qr(l, t - 1, r, o, n) : zs(n, l) : o || (n[n.length] = l);
  }
  return n;
}
function Ns(e) {
  var t = e == null ? 0 : e.length;
  return t ? Qr(e, 1) : [];
}
function As(e) {
  return zi(Li(e, void 0, Ns), e + "");
}
function Ms(e, t) {
  return e != null && t in Object(e);
}
function Es(e, t, r) {
  t = dt(t, e);
  for (var o = -1, n = t.length, i = !1; ++o < n; ) {
    var s = Ft(t[o]);
    if (!(i = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return i || ++o != n ? i : (n = e == null ? 0 : e.length, !!n && Ii(n) && Wr(s, n) && (qe(e) || qr(e)));
}
function js(e, t) {
  return e != null && Es(e, t, Ms);
}
function Ls(e, t, r, o) {
  if (!rt(e))
    return e;
  t = dt(t, e);
  for (var n = -1, i = t.length, s = i - 1, l = e; l != null && ++n < i; ) {
    var a = Ft(t[n]), u = r;
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return e;
    if (n != s) {
      var c = l[a];
      u = o ? o(c, a, l) : void 0, u === void 0 && (u = rt(c) ? c : Wr(t[n + 1]) ? [] : {});
    }
    ji(l, a, u), l = l[a];
  }
  return e;
}
function Rs(e, t, r) {
  for (var o = -1, n = t.length, i = {}; ++o < n; ) {
    var s = t[o], l = Ps(e, s);
    r(l, s) && Ls(i, dt(s, e), l);
  }
  return i;
}
function Is(e, t) {
  return Rs(e, t, function(r, o) {
    return js(e, o);
  });
}
var Bs = As(function(e, t) {
  return e == null ? {} : Is(e, t);
});
const Fs = Bs;
function _t(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Ke(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        _t(o, t, r);
        return;
      }
      if (o.type === Nt) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && _t(o.children, t, r);
      } else
        o.type !== vo && r.push(o);
    }
  }), r;
}
function Hs(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = _t(o(r));
  return n.length === 1 ? n[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const Ds = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Ws(e, t) {
  Object.entries(Ds).forEach(([, r]) => {
    r.forEach((o) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const n = e.props[o], i = t[o];
      n ? e.props[o] = (...s) => {
        n(...s), i(...s);
      } : e.props[o] = i;
    });
  });
}
H({
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
    }, r = Hs(e, "default"), o = [
      t
    ];
    return r != null && r.props && o.push(
      Fs(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Ws(
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
const Vs = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, Gs = (e, t = Vs) => {
  const r = Object.keys(t).find((o) => e.includes(o));
  return r ? t[r](e) : e.substring(0, e.indexOf("-"));
};
function Le(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const o = Array.isArray(r) ? Array.from(r).map((u) => u.split(" ")).flat() : r.split(" "), n = o.map((u) => Gs(u)), i = n.filter((u) => !t.types.includes(u)), s = [...n.filter((u) => t.types.includes(u)), ...i], l = [.../* @__PURE__ */ new Set([...t.types, ...s])], a = l.map((u) => {
      if (s.includes(u)) {
        const d = n.indexOf(u);
        if (d >= 0)
          return o[d] || "";
      }
      const c = t.types.indexOf(u);
      return c >= 0 && t.classes[c] || "";
    }).filter((u) => !!u);
    return {
      types: l,
      classes: a
    };
  }, { types: [], classes: [] }).classes.join(" ");
}
const qs = "flowbite-themable-injection-key", Se = {
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
function Qs(e) {
  const t = Oo(qs, Ge(null)), r = x(() => e || t.value), o = x(() => !!(t != null && t.value)), n = x(
    () => r.value ? Se[r.value].background : ""
  ), i = x(
    () => r.value ? Se[r.value].border : ""
  ), s = x(() => (t == null ? void 0 : t.value) || void 0), l = x(
    () => r.value ? Se[r.value].disabled : ""
  ), a = x(
    () => r.value ? Se[r.value].focus : ""
  ), u = x(
    () => r.value ? Se[r.value].hover : ""
  ), c = x(
    () => r.value ? Se[r.value].text : ""
  );
  return {
    backgroundClasses: n,
    borderClasses: i,
    color: s,
    disabledClasses: l,
    focusClasses: a,
    hoverClasses: u,
    isActive: o,
    textClasses: c
  };
}
const Us = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, Js = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, fr = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", hr = "text-sm font-normal";
function Zs(e) {
  const t = x(() => Us[e.type.value]), r = x(() => {
    const n = Js[e.alignment.value];
    return e.divide.value ? Le(fr, "dark:divide-gray-700 divide-x divide-gray-200", n) : Le(fr, n);
  }), o = x(() => e.type.value !== "empty" && e.divide.value ? Le(hr, "pl-3") : hr);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: o
  };
}
function Ys(e) {
  var a;
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: o,
    focusClasses: n,
    hoverClasses: i,
    isActive: s,
    textClasses: l
  } = Qs((a = e.theme) == null ? void 0 : a.value);
  return {
    classes: x(() => {
      if (!s.value)
        return "";
      const u = [];
      return e.apply.value.includes("text") && u.push(l.value), e.apply.value.includes("border") && u.push(r.value), e.apply.value.includes("background") && u.push(t.value), e.apply.value.includes("hover") && u.push(i.value), e.apply.value.includes("disabled") && u.push(o.value), e.apply.value.includes("focus") && u.push(n.value), u.join(" ");
    })
  };
}
const Ks = /* @__PURE__ */ H({
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
    const t = e, r = zt(), { classes: o } = Ys(we(t)), n = x(() => r.class || "");
    return (i, s) => (y(), R(lt(e.tag), {
      class: L(k(Le)(n.value, k(o)))
    }, {
      default: G(() => [
        P(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xs = {
  key: 1,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, el = /* @__PURE__ */ j("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), tl = [
  el
], rl = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ol = /* @__PURE__ */ j("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), nl = [
  ol
], il = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, sl = /* @__PURE__ */ j("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), ll = [
  sl
], al = /* @__PURE__ */ j("span", { class: "sr-only" }, "Close", -1), ul = /* @__PURE__ */ j("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ j("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), dl = [
  al,
  ul
], gr = /* @__PURE__ */ H({
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
    const r = e, o = Ge(!0), {
      typeClasses: n,
      wrapperClasses: i,
      contentClasses: s
    } = Zs(we(r)), l = () => {
      t("close"), o.value = !1;
    };
    return (a, u) => o.value ? (y(), T("div", {
      key: 0,
      id: "toast-default",
      class: L(k(i)),
      role: "alert"
    }, [
      e.type !== "empty" || a.$slots.icon ? (y(), R(Ks, {
        key: 0,
        apply: ["background", "text"],
        class: L(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", k(n)])
      }, {
        default: G(() => [
          a.$slots.icon ? P(a.$slots, "icon", {
            key: 0,
            class: L({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (y(), T("svg", Xs, tl)) : e.type === "danger" ? (y(), T("svg", rl, nl)) : e.type === "warning" ? (y(), T("svg", il, ll)) : I("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : I("", !0),
      j("div", {
        class: L([k(s), { "ml-3": a.$slots.icon || e.type !== "empty" }])
      }, [
        P(a.$slots, "default")
      ], 2),
      e.closable ? (y(), T("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: l
      }, dl)) : I("", !0)
    ], 2)) : I("", !0);
  }
}), cl = "flowbite-toast-injection-key";
H({
  components: {
    FwbToast: gr
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = Ge([]), t = (i, s) => {
      zn(() => n(i), s);
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
    return fo(cl, {
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
    return Qe("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      Qe(
        ho,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (n) => n.component ? Qe(
              n.component,
              {
                key: n.id,
                onClose: () => o(n.id),
                ...n.componentProps ? n.componentProps : {}
              },
              () => n.text
            ) : Qe(
              gr,
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
function J(e) {
  return e.split("-")[1];
}
function Ht(e) {
  return e === "y" ? "height" : "width";
}
function Y(e) {
  return e.split("-")[0];
}
function Ne(e) {
  return ["top", "bottom"].includes(Y(e)) ? "x" : "y";
}
function mr(e, t, r) {
  let { reference: o, floating: n } = e;
  const i = o.x + o.width / 2 - n.width / 2, s = o.y + o.height / 2 - n.height / 2, l = Ne(t), a = Ht(l), u = o[a] / 2 - n[a] / 2, c = l === "x";
  let d;
  switch (Y(t)) {
    case "top":
      d = { x: i, y: o.y - n.height };
      break;
    case "bottom":
      d = { x: i, y: o.y + o.height };
      break;
    case "right":
      d = { x: o.x + o.width, y: s };
      break;
    case "left":
      d = { x: o.x - n.width, y: s };
      break;
    default:
      d = { x: o.x, y: o.y };
  }
  switch (J(t)) {
    case "start":
      d[l] -= u * (r && c ? -1 : 1);
      break;
    case "end":
      d[l] += u * (r && c ? -1 : 1);
  }
  return d;
}
const pl = async (e, t, r) => {
  const { placement: o = "bottom", strategy: n = "absolute", middleware: i = [], platform: s } = r, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: n }), { x: c, y: d } = mr(u, o, a), p = o, f = {}, g = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: v, fn: m } = l[h], { x: b, y: $, data: M, reset: E } = await m({ x: c, y: d, initialPlacement: o, placement: p, strategy: n, middlewareData: f, rects: u, platform: s, elements: { reference: e, floating: t } });
    c = b ?? c, d = $ ?? d, f = { ...f, [v]: { ...f[v], ...M } }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: n }) : E.rects), { x: c, y: d } = mr(u, p, a)), h = -1);
  }
  return { x: c, y: d, placement: p, strategy: n, middlewareData: f };
};
function $e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ur(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Re(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ct(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: o, y: n, platform: i, rects: s, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: p = !1, padding: f = 0 } = $e(t, e), g = Ur(f), h = l[p ? d === "floating" ? "reference" : "floating" : d], v = Re(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(h))) == null || r ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), m = d === "floating" ? { ...s.floating, x: o, y: n } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(b)) && await (i.getScale == null ? void 0 : i.getScale(b)) || { x: 1, y: 1 }, M = Re(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: b, strategy: a }) : m);
  return { top: (v.top - M.top + g.top) / $.y, bottom: (M.bottom - v.bottom + g.bottom) / $.y, left: (v.left - M.left + g.left) / $.x, right: (M.right - v.right + g.right) / $.x };
}
const De = Math.min, be = Math.max;
function $t(e, t, r) {
  return be(e, De(t, r));
}
const fl = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: o, placement: n, rects: i, platform: s, elements: l } = t, { element: a, padding: u = 0 } = $e(e, t) || {};
  if (a == null)
    return {};
  const c = Ur(u), d = { x: r, y: o }, p = Ne(n), f = Ht(p), g = await s.getDimensions(a), h = p === "y", v = h ? "top" : "left", m = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", $ = i.reference[f] + i.reference[p] - d[p] - i.floating[f], M = d[p] - i.reference[p], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
  let O = E ? E[b] : 0;
  O && await (s.isElement == null ? void 0 : s.isElement(E)) || (O = l.floating[b] || i.floating[f]);
  const D = $ / 2 - M / 2, q = O / 2 - g[f] / 2 - 1, W = De(c[v], q), N = De(c[m], q), z = W, w = O - g[f] - N, S = O / 2 - g[f] / 2 + D, B = $t(z, S, w), V = J(n) != null && S != B && i.reference[f] / 2 - (S < z ? W : N) - g[f] / 2 < 0 ? S < z ? z - S : w - S : 0;
  return { [p]: d[p] - V, data: { [p]: B, centerOffset: S - B + V } };
} }), hl = ["top", "right", "bottom", "left"], br = hl.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), gl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gl[t]);
}
function Jr(e, t, r) {
  r === void 0 && (r = !1);
  const o = J(e), n = Ne(e), i = Ht(n);
  let s = n === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = nt(s)), { main: s, cross: nt(s) };
}
const ml = { start: "end", end: "start" };
function Xe(e) {
  return e.replace(/start|end/g, (t) => ml[t]);
}
const bl = function(e) {
  return e === void 0 && (e = {}), { name: "autoPlacement", options: e, async fn(t) {
    var r, o, n;
    const { rects: i, middlewareData: s, placement: l, platform: a, elements: u } = t, { crossAxis: c = !1, alignment: d, allowedPlacements: p = br, autoAlignment: f = !0, ...g } = $e(e, t), h = d !== void 0 || p === br ? function(N, z, w) {
      return (N ? [...w.filter((S) => J(S) === N), ...w.filter((S) => J(S) !== N)] : w.filter((S) => Y(S) === S)).filter((S) => !N || J(S) === N || !!z && Xe(S) !== S);
    }(d || null, f, p) : p, v = await ct(t, g), m = ((r = s.autoPlacement) == null ? void 0 : r.index) || 0, b = h[m];
    if (b == null)
      return {};
    const { main: $, cross: M } = Jr(b, i, await (a.isRTL == null ? void 0 : a.isRTL(u.floating)));
    if (l !== b)
      return { reset: { placement: h[0] } };
    const E = [v[Y(b)], v[$], v[M]], O = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], { placement: b, overflows: E }], D = h[m + 1];
    if (D)
      return { data: { index: m + 1, overflows: O }, reset: { placement: D } };
    const q = O.map((N) => {
      const z = J(N.placement);
      return [N.placement, z && c ? N.overflows.slice(0, 2).reduce((w, S) => w + S, 0) : N.overflows[0], N.overflows];
    }).sort((N, z) => N[1] - z[1]), W = ((n = q.filter((N) => N[2].slice(0, J(N[0]) ? 2 : 3).every((z) => z <= 0))[0]) == null ? void 0 : n[0]) || q[0][0];
    return W !== l ? { data: { index: m + 1, overflows: O }, reset: { placement: W } } : {};
  } };
}, vl = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: o, middlewareData: n, rects: i, initialPlacement: s, platform: l, elements: a } = t, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: g = !0, ...h } = $e(e, t), v = Y(o), m = Y(s) === s, b = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), $ = d || (m || !g ? [nt(s)] : function(z) {
      const w = nt(z);
      return [Xe(z), w, Xe(w)];
    }(s));
    d || f === "none" || $.push(...function(z, w, S, B) {
      const V = J(z);
      let F = function(re, he, ge) {
        const Ae = ["left", "right"], oe = ["right", "left"], Ce = ["top", "bottom"], co = ["bottom", "top"];
        switch (re) {
          case "top":
          case "bottom":
            return ge ? he ? oe : Ae : he ? Ae : oe;
          case "left":
          case "right":
            return he ? Ce : co;
          default:
            return [];
        }
      }(Y(z), S === "start", B);
      return V && (F = F.map((re) => re + "-" + V), w && (F = F.concat(F.map(Xe)))), F;
    }(s, g, f, b));
    const M = [s, ...$], E = await ct(t, h), O = [];
    let D = ((r = n.flip) == null ? void 0 : r.overflows) || [];
    if (u && O.push(E[v]), c) {
      const { main: z, cross: w } = Jr(o, i, b);
      O.push(E[z], E[w]);
    }
    if (D = [...D, { placement: o, overflows: O }], !O.every((z) => z <= 0)) {
      var q, W;
      const z = (((q = n.flip) == null ? void 0 : q.index) || 0) + 1, w = M[z];
      if (w)
        return { data: { index: z, overflows: D }, reset: { placement: w } };
      let S = (W = D.filter((B) => B.overflows[0] <= 0).sort((B, V) => B.overflows[1] - V.overflows[1])[0]) == null ? void 0 : W.placement;
      if (!S)
        switch (p) {
          case "bestFit": {
            var N;
            const B = (N = D.map((V) => [V.placement, V.overflows.filter((F) => F > 0).reduce((F, re) => F + re, 0)]).sort((V, F) => V[1] - F[1])[0]) == null ? void 0 : N[0];
            B && (S = B);
            break;
          }
          case "initialPlacement":
            S = s;
        }
      if (o !== S)
        return { reset: { placement: S } };
    }
    return {};
  } };
}, yl = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: o } = t, n = await async function(i, s) {
      const { placement: l, platform: a, elements: u } = i, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), d = Y(l), p = J(l), f = Ne(l) === "x", g = ["left", "top"].includes(d) ? -1 : 1, h = c && f ? -1 : 1, v = $e(s, i);
      let { mainAxis: m, crossAxis: b, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof $ == "number" && (b = p === "end" ? -1 * $ : $), f ? { x: b * h, y: m * g } : { x: m * g, y: b * h };
    }(t, e);
    return { x: r + n.x, y: o + n.y, data: n };
  } };
};
function wl(e) {
  return e === "x" ? "y" : "x";
}
const xl = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: o, placement: n } = t, { mainAxis: i = !0, crossAxis: s = !1, limiter: l = { fn: (v) => {
      let { x: m, y: b } = v;
      return { x: m, y: b };
    } }, ...a } = $e(e, t), u = { x: r, y: o }, c = await ct(t, a), d = Ne(Y(n)), p = wl(d);
    let f = u[d], g = u[p];
    if (i) {
      const v = d === "y" ? "bottom" : "right";
      f = $t(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (s) {
      const v = p === "y" ? "bottom" : "right";
      g = $t(g + c[p === "y" ? "top" : "left"], g, g - c[v]);
    }
    const h = l.fn({ ...t, [d]: f, [p]: g });
    return { ...h, data: { x: h.x - r, y: h.y - o } };
  } };
}, kl = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: r, rects: o, platform: n, elements: i } = t, { apply: s = () => {
    }, ...l } = $e(e, t), a = await ct(t, l), u = Y(r), c = J(r), d = Ne(r) === "x", { width: p, height: f } = o.floating;
    let g, h;
    u === "top" || u === "bottom" ? (g = u, h = c === (await (n.isRTL == null ? void 0 : n.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = u, g = c === "end" ? "top" : "bottom");
    const v = f - a[g], m = p - a[h], b = !t.middlewareData.shift;
    let $ = v, M = m;
    if (d) {
      const O = p - a.left - a.right;
      M = c || b ? De(m, O) : O;
    } else {
      const O = f - a.top - a.bottom;
      $ = c || b ? De(v, O) : O;
    }
    if (b && !c) {
      const O = be(a.left, 0), D = be(a.right, 0), q = be(a.top, 0), W = be(a.bottom, 0);
      d ? M = p - 2 * (O !== 0 || D !== 0 ? O + D : be(a.left, a.right)) : $ = f - 2 * (q !== 0 || W !== 0 ? q + W : be(a.top, a.bottom));
    }
    await s({ ...t, availableWidth: M, availableHeight: $ });
    const E = await n.getDimensions(i.floating);
    return p !== E.width || f !== E.height ? { reset: { rects: !0 } } : {};
  } };
};
function Q(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
  return Q(e).getComputedStyle(e);
}
const vr = Math.min, Ie = Math.max, it = Math.round;
function Zr(e) {
  const t = K(e);
  let r = parseFloat(t.width), o = parseFloat(t.height);
  const n = e.offsetWidth, i = e.offsetHeight, s = it(r) !== n || it(o) !== i;
  return s && (r = n, o = i), { width: r, height: o, fallback: s };
}
function pe(e) {
  return Kr(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ze;
function Yr() {
  if (Ze)
    return Ze;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ze = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ze) : navigator.userAgent;
}
function X(e) {
  return e instanceof Q(e).HTMLElement;
}
function ue(e) {
  return e instanceof Q(e).Element;
}
function Kr(e) {
  return e instanceof Q(e).Node;
}
function yr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Q(e).ShadowRoot || e instanceof ShadowRoot;
}
function pt(e) {
  const { overflow: t, overflowX: r, overflowY: o, display: n } = K(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(n);
}
function _l(e) {
  return ["table", "td", "th"].includes(pe(e));
}
function Ct(e) {
  const t = /firefox/i.test(Yr()), r = K(e), o = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!o && o !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((n) => r.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const i = r.contain;
    return i != null && i.includes(n);
  });
}
function Xr() {
  return !/^((?!chrome|android).)*safari/i.test(Yr());
}
function Dt(e) {
  return ["html", "body", "#document"].includes(pe(e));
}
function eo(e) {
  return ue(e) ? e : e.contextElement;
}
const to = { x: 1, y: 1 };
function Pe(e) {
  const t = eo(e);
  if (!X(t))
    return to;
  const r = t.getBoundingClientRect(), { width: o, height: n, fallback: i } = Zr(t);
  let s = (i ? it(r.width) : r.width) / o, l = (i ? it(r.height) : r.height) / n;
  return s && Number.isFinite(s) || (s = 1), l && Number.isFinite(l) || (l = 1), { x: s, y: l };
}
function We(e, t, r, o) {
  var n, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), l = eo(e);
  let a = to;
  t && (o ? ue(o) && (a = Pe(o)) : a = Pe(e));
  const u = l ? Q(l) : window, c = !Xr() && r;
  let d = (s.left + (c && ((n = u.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / a.x, p = (s.top + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / a.y, f = s.width / a.x, g = s.height / a.y;
  if (l) {
    const h = Q(l), v = o && ue(o) ? Q(o) : o;
    let m = h.frameElement;
    for (; m && o && v !== h; ) {
      const b = Pe(m), $ = m.getBoundingClientRect(), M = getComputedStyle(m);
      $.x += (m.clientLeft + parseFloat(M.paddingLeft)) * b.x, $.y += (m.clientTop + parseFloat(M.paddingTop)) * b.y, d *= b.x, p *= b.y, f *= b.x, g *= b.y, d += $.x, p += $.y, m = Q(m).frameElement;
    }
  }
  return { width: f, height: g, top: p, right: d + f, bottom: p + g, left: d, x: d, y: p };
}
function de(e) {
  return ((Kr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ft(e) {
  return ue(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ro(e) {
  return We(de(e)).left + ft(e).scrollLeft;
}
function Ve(e) {
  if (pe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || yr(e) && e.host || de(e);
  return yr(t) ? t.host : t;
}
function oo(e) {
  const t = Ve(e);
  return Dt(t) ? t.ownerDocument.body : X(t) && pt(t) ? t : oo(t);
}
function st(e, t) {
  var r;
  t === void 0 && (t = []);
  const o = oo(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Q(o);
  return n ? t.concat(i, i.visualViewport || [], pt(o) ? o : []) : t.concat(o, st(o));
}
function wr(e, t, r) {
  return t === "viewport" ? Re(function(o, n) {
    const i = Q(o), s = de(o), l = i.visualViewport;
    let a = s.clientWidth, u = s.clientHeight, c = 0, d = 0;
    if (l) {
      a = l.width, u = l.height;
      const p = Xr();
      (p || !p && n === "fixed") && (c = l.offsetLeft, d = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: d };
  }(e, r)) : ue(t) ? Re(function(o, n) {
    const i = We(o, !0, n === "fixed"), s = i.top + o.clientTop, l = i.left + o.clientLeft, a = X(o) ? Pe(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * a.x, height: o.clientHeight * a.y, x: l * a.x, y: s * a.y };
  }(t, r)) : Re(function(o) {
    const n = de(o), i = ft(o), s = o.ownerDocument.body, l = Ie(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), a = Ie(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let u = -i.scrollLeft + ro(o);
    const c = -i.scrollTop;
    return K(s).direction === "rtl" && (u += Ie(n.clientWidth, s.clientWidth) - l), { width: l, height: a, x: u, y: c };
  }(de(e)));
}
function xr(e) {
  return X(e) && K(e).position !== "fixed" ? e.offsetParent : null;
}
function kr(e) {
  const t = Q(e);
  let r = xr(e);
  for (; r && _l(r) && K(r).position === "static"; )
    r = xr(r);
  return r && (pe(r) === "html" || pe(r) === "body" && K(r).position === "static" && !Ct(r)) ? t : r || function(o) {
    let n = Ve(o);
    for (; X(n) && !Dt(n); ) {
      if (Ct(n))
        return n;
      n = Ve(n);
    }
    return null;
  }(e) || t;
}
function $l(e, t, r) {
  const o = X(t), n = de(t), i = We(e, !0, r === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (o || !o && r !== "fixed")
    if ((pe(t) !== "body" || pt(n)) && (s = ft(t)), X(t)) {
      const a = We(t, !0);
      l.x = a.x + t.clientLeft, l.y = a.y + t.clientTop;
    } else
      n && (l.x = ro(n));
  return { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
const Cl = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: o, strategy: n } = e;
  const i = r === "clippingAncestors" ? function(u, c) {
    const d = c.get(u);
    if (d)
      return d;
    let p = st(u).filter((v) => ue(v) && pe(v) !== "body"), f = null;
    const g = K(u).position === "fixed";
    let h = g ? Ve(u) : u;
    for (; ue(h) && !Dt(h); ) {
      const v = K(h), m = Ct(h);
      (g ? m || f : m || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : p = p.filter((b) => b !== h), h = Ve(h);
    }
    return c.set(u, p), p;
  }(t, this._c) : [].concat(r), s = [...i, o], l = s[0], a = s.reduce((u, c) => {
    const d = wr(t, c, n);
    return u.top = Ie(d.top, u.top), u.right = vr(d.right, u.right), u.bottom = vr(d.bottom, u.bottom), u.left = Ie(d.left, u.left), u;
  }, wr(t, l, n));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: o } = e;
  const n = X(r), i = de(r);
  if (r === i)
    return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((n || !n && o !== "fixed") && ((pe(r) !== "body" || pt(i)) && (s = ft(r)), X(r))) {
    const u = We(r);
    l = Pe(r), a.x = u.x + r.clientLeft, a.y = u.y + r.clientTop;
  }
  return { width: t.width * l.x, height: t.height * l.y, x: t.x * l.x - s.scrollLeft * l.x + a.x, y: t.y * l.y - s.scrollTop * l.y + a.y };
}, isElement: ue, getDimensions: function(e) {
  return X(e) ? Zr(e) : e.getBoundingClientRect();
}, getOffsetParent: kr, getDocumentElement: de, getScale: Pe, async getElementRects(e) {
  let { reference: t, floating: r, strategy: o } = e;
  const n = this.getOffsetParent || kr, i = this.getDimensions;
  return { reference: $l(t, await n(r), o), floating: { x: 0, y: 0, ...await i(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => K(e).direction === "rtl" }, Sl = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), n = { platform: Cl, ...r }, i = { ...n.platform, _c: o };
  return pl(e, t, { ...n, platform: i });
}, ye = {
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
function St(e, t) {
  let r = ye.themes[e] || {}, o;
  do
    o = r[t], typeof o > "u" ? r.$extend ? r = ye.themes[r.$extend] || {} : (r = null, o = ye[t]) : r = null;
  while (r);
  return o;
}
function Tl(e) {
  const t = [e];
  let r = ye.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = ye.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((o) => `v-popper--theme-${o}`);
}
function _r(e) {
  const t = [e];
  let r = ye.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = ye.themes[r.$extend] || {}) : r = null;
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
let no = !1;
typeof window < "u" && typeof navigator < "u" && (no = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Pl = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), $r = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Cr = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Sr(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function vt() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Z = [];
let me = null;
const Tr = {};
function Pr(e) {
  let t = Tr[e];
  return t || (t = Tr[e] = []), t;
}
let Tt = function() {
};
typeof window < "u" && (Tt = window.Element);
function C(e) {
  return function(t) {
    return St(t.theme, e);
  };
}
const yt = "__floating-vue__popper", io = () => H({
  name: "VPopper",
  provide() {
    return {
      [yt]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [yt]: { default: null }
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
      default: C("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: C("positioningDisabled")
    },
    placement: {
      type: String,
      default: C("placement"),
      validator: (e) => Pl.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: C("delay")
    },
    distance: {
      type: [Number, String],
      default: C("distance")
    },
    skidding: {
      type: [Number, String],
      default: C("skidding")
    },
    triggers: {
      type: Array,
      default: C("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: C("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: C("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: C("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: C("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: C("popperHideTriggers")
    },
    container: {
      type: [String, Object, Tt, Boolean],
      default: C("container")
    },
    boundary: {
      type: [String, Tt],
      default: C("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: C("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: C("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: C("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: C("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: C("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: C("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: C("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: C("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: C("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: C("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: C("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: C("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: C("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: C("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: C("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: C("flip")
    },
    shift: {
      type: Boolean,
      default: C("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: C("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: C("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: C("disposeTimeout")
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
      return (e = this[yt]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(yl({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(bl({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(xl({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(vl({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(fl({
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
            let a, u;
            return i.startsWith("top") || i.startsWith("bottom") ? a = n.reference.width : u = n.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(kl({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const r = await Sl(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), me && this.instantMove && me.instantMove && me !== this.parentPopper) {
        me.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (me = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await vt(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...st(this.$_referenceNode),
        ...st(this.$_popperNode)
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
        for (let r = 0; r < Z.length; r++)
          t = Z[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Z.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of _r(this.theme))
        Pr(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await vt(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Sr(Z, this), Z.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of _r(this.theme)) {
        const o = Pr(r);
        Sr(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      me === this && (me = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await vt(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, $r, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], $r, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Cr, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Cr, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((o) => o.addEventListener(t, r, ze ? {
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
      if (Be >= e.left && Be <= e.right && Fe >= e.top && Fe <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = Be - ie, o = Fe - se, n = t.left + t.width / 2 - ie + (t.top + t.height / 2) - se + t.width + t.height, i = ie + r * n, s = se + o * n;
        return Ye(ie, se, i, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ye(ie, se, i, s, t.left, t.top, t.right, t.top) || // Top edge
        Ye(ie, se, i, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ye(ie, se, i, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (no ? (document.addEventListener("touchstart", zr, ze ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", Ol, ze ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", zr, !0), window.addEventListener("click", zl, !0)), window.addEventListener("resize", Ml));
function zr(e) {
  for (let t = 0; t < Z.length; t++) {
    const r = Z[t];
    try {
      const o = r.popperNode();
      r.$_mouseDownContains = o.contains(e.target);
    } catch {
    }
  }
}
function zl(e) {
  so(e);
}
function Ol(e) {
  so(e, !0);
}
function so(e, t = !1) {
  const r = {};
  for (let o = Z.length - 1; o >= 0; o--) {
    const n = Z[o];
    try {
      const i = n.$_containsGlobalTarget = Nl(n, e);
      n.$_pendingHide = !1, requestAnimationFrame(() => {
        if (n.$_pendingHide = !1, !r[n.randomId] && Or(n, i, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let l = n.parentPopper;
            for (; l; )
              r[l.randomId] = !0, l = l.parentPopper;
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
function Nl(e, t) {
  const r = e.popperNode();
  return e.$_mouseDownContains || r.contains(t.target);
}
function Or(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || Al(e, r) && !t;
}
function Al(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function Ml(e) {
  for (let t = 0; t < Z.length; t++)
    Z[t].$_computePosition(e);
}
let ie = 0, se = 0, Be = 0, Fe = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ie = Be, se = Fe, Be = e.clientX, Fe = e.clientY;
}, ze ? {
  passive: !0
} : void 0);
function Ye(e, t, r, o, n, i, s, l) {
  const a = ((s - n) * (t - i) - (l - i) * (e - n)) / ((l - i) * (r - e) - (s - n) * (o - t)), u = ((r - e) * (t - i) - (o - t) * (e - n)) / ((l - i) * (r - e) - (s - n) * (o - t));
  return a >= 0 && a <= 1 && u >= 0 && u <= 1;
}
const El = {
  extends: io()
}, Wt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
};
function jl(e, t, r, o, n, i) {
  return y(), T("div", {
    ref: "reference",
    class: L(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    P(e.$slots, "default", te(fe(e.slotData)))
  ], 2);
}
const Ll = /* @__PURE__ */ Wt(El, [["render", jl]]);
function Rl() {
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
let et;
function Pt() {
  Pt.init || (Pt.init = !0, et = Rl() !== -1);
}
var ht = {
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
    Pt(), bo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", et && this.$el.appendChild(e), e.data = "about:blank", et || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!et && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Il = /* @__PURE__ */ Co("data-v-b329ee4c");
go("data-v-b329ee4c");
const Bl = {
  class: "resize-observer",
  tabindex: "-1"
};
mo();
const Fl = /* @__PURE__ */ Il((e, t, r, o, n, i) => (y(), R("div", Bl)));
ht.render = Fl;
ht.__scopeId = "data-v-b329ee4c";
ht.__file = "src/components/ResizeObserver.vue";
const lo = (e = "theme") => ({
  computed: {
    themeClass() {
      return Tl(this[e]);
    }
  }
}), Hl = H({
  name: "VPopperContent",
  components: {
    ResizeObserver: ht
  },
  mixins: [
    lo()
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
}), Dl = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Wl = {
  ref: "inner",
  class: "v-popper__inner"
}, Vl = /* @__PURE__ */ j("div", { class: "v-popper__arrow-outer" }, null, -1), Gl = /* @__PURE__ */ j("div", { class: "v-popper__arrow-inner" }, null, -1), ql = [
  Vl,
  Gl
];
function Ql(e, t, r, o, n, i) {
  const s = tt("ResizeObserver");
  return y(), T("div", {
    id: e.popperId,
    ref: "popover",
    class: L(["v-popper__popper", [
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
    style: gt(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = So((l) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    j("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
    }),
    j("div", {
      class: "v-popper__wrapper",
      style: gt(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      j("div", Wl, [
        e.mounted ? (y(), T(Nt, { key: 0 }, [
          j("div", null, [
            P(e.$slots, "default")
          ]),
          e.handleResize ? (y(), R(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
          })) : I("", !0)
        ], 64)) : I("", !0)
      ], 512),
      j("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: gt(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, ql, 4)
    ], 4)
  ], 46, Dl);
}
const ao = /* @__PURE__ */ Wt(Hl, [["render", Ql]]), uo = {
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
}, Ul = H({
  name: "VPopperWrapper",
  components: {
    Popper: Ll,
    PopperContent: ao
  },
  mixins: [
    uo,
    lo("finalTheme")
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
function Jl(e, t, r, o, n, i) {
  const s = tt("PopperContent"), l = tt("Popper");
  return y(), R(l, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: L([
      e.themeClass
    ])
  }, {
    default: G(({
      popperId: a,
      isShown: u,
      shouldMountContent: c,
      skipTransition: d,
      autoHide: p,
      show: f,
      hide: g,
      handleResize: h,
      onResize: v,
      classes: m,
      result: b
    }) => [
      P(e.$slots, "default", {
        shown: u,
        show: f,
        hide: g
      }),
      To(s, {
        ref: "popperContent",
        "popper-id": a,
        theme: e.finalTheme,
        shown: u,
        mounted: c,
        "skip-transition": d,
        "auto-hide": p,
        "handle-resize": h,
        classes: m,
        result: b,
        onHide: g,
        onResize: v
      }, {
        default: G(() => [
          P(e.$slots, "popper", {
            shown: u,
            hide: g
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const Vt = /* @__PURE__ */ Wt(Ul, [["render", Jl]]);
({
  ...Vt
});
({
  ...Vt
});
({
  ...Vt
});
H({
  name: "VTooltipDirective",
  components: {
    Popper: io(),
    PopperContent: ao
  },
  mixins: [
    uo
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => St(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => St(e.theme, "loadingContent")
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
const Zl = "block text-sm font-medium text-gray-900 dark:text-gray-300", Yl = "w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500";
function Kl() {
  const e = x(() => Le(Yl)), t = x(() => Zl);
  return {
    checkboxClasses: e,
    labelClasses: t
  };
}
const Xl = { class: "flex gap-3 items-center justify-start" }, ea = ["disabled"], ta = /* @__PURE__ */ H({
  __name: "FwbCheckbox",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = x({
      get() {
        return r.modelValue;
      },
      set(s) {
        t("update:modelValue", s);
      }
    }), {
      checkboxClasses: n,
      labelClasses: i
    } = Kl();
    return (s, l) => (y(), T("label", Xl, [
      At(j("input", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
        class: L(k(n)),
        disabled: s.disabled,
        type: "checkbox"
      }, null, 10, ea), [
        [yo, o.value]
      ]),
      s.label ? (y(), T("span", {
        key: 0,
        class: L(k(i))
      }, ae(s.label), 3)) : I("", !0),
      P(s.$slots, "default")
    ]));
  }
}), Te = {
  Success: "success",
  Error: "error"
}, ra = "block mb-2 text-sm font-medium", oa = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", na = "cursor-not-allowed bg-gray-100", ia = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, sa = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", la = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function aa(e) {
  const t = x(() => {
    const o = e.validationStatus.value, n = o === Te.Success ? sa : o === Te.Error ? la : "";
    return ee(
      oa,
      n,
      ia[e.size.value],
      e.disabled.value ? na : ""
    );
  }), r = x(() => {
    const o = e.validationStatus.value, n = o === Te.Success ? "text-green-700 dark:text-green-500" : o === Te.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return ee(ra, n);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const ua = { class: "flex relative" }, da = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, ca = ["disabled", "type", "required"], pa = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, fa = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, ha = /* @__PURE__ */ H({
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
    const t = e, r = Fr(t, "modelValue"), { inputClasses: o, labelClasses: n } = aa(we(t)), i = x(() => ee(
      "mt-2 text-sm",
      t.validationStatus === Te.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === Te.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (s, l) => (y(), T("div", null, [
      s.label ? (y(), T("label", {
        key: 0,
        class: L(k(n))
      }, ae(s.label), 3)) : I("", !0),
      j("div", ua, [
        s.$slots.prefix ? (y(), T("div", da, [
          P(s.$slots, "prefix")
        ])) : I("", !0),
        At(j("input", Ot(s.$attrs, {
          "onUpdate:modelValue": l[0] || (l[0] = (a) => Nr(r) ? r.value = a : null),
          disabled: s.disabled,
          type: s.type,
          required: s.required,
          class: [k(o), s.$slots.prefix ? "pl-10" : ""]
        }), null, 16, ca), [
          [wo, k(r)]
        ]),
        s.$slots.suffix ? (y(), T("div", pa, [
          P(s.$slots, "suffix")
        ])) : I("", !0)
      ]),
      s.$slots.validationMessage ? (y(), T("p", {
        key: 1,
        class: L(i.value)
      }, [
        P(s.$slots, "validationMessage")
      ], 2)) : I("", !0),
      s.$slots.helper ? (y(), T("p", fa, [
        P(s.$slots, "helper")
      ])) : I("", !0)
    ]));
  }
}), le = {
  Success: "success",
  Error: "error"
}, ga = "block mb-2 text-sm font-medium", ma = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", ba = "cursor-not-allowed bg-gray-100", va = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", ya = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, wa = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", xa = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function ka(e) {
  const t = x(() => {
    const o = e.validationStatus.value, n = o === le.Success ? wa : o === le.Error ? xa : "", i = o === le.Success ? "focus:border-green-500" : o === le.Error ? "focus:border-red-500" : "";
    return ee(
      ma,
      n,
      ya[e.size.value],
      e.disabled.value && ba,
      e.underline.value ? va : "border border-gray-300 rounded-lg",
      e.underline.value && i
    );
  }), r = x(() => {
    const o = e.validationStatus.value, n = o === le.Success ? "text-green-700 dark:text-green-500" : o === le.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return ee(ga, n);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const _a = ["disabled"], $a = {
  disabled: "",
  selected: "",
  value: ""
}, Ca = ["value"], Sa = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Ta = /* @__PURE__ */ H({
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
    const r = e, o = Fr(r, "modelValue", t), { selectClasses: n, labelClasses: i } = ka(we(r)), s = x(() => ee(
      "mt-2 text-sm",
      r.validationStatus === le.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === le.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (l, a) => (y(), T("div", null, [
      j("label", null, [
        l.label ? (y(), T("span", {
          key: 0,
          class: L(k(i))
        }, ae(l.label), 3)) : I("", !0),
        At(j("select", {
          "onUpdate:modelValue": a[0] || (a[0] = (u) => Nr(o) ? o.value = u : null),
          disabled: l.disabled,
          class: L(k(n))
        }, [
          j("option", $a, ae(l.placeholder), 1),
          (y(!0), T(Nt, null, xo(l.options, (u, c) => (y(), T("option", {
            key: c,
            value: u.value
          }, ae(u.name), 9, Ca))), 128))
        ], 10, _a), [
          [ko, k(o)]
        ])
      ]),
      l.$slots.validationMessage ? (y(), T("p", {
        key: 0,
        class: L(s.value)
      }, [
        P(l.$slots, "validationMessage")
      ], 2)) : I("", !0),
      l.$slots.helper ? (y(), T("p", Sa, [
        P(l.$slots, "helper")
      ])) : I("", !0)
    ]));
  }
}), Pa = ["href"], za = /* @__PURE__ */ H({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (y(), T("a", {
      href: t.href,
      class: L([t.color, "inline-flex items-center hover:underline"])
    }, [
      P(t.$slots, "default")
    ], 10, Pa));
  }
}), Oa = /* @__PURE__ */ H({
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
    }, o = zt(), n = ee(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      o.class
    ), i = t.tag;
    return (s, l) => (y(), R(lt(k(i)), Ot(s.$attrs, { class: k(n) }), {
      default: G(() => [
        P(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Na = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", Aa = /* @__PURE__ */ H({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = x(() => kt([
      Na,
      t.class
    ]));
    return (o, n) => (y(), T("p", {
      class: L(r.value)
    }, [
      P(o.$slots, "default")
    ], 2));
  }
}), Ea = {
  __name: "TwcButton",
  setup(e) {
    return (t, r) => (y(), R(k(_n), te(fe(t.$props)), {
      default: G(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, ja = {
  __name: "TwcCheckbox",
  setup(e) {
    return (t, r) => (y(), R(k(ta), te(fe(t.$props)), null, 16));
  }
}, La = {
  __name: "TwcHeading",
  setup(e) {
    return (t, r) => (y(), R(k(Oa), te(fe(t.$props)), {
      default: G(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Ra = {
  __name: "TwcInput",
  setup(e) {
    return (t, r) => (y(), R(k(ha), te(fe(t.$props)), Ar({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: G(() => [
          P(t.$slots, "helper")
        ]),
        key: "0"
      } : void 0,
      t.$slots.prefix ? {
        name: "prefix",
        fn: G(() => [
          P(t.$slots, "prefix")
        ]),
        key: "1"
      } : void 0,
      t.$slots.suffix ? {
        name: "suffix",
        fn: G(() => [
          P(t.$slots, "suffix")
        ]),
        key: "2"
      } : void 0
    ]), 1040));
  }
}, Ia = {
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
    return (o, n) => (y(), T("label", {
      class: L(r())
    }, [
      P(o.$slots, "default")
    ], 2));
  }
}, Ba = {
  __name: "TwcLink",
  setup(e) {
    return (t, r) => (y(), R(k(za), te(fe(t.$props)), {
      default: G(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Fa = {
  __name: "TwcParagraph",
  setup(e) {
    return (t, r) => (y(), R(k(Aa), te(fe(t.$props)), {
      default: G(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Ha = {
  __name: "TwcSelect",
  setup(e) {
    return (t, r) => (y(), R(k(Ta), te(fe(t.$props)), Ar({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: G(() => [
          P(t.$slots, "helper")
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
};
export {
  Ea as TwcButton,
  ja as TwcCheckbox,
  La as TwcHeading,
  Ra as TwcInput,
  Ia as TwcLabel,
  Ba as TwcLink,
  Fa as TwcParagraph,
  Ha as TwcSelect
};
