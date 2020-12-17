<script>
  import { onMount } from "svelte";

  onMount(function () {
    setTimeout(function () {
      window.location.assign("exercise-end");
    }, 5000);
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
    overflow: hidden;
  }

  #background {
    position: absolute;
    left: -480px;
    top: -1080px;
    width: 1920px;
    height: 2160px;
  }

  #background img {
    object-fit: cover;
    filter: blur(3px);
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

  #copyright {
    position: relative;
    top: 300px;
    color: white;
  }
</style>

<div id="container">
  <div id="background"><img src="background2.jpg" alt="background"></div>
  <div id="inner-container">
    <div id="card" />
  </div>
  <div id="copyright">
    This GIF is screen-recorded from Keep® and is for demonstration purpose
    only. In the final product, this can be any kind of exercise demonstrations
    or interative experiences. All rights belong to Keep®.
  </div>
</div>
