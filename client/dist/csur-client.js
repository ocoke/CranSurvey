var dr = Object.defineProperty;
var ur = (t, e, r) => e in t ? dr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Q = (t, e, r) => (ur(t, typeof e != "symbol" ? e + "" : e, r), r);
function ue() {
}
function jt(t) {
  return t();
}
function $t() {
  return /* @__PURE__ */ Object.create(null);
}
function Me(t) {
  t.forEach(jt);
}
function Vt(t) {
  return typeof t == "function";
}
function Gt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function mr(t) {
  return Object.keys(t).length === 0;
}
function A(t, e) {
  t.appendChild(e);
}
function Ut(t, e, r) {
  const n = qr(t);
  if (!n.getElementById(e)) {
    const s = L("style");
    s.id = e, s.textContent = r, fr(n, s);
  }
}
function qr(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function fr(t, e) {
  return A(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function se(t, e, r) {
  t.insertBefore(e, r || null);
}
function ne(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function L(t) {
  return document.createElement(t);
}
function me(t) {
  return document.createTextNode(t);
}
function ie() {
  return me(" ");
}
function pr() {
  return me("");
}
function He(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function D(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function gr(t) {
  return Array.from(t.childNodes);
}
function ye(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Tt(t, e) {
  t.value = e ?? "";
}
function br(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      e[r.slot || "default"] = !0;
    }
  ), e;
}
let qt;
function Ie(t) {
  qt = t;
}
const we = [], ht = [];
let ke = [];
const ct = [], wr = /* @__PURE__ */ Promise.resolve();
let vt = !1;
function kr() {
  vt || (vt = !0, wr.then(pe));
}
function zt(t) {
  ke.push(t);
}
function yr(t) {
  ct.push(t);
}
const st = /* @__PURE__ */ new Set();
let be = 0;
function pe() {
  if (be !== 0)
    return;
  const t = qt;
  do {
    try {
      for (; be < we.length; ) {
        const e = we[be];
        be++, Ie(e), xr(e.$$);
      }
    } catch (e) {
      throw we.length = 0, be = 0, e;
    }
    for (Ie(null), we.length = 0, be = 0; ht.length; )
      ht.pop()();
    for (let e = 0; e < ke.length; e += 1) {
      const r = ke[e];
      st.has(r) || (st.add(r), r());
    }
    ke.length = 0;
  } while (we.length);
  for (; ct.length; )
    ct.pop()();
  vt = !1, st.clear(), Ie(t);
}
function xr(t) {
  if (t.fragment !== null) {
    t.update(), Me(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(zt);
  }
}
function Mr(t) {
  const e = [], r = [];
  ke.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : r.push(n)), r.forEach((n) => n()), ke = e;
}
const Ve = /* @__PURE__ */ new Set();
let fe;
function Ht() {
  fe = {
    r: 0,
    c: [],
    p: fe
    // parent group
  };
}
function Yt() {
  fe.r || Me(fe.c), fe = fe.p;
}
function ze(t, e) {
  t && t.i && (Ve.delete(t), t.i(e));
}
function Ae(t, e, r, n) {
  if (t && t.o) {
    if (Ve.has(t))
      return;
    Ve.add(t), fe.c.push(() => {
      Ve.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function Cr(t, e, r) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = r, r(t.$$.ctx[n]));
}
function Pr(t) {
  t && t.c();
}
function Wt(t, e, r) {
  const { fragment: n, after_update: s } = t.$$;
  n && n.m(e, r), zt(() => {
    const l = t.$$.on_mount.map(jt).filter(Vt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : Me(l), t.$$.on_mount = [];
  }), s.forEach(zt);
}
function Jt(t, e) {
  const r = t.$$;
  r.fragment !== null && (Mr(r.after_update), Me(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ir(t, e) {
  t.$$.dirty[0] === -1 && (we.push(t), kr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Xt(t, e, r, n, s, l, o = null, a = [-1]) {
  const i = qt;
  Ie(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ue,
    not_equal: s,
    bound: $t(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: $t(),
    dirty: a,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  o && o(c.root);
  let h = !1;
  if (c.ctx = r ? r(t, e.props || {}, (z, u, ...d) => {
    const q = d.length ? d[0] : u;
    return c.ctx && s(c.ctx[z], c.ctx[z] = q) && (!c.skip_bound && c.bound[z] && c.bound[z](q), h && Ir(t, z)), u;
  }) : [], c.update(), h = !0, Me(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const z = gr(e.target);
      c.fragment && c.fragment.l(z), z.forEach(ne);
    } else
      c.fragment && c.fragment.c();
    e.intro && ze(t.$$.fragment), Wt(t, e.target, e.anchor), pe();
  }
  Ie(i);
}
let Kt;
typeof HTMLElement == "function" && (Kt = class extends HTMLElement {
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    Q(this, "$$ctor");
    /** Slots */
    Q(this, "$$s");
    /** The Svelte component instance */
    Q(this, "$$c");
    /** Whether or not the custom element is connected */
    Q(this, "$$cn", !1);
    /** Component props data */
    Q(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Q(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Q(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Q(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Q(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, r, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const s = this.$$c.$on(e, r);
      this.$$l_u.set(r, s);
    }
    super.addEventListener(e, r, n);
  }
  removeEventListener(e, r, n) {
    if (super.removeEventListener(e, r, n), this.$$c) {
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(l) {
        return () => {
          let o;
          return {
            c: function() {
              o = L("slot"), l !== "default" && D(o, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, h) {
              se(c, o, h);
            },
            d: function(c) {
              c && ne(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, n = br(this);
      for (const l of this.$$s)
        l in n && (r[l] = [e(l)]);
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = Ge(o, l.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$scope: {
            ctx: []
          }
        }
      });
      const s = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const o = Ge(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(s), s();
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const a = this.$$c.$on(l, o);
          this.$$l_u.set(o, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, r, n) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ge(e, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function Ge(t, e, r, n) {
  var l;
  const s = (l = r[t]) == null ? void 0 : l.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
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
function Qt(t, e, r, n, s, l) {
  let o = class extends Kt {
    constructor() {
      super(t, r, s), this.$$p_d = e;
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
        var c;
        i = Ge(a, i, e), this.$$d[a] = i, (c = this.$$c) == null || c.$set({ [a]: i });
      }
    });
  }), n.forEach((a) => {
    Object.defineProperty(o.prototype, a, {
      get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[a];
      }
    });
  }), l && (o = l(o)), t.element = /** @type {any} */
  o, o;
}
class Zt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Q(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Q(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Jt(this, 1), this.$destroy = ue;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Vt(r))
      return ue;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const s = n.indexOf(r);
      s !== -1 && n.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !mr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const _r = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(_r);
let _e, lt, ot, at;
const J = {
  light: "",
  dark: ""
}, At = [];
async function $r(t) {
  return await new Promise((e) => setTimeout(e, t));
}
function Tr() {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function xe(t, e) {
  try {
    return typeof t == "string" ? (e ?? document).querySelector(t) : t;
  } catch {
    return null;
  }
}
function Z(t, e) {
  try {
    return typeof t == "string" ? (e ?? document).querySelectorAll(t) : t ?? At;
  } catch {
    return At;
  }
}
function te(t, e) {
  var r;
  return ((r = t == null ? void 0 : t.classList) == null ? void 0 : r.contains(e)) ?? !1;
}
function Ye(t, e) {
  var r;
  return ((r = t == null ? void 0 : t.tagName) == null ? void 0 : r.toLowerCase()) === e;
}
function De(t, e) {
  var r;
  return ((r = t == null ? void 0 : t.type) == null ? void 0 : r.toLowerCase()) === e;
}
function de(t, e) {
  var r;
  (r = t == null ? void 0 : t.classList) == null || r.add(e);
}
function V(t, e) {
  var r;
  (r = t == null ? void 0 : t.classList) == null || r.remove(e);
}
function oe(t, e, r) {
  t == null || t.addEventListener(e, r, !0);
}
function Ar(t, e, r) {
  t == null || t.removeEventListener(e, r, !0);
}
function Dr(t, e) {
  var r;
  (r = e == null ? void 0 : e.parentNode) == null || r.insertBefore(t, e);
}
function ft(t) {
  return t == null ? void 0 : t.previousElementSibling;
}
function er(t) {
  return t == null ? void 0 : t.nextElementSibling;
}
function Re(t) {
  return t == null ? void 0 : t.parentElement;
}
function Er(t) {
  const e = document.createElement("div");
  for (const r in t)
    e.setAttribute(r, t[r]);
  return e;
}
function Be(t) {
  const e = t;
  De(e, "number") && !e.value && (e.value = ""), e.placeholder || (e.placeholder = " "), t.getAttribute("data-ui") && bt(t, null);
}
function Rr(t) {
  bt(t.currentTarget, null, null, t);
}
function Br(t) {
  const e = t.currentTarget, r = Re(e), n = xe("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", r);
  n && n.focus();
}
function Fr(t) {
  const e = t.currentTarget;
  Be(e);
}
function Or(t) {
  const e = t.currentTarget;
  Be(e);
}
function tr(t) {
  Ar(document.body, "click", tr);
  const e = t.target;
  Z("menu.active").forEach((n) => wt(e, n, t));
}
function Lr(t) {
  const e = t.currentTarget;
  V(e, "active"), _e && clearTimeout(_e);
}
function Sr(t) {
  const e = t.currentTarget;
  pt(e);
}
function Nr(t) {
  const e = t.currentTarget;
  gt(e);
}
function jr(t) {
  const e = t.currentTarget;
  pt(e, t);
}
function Vr(t) {
  const e = t.currentTarget;
  gt(e, t);
}
function Gr(t) {
  const e = t.currentTarget;
  rr(e);
}
function Dt() {
  lt && clearTimeout(lt), lt = setTimeout(() => {
    Je();
  }, 180);
}
function pt(t, e) {
  if (e && e.key === "Enter") {
    const s = ft(t);
    return De(s, "file") ? s.click() : void 0;
  }
  const r = t, n = er(t);
  De(n, "text") && (n.value = r.files ? Array.from(r.files).map((s) => s.name).join(", ") : "", n.readOnly = !0, n.addEventListener("keydown", jr), Be(n));
}
function gt(t, e) {
  if (e && e.key === "Enter") {
    const s = ft(t);
    return De(s, "color") ? s.click() : void 0;
  }
  const r = t, n = er(t);
  De(n, "text") && (n.readOnly = !0, n.value = r.value, n.addEventListener("keydown", Vr), Be(n));
}
function rr(t) {
  const e = Re(t), r = xe("span", e), n = Z("input", e);
  if (!n.length || !r)
    return;
  const l = 1.25 * (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16) * 100 / n[0].offsetWidth, o = [], a = [];
  for (let d = 0; d < n.length; d++) {
    const q = parseFloat(n[d].min), f = parseFloat(n[d].max), p = parseFloat(n[d].value), k = q || 0, m = f || 100, w = p || 0, P = (w - k) * 100 / (m - k), y = l / 2 - l * P / 100;
    o.push(P + y), a.push(w), q !== k && (n[d].min = `${k}`), f !== m && (n[d].max = `${m}`), p !== w && (n[d].value = `${w}`);
  }
  let i = o[0], c = 0, h = 100 - c - i, z = a[0], u = a[1] || 0;
  n.length > 1 && (i = Math.abs(o[1] - o[0]), c = o[1] > o[0] ? o[0] : o[1], h = 100 - c - i, u > z && (z = a[1] || 0, u = a[0])), e.style.setProperty("---start", `${c}%`), e.style.setProperty("---end", `${h}%`), e.style.setProperty("---value1", `'${z}'`), e.style.setProperty("---value2", `'${u}'`);
}
async function bt(t, e, r, n) {
  if (!(!e && (e = xe(t.getAttribute("data-ui")), !e))) {
    if (Ye(e, "dialog"))
      return await Hr(t, e);
    if (Ye(e, "menu"))
      return wt(t, e, n);
    if (te(e, "snackbar"))
      return Yr(t, e, r);
    if (te(e, "page"))
      return Ur(t, e);
    if (Fe(t), te(e, "active"))
      return V(e, "active");
    de(e, "active");
  }
}
function Fe(t) {
  const e = Re(t);
  if (!te(e, "tabs"))
    return;
  Z("a", e).forEach((n) => V(n, "active")), de(t, "active");
}
function Ur(t, e) {
  Fe(t);
  const r = Re(e);
  if (r)
    for (let n = 0; n < r.children.length; n++)
      te(r.children[n], "page") && V(r.children[n], "active");
  de(e, "active");
}
function wt(t, e, r) {
  ot && clearTimeout(ot), ot = setTimeout(() => {
    if (oe(document.body, "click", tr), Fe(t), te(e, "active")) {
      if (!r)
        return V(e, "active");
      const s = r.target, l = xe(s.getAttribute("data-ui") ?? ""), o = s.closest("menu"), a = !xe("menu", s.closest("[data-ui]") ?? void 0);
      return l && l !== o ? wt(s, l) : !l && !a && o ? !1 : V(e, "active");
    }
    Z("menu.active").forEach((s) => V(s, "active")), de(e, "active");
  }, 90);
}
async function Hr(t, e) {
  var i;
  (i = document.activeElement) == null || i.blur(), Fe(t);
  let r = ft(e);
  const n = e, s = te(e, "active") || n.open, l = te(e, "modal"), o = Re(e), a = Ye(o, "nav");
  te(r, "overlay") || (r = Er({ class: "overlay" }), Dr(r, e), await $r(90)), r.onclick = () => {
    l || (V(t, "active"), V(e, "active"), V(r, "active"), n.close());
  }, a && Z("dialog, a, .overlay", o).forEach((h) => {
    V(h, "active"), h.open && h.close();
  }), s ? (V(t, "active"), V(r, "active"), V(e, "active"), n.close()) : (!Ye(t, "button") && !te(t, "button") && !te(t, "chip") && de(t, "active"), de(r, "active"), de(e, "active"), l ? n.showModal() : n.show());
}
function Yr(t, e, r) {
  var s;
  (s = document.activeElement) == null || s.blur(), Fe(t), Z(".snackbar.active").forEach((l) => V(l, "active")), de(e, "active"), oe(e, "click", Lr), _e && clearTimeout(_e), r !== -1 && (_e = setTimeout(() => {
    V(e, "active");
  }, r ?? 6e3));
}
function Wr() {
  if (J.light && J.dark)
    return J;
  const t = document.createElement("body");
  t.className = "light", document.body.appendChild(t);
  const e = document.createElement("body");
  e.className = "dark", document.body.appendChild(e);
  const r = getComputedStyle(t), n = getComputedStyle(e), s = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let l = 0; l < s.length; l++)
    J.light += s[l] + ":" + r.getPropertyValue(s[l]) + ";", J.dark += s[l] + ":" + n.getPropertyValue(s[l]) + ";";
  return document.body.removeChild(t), document.body.removeChild(e), J;
}
function Jr(t) {
  if (!t || !globalThis.materialDynamicColors)
    return Wr();
  const e = /dark/i.test(document.body.className) ? "dark" : "light";
  return t.light && t.dark ? (J.light = t.light, J.dark = t.dark, document.body.setAttribute("style", t[e]), t) : globalThis.materialDynamicColors(t).then((r) => {
    const n = (s) => {
      let l = "";
      for (const o in s) {
        const a = o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), i = s[o];
        l += "--" + a + ":" + i + ";";
      }
      return l;
    };
    return J.light = n(r.light), J.dark = n(r.dark), document.body.setAttribute("style", J[e]), J;
  });
}
function Xr(t) {
  if (!t)
    return /dark/i.test(document.body.className) ? "dark" : "light";
  document.body.classList.remove("light", "dark"), document.body.classList.add(t);
  const e = t === "light" ? J.light : J.dark;
  return globalThis.materialDynamicColors && document.body.setAttribute("style", e), t;
}
function Kr() {
  at || (at = new MutationObserver(Dt), at.observe(document.body, { attributes: !0, attributeFilter: ["value", "max", "min"], childList: !0, subtree: !0 }), Dt());
}
function Je(t, e) {
  if (t) {
    if (t === "setup")
      return Kr();
    if (t === "guid")
      return Tr();
    if (t === "mode")
      return Xr(e);
    if (t === "theme")
      return Jr(e);
    const i = xe(t);
    if (!i)
      return;
    bt(i, i, e);
  }
  Z("[data-ui]").forEach((i) => oe(i, "click", Rr)), Z(".field > label").forEach((i) => oe(i, "click", Br)), Z(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea").forEach((i) => {
    oe(i, "focus", Fr), oe(i, "blur", Or), Be(i);
  }), Z(".field > input[type=file]").forEach((i) => {
    oe(i, "change", Sr), pt(i);
  }), Z(".field > input[type=color]").forEach((i) => {
    oe(i, "change", Nr), gt(i);
  }), Z(".slider > input[type=range]").forEach((i) => {
    oe(i, "input", Gr), rr(i);
  });
}
globalThis.addEventListener && globalThis.addEventListener("load", async () => await Je("setup"));
globalThis.beercss = Je;
globalThis.ui = Je;
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
function W(t) {
  return t < 0 ? -1 : t === 0 ? 0 : 1;
}
function $e(t, e, r) {
  return (1 - r) * t + r * e;
}
function Qr(t, e, r) {
  return r < t ? t : r > e ? e : r;
}
function We(t, e, r) {
  return r < t ? t : r > e ? e : r;
}
function Et(t) {
  return t = t % 360, t < 0 && (t = t + 360), t;
}
function kt(t) {
  return t = t % 360, t < 0 && (t = t + 360), t;
}
function Zr(t, e) {
  return kt(e - t) <= 180 ? 1 : -1;
}
function nr(t, e) {
  return 180 - Math.abs(Math.abs(t - e) - 180);
}
function dt(t, e) {
  const r = t[0] * e[0][0] + t[1] * e[0][1] + t[2] * e[0][2], n = t[0] * e[1][0] + t[1] * e[1][1] + t[2] * e[1][2], s = t[0] * e[2][0] + t[1] * e[2][1] + t[2] * e[2][2];
  return [r, n, s];
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
const sr = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
], en = [
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
], yt = [95.047, 100, 108.883];
function Xe(t, e, r) {
  return (255 << 24 | (t & 255) << 16 | (e & 255) << 8 | r & 255) >>> 0;
}
function Rt(t) {
  const e = ge(t[0]), r = ge(t[1]), n = ge(t[2]);
  return Xe(e, r, n);
}
function tn(t) {
  return t >> 24 & 255;
}
function Ke(t) {
  return t >> 16 & 255;
}
function Qe(t) {
  return t >> 8 & 255;
}
function Ze(t) {
  return t & 255;
}
function lr(t, e, r) {
  const n = en, s = n[0][0] * t + n[0][1] * e + n[0][2] * r, l = n[1][0] * t + n[1][1] * e + n[1][2] * r, o = n[2][0] * t + n[2][1] * e + n[2][2] * r, a = ge(s), i = ge(l), c = ge(o);
  return Xe(a, i, c);
}
function rn(t) {
  const e = he(Ke(t)), r = he(Qe(t)), n = he(Ze(t));
  return dt([e, r, n], sr);
}
function nn(t, e, r) {
  const n = yt, s = (t + 16) / 116, l = e / 500 + s, o = s - r / 200, a = Ue(l), i = Ue(s), c = Ue(o), h = a * n[0], z = i * n[1], u = c * n[2];
  return lr(h, z, u);
}
function sn(t) {
  const e = he(Ke(t)), r = he(Qe(t)), n = he(Ze(t)), s = sr, l = s[0][0] * e + s[0][1] * r + s[0][2] * n, o = s[1][0] * e + s[1][1] * r + s[1][2] * n, a = s[2][0] * e + s[2][1] * r + s[2][2] * n, i = yt, c = l / i[0], h = o / i[1], z = a / i[2], u = Te(c), d = Te(h), q = Te(z), f = 116 * d - 16, p = 500 * (u - d), k = 200 * (d - q);
  return [f, p, k];
}
function ln(t) {
  const e = ve(t), r = ge(e);
  return Xe(r, r, r);
}
function ut(t) {
  const e = rn(t)[1];
  return 116 * Te(e / 100) - 16;
}
function ve(t) {
  return 100 * Ue((t + 16) / 116);
}
function mt(t) {
  return Te(t / 100) * 116 - 16;
}
function he(t) {
  const e = t / 255;
  return e <= 0.040449936 ? e / 12.92 * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100;
}
function ge(t) {
  const e = t / 100;
  let r = 0;
  return e <= 31308e-7 ? r = e * 12.92 : r = 1.055 * Math.pow(e, 1 / 2.4) - 0.055, Qr(0, 255, Math.round(r * 255));
}
function on() {
  return yt;
}
function Te(t) {
  const e = 0.008856451679035631, r = 24389 / 27;
  return t > e ? Math.pow(t, 1 / 3) : (r * t + 16) / 116;
}
function Ue(t) {
  const e = 0.008856451679035631, r = 24389 / 27, n = t * t * t;
  return n > e ? n : (116 * t - 16) / r;
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
class re {
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
  static make(e = on(), r = 200 / Math.PI * ve(50) / 100, n = 50, s = 2, l = !1) {
    const o = e, a = o[0] * 0.401288 + o[1] * 0.650173 + o[2] * -0.051461, i = o[0] * -0.250268 + o[1] * 1.204414 + o[2] * 0.045854, c = o[0] * -2079e-6 + o[1] * 0.048952 + o[2] * 0.953127, h = 0.8 + s / 10, z = h >= 0.9 ? $e(0.59, 0.69, (h - 0.9) * 10) : $e(0.525, 0.59, (h - 0.8) * 10);
    let u = l ? 1 : h * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92));
    u = u > 1 ? 1 : u < 0 ? 0 : u;
    const d = h, q = [
      u * (100 / a) + 1 - u,
      u * (100 / i) + 1 - u,
      u * (100 / c) + 1 - u
    ], f = 1 / (5 * r + 1), p = f * f * f * f, k = 1 - p, m = p * r + 0.1 * k * k * Math.cbrt(5 * r), w = ve(n) / e[1], P = 1.48 + Math.sqrt(w), y = 0.725 / Math.pow(w, 0.2), C = y, g = [
      Math.pow(m * q[0] * a / 100, 0.42),
      Math.pow(m * q[1] * i / 100, 0.42),
      Math.pow(m * q[2] * c / 100, 0.42)
    ], M = [
      400 * g[0] / (g[0] + 27.13),
      400 * g[1] / (g[1] + 27.13),
      400 * g[2] / (g[2] + 27.13)
    ], $ = (2 * M[0] + M[1] + 0.05 * M[2]) * y;
    return new re(w, $, y, C, z, d, q, m, Math.pow(m, 0.25), P);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(e, r, n, s, l, o, a, i, c, h) {
    this.n = e, this.aw = r, this.nbb = n, this.ncb = s, this.c = l, this.nc = o, this.rgbD = a, this.fl = i, this.fLRoot = c, this.z = h;
  }
}
re.DEFAULT = re.make();
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
class O {
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
  constructor(e, r, n, s, l, o, a, i, c) {
    this.hue = e, this.chroma = r, this.j = n, this.q = s, this.m = l, this.s = o, this.jstar = a, this.astar = i, this.bstar = c;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(e) {
    const r = this.jstar - e.jstar, n = this.astar - e.astar, s = this.bstar - e.bstar, l = Math.sqrt(r * r + n * n + s * s);
    return 1.41 * Math.pow(l, 0.63);
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(e) {
    return O.fromIntInViewingConditions(e, re.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(e, r) {
    const n = (e & 16711680) >> 16, s = (e & 65280) >> 8, l = e & 255, o = he(n), a = he(s), i = he(l), c = 0.41233895 * o + 0.35762064 * a + 0.18051042 * i, h = 0.2126 * o + 0.7152 * a + 0.0722 * i, z = 0.01932141 * o + 0.11916382 * a + 0.95034478 * i, u = 0.401288 * c + 0.650173 * h - 0.051461 * z, d = -0.250268 * c + 1.204414 * h + 0.045854 * z, q = -2079e-6 * c + 0.048952 * h + 0.953127 * z, f = r.rgbD[0] * u, p = r.rgbD[1] * d, k = r.rgbD[2] * q, m = Math.pow(r.fl * Math.abs(f) / 100, 0.42), w = Math.pow(r.fl * Math.abs(p) / 100, 0.42), P = Math.pow(r.fl * Math.abs(k) / 100, 0.42), y = W(f) * 400 * m / (m + 27.13), C = W(p) * 400 * w / (w + 27.13), g = W(k) * 400 * P / (P + 27.13), M = (11 * y + -12 * C + g) / 11, $ = (y + C - 2 * g) / 9, _ = (20 * y + 20 * C + 21 * g) / 20, G = (40 * y + 20 * C + g) / 20, Y = Math.atan2($, M) * 180 / Math.PI, B = Y < 0 ? Y + 360 : Y >= 360 ? Y - 360 : Y, qe = B * Math.PI / 180, Oe = G * r.nbb, ce = 100 * Math.pow(Oe / r.aw, r.c * r.z), Le = 4 / r.c * Math.sqrt(ce / 100) * (r.aw + 4) * r.fLRoot, et = B < 20.14 ? B + 360 : B, tt = 0.25 * (Math.cos(et * Math.PI / 180 + 2) + 3.8), nt = 5e4 / 13 * tt * r.nc * r.ncb * Math.sqrt(M * M + $ * $) / (_ + 0.305), Se = Math.pow(nt, 0.9) * Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), Pt = Se * Math.sqrt(ce / 100), It = Pt * r.fLRoot, hr = 50 * Math.sqrt(Se * r.c / (r.aw + 4)), cr = (1 + 100 * 7e-3) * ce / (1 + 7e-3 * ce), _t = 1 / 0.0228 * Math.log(1 + 0.0228 * It), vr = _t * Math.cos(qe), zr = _t * Math.sin(qe);
    return new O(B, Pt, ce, Le, It, hr, cr, vr, zr);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(e, r, n) {
    return O.fromJchInViewingConditions(e, r, n, re.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(e, r, n, s) {
    const l = 4 / s.c * Math.sqrt(e / 100) * (s.aw + 4) * s.fLRoot, o = r * s.fLRoot, a = r / Math.sqrt(e / 100), i = 50 * Math.sqrt(a * s.c / (s.aw + 4)), c = n * Math.PI / 180, h = (1 + 100 * 7e-3) * e / (1 + 7e-3 * e), z = 1 / 0.0228 * Math.log(1 + 0.0228 * o), u = z * Math.cos(c), d = z * Math.sin(c);
    return new O(n, r, e, l, o, i, h, u, d);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(e, r, n) {
    return O.fromUcsInViewingConditions(e, r, n, re.DEFAULT);
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
  static fromUcsInViewingConditions(e, r, n, s) {
    const l = r, o = n, a = Math.sqrt(l * l + o * o), c = (Math.exp(a * 0.0228) - 1) / 0.0228 / s.fLRoot;
    let h = Math.atan2(o, l) * (180 / Math.PI);
    h < 0 && (h += 360);
    const z = e / (1 - (e - 100) * 7e-3);
    return O.fromJchInViewingConditions(z, c, h, s);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(re.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(e) {
    const r = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), n = Math.pow(r / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), s = this.hue * Math.PI / 180, l = 0.25 * (Math.cos(s + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), a = l * (5e4 / 13) * e.nc * e.ncb, i = o / e.nbb, c = Math.sin(s), h = Math.cos(s), z = 23 * (i + 0.305) * n / (23 * a + 11 * n * h + 108 * n * c), u = z * h, d = z * c, q = (460 * i + 451 * u + 288 * d) / 1403, f = (460 * i - 891 * u - 261 * d) / 1403, p = (460 * i - 220 * u - 6300 * d) / 1403, k = Math.max(0, 27.13 * Math.abs(q) / (400 - Math.abs(q))), m = W(q) * (100 / e.fl) * Math.pow(k, 1 / 0.42), w = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))), P = W(f) * (100 / e.fl) * Math.pow(w, 1 / 0.42), y = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), C = W(p) * (100 / e.fl) * Math.pow(y, 1 / 0.42), g = m / e.rgbD[0], M = P / e.rgbD[1], $ = C / e.rgbD[2], _ = 1.86206786 * g - 1.01125463 * M + 0.14918677 * $, G = 0.38752654 * g + 0.62144744 * M - 897398e-8 * $, K = -0.0158415 * g - 0.03412294 * M + 1.04996444 * $;
    return lr(_, G, K);
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e, r, n, s) {
    const l = 0.401288 * e + 0.650173 * r - 0.051461 * n, o = -0.250268 * e + 1.204414 * r + 0.045854 * n, a = -2079e-6 * e + 0.048952 * r + 0.953127 * n, i = s.rgbD[0] * l, c = s.rgbD[1] * o, h = s.rgbD[2] * a, z = Math.pow(s.fl * Math.abs(i) / 100, 0.42), u = Math.pow(s.fl * Math.abs(c) / 100, 0.42), d = Math.pow(s.fl * Math.abs(h) / 100, 0.42), q = W(i) * 400 * z / (z + 27.13), f = W(c) * 400 * u / (u + 27.13), p = W(h) * 400 * d / (d + 27.13), k = (11 * q + -12 * f + p) / 11, m = (q + f - 2 * p) / 9, w = (20 * q + 20 * f + 21 * p) / 20, P = (40 * q + 20 * f + p) / 20, C = Math.atan2(m, k) * 180 / Math.PI, g = C < 0 ? C + 360 : C >= 360 ? C - 360 : C, M = g * Math.PI / 180, $ = P * s.nbb, _ = 100 * Math.pow($ / s.aw, s.c * s.z), G = 4 / s.c * Math.sqrt(_ / 100) * (s.aw + 4) * s.fLRoot, K = g < 20.14 ? g + 360 : g, Y = 1 / 4 * (Math.cos(K * Math.PI / 180 + 2) + 3.8), qe = 5e4 / 13 * Y * s.nc * s.ncb * Math.sqrt(k * k + m * m) / (w + 0.305), Oe = Math.pow(qe, 0.9) * Math.pow(1.64 - Math.pow(0.29, s.n), 0.73), ce = Oe * Math.sqrt(_ / 100), Le = ce * s.fLRoot, et = 50 * Math.sqrt(Oe * s.c / (s.aw + 4)), tt = (1 + 100 * 7e-3) * _ / (1 + 7e-3 * _), rt = Math.log(1 + 0.0228 * Le) / 0.0228, nt = rt * Math.cos(M), Se = rt * Math.sin(M);
    return new O(g, ce, _, G, Le, et, tt, nt, Se);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e) {
    const r = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), n = Math.pow(r / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), s = this.hue * Math.PI / 180, l = 0.25 * (Math.cos(s + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), a = l * (5e4 / 13) * e.nc * e.ncb, i = o / e.nbb, c = Math.sin(s), h = Math.cos(s), z = 23 * (i + 0.305) * n / (23 * a + 11 * n * h + 108 * n * c), u = z * h, d = z * c, q = (460 * i + 451 * u + 288 * d) / 1403, f = (460 * i - 891 * u - 261 * d) / 1403, p = (460 * i - 220 * u - 6300 * d) / 1403, k = Math.max(0, 27.13 * Math.abs(q) / (400 - Math.abs(q))), m = W(q) * (100 / e.fl) * Math.pow(k, 1 / 0.42), w = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))), P = W(f) * (100 / e.fl) * Math.pow(w, 1 / 0.42), y = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), C = W(p) * (100 / e.fl) * Math.pow(y, 1 / 0.42), g = m / e.rgbD[0], M = P / e.rgbD[1], $ = C / e.rgbD[2], _ = 1.86206786 * g - 1.01125463 * M + 0.14918677 * $, G = 0.38752654 * g + 0.62144744 * M - 897398e-8 * $, K = -0.0158415 * g - 0.03412294 * M + 1.04996444 * $;
    return [_, G, K];
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
class x {
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
    const r = e / 100;
    let n = 0;
    return r <= 31308e-7 ? n = r * 12.92 : n = 1.055 * Math.pow(r, 1 / 2.4) - 0.055, n * 255;
  }
  static chromaticAdaptation(e) {
    const r = Math.pow(Math.abs(e), 0.42);
    return W(e) * 400 * r / (r + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(e) {
    const r = dt(e, x.SCALED_DISCOUNT_FROM_LINRGB), n = x.chromaticAdaptation(r[0]), s = x.chromaticAdaptation(r[1]), l = x.chromaticAdaptation(r[2]), o = (11 * n + -12 * s + l) / 11, a = (n + s - 2 * l) / 9;
    return Math.atan2(a, o);
  }
  static areInCyclicOrder(e, r, n) {
    const s = x.sanitizeRadians(r - e), l = x.sanitizeRadians(n - e);
    return s < l;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(e, r, n) {
    return (r - e) / (n - e);
  }
  static lerpPoint(e, r, n) {
    return [
      e[0] + (n[0] - e[0]) * r,
      e[1] + (n[1] - e[1]) * r,
      e[2] + (n[2] - e[2]) * r
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
  static setCoordinate(e, r, n, s) {
    const l = x.intercept(e[s], r, n[s]);
    return x.lerpPoint(e, l, n);
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
  static nthVertex(e, r) {
    const n = x.Y_FROM_LINRGB[0], s = x.Y_FROM_LINRGB[1], l = x.Y_FROM_LINRGB[2], o = r % 4 <= 1 ? 0 : 100, a = r % 2 === 0 ? 0 : 100;
    if (r < 4) {
      const i = o, c = a, h = (e - i * s - c * l) / n;
      return x.isBounded(h) ? [h, i, c] : [-1, -1, -1];
    } else if (r < 8) {
      const i = o, c = a, h = (e - c * n - i * l) / s;
      return x.isBounded(h) ? [c, h, i] : [-1, -1, -1];
    } else {
      const i = o, c = a, h = (e - i * n - c * s) / l;
      return x.isBounded(h) ? [i, c, h] : [-1, -1, -1];
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
  static bisectToSegment(e, r) {
    let n = [-1, -1, -1], s = n, l = 0, o = 0, a = !1, i = !0;
    for (let c = 0; c < 12; c++) {
      const h = x.nthVertex(e, c);
      if (h[0] < 0)
        continue;
      const z = x.hueOf(h);
      if (!a) {
        n = h, s = h, l = z, o = z, a = !0;
        continue;
      }
      (i || x.areInCyclicOrder(l, z, o)) && (i = !1, x.areInCyclicOrder(l, r, z) ? (s = h, o = z) : (n = h, l = z));
    }
    return [n, s];
  }
  static midpoint(e, r) {
    return [
      (e[0] + r[0]) / 2,
      (e[1] + r[1]) / 2,
      (e[2] + r[2]) / 2
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
  static bisectToLimit(e, r) {
    const n = x.bisectToSegment(e, r);
    let s = n[0], l = x.hueOf(s), o = n[1];
    for (let a = 0; a < 3; a++)
      if (s[a] !== o[a]) {
        let i = -1, c = 255;
        s[a] < o[a] ? (i = x.criticalPlaneBelow(x.trueDelinearized(s[a])), c = x.criticalPlaneAbove(x.trueDelinearized(o[a]))) : (i = x.criticalPlaneAbove(x.trueDelinearized(s[a])), c = x.criticalPlaneBelow(x.trueDelinearized(o[a])));
        for (let h = 0; h < 8 && !(Math.abs(c - i) <= 1); h++) {
          const z = Math.floor((i + c) / 2), u = x.CRITICAL_PLANES[z], d = x.setCoordinate(s, u, o, a), q = x.hueOf(d);
          x.areInCyclicOrder(l, r, q) ? (o = d, c = z) : (s = d, l = q, i = z);
        }
      }
    return x.midpoint(s, o);
  }
  static inverseChromaticAdaptation(e) {
    const r = Math.abs(e), n = Math.max(0, 27.13 * r / (400 - r));
    return W(e) * Math.pow(n, 1 / 0.42);
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
  static findResultByJ(e, r, n) {
    let s = Math.sqrt(n) * 11;
    const l = re.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(0.29, l.n), 0.73), i = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * l.nc * l.ncb, c = Math.sin(e), h = Math.cos(e);
    for (let z = 0; z < 5; z++) {
      const u = s / 100, d = r === 0 || s === 0 ? 0 : r / Math.sqrt(u), q = Math.pow(d * o, 1 / 0.9), p = l.aw * Math.pow(u, 1 / l.c / l.z) / l.nbb, k = 23 * (p + 0.305) * q / (23 * i + 11 * q * h + 108 * q * c), m = k * h, w = k * c, P = (460 * p + 451 * m + 288 * w) / 1403, y = (460 * p - 891 * m - 261 * w) / 1403, C = (460 * p - 220 * m - 6300 * w) / 1403, g = x.inverseChromaticAdaptation(P), M = x.inverseChromaticAdaptation(y), $ = x.inverseChromaticAdaptation(C), _ = dt([g, M, $], x.LINRGB_FROM_SCALED_DISCOUNT);
      if (_[0] < 0 || _[1] < 0 || _[2] < 0)
        return 0;
      const G = x.Y_FROM_LINRGB[0], K = x.Y_FROM_LINRGB[1], Y = x.Y_FROM_LINRGB[2], B = G * _[0] + K * _[1] + Y * _[2];
      if (B <= 0)
        return 0;
      if (z === 4 || Math.abs(B - n) < 2e-3)
        return _[0] > 100.01 || _[1] > 100.01 || _[2] > 100.01 ? 0 : Rt(_);
      s = s - (B - n) * s / (2 * B);
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
  static solveToInt(e, r, n) {
    if (r < 1e-4 || n < 1e-4 || n > 99.9999)
      return ln(n);
    e = kt(e);
    const s = e / 180 * Math.PI, l = ve(n), o = x.findResultByJ(s, r, l);
    if (o !== 0)
      return o;
    const a = x.bisectToLimit(l, s);
    return Rt(a);
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
  static solveToCam(e, r, n) {
    return O.fromInt(x.solveToInt(e, r, n));
  }
}
x.SCALED_DISCOUNT_FROM_LINRGB = [
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
x.LINRGB_FROM_SCALED_DISCOUNT = [
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
x.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
x.CRITICAL_PLANES = [
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
class R {
  static from(e, r, n) {
    return new R(x.solveToInt(e, r, n));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(e) {
    return new R(e);
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
    this.setInternalState(x.solveToInt(e, this.internalChroma, this.internalTone));
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
    this.setInternalState(x.solveToInt(this.internalHue, e, this.internalTone));
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
    this.setInternalState(x.solveToInt(this.internalHue, this.internalChroma, e));
  }
  constructor(e) {
    this.argb = e;
    const r = O.fromInt(e);
    this.internalHue = r.hue, this.internalChroma = r.chroma, this.internalTone = ut(e), this.argb = e;
  }
  setInternalState(e) {
    const r = O.fromInt(e);
    this.internalHue = r.hue, this.internalChroma = r.chroma, this.internalTone = ut(e), this.argb = e;
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
    const n = O.fromInt(this.toInt()).xyzInViewingConditions(e), s = O.fromXyzInViewingConditions(n[0], n[1], n[2], re.make());
    return R.from(s.hue, s.chroma, mt(n[1]));
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
class xt {
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
  static harmonize(e, r) {
    const n = R.fromInt(e), s = R.fromInt(r), l = nr(n.hue, s.hue), o = Math.min(l * 0.5, 15), a = kt(n.hue + o * Zr(n.hue, s.hue));
    return R.from(a, n.chroma, n.tone).toInt();
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
  static hctHue(e, r, n) {
    const s = xt.cam16Ucs(e, r, n), l = O.fromInt(s), o = O.fromInt(e);
    return R.from(l.hue, o.chroma, ut(e)).toInt();
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
  static cam16Ucs(e, r, n) {
    const s = O.fromInt(e), l = O.fromInt(r), o = s.jstar, a = s.astar, i = s.bstar, c = l.jstar, h = l.astar, z = l.bstar, u = o + (c - o) * n, d = a + (h - a) * n, q = i + (z - i) * n;
    return O.fromUcs(u, d, q).toInt();
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
class F {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(e, r) {
    return e = We(0, 100, e), r = We(0, 100, r), F.ratioOfYs(ve(e), ve(r));
  }
  static ratioOfYs(e, r) {
    const n = e > r ? e : r, s = n === r ? e : r;
    return (n + 5) / (s + 5);
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
  static lighter(e, r) {
    if (e < 0 || e > 100)
      return -1;
    const n = ve(e), s = r * (n + 5) - 5, l = F.ratioOfYs(s, n), o = Math.abs(l - r);
    if (l < r && o > 0.04)
      return -1;
    const a = mt(s) + 0.4;
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
  static darker(e, r) {
    if (e < 0 || e > 100)
      return -1;
    const n = ve(e), s = (n + 5) / r - 5, l = F.ratioOfYs(n, s), o = Math.abs(l - r);
    if (l < r && o > 0.04)
      return -1;
    const a = mt(s) - 0.4;
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
  static lighterUnsafe(e, r) {
    const n = F.lighter(e, r);
    return n < 0 ? 100 : n;
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
  static darkerUnsafe(e, r) {
    const n = F.darker(e, r);
    return n < 0 ? 0 : n;
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
class Mt {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(e) {
    const r = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111, n = Math.round(e.chroma) > 16, s = Math.round(e.tone) < 65;
    return r && n && s;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(e) {
    return Mt.isDisliked(e) ? R.from(e.hue, e.chroma, 70) : e;
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
class b {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(e) {
    return new b(e.name ?? "", e.palette, e.tone, e.isBackground ?? !1, e.background, e.secondBackground, e.contrastCurve, e.toneDeltaPair);
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
  constructor(e, r, n, s, l, o, a, i) {
    if (this.name = e, this.palette = r, this.tone = n, this.isBackground = s, this.background = l, this.secondBackground = o, this.contrastCurve = a, this.toneDeltaPair = i, this.hctCache = /* @__PURE__ */ new Map(), !l && o)
      throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
    if (!l && a)
      throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
    if (l && !a)
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
    const r = this.hctCache.get(e);
    if (r != null)
      return r;
    const n = this.getTone(e), s = this.palette(e).getHct(n);
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
    const r = e.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const n = this.toneDeltaPair(e), s = n.roleA, l = n.roleB, o = n.delta, a = n.polarity, i = n.stayTogether, h = this.background(e).getTone(e), z = a === "nearer" || a === "lighter" && !e.isDark || a === "darker" && e.isDark, u = z ? s : l, d = z ? l : s, q = this.name === u.name, f = e.isDark ? 1 : -1, p = u.contrastCurve.getContrast(e.contrastLevel), k = d.contrastCurve.getContrast(e.contrastLevel), m = u.tone(e);
      let w = F.ratioOfTones(h, m) >= p ? m : b.foregroundTone(h, p);
      const P = d.tone(e);
      let y = F.ratioOfTones(h, P) >= k ? P : b.foregroundTone(h, k);
      return r && (w = b.foregroundTone(h, p), y = b.foregroundTone(h, k)), (y - w) * f >= o || (y = We(0, 100, w + o * f), (y - w) * f >= o || (w = We(0, 100, y - o * f))), 50 <= w && w < 60 ? f > 0 ? (w = 60, y = Math.max(y, w + o * f)) : (w = 49, y = Math.min(y, w + o * f)) : 50 <= y && y < 60 && (i ? f > 0 ? (w = 60, y = Math.max(y, w + o * f)) : (w = 49, y = Math.min(y, w + o * f)) : f > 0 ? y = 60 : y = 49), q ? w : y;
    } else {
      let n = this.tone(e);
      if (this.background == null)
        return n;
      const s = this.background(e).getTone(e), l = this.contrastCurve.getContrast(e.contrastLevel);
      if (F.ratioOfTones(s, n) >= l || (n = b.foregroundTone(s, l)), r && (n = b.foregroundTone(s, l)), this.isBackground && 50 <= n && n < 60 && (F.ratioOfTones(49, s) >= l ? n = 49 : n = 60), this.secondBackground) {
        const [o, a] = [this.background, this.secondBackground], [i, c] = [o(e).getTone(e), a(e).getTone(e)], [h, z] = [Math.max(i, c), Math.min(i, c)];
        if (F.ratioOfTones(h, n) >= l && F.ratioOfTones(z, n) >= l)
          return n;
        const u = F.lighter(h, l), d = F.darker(z, l), q = [];
        return u !== -1 && q.push(u), d !== -1 && q.push(d), b.tonePrefersLightForeground(i) || b.tonePrefersLightForeground(c) ? u < 0 ? 100 : u : q.length === 1 ? q[0] : d < 0 ? 0 : d;
      }
      return n;
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
  static foregroundTone(e, r) {
    const n = F.lighterUnsafe(e, r), s = F.darkerUnsafe(e, r), l = F.ratioOfTones(n, e), o = F.ratioOfTones(s, e);
    if (b.tonePrefersLightForeground(e)) {
      const i = Math.abs(l - o) < 0.1 && l < r && o < r;
      return l >= r || l >= o || i ? n : s;
    } else
      return o >= r || o >= l ? s : n;
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
    return b.tonePrefersLightForeground(e) && !b.toneAllowsLightForeground(e) ? 49 : e;
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
var Ee;
(function(t) {
  t[t.MONOCHROME = 0] = "MONOCHROME", t[t.NEUTRAL = 1] = "NEUTRAL", t[t.TONAL_SPOT = 2] = "TONAL_SPOT", t[t.VIBRANT = 3] = "VIBRANT", t[t.EXPRESSIVE = 4] = "EXPRESSIVE", t[t.FIDELITY = 5] = "FIDELITY", t[t.CONTENT = 6] = "CONTENT", t[t.RAINBOW = 7] = "RAINBOW", t[t.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(Ee || (Ee = {}));
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
class I {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(e, r, n, s) {
    this.low = e, this.normal = r, this.medium = n, this.high = s;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(e) {
    return e <= -1 ? this.low : e < 0 ? $e(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? $e(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? $e(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
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
class X {
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
  constructor(e, r, n, s, l) {
    this.roleA = e, this.roleB = r, this.delta = n, this.polarity = s, this.stayTogether = l;
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
function Ce(t) {
  return t.variant === Ee.FIDELITY || t.variant === Ee.CONTENT;
}
function E(t) {
  return t.variant === Ee.MONOCHROME;
}
function an(t, e, r, n) {
  let s = r, l = R.from(t, e, r);
  if (l.chroma < e) {
    let o = l.chroma;
    for (; l.chroma < e; ) {
      s += n ? -1 : 1;
      const a = R.from(t, e, s);
      if (o > a.chroma || Math.abs(a.chroma - e) < 0.4)
        break;
      const i = Math.abs(a.chroma - e), c = Math.abs(l.chroma - e);
      i < c && (l = a), o = Math.max(o, a.chroma);
    }
  }
  return s;
}
function hn(t) {
  return re.make(
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
function Ct(t, e) {
  const r = t.inViewingConditions(hn(e));
  return b.tonePrefersLightForeground(t.tone) && !b.toneAllowsLightForeground(r.tone) ? b.enableLightForeground(t.tone) : b.enableLightForeground(r.tone);
}
class v {
  static highestSurface(e) {
    return e.isDark ? v.surfaceBright : v.surfaceDim;
  }
}
v.contentAccentToneDelta = 15;
v.primaryPaletteKeyColor = b.fromPalette({
  name: "primary_palette_key_color",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.primaryPalette.keyColor.tone
});
v.secondaryPaletteKeyColor = b.fromPalette({
  name: "secondary_palette_key_color",
  palette: (t) => t.secondaryPalette,
  tone: (t) => t.secondaryPalette.keyColor.tone
});
v.tertiaryPaletteKeyColor = b.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => t.tertiaryPalette.keyColor.tone
});
v.neutralPaletteKeyColor = b.fromPalette({
  name: "neutral_palette_key_color",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.neutralPalette.keyColor.tone
});
v.neutralVariantPaletteKeyColor = b.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.neutralVariantPalette.keyColor.tone
});
v.background = b.fromPalette({
  name: "background",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 98,
  isBackground: !0
});
v.onBackground = b.fromPalette({
  name: "on_background",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => v.background,
  contrastCurve: new I(3, 3, 4.5, 7)
});
v.surface = b.fromPalette({
  name: "surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 98,
  isBackground: !0
});
v.surfaceDim = b.fromPalette({
  name: "surface_dim",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 6 : 87,
  isBackground: !0
});
v.surfaceBright = b.fromPalette({
  name: "surface_bright",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 24 : 98,
  isBackground: !0
});
v.surfaceContainerLowest = b.fromPalette({
  name: "surface_container_lowest",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 4 : 100,
  isBackground: !0
});
v.surfaceContainerLow = b.fromPalette({
  name: "surface_container_low",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 10 : 96,
  isBackground: !0
});
v.surfaceContainer = b.fromPalette({
  name: "surface_container",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 12 : 94,
  isBackground: !0
});
v.surfaceContainerHigh = b.fromPalette({
  name: "surface_container_high",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 17 : 92,
  isBackground: !0
});
v.surfaceContainerHighest = b.fromPalette({
  name: "surface_container_highest",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 22 : 90,
  isBackground: !0
});
v.onSurface = b.fromPalette({
  name: "on_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.surfaceVariant = b.fromPalette({
  name: "surface_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 30 : 90,
  isBackground: !0
});
v.onSurfaceVariant = b.fromPalette({
  name: "on_surface_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 80 : 30,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(3, 4.5, 7, 11)
});
v.inverseSurface = b.fromPalette({
  name: "inverse_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 90 : 20
});
v.inverseOnSurface = b.fromPalette({
  name: "inverse_on_surface",
  palette: (t) => t.neutralPalette,
  tone: (t) => t.isDark ? 20 : 95,
  background: (t) => v.inverseSurface,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.outline = b.fromPalette({
  name: "outline",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 60 : 50,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1.5, 3, 4.5, 7)
});
v.outlineVariant = b.fromPalette({
  name: "outline_variant",
  palette: (t) => t.neutralVariantPalette,
  tone: (t) => t.isDark ? 30 : 80,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7)
});
v.shadow = b.fromPalette({
  name: "shadow",
  palette: (t) => t.neutralPalette,
  tone: (t) => 0
});
v.scrim = b.fromPalette({
  name: "scrim",
  palette: (t) => t.neutralPalette,
  tone: (t) => 0
});
v.surfaceTint = b.fromPalette({
  name: "surface_tint",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0
});
v.primary = b.fromPalette({
  name: "primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => E(t) ? t.isDark ? 100 : 0 : t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new X(v.primaryContainer, v.primary, 15, "nearer", !1)
});
v.onPrimary = b.fromPalette({
  name: "on_primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => E(t) ? t.isDark ? 10 : 90 : t.isDark ? 20 : 100,
  background: (t) => v.primary,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.primaryContainer = b.fromPalette({
  name: "primary_container",
  palette: (t) => t.primaryPalette,
  tone: (t) => Ce(t) ? Ct(t.sourceColorHct, t) : E(t) ? t.isDark ? 85 : 25 : t.isDark ? 30 : 90,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.primaryContainer, v.primary, 15, "nearer", !1)
});
v.onPrimaryContainer = b.fromPalette({
  name: "on_primary_container",
  palette: (t) => t.primaryPalette,
  tone: (t) => Ce(t) ? b.foregroundTone(v.primaryContainer.tone(t), 4.5) : E(t) ? t.isDark ? 0 : 100 : t.isDark ? 90 : 10,
  background: (t) => v.primaryContainer,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.inversePrimary = b.fromPalette({
  name: "inverse_primary",
  palette: (t) => t.primaryPalette,
  tone: (t) => t.isDark ? 40 : 80,
  background: (t) => v.inverseSurface,
  contrastCurve: new I(3, 4.5, 7, 11)
});
v.secondary = b.fromPalette({
  name: "secondary",
  palette: (t) => t.secondaryPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new X(v.secondaryContainer, v.secondary, 15, "nearer", !1)
});
v.onSecondary = b.fromPalette({
  name: "on_secondary",
  palette: (t) => t.secondaryPalette,
  tone: (t) => E(t) ? t.isDark ? 10 : 100 : t.isDark ? 20 : 100,
  background: (t) => v.secondary,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.secondaryContainer = b.fromPalette({
  name: "secondary_container",
  palette: (t) => t.secondaryPalette,
  tone: (t) => {
    const e = t.isDark ? 30 : 90;
    if (E(t))
      return t.isDark ? 30 : 85;
    if (!Ce(t))
      return e;
    let r = an(t.secondaryPalette.hue, t.secondaryPalette.chroma, e, !t.isDark);
    return r = Ct(t.secondaryPalette.getHct(r), t), r;
  },
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.secondaryContainer, v.secondary, 15, "nearer", !1)
});
v.onSecondaryContainer = b.fromPalette({
  name: "on_secondary_container",
  palette: (t) => t.secondaryPalette,
  tone: (t) => Ce(t) ? b.foregroundTone(v.secondaryContainer.tone(t), 4.5) : t.isDark ? 90 : 10,
  background: (t) => v.secondaryContainer,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.tertiary = b.fromPalette({
  name: "tertiary",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? t.isDark ? 90 : 25 : t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new X(v.tertiaryContainer, v.tertiary, 15, "nearer", !1)
});
v.onTertiary = b.fromPalette({
  name: "on_tertiary",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? t.isDark ? 10 : 90 : t.isDark ? 20 : 100,
  background: (t) => v.tertiary,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.tertiaryContainer = b.fromPalette({
  name: "tertiary_container",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => {
    if (E(t))
      return t.isDark ? 60 : 49;
    if (!Ce(t))
      return t.isDark ? 30 : 90;
    const e = Ct(t.tertiaryPalette.getHct(t.sourceColorHct.tone), t), r = t.tertiaryPalette.getHct(e);
    return Mt.fixIfDisliked(r).tone;
  },
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.tertiaryContainer, v.tertiary, 15, "nearer", !1)
});
v.onTertiaryContainer = b.fromPalette({
  name: "on_tertiary_container",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? t.isDark ? 0 : 100 : Ce(t) ? b.foregroundTone(v.tertiaryContainer.tone(t), 4.5) : t.isDark ? 90 : 10,
  background: (t) => v.tertiaryContainer,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.error = b.fromPalette({
  name: "error",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 80 : 40,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(3, 4.5, 7, 11),
  toneDeltaPair: (t) => new X(v.errorContainer, v.error, 15, "nearer", !1)
});
v.onError = b.fromPalette({
  name: "on_error",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 20 : 100,
  background: (t) => v.error,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.errorContainer = b.fromPalette({
  name: "error_container",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 30 : 90,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.errorContainer, v.error, 15, "nearer", !1)
});
v.onErrorContainer = b.fromPalette({
  name: "on_error_container",
  palette: (t) => t.errorPalette,
  tone: (t) => t.isDark ? 90 : 10,
  background: (t) => v.errorContainer,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.primaryFixed = b.fromPalette({
  name: "primary_fixed",
  palette: (t) => t.primaryPalette,
  tone: (t) => E(t) ? 40 : 90,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.primaryFixed, v.primaryFixedDim, 10, "lighter", !0)
});
v.primaryFixedDim = b.fromPalette({
  name: "primary_fixed_dim",
  palette: (t) => t.primaryPalette,
  tone: (t) => E(t) ? 30 : 80,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.primaryFixed, v.primaryFixedDim, 10, "lighter", !0)
});
v.onPrimaryFixed = b.fromPalette({
  name: "on_primary_fixed",
  palette: (t) => t.primaryPalette,
  tone: (t) => E(t) ? 100 : 10,
  background: (t) => v.primaryFixedDim,
  secondBackground: (t) => v.primaryFixed,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.onPrimaryFixedVariant = b.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (t) => t.primaryPalette,
  tone: (t) => E(t) ? 90 : 30,
  background: (t) => v.primaryFixedDim,
  secondBackground: (t) => v.primaryFixed,
  contrastCurve: new I(3, 4.5, 7, 11)
});
v.secondaryFixed = b.fromPalette({
  name: "secondary_fixed",
  palette: (t) => t.secondaryPalette,
  tone: (t) => E(t) ? 80 : 90,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.secondaryFixed, v.secondaryFixedDim, 10, "lighter", !0)
});
v.secondaryFixedDim = b.fromPalette({
  name: "secondary_fixed_dim",
  palette: (t) => t.secondaryPalette,
  tone: (t) => E(t) ? 70 : 80,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.secondaryFixed, v.secondaryFixedDim, 10, "lighter", !0)
});
v.onSecondaryFixed = b.fromPalette({
  name: "on_secondary_fixed",
  palette: (t) => t.secondaryPalette,
  tone: (t) => 10,
  background: (t) => v.secondaryFixedDim,
  secondBackground: (t) => v.secondaryFixed,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.onSecondaryFixedVariant = b.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (t) => t.secondaryPalette,
  tone: (t) => E(t) ? 25 : 30,
  background: (t) => v.secondaryFixedDim,
  secondBackground: (t) => v.secondaryFixed,
  contrastCurve: new I(3, 4.5, 7, 11)
});
v.tertiaryFixed = b.fromPalette({
  name: "tertiary_fixed",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? 40 : 90,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.tertiaryFixed, v.tertiaryFixedDim, 10, "lighter", !0)
});
v.tertiaryFixedDim = b.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? 30 : 80,
  isBackground: !0,
  background: (t) => v.highestSurface(t),
  contrastCurve: new I(1, 1, 3, 7),
  toneDeltaPair: (t) => new X(v.tertiaryFixed, v.tertiaryFixedDim, 10, "lighter", !0)
});
v.onTertiaryFixed = b.fromPalette({
  name: "on_tertiary_fixed",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? 100 : 10,
  background: (t) => v.tertiaryFixedDim,
  secondBackground: (t) => v.tertiaryFixed,
  contrastCurve: new I(4.5, 7, 11, 21)
});
v.onTertiaryFixedVariant = b.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (t) => t.tertiaryPalette,
  tone: (t) => E(t) ? 90 : 30,
  background: (t) => v.tertiaryFixedDim,
  secondBackground: (t) => v.tertiaryFixed,
  contrastCurve: new I(3, 4.5, 7, 11)
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
class j {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(e) {
    const r = R.fromInt(e);
    return j.fromHct(r);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(e) {
    return new j(e.hue, e.chroma, e);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(e, r) {
    return new j(e, r, j.createKeyColor(e, r));
  }
  constructor(e, r, n) {
    this.hue = e, this.chroma = r, this.keyColor = n, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e, r) {
    let s = R.from(e, r, 50), l = Math.abs(s.chroma - r);
    for (let o = 1; o < 50; o += 1) {
      if (Math.round(r) === Math.round(s.chroma))
        return s;
      const a = R.from(e, r, 50 + o), i = Math.abs(a.chroma - r);
      i < l && (l = i, s = a);
      const c = R.from(e, r, 50 - o), h = Math.abs(c.chroma - r);
      h < l && (l = h, s = c);
    }
    return s;
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(e) {
    let r = this.cache.get(e);
    return r === void 0 && (r = R.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, r)), r;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(e) {
    return R.fromInt(this.tone(e));
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
   * @param argb ARGB representation of a color
   */
  static of(e) {
    return new N(e, !1);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(e) {
    return new N(e, !0);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(e) {
    return N.createPaletteFromColors(!1, e);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(e) {
    return N.createPaletteFromColors(!0, e);
  }
  static createPaletteFromColors(e, r) {
    const n = new N(r.primary, e);
    if (r.secondary) {
      const s = new N(r.secondary, e);
      n.a2 = s.a1;
    }
    if (r.tertiary) {
      const s = new N(r.tertiary, e);
      n.a3 = s.a1;
    }
    if (r.error) {
      const s = new N(r.error, e);
      n.error = s.a1;
    }
    if (r.neutral) {
      const s = new N(r.neutral, e);
      n.n1 = s.n1;
    }
    if (r.neutralVariant) {
      const s = new N(r.neutralVariant, e);
      n.n2 = s.n2;
    }
    return n;
  }
  constructor(e, r) {
    const n = R.fromInt(e), s = n.hue, l = n.chroma;
    r ? (this.a1 = j.fromHueAndChroma(s, l), this.a2 = j.fromHueAndChroma(s, l / 3), this.a3 = j.fromHueAndChroma(s + 60, l / 2), this.n1 = j.fromHueAndChroma(s, Math.min(l / 12, 4)), this.n2 = j.fromHueAndChroma(s, Math.min(l / 6, 8))) : (this.a1 = j.fromHueAndChroma(s, Math.max(48, l)), this.a2 = j.fromHueAndChroma(s, 16), this.a3 = j.fromHueAndChroma(s + 60, 24), this.n1 = j.fromHueAndChroma(s, 4), this.n2 = j.fromHueAndChroma(s, 8)), this.error = j.fromHueAndChroma(25, 84);
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
class cn {
  /**
   * Convert a color represented in ARGB to a 3-element array of L*a*b*
   * coordinates of the color.
   */
  fromInt(e) {
    return sn(e);
  }
  /**
   * Convert a 3-element array to a color represented in ARGB.
   */
  toInt(e) {
    return nn(e[0], e[1], e[2]);
  }
  /**
   * Standard CIE 1976 delta E formula also takes the square root, unneeded
   * here. This method is used by quantization algorithms to compare distance,
   * and the relative ordering is the same, with or without a square root.
   *
   * This relatively minor optimization is helpful because this method is
   * called at least once for each pixel in an image.
   */
  distance(e, r) {
    const n = e[0] - r[0], s = e[1] - r[1], l = e[2] - r[2];
    return n * n + s * s + l * l;
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
const vn = 10, zn = 3;
class dn {
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
  static quantize(e, r, n) {
    const s = /* @__PURE__ */ new Map(), l = new Array(), o = new Array(), a = new cn();
    let i = 0;
    for (let m = 0; m < e.length; m++) {
      const w = e[m], P = s.get(w);
      P === void 0 ? (i++, l.push(a.fromInt(w)), o.push(w), s.set(w, 1)) : s.set(w, P + 1);
    }
    const c = new Array();
    for (let m = 0; m < i; m++) {
      const w = o[m], P = s.get(w);
      P !== void 0 && (c[m] = P);
    }
    let h = Math.min(n, i);
    r.length > 0 && (h = Math.min(h, r.length));
    const z = new Array();
    for (let m = 0; m < r.length; m++)
      z.push(a.fromInt(r[m]));
    const u = h - z.length;
    if (r.length === 0 && u > 0)
      for (let m = 0; m < u; m++) {
        const w = Math.random() * 100, P = Math.random() * (100 - -100 + 1) + -100, y = Math.random() * (100 - -100 + 1) + -100;
        z.push(new Array(w, P, y));
      }
    const d = new Array();
    for (let m = 0; m < i; m++)
      d.push(Math.floor(Math.random() * h));
    const q = new Array();
    for (let m = 0; m < h; m++) {
      q.push(new Array());
      for (let w = 0; w < h; w++)
        q[m].push(0);
    }
    const f = new Array();
    for (let m = 0; m < h; m++) {
      f.push(new Array());
      for (let w = 0; w < h; w++)
        f[m].push(new un());
    }
    const p = new Array();
    for (let m = 0; m < h; m++)
      p.push(0);
    for (let m = 0; m < vn; m++) {
      for (let g = 0; g < h; g++) {
        for (let M = g + 1; M < h; M++) {
          const $ = a.distance(z[g], z[M]);
          f[M][g].distance = $, f[M][g].index = g, f[g][M].distance = $, f[g][M].index = M;
        }
        f[g].sort();
        for (let M = 0; M < h; M++)
          q[g][M] = f[g][M].index;
      }
      let w = 0;
      for (let g = 0; g < i; g++) {
        const M = l[g], $ = d[g], _ = z[$], G = a.distance(M, _);
        let K = G, Y = -1;
        for (let B = 0; B < h; B++) {
          if (f[$][B].distance >= 4 * G)
            continue;
          const qe = a.distance(M, z[B]);
          qe < K && (K = qe, Y = B);
        }
        Y !== -1 && Math.abs(Math.sqrt(K) - Math.sqrt(G)) > zn && (w++, d[g] = Y);
      }
      if (w === 0 && m !== 0)
        break;
      const P = new Array(h).fill(0), y = new Array(h).fill(0), C = new Array(h).fill(0);
      for (let g = 0; g < h; g++)
        p[g] = 0;
      for (let g = 0; g < i; g++) {
        const M = d[g], $ = l[g], _ = c[g];
        p[M] += _, P[M] += $[0] * _, y[M] += $[1] * _, C[M] += $[2] * _;
      }
      for (let g = 0; g < h; g++) {
        const M = p[g];
        if (M === 0) {
          z[g] = [0, 0, 0];
          continue;
        }
        const $ = P[g] / M, _ = y[g] / M, G = C[g] / M;
        z[g] = [$, _, G];
      }
    }
    const k = /* @__PURE__ */ new Map();
    for (let m = 0; m < h; m++) {
      const w = p[m];
      if (w === 0)
        continue;
      const P = a.toInt(z[m]);
      k.has(P) || k.set(P, w);
    }
    return k;
  }
}
class un {
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
class mn {
  /**
   * @param pixels Colors in ARGB format.
   * @return A Map with keys of ARGB colors, and values of the number of times
   *     the color appears in the image.
   */
  static quantize(e) {
    const r = /* @__PURE__ */ new Map();
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      tn(s) < 255 || r.set(s, (r.get(s) ?? 0) + 1);
    }
    return r;
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
const Ne = 5, ee = 33, Pe = 35937, U = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};
class qn {
  constructor(e = [], r = [], n = [], s = [], l = [], o = []) {
    this.weights = e, this.momentsR = r, this.momentsG = n, this.momentsB = s, this.moments = l, this.cubes = o;
  }
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  quantize(e, r) {
    this.constructHistogram(e), this.computeMoments();
    const n = this.createBoxes(r);
    return this.createResult(n.resultCount);
  }
  constructHistogram(e) {
    this.weights = Array.from({ length: Pe }).fill(0), this.momentsR = Array.from({ length: Pe }).fill(0), this.momentsG = Array.from({ length: Pe }).fill(0), this.momentsB = Array.from({ length: Pe }).fill(0), this.moments = Array.from({ length: Pe }).fill(0);
    const r = mn.quantize(e);
    for (const [n, s] of r.entries()) {
      const l = Ke(n), o = Qe(n), a = Ze(n), i = 8 - Ne, c = (l >> i) + 1, h = (o >> i) + 1, z = (a >> i) + 1, u = this.getIndex(c, h, z);
      this.weights[u] = (this.weights[u] ?? 0) + s, this.momentsR[u] += s * l, this.momentsG[u] += s * o, this.momentsB[u] += s * a, this.moments[u] += s * (l * l + o * o + a * a);
    }
  }
  computeMoments() {
    for (let e = 1; e < ee; e++) {
      const r = Array.from({ length: ee }).fill(0), n = Array.from({ length: ee }).fill(0), s = Array.from({ length: ee }).fill(0), l = Array.from({ length: ee }).fill(0), o = Array.from({ length: ee }).fill(0);
      for (let a = 1; a < ee; a++) {
        let i = 0, c = 0, h = 0, z = 0, u = 0;
        for (let d = 1; d < ee; d++) {
          const q = this.getIndex(e, a, d);
          i += this.weights[q], c += this.momentsR[q], h += this.momentsG[q], z += this.momentsB[q], u += this.moments[q], r[d] += i, n[d] += c, s[d] += h, l[d] += z, o[d] += u;
          const f = this.getIndex(e - 1, a, d);
          this.weights[q] = this.weights[f] + r[d], this.momentsR[q] = this.momentsR[f] + n[d], this.momentsG[q] = this.momentsG[f] + s[d], this.momentsB[q] = this.momentsB[f] + l[d], this.moments[q] = this.moments[f] + o[d];
        }
      }
    }
  }
  createBoxes(e) {
    this.cubes = Array.from({ length: e }).fill(0).map(() => new fn());
    const r = Array.from({ length: e }).fill(0);
    this.cubes[0].r0 = 0, this.cubes[0].g0 = 0, this.cubes[0].b0 = 0, this.cubes[0].r1 = ee - 1, this.cubes[0].g1 = ee - 1, this.cubes[0].b1 = ee - 1;
    let n = e, s = 0;
    for (let l = 1; l < e; l++) {
      this.cut(this.cubes[s], this.cubes[l]) ? (r[s] = this.cubes[s].vol > 1 ? this.variance(this.cubes[s]) : 0, r[l] = this.cubes[l].vol > 1 ? this.variance(this.cubes[l]) : 0) : (r[s] = 0, l--), s = 0;
      let o = r[0];
      for (let a = 1; a <= l; a++)
        r[a] > o && (o = r[a], s = a);
      if (o <= 0) {
        n = l + 1;
        break;
      }
    }
    return new pn(e, n);
  }
  createResult(e) {
    const r = [];
    for (let n = 0; n < e; ++n) {
      const s = this.cubes[n], l = this.volume(s, this.weights);
      if (l > 0) {
        const o = Math.round(this.volume(s, this.momentsR) / l), a = Math.round(this.volume(s, this.momentsG) / l), i = Math.round(this.volume(s, this.momentsB) / l), c = 255 << 24 | (o & 255) << 16 | (a & 255) << 8 | i & 255;
        r.push(c);
      }
    }
    return r;
  }
  variance(e) {
    const r = this.volume(e, this.momentsR), n = this.volume(e, this.momentsG), s = this.volume(e, this.momentsB), l = this.moments[this.getIndex(e.r1, e.g1, e.b1)] - this.moments[this.getIndex(e.r1, e.g1, e.b0)] - this.moments[this.getIndex(e.r1, e.g0, e.b1)] + this.moments[this.getIndex(e.r1, e.g0, e.b0)] - this.moments[this.getIndex(e.r0, e.g1, e.b1)] + this.moments[this.getIndex(e.r0, e.g1, e.b0)] + this.moments[this.getIndex(e.r0, e.g0, e.b1)] - this.moments[this.getIndex(e.r0, e.g0, e.b0)], o = r * r + n * n + s * s, a = this.volume(e, this.weights);
    return l - o / a;
  }
  cut(e, r) {
    const n = this.volume(e, this.momentsR), s = this.volume(e, this.momentsG), l = this.volume(e, this.momentsB), o = this.volume(e, this.weights), a = this.maximize(e, U.RED, e.r0 + 1, e.r1, n, s, l, o), i = this.maximize(e, U.GREEN, e.g0 + 1, e.g1, n, s, l, o), c = this.maximize(e, U.BLUE, e.b0 + 1, e.b1, n, s, l, o);
    let h;
    const z = a.maximum, u = i.maximum, d = c.maximum;
    if (z >= u && z >= d) {
      if (a.cutLocation < 0)
        return !1;
      h = U.RED;
    } else
      u >= z && u >= d ? h = U.GREEN : h = U.BLUE;
    switch (r.r1 = e.r1, r.g1 = e.g1, r.b1 = e.b1, h) {
      case U.RED:
        e.r1 = a.cutLocation, r.r0 = e.r1, r.g0 = e.g0, r.b0 = e.b0;
        break;
      case U.GREEN:
        e.g1 = i.cutLocation, r.r0 = e.r0, r.g0 = e.g1, r.b0 = e.b0;
        break;
      case U.BLUE:
        e.b1 = c.cutLocation, r.r0 = e.r0, r.g0 = e.g0, r.b0 = e.b1;
        break;
      default:
        throw new Error("unexpected direction " + h);
    }
    return e.vol = (e.r1 - e.r0) * (e.g1 - e.g0) * (e.b1 - e.b0), r.vol = (r.r1 - r.r0) * (r.g1 - r.g0) * (r.b1 - r.b0), !0;
  }
  maximize(e, r, n, s, l, o, a, i) {
    const c = this.bottom(e, r, this.momentsR), h = this.bottom(e, r, this.momentsG), z = this.bottom(e, r, this.momentsB), u = this.bottom(e, r, this.weights);
    let d = 0, q = -1, f = 0, p = 0, k = 0, m = 0;
    for (let w = n; w < s; w++) {
      if (f = c + this.top(e, r, w, this.momentsR), p = h + this.top(e, r, w, this.momentsG), k = z + this.top(e, r, w, this.momentsB), m = u + this.top(e, r, w, this.weights), m === 0)
        continue;
      let P = (f * f + p * p + k * k) * 1, y = m * 1, C = P / y;
      f = l - f, p = o - p, k = a - k, m = i - m, m !== 0 && (P = (f * f + p * p + k * k) * 1, y = m * 1, C += P / y, C > d && (d = C, q = w));
    }
    return new gn(q, d);
  }
  volume(e, r) {
    return r[this.getIndex(e.r1, e.g1, e.b1)] - r[this.getIndex(e.r1, e.g1, e.b0)] - r[this.getIndex(e.r1, e.g0, e.b1)] + r[this.getIndex(e.r1, e.g0, e.b0)] - r[this.getIndex(e.r0, e.g1, e.b1)] + r[this.getIndex(e.r0, e.g1, e.b0)] + r[this.getIndex(e.r0, e.g0, e.b1)] - r[this.getIndex(e.r0, e.g0, e.b0)];
  }
  bottom(e, r, n) {
    switch (r) {
      case U.RED:
        return -n[this.getIndex(e.r0, e.g1, e.b1)] + n[this.getIndex(e.r0, e.g1, e.b0)] + n[this.getIndex(e.r0, e.g0, e.b1)] - n[this.getIndex(e.r0, e.g0, e.b0)];
      case U.GREEN:
        return -n[this.getIndex(e.r1, e.g0, e.b1)] + n[this.getIndex(e.r1, e.g0, e.b0)] + n[this.getIndex(e.r0, e.g0, e.b1)] - n[this.getIndex(e.r0, e.g0, e.b0)];
      case U.BLUE:
        return -n[this.getIndex(e.r1, e.g1, e.b0)] + n[this.getIndex(e.r1, e.g0, e.b0)] + n[this.getIndex(e.r0, e.g1, e.b0)] - n[this.getIndex(e.r0, e.g0, e.b0)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  top(e, r, n, s) {
    switch (r) {
      case U.RED:
        return s[this.getIndex(n, e.g1, e.b1)] - s[this.getIndex(n, e.g1, e.b0)] - s[this.getIndex(n, e.g0, e.b1)] + s[this.getIndex(n, e.g0, e.b0)];
      case U.GREEN:
        return s[this.getIndex(e.r1, n, e.b1)] - s[this.getIndex(e.r1, n, e.b0)] - s[this.getIndex(e.r0, n, e.b1)] + s[this.getIndex(e.r0, n, e.b0)];
      case U.BLUE:
        return s[this.getIndex(e.r1, e.g1, n)] - s[this.getIndex(e.r1, e.g0, n)] - s[this.getIndex(e.r0, e.g1, n)] + s[this.getIndex(e.r0, e.g0, n)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  getIndex(e, r, n) {
    return (e << Ne * 2) + (e << Ne + 1) + e + (r << Ne) + r + n;
  }
}
class fn {
  constructor(e = 0, r = 0, n = 0, s = 0, l = 0, o = 0, a = 0) {
    this.r0 = e, this.r1 = r, this.g0 = n, this.g1 = s, this.b0 = l, this.b1 = o, this.vol = a;
  }
}
class pn {
  /**
   * @param requestedCount how many colors the caller asked to be returned from
   *     quantization.
   * @param resultCount the actual number of colors achieved from quantization.
   *     May be lower than the requested count.
   */
  constructor(e, r) {
    this.requestedCount = e, this.resultCount = r;
  }
}
class gn {
  constructor(e, r) {
    this.cutLocation = e, this.maximum = r;
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
class bn {
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Map with keys of colors in ARGB format, and values of number of
   *     pixels in the original image that correspond to the color in the
   *     quantized image.
   */
  static quantize(e, r) {
    const s = new qn().quantize(e, r);
    return dn.quantize(e, s, r);
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
class ae {
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
    return ae.lightFromCorePalette(N.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(e) {
    return ae.darkFromCorePalette(N.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(e) {
    return ae.lightFromCorePalette(N.contentOf(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(e) {
    return ae.darkFromCorePalette(N.contentOf(e));
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(e) {
    return new ae({
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
    return new ae({
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
const wn = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: !0
  // Avoid unsuitable colors.
};
function kn(t, e) {
  return t.score > e.score ? -1 : t.score < e.score ? 1 : 0;
}
class H {
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
  static score(e, r) {
    const { desired: n, fallbackColorARGB: s, filter: l } = { ...wn, ...r }, o = [], a = new Array(360).fill(0);
    let i = 0;
    for (const [d, q] of e.entries()) {
      const f = R.fromInt(d);
      o.push(f);
      const p = Math.floor(f.hue);
      a[p] += q, i += q;
    }
    const c = new Array(360).fill(0);
    for (let d = 0; d < 360; d++) {
      const q = a[d] / i;
      for (let f = d - 14; f < d + 16; f++) {
        const p = Et(f);
        c[p] += q;
      }
    }
    const h = new Array();
    for (const d of o) {
      const q = Et(Math.round(d.hue)), f = c[q];
      if (l && (d.chroma < H.CUTOFF_CHROMA || f <= H.CUTOFF_EXCITED_PROPORTION))
        continue;
      const p = f * 100 * H.WEIGHT_PROPORTION, k = d.chroma < H.TARGET_CHROMA ? H.WEIGHT_CHROMA_BELOW : H.WEIGHT_CHROMA_ABOVE, m = (d.chroma - H.TARGET_CHROMA) * k, w = p + m;
      h.push({ hct: d, score: w });
    }
    h.sort(kn);
    const z = [];
    for (let d = 90; d >= 15; d--) {
      z.length = 0;
      for (const { hct: q } of h)
        if (z.find((p) => nr(q.hue, p.hue) < d) || z.push(q), z.length >= n)
          break;
      if (z.length >= n)
        break;
    }
    const u = [];
    z.length === 0 && u.push(s);
    for (const d of z)
      u.push(d.toInt());
    return u;
  }
}
H.TARGET_CHROMA = 48;
H.WEIGHT_PROPORTION = 0.7;
H.WEIGHT_CHROMA_ABOVE = 0.3;
H.WEIGHT_CHROMA_BELOW = 0.1;
H.CUTOFF_CHROMA = 5;
H.CUTOFF_EXCITED_PROPORTION = 0.01;
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
function T(t) {
  const e = Ke(t), r = Qe(t), n = Ze(t), s = [e.toString(16), r.toString(16), n.toString(16)];
  for (const [l, o] of s.entries())
    o.length === 1 && (s[l] = "0" + o);
  return "#" + s.join("");
}
function yn(t) {
  t = t.replace("#", "");
  const e = t.length === 3, r = t.length === 6, n = t.length === 8;
  if (!e && !r && !n)
    throw new Error("unexpected hex " + t);
  let s = 0, l = 0, o = 0;
  return e ? (s = le(t.slice(0, 1).repeat(2)), l = le(t.slice(1, 2).repeat(2)), o = le(t.slice(2, 3).repeat(2))) : r ? (s = le(t.slice(0, 2)), l = le(t.slice(2, 4)), o = le(t.slice(4, 6))) : n && (s = le(t.slice(2, 4)), l = le(t.slice(4, 6)), o = le(t.slice(6, 8))), (255 << 24 | (s & 255) << 16 | (l & 255) << 8 | o & 255) >>> 0;
}
function le(t) {
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
async function xn(t) {
  const e = await new Promise((o, a) => {
    const i = document.createElement("canvas"), c = i.getContext("2d");
    if (!c) {
      a(new Error("Could not get canvas context"));
      return;
    }
    const h = () => {
      i.width = t.width, i.height = t.height, c.drawImage(t, 0, 0);
      let z = [0, 0, t.width, t.height];
      const u = t.dataset.area;
      u && /^\d+(\s*,\s*\d+){3}$/.test(u) && (z = u.split(/\s*,\s*/).map((k) => parseInt(k, 10)));
      const [d, q, f, p] = z;
      o(c.getImageData(d, q, f, p).data);
    };
    t.complete ? h() : t.onload = h;
  }), r = [];
  for (let o = 0; o < e.length; o += 4) {
    const a = e[o], i = e[o + 1], c = e[o + 2];
    if (e[o + 3] < 255)
      continue;
    const z = Xe(a, i, c);
    r.push(z);
  }
  const n = bn.quantize(r, 128);
  return H.score(n)[0];
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
function or(t, e = []) {
  const r = N.of(t);
  return {
    source: t,
    schemes: {
      light: ae.light(t),
      dark: ae.dark(t)
    },
    palettes: {
      primary: r.a1,
      secondary: r.a2,
      tertiary: r.a3,
      neutral: r.n1,
      neutralVariant: r.n2,
      error: r.error
    },
    customColors: e.map((n) => Mn(t, n))
  };
}
async function Bt(t, e = []) {
  const r = await xn(t);
  return or(r, e);
}
function Mn(t, e) {
  let r = e.value;
  const n = r, s = t;
  e.blend && (r = xt.harmonize(n, s));
  const o = N.of(r).a1;
  return {
    color: e,
    value: r,
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
function it(t) {
  let e = JSON.parse(JSON.stringify(t.schemes));
  for (let r in e)
    for (let n in e[r])
      e[r][n] = T(e[r][n]);
  return e.dark.surfaceDim = T(t.palettes.neutral.tone(6)), e.dark.surface = T(t.palettes.neutral.tone(6)), e.dark.surfaceBright = T(t.palettes.neutral.tone(24)), e.dark.surfaceContainerLowest = T(t.palettes.neutral.tone(4)), e.dark.surfaceContainerLow = T(t.palettes.neutral.tone(10)), e.dark.surfaceContainer = T(t.palettes.neutral.tone(12)), e.dark.surfaceContainerHigh = T(t.palettes.neutral.tone(17)), e.dark.surfaceContainerHighest = T(t.palettes.neutral.tone(22)), e.dark.onSurface = T(t.palettes.neutral.tone(90)), e.dark.onSurfaceVariant = T(t.palettes.neutralVariant.tone(80)), e.dark.outline = T(t.palettes.neutralVariant.tone(60)), e.dark.outlineVariant = T(t.palettes.neutralVariant.tone(30)), e.light.surfaceDim = T(t.palettes.neutral.tone(87)), e.light.surface = T(t.palettes.neutral.tone(98)), e.light.surfaceBright = T(t.palettes.neutral.tone(98)), e.light.surfaceContainerLowest = T(t.palettes.neutral.tone(100)), e.light.surfaceContainerLow = T(t.palettes.neutral.tone(96)), e.light.surfaceContainer = T(t.palettes.neutral.tone(94)), e.light.surfaceContainerHigh = T(t.palettes.neutral.tone(92)), e.light.surfaceContainerHighest = T(t.palettes.neutral.tone(90)), e.light.onSurface = T(t.palettes.neutral.tone(10)), e.light.onSurfaceVariant = T(t.palettes.neutralVariant.tone(30)), e.light.outline = T(t.palettes.neutralVariant.tone(50)), e.light.outlineVariant = T(t.palettes.neutralVariant.tone(80)), e;
}
async function Cn(t) {
  const e = t, r = {
    light: {},
    dark: {}
  };
  try {
    if (typeof e == "string" && /^\#[0-9a-f]+$/i.test(e)) {
      let o = or(yn(e));
      return it(o);
    }
    if (e.src) {
      let o = await Bt(e);
      return it(o);
    }
    let n = new Blob();
    if (typeof e == "string" && (n = await fetch(e).then((o) => o.blob())), e.size && (n = e), e.files && e.files[0] && (n = e.files[0]), e.target && e.target.files && e.target.files[0] && (n = e.target.files[0]), !n.size)
      return r;
    let s = new Image(64);
    s.src = URL.createObjectURL(n);
    let l = await Bt(s);
    return it(l);
  } catch {
    return r;
  }
}
globalThis.materialDynamicColors = Cn;
function Pn(t, e, r) {
  if (e == "short_answer") {
    if (r.includes(":"))
      return t.length >= parseInt(r.split(":")[0]) && t.length <= parseInt(r.split(":")[1]);
  } else if (e == "paragraph") {
    if (r.includes(":"))
      return t.length >= parseInt(r.split(":")[0]) && t.length <= parseInt(r.split(":")[1]);
  } else if (e == "info") {
    if (r == "disabled" && t)
      return !1;
    if (!r)
      return !1;
  } else {
    if (e == "multiple" || e == "dropdown")
      return !(typeof t != "number" || t >= r);
    if (e == "checkboxes") {
      if (t.length > r)
        return !1;
      for (const n in t)
        if (t[n] !== !1 && t[n] !== !0)
          return !1;
      return !0;
    } else {
      if (e == "date")
        return typeof t != "number" ? !1 : t >= r[0] && t <= r[1];
      if (e == "file") {
        const n = new URL(t);
        if (n.hostname == "transfer.sh" && t.length <= 2048) {
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
          if (r.length == 0)
            return !0;
          for (const l in r)
            if (s[r[l]].includes(n.pathname.split(".").pop()))
              return !0;
        } else
          return !1;
      } else
        return !1;
    }
  }
}
function In(t) {
  Ut(t, "svelte-rqh15z", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}span.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{vertical-align:bottom}.button.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}.button.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{user-select:none}.primary.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--primary)!important}.primary-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--primary)!important}.primary-container.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--secondary)!important}.secondary-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--secondary)!important}.secondary-container.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--tertiary)!important}.tertiary-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--tertiary)!important}.tertiary-container.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--error)!important}.error-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--error)!important}.error-container.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-dim.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-bright.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-container-lowest.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-container-low.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-container.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-container-high.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.surface-container-highest.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--inverse-primary)!important}.surface-dim.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-dim)!important}.surface-bright.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-container-low)!important}.surface-container.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-container)!important}.surface-container-high.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--surface-container-low)!important}.black.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#000!important}.black-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#000!important}.black-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#000!important}.white.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fff!important}.white-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#fff!important}.white-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#fff!important}.transparent.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:transparent!important}.transparent-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:transparent!important}.fill.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;align-items:center!important}.bottom-align.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;align-items:end!important}.top-align.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;align-items:start!important}.left-align.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-align:start;justify-content:start!important}.right-align.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-align:end;justify-content:end!important}.center-align.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-align:center;justify-content:center!important}.red.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.red6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f44336!important}.red-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#f44336!important}.red-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#f44336!important}.red1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffebee!important}.red2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffcdd2!important}.red3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ef9a9a!important}.red4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e57373!important}.red5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ef5350!important}.red7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e53935!important}.red8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#d32f2f!important}.red9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#c62828!important}.red10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#b71c1c!important}.pink.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.pink6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e91e63!important}.pink-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#e91e63!important}.pink-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#e91e63!important}.pink1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fce4ec!important}.pink2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f8bbd0!important}.pink3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f48fb1!important}.pink4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f06292!important}.pink5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ec407a!important}.pink7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#d81b60!important}.pink8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#c2185b!important}.pink9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ad1457!important}.pink10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#880e4f!important}.purple.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.purple6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#9c27b0!important}.purple-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#9c27b0!important}.purple-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#9c27b0!important}.purple1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f3e5f5!important}.purple2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e1bee7!important}.purple3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ce93d8!important}.purple4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ba68c8!important}.purple5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ab47bc!important}.purple7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#8e24aa!important}.purple8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#7b1fa2!important}.purple9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#6a1b9a!important}.purple10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4a148c!important}.deep-purple.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.deep-purple6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#673ab7!important}.deep-purple-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#673ab7!important}.deep-purple-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#673ab7!important}.deep-purple1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ede7f6!important}.deep-purple2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#d1c4e9!important}.deep-purple3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#b39ddb!important}.deep-purple4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#9575cd!important}.deep-purple5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#7e57c2!important}.deep-purple7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#5e35b1!important}.deep-purple8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#512da8!important}.deep-purple9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4527a0!important}.deep-purple10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#311b92!important}.indigo.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.indigo6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#3f51b5!important}.indigo-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#3f51b5!important}.indigo-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#3f51b5!important}.indigo1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e8eaf6!important}.indigo2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#c5cae9!important}.indigo3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#9fa8da!important}.indigo4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#7986cb!important}.indigo5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#5c6bc0!important}.indigo7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#3949ab!important}.indigo8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#303f9f!important}.indigo9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#283593!important}.indigo10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#1a237e!important}.blue.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.blue6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#2196f3!important}.blue-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#2196f3!important}.blue-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#2196f3!important}.blue1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e3f2fd!important}.blue2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#bbdefb!important}.blue3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#90caf9!important}.blue4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#64b5f6!important}.blue5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#42a5f5!important}.blue7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#1e88e5!important}.blue8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#1976d2!important}.blue9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#1565c0!important}.blue10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#0d47a1!important}.light-blue.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.light-blue6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#03a9f4!important}.light-blue-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#03a9f4!important}.light-blue-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#03a9f4!important}.light-blue1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e1f5fe!important}.light-blue2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#b3e5fc!important}.light-blue3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#81d4fa!important}.light-blue4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4fc3f7!important}.light-blue5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#29b6f6!important}.light-blue7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#039be5!important}.light-blue8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#0288d1!important}.light-blue9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#0277bd!important}.light-blue10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#01579b!important}.cyan.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.cyan6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00bcd4!important}.cyan-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#00bcd4!important}.cyan-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#00bcd4!important}.cyan1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e0f7fa!important}.cyan2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#b2ebf2!important}.cyan3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#80deea!important}.cyan4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4dd0e1!important}.cyan5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#26c6da!important}.cyan7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00acc1!important}.cyan8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#0097a7!important}.cyan9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00838f!important}.cyan10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#006064!important}.teal.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.teal6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#009688!important}.teal-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#009688!important}.teal-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#009688!important}.teal1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e0f2f1!important}.teal2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#b2dfdb!important}.teal3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#80cbc4!important}.teal4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4db6ac!important}.teal5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#26a69a!important}.teal7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00897b!important}.teal8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00796b!important}.teal9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00695c!important}.teal10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#004d40!important}.green.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.green6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4caf50!important}.green-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#4caf50!important}.green-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#4caf50!important}.green1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e8f5e9!important}.green2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#c8e6c9!important}.green3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#a5d6a7!important}.green4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#81c784!important}.green5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#66bb6a!important}.green7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#43a047!important}.green8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#388e3c!important}.green9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#2e7d32!important}.green10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#1b5e20!important}.light-green.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.light-green6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#8bc34a!important}.light-green-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#8bc34a!important}.light-green-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#8bc34a!important}.light-green1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f1f8e9!important}.light-green2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#dcedc8!important}.light-green3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#c5e1a5!important}.light-green4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#aed581!important}.light-green5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#9ccc65!important}.light-green7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#7cb342!important}.light-green8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#689f38!important}.light-green9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#558b2f!important}.light-green10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#33691e!important}.lime.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.lime6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#cddc39!important}.lime-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#cddc39!important}.lime-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#cddc39!important}.lime1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f9fbe7!important}.lime2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f0f4c3!important}.lime3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e6ee9c!important}.lime4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#dce775!important}.lime5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#d4e157!important}.lime7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#c0ca33!important}.lime8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#afb42b!important}.lime9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#9e9d24!important}.lime10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#827717!important}.yellow.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.yellow6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffeb3b!important}.yellow-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#ffeb3b!important}.yellow-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#ffeb3b!important}.yellow1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fffde7!important}.yellow2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fff9c4!important}.yellow3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fff59d!important}.yellow4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fff176!important}.yellow5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffee58!important}.yellow7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fdd835!important}.yellow8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fbc02d!important}.yellow9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f9a825!important}.yellow10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f57f17!important}.amber.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.amber6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffc107!important}.amber-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#ffc107!important}.amber-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#ffc107!important}.amber1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fff8e1!important}.amber2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffecb3!important}.amber3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffe082!important}.amber4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffd54f!important}.amber5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffca28!important}.amber7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffb300!important}.amber8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffa000!important}.amber9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ff8f00!important}.amber10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ff6f00!important}.orange.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.orange6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ff9800!important}.orange-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#ff9800!important}.orange-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#ff9800!important}.orange1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fff3e0!important}.orange2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffe0b2!important}.orange3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffcc80!important}.orange4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffb74d!important}.orange5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffa726!important}.orange7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fb8c00!important}.orange8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f57c00!important}.orange9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ef6c00!important}.orange10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e65100!important}.deep-orange.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.deep-orange6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ff5722!important}.deep-orange-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#ff5722!important}.deep-orange-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#ff5722!important}.deep-orange1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fbe9e7!important}.deep-orange2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffccbc!important}.deep-orange3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ffab91!important}.deep-orange4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ff8a65!important}.deep-orange5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#ff7043!important}.deep-orange7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f4511e!important}.deep-orange8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e64a19!important}.deep-orange9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#d84315!important}.deep-orange10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#bf360c!important}.brown.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.brown6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#795548!important}.brown-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#795548!important}.brown-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#795548!important}.brown1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#efebe9!important}.brown2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#d7ccc8!important}.brown3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#bcaaa4!important}.brown4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#a1887f!important}.brown5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#8d6e63!important}.brown7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#6d4c41!important}.brown8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#5d4037!important}.brown9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#4e342e!important}.brown10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#3e2723!important}.blue-grey.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.blue-grey6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#607d8b!important}.blue-grey-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#607d8b!important}.blue-grey-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#607d8b!important}.blue-grey1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#eceff1!important}.blue-grey2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#cfd8dc!important}.blue-grey3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#b0bec5!important}.blue-grey4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#90a4ae!important}.blue-grey5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#78909c!important}.blue-grey7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#546e7a!important}.blue-grey8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#455a64!important}.blue-grey9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#37474f!important}.blue-grey10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#263238!important}.grey.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.grey6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#9e9e9e!important}.grey-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:#9e9e9e!important}.grey-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:#9e9e9e!important}.grey1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#fafafa!important}.grey2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#f5f5f5!important}.grey3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#eee!important}.grey4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#e0e0e0!important}.grey5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#bdbdbd!important}.grey7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#757575!important}.grey8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#616161!important}.grey9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#424242!important}.grey10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#212121!important}.horizontal.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.small-divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.medium-divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.large-divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin:1rem 0!important}.large-divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin:1.5rem 0!important}.small-divider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin:.5rem 0!important}.divider.vertical.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-shadow:none!important}.small-elevate.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.elevate.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-shadow:var(--elevate2)!important}.large-elevate.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-shadow:var(--elevate3)!important}.round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:var(---round)}.small-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.medium-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.large-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:var(---round)!important}.top-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.bottom-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.left-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.right-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.medium-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---round:2rem}.small-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---round:.5rem}.large-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---round:3.5rem}.no-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.square.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.top-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.bottom-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.left-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.right-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:0!important}.top-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:50%}:is(button,.button,.chip).circle.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:2.5rem}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-rqh15z:is(.circle,.square)>span.svelte-rqh15z.svelte-rqh15z{display:none}:is(.circle,.square).small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(i,img,video,svg),:is(.circle,.square).chip.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1rem!important}.border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:transparent!important}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.auto-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.tiny-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.small-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.medium-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.large-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.left-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.right-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.top-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.bottom-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.horizontal-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.vertical-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---margin:1rem}.no-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---margin:0}.auto-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---margin:auto}.tiny-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---margin:.25rem}.small-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---margin:.5rem}.large-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---margin:1.5rem}.left-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.horizontal-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-inline-start:var(---margin)!important}.right-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.horizontal-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-inline-end:var(---margin)!important}.top-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.vertical-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-block-start:var(---margin)!important}.bottom-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.vertical-margin.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-block-end:var(---margin)!important}.no-opacity.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:1!important}.opacity.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:0!important}.small-opacity.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:.75!important}.medium-opacity.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:.5!important}.large-opacity.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:.25!important}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.auto-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.tiny-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.small-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.medium-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.large-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.left-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.right-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.top-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.bottom-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.horizontal-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.vertical-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:1rem}.no-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:0}.auto-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:auto}.tiny-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:.25rem}.small-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:.5rem}.large-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:1.5rem}.left-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.horizontal-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{padding-inline-start:var(---padding)!important}.right-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.horizontal-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{padding-inline-end:var(---padding)!important}.top-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.vertical-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{padding-block-start:var(---padding)!important}.bottom-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.vertical-padding.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{padding-block-end:var(---padding)!important}.front.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{z-index:10!important}.back.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{z-index:-10!important}.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-inline-start:0}.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-inline-end:0}.top.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:0}.bottom.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-end:0}.center.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{transform:translate(-50%,-50%)}.scroll.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{overflow:auto}.no-scroll.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{overflow:hidden}.small-width.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:12rem!important}.medium-height.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:24rem!important}.large-height.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:36rem!important}.wrap.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:block;white-space:normal}.no-wrap.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.s),.l.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.s),.m.l.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.m),.l.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.m),.s.l.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.l),.s.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.l),.m.s.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.l){display:none}}h6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}h6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-size:1.5rem}.link.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--primary)!important}.inverse-link.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{color:var(--inverse-primary)!important}.truncate.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z{white-space:nowrap!important}.small-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-size:.75rem}.medium-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-size:.875rem}.large-text.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-size:1rem}.upper.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-transform:uppercase}.lower.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-transform:lowercase}.capitalize.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-transform:capitalize}.bold.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-weight:700}.overline.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-decoration:line-through}.underline.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-decoration:underline}.italic.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{font-style:italic}p.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin:.5rem 0}.no-line.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{line-height:normal}.tiny-line.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{line-height:1.25}.small-line.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{line-height:1.5}.medium-line.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{line-height:1.75}.large-line.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{line-height:2}.extra-line.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{line-height:2.25}.wave.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,.chip.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,.wave.light.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,.wave.row.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,.chip.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,:is(.button,button).none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,:is(.button,button).border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,:is(.button,button).transparent.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,:is(.button,button).none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:after,.no-wave.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(:hover,:active):after{display:none}.badge.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--error);color:var(--error)}.badge.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--outline);color:var(--primary)}.extend.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z{display:none}.extend.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.extend.svelte-rqh15z:is(:hover,.active)>.svelte-rqh15z:is(img,svg)+span.svelte-rqh15z{display:inherit;margin-inline-start:2.5rem}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.button):is([disabled]){pointer-events:none}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.button,button):is([disabled]):before,.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:2rem}article.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.chip.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-color:var(--outline)}.chip.round.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1rem}.chip.round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1.25rem}.chip.round.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}.field.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:3rem;margin-block-end:2rem}.svelte-rqh15z+.field.svelte-rqh15z.svelte-rqh15z{margin-block-start:1rem}.field.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2.5rem}.field.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:3.5rem}.field.extra.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:4rem}.field.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:.25rem .25rem 0 0}.field.border.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:.25rem}.field.round.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1.25rem}.field.round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1.5rem}.field.round.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:1.75rem}.field.round.extra.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:2rem}.field.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-inner-spin-button,input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-outer-spin-button,input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-search-decoration,input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-search-cancel-button,input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-search-results-button,input.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z::-webkit-search-results-decoration{display:none}.field.border.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-rqh15z:not(.border,.round)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-rqh15z:not(.border,.round)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-rqh15z:not(.border,.fill)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select),.field.round.svelte-rqh15z:not(.border)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-rqh15z:not(.border,.fill)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-rqh15z:not(.border,.round)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select),.field.invalid.svelte-rqh15z:not(.border,.round)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select),.field.invalid.border.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:disabled{cursor:not-allowed}.field.small.textarea.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:4.5rem}.field.textarea.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:5.5rem}.field.large.textarea.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:6.5rem}.field.extra.textarea.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:7.5rem}.field.label.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(input,select){padding-block-start:1rem}.field.label.border.svelte-rqh15z:not(.fill)>.svelte-rqh15z.svelte-rqh15z:is(input,select){padding-block-start:0}.field.label.border.prefix.svelte-rqh15z:not(.fill)>.svelte-rqh15z.svelte-rqh15z:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.border.prefix.round.svelte-rqh15z:not(.fill)>.svelte-rqh15z.svelte-rqh15z:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-rqh15z:not(.fill)>.svelte-rqh15z.svelte-rqh15z:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-rqh15z:not(.fill)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-rqh15z:not(.fill)>.svelte-rqh15z.svelte-rqh15z:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.svelte-rqh15z>.error.svelte-rqh15z.svelte-rqh15z{color:var(--error)!important}.field.round.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(.helper,.error){inset-inline-start:1.5rem}.field.invalid.svelte-rqh15z>.helper.svelte-rqh15z.svelte-rqh15z{display:none}.grid.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-rqh15z+.grid.svelte-rqh15z.svelte-rqh15z{margin-block-start:1rem}.grid.no-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---gap:0rem}.grid.medium-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---gap:1.5rem}.grid.large-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---gap:2rem}.s1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 1}.s2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 2}.s3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 3}.s4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 4}.s5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 5}.s6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 6}.s7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 7}.s8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 8}.s9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 9}.s10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 10}.s11.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 11}.s12.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 1}.m2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 2}.m3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 3}.m4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 4}.m5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 5}.m6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 6}.m7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 7}.m8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 8}.m9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 9}.m10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 10}.m11.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 11}.m12.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 1}.l2.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 2}.l3.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 3}.l4.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 4}.l5.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 5}.l6.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 6}.l7.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 7}.l8.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 8}.l9.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 9}.l10.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 10}.l11.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 11}.l12.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{grid-area:auto/span 12}}.absolute.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{position:absolute}.fixed.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{position:fixed}:is(.absolute,.fixed).left.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-rqh15z:is(dialog,menu)>.svelte-rqh15z.svelte-rqh15z:is(header,footer){padding:0;background-color:inherit}article.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:.5rem}:is(img,svg,video).tiny.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:100%;block-size:100%;margin:0 auto}.svelte-rqh15z:is(button,.button,.chip):not(.transparent)>.responsive.svelte-rqh15z.svelte-rqh15z{border:.25rem solid transparent}.svelte-rqh15z:is(button.small,.button.small,.chip)>.responsive.svelte-rqh15z.svelte-rqh15z{inline-size:2rem}.svelte-rqh15z:is(button,.button,.chip.medium)>.responsive.svelte-rqh15z.svelte-rqh15z{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{border-radius:2rem}:is(img,svg,video).empty-state.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{max-inline-size:100%;inline-size:24rem}.svelte-rqh15z:is(button,.button,.chip,.field)>.svelte-rqh15z.svelte-rqh15z:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-rqh15z:is(.tabs) .svelte-rqh15z.svelte-rqh15z:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-rqh15z:is(button,.button,.chip)>.svelte-rqh15z.svelte-rqh15z:is(i,img,svg),.svelte-rqh15z:is(button,.button,.chip)>.responsive.svelte-rqh15z.svelte-rqh15z{margin:0 -.5rem}.svelte-rqh15z:is(button,.button)>.responsive.svelte-rqh15z.svelte-rqh15z{margin-inline-start:-1.5rem}.svelte-rqh15z:is(.circle,.square)>.responsive.svelte-rqh15z.svelte-rqh15z{margin:0}.extend.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.row.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-rqh15z:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-rqh15z.svelte-rqh15z:not(a){margin-block-start:1rem}.svelte-rqh15z:is(nav,.row)>.svelte-rqh15z.svelte-rqh15z,.svelte-rqh15z:is(nav,.row)>.svelte-rqh15z:not(.tooltip,menu)>.svelte-rqh15z{margin-block-start:0;margin-block-end:0}.row.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{gap:0}:is(nav,.row).medium-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{gap:1.5rem}:is(nav,.row).large-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{gap:2rem}.row.wrap.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;flex-wrap:wrap}@media only screen and (max-width: 600px){}.overlay.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:1;visibility:visible}.page.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.svelte-rqh15z:is(.page,dialog):not(.active) .page.active.svelte-rqh15z.svelte-rqh15z{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-rqh15z-to-page ease}.page.active.top.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---transform:translate(0, -4rem)}.page.active.bottom.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---transform:translate(0, 4rem)}.page.active.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---transform:translate(-4rem, 0)}.page.active.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---transform:translate(4rem, 0)}@keyframes svelte-rqh15z-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}@keyframes svelte-rqh15z-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-rqh15z-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.radio.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z,.switch.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-rqh15z:is(.checkbox,.radio)>input.svelte-rqh15z.svelte-rqh15z{inline-size:1.5rem;block-size:1.5rem;opacity:0}.switch.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z{inline-size:3.25rem;block-size:2rem;opacity:0}.svelte-rqh15z:is(.checkbox,.radio,.switch)>span.svelte-rqh15z.svelte-rqh15z{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-rqh15z:is(.checkbox,.radio)>span.svelte-rqh15z.svelte-rqh15z:not(:empty){padding-inline-start:.25rem}.svelte-rqh15z:is(.checkbox,.radio,.switch)>span.svelte-rqh15z.svelte-rqh15z:before{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.switch.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:before{position:absolute;inset-inline-start:0;inset-block-start:50%;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:var(--speed2) all;font-size:1rem;user-select:none;min-inline-size:auto;content:"";color:var(--surface-variant);background-color:var(--outline)}.switch.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:before{transform:translate(-3rem,-50%) scale(.6)}.checkbox.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:before{content:"check_box_outline_blank"}.radio.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:before{content:"radio_button_unchecked"}.checkbox.svelte-rqh15z>input.svelte-rqh15z:checked+span.svelte-rqh15z:before{content:"check_box";font-variation-settings:"FILL" 1}.radio.svelte-rqh15z>input.svelte-rqh15z:checked+span.svelte-rqh15z:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:before{content:""!important;font-variation-settings:unset!important}.svelte-rqh15z:is(.checkbox,.radio)>input.svelte-rqh15z:not(:disabled):is(:focus,:hover)+span.svelte-rqh15z:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.switch.svelte-rqh15z>input.svelte-rqh15z:not(:disabled):is(:focus,:hover)+span.svelte-rqh15z:before{box-shadow:0 0 0 .5rem var(--active)}.svelte-rqh15z:is(.checkbox,.radio)>input.svelte-rqh15z:checked+span.svelte-rqh15z:before{color:var(--primary)}.switch.svelte-rqh15z>input.svelte-rqh15z:checked+span.svelte-rqh15z:after{border:none;background-color:var(--primary)}.switch.svelte-rqh15z>input.svelte-rqh15z:checked+span.svelte-rqh15z:before{content:"check";color:var(--primary);background-color:var(--on-primary)}.switch.svelte-rqh15z>input.svelte-rqh15z:checked+span.svelte-rqh15z:before{transform:translate(-1.75rem,-50%) scale(1)}.svelte-rqh15z:is(.checkbox,.radio,.switch)>input.svelte-rqh15z:disabled+span.svelte-rqh15z{opacity:.5;cursor:not-allowed}.switch.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:after{content:"";position:absolute;inset-inline-start:0;inset-block-start:50%;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem}.switch.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z:after{transform:translate(-3.25rem,-50%)}.field.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-rqh15z>.svelte-rqh15z.svelte-rqh15z:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:4rem}.slider.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:8rem}.slider.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:12rem}.slider.vertical.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:.25rem;background:none;z-index:1;padding:0;margin:0}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z:only-of-type{cursor:pointer;pointer-events:all}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z::-webkit-slider-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z::-moz-range-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z:not(:disabled):is(:focus,:hover)::-webkit-slider-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z:not(:disabled):is(:focus,:hover)::-moz-range-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z:disabled{cursor:not-allowed;opacity:1}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z:disabled::-webkit-slider-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-rqh15z>input.svelte-rqh15z.svelte-rqh15z:disabled::-moz-range-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-rqh15z>input.svelte-rqh15z:disabled~.svelte-rqh15z:is(span,.tooltip){background:#9E9E9E}.slider.svelte-rqh15z>span.svelte-rqh15z.svelte-rqh15z{position:absolute;inset-block-start:calc(50% - .1875rem);block-size:.375rem;border-radius:1rem;background:var(--primary);z-index:0;inset-inline-start:var(---start);inset-inline-end:var(---end)}.slider.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-rqh15z:is(nav,.row,.field)>.slider.svelte-rqh15z.svelte-rqh15z:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{visibility:visible;animation:var(--speed2) svelte-rqh15z-to-snackbar}.snackbar.active.top.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---transform-end:translate(-50%, -1rem)}@keyframes svelte-rqh15z-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:40%}}.tabs.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{padding:0 1rem;gap:2rem}.tabs.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-rqh15z+.tabs.svelte-rqh15z.svelte-rqh15z{margin-block-start:1rem}.tooltip.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:12rem;white-space:normal}.tooltip.large.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{inline-size:16rem;white-space:normal}.svelte-rqh15z:hover>.tooltip.svelte-rqh15z.svelte-rqh15z{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-rqh15z:hover>.tooltip.left.svelte-rqh15z.svelte-rqh15z{transform:translate(-100%,-50%) scale(1)}.svelte-rqh15z:hover>.tooltip.right.svelte-rqh15z.svelte-rqh15z{transform:translate(100%,-50%) scale(1)}.svelte-rqh15z:hover>.tooltip.bottom.svelte-rqh15z.svelte-rqh15z{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---space:0}.tooltip.medium-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---space:-1rem}.tooltip.large-space.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---space:-1.5rem}.tooltip.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-inline-start:var(---space)!important}.tooltip.right.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin-block-end:var(---space)!important}.tooltip.max.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-rqh15z .svelte-rqh15z.svelte-rqh15z:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00000080}.small-blur.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---blur:.5rem}.large-blur.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{---blur:1.5rem}.shadow.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-color:#00000050}.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{background-image:linear-gradient(to bottom,black,transparent)}.description.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{opacity:.8}.question-box.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{margin:1rem 0}.helper.answerLength.svelte-rqh15z.svelte-rqh15z.svelte-rqh15z{text-align:right;width:90%;padding-top:0.65rem}');
}
function Ft(t) {
  let e, r, n, s, l, o, a, i, c = (
    /*answer*/
    t[0].answer.length + ""
  ), h, z, u, d;
  return {
    c() {
      e = L("div"), r = L("input"), s = ie(), l = L("span"), o = me(
        /*errorText*/
        t[3]
      ), a = ie(), i = L("p"), h = me(c), D(r, "type", "text"), D(r, "placeholder", n = /*question*/
      t[1].placeholder || ""), D(r, "class", "svelte-rqh15z"), D(l, "class", "error svelte-rqh15z"), D(i, "class", "answerLength helper svelte-rqh15z"), D(e, "class", z = "field border " + /*error*/
      t[2] + " svelte-rqh15z");
    },
    m(q, f) {
      se(q, e, f), A(e, r), Tt(
        r,
        /*answer*/
        t[0].answer
      ), A(e, s), A(e, l), A(l, o), A(e, a), A(e, i), A(i, h), u || (d = [
        He(
          r,
          "input",
          /*input_input_handler*/
          t[5]
        ),
        He(
          r,
          "input",
          /*check*/
          t[4]
        )
      ], u = !0);
    },
    p(q, f) {
      f & /*question*/
      2 && n !== (n = /*question*/
      q[1].placeholder || "") && D(r, "placeholder", n), f & /*answer*/
      1 && r.value !== /*answer*/
      q[0].answer && Tt(
        r,
        /*answer*/
        q[0].answer
      ), f & /*errorText*/
      8 && ye(
        o,
        /*errorText*/
        q[3]
      ), f & /*answer*/
      1 && c !== (c = /*answer*/
      q[0].answer.length + "") && ye(h, c), f & /*error*/
      4 && z !== (z = "field border " + /*error*/
      q[2] + " svelte-rqh15z") && D(e, "class", z);
    },
    d(q) {
      q && ne(e), u = !1, Me(d);
    }
  };
}
function _n(t) {
  let e, r, n = (
    /*question*/
    t[1].question + ""
  ), s, l, o, a = (
    /*question*/
    (t[1].prompt || "") + ""
  ), i, c, h = (
    /*question*/
    t[1].type == "short_answer" && Ft(t)
  );
  return {
    c() {
      e = L("article"), r = L("h6"), s = me(n), l = ie(), o = L("p"), i = me(a), c = ie(), h && h.c(), D(r, "class", "svelte-rqh15z"), D(o, "class", "description svelte-rqh15z"), D(e, "class", "border question-box svelte-rqh15z");
    },
    m(z, u) {
      se(z, e, u), A(e, r), A(r, s), A(e, l), A(e, o), A(o, i), A(e, c), h && h.m(e, null);
    },
    p(z, [u]) {
      u & /*question*/
      2 && n !== (n = /*question*/
      z[1].question + "") && ye(s, n), u & /*question*/
      2 && a !== (a = /*question*/
      (z[1].prompt || "") + "") && ye(i, a), /*question*/
      z[1].type == "short_answer" ? h ? h.p(z, u) : (h = Ft(z), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i: ue,
    o: ue,
    d(z) {
      z && ne(e), h && h.d();
    }
  };
}
function $n(t, e, r) {
  let { question: n = void 0 } = e, { answer: s = { id: String(n.id), answer: "" } } = e, l, o = "";
  function a(c) {
    Pn(c.target.value, n.type, n.validate) ? (r(2, l = ""), r(3, o = "")) : (r(2, l = "invalid"), r(3, o = `The answer doesn't meet the requirements. (${n.validate.replace(":", "-")})`));
  }
  function i() {
    s.answer = this.value, r(0, s);
  }
  return t.$$set = (c) => {
    "question" in c && r(1, n = c.question), "answer" in c && r(0, s = c.answer);
  }, [s, n, l, o, a, i];
}
class ar extends Zt {
  constructor(e) {
    super(), Xt(this, e, $n, _n, Gt, { question: 1, answer: 0 }, In);
  }
  get question() {
    return this.$$.ctx[1];
  }
  set question(e) {
    this.$$set({ question: e }), pe();
  }
  get answer() {
    return this.$$.ctx[0];
  }
  set answer(e) {
    this.$$set({ answer: e }), pe();
  }
}
Qt(ar, { question: {}, answer: {} }, [], [], !0);
let je;
const Tn = new Uint8Array(16);
function An() {
  if (!je && (je = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !je))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return je(Tn);
}
const S = [];
for (let t = 0; t < 256; ++t)
  S.push((t + 256).toString(16).slice(1));
function Dn(t, e = 0) {
  return S[t[e + 0]] + S[t[e + 1]] + S[t[e + 2]] + S[t[e + 3]] + "-" + S[t[e + 4]] + S[t[e + 5]] + "-" + S[t[e + 6]] + S[t[e + 7]] + "-" + S[t[e + 8]] + S[t[e + 9]] + "-" + S[t[e + 10]] + S[t[e + 11]] + S[t[e + 12]] + S[t[e + 13]] + S[t[e + 14]] + S[t[e + 15]];
}
const En = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ot = {
  randomUUID: En
};
function Rn(t, e, r) {
  if (Ot.randomUUID && !e && !t)
    return Ot.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || An)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    r = r || 0;
    for (let s = 0; s < 16; ++s)
      e[r + s] = n[s];
    return e;
  }
  return Dn(n);
}
function Bn(t) {
  Ut(t, "svelte-1l3zwnm", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}label.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{font-size:.75rem;vertical-align:baseline}i.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm,span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{vertical-align:bottom}button.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}button.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm,i.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm,label.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{user-select:none}.secondary-container.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.right-align.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{text-align:end;justify-content:end!important}.round.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{border-radius:var(---round)}.round.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{---round:2rem}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.circle,.square):not(i,img,video,svg){block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-1l3zwnm:is(.circle,.square)>span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{display:none}:is(.circle,.square).round.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{border-radius:1rem!important}.border.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}h5.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}.svelte-1l3zwnm+h5.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{margin-block-start:1rem}h5.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{font-size:1.75rem}p.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{margin:.5rem 0}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}:is(.button,button).border.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}button.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{border-color:var(--outline);color:var(--primary)}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.button):is([disabled]){pointer-events:none}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.button,button):is([disabled]):before,.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.button,button):is([disabled]):after{display:none}article.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.svelte-1l3zwnm+article.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{margin-block-start:1rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-inner-spin-button,input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-outer-spin-button,input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-search-decoration,input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-search-cancel-button,input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-search-results-button,input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-search-results-decoration{display:none}@media only screen and (min-width: 601px){}@media only screen and (min-width: 993px){}i.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.svelte-1l3zwnm:is(dialog,menu)>.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(header,footer){padding:0;background-color:inherit}article.svelte-1l3zwnm>.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{border-radius:.5rem}.svelte-1l3zwnm:is(button,.button,.chip,.field)>.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-1l3zwnm:is(.tabs) .svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-1l3zwnm:is(button,.button,.chip)>.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(i,img,svg){margin:0 -.5rem}nav.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-1l3zwnm:not(.divider,.small-divider,.medium-divider,.large-divider)+nav.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(.left,.right,.top,.bottom){margin-block-start:1rem}.svelte-1l3zwnm:is(nav,.row)>.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm,.svelte-1l3zwnm:is(nav,.row)>.svelte-1l3zwnm:not(.tooltip,menu)>.svelte-1l3zwnm.svelte-1l3zwnm{margin-block-start:0;margin-block-end:0}nav.svelte-1l3zwnm>.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{margin:0!important;white-space:normal;flex:none}nav.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.left,.right,.top,.bottom){border:0;position:fixed;color:var(--on-surface);transform:none;z-index:100;inset-inline-start:0;inset-block-start:0;inset-block-end:0;inset-inline-end:0;block-size:auto;inline-size:auto;text-align:center;padding:.5rem}nav.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.left,.right){inline-size:5rem;justify-content:start;flex-direction:column;background-color:var(--surface)}nav.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.top,.bottom){block-size:5rem;justify-content:center;flex-direction:row;background-color:var(--surface-container)}nav.right-align.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{justify-content:end}@media only screen and (max-width: 600px){}@keyframes svelte-1l3zwnm-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{position:relative;inline-size:100%;block-size:.5rem;color:var(--primary);background:var(--surface-container-highest);border-radius:0;flex:none;border:none}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(.circle,[value]):after{content:"";position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;clip-path:none;background:currentColor;animation:1.6s svelte-1l3zwnm-to-linear ease infinite}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(.circle,[value])::-moz-progress-bar{animation:1.6s svelte-1l3zwnm-to-linear ease infinite}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(.circle,[value])::-webkit-progress-value{animation:1.6s svelte-1l3zwnm-to-linear ease infinite}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-progress-bar{background:none}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-webkit-progress-value{background:currentColor}progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm::-moz-progress-bar{background:currentColor}.svelte-1l3zwnm:is(nav,.row,.field)>progress.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(.circle,.small,.medium,.large){flex:auto}@keyframes svelte-1l3zwnm-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-1l3zwnm-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.radio.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-1l3zwnm:is(.checkbox,.radio)>input.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{inline-size:1.5rem;block-size:1.5rem;opacity:0}.svelte-1l3zwnm:is(.checkbox,.radio,.switch)>span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-1l3zwnm:is(.checkbox,.radio)>span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:not(:empty){padding-inline-start:.25rem}.svelte-1l3zwnm:is(.checkbox,.radio,.switch)>span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:before,.icon.svelte-1l3zwnm>span.svelte-1l3zwnm>i.svelte-1l3zwnm.svelte-1l3zwnm{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.radio.svelte-1l3zwnm>span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:before{content:"radio_button_unchecked"}.radio.svelte-1l3zwnm>input.svelte-1l3zwnm:checked+span.svelte-1l3zwnm.svelte-1l3zwnm:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-1l3zwnm>span.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:before{content:""!important;font-variation-settings:unset!important}.svelte-1l3zwnm:is(.checkbox,.radio)>input.svelte-1l3zwnm:not(:disabled):is(:focus,:hover)+span.svelte-1l3zwnm.svelte-1l3zwnm:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.svelte-1l3zwnm:is(.checkbox,.radio)>input.svelte-1l3zwnm:checked+span.svelte-1l3zwnm.svelte-1l3zwnm:before,:is(.checkbox,.radio).icon.svelte-1l3zwnm>input.svelte-1l3zwnm:checked+span.svelte-1l3zwnm>i.svelte-1l3zwnm{color:var(--primary)}.icon.svelte-1l3zwnm>input.svelte-1l3zwnm:checked+span.svelte-1l3zwnm>i.svelte-1l3zwnm:first-child,.icon.svelte-1l3zwnm>span.svelte-1l3zwnm>i.svelte-1l3zwnm.svelte-1l3zwnm:last-child{opacity:0}.icon.svelte-1l3zwnm>input.svelte-1l3zwnm:checked+span.svelte-1l3zwnm>i.svelte-1l3zwnm:last-child,.icon.svelte-1l3zwnm>span.svelte-1l3zwnm>i.svelte-1l3zwnm.svelte-1l3zwnm:first-child{opacity:1}.svelte-1l3zwnm:is(.checkbox,.radio,.switch)>input.svelte-1l3zwnm:disabled+span.svelte-1l3zwnm.svelte-1l3zwnm{opacity:.5;cursor:not-allowed}@keyframes svelte-1l3zwnm-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.blur,.small-blur,.medium-blur,.large-blur){---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.csur-container.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{box-shadow:none!important;position:fixed;bottom:1rem;right:1rem;width:450px;max-width:calc(100% - 2rem);opacity:0;transition:opacity .4s;z-index:9999;word-break:break-all;overflow:hidden}article.csur-container.svelte-1l3zwnm .description.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{opacity:.8}.close-btn.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{position:absolute;top:0rem;right:0;margin-top:1.5rem;margin-right:1rem;cursor:pointer}.csur-container.svelte-1l3zwnm h5.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{margin-top:0}.app-progress-bar.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm.svelte-1l3zwnm{position:absolute;width:100%;top:0;left:0;margin-top:1px;border-radius:24px;height:5px}');
}
function Lt(t) {
  let e, r, n, s, l, o = (
    /*data*/
    t[0][0].title + ""
  ), a, i, c, h = (
    /*data*/
    t[0][0].description + ""
  ), z, u, d, q, f, p, k = (
    /*loading*/
    t[4] && St()
  ), m = (
    /*data*/
    t[0][0].type == "simple" && !/*submitted*/
    t[3] && Nt(t)
  );
  function w(C, g) {
    return (
      /*submitted*/
      C[3] ? Fn : On
    );
  }
  let P = w(t), y = P(t);
  return {
    c() {
      e = L("article"), k && k.c(), r = ie(), n = L("label"), n.innerHTML = '<input type="radio" name="radio3_" class="svelte-1l3zwnm"/> <span class="svelte-1l3zwnm"><i class="svelte-1l3zwnm">close</i> <i class="svelte-1l3zwnm">done</i></span>', s = ie(), l = L("h5"), a = me(o), i = ie(), c = L("p"), z = me(h), u = ie(), m && m.c(), d = ie(), y.c(), D(n, "class", "radio icon close-btn svelte-1l3zwnm"), D(l, "class", "svelte-1l3zwnm"), D(c, "class", "description svelte-1l3zwnm"), D(e, "class", "secondary-container csur-container svelte-1l3zwnm"), D(
        e,
        "style",
        /*opacity*/
        t[1]
      );
    },
    m(C, g) {
      se(C, e, g), k && k.m(e, null), A(e, r), A(e, n), A(e, s), A(e, l), A(l, a), A(e, i), A(e, c), A(c, z), A(e, u), m && m.m(e, null), A(e, d), y.m(e, null), q = !0, f || (p = He(
        n,
        "click",
        /*click_handler*/
        t[10]
      ), f = !0);
    },
    p(C, g) {
      /*loading*/
      C[4] ? k || (k = St(), k.c(), k.m(e, r)) : k && (k.d(1), k = null), (!q || g & /*data*/
      1) && o !== (o = /*data*/
      C[0][0].title + "") && ye(a, o), (!q || g & /*data*/
      1) && h !== (h = /*data*/
      C[0][0].description + "") && ye(z, h), /*data*/
      C[0][0].type == "simple" && !/*submitted*/
      C[3] ? m ? (m.p(C, g), g & /*data, submitted*/
      9 && ze(m, 1)) : (m = Nt(C), m.c(), ze(m, 1), m.m(e, d)) : m && (Ht(), Ae(m, 1, 1, () => {
        m = null;
      }), Yt()), P === (P = w(C)) && y ? y.p(C, g) : (y.d(1), y = P(C), y && (y.c(), y.m(e, null))), (!q || g & /*opacity*/
      2) && D(
        e,
        "style",
        /*opacity*/
        C[1]
      );
    },
    i(C) {
      q || (ze(m), q = !0);
    },
    o(C) {
      Ae(m), q = !1;
    },
    d(C) {
      C && ne(e), k && k.d(), m && m.d(), y.d(), f = !1, p();
    }
  };
}
function St(t) {
  let e;
  return {
    c() {
      e = L("progress"), D(e, "class", "app-progress-bar svelte-1l3zwnm");
    },
    m(r, n) {
      se(r, e, n);
    },
    d(r) {
      r && ne(e);
    }
  };
}
function Nt(t) {
  let e, r, n;
  function s(o) {
    t[11](o);
  }
  let l = {
    question: (
      /*data*/
      t[0][0].questions[0]
    )
  };
  return (
    /*ans*/
    t[2][0] !== void 0 && (l.answer = /*ans*/
    t[2][0]), e = new ar({ props: l }), ht.push(() => Cr(e, "answer", s)), {
      c() {
        Pr(e.$$.fragment);
      },
      m(o, a) {
        Wt(e, o, a), n = !0;
      },
      p(o, a) {
        const i = {};
        a & /*data*/
        1 && (i.question = /*data*/
        o[0][0].questions[0]), !r && a & /*ans*/
        4 && (r = !0, i.answer = /*ans*/
        o[2][0], yr(() => r = !1)), e.$set(i);
      },
      i(o) {
        n || (ze(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Ae(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Jt(e, o);
      }
    }
  );
}
function Fn(t) {
  let e;
  return {
    c() {
      e = L("article"), e.innerHTML = '<p class=" svelte-1l3zwnm">Your response has been recorded.</p>', D(e, "class", "border question-box svelte-1l3zwnm");
    },
    m(r, n) {
      se(r, e, n);
    },
    p: ue,
    d(r) {
      r && ne(e);
    }
  };
}
function On(t) {
  let e;
  function r(l, o) {
    if (
      /*data*/
      l[0][0].type == "advanced"
    )
      return Sn;
    if (
      /*data*/
      l[0][0].type == "simple"
    )
      return Ln;
  }
  let n = r(t), s = n && n(t);
  return {
    c() {
      e = L("nav"), s && s.c(), D(e, "class", "right-align svelte-1l3zwnm");
    },
    m(l, o) {
      se(l, e, o), s && s.m(e, null);
    },
    p(l, o) {
      n === (n = r(l)) && s ? s.p(l, o) : (s && s.d(1), s = n && n(l), s && (s.c(), s.m(e, null)));
    },
    d(l) {
      l && ne(e), s && s.d();
    }
  };
}
function Ln(t) {
  let e, r, n;
  return {
    c() {
      e = L("button"), e.textContent = "Submit", D(e, "class", "border round svelte-1l3zwnm");
    },
    m(s, l) {
      se(s, e, l), r || (n = He(
        e,
        "click",
        /*submitQuestion*/
        t[6]
      ), r = !0);
    },
    p: ue,
    d(s) {
      s && ne(e), r = !1, n();
    }
  };
}
function Sn(t) {
  let e;
  return {
    c() {
      e = L("button"), e.textContent = "View", D(e, "class", "border round svelte-1l3zwnm");
    },
    m(r, n) {
      se(r, e, n);
    },
    p: ue,
    d(r) {
      r && ne(e);
    }
  };
}
function Nn(t) {
  let e, r, n = (
    /*data*/
    t[0].length > 0 && Lt(t)
  );
  return {
    c() {
      n && n.c(), e = pr();
    },
    m(s, l) {
      n && n.m(s, l), se(s, e, l), r = !0;
    },
    p(s, [l]) {
      /*data*/
      s[0].length > 0 ? n ? (n.p(s, l), l & /*data*/
      1 && ze(n, 1)) : (n = Lt(s), n.c(), ze(n, 1), n.m(e.parentNode, e)) : n && (Ht(), Ae(n, 1, 1, () => {
        n = null;
      }), Yt());
    },
    i(s) {
      r || (ze(n), r = !0);
    },
    o(s) {
      Ae(n), r = !1;
    },
    d(s) {
      s && ne(e), n && n.d(s);
    }
  };
}
function jn(t, e, r) {
  let { server: n = void 0 } = e, { id: s = void 0 } = e, { domain: l = void 0 } = e;
  if (!n || !s && !l)
    throw new Error("[csur-client]: Please check the required params.");
  let o = [], a = "opacity: 0;", i = "";
  localStorage.getItem("cransurvey-usrid") ? i = localStorage.getItem("cransurvey-usrid") : (i = Rn(), localStorage.setItem("cransurvey-usrid", i)), fetch(`${n}/api/client/get?sid=${s || ""}&domain=${l || ""}`, { method: "GET" }).then((p) => p.json()).then((p) => {
    r(0, o = p.data), setTimeout(
      () => {
        r(1, a = "opacity: 1;");
      },
      100
    );
  });
  function c() {
    r(1, a = "opacity: 0;"), setTimeout(
      () => {
        r(0, o = []);
      },
      400
    );
  }
  let h = [], z, u = !1;
  function d() {
    o[0] && (r(4, u = !0), fetch(`${n}/api/survey/collect`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uniqueId: o[0].id,
        userId: i,
        answers: h
      })
    }).then((p) => p.json()).then((p) => {
      p.code == 0 && (r(3, z = !0), r(4, u = !1), setTimeout(
        () => {
          c();
        },
        2500
      ));
    }));
  }
  const q = () => {
    c();
  };
  function f(p) {
    t.$$.not_equal(h[0], p) && (h[0] = p, r(2, h));
  }
  return t.$$set = (p) => {
    "server" in p && r(7, n = p.server), "id" in p && r(8, s = p.id), "domain" in p && r(9, l = p.domain);
  }, [
    o,
    a,
    h,
    z,
    u,
    c,
    d,
    n,
    s,
    l,
    q,
    f
  ];
}
class ir extends Zt {
  constructor(e) {
    super(), Xt(this, e, jn, Nn, Gt, { server: 7, id: 8, domain: 9 }, Bn);
  }
  get server() {
    return this.$$.ctx[7];
  }
  set server(e) {
    this.$$set({ server: e }), pe();
  }
  get id() {
    return this.$$.ctx[8];
  }
  set id(e) {
    this.$$set({ id: e }), pe();
  }
  get domain() {
    return this.$$.ctx[9];
  }
  set domain(e) {
    this.$$set({ domain: e }), pe();
  }
}
customElements.define("csur-client", Qt(ir, { server: {}, id: {}, domain: {} }, [], [], !0));
const Gn = new ir({
  target: document.getElementsByTagName("csur-client")[0]
});
export {
  Gn as default
};
