import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots, u as onMount } from './client.d6d014ca.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/exercise.svelte";

function create_fragment(ctx) {
  var div4;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div2;
  var div1;
  var t1;
  var div3;
  var t2;
  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      t1 = space();
      div3 = element("div");
      t2 = text("This GIF is screen-recorded from Keep® and is for demonstration purpose\n    only. In the final product, this can be any kind of exercise demonstrations\n    or interative experiences. All rights belong to Keep®.");
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
      div2 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div1).forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      t2 = claim_text(div3_nodes, "This GIF is screen-recorded from Keep® and is for demonstration purpose\n    only. In the final product, this can be any kind of exercise demonstrations\n    or interative experiences. All rights belong to Keep®.");
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "background2.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "background");
      attr_dev(img, "class", "svelte-1iv0lff");
      add_location(img, file, 69, 23, 1194);
      attr_dev(div0, "id", "background");
      attr_dev(div0, "class", "svelte-1iv0lff");
      add_location(div0, file, 69, 2, 1173);
      attr_dev(div1, "id", "card");
      attr_dev(div1, "class", "svelte-1iv0lff");
      add_location(div1, file, 71, 4, 1278);
      attr_dev(div2, "id", "inner-container");
      attr_dev(div2, "class", "svelte-1iv0lff");
      add_location(div2, file, 70, 2, 1247);
      attr_dev(div3, "id", "copyright");
      attr_dev(div3, "class", "svelte-1iv0lff");
      add_location(div3, file, 73, 2, 1307);
      attr_dev(div4, "id", "container");
      attr_dev(div4, "class", "svelte-1iv0lff");
      add_location(div4, file, 68, 0, 1150);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div0, img);
      append_dev(div4, t0);
      append_dev(div4, div2);
      append_dev(div2, div1);
      append_dev(div4, t1);
      append_dev(div4, div3);
      append_dev(div3, t2);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Exercise", slots, []);
  onMount(function () {
    setTimeout(function () {
      window.location.assign("exercise-end");
    }, 5000);
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Exercise> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount
    };
  };

  return [];
}

var Exercise = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Exercise, _SvelteComponentDev);

  var _super = _createSuper(Exercise);

  function Exercise(options) {
    var _this;

    _classCallCheck(this, Exercise);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Exercise",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Exercise;
}(SvelteComponentDev);

export default Exercise;
