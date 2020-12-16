import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, h as claim_element, j as children, l as detach_dev, m as claim_space, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.be2afd0b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/static-sitting.svelte";

function create_fragment(ctx) {
  var div6;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div5;
  var div1;
  var t1;
  var div2;
  var t2;
  var div3;
  var t3;
  var div4;
  var block = {
    c: function create() {
      div6 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div5 = element("div");
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      t2 = space();
      div3 = element("div");
      t3 = space();
      div4 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div6 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", {
        id: true,
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        id: true,
        class: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div2).forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div3).forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div4).forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "background2.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "background");
      attr_dev(img, "class", "svelte-9mt14s");
      add_location(img, file, 317, 23, 11067);
      attr_dev(div0, "id", "background");
      attr_dev(div0, "class", "svelte-9mt14s");
      add_location(div0, file, 317, 2, 11046);
      attr_dev(div1, "class", "window svelte-9mt14s");
      attr_dev(div1, "id", "research");
      add_location(div1, file, 319, 4, 11153);
      attr_dev(div2, "class", "window svelte-9mt14s");
      attr_dev(div2, "id", "word");
      add_location(div2, file, 320, 4, 11194);
      attr_dev(div3, "class", "window svelte-9mt14s");
      attr_dev(div3, "id", "music");
      add_location(div3, file, 321, 4, 11231);
      attr_dev(div4, "class", "window layout svelte-9mt14s");
      add_location(div4, file, 322, 4, 11269);
      attr_dev(div5, "id", "inner-container");
      attr_dev(div5, "class", "svelte-9mt14s");
      add_location(div5, file, 318, 2, 11122);
      attr_dev(div6, "id", "container");
      attr_dev(div6, "class", "svelte-9mt14s");
      add_location(div6, file, 316, 0, 11023);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div6, anchor);
      append_dev(div6, div0);
      append_dev(div0, img);
      append_dev(div6, t0);
      append_dev(div6, div5);
      append_dev(div5, div1);
      append_dev(div5, t1);
      append_dev(div5, div2);
      append_dev(div5, t2);
      append_dev(div5, div3);
      append_dev(div5, t3);
      append_dev(div5, div4);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div6);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Static_sitting", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Static_sitting> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Static_sitting = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Static_sitting, _SvelteComponentDev);

  var _super = _createSuper(Static_sitting);

  function Static_sitting(options) {
    var _this;

    _classCallCheck(this, Static_sitting);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Static_sitting",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Static_sitting;
}(SvelteComponentDev);

export default Static_sitting;
