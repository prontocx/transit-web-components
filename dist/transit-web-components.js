import { reactive as Yo, defineComponent as Z, useAttrs as or, createElementBlock as N, openBlock as x, mergeProps as Oe, unref as A, createTextVNode as yt, createBlock as ee, toDisplayString as de, resolveDynamicComponent as St, normalizeClass as H, withCtx as ie, h as dt, TransitionGroup as Jo, ref as ae, provide as Zo, pushScopeId as Qo, popScopeId as Xo, toRefs as Ie, createCommentVNode as Y, createElementVNode as U, renderSlot as j, nextTick as uo, Fragment as We, Comment as en, computed as v, normalizeProps as lt, guardReactiveProps as Tt, resolveComponent as vt, createVNode as tt, shallowRef as tn, readonly as rn, inject as on, toValue as nn, getCurrentScope as sn, onScopeDispose as an, withScopeId as ln, withKeys as un, normalizeStyle as Ot, watch as Ut, onMounted as It, mergeModels as rt, useModel as nr, withDirectives as At, vModelDynamic as dn, isRef as cn, renderList as co, vModelSelect as pn, vModelCheckbox as hn, onBeforeMount as fn, onBeforeUnmount as gn, useSlots as mn, getCurrentInstance as yn, createSlots as po, vModelText as bn } from "vue";
const vn = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let ho = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += vn[r[e] & 63];
  return t;
};
const ct = Yo({}), Pt = (e, t) => (fn(() => {
  e && (ct[e] = {
    id: e,
    collapsed: t?.collapsed ?? !1,
    flushed: t?.flushed ?? !1,
    persistent: t?.persistent ?? !1,
    panels: []
  });
}), gn(() => {
  e && delete ct[e];
}), {
  accordionStates: ct,
  getAccordionState: ({ element: r }) => {
    const o = r.value && r.value.closest("[data-accordion-id]")?.dataset.accordionId;
    return o ? ct[o] : null;
  },
  getAccordionPanelState: ({ accordionState: r, panelId: o }) => r?.value.panels.find((n) => n.id === o) ?? null
}), ir = "-", wn = (e) => {
  const t = kn(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (n) => {
      const i = n.split(ir);
      return i[0] === "" && i.length !== 1 && i.shift(), fo(i, t) || xn(n);
    },
    getConflictingClassGroupIds: (n, i) => {
      const s = r[n] || [];
      return i && o[n] ? [...s, ...o[n]] : s;
    }
  };
}, fo = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? fo(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join(ir);
  return t.validators.find(({
    validator: s
  }) => s(i))?.classGroupId;
}, vr = /^\[(.+)\]$/, xn = (e) => {
  if (vr.test(e)) {
    const t = vr.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, kn = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    qt(r[n], o, n, t);
  return o;
}, qt = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : wr(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (_n(n)) {
        qt(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, s]) => {
      qt(s, wr(t, i), r, o);
    });
  });
}, wr = (e, t) => {
  let r = e;
  return t.split(ir).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, _n = (e) => e.isThemeGetter, Cn = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (i, s) => {
    r.set(i, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = o.get(i)) !== void 0)
        return n(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : n(i, s);
    }
  };
}, Kt = "!", Yt = ":", $n = Yt.length, Sn = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const i = [];
    let s = 0, u = 0, p = 0, c;
    for (let w = 0; w < n.length; w++) {
      let S = n[w];
      if (s === 0 && u === 0) {
        if (S === Yt) {
          i.push(n.slice(p, w)), p = w + $n;
          continue;
        }
        if (S === "/") {
          c = w;
          continue;
        }
      }
      S === "[" ? s++ : S === "]" ? s-- : S === "(" ? u++ : S === ")" && u--;
    }
    const f = i.length === 0 ? n : n.substring(p), g = Tn(f), b = g !== f, y = c && c > p ? c - p : void 0;
    return {
      modifiers: i,
      hasImportantModifier: b,
      baseClassName: g,
      maybePostfixModifierPosition: y
    };
  };
  if (t) {
    const n = t + Yt, i = o;
    o = (s) => s.startsWith(n) ? i(s.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (i) => r({
      className: i,
      parseClassName: n
    });
  }
  return o;
}, Tn = (e) => e.endsWith(Kt) ? e.substring(0, e.length - 1) : e.startsWith(Kt) ? e.substring(1) : e, In = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let n = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...n.sort(), i), n = []) : n.push(i);
    }), o.push(...n.sort()), o;
  };
}, An = (e) => ({
  cache: Cn(e.cacheSize),
  parseClassName: Sn(e),
  sortModifiers: In(e),
  ...wn(e)
}), Pn = /\s+/, Ln = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = t, s = [], u = e.trim().split(Pn);
  let p = "";
  for (let c = u.length - 1; c >= 0; c -= 1) {
    const f = u[c], {
      isExternal: g,
      modifiers: b,
      hasImportantModifier: y,
      baseClassName: w,
      maybePostfixModifierPosition: S
    } = r(f);
    if (g) {
      p = f + (p.length > 0 ? " " + p : p);
      continue;
    }
    let L = !!S, P = o(L ? w.substring(0, S) : w);
    if (!P) {
      if (!L) {
        p = f + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (P = o(w), !P) {
        p = f + (p.length > 0 ? " " + p : p);
        continue;
      }
      L = !1;
    }
    const z = i(b).join(":"), D = y ? z + Kt : z, W = D + P;
    if (s.includes(W))
      continue;
    s.push(W);
    const G = n(P, L);
    for (let q = 0; q < G.length; ++q) {
      const J = G[q];
      s.push(D + J);
    }
    p = f + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Nn() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = go(t)) && (o && (o += " "), o += r);
  return o;
}
const go = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = go(e[o])) && (r && (r += " "), r += t);
  return r;
};
function zn(e, ...t) {
  let r, o, n, i = s;
  function s(p) {
    const c = t.reduce((f, g) => g(f), e());
    return r = An(c), o = r.cache.get, n = r.cache.set, i = u, u(p);
  }
  function u(p) {
    const c = o(p);
    if (c)
      return c;
    const f = Ln(p, r);
    return n(p, f), f;
  }
  return function() {
    return i(Nn.apply(null, arguments));
  };
}
const ne = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, mo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, yo = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Dn = /^\d+\/\d+$/, Mn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, En = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, On = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (e) => Dn.test(e), B = (e) => !!e && !Number.isNaN(Number(e)), xe = (e) => !!e && Number.isInteger(Number(e)), jt = (e) => e.endsWith("%") && B(e.slice(0, -1)), ve = (e) => Mn.test(e), Rn = () => !0, Fn = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  En.test(e) && !Bn.test(e)
), bo = () => !1, Hn = (e) => On.test(e), Vn = (e) => jn.test(e), Wn = (e) => !_(e) && !C(e), Gn = (e) => Ge(e, xo, bo), _ = (e) => mo.test(e), Le = (e) => Ge(e, ko, Fn), Rt = (e) => Ge(e, Jn, B), xr = (e) => Ge(e, vo, bo), Un = (e) => Ge(e, wo, Vn), pt = (e) => Ge(e, _o, Hn), C = (e) => yo.test(e), Ye = (e) => Ue(e, ko), qn = (e) => Ue(e, Zn), kr = (e) => Ue(e, vo), Kn = (e) => Ue(e, xo), Yn = (e) => Ue(e, wo), ht = (e) => Ue(e, _o, !0), Ge = (e, t, r) => {
  const o = mo.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, Ue = (e, t, r = !1) => {
  const o = yo.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, vo = (e) => e === "position" || e === "percentage", wo = (e) => e === "image" || e === "url", xo = (e) => e === "length" || e === "size" || e === "bg-size", ko = (e) => e === "length", Jn = (e) => e === "number", Zn = (e) => e === "family-name", _o = (e) => e === "shadow", Qn = () => {
  const e = ne("color"), t = ne("font"), r = ne("text"), o = ne("font-weight"), n = ne("tracking"), i = ne("leading"), s = ne("breakpoint"), u = ne("container"), p = ne("spacing"), c = ne("radius"), f = ne("shadow"), g = ne("inset-shadow"), b = ne("text-shadow"), y = ne("drop-shadow"), w = ne("blur"), S = ne("perspective"), L = ne("aspect"), P = ne("ease"), z = ne("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], G = () => [...W(), C, _], q = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", "contain", "none"], T = () => [C, _, p], V = () => [Fe, "full", "auto", ...T()], O = () => [xe, "none", "subgrid", C, _], te = () => ["auto", {
    span: ["full", xe, C, _]
  }, xe, C, _], Q = () => [xe, "auto", C, _], ue = () => ["auto", "min", "max", "fr", C, _], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], le = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], a = () => ["auto", ...T()], l = () => [Fe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...T()], d = () => [e, C, _], h = () => [...W(), kr, xr, {
    position: [C, _]
  }], m = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], $ = () => ["auto", "cover", "contain", Kn, Gn, {
    size: [C, _]
  }], M = () => [jt, Ye, Le], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    C,
    _
  ], R = () => ["", B, Ye, Le], K = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], E = () => [B, jt, kr, xr], ce = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    C,
    _
  ], re = () => ["none", B, C, _], oe = () => ["none", B, C, _], we = () => [B, C, _], be = () => [Fe, "full", ...T()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ve],
      breakpoint: [ve],
      color: [Rn],
      container: [ve],
      "drop-shadow": [ve],
      ease: ["in", "out", "in-out"],
      font: [Wn],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ve],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ve],
      shadow: [ve],
      spacing: ["px", B],
      text: [ve],
      "text-shadow": [ve],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Fe, _, C, L]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [B, _, C, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
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
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
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
        object: G()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        inset: V()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": V()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": V()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: V()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: V()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: V()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: V()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: V()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: V()
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
        z: [xe, "auto", C, _]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Fe, "full", "auto", u, ...T()]
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
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [B, Fe, "auto", "initial", "none", _]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", B, C, _]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", B, C, _]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [xe, "first", "last", "none", C, _]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": O()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: te()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": O()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: te()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
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
        "auto-cols": ue()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ue()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: T()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": T()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": T()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...k(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...le(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...le()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...le(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...le(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": k()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...le(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...le()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: T()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: T()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: T()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: T()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: T()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: T()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: T()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: T()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: T()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: a()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: a()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: a()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: a()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: a()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: a()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: a()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: a()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: a()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": T()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": T()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: l()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...l()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...l()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...l()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...l()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...l()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...l()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ye, Le]
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
        font: [o, C, Rt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", jt, _]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qn, _, t]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, C, _]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [B, "none", C, Rt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...T()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C, _]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", C, _]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: d()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: d()
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [B, "from-font", "auto", C, Le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: d()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [B, "auto", C, _]
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
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C, _]
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        content: ["none", C, _]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
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
        bg: h()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: m()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: $()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, xe, C, _],
          radial: ["", C, _],
          conic: [xe, C, _]
        }, Yn, Un]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: d()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: d()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: d()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: d()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: R()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": R()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": R()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": R()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": R()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": R()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": R()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": R()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": R()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": R()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": R()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: d()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": d()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": d()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": d()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": d()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": d()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": d()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": d()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": d()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: d()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [B, C, _]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", B, Ye, Le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: d()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          ht,
          pt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: d()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", g, ht, pt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": d()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: R()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: d()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [B, Le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": d()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": R()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": d()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, ht, pt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": d()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B, C, _]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [B]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": E()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": d()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": d()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": E()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": d()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": d()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": E()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": d()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": d()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": E()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": d()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": d()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": E()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": d()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": d()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": E()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": d()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": d()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": E()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": d()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": d()
      }],
      "mask-image-radial": [{
        "mask-radial": [C, _]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": E()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": d()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": d()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": W()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [B]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": E()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": d()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": d()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: h()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: m()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: $()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", C, _]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          C,
          _
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ce()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [B, C, _]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [B, C, _]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          ht,
          pt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": d()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", B, C, _]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [B, C, _]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", B, C, _]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B, C, _]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", B, C, _]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          C,
          _
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ce()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [B, C, _]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [B, C, _]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", B, C, _]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [B, C, _]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", B, C, _]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [B, C, _]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B, C, _]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", B, C, _]
      }],
      // --------------
      // --- Tables ---
      // --------------
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
        "border-spacing": T()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": T()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": T()
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
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", C, _]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [B, "initial", C, _]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, C, _]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [B, C, _]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", z, C, _]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [S, C, _]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": G()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: we()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": we()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": we()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [C, _, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: G()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: be()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": be()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": be()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": be()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: d()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: d()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C, _]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
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
        "will-change": ["auto", "scroll", "contents", "transform", C, _]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...d()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [B, Ye, Le, Rt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...d()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
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
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Me = /* @__PURE__ */ zn(Qn);
function Co(e) {
  return typeof e == "string" ? e.trim() : Array.isArray(e) ? e.map(Co).join(" ").trim() : typeof e == "object" && e !== null ? Object.entries(e).filter(([t, r]) => r).map(([t]) => t).join(" ") : "";
}
const se = (e) => Me(Co(e)), Xn = ["data-accordion-id"], ei = "w-full", ti = /* @__PURE__ */ Z({
  __name: "FwbAccordion",
  props: {
    class: { default: "" },
    collapsed: { type: Boolean, default: !1 },
    flushed: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = ho(), r = e, o = v(() => r.class ?? ""), n = v(() => se([
      ei,
      o.value
    ]));
    return Pt(t, { ...r }), (i, s) => (x(), N("div", {
      "data-accordion-id": A(t),
      class: H(n.value)
    }, [
      j(i.$slots, "default")
    ], 10, Xn));
  }
}), ri = (e, t, r) => {
  const o = "p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900", n = v(() => r.class), i = v(() => r.activeClass), s = v(() => e.value?.flushed), u = v(() => t.value?.isVisible), p = v(() => e.value?.panels?.length ?? 0), c = v(() => t.value?.order === p.value - 1);
  return v(
    () => se(
      [
        o,
        s.value && "border-x-0 border-t-0",
        !u.value && "hidden",
        !c.value && !s.value && "border-b-0",
        c.value && "border-t-0",
        n.value,
        u.value ? i.value : ""
      ].filter((f) => f).join(" ")
    )
  ).value;
}, oi = /* @__PURE__ */ Z({
  __name: "FwbAccordionContent",
  props: {
    activeClass: { default: "" },
    class: { default: "" }
  },
  setup(e) {
    const t = e, { getAccordionState: r } = Pt(), o = ae(!1), n = ae(), i = ae(), s = v(() => (n.value && n.value.closest("[data-panel-id]"))?.dataset.panelId), u = v(() => i.value?.panels.find((c) => c.id === s.value)), p = v(() => i.value && u.value ? ri(i, u, t) : null);
    return It(() => {
      i.value = r({ element: n }), o.value = !0;
    }), (c, f) => (x(), N("div", {
      ref_key: "contentRef",
      ref: n
    }, [
      o.value ? (x(), N("div", {
        key: 0,
        class: H(p.value)
      }, [
        j(c.$slots, "default")
      ], 2)) : Y("", !0)
    ], 512));
  }
}), $o = "flex w-full items-center justify-between gap-3 font-medium p-5 text-gray-500 dark:text-gray-400 rtl:text-right", ni = `${$o} border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800`, ii = `${$o} border-b border-gray-200 dark:border-gray-700`, si = "ml-auto size-6 shrink-0", ai = (e, t, r) => {
  const o = v(
    () => se([
      si,
      t.value?.isVisible ? "rotate-180" : ""
    ])
  ), n = v(() => r.class), i = v(() => r.activeClass), s = v(() => e.value?.panels?.length ?? 0), u = v(() => t.value?.order === 0), p = v(() => t.value?.order === s.value - 1), c = v(() => t.value?.isVisible), f = v(() => e.value?.flushed), g = v(
    () => se(
      [
        f.value ? ii : ni,
        c.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
        c.value && !f.value && "bg-gray-100 dark:bg-gray-800",
        u.value && !f.value && "rounded-t-xl",
        u.value && f.value && "border-t-0",
        !p.value && "border-b-0",
        f.value && "border-x-0 border-b",
        n.value,
        c.value ? i.value : ""
      ].filter((b) => b).join(" ")
    )
  );
  return {
    arrowClasses: o.value,
    headerClasses: g.value
  };
}, li = /* @__PURE__ */ Z({
  __name: "FwbAccordionHeader",
  props: {
    activeClass: { default: "" },
    class: { default: "" }
  },
  setup(e) {
    const t = e, { getAccordionState: r } = Pt(), o = ae(!1), n = ae(), i = ae(), s = v(() => (n.value && n.value.closest("[data-panel-id]"))?.dataset.panelId), u = v(() => i.value?.panels.find((b) => b.id === s.value)), p = v(() => i.value && u.value ? ai(i, u, t) : null), c = v(() => p.value?.arrowClasses), f = v(() => p.value?.headerClasses);
    It(() => {
      i.value = r({ element: n }), o.value = !0;
    });
    const g = () => {
      if (i.value.persistent) {
        u.value.isVisible = !u.value?.isVisible;
        return;
      }
      const b = u.value.isVisible;
      i.value.panels.forEach((y) => {
        y.id !== s.value ? y.isVisible = !1 : y.isVisible = !b;
      });
    };
    return (b, y) => (x(), N("div", {
      ref_key: "headerRef",
      ref: n
    }, [
      o.value ? (x(), N("button", {
        key: 0,
        class: H(f.value),
        type: "button",
        onClick: g
      }, [
        j(b.$slots, "default"),
        (x(), N("svg", {
          class: H(c.value),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, y[0] || (y[0] = [
          U("path", { d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" }, null, -1)
        ]), 2))
      ], 2)) : Y("", !0)
    ], 512));
  }
}), ui = ({ props: e, isVisible: t }) => {
  const r = e.activeClass ?? "";
  return se([`${t ? r : ""}`]);
}, di = ["data-panel-id"], ci = /* @__PURE__ */ Z({
  __name: "FwbAccordionPanel",
  props: {
    activeClass: { default: "" }
  },
  emits: ["show", "hide"],
  setup(e, { emit: t }) {
    const r = e, {
      getAccordionState: o,
      getAccordionPanelState: n
    } = Pt(), i = ae(), s = ho(), u = ae(), p = ae(), c = v(
      () => p.value ? n({ accordionState: p, panelId: s }) : null
    ), f = v(
      () => ui({
        isVisible: c.value?.isVisible ?? !1,
        props: r
      })
    ), g = v(() => c.value?.isVisible), b = t;
    return Ut(g, () => {
      g.value ? b("show") : b("hide");
    }), It(() => {
      p.value = o({ element: i }), u.value = p.value.id;
      const y = i.value && i.value.parentElement ? Array.from(i.value.parentElement.children).indexOf(i.value) : -1;
      p.value.panels.push({
        id: s,
        isVisible: (!p.value.collapsed && y === 0) ?? !1,
        order: y
      });
    }), (y, w) => (x(), N("div", {
      ref_key: "panelRef",
      ref: i,
      "data-panel-id": A(s),
      class: H(f.value)
    }, [
      u.value ? j(y.$slots, "default", { key: 0 }) : Y("", !0)
    ], 10, di));
  }
});
function pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Cr;
function hi() {
  return Cr || (Cr = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var i = "", s = 0; s < arguments.length; s++) {
          var u = arguments[s];
          u && (i = n(i, o(u)));
        }
        return i;
      }
      function o(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return r.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var s = "";
        for (var u in i)
          t.call(i, u) && i[u] && (s = n(s, u));
        return s;
      }
      function n(i, s) {
        return s ? i ? i + " " + s : i + s : i;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(_r)), _r.exports;
}
var fi = hi();
const gi = /* @__PURE__ */ pi(fi), $r = {
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
}, Sr = {
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
}, Tr = {
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
}, Ir = {
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
}, mi = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, yi = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, Ar = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, Ft = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], bi = ["alternative", "light"];
function vi(e) {
  const t = mn(), r = v(() => e.square.value ? yi[e.size.value] : mi[e.size.value]), o = v(() => {
    const i = !!e.gradient.value, s = !!e.color.value, u = e.outline.value;
    let p = "", c = "";
    if (i && u)
      e.gradient.value && !Ft.includes(e.gradient.value) ? (c = Ir.default[e.gradient.value], e.disabled.value || (p = Ir.hover[e.gradient.value])) : console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`);
    else if (e.gradient.value && i)
      c = Tr.default[e.gradient.value], e.disabled.value || (p = Tr.hover[e.gradient.value]);
    else if (s && u)
      if (bi.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const g = e.color.value;
        c = Sr.default[g], e.disabled.value || (p = Sr.hover[g]);
      }
    else {
      const g = e.color.value;
      c = $r.default[g], e.disabled.value || (p = $r.hover[g]);
    }
    let f = "";
    return e.shadow.value === "" ? e.gradient.value && Ft.includes(e.gradient.value) && (f = Ar[e.gradient.value]) : typeof e.shadow.value == "string" && Ft.includes(e.shadow.value) && (f = Ar[e.shadow.value]), [
      c,
      p,
      f,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      i && u ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((g) => g).join(" ");
  }), n = v(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((i) => i).join(" ") : "");
  return {
    wrapperClasses: o.value,
    spanClasses: n.value
  };
}
function wi(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = v(() => t[e.size.value]);
  return {
    color: v(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const xi = {
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
}, ki = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function _i(e) {
  const t = v(() => xi[e.size.value]), r = v(() => ki[e.color.value]), o = v(() => "text-gray-200 dark:text-gray-600"), n = v(() => "animate-spin");
  return { spinnerClasses: v(() => gi(
    n.value,
    o.value,
    r.value,
    t.value
  )) };
}
const ft = /* @__PURE__ */ Z({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = _i(Ie(t));
    return (o, n) => (x(), N("svg", {
      class: H(A(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, n[0] || (n[0] = [
      U("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor"
      }, null, -1),
      U("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      }, null, -1)
    ]), 2));
  }
}), Ci = {
  key: 0,
  class: "mr-2"
}, $i = {
  key: 0,
  class: "mr-2"
}, Si = {
  key: 1,
  class: "ml-2"
}, Ti = {
  key: 1,
  class: "ml-2"
}, Ii = /* @__PURE__ */ Z({
  __name: "FwbButton",
  props: {
    class: { default: "" },
    color: { default: "default" },
    gradient: { default: null },
    size: { default: "md" },
    shadow: { type: [String, Boolean], default: !1 },
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
    const t = e, r = v(() => vi(Ie(t))), o = v(() => se(r.value.wrapperClasses)), n = v(() => se(r.value.spanClasses)), i = v(() => t.outline && t.gradient), s = v(() => t.loading && t.loadingPosition === "prefix"), u = v(() => t.loading && t.loadingPosition === "suffix"), { color: p, size: c } = wi(Ie(t)), f = t.tag !== "a" ? vt(t.tag) : "a", g = t.href ? f : "button", b = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (y, w) => (x(), ee(St(A(g)), lt({
      class: o.value,
      [A(b) || ""]: y.href,
      disabled: A(g) === "button" && y.disabled
    }), {
      default: ie(() => [
        !i.value && (y.$slots.prefix || s.value) ? (x(), N("div", Ci, [
          s.value ? (x(), ee(ft, {
            key: 0,
            color: A(p),
            size: A(c)
          }, null, 8, ["color", "size"])) : j(y.$slots, "prefix", { key: 1 })
        ])) : Y("", !0),
        U("span", {
          class: H(n.value)
        }, [
          i.value && (y.$slots.prefix || s.value) ? (x(), N("span", $i, [
            s.value ? (x(), ee(ft, {
              key: 0,
              color: A(p),
              size: A(c)
            }, null, 8, ["color", "size"])) : j(y.$slots, "prefix", { key: 1 })
          ])) : Y("", !0),
          j(y.$slots, "default"),
          i.value && (y.$slots.suffix || u.value) ? (x(), N("span", Si, [
            u.value ? (x(), ee(ft, {
              key: 0,
              color: A(p),
              size: A(c)
            }, null, 8, ["color", "size"])) : j(y.$slots, "suffix", { key: 1 })
          ])) : Y("", !0)
        ], 2),
        !i.value && (y.$slots.suffix || u.value) ? (x(), N("div", Ti, [
          u.value ? (x(), ee(ft, {
            key: 0,
            color: A(p),
            size: A(c)
          }, null, 8, ["color", "size"])) : j(y.$slots, "suffix", { key: 1 })
        ])) : Y("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
function Ai(e) {
  return sn() ? (an(e), !0) : !1;
}
const Pi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Li = (e) => typeof e < "u";
function Ni(e, t, r = {}) {
  const {
    immediate: o = !0,
    immediateCallback: n = !1
  } = r, i = tn(!1);
  let s = null;
  function u() {
    s && (clearTimeout(s), s = null);
  }
  function p() {
    i.value = !1, u();
  }
  function c(...f) {
    n && e(), u(), i.value = !0, s = setTimeout(() => {
      i.value = !1, s = null, e(...f);
    }, nn(t));
  }
  return o && (i.value = !0, Pi && c()), Ai(p), {
    isPending: rn(i),
    start: c,
    stop: p
  };
}
function zi(e) {
  return JSON.parse(JSON.stringify(e));
}
function Di(e, t, r, o = {}) {
  var n, i, s;
  const {
    clone: u = !1,
    passive: p = !1,
    eventName: c,
    deep: f = !1,
    defaultValue: g,
    shouldEmit: b
  } = o, y = yn(), w = r || y?.emit || ((n = y?.$emit) == null ? void 0 : n.bind(y)) || ((s = (i = y?.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(y?.proxy));
  let S = c;
  S = S || `update:${t.toString()}`;
  const L = (D) => u ? typeof u == "function" ? u(D) : zi(D) : D, P = () => Li(e[t]) ? L(e[t]) : g, z = (D) => {
    b ? b(D) && w(S, D) : w(S, D);
  };
  if (p) {
    const D = P(), W = ae(D);
    let G = !1;
    return Ut(
      () => e[t],
      (q) => {
        G || (G = !0, W.value = L(q), uo(() => G = !1));
      }
    ), Ut(
      W,
      (q) => {
        !G && (q !== e[t] || f) && z(q);
      },
      { deep: f }
    ), W;
  } else
    return v({
      get() {
        return P();
      },
      set(D) {
        z(D);
      }
    });
}
var Mi = typeof global == "object" && global && global.Object === Object && global, Ei = typeof self == "object" && self && self.Object === Object && self, sr = Mi || Ei || Function("return this")(), Ae = sr.Symbol, So = Object.prototype, Bi = So.hasOwnProperty, Oi = So.toString, Je = Ae ? Ae.toStringTag : void 0;
function ji(e) {
  var t = Bi.call(e, Je), r = e[Je];
  try {
    e[Je] = void 0;
    var o = !0;
  } catch {
  }
  var n = Oi.call(e);
  return o && (t ? e[Je] = r : delete e[Je]), n;
}
var Ri = Object.prototype, Fi = Ri.toString;
function Hi(e) {
  return Fi.call(e);
}
var Vi = "[object Null]", Wi = "[object Undefined]", Pr = Ae ? Ae.toStringTag : void 0;
function ar(e) {
  return e == null ? e === void 0 ? Wi : Vi : Pr && Pr in Object(e) ? ji(e) : Hi(e);
}
function lr(e) {
  return e != null && typeof e == "object";
}
var Gi = "[object Symbol]";
function ur(e) {
  return typeof e == "symbol" || lr(e) && ar(e) == Gi;
}
function Ui(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = Array(o); ++r < o; )
    n[r] = t(e[r], r, e);
  return n;
}
var ut = Array.isArray, Lr = Ae ? Ae.prototype : void 0, Nr = Lr ? Lr.toString : void 0;
function To(e) {
  if (typeof e == "string")
    return e;
  if (ut(e))
    return Ui(e, To) + "";
  if (ur(e))
    return Nr ? Nr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function wt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function qi(e) {
  return e;
}
var Ki = "[object AsyncFunction]", Yi = "[object Function]", Ji = "[object GeneratorFunction]", Zi = "[object Proxy]";
function Qi(e) {
  if (!wt(e))
    return !1;
  var t = ar(e);
  return t == Yi || t == Ji || t == Ki || t == Zi;
}
var Ht = sr["__core-js_shared__"], zr = function() {
  var e = /[^.]+$/.exec(Ht && Ht.keys && Ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xi(e) {
  return !!zr && zr in e;
}
var es = Function.prototype, ts = es.toString;
function rs(e) {
  if (e != null) {
    try {
      return ts.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var os = /[\\^$.*+?()[\]{}|]/g, ns = /^\[object .+?Constructor\]$/, is = Function.prototype, ss = Object.prototype, as = is.toString, ls = ss.hasOwnProperty, us = RegExp(
  "^" + as.call(ls).replace(os, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ds(e) {
  if (!wt(e) || Xi(e))
    return !1;
  var t = Qi(e) ? us : ns;
  return t.test(rs(e));
}
function cs(e, t) {
  return e?.[t];
}
function dr(e, t) {
  var r = cs(e, t);
  return ds(r) ? r : void 0;
}
function ps(e, t, r) {
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
var hs = 800, fs = 16, gs = Date.now;
function ms(e) {
  var t = 0, r = 0;
  return function() {
    var o = gs(), n = fs - (o - r);
    if (r = o, n > 0) {
      if (++t >= hs)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ys(e) {
  return function() {
    return e;
  };
}
var xt = function() {
  try {
    var e = dr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), bs = xt ? function(e, t) {
  return xt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ys(t),
    writable: !0
  });
} : qi, vs = ms(bs), ws = 9007199254740991, xs = /^(?:0|[1-9]\d*)$/;
function Io(e, t) {
  var r = typeof e;
  return t = t ?? ws, !!t && (r == "number" || r != "symbol" && xs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ks(e, t, r) {
  t == "__proto__" && xt ? xt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Ao(e, t) {
  return e === t || e !== e && t !== t;
}
var _s = Object.prototype, Cs = _s.hasOwnProperty;
function $s(e, t, r) {
  var o = e[t];
  (!(Cs.call(e, t) && Ao(o, r)) || r === void 0 && !(t in e)) && ks(e, t, r);
}
var Dr = Math.max;
function Ss(e, t, r) {
  return t = Dr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, n = -1, i = Dr(o.length - t, 0), s = Array(i); ++n < i; )
      s[n] = o[t + n];
    n = -1;
    for (var u = Array(t + 1); ++n < t; )
      u[n] = o[n];
    return u[t] = r(s), ps(e, this, u);
  };
}
var Ts = 9007199254740991;
function Is(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ts;
}
var As = "[object Arguments]";
function Mr(e) {
  return lr(e) && ar(e) == As;
}
var Po = Object.prototype, Ps = Po.hasOwnProperty, Ls = Po.propertyIsEnumerable, Lo = Mr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Mr : function(e) {
  return lr(e) && Ps.call(e, "callee") && !Ls.call(e, "callee");
}, Ns = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zs = /^\w*$/;
function Ds(e, t) {
  if (ut(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ur(e) ? !0 : zs.test(e) || !Ns.test(e) || t != null && e in Object(t);
}
var ot = dr(Object, "create");
function Ms() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function Es(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Bs = "__lodash_hash_undefined__", Os = Object.prototype, js = Os.hasOwnProperty;
function Rs(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === Bs ? void 0 : r;
  }
  return js.call(t, e) ? t[e] : void 0;
}
var Fs = Object.prototype, Hs = Fs.hasOwnProperty;
function Vs(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Hs.call(t, e);
}
var Ws = "__lodash_hash_undefined__";
function Gs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Ws : t, this;
}
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ee.prototype.clear = Ms;
Ee.prototype.delete = Es;
Ee.prototype.get = Rs;
Ee.prototype.has = Vs;
Ee.prototype.set = Gs;
function Us() {
  this.__data__ = [], this.size = 0;
}
function Lt(e, t) {
  for (var r = e.length; r--; )
    if (Ao(e[r][0], t))
      return r;
  return -1;
}
var qs = Array.prototype, Ks = qs.splice;
function Ys(e) {
  var t = this.__data__, r = Lt(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Ks.call(t, r, 1), --this.size, !0;
}
function Js(e) {
  var t = this.__data__, r = Lt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Zs(e) {
  return Lt(this.__data__, e) > -1;
}
function Qs(e, t) {
  var r = this.__data__, o = Lt(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function qe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
qe.prototype.clear = Us;
qe.prototype.delete = Ys;
qe.prototype.get = Js;
qe.prototype.has = Zs;
qe.prototype.set = Qs;
var Xs = dr(sr, "Map");
function ea() {
  this.size = 0, this.__data__ = {
    hash: new Ee(),
    map: new (Xs || qe)(),
    string: new Ee()
  };
}
function ta(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Nt(e, t) {
  var r = e.__data__;
  return ta(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ra(e) {
  var t = Nt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function oa(e) {
  return Nt(this, e).get(e);
}
function na(e) {
  return Nt(this, e).has(e);
}
function ia(e, t) {
  var r = Nt(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function je(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
je.prototype.clear = ea;
je.prototype.delete = ra;
je.prototype.get = oa;
je.prototype.has = na;
je.prototype.set = ia;
var sa = "Expected a function";
function cr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(sa);
  var r = function() {
    var o = arguments, n = t ? t.apply(this, o) : o[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = e.apply(this, o);
    return r.cache = i.set(n, s) || i, s;
  };
  return r.cache = new (cr.Cache || je)(), r;
}
cr.Cache = je;
var aa = 500;
function la(e) {
  var t = cr(e, function(o) {
    return r.size === aa && r.clear(), o;
  }), r = t.cache;
  return t;
}
var ua = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, da = /\\(\\)?/g, ca = la(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ua, function(r, o, n, i) {
    t.push(n ? i.replace(da, "$1") : o || r);
  }), t;
});
function pa(e) {
  return e == null ? "" : To(e);
}
function zt(e, t) {
  return ut(e) ? e : Ds(e, t) ? [e] : ca(pa(e));
}
function pr(e) {
  if (typeof e == "string" || ur(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ha(e, t) {
  t = zt(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[pr(t[r++])];
  return r && r == o ? e : void 0;
}
function fa(e, t) {
  for (var r = -1, o = t.length, n = e.length; ++r < o; )
    e[n + r] = t[r];
  return e;
}
var Er = Ae ? Ae.isConcatSpreadable : void 0;
function ga(e) {
  return ut(e) || Lo(e) || !!(Er && e && e[Er]);
}
function ma(e, t, r, o, n) {
  var i = -1, s = e.length;
  for (r || (r = ga), n || (n = []); ++i < s; ) {
    var u = e[i];
    r(u) ? fa(n, u) : n[n.length] = u;
  }
  return n;
}
function ya(e) {
  var t = e == null ? 0 : e.length;
  return t ? ma(e) : [];
}
function ba(e) {
  return vs(Ss(e, void 0, ya), e + "");
}
function va(e, t) {
  return e != null && t in Object(e);
}
function wa(e, t, r) {
  t = zt(t, e);
  for (var o = -1, n = t.length, i = !1; ++o < n; ) {
    var s = pr(t[o]);
    if (!(i = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return i || ++o != n ? i : (n = e == null ? 0 : e.length, !!n && Is(n) && Io(s, n) && (ut(e) || Lo(e)));
}
function xa(e, t) {
  return e != null && wa(e, t, va);
}
function ka(e, t, r, o) {
  if (!wt(e))
    return e;
  t = zt(t, e);
  for (var n = -1, i = t.length, s = i - 1, u = e; u != null && ++n < i; ) {
    var p = pr(t[n]), c = r;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return e;
    if (n != s) {
      var f = u[p];
      c = void 0, c === void 0 && (c = wt(f) ? f : Io(t[n + 1]) ? [] : {});
    }
    $s(u, p, c), u = u[p];
  }
  return e;
}
function _a(e, t, r) {
  for (var o = -1, n = t.length, i = {}; ++o < n; ) {
    var s = t[o], u = ha(e, s);
    r(u, s) && ka(i, zt(s, e), u);
  }
  return i;
}
function Ca(e, t) {
  return _a(e, t, function(r, o) {
    return xa(e, o);
  });
}
var $a = ba(function(e, t) {
  return e == null ? {} : Ca(e, t);
});
function Jt(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(yt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Jt(o, t, r);
        return;
      }
      if (o.type === We) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Jt(o.children, t, r);
      } else o.type !== en && r.push(o);
    }
  }), r;
}
function Sa(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = Jt(o(r));
  return n.length === 1 ? n[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const Ta = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Ia(e, t) {
  Object.entries(Ta).forEach(([, r]) => {
    r.forEach((o) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const n = e.props[o], i = t[o];
      n ? e.props[o] = (...s) => {
        n(...s), i(...s);
      } : e.props[o] = i;
    });
  });
}
Z({
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
    }, r = Sa(e, "default"), o = [
      t
    ];
    return r?.props && o.push(
      $a(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Ia(
      r,
      {
        onBlur: (n) => {
          o.forEach((i) => {
            i?.onBlur?.(n);
          });
        },
        onFocus: (n) => {
          o.forEach((i) => {
            i?.onFocus?.(n);
          });
        },
        onClick: (n) => {
          o.forEach((i) => {
            i?.onClick?.(n);
          });
        },
        onMouseenter: (n) => {
          o.forEach((i) => {
            i?.onMouseenter?.(n);
          });
        },
        onMouseleave: (n) => {
          o.forEach((i) => {
            i?.onMouseleave?.(n);
          });
        }
      }
    ), r;
  }
});
(/* @__PURE__ */ new Date()).getFullYear();
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Aa = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, Pa = (e, t = Aa) => {
  const r = Object.keys(t).find((o) => e.includes(o));
  return r ? t[r](e) : e.substring(0, e.indexOf("-"));
};
function La(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const o = Array.isArray(r) ? Array.from(r).map((c) => c.split(" ")).flat() : r.split(" "), n = o.map((c) => Pa(c)), i = n.filter((c) => !t.types.includes(c)), s = [...n.filter((c) => t.types.includes(c)), ...i], u = [.../* @__PURE__ */ new Set([...t.types, ...s])], p = u.map((c) => {
      if (s.includes(c)) {
        const g = n.indexOf(c);
        if (g >= 0)
          return o[g] || "";
      }
      const f = t.types.indexOf(c);
      return f >= 0 && t.classes[f] || "";
    }).filter((c) => !!c);
    return {
      types: u,
      classes: p
    };
  }, { types: [], classes: [] }).classes.join(" ");
}
const Na = "flowbite-themable-injection-key", He = {
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
function za(e) {
  const t = on(Na, ae(null)), r = v(() => e || t.value), o = v(() => !!t?.value), n = v(
    () => r.value ? He[r.value].background : ""
  ), i = v(
    () => r.value ? He[r.value].border : ""
  ), s = v(() => t?.value || void 0), u = v(
    () => r.value ? He[r.value].disabled : ""
  ), p = v(
    () => r.value ? He[r.value].focus : ""
  ), c = v(
    () => r.value ? He[r.value].hover : ""
  ), f = v(
    () => r.value ? He[r.value].text : ""
  );
  return {
    backgroundClasses: n,
    borderClasses: i,
    color: s,
    disabledClasses: u,
    focusClasses: p,
    hoverClasses: c,
    isActive: o,
    textClasses: f
  };
}
const Da = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, Ma = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, Br = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800", Or = "text-sm font-normal";
function Ea(e) {
  const t = v(() => Da[e.type.value]), r = v(() => {
    const n = Ma[e.alignment.value];
    return e.divide.value ? se([Br, "dark:divide-gray-700 divide-x divide-gray-200", n]) : se([Br, n]);
  }), o = v(() => e.type.value !== "empty" && e.divide.value ? se([Or, "pl-3"]) : Or);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: o
  };
}
function Ba(e) {
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: o,
    focusClasses: n,
    hoverClasses: i,
    isActive: s,
    textClasses: u
  } = za(e.theme?.value);
  return {
    classes: v(() => {
      if (!s.value)
        return "";
      const p = [];
      return e.apply.value.includes("text") && p.push(u.value), e.apply.value.includes("border") && p.push(r.value), e.apply.value.includes("background") && p.push(t.value), e.apply.value.includes("hover") && p.push(i.value), e.apply.value.includes("disabled") && p.push(o.value), e.apply.value.includes("focus") && p.push(n.value), p.join(" ");
    })
  };
}
const Oa = /* @__PURE__ */ Z({
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
    const t = or(), r = e, { classes: o } = Ba(Ie(r)), n = v(() => t.class || "");
    return (i, s) => (x(), ee(St(e.tag), {
      class: H(A(La)(n.value, A(o)))
    }, {
      default: ie(() => [
        j(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ja = {
  key: 1,
  "aria-hidden": "true",
  class: "size-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ra = {
  key: 2,
  "aria-hidden": "true",
  class: "size-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Fa = {
  key: 3,
  "aria-hidden": "true",
  class: "size-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, jr = /* @__PURE__ */ Z({
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
    const r = e, o = ae(!0), n = t, {
      typeClasses: i,
      wrapperClasses: s,
      contentClasses: u
    } = Ea(Ie(r)), p = () => {
      n("close"), o.value = !1;
    };
    return (c, f) => o.value ? (x(), N("div", {
      key: 0,
      id: "toast-default",
      class: H(A(s)),
      role: "alert"
    }, [
      e.type !== "empty" || c.$slots.icon ? (x(), ee(Oa, {
        key: 0,
        apply: ["background", "text"],
        class: H(["inline-flex size-8 shrink-0 items-center justify-center rounded-lg", A(i)])
      }, {
        default: ie(() => [
          c.$slots.icon ? j(c.$slots, "icon", {
            key: 0,
            class: H({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (x(), N("svg", ja, f[0] || (f[0] = [
            U("path", {
              "clip-rule": "evenodd",
              d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
              "fill-rule": "evenodd"
            }, null, -1)
          ]))) : e.type === "danger" ? (x(), N("svg", Ra, f[1] || (f[1] = [
            U("path", {
              "clip-rule": "evenodd",
              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
              "fill-rule": "evenodd"
            }, null, -1)
          ]))) : e.type === "warning" ? (x(), N("svg", Fa, f[2] || (f[2] = [
            U("path", {
              "clip-rule": "evenodd",
              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
              "fill-rule": "evenodd"
            }, null, -1)
          ]))) : Y("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : Y("", !0),
      U("div", {
        class: H([A(u), { "ml-3": c.$slots.icon || e.type !== "empty" }])
      }, [
        j(c.$slots, "default")
      ], 2),
      e.closable ? (x(), N("button", {
        key: 1,
        "aria-label": "Close",
        class: "-m-1.5 ml-auto inline-flex size-8 rounded-lg border-none bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
        type: "button",
        onClick: p
      }, f[3] || (f[3] = [
        U("span", { class: "sr-only" }, "Close", -1),
        U("svg", {
          class: "size-5",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          U("path", {
            "clip-rule": "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            "fill-rule": "evenodd"
          })
        ], -1)
      ]))) : Y("", !0)
    ], 2)) : Y("", !0);
  }
}), Ha = "flowbite-toast-injection-key";
Z({
  components: {
    FwbToast: jr
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = ae([]), t = (i, s) => {
      Ni(() => n(i), s);
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
    return Zo(Ha, {
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
    return dt("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      dt(
        Jo,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (n) => n.component ? dt(
              n.component,
              {
                key: n.id,
                onClose: () => o(n.id),
                ...n.componentProps ? n.componentProps : {}
              },
              () => n.text
            ) : dt(
              jr,
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
const Va = ["top", "right", "bottom", "left"], Rr = ["start", "end"], Fr = /* @__PURE__ */ Va.reduce((e, t) => e.concat(t, t + "-" + Rr[0], t + "-" + Rr[1]), []), nt = Math.min, ze = Math.max, Wa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ga = {
  start: "end",
  end: "start"
};
function Zt(e, t, r) {
  return ze(e, nt(t, r));
}
function Re(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ye(e) {
  return e.split("-")[0];
}
function fe(e) {
  return e.split("-")[1];
}
function No(e) {
  return e === "x" ? "y" : "x";
}
function hr(e) {
  return e === "y" ? "height" : "width";
}
function Be(e) {
  return ["top", "bottom"].includes(ye(e)) ? "y" : "x";
}
function fr(e) {
  return No(Be(e));
}
function zo(e, t, r) {
  r === void 0 && (r = !1);
  const o = fe(e), n = fr(e), i = hr(n);
  let s = n === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = _t(s)), [s, _t(s)];
}
function Ua(e) {
  const t = _t(e);
  return [kt(e), t, kt(t)];
}
function kt(e) {
  return e.replace(/start|end/g, (t) => Ga[t]);
}
function qa(e, t, r) {
  const o = ["left", "right"], n = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? n : o : t ? o : n;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Ka(e, t, r, o) {
  const n = fe(e);
  let i = qa(ye(e), r === "start", o);
  return n && (i = i.map((s) => s + "-" + n), t && (i = i.concat(i.map(kt)))), i;
}
function _t(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Wa[t]);
}
function Ya(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Do(e) {
  return typeof e != "number" ? Ya(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ze(e) {
  const {
    x: t,
    y: r,
    width: o,
    height: n
  } = e;
  return {
    width: o,
    height: n,
    top: r,
    left: t,
    right: t + o,
    bottom: r + n,
    x: t,
    y: r
  };
}
function Hr(e, t, r) {
  let {
    reference: o,
    floating: n
  } = e;
  const i = Be(t), s = fr(t), u = hr(s), p = ye(t), c = i === "y", f = o.x + o.width / 2 - n.width / 2, g = o.y + o.height / 2 - n.height / 2, b = o[u] / 2 - n[u] / 2;
  let y;
  switch (p) {
    case "top":
      y = {
        x: f,
        y: o.y - n.height
      };
      break;
    case "bottom":
      y = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      y = {
        x: o.x + o.width,
        y: g
      };
      break;
    case "left":
      y = {
        x: o.x - n.width,
        y: g
      };
      break;
    default:
      y = {
        x: o.x,
        y: o.y
      };
  }
  switch (fe(t)) {
    case "start":
      y[s] -= b * (r && c ? -1 : 1);
      break;
    case "end":
      y[s] += b * (r && c ? -1 : 1);
      break;
  }
  return y;
}
const Ja = async (e, t, r) => {
  const {
    placement: o = "bottom",
    strategy: n = "absolute",
    middleware: i = [],
    platform: s
  } = r, u = i.filter(Boolean), p = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: f,
    y: g
  } = Hr(c, o, p), b = o, y = {}, w = 0;
  for (let S = 0; S < u.length; S++) {
    const {
      name: L,
      fn: P
    } = u[S], {
      x: z,
      y: D,
      data: W,
      reset: G
    } = await P({
      x: f,
      y: g,
      initialPlacement: o,
      placement: b,
      strategy: n,
      middlewareData: y,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = z ?? f, g = D ?? g, y = {
      ...y,
      [L]: {
        ...y[L],
        ...W
      }
    }, G && w <= 50 && (w++, typeof G == "object" && (G.placement && (b = G.placement), G.rects && (c = G.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : G.rects), {
      x: f,
      y: g
    } = Hr(c, b, p)), S = -1);
  }
  return {
    x: f,
    y: g,
    placement: b,
    strategy: n,
    middlewareData: y
  };
};
async function Dt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: o,
    y: n,
    platform: i,
    rects: s,
    elements: u,
    strategy: p
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: g = "floating",
    altBoundary: b = !1,
    padding: y = 0
  } = Re(t, e), w = Do(y), S = u[b ? g === "floating" ? "reference" : "floating" : g], L = Ze(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(S))) == null || r ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: p
  })), P = g === "floating" ? {
    x: o,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, z = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)), D = await (i.isElement == null ? void 0 : i.isElement(z)) ? await (i.getScale == null ? void 0 : i.getScale(z)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, W = Ze(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: P,
    offsetParent: z,
    strategy: p
  }) : P);
  return {
    top: (L.top - W.top + w.top) / D.y,
    bottom: (W.bottom - L.bottom + w.bottom) / D.y,
    left: (L.left - W.left + w.left) / D.x,
    right: (W.right - L.right + w.right) / D.x
  };
}
const Za = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: o,
      placement: n,
      rects: i,
      platform: s,
      elements: u,
      middlewareData: p
    } = t, {
      element: c,
      padding: f = 0
    } = Re(e, t) || {};
    if (c == null)
      return {};
    const g = Do(f), b = {
      x: r,
      y: o
    }, y = fr(n), w = hr(y), S = await s.getDimensions(c), L = y === "y", P = L ? "top" : "left", z = L ? "bottom" : "right", D = L ? "clientHeight" : "clientWidth", W = i.reference[w] + i.reference[y] - b[y] - i.floating[w], G = b[y] - i.reference[y], q = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let J = q ? q[D] : 0;
    (!J || !await (s.isElement == null ? void 0 : s.isElement(q))) && (J = u.floating[D] || i.floating[w]);
    const T = W / 2 - G / 2, V = J / 2 - S[w] / 2 - 1, O = nt(g[P], V), te = nt(g[z], V), Q = O, ue = J - S[w] - te, k = J / 2 - S[w] / 2 + T, le = Zt(Q, k, ue), a = !p.arrow && fe(n) != null && k !== le && i.reference[w] / 2 - (k < Q ? O : te) - S[w] / 2 < 0, l = a ? k < Q ? k - Q : k - ue : 0;
    return {
      [y]: b[y] + l,
      data: {
        [y]: le,
        centerOffset: k - le - l,
        ...a && {
          alignmentOffset: l
        }
      },
      reset: a
    };
  }
});
function Qa(e, t, r) {
  return (e ? [...r.filter((o) => fe(o) === e), ...r.filter((o) => fe(o) !== e)] : r.filter((o) => ye(o) === o)).filter((o) => e ? fe(o) === e || (t ? kt(o) !== o : !1) : !0);
}
const Xa = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var r, o, n;
      const {
        rects: i,
        middlewareData: s,
        placement: u,
        platform: p,
        elements: c
      } = t, {
        crossAxis: f = !1,
        alignment: g,
        allowedPlacements: b = Fr,
        autoAlignment: y = !0,
        ...w
      } = Re(e, t), S = g !== void 0 || b === Fr ? Qa(g || null, y, b) : b, L = await Dt(t, w), P = ((r = s.autoPlacement) == null ? void 0 : r.index) || 0, z = S[P];
      if (z == null)
        return {};
      const D = zo(z, i, await (p.isRTL == null ? void 0 : p.isRTL(c.floating)));
      if (u !== z)
        return {
          reset: {
            placement: S[0]
          }
        };
      const W = [L[ye(z)], L[D[0]], L[D[1]]], G = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: z,
        overflows: W
      }], q = S[P + 1];
      if (q)
        return {
          data: {
            index: P + 1,
            overflows: G
          },
          reset: {
            placement: q
          }
        };
      const J = G.map((V) => {
        const O = fe(V.placement);
        return [V.placement, O && f ? (
          // Check along the mainAxis and main crossAxis side.
          V.overflows.slice(0, 2).reduce((te, Q) => te + Q, 0)
        ) : (
          // Check only the mainAxis.
          V.overflows[0]
        ), V.overflows];
      }).sort((V, O) => V[1] - O[1]), T = ((n = J.filter((V) => V[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        fe(V[0]) ? 2 : 3
      ).every((O) => O <= 0))[0]) == null ? void 0 : n[0]) || J[0][0];
      return T !== u ? {
        data: {
          index: P + 1,
          overflows: G
        },
        reset: {
          placement: T
        }
      } : {};
    }
  };
}, el = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: n,
        middlewareData: i,
        rects: s,
        initialPlacement: u,
        platform: p,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: g = !0,
        fallbackPlacements: b,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: S = !0,
        ...L
      } = Re(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const P = ye(n), z = Be(u), D = ye(u) === u, W = await (p.isRTL == null ? void 0 : p.isRTL(c.floating)), G = b || (D || !S ? [_t(u)] : Ua(u)), q = w !== "none";
      !b && q && G.push(...Ka(u, S, w, W));
      const J = [u, ...G], T = await Dt(t, L), V = [];
      let O = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && V.push(T[P]), g) {
        const k = zo(n, s, W);
        V.push(T[k[0]], T[k[1]]);
      }
      if (O = [...O, {
        placement: n,
        overflows: V
      }], !V.every((k) => k <= 0)) {
        var te, Q;
        const k = (((te = i.flip) == null ? void 0 : te.index) || 0) + 1, le = J[k];
        if (le)
          return {
            data: {
              index: k,
              overflows: O
            },
            reset: {
              placement: le
            }
          };
        let a = (Q = O.filter((l) => l.overflows[0] <= 0).sort((l, d) => l.overflows[1] - d.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!a)
          switch (y) {
            case "bestFit": {
              var ue;
              const l = (ue = O.filter((d) => {
                if (q) {
                  const h = Be(d.placement);
                  return h === z || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  h === "y";
                }
                return !0;
              }).map((d) => [d.placement, d.overflows.filter((h) => h > 0).reduce((h, m) => h + m, 0)]).sort((d, h) => d[1] - h[1])[0]) == null ? void 0 : ue[0];
              l && (a = l);
              break;
            }
            case "initialPlacement":
              a = u;
              break;
          }
        if (n !== a)
          return {
            reset: {
              placement: a
            }
          };
      }
      return {};
    }
  };
};
async function tl(e, t) {
  const {
    placement: r,
    platform: o,
    elements: n
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(n.floating)), s = ye(r), u = fe(r), p = Be(r) === "y", c = ["left", "top"].includes(s) ? -1 : 1, f = i && p ? -1 : 1, g = Re(t, e);
  let {
    mainAxis: b,
    crossAxis: y,
    alignmentAxis: w
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return u && typeof w == "number" && (y = u === "end" ? w * -1 : w), p ? {
    x: y * f,
    y: b * c
  } : {
    x: b * c,
    y: y * f
  };
}
const rl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, o;
      const {
        x: n,
        y: i,
        placement: s,
        middlewareData: u
      } = t, p = await tl(t, e);
      return s === ((r = u.offset) == null ? void 0 : r.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: n + p.x,
        y: i + p.y,
        data: {
          ...p,
          placement: s
        }
      };
    }
  };
}, ol = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: o,
        placement: n
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: u = {
          fn: (L) => {
            let {
              x: P,
              y: z
            } = L;
            return {
              x: P,
              y: z
            };
          }
        },
        ...p
      } = Re(e, t), c = {
        x: r,
        y: o
      }, f = await Dt(t, p), g = Be(ye(n)), b = No(g);
      let y = c[b], w = c[g];
      if (i) {
        const L = b === "y" ? "top" : "left", P = b === "y" ? "bottom" : "right", z = y + f[L], D = y - f[P];
        y = Zt(z, y, D);
      }
      if (s) {
        const L = g === "y" ? "top" : "left", P = g === "y" ? "bottom" : "right", z = w + f[L], D = w - f[P];
        w = Zt(z, w, D);
      }
      const S = u.fn({
        ...t,
        [b]: y,
        [g]: w
      });
      return {
        ...S,
        data: {
          x: S.x - r,
          y: S.y - o,
          enabled: {
            [b]: i,
            [g]: s
          }
        }
      };
    }
  };
}, nl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: n,
        rects: i,
        platform: s,
        elements: u
      } = t, {
        apply: p = () => {
        },
        ...c
      } = Re(e, t), f = await Dt(t, c), g = ye(n), b = fe(n), y = Be(n) === "y", {
        width: w,
        height: S
      } = i.floating;
      let L, P;
      g === "top" || g === "bottom" ? (L = g, P = b === (await (s.isRTL == null ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (P = g, L = b === "end" ? "top" : "bottom");
      const z = S - f.top - f.bottom, D = w - f.left - f.right, W = nt(S - f[L], z), G = nt(w - f[P], D), q = !t.middlewareData.shift;
      let J = W, T = G;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (T = D), (o = t.middlewareData.shift) != null && o.enabled.y && (J = z), q && !b) {
        const O = ze(f.left, 0), te = ze(f.right, 0), Q = ze(f.top, 0), ue = ze(f.bottom, 0);
        y ? T = w - 2 * (O !== 0 || te !== 0 ? O + te : ze(f.left, f.right)) : J = S - 2 * (Q !== 0 || ue !== 0 ? Q + ue : ze(f.top, f.bottom));
      }
      await p({
        ...t,
        availableWidth: T,
        availableHeight: J
      });
      const V = await s.getDimensions(u.floating);
      return w !== V.width || S !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ge(e) {
  return pe(e).getComputedStyle(e);
}
const Vr = Math.min, Qe = Math.max, Ct = Math.round;
function Mo(e) {
  const t = ge(e);
  let r = parseFloat(t.width), o = parseFloat(t.height);
  const n = e.offsetWidth, i = e.offsetHeight, s = Ct(r) !== n || Ct(o) !== i;
  return s && (r = n, o = i), { width: r, height: o, fallback: s };
}
function Pe(e) {
  return Bo(e) ? (e.nodeName || "").toLowerCase() : "";
}
let gt;
function Eo() {
  if (gt) return gt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (gt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), gt) : navigator.userAgent;
}
function me(e) {
  return e instanceof pe(e).HTMLElement;
}
function Se(e) {
  return e instanceof pe(e).Element;
}
function Bo(e) {
  return e instanceof pe(e).Node;
}
function Wr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof pe(e).ShadowRoot || e instanceof ShadowRoot;
}
function Mt(e) {
  const { overflow: t, overflowX: r, overflowY: o, display: n } = ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(n);
}
function il(e) {
  return ["table", "td", "th"].includes(Pe(e));
}
function Qt(e) {
  const t = /firefox/i.test(Eo()), r = ge(e), o = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!o && o !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((n) => r.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const i = r.contain;
    return i != null && i.includes(n);
  });
}
function Oo() {
  return !/^((?!chrome|android).)*safari/i.test(Eo());
}
function gr(e) {
  return ["html", "body", "#document"].includes(Pe(e));
}
function jo(e) {
  return Se(e) ? e : e.contextElement;
}
const Ro = { x: 1, y: 1 };
function Ve(e) {
  const t = jo(e);
  if (!me(t)) return Ro;
  const r = t.getBoundingClientRect(), { width: o, height: n, fallback: i } = Mo(t);
  let s = (i ? Ct(r.width) : r.width) / o, u = (i ? Ct(r.height) : r.height) / n;
  return s && Number.isFinite(s) || (s = 1), u && Number.isFinite(u) || (u = 1), { x: s, y: u };
}
function it(e, t, r, o) {
  var n, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), u = jo(e);
  let p = Ro;
  t && (o ? Se(o) && (p = Ve(o)) : p = Ve(e));
  const c = u ? pe(u) : window, f = !Oo() && r;
  let g = (s.left + (f && ((n = c.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / p.x, b = (s.top + (f && ((i = c.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / p.y, y = s.width / p.x, w = s.height / p.y;
  if (u) {
    const S = pe(u), L = o && Se(o) ? pe(o) : o;
    let P = S.frameElement;
    for (; P && o && L !== S; ) {
      const z = Ve(P), D = P.getBoundingClientRect(), W = getComputedStyle(P);
      D.x += (P.clientLeft + parseFloat(W.paddingLeft)) * z.x, D.y += (P.clientTop + parseFloat(W.paddingTop)) * z.y, g *= z.x, b *= z.y, y *= z.x, w *= z.y, g += D.x, b += D.y, P = pe(P).frameElement;
    }
  }
  return { width: y, height: w, top: b, right: g + y, bottom: b + w, left: g, x: g, y: b };
}
function Te(e) {
  return ((Bo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Et(e) {
  return Se(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Fo(e) {
  return it(Te(e)).left + Et(e).scrollLeft;
}
function st(e) {
  if (Pe(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Wr(e) && e.host || Te(e);
  return Wr(t) ? t.host : t;
}
function Ho(e) {
  const t = st(e);
  return gr(t) ? t.ownerDocument.body : me(t) && Mt(t) ? t : Ho(t);
}
function $t(e, t) {
  var r;
  t === void 0 && (t = []);
  const o = Ho(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = pe(o);
  return n ? t.concat(i, i.visualViewport || [], Mt(o) ? o : []) : t.concat(o, $t(o));
}
function Gr(e, t, r) {
  return t === "viewport" ? Ze(function(o, n) {
    const i = pe(o), s = Te(o), u = i.visualViewport;
    let p = s.clientWidth, c = s.clientHeight, f = 0, g = 0;
    if (u) {
      p = u.width, c = u.height;
      const b = Oo();
      (b || !b && n === "fixed") && (f = u.offsetLeft, g = u.offsetTop);
    }
    return { width: p, height: c, x: f, y: g };
  }(e, r)) : Se(t) ? Ze(function(o, n) {
    const i = it(o, !0, n === "fixed"), s = i.top + o.clientTop, u = i.left + o.clientLeft, p = me(o) ? Ve(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * p.x, height: o.clientHeight * p.y, x: u * p.x, y: s * p.y };
  }(t, r)) : Ze(function(o) {
    const n = Te(o), i = Et(o), s = o.ownerDocument.body, u = Qe(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), p = Qe(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let c = -i.scrollLeft + Fo(o);
    const f = -i.scrollTop;
    return ge(s).direction === "rtl" && (c += Qe(n.clientWidth, s.clientWidth) - u), { width: u, height: p, x: c, y: f };
  }(Te(e)));
}
function Ur(e) {
  return me(e) && ge(e).position !== "fixed" ? e.offsetParent : null;
}
function qr(e) {
  const t = pe(e);
  let r = Ur(e);
  for (; r && il(r) && ge(r).position === "static"; ) r = Ur(r);
  return r && (Pe(r) === "html" || Pe(r) === "body" && ge(r).position === "static" && !Qt(r)) ? t : r || function(o) {
    let n = st(o);
    for (; me(n) && !gr(n); ) {
      if (Qt(n)) return n;
      n = st(n);
    }
    return null;
  }(e) || t;
}
function sl(e, t, r) {
  const o = me(t), n = Te(t), i = it(e, !0, r === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (o || !o && r !== "fixed") if ((Pe(t) !== "body" || Mt(n)) && (s = Et(t)), me(t)) {
    const p = it(t, !0);
    u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
  } else n && (u.x = Fo(n));
  return { x: i.left + s.scrollLeft - u.x, y: i.top + s.scrollTop - u.y, width: i.width, height: i.height };
}
const al = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: o, strategy: n } = e;
  const i = r === "clippingAncestors" ? function(c, f) {
    const g = f.get(c);
    if (g) return g;
    let b = $t(c).filter((L) => Se(L) && Pe(L) !== "body"), y = null;
    const w = ge(c).position === "fixed";
    let S = w ? st(c) : c;
    for (; Se(S) && !gr(S); ) {
      const L = ge(S), P = Qt(S);
      (w ? P || y : P || L.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = L : b = b.filter((z) => z !== S), S = st(S);
    }
    return f.set(c, b), b;
  }(t, this._c) : [].concat(r), s = [...i, o], u = s[0], p = s.reduce((c, f) => {
    const g = Gr(t, f, n);
    return c.top = Qe(g.top, c.top), c.right = Vr(g.right, c.right), c.bottom = Vr(g.bottom, c.bottom), c.left = Qe(g.left, c.left), c;
  }, Gr(t, u, n));
  return { width: p.right - p.left, height: p.bottom - p.top, x: p.left, y: p.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: o } = e;
  const n = me(r), i = Te(r);
  if (r === i) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const p = { x: 0, y: 0 };
  if ((n || !n && o !== "fixed") && ((Pe(r) !== "body" || Mt(i)) && (s = Et(r)), me(r))) {
    const c = it(r);
    u = Ve(r), p.x = c.x + r.clientLeft, p.y = c.y + r.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - s.scrollLeft * u.x + p.x, y: t.y * u.y - s.scrollTop * u.y + p.y };
}, isElement: Se, getDimensions: function(e) {
  return me(e) ? Mo(e) : e.getBoundingClientRect();
}, getOffsetParent: qr, getDocumentElement: Te, getScale: Ve, async getElementRects(e) {
  let { reference: t, floating: r, strategy: o } = e;
  const n = this.getOffsetParent || qr, i = this.getDimensions;
  return { reference: sl(t, await n(r), o), floating: { x: 0, y: 0, ...await i(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ge(e).direction === "rtl" }, ll = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), n = { platform: al, ...r }, i = { ...n.platform, _c: o };
  return Ja(e, t, { ...n, platform: i });
}, De = {
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
  disposeTimeout: 150,
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
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
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
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Xt(e, t) {
  let r = De.themes[e] || {}, o;
  do
    o = r[t], typeof o > "u" ? r.$extend ? r = De.themes[r.$extend] || {} : (r = null, o = De[t]) : r = null;
  while (r);
  return o;
}
function ul(e) {
  const t = [e];
  let r = De.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = De.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((o) => `v-popper--theme-${o}`);
}
function Kr(e) {
  const t = [e];
  let r = De.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = De.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let at = !1;
if (typeof window < "u") {
  at = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        at = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Vo = !1;
typeof window < "u" && typeof navigator < "u" && (Vo = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const dl = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Yr = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Jr = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Zr(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function Vt() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const he = [];
let Ne = null;
const Qr = {};
function Xr(e) {
  let t = Qr[e];
  return t || (t = Qr[e] = []), t;
}
let er = function() {
};
typeof window < "u" && (er = window.Element);
function F(e) {
  return function(t) {
    return Xt(t.theme, e);
  };
}
const Wt = "__floating-vue__popper", Wo = () => Z({
  name: "VPopper",
  provide() {
    return {
      [Wt]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Wt]: { default: null }
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
      validator: (e) => dl.includes(e)
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
      type: [String, Object, er, Boolean],
      default: F("container")
    },
    boundary: {
      type: [String, er],
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
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
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
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
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
      return (e = this[Wt]) == null ? void 0 : e.parentPopper;
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
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
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
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
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
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (r || !this.disabled) && (((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var r;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((r = this.parentPopper) == null ? void 0 : r.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
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
      if (t ? e.middleware.push(Xa({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(ol({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(el({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Za({
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
            let p, c;
            return i.startsWith("top") || i.startsWith("bottom") ? p = n.reference.width : c = n.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = p != null ? `${p}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = c != null ? `${c}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(nl({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const r = await ll(this.$_referenceNode, this.$_popperNode, e);
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
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Ne && this.instantMove && Ne.instantMove && Ne !== this.parentPopper) {
        Ne.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Ne = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Vt(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...$t(this.$_referenceNode),
        ...$t(this.$_popperNode)
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
        for (let r = 0; r < he.length; r++)
          t = he[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      he.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Kr(this.theme))
        Xr(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Vt(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Zr(he, this), he.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of Kr(this.theme)) {
        const o = Xr(r);
        Zr(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      Ne === this && (Ne = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Vt(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
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
      this.$_registerTriggerListeners(this.$_targetNodes, Yr, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Yr, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Jr, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Jr, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((o) => o.addEventListener(t, r, at ? {
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
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
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
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (Xe >= e.left && Xe <= e.right && et >= e.top && et <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = Xe - _e, o = et - Ce, n = t.left + t.width / 2 - _e + (t.top + t.height / 2) - Ce + t.width + t.height, i = _e + r * n, s = Ce + o * n;
        return mt(_e, Ce, i, s, t.left, t.top, t.left, t.bottom) || // Left edge
        mt(_e, Ce, i, s, t.left, t.top, t.right, t.top) || // Top edge
        mt(_e, Ce, i, s, t.right, t.top, t.right, t.bottom) || // Right edge
        mt(_e, Ce, i, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Vo) {
    const e = at ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => eo(t), e), document.addEventListener("touchend", (t) => to(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => eo(e), !0), window.addEventListener("click", (e) => to(e, !1), !0);
  window.addEventListener("resize", hl);
}
function eo(e, t) {
  for (let r = 0; r < he.length; r++) {
    const o = he[r];
    try {
      o.mouseDownContains = o.popperNode().contains(e.target);
    } catch {
    }
  }
}
function to(e, t) {
  cl(e, t);
}
function cl(e, t) {
  const r = {};
  for (let o = he.length - 1; o >= 0; o--) {
    const n = he[o];
    try {
      const i = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !r[n.randomId] && ro(n, i, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let u = n.parentPopper;
            for (; u; )
              r[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && ro(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function ro(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || pl(e, r) && !t;
}
function pl(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function hl() {
  for (let e = 0; e < he.length; e++)
    he[e].$_computePosition();
}
let _e = 0, Ce = 0, Xe = 0, et = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  _e = Xe, Ce = et, Xe = e.clientX, et = e.clientY;
}, at ? {
  passive: !0
} : void 0);
function mt(e, t, r, o, n, i, s, u) {
  const p = ((s - n) * (t - i) - (u - i) * (e - n)) / ((u - i) * (r - e) - (s - n) * (o - t)), c = ((r - e) * (t - i) - (o - t) * (e - n)) / ((u - i) * (r - e) - (s - n) * (o - t));
  return p >= 0 && p <= 1 && c >= 0 && c <= 1;
}
const fl = {
  extends: Wo()
}, mr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
};
function gl(e, t, r, o, n, i) {
  return x(), N("div", {
    ref: "reference",
    class: H(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    j(e.$slots, "default", lt(Tt(e.slotData)))
  ], 2);
}
const ml = /* @__PURE__ */ mr(fl, [["render", gl]]);
function yl() {
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
let bt;
function tr() {
  tr.init || (tr.init = !0, bt = yl() !== -1);
}
var Bt = {
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
    tr(), uo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", bt && this.$el.appendChild(e), e.data = "about:blank", bt || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!bt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const bl = /* @__PURE__ */ ln("data-v-b329ee4c");
Qo("data-v-b329ee4c");
const vl = {
  class: "resize-observer",
  tabindex: "-1"
};
Xo();
const wl = /* @__PURE__ */ bl((e, t, r, o, n, i) => (x(), ee("div", vl)));
Bt.render = wl;
Bt.__scopeId = "data-v-b329ee4c";
Bt.__file = "src/components/ResizeObserver.vue";
const Go = (e = "theme") => ({
  computed: {
    themeClass() {
      return ul(this[e]);
    }
  }
}), xl = Z({
  name: "VPopperContent",
  components: {
    ResizeObserver: Bt
  },
  mixins: [
    Go()
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
}), kl = ["id", "aria-hidden", "tabindex", "data-popper-placement"], _l = {
  ref: "inner",
  class: "v-popper__inner"
}, Cl = /* @__PURE__ */ U("div", { class: "v-popper__arrow-outer" }, null, -1), $l = /* @__PURE__ */ U("div", { class: "v-popper__arrow-inner" }, null, -1), Sl = [
  Cl,
  $l
];
function Tl(e, t, r, o, n, i) {
  const s = vt("ResizeObserver");
  return x(), N("div", {
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
    style: Ot(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = un((u) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    U("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => e.autoHide && e.$emit("hide"))
    }),
    U("div", {
      class: "v-popper__wrapper",
      style: Ot(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      U("div", _l, [
        e.mounted ? (x(), N(We, { key: 0 }, [
          U("div", null, [
            j(e.$slots, "default")
          ]),
          e.handleResize ? (x(), ee(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (u) => e.$emit("resize", u))
          })) : Y("", !0)
        ], 64)) : Y("", !0)
      ], 512),
      U("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Ot(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Sl, 4)
    ], 4)
  ], 46, kl);
}
const Uo = /* @__PURE__ */ mr(xl, [["render", Tl]]), qo = {
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
};
let rr = function() {
};
typeof window < "u" && (rr = window.Element);
const Il = Z({
  name: "VPopperWrapper",
  components: {
    Popper: ml,
    PopperContent: Uo
  },
  mixins: [
    qo,
    Go("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
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
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, rr, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, rr],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
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
function Al(e, t, r, o, n, i) {
  const s = vt("PopperContent"), u = vt("Popper");
  return x(), ee(u, Oe({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (p) => e.$emit("update:shown", p)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: ie(({
      popperId: p,
      isShown: c,
      shouldMountContent: f,
      skipTransition: g,
      autoHide: b,
      show: y,
      hide: w,
      handleResize: S,
      onResize: L,
      classes: P,
      result: z
    }) => [
      j(e.$slots, "default", {
        shown: c,
        show: y,
        hide: w
      }),
      tt(s, {
        ref: "popperContent",
        "popper-id": p,
        theme: e.finalTheme,
        shown: c,
        mounted: f,
        "skip-transition": g,
        "auto-hide": b,
        "handle-resize": S,
        classes: P,
        result: z,
        onHide: w,
        onResize: L
      }, {
        default: ie(() => [
          j(e.$slots, "popper", {
            shown: c,
            hide: w
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const yr = /* @__PURE__ */ mr(Il, [["render", Al]]);
({
  ...yr
});
({
  ...yr
});
({
  ...yr
});
Z({
  name: "VTooltipDirective",
  components: {
    Popper: Wo(),
    PopperContent: Uo
  },
  mixins: [
    qo
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Xt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Xt(e.theme, "loadingContent")
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
const ke = {
  Error: "error",
  Success: "success"
}, Pl = "", Ll = "block mb-2 text-sm font-medium", Nl = "relative flex items-center has-[input:focus]:ring-offset-0 has-[input:focus]:ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg has-[input:focus]:ring-blue-500 has-[input:focus]:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:has-[input:focus]:ring-blue-500 dark:has-[input:focus]:border-blue-500", zl = "block flex-grow w-full p-0 bg-transparent text-inherit ring-offset-0 ring-0 border-0 focus:ring-offset-0 focus:ring-0 focus:border-0 dark:placeholder-gray-400", oo = "mt-2 text-sm text-gray-500 dark:text-gray-400", Dl = "bg-gray-100", Ml = "cursor-not-allowed", El = {
  sm: "p-2 text-sm",
  md: "p-2.5 text-sm",
  lg: "p-4"
}, Bl = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 has-[input:focus]:ring-red-500 has-[input:focus]:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500", no = "text-red-700 dark:text-red-500", Ol = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 has-[input:focus]:ring-green-500 has-[input:focus]:border-green-500 ", io = "text-green-700 dark:text-green-500", jl = "text-red-900 placeholder-red-700 dark:placeholder-red-500", Rl = "text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500";
function Fl(e) {
  const t = v(() => se([
    Pl,
    e.wrapperClass.value
  ])), r = v(() => se([
    Ll,
    e.labelClass.value,
    e.validationStatus.value === ke.Success ? io : e.validationStatus.value === ke.Error ? no : ""
  ])), o = v(() => se([
    Nl,
    e.class.value,
    e.validationStatus.value === ke.Success ? Ol : e.validationStatus.value === ke.Error ? Bl : "",
    e.disabled.value ? Dl : ""
  ])), n = v(() => se([
    zl,
    El[e.size.value],
    e.validationStatus.value === ke.Success ? Rl : e.validationStatus.value === ke.Error ? jl : "",
    e.inputClass.value,
    e.disabled.value ? Ml : ""
  ])), i = v(() => se([
    oo,
    e.validationStatus.value === ke.Success ? io : e.validationStatus.value === ke.Error ? no : ""
  ]));
  return {
    helperMessageClass: v(() => se([
      oo
    ])),
    inputClass: n,
    inputWrapperClass: o,
    labelClass: r,
    validationMessageClass: i,
    wrapperClass: t
  };
}
const Hl = {
  key: 0,
  class: "ms-2 flex shrink-0 items-center"
}, Vl = ["autocomplete", "disabled", "required", "type"], Wl = {
  key: 1,
  class: "me-2 flex shrink-0 items-center"
}, Gl = /* @__PURE__ */ Z({
  inheritAttrs: !1,
  __name: "FwbInput",
  props: /* @__PURE__ */ rt({
    autocomplete: { default: "off" },
    class: { default: "" },
    disabled: { type: Boolean, default: !1 },
    inputClass: { default: "" },
    label: { default: "" },
    labelClass: { default: "" },
    modelValue: { default: "" },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    type: { default: "text" },
    validationStatus: { default: void 0 },
    wrapperClass: { default: "" }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = nr(e, "modelValue"), {
      wrapperClass: o,
      helperMessageClass: n,
      validationMessageClass: i,
      labelClass: s,
      inputWrapperClass: u,
      inputClass: p
    } = Fl(Ie(t));
    return (c, f) => (x(), N("div", {
      class: H(A(o))
    }, [
      c.label ? (x(), N("label", {
        key: 0,
        class: H(A(s))
      }, de(c.label), 3)) : Y("", !0),
      U("div", {
        class: H(A(u))
      }, [
        c.$slots.prefix ? (x(), N("div", Hl, [
          j(c.$slots, "prefix")
        ])) : Y("", !0),
        At(U("input", Oe(c.$attrs, {
          "onUpdate:modelValue": f[0] || (f[0] = (g) => r.value = g),
          autocomplete: c.autocomplete,
          class: A(p),
          disabled: c.disabled,
          required: c.required,
          type: c.type
        }), null, 16, Vl), [
          [dn, r.value]
        ]),
        c.$slots.suffix ? (x(), N("div", Wl, [
          j(c.$slots, "suffix")
        ])) : Y("", !0)
      ], 2),
      c.$slots.validationMessage ? (x(), N("p", {
        key: 1,
        class: H(A(i))
      }, [
        j(c.$slots, "validationMessage")
      ], 2)) : Y("", !0),
      c.$slots.helper ? (x(), N("p", {
        key: 2,
        class: H(A(n))
      }, [
        j(c.$slots, "helper")
      ], 2)) : Y("", !0)
    ], 2));
  }
}), $e = {
  Success: "success",
  Error: "error"
}, Ul = "block mb-2 text-sm font-medium", ql = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", Kl = "cursor-not-allowed bg-gray-100", Yl = "bg-transparent dark:bg-transparent dark:text-gray-500 border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", Jl = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, Zl = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Ql = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Xl(e) {
  const t = v(() => {
    const o = e.validationStatus.value, n = o === $e.Success ? Zl : o === $e.Error ? Ql : "", i = o === $e.Success ? "focus:border-green-500" : o === $e.Error ? "focus:border-red-500" : "";
    return Me(
      ql,
      n,
      Jl[e.size.value],
      e.disabled.value && Kl,
      e.underline.value ? Yl : "border border-gray-300 rounded-lg",
      e.underline.value && i
    );
  }), r = v(() => {
    const o = e.validationStatus.value, n = o === $e.Success ? "text-green-700 dark:text-green-500" : o === $e.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return Me(Ul, n);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const eu = ["disabled", "required", "autocomplete"], tu = {
  disabled: "",
  selected: "",
  value: ""
}, ru = ["value"], ou = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, nu = /* @__PURE__ */ Z({
  __name: "FwbSelect",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    options: { default: () => [] },
    placeholder: { default: "Please select one" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    size: { default: "md" },
    autocomplete: { default: "off" },
    validationStatus: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = Di(r, "modelValue", t), { selectClasses: n, labelClasses: i } = Xl(Ie(r)), s = v(() => Me(
      "mt-2 text-sm",
      r.validationStatus === $e.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === $e.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (u, p) => (x(), N("div", null, [
      U("label", null, [
        u.label ? (x(), N("span", {
          key: 0,
          class: H(A(i))
        }, de(u.label), 3)) : Y("", !0),
        At(U("select", {
          "onUpdate:modelValue": p[0] || (p[0] = (c) => cn(o) ? o.value = c : null),
          disabled: u.disabled,
          required: u.required,
          class: H(A(n)),
          autocomplete: u.autocomplete
        }, [
          U("option", tu, de(u.placeholder), 1),
          (x(!0), N(We, null, co(u.options, (c, f) => (x(), N("option", {
            key: f,
            value: c.value
          }, de(c.name), 9, ru))), 128))
        ], 10, eu), [
          [pn, A(o)]
        ])
      ]),
      u.$slots.validationMessage ? (x(), N("p", {
        key: 0,
        class: H(s.value)
      }, [
        j(u.$slots, "validationMessage")
      ], 2)) : Y("", !0),
      u.$slots.helper ? (x(), N("p", ou, [
        j(u.$slots, "helper")
      ])) : Y("", !0)
    ]));
  }
}), iu = "w-fit relative inline-flex items-center cursor-pointer", su = 'relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', au = "text-sm font-medium text-gray-900 dark:text-gray-300", lu = {
  direct: "",
  reverse: "flex-row-reverse"
}, uu = {
  direct: "ms-3",
  reverse: "me-3"
}, du = {
  lg: "w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4"
}, cu = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function pu(e) {
  const t = v(() => iu), r = v(() => su), o = v(() => du[e.size.value]), n = v(() => cu[e.color.value]), i = v(() => au), s = v(() => uu[e.reverse.value ? "reverse" : "direct"]), u = v(() => lu[e.reverse.value ? "reverse" : "direct"]);
  return {
    labelClasses: t,
    toggleSize: o,
    toggleClasses: r,
    toggleColor: n,
    toggleBallClasses: i,
    toggleBallOrder: s,
    labelOrder: u
  };
}
const hu = ["disabled"], so = /* @__PURE__ */ Z({
  __name: "FwbToggle",
  props: {
    color: { default: "" },
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 },
    size: { default: "md" },
    reverse: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = v({
      get() {
        return r.modelValue;
      },
      set(b) {
        o("update:modelValue", b);
      }
    }), {
      labelClasses: i,
      toggleSize: s,
      toggleClasses: u,
      toggleColor: p,
      toggleBallClasses: c,
      toggleBallOrder: f,
      labelOrder: g
    } = pu(Ie(r));
    return (b, y) => (x(), N("label", {
      class: H([A(i), A(g)])
    }, [
      At(U("input", {
        "onUpdate:modelValue": y[0] || (y[0] = (w) => n.value = w),
        disabled: b.disabled,
        class: "peer sr-only",
        type: "checkbox"
      }, null, 8, hu), [
        [hn, n.value]
      ]),
      U("span", {
        class: H([A(u), A(s), A(p)])
      }, null, 2),
      U("span", {
        class: H([A(c), A(f)])
      }, de(b.label), 3)
    ], 2));
  }
}), fu = ["href"], gu = /* @__PURE__ */ Z({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (x(), N("a", {
      href: t.href,
      class: H([t.color, "inline-flex items-center hover:underline"])
    }, [
      j(t.$slots, "default")
    ], 10, fu));
  }
}), mu = /* @__PURE__ */ Z({
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
    }, o = or(), n = Me(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      o.class
    ), i = t.tag;
    return (s, u) => (x(), ee(St(A(i)), Oe(s.$attrs, { class: A(n) }), {
      default: ie(() => [
        j(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yu = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", bu = /* @__PURE__ */ Z({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = v(() => se([
      yu,
      t.class
    ]));
    return (o, n) => (x(), N("p", {
      class: H(r.value)
    }, [
      j(o.$slots, "default")
    ], 2));
  }
}), Ke = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, vu = {
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
    const t = e, r = v(() => {
      let o = "TwcButton text-base";
      return t.flat ? `${o}border-0 bg-transparent text-gray-800 hover:bg-transparent focus:ring-0` : t.icon ? `${o}border-0 bg-transparent text-gray-800 hover:bg-gray-300 p-2` : t.link ? `${o}border-0 bg-transparent text-gray-800 hover:bg-transparent hover:underline p-0 text-blue-700` : o;
    });
    return (o, n) => (x(), ee(A(Ii), Oe(o.$props, { class: r.value }), {
      default: ie(() => [
        j(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}, Ou = /* @__PURE__ */ Ke(vu, [["__scopeId", "data-v-9c0172c8"]]), wu = { class: "flex justify-between" }, xu = { class: "font-semibold" }, ku = { class: "font-semibold" }, _u = { class: "flex flex-col" }, ao = "font-light text-xs -mt-1", Cu = {
  __name: "TwcToggle",
  props: /* @__PURE__ */ rt({
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
  emits: /* @__PURE__ */ rt(["change", "click"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = t, o = nr(e, "modelValue");
    function n() {
      r("click");
    }
    return (i, s) => (x(), N("div", null, [
      U("div", wu, [
        i.$props.reverse ? (x(), N(We, { key: 0 }, [
          U("label", xu, de(i.$props.label), 1),
          tt(A(so), {
            modelValue: o.value,
            "onUpdate:modelValue": s[0] || (s[0] = (u) => o.value = u),
            class: "TwcToggle -mr-3",
            disabled: i.$props.disabled,
            onClick: n
          }, null, 8, ["modelValue", "disabled"])
        ], 64)) : (x(), N(We, { key: 1 }, [
          tt(A(so), {
            modelValue: o.value,
            "onUpdate:modelValue": s[1] || (s[1] = (u) => o.value = u),
            class: "TwcToggle",
            disabled: i.$props.disabled,
            onClick: n
          }, null, 8, ["modelValue", "disabled"]),
          U("label", ku, de(i.$props.label), 1)
        ], 64))
      ]),
      U("div", _u, [
        i.$props.hint ? (x(), N("label", {
          key: 0,
          class: H(`${ao} text-gray-500`)
        }, de(i.$props.hint), 3)) : Y("", !0),
        i.$props.errorMessage ? (x(), N("label", {
          key: 1,
          class: H(`${ao} text-red-500`)
        }, de(i.$props.errorMessage), 3)) : Y("", !0)
      ])
    ]));
  }
}, ju = /* @__PURE__ */ Ke(Cu, [["__scopeId", "data-v-c43f0be6"]]), Ru = {
  __name: "TwcHeading",
  setup(e) {
    return (t, r) => (x(), ee(A(mu), lt(Tt(t.$props)), {
      default: ie(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, $u = {
  __name: "TwcInput",
  setup(e) {
    return (t, r) => (x(), ee(A(Gl), Oe(t.$props, { class: "TwcInput" }), po({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: ie(() => [
          j(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      t.$slots.prefix ? {
        name: "prefix",
        fn: ie(() => [
          j(t.$slots, "prefix", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      t.$slots.suffix ? {
        name: "suffix",
        fn: ie(() => [
          j(t.$slots, "suffix", {}, void 0, !0)
        ]),
        key: "2"
      } : void 0
    ]), 1040));
  }
}, Fu = /* @__PURE__ */ Ke($u, [["__scopeId", "data-v-9a366333"]]), Hu = {
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
    return (o, n) => (x(), N("label", {
      class: H(r())
    }, [
      j(o.$slots, "default")
    ], 2));
  }
}, Vu = {
  __name: "TwcLink",
  setup(e) {
    return (t, r) => (x(), ee(A(gu), lt(Tt(t.$props)), {
      default: ie(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Wu = {
  __name: "TwcParagraph",
  setup(e) {
    return (t, r) => (x(), ee(A(bu), lt(Tt(t.$props)), {
      default: ie(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, Su = {
  __name: "TwcSelect",
  setup(e) {
    return (t, r) => (x(), ee(A(nu), Oe(t.$props, { class: "TwcSelect" }), po({ _: 2 }, [
      t.$slots.helper ? {
        name: "helper",
        fn: ie(() => [
          j(t.$slots, "helper", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}, Gu = /* @__PURE__ */ Ke(Su, [["__scopeId", "data-v-dab28e77"]]);
function Tu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gt = { exports: {} }, lo;
function Iu() {
  return lo || (lo = 1, function(e) {
    (function(t) {
      e.exports ? e.exports = t() : window.intlTelInput = t();
    })(() => {
      var t = (() => {
        var r = Object.defineProperty, o = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, i = Object.prototype.hasOwnProperty, s = (a, l) => {
          for (var d in l)
            r(a, d, { get: l[d], enumerable: !0 });
        }, u = (a, l, d, h) => {
          if (l && typeof l == "object" || typeof l == "function")
            for (let m of n(l))
              !i.call(a, m) && m !== d && r(a, m, { get: () => l[m], enumerable: !(h = o(l, m)) || h.enumerable });
          return a;
        }, p = (a) => u(r({}, "__esModule", { value: !0 }), a), c = {};
        s(c, {
          Iti: () => Q,
          default: () => le
        });
        var f = [
          [
            "af",
            // Afghanistan
            "93"
          ],
          [
            "ax",
            // Åland Islands
            "358",
            1
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
            0,
            null,
            "0"
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
            ["89164"],
            "0"
          ],
          [
            "cc",
            // Cocos (Keeling) Islands
            "61",
            1,
            ["89162"],
            "0"
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
            ["1481", "7781", "7839", "7911"],
            "0"
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
            ["1624", "74576", "7524", "7924", "7624"],
            "0"
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
            ["1534", "7509", "7700", "7797", "7829", "7937"],
            "0"
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
            ["33", "7"],
            "8"
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
            ["269", "639"],
            "0"
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
            0,
            null,
            "0"
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
            0,
            null,
            "0"
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
            0,
            null,
            "8"
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
            0,
            null,
            "0"
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
            ["5288", "5289"],
            "0"
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
        ], g = [];
        for (let a = 0; a < f.length; a++) {
          const l = f[a];
          g[a] = {
            name: "",
            // this is now populated in the plugin
            iso2: l[0],
            dialCode: l[1],
            priority: l[2] || 0,
            areaCodes: l[3] || null,
            nodeById: {},
            nationalPrefix: l[4] || null
          };
        }
        var b = g, y = {
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
        }, w = y, S = {
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
        }, L = S, P = { ...w, ...L }, z = P;
        for (let a = 0; a < b.length; a++)
          b[a].name = z[b[a].iso2];
        var D = 0, W = {
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
          //* A function to load the utils script.
          loadUtils: null,
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
          //* The number type to enforce during validation.
          validationNumberTypes: ["MOBILE"]
        }, G = [
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
        ], q = (a) => a.replace(/\D/g, ""), J = (a = "") => a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), T = (a) => {
          const l = q(a);
          if (l.charAt(0) === "1") {
            const d = l.substr(1, 3);
            return G.includes(d);
          }
          return !1;
        }, V = (a, l, d, h) => {
          if (d === 0 && !h)
            return 0;
          let m = 0;
          for (let $ = 0; $ < l.length; $++) {
            if (/[+0-9]/.test(l[$]) && m++, m === a && !h)
              return $ + 1;
            if (h && m === a + 1)
              return $;
          }
          return l.length;
        }, O = (a, l, d) => {
          const h = document.createElement(a);
          return l && Object.entries(l).forEach(([m, $]) => h.setAttribute(m, $)), d && d.appendChild(h), h;
        }, te = (a, ...l) => {
          const { instances: d } = k;
          Object.values(d).forEach((h) => h[a](...l));
        }, Q = class {
          constructor(a, l = {}) {
            this.id = D++, this.telInput = a, this.highlightedItem = null, this.options = Object.assign({}, W, l), this.hadInitialPlaceholder = !!a.getAttribute("placeholder");
          }
          //* Can't be private as it's called from intlTelInput convenience wrapper.
          _init() {
            this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.onlyCountries.length === 1 && (this.options.initialCountry = this.options.onlyCountries[0]), this.options.separateDialCode && (this.options.nationalMode = !1), this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode && (this.options.nationalMode = !1), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isAndroid = typeof navigator < "u" ? /Android/i.test(navigator.userAgent) : !1, this.isRTL = !!this.telInput.closest("[dir=rtl]");
            const a = this.options.allowDropdown || this.options.separateDialCode;
            this.showSelectedCountryOnLeft = this.isRTL ? !a : a, this.options.separateDialCode && (this.isRTL ? this.originalPaddingRight = this.telInput.style.paddingRight : this.originalPaddingLeft = this.telInput.style.paddingLeft), this.options.i18n = { ...z, ...this.options.i18n };
            const l = new Promise((h, m) => {
              this.resolveAutoCountryPromise = h, this.rejectAutoCountryPromise = m;
            }), d = new Promise((h, m) => {
              this.resolveUtilsScriptPromise = h, this.rejectUtilsScriptPromise = m;
            });
            this.promise = Promise.all([l, d]), this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
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
            this.options.countryOrder && (this.options.countryOrder = this.options.countryOrder.map((a) => a.toLowerCase())), this.countries.sort((a, l) => {
              const { countryOrder: d } = this.options;
              if (d) {
                const h = d.indexOf(a.iso2), m = d.indexOf(l.iso2), $ = h > -1, M = m > -1;
                if ($ || M)
                  return $ && M ? h - m : $ ? -1 : 1;
              }
              return a.name.localeCompare(l.name);
            });
          }
          //* Add a dial code to this.dialCodeToIso2Map.
          _addToDialCodeMap(a, l, d) {
            l.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = l.length), this.dialCodeToIso2Map.hasOwnProperty(l) || (this.dialCodeToIso2Map[l] = []);
            for (let m = 0; m < this.dialCodeToIso2Map[l].length; m++)
              if (this.dialCodeToIso2Map[l][m] === a)
                return;
            const h = d !== void 0 ? d : this.dialCodeToIso2Map[l].length;
            this.dialCodeToIso2Map[l][h] = a;
          }
          //* Process onlyCountries or excludeCountries array if present.
          _processAllCountries() {
            const { onlyCountries: a, excludeCountries: l } = this.options;
            if (a.length) {
              const d = a.map(
                (h) => h.toLowerCase()
              );
              this.countries = b.filter(
                (h) => d.includes(h.iso2)
              );
            } else if (l.length) {
              const d = l.map(
                (h) => h.toLowerCase()
              );
              this.countries = b.filter(
                (h) => !d.includes(h.iso2)
              );
            } else
              this.countries = b;
          }
          //* Translate Countries by object literal provided on config.
          _translateCountryNames() {
            for (let a = 0; a < this.countries.length; a++) {
              const l = this.countries[a].iso2.toLowerCase();
              this.options.i18n.hasOwnProperty(l) && (this.countries[a].name = this.options.i18n[l]);
            }
          }
          //* Generate this.dialCodes and this.dialCodeToIso2Map.
          _processDialCodes() {
            this.dialCodes = {}, this.dialCodeMaxLen = 0, this.dialCodeToIso2Map = {};
            for (let a = 0; a < this.countries.length; a++) {
              const l = this.countries[a];
              this.dialCodes[l.dialCode] || (this.dialCodes[l.dialCode] = !0), this._addToDialCodeMap(l.iso2, l.dialCode, l.priority);
            }
            for (let a = 0; a < this.countries.length; a++) {
              const l = this.countries[a];
              if (l.areaCodes) {
                const d = this.dialCodeToIso2Map[l.dialCode][0];
                for (let h = 0; h < l.areaCodes.length; h++) {
                  const m = l.areaCodes[h];
                  for (let $ = 1; $ < m.length; $++) {
                    const M = m.substr(0, $), I = l.dialCode + M;
                    this._addToDialCodeMap(d, I), this._addToDialCodeMap(l.iso2, I);
                  }
                  this._addToDialCodeMap(l.iso2, l.dialCode + m);
                }
              }
            }
          }
          //* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
          _generateMarkup() {
            this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
            const {
              allowDropdown: a,
              separateDialCode: l,
              showFlags: d,
              containerClass: h,
              hiddenInput: m,
              dropdownContainer: $,
              fixDropdownWidth: M,
              useFullscreenPopup: I,
              countrySearch: R,
              i18n: K
            } = this.options;
            let X = "iti";
            a && (X += " iti--allow-dropdown"), d && (X += " iti--show-flags"), h && (X += ` ${h}`), I || (X += " iti--inline-dropdown");
            const E = O("div", { class: X });
            if (this.telInput.parentNode?.insertBefore(E, this.telInput), a || d || l) {
              this.countryContainer = O(
                "div",
                { class: "iti__country-container" },
                E
              ), this.showSelectedCountryOnLeft ? this.countryContainer.style.left = "0px" : this.countryContainer.style.right = "0px", a ? (this.selectedCountry = O(
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
              ), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = O(
                "div",
                { class: "iti__selected-country" },
                this.countryContainer
              );
              const ce = O("div", { class: "iti__selected-country-primary" }, this.selectedCountry);
              if (this.selectedCountryInner = O("div", { class: "iti__flag" }, ce), this.selectedCountryA11yText = O(
                "span",
                { class: "iti__a11y-text" },
                this.selectedCountryInner
              ), a && (this.dropdownArrow = O(
                "div",
                { class: "iti__arrow", "aria-hidden": "true" },
                ce
              )), l && (this.selectedDialCode = O(
                "div",
                { class: "iti__selected-dial-code" },
                this.selectedCountry
              )), a) {
                const re = M ? "" : "iti--flexible-dropdown-width";
                if (this.dropdownContent = O("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content iti__hide ${re}`
                }), R && (this.searchInput = O(
                  "input",
                  {
                    type: "text",
                    class: "iti__search-input",
                    placeholder: K.searchPlaceholder,
                    role: "combobox",
                    "aria-expanded": "true",
                    "aria-label": K.searchPlaceholder,
                    "aria-controls": `iti-${this.id}__country-listbox`,
                    "aria-autocomplete": "list",
                    autocomplete: "off"
                  },
                  this.dropdownContent
                ), this.searchResultsA11yText = O(
                  "span",
                  { class: "iti__a11y-text" },
                  this.dropdownContent
                )), this.countryList = O(
                  "ul",
                  {
                    class: "iti__country-list",
                    id: `iti-${this.id}__country-listbox`,
                    role: "listbox",
                    "aria-label": K.countryListAriaLabel
                  },
                  this.dropdownContent
                ), this._appendListItems(), R && this._updateSearchResultsText(), $) {
                  let oe = "iti iti--container";
                  I ? oe += " iti--fullscreen-popup" : oe += " iti--inline-dropdown", this.dropdown = O("div", { class: oe }), this.dropdown.appendChild(this.dropdownContent);
                } else
                  this.countryContainer.appendChild(this.dropdownContent);
              }
            }
            if (E.appendChild(this.telInput), this._updateInputPadding(), m) {
              const ce = this.telInput.getAttribute("name") || "", re = m(ce);
              if (re.phone) {
                const oe = this.telInput.form?.querySelector(`input[name="${re.phone}"]`);
                oe ? this.hiddenInput = oe : (this.hiddenInput = O("input", {
                  type: "hidden",
                  name: re.phone
                }), E.appendChild(this.hiddenInput));
              }
              if (re.country) {
                const oe = this.telInput.form?.querySelector(`input[name="${re.country}"]`);
                oe ? this.hiddenInputCountry = oe : (this.hiddenInputCountry = O("input", {
                  type: "hidden",
                  name: re.country
                }), E.appendChild(this.hiddenInputCountry));
              }
            }
          }
          //* For each country: add a country list item <li> to the countryList <ul> container.
          _appendListItems() {
            for (let a = 0; a < this.countries.length; a++) {
              const l = this.countries[a], d = a === 0 ? "iti__highlight" : "", h = O(
                "li",
                {
                  id: `iti-${this.id}__item-${l.iso2}`,
                  class: `iti__country ${d}`,
                  tabindex: "-1",
                  role: "option",
                  "data-dial-code": l.dialCode,
                  "data-country-code": l.iso2,
                  "aria-selected": "false"
                },
                this.countryList
              );
              l.nodeById[this.id] = h;
              let m = "";
              this.options.showFlags && (m += `<div class='iti__flag iti__${l.iso2}'></div>`), m += `<span class='iti__country-name'>${l.name}</span>`, m += `<span class='iti__dial-code'>+${l.dialCode}</span>`, h.insertAdjacentHTML("beforeend", m);
            }
          }
          //* Set the initial state of the input value and the selected country by:
          //* 1. Extracting a dial code from the given number
          //* 2. Using explicit initialCountry
          _setInitialState(a = !1) {
            const l = this.telInput.getAttribute("value"), d = this.telInput.value, m = l && l.charAt(0) === "+" && (!d || d.charAt(0) !== "+") ? l : d, $ = this._getDialCode(m), M = T(m), { initialCountry: I, geoIpLookup: R } = this.options, K = I === "auto" && R;
            if ($ && !M)
              this._updateCountryFromNumber(m);
            else if (!K || a) {
              const X = I ? I.toLowerCase() : "";
              X && this._getCountryData(X, !0) ? this._setCountry(X) : $ && M ? this._setCountry("us") : this._setCountry();
            }
            m && this._updateValFromNumber(m);
          }
          //* Initialise the main event listeners: input keyup, and click selected country.
          _initListeners() {
            this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.hiddenInput || this.hiddenInputCountry) && this.telInput.form && this._initHiddenInputListener();
          }
          //* Update hidden input on form submit.
          _initHiddenInputListener() {
            this._handleHiddenInputSubmit = () => {
              this.hiddenInput && (this.hiddenInput.value = this.getNumber()), this.hiddenInputCountry && (this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "");
            }, this.telInput.form?.addEventListener(
              "submit",
              this._handleHiddenInputSubmit
            );
          }
          //* initialise the dropdown listeners.
          _initDropdownListeners() {
            this._handleLabelClick = (l) => {
              this.dropdownContent.classList.contains("iti__hide") ? this.telInput.focus() : l.preventDefault();
            };
            const a = this.telInput.closest("label");
            a && a.addEventListener("click", this._handleLabelClick), this._handleClickSelectedCountry = () => {
              this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly && this._openDropdown();
            }, this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry), this._handleCountryContainerKeydown = (l) => {
              this.dropdownContent.classList.contains("iti__hide") && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(l.key) && (l.preventDefault(), l.stopPropagation(), this._openDropdown()), l.key === "Tab" && this._closeDropdown();
            }, this.countryContainer.addEventListener(
              "keydown",
              this._handleCountryContainerKeydown
            );
          }
          //* Init many requests: utils script / geo ip lookup.
          _initRequests() {
            let { loadUtils: a, initialCountry: l, geoIpLookup: d } = this.options;
            a && !k.utils ? (this._handlePageLoad = () => {
              window.removeEventListener("load", this._handlePageLoad), k.attachUtils(a)?.catch(() => {
              });
            }, k.documentReady() ? this._handlePageLoad() : window.addEventListener("load", this._handlePageLoad)) : this.resolveUtilsScriptPromise(), l === "auto" && d && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
          }
          //* Perform the geo ip lookup.
          _loadAutoCountry() {
            k.autoCountry ? this.handleAutoCountry() : k.startedLoadingAutoCountry || (k.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(
              (a = "") => {
                const l = a.toLowerCase();
                l && this._getCountryData(l, !0) ? (k.autoCountry = l, setTimeout(() => te("handleAutoCountry"))) : (this._setInitialState(!0), te("rejectAutoCountryPromise"));
              },
              () => {
                this._setInitialState(!0), te("rejectAutoCountryPromise");
              }
            ));
          }
          _openDropdownWithPlus() {
            this._openDropdown(), this.searchInput.value = "+", this._filterCountries("", !0);
          }
          //* Initialize the tel input listeners.
          _initTelInputListeners() {
            const { strictMode: a, formatAsYouType: l, separateDialCode: d, formatOnDisplay: h, allowDropdown: m, countrySearch: $ } = this.options;
            let M = !1;
            new RegExp("\\p{L}", "u").test(this.telInput.value) && (M = !0), this._handleInputEvent = (I) => {
              if (this.isAndroid && I?.data === "+" && d && m && $) {
                const E = this.telInput.selectionStart || 0, ce = this.telInput.value.substring(0, E - 1), re = this.telInput.value.substring(E);
                this.telInput.value = ce + re, this._openDropdownWithPlus();
                return;
              }
              this._updateCountryFromNumber(this.telInput.value) && this._triggerCountryChange();
              const R = I?.data && /[^+0-9]/.test(I.data), K = I?.inputType === "insertFromPaste" && this.telInput.value;
              R || K && !a ? M = !0 : /[^+0-9]/.test(this.telInput.value) || (M = !1);
              const X = I?.detail && I.detail.isSetNumber && !h;
              if (l && !M && !X) {
                const E = this.telInput.selectionStart || 0, re = this.telInput.value.substring(0, E).replace(/[^+0-9]/g, "").length, oe = I?.inputType === "deleteContentForward", we = this._formatNumberAsYouType(), be = V(re, we, E, oe);
                this.telInput.value = we, this.telInput.setSelectionRange(be, be);
              }
            }, this.telInput.addEventListener("input", this._handleInputEvent), (a || d) && (this._handleKeydownEvent = (I) => {
              if (I.key && I.key.length === 1 && !I.altKey && !I.ctrlKey && !I.metaKey) {
                if (d && m && $ && I.key === "+") {
                  I.preventDefault(), this._openDropdownWithPlus();
                  return;
                }
                if (a) {
                  const R = this.telInput.value, K = R.charAt(0) === "+", X = !K && this.telInput.selectionStart === 0 && I.key === "+", E = /^[0-9]$/.test(I.key), ce = d ? E : X || E, re = R.slice(0, this.telInput.selectionStart) + I.key + R.slice(this.telInput.selectionEnd), oe = this._getFullNumber(re), we = k.utils.getCoreNumber(oe, this.selectedCountryData.iso2), be = this.maxCoreNumberLength && we.length > this.maxCoreNumberLength;
                  let br = !1;
                  if (K) {
                    const Ko = this.selectedCountryData.iso2;
                    br = this._getCountryFromNumber(oe) !== Ko;
                  }
                  (!ce || be && !br && !X) && I.preventDefault();
                }
              }
            }, this.telInput.addEventListener("keydown", this._handleKeydownEvent));
          }
          //* Adhere to the input's maxlength attr.
          _cap(a) {
            const l = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
            return l && a.length > l ? a.substr(0, l) : a;
          }
          //* Trigger a custom event on the input.
          _trigger(a, l = {}) {
            const d = new CustomEvent(a, {
              bubbles: !0,
              cancelable: !0,
              detail: l
            });
            this.telInput.dispatchEvent(d);
          }
          //* Open the dropdown.
          _openDropdown() {
            const { fixDropdownWidth: a, countrySearch: l } = this.options;
            if (a && (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`), this.dropdownContent.classList.remove("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), l) {
              const d = this.countryList.firstElementChild;
              d && (this._highlightListItem(d, !1), this.countryList.scrollTop = 0), this.searchInput.focus();
            }
            this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
          }
          //* Set the dropdown position
          _setDropdownPosition() {
            if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
              const a = this.telInput.getBoundingClientRect(), l = this.telInput.offsetHeight;
              this.options.dropdownContainer && (this.dropdown.style.top = `${a.top + l}px`, this.dropdown.style.left = `${a.left}px`, this._handleWindowScroll = () => this._closeDropdown(), window.addEventListener("scroll", this._handleWindowScroll));
            }
          }
          //* We only bind dropdown listeners when the dropdown is open.
          _bindDropdownListeners() {
            this._handleMouseoverCountryList = (h) => {
              const m = h.target?.closest(".iti__country");
              m && this._highlightListItem(m, !1);
            }, this.countryList.addEventListener(
              "mouseover",
              this._handleMouseoverCountryList
            ), this._handleClickCountryList = (h) => {
              const m = h.target?.closest(".iti__country");
              m && this._selectListItem(m);
            }, this.countryList.addEventListener("click", this._handleClickCountryList);
            let a = !0;
            this._handleClickOffToClose = () => {
              a || this._closeDropdown(), a = !1;
            }, document.documentElement.addEventListener(
              "click",
              this._handleClickOffToClose
            );
            let l = "", d = null;
            if (this._handleKeydownOnDropdown = (h) => {
              ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(h.key) && (h.preventDefault(), h.stopPropagation(), h.key === "ArrowUp" || h.key === "ArrowDown" ? this._handleUpDownKey(h.key) : h.key === "Enter" ? this._handleEnterKey() : h.key === "Escape" && this._closeDropdown()), !this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(h.key) && (h.stopPropagation(), d && clearTimeout(d), l += h.key.toLowerCase(), this._searchForCountry(l), d = setTimeout(() => {
                l = "";
              }, 1e3));
            }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
              const h = () => {
                const $ = this.searchInput.value.trim();
                $ ? this._filterCountries($) : this._filterCountries("", !0);
              };
              let m = null;
              this._handleSearchChange = () => {
                m && clearTimeout(m), m = setTimeout(() => {
                  h(), m = null;
                }, 100);
              }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", ($) => $.stopPropagation());
            }
          }
          //* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
          _searchForCountry(a) {
            for (let l = 0; l < this.countries.length; l++) {
              const d = this.countries[l];
              if (d.name.substr(0, a.length).toLowerCase() === a) {
                const m = d.nodeById[this.id];
                this._highlightListItem(m, !1), this._scrollTo(m);
                break;
              }
            }
          }
          //* Country search enabled: Filter the countries according to the search query.
          _filterCountries(a, l = !1) {
            let d = !0;
            this.countryList.innerHTML = "";
            const h = J(a);
            for (let m = 0; m < this.countries.length; m++) {
              const $ = this.countries[m], M = J($.name), I = $.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((K) => K[0]).join("").toLowerCase(), R = `+${$.dialCode}`;
              if (l || M.includes(h) || R.includes(h) || $.iso2.includes(h) || I.includes(h)) {
                const K = $.nodeById[this.id];
                K && this.countryList.appendChild(K), d && (this._highlightListItem(K, !1), d = !1);
              }
            }
            d && this._highlightListItem(null, !1), this.countryList.scrollTop = 0, this._updateSearchResultsText();
          }
          //* Update search results text (for a11y).
          _updateSearchResultsText() {
            const { i18n: a } = this.options, l = this.countryList.childElementCount;
            let d;
            l === 0 ? d = a.zeroSearchResults : l === 1 ? d = a.oneSearchResult : d = a.multipleSearchResults.replace("${count}", l.toString()), this.searchResultsA11yText.textContent = d;
          }
          //* Highlight the next/prev item in the list (and ensure it is visible).
          _handleUpDownKey(a) {
            let l = a === "ArrowUp" ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
            !l && this.countryList.childElementCount > 1 && (l = a === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), l && (this._scrollTo(l), this._highlightListItem(l, !1));
          }
          //* Select the currently highlighted item.
          _handleEnterKey() {
            this.highlightedItem && this._selectListItem(this.highlightedItem);
          }
          //* Update the input's value to the given val (format first if possible)
          //* NOTE: this is called from _setInitialState, handleUtils and setNumber.
          _updateValFromNumber(a) {
            let l = a;
            if (this.options.formatOnDisplay && k.utils && this.selectedCountryData) {
              const d = this.options.nationalMode || l.charAt(0) !== "+" && !this.options.separateDialCode, { NATIONAL: h, INTERNATIONAL: m } = k.utils.numberFormat, $ = d ? h : m;
              l = k.utils.formatNumber(
                l,
                this.selectedCountryData.iso2,
                $
              );
            }
            l = this._beforeSetNumber(l), this.telInput.value = l;
          }
          //* Check if need to select a new country based on the given number
          //* Note: called from _setInitialState, keyup handler, setNumber.
          _updateCountryFromNumber(a) {
            const l = this._getCountryFromNumber(a);
            return l !== null ? this._setCountry(l) : !1;
          }
          _ensureHasDialCode(a) {
            const { dialCode: l, nationalPrefix: d } = this.selectedCountryData;
            if (a.charAt(0) === "+" || !l)
              return a;
            const $ = d && a.charAt(0) === d && !this.options.separateDialCode ? a.substring(1) : a;
            return `+${l}${$}`;
          }
          _getCountryFromNumber(a) {
            const l = a.indexOf("+");
            let d = l ? a.substring(l) : a;
            const h = this.selectedCountryData.iso2, m = this.selectedCountryData.dialCode;
            d = this._ensureHasDialCode(d);
            const $ = this._getDialCode(d, !0), M = q(d);
            if ($) {
              const I = q($), R = this.dialCodeToIso2Map[I];
              if (!h && this.defaultCountry && R.includes(this.defaultCountry))
                return this.defaultCountry;
              const K = h && R.includes(h) && (M.length === I.length || !this.selectedCountryData.areaCodes);
              if (!(m === "1" && T(M)) && !K) {
                for (let E = 0; E < R.length; E++)
                  if (R[E])
                    return R[E];
              }
            } else {
              if (d.charAt(0) === "+" && M.length)
                return "";
              if ((!d || d === "+") && !this.selectedCountryData.iso2)
                return this.defaultCountry;
            }
            return null;
          }
          //* Remove highlighting from other list items and highlight the given item.
          _highlightListItem(a, l) {
            const d = this.highlightedItem;
            if (d && (d.classList.remove("iti__highlight"), d.setAttribute("aria-selected", "false")), this.highlightedItem = a, this.highlightedItem) {
              this.highlightedItem.classList.add("iti__highlight"), this.highlightedItem.setAttribute("aria-selected", "true");
              const h = this.highlightedItem.getAttribute("id") || "";
              this.selectedCountry.setAttribute("aria-activedescendant", h), this.options.countrySearch && this.searchInput.setAttribute("aria-activedescendant", h);
            }
            l && this.highlightedItem.focus();
          }
          //* Find the country data for the given iso2 code
          //* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
          _getCountryData(a, l) {
            for (let d = 0; d < this.countries.length; d++)
              if (this.countries[d].iso2 === a)
                return this.countries[d];
            if (l)
              return null;
            throw new Error(`No country data for '${a}'`);
          }
          //* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
          //* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
          _setCountry(a) {
            const { separateDialCode: l, showFlags: d, i18n: h } = this.options, m = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            if (this.selectedCountryData = a ? this._getCountryData(a, !1) || {} : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedCountryInner) {
              let $ = "", M = "";
              a && d ? ($ = `iti__flag iti__${a}`, M = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`) : ($ = "iti__flag iti__globe", M = h.noCountrySelected), this.selectedCountryInner.className = $, this.selectedCountryA11yText.textContent = M;
            }
            if (this._setSelectedCountryTitleAttribute(a, l), l) {
              const $ = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
              this.selectedDialCode.innerHTML = $, this._updateInputPadding();
            }
            return this._updatePlaceholder(), this._updateMaxLength(), m.iso2 !== a;
          }
          //* Update the input padding to make space for the selected country/dial code.
          _updateInputPadding() {
            if (this.selectedCountry) {
              const l = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth()) + 6;
              this.showSelectedCountryOnLeft ? this.telInput.style.paddingLeft = `${l}px` : this.telInput.style.paddingRight = `${l}px`;
            }
          }
          //* Update the maximum valid number length for the currently selected country.
          _updateMaxLength() {
            const { strictMode: a, placeholderNumberType: l, validationNumberTypes: d } = this.options, { iso2: h } = this.selectedCountryData;
            if (a && k.utils)
              if (h) {
                const m = k.utils.numberType[l];
                let $ = k.utils.getExampleNumber(
                  h,
                  !1,
                  m,
                  !0
                ), M = $;
                for (; k.utils.isPossibleNumber($, h, d); )
                  M = $, $ += "0";
                const I = k.utils.getCoreNumber(M, h);
                this.maxCoreNumberLength = I.length, h === "by" && (this.maxCoreNumberLength = I.length + 1);
              } else
                this.maxCoreNumberLength = null;
          }
          _setSelectedCountryTitleAttribute(a = null, l) {
            if (!this.selectedCountry)
              return;
            let d;
            a && !l ? d = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}` : a ? d = this.selectedCountryData.name : d = "Unknown", this.selectedCountry.setAttribute("title", d);
          }
          //* When the input is in a hidden container during initialisation, we must inject some markup
          //* into the end of the DOM to calculate the correct offsetWidth.
          //* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
          //* will definitely exist.
          _getHiddenSelectedCountryWidth() {
            if (this.telInput.parentNode) {
              const a = this.telInput.parentNode.cloneNode(!1);
              a.style.visibility = "hidden", document.body.appendChild(a);
              const l = this.countryContainer.cloneNode();
              a.appendChild(l);
              const d = this.selectedCountry.cloneNode(!0);
              l.appendChild(d);
              const h = d.offsetWidth;
              return document.body.removeChild(a), h;
            }
            return 0;
          }
          //* Update the input placeholder to an example number from the currently selected country.
          _updatePlaceholder() {
            const {
              autoPlaceholder: a,
              placeholderNumberType: l,
              nationalMode: d,
              customPlaceholder: h
            } = this.options, m = a === "aggressive" || !this.hadInitialPlaceholder && a === "polite";
            if (k.utils && m) {
              const $ = k.utils.numberType[l];
              let M = this.selectedCountryData.iso2 ? k.utils.getExampleNumber(
                this.selectedCountryData.iso2,
                d,
                $
              ) : "";
              M = this._beforeSetNumber(M), typeof h == "function" && (M = h(M, this.selectedCountryData)), this.telInput.setAttribute("placeholder", M);
            }
          }
          //* Called when the user selects a list item from the dropdown.
          _selectListItem(a) {
            const l = this._setCountry(
              a.getAttribute("data-country-code")
            );
            this._closeDropdown(), this._updateDialCode(a.getAttribute("data-dial-code")), this.telInput.focus(), l && this._triggerCountryChange();
          }
          //* Close the dropdown and unbind any listeners.
          _closeDropdown() {
            this.dropdownContent.classList.add("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "false"), this.selectedCountry.removeAttribute("aria-activedescendant"), this.highlightedItem && this.highlightedItem.setAttribute("aria-selected", "false"), this.options.countrySearch && this.searchInput.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener(
              "click",
              this._handleClickOffToClose
            ), this.countryList.removeEventListener(
              "mouseover",
              this._handleMouseoverCountryList
            ), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._handlePageLoad && window.removeEventListener("load", this._handlePageLoad), this._trigger("close:countrydropdown");
          }
          //* Check if an element is visible within it's container, else scroll until it is.
          _scrollTo(a) {
            const l = this.countryList, d = document.documentElement.scrollTop, h = l.offsetHeight, m = l.getBoundingClientRect().top + d, $ = m + h, M = a.offsetHeight, I = a.getBoundingClientRect().top + d, R = I + M, K = I - m + l.scrollTop;
            if (I < m)
              l.scrollTop = K;
            else if (R > $) {
              const X = h - M;
              l.scrollTop = K - X;
            }
          }
          //* Replace any existing dial code with the new one
          //* Note: called from _selectListItem and setCountry
          _updateDialCode(a) {
            const l = this.telInput.value, d = `+${a}`;
            let h;
            if (l.charAt(0) === "+") {
              const m = this._getDialCode(l);
              m ? h = l.replace(m, d) : h = d, this.telInput.value = h;
            }
          }
          //* Try and extract a valid international dial code from a full telephone number.
          //* Note: returns the raw string inc plus character and any whitespace/dots etc.
          _getDialCode(a, l) {
            let d = "";
            if (a.charAt(0) === "+") {
              let h = "";
              for (let m = 0; m < a.length; m++) {
                const $ = a.charAt(m);
                if (!isNaN(parseInt($, 10))) {
                  if (h += $, l)
                    this.dialCodeToIso2Map[h] && (d = a.substr(0, m + 1));
                  else if (this.dialCodes[h]) {
                    d = a.substr(0, m + 1);
                    break;
                  }
                  if (h.length === this.dialCodeMaxLen)
                    break;
                }
              }
            }
            return d;
          }
          //* Get the input val, adding the dial code if separateDialCode is enabled.
          _getFullNumber(a) {
            const l = a || this.telInput.value.trim(), { dialCode: d } = this.selectedCountryData;
            let h;
            const m = q(l);
            return this.options.separateDialCode && l.charAt(0) !== "+" && d && m ? h = `+${d}` : h = "", h + l;
          }
          //* Remove the dial code if separateDialCode is enabled also cap the length if the input has a maxlength attribute
          _beforeSetNumber(a) {
            let l = a;
            if (this.options.separateDialCode) {
              let d = this._getDialCode(l);
              if (d) {
                d = `+${this.selectedCountryData.dialCode}`;
                const h = l[d.length] === " " || l[d.length] === "-" ? d.length + 1 : d.length;
                l = l.substr(h);
              }
            }
            return this._cap(l);
          }
          //* Trigger the 'countrychange' event.
          _triggerCountryChange() {
            this._trigger("countrychange");
          }
          //* Format the number as the user types.
          _formatNumberAsYouType() {
            const a = this._getFullNumber(), l = k.utils ? k.utils.formatNumberAsYouType(a, this.selectedCountryData.iso2) : a, { dialCode: d } = this.selectedCountryData;
            return this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && l.includes(`+${d}`) ? (l.split(`+${d}`)[1] || "").trim() : l;
          }
          //**************************
          //*  SECRET PUBLIC METHODS
          //**************************
          //* This is called when the geoip call returns.
          handleAutoCountry() {
            this.options.initialCountry === "auto" && k.autoCountry && (this.defaultCountry = k.autoCountry, this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe") || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
          }
          //* This is called when the utils request completes.
          handleUtils() {
            k.utils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())), this.resolveUtilsScriptPromise();
          }
          //********************
          //*  PUBLIC METHODS
          //********************
          //* Remove plugin.
          destroy() {
            const { allowDropdown: a, separateDialCode: l } = this.options;
            if (a) {
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
            const { form: d } = this.telInput;
            this._handleHiddenInputSubmit && d && d.removeEventListener("submit", this._handleHiddenInputSubmit), this.telInput.removeEventListener("input", this._handleInputEvent), this._handleKeydownEvent && this.telInput.removeEventListener("keydown", this._handleKeydownEvent), this.telInput.removeAttribute("data-intl-tel-input-id"), l && (this.isRTL ? this.telInput.style.paddingRight = this.originalPaddingRight : this.telInput.style.paddingLeft = this.originalPaddingLeft);
            const h = this.telInput.parentNode;
            h?.parentNode?.insertBefore(this.telInput, h), h?.parentNode?.removeChild(h), delete k.instances[this.id];
          }
          //* Get the extension from the current number.
          getExtension() {
            return k.utils ? k.utils.getExtension(
              this._getFullNumber(),
              this.selectedCountryData.iso2
            ) : "";
          }
          //* Format the number to the given format.
          getNumber(a) {
            if (k.utils) {
              const { iso2: l } = this.selectedCountryData;
              return k.utils.formatNumber(
                this._getFullNumber(),
                l,
                a
              );
            }
            return "";
          }
          //* Get the type of the entered number e.g. landline/mobile.
          getNumberType() {
            return k.utils ? k.utils.getNumberType(
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
            if (k.utils) {
              const { iso2: a } = this.selectedCountryData;
              return k.utils.getValidationError(this._getFullNumber(), a);
            }
            return -99;
          }
          //* Validate the input val
          isValidNumber() {
            if (!this.selectedCountryData.iso2)
              return !1;
            const a = this._getFullNumber(), l = a.search(new RegExp("\\p{L}", "u"));
            if (l > -1) {
              const d = a.substring(0, l), h = this._utilsIsPossibleNumber(d), m = this._utilsIsPossibleNumber(a);
              return h && m;
            }
            return this._utilsIsPossibleNumber(a);
          }
          _utilsIsPossibleNumber(a) {
            return k.utils ? k.utils.isPossibleNumber(a, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
          }
          //* Validate the input val (precise)
          isValidNumberPrecise() {
            if (!this.selectedCountryData.iso2)
              return !1;
            const a = this._getFullNumber(), l = a.search(new RegExp("\\p{L}", "u"));
            if (l > -1) {
              const d = a.substring(0, l), h = this._utilsIsValidNumber(d), m = this._utilsIsValidNumber(a);
              return h && m;
            }
            return this._utilsIsValidNumber(a);
          }
          _utilsIsValidNumber(a) {
            return k.utils ? k.utils.isValidNumber(a, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
          }
          //* Update the selected country, and update the input val accordingly.
          setCountry(a) {
            const l = a?.toLowerCase(), d = this.selectedCountryData.iso2;
            (a && l !== d || !a && d) && (this._setCountry(l), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
          }
          //* Set the input value and update the country.
          setNumber(a) {
            const l = this._updateCountryFromNumber(a);
            this._updateValFromNumber(a), l && this._triggerCountryChange(), this._trigger("input", { isSetNumber: !0 });
          }
          //* Set the placeholder number typ
          setPlaceholderNumberType(a) {
            this.options.placeholderNumberType = a, this._updatePlaceholder();
          }
          setDisabled(a) {
            this.telInput.disabled = a, a ? this.selectedCountry.setAttribute("disabled", "true") : this.selectedCountry.removeAttribute("disabled");
          }
        }, ue = (a) => {
          if (!k.utils && !k.startedLoadingUtilsScript) {
            let l;
            if (typeof a == "function")
              try {
                l = Promise.resolve(a());
              } catch (d) {
                return Promise.reject(d);
              }
            else
              return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof a}`));
            return k.startedLoadingUtilsScript = !0, l.then((d) => {
              const h = d?.default;
              if (!h || typeof h != "object")
                throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
              return k.utils = h, te("handleUtils"), !0;
            }).catch((d) => {
              throw te("rejectUtilsScriptPromise", d), d;
            });
          }
          return null;
        }, k = Object.assign(
          (a, l) => {
            const d = new Q(a, l);
            return d._init(), a.setAttribute("data-intl-tel-input-id", d.id.toString()), k.instances[d.id] = d, d;
          },
          {
            defaults: W,
            //* Using a static var like this allows us to mock it in the tests.
            documentReady: () => document.readyState === "complete",
            //* Get the country data object.
            getCountryData: () => b,
            //* A getter for the plugin instance.
            getInstance: (a) => {
              const l = a.getAttribute("data-intl-tel-input-id");
              return l ? k.instances[l] : null;
            },
            //* A map from instance ID to instance object.
            instances: {},
            attachUtils: ue,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.3.1"
          }
        ), le = k;
        return p(c);
      })();
      return t.default;
    });
  }(Gt)), Gt.exports;
}
var Au = Iu();
const Pu = /* @__PURE__ */ Tu(Au), Lu = ["placeholder", "data-testid"], Uu = {
  __name: "TwcPhoneInput",
  props: /* @__PURE__ */ rt({
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
  emits: /* @__PURE__ */ rt(["change", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = ae(null), o = ae(null), n = ae(!1), i = nr(e, "modelValue"), s = e, u = t;
    function p() {
      n.value = o.value.isValidNumber(), n.value ? u("change", r.value.value, !0, o.value.getNumber()) : u("change", r.value.value, !1);
    }
    const c = v(() => {
      let f = "TwcPhoneInput mt-1 !text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm iti__tel-input";
      return n.value && (f += " border-green-500 focus:border-green-500 focus:outline-green-500 focus:ring-green-500 bg-green-50"), s.displayError && (f += " border-red-500 focus:border-red-500 focus:outline-red-500 bg-red-50"), f;
    });
    return It(() => {
      const f = (g) => {
        localStorage?.getItem("ipCountry") ? g(localStorage.getItem("ipCountry")) : s.ipInfoKey ? fetch(`https://ipinfo.io/json?token=${s.ipInfoKey}`, {
          headers: { Accept: "application/json" }
        }).then((b) => b.json()).then((b) => {
          g(b.country), localStorage?.setItem("ipCountry", b.country);
        }).catch(() => {
          g("US");
        }) : g("US");
      };
      o.value = Pu(r.value, {
        initialCountry: "auto",
        geoIpLookup: f,
        autoPlaceholder: "off",
        loadUtils: () => import("./utils-DvbN-1pr.js")
      });
    }), (f, g) => At((x(), N("input", {
      "onUpdate:modelValue": g[0] || (g[0] = (b) => i.value = b),
      ref_key: "phoneInput",
      ref: r,
      type: "tel",
      placeholder: f.$props.placeholder,
      class: H(c.value),
      "data-testid": f.$props.dataTestid,
      onInput: p
    }, null, 42, Lu)), [
      [bn, i.value]
    ]);
  }
}, qu = {
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
    return (o, n) => (x(), N("div", {
      class: H(`h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface ${r()} ${t.color} ${t.class}`),
      role: "status"
    }, null, 2));
  }
}, Ku = {
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
    return (o, n) => (x(), N("i", {
      class: H(`${r()} ${t.class}`)
    }, null, 2));
  }
}, Nu = {
  __name: "TwcAccordionTable",
  setup(e) {
    return (t, r) => (x(), ee(A(ti), { class: "TwcAccordionTable" }, {
      default: ie(() => [
        j(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}, Yu = /* @__PURE__ */ Ke(Nu, [["__scopeId", "data-v-7d937965"]]), zu = { class: "flex" }, Du = {
  key: 0,
  class: "flex-1 mr-5"
}, Mu = {
  __name: "TwcAccordionTableRow",
  props: {
    data: {
      type: Array,
      required: !0,
      default: () => []
    }
  },
  setup(e) {
    return (t, r) => (x(), ee(A(ci), { class: "TwcAccordionTableRow" }, {
      default: ie(() => [
        tt(A(li), null, {
          default: ie(() => [
            U("div", zu, [
              (x(!0), N(We, null, co(e.data, (o, n) => (x(), N("div", {
                key: n,
                class: "flex-1 self-center first:font-bold uppercase"
              }, de(o), 1))), 128)),
              t.$slots.action ? (x(), N("div", Du, [
                j(t.$slots, "action", {}, void 0, !0)
              ])) : Y("", !0)
            ])
          ]),
          _: 3
        }),
        tt(A(oi), null, {
          default: ie(() => [
            j(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, Ju = /* @__PURE__ */ Ke(Mu, [["__scopeId", "data-v-3a028803"]]);
export {
  Yu as TwcAccordionTable,
  Ju as TwcAccordionTableRow,
  Ou as TwcButton,
  Ru as TwcHeading,
  Ku as TwcIcon,
  Fu as TwcInput,
  Hu as TwcLabel,
  Vu as TwcLink,
  Wu as TwcParagraph,
  Uu as TwcPhoneInput,
  Gu as TwcSelect,
  qu as TwcSpinner,
  ju as TwcToggle
};
