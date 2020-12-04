<script>
  // Scripted adapted from https://www.w3schools.com/howto/howto_js_draggable.asp as of 12/3/2020

  import { onMount } from "svelte";

  //Make the DIV element draggagle:
  onMount(function () {
    dragElement(document.getElementById("warning"));
  });

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
</script>

<style>
  @font-face {
    font-family: "Houschka Rounded";
    src: url("/font/Houschka Rounded Medium.ttf");
  }

  #container {
    position: relative;
    width: 960px;
    height: 1080px;
    background-image: url("../background1.jpg");
    background-size: cover;
  }

  #inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 650px;
    height: 350px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  #card {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-color: white;
    border-radius: 80px;
    opacity: 70%;
  }

  .button {
    font-family: "Houschka Rounded";
    font-size: 48px;
    color: white;
    margin: 30px;
    text-decoration: none;
    height: 85px;
    width: 230px;
    border-radius: 30px;
    text-align: center;
    line-height: 85px;
  }

  #exercise {
    background-color: rgb(124, 163, 153);
  }

  #later {
    background-color: rgb(155, 155, 155);
  }

  #warning {
    position: absolute;
    height: 320px;
    top: -120px;
    left: 50%;
    transform: translateX(-48%);
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: 0;
    cursor: grab;
  }

  @keyframes blink {
    0% {
      filter: brightness(1) saturate(100%);
    }
    50% {
      filter: brightness(0.8) saturate(120%);
    }
    100% {
      filter: brightness(1) saturate(100%);
    }
  }

  #tip {
    display: flex;
    flex-direction: row;
    height: 120px;
    width: 400px;
    position: absolute;
    left: 58%;
    top: 21%;
  }

  #pointer {
    height: 120px;
    margin-right: 15px;
  }

  #tip_text {
    font-size: 22px;
    color: white;
    font-family: "Houschka Rounded";
  }
</style>

<div id="container">
  <div id="inner-container">
    <div id="card" />
    <img id="warning" src="warning_tri.png" alt="Warning Triangle" />
    <a href="static-standing" class="button" id="later">Later</a>
    <a href="exercise" class="button" id="exercise">Exercise</a>
  </div>
  <div id="tip">
    <img src="pointer.png" alt="pointer" id="pointer" />
    <div id="tip_text">Move this to keep working anyway</div>
  </div>
</div>
