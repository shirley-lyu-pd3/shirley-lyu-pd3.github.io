<script>
  import Button from "../components/Button.svelte";
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
    position: relative;
    width: 800px;
    height: 600px;
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
    border-radius: 120px;
    opacity: 70%;
  }

  #title {
    font-family: "Houschka Rounded";
    margin-top: 50px;
    height: 100px;
    width: 100%;
    text-align: center;
    font-size: 64px;
  }

  #setting {
    margin-top: 50px;
  }

  #first {
    border-bottom: 2px solid black;
  }

  .setting-item {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    margin-right: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 30px;
  }

  .setting-text {
    font-family: "Houschka Rounded";
    align-self: center;
    justify-self: flex-start;
    margin-right: auto;
  }
</style>

<div id="container">
  <div id="inner-container">
    <div id="card" />
    <div id="title">Setting</div>
    <div id="setting">
      <div id="first" class="setting-item">
        <div class="setting-text">Message Mode</div>
        <Button />
      </div>
      <div id="second" class="setting-item">
        <div class="setting-text">Long-time Working Mode</div>
        <Button />
      </div>
    </div>
  </div>
</div>
