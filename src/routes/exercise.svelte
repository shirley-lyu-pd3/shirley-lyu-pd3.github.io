<script>
  import { onMount } from "svelte";

  onMount(function () {
    setTimeout(function () {
      window.location.assign("exercise-end");
    }, 2900);
  });
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
    background-image: url("../background2.jpg");
    background-size: cover;
  }

  #inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 650px;
    height: 700px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  #card {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-image: url("../exercise.gif");
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 80px;
  }
</style>

<div id="container">
  <div id="inner-container">
    <div id="card" />
  </div>
</div>
