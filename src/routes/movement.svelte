<style lang="postcss">
  #container {
    position: relative;
    width: 960px;
    height: 1080px;
    overflow: hidden;
  }

  #background {
    position: absolute;
    left: -530px;
    top: -1080px;
    width: 1920px;
    height: 2160px;
  }

  #background img {
    object-fit: cover;
    filter: blur(3px);
    animation: bg_movement linear 10s 1s forwards;
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
    animation: research_movement linear 10s 1s forwards;
  }

  #word {
    top: 340px;
    left: -520px;
    background-image: url("../word.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    animation: side_movement linear 10s 1s forwards;
  }

  #music {
    top: 380px;
    right: -520px;
    background-image: url("../music.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    animation: side_movement linear 10s 1s forwards;
  }

  #layout {
    top: 430px;
    left: 160px;
    background-image: url("../layout.GIF");
    background-size: cover;
    @apply ring-4 ring-green ring-opacity-50;
  }

  @keyframes research_movement {
    0% {
      transform: translateX(0);
    }
    80% {
      transform: translateX(-700px) translateY(60px);
    }
    100% {
      transform: translateX(-700px) translateY(120px);
    }
  }

  @keyframes side_movement {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(300px);
    }
  }

  @keyframes bg_movement {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(350px);
    }
  }
</style>

<div id="container">
  <div id="background"><img src="background2.jpg" alt="background" /></div>
  <div class="window" id="research" />
  <div class="window" id="word" />
  <div class="window" id="music" />
  <div class="window" id="layout" />
</div>
