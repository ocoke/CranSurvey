var Ol = Object.defineProperty;
var Ll = (t, e, l) => e in t ? Ol(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var be = (t, e, l) => (Ll(t, typeof e != "symbol" ? e + "" : e, l), l);
function ce() {
}
function dl(t) {
  return t();
}
function St() {
  return /* @__PURE__ */ Object.create(null);
}
function fe(t) {
  t.forEach(dl);
}
function zl(t) {
  return typeof t == "function";
}
function ul(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Sl(t) {
  return Object.keys(t).length === 0;
}
function C(t, e) {
  t.appendChild(e);
}
function ml(t, e, l) {
  const s = ql(t);
  if (!s.getElementById(e)) {
    const r = I("style");
    r.id = e, r.textContent = l, Nl(s, r);
  }
}
function ql(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Nl(t, e) {
  return C(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function F(t, e, l) {
  t.insertBefore(e, l || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function vt(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function I(t) {
  return document.createElement(t);
}
function H(t) {
  return document.createTextNode(t);
}
function O() {
  return H(" ");
}
function jl() {
  return H("");
}
function J(t, e, l, s) {
  return t.addEventListener(e, l, s), () => t.removeEventListener(e, l, s);
}
function x(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function Vl(t) {
  return Array.from(t.childNodes);
}
function Q(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function _e(t, e) {
  t.value = e ?? "";
}
function et(t, e, l, s) {
  l == null ? t.style.removeProperty(e) : t.style.setProperty(e, l, s ? "important" : "");
}
function qt(t, e, l) {
  for (let s = 0; s < t.options.length; s += 1) {
    const r = t.options[s];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  (!l || e !== void 0) && (t.selectedIndex = -1);
}
function Gl(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Ul(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (l) => {
      e[l.slot || "default"] = !0;
    }
  ), e;
}
let wt;
function Se(t) {
  wt = t;
}
const $e = [], tt = [];
let Re = [];
const mt = [], Hl = /* @__PURE__ */ Promise.resolve();
let pt = !1;
function Yl() {
  pt || (pt = !0, Hl.then(me));
}
function lt(t) {
  Re.push(t);
}
function pl(t) {
  mt.push(t);
}
const ct = /* @__PURE__ */ new Set();
let Ee = 0;
function me() {
  if (Ee !== 0)
    return;
  const t = wt;
  do {
    try {
      for (; Ee < $e.length; ) {
        const e = $e[Ee];
        Ee++, Se(e), Wl(e.$$);
      }
    } catch (e) {
      throw $e.length = 0, Ee = 0, e;
    }
    for (Se(null), $e.length = 0, Ee = 0; tt.length; )
      tt.pop()();
    for (let e = 0; e < Re.length; e += 1) {
      const l = Re[e];
      ct.has(l) || (ct.add(l), l());
    }
    Re.length = 0;
  } while ($e.length);
  for (; mt.length; )
    mt.pop()();
  pt = !1, ct.clear(), Se(t);
}
function Wl(t) {
  if (t.fragment !== null) {
    t.update(), fe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(lt);
  }
}
function Jl(t) {
  const e = [], l = [];
  Re.forEach((s) => t.indexOf(s) === -1 ? e.push(s) : l.push(s)), l.forEach((s) => s()), Re = e;
}
const Ke = /* @__PURE__ */ new Set();
let Te;
function st() {
  Te = {
    r: 0,
    c: [],
    p: Te
    // parent group
  };
}
function rt() {
  Te.r || fe(Te.c), Te = Te.p;
}
function oe(t, e) {
  t && t.i && (Ke.delete(t), t.i(e));
}
function pe(t, e, l, s) {
  if (t && t.o) {
    if (Ke.has(t))
      return;
    Ke.add(t), Te.c.push(() => {
      Ke.delete(t), s && (l && t.d(1), s());
    }), t.o(e);
  } else
    s && s();
}
function Pe(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function fl(t, e, l) {
  const s = t.$$.props[e];
  s !== void 0 && (t.$$.bound[s] = l, l(t.$$.ctx[s]));
}
function gl(t) {
  t && t.c();
}
function xt(t, e, l) {
  const { fragment: s, after_update: r } = t.$$;
  s && s.m(e, l), lt(() => {
    const n = t.$$.on_mount.map(dl).filter(zl);
    t.$$.on_destroy ? t.$$.on_destroy.push(...n) : fe(n), t.$$.on_mount = [];
  }), r.forEach(lt);
}
function _t(t, e) {
  const l = t.$$;
  l.fragment !== null && (Jl(l.after_update), fe(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function Xl(t, e) {
  t.$$.dirty[0] === -1 && ($e.push(t), Yl(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kl(t, e, l, s, r, n, o = null, v = [-1]) {
  const a = wt;
  Se(t);
  const b = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: ce,
    not_equal: r,
    bound: St(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: St(),
    dirty: v,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(b.root);
  let h = !1;
  if (b.ctx = l ? l(t, e.props || {}, (c, d, ...i) => {
    const y = i.length ? i[0] : d;
    return b.ctx && r(b.ctx[c], b.ctx[c] = y) && (!b.skip_bound && b.bound[c] && b.bound[c](y), h && Xl(t, c)), d;
  }) : [], b.update(), h = !0, fe(b.before_update), b.fragment = s ? s(b.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Vl(e.target);
      b.fragment && b.fragment.l(c), c.forEach(R);
    } else
      b.fragment && b.fragment.c();
    e.intro && oe(t.$$.fragment), xt(t, e.target, e.anchor), me();
  }
  Se(a);
}
let wl;
typeof HTMLElement == "function" && (wl = class extends HTMLElement {
  constructor(e, l, s) {
    super();
    /** The Svelte component constructor */
    be(this, "$$ctor");
    /** Slots */
    be(this, "$$s");
    /** The Svelte component instance */
    be(this, "$$c");
    /** Whether or not the custom element is connected */
    be(this, "$$cn", !1);
    /** Component props data */
    be(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    be(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    be(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    be(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    be(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = l, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, l, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(l), this.$$c) {
      const r = this.$$c.$on(e, l);
      this.$$l_u.set(l, r);
    }
    super.addEventListener(e, l, s);
  }
  removeEventListener(e, l, s) {
    if (super.removeEventListener(e, l, s), this.$$c) {
      const r = this.$$l_u.get(l);
      r && (r(), this.$$l_u.delete(l));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return () => {
          let o;
          return {
            c: function() {
              o = I("slot"), n !== "default" && x(o, "name", n);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(b, h) {
              F(b, o, h);
            },
            d: function(b) {
              b && R(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const l = {}, s = Ul(this);
      for (const n of this.$$s)
        n in s && (l[n] = [e(n)]);
      for (const n of this.attributes) {
        const o = this.$$g_p(n.name);
        o in this.$$d || (this.$$d[o] = Qe(o, n.value, this.$$p_d, "toProp"));
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
      const r = () => {
        this.$$r = !0;
        for (const n in this.$$p_d)
          if (this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]], this.$$p_d[n].reflect) {
            const o = Qe(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const n in this.$$l)
        for (const o of this.$$l[n]) {
          const v = this.$$c.$on(n, o);
          this.$$l_u.set(o, v);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, l, s) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Qe(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function Qe(t, e, l, s) {
  var n;
  const r = (n = l[t]) == null ? void 0 : n.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !l[t])
    return e;
  if (s === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function xl(t, e, l, s, r, n) {
  let o = class extends wl {
    constructor() {
      super(t, l, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (v) => (e[v].attribute || v).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((v) => {
    Object.defineProperty(o.prototype, v, {
      get() {
        return this.$$c && v in this.$$c ? this.$$c[v] : this.$$d[v];
      },
      set(a) {
        var b;
        a = Qe(v, a, e), this.$$d[v] = a, (b = this.$$c) == null || b.$set({ [v]: a });
      }
    });
  }), s.forEach((v) => {
    Object.defineProperty(o.prototype, v, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[v];
      }
    });
  }), n && (o = n(o)), t.element = /** @type {any} */
  o, o;
}
class _l {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    be(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    be(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    _t(this, 1), this.$destroy = ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, l) {
    if (!zl(l))
      return ce;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(l), () => {
      const r = s.indexOf(l);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Sl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Kl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Kl);
let qe, yt, dt, zt;
const ne = {
  light: "",
  dark: ""
}, Nt = [];
async function Ql(t) {
  return await new Promise((e) => setTimeout(e, t));
}
function Zl() {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Be(t, e) {
  try {
    return typeof t == "string" ? (e ?? document).querySelector(t) : t;
  } catch {
    return null;
  }
}
function he(t, e) {
  try {
    return typeof t == "string" ? (e ?? document).querySelectorAll(t) : t ?? Nt;
  } catch {
    return Nt;
  }
}
function ze(t, e) {
  var l;
  return ((l = t == null ? void 0 : t.classList) == null ? void 0 : l.contains(e)) ?? !1;
}
function nt(t, e) {
  var l;
  return ((l = t == null ? void 0 : t.tagName) == null ? void 0 : l.toLowerCase()) === e;
}
function Ve(t, e) {
  var l;
  return ((l = t == null ? void 0 : t.type) == null ? void 0 : l.toLowerCase()) === e;
}
function Me(t, e) {
  var l;
  (l = t == null ? void 0 : t.classList) == null || l.add(e);
}
function ee(t, e) {
  var l;
  (l = t == null ? void 0 : t.classList) == null || l.remove(e);
}
function ke(t, e, l) {
  t == null || t.addEventListener(e, l, !0);
}
function es(t, e, l) {
  t == null || t.removeEventListener(e, l, !0);
}
function ts(t, e) {
  var l;
  (l = e == null ? void 0 : e.parentNode) == null || l.insertBefore(t, e);
}
function Ct(t) {
  return t == null ? void 0 : t.previousElementSibling;
}
function Cl(t) {
  return t == null ? void 0 : t.nextElementSibling;
}
function Ue(t) {
  return t == null ? void 0 : t.parentElement;
}
function ls(t) {
  const e = document.createElement("div");
  for (const l in t)
    e.setAttribute(l, t[l]);
  return e;
}
function He(t) {
  const e = t;
  Ve(e, "number") && !e.value && (e.value = ""), e.placeholder || (e.placeholder = " "), t.getAttribute("data-ui") && It(t, null);
}
function ss(t) {
  It(t.currentTarget, null, null, t);
}
function rs(t) {
  const e = t.currentTarget, l = Ue(e), s = Be("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", l);
  s && s.focus();
}
function ns(t) {
  const e = t.currentTarget;
  He(e);
}
function os(t) {
  const e = t.currentTarget;
  He(e);
}
function Ml(t) {
  es(document.body, "click", Ml);
  const e = t.target;
  he("menu.active").forEach((s) => Tt(e, s, t));
}
function vs(t) {
  const e = t.currentTarget;
  ee(e, "active"), qe && clearTimeout(qe);
}
function as(t) {
  const e = t.currentTarget;
  Mt(e);
}
function is(t) {
  const e = t.currentTarget;
  Pt(e);
}
function bs(t) {
  const e = t.currentTarget;
  Mt(e, t);
}
function hs(t) {
  const e = t.currentTarget;
  Pt(e, t);
}
function cs(t) {
  const e = t.currentTarget;
  Pl(e);
}
function jt() {
  yt && clearTimeout(yt), yt = setTimeout(() => {
    Fe();
  }, 180);
}
function Mt(t, e) {
  if (e && e.key === "Enter") {
    const r = Ct(t);
    return Ve(r, "file") ? r.click() : void 0;
  }
  const l = t, s = Cl(t);
  Ve(s, "text") && (s.value = l.files ? Array.from(l.files).map((r) => r.name).join(", ") : "", s.readOnly = !0, s.addEventListener("keydown", bs), He(s));
}
function Pt(t, e) {
  if (e && e.key === "Enter") {
    const r = Ct(t);
    return Ve(r, "color") ? r.click() : void 0;
  }
  const l = t, s = Cl(t);
  Ve(s, "text") && (s.readOnly = !0, s.value = l.value, s.addEventListener("keydown", hs), He(s));
}
function Pl(t) {
  const e = Ue(t), l = Be("span", e), s = he("input", e);
  if (!s.length || !l)
    return;
  const n = 1.25 * (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16) * 100 / s[0].offsetWidth, o = [], v = [];
  for (let i = 0; i < s.length; i++) {
    const y = parseFloat(s[i].min), m = parseFloat(s[i].max), w = parseFloat(s[i].value), k = y || 0, f = m || 100, u = w || 0, T = (u - k) * 100 / (f - k), g = n / 2 - n * T / 100;
    o.push(T + g), v.push(u), y !== k && (s[i].min = `${k}`), m !== f && (s[i].max = `${f}`), w !== u && (s[i].value = `${u}`);
  }
  let a = o[0], b = 0, h = 100 - b - a, c = v[0], d = v[1] || 0;
  s.length > 1 && (a = Math.abs(o[1] - o[0]), b = o[1] > o[0] ? o[0] : o[1], h = 100 - b - a, d > c && (c = v[1] || 0, d = v[0])), e.style.setProperty("---start", `${b}%`), e.style.setProperty("---end", `${h}%`), e.style.setProperty("---value1", `'${c}'`), e.style.setProperty("---value2", `'${d}'`);
}
async function It(t, e, l, s) {
  if (!(!e && (e = Be(t.getAttribute("data-ui")), !e))) {
    if (nt(e, "dialog"))
      return await ds(t, e);
    if (nt(e, "menu"))
      return Tt(t, e, s);
    if (ze(e, "snackbar"))
      return zs(t, e, l);
    if (ze(e, "page"))
      return ys(t, e);
    if (Ye(t), ze(e, "active"))
      return ee(e, "active");
    Me(e, "active");
  }
}
function Ye(t) {
  const e = Ue(t);
  if (!ze(e, "tabs"))
    return;
  he("a", e).forEach((s) => ee(s, "active")), Me(t, "active");
}
function ys(t, e) {
  Ye(t);
  const l = Ue(e);
  if (l)
    for (let s = 0; s < l.children.length; s++)
      ze(l.children[s], "page") && ee(l.children[s], "active");
  Me(e, "active");
}
function Tt(t, e, l) {
  dt && clearTimeout(dt), dt = setTimeout(() => {
    if (ke(document.body, "click", Ml), Ye(t), ze(e, "active")) {
      if (!l)
        return ee(e, "active");
      const r = l.target, n = Be(r.getAttribute("data-ui") ?? ""), o = r.closest("menu"), v = !Be("menu", r.closest("[data-ui]") ?? void 0);
      return n && n !== o ? Tt(r, n) : !n && !v && o ? !1 : ee(e, "active");
    }
    he("menu.active").forEach((r) => ee(r, "active")), Me(e, "active");
  }, 90);
}
async function ds(t, e) {
  var a;
  (a = document.activeElement) == null || a.blur(), Ye(t);
  let l = Ct(e);
  const s = e, r = ze(e, "active") || s.open, n = ze(e, "modal"), o = Ue(e), v = nt(o, "nav");
  ze(l, "overlay") || (l = ls({ class: "overlay" }), ts(l, e), await Ql(90)), l.onclick = () => {
    n || (ee(t, "active"), ee(e, "active"), ee(l, "active"), s.close());
  }, v && he("dialog, a, .overlay", o).forEach((h) => {
    ee(h, "active"), h.open && h.close();
  }), r ? (ee(t, "active"), ee(l, "active"), ee(e, "active"), s.close()) : (!nt(t, "button") && !ze(t, "button") && !ze(t, "chip") && Me(t, "active"), Me(l, "active"), Me(e, "active"), n ? s.showModal() : s.show());
}
function zs(t, e, l) {
  var r;
  (r = document.activeElement) == null || r.blur(), Ye(t), he(".snackbar.active").forEach((n) => ee(n, "active")), Me(e, "active"), ke(e, "click", vs), qe && clearTimeout(qe), l !== -1 && (qe = setTimeout(() => {
    ee(e, "active");
  }, l ?? 6e3));
}
function us() {
  if (ne.light && ne.dark)
    return ne;
  const t = document.createElement("body");
  t.className = "light", document.body.appendChild(t);
  const e = document.createElement("body");
  e.className = "dark", document.body.appendChild(e);
  const l = getComputedStyle(t), s = getComputedStyle(e), r = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let n = 0; n < r.length; n++)
    ne.light += r[n] + ":" + l.getPropertyValue(r[n]) + ";", ne.dark += r[n] + ":" + s.getPropertyValue(r[n]) + ";";
  return document.body.removeChild(t), document.body.removeChild(e), ne;
}
function ms(t) {
  if (!t || !globalThis.materialDynamicColors)
    return us();
  const e = /dark/i.test(document.body.className) ? "dark" : "light";
  return t.light && t.dark ? (ne.light = t.light, ne.dark = t.dark, document.body.setAttribute("style", t[e]), t) : globalThis.materialDynamicColors(t).then((l) => {
    const s = (r) => {
      let n = "";
      for (const o in r) {
        const v = o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), a = r[o];
        n += "--" + v + ":" + a + ";";
      }
      return n;
    };
    return ne.light = s(l.light), ne.dark = s(l.dark), document.body.setAttribute("style", ne[e]), ne;
  });
}
function ps(t) {
  if (!t)
    return /dark/i.test(document.body.className) ? "dark" : "light";
  document.body.classList.remove("light", "dark"), document.body.classList.add(t);
  const e = t === "light" ? ne.light : ne.dark;
  return globalThis.materialDynamicColors && document.body.setAttribute("style", e), t;
}
function fs() {
  zt || (zt = new MutationObserver(jt), zt.observe(document.body, { attributes: !0, attributeFilter: ["value", "max", "min"], childList: !0, subtree: !0 }), jt());
}
function Fe(t, e) {
  if (t) {
    if (t === "setup")
      return fs();
    if (t === "guid")
      return Zl();
    if (t === "mode")
      return ps(e);
    if (t === "theme")
      return ms(e);
    const a = Be(t);
    if (!a)
      return;
    It(a, a, e);
  }
  he("[data-ui]").forEach((a) => ke(a, "click", ss)), he(".field > label").forEach((a) => ke(a, "click", rs)), he(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea").forEach((a) => {
    ke(a, "focus", ns), ke(a, "blur", os), He(a);
  }), he(".field > input[type=file]").forEach((a) => {
    ke(a, "change", as), Mt(a);
  }), he(".field > input[type=color]").forEach((a) => {
    ke(a, "change", is), Pt(a);
  }), he(".slider > input[type=range]").forEach((a) => {
    ke(a, "input", cs), Pl(a);
  });
}
globalThis.addEventListener && globalThis.addEventListener("load", async () => await Fe("setup"));
globalThis.beercss = Fe;
globalThis.ui = Fe;
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
function re(t) {
  return t < 0 ? -1 : t === 0 ? 0 : 1;
}
function Ne(t, e, l) {
  return (1 - l) * t + l * e;
}
function gs(t, e, l) {
  return l < t ? t : l > e ? e : l;
}
function ot(t, e, l) {
  return l < t ? t : l > e ? e : l;
}
function Vt(t) {
  return t = t % 360, t < 0 && (t = t + 360), t;
}
function Dt(t) {
  return t = t % 360, t < 0 && (t = t + 360), t;
}
function ks(t, e) {
  return Dt(e - t) <= 180 ? 1 : -1;
}
function Il(t, e) {
  return 180 - Math.abs(Math.abs(t - e) - 180);
}
function ft(t, e) {
  const l = t[0] * e[0][0] + t[1] * e[0][1] + t[2] * e[0][2], s = t[0] * e[1][0] + t[1] * e[1][1] + t[2] * e[1][2], r = t[0] * e[2][0] + t[1] * e[2][1] + t[2] * e[2][2];
  return [l, s, r];
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
const Tl = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
], ws = [
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
], At = [95.047, 100, 108.883];
function at(t, e, l) {
  return (255 << 24 | (t & 255) << 16 | (e & 255) << 8 | l & 255) >>> 0;
}
function Gt(t) {
  const e = De(t[0]), l = De(t[1]), s = De(t[2]);
  return at(e, l, s);
}
function xs(t) {
  return t >> 24 & 255;
}
function it(t) {
  return t >> 16 & 255;
}
function bt(t) {
  return t >> 8 & 255;
}
function ht(t) {
  return t & 255;
}
function Dl(t, e, l) {
  const s = ws, r = s[0][0] * t + s[0][1] * e + s[0][2] * l, n = s[1][0] * t + s[1][1] * e + s[1][2] * l, o = s[2][0] * t + s[2][1] * e + s[2][2] * l, v = De(r), a = De(n), b = De(o);
  return at(v, a, b);
}
function _s(t) {
  const e = xe(it(t)), l = xe(bt(t)), s = xe(ht(t));
  return ft([e, l, s], Tl);
}
function Cs(t, e, l) {
  const s = At, r = (t + 16) / 116, n = e / 500 + r, o = r - l / 200, v = Ze(n), a = Ze(r), b = Ze(o), h = v * s[0], c = a * s[1], d = b * s[2];
  return Dl(h, c, d);
}
function Ms(t) {
  const e = xe(it(t)), l = xe(bt(t)), s = xe(ht(t)), r = Tl, n = r[0][0] * e + r[0][1] * l + r[0][2] * s, o = r[1][0] * e + r[1][1] * l + r[1][2] * s, v = r[2][0] * e + r[2][1] * l + r[2][2] * s, a = At, b = n / a[0], h = o / a[1], c = v / a[2], d = je(b), i = je(h), y = je(c), m = 116 * i - 16, w = 500 * (d - i), k = 200 * (i - y);
  return [m, w, k];
}
function Ps(t) {
  const e = Ce(t), l = De(e);
  return at(l, l, l);
}
function gt(t) {
  const e = _s(t)[1];
  return 116 * je(e / 100) - 16;
}
function Ce(t) {
  return 100 * Ze((t + 16) / 116);
}
function kt(t) {
  return je(t / 100) * 116 - 16;
}
function xe(t) {
  const e = t / 255;
  return e <= 0.040449936 ? e / 12.92 * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100;
}
function De(t) {
  const e = t / 100;
  let l = 0;
  return e <= 31308e-7 ? l = e * 12.92 : l = 1.055 * Math.pow(e, 1 / 2.4) - 0.055, gs(0, 255, Math.round(l * 255));
}
function Is() {
  return At;
}
function je(t) {
  const e = 0.008856451679035631, l = 24389 / 27;
  return t > e ? Math.pow(t, 1 / 3) : (l * t + 16) / 116;
}
function Ze(t) {
  const e = 0.008856451679035631, l = 24389 / 27, s = t * t * t;
  return s > e ? s : (116 * t - 16) / l;
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
class ue {
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
  static make(e = Is(), l = 200 / Math.PI * Ce(50) / 100, s = 50, r = 2, n = !1) {
    const o = e, v = o[0] * 0.401288 + o[1] * 0.650173 + o[2] * -0.051461, a = o[0] * -0.250268 + o[1] * 1.204414 + o[2] * 0.045854, b = o[0] * -2079e-6 + o[1] * 0.048952 + o[2] * 0.953127, h = 0.8 + r / 10, c = h >= 0.9 ? Ne(0.59, 0.69, (h - 0.9) * 10) : Ne(0.525, 0.59, (h - 0.8) * 10);
    let d = n ? 1 : h * (1 - 1 / 3.6 * Math.exp((-l - 42) / 92));
    d = d > 1 ? 1 : d < 0 ? 0 : d;
    const i = h, y = [
      d * (100 / v) + 1 - d,
      d * (100 / a) + 1 - d,
      d * (100 / b) + 1 - d
    ], m = 1 / (5 * l + 1), w = m * m * m * m, k = 1 - w, f = w * l + 0.1 * k * k * Math.cbrt(5 * l), u = Ce(s) / e[1], T = 1.48 + Math.sqrt(u), g = 0.725 / Math.pow(u, 0.2), P = g, p = [
      Math.pow(f * y[0] * v / 100, 0.42),
      Math.pow(f * y[1] * a / 100, 0.42),
      Math.pow(f * y[2] * b / 100, 0.42)
    ], _ = [
      400 * p[0] / (p[0] + 27.13),
      400 * p[1] / (p[1] + 27.13),
      400 * p[2] / (p[2] + 27.13)
    ], $ = (2 * _[0] + _[1] + 0.05 * _[2]) * g;
    return new ue(u, $, g, P, c, i, y, f, Math.pow(f, 0.25), T);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(e, l, s, r, n, o, v, a, b, h) {
    this.n = e, this.aw = l, this.nbb = s, this.ncb = r, this.c = n, this.nc = o, this.rgbD = v, this.fl = a, this.fLRoot = b, this.z = h;
  }
}
ue.DEFAULT = ue.make();
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
class W {
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
  constructor(e, l, s, r, n, o, v, a, b) {
    this.hue = e, this.chroma = l, this.j = s, this.q = r, this.m = n, this.s = o, this.jstar = v, this.astar = a, this.bstar = b;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(e) {
    const l = this.jstar - e.jstar, s = this.astar - e.astar, r = this.bstar - e.bstar, n = Math.sqrt(l * l + s * s + r * r);
    return 1.41 * Math.pow(n, 0.63);
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(e) {
    return W.fromIntInViewingConditions(e, ue.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(e, l) {
    const s = (e & 16711680) >> 16, r = (e & 65280) >> 8, n = e & 255, o = xe(s), v = xe(r), a = xe(n), b = 0.41233895 * o + 0.35762064 * v + 0.18051042 * a, h = 0.2126 * o + 0.7152 * v + 0.0722 * a, c = 0.01932141 * o + 0.11916382 * v + 0.95034478 * a, d = 0.401288 * b + 0.650173 * h - 0.051461 * c, i = -0.250268 * b + 1.204414 * h + 0.045854 * c, y = -2079e-6 * b + 0.048952 * h + 0.953127 * c, m = l.rgbD[0] * d, w = l.rgbD[1] * i, k = l.rgbD[2] * y, f = Math.pow(l.fl * Math.abs(m) / 100, 0.42), u = Math.pow(l.fl * Math.abs(w) / 100, 0.42), T = Math.pow(l.fl * Math.abs(k) / 100, 0.42), g = re(m) * 400 * f / (f + 27.13), P = re(w) * 400 * u / (u + 27.13), p = re(k) * 400 * T / (T + 27.13), _ = (11 * g + -12 * P + p) / 11, $ = (g + P - 2 * p) / 9, D = (20 * g + 20 * P + 21 * p) / 20, E = (40 * g + 20 * P + p) / 20, q = Math.atan2($, _) * 180 / Math.PI, j = q < 0 ? q + 360 : q >= 360 ? q - 360 : q, ie = j * Math.PI / 180, te = E * l.nbb, ye = 100 * Math.pow(te / l.aw, l.c * l.z), ae = 4 / l.c * Math.sqrt(ye / 100) * (l.aw + 4) * l.fLRoot, Ae = j < 20.14 ? j + 360 : j, B = 0.25 * (Math.cos(Ae * Math.PI / 180 + 2) + 3.8), Ie = 5e4 / 13 * B * l.nc * l.ncb * Math.sqrt(_ * _ + $ * $) / (D + 0.305), We = Math.pow(Ie, 0.9) * Math.pow(1.64 - Math.pow(0.29, l.n), 0.73), Ft = We * Math.sqrt(ye / 100), Ot = Ft * l.fLRoot, $l = 50 * Math.sqrt(We * l.c / (l.aw + 4)), Rl = (1 + 100 * 7e-3) * ye / (1 + 7e-3 * ye), Lt = 1 / 0.0228 * Math.log(1 + 0.0228 * Ot), Bl = Lt * Math.cos(ie), Fl = Lt * Math.sin(ie);
    return new W(j, Ft, ye, ae, Ot, $l, Rl, Bl, Fl);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(e, l, s) {
    return W.fromJchInViewingConditions(e, l, s, ue.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(e, l, s, r) {
    const n = 4 / r.c * Math.sqrt(e / 100) * (r.aw + 4) * r.fLRoot, o = l * r.fLRoot, v = l / Math.sqrt(e / 100), a = 50 * Math.sqrt(v * r.c / (r.aw + 4)), b = s * Math.PI / 180, h = (1 + 100 * 7e-3) * e / (1 + 7e-3 * e), c = 1 / 0.0228 * Math.log(1 + 0.0228 * o), d = c * Math.cos(b), i = c * Math.sin(b);
    return new W(s, l, e, n, o, a, h, d, i);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(e, l, s) {
    return W.fromUcsInViewingConditions(e, l, s, ue.DEFAULT);
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
  static fromUcsInViewingConditions(e, l, s, r) {
    const n = l, o = s, v = Math.sqrt(n * n + o * o), b = (Math.exp(v * 0.0228) - 1) / 0.0228 / r.fLRoot;
    let h = Math.atan2(o, n) * (180 / Math.PI);
    h < 0 && (h += 360);
    const c = e / (1 - (e - 100) * 7e-3);
    return W.fromJchInViewingConditions(c, b, h, r);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(ue.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(e) {
    const l = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), s = Math.pow(l / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, n = 0.25 * (Math.cos(r + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), v = n * (5e4 / 13) * e.nc * e.ncb, a = o / e.nbb, b = Math.sin(r), h = Math.cos(r), c = 23 * (a + 0.305) * s / (23 * v + 11 * s * h + 108 * s * b), d = c * h, i = c * b, y = (460 * a + 451 * d + 288 * i) / 1403, m = (460 * a - 891 * d - 261 * i) / 1403, w = (460 * a - 220 * d - 6300 * i) / 1403, k = Math.max(0, 27.13 * Math.abs(y) / (400 - Math.abs(y))), f = re(y) * (100 / e.fl) * Math.pow(k, 1 / 0.42), u = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), T = re(m) * (100 / e.fl) * Math.pow(u, 1 / 0.42), g = Math.max(0, 27.13 * Math.abs(w) / (400 - Math.abs(w))), P = re(w) * (100 / e.fl) * Math.pow(g, 1 / 0.42), p = f / e.rgbD[0], _ = T / e.rgbD[1], $ = P / e.rgbD[2], D = 1.86206786 * p - 1.01125463 * _ + 0.14918677 * $, E = 0.38752654 * p + 0.62144744 * _ - 897398e-8 * $, G = -0.0158415 * p - 0.03412294 * _ + 1.04996444 * $;
    return Dl(D, E, G);
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e, l, s, r) {
    const n = 0.401288 * e + 0.650173 * l - 0.051461 * s, o = -0.250268 * e + 1.204414 * l + 0.045854 * s, v = -2079e-6 * e + 0.048952 * l + 0.953127 * s, a = r.rgbD[0] * n, b = r.rgbD[1] * o, h = r.rgbD[2] * v, c = Math.pow(r.fl * Math.abs(a) / 100, 0.42), d = Math.pow(r.fl * Math.abs(b) / 100, 0.42), i = Math.pow(r.fl * Math.abs(h) / 100, 0.42), y = re(a) * 400 * c / (c + 27.13), m = re(b) * 400 * d / (d + 27.13), w = re(h) * 400 * i / (i + 27.13), k = (11 * y + -12 * m + w) / 11, f = (y + m - 2 * w) / 9, u = (20 * y + 20 * m + 21 * w) / 20, T = (40 * y + 20 * m + w) / 20, P = Math.atan2(f, k) * 180 / Math.PI, p = P < 0 ? P + 360 : P >= 360 ? P - 360 : P, _ = p * Math.PI / 180, $ = T * r.nbb, D = 100 * Math.pow($ / r.aw, r.c * r.z), E = 4 / r.c * Math.sqrt(D / 100) * (r.aw + 4) * r.fLRoot, G = p < 20.14 ? p + 360 : p, q = 1 / 4 * (Math.cos(G * Math.PI / 180 + 2) + 3.8), ie = 5e4 / 13 * q * r.nc * r.ncb * Math.sqrt(k * k + f * f) / (u + 0.305), te = Math.pow(ie, 0.9) * Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), ye = te * Math.sqrt(D / 100), ae = ye * r.fLRoot, Ae = 50 * Math.sqrt(te * r.c / (r.aw + 4)), B = (1 + 100 * 7e-3) * D / (1 + 7e-3 * D), S = Math.log(1 + 0.0228 * ae) / 0.0228, Ie = S * Math.cos(_), We = S * Math.sin(_);
    return new W(p, ye, D, E, ae, Ae, B, Ie, We);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e) {
    const l = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), s = Math.pow(l / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, n = 0.25 * (Math.cos(r + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), v = n * (5e4 / 13) * e.nc * e.ncb, a = o / e.nbb, b = Math.sin(r), h = Math.cos(r), c = 23 * (a + 0.305) * s / (23 * v + 11 * s * h + 108 * s * b), d = c * h, i = c * b, y = (460 * a + 451 * d + 288 * i) / 1403, m = (460 * a - 891 * d - 261 * i) / 1403, w = (460 * a - 220 * d - 6300 * i) / 1403, k = Math.max(0, 27.13 * Math.abs(y) / (400 - Math.abs(y))), f = re(y) * (100 / e.fl) * Math.pow(k, 1 / 0.42), u = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), T = re(m) * (100 / e.fl) * Math.pow(u, 1 / 0.42), g = Math.max(0, 27.13 * Math.abs(w) / (400 - Math.abs(w))), P = re(w) * (100 / e.fl) * Math.pow(g, 1 / 0.42), p = f / e.rgbD[0], _ = T / e.rgbD[1], $ = P / e.rgbD[2], D = 1.86206786 * p - 1.01125463 * _ + 0.14918677 * $, E = 0.38752654 * p + 0.62144744 * _ - 897398e-8 * $, G = -0.0158415 * p - 0.03412294 * _ + 1.04996444 * $;
    return [D, E, G];
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
class A {
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
    let s = 0;
    return l <= 31308e-7 ? s = l * 12.92 : s = 1.055 * Math.pow(l, 1 / 2.4) - 0.055, s * 255;
  }
  static chromaticAdaptation(e) {
    const l = Math.pow(Math.abs(e), 0.42);
    return re(e) * 400 * l / (l + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(e) {
    const l = ft(e, A.SCALED_DISCOUNT_FROM_LINRGB), s = A.chromaticAdaptation(l[0]), r = A.chromaticAdaptation(l[1]), n = A.chromaticAdaptation(l[2]), o = (11 * s + -12 * r + n) / 11, v = (s + r - 2 * n) / 9;
    return Math.atan2(v, o);
  }
  static areInCyclicOrder(e, l, s) {
    const r = A.sanitizeRadians(l - e), n = A.sanitizeRadians(s - e);
    return r < n;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(e, l, s) {
    return (l - e) / (s - e);
  }
  static lerpPoint(e, l, s) {
    return [
      e[0] + (s[0] - e[0]) * l,
      e[1] + (s[1] - e[1]) * l,
      e[2] + (s[2] - e[2]) * l
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
  static setCoordinate(e, l, s, r) {
    const n = A.intercept(e[r], l, s[r]);
    return A.lerpPoint(e, n, s);
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
    const s = A.Y_FROM_LINRGB[0], r = A.Y_FROM_LINRGB[1], n = A.Y_FROM_LINRGB[2], o = l % 4 <= 1 ? 0 : 100, v = l % 2 === 0 ? 0 : 100;
    if (l < 4) {
      const a = o, b = v, h = (e - a * r - b * n) / s;
      return A.isBounded(h) ? [h, a, b] : [-1, -1, -1];
    } else if (l < 8) {
      const a = o, b = v, h = (e - b * s - a * n) / r;
      return A.isBounded(h) ? [b, h, a] : [-1, -1, -1];
    } else {
      const a = o, b = v, h = (e - a * s - b * r) / n;
      return A.isBounded(h) ? [a, b, h] : [-1, -1, -1];
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
    let s = [-1, -1, -1], r = s, n = 0, o = 0, v = !1, a = !0;
    for (let b = 0; b < 12; b++) {
      const h = A.nthVertex(e, b);
      if (h[0] < 0)
        continue;
      const c = A.hueOf(h);
      if (!v) {
        s = h, r = h, n = c, o = c, v = !0;
        continue;
      }
      (a || A.areInCyclicOrder(n, c, o)) && (a = !1, A.areInCyclicOrder(n, l, c) ? (r = h, o = c) : (s = h, n = c));
    }
    return [s, r];
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
    const s = A.bisectToSegment(e, l);
    let r = s[0], n = A.hueOf(r), o = s[1];
    for (let v = 0; v < 3; v++)
      if (r[v] !== o[v]) {
        let a = -1, b = 255;
        r[v] < o[v] ? (a = A.criticalPlaneBelow(A.trueDelinearized(r[v])), b = A.criticalPlaneAbove(A.trueDelinearized(o[v]))) : (a = A.criticalPlaneAbove(A.trueDelinearized(r[v])), b = A.criticalPlaneBelow(A.trueDelinearized(o[v])));
        for (let h = 0; h < 8 && !(Math.abs(b - a) <= 1); h++) {
          const c = Math.floor((a + b) / 2), d = A.CRITICAL_PLANES[c], i = A.setCoordinate(r, d, o, v), y = A.hueOf(i);
          A.areInCyclicOrder(n, l, y) ? (o = i, b = c) : (r = i, n = y, a = c);
        }
      }
    return A.midpoint(r, o);
  }
  static inverseChromaticAdaptation(e) {
    const l = Math.abs(e), s = Math.max(0, 27.13 * l / (400 - l));
    return re(e) * Math.pow(s, 1 / 0.42);
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
  static findResultByJ(e, l, s) {
    let r = Math.sqrt(s) * 11;
    const n = ue.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(0.29, n.n), 0.73), a = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * n.nc * n.ncb, b = Math.sin(e), h = Math.cos(e);
    for (let c = 0; c < 5; c++) {
      const d = r / 100, i = l === 0 || r === 0 ? 0 : l / Math.sqrt(d), y = Math.pow(i * o, 1 / 0.9), w = n.aw * Math.pow(d, 1 / n.c / n.z) / n.nbb, k = 23 * (w + 0.305) * y / (23 * a + 11 * y * h + 108 * y * b), f = k * h, u = k * b, T = (460 * w + 451 * f + 288 * u) / 1403, g = (460 * w - 891 * f - 261 * u) / 1403, P = (460 * w - 220 * f - 6300 * u) / 1403, p = A.inverseChromaticAdaptation(T), _ = A.inverseChromaticAdaptation(g), $ = A.inverseChromaticAdaptation(P), D = ft([p, _, $], A.LINRGB_FROM_SCALED_DISCOUNT);
      if (D[0] < 0 || D[1] < 0 || D[2] < 0)
        return 0;
      const E = A.Y_FROM_LINRGB[0], G = A.Y_FROM_LINRGB[1], q = A.Y_FROM_LINRGB[2], j = E * D[0] + G * D[1] + q * D[2];
      if (j <= 0)
        return 0;
      if (c === 4 || Math.abs(j - s) < 2e-3)
        return D[0] > 100.01 || D[1] > 100.01 || D[2] > 100.01 ? 0 : Gt(D);
      r = r - (j - s) * r / (2 * j);
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
  static solveToInt(e, l, s) {
    if (l < 1e-4 || s < 1e-4 || s > 99.9999)
      return Ps(s);
    e = Dt(e);
    const r = e / 180 * Math.PI, n = Ce(s), o = A.findResultByJ(r, l, n);
    if (o !== 0)
      return o;
    const v = A.bisectToLimit(n, r);
    return Gt(v);
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
  static solveToCam(e, l, s) {
    return W.fromInt(A.solveToInt(e, l, s));
  }
}
A.SCALED_DISCOUNT_FROM_LINRGB = [
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
A.LINRGB_FROM_SCALED_DISCOUNT = [
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
A.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
A.CRITICAL_PLANES = [
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
class U {
  static from(e, l, s) {
    return new U(A.solveToInt(e, l, s));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(e) {
    return new U(e);
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
    this.setInternalState(A.solveToInt(e, this.internalChroma, this.internalTone));
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
    this.setInternalState(A.solveToInt(this.internalHue, e, this.internalTone));
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
    this.setInternalState(A.solveToInt(this.internalHue, this.internalChroma, e));
  }
  constructor(e) {
    this.argb = e;
    const l = W.fromInt(e);
    this.internalHue = l.hue, this.internalChroma = l.chroma, this.internalTone = gt(e), this.argb = e;
  }
  setInternalState(e) {
    const l = W.fromInt(e);
    this.internalHue = l.hue, this.internalChroma = l.chroma, this.internalTone = gt(e), this.argb = e;
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
    const s = W.fromInt(this.toInt()).xyzInViewingConditions(e), r = W.fromXyzInViewingConditions(s[0], s[1], s[2], ue.make());
    return U.from(r.hue, r.chroma, kt(s[1]));
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
class Et {
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
    const s = U.fromInt(e), r = U.fromInt(l), n = Il(s.hue, r.hue), o = Math.min(n * 0.5, 15), v = Dt(s.hue + o * ks(s.hue, r.hue));
    return U.from(v, s.chroma, s.tone).toInt();
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
  static hctHue(e, l, s) {
    const r = Et.cam16Ucs(e, l, s), n = W.fromInt(r), o = W.fromInt(e);
    return U.from(n.hue, o.chroma, gt(e)).toInt();
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
  static cam16Ucs(e, l, s) {
    const r = W.fromInt(e), n = W.fromInt(l), o = r.jstar, v = r.astar, a = r.bstar, b = n.jstar, h = n.astar, c = n.bstar, d = o + (b - o) * s, i = v + (h - v) * s, y = a + (c - a) * s;
    return W.fromUcs(d, i, y).toInt();
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
    return e = ot(0, 100, e), l = ot(0, 100, l), Y.ratioOfYs(Ce(e), Ce(l));
  }
  static ratioOfYs(e, l) {
    const s = e > l ? e : l, r = s === l ? e : l;
    return (s + 5) / (r + 5);
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
    const s = Ce(e), r = l * (s + 5) - 5, n = Y.ratioOfYs(r, s), o = Math.abs(n - l);
    if (n < l && o > 0.04)
      return -1;
    const v = kt(r) + 0.4;
    return v < 0 || v > 100 ? -1 : v;
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
    const s = Ce(e), r = (s + 5) / l - 5, n = Y.ratioOfYs(s, r), o = Math.abs(n - l);
    if (n < l && o > 0.04)
      return -1;
    const v = kt(r) - 0.4;
    return v < 0 || v > 100 ? -1 : v;
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
    const s = Y.lighter(e, l);
    return s < 0 ? 100 : s;
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
    const s = Y.darker(e, l);
    return s < 0 ? 0 : s;
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
class $t {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(e) {
    const l = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111, s = Math.round(e.chroma) > 16, r = Math.round(e.tone) < 65;
    return l && s && r;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(e) {
    return $t.isDisliked(e) ? U.from(e.hue, e.chroma, 70) : e;
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
class M {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(e) {
    return new M(e.name ?? "", e.palette, e.tone, e.isBackground ?? !1, e.background, e.secondBackground, e.contrastCurve, e.toneDeltaPair);
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
  constructor(e, l, s, r, n, o, v, a) {
    if (this.name = e, this.palette = l, this.tone = s, this.isBackground = r, this.background = n, this.secondBackground = o, this.contrastCurve = v, this.toneDeltaPair = a, this.hctCache = /* @__PURE__ */ new Map(), !n && o)
      throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
    if (!n && v)
      throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
    if (n && !v)
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
    const s = this.getTone(e), r = this.palette(e).getHct(s);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, r), r;
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
      const s = this.toneDeltaPair(e), r = s.roleA, n = s.roleB, o = s.delta, v = s.polarity, a = s.stayTogether, h = this.background(e).getTone(e), c = v === "nearer" || v === "lighter" && !e.isDark || v === "darker" && e.isDark, d = c ? r : n, i = c ? n : r, y = this.name === d.name, m = e.isDark ? 1 : -1, w = d.contrastCurve.getContrast(e.contrastLevel), k = i.contrastCurve.getContrast(e.contrastLevel), f = d.tone(e);
      let u = Y.ratioOfTones(h, f) >= w ? f : M.foregroundTone(h, w);
      const T = i.tone(e);
      let g = Y.ratioOfTones(h, T) >= k ? T : M.foregroundTone(h, k);
      return l && (u = M.foregroundTone(h, w), g = M.foregroundTone(h, k)), (g - u) * m >= o || (g = ot(0, 100, u + o * m), (g - u) * m >= o || (u = ot(0, 100, g - o * m))), 50 <= u && u < 60 ? m > 0 ? (u = 60, g = Math.max(g, u + o * m)) : (u = 49, g = Math.min(g, u + o * m)) : 50 <= g && g < 60 && (a ? m > 0 ? (u = 60, g = Math.max(g, u + o * m)) : (u = 49, g = Math.min(g, u + o * m)) : m > 0 ? g = 60 : g = 49), y ? u : g;
    } else {
      let s = this.tone(e);
      if (this.background == null)
        return s;
      const r = this.background(e).getTone(e), n = this.contrastCurve.getContrast(e.contrastLevel);
      if (Y.ratioOfTones(r, s) >= n || (s = M.foregroundTone(r, n)), l && (s = M.foregroundTone(r, n)), this.isBackground && 50 <= s && s < 60 && (Y.ratioOfTones(49, r) >= n ? s = 49 : s = 60), this.secondBackground) {
        const [o, v] = [this.background, this.secondBackground], [a, b] = [o(e).getTone(e), v(e).getTone(e)], [h, c] = [Math.max(a, b), Math.min(a, b)];
        if (Y.ratioOfTones(h, s) >= n && Y.ratioOfTones(c, s) >= n)
          return s;
        const d = Y.lighter(h, n), i = Y.darker(c, n), y = [];
        return d !== -1 && y.push(d), i !== -1 && y.push(i), M.tonePrefersLightForeground(a) || M.tonePrefersLightForeground(b) ? d < 0 ? 100 : d : y.length === 1 ? y[0] : i < 0 ? 0 : i;
      }
      return s;
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
    const s = Y.lighterUnsafe(e, l), r = Y.darkerUnsafe(e, l), n = Y.ratioOfTones(s, e), o = Y.ratioOfTones(r, e);
    if (M.tonePrefersLightForeground(e)) {
      const a = Math.abs(n - o) < 0.1 && n < l && o < l;
      return n >= l || n >= o || a ? s : r;
    } else
      return o >= l || o >= n ? r : s;
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
    return M.tonePrefersLightForeground(e) && !M.toneAllowsLightForeground(e) ? 49 : e;
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
var Ge;
(function(t) {
  t[t.MONOCHROME = 0] = "MONOCHROME", t[t.NEUTRAL = 1] = "NEUTRAL", t[t.TONAL_SPOT = 2] = "TONAL_SPOT", t[t.VIBRANT = 3] = "VIBRANT", t[t.EXPRESSIVE = 4] = "EXPRESSIVE", t[t.FIDELITY = 5] = "FIDELITY", t[t.CONTENT = 6] = "CONTENT", t[t.RAINBOW = 7] = "RAINBOW", t[t.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(Ge || (Ge = {}));
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
class L {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(e, l, s, r) {
    this.low = e, this.normal = l, this.medium = s, this.high = r;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(e) {
    return e <= -1 ? this.low : e < 0 ? Ne(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? Ne(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? Ne(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
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
class ve {
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
  constructor(e, l, s, r, n) {
    this.roleA = e, this.roleB = l, this.delta = s, this.polarity = r, this.stayTogether = n;
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
function Oe(t) {
  return t.variant === Ge.FIDELITY || t.variant === Ge.CONTENT;
}
function V(t) {
  return t.variant === Ge.MONOCHROME;
}
function Ts(t, e, l, s) {
  let r = l, n = U.from(t, e, l);
  if (n.chroma < e) {
    let o = n.chroma;
    for (; n.chroma < e; ) {
      r += s ? -1 : 1;
      const v = U.from(t, e, r);
      if (o > v.chroma || Math.abs(v.chroma - e) < 0.4)
        break;
      const a = Math.abs(v.chroma - e), b = Math.abs(n.chroma - e);
      a < b && (n = v), o = Math.max(o, v.chroma);
    }
  }
  return r;
}
function Ds(t) {
  return ue.make(
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
function Rt(t, e) {
  const l = t.inViewingConditions(Ds(e));
  return M.tonePrefersLightForeground(t.tone) && !M.toneAllowsLightForeground(l.tone) ? M.enableLightForeground(t.tone) : M.enableLightForeground(l.tone);
}
class z {
  static highestSurface(e) {
    return e.isDark ? z.surfaceBright : z.surfaceDim;
  }
}
z.contentAccentToneDelta = 15;
z.primaryPaletteKeyColor = M.fromPalette({
  name: "primary_palette_key_color",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.primaryPalette.keyColor.tone
});
z.secondaryPaletteKeyColor = M.fromPalette({
  name: "secondary_palette_key_color",
  palette: (t) => t.secondaryPalette,
  tone: (t) => t.secondaryPalette.keyColor.tone
});
z.tertiaryPaletteKeyColor = M.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => t.tertiaryPalette.keyColor.tone
});
z.neutralPaletteKeyColor = M.fromPalette({
  name: "neutral_palette_key_color",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.neutralPalette.keyColor.tone
});
z.neutralVariantPaletteKeyColor = M.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.neutralVariantPalette.keyColor.tone
});
z.background = M.fromPalette({
  name: "background",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 98,
  isBackground: !0
});
z.onBackground = M.fromPalette({
  name: "on_background",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => z.background,
  contrastCurve: new L(3, 3, 4.5, 7)
});
z.surface = M.fromPalette({
  name: "surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 98,
  isBackground: !0
});
z.surfaceDim = M.fromPalette({
  name: "surface_dim",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 87,
  isBackground: !0
});
z.surfaceBright = M.fromPalette({
  name: "surface_bright",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 24 : 98,
  isBackground: !0
});
z.surfaceContainerLowest = M.fromPalette({
  name: "surface_container_lowest",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 4 : 100,
  isBackground: !0
});
z.surfaceContainerLow = M.fromPalette({
  name: "surface_container_low",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 10 : 96,
  isBackground: !0
});
z.surfaceContainer = M.fromPalette({
  name: "surface_container",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 12 : 94,
  isBackground: !0
});
z.surfaceContainerHigh = M.fromPalette({
  name: "surface_container_high",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 17 : 92,
  isBackground: !0
});
z.surfaceContainerHighest = M.fromPalette({
  name: "surface_container_highest",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 22 : 90,
  isBackground: !0
});
z.onSurface = M.fromPalette({
  name: "on_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.surfaceVariant = M.fromPalette({
  name: "surface_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 30 : 90,
  isBackground: !0
});
z.onSurfaceVariant = M.fromPalette({
  name: "on_surface_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 80 : 30,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(3, 4.5, 7, 11)
});
z.inverseSurface = M.fromPalette({
  name: "inverse_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 20
});
z.inverseOnSurface = M.fromPalette({
  name: "inverse_on_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 20 : 95,
  background: (t) => z.inverseSurface,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.outline = M.fromPalette({
  name: "outline",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 60 : 50,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1.5, 3, 4.5, 7)
});
z.outlineVariant = M.fromPalette({
  name: "outline_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 30 : 80,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7)
});
z.shadow = M.fromPalette({
  name: "shadow",
  palette: (t) => t.neutralPalette,
  tone: (t) => 0
});
z.scrim = M.fromPalette({
  name: "scrim",
  palette: (t) => t.neutralPalette,
  tone: (t) => 0
});
z.surfaceTint = M.fromPalette({
  name: "surface_tint",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0
});
z.primary = M.fromPalette({
  name: "primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => V(t) ? t.isDark ? 100 : 0 : t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new ve(z.primaryContainer, z.primary, 15, "nearer", !1)
});
z.onPrimary = M.fromPalette({
  name: "on_primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => V(t) ? t.isDark ? 10 : 90 : t.isDark ? 20 : 100,
  background: (t) => z.primary,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.primaryContainer = M.fromPalette({
  name: "primary_container",
  palette: (t) => t.primaryPalette,
  tone: (t) => Oe(t) ? Rt(t.sourceColorHct, t) : V(t) ? t.isDark ? 85 : 25 : t.isDark ? 30 : 90,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.primaryContainer, z.primary, 15, "nearer", !1)
});
z.onPrimaryContainer = M.fromPalette({
  name: "on_primary_container",
  palette: (t) => t.primaryPalette,
  tone: (t) => Oe(t) ? M.foregroundTone(z.primaryContainer.tone(t), 4.5) : V(t) ? t.isDark ? 0 : 100 : t.isDark ? 90 : 10,
  background: (t) => z.primaryContainer,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.inversePrimary = M.fromPalette({
  name: "inverse_primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.isDark ? 40 : 80,
  background: (t) => z.inverseSurface,
  contrastCurve: new L(3, 4.5, 7, 11)
});
z.secondary = M.fromPalette({
  name: "secondary",
  palette: (t) => t.secondaryPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new ve(z.secondaryContainer, z.secondary, 15, "nearer", !1)
});
z.onSecondary = M.fromPalette({
  name: "on_secondary",
  palette: (t) => t.secondaryPalette,
  tone: (t) => V(t) ? t.isDark ? 10 : 100 : t.isDark ? 20 : 100,
  background: (t) => z.secondary,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.secondaryContainer = M.fromPalette({
  name: "secondary_container",
  palette: (t) => t.secondaryPalette,
  tone: (t) => {
    const e = t.isDark ? 30 : 90;
    if (V(t))
      return t.isDark ? 30 : 85;
    if (!Oe(t))
      return e;
    let l = Ts(t.secondaryPalette.hue, t.secondaryPalette.chroma, e, !t.isDark);
    return l = Rt(t.secondaryPalette.getHct(l), t), l;
  },
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.secondaryContainer, z.secondary, 15, "nearer", !1)
});
z.onSecondaryContainer = M.fromPalette({
  name: "on_secondary_container",
  palette: (t) => t.secondaryPalette,
  tone: (t) => Oe(t) ? M.foregroundTone(z.secondaryContainer.tone(t), 4.5) : t.isDark ? 90 : 10,
  background: (t) => z.secondaryContainer,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.tertiary = M.fromPalette({
  name: "tertiary",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? t.isDark ? 90 : 25 : t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new ve(z.tertiaryContainer, z.tertiary, 15, "nearer", !1)
});
z.onTertiary = M.fromPalette({
  name: "on_tertiary",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? t.isDark ? 10 : 90 : t.isDark ? 20 : 100,
  background: (t) => z.tertiary,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.tertiaryContainer = M.fromPalette({
  name: "tertiary_container",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => {
    if (V(t))
      return t.isDark ? 60 : 49;
    if (!Oe(t))
      return t.isDark ? 30 : 90;
    const e = Rt(t.tertiaryPalette.getHct(t.sourceColorHct.tone), t), l = t.tertiaryPalette.getHct(e);
    return $t.fixIfDisliked(l).tone;
  },
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.tertiaryContainer, z.tertiary, 15, "nearer", !1)
});
z.onTertiaryContainer = M.fromPalette({
  name: "on_tertiary_container",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? t.isDark ? 0 : 100 : Oe(t) ? M.foregroundTone(z.tertiaryContainer.tone(t), 4.5) : t.isDark ? 90 : 10,
  background: (t) => z.tertiaryContainer,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.error = M.fromPalette({
  name: "error",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new ve(z.errorContainer, z.error, 15, "nearer", !1)
});
z.onError = M.fromPalette({
  name: "on_error",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 20 : 100,
  background: (t) => z.error,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.errorContainer = M.fromPalette({
  name: "error_container",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 30 : 90,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.errorContainer, z.error, 15, "nearer", !1)
});
z.onErrorContainer = M.fromPalette({
  name: "on_error_container",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => z.errorContainer,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.primaryFixed = M.fromPalette({
  name: "primary_fixed",
  palette: (t) => t.primaryPalette,
  tone: (t) => V(t) ? 40 : 90,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.primaryFixed, z.primaryFixedDim, 10, "lighter", !0)
});
z.primaryFixedDim = M.fromPalette({
  name: "primary_fixed_dim",
  palette: (t) => t.primaryPalette,
  tone: (t) => V(t) ? 30 : 80,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.primaryFixed, z.primaryFixedDim, 10, "lighter", !0)
});
z.onPrimaryFixed = M.fromPalette({
  name: "on_primary_fixed",
  palette: (t) => t.primaryPalette,
  tone: (t) => V(t) ? 100 : 10,
  background: (t) => z.primaryFixedDim,
  secondBackground: (t) => z.primaryFixed,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.onPrimaryFixedVariant = M.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (t) => t.primaryPalette,
  tone: (t) => V(t) ? 90 : 30,
  background: (t) => z.primaryFixedDim,
  secondBackground: (t) => z.primaryFixed,
  contrastCurve: new L(3, 4.5, 7, 11)
});
z.secondaryFixed = M.fromPalette({
  name: "secondary_fixed",
  palette: (t) => t.secondaryPalette,
  tone: (t) => V(t) ? 80 : 90,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.secondaryFixed, z.secondaryFixedDim, 10, "lighter", !0)
});
z.secondaryFixedDim = M.fromPalette({
  name: "secondary_fixed_dim",
  palette: (t) => t.secondaryPalette,
  tone: (t) => V(t) ? 70 : 80,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.secondaryFixed, z.secondaryFixedDim, 10, "lighter", !0)
});
z.onSecondaryFixed = M.fromPalette({
  name: "on_secondary_fixed",
  palette: (t) => t.secondaryPalette,
  tone: (t) => 10,
  background: (t) => z.secondaryFixedDim,
  secondBackground: (t) => z.secondaryFixed,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.onSecondaryFixedVariant = M.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (t) => t.secondaryPalette,
  tone: (t) => V(t) ? 25 : 30,
  background: (t) => z.secondaryFixedDim,
  secondBackground: (t) => z.secondaryFixed,
  contrastCurve: new L(3, 4.5, 7, 11)
});
z.tertiaryFixed = M.fromPalette({
  name: "tertiary_fixed",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? 40 : 90,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.tertiaryFixed, z.tertiaryFixedDim, 10, "lighter", !0)
});
z.tertiaryFixedDim = M.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? 30 : 80,
  isBackground: !0,
  background: (t) => z.highestSurface(t),
  contrastCurve: new L(1, 1, 3, 7),
  toneDeltaPair: (t) => new ve(z.tertiaryFixed, z.tertiaryFixedDim, 10, "lighter", !0)
});
z.onTertiaryFixed = M.fromPalette({
  name: "on_tertiary_fixed",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? 100 : 10,
  background: (t) => z.tertiaryFixedDim,
  secondBackground: (t) => z.tertiaryFixed,
  contrastCurve: new L(4.5, 7, 11, 21)
});
z.onTertiaryFixedVariant = M.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => V(t) ? 90 : 30,
  background: (t) => z.tertiaryFixedDim,
  secondBackground: (t) => z.tertiaryFixed,
  contrastCurve: new L(3, 4.5, 7, 11)
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
class Z {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(e) {
    const l = U.fromInt(e);
    return Z.fromHct(l);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(e) {
    return new Z(e.hue, e.chroma, e);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(e, l) {
    return new Z(e, l, Z.createKeyColor(e, l));
  }
  constructor(e, l, s) {
    this.hue = e, this.chroma = l, this.keyColor = s, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e, l) {
    let r = U.from(e, l, 50), n = Math.abs(r.chroma - l);
    for (let o = 1; o < 50; o += 1) {
      if (Math.round(l) === Math.round(r.chroma))
        return r;
      const v = U.from(e, l, 50 + o), a = Math.abs(v.chroma - l);
      a < n && (n = a, r = v);
      const b = U.from(e, l, 50 - o), h = Math.abs(b.chroma - l);
      h < n && (n = h, r = b);
    }
    return r;
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(e) {
    let l = this.cache.get(e);
    return l === void 0 && (l = U.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, l)), l;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(e) {
    return U.fromInt(this.tone(e));
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
class K {
  /**
   * @param argb ARGB representation of a color
   */
  static of(e) {
    return new K(e, !1);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(e) {
    return new K(e, !0);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(e) {
    return K.createPaletteFromColors(!1, e);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(e) {
    return K.createPaletteFromColors(!0, e);
  }
  static createPaletteFromColors(e, l) {
    const s = new K(l.primary, e);
    if (l.secondary) {
      const r = new K(l.secondary, e);
      s.a2 = r.a1;
    }
    if (l.tertiary) {
      const r = new K(l.tertiary, e);
      s.a3 = r.a1;
    }
    if (l.error) {
      const r = new K(l.error, e);
      s.error = r.a1;
    }
    if (l.neutral) {
      const r = new K(l.neutral, e);
      s.n1 = r.n1;
    }
    if (l.neutralVariant) {
      const r = new K(l.neutralVariant, e);
      s.n2 = r.n2;
    }
    return s;
  }
  constructor(e, l) {
    const s = U.fromInt(e), r = s.hue, n = s.chroma;
    l ? (this.a1 = Z.fromHueAndChroma(r, n), this.a2 = Z.fromHueAndChroma(r, n / 3), this.a3 = Z.fromHueAndChroma(r + 60, n / 2), this.n1 = Z.fromHueAndChroma(r, Math.min(n / 12, 4)), this.n2 = Z.fromHueAndChroma(r, Math.min(n / 6, 8))) : (this.a1 = Z.fromHueAndChroma(r, Math.max(48, n)), this.a2 = Z.fromHueAndChroma(r, 16), this.a3 = Z.fromHueAndChroma(r + 60, 24), this.n1 = Z.fromHueAndChroma(r, 4), this.n2 = Z.fromHueAndChroma(r, 8)), this.error = Z.fromHueAndChroma(25, 84);
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
class As {
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
    return Cs(e[0], e[1], e[2]);
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
    const s = e[0] - l[0], r = e[1] - l[1], n = e[2] - l[2];
    return s * s + r * r + n * n;
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
const Es = 10, $s = 3;
class Rs {
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
  static quantize(e, l, s) {
    const r = /* @__PURE__ */ new Map(), n = new Array(), o = new Array(), v = new As();
    let a = 0;
    for (let f = 0; f < e.length; f++) {
      const u = e[f], T = r.get(u);
      T === void 0 ? (a++, n.push(v.fromInt(u)), o.push(u), r.set(u, 1)) : r.set(u, T + 1);
    }
    const b = new Array();
    for (let f = 0; f < a; f++) {
      const u = o[f], T = r.get(u);
      T !== void 0 && (b[f] = T);
    }
    let h = Math.min(s, a);
    l.length > 0 && (h = Math.min(h, l.length));
    const c = new Array();
    for (let f = 0; f < l.length; f++)
      c.push(v.fromInt(l[f]));
    const d = h - c.length;
    if (l.length === 0 && d > 0)
      for (let f = 0; f < d; f++) {
        const u = Math.random() * 100, T = Math.random() * (100 - -100 + 1) + -100, g = Math.random() * (100 - -100 + 1) + -100;
        c.push(new Array(u, T, g));
      }
    const i = new Array();
    for (let f = 0; f < a; f++)
      i.push(Math.floor(Math.random() * h));
    const y = new Array();
    for (let f = 0; f < h; f++) {
      y.push(new Array());
      for (let u = 0; u < h; u++)
        y[f].push(0);
    }
    const m = new Array();
    for (let f = 0; f < h; f++) {
      m.push(new Array());
      for (let u = 0; u < h; u++)
        m[f].push(new Bs());
    }
    const w = new Array();
    for (let f = 0; f < h; f++)
      w.push(0);
    for (let f = 0; f < Es; f++) {
      for (let p = 0; p < h; p++) {
        for (let _ = p + 1; _ < h; _++) {
          const $ = v.distance(c[p], c[_]);
          m[_][p].distance = $, m[_][p].index = p, m[p][_].distance = $, m[p][_].index = _;
        }
        m[p].sort();
        for (let _ = 0; _ < h; _++)
          y[p][_] = m[p][_].index;
      }
      let u = 0;
      for (let p = 0; p < a; p++) {
        const _ = n[p], $ = i[p], D = c[$], E = v.distance(_, D);
        let G = E, q = -1;
        for (let j = 0; j < h; j++) {
          if (m[$][j].distance >= 4 * E)
            continue;
          const ie = v.distance(_, c[j]);
          ie < G && (G = ie, q = j);
        }
        q !== -1 && Math.abs(Math.sqrt(G) - Math.sqrt(E)) > $s && (u++, i[p] = q);
      }
      if (u === 0 && f !== 0)
        break;
      const T = new Array(h).fill(0), g = new Array(h).fill(0), P = new Array(h).fill(0);
      for (let p = 0; p < h; p++)
        w[p] = 0;
      for (let p = 0; p < a; p++) {
        const _ = i[p], $ = n[p], D = b[p];
        w[_] += D, T[_] += $[0] * D, g[_] += $[1] * D, P[_] += $[2] * D;
      }
      for (let p = 0; p < h; p++) {
        const _ = w[p];
        if (_ === 0) {
          c[p] = [0, 0, 0];
          continue;
        }
        const $ = T[p] / _, D = g[p] / _, E = P[p] / _;
        c[p] = [$, D, E];
      }
    }
    const k = /* @__PURE__ */ new Map();
    for (let f = 0; f < h; f++) {
      const u = w[f];
      if (u === 0)
        continue;
      const T = v.toInt(c[f]);
      k.has(T) || k.set(T, u);
    }
    return k;
  }
}
class Bs {
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
class Fs {
  /**
   * @param pixels Colors in ARGB format.
   * @return A Map with keys of ARGB colors, and values of the number of times
   *     the color appears in the image.
   */
  static quantize(e) {
    const l = /* @__PURE__ */ new Map();
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      xs(r) < 255 || l.set(r, (l.get(r) ?? 0) + 1);
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
const Je = 5, de = 33, Le = 35937, le = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};
class Os {
  constructor(e = [], l = [], s = [], r = [], n = [], o = []) {
    this.weights = e, this.momentsR = l, this.momentsG = s, this.momentsB = r, this.moments = n, this.cubes = o;
  }
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  quantize(e, l) {
    this.constructHistogram(e), this.computeMoments();
    const s = this.createBoxes(l);
    return this.createResult(s.resultCount);
  }
  constructHistogram(e) {
    this.weights = Array.from({ length: Le }).fill(0), this.momentsR = Array.from({ length: Le }).fill(0), this.momentsG = Array.from({ length: Le }).fill(0), this.momentsB = Array.from({ length: Le }).fill(0), this.moments = Array.from({ length: Le }).fill(0);
    const l = Fs.quantize(e);
    for (const [s, r] of l.entries()) {
      const n = it(s), o = bt(s), v = ht(s), a = 8 - Je, b = (n >> a) + 1, h = (o >> a) + 1, c = (v >> a) + 1, d = this.getIndex(b, h, c);
      this.weights[d] = (this.weights[d] ?? 0) + r, this.momentsR[d] += r * n, this.momentsG[d] += r * o, this.momentsB[d] += r * v, this.moments[d] += r * (n * n + o * o + v * v);
    }
  }
  computeMoments() {
    for (let e = 1; e < de; e++) {
      const l = Array.from({ length: de }).fill(0), s = Array.from({ length: de }).fill(0), r = Array.from({ length: de }).fill(0), n = Array.from({ length: de }).fill(0), o = Array.from({ length: de }).fill(0);
      for (let v = 1; v < de; v++) {
        let a = 0, b = 0, h = 0, c = 0, d = 0;
        for (let i = 1; i < de; i++) {
          const y = this.getIndex(e, v, i);
          a += this.weights[y], b += this.momentsR[y], h += this.momentsG[y], c += this.momentsB[y], d += this.moments[y], l[i] += a, s[i] += b, r[i] += h, n[i] += c, o[i] += d;
          const m = this.getIndex(e - 1, v, i);
          this.weights[y] = this.weights[m] + l[i], this.momentsR[y] = this.momentsR[m] + s[i], this.momentsG[y] = this.momentsG[m] + r[i], this.momentsB[y] = this.momentsB[m] + n[i], this.moments[y] = this.moments[m] + o[i];
        }
      }
    }
  }
  createBoxes(e) {
    this.cubes = Array.from({ length: e }).fill(0).map(() => new Ls());
    const l = Array.from({ length: e }).fill(0);
    this.cubes[0].r0 = 0, this.cubes[0].g0 = 0, this.cubes[0].b0 = 0, this.cubes[0].r1 = de - 1, this.cubes[0].g1 = de - 1, this.cubes[0].b1 = de - 1;
    let s = e, r = 0;
    for (let n = 1; n < e; n++) {
      this.cut(this.cubes[r], this.cubes[n]) ? (l[r] = this.cubes[r].vol > 1 ? this.variance(this.cubes[r]) : 0, l[n] = this.cubes[n].vol > 1 ? this.variance(this.cubes[n]) : 0) : (l[r] = 0, n--), r = 0;
      let o = l[0];
      for (let v = 1; v <= n; v++)
        l[v] > o && (o = l[v], r = v);
      if (o <= 0) {
        s = n + 1;
        break;
      }
    }
    return new Ss(e, s);
  }
  createResult(e) {
    const l = [];
    for (let s = 0; s < e; ++s) {
      const r = this.cubes[s], n = this.volume(r, this.weights);
      if (n > 0) {
        const o = Math.round(this.volume(r, this.momentsR) / n), v = Math.round(this.volume(r, this.momentsG) / n), a = Math.round(this.volume(r, this.momentsB) / n), b = 255 << 24 | (o & 255) << 16 | (v & 255) << 8 | a & 255;
        l.push(b);
      }
    }
    return l;
  }
  variance(e) {
    const l = this.volume(e, this.momentsR), s = this.volume(e, this.momentsG), r = this.volume(e, this.momentsB), n = this.moments[this.getIndex(e.r1, e.g1, e.b1)] - this.moments[this.getIndex(e.r1, e.g1, e.b0)] - this.moments[this.getIndex(e.r1, e.g0, e.b1)] + this.moments[this.getIndex(e.r1, e.g0, e.b0)] - this.moments[this.getIndex(e.r0, e.g1, e.b1)] + this.moments[this.getIndex(e.r0, e.g1, e.b0)] + this.moments[this.getIndex(e.r0, e.g0, e.b1)] - this.moments[this.getIndex(e.r0, e.g0, e.b0)], o = l * l + s * s + r * r, v = this.volume(e, this.weights);
    return n - o / v;
  }
  cut(e, l) {
    const s = this.volume(e, this.momentsR), r = this.volume(e, this.momentsG), n = this.volume(e, this.momentsB), o = this.volume(e, this.weights), v = this.maximize(e, le.RED, e.r0 + 1, e.r1, s, r, n, o), a = this.maximize(e, le.GREEN, e.g0 + 1, e.g1, s, r, n, o), b = this.maximize(e, le.BLUE, e.b0 + 1, e.b1, s, r, n, o);
    let h;
    const c = v.maximum, d = a.maximum, i = b.maximum;
    if (c >= d && c >= i) {
      if (v.cutLocation < 0)
        return !1;
      h = le.RED;
    } else
      d >= c && d >= i ? h = le.GREEN : h = le.BLUE;
    switch (l.r1 = e.r1, l.g1 = e.g1, l.b1 = e.b1, h) {
      case le.RED:
        e.r1 = v.cutLocation, l.r0 = e.r1, l.g0 = e.g0, l.b0 = e.b0;
        break;
      case le.GREEN:
        e.g1 = a.cutLocation, l.r0 = e.r0, l.g0 = e.g1, l.b0 = e.b0;
        break;
      case le.BLUE:
        e.b1 = b.cutLocation, l.r0 = e.r0, l.g0 = e.g0, l.b0 = e.b1;
        break;
      default:
        throw new Error("unexpected direction " + h);
    }
    return e.vol = (e.r1 - e.r0) * (e.g1 - e.g0) * (e.b1 - e.b0), l.vol = (l.r1 - l.r0) * (l.g1 - l.g0) * (l.b1 - l.b0), !0;
  }
  maximize(e, l, s, r, n, o, v, a) {
    const b = this.bottom(e, l, this.momentsR), h = this.bottom(e, l, this.momentsG), c = this.bottom(e, l, this.momentsB), d = this.bottom(e, l, this.weights);
    let i = 0, y = -1, m = 0, w = 0, k = 0, f = 0;
    for (let u = s; u < r; u++) {
      if (m = b + this.top(e, l, u, this.momentsR), w = h + this.top(e, l, u, this.momentsG), k = c + this.top(e, l, u, this.momentsB), f = d + this.top(e, l, u, this.weights), f === 0)
        continue;
      let T = (m * m + w * w + k * k) * 1, g = f * 1, P = T / g;
      m = n - m, w = o - w, k = v - k, f = a - f, f !== 0 && (T = (m * m + w * w + k * k) * 1, g = f * 1, P += T / g, P > i && (i = P, y = u));
    }
    return new qs(y, i);
  }
  volume(e, l) {
    return l[this.getIndex(e.r1, e.g1, e.b1)] - l[this.getIndex(e.r1, e.g1, e.b0)] - l[this.getIndex(e.r1, e.g0, e.b1)] + l[this.getIndex(e.r1, e.g0, e.b0)] - l[this.getIndex(e.r0, e.g1, e.b1)] + l[this.getIndex(e.r0, e.g1, e.b0)] + l[this.getIndex(e.r0, e.g0, e.b1)] - l[this.getIndex(e.r0, e.g0, e.b0)];
  }
  bottom(e, l, s) {
    switch (l) {
      case le.RED:
        return -s[this.getIndex(e.r0, e.g1, e.b1)] + s[this.getIndex(e.r0, e.g1, e.b0)] + s[this.getIndex(e.r0, e.g0, e.b1)] - s[this.getIndex(e.r0, e.g0, e.b0)];
      case le.GREEN:
        return -s[this.getIndex(e.r1, e.g0, e.b1)] + s[this.getIndex(e.r1, e.g0, e.b0)] + s[this.getIndex(e.r0, e.g0, e.b1)] - s[this.getIndex(e.r0, e.g0, e.b0)];
      case le.BLUE:
        return -s[this.getIndex(e.r1, e.g1, e.b0)] + s[this.getIndex(e.r1, e.g0, e.b0)] + s[this.getIndex(e.r0, e.g1, e.b0)] - s[this.getIndex(e.r0, e.g0, e.b0)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  top(e, l, s, r) {
    switch (l) {
      case le.RED:
        return r[this.getIndex(s, e.g1, e.b1)] - r[this.getIndex(s, e.g1, e.b0)] - r[this.getIndex(s, e.g0, e.b1)] + r[this.getIndex(s, e.g0, e.b0)];
      case le.GREEN:
        return r[this.getIndex(e.r1, s, e.b1)] - r[this.getIndex(e.r1, s, e.b0)] - r[this.getIndex(e.r0, s, e.b1)] + r[this.getIndex(e.r0, s, e.b0)];
      case le.BLUE:
        return r[this.getIndex(e.r1, e.g1, s)] - r[this.getIndex(e.r1, e.g0, s)] - r[this.getIndex(e.r0, e.g1, s)] + r[this.getIndex(e.r0, e.g0, s)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  getIndex(e, l, s) {
    return (e << Je * 2) + (e << Je + 1) + e + (l << Je) + l + s;
  }
}
class Ls {
  constructor(e = 0, l = 0, s = 0, r = 0, n = 0, o = 0, v = 0) {
    this.r0 = e, this.r1 = l, this.g0 = s, this.g1 = r, this.b0 = n, this.b1 = o, this.vol = v;
  }
}
class Ss {
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
class qs {
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
class Ns {
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Map with keys of colors in ARGB format, and values of number of
   *     pixels in the original image that correspond to the color in the
   *     quantized image.
   */
  static quantize(e, l) {
    const r = new Os().quantize(e, l);
    return Rs.quantize(e, r, l);
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
class we {
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
    return we.lightFromCorePalette(K.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(e) {
    return we.darkFromCorePalette(K.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(e) {
    return we.lightFromCorePalette(K.contentOf(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(e) {
    return we.darkFromCorePalette(K.contentOf(e));
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(e) {
    return new we({
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
    return new we({
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
const js = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: !0
  // Avoid unsuitable colors.
};
function Vs(t, e) {
  return t.score > e.score ? -1 : t.score < e.score ? 1 : 0;
}
class se {
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
    const { desired: s, fallbackColorARGB: r, filter: n } = { ...js, ...l }, o = [], v = new Array(360).fill(0);
    let a = 0;
    for (const [i, y] of e.entries()) {
      const m = U.fromInt(i);
      o.push(m);
      const w = Math.floor(m.hue);
      v[w] += y, a += y;
    }
    const b = new Array(360).fill(0);
    for (let i = 0; i < 360; i++) {
      const y = v[i] / a;
      for (let m = i - 14; m < i + 16; m++) {
        const w = Vt(m);
        b[w] += y;
      }
    }
    const h = new Array();
    for (const i of o) {
      const y = Vt(Math.round(i.hue)), m = b[y];
      if (n && (i.chroma < se.CUTOFF_CHROMA || m <= se.CUTOFF_EXCITED_PROPORTION))
        continue;
      const w = m * 100 * se.WEIGHT_PROPORTION, k = i.chroma < se.TARGET_CHROMA ? se.WEIGHT_CHROMA_BELOW : se.WEIGHT_CHROMA_ABOVE, f = (i.chroma - se.TARGET_CHROMA) * k, u = w + f;
      h.push({ hct: i, score: u });
    }
    h.sort(Vs);
    const c = [];
    for (let i = 90; i >= 15; i--) {
      c.length = 0;
      for (const { hct: y } of h)
        if (c.find((w) => Il(y.hue, w.hue) < i) || c.push(y), c.length >= s)
          break;
      if (c.length >= s)
        break;
    }
    const d = [];
    c.length === 0 && d.push(r);
    for (const i of c)
      d.push(i.toInt());
    return d;
  }
}
se.TARGET_CHROMA = 48;
se.WEIGHT_PROPORTION = 0.7;
se.WEIGHT_CHROMA_ABOVE = 0.3;
se.WEIGHT_CHROMA_BELOW = 0.1;
se.CUTOFF_CHROMA = 5;
se.CUTOFF_EXCITED_PROPORTION = 0.01;
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
function N(t) {
  const e = it(t), l = bt(t), s = ht(t), r = [e.toString(16), l.toString(16), s.toString(16)];
  for (const [n, o] of r.entries())
    o.length === 1 && (r[n] = "0" + o);
  return "#" + r.join("");
}
function Gs(t) {
  t = t.replace("#", "");
  const e = t.length === 3, l = t.length === 6, s = t.length === 8;
  if (!e && !l && !s)
    throw new Error("unexpected hex " + t);
  let r = 0, n = 0, o = 0;
  return e ? (r = ge(t.slice(0, 1).repeat(2)), n = ge(t.slice(1, 2).repeat(2)), o = ge(t.slice(2, 3).repeat(2))) : l ? (r = ge(t.slice(0, 2)), n = ge(t.slice(2, 4)), o = ge(t.slice(4, 6))) : s && (r = ge(t.slice(2, 4)), n = ge(t.slice(4, 6)), o = ge(t.slice(6, 8))), (255 << 24 | (r & 255) << 16 | (n & 255) << 8 | o & 255) >>> 0;
}
function ge(t) {
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
async function Us(t) {
  const e = await new Promise((o, v) => {
    const a = document.createElement("canvas"), b = a.getContext("2d");
    if (!b) {
      v(new Error("Could not get canvas context"));
      return;
    }
    const h = () => {
      a.width = t.width, a.height = t.height, b.drawImage(t, 0, 0);
      let c = [0, 0, t.width, t.height];
      const d = t.dataset.area;
      d && /^\d+(\s*,\s*\d+){3}$/.test(d) && (c = d.split(/\s*,\s*/).map((k) => parseInt(k, 10)));
      const [i, y, m, w] = c;
      o(b.getImageData(i, y, m, w).data);
    };
    t.complete ? h() : t.onload = h;
  }), l = [];
  for (let o = 0; o < e.length; o += 4) {
    const v = e[o], a = e[o + 1], b = e[o + 2];
    if (e[o + 3] < 255)
      continue;
    const c = at(v, a, b);
    l.push(c);
  }
  const s = Ns.quantize(l, 128);
  return se.score(s)[0];
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
function Al(t, e = []) {
  const l = K.of(t);
  return {
    source: t,
    schemes: {
      light: we.light(t),
      dark: we.dark(t)
    },
    palettes: {
      primary: l.a1,
      secondary: l.a2,
      tertiary: l.a3,
      neutral: l.n1,
      neutralVariant: l.n2,
      error: l.error
    },
    customColors: e.map((s) => Hs(t, s))
  };
}
async function Ut(t, e = []) {
  const l = await Us(t);
  return Al(l, e);
}
function Hs(t, e) {
  let l = e.value;
  const s = l, r = t;
  e.blend && (l = Et.harmonize(s, r));
  const o = K.of(l).a1;
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
function ut(t) {
  let e = JSON.parse(JSON.stringify(t.schemes));
  for (let l in e)
    for (let s in e[l])
      e[l][s] = N(e[l][s]);
  return e.dark.surfaceDim = N(t.palettes.neutral.tone(6)), e.dark.surface = N(t.palettes.neutral.tone(6)), e.dark.surfaceBright = N(t.palettes.neutral.tone(24)), e.dark.surfaceContainerLowest = N(t.palettes.neutral.tone(4)), e.dark.surfaceContainerLow = N(t.palettes.neutral.tone(10)), e.dark.surfaceContainer = N(t.palettes.neutral.tone(12)), e.dark.surfaceContainerHigh = N(t.palettes.neutral.tone(17)), e.dark.surfaceContainerHighest = N(t.palettes.neutral.tone(22)), e.dark.onSurface = N(t.palettes.neutral.tone(90)), e.dark.onSurfaceVariant = N(t.palettes.neutralVariant.tone(80)), e.dark.outline = N(t.palettes.neutralVariant.tone(60)), e.dark.outlineVariant = N(t.palettes.neutralVariant.tone(30)), e.light.surfaceDim = N(t.palettes.neutral.tone(87)), e.light.surface = N(t.palettes.neutral.tone(98)), e.light.surfaceBright = N(t.palettes.neutral.tone(98)), e.light.surfaceContainerLowest = N(t.palettes.neutral.tone(100)), e.light.surfaceContainerLow = N(t.palettes.neutral.tone(96)), e.light.surfaceContainer = N(t.palettes.neutral.tone(94)), e.light.surfaceContainerHigh = N(t.palettes.neutral.tone(92)), e.light.surfaceContainerHighest = N(t.palettes.neutral.tone(90)), e.light.onSurface = N(t.palettes.neutral.tone(10)), e.light.onSurfaceVariant = N(t.palettes.neutralVariant.tone(30)), e.light.outline = N(t.palettes.neutralVariant.tone(50)), e.light.outlineVariant = N(t.palettes.neutralVariant.tone(80)), e;
}
async function Ys(t) {
  const e = t, l = {
    light: {},
    dark: {}
  };
  try {
    if (typeof e == "string" && /^\#[0-9a-f]+$/i.test(e)) {
      let o = Al(Gs(e));
      return ut(o);
    }
    if (e.src) {
      let o = await Ut(e);
      return ut(o);
    }
    let s = new Blob();
    if (typeof e == "string" && (s = await fetch(e).then((o) => o.blob())), e.size && (s = e), e.files && e.files[0] && (s = e.files[0]), e.target && e.target.files && e.target.files[0] && (s = e.target.files[0]), !s.size)
      return l;
    let r = new Image(64);
    r.src = URL.createObjectURL(s);
    let n = await Ut(r);
    return ut(n);
  } catch {
    return l;
  }
}
globalThis.materialDynamicColors = Ys;
function Ws(t, e, l) {
  if (e == "short_answer") {
    if (l.includes(":"))
      return t.length >= parseInt(l.split(":")[0]) && t.length <= parseInt(l.split(":")[1]);
  } else if (e == "paragraph") {
    if (l.includes(":"))
      return t.length >= parseInt(l.split(":")[0]) && t.length <= parseInt(l.split(":")[1]);
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
      for (const s in t)
        if (t[s] !== !1 && t[s] !== !0)
          return !1;
      return !0;
    } else {
      if (e == "date")
        return typeof t != "number" ? !1 : t >= l[0] && t <= l[1];
      if (e == "file") {
        const s = new URL(t);
        if (s.hostname == "transfer.sh" && t.length <= 2048) {
          const r = {
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
            if (r[l[n]].includes(s.pathname.split(".").pop()))
              return !0;
        } else
          return !1;
      } else
        return !1;
    }
  }
}
function Js(t) {
  ml(t, "svelte-89v8l3", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}label.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.75rem;vertical-align:baseline}i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,span.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{vertical-align:bottom}button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,label.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{user-select:none}.primary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--primary)!important}.primary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--primary)!important}.primary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--secondary)!important}.secondary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--secondary)!important}.secondary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--tertiary)!important}.tertiary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--tertiary)!important}.tertiary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--error)!important}.error-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--error)!important}.error-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-dim.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-bright.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-lowest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-high.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-highest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--inverse-primary)!important}.surface-dim.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-dim)!important}.surface-bright.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-low)!important}.surface-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container)!important}.surface-container-high.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-low)!important}.black.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#000!important}.black-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#000!important}.black-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#000!important}.white.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff!important}.white-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#fff!important}.white-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#fff!important}.transparent.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:transparent!important}.transparent-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:transparent!important}.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:center!important}.bottom-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:end!important}.top-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:start!important}.left-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:start;justify-content:start!important}.right-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:end;justify-content:end!important}.center-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:center;justify-content:center!important}.red.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.red6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f44336!important}.red-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#f44336!important}.red-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#f44336!important}.red1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffebee!important}.red2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffcdd2!important}.red3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef9a9a!important}.red4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e57373!important}.red5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef5350!important}.red7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e53935!important}.red8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d32f2f!important}.red9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c62828!important}.red10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b71c1c!important}.pink.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.pink6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e91e63!important}.pink-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#e91e63!important}.pink-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#e91e63!important}.pink1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fce4ec!important}.pink2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f8bbd0!important}.pink3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f48fb1!important}.pink4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f06292!important}.pink5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ec407a!important}.pink7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d81b60!important}.pink8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c2185b!important}.pink9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ad1457!important}.pink10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#880e4f!important}.purple.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.purple6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9c27b0!important}.purple-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#9c27b0!important}.purple-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#9c27b0!important}.purple1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f3e5f5!important}.purple2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e1bee7!important}.purple3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ce93d8!important}.purple4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ba68c8!important}.purple5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ab47bc!important}.purple7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8e24aa!important}.purple8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7b1fa2!important}.purple9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#6a1b9a!important}.purple10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4a148c!important}.deep-purple.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.deep-purple6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#673ab7!important}.deep-purple-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#673ab7!important}.deep-purple-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#673ab7!important}.deep-purple1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ede7f6!important}.deep-purple2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d1c4e9!important}.deep-purple3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b39ddb!important}.deep-purple4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9575cd!important}.deep-purple5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7e57c2!important}.deep-purple7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5e35b1!important}.deep-purple8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#512da8!important}.deep-purple9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4527a0!important}.deep-purple10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#311b92!important}.indigo.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.indigo6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3f51b5!important}.indigo-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#3f51b5!important}.indigo-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#3f51b5!important}.indigo1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e8eaf6!important}.indigo2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c5cae9!important}.indigo3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9fa8da!important}.indigo4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7986cb!important}.indigo5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5c6bc0!important}.indigo7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3949ab!important}.indigo8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#303f9f!important}.indigo9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#283593!important}.indigo10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1a237e!important}.blue.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.blue6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#2196f3!important}.blue-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#2196f3!important}.blue-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#2196f3!important}.blue1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e3f2fd!important}.blue2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bbdefb!important}.blue3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#90caf9!important}.blue4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#64b5f6!important}.blue5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#42a5f5!important}.blue7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1e88e5!important}.blue8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1976d2!important}.blue9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1565c0!important}.blue10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0d47a1!important}.light-blue.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.light-blue6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#03a9f4!important}.light-blue-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#03a9f4!important}.light-blue-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#03a9f4!important}.light-blue1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e1f5fe!important}.light-blue2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b3e5fc!important}.light-blue3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#81d4fa!important}.light-blue4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4fc3f7!important}.light-blue5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#29b6f6!important}.light-blue7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#039be5!important}.light-blue8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0288d1!important}.light-blue9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0277bd!important}.light-blue10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#01579b!important}.cyan.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.cyan6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00bcd4!important}.cyan-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#00bcd4!important}.cyan-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#00bcd4!important}.cyan1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0f7fa!important}.cyan2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b2ebf2!important}.cyan3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#80deea!important}.cyan4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4dd0e1!important}.cyan5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#26c6da!important}.cyan7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00acc1!important}.cyan8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0097a7!important}.cyan9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00838f!important}.cyan10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#006064!important}.teal.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.teal6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#009688!important}.teal-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#009688!important}.teal-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#009688!important}.teal1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0f2f1!important}.teal2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b2dfdb!important}.teal3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#80cbc4!important}.teal4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4db6ac!important}.teal5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#26a69a!important}.teal7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00897b!important}.teal8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00796b!important}.teal9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00695c!important}.teal10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#004d40!important}.green.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.green6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4caf50!important}.green-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#4caf50!important}.green-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#4caf50!important}.green1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e8f5e9!important}.green2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c8e6c9!important}.green3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#a5d6a7!important}.green4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#81c784!important}.green5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#66bb6a!important}.green7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#43a047!important}.green8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#388e3c!important}.green9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#2e7d32!important}.green10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1b5e20!important}.light-green.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.light-green6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8bc34a!important}.light-green-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#8bc34a!important}.light-green-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#8bc34a!important}.light-green1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f1f8e9!important}.light-green2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#dcedc8!important}.light-green3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c5e1a5!important}.light-green4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#aed581!important}.light-green5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9ccc65!important}.light-green7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7cb342!important}.light-green8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#689f38!important}.light-green9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#558b2f!important}.light-green10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#33691e!important}.lime.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.lime6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#cddc39!important}.lime-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#cddc39!important}.lime-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#cddc39!important}.lime1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f9fbe7!important}.lime2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f0f4c3!important}.lime3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e6ee9c!important}.lime4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#dce775!important}.lime5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d4e157!important}.lime7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c0ca33!important}.lime8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#afb42b!important}.lime9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9e9d24!important}.lime10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#827717!important}.yellow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.yellow6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffeb3b!important}.yellow-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ffeb3b!important}.yellow-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ffeb3b!important}.yellow1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fffde7!important}.yellow2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff9c4!important}.yellow3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff59d!important}.yellow4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff176!important}.yellow5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffee58!important}.yellow7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fdd835!important}.yellow8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fbc02d!important}.yellow9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f9a825!important}.yellow10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f57f17!important}.amber.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.amber6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffc107!important}.amber-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ffc107!important}.amber-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ffc107!important}.amber1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff8e1!important}.amber2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffecb3!important}.amber3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffe082!important}.amber4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffd54f!important}.amber5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffca28!important}.amber7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffb300!important}.amber8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffa000!important}.amber9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff8f00!important}.amber10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff6f00!important}.orange.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.orange6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff9800!important}.orange-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ff9800!important}.orange-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ff9800!important}.orange1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff3e0!important}.orange2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffe0b2!important}.orange3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffcc80!important}.orange4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffb74d!important}.orange5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffa726!important}.orange7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fb8c00!important}.orange8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f57c00!important}.orange9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef6c00!important}.orange10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e65100!important}.deep-orange.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.deep-orange6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff5722!important}.deep-orange-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ff5722!important}.deep-orange-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ff5722!important}.deep-orange1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fbe9e7!important}.deep-orange2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffccbc!important}.deep-orange3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffab91!important}.deep-orange4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff8a65!important}.deep-orange5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff7043!important}.deep-orange7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f4511e!important}.deep-orange8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e64a19!important}.deep-orange9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d84315!important}.deep-orange10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bf360c!important}.brown.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.brown6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#795548!important}.brown-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#795548!important}.brown-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#795548!important}.brown1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#efebe9!important}.brown2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d7ccc8!important}.brown3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bcaaa4!important}.brown4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#a1887f!important}.brown5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8d6e63!important}.brown7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#6d4c41!important}.brown8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5d4037!important}.brown9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4e342e!important}.brown10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3e2723!important}.blue-grey.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.blue-grey6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#607d8b!important}.blue-grey-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#607d8b!important}.blue-grey-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#607d8b!important}.blue-grey1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#eceff1!important}.blue-grey2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#cfd8dc!important}.blue-grey3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b0bec5!important}.blue-grey4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#90a4ae!important}.blue-grey5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#78909c!important}.blue-grey7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#546e7a!important}.blue-grey8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#455a64!important}.blue-grey9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#37474f!important}.blue-grey10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#263238!important}.grey.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.grey6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9e9e9e!important}.grey-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#9e9e9e!important}.grey-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#9e9e9e!important}.grey1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fafafa!important}.grey2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f5f5f5!important}.grey3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#eee!important}.grey4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0e0e0!important}.grey5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bdbdbd!important}.grey7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#757575!important}.grey8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#616161!important}.grey9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#424242!important}.grey10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#212121!important}.horizontal.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1rem 0!important}.large-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1.5rem 0!important}.small-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:.5rem 0!important}.divider.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:none!important}.small-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate2)!important}.large-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate3)!important}.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:var(---round)}.small-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:var(---round)!important}.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:2rem}.small-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:.5rem}.large-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:3.5rem}.no-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.square.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:0!important}.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:50%}:is(button,.button,.chip).circle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-89v8l3:is(.circle,.square)>span.svelte-89v8l3.svelte-89v8l3{display:none}:is(.circle,.square).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg),:is(.circle,.square).chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1rem!important}.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:transparent!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.auto-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.tiny-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:1rem}.no-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:0}.auto-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:auto}.tiny-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:.25rem}.small-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:.5rem}.large-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:1.5rem}.left-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-start:var(---margin)!important}.right-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-end:var(---margin)!important}.top-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-start:var(---margin)!important}.bottom-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-end:var(---margin)!important}.no-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1!important}.opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:0!important}.small-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.75!important}.medium-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.5!important}.large-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.25!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.auto-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.tiny-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:1rem}.no-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:0}.auto-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:auto}.tiny-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:.25rem}.small-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:.5rem}.large-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:1.5rem}.left-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-inline-start:var(---padding)!important}.right-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-inline-end:var(---padding)!important}.top-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-block-start:var(---padding)!important}.bottom-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-block-end:var(---padding)!important}.front.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{z-index:10!important}.back.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{z-index:-10!important}.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:0}.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-end:0}.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0}.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-end:0}.center.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{transform:translate(-50%,-50%)}.scroll.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:auto}.no-scroll.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:hidden}.small-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:12rem!important}.medium-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:24rem!important}.large-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:36rem!important}.wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:block;white-space:normal}.no-wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s),.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s),.m.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m),.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m),.s.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l),.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l),.m.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l){display:none}}h6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}h6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:1.5rem}.link.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--primary)!important}.inverse-link.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--inverse-primary)!important}.truncate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{white-space:nowrap!important}.small-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.75rem}.medium-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.875rem}.large-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:1rem}.upper.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:uppercase}.lower.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:lowercase}.capitalize.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:capitalize}.bold.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-weight:700}.overline.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-decoration:line-through}.underline.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-decoration:underline}.italic.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-style:italic}p.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:.5rem 0}.no-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:normal}.tiny-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.25}.small-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.5}.medium-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.75}.large-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:2}.extra-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:2.25}.wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.wave.light.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.wave.row.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).transparent.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.no-wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(:hover,:active):after{display:none}.badge.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--error);color:var(--error)}.badge.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--outline);color:var(--primary)}.extend.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3{display:none}.extend.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.extend.svelte-89v8l3:is(:hover,.active)>.svelte-89v8l3:is(img,svg)+span.svelte-89v8l3{display:inherit;margin-inline-start:2.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button):is([disabled]){pointer-events:none}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]):before,.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}article.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--outline)}.chip.round.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1rem}.chip.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.25rem}.chip.round.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;margin-block-end:2rem}.svelte-89v8l3+.field.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.field.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem}.field.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3.5rem}.field.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4rem}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.25rem .25rem 0 0}.field.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.25rem}.field.round.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.25rem}.field.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.5rem}.field.round.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.75rem}.field.round.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}.svelte-89v8l3:not(.field)>input[type^=date].svelte-89v8l3.svelte-89v8l3,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-inner-spin-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-outer-spin-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-decoration,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-cancel-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-results-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-results-decoration{display:none}.field.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-89v8l3:not(.border,.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.round.svelte-89v8l3:not(.border)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-89v8l3:not(.border,.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.invalid.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.invalid.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:disabled{cursor:not-allowed}.field.small.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4.5rem}.field.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:5.5rem}.field.large.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:6.5rem}.field.extra.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:7.5rem}.field.svelte-89v8l3>select.svelte-89v8l3>option.svelte-89v8l3{background-color:var(--surface-container);color:var(--on-surface)}.field.label.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,select){padding-block-start:1rem}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,select){padding-block-start:0}.field.label.small.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.125rem}.field.label.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.375rem}.field.label.large.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.625rem}.field.label.extra.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.875rem}.field.small.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.small.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.small.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:.625rem}.field.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:.875rem}.field.large.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.large.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.large.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.125rem}.field.extra.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.extra.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.extra.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.375rem}.field.small.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:.5625rem!important}.field.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:.8125rem!important}.field.large.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:1.0625rem!important}.field.extra.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:1.3125rem!important}.field.label.svelte-89v8l3>label.svelte-89v8l3.svelte-89v8l3{position:absolute;inset-block-start:-.5rem;inset-inline-start:1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.border.prefix.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.border.prefix.round.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-89v8l3:not(.fill)>label.svelte-89v8l3.svelte-89v8l3:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3:focus+label.svelte-89v8l3:after{border-block-start:.125rem solid var(--primary)}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border.svelte-89v8l3:not(.fill)>select.svelte-89v8l3.svelte-89v8l3{clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.svelte-89v8l3>.svelte-89v8l3:focus+label.svelte-89v8l3{color:var(--primary)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.svelte-89v8l3>.error.svelte-89v8l3.svelte-89v8l3{color:var(--error)!important}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.helper,.error){inset-inline-start:1.5rem}.field.invalid.svelte-89v8l3>.helper.svelte-89v8l3.svelte-89v8l3{display:none}.grid.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-89v8l3+.grid.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.grid.no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:0rem}.grid.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:1.5rem}.grid.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:2rem}.s1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.s2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.s3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.s4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.s5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.s6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.s7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.s8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.s9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.s10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.s11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.s12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.m2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.m3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.m4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.m5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.m6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.m7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.m8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.m9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.m10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.m11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.m12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.l2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.l3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.l4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.l5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.l6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.l7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.l8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.l9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.l10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.l11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.l12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}}i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.absolute.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:absolute}.fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:fixed}:is(.absolute,.fixed).left.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-89v8l3:is(dialog,menu)>.svelte-89v8l3.svelte-89v8l3:is(header,footer){padding:0;background-color:inherit}article.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.5rem}:is(img,svg,video).tiny.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:100%;margin:0 auto}.svelte-89v8l3:is(button,.button,.chip):not(.transparent)>.responsive.svelte-89v8l3.svelte-89v8l3{border:.25rem solid transparent}.svelte-89v8l3:is(button.small,.button.small,.chip)>.responsive.svelte-89v8l3.svelte-89v8l3{inline-size:2rem}.svelte-89v8l3:is(button,.button,.chip.medium)>.responsive.svelte-89v8l3.svelte-89v8l3{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}:is(img,svg,video).empty-state.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{max-inline-size:100%;inline-size:24rem}.svelte-89v8l3:is(button,.button,.chip,.field)>.svelte-89v8l3.svelte-89v8l3:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-89v8l3:is(.tabs) .svelte-89v8l3.svelte-89v8l3:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-89v8l3:is(button,.button,.chip)>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg),.svelte-89v8l3:is(button,.button,.chip)>.responsive.svelte-89v8l3.svelte-89v8l3{margin:0 -.5rem}.svelte-89v8l3:is(button,.button)>.responsive.svelte-89v8l3.svelte-89v8l3{margin-inline-start:-1.5rem}.svelte-89v8l3:is(.circle,.square)>.responsive.svelte-89v8l3.svelte-89v8l3{margin:0}.extend.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.row.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-89v8l3:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-89v8l3.svelte-89v8l3:not(a){margin-block-start:1rem}.svelte-89v8l3:is(nav,.row)>.svelte-89v8l3.svelte-89v8l3,.svelte-89v8l3:is(nav,.row)>.svelte-89v8l3:not(.tooltip,menu)>.svelte-89v8l3{margin-block-start:0;margin-block-end:0}.row.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:0}:is(nav,.row).medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:1.5rem}:is(nav,.row).large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:2rem}.row.wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;flex-wrap:wrap}.svelte-89v8l3:is(nav,.row)>.border.no-margin.svelte-89v8l3+.border.no-margin.svelte-89v8l3{border-inline-start:0}@media only screen and (max-width: 600px){}.overlay.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1;visibility:visible}.page.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.svelte-89v8l3:is(.page,dialog):not(.active) .page.active.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-89v8l3-to-page ease}.page.active.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, -4rem)}.page.active.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, 4rem)}.page.active.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(-4rem, 0)}.page.active.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(4rem, 0)}@keyframes svelte-89v8l3-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}@keyframes svelte-89v8l3-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-89v8l3-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.radio.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.switch.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3.svelte-89v8l3{inline-size:1.5rem;block-size:1.5rem;opacity:0}.switch.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3{inline-size:3.25rem;block-size:2rem;opacity:0}.svelte-89v8l3:is(.checkbox,.radio,.switch)>span.svelte-89v8l3.svelte-89v8l3{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-89v8l3:is(.checkbox,.radio)>span.svelte-89v8l3.svelte-89v8l3:not(:empty){padding-inline-start:.25rem}.svelte-89v8l3:is(.checkbox,.radio,.switch)>span.svelte-89v8l3.svelte-89v8l3:before{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{position:absolute;inset-inline-start:0;inset-block-start:50%;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:var(--speed2) all;font-size:1rem;user-select:none;min-inline-size:auto;content:"";color:var(--surface-variant);background-color:var(--outline)}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{transform:translate(-3rem,-50%) scale(.6)}.checkbox.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:"check_box_outline_blank"}.radio.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:"radio_button_unchecked"}.checkbox.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"check_box";font-variation-settings:"FILL" 1}.radio.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:""!important;font-variation-settings:unset!important}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3:not(:disabled):is(:focus,:hover)+span.svelte-89v8l3:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.switch.svelte-89v8l3>input.svelte-89v8l3:not(:disabled):is(:focus,:hover)+span.svelte-89v8l3:before{box-shadow:0 0 0 .5rem var(--active)}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{color:var(--primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:after{border:none;background-color:var(--primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"check";color:var(--primary);background-color:var(--on-primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{transform:translate(-1.75rem,-50%) scale(1)}.svelte-89v8l3:is(.checkbox,.radio,.switch)>input.svelte-89v8l3:disabled+span.svelte-89v8l3{opacity:.5;cursor:not-allowed}.checkbox.svelte-89v8l3+.checkbox.svelte-89v8l3.svelte-89v8l3,.radio.svelte-89v8l3+.radio.svelte-89v8l3.svelte-89v8l3,.switch.svelte-89v8l3+.switch.svelte-89v8l3.svelte-89v8l3{margin-inline-start:.5rem}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:after{content:"";position:absolute;inset-inline-start:0;inset-block-start:50%;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:after{transform:translate(-3.25rem,-50%)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:4rem}.slider.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:8rem}.slider.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem}.slider.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:.25rem;background:none;z-index:1;padding:0;margin:0}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:only-of-type{cursor:pointer;pointer-events:all}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3::-webkit-slider-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3::-moz-range-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:not(:disabled):is(:focus,:hover)::-webkit-slider-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:not(:disabled):is(:focus,:hover)::-moz-range-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled{cursor:not-allowed;opacity:1}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled::-webkit-slider-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled::-moz-range-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-89v8l3>input.svelte-89v8l3:disabled~.svelte-89v8l3:is(span,.tooltip){background:#9E9E9E}.slider.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3{position:absolute;inset-block-start:calc(50% - .1875rem);block-size:.375rem;border-radius:1rem;background:var(--primary);z-index:0;inset-inline-start:var(---start);inset-inline-end:var(---end)}.slider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-89v8l3:is(nav,.row,.field)>.slider.svelte-89v8l3.svelte-89v8l3:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{visibility:visible;animation:var(--speed2) svelte-89v8l3-to-snackbar}.snackbar.active.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform-end:translate(-50%, -1rem)}@keyframes svelte-89v8l3-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:40%}}.tabs.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding:0 1rem;gap:2rem}.tabs.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-89v8l3+.tabs.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.tooltip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem;white-space:normal}.tooltip.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:16rem;white-space:normal}.svelte-89v8l3:hover>.tooltip.svelte-89v8l3.svelte-89v8l3{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-89v8l3:hover>.tooltip.left.svelte-89v8l3.svelte-89v8l3{transform:translate(-100%,-50%) scale(1)}.svelte-89v8l3:hover>.tooltip.right.svelte-89v8l3.svelte-89v8l3{transform:translate(100%,-50%) scale(1)}.svelte-89v8l3:hover>.tooltip.bottom.svelte-89v8l3.svelte-89v8l3{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:0}.tooltip.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-1rem}.tooltip.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-1.5rem}.tooltip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-start:var(---space)!important}.tooltip.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-end:var(---space)!important}.tooltip.max.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-89v8l3 .svelte-89v8l3.svelte-89v8l3:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00000080}.small-blur.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:.5rem}.large-blur.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:1.5rem}.shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00000050}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to bottom,black,transparent)}.description.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.8}.question-box.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1rem 0}.helper.answerLength.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:right;width:90%;padding-top:0.65rem}.multiple-choice.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-top:1rem}');
}
function Ht(t, e, l) {
  const s = t.slice();
  return s[14] = e[l], s[15] = e, s[16] = l, s;
}
function Yt(t, e, l) {
  const s = t.slice();
  return s[14] = e[l], s[16] = l, s;
}
function Wt(t, e, l) {
  const s = t.slice();
  return s[14] = e[l], s[18] = e, s[16] = l, s;
}
function Jt(t) {
  let e;
  return {
    c() {
      e = I("span"), e.textContent = "*", x(e, "class", "svelte-89v8l3");
    },
    m(l, s) {
      F(l, e, s);
    },
    d(l) {
      l && R(e);
    }
  };
}
function Xt(t) {
  let e, l, s, r, n, o, v, a, b = (
    /*answer*/
    t[0].answer.length + ""
  ), h, c, d, i;
  return {
    c() {
      e = I("div"), l = I("input"), r = O(), n = I("span"), o = H(
        /*errorText*/
        t[3]
      ), v = O(), a = I("p"), h = H(b), x(l, "type", "text"), x(l, "placeholder", s = /*question*/
      t[1].placeholder || ""), x(l, "class", "svelte-89v8l3"), x(n, "class", "error svelte-89v8l3"), x(a, "class", "answerLength helper svelte-89v8l3"), x(e, "class", c = "field border " + /*error*/
      t[2] + " svelte-89v8l3");
    },
    m(y, m) {
      F(y, e, m), C(e, l), _e(
        l,
        /*answer*/
        t[0].answer
      ), C(e, r), C(e, n), C(n, o), C(e, v), C(e, a), C(a, h), d || (i = [
        J(
          l,
          "input",
          /*input_input_handler*/
          t[8]
        ),
        J(
          l,
          "input",
          /*check*/
          t[4]
        )
      ], d = !0);
    },
    p(y, m) {
      m & /*question*/
      2 && s !== (s = /*question*/
      y[1].placeholder || "") && x(l, "placeholder", s), m & /*answer*/
      1 && l.value !== /*answer*/
      y[0].answer && _e(
        l,
        /*answer*/
        y[0].answer
      ), m & /*errorText*/
      8 && Q(
        o,
        /*errorText*/
        y[3]
      ), m & /*answer*/
      1 && b !== (b = /*answer*/
      y[0].answer.length + "") && Q(h, b), m & /*error*/
      4 && c !== (c = "field border " + /*error*/
      y[2] + " svelte-89v8l3") && x(e, "class", c);
    },
    d(y) {
      y && R(e), d = !1, fe(i);
    }
  };
}
function Kt(t) {
  let e, l, s, r, n, o, v, a = (
    /*answer*/
    t[0].answer.length + ""
  ), b, h, c, d;
  return {
    c() {
      e = I("div"), l = I("textarea"), s = O(), r = I("span"), n = H(
        /*errorText*/
        t[3]
      ), o = O(), v = I("p"), b = H(a), x(l, "spellcheck", "false"), x(l, "class", "svelte-89v8l3"), x(r, "class", "error svelte-89v8l3"), x(v, "class", "answerLength helper svelte-89v8l3"), x(e, "class", h = "field textarea border " + /*error*/
      t[2] + " svelte-89v8l3");
    },
    m(i, y) {
      F(i, e, y), C(e, l), _e(
        l,
        /*answer*/
        t[0].answer
      ), C(e, s), C(e, r), C(r, n), C(e, o), C(e, v), C(v, b), c || (d = [
        J(
          l,
          "input",
          /*textarea_input_handler*/
          t[9]
        ),
        J(
          l,
          "input",
          /*check*/
          t[4]
        )
      ], c = !0);
    },
    p(i, y) {
      y & /*answer*/
      1 && _e(
        l,
        /*answer*/
        i[0].answer
      ), y & /*errorText*/
      8 && Q(
        n,
        /*errorText*/
        i[3]
      ), y & /*answer*/
      1 && a !== (a = /*answer*/
      i[0].answer.length + "") && Q(b, a), y & /*error*/
      4 && h !== (h = "field textarea border " + /*error*/
      i[2] + " svelte-89v8l3") && x(e, "class", h);
    },
    d(i) {
      i && R(e), c = !1, fe(d);
    }
  };
}
function Qt(t) {
  let e, l = Pe(
    /*question*/
    t[1].options.optionsData
  ), s = [];
  for (let r = 0; r < l.length; r += 1)
    s[r] = Zt(Wt(t, l, r));
  return {
    c() {
      e = I("div");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      x(e, "class", "multiple-choice svelte-89v8l3");
    },
    m(r, n) {
      F(r, e, n);
      for (let o = 0; o < s.length; o += 1)
        s[o] && s[o].m(e, null);
    },
    p(r, n) {
      if (n & /*question, log*/
      34) {
        l = Pe(
          /*question*/
          r[1].options.optionsData
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const v = Wt(r, l, o);
          s[o] ? s[o].p(v, n) : (s[o] = Zt(v), s[o].c(), s[o].m(e, null));
        }
        for (; o < s.length; o += 1)
          s[o].d(1);
        s.length = l.length;
      }
    },
    d(r) {
      r && R(e), vt(s, r);
    }
  };
}
function Zt(t) {
  let e, l, s, r, n, o = (
    /*opt*/
    t[14] + ""
  ), v, a, b, h, c;
  function d() {
    t[10].call(
      l,
      /*index*/
      t[16]
    );
  }
  return {
    c() {
      e = I("label"), l = I("input"), r = O(), n = I("span"), v = H(o), a = O(), b = I("br"), x(l, "type", "radio"), x(l, "name", s = "radio_group_" + /*question*/
      t[1].id), x(l, "class", "svelte-89v8l3"), x(n, "class", "svelte-89v8l3"), x(e, "class", "radio svelte-89v8l3"), x(b, "class", "svelte-89v8l3");
    },
    m(i, y) {
      F(i, e, y), C(e, l), _e(
        l,
        /*index*/
        t[16]
      ), C(e, r), C(e, n), C(n, v), C(e, a), F(i, b, y), h || (c = [
        J(
          l,
          "change",
          /*log*/
          t[5]
        ),
        J(l, "change", d)
      ], h = !0);
    },
    p(i, y) {
      t = i, y & /*question*/
      2 && s !== (s = "radio_group_" + /*question*/
      t[1].id) && x(l, "name", s), _e(
        l,
        /*index*/
        t[16]
      ), y & /*question*/
      2 && o !== (o = /*opt*/
      t[14] + "") && Q(v, o);
    },
    d(i) {
      i && (R(e), R(b)), h = !1, fe(c);
    }
  };
}
function el(t) {
  let e, l, s, r, n, o, v, a, b = Pe(
    /*question*/
    t[1].options.optionsData
  ), h = [];
  for (let c = 0; c < b.length; c += 1)
    h[c] = tl(Yt(t, b, c));
  return {
    c() {
      e = I("div"), l = I("select");
      for (let c = 0; c < h.length; c += 1)
        h[c].c();
      s = O(), r = I("label"), r.textContent = "Select", n = O(), o = I("i"), o.textContent = "arrow_drop_down", x(l, "class", "svelte-89v8l3"), /*answer*/
      t[0].answer === void 0 && lt(() => (
        /*select_change_handler*/
        t[11].call(l)
      )), x(r, "class", "svelte-89v8l3"), x(o, "class", "svelte-89v8l3"), x(e, "class", "field label suffix border svelte-89v8l3");
    },
    m(c, d) {
      F(c, e, d), C(e, l);
      for (let i = 0; i < h.length; i += 1)
        h[i] && h[i].m(l, null);
      qt(
        l,
        /*answer*/
        t[0].answer,
        !0
      ), C(e, s), C(e, r), C(e, n), C(e, o), v || (a = J(
        l,
        "change",
        /*select_change_handler*/
        t[11]
      ), v = !0);
    },
    p(c, d) {
      if (d & /*question*/
      2) {
        b = Pe(
          /*question*/
          c[1].options.optionsData
        );
        let i;
        for (i = 0; i < b.length; i += 1) {
          const y = Yt(c, b, i);
          h[i] ? h[i].p(y, d) : (h[i] = tl(y), h[i].c(), h[i].m(l, null));
        }
        for (; i < h.length; i += 1)
          h[i].d(1);
        h.length = b.length;
      }
      d & /*answer*/
      1 && qt(
        l,
        /*answer*/
        c[0].answer
      );
    },
    d(c) {
      c && R(e), vt(h, c), v = !1, a();
    }
  };
}
function tl(t) {
  let e, l = (
    /*opt*/
    t[14] + ""
  ), s;
  return {
    c() {
      e = I("option"), s = H(l), e.__value = /*index*/
      t[16], _e(e, e.__value), x(e, "class", "svelte-89v8l3");
    },
    m(r, n) {
      F(r, e, n), C(e, s);
    },
    p(r, n) {
      n & /*question*/
      2 && l !== (l = /*opt*/
      r[14] + "") && Q(s, l);
    },
    d(r) {
      r && R(e);
    }
  };
}
function ll(t) {
  let e, l = Pe(
    /*question*/
    t[1].options.optionsData
  ), s = [];
  for (let r = 0; r < l.length; r += 1)
    s[r] = sl(Ht(t, l, r));
  return {
    c() {
      e = I("div");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      x(e, "class", "multiple-choice svelte-89v8l3");
    },
    m(r, n) {
      F(r, e, n);
      for (let o = 0; o < s.length; o += 1)
        s[o] && s[o].m(e, null);
    },
    p(r, n) {
      if (n & /*question, checkbox*/
      66) {
        l = Pe(
          /*question*/
          r[1].options.optionsData
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const v = Ht(r, l, o);
          s[o] ? s[o].p(v, n) : (s[o] = sl(v), s[o].c(), s[o].m(e, null));
        }
        for (; o < s.length; o += 1)
          s[o].d(1);
        s.length = l.length;
      }
    },
    d(r) {
      r && R(e), vt(s, r);
    }
  };
}
function sl(t) {
  let e, l, s, r, n, o = (
    /*opt*/
    t[14] + ""
  ), v, a, b, h, c;
  function d() {
    t[12].call(
      l,
      /*index*/
      t[16]
    );
  }
  return {
    c() {
      e = I("label"), l = I("input"), r = O(), n = I("span"), v = H(o), a = O(), b = I("br"), x(l, "type", "checkbox"), x(l, "name", s = "checkboxes_" + /*question*/
      t[1].id), x(l, "class", "svelte-89v8l3"), x(n, "class", "svelte-89v8l3"), x(e, "class", "checkbox svelte-89v8l3"), x(b, "class", "svelte-89v8l3");
    },
    m(i, y) {
      F(i, e, y), C(e, l), _e(
        l,
        /*index*/
        t[16]
      ), C(e, r), C(e, n), C(n, v), C(e, a), F(i, b, y), h || (c = [
        J(
          l,
          "change",
          /*checkbox*/
          t[6]
        ),
        J(l, "change", d)
      ], h = !0);
    },
    p(i, y) {
      t = i, y & /*question*/
      2 && s !== (s = "checkboxes_" + /*question*/
      t[1].id) && x(l, "name", s), _e(
        l,
        /*index*/
        t[16]
      ), y & /*question*/
      2 && o !== (o = /*opt*/
      t[14] + "") && Q(v, o);
    },
    d(i) {
      i && (R(e), R(b)), h = !1, fe(c);
    }
  };
}
function rl(t) {
  let e, l, s, r, n, o, v, a, b, h, c, d, i = (
    /*answer*/
    t[0].answer && nl(t)
  );
  return {
    c() {
      e = I("div"), l = I("button"), s = I("i"), s.textContent = "today", r = O(), n = I("span"), n.textContent = "Date", o = O(), v = I("input"), h = O(), i && i.c(), x(s, "class", "svelte-89v8l3"), x(n, "class", "svelte-89v8l3"), x(v, "type", "date"), x(v, "min", a = new Date(
        /*question*/
        t[1].options.optionsData[0]
      ).toISOString().split("T")[0]), x(v, "max", b = new Date(
        /*question*/
        t[1].options.optionsData[1]
      ).toISOString().split("T")[0]), x(v, "class", "svelte-89v8l3"), x(l, "class", "svelte-89v8l3"), x(e, "class", "date svelte-89v8l3");
    },
    m(y, m) {
      F(y, e, m), C(e, l), C(l, s), C(l, r), C(l, n), C(l, o), C(l, v), C(e, h), i && i.m(e, null), c || (d = J(
        v,
        "change",
        /*date*/
        t[7]
      ), c = !0);
    },
    p(y, m) {
      m & /*question*/
      2 && a !== (a = new Date(
        /*question*/
        y[1].options.optionsData[0]
      ).toISOString().split("T")[0]) && x(v, "min", a), m & /*question*/
      2 && b !== (b = new Date(
        /*question*/
        y[1].options.optionsData[1]
      ).toISOString().split("T")[0]) && x(v, "max", b), /*answer*/
      y[0].answer ? i ? i.p(y, m) : (i = nl(y), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    d(y) {
      y && R(e), i && i.d(), c = !1, d();
    }
  };
}
function nl(t) {
  let e = new Date(
    /*answer*/
    t[0].answer
  ).toDateString() + "", l;
  return {
    c() {
      l = H(e);
    },
    m(s, r) {
      F(s, l, r);
    },
    p(s, r) {
      r & /*answer*/
      1 && e !== (e = new Date(
        /*answer*/
        s[0].answer
      ).toDateString() + "") && Q(l, e);
    },
    d(s) {
      s && R(l);
    }
  };
}
function Xs(t) {
  let e, l, s = (
    /*question*/
    t[1].question + ""
  ), r, n, o, v, a = (
    /*question*/
    (t[1].prompt || "") + ""
  ), b, h, c, d, i, y, m, w = (
    /*question*/
    t[1].required && Jt()
  ), k = (
    /*question*/
    t[1].type == "short_answer" && Xt(t)
  ), f = (
    /*question*/
    t[1].type == "paragraph" && Kt(t)
  ), u = (
    /*question*/
    t[1].type == "multiple" && Qt(t)
  ), T = (
    /*question*/
    t[1].type == "dropdown" && el(t)
  ), g = (
    /*question*/
    t[1].type == "checkboxes" && ll(t)
  ), P = (
    /*question*/
    t[1].type == "date" && rl(t)
  );
  return {
    c() {
      e = I("article"), l = I("h6"), r = H(s), n = O(), w && w.c(), o = O(), v = I("p"), b = H(a), h = O(), k && k.c(), c = O(), f && f.c(), d = O(), u && u.c(), i = O(), T && T.c(), y = O(), g && g.c(), m = O(), P && P.c(), x(l, "class", "svelte-89v8l3"), x(v, "class", "description svelte-89v8l3"), x(e, "class", "border question-box svelte-89v8l3");
    },
    m(p, _) {
      F(p, e, _), C(e, l), C(l, r), C(l, n), w && w.m(l, null), C(e, o), C(e, v), C(v, b), C(e, h), k && k.m(e, null), C(e, c), f && f.m(e, null), C(e, d), u && u.m(e, null), C(e, i), T && T.m(e, null), C(e, y), g && g.m(e, null), C(e, m), P && P.m(e, null);
    },
    p(p, [_]) {
      _ & /*question*/
      2 && s !== (s = /*question*/
      p[1].question + "") && Q(r, s), /*question*/
      p[1].required ? w || (w = Jt(), w.c(), w.m(l, null)) : w && (w.d(1), w = null), _ & /*question*/
      2 && a !== (a = /*question*/
      (p[1].prompt || "") + "") && Q(b, a), /*question*/
      p[1].type == "short_answer" ? k ? k.p(p, _) : (k = Xt(p), k.c(), k.m(e, c)) : k && (k.d(1), k = null), /*question*/
      p[1].type == "paragraph" ? f ? f.p(p, _) : (f = Kt(p), f.c(), f.m(e, d)) : f && (f.d(1), f = null), /*question*/
      p[1].type == "multiple" ? u ? u.p(p, _) : (u = Qt(p), u.c(), u.m(e, i)) : u && (u.d(1), u = null), /*question*/
      p[1].type == "dropdown" ? T ? T.p(p, _) : (T = el(p), T.c(), T.m(e, y)) : T && (T.d(1), T = null), /*question*/
      p[1].type == "checkboxes" ? g ? g.p(p, _) : (g = ll(p), g.c(), g.m(e, m)) : g && (g.d(1), g = null), /*question*/
      p[1].type == "date" ? P ? P.p(p, _) : (P = rl(p), P.c(), P.m(e, null)) : P && (P.d(1), P = null);
    },
    i: ce,
    o: ce,
    d(p) {
      p && R(e), w && w.d(), k && k.d(), f && f.d(), u && u.d(), T && T.d(), g && g.d(), P && P.d();
    }
  };
}
function Ks(t, e, l) {
  let { question: s = void 0 } = e, { answer: r = { id: String(s.id), answer: "" } } = e, n, o = "", v = [];
  function a(k) {
    Ws(k.target.value, s.type, s.validate) ? (l(2, n = ""), l(3, o = "")) : (l(2, n = "invalid"), l(3, o = `The answer doesn't meet the requirements. (${s.validate.replace(":", "-")})`));
  }
  function b(k) {
    l(0, r.answer = Number(k.target.value), r);
  }
  function h(k) {
    if (v.length == 0)
      for (let f in s.options.optionsData)
        v.push(!1);
    v[Number(k.target.value)] ? v[Number(k.target.value)] = !1 : v[Number(k.target.value)] = !0, l(0, r.answer = v, r);
  }
  function c(k) {
    l(0, r.answer = new Date(k.target.value).getTime(), r);
  }
  function d() {
    r.answer = this.value, l(0, r);
  }
  function i() {
    r.answer = this.value, l(0, r);
  }
  function y(k) {
    this.value;
  }
  function m() {
    r.answer = Gl(this), l(0, r);
  }
  function w(k) {
    this.value;
  }
  return t.$$set = (k) => {
    "question" in k && l(1, s = k.question), "answer" in k && l(0, r = k.answer);
  }, [
    r,
    s,
    n,
    o,
    a,
    b,
    h,
    c,
    d,
    i,
    y,
    m,
    w
  ];
}
class Bt extends _l {
  constructor(e) {
    super(), kl(this, e, Ks, Xs, ul, { question: 1, answer: 0 }, Js);
  }
  get question() {
    return this.$$.ctx[1];
  }
  set question(e) {
    this.$$set({ question: e }), me();
  }
  get answer() {
    return this.$$.ctx[0];
  }
  set answer(e) {
    this.$$set({ answer: e }), me();
  }
}
xl(Bt, { question: {}, answer: {} }, [], [], !0);
let Xe;
const Qs = new Uint8Array(16);
function Zs() {
  if (!Xe && (Xe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Xe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Xe(Qs);
}
const X = [];
for (let t = 0; t < 256; ++t)
  X.push((t + 256).toString(16).slice(1));
function er(t, e = 0) {
  return X[t[e + 0]] + X[t[e + 1]] + X[t[e + 2]] + X[t[e + 3]] + "-" + X[t[e + 4]] + X[t[e + 5]] + "-" + X[t[e + 6]] + X[t[e + 7]] + "-" + X[t[e + 8]] + X[t[e + 9]] + "-" + X[t[e + 10]] + X[t[e + 11]] + X[t[e + 12]] + X[t[e + 13]] + X[t[e + 14]] + X[t[e + 15]];
}
const tr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ol = {
  randomUUID: tr
};
function lr(t, e, l) {
  if (ol.randomUUID && !e && !t)
    return ol.randomUUID();
  t = t || {};
  const s = t.random || (t.rng || Zs)();
  if (s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, e) {
    l = l || 0;
    for (let r = 0; r < 16; ++r)
      e[l + r] = s[r];
    return e;
  }
  return er(s);
}
function sr(t) {
  ml(t, "svelte-zh0by8", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}body.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--on-surface);background-color:var(--surface);overflow-x:hidden}label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-size:.75rem;vertical-align:baseline}i.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{vertical-align:bottom}button.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.button.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}button.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.button.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,i.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{user-select:none}body.svelte-zh0by8 .svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-scrollbar,body.svelte-zh0by8 .svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-scrollbar-thumb,body.svelte-zh0by8 .svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}body.svelte-zh0by8 .svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}.primary.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--primary)!important}.primary-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--primary)!important}.primary-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--secondary)!important}.secondary-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--secondary)!important}.secondary-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--tertiary)!important}.tertiary-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--tertiary)!important}.tertiary-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--error)!important}.error-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--error)!important}.error-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-dim.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-bright.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-container-lowest.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-container-low.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-container-high.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.surface-container-highest.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--inverse-primary)!important}.surface-dim.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-dim)!important}.surface-bright.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-container-low)!important}.surface-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-container)!important}.surface-container-high.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--surface-container-low)!important}.black.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#000!important}.black-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#000!important}.black-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#000!important}.white.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fff!important}.white-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#fff!important}.white-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#fff!important}.transparent.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:transparent!important}.transparent-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:transparent!important}.fill.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;align-items:center!important}.bottom-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;align-items:end!important}.top-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;align-items:start!important}.left-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-align:start;justify-content:start!important}.right-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-align:end;justify-content:end!important}.center-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-align:center;justify-content:center!important}.red.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.red6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f44336!important}.red-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#f44336!important}.red-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#f44336!important}.red1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffebee!important}.red2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffcdd2!important}.red3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ef9a9a!important}.red4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e57373!important}.red5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ef5350!important}.red7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e53935!important}.red8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#d32f2f!important}.red9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#c62828!important}.red10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#b71c1c!important}.pink.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.pink6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e91e63!important}.pink-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#e91e63!important}.pink-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#e91e63!important}.pink1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fce4ec!important}.pink2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f8bbd0!important}.pink3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f48fb1!important}.pink4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f06292!important}.pink5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ec407a!important}.pink7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#d81b60!important}.pink8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#c2185b!important}.pink9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ad1457!important}.pink10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#880e4f!important}.purple.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.purple6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#9c27b0!important}.purple-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#9c27b0!important}.purple-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#9c27b0!important}.purple1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f3e5f5!important}.purple2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e1bee7!important}.purple3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ce93d8!important}.purple4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ba68c8!important}.purple5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ab47bc!important}.purple7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#8e24aa!important}.purple8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#7b1fa2!important}.purple9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#6a1b9a!important}.purple10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4a148c!important}.deep-purple.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.deep-purple6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#673ab7!important}.deep-purple-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#673ab7!important}.deep-purple-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#673ab7!important}.deep-purple1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ede7f6!important}.deep-purple2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#d1c4e9!important}.deep-purple3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#b39ddb!important}.deep-purple4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#9575cd!important}.deep-purple5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#7e57c2!important}.deep-purple7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#5e35b1!important}.deep-purple8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#512da8!important}.deep-purple9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4527a0!important}.deep-purple10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#311b92!important}.indigo.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.indigo6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#3f51b5!important}.indigo-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#3f51b5!important}.indigo-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#3f51b5!important}.indigo1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e8eaf6!important}.indigo2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#c5cae9!important}.indigo3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#9fa8da!important}.indigo4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#7986cb!important}.indigo5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#5c6bc0!important}.indigo7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#3949ab!important}.indigo8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#303f9f!important}.indigo9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#283593!important}.indigo10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#1a237e!important}.blue.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.blue6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#2196f3!important}.blue-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#2196f3!important}.blue-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#2196f3!important}.blue1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e3f2fd!important}.blue2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#bbdefb!important}.blue3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#90caf9!important}.blue4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#64b5f6!important}.blue5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#42a5f5!important}.blue7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#1e88e5!important}.blue8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#1976d2!important}.blue9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#1565c0!important}.blue10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#0d47a1!important}.light-blue.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.light-blue6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#03a9f4!important}.light-blue-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#03a9f4!important}.light-blue-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#03a9f4!important}.light-blue1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e1f5fe!important}.light-blue2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#b3e5fc!important}.light-blue3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#81d4fa!important}.light-blue4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4fc3f7!important}.light-blue5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#29b6f6!important}.light-blue7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#039be5!important}.light-blue8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#0288d1!important}.light-blue9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#0277bd!important}.light-blue10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#01579b!important}.cyan.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.cyan6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00bcd4!important}.cyan-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#00bcd4!important}.cyan-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#00bcd4!important}.cyan1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e0f7fa!important}.cyan2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#b2ebf2!important}.cyan3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#80deea!important}.cyan4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4dd0e1!important}.cyan5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#26c6da!important}.cyan7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00acc1!important}.cyan8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#0097a7!important}.cyan9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00838f!important}.cyan10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#006064!important}.teal.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.teal6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#009688!important}.teal-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#009688!important}.teal-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#009688!important}.teal1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e0f2f1!important}.teal2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#b2dfdb!important}.teal3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#80cbc4!important}.teal4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4db6ac!important}.teal5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#26a69a!important}.teal7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00897b!important}.teal8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00796b!important}.teal9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00695c!important}.teal10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#004d40!important}.green.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.green6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4caf50!important}.green-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#4caf50!important}.green-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#4caf50!important}.green1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e8f5e9!important}.green2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#c8e6c9!important}.green3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#a5d6a7!important}.green4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#81c784!important}.green5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#66bb6a!important}.green7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#43a047!important}.green8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#388e3c!important}.green9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#2e7d32!important}.green10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#1b5e20!important}.light-green.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.light-green6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#8bc34a!important}.light-green-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#8bc34a!important}.light-green-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#8bc34a!important}.light-green1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f1f8e9!important}.light-green2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#dcedc8!important}.light-green3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#c5e1a5!important}.light-green4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#aed581!important}.light-green5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#9ccc65!important}.light-green7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#7cb342!important}.light-green8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#689f38!important}.light-green9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#558b2f!important}.light-green10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#33691e!important}.lime.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.lime6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#cddc39!important}.lime-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#cddc39!important}.lime-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#cddc39!important}.lime1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f9fbe7!important}.lime2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f0f4c3!important}.lime3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e6ee9c!important}.lime4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#dce775!important}.lime5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#d4e157!important}.lime7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#c0ca33!important}.lime8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#afb42b!important}.lime9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#9e9d24!important}.lime10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#827717!important}.yellow.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.yellow6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffeb3b!important}.yellow-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#ffeb3b!important}.yellow-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#ffeb3b!important}.yellow1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fffde7!important}.yellow2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fff9c4!important}.yellow3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fff59d!important}.yellow4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fff176!important}.yellow5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffee58!important}.yellow7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fdd835!important}.yellow8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fbc02d!important}.yellow9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f9a825!important}.yellow10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f57f17!important}.amber.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.amber6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffc107!important}.amber-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#ffc107!important}.amber-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#ffc107!important}.amber1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fff8e1!important}.amber2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffecb3!important}.amber3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffe082!important}.amber4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffd54f!important}.amber5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffca28!important}.amber7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffb300!important}.amber8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffa000!important}.amber9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ff8f00!important}.amber10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ff6f00!important}.orange.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.orange6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ff9800!important}.orange-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#ff9800!important}.orange-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#ff9800!important}.orange1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fff3e0!important}.orange2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffe0b2!important}.orange3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffcc80!important}.orange4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffb74d!important}.orange5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffa726!important}.orange7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fb8c00!important}.orange8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f57c00!important}.orange9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ef6c00!important}.orange10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e65100!important}.deep-orange.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.deep-orange6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ff5722!important}.deep-orange-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#ff5722!important}.deep-orange-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#ff5722!important}.deep-orange1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fbe9e7!important}.deep-orange2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffccbc!important}.deep-orange3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ffab91!important}.deep-orange4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ff8a65!important}.deep-orange5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#ff7043!important}.deep-orange7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f4511e!important}.deep-orange8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e64a19!important}.deep-orange9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#d84315!important}.deep-orange10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#bf360c!important}.brown.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.brown6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#795548!important}.brown-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#795548!important}.brown-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#795548!important}.brown1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#efebe9!important}.brown2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#d7ccc8!important}.brown3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#bcaaa4!important}.brown4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#a1887f!important}.brown5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#8d6e63!important}.brown7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#6d4c41!important}.brown8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#5d4037!important}.brown9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#4e342e!important}.brown10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#3e2723!important}.blue-grey.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.blue-grey6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#607d8b!important}.blue-grey-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#607d8b!important}.blue-grey-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#607d8b!important}.blue-grey1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#eceff1!important}.blue-grey2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#cfd8dc!important}.blue-grey3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#b0bec5!important}.blue-grey4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#90a4ae!important}.blue-grey5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#78909c!important}.blue-grey7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#546e7a!important}.blue-grey8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#455a64!important}.blue-grey9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#37474f!important}.blue-grey10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#263238!important}.grey.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.grey6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#9e9e9e!important}.grey-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:#9e9e9e!important}.grey-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:#9e9e9e!important}.grey1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#fafafa!important}.grey2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#f5f5f5!important}.grey3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#eee!important}.grey4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#e0e0e0!important}.grey5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#bdbdbd!important}.grey7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#757575!important}.grey8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#616161!important}.grey9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#424242!important}.grey10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#212121!important}.horizontal.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.small-divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.medium-divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.large-divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:1rem 0!important}.large-divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:1.5rem 0!important}.small-divider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:.5rem 0!important}.divider.vertical.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-shadow:none!important}.small-elevate.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.elevate.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-shadow:var(--elevate2)!important}.large-elevate.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-shadow:var(--elevate3)!important}.round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:var(---round)}.small-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.medium-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.large-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:var(---round)!important}.top-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.bottom-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.left-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.right-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.medium-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---round:2rem}.small-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---round:.5rem}.large-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---round:3.5rem}.no-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.square.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.top-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.bottom-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.left-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.right-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:0!important}.top-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:50%}:is(button,.button,.chip).circle.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:2.5rem}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-zh0by8:is(.circle,.square)>span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:none}:is(.circle,.square).small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(i,img,video,svg),:is(.circle,.square).chip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1rem!important}.border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:transparent!important}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.auto-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.tiny-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.small-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.medium-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.large-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.left-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.right-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.top-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.bottom-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.horizontal-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.vertical-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---margin:1rem}.no-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---margin:0}.auto-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---margin:auto}.tiny-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---margin:.25rem}.small-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---margin:.5rem}.large-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---margin:1.5rem}.left-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.horizontal-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-start:var(---margin)!important}.right-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.horizontal-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-end:var(---margin)!important}.top-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.vertical-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:var(---margin)!important}.bottom-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.vertical-margin.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-end:var(---margin)!important}.no-opacity.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1!important}.opacity.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:0!important}.small-opacity.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:.75!important}.medium-opacity.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:.5!important}.large-opacity.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:.25!important}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.auto-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.tiny-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.small-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.medium-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.large-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.left-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.right-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.top-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.bottom-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.horizontal-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.vertical-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:1rem}.no-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:0}.auto-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:auto}.tiny-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:.25rem}.small-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:.5rem}.large-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:1.5rem}.left-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.horizontal-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{padding-inline-start:var(---padding)!important}.right-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.horizontal-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{padding-inline-end:var(---padding)!important}.top-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.vertical-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{padding-block-start:var(---padding)!important}.bottom-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.vertical-padding.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{padding-block-end:var(---padding)!important}.front.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{z-index:10!important}.back.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{z-index:-10!important}.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-inline-start:0}.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-inline-end:0}.top.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:0}.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-end:0}.center.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{transform:translate(-50%,-50%)}.scroll.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{overflow:auto}.no-scroll.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{overflow:hidden}.small-width.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:12rem!important}.medium-height.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:24rem!important}.large-height.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:36rem!important}.wrap.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:block;white-space:normal}.no-wrap.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.s),.l.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.s),.m.l.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.m),.l.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.m),.s.l.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.l),.s.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.l),.m.s.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.l){display:none}}body.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-family:var(--font);font-size:.875rem;line-height:1.25}h5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}.svelte-zh0by8+h5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:1rem}h5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-size:1.75rem}.link.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--primary)!important}.inverse-link.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{color:var(--inverse-primary)!important}.truncate.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{white-space:nowrap!important}.small-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-size:.75rem}.medium-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-size:.875rem}.large-text.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-size:1rem}.upper.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-transform:uppercase}.lower.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-transform:lowercase}.capitalize.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-transform:capitalize}.bold.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-weight:700}.overline.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-decoration:line-through}.underline.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{text-decoration:underline}.italic.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{font-style:italic}p.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:.5rem 0}.no-line.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{line-height:normal}.tiny-line.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{line-height:1.25}.small-line.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{line-height:1.5}.medium-line.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{line-height:1.75}.large-line.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{line-height:2}.extra-line.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{line-height:2.25}.wave.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,.chip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,.wave.light.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,.wave.row.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,.chip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,:is(.button,button).none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,:is(.button,button).border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,:is(.button,button).transparent.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,:is(.button,button).none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after,.no-wave.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(:hover,:active):after{display:none}.badge.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--error);color:var(--error)}.badge.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,button.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--outline);color:var(--primary)}.extend.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.button):is([disabled]){pointer-events:none}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.button,button):is([disabled]):before,.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:2rem}article.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.svelte-zh0by8+article.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:1rem}article.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:12rem}article.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:20rem}article.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:32rem}.chip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-color:var(--outline)}.chip.round.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1rem}.chip.round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1.25rem}.chip.round.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}dialog.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:block;border:none;opacity:0;visibility:hidden;position:fixed;box-shadow:var(--elevate2);color:var(--on-surface);background-color:var(--surface-container-high);padding:1rem;z-index:100;inset-inline-start:50%;inset-block-start:10%;min-inline-size:20rem;max-inline-size:100%;max-block-size:80%;overflow-x:hidden;overflow-y:auto;transition:var(--speed3) all,0s background-color;border-radius:1rem;transform:translate(-50%,-4rem)}dialog.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::backdrop{display:none}dialog.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:25%;block-size:25%}dialog.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:50%;block-size:50%}dialog.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:75%;block-size:75%}dialog.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.active,[open]){opacity:1;visibility:visible;transform:translate(-50%)}dialog.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.active,[open]):is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog.top.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1;inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(-100%);border-radius:unset;border-end-start-radius:1rem;border-end-end-radius:1rem}dialog.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1;inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:unset;border-start-end-radius:1rem;border-end-end-radius:1rem;background-color:var(--surface);transform:translate(-100%)}dialog.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1;inset-block-start:0;inset-inline-start:auto;inset-inline-end:0;inset-block-end:auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:unset;border-start-start-radius:1rem;border-end-start-radius:1rem;background-color:var(--surface);transform:translate(100%)}dialog.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1;inset-block-start:auto;inset-inline-start:0;inset-inline-end:auto;inset-block-end:0;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(100%);border-radius:unset;border-start-start-radius:1rem;border-start-end-radius:1rem}dialog.max.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;transform:translateY(4rem);background-color:var(--surface)}dialog.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.left,.right){inline-size:20rem}dialog.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.left,.right){inline-size:32rem}dialog.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.left,.right){inline-size:44rem}dialog.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.top,.bottom){block-size:16rem}dialog.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.top,.bottom){block-size:24rem}dialog.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.top,.bottom){block-size:32rem}.field.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:3rem;margin-block-end:2rem}.svelte-zh0by8+.field.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:1rem}.field.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2.5rem}.field.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:3.5rem}.field.extra.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:4rem}.field.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:.25rem .25rem 0 0}.field.border.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:.25rem}.field.round.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1.25rem}.field.round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1.5rem}.field.round.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:1.75rem}.field.round.extra.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:2rem}.field.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-inner-spin-button,input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-outer-spin-button,input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-search-decoration,input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-search-cancel-button,input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-search-results-button,input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-search-results-decoration{display:none}.field.border.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-zh0by8:not(.border,.round)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-zh0by8:not(.border,.round)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-zh0by8:not(.border,.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select),.field.round.svelte-zh0by8:not(.border)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-zh0by8:not(.border,.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-zh0by8:not(.border,.round)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select),.field.invalid.svelte-zh0by8:not(.border,.round)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select),.field.invalid.border.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:disabled{cursor:not-allowed}.field.small.textarea.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:4.5rem}.field.textarea.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:5.5rem}.field.large.textarea.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:6.5rem}.field.extra.textarea.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:7.5rem}.field.label.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,select){padding-block-start:1rem}.field.label.border.svelte-zh0by8:not(.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,select){padding-block-start:0}.field.label.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:absolute;inset-block-start:-.5rem;inset-inline-start:1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.small.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:3.5rem;line-height:3.5rem}.field.label.large.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:4.5rem;line-height:4.5rem}.field.label.extra.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:5rem;line-height:5rem}.field.label.border.prefix.svelte-zh0by8:not(.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.round.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.field.label.border.prefix.round.svelte-zh0by8:not(.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.prefix.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-inline-start:3rem}.field.label.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-zh0by8:not(.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-zh0by8:not(.fill)>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border.svelte-zh0by8:not(.fill)>.svelte-zh0by8:focus+label.svelte-zh0by8.svelte-zh0by8:after{border-block-start:.125rem solid var(--primary)}.field.label.border.svelte-zh0by8:not(.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-zh0by8:not(.fill)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.svelte-zh0by8>.svelte-zh0by8:focus+label.svelte-zh0by8.svelte-zh0by8{color:var(--primary)}.field.label.invalid.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.field.label.invalid.svelte-zh0by8>label.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:after{color:var(--error)!important;border-color:var(--error)!important}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.round.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.helper,.error){inset-inline-start:1.5rem}.grid.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-zh0by8+.grid.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:1rem}.grid.no-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---gap:0rem}.grid.medium-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---gap:1.5rem}.grid.large-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---gap:2rem}.s1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 1}.s2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 2}.s3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 3}.s4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 4}.s5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 5}.s6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 6}.s7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 7}.s8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 8}.s9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 9}.s10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 10}.s11.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 11}.s12.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 1}.m2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 2}.m3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 3}.m4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 4}.m5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 5}.m6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 6}.m7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 7}.m8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 8}.m9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 9}.m10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 10}.m11.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 11}.m12.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 1}.l2.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 2}.l3.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 3}.l4.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 4}.l5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 5}.l6.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 6}.l7.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 7}.l8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 8}.l9.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 9}.l10.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 10}.l11.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 11}.l12.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{grid-area:auto/span 12}}i.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.absolute.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:absolute}.fixed.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:fixed}:is(.absolute,.fixed).left.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-zh0by8:is(dialog,menu)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(header,footer){padding:0;background-color:inherit}article.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:.5rem}:is(img,svg,video).tiny.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:100%;block-size:100%;margin:0 auto}.svelte-zh0by8:is(button,.button,.chip):not(.transparent)>.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border:.25rem solid transparent}.svelte-zh0by8:is(button.small,.button.small,.chip)>.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:2rem}.svelte-zh0by8:is(button,.button,.chip.medium)>.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{border-radius:2rem}:is(img,svg,video).empty-state.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{max-inline-size:100%;inline-size:24rem}.svelte-zh0by8:is(button,.button,.chip,.field)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-zh0by8:is(.tabs) .svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-zh0by8:is(button,.button,.chip)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(i,img,svg),.svelte-zh0by8:is(button,.button,.chip)>.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:0 -.5rem}.svelte-zh0by8:is(button,.button)>.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-start:-1.5rem}.svelte-zh0by8:is(.circle,.square)>.responsive.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:0}.extend.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}nav.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.row.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-zh0by8:not(.divider,.small-divider,.medium-divider,.large-divider)+nav.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.left,.right,.top,.bottom),.svelte-zh0by8:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(a){margin-block-start:1rem}.svelte-zh0by8:is(nav,.row)>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.svelte-zh0by8:is(nav,.row)>.svelte-zh0by8:not(.tooltip,menu)>.svelte-zh0by8.svelte-zh0by8{margin-block-start:0;margin-block-end:0}nav.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.row.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{gap:0}:is(nav,.row).medium-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{gap:1.5rem}:is(nav,.row).large-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{gap:2rem}.row.wrap.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;flex-wrap:wrap}.svelte-zh0by8:is(nav,.row)>.border.no-margin.svelte-zh0by8+.border.no-margin.svelte-zh0by8.svelte-zh0by8{border-inline-start:0}nav.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.left,.right,.top,.bottom){border:0;position:fixed;color:var(--on-surface);transform:none;z-index:100;inset-inline-start:0;inset-block-start:0;inset-block-end:0;inset-inline-end:0;block-size:auto;inline-size:auto;text-align:center;padding:.5rem}nav.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.left,.right){inline-size:5rem;justify-content:start;flex-direction:column;background-color:var(--surface)}nav.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.top,.bottom){block-size:5rem;justify-content:center;flex-direction:row;background-color:var(--surface-container)}nav.right-align.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{justify-content:end}@media only screen and (max-width: 600px){}.overlay.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1;visibility:visible}.page.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.svelte-zh0by8:is(.page,dialog):not(.active) .page.active.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-zh0by8-to-page ease}.page.active.top.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform:translate(0, -4rem)}.page.active.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform:translate(0, 4rem)}.page.active.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform:translate(-4rem, 0)}.page.active.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform:translate(4rem, 0)}@keyframes svelte-zh0by8-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:relative;inline-size:100%;block-size:.5rem;color:var(--primary);background:var(--surface-container-highest);border-radius:0;flex:none;border:none}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.circle,[value]):after{content:"";position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;clip-path:none;background:currentColor;animation:1.6s svelte-zh0by8-to-linear ease infinite}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.circle,[value])::-moz-progress-bar{animation:1.6s svelte-zh0by8-to-linear ease infinite}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.circle,[value])::-webkit-progress-value{animation:1.6s svelte-zh0by8-to-linear ease infinite}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-progress-bar{background:none}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-webkit-progress-value{background:currentColor}progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8::-moz-progress-bar{background:currentColor}.svelte-zh0by8:is(nav,.row,.field)>progress.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.circle,.small,.medium,.large){flex:auto}@keyframes svelte-zh0by8-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-zh0by8-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.radio.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.switch.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-zh0by8:is(.checkbox,.radio)>input.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:1.5rem;block-size:1.5rem;opacity:0}.svelte-zh0by8:is(.checkbox,.radio,.switch)>span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-zh0by8:is(.checkbox,.radio)>span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(:empty){padding-inline-start:.25rem}.svelte-zh0by8:is(.checkbox,.radio,.switch)>span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before,.icon.svelte-zh0by8>span.svelte-zh0by8>i.svelte-zh0by8.svelte-zh0by8{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.radio.svelte-zh0by8>span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before{content:"radio_button_unchecked"}.radio.svelte-zh0by8>input.svelte-zh0by8:checked+span.svelte-zh0by8.svelte-zh0by8:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-zh0by8>span.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before{content:""!important;font-variation-settings:unset!important}.svelte-zh0by8:is(.checkbox,.radio)>input.svelte-zh0by8:not(:disabled):is(:focus,:hover)+span.svelte-zh0by8.svelte-zh0by8:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.svelte-zh0by8:is(.checkbox,.radio)>input.svelte-zh0by8:checked+span.svelte-zh0by8.svelte-zh0by8:before,:is(.checkbox,.radio).icon.svelte-zh0by8>input.svelte-zh0by8:checked+span.svelte-zh0by8>i.svelte-zh0by8{color:var(--primary)}.icon.svelte-zh0by8>input.svelte-zh0by8:checked+span.svelte-zh0by8>i.svelte-zh0by8:first-child,.icon.svelte-zh0by8>span.svelte-zh0by8>i.svelte-zh0by8.svelte-zh0by8:last-child{opacity:0}.icon.svelte-zh0by8>input.svelte-zh0by8:checked+span.svelte-zh0by8>i.svelte-zh0by8:last-child,.icon.svelte-zh0by8>span.svelte-zh0by8>i.svelte-zh0by8.svelte-zh0by8:first-child{opacity:1}.svelte-zh0by8:is(.checkbox,.radio,.switch)>input.svelte-zh0by8:disabled+span.svelte-zh0by8.svelte-zh0by8{opacity:.5;cursor:not-allowed}.checkbox.svelte-zh0by8+.checkbox.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.radio.svelte-zh0by8+.radio.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8,.switch.svelte-zh0by8+.switch.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-start:.5rem}.field.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-zh0by8>.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:4rem}.slider.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:8rem}.slider.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:12rem}.slider.vertical.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-zh0by8:is(nav,.row,.field)>.slider.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{visibility:visible;animation:var(--speed2) svelte-zh0by8-to-snackbar}.snackbar.active.top.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---transform-end:translate(-50%, -1rem)}@keyframes svelte-zh0by8-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:40%}}.tabs.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{padding:0 1rem;gap:2rem}.tabs.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-zh0by8+.tabs.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-start:1rem}.tooltip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:12rem;white-space:normal}.tooltip.large.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{inline-size:16rem;white-space:normal}.svelte-zh0by8:hover>.tooltip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-zh0by8:hover>.tooltip.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{transform:translate(-100%,-50%) scale(1)}.svelte-zh0by8:hover>.tooltip.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{transform:translate(100%,-50%) scale(1)}.svelte-zh0by8:hover>.tooltip.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---space:0}.tooltip.medium-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---space:-1rem}.tooltip.large-space.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---space:-1.5rem}.tooltip.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-start:var(---space)!important}.tooltip.right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-block-end:var(---space)!important}.tooltip.max.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-zh0by8 .svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00000080}.small-blur.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---blur:.5rem}.large-blur.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{---blur:1.5rem}.shadow.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-color:#00000050}.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{background-image:linear-gradient(to bottom,black,transparent)}.csur-container.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{box-shadow:none!important;position:fixed;opacity:0;transition:opacity .4s;z-index:99;word-break:break-all;overflow:hidden}.bottom_right.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{right:1rem;bottom:1rem;width:450px;max-width:calc(100% - 2rem)}.bottom_left.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{left:1rem;bottom:1rem;width:450px;max-width:calc(100% - 2rem)}.bottom_banner.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{bottom:0;left:0;width:100%}.bottom_banner.simple.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{padding-top:0;padding-bottom:0}.bottom_banner.simple.svelte-zh0by8 .banner_content.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{max-width:960px}.bottom_banner.svelte-zh0by8 .banner_content.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{display:flex;max-height:20rem;margin:0 auto}.bottom_banner.svelte-zh0by8 .banner_content .item_q.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{width:70%;margin-right:15px}.bottom_banner.svelte-zh0by8 .banner_content .item.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{justify-content:right;align-items:center;display:flex;width:25%}article.csur-container.svelte-zh0by8 .description.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{opacity:.8}.close-btn.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:absolute;top:0rem;right:0;margin-top:1.5rem;margin-right:1rem;cursor:pointer}.csur-container.svelte-zh0by8 h5.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{margin-top:0}.app-progress-bar.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{position:absolute;width:100%;top:0;left:0;margin-top:1px;border-radius:24px;height:5px}.questions-tab.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8.svelte-zh0by8{width:480px}');
}
function vl(t, e, l) {
  const s = t.slice();
  return s[24] = e[l], s[25] = e, s[26] = l, s;
}
function al(t) {
  let e, l, s, r, n, o, v, a, b, h, c, d, i, y, m, w, k, f, u, T, g, P, p, _ = (
    /*loading*/
    t[5] && il()
  ), $ = !/*data*/
  (t[0][0].site.promptWindowPosition == "bottom_banner" && /*data*/
  t[0][0].type == "simple") && bl(t), D = (
    /*data*/
    t[0][0].type == "simple" && !/*submitted*/
    t[4] && cl(t)
  );
  function E(B, S) {
    return (
      /*submitted*/
      B[4] ? rr : nr
    );
  }
  let G = E(t), q = G(t);
  function j(B, S) {
    return S & /*tabActive*/
    4 && (w = null), w == null && (w = !!/*tabActive*/
    B[2].includes("max")), w ? ir : ar;
  }
  let ie = j(t, -1), te = ie(t);
  const ye = [hr, br], ae = [];
  function Ae(B, S) {
    return (
      /*data*/
      B[0][0].type == "advanced" ? 0 : 1
    );
  }
  return f = Ae(t), u = ae[f] = ye[f](t), {
    c() {
      e = I("article"), _ && _.c(), l = O(), s = I("label"), s.innerHTML = '<input type="radio" name="radio3_" class="svelte-zh0by8"/> <span class="svelte-zh0by8"><i class="svelte-zh0by8">close</i> <i class="svelte-zh0by8">done</i></span>', r = O(), $ && $.c(), n = O(), o = I("div"), v = I("div"), D && D.c(), a = O(), b = I("div"), q.c(), c = O(), d = I("div"), y = O(), m = I("dialog"), te.c(), k = O(), u.c(), x(s, "class", "radio icon close-btn svelte-zh0by8"), x(v, "class", "item_q svelte-zh0by8"), x(b, "class", "item svelte-zh0by8"), x(o, "class", "banner_content svelte-zh0by8"), x(e, "class", h = "secondary-container csur-container " + /*data*/
      t[0][0].site.promptWindowPosition + " " + /*data*/
      t[0][0].type + " svelte-zh0by8"), x(
        e,
        "style",
        /*opacity*/
        t[1]
      ), x(d, "class", i = "overlay " + /*tabActive*/
      t[2] + " svelte-zh0by8"), x(m, "class", T = /*tabActive*/
      t[2] + " questions-tab svelte-zh0by8");
    },
    m(B, S) {
      F(B, e, S), _ && _.m(e, null), C(e, l), C(e, s), C(e, r), $ && $.m(e, null), C(e, n), C(e, o), C(o, v), D && D.m(v, null), C(o, a), C(o, b), q.m(b, null), F(B, c, S), F(B, d, S), F(B, y, S), F(B, m, S), te.m(m, null), C(m, k), ae[f].m(m, null), g = !0, P || (p = J(
        s,
        "click",
        /*click_handler*/
        t[16]
      ), P = !0);
    },
    p(B, S) {
      /*loading*/
      B[5] ? _ || (_ = il(), _.c(), _.m(e, l)) : _ && (_.d(1), _ = null), /*data*/
      B[0][0].site.promptWindowPosition == "bottom_banner" && /*data*/
      B[0][0].type == "simple" ? $ && ($.d(1), $ = null) : $ ? $.p(B, S) : ($ = bl(B), $.c(), $.m(e, n)), /*data*/
      B[0][0].type == "simple" && !/*submitted*/
      B[4] ? D ? (D.p(B, S), S & /*data, submitted*/
      17 && oe(D, 1)) : (D = cl(B), D.c(), oe(D, 1), D.m(v, null)) : D && (st(), pe(D, 1, 1, () => {
        D = null;
      }), rt()), G === (G = E(B)) && q ? q.p(B, S) : (q.d(1), q = G(B), q && (q.c(), q.m(b, null))), (!g || S & /*data*/
      1 && h !== (h = "secondary-container csur-container " + /*data*/
      B[0][0].site.promptWindowPosition + " " + /*data*/
      B[0][0].type + " svelte-zh0by8")) && x(e, "class", h), (!g || S & /*opacity*/
      2) && x(
        e,
        "style",
        /*opacity*/
        B[1]
      ), (!g || S & /*tabActive*/
      4 && i !== (i = "overlay " + /*tabActive*/
      B[2] + " svelte-zh0by8")) && x(d, "class", i), ie === (ie = j(B, S)) && te ? te.p(B, S) : (te.d(1), te = ie(B), te && (te.c(), te.m(m, k)));
      let Ie = f;
      f = Ae(B), f === Ie ? ae[f].p(B, S) : (st(), pe(ae[Ie], 1, 1, () => {
        ae[Ie] = null;
      }), rt(), u = ae[f], u ? u.p(B, S) : (u = ae[f] = ye[f](B), u.c()), oe(u, 1), u.m(m, null)), (!g || S & /*tabActive*/
      4 && T !== (T = /*tabActive*/
      B[2] + " questions-tab svelte-zh0by8")) && x(m, "class", T);
    },
    i(B) {
      g || (oe(D), oe(u), g = !0);
    },
    o(B) {
      pe(D), pe(u), g = !1;
    },
    d(B) {
      B && (R(e), R(c), R(d), R(y), R(m)), _ && _.d(), $ && $.d(), D && D.d(), q.d(), te.d(), ae[f].d(), P = !1, p();
    }
  };
}
function il(t) {
  let e;
  return {
    c() {
      e = I("progress"), x(e, "class", "app-progress-bar svelte-zh0by8");
    },
    m(l, s) {
      F(l, e, s);
    },
    d(l) {
      l && R(e);
    }
  };
}
function bl(t) {
  let e, l, s = (
    /*data*/
    t[0][0].title + ""
  ), r, n, o, v = (
    /*data*/
    t[0][0].description + ""
  ), a, b, h, c = (
    /*response*/
    t[6] && hl(t)
  );
  return {
    c() {
      e = I("div"), l = I("h5"), r = H(s), n = O(), o = I("p"), a = H(v), b = O(), c && c.c(), h = jl(), x(l, "class", "svelte-zh0by8"), x(o, "class", "description svelte-zh0by8"), x(e, "class", "svelte-zh0by8");
    },
    m(d, i) {
      F(d, e, i), C(e, l), C(l, r), C(e, n), C(e, o), C(o, a), F(d, b, i), c && c.m(d, i), F(d, h, i);
    },
    p(d, i) {
      i & /*data*/
      1 && s !== (s = /*data*/
      d[0][0].title + "") && Q(r, s), i & /*data*/
      1 && v !== (v = /*data*/
      d[0][0].description + "") && Q(a, v), /*response*/
      d[6] ? c ? c.p(d, i) : (c = hl(d), c.c(), c.m(h.parentNode, h)) : c && (c.d(1), c = null);
    },
    d(d) {
      d && (R(e), R(b), R(h)), c && c.d(d);
    }
  };
}
function hl(t) {
  let e, l, s;
  return {
    c() {
      e = I("article"), l = I("p"), s = H(
        /*response*/
        t[6]
      ), et(l, "color", "var(--error)"), x(l, "class", "svelte-zh0by8"), x(e, "class", "border question-box svelte-zh0by8"), et(e, "margin-bottom", "1rem");
    },
    m(r, n) {
      F(r, e, n), C(e, l), C(l, s);
    },
    p(r, n) {
      n & /*response*/
      64 && Q(
        s,
        /*response*/
        r[6]
      );
    },
    d(r) {
      r && R(e);
    }
  };
}
function cl(t) {
  let e, l, s;
  function r(o) {
    t[17](o);
  }
  let n = {
    question: (
      /*data*/
      t[0][0].questions[0]
    )
  };
  return (
    /*ans*/
    t[3][0] !== void 0 && (n.answer = /*ans*/
    t[3][0]), e = new Bt({ props: n }), tt.push(() => fl(e, "answer", r)), {
      c() {
        gl(e.$$.fragment);
      },
      m(o, v) {
        xt(e, o, v), s = !0;
      },
      p(o, v) {
        const a = {};
        v & /*data*/
        1 && (a.question = /*data*/
        o[0][0].questions[0]), !l && v & /*ans*/
        8 && (l = !0, a.answer = /*ans*/
        o[3][0], pl(() => l = !1)), e.$set(a);
      },
      i(o) {
        s || (oe(e.$$.fragment, o), s = !0);
      },
      o(o) {
        pe(e.$$.fragment, o), s = !1;
      },
      d(o) {
        _t(e, o);
      }
    }
  );
}
function rr(t) {
  let e;
  return {
    c() {
      e = I("article"), e.innerHTML = '<p class=" svelte-zh0by8">Your response has been recorded.</p>', x(e, "class", "border question-box svelte-zh0by8");
    },
    m(l, s) {
      F(l, e, s);
    },
    p: ce,
    d(l) {
      l && R(e);
    }
  };
}
function nr(t) {
  let e;
  function l(n, o) {
    if (
      /*data*/
      n[0][0].type == "advanced" || /*data*/
      n[0][0].type == "prompt"
    )
      return vr;
    if (
      /*data*/
      n[0][0].type == "simple"
    )
      return or;
  }
  let s = l(t), r = s && s(t);
  return {
    c() {
      e = I("nav"), r && r.c(), x(e, "class", "right-align svelte-zh0by8");
    },
    m(n, o) {
      F(n, e, o), r && r.m(e, null);
    },
    p(n, o) {
      s === (s = l(n)) && r ? r.p(n, o) : (r && r.d(1), r = s && s(n), r && (r.c(), r.m(e, null)));
    },
    d(n) {
      n && R(e), r && r.d();
    }
  };
}
function or(t) {
  let e, l, s;
  return {
    c() {
      e = I("button"), e.textContent = "Submit", x(e, "class", "border round svelte-zh0by8");
    },
    m(r, n) {
      F(r, e, n), l || (s = J(
        e,
        "click",
        /*submitQuestion*/
        t[8]
      ), l = !0);
    },
    p: ce,
    d(r) {
      r && R(e), l = !1, s();
    }
  };
}
function vr(t) {
  let e, l, s;
  return {
    c() {
      e = I("button"), e.textContent = "View", x(e, "class", "border round svelte-zh0by8");
    },
    m(r, n) {
      F(r, e, n), l || (s = J(
        e,
        "click",
        /*openQuestionsTab*/
        t[9]
      ), l = !0);
    },
    p: ce,
    d(r) {
      r && R(e), l = !1, s();
    }
  };
}
function ar(t) {
  let e, l, s;
  return {
    c() {
      e = I("label"), e.innerHTML = '<input type="radio" name="radio3_" class="svelte-zh0by8"/> <span class="svelte-zh0by8"><i class="svelte-zh0by8">fullscreen</i></span>', x(e, "class", "radio icon close-btn svelte-zh0by8");
    },
    m(r, n) {
      F(r, e, n), l || (s = J(
        e,
        "click",
        /*click_handler_2*/
        t[19]
      ), l = !0);
    },
    p: ce,
    d(r) {
      r && R(e), l = !1, s();
    }
  };
}
function ir(t) {
  let e, l, s;
  return {
    c() {
      e = I("label"), e.innerHTML = '<input type="radio" name="radio3_" class="svelte-zh0by8"/> <span class="svelte-zh0by8"><i class="svelte-zh0by8">close_fullscreen</i></span>', x(e, "class", "radio icon close-btn svelte-zh0by8");
    },
    m(r, n) {
      F(r, e, n), l || (s = J(
        e,
        "click",
        /*click_handler_1*/
        t[18]
      ), l = !0);
    },
    p: ce,
    d(r) {
      r && R(e), l = !1, s();
    }
  };
}
function br(t) {
  let e, l = (
    /*data*/
    t[0][0].questions[0].question + ""
  ), s, r, n, o = (
    /*data*/
    t[0][0].questions[0].prompt + ""
  ), v, a, b, h, c, d;
  return {
    c() {
      e = I("h5"), s = H(l), r = O(), n = I("p"), v = H(o), a = O(), b = I("nav"), h = I("button"), h.textContent = "Cancel", et(e, "margin-top", "0"), x(e, "class", "svelte-zh0by8"), x(n, "class", "svelte-zh0by8"), x(h, "class", "border svelte-zh0by8"), x(b, "class", "right-align svelte-zh0by8");
    },
    m(i, y) {
      F(i, e, y), C(e, s), F(i, r, y), F(i, n, y), C(n, v), F(i, a, y), F(i, b, y), C(b, h), c || (d = J(
        h,
        "click",
        /*click_handler_4*/
        t[22]
      ), c = !0);
    },
    p(i, y) {
      y & /*data*/
      1 && l !== (l = /*data*/
      i[0][0].questions[0].question + "") && Q(s, l), y & /*data*/
      1 && o !== (o = /*data*/
      i[0][0].questions[0].prompt + "") && Q(v, o);
    },
    i: ce,
    o: ce,
    d(i) {
      i && (R(e), R(r), R(n), R(a), R(b)), c = !1, d();
    }
  };
}
function hr(t) {
  let e, l = (
    /*data*/
    t[0][0].title + ""
  ), s, r, n, o = (
    /*data*/
    t[0][0].description + ""
  ), v, a, b, h, c, d, i, y, m, w, k, f = Pe(
    /*data*/
    t[0][0].questions
  ), u = [];
  for (let g = 0; g < f.length; g += 1)
    u[g] = yl(vl(t, f, g));
  const T = (g) => pe(u[g], 1, 1, () => {
    u[g] = null;
  });
  return {
    c() {
      e = I("h5"), s = H(l), r = O(), n = I("p"), v = H(o), a = O(), b = I("div");
      for (let g = 0; g < u.length; g += 1)
        u[g].c();
      h = O(), c = I("nav"), d = I("button"), d.textContent = "Cancel", i = O(), y = I("button"), y.textContent = "Submit", et(e, "margin-top", "0"), x(e, "class", "svelte-zh0by8"), x(n, "class", "description svelte-zh0by8"), x(b, "class", "svelte-zh0by8"), x(d, "class", "border svelte-zh0by8"), x(y, "class", "round svelte-zh0by8"), x(c, "class", "right-align svelte-zh0by8");
    },
    m(g, P) {
      F(g, e, P), C(e, s), F(g, r, P), F(g, n, P), C(n, v), F(g, a, P), F(g, b, P);
      for (let p = 0; p < u.length; p += 1)
        u[p] && u[p].m(b, null);
      F(g, h, P), F(g, c, P), C(c, d), C(c, i), C(c, y), m = !0, w || (k = [
        J(
          d,
          "click",
          /*click_handler_3*/
          t[21]
        ),
        J(
          y,
          "click",
          /*submitQuestion*/
          t[8]
        )
      ], w = !0);
    },
    p(g, P) {
      if ((!m || P & /*data*/
      1) && l !== (l = /*data*/
      g[0][0].title + "") && Q(s, l), (!m || P & /*data*/
      1) && o !== (o = /*data*/
      g[0][0].description + "") && Q(v, o), P & /*data, ans*/
      9) {
        f = Pe(
          /*data*/
          g[0][0].questions
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const _ = vl(g, f, p);
          u[p] ? (u[p].p(_, P), oe(u[p], 1)) : (u[p] = yl(_), u[p].c(), oe(u[p], 1), u[p].m(b, null));
        }
        for (st(), p = f.length; p < u.length; p += 1)
          T(p);
        rt();
      }
    },
    i(g) {
      if (!m) {
        for (let P = 0; P < f.length; P += 1)
          oe(u[P]);
        m = !0;
      }
    },
    o(g) {
      u = u.filter(Boolean);
      for (let P = 0; P < u.length; P += 1)
        pe(u[P]);
      m = !1;
    },
    d(g) {
      g && (R(e), R(r), R(n), R(a), R(b), R(h), R(c)), vt(u, g), w = !1, fe(k);
    }
  };
}
function yl(t) {
  let e, l, s;
  function r(o) {
    t[20](
      o,
      /*index*/
      t[26]
    );
  }
  let n = { question: (
    /*question*/
    t[24]
  ) };
  return (
    /*ans*/
    t[3][
      /*index*/
      t[26]
    ] !== void 0 && (n.answer = /*ans*/
    t[3][
      /*index*/
      t[26]
    ]), e = new Bt({ props: n }), tt.push(() => fl(e, "answer", r)), {
      c() {
        gl(e.$$.fragment);
      },
      m(o, v) {
        xt(e, o, v), s = !0;
      },
      p(o, v) {
        t = o;
        const a = {};
        v & /*data*/
        1 && (a.question = /*question*/
        t[24]), !l && v & /*ans*/
        8 && (l = !0, a.answer = /*ans*/
        t[3][
          /*index*/
          t[26]
        ], pl(() => l = !1)), e.$set(a);
      },
      i(o) {
        s || (oe(e.$$.fragment, o), s = !0);
      },
      o(o) {
        pe(e.$$.fragment, o), s = !1;
      },
      d(o) {
        _t(e, o);
      }
    }
  );
}
function cr(t) {
  let e, l, s = (
    /*data*/
    t[0].length > 0 && al(t)
  );
  return {
    c() {
      e = I("body"), s && s.c(), x(e, "class", "svelte-zh0by8");
    },
    m(r, n) {
      F(r, e, n), s && s.m(e, null), l = !0;
    },
    p(r, [n]) {
      /*data*/
      r[0].length > 0 ? s ? (s.p(r, n), n & /*data*/
      1 && oe(s, 1)) : (s = al(r), s.c(), oe(s, 1), s.m(e, null)) : s && (st(), pe(s, 1, 1, () => {
        s = null;
      }), rt());
    },
    i(r) {
      l || (oe(s), l = !0);
    },
    o(r) {
      pe(s), l = !1;
    },
    d(r) {
      r && R(e), s && s.d();
    }
  };
}
function yr(t, e, l) {
  let { server: s = void 0 } = e, { id: r = void 0 } = e, { domain: n = void 0 } = e, { themeColor: o = void 0 } = e, { mode: v = void 0 } = e, { timeout: a = void 0 } = e;
  if (!s || !r && !n)
    throw new Error("[csur-client]: Please check the required params.");
  let b = [], h = "opacity: 0;", c = "", d = "";
  localStorage.getItem("cransurvey-usrid") ? c = localStorage.getItem("cransurvey-usrid") : (c = lr(), localStorage.setItem("cransurvey-usrid", c)), fetch(`${s}/api/client/get?sid=${r || ""}&domain=${n || ""}`, { method: "GET" }).then((E) => E.json()).then((E) => {
    l(0, b = E.data), setTimeout(
      () => {
        l(1, h = "opacity: 1;");
      },
      100
    );
  }), Fe("theme", o), Fe("mode", v);
  function i() {
    l(1, h = "opacity: 0;"), setTimeout(
      () => {
        l(0, b = []);
      },
      400
    );
  }
  let y = [], m, w = !1, k = "";
  function f() {
    if (b[0]) {
      d && l(2, d = "");
      for (let E in b[0].questions)
        if (b[0].questions[E].required && !y[E]) {
          l(6, k = "Please answer all the required questions.");
          return;
        }
      l(5, w = !0), fetch(`${s}/api/survey/collect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uniqueId: b[0].id,
          userId: c,
          answers: y
        })
      }).then((E) => E.json()).then((E) => {
        if (E.code == 0)
          l(4, m = !0), l(5, w = !1), l(6, k = ""), setTimeout(
            () => {
              i();
            },
            2500
          );
        else if (E.code == 3003) {
          l(6, k = "Please answer all the required questions."), l(5, w = !1);
          return;
        } else if (E.code == 3002) {
          l(6, k = "The answer doesn't meet the requirements."), l(5, w = !1);
          return;
        } else {
          l(6, k = "Something went wrong. Please try again later."), l(5, w = !1);
          return;
        }
      });
    }
  }
  function u() {
    l(2, d = "active"), window.innerWidth < 550 && l(2, d += " max");
  }
  a && !y && setTimeout(
    () => {
      i();
    },
    a
  );
  const T = () => {
    i();
  };
  function g(E) {
    t.$$.not_equal(y[0], E) && (y[0] = E, l(3, y));
  }
  const P = () => {
    l(2, d = "active");
  }, p = () => {
    l(2, d += " max");
  };
  function _(E, G) {
    t.$$.not_equal(y[G], E) && (y[G] = E, l(3, y));
  }
  const $ = () => {
    l(2, d = "");
  }, D = () => {
    l(2, d = "");
  };
  return t.$$set = (E) => {
    "server" in E && l(10, s = E.server), "id" in E && l(11, r = E.id), "domain" in E && l(12, n = E.domain), "themeColor" in E && l(13, o = E.themeColor), "mode" in E && l(14, v = E.mode), "timeout" in E && l(15, a = E.timeout);
  }, [
    b,
    h,
    d,
    y,
    m,
    w,
    k,
    i,
    f,
    u,
    s,
    r,
    n,
    o,
    v,
    a,
    T,
    g,
    P,
    p,
    _,
    $,
    D
  ];
}
class El extends _l {
  constructor(e) {
    super(), kl(
      this,
      e,
      yr,
      cr,
      ul,
      {
        server: 10,
        id: 11,
        domain: 12,
        themeColor: 13,
        mode: 14,
        timeout: 15
      },
      sr
    );
  }
  get server() {
    return this.$$.ctx[10];
  }
  set server(e) {
    this.$$set({ server: e }), me();
  }
  get id() {
    return this.$$.ctx[11];
  }
  set id(e) {
    this.$$set({ id: e }), me();
  }
  get domain() {
    return this.$$.ctx[12];
  }
  set domain(e) {
    this.$$set({ domain: e }), me();
  }
  get themeColor() {
    return this.$$.ctx[13];
  }
  set themeColor(e) {
    this.$$set({ themeColor: e }), me();
  }
  get mode() {
    return this.$$.ctx[14];
  }
  set mode(e) {
    this.$$set({ mode: e }), me();
  }
  get timeout() {
    return this.$$.ctx[15];
  }
  set timeout(e) {
    this.$$set({ timeout: e }), me();
  }
}
customElements.define("csur-client", xl(El, { server: {}, id: {}, domain: {}, themeColor: {}, mode: {}, timeout: {} }, [], [], !0));
const zr = new El({
  target: document.getElementsByTagName("csur-client")[0]
});
export {
  zr as default
};
