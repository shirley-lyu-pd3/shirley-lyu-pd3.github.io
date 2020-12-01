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
    animation: research_movement 45s linear 1s 1;
  }

  #word {
    top: 340px;
    left: -520px;
    background-image: url("../word.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    animation: side_movement 45s linear 1s 1;
  }

  #music {
    top: 380px;
    right: -520px;
    background-image: url("../music.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    animation: side_movement 45s linear 1s 1;
  }

  #layout {
    top: 480px;
    left: 160px;
    background-image: url("../layout.GIF");
    background-size: cover;
    animation: main_movement 45s linear 1s 1;
  }

  @keyframes research_movement {
    0% {
      transform: translateX(0);
    }
    8% {
      transform: translateX(-700px);
    }
    22% {
      transform: translateX(-700px);
    }
    44% {
      transform: translateX(-700px);
    }
    67% {
      transform: translateX(0);
    }
    78% {
      transform: translateX(0);
    }
  }

  @keyframes side_movement {
    0% {
      transform: translateY(0);
    }
    22% {
      transform: translateY(200px);
    }
    44% {
      transform: translateY(200px);
    }
    67% {
      transform: translateY(-200px);
    }
    78% {
      transform: translateY(-200px);
    }
  }

  @keyframes main_movement {
    0% {
      transform: translateY(0);
    }
    22% {
      transform: translateY(-400px);
    }
    44% {
      transform: translateY(-400px);
    }
    67% {
      transform: translateY(200px);
    }
    78% {
      transform: translateY(200px);
    }
  }
</style>

<div id="container">
  <div class="window" id="research" />
  <div class="window" id="word" />
  <div class="window" id="music" />
  <div class="window" id="layout" />
</div>
