var qr = Object.defineProperty;
var Vr = (t, e, l) => e in t ? qr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var ue = (t, e, l) => (Vr(t, typeof e != "symbol" ? e + "" : e, l), l);
function we() {
}
function fr(t) {
  return t();
}
function cl() {
  return /* @__PURE__ */ Object.create(null);
}
function he(t) {
  t.forEach(fr);
}
function mr(t) {
  return typeof t == "function";
}
function pr(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Wr(t) {
  return Object.keys(t).length === 0;
}
function _(t, e) {
  t.appendChild(e);
}
function br(t, e, l) {
  const r = Yr(t);
  if (!r.getElementById(e)) {
    const s = O("style");
    s.id = e, s.textContent = l, Kr(r, s);
  }
}
function Yr(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Kr(t, e) {
  return _(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function F(t, e, l) {
  t.insertBefore(e, l || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function bt(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function O(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createTextNode(t);
}
function D() {
  return W(" ");
}
function Xr() {
  return W("");
}
function X(t, e, l, r) {
  return t.addEventListener(e, l, r), () => t.removeEventListener(e, l, r);
}
function k(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function Zr(t) {
  return Array.from(t.childNodes);
}
function Q(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Ie(t, e) {
  t.value = e ?? "";
}
function vt(t, e, l, r) {
  l == null ? t.style.removeProperty(e) : t.style.setProperty(e, l, r ? "important" : "");
}
function ul(t, e, l) {
  for (let r = 0; r < t.options.length; r += 1) {
    const s = t.options[r];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!l || e !== void 0) && (t.selectedIndex = -1);
}
function Jr(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Qr(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (l) => {
      e[l.slot || "default"] = !0;
    }
  ), e;
}
let Ht;
function qe(t) {
  Ht = t;
}
const Be = [], dt = [];
let je = [];
const At = [], es = /* @__PURE__ */ Promise.resolve();
let Mt = !1;
function ts() {
  Mt || (Mt = !0, es.then(ge));
}
function ct(t) {
  je.push(t);
}
function gr(t) {
  At.push(t);
}
const zt = /* @__PURE__ */ new Set();
let Re = 0;
function ge() {
  if (Re !== 0)
    return;
  const t = Ht;
  do {
    try {
      for (; Re < Be.length; ) {
        const e = Be[Re];
        Re++, qe(e), ls(e.$$);
      }
    } catch (e) {
      throw Be.length = 0, Re = 0, e;
    }
    for (qe(null), Be.length = 0, Re = 0; dt.length; )
      dt.pop()();
    for (let e = 0; e < je.length; e += 1) {
      const l = je[e];
      zt.has(l) || (zt.add(l), l());
    }
    je.length = 0;
  } while (Be.length);
  for (; At.length; )
    At.pop()();
  Mt = !1, zt.clear(), qe(t);
}
function ls(t) {
  if (t.fragment !== null) {
    t.update(), he(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ct);
  }
}
function rs(t) {
  const e = [], l = [];
  je.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : l.push(r)), l.forEach((r) => r()), je = e;
}
const st = /* @__PURE__ */ new Set();
let Ae;
function ut() {
  Ae = {
    r: 0,
    c: [],
    p: Ae
    // parent group
  };
}
function yt() {
  Ae.r || he(Ae.c), Ae = Ae.p;
}
function ve(t, e) {
  t && t.i && (st.delete(t), t.i(e));
}
function $e(t, e, l, r) {
  if (t && t.o) {
    if (st.has(t))
      return;
    st.add(t), Ae.c.push(() => {
      st.delete(t), r && (l && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Te(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function $r(t, e, l) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = l, l(t.$$.ctx[r]));
}
function hr(t) {
  t && t.c();
}
function qt(t, e, l) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, l), ct(() => {
    const n = t.$$.on_mount.map(fr).filter(mr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...n) : he(n), t.$$.on_mount = [];
  }), s.forEach(ct);
}
function Vt(t, e) {
  const l = t.$$;
  l.fragment !== null && (rs(l.after_update), he(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function ss(t, e) {
  t.$$.dirty[0] === -1 && (Be.push(t), ts(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kr(t, e, l, r, s, n, o = null, a = [-1]) {
  const i = Ht;
  qe(t);
  const v = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: we,
    not_equal: s,
    bound: cl(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: cl(),
    dirty: a,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  o && o(v.root);
  let c = !1;
  if (v.ctx = l ? l(t, e.props || {}, (u, w, ...d) => {
    const y = d.length ? d[0] : w;
    return v.ctx && s(v.ctx[u], v.ctx[u] = y) && (!v.skip_bound && v.bound[u] && v.bound[u](y), c && ss(t, u)), w;
  }) : [], v.update(), c = !0, he(v.before_update), v.fragment = r ? r(v.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = Zr(e.target);
      v.fragment && v.fragment.l(u), u.forEach(A);
    } else
      v.fragment && v.fragment.c();
    e.intro && ve(t.$$.fragment), qt(t, e.target, e.anchor), ge();
  }
  qe(i);
}
let xr;
typeof HTMLElement == "function" && (xr = class extends HTMLElement {
  constructor(e, l, r) {
    super();
    /** The Svelte component constructor */
    ue(this, "$$ctor");
    /** Slots */
    ue(this, "$$s");
    /** The Svelte component instance */
    ue(this, "$$c");
    /** Whether or not the custom element is connected */
    ue(this, "$$cn", !1);
    /** Component props data */
    ue(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ue(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ue(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ue(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ue(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = l, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, l, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(l), this.$$c) {
      const s = this.$$c.$on(e, l);
      this.$$l_u.set(l, s);
    }
    super.addEventListener(e, l, r);
  }
  removeEventListener(e, l, r) {
    if (super.removeEventListener(e, l, r), this.$$c) {
      const s = this.$$l_u.get(l);
      s && (s(), this.$$l_u.delete(l));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return () => {
          let o;
          return {
            c: function() {
              o = O("slot"), n !== "default" && k(o, "name", n);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(v, c) {
              F(v, o, c);
            },
            d: function(v) {
              v && A(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const l = {}, r = Qr(this);
      for (const n of this.$$s)
        n in r && (l[n] = [e(n)]);
      for (const n of this.attributes) {
        const o = this.$$g_p(n.name);
        o in this.$$d || (this.$$d[o] = nt(o, n.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: l,
          $$scope: {
            ctx: []
          }
        }
      });
      const s = () => {
        this.$$r = !0;
        for (const n in this.$$p_d)
          if (this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]], this.$$p_d[n].reflect) {
            const o = nt(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(s), s();
      for (const n in this.$$l)
        for (const o of this.$$l[n]) {
          const a = this.$$c.$on(n, o);
          this.$$l_u.set(o, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, l, r) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = nt(e, r, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (l) => this.$$p_d[l].attribute === e || !this.$$p_d[l].attribute && l.toLowerCase() === e
    ) || e;
  }
});
function nt(t, e, l, r) {
  var n;
  const s = (n = l[t]) == null ? void 0 : n.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !l[t])
    return e;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function _r(t, e, l, r, s, n) {
  let o = class extends xr {
    constructor() {
      super(t, l, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((a) => {
    Object.defineProperty(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(i) {
        var v;
        i = nt(a, i, e), this.$$d[a] = i, (v = this.$$c) == null || v.$set({ [a]: i });
      }
    });
  }), r.forEach((a) => {
    Object.defineProperty(o.prototype, a, {
      get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[a];
      }
    });
  }), n && (o = n(o)), t.element = /** @type {any} */
  o, o;
}
class Pr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ue(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ue(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Vt(this, 1), this.$destroy = we;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, l) {
    if (!mr(l))
      return we;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(l), () => {
      const s = r.indexOf(l);
      s !== -1 && r.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Wr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ns = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ns);
let Ve, Ct, It, Et;
const ie = {
  light: "",
  dark: ""
}, yl = [];
async function os(t) {
  return await new Promise((e) => setTimeout(e, t));
}
function as() {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Ge(t, e) {
  try {
    return typeof t == "string" ? (e ?? document).querySelector(t) : t;
  } catch {
    return null;
  }
}
function ye(t, e) {
  try {
    return typeof t == "string" ? (e ?? document).querySelectorAll(t) : t ?? yl;
  } catch {
    return yl;
  }
}
function me(t, e) {
  var l;
  return ((l = t == null ? void 0 : t.classList) == null ? void 0 : l.contains(e)) ?? !1;
}
function wt(t, e) {
  var l;
  return ((l = t == null ? void 0 : t.tagName) == null ? void 0 : l.toLowerCase()) === e;
}
function Ke(t, e) {
  var l;
  return ((l = t == null ? void 0 : t.type) == null ? void 0 : l.toLowerCase()) === e;
}
function Ne(t, e) {
  var l;
  (l = t == null ? void 0 : t.classList) == null || l.add(e);
}
function te(t, e) {
  var l;
  (l = t == null ? void 0 : t.classList) == null || l.remove(e);
}
function _e(t, e, l) {
  t == null || t.addEventListener(e, l, !0);
}
function is(t, e, l) {
  t == null || t.removeEventListener(e, l, !0);
}
function vs(t, e) {
  var l;
  (l = e == null ? void 0 : e.parentNode) == null || l.insertBefore(t, e);
}
function Wt(t) {
  return t == null ? void 0 : t.previousElementSibling;
}
function zr(t) {
  return t == null ? void 0 : t.nextElementSibling;
}
function Qe(t) {
  return t == null ? void 0 : t.parentElement;
}
function ds(t) {
  const e = document.createElement("div");
  for (const l in t)
    e.setAttribute(l, t[l]);
  return e;
}
function et(t) {
  const e = t;
  Ke(e, "number") && !e.value && (e.value = ""), e.placeholder || (e.placeholder = " "), t.getAttribute("data-ui") && Xt(t, null);
}
function cs(t) {
  Xt(t.currentTarget, null, null, t);
}
function us(t) {
  const e = t.currentTarget, l = Qe(e), r = Ge("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", l);
  r && r.focus();
}
function ys(t) {
  const e = t.currentTarget;
  et(e);
}
function ws(t) {
  const e = t.currentTarget;
  et(e);
}
function Cr(t) {
  is(document.body, "click", Cr);
  const e = t.target;
  ye("menu.active").forEach((r) => Zt(e, r, t));
}
function fs(t) {
  const e = t.currentTarget;
  te(e, "active"), Ve && clearTimeout(Ve);
}
function ms(t) {
  const e = t.currentTarget;
  Yt(e);
}
function ps(t) {
  const e = t.currentTarget;
  Kt(e);
}
function bs(t) {
  const e = t.currentTarget;
  Yt(e, t);
}
function gs(t) {
  const e = t.currentTarget;
  Kt(e, t);
}
function $s(t) {
  const e = t.currentTarget;
  Ir(e);
}
function wl() {
  Ct && clearTimeout(Ct), Ct = setTimeout(() => {
    gt();
  }, 180);
}
function Yt(t, e) {
  if (e && e.key === "Enter") {
    const s = Wt(t);
    return Ke(s, "file") ? s.click() : void 0;
  }
  const l = t, r = zr(t);
  Ke(r, "text") && (r.value = l.files ? Array.from(l.files).map((s) => s.name).join(", ") : "", r.readOnly = !0, r.addEventListener("keydown", bs), et(r));
}
function Kt(t, e) {
  if (e && e.key === "Enter") {
    const s = Wt(t);
    return Ke(s, "color") ? s.click() : void 0;
  }
  const l = t, r = zr(t);
  Ke(r, "text") && (r.readOnly = !0, r.value = l.value, r.addEventListener("keydown", gs), et(r));
}
function Ir(t) {
  const e = Qe(t), l = Ge("span", e), r = ye("input", e);
  if (!r.length || !l)
    return;
  const n = 1.25 * (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16) * 100 / r[0].offsetWidth, o = [], a = [];
  for (let d = 0; d < r.length; d++) {
    const y = parseFloat(r[d].min), p = parseFloat(r[d].max), x = parseFloat(r[d].value), h = y || 0, b = p || 100, g = x || 0, z = (g - h) * 100 / (b - h), $ = n / 2 - n * z / 100;
    o.push(z + $), a.push(g), y !== h && (r[d].min = `${h}`), p !== b && (r[d].max = `${b}`), x !== g && (r[d].value = `${g}`);
  }
  let i = o[0], v = 0, c = 100 - v - i, u = a[0], w = a[1] || 0;
  r.length > 1 && (i = Math.abs(o[1] - o[0]), v = o[1] > o[0] ? o[0] : o[1], c = 100 - v - i, w > u && (u = a[1] || 0, w = a[0])), e.style.setProperty("---start", `${v}%`), e.style.setProperty("---end", `${c}%`), e.style.setProperty("---value1", `'${u}'`), e.style.setProperty("---value2", `'${w}'`);
}
async function Xt(t, e, l, r) {
  if (!(!e && (e = Ge(t.getAttribute("data-ui")), !e))) {
    if (wt(e, "dialog"))
      return await ks(t, e);
    if (wt(e, "menu"))
      return Zt(t, e, r);
    if (me(e, "snackbar"))
      return xs(t, e, l);
    if (me(e, "page"))
      return hs(t, e);
    if (tt(t), me(e, "active"))
      return te(e, "active");
    Ne(e, "active");
  }
}
function tt(t) {
  const e = Qe(t);
  if (!me(e, "tabs"))
    return;
  ye("a", e).forEach((r) => te(r, "active")), Ne(t, "active");
}
function hs(t, e) {
  tt(t);
  const l = Qe(e);
  if (l)
    for (let r = 0; r < l.children.length; r++)
      me(l.children[r], "page") && te(l.children[r], "active");
  Ne(e, "active");
}
function Zt(t, e, l) {
  It && clearTimeout(It), It = setTimeout(() => {
    if (_e(document.body, "click", Cr), tt(t), me(e, "active")) {
      if (!l)
        return te(e, "active");
      const s = l.target, n = Ge(s.getAttribute("data-ui") ?? ""), o = s.closest("menu"), a = !Ge("menu", s.closest("[data-ui]") ?? void 0);
      return n && n !== o ? Zt(s, n) : !n && !a && o ? !1 : te(e, "active");
    }
    ye("menu.active").forEach((s) => te(s, "active")), Ne(e, "active");
  }, 90);
}
async function ks(t, e) {
  var i;
  (i = document.activeElement) == null || i.blur(), tt(t);
  let l = Wt(e);
  const r = e, s = me(e, "active") || r.open, n = me(e, "modal"), o = Qe(e), a = wt(o, "nav");
  me(l, "overlay") || (l = ds({ class: "overlay" }), vs(l, e), await os(90)), l.onclick = () => {
    n || (te(t, "active"), te(e, "active"), te(l, "active"), r.close());
  }, a && ye("dialog, a, .overlay", o).forEach((c) => {
    te(c, "active"), c.open && c.close();
  }), s ? (te(t, "active"), te(l, "active"), te(e, "active"), r.close()) : (!wt(t, "button") && !me(t, "button") && !me(t, "chip") && Ne(t, "active"), Ne(l, "active"), Ne(e, "active"), n ? r.showModal() : r.show());
}
function xs(t, e, l) {
  var s;
  (s = document.activeElement) == null || s.blur(), tt(t), ye(".snackbar.active").forEach((n) => te(n, "active")), Ne(e, "active"), _e(e, "click", fs), Ve && clearTimeout(Ve), l !== -1 && (Ve = setTimeout(() => {
    te(e, "active");
  }, l ?? 6e3));
}
function _s() {
  if (ie.light && ie.dark)
    return ie;
  const t = document.createElement("body");
  t.className = "light", document.body.appendChild(t);
  const e = document.createElement("body");
  e.className = "dark", document.body.appendChild(e);
  const l = getComputedStyle(t), r = getComputedStyle(e), s = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let n = 0; n < s.length; n++)
    ie.light += s[n] + ":" + l.getPropertyValue(s[n]) + ";", ie.dark += s[n] + ":" + r.getPropertyValue(s[n]) + ";";
  return document.body.removeChild(t), document.body.removeChild(e), ie;
}
function Ps(t) {
  if (!t || !globalThis.materialDynamicColors)
    return _s();
  const e = /dark/i.test(document.body.className) ? "dark" : "light";
  return t.light && t.dark ? (ie.light = t.light, ie.dark = t.dark, document.body.setAttribute("style", t[e]), t) : globalThis.materialDynamicColors(t).then((l) => {
    const r = (s) => {
      let n = "";
      for (const o in s) {
        const a = o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), i = s[o];
        n += "--" + a + ":" + i + ";";
      }
      return n;
    };
    return ie.light = r(l.light), ie.dark = r(l.dark), document.body.setAttribute("style", ie[e]), ie;
  });
}
function zs(t) {
  if (!t)
    return /dark/i.test(document.body.className) ? "dark" : "light";
  document.body.classList.remove("light", "dark"), document.body.classList.add(t);
  const e = t === "light" ? ie.light : ie.dark;
  return globalThis.materialDynamicColors && document.body.setAttribute("style", e), t;
}
function Cs() {
  Et || (Et = new MutationObserver(wl), Et.observe(document.body, { attributes: !0, attributeFilter: ["value", "max", "min"], childList: !0, subtree: !0 }), wl());
}
function gt(t, e) {
  if (t) {
    if (t === "setup")
      return Cs();
    if (t === "guid")
      return as();
    if (t === "mode")
      return zs(e);
    if (t === "theme")
      return Ps(e);
    const i = Ge(t);
    if (!i)
      return;
    Xt(i, i, e);
  }
  ye("[data-ui]").forEach((i) => _e(i, "click", cs)), ye(".field > label").forEach((i) => _e(i, "click", us)), ye(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea").forEach((i) => {
    _e(i, "focus", ys), _e(i, "blur", ws), et(i);
  }), ye(".field > input[type=file]").forEach((i) => {
    _e(i, "change", ms), Yt(i);
  }), ye(".field > input[type=color]").forEach((i) => {
    _e(i, "change", ps), Kt(i);
  }), ye(".slider > input[type=range]").forEach((i) => {
    _e(i, "input", $s), Ir(i);
  });
}
globalThis.addEventListener && globalThis.addEventListener("load", async () => await gt("setup"));
globalThis.beercss = gt;
globalThis.ui = gt;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(t) {
  return t < 0 ? -1 : t === 0 ? 0 : 1;
}
function We(t, e, l) {
  return (1 - l) * t + l * e;
}
function Is(t, e, l) {
  return l < t ? t : l > e ? e : l;
}
function ft(t, e, l) {
  return l < t ? t : l > e ? e : l;
}
function fl(t) {
  return t = t % 360, t < 0 && (t = t + 360), t;
}
function Jt(t) {
  return t = t % 360, t < 0 && (t = t + 360), t;
}
function Es(t, e) {
  return Jt(e - t) <= 180 ? 1 : -1;
}
function Er(t, e) {
  return 180 - Math.abs(Math.abs(t - e) - 180);
}
function Ft(t, e) {
  const l = t[0] * e[0][0] + t[1] * e[0][1] + t[2] * e[0][2], r = t[0] * e[1][0] + t[1] * e[1][1] + t[2] * e[1][2], s = t[0] * e[2][0] + t[1] * e[2][1] + t[2] * e[2][2];
  return [l, r, s];
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Or = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
], Os = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
], Qt = [95.047, 100, 108.883];
function $t(t, e, l) {
  return (255 << 24 | (t & 255) << 16 | (e & 255) << 8 | l & 255) >>> 0;
}
function ml(t) {
  const e = Me(t[0]), l = Me(t[1]), r = Me(t[2]);
  return $t(e, l, r);
}
function Ns(t) {
  return t >> 24 & 255;
}
function ht(t) {
  return t >> 16 & 255;
}
function kt(t) {
  return t >> 8 & 255;
}
function xt(t) {
  return t & 255;
}
function Nr(t, e, l) {
  const r = Os, s = r[0][0] * t + r[0][1] * e + r[0][2] * l, n = r[1][0] * t + r[1][1] * e + r[1][2] * l, o = r[2][0] * t + r[2][1] * e + r[2][2] * l, a = Me(s), i = Me(n), v = Me(o);
  return $t(a, i, v);
}
function Ts(t) {
  const e = Ce(ht(t)), l = Ce(kt(t)), r = Ce(xt(t));
  return Ft([e, l, r], Or);
}
function As(t, e, l) {
  const r = Qt, s = (t + 16) / 116, n = e / 500 + s, o = s - l / 200, a = ot(n), i = ot(s), v = ot(o), c = a * r[0], u = i * r[1], w = v * r[2];
  return Nr(c, u, w);
}
function Ms(t) {
  const e = Ce(ht(t)), l = Ce(kt(t)), r = Ce(xt(t)), s = Or, n = s[0][0] * e + s[0][1] * l + s[0][2] * r, o = s[1][0] * e + s[1][1] * l + s[1][2] * r, a = s[2][0] * e + s[2][1] * l + s[2][2] * r, i = Qt, v = n / i[0], c = o / i[1], u = a / i[2], w = Ye(v), d = Ye(c), y = Ye(u), p = 116 * d - 16, x = 500 * (w - d), h = 200 * (d - y);
  return [p, x, h];
}
function Fs(t) {
  const e = Oe(t), l = Me(e);
  return $t(l, l, l);
}
function Dt(t) {
  const e = Ts(t)[1];
  return 116 * Ye(e / 100) - 16;
}
function Oe(t) {
  return 100 * ot((t + 16) / 116);
}
function St(t) {
  return Ye(t / 100) * 116 - 16;
}
function Ce(t) {
  const e = t / 255;
  return e <= 0.040449936 ? e / 12.92 * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100;
}
function Me(t) {
  const e = t / 100;
  let l = 0;
  return e <= 31308e-7 ? l = e * 12.92 : l = 1.055 * Math.pow(e, 1 / 2.4) - 0.055, Is(0, 255, Math.round(l * 255));
}
function Ds() {
  return Qt;
}
function Ye(t) {
  const e = 0.008856451679035631, l = 24389 / 27;
  return t > e ? Math.pow(t, 1 / 3) : (l * t + 16) / 116;
}
function ot(t) {
  const e = 0.008856451679035631, l = 24389 / 27, r = t * t * t;
  return r > e ? r : (116 * t - 16) / l;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(e = Ds(), l = 200 / Math.PI * Oe(50) / 100, r = 50, s = 2, n = !1) {
    const o = e, a = o[0] * 0.401288 + o[1] * 0.650173 + o[2] * -0.051461, i = o[0] * -0.250268 + o[1] * 1.204414 + o[2] * 0.045854, v = o[0] * -2079e-6 + o[1] * 0.048952 + o[2] * 0.953127, c = 0.8 + s / 10, u = c >= 0.9 ? We(0.59, 0.69, (c - 0.9) * 10) : We(0.525, 0.59, (c - 0.8) * 10);
    let w = n ? 1 : c * (1 - 1 / 3.6 * Math.exp((-l - 42) / 92));
    w = w > 1 ? 1 : w < 0 ? 0 : w;
    const d = c, y = [
      w * (100 / a) + 1 - w,
      w * (100 / i) + 1 - w,
      w * (100 / v) + 1 - w
    ], p = 1 / (5 * l + 1), x = p * p * p * p, h = 1 - x, b = x * l + 0.1 * h * h * Math.cbrt(5 * l), g = Oe(r) / e[1], z = 1.48 + Math.sqrt(g), $ = 0.725 / Math.pow(g, 0.2), C = $, m = [
      Math.pow(b * y[0] * a / 100, 0.42),
      Math.pow(b * y[1] * i / 100, 0.42),
      Math.pow(b * y[2] * v / 100, 0.42)
    ], I = [
      400 * m[0] / (m[0] + 27.13),
      400 * m[1] / (m[1] + 27.13),
      400 * m[2] / (m[2] + 27.13)
    ], R = (2 * I[0] + I[1] + 0.05 * I[2]) * $;
    return new pe(g, R, $, C, u, d, y, b, Math.pow(b, 0.25), z);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(e, l, r, s, n, o, a, i, v, c) {
    this.n = e, this.aw = l, this.nbb = r, this.ncb = s, this.c = n, this.nc = o, this.rgbD = a, this.fl = i, this.fLRoot = v, this.z = c;
  }
}
pe.DEFAULT = pe.make();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(e, l, r, s, n, o, a, i, v) {
    this.hue = e, this.chroma = l, this.j = r, this.q = s, this.m = n, this.s = o, this.jstar = a, this.astar = i, this.bstar = v;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(e) {
    const l = this.jstar - e.jstar, r = this.astar - e.astar, s = this.bstar - e.bstar, n = Math.sqrt(l * l + r * r + s * s);
    return 1.41 * Math.pow(n, 0.63);
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(e) {
    return K.fromIntInViewingConditions(e, pe.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(e, l) {
    const r = (e & 16711680) >> 16, s = (e & 65280) >> 8, n = e & 255, o = Ce(r), a = Ce(s), i = Ce(n), v = 0.41233895 * o + 0.35762064 * a + 0.18051042 * i, c = 0.2126 * o + 0.7152 * a + 0.0722 * i, u = 0.01932141 * o + 0.11916382 * a + 0.95034478 * i, w = 0.401288 * v + 0.650173 * c - 0.051461 * u, d = -0.250268 * v + 1.204414 * c + 0.045854 * u, y = -2079e-6 * v + 0.048952 * c + 0.953127 * u, p = l.rgbD[0] * w, x = l.rgbD[1] * d, h = l.rgbD[2] * y, b = Math.pow(l.fl * Math.abs(p) / 100, 0.42), g = Math.pow(l.fl * Math.abs(x) / 100, 0.42), z = Math.pow(l.fl * Math.abs(h) / 100, 0.42), $ = ae(p) * 400 * b / (b + 27.13), C = ae(x) * 400 * g / (g + 27.13), m = ae(h) * 400 * z / (z + 27.13), I = (11 * $ + -12 * C + m) / 11, R = ($ + C - 2 * m) / 9, T = (20 * $ + 20 * C + 21 * m) / 20, L = (40 * $ + 20 * C + m) / 20, U = Math.atan2(R, I) * 180 / Math.PI, j = U < 0 ? U + 360 : U >= 360 ? U - 360 : U, q = j * Math.PI / 180, ke = L * l.nbb, le = 100 * Math.pow(ke / l.aw, l.c * l.z), re = 4 / l.c * Math.sqrt(le / 100) * (l.aw + 4) * l.fLRoot, Fe = j < 20.14 ? j + 360 : j, ce = 0.25 * (Math.cos(Fe * Math.PI / 180 + 2) + 3.8), M = 5e4 / 13 * ce * l.nc * l.ncb * Math.sqrt(I * I + R * R) / (T + 0.305), B = Math.pow(M, 0.9) * Math.pow(1.64 - Math.pow(0.29, l.n), 0.73), Se = B * Math.sqrt(le / 100), vl = Se * l.fLRoot, jr = 50 * Math.sqrt(B * l.c / (l.aw + 4)), Gr = (1 + 100 * 7e-3) * le / (1 + 7e-3 * le), dl = 1 / 0.0228 * Math.log(1 + 0.0228 * vl), Ur = dl * Math.cos(q), Hr = dl * Math.sin(q);
    return new K(j, Se, le, re, vl, jr, Gr, Ur, Hr);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(e, l, r) {
    return K.fromJchInViewingConditions(e, l, r, pe.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(e, l, r, s) {
    const n = 4 / s.c * Math.sqrt(e / 100) * (s.aw + 4) * s.fLRoot, o = l * s.fLRoot, a = l / Math.sqrt(e / 100), i = 50 * Math.sqrt(a * s.c / (s.aw + 4)), v = r * Math.PI / 180, c = (1 + 100 * 7e-3) * e / (1 + 7e-3 * e), u = 1 / 0.0228 * Math.log(1 + 0.0228 * o), w = u * Math.cos(v), d = u * Math.sin(v);
    return new K(r, l, e, n, o, i, c, w, d);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(e, l, r) {
    return K.fromUcsInViewingConditions(e, l, r, pe.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(e, l, r, s) {
    const n = l, o = r, a = Math.sqrt(n * n + o * o), v = (Math.exp(a * 0.0228) - 1) / 0.0228 / s.fLRoot;
    let c = Math.atan2(o, n) * (180 / Math.PI);
    c < 0 && (c += 360);
    const u = e / (1 - (e - 100) * 7e-3);
    return K.fromJchInViewingConditions(u, v, c, s);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(pe.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(e) {
    const l = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), r = Math.pow(l / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), s = this.hue * Math.PI / 180, n = 0.25 * (Math.cos(s + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), a = n * (5e4 / 13) * e.nc * e.ncb, i = o / e.nbb, v = Math.sin(s), c = Math.cos(s), u = 23 * (i + 0.305) * r / (23 * a + 11 * r * c + 108 * r * v), w = u * c, d = u * v, y = (460 * i + 451 * w + 288 * d) / 1403, p = (460 * i - 891 * w - 261 * d) / 1403, x = (460 * i - 220 * w - 6300 * d) / 1403, h = Math.max(0, 27.13 * Math.abs(y) / (400 - Math.abs(y))), b = ae(y) * (100 / e.fl) * Math.pow(h, 1 / 0.42), g = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), z = ae(p) * (100 / e.fl) * Math.pow(g, 1 / 0.42), $ = Math.max(0, 27.13 * Math.abs(x) / (400 - Math.abs(x))), C = ae(x) * (100 / e.fl) * Math.pow($, 1 / 0.42), m = b / e.rgbD[0], I = z / e.rgbD[1], R = C / e.rgbD[2], T = 1.86206786 * m - 1.01125463 * I + 0.14918677 * R, L = 0.38752654 * m + 0.62144744 * I - 897398e-8 * R, E = -0.0158415 * m - 0.03412294 * I + 1.04996444 * R;
    return Nr(T, L, E);
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e, l, r, s) {
    const n = 0.401288 * e + 0.650173 * l - 0.051461 * r, o = -0.250268 * e + 1.204414 * l + 0.045854 * r, a = -2079e-6 * e + 0.048952 * l + 0.953127 * r, i = s.rgbD[0] * n, v = s.rgbD[1] * o, c = s.rgbD[2] * a, u = Math.pow(s.fl * Math.abs(i) / 100, 0.42), w = Math.pow(s.fl * Math.abs(v) / 100, 0.42), d = Math.pow(s.fl * Math.abs(c) / 100, 0.42), y = ae(i) * 400 * u / (u + 27.13), p = ae(v) * 400 * w / (w + 27.13), x = ae(c) * 400 * d / (d + 27.13), h = (11 * y + -12 * p + x) / 11, b = (y + p - 2 * x) / 9, g = (20 * y + 20 * p + 21 * x) / 20, z = (40 * y + 20 * p + x) / 20, C = Math.atan2(b, h) * 180 / Math.PI, m = C < 0 ? C + 360 : C >= 360 ? C - 360 : C, I = m * Math.PI / 180, R = z * s.nbb, T = 100 * Math.pow(R / s.aw, s.c * s.z), L = 4 / s.c * Math.sqrt(T / 100) * (s.aw + 4) * s.fLRoot, E = m < 20.14 ? m + 360 : m, U = 1 / 4 * (Math.cos(E * Math.PI / 180 + 2) + 3.8), q = 5e4 / 13 * U * s.nc * s.ncb * Math.sqrt(h * h + b * b) / (g + 0.305), ke = Math.pow(q, 0.9) * Math.pow(1.64 - Math.pow(0.29, s.n), 0.73), le = ke * Math.sqrt(T / 100), re = le * s.fLRoot, Fe = 50 * Math.sqrt(ke * s.c / (s.aw + 4)), ce = (1 + 100 * 7e-3) * T / (1 + 7e-3 * T), De = Math.log(1 + 0.0228 * re) / 0.0228, M = De * Math.cos(I), B = De * Math.sin(I);
    return new K(m, le, T, L, re, Fe, ce, M, B);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e) {
    const l = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), r = Math.pow(l / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), s = this.hue * Math.PI / 180, n = 0.25 * (Math.cos(s + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), a = n * (5e4 / 13) * e.nc * e.ncb, i = o / e.nbb, v = Math.sin(s), c = Math.cos(s), u = 23 * (i + 0.305) * r / (23 * a + 11 * r * c + 108 * r * v), w = u * c, d = u * v, y = (460 * i + 451 * w + 288 * d) / 1403, p = (460 * i - 891 * w - 261 * d) / 1403, x = (460 * i - 220 * w - 6300 * d) / 1403, h = Math.max(0, 27.13 * Math.abs(y) / (400 - Math.abs(y))), b = ae(y) * (100 / e.fl) * Math.pow(h, 1 / 0.42), g = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), z = ae(p) * (100 / e.fl) * Math.pow(g, 1 / 0.42), $ = Math.max(0, 27.13 * Math.abs(x) / (400 - Math.abs(x))), C = ae(x) * (100 / e.fl) * Math.pow($, 1 / 0.42), m = b / e.rgbD[0], I = z / e.rgbD[1], R = C / e.rgbD[2], T = 1.86206786 * m - 1.01125463 * I + 0.14918677 * R, L = 0.38752654 * m + 0.62144744 * I - 897398e-8 * R, E = -0.0158415 * m - 0.03412294 * I + 1.04996444 * R;
    return [T, L, E];
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(e) {
    return (e + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(e) {
    const l = e / 100;
    let r = 0;
    return l <= 31308e-7 ? r = l * 12.92 : r = 1.055 * Math.pow(l, 1 / 2.4) - 0.055, r * 255;
  }
  static chromaticAdaptation(e) {
    const l = Math.pow(Math.abs(e), 0.42);
    return ae(e) * 400 * l / (l + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(e) {
    const l = Ft(e, N.SCALED_DISCOUNT_FROM_LINRGB), r = N.chromaticAdaptation(l[0]), s = N.chromaticAdaptation(l[1]), n = N.chromaticAdaptation(l[2]), o = (11 * r + -12 * s + n) / 11, a = (r + s - 2 * n) / 9;
    return Math.atan2(a, o);
  }
  static areInCyclicOrder(e, l, r) {
    const s = N.sanitizeRadians(l - e), n = N.sanitizeRadians(r - e);
    return s < n;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(e, l, r) {
    return (l - e) / (r - e);
  }
  static lerpPoint(e, l, r) {
    return [
      e[0] + (r[0] - e[0]) * l,
      e[1] + (r[1] - e[1]) * l,
      e[2] + (r[2] - e[2]) * l
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(e, l, r, s) {
    const n = N.intercept(e[s], l, r[s]);
    return N.lerpPoint(e, n, r);
  }
  static isBounded(e) {
    return 0 <= e && e <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(e, l) {
    const r = N.Y_FROM_LINRGB[0], s = N.Y_FROM_LINRGB[1], n = N.Y_FROM_LINRGB[2], o = l % 4 <= 1 ? 0 : 100, a = l % 2 === 0 ? 0 : 100;
    if (l < 4) {
      const i = o, v = a, c = (e - i * s - v * n) / r;
      return N.isBounded(c) ? [c, i, v] : [-1, -1, -1];
    } else if (l < 8) {
      const i = o, v = a, c = (e - v * r - i * n) / s;
      return N.isBounded(c) ? [v, c, i] : [-1, -1, -1];
    } else {
      const i = o, v = a, c = (e - i * r - v * s) / n;
      return N.isBounded(c) ? [i, v, c] : [-1, -1, -1];
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(e, l) {
    let r = [-1, -1, -1], s = r, n = 0, o = 0, a = !1, i = !0;
    for (let v = 0; v < 12; v++) {
      const c = N.nthVertex(e, v);
      if (c[0] < 0)
        continue;
      const u = N.hueOf(c);
      if (!a) {
        r = c, s = c, n = u, o = u, a = !0;
        continue;
      }
      (i || N.areInCyclicOrder(n, u, o)) && (i = !1, N.areInCyclicOrder(n, l, u) ? (s = c, o = u) : (r = c, n = u));
    }
    return [r, s];
  }
  static midpoint(e, l) {
    return [
      (e[0] + l[0]) / 2,
      (e[1] + l[1]) / 2,
      (e[2] + l[2]) / 2
    ];
  }
  static criticalPlaneBelow(e) {
    return Math.floor(e - 0.5);
  }
  static criticalPlaneAbove(e) {
    return Math.ceil(e - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(e, l) {
    const r = N.bisectToSegment(e, l);
    let s = r[0], n = N.hueOf(s), o = r[1];
    for (let a = 0; a < 3; a++)
      if (s[a] !== o[a]) {
        let i = -1, v = 255;
        s[a] < o[a] ? (i = N.criticalPlaneBelow(N.trueDelinearized(s[a])), v = N.criticalPlaneAbove(N.trueDelinearized(o[a]))) : (i = N.criticalPlaneAbove(N.trueDelinearized(s[a])), v = N.criticalPlaneBelow(N.trueDelinearized(o[a])));
        for (let c = 0; c < 8 && !(Math.abs(v - i) <= 1); c++) {
          const u = Math.floor((i + v) / 2), w = N.CRITICAL_PLANES[u], d = N.setCoordinate(s, w, o, a), y = N.hueOf(d);
          N.areInCyclicOrder(n, l, y) ? (o = d, v = u) : (s = d, n = y, i = u);
        }
      }
    return N.midpoint(s, o);
  }
  static inverseChromaticAdaptation(e) {
    const l = Math.abs(e), r = Math.max(0, 27.13 * l / (400 - l));
    return ae(e) * Math.pow(r, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(e, l, r) {
    let s = Math.sqrt(r) * 11;
    const n = pe.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(0.29, n.n), 0.73), i = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * n.nc * n.ncb, v = Math.sin(e), c = Math.cos(e);
    for (let u = 0; u < 5; u++) {
      const w = s / 100, d = l === 0 || s === 0 ? 0 : l / Math.sqrt(w), y = Math.pow(d * o, 1 / 0.9), x = n.aw * Math.pow(w, 1 / n.c / n.z) / n.nbb, h = 23 * (x + 0.305) * y / (23 * i + 11 * y * c + 108 * y * v), b = h * c, g = h * v, z = (460 * x + 451 * b + 288 * g) / 1403, $ = (460 * x - 891 * b - 261 * g) / 1403, C = (460 * x - 220 * b - 6300 * g) / 1403, m = N.inverseChromaticAdaptation(z), I = N.inverseChromaticAdaptation($), R = N.inverseChromaticAdaptation(C), T = Ft([m, I, R], N.LINRGB_FROM_SCALED_DISCOUNT);
      if (T[0] < 0 || T[1] < 0 || T[2] < 0)
        return 0;
      const L = N.Y_FROM_LINRGB[0], E = N.Y_FROM_LINRGB[1], U = N.Y_FROM_LINRGB[2], j = L * T[0] + E * T[1] + U * T[2];
      if (j <= 0)
        return 0;
      if (u === 4 || Math.abs(j - r) < 2e-3)
        return T[0] > 100.01 || T[1] > 100.01 || T[2] > 100.01 ? 0 : ml(T);
      s = s - (j - r) * s / (2 * j);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(e, l, r) {
    if (l < 1e-4 || r < 1e-4 || r > 99.9999)
      return Fs(r);
    e = Jt(e);
    const s = e / 180 * Math.PI, n = Oe(r), o = N.findResultByJ(s, l, n);
    if (o !== 0)
      return o;
    const a = N.bisectToLimit(n, s);
    return ml(a);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(e, l, r) {
    return K.fromInt(N.solveToInt(e, l, r));
  }
}
N.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
N.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
N.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
N.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V {
  static from(e, l, r) {
    return new V(N.solveToInt(e, l, r));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(e) {
    return new V(e);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(e) {
    this.setInternalState(N.solveToInt(e, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(e) {
    this.setInternalState(N.solveToInt(this.internalHue, e, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(e) {
    this.setInternalState(N.solveToInt(this.internalHue, this.internalChroma, e));
  }
  constructor(e) {
    this.argb = e;
    const l = K.fromInt(e);
    this.internalHue = l.hue, this.internalChroma = l.chroma, this.internalTone = Dt(e), this.argb = e;
  }
  setInternalState(e) {
    const l = K.fromInt(e);
    this.internalHue = l.hue, this.internalChroma = l.chroma, this.internalTone = Dt(e), this.argb = e;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(e) {
    const r = K.fromInt(this.toInt()).xyzInViewingConditions(e), s = K.fromXyzInViewingConditions(r[0], r[1], r[2], pe.make());
    return V.from(s.hue, s.chroma, St(r[1]));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el {
  /**
   * Blend the design color's HCT hue towards the key color's HCT
   * hue, in a way that leaves the original color recognizable and
   * recognizably shifted towards the key color.
   *
   * @param designColor ARGB representation of an arbitrary color.
   * @param sourceColor ARGB representation of the main theme color.
   * @return The design color with a hue shifted towards the
   * system's color, a slightly warmer/cooler variant of the design
   * color's hue.
   */
  static harmonize(e, l) {
    const r = V.fromInt(e), s = V.fromInt(l), n = Er(r.hue, s.hue), o = Math.min(n * 0.5, 15), a = Jt(r.hue + o * Es(r.hue, s.hue));
    return V.from(a, r.chroma, r.tone).toInt();
  }
  /**
   * Blends hue from one color into another. The chroma and tone of
   * the original color are maintained.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, with a hue blended towards to. Chroma and tone
   * are constant.
   */
  static hctHue(e, l, r) {
    const s = el.cam16Ucs(e, l, r), n = K.fromInt(s), o = K.fromInt(e);
    return V.from(n.hue, o.chroma, Dt(e)).toInt();
  }
  /**
   * Blend in CAM16-UCS space.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, blended towards to. Hue, chroma, and tone will
   * change.
   */
  static cam16Ucs(e, l, r) {
    const s = K.fromInt(e), n = K.fromInt(l), o = s.jstar, a = s.astar, i = s.bstar, v = n.jstar, c = n.astar, u = n.bstar, w = o + (v - o) * r, d = a + (c - a) * r, y = i + (u - i) * r;
    return K.fromUcs(w, d, y).toInt();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(e, l) {
    return e = ft(0, 100, e), l = ft(0, 100, l), Y.ratioOfYs(Oe(e), Oe(l));
  }
  static ratioOfYs(e, l) {
    const r = e > l ? e : l, s = r === l ? e : l;
    return (r + 5) / (s + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(e, l) {
    if (e < 0 || e > 100)
      return -1;
    const r = Oe(e), s = l * (r + 5) - 5, n = Y.ratioOfYs(s, r), o = Math.abs(n - l);
    if (n < l && o > 0.04)
      return -1;
    const a = St(s) + 0.4;
    return a < 0 || a > 100 ? -1 : a;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(e, l) {
    if (e < 0 || e > 100)
      return -1;
    const r = Oe(e), s = (r + 5) / l - 5, n = Y.ratioOfYs(r, s), o = Math.abs(n - l);
    if (n < l && o > 0.04)
      return -1;
    const a = St(s) - 0.4;
    return a < 0 || a > 100 ? -1 : a;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(e, l) {
    const r = Y.lighter(e, l);
    return r < 0 ? 100 : r;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(e, l) {
    const r = Y.darker(e, l);
    return r < 0 ? 0 : r;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(e) {
    const l = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111, r = Math.round(e.chroma) > 16, s = Math.round(e.tone) < 65;
    return l && r && s;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(e) {
    return tl.isDisliked(e) ? V.from(e.hue, e.chroma, 70) : e;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(e) {
    return new P(e.name ?? "", e.palette, e.tone, e.isBackground ?? !1, e.background, e.secondBackground, e.contrastCurve, e.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(e, l, r, s, n, o, a, i) {
    if (this.name = e, this.palette = l, this.tone = r, this.isBackground = s, this.background = n, this.secondBackground = o, this.contrastCurve = a, this.toneDeltaPair = i, this.hctCache = /* @__PURE__ */ new Map(), !n && o)
      throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
    if (!n && a)
      throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
    if (n && !a)
      throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(e) {
    return this.getHct(e).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(e) {
    const l = this.hctCache.get(e);
    if (l != null)
      return l;
    const r = this.getTone(e), s = this.palette(e).getHct(r);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, s), s;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(e) {
    const l = e.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const r = this.toneDeltaPair(e), s = r.roleA, n = r.roleB, o = r.delta, a = r.polarity, i = r.stayTogether, c = this.background(e).getTone(e), u = a === "nearer" || a === "lighter" && !e.isDark || a === "darker" && e.isDark, w = u ? s : n, d = u ? n : s, y = this.name === w.name, p = e.isDark ? 1 : -1, x = w.contrastCurve.getContrast(e.contrastLevel), h = d.contrastCurve.getContrast(e.contrastLevel), b = w.tone(e);
      let g = Y.ratioOfTones(c, b) >= x ? b : P.foregroundTone(c, x);
      const z = d.tone(e);
      let $ = Y.ratioOfTones(c, z) >= h ? z : P.foregroundTone(c, h);
      return l && (g = P.foregroundTone(c, x), $ = P.foregroundTone(c, h)), ($ - g) * p >= o || ($ = ft(0, 100, g + o * p), ($ - g) * p >= o || (g = ft(0, 100, $ - o * p))), 50 <= g && g < 60 ? p > 0 ? (g = 60, $ = Math.max($, g + o * p)) : (g = 49, $ = Math.min($, g + o * p)) : 50 <= $ && $ < 60 && (i ? p > 0 ? (g = 60, $ = Math.max($, g + o * p)) : (g = 49, $ = Math.min($, g + o * p)) : p > 0 ? $ = 60 : $ = 49), y ? g : $;
    } else {
      let r = this.tone(e);
      if (this.background == null)
        return r;
      const s = this.background(e).getTone(e), n = this.contrastCurve.getContrast(e.contrastLevel);
      if (Y.ratioOfTones(s, r) >= n || (r = P.foregroundTone(s, n)), l && (r = P.foregroundTone(s, n)), this.isBackground && 50 <= r && r < 60 && (Y.ratioOfTones(49, s) >= n ? r = 49 : r = 60), this.secondBackground) {
        const [o, a] = [this.background, this.secondBackground], [i, v] = [o(e).getTone(e), a(e).getTone(e)], [c, u] = [Math.max(i, v), Math.min(i, v)];
        if (Y.ratioOfTones(c, r) >= n && Y.ratioOfTones(u, r) >= n)
          return r;
        const w = Y.lighter(c, n), d = Y.darker(u, n), y = [];
        return w !== -1 && y.push(w), d !== -1 && y.push(d), P.tonePrefersLightForeground(i) || P.tonePrefersLightForeground(v) ? w < 0 ? 100 : w : y.length === 1 ? y[0] : d < 0 ? 0 : d;
      }
      return r;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(e, l) {
    const r = Y.lighterUnsafe(e, l), s = Y.darkerUnsafe(e, l), n = Y.ratioOfTones(r, e), o = Y.ratioOfTones(s, e);
    if (P.tonePrefersLightForeground(e)) {
      const i = Math.abs(n - o) < 0.1 && n < l && o < l;
      return n >= l || n >= o || i ? r : s;
    } else
      return o >= l || o >= n ? s : r;
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(e) {
    return Math.round(e) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(e) {
    return Math.round(e) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(e) {
    return P.tonePrefersLightForeground(e) && !P.toneAllowsLightForeground(e) ? 49 : e;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xe;
(function(t) {
  t[t.MONOCHROME = 0] = "MONOCHROME", t[t.NEUTRAL = 1] = "NEUTRAL", t[t.TONAL_SPOT = 2] = "TONAL_SPOT", t[t.VIBRANT = 3] = "VIBRANT", t[t.EXPRESSIVE = 4] = "EXPRESSIVE", t[t.FIDELITY = 5] = "FIDELITY", t[t.CONTENT = 6] = "CONTENT", t[t.RAINBOW = 7] = "RAINBOW", t[t.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(Xe || (Xe = {}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(e, l, r, s) {
    this.low = e, this.normal = l, this.medium = r, this.high = s;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(e) {
    return e <= -1 ? this.low : e < 0 ? We(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? We(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? We(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(e, l, r, s, n) {
    this.roleA = e, this.roleB = l, this.delta = r, this.polarity = s, this.stayTogether = n;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(t) {
  return t.variant === Xe.FIDELITY || t.variant === Xe.CONTENT;
}
function H(t) {
  return t.variant === Xe.MONOCHROME;
}
function Ss(t, e, l, r) {
  let s = l, n = V.from(t, e, l);
  if (n.chroma < e) {
    let o = n.chroma;
    for (; n.chroma < e; ) {
      s += r ? -1 : 1;
      const a = V.from(t, e, s);
      if (o > a.chroma || Math.abs(a.chroma - e) < 0.4)
        break;
      const i = Math.abs(a.chroma - e), v = Math.abs(n.chroma - e);
      i < v && (n = a), o = Math.max(o, a.chroma);
    }
  }
  return s;
}
function Rs(t) {
  return pe.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    t.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  );
}
function ll(t, e) {
  const l = t.inViewingConditions(Rs(e));
  return P.tonePrefersLightForeground(t.tone) && !P.toneAllowsLightForeground(l.tone) ? P.enableLightForeground(t.tone) : P.enableLightForeground(l.tone);
}
class f {
  static highestSurface(e) {
    return e.isDark ? f.surfaceBright : f.surfaceDim;
  }
}
f.contentAccentToneDelta = 15;
f.primaryPaletteKeyColor = P.fromPalette({
  name: "primary_palette_key_color",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.primaryPalette.keyColor.tone
});
f.secondaryPaletteKeyColor = P.fromPalette({
  name: "secondary_palette_key_color",
  palette: (t) => t.secondaryPalette,
  tone: (t) => t.secondaryPalette.keyColor.tone
});
f.tertiaryPaletteKeyColor = P.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => t.tertiaryPalette.keyColor.tone
});
f.neutralPaletteKeyColor = P.fromPalette({
  name: "neutral_palette_key_color",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.neutralPalette.keyColor.tone
});
f.neutralVariantPaletteKeyColor = P.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.neutralVariantPalette.keyColor.tone
});
f.background = P.fromPalette({
  name: "background",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 98,
  isBackground: !0
});
f.onBackground = P.fromPalette({
  name: "on_background",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => f.background,
  contrastCurve: new S(3, 3, 4.5, 7)
});
f.surface = P.fromPalette({
  name: "surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 98,
  isBackground: !0
});
f.surfaceDim = P.fromPalette({
  name: "surface_dim",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 87,
  isBackground: !0
});
f.surfaceBright = P.fromPalette({
  name: "surface_bright",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 24 : 98,
  isBackground: !0
});
f.surfaceContainerLowest = P.fromPalette({
  name: "surface_container_lowest",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 4 : 100,
  isBackground: !0
});
f.surfaceContainerLow = P.fromPalette({
  name: "surface_container_low",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 10 : 96,
  isBackground: !0
});
f.surfaceContainer = P.fromPalette({
  name: "surface_container",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 12 : 94,
  isBackground: !0
});
f.surfaceContainerHigh = P.fromPalette({
  name: "surface_container_high",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 17 : 92,
  isBackground: !0
});
f.surfaceContainerHighest = P.fromPalette({
  name: "surface_container_highest",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 22 : 90,
  isBackground: !0
});
f.onSurface = P.fromPalette({
  name: "on_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.surfaceVariant = P.fromPalette({
  name: "surface_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 30 : 90,
  isBackground: !0
});
f.onSurfaceVariant = P.fromPalette({
  name: "on_surface_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 80 : 30,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(3, 4.5, 7, 11)
});
f.inverseSurface = P.fromPalette({
  name: "inverse_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 20
});
f.inverseOnSurface = P.fromPalette({
  name: "inverse_on_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 20 : 95,
  background: (t) => f.inverseSurface,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.outline = P.fromPalette({
  name: "outline",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 60 : 50,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1.5, 3, 4.5, 7)
});
f.outlineVariant = P.fromPalette({
  name: "outline_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 30 : 80,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7)
});
f.shadow = P.fromPalette({
  name: "shadow",
  palette: (t) => t.neutralPalette,
  tone: (t) => 0
});
f.scrim = P.fromPalette({
  name: "scrim",
  palette: (t) => t.neutralPalette,
  tone: (t) => 0
});
f.surfaceTint = P.fromPalette({
  name: "surface_tint",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0
});
f.primary = P.fromPalette({
  name: "primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => H(t) ? t.isDark ? 100 : 0 : t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new de(f.primaryContainer, f.primary, 15, "nearer", !1)
});
f.onPrimary = P.fromPalette({
  name: "on_primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => H(t) ? t.isDark ? 10 : 90 : t.isDark ? 20 : 100,
  background: (t) => f.primary,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.primaryContainer = P.fromPalette({
  name: "primary_container",
  palette: (t) => t.primaryPalette,
  tone: (t) => Ue(t) ? ll(t.sourceColorHct, t) : H(t) ? t.isDark ? 85 : 25 : t.isDark ? 30 : 90,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.primaryContainer, f.primary, 15, "nearer", !1)
});
f.onPrimaryContainer = P.fromPalette({
  name: "on_primary_container",
  palette: (t) => t.primaryPalette,
  tone: (t) => Ue(t) ? P.foregroundTone(f.primaryContainer.tone(t), 4.5) : H(t) ? t.isDark ? 0 : 100 : t.isDark ? 90 : 10,
  background: (t) => f.primaryContainer,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.inversePrimary = P.fromPalette({
  name: "inverse_primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.isDark ? 40 : 80,
  background: (t) => f.inverseSurface,
  contrastCurve: new S(3, 4.5, 7, 11)
});
f.secondary = P.fromPalette({
  name: "secondary",
  palette: (t) => t.secondaryPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new de(f.secondaryContainer, f.secondary, 15, "nearer", !1)
});
f.onSecondary = P.fromPalette({
  name: "on_secondary",
  palette: (t) => t.secondaryPalette,
  tone: (t) => H(t) ? t.isDark ? 10 : 100 : t.isDark ? 20 : 100,
  background: (t) => f.secondary,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.secondaryContainer = P.fromPalette({
  name: "secondary_container",
  palette: (t) => t.secondaryPalette,
  tone: (t) => {
    const e = t.isDark ? 30 : 90;
    if (H(t))
      return t.isDark ? 30 : 85;
    if (!Ue(t))
      return e;
    let l = Ss(t.secondaryPalette.hue, t.secondaryPalette.chroma, e, !t.isDark);
    return l = ll(t.secondaryPalette.getHct(l), t), l;
  },
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.secondaryContainer, f.secondary, 15, "nearer", !1)
});
f.onSecondaryContainer = P.fromPalette({
  name: "on_secondary_container",
  palette: (t) => t.secondaryPalette,
  tone: (t) => Ue(t) ? P.foregroundTone(f.secondaryContainer.tone(t), 4.5) : t.isDark ? 90 : 10,
  background: (t) => f.secondaryContainer,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.tertiary = P.fromPalette({
  name: "tertiary",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? t.isDark ? 90 : 25 : t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new de(f.tertiaryContainer, f.tertiary, 15, "nearer", !1)
});
f.onTertiary = P.fromPalette({
  name: "on_tertiary",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? t.isDark ? 10 : 90 : t.isDark ? 20 : 100,
  background: (t) => f.tertiary,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.tertiaryContainer = P.fromPalette({
  name: "tertiary_container",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => {
    if (H(t))
      return t.isDark ? 60 : 49;
    if (!Ue(t))
      return t.isDark ? 30 : 90;
    const e = ll(t.tertiaryPalette.getHct(t.sourceColorHct.tone), t), l = t.tertiaryPalette.getHct(e);
    return tl.fixIfDisliked(l).tone;
  },
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.tertiaryContainer, f.tertiary, 15, "nearer", !1)
});
f.onTertiaryContainer = P.fromPalette({
  name: "on_tertiary_container",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? t.isDark ? 0 : 100 : Ue(t) ? P.foregroundTone(f.tertiaryContainer.tone(t), 4.5) : t.isDark ? 90 : 10,
  background: (t) => f.tertiaryContainer,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.error = P.fromPalette({
  name: "error",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new de(f.errorContainer, f.error, 15, "nearer", !1)
});
f.onError = P.fromPalette({
  name: "on_error",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 20 : 100,
  background: (t) => f.error,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.errorContainer = P.fromPalette({
  name: "error_container",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 30 : 90,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.errorContainer, f.error, 15, "nearer", !1)
});
f.onErrorContainer = P.fromPalette({
  name: "on_error_container",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => f.errorContainer,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.primaryFixed = P.fromPalette({
  name: "primary_fixed",
  palette: (t) => t.primaryPalette,
  tone: (t) => H(t) ? 40 : 90,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.primaryFixed, f.primaryFixedDim, 10, "lighter", !0)
});
f.primaryFixedDim = P.fromPalette({
  name: "primary_fixed_dim",
  palette: (t) => t.primaryPalette,
  tone: (t) => H(t) ? 30 : 80,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.primaryFixed, f.primaryFixedDim, 10, "lighter", !0)
});
f.onPrimaryFixed = P.fromPalette({
  name: "on_primary_fixed",
  palette: (t) => t.primaryPalette,
  tone: (t) => H(t) ? 100 : 10,
  background: (t) => f.primaryFixedDim,
  secondBackground: (t) => f.primaryFixed,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.onPrimaryFixedVariant = P.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (t) => t.primaryPalette,
  tone: (t) => H(t) ? 90 : 30,
  background: (t) => f.primaryFixedDim,
  secondBackground: (t) => f.primaryFixed,
  contrastCurve: new S(3, 4.5, 7, 11)
});
f.secondaryFixed = P.fromPalette({
  name: "secondary_fixed",
  palette: (t) => t.secondaryPalette,
  tone: (t) => H(t) ? 80 : 90,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.secondaryFixed, f.secondaryFixedDim, 10, "lighter", !0)
});
f.secondaryFixedDim = P.fromPalette({
  name: "secondary_fixed_dim",
  palette: (t) => t.secondaryPalette,
  tone: (t) => H(t) ? 70 : 80,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.secondaryFixed, f.secondaryFixedDim, 10, "lighter", !0)
});
f.onSecondaryFixed = P.fromPalette({
  name: "on_secondary_fixed",
  palette: (t) => t.secondaryPalette,
  tone: (t) => 10,
  background: (t) => f.secondaryFixedDim,
  secondBackground: (t) => f.secondaryFixed,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.onSecondaryFixedVariant = P.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (t) => t.secondaryPalette,
  tone: (t) => H(t) ? 25 : 30,
  background: (t) => f.secondaryFixedDim,
  secondBackground: (t) => f.secondaryFixed,
  contrastCurve: new S(3, 4.5, 7, 11)
});
f.tertiaryFixed = P.fromPalette({
  name: "tertiary_fixed",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? 40 : 90,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.tertiaryFixed, f.tertiaryFixedDim, 10, "lighter", !0)
});
f.tertiaryFixedDim = P.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? 30 : 80,
  isBackground: !0,
  background: (t) => f.highestSurface(t),
  contrastCurve: new S(1, 1, 3, 7),
  toneDeltaPair: (t) => new de(f.tertiaryFixed, f.tertiaryFixedDim, 10, "lighter", !0)
});
f.onTertiaryFixed = P.fromPalette({
  name: "on_tertiary_fixed",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? 100 : 10,
  background: (t) => f.tertiaryFixedDim,
  secondBackground: (t) => f.tertiaryFixed,
  contrastCurve: new S(4.5, 7, 11, 21)
});
f.onTertiaryFixedVariant = P.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => H(t) ? 90 : 30,
  background: (t) => f.tertiaryFixedDim,
  secondBackground: (t) => f.tertiaryFixed,
  contrastCurve: new S(3, 4.5, 7, 11)
});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(e) {
    const l = V.fromInt(e);
    return ee.fromHct(l);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(e) {
    return new ee(e.hue, e.chroma, e);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(e, l) {
    return new ee(e, l, ee.createKeyColor(e, l));
  }
  constructor(e, l, r) {
    this.hue = e, this.chroma = l, this.keyColor = r, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e, l) {
    let s = V.from(e, l, 50), n = Math.abs(s.chroma - l);
    for (let o = 1; o < 50; o += 1) {
      if (Math.round(l) === Math.round(s.chroma))
        return s;
      const a = V.from(e, l, 50 + o), i = Math.abs(a.chroma - l);
      i < n && (n = i, s = a);
      const v = V.from(e, l, 50 - o), c = Math.abs(v.chroma - l);
      c < n && (n = c, s = v);
    }
    return s;
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(e) {
    let l = this.cache.get(e);
    return l === void 0 && (l = V.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, l)), l;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(e) {
    return V.fromInt(this.tone(e));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J {
  /**
   * @param argb ARGB representation of a color
   */
  static of(e) {
    return new J(e, !1);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(e) {
    return new J(e, !0);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(e) {
    return J.createPaletteFromColors(!1, e);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(e) {
    return J.createPaletteFromColors(!0, e);
  }
  static createPaletteFromColors(e, l) {
    const r = new J(l.primary, e);
    if (l.secondary) {
      const s = new J(l.secondary, e);
      r.a2 = s.a1;
    }
    if (l.tertiary) {
      const s = new J(l.tertiary, e);
      r.a3 = s.a1;
    }
    if (l.error) {
      const s = new J(l.error, e);
      r.error = s.a1;
    }
    if (l.neutral) {
      const s = new J(l.neutral, e);
      r.n1 = s.n1;
    }
    if (l.neutralVariant) {
      const s = new J(l.neutralVariant, e);
      r.n2 = s.n2;
    }
    return r;
  }
  constructor(e, l) {
    const r = V.fromInt(e), s = r.hue, n = r.chroma;
    l ? (this.a1 = ee.fromHueAndChroma(s, n), this.a2 = ee.fromHueAndChroma(s, n / 3), this.a3 = ee.fromHueAndChroma(s + 60, n / 2), this.n1 = ee.fromHueAndChroma(s, Math.min(n / 12, 4)), this.n2 = ee.fromHueAndChroma(s, Math.min(n / 6, 8))) : (this.a1 = ee.fromHueAndChroma(s, Math.max(48, n)), this.a2 = ee.fromHueAndChroma(s, 16), this.a3 = ee.fromHueAndChroma(s + 60, 24), this.n1 = ee.fromHueAndChroma(s, 4), this.n2 = ee.fromHueAndChroma(s, 8)), this.error = ee.fromHueAndChroma(25, 84);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls {
  /**
   * Convert a color represented in ARGB to a 3-element array of L*a*b*
   * coordinates of the color.
   */
  fromInt(e) {
    return Ms(e);
  }
  /**
   * Convert a 3-element array to a color represented in ARGB.
   */
  toInt(e) {
    return As(e[0], e[1], e[2]);
  }
  /**
   * Standard CIE 1976 delta E formula also takes the square root, unneeded
   * here. This method is used by quantization algorithms to compare distance,
   * and the relative ordering is the same, with or without a square root.
   *
   * This relatively minor optimization is helpful because this method is
   * called at least once for each pixel in an image.
   */
  distance(e, l) {
    const r = e[0] - l[0], s = e[1] - l[1], n = e[2] - l[2];
    return r * r + s * s + n * n;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bs = 10, js = 3;
class Gs {
  /**
   * @param inputPixels Colors in ARGB format.
   * @param startingClusters Defines the initial state of the quantizer. Passing
   *     an empty array is fine, the implementation will create its own initial
   *     state that leads to reproducible results for the same inputs.
   *     Passing an array that is the result of Wu quantization leads to higher
   *     quality results.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  static quantize(e, l, r) {
    const s = /* @__PURE__ */ new Map(), n = new Array(), o = new Array(), a = new Ls();
    let i = 0;
    for (let b = 0; b < e.length; b++) {
      const g = e[b], z = s.get(g);
      z === void 0 ? (i++, n.push(a.fromInt(g)), o.push(g), s.set(g, 1)) : s.set(g, z + 1);
    }
    const v = new Array();
    for (let b = 0; b < i; b++) {
      const g = o[b], z = s.get(g);
      z !== void 0 && (v[b] = z);
    }
    let c = Math.min(r, i);
    l.length > 0 && (c = Math.min(c, l.length));
    const u = new Array();
    for (let b = 0; b < l.length; b++)
      u.push(a.fromInt(l[b]));
    const w = c - u.length;
    if (l.length === 0 && w > 0)
      for (let b = 0; b < w; b++) {
        const g = Math.random() * 100, z = Math.random() * 201 + -100, $ = Math.random() * 201 + -100;
        u.push(new Array(g, z, $));
      }
    const d = new Array();
    for (let b = 0; b < i; b++)
      d.push(Math.floor(Math.random() * c));
    const y = new Array();
    for (let b = 0; b < c; b++) {
      y.push(new Array());
      for (let g = 0; g < c; g++)
        y[b].push(0);
    }
    const p = new Array();
    for (let b = 0; b < c; b++) {
      p.push(new Array());
      for (let g = 0; g < c; g++)
        p[b].push(new Us());
    }
    const x = new Array();
    for (let b = 0; b < c; b++)
      x.push(0);
    for (let b = 0; b < Bs; b++) {
      for (let m = 0; m < c; m++) {
        for (let I = m + 1; I < c; I++) {
          const R = a.distance(u[m], u[I]);
          p[I][m].distance = R, p[I][m].index = m, p[m][I].distance = R, p[m][I].index = I;
        }
        p[m].sort();
        for (let I = 0; I < c; I++)
          y[m][I] = p[m][I].index;
      }
      let g = 0;
      for (let m = 0; m < i; m++) {
        const I = n[m], R = d[m], T = u[R], L = a.distance(I, T);
        let E = L, U = -1;
        for (let j = 0; j < c; j++) {
          if (p[R][j].distance >= 4 * L)
            continue;
          const q = a.distance(I, u[j]);
          q < E && (E = q, U = j);
        }
        U !== -1 && Math.abs(Math.sqrt(E) - Math.sqrt(L)) > js && (g++, d[m] = U);
      }
      if (g === 0 && b !== 0)
        break;
      const z = new Array(c).fill(0), $ = new Array(c).fill(0), C = new Array(c).fill(0);
      for (let m = 0; m < c; m++)
        x[m] = 0;
      for (let m = 0; m < i; m++) {
        const I = d[m], R = n[m], T = v[m];
        x[I] += T, z[I] += R[0] * T, $[I] += R[1] * T, C[I] += R[2] * T;
      }
      for (let m = 0; m < c; m++) {
        const I = x[m];
        if (I === 0) {
          u[m] = [0, 0, 0];
          continue;
        }
        const R = z[m] / I, T = $[m] / I, L = C[m] / I;
        u[m] = [R, T, L];
      }
    }
    const h = /* @__PURE__ */ new Map();
    for (let b = 0; b < c; b++) {
      const g = x[b];
      if (g === 0)
        continue;
      const z = a.toInt(u[b]);
      h.has(z) || h.set(z, g);
    }
    return h;
  }
}
class Us {
  constructor() {
    this.distance = -1, this.index = -1;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs {
  /**
   * @param pixels Colors in ARGB format.
   * @return A Map with keys of ARGB colors, and values of the number of times
   *     the color appears in the image.
   */
  static quantize(e) {
    const l = /* @__PURE__ */ new Map();
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      Ns(s) < 255 || l.set(s, (l.get(s) ?? 0) + 1);
    }
    return l;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt = 5, fe = 33, He = 35937, se = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};
class qs {
  constructor(e = [], l = [], r = [], s = [], n = [], o = []) {
    this.weights = e, this.momentsR = l, this.momentsG = r, this.momentsB = s, this.moments = n, this.cubes = o;
  }
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  quantize(e, l) {
    this.constructHistogram(e), this.computeMoments();
    const r = this.createBoxes(l);
    return this.createResult(r.resultCount);
  }
  constructHistogram(e) {
    this.weights = Array.from({ length: He }).fill(0), this.momentsR = Array.from({ length: He }).fill(0), this.momentsG = Array.from({ length: He }).fill(0), this.momentsB = Array.from({ length: He }).fill(0), this.moments = Array.from({ length: He }).fill(0);
    const l = Hs.quantize(e);
    for (const [r, s] of l.entries()) {
      const n = ht(r), o = kt(r), a = xt(r), i = 8 - lt, v = (n >> i) + 1, c = (o >> i) + 1, u = (a >> i) + 1, w = this.getIndex(v, c, u);
      this.weights[w] = (this.weights[w] ?? 0) + s, this.momentsR[w] += s * n, this.momentsG[w] += s * o, this.momentsB[w] += s * a, this.moments[w] += s * (n * n + o * o + a * a);
    }
  }
  computeMoments() {
    for (let e = 1; e < fe; e++) {
      const l = Array.from({ length: fe }).fill(0), r = Array.from({ length: fe }).fill(0), s = Array.from({ length: fe }).fill(0), n = Array.from({ length: fe }).fill(0), o = Array.from({ length: fe }).fill(0);
      for (let a = 1; a < fe; a++) {
        let i = 0, v = 0, c = 0, u = 0, w = 0;
        for (let d = 1; d < fe; d++) {
          const y = this.getIndex(e, a, d);
          i += this.weights[y], v += this.momentsR[y], c += this.momentsG[y], u += this.momentsB[y], w += this.moments[y], l[d] += i, r[d] += v, s[d] += c, n[d] += u, o[d] += w;
          const p = this.getIndex(e - 1, a, d);
          this.weights[y] = this.weights[p] + l[d], this.momentsR[y] = this.momentsR[p] + r[d], this.momentsG[y] = this.momentsG[p] + s[d], this.momentsB[y] = this.momentsB[p] + n[d], this.moments[y] = this.moments[p] + o[d];
        }
      }
    }
  }
  createBoxes(e) {
    this.cubes = Array.from({ length: e }).fill(0).map(() => new Vs());
    const l = Array.from({ length: e }).fill(0);
    this.cubes[0].r0 = 0, this.cubes[0].g0 = 0, this.cubes[0].b0 = 0, this.cubes[0].r1 = fe - 1, this.cubes[0].g1 = fe - 1, this.cubes[0].b1 = fe - 1;
    let r = e, s = 0;
    for (let n = 1; n < e; n++) {
      this.cut(this.cubes[s], this.cubes[n]) ? (l[s] = this.cubes[s].vol > 1 ? this.variance(this.cubes[s]) : 0, l[n] = this.cubes[n].vol > 1 ? this.variance(this.cubes[n]) : 0) : (l[s] = 0, n--), s = 0;
      let o = l[0];
      for (let a = 1; a <= n; a++)
        l[a] > o && (o = l[a], s = a);
      if (o <= 0) {
        r = n + 1;
        break;
      }
    }
    return new Ws(e, r);
  }
  createResult(e) {
    const l = [];
    for (let r = 0; r < e; ++r) {
      const s = this.cubes[r], n = this.volume(s, this.weights);
      if (n > 0) {
        const o = Math.round(this.volume(s, this.momentsR) / n), a = Math.round(this.volume(s, this.momentsG) / n), i = Math.round(this.volume(s, this.momentsB) / n), v = 255 << 24 | (o & 255) << 16 | (a & 255) << 8 | i & 255;
        l.push(v);
      }
    }
    return l;
  }
  variance(e) {
    const l = this.volume(e, this.momentsR), r = this.volume(e, this.momentsG), s = this.volume(e, this.momentsB), n = this.moments[this.getIndex(e.r1, e.g1, e.b1)] - this.moments[this.getIndex(e.r1, e.g1, e.b0)] - this.moments[this.getIndex(e.r1, e.g0, e.b1)] + this.moments[this.getIndex(e.r1, e.g0, e.b0)] - this.moments[this.getIndex(e.r0, e.g1, e.b1)] + this.moments[this.getIndex(e.r0, e.g1, e.b0)] + this.moments[this.getIndex(e.r0, e.g0, e.b1)] - this.moments[this.getIndex(e.r0, e.g0, e.b0)], o = l * l + r * r + s * s, a = this.volume(e, this.weights);
    return n - o / a;
  }
  cut(e, l) {
    const r = this.volume(e, this.momentsR), s = this.volume(e, this.momentsG), n = this.volume(e, this.momentsB), o = this.volume(e, this.weights), a = this.maximize(e, se.RED, e.r0 + 1, e.r1, r, s, n, o), i = this.maximize(e, se.GREEN, e.g0 + 1, e.g1, r, s, n, o), v = this.maximize(e, se.BLUE, e.b0 + 1, e.b1, r, s, n, o);
    let c;
    const u = a.maximum, w = i.maximum, d = v.maximum;
    if (u >= w && u >= d) {
      if (a.cutLocation < 0)
        return !1;
      c = se.RED;
    } else
      w >= u && w >= d ? c = se.GREEN : c = se.BLUE;
    switch (l.r1 = e.r1, l.g1 = e.g1, l.b1 = e.b1, c) {
      case se.RED:
        e.r1 = a.cutLocation, l.r0 = e.r1, l.g0 = e.g0, l.b0 = e.b0;
        break;
      case se.GREEN:
        e.g1 = i.cutLocation, l.r0 = e.r0, l.g0 = e.g1, l.b0 = e.b0;
        break;
      case se.BLUE:
        e.b1 = v.cutLocation, l.r0 = e.r0, l.g0 = e.g0, l.b0 = e.b1;
        break;
      default:
        throw new Error("unexpected direction " + c);
    }
    return e.vol = (e.r1 - e.r0) * (e.g1 - e.g0) * (e.b1 - e.b0), l.vol = (l.r1 - l.r0) * (l.g1 - l.g0) * (l.b1 - l.b0), !0;
  }
  maximize(e, l, r, s, n, o, a, i) {
    const v = this.bottom(e, l, this.momentsR), c = this.bottom(e, l, this.momentsG), u = this.bottom(e, l, this.momentsB), w = this.bottom(e, l, this.weights);
    let d = 0, y = -1, p = 0, x = 0, h = 0, b = 0;
    for (let g = r; g < s; g++) {
      if (p = v + this.top(e, l, g, this.momentsR), x = c + this.top(e, l, g, this.momentsG), h = u + this.top(e, l, g, this.momentsB), b = w + this.top(e, l, g, this.weights), b === 0)
        continue;
      let z = (p * p + x * x + h * h) * 1, $ = b * 1, C = z / $;
      p = n - p, x = o - x, h = a - h, b = i - b, b !== 0 && (z = (p * p + x * x + h * h) * 1, $ = b * 1, C += z / $, C > d && (d = C, y = g));
    }
    return new Ys(y, d);
  }
  volume(e, l) {
    return l[this.getIndex(e.r1, e.g1, e.b1)] - l[this.getIndex(e.r1, e.g1, e.b0)] - l[this.getIndex(e.r1, e.g0, e.b1)] + l[this.getIndex(e.r1, e.g0, e.b0)] - l[this.getIndex(e.r0, e.g1, e.b1)] + l[this.getIndex(e.r0, e.g1, e.b0)] + l[this.getIndex(e.r0, e.g0, e.b1)] - l[this.getIndex(e.r0, e.g0, e.b0)];
  }
  bottom(e, l, r) {
    switch (l) {
      case se.RED:
        return -r[this.getIndex(e.r0, e.g1, e.b1)] + r[this.getIndex(e.r0, e.g1, e.b0)] + r[this.getIndex(e.r0, e.g0, e.b1)] - r[this.getIndex(e.r0, e.g0, e.b0)];
      case se.GREEN:
        return -r[this.getIndex(e.r1, e.g0, e.b1)] + r[this.getIndex(e.r1, e.g0, e.b0)] + r[this.getIndex(e.r0, e.g0, e.b1)] - r[this.getIndex(e.r0, e.g0, e.b0)];
      case se.BLUE:
        return -r[this.getIndex(e.r1, e.g1, e.b0)] + r[this.getIndex(e.r1, e.g0, e.b0)] + r[this.getIndex(e.r0, e.g1, e.b0)] - r[this.getIndex(e.r0, e.g0, e.b0)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  top(e, l, r, s) {
    switch (l) {
      case se.RED:
        return s[this.getIndex(r, e.g1, e.b1)] - s[this.getIndex(r, e.g1, e.b0)] - s[this.getIndex(r, e.g0, e.b1)] + s[this.getIndex(r, e.g0, e.b0)];
      case se.GREEN:
        return s[this.getIndex(e.r1, r, e.b1)] - s[this.getIndex(e.r1, r, e.b0)] - s[this.getIndex(e.r0, r, e.b1)] + s[this.getIndex(e.r0, r, e.b0)];
      case se.BLUE:
        return s[this.getIndex(e.r1, e.g1, r)] - s[this.getIndex(e.r1, e.g0, r)] - s[this.getIndex(e.r0, e.g1, r)] + s[this.getIndex(e.r0, e.g0, r)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  getIndex(e, l, r) {
    return (e << lt * 2) + (e << lt + 1) + e + (l << lt) + l + r;
  }
}
class Vs {
  constructor(e = 0, l = 0, r = 0, s = 0, n = 0, o = 0, a = 0) {
    this.r0 = e, this.r1 = l, this.g0 = r, this.g1 = s, this.b0 = n, this.b1 = o, this.vol = a;
  }
}
class Ws {
  /**
   * @param requestedCount how many colors the caller asked to be returned from
   *     quantization.
   * @param resultCount the actual number of colors achieved from quantization.
   *     May be lower than the requested count.
   */
  constructor(e, l) {
    this.requestedCount = e, this.resultCount = l;
  }
}
class Ys {
  constructor(e, l) {
    this.cutLocation = e, this.maximum = l;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks {
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Map with keys of colors in ARGB format, and values of number of
   *     pixels in the original image that correspond to the color in the
   *     quantized image.
   */
  static quantize(e, l) {
    const s = new qs().quantize(e, l);
    return Gs.quantize(e, s, l);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe {
  get primary() {
    return this.props.primary;
  }
  get onPrimary() {
    return this.props.onPrimary;
  }
  get primaryContainer() {
    return this.props.primaryContainer;
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer;
  }
  get secondary() {
    return this.props.secondary;
  }
  get onSecondary() {
    return this.props.onSecondary;
  }
  get secondaryContainer() {
    return this.props.secondaryContainer;
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer;
  }
  get tertiary() {
    return this.props.tertiary;
  }
  get onTertiary() {
    return this.props.onTertiary;
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer;
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer;
  }
  get error() {
    return this.props.error;
  }
  get onError() {
    return this.props.onError;
  }
  get errorContainer() {
    return this.props.errorContainer;
  }
  get onErrorContainer() {
    return this.props.onErrorContainer;
  }
  get background() {
    return this.props.background;
  }
  get onBackground() {
    return this.props.onBackground;
  }
  get surface() {
    return this.props.surface;
  }
  get onSurface() {
    return this.props.onSurface;
  }
  get surfaceVariant() {
    return this.props.surfaceVariant;
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant;
  }
  get outline() {
    return this.props.outline;
  }
  get outlineVariant() {
    return this.props.outlineVariant;
  }
  get shadow() {
    return this.props.shadow;
  }
  get scrim() {
    return this.props.scrim;
  }
  get inverseSurface() {
    return this.props.inverseSurface;
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface;
  }
  get inversePrimary() {
    return this.props.inversePrimary;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material color scheme, based on the color's hue.
   */
  static light(e) {
    return Pe.lightFromCorePalette(J.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(e) {
    return Pe.darkFromCorePalette(J.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(e) {
    return Pe.lightFromCorePalette(J.contentOf(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(e) {
    return Pe.darkFromCorePalette(J.contentOf(e));
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(e) {
    return new Pe({
      primary: e.a1.tone(40),
      onPrimary: e.a1.tone(100),
      primaryContainer: e.a1.tone(90),
      onPrimaryContainer: e.a1.tone(10),
      secondary: e.a2.tone(40),
      onSecondary: e.a2.tone(100),
      secondaryContainer: e.a2.tone(90),
      onSecondaryContainer: e.a2.tone(10),
      tertiary: e.a3.tone(40),
      onTertiary: e.a3.tone(100),
      tertiaryContainer: e.a3.tone(90),
      onTertiaryContainer: e.a3.tone(10),
      error: e.error.tone(40),
      onError: e.error.tone(100),
      errorContainer: e.error.tone(90),
      onErrorContainer: e.error.tone(10),
      background: e.n1.tone(99),
      onBackground: e.n1.tone(10),
      surface: e.n1.tone(99),
      onSurface: e.n1.tone(10),
      surfaceVariant: e.n2.tone(90),
      onSurfaceVariant: e.n2.tone(30),
      outline: e.n2.tone(50),
      outlineVariant: e.n2.tone(80),
      shadow: e.n1.tone(0),
      scrim: e.n1.tone(0),
      inverseSurface: e.n1.tone(20),
      inverseOnSurface: e.n1.tone(95),
      inversePrimary: e.a1.tone(80)
    });
  }
  /**
   * Dark scheme from core palette
   */
  static darkFromCorePalette(e) {
    return new Pe({
      primary: e.a1.tone(80),
      onPrimary: e.a1.tone(20),
      primaryContainer: e.a1.tone(30),
      onPrimaryContainer: e.a1.tone(90),
      secondary: e.a2.tone(80),
      onSecondary: e.a2.tone(20),
      secondaryContainer: e.a2.tone(30),
      onSecondaryContainer: e.a2.tone(90),
      tertiary: e.a3.tone(80),
      onTertiary: e.a3.tone(20),
      tertiaryContainer: e.a3.tone(30),
      onTertiaryContainer: e.a3.tone(90),
      error: e.error.tone(80),
      onError: e.error.tone(20),
      errorContainer: e.error.tone(30),
      onErrorContainer: e.error.tone(80),
      background: e.n1.tone(10),
      onBackground: e.n1.tone(90),
      surface: e.n1.tone(10),
      onSurface: e.n1.tone(90),
      surfaceVariant: e.n2.tone(30),
      onSurfaceVariant: e.n2.tone(80),
      outline: e.n2.tone(60),
      outlineVariant: e.n2.tone(30),
      shadow: e.n1.tone(0),
      scrim: e.n1.tone(0),
      inverseSurface: e.n1.tone(90),
      inverseOnSurface: e.n1.tone(20),
      inversePrimary: e.a1.tone(40)
    });
  }
  constructor(e) {
    this.props = e;
  }
  toJSON() {
    return {
      ...this.props
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xs = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: !0
  // Avoid unsuitable colors.
};
function Zs(t, e) {
  return t.score > e.score ? -1 : t.score < e.score ? 1 : 0;
}
class ne {
  constructor() {
  }
  /**
   * Given a map with keys of colors and values of how often the color appears,
   * rank the colors based on suitability for being used for a UI theme.
   *
   * @param colorsToPopulation map with keys of colors and values of how often
   *     the color appears, usually from a source image.
   * @param {ScoreOptions} options optional parameters.
   * @return Colors sorted by suitability for a UI theme. The most suitable
   *     color is the first item, the least suitable is the last. There will
   *     always be at least one color returned. If all the input colors
   *     were not suitable for a theme, a default fallback color will be
   *     provided, Google Blue.
   */
  static score(e, l) {
    const { desired: r, fallbackColorARGB: s, filter: n } = { ...Xs, ...l }, o = [], a = new Array(360).fill(0);
    let i = 0;
    for (const [d, y] of e.entries()) {
      const p = V.fromInt(d);
      o.push(p);
      const x = Math.floor(p.hue);
      a[x] += y, i += y;
    }
    const v = new Array(360).fill(0);
    for (let d = 0; d < 360; d++) {
      const y = a[d] / i;
      for (let p = d - 14; p < d + 16; p++) {
        const x = fl(p);
        v[x] += y;
      }
    }
    const c = new Array();
    for (const d of o) {
      const y = fl(Math.round(d.hue)), p = v[y];
      if (n && (d.chroma < ne.CUTOFF_CHROMA || p <= ne.CUTOFF_EXCITED_PROPORTION))
        continue;
      const x = p * 100 * ne.WEIGHT_PROPORTION, h = d.chroma < ne.TARGET_CHROMA ? ne.WEIGHT_CHROMA_BELOW : ne.WEIGHT_CHROMA_ABOVE, b = (d.chroma - ne.TARGET_CHROMA) * h, g = x + b;
      c.push({ hct: d, score: g });
    }
    c.sort(Zs);
    const u = [];
    for (let d = 90; d >= 15; d--) {
      u.length = 0;
      for (const { hct: y } of c)
        if (u.find((x) => Er(y.hue, x.hue) < d) || u.push(y), u.length >= r)
          break;
      if (u.length >= r)
        break;
    }
    const w = [];
    u.length === 0 && w.push(s);
    for (const d of u)
      w.push(d.toInt());
    return w;
  }
}
ne.TARGET_CHROMA = 48;
ne.WEIGHT_PROPORTION = 0.7;
ne.WEIGHT_CHROMA_ABOVE = 0.3;
ne.WEIGHT_CHROMA_BELOW = 0.1;
ne.CUTOFF_CHROMA = 5;
ne.CUTOFF_EXCITED_PROPORTION = 0.01;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t) {
  const e = ht(t), l = kt(t), r = xt(t), s = [e.toString(16), l.toString(16), r.toString(16)];
  for (const [n, o] of s.entries())
    o.length === 1 && (s[n] = "0" + o);
  return "#" + s.join("");
}
function Js(t) {
  t = t.replace("#", "");
  const e = t.length === 3, l = t.length === 6, r = t.length === 8;
  if (!e && !l && !r)
    throw new Error("unexpected hex " + t);
  let s = 0, n = 0, o = 0;
  return e ? (s = xe(t.slice(0, 1).repeat(2)), n = xe(t.slice(1, 2).repeat(2)), o = xe(t.slice(2, 3).repeat(2))) : l ? (s = xe(t.slice(0, 2)), n = xe(t.slice(2, 4)), o = xe(t.slice(4, 6))) : r && (s = xe(t.slice(2, 4)), n = xe(t.slice(4, 6)), o = xe(t.slice(6, 8))), (255 << 24 | (s & 255) << 16 | (n & 255) << 8 | o & 255) >>> 0;
}
function xe(t) {
  return parseInt(t, 16);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qs(t) {
  const e = await new Promise((o, a) => {
    const i = document.createElement("canvas"), v = i.getContext("2d");
    if (!v) {
      a(new Error("Could not get canvas context"));
      return;
    }
    const c = () => {
      i.width = t.width, i.height = t.height, v.drawImage(t, 0, 0);
      let u = [0, 0, t.width, t.height];
      const w = t.dataset.area;
      w && /^\d+(\s*,\s*\d+){3}$/.test(w) && (u = w.split(/\s*,\s*/).map((h) => parseInt(h, 10)));
      const [d, y, p, x] = u;
      o(v.getImageData(d, y, p, x).data);
    };
    t.complete ? c() : t.onload = c;
  }), l = [];
  for (let o = 0; o < e.length; o += 4) {
    const a = e[o], i = e[o + 1], v = e[o + 2];
    if (e[o + 3] < 255)
      continue;
    const u = $t(a, i, v);
    l.push(u);
  }
  const r = Ks.quantize(l, 128);
  return ne.score(r)[0];
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(t, e = []) {
  const l = J.of(t);
  return {
    source: t,
    schemes: {
      light: Pe.light(t),
      dark: Pe.dark(t)
    },
    palettes: {
      primary: l.a1,
      secondary: l.a2,
      tertiary: l.a3,
      neutral: l.n1,
      neutralVariant: l.n2,
      error: l.error
    },
    customColors: e.map((r) => en(t, r))
  };
}
async function pl(t, e = []) {
  const l = await Qs(t);
  return Tr(l, e);
}
function en(t, e) {
  let l = e.value;
  const r = l, s = t;
  e.blend && (l = el.harmonize(r, s));
  const o = J.of(l).a1;
  return {
    color: e,
    value: l,
    light: {
      color: o.tone(40),
      onColor: o.tone(100),
      colorContainer: o.tone(90),
      onColorContainer: o.tone(10)
    },
    dark: {
      color: o.tone(80),
      onColor: o.tone(20),
      colorContainer: o.tone(30),
      onColorContainer: o.tone(90)
    }
  };
}
function Ot(t) {
  let e = JSON.parse(JSON.stringify(t.schemes));
  for (let l in e)
    for (let r in e[l])
      e[l][r] = G(e[l][r]);
  return e.dark.surfaceDim = G(t.palettes.neutral.tone(6)), e.dark.surface = G(t.palettes.neutral.tone(6)), e.dark.surfaceBright = G(t.palettes.neutral.tone(24)), e.dark.surfaceContainerLowest = G(t.palettes.neutral.tone(4)), e.dark.surfaceContainerLow = G(t.palettes.neutral.tone(10)), e.dark.surfaceContainer = G(t.palettes.neutral.tone(12)), e.dark.surfaceContainerHigh = G(t.palettes.neutral.tone(17)), e.dark.surfaceContainerHighest = G(t.palettes.neutral.tone(22)), e.dark.onSurface = G(t.palettes.neutral.tone(90)), e.dark.onSurfaceVariant = G(t.palettes.neutralVariant.tone(80)), e.dark.outline = G(t.palettes.neutralVariant.tone(60)), e.dark.outlineVariant = G(t.palettes.neutralVariant.tone(30)), e.light.surfaceDim = G(t.palettes.neutral.tone(87)), e.light.surface = G(t.palettes.neutral.tone(98)), e.light.surfaceBright = G(t.palettes.neutral.tone(98)), e.light.surfaceContainerLowest = G(t.palettes.neutral.tone(100)), e.light.surfaceContainerLow = G(t.palettes.neutral.tone(96)), e.light.surfaceContainer = G(t.palettes.neutral.tone(94)), e.light.surfaceContainerHigh = G(t.palettes.neutral.tone(92)), e.light.surfaceContainerHighest = G(t.palettes.neutral.tone(90)), e.light.onSurface = G(t.palettes.neutral.tone(10)), e.light.onSurfaceVariant = G(t.palettes.neutralVariant.tone(30)), e.light.outline = G(t.palettes.neutralVariant.tone(50)), e.light.outlineVariant = G(t.palettes.neutralVariant.tone(80)), e;
}
async function tn(t) {
  const e = t, l = {
    light: {},
    dark: {}
  };
  try {
    if (typeof e == "string" && /^\#[0-9a-f]+$/i.test(e)) {
      let o = Tr(Js(e));
      return Ot(o);
    }
    if (e.src) {
      let o = await pl(e);
      return Ot(o);
    }
    let r = new Blob();
    if (typeof e == "string" && (r = await fetch(e).then((o) => o.blob())), e.size && (r = e), e.files && e.files[0] && (r = e.files[0]), e.target && e.target.files && e.target.files[0] && (r = e.target.files[0]), !r.size)
      return l;
    let s = new Image(64);
    s.src = URL.createObjectURL(r);
    let n = await pl(s);
    return Ot(n);
  } catch {
    return l;
  }
}
globalThis.materialDynamicColors = tn;
const ln = globalThis.materialDynamicColors, rn = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[2378]\\d|62|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|73020\\d)\\d{4}|(?:4722|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function sn(t, e) {
  var l = Array.prototype.slice.call(e);
  return l.push(rn), t.apply(this, l);
}
function Rt(t) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rt(t);
}
function bl(t, e) {
  for (var l = 0; l < e.length; l++) {
    var r = e[l];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function nn(t, e, l) {
  return e && bl(t.prototype, e), l && bl(t, l), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function on(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function an(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ze(t, e);
}
function vn(t) {
  var e = Mr();
  return function() {
    var r = Je(t), s;
    if (e) {
      var n = Je(this).constructor;
      s = Reflect.construct(r, arguments, n);
    } else
      s = r.apply(this, arguments);
    return dn(this, s);
  };
}
function dn(t, e) {
  if (e && (Rt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ar(t);
}
function Ar(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Lt(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Lt = function(r) {
    if (r === null || !cn(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, s);
    }
    function s() {
      return at(r, arguments, Je(this).constructor);
    }
    return s.prototype = Object.create(r.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), Ze(s, r);
  }, Lt(t);
}
function at(t, e, l) {
  return Mr() ? at = Reflect.construct : at = function(s, n, o) {
    var a = [null];
    a.push.apply(a, n);
    var i = Function.bind.apply(s, a), v = new i();
    return o && Ze(v, o.prototype), v;
  }, at.apply(null, arguments);
}
function Mr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cn(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Ze(t, e) {
  return Ze = Object.setPrototypeOf || function(r, s) {
    return r.__proto__ = s, r;
  }, Ze(t, e);
}
function Je(t) {
  return Je = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
    return l.__proto__ || Object.getPrototypeOf(l);
  }, Je(t);
}
var ze = /* @__PURE__ */ function(t) {
  an(l, t);
  var e = vn(l);
  function l(r) {
    var s;
    return on(this, l), s = e.call(this, r), Object.setPrototypeOf(Ar(s), l.prototype), s.name = s.constructor.name, s;
  }
  return nn(l);
}(/* @__PURE__ */ Lt(Error)), rl = 2, un = 17, yn = 3, be = "0-9０-９٠-٩۰-۹", wn = "-‐-―−ー－", fn = "／/", mn = "．.", pn = "  ­​⁠　", bn = "()（）［］\\[\\]", gn = "~⁓∼～", mt = "".concat(wn).concat(fn).concat(mn).concat(pn).concat(bn).concat(gn), sl = "+＋";
function gl(t, e) {
  t = t.split("-"), e = e.split("-");
  for (var l = t[0].split("."), r = e[0].split("."), s = 0; s < 3; s++) {
    var n = Number(l[s]), o = Number(r[s]);
    if (n > o)
      return 1;
    if (o > n)
      return -1;
    if (!isNaN(n) && isNaN(o))
      return 1;
    if (isNaN(n) && !isNaN(o))
      return -1;
  }
  return t[1] && e[1] ? t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : 0 : !t[1] && e[1] ? 1 : t[1] && !e[1] ? -1 : 0;
}
var $n = {}.constructor;
function it(t) {
  return t != null && t.constructor === $n;
}
function Bt(t) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bt(t);
}
function _t(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $l(t, e) {
  for (var l = 0; l < e.length; l++) {
    var r = e[l];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Pt(t, e, l) {
  return e && $l(t.prototype, e), l && $l(t, l), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var hn = "1.2.0", kn = "1.7.35", hl = " ext. ", xn = /^\d+$/, oe = /* @__PURE__ */ function() {
  function t(e) {
    _t(this, t), Cn(e), this.metadata = e, Fr.call(this, e);
  }
  return Pt(t, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(l) {
        return l !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(l) {
      return this.metadata.countries[l];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(l) {
      return this.getCountryMetadata(l) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(l) {
      if (this.getCountryCodesForCallingCode(l))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[l])
          return !0;
      } else {
        var r = this.countryCallingCodes()[l];
        if (r && r.length === 1 && r[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(l) {
      return this.nonGeographic() ? !!this.nonGeographic()[l] : !this.getCountryCodesForCallingCode(l);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(l) {
      return this.selectNumberingPlan(l);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(l, r) {
      if (l && xn.test(l) && (r = l, l = null), l && l !== "001") {
        if (!this.hasCountry(l))
          throw new Error("Unknown country: ".concat(l));
        this.numberingPlan = new kl(this.getCountryMetadata(l), this);
      } else if (r) {
        if (!this.hasCallingCode(r))
          throw new Error("Unknown calling code: ".concat(r));
        this.numberingPlan = new kl(this.getNumberingPlanMetadata(r), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(l) {
      var r = this.countryCallingCodes()[l];
      if (r)
        return r.length === 1 && r[0].length === 3 ? void 0 : r;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(l) {
      var r = this.getCountryCodesForCallingCode(l);
      if (r)
        return r[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(l) {
      var r = this.getCountryCodeForCallingCode(l);
      if (r)
        return this.getCountryMetadata(r);
      if (this.nonGeographic()) {
        var s = this.nonGeographic()[l];
        if (s)
          return s;
      } else {
        var n = this.countryCallingCodes()[l];
        if (n && n.length === 1 && n[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(l) {
      return this.numberingPlan.type(l);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(l) {
      return this.selectNumberingPlan(l);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), t;
}(), kl = /* @__PURE__ */ function() {
  function t(e, l) {
    _t(this, t), this.globalMetadataObject = l, this.metadata = e, Fr.call(this, l.metadata);
  }
  return Pt(t, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(l) {
      return l[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var l = this, r = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return r.map(function(s) {
        return new _n(s, l);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(l) {
      return l[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(l) {
      if (this.hasTypes() && xl(this.types(), l))
        return new zn(xl(this.types(), l), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? hl : this.metadata[13] || hl;
    }
  }]), t;
}(), _n = /* @__PURE__ */ function() {
  function t(e, l) {
    _t(this, t), this._format = e, this.metadata = l;
  }
  return Pt(t, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !Pn.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), t;
}(), Pn = /^\(?\$1\)?$/, zn = /* @__PURE__ */ function() {
  function t(e, l) {
    _t(this, t), this.type = e, this.metadata = l;
  }
  return Pt(t, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), t;
}();
function xl(t, e) {
  switch (e) {
    case "FIXED_LINE":
      return t[0];
    case "MOBILE":
      return t[1];
    case "TOLL_FREE":
      return t[2];
    case "PREMIUM_RATE":
      return t[3];
    case "PERSONAL_NUMBER":
      return t[4];
    case "VOICEMAIL":
      return t[5];
    case "UAN":
      return t[6];
    case "PAGER":
      return t[7];
    case "VOIP":
      return t[8];
    case "SHARED_COST":
      return t[9];
  }
}
function Cn(t) {
  if (!t)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!it(t) || !it(t.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(it(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + In(t) + ": " + t, "."));
}
var In = function(e) {
  return Bt(e);
};
function nl(t, e) {
  if (e = new oe(e), e.hasCountry(t))
    return e.country(t).countryCallingCode();
  throw new Error("Unknown country: ".concat(t));
}
function En(t, e) {
  return e.countries.hasOwnProperty(t);
}
function Fr(t) {
  var e = t.version;
  typeof e == "number" ? (this.v1 = e === 1, this.v2 = e === 2, this.v3 = e === 3, this.v4 = e === 4) : e ? gl(e, hn) === -1 ? this.v2 = !0 : gl(e, kn) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var On = ";ext=", Le = function(e) {
  return "([".concat(be, "]{1,").concat(e, "})");
};
function Dr(t) {
  var e = "20", l = "15", r = "9", s = "6", n = "[  \\t,]*", o = "[:\\.．]?[  \\t,-]*", a = "#?", i = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", v = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", u = "[  \\t]*", w = "(?:,{2}|;)", d = On + Le(e), y = n + i + o + Le(e) + a, p = n + v + o + Le(r) + a, x = c + Le(s) + "#", h = u + w + o + Le(l) + a, b = u + "(?:,)+" + o + Le(r) + a;
  return d + "|" + y + "|" + p + "|" + x + "|" + h + "|" + b;
}
var Nn = "[" + be + "]{" + rl + "}", Tn = "[" + sl + "]{0,1}(?:[" + mt + "]*[" + be + "]){3,}[" + mt + be + "]*", An = new RegExp("^[" + sl + "]{0,1}(?:[" + mt + "]*[" + be + "]){1,2}$", "i"), Mn = Tn + // Phone number extensions
"(?:" + Dr() + ")?", Fn = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Nn + "$|^" + Mn + "$",
  "i"
);
function Dn(t) {
  return t.length >= rl && Fn.test(t);
}
function Sn(t) {
  return An.test(t);
}
var _l = new RegExp("(?:" + Dr() + ")$", "i");
function Rn(t) {
  var e = t.search(_l);
  if (e < 0)
    return {};
  for (var l = t.slice(0, e), r = t.match(_l), s = 1; s < r.length; ) {
    if (r[s])
      return {
        number: l,
        ext: r[s]
      };
    s++;
  }
}
var Ln = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function Bn(t) {
  return Ln[t];
}
function jn(t, e) {
  var l = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (l)
    return (l = l.call(t)).next.bind(l);
  if (Array.isArray(t) || (l = Gn(t)) || e && t && typeof t.length == "number") {
    l && (t = l);
    var r = 0;
    return function() {
      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gn(t, e) {
  if (t) {
    if (typeof t == "string")
      return Pl(t, e);
    var l = Object.prototype.toString.call(t).slice(8, -1);
    if (l === "Object" && t.constructor && (l = t.constructor.name), l === "Map" || l === "Set")
      return Array.from(t);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return Pl(t, e);
  }
}
function Pl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var l = 0, r = new Array(e); l < e; l++)
    r[l] = t[l];
  return r;
}
function zl(t) {
  for (var e = "", l = jn(t.split("")), r; !(r = l()).done; ) {
    var s = r.value;
    e += Un(s, e) || "";
  }
  return e;
}
function Un(t, e) {
  return t === "+" ? e ? void 0 : "+" : Bn(t);
}
function Hn(t, e) {
  var l = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (l)
    return (l = l.call(t)).next.bind(l);
  if (Array.isArray(t) || (l = qn(t)) || e && t && typeof t.length == "number") {
    l && (t = l);
    var r = 0;
    return function() {
      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qn(t, e) {
  if (t) {
    if (typeof t == "string")
      return Cl(t, e);
    var l = Object.prototype.toString.call(t).slice(8, -1);
    if (l === "Object" && t.constructor && (l = t.constructor.name), l === "Map" || l === "Set")
      return Array.from(t);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return Cl(t, e);
  }
}
function Cl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var l = 0, r = new Array(e); l < e; l++)
    r[l] = t[l];
  return r;
}
function Vn(t, e) {
  for (var l = t.slice(), r = Hn(e), s; !(s = r()).done; ) {
    var n = s.value;
    t.indexOf(n) < 0 && l.push(n);
  }
  return l.sort(function(o, a) {
    return o - a;
  });
}
function ol(t, e) {
  return Sr(t, void 0, e);
}
function Sr(t, e, l) {
  var r = l.type(e), s = r && r.possibleLengths() || l.possibleLengths();
  if (!s)
    return "IS_POSSIBLE";
  if (e === "FIXED_LINE_OR_MOBILE") {
    if (!l.type("FIXED_LINE"))
      return Sr(t, "MOBILE", l);
    var n = l.type("MOBILE");
    n && (s = Vn(s, n.possibleLengths()));
  } else if (e && !r)
    return "INVALID_LENGTH";
  var o = t.length, a = s[0];
  return a === o ? "IS_POSSIBLE" : a > o ? "TOO_SHORT" : s[s.length - 1] < o ? "TOO_LONG" : s.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Wn(t, e, l) {
  if (e === void 0 && (e = {}), l = new oe(l), e.v2) {
    if (!t.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    l.selectNumberingPlan(t.countryCallingCode);
  } else {
    if (!t.phone)
      return !1;
    if (t.country) {
      if (!l.hasCountry(t.country))
        throw new Error("Unknown country: ".concat(t.country));
      l.country(t.country);
    } else {
      if (!t.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      l.selectNumberingPlan(t.countryCallingCode);
    }
  }
  if (l.possibleLengths())
    return Rr(t.phone || t.nationalNumber, l);
  if (t.countryCallingCode && l.isNonGeographicCallingCode(t.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Rr(t, e) {
  switch (ol(t, e)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function Ee(t, e) {
  return t = t || "", new RegExp("^(?:" + e + ")$").test(t);
}
function Yn(t, e) {
  var l = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (l)
    return (l = l.call(t)).next.bind(l);
  if (Array.isArray(t) || (l = Kn(t)) || e && t && typeof t.length == "number") {
    l && (t = l);
    var r = 0;
    return function() {
      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kn(t, e) {
  if (t) {
    if (typeof t == "string")
      return Il(t, e);
    var l = Object.prototype.toString.call(t).slice(8, -1);
    if (l === "Object" && t.constructor && (l = t.constructor.name), l === "Map" || l === "Set")
      return Array.from(t);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return Il(t, e);
  }
}
function Il(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var l = 0, r = new Array(e); l < e; l++)
    r[l] = t[l];
  return r;
}
var Xn = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function al(t, e, l) {
  if (e = e || {}, !(!t.country && !t.countryCallingCode)) {
    l = new oe(l), l.selectNumberingPlan(t.country, t.countryCallingCode);
    var r = e.v2 ? t.nationalNumber : t.phone;
    if (Ee(r, l.nationalNumberPattern())) {
      if (Nt(r, "FIXED_LINE", l))
        return l.type("MOBILE") && l.type("MOBILE").pattern() === "" || !l.type("MOBILE") || Nt(r, "MOBILE", l) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var s = Yn(Xn), n; !(n = s()).done; ) {
        var o = n.value;
        if (Nt(r, o, l))
          return o;
      }
    }
  }
}
function Nt(t, e, l) {
  return e = l.type(e), !e || !e.pattern() || e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0 ? !1 : Ee(t, e.pattern());
}
function Zn(t, e, l) {
  if (e = e || {}, l = new oe(l), l.selectNumberingPlan(t.country, t.countryCallingCode), l.hasTypes())
    return al(t, e, l.metadata) !== void 0;
  var r = e.v2 ? t.nationalNumber : t.phone;
  return Ee(r, l.nationalNumberPattern());
}
function Jn(t, e, l) {
  var r = new oe(l), s = r.getCountryCodesForCallingCode(t);
  return s ? s.filter(function(n) {
    return Qn(e, n, l);
  }) : [];
}
function Qn(t, e, l) {
  var r = new oe(l);
  return r.selectNumberingPlan(e), r.numberingPlan.possibleLengths().indexOf(t.length) >= 0;
}
function eo(t) {
  return t.replace(new RegExp("[".concat(mt, "]+"), "g"), " ").trim();
}
var to = /(\$\d)/;
function lo(t, e, l) {
  var r = l.useInternationalFormat, s = l.withNationalPrefix;
  l.carrierCode, l.metadata;
  var n = t.replace(new RegExp(e.pattern()), r ? e.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    s && e.nationalPrefixFormattingRule() ? e.format().replace(to, e.nationalPrefixFormattingRule()) : e.format()
  ));
  return r ? eo(n) : n;
}
var ro = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function so(t, e, l) {
  var r = new oe(l);
  if (r.selectNumberingPlan(t, e), r.defaultIDDPrefix())
    return r.defaultIDDPrefix();
  if (ro.test(r.IDDPrefix()))
    return r.IDDPrefix();
}
function no(t) {
  var e = t.number, l = t.ext;
  if (!e)
    return "";
  if (e[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(e).concat(l ? ";ext=" + l : "");
}
function oo(t, e) {
  var l = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (l)
    return (l = l.call(t)).next.bind(l);
  if (Array.isArray(t) || (l = ao(t)) || e && t && typeof t.length == "number") {
    l && (t = l);
    var r = 0;
    return function() {
      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ao(t, e) {
  if (t) {
    if (typeof t == "string")
      return El(t, e);
    var l = Object.prototype.toString.call(t).slice(8, -1);
    if (l === "Object" && t.constructor && (l = t.constructor.name), l === "Map" || l === "Set")
      return Array.from(t);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return El(t, e);
  }
}
function El(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var l = 0, r = new Array(e); l < e; l++)
    r[l] = t[l];
  return r;
}
function Ol(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function Nl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ol(Object(l), !0).forEach(function(r) {
      io(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : Ol(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function io(t, e, l) {
  return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
var Tl = {
  formatExtension: function(e, l, r) {
    return "".concat(e).concat(r.ext()).concat(l);
  }
};
function vo(t, e, l, r) {
  if (l ? l = Nl(Nl({}, Tl), l) : l = Tl, r = new oe(r), t.country && t.country !== "001") {
    if (!r.hasCountry(t.country))
      throw new Error("Unknown country: ".concat(t.country));
    r.country(t.country);
  } else if (t.countryCallingCode)
    r.selectNumberingPlan(t.countryCallingCode);
  else
    return t.phone || "";
  var s = r.countryCallingCode(), n = l.v2 ? t.nationalNumber : t.phone, o;
  switch (e) {
    case "NATIONAL":
      return n ? (o = pt(n, t.carrierCode, "NATIONAL", r, l), Tt(o, t.ext, r, l.formatExtension)) : "";
    case "INTERNATIONAL":
      return n ? (o = pt(n, null, "INTERNATIONAL", r, l), o = "+".concat(s, " ").concat(o), Tt(o, t.ext, r, l.formatExtension)) : "+".concat(s);
    case "E.164":
      return "+".concat(s).concat(n);
    case "RFC3966":
      return no({
        number: "+".concat(s).concat(n),
        ext: t.ext
      });
    case "IDD":
      if (!l.fromCountry)
        return;
      var a = uo(n, t.carrierCode, s, l.fromCountry, r);
      return Tt(a, t.ext, r, l.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'));
  }
}
function pt(t, e, l, r, s) {
  var n = co(r.formats(), t);
  return n ? lo(t, n, {
    useInternationalFormat: l === "INTERNATIONAL",
    withNationalPrefix: !(n.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && s && s.nationalPrefix === !1),
    carrierCode: e,
    metadata: r
  }) : t;
}
function co(t, e) {
  for (var l = oo(t), r; !(r = l()).done; ) {
    var s = r.value;
    if (s.leadingDigitsPatterns().length > 0) {
      var n = s.leadingDigitsPatterns()[s.leadingDigitsPatterns().length - 1];
      if (e.search(n) !== 0)
        continue;
    }
    if (Ee(e, s.pattern()))
      return s;
  }
}
function Tt(t, e, l, r) {
  return e ? r(t, e, l) : t;
}
function uo(t, e, l, r, s) {
  var n = nl(r, s.metadata);
  if (n === l) {
    var o = pt(t, e, "NATIONAL", s);
    return l === "1" ? l + " " + o : o;
  }
  var a = so(r, void 0, s.metadata);
  if (a)
    return "".concat(a, " ").concat(l, " ").concat(pt(t, null, "INTERNATIONAL", s));
}
function Al(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function Ml(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Al(Object(l), !0).forEach(function(r) {
      yo(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : Al(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function yo(t, e, l) {
  return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function wo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Fl(t, e) {
  for (var l = 0; l < e.length; l++) {
    var r = e[l];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function fo(t, e, l) {
  return e && Fl(t.prototype, e), l && Fl(t, l), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var mo = /* @__PURE__ */ function() {
  function t(e, l, r) {
    if (wo(this, t), !e)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!l)
      throw new TypeError("`nationalNumber` not passed");
    if (!r)
      throw new TypeError("`metadata` not passed");
    var s = bo(e, r), n = s.country, o = s.countryCallingCode;
    this.country = n, this.countryCallingCode = o, this.nationalNumber = l, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return r;
    };
  }
  return fo(t, [{
    key: "setExt",
    value: function(l) {
      this.ext = l;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : Jn(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Wn(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return Zn(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var l = new oe(this.getMetadata());
      return l.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(l) {
      return this.number === l.number && this.ext === l.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return al(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(l, r) {
      return vo(this, l, r ? Ml(Ml({}, r), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(l) {
      return this.format("NATIONAL", l);
    }
  }, {
    key: "formatInternational",
    value: function(l) {
      return this.format("INTERNATIONAL", l);
    }
  }, {
    key: "getURI",
    value: function(l) {
      return this.format("RFC3966", l);
    }
  }]), t;
}(), po = function(e) {
  return /^[A-Z]{2}$/.test(e);
};
function bo(t, e) {
  var l, r, s = new oe(e);
  return po(t) ? (l = t, s.selectNumberingPlan(l), r = s.countryCallingCode()) : r = t, {
    country: l,
    countryCallingCode: r
  };
}
var go = new RegExp("([" + be + "])");
function $o(t, e, l, r) {
  if (e) {
    var s = new oe(r);
    s.selectNumberingPlan(e, l);
    var n = new RegExp(s.IDDPrefix());
    if (t.search(n) === 0) {
      t = t.slice(t.match(n)[0].length);
      var o = t.match(go);
      if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0"))
        return t;
    }
  }
}
function ho(t, e) {
  if (t && e.numberingPlan.nationalPrefixForParsing()) {
    var l = new RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"), r = l.exec(t);
    if (r) {
      var s, n, o = r.length - 1, a = o > 0 && r[o];
      if (e.nationalPrefixTransformRule() && a)
        s = t.replace(l, e.nationalPrefixTransformRule()), o > 1 && (n = r[1]);
      else {
        var i = r[0];
        s = t.slice(i.length), a && (n = r[1]);
      }
      var v;
      if (a) {
        var c = t.indexOf(r[1]), u = t.slice(0, c);
        u === e.numberingPlan.nationalPrefix() && (v = e.numberingPlan.nationalPrefix());
      } else
        v = r[0];
      return {
        nationalNumber: s,
        nationalPrefix: v,
        carrierCode: n
      };
    }
  }
  return {
    nationalNumber: t
  };
}
function jt(t, e) {
  var l = ho(t, e), r = l.carrierCode, s = l.nationalNumber;
  if (s !== t) {
    if (!ko(t, s, e))
      return {
        nationalNumber: t
      };
    if (e.possibleLengths() && !xo(s, e))
      return {
        nationalNumber: t
      };
  }
  return {
    nationalNumber: s,
    carrierCode: r
  };
}
function ko(t, e, l) {
  return !(Ee(t, l.nationalNumberPattern()) && !Ee(e, l.nationalNumberPattern()));
}
function xo(t, e) {
  switch (ol(t, e)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function _o(t, e, l, r) {
  var s = e ? nl(e, r) : l;
  if (t.indexOf(s) === 0) {
    r = new oe(r), r.selectNumberingPlan(e, l);
    var n = t.slice(s.length), o = jt(n, r), a = o.nationalNumber, i = jt(t, r), v = i.nationalNumber;
    if (!Ee(v, r.nationalNumberPattern()) && Ee(a, r.nationalNumberPattern()) || ol(v, r) === "TOO_LONG")
      return {
        countryCallingCode: s,
        number: n
      };
  }
  return {
    number: t
  };
}
function Po(t, e, l, r) {
  if (!t)
    return {};
  var s;
  if (t[0] !== "+") {
    var n = $o(t, e, l, r);
    if (n && n !== t)
      s = !0, t = "+" + n;
    else {
      if (e || l) {
        var o = _o(t, e, l, r), a = o.countryCallingCode, i = o.number;
        if (a)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: a,
            number: i
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: t
      };
    }
  }
  if (t[1] === "0")
    return {};
  r = new oe(r);
  for (var v = 2; v - 1 <= yn && v <= t.length; ) {
    var c = t.slice(1, v);
    if (r.hasCallingCode(c))
      return r.selectNumberingPlan(c), {
        countryCallingCodeSource: s ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: c,
        number: t.slice(v)
      };
    v++;
  }
  return {};
}
function zo(t, e) {
  var l = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (l)
    return (l = l.call(t)).next.bind(l);
  if (Array.isArray(t) || (l = Co(t)) || e && t && typeof t.length == "number") {
    l && (t = l);
    var r = 0;
    return function() {
      return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Co(t, e) {
  if (t) {
    if (typeof t == "string")
      return Dl(t, e);
    var l = Object.prototype.toString.call(t).slice(8, -1);
    if (l === "Object" && t.constructor && (l = t.constructor.name), l === "Map" || l === "Set")
      return Array.from(t);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return Dl(t, e);
  }
}
function Dl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var l = 0, r = new Array(e); l < e; l++)
    r[l] = t[l];
  return r;
}
function Io(t, e) {
  var l = e.countries, r = e.defaultCountry, s = e.metadata;
  s = new oe(s);
  for (var n = [], o = zo(l), a; !(a = o()).done; ) {
    var i = a.value;
    if (s.country(i), s.leadingDigits()) {
      if (t && t.search(s.leadingDigits()) === 0)
        return i;
    } else if (al({
      phone: t,
      country: i
    }, void 0, s.metadata))
      if (r) {
        if (i === r)
          return i;
        n.push(i);
      } else
        return i;
  }
  if (n.length > 0)
    return n[0];
}
var Eo = !1;
function Oo(t, e) {
  var l = e.nationalNumber, r = e.defaultCountry, s = e.metadata;
  if (Eo && s.isNonGeographicCallingCode(t))
    return "001";
  var n = s.getCountryCodesForCallingCode(t);
  if (n)
    return n.length === 1 ? n[0] : Io(l, {
      countries: n,
      defaultCountry: r,
      metadata: s.metadata
    });
}
var Lr = "+", No = "[\\-\\.\\(\\)]?", Sl = "([" + be + "]|" + No + ")", To = "^\\" + Lr + Sl + "*[" + be + "]" + Sl + "*$", Ao = new RegExp(To, "g"), Gt = be, Mo = "[" + Gt + "]+((\\-)*[" + Gt + "])*", Fo = "a-zA-Z", Do = "[" + Fo + "]+((\\-)*[" + Gt + "])*", So = "^(" + Mo + "\\.)*" + Do + "\\.?$", Ro = new RegExp(So, "g"), Rl = "tel:", Ut = ";phone-context=", Lo = ";isub=";
function Bo(t) {
  var e = t.indexOf(Ut);
  if (e < 0)
    return null;
  var l = e + Ut.length;
  if (l >= t.length)
    return "";
  var r = t.indexOf(";", l);
  return r >= 0 ? t.substring(l, r) : t.substring(l);
}
function jo(t) {
  return t === null ? !0 : t.length === 0 ? !1 : Ao.test(t) || Ro.test(t);
}
function Go(t, e) {
  var l = e.extractFormattedPhoneNumber, r = Bo(t);
  if (!jo(r))
    throw new ze("NOT_A_NUMBER");
  var s;
  if (r === null)
    s = l(t) || "";
  else {
    s = "", r.charAt(0) === Lr && (s += r);
    var n = t.indexOf(Rl), o;
    n >= 0 ? o = n + Rl.length : o = 0;
    var a = t.indexOf(Ut);
    s += t.substring(o, a);
  }
  var i = s.indexOf(Lo);
  if (i > 0 && (s = s.substring(0, i)), s !== "")
    return s;
}
var Uo = 250, Ho = new RegExp("[" + sl + be + "]"), qo = new RegExp("[^" + be + "#]+$");
function Vo(t, e, l) {
  if (e = e || {}, l = new oe(l), e.defaultCountry && !l.hasCountry(e.defaultCountry))
    throw e.v2 ? new ze("INVALID_COUNTRY") : new Error("Unknown country: ".concat(e.defaultCountry));
  var r = Yo(t, e.v2, e.extract), s = r.number, n = r.ext, o = r.error;
  if (!s) {
    if (e.v2)
      throw o === "TOO_SHORT" ? new ze("TOO_SHORT") : new ze("NOT_A_NUMBER");
    return {};
  }
  var a = Xo(s, e.defaultCountry, e.defaultCallingCode, l), i = a.country, v = a.nationalNumber, c = a.countryCallingCode, u = a.countryCallingCodeSource, w = a.carrierCode;
  if (!l.hasSelectedNumberingPlan()) {
    if (e.v2)
      throw new ze("INVALID_COUNTRY");
    return {};
  }
  if (!v || v.length < rl) {
    if (e.v2)
      throw new ze("TOO_SHORT");
    return {};
  }
  if (v.length > un) {
    if (e.v2)
      throw new ze("TOO_LONG");
    return {};
  }
  if (e.v2) {
    var d = new mo(c, v, l.metadata);
    return i && (d.country = i), w && (d.carrierCode = w), n && (d.ext = n), d.__countryCallingCodeSource = u, d;
  }
  var y = (e.extended ? l.hasSelectedNumberingPlan() : i) ? Ee(v, l.nationalNumberPattern()) : !1;
  return e.extended ? {
    country: i,
    countryCallingCode: c,
    carrierCode: w,
    valid: y,
    possible: y ? !0 : !!(e.extended === !0 && l.possibleLengths() && Rr(v, l)),
    phone: v,
    ext: n
  } : y ? Ko(i, v, n) : {};
}
function Wo(t, e, l) {
  if (t) {
    if (t.length > Uo) {
      if (l)
        throw new ze("TOO_LONG");
      return;
    }
    if (e === !1)
      return t;
    var r = t.search(Ho);
    if (!(r < 0))
      return t.slice(r).replace(qo, "");
  }
}
function Yo(t, e, l) {
  var r = Go(t, {
    extractFormattedPhoneNumber: function(o) {
      return Wo(o, l, e);
    }
  });
  if (!r)
    return {};
  if (!Dn(r))
    return Sn(r) ? {
      error: "TOO_SHORT"
    } : {};
  var s = Rn(r);
  return s.ext ? s : {
    number: r
  };
}
function Ko(t, e, l) {
  var r = {
    country: t,
    phone: e
  };
  return l && (r.ext = l), r;
}
function Xo(t, e, l, r) {
  var s = Po(zl(t), e, l, r.metadata), n = s.countryCallingCodeSource, o = s.countryCallingCode, a = s.number, i;
  if (o)
    r.selectNumberingPlan(o);
  else if (a && (e || l))
    r.selectNumberingPlan(e, l), e && (i = e), o = l || nl(e, r.metadata);
  else
    return {};
  if (!a)
    return {
      countryCallingCodeSource: n,
      countryCallingCode: o
    };
  var v = jt(zl(a), r), c = v.nationalNumber, u = v.carrierCode, w = Oo(o, {
    nationalNumber: c,
    defaultCountry: e,
    metadata: r
  });
  return w && (i = w, w === "001" || r.country(i)), {
    country: i,
    countryCallingCode: o,
    countryCallingCodeSource: n,
    nationalNumber: c,
    carrierCode: u
  };
}
function Ll(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function Bl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ll(Object(l), !0).forEach(function(r) {
      Zo(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : Ll(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function Zo(t, e, l) {
  return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function Jo(t, e, l) {
  return Vo(t, Bl(Bl({}, e), {}, {
    v2: !0
  }), l);
}
function jl(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function Qo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? jl(Object(l), !0).forEach(function(r) {
      ea(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : jl(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function ea(t, e, l) {
  return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function ta(t, e) {
  return na(t) || sa(t, e) || ra(t, e) || la();
}
function la() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ra(t, e) {
  if (t) {
    if (typeof t == "string")
      return Gl(t, e);
    var l = Object.prototype.toString.call(t).slice(8, -1);
    if (l === "Object" && t.constructor && (l = t.constructor.name), l === "Map" || l === "Set")
      return Array.from(t);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return Gl(t, e);
  }
}
function Gl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var l = 0, r = new Array(e); l < e; l++)
    r[l] = t[l];
  return r;
}
function sa(t, e) {
  var l = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (l != null) {
    var r = [], s = !0, n = !1, o, a;
    try {
      for (l = l.call(t); !(s = (o = l.next()).done) && (r.push(o.value), !(e && r.length === e)); s = !0)
        ;
    } catch (i) {
      n = !0, a = i;
    } finally {
      try {
        !s && l.return != null && l.return();
      } finally {
        if (n)
          throw a;
      }
    }
    return r;
  }
}
function na(t) {
  if (Array.isArray(t))
    return t;
}
function oa(t) {
  var e = Array.prototype.slice.call(t), l = ta(e, 4), r = l[0], s = l[1], n = l[2], o = l[3], a, i, v;
  if (typeof r == "string")
    a = r;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!s || typeof s == "string")
    o ? (i = n, v = o) : (i = void 0, v = n), s && (i = Qo({
      defaultCountry: s
    }, i));
  else if (it(s))
    n ? (i = s, v = n) : v = s;
  else
    throw new Error("Invalid second argument: ".concat(s));
  return {
    text: a,
    options: i,
    metadata: v
  };
}
function Ul(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function Hl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ul(Object(l), !0).forEach(function(r) {
      aa(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : Ul(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function aa(t, e, l) {
  return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function ia(t, e, l) {
  e && e.defaultCountry && !En(e.defaultCountry, l) && (e = Hl(Hl({}, e), {}, {
    defaultCountry: void 0
  }));
  try {
    return Jo(t, e, l);
  } catch (r) {
    if (!(r instanceof ze))
      throw r;
  }
}
function ql(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function Vl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ql(Object(l), !0).forEach(function(r) {
      va(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : ql(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function va(t, e, l) {
  return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function da() {
  var t = oa(arguments), e = t.text, l = t.options, r = t.metadata;
  l = Vl(Vl({}, l), {}, {
    extract: !1
  });
  var s = ia(e, l, r);
  return s && s.isValid() || !1;
}
function ca() {
  return sn(da, arguments);
}
function ua(t, e, l) {
  if (e == "short_answer" || e == "paragraph") {
    if (l.includes(":"))
      if (t.length >= parseInt(l.split(":")[0]) && t.length <= parseInt(l.split(":")[1]))
        if (l.split(":").length >= 3) {
          const r = l.split(":")[2];
          if (r == "email")
            return !!/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g.test(t);
          if (r == "phone")
            if (l.split(":")[3]) {
              const s = l.split(":")[3].split(",");
              for (const n in s)
                if (ca(t, s[n]))
                  return !0;
            } else
              return !1;
          else {
            if (r == "number")
              return !isNaN(t);
            if (r == "URL")
              return !!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g.test(t);
          }
        } else
          return !0;
      else
        return !1;
  } else if (e == "info") {
    if (l == "disabled" && t)
      return !1;
    if (!l)
      return !1;
  } else {
    if (e == "multiple" || e == "dropdown")
      return !(typeof t != "number" || t >= l);
    if (e == "checkboxes") {
      if (t.length > l)
        return !1;
      for (const r in t)
        if (t[r] !== !1 && t[r] !== !0)
          return !1;
      return !0;
    } else {
      if (e == "date")
        return typeof t != "number" ? !1 : t >= l[0] && t <= l[1];
      if (e == "file") {
        const r = new URL(t);
        if (r.hostname == "transfer.sh" && t.length <= 2048) {
          const s = {
            images: ["png", "jpg", "jpeg", "gif", "webp", "svg", "ico", "bmp", "tiff", "tif"],
            docs: ["docs", "doc", "docx", "odt", "rtf", "tex", "txt", "wpd"],
            pdf: ["pdf"],
            sheets: ["sheets", "xls", "xlsx", "ods", "csv"],
            slides: ["slides", "ppt", "pptx", "odp"],
            audios: ["mp3", "wav", "wma", "m4a", "aac", "oga", "flac", "webma"],
            videos: ["mp4", "webm", "mov", "mkv", "flv", "ogv", "avi", "wmv", "m4v"],
            archives: ["zip", "tar.gz", "tar.xz", "tar.lz", "tar.bz2", "tar"]
          };
          if (l.length == 0)
            return !0;
          for (const n in l)
            if (s[l[n]].includes(r.pathname.split(".").pop()))
              return !0;
        } else
          return !1;
      } else
        return !1;
    }
  }
}
function ya(t) {
  br(t, "svelte-89v8l3", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}label.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.75rem;vertical-align:baseline}i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,span.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{vertical-align:bottom}button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,label.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{user-select:none}.primary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--primary)!important}.primary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--primary)!important}.primary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--secondary)!important}.secondary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--secondary)!important}.secondary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--tertiary)!important}.tertiary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--tertiary)!important}.tertiary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--error)!important}.error-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--error)!important}.error-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-dim.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-bright.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-lowest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-high.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-highest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--inverse-primary)!important}.surface-dim.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-dim)!important}.surface-bright.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-low)!important}.surface-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container)!important}.surface-container-high.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-low)!important}.black.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#000!important}.black-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#000!important}.black-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#000!important}.white.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff!important}.white-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#fff!important}.white-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#fff!important}.transparent.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:transparent!important}.transparent-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:transparent!important}.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:center!important}.bottom-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:end!important}.top-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:start!important}.left-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:start;justify-content:start!important}.right-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:end;justify-content:end!important}.center-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:center;justify-content:center!important}.red.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.red6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f44336!important}.red-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#f44336!important}.red-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#f44336!important}.red1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffebee!important}.red2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffcdd2!important}.red3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef9a9a!important}.red4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e57373!important}.red5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef5350!important}.red7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e53935!important}.red8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d32f2f!important}.red9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c62828!important}.red10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b71c1c!important}.pink.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.pink6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e91e63!important}.pink-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#e91e63!important}.pink-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#e91e63!important}.pink1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fce4ec!important}.pink2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f8bbd0!important}.pink3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f48fb1!important}.pink4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f06292!important}.pink5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ec407a!important}.pink7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d81b60!important}.pink8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c2185b!important}.pink9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ad1457!important}.pink10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#880e4f!important}.purple.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.purple6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9c27b0!important}.purple-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#9c27b0!important}.purple-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#9c27b0!important}.purple1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f3e5f5!important}.purple2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e1bee7!important}.purple3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ce93d8!important}.purple4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ba68c8!important}.purple5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ab47bc!important}.purple7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8e24aa!important}.purple8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7b1fa2!important}.purple9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#6a1b9a!important}.purple10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4a148c!important}.deep-purple.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.deep-purple6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#673ab7!important}.deep-purple-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#673ab7!important}.deep-purple-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#673ab7!important}.deep-purple1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ede7f6!important}.deep-purple2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d1c4e9!important}.deep-purple3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b39ddb!important}.deep-purple4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9575cd!important}.deep-purple5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7e57c2!important}.deep-purple7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5e35b1!important}.deep-purple8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#512da8!important}.deep-purple9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4527a0!important}.deep-purple10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#311b92!important}.indigo.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.indigo6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3f51b5!important}.indigo-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#3f51b5!important}.indigo-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#3f51b5!important}.indigo1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e8eaf6!important}.indigo2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c5cae9!important}.indigo3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9fa8da!important}.indigo4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7986cb!important}.indigo5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5c6bc0!important}.indigo7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3949ab!important}.indigo8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#303f9f!important}.indigo9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#283593!important}.indigo10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1a237e!important}.blue.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.blue6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#2196f3!important}.blue-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#2196f3!important}.blue-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#2196f3!important}.blue1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e3f2fd!important}.blue2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bbdefb!important}.blue3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#90caf9!important}.blue4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#64b5f6!important}.blue5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#42a5f5!important}.blue7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1e88e5!important}.blue8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1976d2!important}.blue9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1565c0!important}.blue10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0d47a1!important}.light-blue.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.light-blue6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#03a9f4!important}.light-blue-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#03a9f4!important}.light-blue-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#03a9f4!important}.light-blue1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e1f5fe!important}.light-blue2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b3e5fc!important}.light-blue3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#81d4fa!important}.light-blue4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4fc3f7!important}.light-blue5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#29b6f6!important}.light-blue7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#039be5!important}.light-blue8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0288d1!important}.light-blue9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0277bd!important}.light-blue10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#01579b!important}.cyan.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.cyan6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00bcd4!important}.cyan-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#00bcd4!important}.cyan-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#00bcd4!important}.cyan1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0f7fa!important}.cyan2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b2ebf2!important}.cyan3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#80deea!important}.cyan4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4dd0e1!important}.cyan5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#26c6da!important}.cyan7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00acc1!important}.cyan8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0097a7!important}.cyan9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00838f!important}.cyan10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#006064!important}.teal.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.teal6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#009688!important}.teal-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#009688!important}.teal-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#009688!important}.teal1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0f2f1!important}.teal2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b2dfdb!important}.teal3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#80cbc4!important}.teal4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4db6ac!important}.teal5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#26a69a!important}.teal7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00897b!important}.teal8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00796b!important}.teal9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00695c!important}.teal10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#004d40!important}.green.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.green6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4caf50!important}.green-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#4caf50!important}.green-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#4caf50!important}.green1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e8f5e9!important}.green2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c8e6c9!important}.green3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#a5d6a7!important}.green4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#81c784!important}.green5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#66bb6a!important}.green7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#43a047!important}.green8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#388e3c!important}.green9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#2e7d32!important}.green10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1b5e20!important}.light-green.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.light-green6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8bc34a!important}.light-green-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#8bc34a!important}.light-green-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#8bc34a!important}.light-green1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f1f8e9!important}.light-green2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#dcedc8!important}.light-green3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c5e1a5!important}.light-green4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#aed581!important}.light-green5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9ccc65!important}.light-green7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7cb342!important}.light-green8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#689f38!important}.light-green9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#558b2f!important}.light-green10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#33691e!important}.lime.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.lime6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#cddc39!important}.lime-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#cddc39!important}.lime-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#cddc39!important}.lime1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f9fbe7!important}.lime2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f0f4c3!important}.lime3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e6ee9c!important}.lime4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#dce775!important}.lime5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d4e157!important}.lime7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c0ca33!important}.lime8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#afb42b!important}.lime9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9e9d24!important}.lime10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#827717!important}.yellow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.yellow6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffeb3b!important}.yellow-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ffeb3b!important}.yellow-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ffeb3b!important}.yellow1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fffde7!important}.yellow2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff9c4!important}.yellow3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff59d!important}.yellow4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff176!important}.yellow5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffee58!important}.yellow7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fdd835!important}.yellow8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fbc02d!important}.yellow9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f9a825!important}.yellow10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f57f17!important}.amber.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.amber6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffc107!important}.amber-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ffc107!important}.amber-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ffc107!important}.amber1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff8e1!important}.amber2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffecb3!important}.amber3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffe082!important}.amber4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffd54f!important}.amber5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffca28!important}.amber7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffb300!important}.amber8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffa000!important}.amber9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff8f00!important}.amber10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff6f00!important}.orange.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.orange6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff9800!important}.orange-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ff9800!important}.orange-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ff9800!important}.orange1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff3e0!important}.orange2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffe0b2!important}.orange3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffcc80!important}.orange4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffb74d!important}.orange5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffa726!important}.orange7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fb8c00!important}.orange8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f57c00!important}.orange9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef6c00!important}.orange10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e65100!important}.deep-orange.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.deep-orange6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff5722!important}.deep-orange-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ff5722!important}.deep-orange-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ff5722!important}.deep-orange1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fbe9e7!important}.deep-orange2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffccbc!important}.deep-orange3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffab91!important}.deep-orange4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff8a65!important}.deep-orange5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff7043!important}.deep-orange7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f4511e!important}.deep-orange8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e64a19!important}.deep-orange9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d84315!important}.deep-orange10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bf360c!important}.brown.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.brown6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#795548!important}.brown-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#795548!important}.brown-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#795548!important}.brown1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#efebe9!important}.brown2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d7ccc8!important}.brown3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bcaaa4!important}.brown4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#a1887f!important}.brown5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8d6e63!important}.brown7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#6d4c41!important}.brown8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5d4037!important}.brown9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4e342e!important}.brown10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3e2723!important}.blue-grey.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.blue-grey6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#607d8b!important}.blue-grey-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#607d8b!important}.blue-grey-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#607d8b!important}.blue-grey1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#eceff1!important}.blue-grey2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#cfd8dc!important}.blue-grey3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b0bec5!important}.blue-grey4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#90a4ae!important}.blue-grey5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#78909c!important}.blue-grey7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#546e7a!important}.blue-grey8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#455a64!important}.blue-grey9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#37474f!important}.blue-grey10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#263238!important}.grey.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.grey6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9e9e9e!important}.grey-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#9e9e9e!important}.grey-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#9e9e9e!important}.grey1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fafafa!important}.grey2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f5f5f5!important}.grey3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#eee!important}.grey4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0e0e0!important}.grey5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bdbdbd!important}.grey7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#757575!important}.grey8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#616161!important}.grey9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#424242!important}.grey10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#212121!important}.horizontal.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1rem 0!important}.large-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1.5rem 0!important}.small-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:.5rem 0!important}.divider.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:none!important}.small-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate2)!important}.large-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate3)!important}.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:var(---round)}.small-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:var(---round)!important}.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:2rem}.small-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:.5rem}.large-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:3.5rem}.no-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.square.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:0!important}.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:50%}:is(button,.button,.chip).circle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-89v8l3:is(.circle,.square)>span.svelte-89v8l3.svelte-89v8l3{display:none}:is(.circle,.square).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg),:is(.circle,.square).chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1rem!important}.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:transparent!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.auto-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.tiny-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:1rem}.no-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:0}.auto-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:auto}.tiny-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:.25rem}.small-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:.5rem}.large-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:1.5rem}.left-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-start:var(---margin)!important}.right-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-end:var(---margin)!important}.top-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-start:var(---margin)!important}.bottom-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-end:var(---margin)!important}.no-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1!important}.opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:0!important}.small-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.75!important}.medium-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.5!important}.large-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.25!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.auto-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.tiny-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:1rem}.no-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:0}.auto-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:auto}.tiny-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:.25rem}.small-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:.5rem}.large-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:1.5rem}.left-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-inline-start:var(---padding)!important}.right-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-inline-end:var(---padding)!important}.top-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-block-start:var(---padding)!important}.bottom-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-block-end:var(---padding)!important}.front.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{z-index:10!important}.back.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{z-index:-10!important}.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:0}.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-end:0}.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0}.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-end:0}.center.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{transform:translate(-50%,-50%)}.scroll.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:auto}.no-scroll.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:hidden}.small-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:12rem!important}.medium-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:24rem!important}.large-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:36rem!important}.wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:block;white-space:normal}.no-wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s),.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s),.m.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m),.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m),.s.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l),.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l),.m.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l){display:none}}h6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}h6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:1.5rem}.link.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--primary)!important}.inverse-link.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--inverse-primary)!important}.truncate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{white-space:nowrap!important}.small-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.75rem}.medium-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.875rem}.large-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:1rem}.upper.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:uppercase}.lower.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:lowercase}.capitalize.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:capitalize}.bold.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-weight:700}.overline.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-decoration:line-through}.underline.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-decoration:underline}.italic.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-style:italic}p.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:.5rem 0}.no-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:normal}.tiny-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.25}.small-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.5}.medium-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.75}.large-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:2}.extra-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:2.25}.wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.wave.light.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.wave.row.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).transparent.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.no-wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(:hover,:active):after{display:none}.badge.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--error);color:var(--error)}.badge.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--outline);color:var(--primary)}.extend.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3{display:none}.extend.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.extend.svelte-89v8l3:is(:hover,.active)>.svelte-89v8l3:is(img,svg)+span.svelte-89v8l3{display:inherit;margin-inline-start:2.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button):is([disabled]){pointer-events:none}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]):before,.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}article.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--outline)}.chip.round.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1rem}.chip.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.25rem}.chip.round.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;margin-block-end:2rem}.svelte-89v8l3+.field.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.field.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem}.field.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3.5rem}.field.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4rem}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.25rem .25rem 0 0}.field.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.25rem}.field.round.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.25rem}.field.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.5rem}.field.round.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.75rem}.field.round.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}.svelte-89v8l3:not(.field)>input[type^=date].svelte-89v8l3.svelte-89v8l3,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-inner-spin-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-outer-spin-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-decoration,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-cancel-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-results-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-results-decoration{display:none}.field.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-89v8l3:not(.border,.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.round.svelte-89v8l3:not(.border)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-89v8l3:not(.border,.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.invalid.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.invalid.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:disabled{cursor:not-allowed}.field.small.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4.5rem}.field.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:5.5rem}.field.large.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:6.5rem}.field.extra.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:7.5rem}.field.svelte-89v8l3>select.svelte-89v8l3>option.svelte-89v8l3{background-color:var(--surface-container);color:var(--on-surface)}.field.label.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,select){padding-block-start:1rem}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,select){padding-block-start:0}.field.label.small.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.125rem}.field.label.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.375rem}.field.label.large.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.625rem}.field.label.extra.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.875rem}.field.small.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.small.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.small.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:.625rem}.field.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:.875rem}.field.large.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.large.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.large.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.125rem}.field.extra.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.extra.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.extra.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.375rem}.field.small.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:.5625rem!important}.field.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:.8125rem!important}.field.large.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:1.0625rem!important}.field.extra.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:1.3125rem!important}.field.label.svelte-89v8l3>label.svelte-89v8l3.svelte-89v8l3{position:absolute;inset-block-start:-.5rem;inset-inline-start:1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.border.prefix.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.border.prefix.round.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-89v8l3:not(.fill)>label.svelte-89v8l3.svelte-89v8l3:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3:focus+label.svelte-89v8l3:after{border-block-start:.125rem solid var(--primary)}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border.svelte-89v8l3:not(.fill)>select.svelte-89v8l3.svelte-89v8l3{clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.svelte-89v8l3>.svelte-89v8l3:focus+label.svelte-89v8l3{color:var(--primary)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.svelte-89v8l3>.error.svelte-89v8l3.svelte-89v8l3{color:var(--error)!important}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.helper,.error){inset-inline-start:1.5rem}.field.invalid.svelte-89v8l3>.helper.svelte-89v8l3.svelte-89v8l3{display:none}.grid.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-89v8l3+.grid.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.grid.no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:0rem}.grid.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:1.5rem}.grid.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:2rem}.s1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.s2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.s3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.s4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.s5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.s6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.s7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.s8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.s9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.s10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.s11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.s12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.m2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.m3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.m4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.m5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.m6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.m7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.m8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.m9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.m10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.m11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.m12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.l2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.l3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.l4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.l5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.l6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.l7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.l8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.l9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.l10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.l11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.l12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}}i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.absolute.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:absolute}.fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:fixed}:is(.absolute,.fixed).left.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-89v8l3:is(dialog,menu)>.svelte-89v8l3.svelte-89v8l3:is(header,footer){padding:0;background-color:inherit}article.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.5rem}:is(img,svg,video).tiny.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:100%;margin:0 auto}.svelte-89v8l3:is(button,.button,.chip):not(.transparent)>.responsive.svelte-89v8l3.svelte-89v8l3{border:.25rem solid transparent}.svelte-89v8l3:is(button.small,.button.small,.chip)>.responsive.svelte-89v8l3.svelte-89v8l3{inline-size:2rem}.svelte-89v8l3:is(button,.button,.chip.medium)>.responsive.svelte-89v8l3.svelte-89v8l3{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}:is(img,svg,video).empty-state.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{max-inline-size:100%;inline-size:24rem}.svelte-89v8l3:is(button,.button,.chip,.field)>.svelte-89v8l3.svelte-89v8l3:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-89v8l3:is(.tabs) .svelte-89v8l3.svelte-89v8l3:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-89v8l3:is(button,.button,.chip)>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg),.svelte-89v8l3:is(button,.button,.chip)>.responsive.svelte-89v8l3.svelte-89v8l3{margin:0 -.5rem}.svelte-89v8l3:is(button,.button)>.responsive.svelte-89v8l3.svelte-89v8l3{margin-inline-start:-1.5rem}.svelte-89v8l3:is(.circle,.square)>.responsive.svelte-89v8l3.svelte-89v8l3{margin:0}.extend.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.row.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-89v8l3:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-89v8l3.svelte-89v8l3:not(a){margin-block-start:1rem}.svelte-89v8l3:is(nav,.row)>.svelte-89v8l3.svelte-89v8l3,.svelte-89v8l3:is(nav,.row)>.svelte-89v8l3:not(.tooltip,menu)>.svelte-89v8l3{margin-block-start:0;margin-block-end:0}.row.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:0}:is(nav,.row).medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:1.5rem}:is(nav,.row).large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:2rem}.row.wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;flex-wrap:wrap}.svelte-89v8l3:is(nav,.row)>.border.no-margin.svelte-89v8l3+.border.no-margin.svelte-89v8l3{border-inline-start:0}@media only screen and (max-width: 600px){}.overlay.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1;visibility:visible}.page.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.svelte-89v8l3:is(.page,dialog):not(.active) .page.active.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-89v8l3-to-page ease}.page.active.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, -4rem)}.page.active.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, 4rem)}.page.active.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(-4rem, 0)}.page.active.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(4rem, 0)}@keyframes svelte-89v8l3-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}@keyframes svelte-89v8l3-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-89v8l3-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.radio.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.switch.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3.svelte-89v8l3{inline-size:1.5rem;block-size:1.5rem;opacity:0}.switch.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3{inline-size:3.25rem;block-size:2rem;opacity:0}.svelte-89v8l3:is(.checkbox,.radio,.switch)>span.svelte-89v8l3.svelte-89v8l3{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-89v8l3:is(.checkbox,.radio)>span.svelte-89v8l3.svelte-89v8l3:not(:empty){padding-inline-start:.25rem}.svelte-89v8l3:is(.checkbox,.radio,.switch)>span.svelte-89v8l3.svelte-89v8l3:before{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{position:absolute;inset-inline-start:0;inset-block-start:50%;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:var(--speed2) all;font-size:1rem;user-select:none;min-inline-size:auto;content:"";color:var(--surface-variant);background-color:var(--outline)}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{transform:translate(-3rem,-50%) scale(.6)}.checkbox.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:"check_box_outline_blank"}.radio.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:"radio_button_unchecked"}.checkbox.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"check_box";font-variation-settings:"FILL" 1}.radio.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:""!important;font-variation-settings:unset!important}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3:not(:disabled):is(:focus,:hover)+span.svelte-89v8l3:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.switch.svelte-89v8l3>input.svelte-89v8l3:not(:disabled):is(:focus,:hover)+span.svelte-89v8l3:before{box-shadow:0 0 0 .5rem var(--active)}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{color:var(--primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:after{border:none;background-color:var(--primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"check";color:var(--primary);background-color:var(--on-primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{transform:translate(-1.75rem,-50%) scale(1)}.svelte-89v8l3:is(.checkbox,.radio,.switch)>input.svelte-89v8l3:disabled+span.svelte-89v8l3{opacity:.5;cursor:not-allowed}.checkbox.svelte-89v8l3+.checkbox.svelte-89v8l3.svelte-89v8l3,.radio.svelte-89v8l3+.radio.svelte-89v8l3.svelte-89v8l3,.switch.svelte-89v8l3+.switch.svelte-89v8l3.svelte-89v8l3{margin-inline-start:.5rem}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:after{content:"";position:absolute;inset-inline-start:0;inset-block-start:50%;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:after{transform:translate(-3.25rem,-50%)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:4rem}.slider.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:8rem}.slider.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem}.slider.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:.25rem;background:none;z-index:1;padding:0;margin:0}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:only-of-type{cursor:pointer;pointer-events:all}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3::-webkit-slider-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3::-moz-range-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:not(:disabled):is(:focus,:hover)::-webkit-slider-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:not(:disabled):is(:focus,:hover)::-moz-range-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled{cursor:not-allowed;opacity:1}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled::-webkit-slider-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled::-moz-range-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-89v8l3>input.svelte-89v8l3:disabled~.svelte-89v8l3:is(span,.tooltip){background:#9E9E9E}.slider.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3{position:absolute;inset-block-start:calc(50% - .1875rem);block-size:.375rem;border-radius:1rem;background:var(--primary);z-index:0;inset-inline-start:var(---start);inset-inline-end:var(---end)}.slider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-89v8l3:is(nav,.row,.field)>.slider.svelte-89v8l3.svelte-89v8l3:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{visibility:visible;animation:var(--speed2) svelte-89v8l3-to-snackbar}.snackbar.active.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform-end:translate(-50%, -1rem)}@keyframes svelte-89v8l3-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:40%}}.tabs.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding:0 1rem;gap:2rem}.tabs.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-89v8l3+.tabs.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.tooltip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem;white-space:normal}.tooltip.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:16rem;white-space:normal}.svelte-89v8l3:hover>.tooltip.svelte-89v8l3.svelte-89v8l3{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-89v8l3:hover>.tooltip.left.svelte-89v8l3.svelte-89v8l3{transform:translate(-100%,-50%) scale(1)}.svelte-89v8l3:hover>.tooltip.right.svelte-89v8l3.svelte-89v8l3{transform:translate(100%,-50%) scale(1)}.svelte-89v8l3:hover>.tooltip.bottom.svelte-89v8l3.svelte-89v8l3{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:0}.tooltip.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-1rem}.tooltip.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-1.5rem}.tooltip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-start:var(---space)!important}.tooltip.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-end:var(---space)!important}.tooltip.max.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-89v8l3 .svelte-89v8l3.svelte-89v8l3:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00000080}.small-blur.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:.5rem}.large-blur.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:1.5rem}.shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00000050}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to bottom,black,transparent)}.description.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.8}.question-box.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1rem 0}.helper.answerLength.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:right;width:90%;padding-top:0.65rem}.multiple-choice.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-top:1rem}');
}
function Wl(t, e, l) {
  const r = t.slice();
  return r[14] = e[l], r[15] = e, r[16] = l, r;
}
function Yl(t, e, l) {
  const r = t.slice();
  return r[14] = e[l], r[16] = l, r;
}
function Kl(t, e, l) {
  const r = t.slice();
  return r[14] = e[l], r[18] = e, r[16] = l, r;
}
function Xl(t) {
  let e;
  return {
    c() {
      e = O("span"), e.textContent = "*", k(e, "class", "svelte-89v8l3");
    },
    m(l, r) {
      F(l, e, r);
    },
    d(l) {
      l && A(e);
    }
  };
}
function Zl(t) {
  let e, l, r, s, n, o, a, i, v = (
    /*answer*/
    t[0].answer.length + ""
  ), c, u, w, d;
  return {
    c() {
      e = O("div"), l = O("input"), s = D(), n = O("span"), o = W(
        /*errorText*/
        t[3]
      ), a = D(), i = O("p"), c = W(v), k(l, "type", "text"), k(l, "placeholder", r = /*question*/
      t[1].placeholder || ""), k(l, "class", "svelte-89v8l3"), k(n, "class", "error svelte-89v8l3"), k(i, "class", "answerLength helper svelte-89v8l3"), k(e, "class", u = "field border " + /*error*/
      t[2] + " svelte-89v8l3");
    },
    m(y, p) {
      F(y, e, p), _(e, l), Ie(
        l,
        /*answer*/
        t[0].answer
      ), _(e, s), _(e, n), _(n, o), _(e, a), _(e, i), _(i, c), w || (d = [
        X(
          l,
          "input",
          /*input_input_handler*/
          t[8]
        ),
        X(
          l,
          "input",
          /*check*/
          t[4]
        )
      ], w = !0);
    },
    p(y, p) {
      p & /*question*/
      2 && r !== (r = /*question*/
      y[1].placeholder || "") && k(l, "placeholder", r), p & /*answer*/
      1 && l.value !== /*answer*/
      y[0].answer && Ie(
        l,
        /*answer*/
        y[0].answer
      ), p & /*errorText*/
      8 && Q(
        o,
        /*errorText*/
        y[3]
      ), p & /*answer*/
      1 && v !== (v = /*answer*/
      y[0].answer.length + "") && Q(c, v), p & /*error*/
      4 && u !== (u = "field border " + /*error*/
      y[2] + " svelte-89v8l3") && k(e, "class", u);
    },
    d(y) {
      y && A(e), w = !1, he(d);
    }
  };
}
function Jl(t) {
  let e, l, r, s, n, o, a, i = (
    /*answer*/
    t[0].answer.length + ""
  ), v, c, u, w;
  return {
    c() {
      e = O("div"), l = O("textarea"), r = D(), s = O("span"), n = W(
        /*errorText*/
        t[3]
      ), o = D(), a = O("p"), v = W(i), k(l, "spellcheck", "false"), k(l, "class", "svelte-89v8l3"), k(s, "class", "error svelte-89v8l3"), k(a, "class", "answerLength helper svelte-89v8l3"), k(e, "class", c = "field textarea border " + /*error*/
      t[2] + " svelte-89v8l3");
    },
    m(d, y) {
      F(d, e, y), _(e, l), Ie(
        l,
        /*answer*/
        t[0].answer
      ), _(e, r), _(e, s), _(s, n), _(e, o), _(e, a), _(a, v), u || (w = [
        X(
          l,
          "input",
          /*textarea_input_handler*/
          t[9]
        ),
        X(
          l,
          "input",
          /*check*/
          t[4]
        )
      ], u = !0);
    },
    p(d, y) {
      y & /*answer*/
      1 && Ie(
        l,
        /*answer*/
        d[0].answer
      ), y & /*errorText*/
      8 && Q(
        n,
        /*errorText*/
        d[3]
      ), y & /*answer*/
      1 && i !== (i = /*answer*/
      d[0].answer.length + "") && Q(v, i), y & /*error*/
      4 && c !== (c = "field textarea border " + /*error*/
      d[2] + " svelte-89v8l3") && k(e, "class", c);
    },
    d(d) {
      d && A(e), u = !1, he(w);
    }
  };
}
function Ql(t) {
  let e, l = Te(
    /*question*/
    t[1].options.optionsData
  ), r = [];
  for (let s = 0; s < l.length; s += 1)
    r[s] = er(Kl(t, l, s));
  return {
    c() {
      e = O("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      k(e, "class", "multiple-choice svelte-89v8l3");
    },
    m(s, n) {
      F(s, e, n);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
    },
    p(s, n) {
      if (n & /*question, log*/
      34) {
        l = Te(
          /*question*/
          s[1].options.optionsData
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const a = Kl(s, l, o);
          r[o] ? r[o].p(a, n) : (r[o] = er(a), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = l.length;
      }
    },
    d(s) {
      s && A(e), bt(r, s);
    }
  };
}
function er(t) {
  let e, l, r, s, n, o = (
    /*opt*/
    t[14] + ""
  ), a, i, v, c, u;
  function w() {
    t[10].call(
      l,
      /*index*/
      t[16]
    );
  }
  return {
    c() {
      e = O("label"), l = O("input"), s = D(), n = O("span"), a = W(o), i = D(), v = O("br"), k(l, "type", "radio"), k(l, "name", r = "radio_group_" + /*question*/
      t[1].id), k(l, "class", "svelte-89v8l3"), k(n, "class", "svelte-89v8l3"), k(e, "class", "radio svelte-89v8l3"), k(v, "class", "svelte-89v8l3");
    },
    m(d, y) {
      F(d, e, y), _(e, l), Ie(
        l,
        /*index*/
        t[16]
      ), _(e, s), _(e, n), _(n, a), _(e, i), F(d, v, y), c || (u = [
        X(
          l,
          "change",
          /*log*/
          t[5]
        ),
        X(l, "change", w)
      ], c = !0);
    },
    p(d, y) {
      t = d, y & /*question*/
      2 && r !== (r = "radio_group_" + /*question*/
      t[1].id) && k(l, "name", r), Ie(
        l,
        /*index*/
        t[16]
      ), y & /*question*/
      2 && o !== (o = /*opt*/
      t[14] + "") && Q(a, o);
    },
    d(d) {
      d && (A(e), A(v)), c = !1, he(u);
    }
  };
}
function tr(t) {
  let e, l, r, s, n, o, a, i, v = Te(
    /*question*/
    t[1].options.optionsData
  ), c = [];
  for (let u = 0; u < v.length; u += 1)
    c[u] = lr(Yl(t, v, u));
  return {
    c() {
      e = O("div"), l = O("select");
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      r = D(), s = O("label"), s.textContent = "Select", n = D(), o = O("i"), o.textContent = "arrow_drop_down", k(l, "class", "svelte-89v8l3"), /*answer*/
      t[0].answer === void 0 && ct(() => (
        /*select_change_handler*/
        t[11].call(l)
      )), k(s, "class", "svelte-89v8l3"), k(o, "class", "svelte-89v8l3"), k(e, "class", "field label suffix border svelte-89v8l3");
    },
    m(u, w) {
      F(u, e, w), _(e, l);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(l, null);
      ul(
        l,
        /*answer*/
        t[0].answer,
        !0
      ), _(e, r), _(e, s), _(e, n), _(e, o), a || (i = X(
        l,
        "change",
        /*select_change_handler*/
        t[11]
      ), a = !0);
    },
    p(u, w) {
      if (w & /*question*/
      2) {
        v = Te(
          /*question*/
          u[1].options.optionsData
        );
        let d;
        for (d = 0; d < v.length; d += 1) {
          const y = Yl(u, v, d);
          c[d] ? c[d].p(y, w) : (c[d] = lr(y), c[d].c(), c[d].m(l, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = v.length;
      }
      w & /*answer*/
      1 && ul(
        l,
        /*answer*/
        u[0].answer
      );
    },
    d(u) {
      u && A(e), bt(c, u), a = !1, i();
    }
  };
}
function lr(t) {
  let e, l = (
    /*opt*/
    t[14] + ""
  ), r;
  return {
    c() {
      e = O("option"), r = W(l), e.__value = /*index*/
      t[16], Ie(e, e.__value), k(e, "class", "svelte-89v8l3");
    },
    m(s, n) {
      F(s, e, n), _(e, r);
    },
    p(s, n) {
      n & /*question*/
      2 && l !== (l = /*opt*/
      s[14] + "") && Q(r, l);
    },
    d(s) {
      s && A(e);
    }
  };
}
function rr(t) {
  let e, l = Te(
    /*question*/
    t[1].options.optionsData
  ), r = [];
  for (let s = 0; s < l.length; s += 1)
    r[s] = sr(Wl(t, l, s));
  return {
    c() {
      e = O("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      k(e, "class", "multiple-choice svelte-89v8l3");
    },
    m(s, n) {
      F(s, e, n);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
    },
    p(s, n) {
      if (n & /*question, checkbox*/
      66) {
        l = Te(
          /*question*/
          s[1].options.optionsData
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const a = Wl(s, l, o);
          r[o] ? r[o].p(a, n) : (r[o] = sr(a), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = l.length;
      }
    },
    d(s) {
      s && A(e), bt(r, s);
    }
  };
}
function sr(t) {
  let e, l, r, s, n, o = (
    /*opt*/
    t[14] + ""
  ), a, i, v, c, u;
  function w() {
    t[12].call(
      l,
      /*index*/
      t[16]
    );
  }
  return {
    c() {
      e = O("label"), l = O("input"), s = D(), n = O("span"), a = W(o), i = D(), v = O("br"), k(l, "type", "checkbox"), k(l, "name", r = "checkboxes_" + /*question*/
      t[1].id), k(l, "class", "svelte-89v8l3"), k(n, "class", "svelte-89v8l3"), k(e, "class", "checkbox svelte-89v8l3"), k(v, "class", "svelte-89v8l3");
    },
    m(d, y) {
      F(d, e, y), _(e, l), Ie(
        l,
        /*index*/
        t[16]
      ), _(e, s), _(e, n), _(n, a), _(e, i), F(d, v, y), c || (u = [
        X(
          l,
          "change",
          /*checkbox*/
          t[6]
        ),
        X(l, "change", w)
      ], c = !0);
    },
    p(d, y) {
      t = d, y & /*question*/
      2 && r !== (r = "checkboxes_" + /*question*/
      t[1].id) && k(l, "name", r), Ie(
        l,
        /*index*/
        t[16]
      ), y & /*question*/
      2 && o !== (o = /*opt*/
      t[14] + "") && Q(a, o);
    },
    d(d) {
      d && (A(e), A(v)), c = !1, he(u);
    }
  };
}
function nr(t) {
  let e, l, r, s, n, o, a, i, v, c, u, w, d = (
    /*answer*/
    t[0].answer && or(t)
  );
  return {
    c() {
      e = O("div"), l = O("button"), r = O("i"), r.textContent = "today", s = D(), n = O("span"), n.textContent = "Date", o = D(), a = O("input"), c = D(), d && d.c(), k(r, "class", "svelte-89v8l3"), k(n, "class", "svelte-89v8l3"), k(a, "type", "date"), k(a, "min", i = new Date(
        /*question*/
        t[1].options.optionsData[0]
      ).toISOString().split("T")[0]), k(a, "max", v = new Date(
        /*question*/
        t[1].options.optionsData[1]
      ).toISOString().split("T")[0]), k(a, "class", "svelte-89v8l3"), k(l, "class", "svelte-89v8l3"), k(e, "class", "date svelte-89v8l3");
    },
    m(y, p) {
      F(y, e, p), _(e, l), _(l, r), _(l, s), _(l, n), _(l, o), _(l, a), _(e, c), d && d.m(e, null), u || (w = X(
        a,
        "change",
        /*date*/
        t[7]
      ), u = !0);
    },
    p(y, p) {
      p & /*question*/
      2 && i !== (i = new Date(
        /*question*/
        y[1].options.optionsData[0]
      ).toISOString().split("T")[0]) && k(a, "min", i), p & /*question*/
      2 && v !== (v = new Date(
        /*question*/
        y[1].options.optionsData[1]
      ).toISOString().split("T")[0]) && k(a, "max", v), /*answer*/
      y[0].answer ? d ? d.p(y, p) : (d = or(y), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    d(y) {
      y && A(e), d && d.d(), u = !1, w();
    }
  };
}
function or(t) {
  let e = new Date(
    /*answer*/
    t[0].answer
  ).toDateString() + "", l;
  return {
    c() {
      l = W(e);
    },
    m(r, s) {
      F(r, l, s);
    },
    p(r, s) {
      s & /*answer*/
      1 && e !== (e = new Date(
        /*answer*/
        r[0].answer
      ).toDateString() + "") && Q(l, e);
    },
    d(r) {
      r && A(l);
    }
  };
}
function wa(t) {
  let e, l, r = (
    /*question*/
    t[1].question + ""
  ), s, n, o, a, i = (
    /*question*/
    (t[1].prompt || "") + ""
  ), v, c, u, w, d, y, p, x = (
    /*question*/
    t[1].required && Xl()
  ), h = (
    /*question*/
    t[1].type == "short_answer" && Zl(t)
  ), b = (
    /*question*/
    t[1].type == "paragraph" && Jl(t)
  ), g = (
    /*question*/
    t[1].type == "multiple" && Ql(t)
  ), z = (
    /*question*/
    t[1].type == "dropdown" && tr(t)
  ), $ = (
    /*question*/
    t[1].type == "checkboxes" && rr(t)
  ), C = (
    /*question*/
    t[1].type == "date" && nr(t)
  );
  return {
    c() {
      e = O("article"), l = O("h6"), s = W(r), n = D(), x && x.c(), o = D(), a = O("p"), v = W(i), c = D(), h && h.c(), u = D(), b && b.c(), w = D(), g && g.c(), d = D(), z && z.c(), y = D(), $ && $.c(), p = D(), C && C.c(), k(l, "class", "svelte-89v8l3"), k(a, "class", "description svelte-89v8l3"), k(e, "class", "border question-box svelte-89v8l3");
    },
    m(m, I) {
      F(m, e, I), _(e, l), _(l, s), _(l, n), x && x.m(l, null), _(e, o), _(e, a), _(a, v), _(e, c), h && h.m(e, null), _(e, u), b && b.m(e, null), _(e, w), g && g.m(e, null), _(e, d), z && z.m(e, null), _(e, y), $ && $.m(e, null), _(e, p), C && C.m(e, null);
    },
    p(m, [I]) {
      I & /*question*/
      2 && r !== (r = /*question*/
      m[1].question + "") && Q(s, r), /*question*/
      m[1].required ? x || (x = Xl(), x.c(), x.m(l, null)) : x && (x.d(1), x = null), I & /*question*/
      2 && i !== (i = /*question*/
      (m[1].prompt || "") + "") && Q(v, i), /*question*/
      m[1].type == "short_answer" ? h ? h.p(m, I) : (h = Zl(m), h.c(), h.m(e, u)) : h && (h.d(1), h = null), /*question*/
      m[1].type == "paragraph" ? b ? b.p(m, I) : (b = Jl(m), b.c(), b.m(e, w)) : b && (b.d(1), b = null), /*question*/
      m[1].type == "multiple" ? g ? g.p(m, I) : (g = Ql(m), g.c(), g.m(e, d)) : g && (g.d(1), g = null), /*question*/
      m[1].type == "dropdown" ? z ? z.p(m, I) : (z = tr(m), z.c(), z.m(e, y)) : z && (z.d(1), z = null), /*question*/
      m[1].type == "checkboxes" ? $ ? $.p(m, I) : ($ = rr(m), $.c(), $.m(e, p)) : $ && ($.d(1), $ = null), /*question*/
      m[1].type == "date" ? C ? C.p(m, I) : (C = nr(m), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    i: we,
    o: we,
    d(m) {
      m && A(e), x && x.d(), h && h.d(), b && b.d(), g && g.d(), z && z.d(), $ && $.d(), C && C.d();
    }
  };
}
function fa(t, e, l) {
  let { question: r = void 0 } = e, { answer: s = { id: String(r.id), answer: "" } } = e, n, o = "", a = [];
  function i(h) {
    ua(h.target.value, r.type, r.validate) ? (l(2, n = ""), l(3, o = "")) : (l(2, n = "invalid"), l(3, o = `The answer doesn't meet the requirements. (${r.validate.replace(":", "-")})`));
  }
  function v(h) {
    l(0, s.answer = Number(h.target.value), s);
  }
  function c(h) {
    if (a.length == 0)
      for (let b in r.options.optionsData)
        a.push(!1);
    a[Number(h.target.value)] ? a[Number(h.target.value)] = !1 : a[Number(h.target.value)] = !0, l(0, s.answer = a, s);
  }
  function u(h) {
    l(0, s.answer = new Date(h.target.value).getTime(), s);
  }
  function w() {
    s.answer = this.value, l(0, s);
  }
  function d() {
    s.answer = this.value, l(0, s);
  }
  function y(h) {
    this.value;
  }
  function p() {
    s.answer = Jr(this), l(0, s);
  }
  function x(h) {
    this.value;
  }
  return t.$$set = (h) => {
    "question" in h && l(1, r = h.question), "answer" in h && l(0, s = h.answer);
  }, [
    s,
    r,
    n,
    o,
    i,
    v,
    c,
    u,
    w,
    d,
    y,
    p,
    x
  ];
}
class il extends Pr {
  constructor(e) {
    super(), kr(this, e, fa, wa, pr, { question: 1, answer: 0 }, ya);
  }
  get question() {
    return this.$$.ctx[1];
  }
  set question(e) {
    this.$$set({ question: e }), ge();
  }
  get answer() {
    return this.$$.ctx[0];
  }
  set answer(e) {
    this.$$set({ answer: e }), ge();
  }
}
_r(il, { question: {}, answer: {} }, [], [], !0);
let rt;
const ma = new Uint8Array(16);
function pa() {
  if (!rt && (rt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rt(ma);
}
const Z = [];
for (let t = 0; t < 256; ++t)
  Z.push((t + 256).toString(16).slice(1));
function ba(t, e = 0) {
  return Z[t[e + 0]] + Z[t[e + 1]] + Z[t[e + 2]] + Z[t[e + 3]] + "-" + Z[t[e + 4]] + Z[t[e + 5]] + "-" + Z[t[e + 6]] + Z[t[e + 7]] + "-" + Z[t[e + 8]] + Z[t[e + 9]] + "-" + Z[t[e + 10]] + Z[t[e + 11]] + Z[t[e + 12]] + Z[t[e + 13]] + Z[t[e + 14]] + Z[t[e + 15]];
}
const ga = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ar = {
  randomUUID: ga
};
function $a(t, e, l) {
  if (ar.randomUUID && !e && !t)
    return ar.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || pa)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    l = l || 0;
    for (let s = 0; s < 16; ++s)
      e[l + s] = r[s];
    return e;
  }
  return ba(r);
}
function ha(t) {
  br(t, "svelte-17ley6w", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}body.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--on-surface);background-color:var(--surface);overflow-x:hidden}label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:.75rem;vertical-align:baseline}a.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,i.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{vertical-align:bottom}a.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}a.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,i.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{user-select:none}body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-scrollbar,body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-scrollbar-thumb,body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}.primary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--primary)!important}.primary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--primary)!important}.primary-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--secondary)!important}.secondary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--secondary)!important}.secondary-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--tertiary)!important}.tertiary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--tertiary)!important}.tertiary-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--error)!important}.error-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--error)!important}.error-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-dim.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-bright.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-lowest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-low.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-high.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-highest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--inverse-primary)!important}.surface-dim.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-dim)!important}.surface-bright.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-low)!important}.surface-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container)!important}.surface-container-high.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-low)!important}.black.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#000!important}.black-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#000!important}.black-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#000!important}.white.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff!important}.white-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#fff!important}.white-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#fff!important}.transparent.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:transparent!important}.transparent-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:transparent!important}.fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:center!important}.bottom-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:end!important}.top-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:start!important}.left-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:start;justify-content:start!important}.right-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:end;justify-content:end!important}.center-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:center;justify-content:center!important}.red.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.red6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f44336!important}.red-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#f44336!important}.red-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#f44336!important}.red1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffebee!important}.red2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffcdd2!important}.red3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ef9a9a!important}.red4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e57373!important}.red5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ef5350!important}.red7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e53935!important}.red8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d32f2f!important}.red9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c62828!important}.red10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b71c1c!important}.pink.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.pink6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e91e63!important}.pink-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#e91e63!important}.pink-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#e91e63!important}.pink1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fce4ec!important}.pink2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f8bbd0!important}.pink3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f48fb1!important}.pink4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f06292!important}.pink5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ec407a!important}.pink7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d81b60!important}.pink8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c2185b!important}.pink9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ad1457!important}.pink10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#880e4f!important}.purple.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.purple6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9c27b0!important}.purple-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#9c27b0!important}.purple-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#9c27b0!important}.purple1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f3e5f5!important}.purple2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e1bee7!important}.purple3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ce93d8!important}.purple4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ba68c8!important}.purple5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ab47bc!important}.purple7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#8e24aa!important}.purple8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7b1fa2!important}.purple9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#6a1b9a!important}.purple10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4a148c!important}.deep-purple.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.deep-purple6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#673ab7!important}.deep-purple-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#673ab7!important}.deep-purple-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#673ab7!important}.deep-purple1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ede7f6!important}.deep-purple2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d1c4e9!important}.deep-purple3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b39ddb!important}.deep-purple4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9575cd!important}.deep-purple5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7e57c2!important}.deep-purple7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#5e35b1!important}.deep-purple8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#512da8!important}.deep-purple9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4527a0!important}.deep-purple10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#311b92!important}.indigo.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.indigo6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#3f51b5!important}.indigo-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#3f51b5!important}.indigo-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#3f51b5!important}.indigo1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e8eaf6!important}.indigo2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c5cae9!important}.indigo3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9fa8da!important}.indigo4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7986cb!important}.indigo5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#5c6bc0!important}.indigo7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#3949ab!important}.indigo8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#303f9f!important}.indigo9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#283593!important}.indigo10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1a237e!important}.blue.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.blue6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#2196f3!important}.blue-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#2196f3!important}.blue-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#2196f3!important}.blue1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e3f2fd!important}.blue2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bbdefb!important}.blue3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#90caf9!important}.blue4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#64b5f6!important}.blue5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#42a5f5!important}.blue7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1e88e5!important}.blue8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1976d2!important}.blue9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1565c0!important}.blue10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0d47a1!important}.light-blue.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.light-blue6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#03a9f4!important}.light-blue-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#03a9f4!important}.light-blue-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#03a9f4!important}.light-blue1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e1f5fe!important}.light-blue2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b3e5fc!important}.light-blue3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#81d4fa!important}.light-blue4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4fc3f7!important}.light-blue5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#29b6f6!important}.light-blue7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#039be5!important}.light-blue8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0288d1!important}.light-blue9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0277bd!important}.light-blue10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#01579b!important}.cyan.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.cyan6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00bcd4!important}.cyan-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#00bcd4!important}.cyan-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#00bcd4!important}.cyan1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e0f7fa!important}.cyan2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b2ebf2!important}.cyan3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#80deea!important}.cyan4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4dd0e1!important}.cyan5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#26c6da!important}.cyan7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00acc1!important}.cyan8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0097a7!important}.cyan9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00838f!important}.cyan10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#006064!important}.teal.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.teal6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#009688!important}.teal-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#009688!important}.teal-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#009688!important}.teal1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e0f2f1!important}.teal2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b2dfdb!important}.teal3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#80cbc4!important}.teal4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4db6ac!important}.teal5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#26a69a!important}.teal7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00897b!important}.teal8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00796b!important}.teal9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00695c!important}.teal10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#004d40!important}.green.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.green6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4caf50!important}.green-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#4caf50!important}.green-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#4caf50!important}.green1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e8f5e9!important}.green2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c8e6c9!important}.green3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#a5d6a7!important}.green4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#81c784!important}.green5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#66bb6a!important}.green7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#43a047!important}.green8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#388e3c!important}.green9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#2e7d32!important}.green10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1b5e20!important}.light-green.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.light-green6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#8bc34a!important}.light-green-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#8bc34a!important}.light-green-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#8bc34a!important}.light-green1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f1f8e9!important}.light-green2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#dcedc8!important}.light-green3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c5e1a5!important}.light-green4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#aed581!important}.light-green5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9ccc65!important}.light-green7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7cb342!important}.light-green8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#689f38!important}.light-green9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#558b2f!important}.light-green10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#33691e!important}.lime.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.lime6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#cddc39!important}.lime-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#cddc39!important}.lime-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#cddc39!important}.lime1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f9fbe7!important}.lime2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f0f4c3!important}.lime3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e6ee9c!important}.lime4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#dce775!important}.lime5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d4e157!important}.lime7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c0ca33!important}.lime8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#afb42b!important}.lime9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9e9d24!important}.lime10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#827717!important}.yellow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.yellow6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffeb3b!important}.yellow-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ffeb3b!important}.yellow-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ffeb3b!important}.yellow1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fffde7!important}.yellow2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff9c4!important}.yellow3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff59d!important}.yellow4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff176!important}.yellow5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffee58!important}.yellow7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fdd835!important}.yellow8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fbc02d!important}.yellow9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f9a825!important}.yellow10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f57f17!important}.amber.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.amber6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffc107!important}.amber-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ffc107!important}.amber-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ffc107!important}.amber1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff8e1!important}.amber2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffecb3!important}.amber3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffe082!important}.amber4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffd54f!important}.amber5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffca28!important}.amber7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffb300!important}.amber8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffa000!important}.amber9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff8f00!important}.amber10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff6f00!important}.orange.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.orange6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff9800!important}.orange-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ff9800!important}.orange-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ff9800!important}.orange1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff3e0!important}.orange2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffe0b2!important}.orange3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffcc80!important}.orange4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffb74d!important}.orange5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffa726!important}.orange7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fb8c00!important}.orange8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f57c00!important}.orange9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ef6c00!important}.orange10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e65100!important}.deep-orange.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.deep-orange6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff5722!important}.deep-orange-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ff5722!important}.deep-orange-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ff5722!important}.deep-orange1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fbe9e7!important}.deep-orange2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffccbc!important}.deep-orange3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffab91!important}.deep-orange4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff8a65!important}.deep-orange5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff7043!important}.deep-orange7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f4511e!important}.deep-orange8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e64a19!important}.deep-orange9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d84315!important}.deep-orange10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bf360c!important}.brown.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.brown6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#795548!important}.brown-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#795548!important}.brown-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#795548!important}.brown1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#efebe9!important}.brown2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d7ccc8!important}.brown3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bcaaa4!important}.brown4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#a1887f!important}.brown5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#8d6e63!important}.brown7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#6d4c41!important}.brown8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#5d4037!important}.brown9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4e342e!important}.brown10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#3e2723!important}.blue-grey.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.blue-grey6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#607d8b!important}.blue-grey-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#607d8b!important}.blue-grey-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#607d8b!important}.blue-grey1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#eceff1!important}.blue-grey2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#cfd8dc!important}.blue-grey3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b0bec5!important}.blue-grey4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#90a4ae!important}.blue-grey5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#78909c!important}.blue-grey7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#546e7a!important}.blue-grey8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#455a64!important}.blue-grey9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#37474f!important}.blue-grey10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#263238!important}.grey.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.grey6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9e9e9e!important}.grey-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#9e9e9e!important}.grey-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#9e9e9e!important}.grey1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fafafa!important}.grey2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f5f5f5!important}.grey3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#eee!important}.grey4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e0e0e0!important}.grey5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bdbdbd!important}.grey7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#757575!important}.grey8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#616161!important}.grey9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#424242!important}.grey10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#212121!important}.horizontal.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.small-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:1rem 0!important}.large-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:1.5rem 0!important}.small-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:.5rem 0!important}.divider.vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:none!important}.small-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate2)!important}.large-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate3)!important}.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:var(---round)}.small-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:var(---round)!important}.top-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---round:2rem}.small-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---round:.5rem}.large-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---round:3.5rem}.no-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.square.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.top-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:0!important}.top-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:50%}:is(button,.button,.chip).circle.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-17ley6w:is(.circle,.square)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:none}:is(.circle,.square).small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i,img,video,svg),:is(.circle,.square).chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1rem!important}.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:transparent!important}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.auto-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.tiny-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.small-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.top-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:1rem}.no-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:0}.auto-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:auto}.tiny-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:.25rem}.small-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:.5rem}.large-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:1.5rem}.left-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:var(---margin)!important}.right-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-end:var(---margin)!important}.top-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:var(---margin)!important}.bottom-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-end:var(---margin)!important}.no-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1!important}.opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:0!important}.small-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.75!important}.medium-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.5!important}.large-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.25!important}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.auto-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.tiny-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.small-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.top-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:1rem}.no-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:0}.auto-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:auto}.tiny-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:.25rem}.small-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:.5rem}.large-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:1.5rem}.left-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-inline-start:var(---padding)!important}.right-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-inline-end:var(---padding)!important}.top-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-block-start:var(---padding)!important}.bottom-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-block-end:var(---padding)!important}.front.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{z-index:10!important}.back.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{z-index:-10!important}.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:0}.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-end:0}.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0}.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-end:0}.center.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(-50%,-50%)}.scroll.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{overflow:auto}.no-scroll.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{overflow:hidden}.small-width.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:12rem!important}.medium-height.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:24rem!important}.large-height.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:36rem!important}.wrap.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:block;white-space:normal}.no-wrap.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.s),.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.s),.m.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.m),.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.m),.s.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.l),.s.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.l),.m.s.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.l){display:none}}body.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-family:var(--font);font-size:.875rem;line-height:1.25}h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}.svelte-17ley6w+h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:1.75rem}.link.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--primary)!important}.inverse-link.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--inverse-primary)!important}.truncate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{white-space:nowrap!important}.small-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:.75rem}.medium-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:.875rem}.large-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:1rem}.upper.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-transform:uppercase}.lower.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-transform:lowercase}.capitalize.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-transform:capitalize}.bold.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-weight:700}.overline.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-decoration:line-through}.underline.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-decoration:underline}.italic.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-style:italic}p.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:.5rem 0}.no-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:normal}.tiny-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:1.25}.small-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:1.5}.medium-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:1.75}.large-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:2}.extra-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:2.25}.wave.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.wave.light.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.wave.row.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).transparent.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.no-wave.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(:hover,:active):after{display:none}.badge.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--error);color:var(--error)}.badge.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--outline);color:var(--primary)}.extend.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button):is([disabled]){pointer-events:none}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is([disabled]):before,.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2rem}article.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.svelte-17ley6w+article.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}article.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:12rem}article.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:20rem}article.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:32rem}.chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--outline)}.chip.round.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1rem}.chip.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.25rem}.chip.round.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:block;border:none;opacity:0;visibility:hidden;position:fixed;box-shadow:var(--elevate2);color:var(--on-surface);background-color:var(--surface-container-high);padding:1rem;z-index:100;inset-inline-start:50%;inset-block-start:10%;min-inline-size:20rem;max-inline-size:100%;max-block-size:80%;overflow-x:hidden;overflow-y:auto;transition:var(--speed3) all,0s background-color;border-radius:1rem;transform:translate(-50%,-4rem)}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::backdrop{display:none}dialog.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:25%;block-size:25%}dialog.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:50%;block-size:50%}dialog.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:75%;block-size:75%}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.active,[open]){opacity:1;visibility:visible;transform:translate(-50%)}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.active,[open]):is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(-100%);border-radius:unset;border-end-start-radius:1rem;border-end-end-radius:1rem}dialog.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:unset;border-start-end-radius:1rem;border-end-end-radius:1rem;background-color:var(--surface);transform:translate(-100%)}dialog.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:0;inset-inline-start:auto;inset-inline-end:0;inset-block-end:auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:unset;border-start-start-radius:1rem;border-end-start-radius:1rem;background-color:var(--surface);transform:translate(100%)}dialog.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:auto;inset-inline-start:0;inset-inline-end:auto;inset-block-end:0;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(100%);border-radius:unset;border-start-start-radius:1rem;border-start-end-radius:1rem}dialog.max.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;transform:translateY(4rem);background-color:var(--surface)}dialog.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:20rem}dialog.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:32rem}dialog.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:44rem}dialog.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:16rem}dialog.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:24rem}dialog.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:32rem}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3rem;margin-block-end:2rem}.svelte-17ley6w+.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}.field.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem}.field.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3.5rem}.field.extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4rem}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:.25rem .25rem 0 0}.field.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:.25rem}.field.round.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.25rem}.field.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.5rem}.field.round.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.75rem}.field.round.extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2rem}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-inner-spin-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-outer-spin-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-decoration,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-cancel-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-results-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-results-decoration{display:none}.field.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-17ley6w:not(.border,.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select),.field.round.svelte-17ley6w:not(.border)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-17ley6w:not(.border,.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select),.field.invalid.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select),.field.invalid.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:disabled{cursor:not-allowed}.field.small.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4.5rem}.field.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:5.5rem}.field.large.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:6.5rem}.field.extra.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:7.5rem}.field.label.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,select){padding-block-start:1rem}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,select){padding-block-start:0}.field.label.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute;inset-block-start:-.5rem;inset-inline-start:1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.small.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3.5rem;line-height:3.5rem}.field.label.large.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4.5rem;line-height:4.5rem}.field.label.extra.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:5rem;line-height:5rem}.field.label.border.prefix.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.round.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.field.label.border.prefix.round.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.prefix.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:3rem}.field.label.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-17ley6w:not(.fill)>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w:focus+label.svelte-17ley6w.svelte-17ley6w:after{border-block-start:.125rem solid var(--primary)}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.svelte-17ley6w>.svelte-17ley6w:focus+label.svelte-17ley6w.svelte-17ley6w{color:var(--primary)}.field.label.invalid.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.field.label.invalid.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{color:var(--error)!important;border-color:var(--error)!important}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.helper,.error){inset-inline-start:1.5rem}.grid.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-17ley6w+.grid.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}.grid.no-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:0rem}.grid.medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:1.5rem}.grid.large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:2rem}.s1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 1}.s2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 2}.s3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 3}.s4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 4}.s5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 5}.s6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 6}.s7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 7}.s8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 8}.s9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 9}.s10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 10}.s11.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 11}.s12.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 1}.m2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 2}.m3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 3}.m4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 4}.m5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 5}.m6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 6}.m7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 7}.m8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 8}.m9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 9}.m10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 10}.m11.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 11}.m12.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 1}.l2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 2}.l3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 3}.l4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 4}.l5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 5}.l6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 6}.l7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 7}.l8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 8}.l9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 9}.l10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 10}.l11.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 11}.l12.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 12}}i.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.absolute.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute}.fixed.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:fixed}:is(.absolute,.fixed).left.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-17ley6w:is(dialog,menu)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(header,footer){padding:0;background-color:inherit}article.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:.5rem}:is(img,svg,video).tiny.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:100%;margin:0 auto}.svelte-17ley6w:is(button,.button,.chip):not(.transparent)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border:.25rem solid transparent}.svelte-17ley6w:is(button.small,.button.small,.chip)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:2rem}.svelte-17ley6w:is(button,.button,.chip.medium)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2rem}:is(img,svg,video).empty-state.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{max-inline-size:100%;inline-size:24rem}.svelte-17ley6w:is(button,.button,.chip,.field)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-17ley6w:is(.tabs) .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-17ley6w:is(button,.button,.chip)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg),.svelte-17ley6w:is(button,.button,.chip)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:0 -.5rem}.svelte-17ley6w:is(button,.button)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:-1.5rem}.svelte-17ley6w:is(.circle,.square)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:0}.extend.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.row.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-17ley6w:not(.divider,.small-divider,.medium-divider,.large-divider)+nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.left,.right,.top,.bottom),.svelte-17ley6w:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(a){margin-block-start:1rem}.svelte-17ley6w:is(nav,.row)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.svelte-17ley6w:is(nav,.row)>.svelte-17ley6w:not(.tooltip,menu)>.svelte-17ley6w.svelte-17ley6w{margin-block-start:0;margin-block-end:0}nav.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.row.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{gap:0}:is(nav,.row).medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{gap:1.5rem}:is(nav,.row).large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{gap:2rem}.row.wrap.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;flex-wrap:wrap}.svelte-17ley6w:is(nav,.row)>.border.no-margin.svelte-17ley6w+.border.no-margin.svelte-17ley6w.svelte-17ley6w{border-inline-start:0}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right,.top,.bottom){border:0;position:fixed;color:var(--on-surface);transform:none;z-index:100;inset-inline-start:0;inset-block-start:0;inset-block-end:0;inset-inline-end:0;block-size:auto;inline-size:auto;text-align:center;padding:.5rem}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:5rem;justify-content:start;flex-direction:column;background-color:var(--surface)}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:5rem;justify-content:center;flex-direction:row;background-color:var(--surface-container)}nav.right-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{justify-content:end}@media only screen and (max-width: 600px){}.overlay.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;visibility:visible}.page.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.svelte-17ley6w:is(.page,dialog):not(.active) .page.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-17ley6w-to-page ease}.page.active.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(0, -4rem)}.page.active.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(0, 4rem)}.page.active.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(-4rem, 0)}.page.active.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(4rem, 0)}@keyframes svelte-17ley6w-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:relative;inline-size:100%;block-size:.5rem;color:var(--primary);background:var(--surface-container-highest);border-radius:0;flex:none;border:none}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,[value]):after{content:"";position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;clip-path:none;background:currentColor;animation:1.6s svelte-17ley6w-to-linear ease infinite}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,[value])::-moz-progress-bar{animation:1.6s svelte-17ley6w-to-linear ease infinite}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,[value])::-webkit-progress-value{animation:1.6s svelte-17ley6w-to-linear ease infinite}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-progress-bar{background:none}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-progress-value{background:currentColor}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-moz-progress-bar{background:currentColor}.svelte-17ley6w:is(nav,.row,.field)>progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,.small,.medium,.large){flex:auto}@keyframes svelte-17ley6w-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-17ley6w-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.radio.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.switch.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-17ley6w:is(.checkbox,.radio)>input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:1.5rem;block-size:1.5rem;opacity:0}.svelte-17ley6w:is(.checkbox,.radio,.switch)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-17ley6w:is(.checkbox,.radio)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(:empty){padding-inline-start:.25rem}.svelte-17ley6w:is(.checkbox,.radio,.switch)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before,.icon.svelte-17ley6w>span.svelte-17ley6w>i.svelte-17ley6w.svelte-17ley6w{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.radio.svelte-17ley6w>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"radio_button_unchecked"}.radio.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w.svelte-17ley6w:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-17ley6w>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:""!important;font-variation-settings:unset!important}.svelte-17ley6w:is(.checkbox,.radio)>input.svelte-17ley6w:not(:disabled):is(:focus,:hover)+span.svelte-17ley6w.svelte-17ley6w:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.svelte-17ley6w:is(.checkbox,.radio)>input.svelte-17ley6w:checked+span.svelte-17ley6w.svelte-17ley6w:before,:is(.checkbox,.radio).icon.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w>i.svelte-17ley6w{color:var(--primary)}.icon.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w>i.svelte-17ley6w:first-child,.icon.svelte-17ley6w>span.svelte-17ley6w>i.svelte-17ley6w.svelte-17ley6w:last-child{opacity:0}.icon.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w>i.svelte-17ley6w:last-child,.icon.svelte-17ley6w>span.svelte-17ley6w>i.svelte-17ley6w.svelte-17ley6w:first-child{opacity:1}.svelte-17ley6w:is(.checkbox,.radio,.switch)>input.svelte-17ley6w:disabled+span.svelte-17ley6w.svelte-17ley6w{opacity:.5;cursor:not-allowed}.checkbox.svelte-17ley6w+.checkbox.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.radio.svelte-17ley6w+.radio.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.switch.svelte-17ley6w+.switch.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:.5rem}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:4rem}.slider.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:8rem}.slider.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:12rem}.slider.vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-17ley6w:is(nav,.row,.field)>.slider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{visibility:visible;animation:var(--speed2) svelte-17ley6w-to-snackbar}.snackbar.active.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform-end:translate(-50%, -1rem)}@keyframes svelte-17ley6w-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:40%}}.tabs.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding:0 1rem;gap:2rem}.tabs.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-17ley6w+.tabs.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}.tooltip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:12rem;white-space:normal}.tooltip.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:16rem;white-space:normal}.svelte-17ley6w:hover>.tooltip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-17ley6w:hover>.tooltip.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(-100%,-50%) scale(1)}.svelte-17ley6w:hover>.tooltip.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(100%,-50%) scale(1)}.svelte-17ley6w:hover>.tooltip.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:0}.tooltip.medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:-1rem}.tooltip.large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:-1.5rem}.tooltip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:var(---space)!important}.tooltip.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-end:var(---space)!important}.tooltip.max.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00000080}.small-blur.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---blur:.5rem}.large-blur.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---blur:1.5rem}.shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00000050}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to bottom,black,transparent)}.csur-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:none!important;position:fixed;opacity:0;transition:opacity .4s;z-index:99;word-break:break-all;overflow:hidden}.bottom_right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{right:1rem;bottom:1rem;width:450px;max-width:calc(100% - 2rem)}.bottom_left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{left:1rem;bottom:1rem;width:450px;max-width:calc(100% - 2rem)}.bottom_banner.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{bottom:0;left:0;width:100%}.bottom_banner.simple.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-top:0;padding-bottom:0}.bottom_banner.simple.svelte-17ley6w .banner_content.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{max-width:960px}.bottom_banner.svelte-17ley6w .banner_content.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;max-height:20rem;margin:0 auto}.bottom_banner.svelte-17ley6w .banner_content .item_q.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{width:70%;margin-right:15px}.bottom_banner.svelte-17ley6w .banner_content .item.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{justify-content:right;align-items:center;display:flex;width:25%}article.csur-container.svelte-17ley6w .description.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.8}.close-btn.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute;top:0rem;right:0;margin-top:1.5rem;margin-right:1rem;cursor:pointer}.csur-container.svelte-17ley6w h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-top:0}.app-progress-bar.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute;width:100%;top:0;left:0;margin-top:1px;border-radius:24px;height:5px}.questions-tab.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{width:480px}.copyright.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:right;margin-top:.5rem;margin-bottom:0}');
}
function ir(t, e, l) {
  const r = t.slice();
  return r[25] = e[l], r[26] = e, r[27] = l, r;
}
function vr(t) {
  let e, l, r, s, n, o, a, i, v, c, u, w, d, y, p, x, h, b, g, z, $, C, m, I, R, T = (
    /*loading*/
    t[7] && dr()
  ), L = !/*data*/
  (t[1][0].site.promptWindowPosition == "bottom_banner" && /*data*/
  t[1][0].type == "simple") && cr(t), E = (
    /*data*/
    t[1][0].type == "simple" && !/*submitted*/
    t[6] && yr(t)
  );
  function U(M, B) {
    return (
      /*submitted*/
      M[6] ? ka : xa
    );
  }
  let j = U(t), q = j(t);
  function ke(M, B) {
    return B & /*tabActive*/
    8 && (b = null), b == null && (b = !!/*tabActive*/
    M[3].includes("max")), b ? Ca : za;
  }
  let le = ke(t, -1), re = le(t);
  const Fe = [Ea, Ia], ce = [];
  function De(M, B) {
    return (
      /*data*/
      M[1][0].type == "advanced" ? 0 : 1
    );
  }
  return z = De(t), $ = ce[z] = Fe[z](t), {
    c() {
      e = O("article"), T && T.c(), l = D(), r = O("label"), r.innerHTML = '<input type="radio" name="radio3_" class="svelte-17ley6w"/> <span class="svelte-17ley6w"><i class="svelte-17ley6w">close</i> <i class="svelte-17ley6w">done</i></span>', s = D(), L && L.c(), n = D(), o = O("div"), a = O("div"), E && E.c(), i = D(), v = O("div"), q.c(), c = D(), u = O("p"), u.innerHTML = 'Powered by <a href="https://github.com/ocoke/CranSurvey" class="svelte-17ley6w">CranSurvey</a>', d = D(), y = O("div"), x = D(), h = O("dialog"), re.c(), g = D(), $.c(), k(r, "class", "radio icon close-btn svelte-17ley6w"), k(a, "class", "item_q svelte-17ley6w"), k(v, "class", "item svelte-17ley6w"), k(o, "class", "banner_content svelte-17ley6w"), k(u, "class", "description copyright svelte-17ley6w"), k(e, "class", w = "secondary-container csur-container " + /*data*/
      t[1][0].site.promptWindowPosition + " " + /*data*/
      t[1][0].type + " svelte-17ley6w"), k(
        e,
        "style",
        /*opacity*/
        t[2]
      ), k(y, "class", p = "overlay " + /*tabActive*/
      t[3] + " svelte-17ley6w"), k(h, "class", C = /*tabActive*/
      t[3] + " questions-tab svelte-17ley6w");
    },
    m(M, B) {
      F(M, e, B), T && T.m(e, null), _(e, l), _(e, r), _(e, s), L && L.m(e, null), _(e, n), _(e, o), _(o, a), E && E.m(a, null), _(o, i), _(o, v), q.m(v, null), _(e, c), _(e, u), F(M, d, B), F(M, y, B), F(M, x, B), F(M, h, B), re.m(h, null), _(h, g), ce[z].m(h, null), m = !0, I || (R = X(
        r,
        "click",
        /*click_handler*/
        t[17]
      ), I = !0);
    },
    p(M, B) {
      /*loading*/
      M[7] ? T || (T = dr(), T.c(), T.m(e, l)) : T && (T.d(1), T = null), /*data*/
      M[1][0].site.promptWindowPosition == "bottom_banner" && /*data*/
      M[1][0].type == "simple" ? L && (L.d(1), L = null) : L ? L.p(M, B) : (L = cr(M), L.c(), L.m(e, n)), /*data*/
      M[1][0].type == "simple" && !/*submitted*/
      M[6] ? E ? (E.p(M, B), B & /*data, submitted*/
      66 && ve(E, 1)) : (E = yr(M), E.c(), ve(E, 1), E.m(a, null)) : E && (ut(), $e(E, 1, 1, () => {
        E = null;
      }), yt()), j === (j = U(M)) && q ? q.p(M, B) : (q.d(1), q = j(M), q && (q.c(), q.m(v, null))), (!m || B & /*data*/
      2 && w !== (w = "secondary-container csur-container " + /*data*/
      M[1][0].site.promptWindowPosition + " " + /*data*/
      M[1][0].type + " svelte-17ley6w")) && k(e, "class", w), (!m || B & /*opacity*/
      4) && k(
        e,
        "style",
        /*opacity*/
        M[2]
      ), (!m || B & /*tabActive*/
      8 && p !== (p = "overlay " + /*tabActive*/
      M[3] + " svelte-17ley6w")) && k(y, "class", p), le === (le = ke(M, B)) && re ? re.p(M, B) : (re.d(1), re = le(M), re && (re.c(), re.m(h, g)));
      let Se = z;
      z = De(M), z === Se ? ce[z].p(M, B) : (ut(), $e(ce[Se], 1, 1, () => {
        ce[Se] = null;
      }), yt(), $ = ce[z], $ ? $.p(M, B) : ($ = ce[z] = Fe[z](M), $.c()), ve($, 1), $.m(h, null)), (!m || B & /*tabActive*/
      8 && C !== (C = /*tabActive*/
      M[3] + " questions-tab svelte-17ley6w")) && k(h, "class", C);
    },
    i(M) {
      m || (ve(E), ve($), m = !0);
    },
    o(M) {
      $e(E), $e($), m = !1;
    },
    d(M) {
      M && (A(e), A(d), A(y), A(x), A(h)), T && T.d(), L && L.d(), E && E.d(), q.d(), re.d(), ce[z].d(), I = !1, R();
    }
  };
}
function dr(t) {
  let e;
  return {
    c() {
      e = O("progress"), k(e, "class", "app-progress-bar svelte-17ley6w");
    },
    m(l, r) {
      F(l, e, r);
    },
    d(l) {
      l && A(e);
    }
  };
}
function cr(t) {
  let e, l, r = (
    /*data*/
    t[1][0].title + ""
  ), s, n, o, a = (
    /*data*/
    t[1][0].description + ""
  ), i, v, c, u = (
    /*response*/
    t[8] && ur(t)
  );
  return {
    c() {
      e = O("div"), l = O("h5"), s = W(r), n = D(), o = O("p"), i = W(a), v = D(), u && u.c(), c = Xr(), k(l, "class", "svelte-17ley6w"), k(o, "class", "description svelte-17ley6w"), k(e, "class", "svelte-17ley6w");
    },
    m(w, d) {
      F(w, e, d), _(e, l), _(l, s), _(e, n), _(e, o), _(o, i), F(w, v, d), u && u.m(w, d), F(w, c, d);
    },
    p(w, d) {
      d & /*data*/
      2 && r !== (r = /*data*/
      w[1][0].title + "") && Q(s, r), d & /*data*/
      2 && a !== (a = /*data*/
      w[1][0].description + "") && Q(i, a), /*response*/
      w[8] ? u ? u.p(w, d) : (u = ur(w), u.c(), u.m(c.parentNode, c)) : u && (u.d(1), u = null);
    },
    d(w) {
      w && (A(e), A(v), A(c)), u && u.d(w);
    }
  };
}
function ur(t) {
  let e, l, r;
  return {
    c() {
      e = O("article"), l = O("p"), r = W(
        /*response*/
        t[8]
      ), vt(l, "color", "var(--error)"), k(l, "class", "svelte-17ley6w"), k(e, "class", "border question-box svelte-17ley6w"), vt(e, "margin-bottom", "1rem");
    },
    m(s, n) {
      F(s, e, n), _(e, l), _(l, r);
    },
    p(s, n) {
      n & /*response*/
      256 && Q(
        r,
        /*response*/
        s[8]
      );
    },
    d(s) {
      s && A(e);
    }
  };
}
function yr(t) {
  let e, l, r;
  function s(o) {
    t[18](o);
  }
  let n = {
    question: (
      /*data*/
      t[1][0].questions[0]
    )
  };
  return (
    /*ans*/
    t[5][0] !== void 0 && (n.answer = /*ans*/
    t[5][0]), e = new il({ props: n }), dt.push(() => $r(e, "answer", s)), {
      c() {
        hr(e.$$.fragment);
      },
      m(o, a) {
        qt(e, o, a), r = !0;
      },
      p(o, a) {
        const i = {};
        a & /*data*/
        2 && (i.question = /*data*/
        o[1][0].questions[0]), !l && a & /*ans*/
        32 && (l = !0, i.answer = /*ans*/
        o[5][0], gr(() => l = !1)), e.$set(i);
      },
      i(o) {
        r || (ve(e.$$.fragment, o), r = !0);
      },
      o(o) {
        $e(e.$$.fragment, o), r = !1;
      },
      d(o) {
        Vt(e, o);
      }
    }
  );
}
function ka(t) {
  let e;
  return {
    c() {
      e = O("article"), e.innerHTML = '<p class=" svelte-17ley6w">Your response has been recorded.</p>', k(e, "class", "border question-box svelte-17ley6w");
    },
    m(l, r) {
      F(l, e, r);
    },
    p: we,
    d(l) {
      l && A(e);
    }
  };
}
function xa(t) {
  let e;
  function l(n, o) {
    if (
      /*data*/
      n[1][0].type == "advanced" || /*data*/
      n[1][0].type == "prompt"
    )
      return Pa;
    if (
      /*data*/
      n[1][0].type == "simple"
    )
      return _a;
  }
  let r = l(t), s = r && r(t);
  return {
    c() {
      e = O("nav"), s && s.c(), k(e, "class", "right-align svelte-17ley6w");
    },
    m(n, o) {
      F(n, e, o), s && s.m(e, null);
    },
    p(n, o) {
      r === (r = l(n)) && s ? s.p(n, o) : (s && s.d(1), s = r && r(n), s && (s.c(), s.m(e, null)));
    },
    d(n) {
      n && A(e), s && s.d();
    }
  };
}
function _a(t) {
  let e, l, r;
  return {
    c() {
      e = O("button"), e.textContent = "Submit", k(e, "class", "border round svelte-17ley6w");
    },
    m(s, n) {
      F(s, e, n), l || (r = X(
        e,
        "click",
        /*submitQuestion*/
        t[10]
      ), l = !0);
    },
    p: we,
    d(s) {
      s && A(e), l = !1, r();
    }
  };
}
function Pa(t) {
  let e, l, r;
  return {
    c() {
      e = O("button"), e.textContent = "View", k(e, "class", "border round svelte-17ley6w");
    },
    m(s, n) {
      F(s, e, n), l || (r = X(
        e,
        "click",
        /*openQuestionsTab*/
        t[11]
      ), l = !0);
    },
    p: we,
    d(s) {
      s && A(e), l = !1, r();
    }
  };
}
function za(t) {
  let e, l, r;
  return {
    c() {
      e = O("label"), e.innerHTML = '<input type="radio" name="radio3_" class="svelte-17ley6w"/> <span class="svelte-17ley6w"><i class="svelte-17ley6w">fullscreen</i></span>', k(e, "class", "radio icon close-btn svelte-17ley6w");
    },
    m(s, n) {
      F(s, e, n), l || (r = X(
        e,
        "click",
        /*click_handler_2*/
        t[20]
      ), l = !0);
    },
    p: we,
    d(s) {
      s && A(e), l = !1, r();
    }
  };
}
function Ca(t) {
  let e, l, r;
  return {
    c() {
      e = O("label"), e.innerHTML = '<input type="radio" name="radio3_" class="svelte-17ley6w"/> <span class="svelte-17ley6w"><i class="svelte-17ley6w">close_fullscreen</i></span>', k(e, "class", "radio icon close-btn svelte-17ley6w");
    },
    m(s, n) {
      F(s, e, n), l || (r = X(
        e,
        "click",
        /*click_handler_1*/
        t[19]
      ), l = !0);
    },
    p: we,
    d(s) {
      s && A(e), l = !1, r();
    }
  };
}
function Ia(t) {
  let e, l = (
    /*data*/
    t[1][0].questions[0].question + ""
  ), r, s, n, o = (
    /*data*/
    t[1][0].questions[0].prompt + ""
  ), a, i, v, c, u, w;
  return {
    c() {
      e = O("h5"), r = W(l), s = D(), n = O("p"), a = W(o), i = D(), v = O("nav"), c = O("button"), c.textContent = "Cancel", vt(e, "margin-top", "0"), k(e, "class", "svelte-17ley6w"), k(n, "class", "svelte-17ley6w"), k(c, "class", "border svelte-17ley6w"), k(v, "class", "right-align svelte-17ley6w");
    },
    m(d, y) {
      F(d, e, y), _(e, r), F(d, s, y), F(d, n, y), _(n, a), F(d, i, y), F(d, v, y), _(v, c), u || (w = X(
        c,
        "click",
        /*click_handler_4*/
        t[23]
      ), u = !0);
    },
    p(d, y) {
      y & /*data*/
      2 && l !== (l = /*data*/
      d[1][0].questions[0].question + "") && Q(r, l), y & /*data*/
      2 && o !== (o = /*data*/
      d[1][0].questions[0].prompt + "") && Q(a, o);
    },
    i: we,
    o: we,
    d(d) {
      d && (A(e), A(s), A(n), A(i), A(v)), u = !1, w();
    }
  };
}
function Ea(t) {
  let e, l = (
    /*data*/
    t[1][0].title + ""
  ), r, s, n, o = (
    /*data*/
    t[1][0].description + ""
  ), a, i, v, c, u, w, d, y, p, x, h, b = Te(
    /*data*/
    t[1][0].questions
  ), g = [];
  for (let $ = 0; $ < b.length; $ += 1)
    g[$] = wr(ir(t, b, $));
  const z = ($) => $e(g[$], 1, 1, () => {
    g[$] = null;
  });
  return {
    c() {
      e = O("h5"), r = W(l), s = D(), n = O("p"), a = W(o), i = D(), v = O("div");
      for (let $ = 0; $ < g.length; $ += 1)
        g[$].c();
      c = D(), u = O("nav"), w = O("button"), w.textContent = "Cancel", d = D(), y = O("button"), y.textContent = "Submit", vt(e, "margin-top", "0"), k(e, "class", "svelte-17ley6w"), k(n, "class", "description svelte-17ley6w"), k(v, "class", "svelte-17ley6w"), k(w, "class", "border svelte-17ley6w"), k(y, "class", "round svelte-17ley6w"), k(u, "class", "right-align svelte-17ley6w");
    },
    m($, C) {
      F($, e, C), _(e, r), F($, s, C), F($, n, C), _(n, a), F($, i, C), F($, v, C);
      for (let m = 0; m < g.length; m += 1)
        g[m] && g[m].m(v, null);
      F($, c, C), F($, u, C), _(u, w), _(u, d), _(u, y), p = !0, x || (h = [
        X(
          w,
          "click",
          /*click_handler_3*/
          t[22]
        ),
        X(
          y,
          "click",
          /*submitQuestion*/
          t[10]
        )
      ], x = !0);
    },
    p($, C) {
      if ((!p || C & /*data*/
      2) && l !== (l = /*data*/
      $[1][0].title + "") && Q(r, l), (!p || C & /*data*/
      2) && o !== (o = /*data*/
      $[1][0].description + "") && Q(a, o), C & /*data, ans*/
      34) {
        b = Te(
          /*data*/
          $[1][0].questions
        );
        let m;
        for (m = 0; m < b.length; m += 1) {
          const I = ir($, b, m);
          g[m] ? (g[m].p(I, C), ve(g[m], 1)) : (g[m] = wr(I), g[m].c(), ve(g[m], 1), g[m].m(v, null));
        }
        for (ut(), m = b.length; m < g.length; m += 1)
          z(m);
        yt();
      }
    },
    i($) {
      if (!p) {
        for (let C = 0; C < b.length; C += 1)
          ve(g[C]);
        p = !0;
      }
    },
    o($) {
      g = g.filter(Boolean);
      for (let C = 0; C < g.length; C += 1)
        $e(g[C]);
      p = !1;
    },
    d($) {
      $ && (A(e), A(s), A(n), A(i), A(v), A(c), A(u)), bt(g, $), x = !1, he(h);
    }
  };
}
function wr(t) {
  let e, l, r;
  function s(o) {
    t[21](
      o,
      /*index*/
      t[27]
    );
  }
  let n = { question: (
    /*question*/
    t[25]
  ) };
  return (
    /*ans*/
    t[5][
      /*index*/
      t[27]
    ] !== void 0 && (n.answer = /*ans*/
    t[5][
      /*index*/
      t[27]
    ]), e = new il({ props: n }), dt.push(() => $r(e, "answer", s)), {
      c() {
        hr(e.$$.fragment);
      },
      m(o, a) {
        qt(e, o, a), r = !0;
      },
      p(o, a) {
        t = o;
        const i = {};
        a & /*data*/
        2 && (i.question = /*question*/
        t[25]), !l && a & /*ans*/
        32 && (l = !0, i.answer = /*ans*/
        t[5][
          /*index*/
          t[27]
        ], gr(() => l = !1)), e.$set(i);
      },
      i(o) {
        r || (ve(e.$$.fragment, o), r = !0);
      },
      o(o) {
        $e(e.$$.fragment, o), r = !1;
      },
      d(o) {
        Vt(e, o);
      }
    }
  );
}
function Oa(t) {
  let e, l, r, s = (
    /*data*/
    t[1].length > 0 && vr(t)
  );
  return {
    c() {
      e = O("body"), s && s.c(), k(e, "style", l = /*theme*/
      t[4][
        /*mode*/
        t[0]
      ]), k(e, "class", "svelte-17ley6w");
    },
    m(n, o) {
      F(n, e, o), s && s.m(e, null), r = !0;
    },
    p(n, [o]) {
      /*data*/
      n[1].length > 0 ? s ? (s.p(n, o), o & /*data*/
      2 && ve(s, 1)) : (s = vr(n), s.c(), ve(s, 1), s.m(e, null)) : s && (ut(), $e(s, 1, 1, () => {
        s = null;
      }), yt()), (!r || o & /*theme, mode*/
      17 && l !== (l = /*theme*/
      n[4][
        /*mode*/
        n[0]
      ])) && k(e, "style", l);
    },
    i(n) {
      r || (ve(s), r = !0);
    },
    o(n) {
      $e(s), r = !1;
    },
    d(n) {
      n && A(e), s && s.d();
    }
  };
}
function Na(t, e, l) {
  let { server: r = void 0 } = e, { id: s = void 0 } = e, { domain: n = void 0 } = e, { themeColor: o = void 0 } = e, { mode: a = void 0 } = e, { timeout: i = void 0 } = e;
  (!r || !s && !n) && console.warn("[csur-client]: Please check the required params.");
  let v = [], c = "opacity: 0;", u = "", w = "";
  localStorage.getItem("cransurvey-usrid") ? u = localStorage.getItem("cransurvey-usrid") : (u = $a(), localStorage.setItem("cransurvey-usrid", u)), fetch(`${r}/api/client/get?sid=${s || ""}&domain=${n || ""}`, { method: "GET" }).then((E) => E.json()).then((E) => {
    l(1, v = E.data), setTimeout(
      () => {
        l(2, c = "opacity: 1;");
      },
      100
    );
  });
  let d = { light: "", dark: "" };
  ln(o).then((E) => {
    Object.entries(E).forEach(([U, j]) => {
      Object.entries(j).forEach(([q, ke]) => {
        const le = q.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        l(4, d[U] += `--${le}: ${ke.toUpperCase()}; `, d);
      });
    });
  });
  function y() {
    l(2, c = "opacity: 0;"), setTimeout(
      () => {
        l(1, v = []);
      },
      400
    );
  }
  let p = [], x, h = !1, b = "";
  function g() {
    if (v[0]) {
      w && l(3, w = "");
      for (let E in v[0].questions)
        if (v[0].questions[E].required && !p[E]) {
          l(8, b = "Please answer all the required questions.");
          return;
        }
      l(7, h = !0), fetch(`${r}/api/survey/collect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uniqueId: v[0].id,
          userId: u,
          answers: p
        })
      }).then((E) => E.json()).then((E) => {
        if (E.code == 0)
          l(6, x = !0), l(7, h = !1), l(8, b = ""), setTimeout(
            () => {
              y();
            },
            2500
          );
        else if (E.code == 3003) {
          l(8, b = "Please answer all the required questions."), l(7, h = !1);
          return;
        } else if (E.code == 3002) {
          l(8, b = "The answer doesn't meet the requirements."), l(7, h = !1);
          return;
        } else {
          l(8, b = "Something went wrong. Please try again later."), l(7, h = !1);
          return;
        }
      });
    }
  }
  function z() {
    l(3, w = "active"), window.innerWidth < 550 && l(3, w += " max");
  }
  i && !p && setTimeout(
    () => {
      y();
    },
    i
  );
  const $ = () => {
    y();
  };
  function C(E) {
    t.$$.not_equal(p[0], E) && (p[0] = E, l(5, p));
  }
  const m = () => {
    l(3, w = "active");
  }, I = () => {
    l(3, w += " max");
  };
  function R(E, U) {
    t.$$.not_equal(p[U], E) && (p[U] = E, l(5, p));
  }
  const T = () => {
    l(3, w = "");
  }, L = () => {
    l(3, w = "");
  };
  return t.$$set = (E) => {
    "server" in E && l(12, r = E.server), "id" in E && l(13, s = E.id), "domain" in E && l(14, n = E.domain), "themeColor" in E && l(15, o = E.themeColor), "mode" in E && l(0, a = E.mode), "timeout" in E && l(16, i = E.timeout);
  }, [
    a,
    v,
    c,
    w,
    d,
    p,
    x,
    h,
    b,
    y,
    g,
    z,
    r,
    s,
    n,
    o,
    i,
    $,
    C,
    m,
    I,
    R,
    T,
    L
  ];
}
class Br extends Pr {
  constructor(e) {
    super(), kr(
      this,
      e,
      Na,
      Oa,
      pr,
      {
        server: 12,
        id: 13,
        domain: 14,
        themeColor: 15,
        mode: 0,
        timeout: 16
      },
      ha
    );
  }
  get server() {
    return this.$$.ctx[12];
  }
  set server(e) {
    this.$$set({ server: e }), ge();
  }
  get id() {
    return this.$$.ctx[13];
  }
  set id(e) {
    this.$$set({ id: e }), ge();
  }
  get domain() {
    return this.$$.ctx[14];
  }
  set domain(e) {
    this.$$set({ domain: e }), ge();
  }
  get themeColor() {
    return this.$$.ctx[15];
  }
  set themeColor(e) {
    this.$$set({ themeColor: e }), ge();
  }
  get mode() {
    return this.$$.ctx[0];
  }
  set mode(e) {
    this.$$set({ mode: e }), ge();
  }
  get timeout() {
    return this.$$.ctx[16];
  }
  set timeout(e) {
    this.$$set({ timeout: e }), ge();
  }
}
customElements.define("csur-client", _r(Br, { server: {}, id: {}, domain: {}, themeColor: {}, mode: {}, timeout: {} }, [], [], !0));
const Aa = new Br({
  target: document.getElementsByTagName("csur-client")[0]
});
export {
  Aa as default
};
