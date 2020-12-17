import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.d6d014ca.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/exercise-end.svelte";

function create_fragment(ctx) {
  var div4;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div3;
  var div1;
  var t1;
  var div2;
  var a0;
  var t2;
  var t3;
  var a1;
  var t4;
  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      a0 = element("a");
      t2 = text("Continue");
      t3 = space();
      a1 = element("a");
      t4 = text("Work");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
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
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "Continue");
      a0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      a1 = claim_element(div2_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "Work");
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "background1.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "background");
      attr_dev(img, "class", "svelte-1x8d4ja");
      add_location(img, file, 85, 23, 1364);
      attr_dev(div0, "id", "background");
      attr_dev(div0, "class", "svelte-1x8d4ja");
      add_location(div0, file, 85, 2, 1343);
      attr_dev(div1, "id", "card");
      attr_dev(div1, "class", "svelte-1x8d4ja");
      add_location(div1, file, 87, 4, 1448);
      attr_dev(a0, "href", "exercise");
      attr_dev(a0, "class", "button svelte-1x8d4ja");
      attr_dev(a0, "id", "continue");
      add_location(a0, file, 89, 6, 1492);
      attr_dev(a1, "href", "work-mode-selection");
      attr_dev(a1, "class", "button svelte-1x8d4ja");
      attr_dev(a1, "id", "work");
      add_location(a1, file, 90, 6, 1559);
      attr_dev(div2, "id", "flex");
      attr_dev(div2, "class", "svelte-1x8d4ja");
      add_location(div2, file, 88, 4, 1470);
      attr_dev(div3, "id", "inner-container");
      attr_dev(div3, "class", "svelte-1x8d4ja");
      add_location(div3, file, 86, 2, 1417);
      attr_dev(div4, "id", "container");
      attr_dev(div4, "class", "svelte-1x8d4ja");
      add_location(div4, file, 84, 0, 1320);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div0, img);
      append_dev(div4, t0);
      append_dev(div4, div3);
      append_dev(div3, div1);
      append_dev(div3, t1);
      append_dev(div3, div2);
      append_dev(div2, a0);
      append_dev(a0, t2);
      append_dev(div2, t3);
      append_dev(div2, a1);
      append_dev(a1, t4);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
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
  validate_slots("Exercise_end", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Exercise_end> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Exercise_end = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Exercise_end, _SvelteComponentDev);

  var _super = _createSuper(Exercise_end);

  function Exercise_end(options) {
    var _this;

    _classCallCheck(this, Exercise_end);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Exercise_end",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Exercise_end;
}(SvelteComponentDev);

export default Exercise_end;
