import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots, u as onMount } from './client.be080153.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/exercise.svelte";

function create_fragment(ctx) {
  var div3;
  var div1;
  var div0;
  var t0;
  var div2;
  var t1;
  var block = {
    c: function create() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      t1 = text("This GIF is screen-recorded from Keep® and is for demonstration purpose\n    only. In the final product, this can be any kind of exercise demonstrations\n    or interative experiences. All rights belong to Keep®.");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div0).forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      t1 = claim_text(div2_nodes, "This GIF is screen-recorded from Keep® and is for demonstration purpose\n    only. In the final product, this can be any kind of exercise demonstrations\n    or interative experiences. All rights belong to Keep®.");
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "card");
      attr_dev(div0, "class", "svelte-xinc7t");
      add_location(div0, file, 57, 4, 1061);
      attr_dev(div1, "id", "inner-container");
      attr_dev(div1, "class", "svelte-xinc7t");
      add_location(div1, file, 56, 2, 1030);
      attr_dev(div2, "id", "copyright");
      attr_dev(div2, "class", "svelte-xinc7t");
      add_location(div2, file, 59, 2, 1090);
      attr_dev(div3, "id", "container");
      attr_dev(div3, "class", "svelte-xinc7t");
      add_location(div3, file, 55, 0, 1007);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div1);
      append_dev(div1, div0);
      append_dev(div3, t0);
      append_dev(div3, div2);
      append_dev(div2, t1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div3);
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
