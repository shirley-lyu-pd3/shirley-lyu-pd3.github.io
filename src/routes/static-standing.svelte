<style>
  #container {
    position: relative;
    width: 960px;
    height: 1080px;
    background-image: url("../background2.jpg");
    background-size: cover;
    overflow: hidden;
  }

  .window {
    width: 640px;
    height: 360px;
    border-radius: 16px;
    position: absolute;
  }

  #research {
    top: 30px;
    left: 160px;
    background-image: url("../research.png");
    background-size: cover;
  }

  #word {
    top: 340px;
    left: -520px;
    background-image: url("../word.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }

  #music {
    top: 380px;
    right: -520px;
    background-image: url("../music.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
  }

  #layout {
    top: 480px;
    left: 160px;
    background-image: url("../layout.GIF");
    background-size: cover;
  }
</style>

<div id="container">
  <div class="window" id="research" />
  <div class="window" id="word" />
  <div class="window" id="music" />
  <div class="window" id="layout" />
</div>
