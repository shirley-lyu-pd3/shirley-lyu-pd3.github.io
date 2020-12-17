import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots, u as onMount } from './client.d6d014ca.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/warning.svelte";

function create_fragment(ctx) {
  var div5;
  var div0;
  var img0;
  var img0_src_value;
  var t0;
  var div2;
  var div1;
  var t1;
  var img1;
  var img1_src_value;
  var t2;
  var a0;
  var t3;
  var t4;
  var a1;
  var t5;
  var t6;
  var div4;
  var img2;
  var img2_src_value;
  var t7;
  var div3;
  var t8;
  var block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      img0 = element("img");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      t1 = space();
      img1 = element("img");
      t2 = space();
      a0 = element("a");
      t3 = text("Later");
      t4 = space();
      a1 = element("a");
      t5 = text("Exercise");
      t6 = space();
      div4 = element("div");
      img2 = element("img");
      t7 = space();
      div3 = element("div");
      t8 = text("Move this to keep working anyway");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        id: true,
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      img1 = claim_element(div2_nodes, "IMG", {
        id: true,
        src: true,
        alt: true,
        class: true
      });
      t2 = claim_space(div2_nodes);
      a0 = claim_element(div2_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "Later");
      a0_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      a1 = claim_element(div2_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "Exercise");
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        id: true,
        class: true
      });
      var div4_nodes = children(div4);
      img2 = claim_element(div4_nodes, "IMG", {
        src: true,
        alt: true,
        id: true,
        class: true
      });
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      t8 = claim_text(div3_nodes, "Move this to keep working anyway");
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img0.src !== (img0_src_value = "background2.jpg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "background");
      attr_dev(img0, "class", "svelte-1d3zund");
      add_location(img0, file, 195, 23, 3668);
      attr_dev(div0, "id", "background");
      attr_dev(div0, "class", "svelte-1d3zund");
      add_location(div0, file, 195, 2, 3647);
      attr_dev(div1, "id", "card");
      attr_dev(div1, "class", "svelte-1d3zund");
      add_location(div1, file, 197, 4, 3754);
      attr_dev(img1, "id", "warning");
      if (img1.src !== (img1_src_value = "warning_tri.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Warning Triangle");
      attr_dev(img1, "class", "svelte-1d3zund");
      add_location(img1, file, 198, 4, 3776);
      attr_dev(a0, "href", "static-standing");
      attr_dev(a0, "class", "button svelte-1d3zund");
      attr_dev(a0, "id", "later");
      add_location(a0, file, 199, 4, 3846);
      attr_dev(a1, "href", "exercise");
      attr_dev(a1, "class", "button svelte-1d3zund");
      attr_dev(a1, "id", "exercise");
      add_location(a1, file, 200, 4, 3912);
      attr_dev(div2, "id", "inner-container");
      attr_dev(div2, "class", "svelte-1d3zund");
      add_location(div2, file, 196, 2, 3723);
      if (img2.src !== (img2_src_value = "pointer.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "pointer");
      attr_dev(img2, "id", "pointer");
      attr_dev(img2, "class", "svelte-1d3zund");
      add_location(img2, file, 203, 4, 4003);
      attr_dev(div3, "id", "tip_text");
      attr_dev(div3, "class", "svelte-1d3zund");
      add_location(div3, file, 204, 4, 4060);
      attr_dev(div4, "id", "tip");
      attr_dev(div4, "class", "svelte-1d3zund");
      add_location(div4, file, 202, 2, 3984);
      attr_dev(div5, "id", "container");
      attr_dev(div5, "class", "svelte-1d3zund");
      add_location(div5, file, 194, 0, 3624);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, div0);
      append_dev(div0, img0);
      append_dev(div5, t0);
      append_dev(div5, div2);
      append_dev(div2, div1);
      append_dev(div2, t1);
      append_dev(div2, img1);
      append_dev(div2, t2);
      append_dev(div2, a0);
      append_dev(a0, t3);
      append_dev(div2, t4);
      append_dev(div2, a1);
      append_dev(a1, t5);
      append_dev(div5, t6);
      append_dev(div5, div4);
      append_dev(div4, img2);
      append_dev(div4, t7);
      append_dev(div4, div3);
      append_dev(div3, t8);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
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

function dragElement(elmnt) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Warning", slots, []);
  onMount(function () {
    dragElement(document.getElementById("warning"));
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Warning> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      dragElement: dragElement
    };
  };

  return [];
}

var Warning = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Warning, _SvelteComponentDev);

  var _super = _createSuper(Warning);

  function Warning(options) {
    var _this;

    _classCallCheck(this, Warning);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Warning",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Warning;
}(SvelteComponentDev);

export default Warning;
