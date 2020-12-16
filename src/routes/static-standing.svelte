<style lang="postcss">
  #container {
    position: relative;
    width: 960px;
    height: 1080px;
    background-image: url("../background2.jpg");
    background-size: cover;
    overflow: hidden;
  }

  #background {
    position: absolute;
    left: -530px;
    top: 0;
    width: 1920px;
    height: 2160px;
  }

  #background img {
    object-fit: cover;
    filter: blur(3px);
    animation: item-swing 5s;
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
    animation: item-swing 5s;
  }

  #word {
    top: 340px;
    left: -220px;
    width: 335px;
    background-image: url("../word.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    animation: item-swing 5s, word-ring 5s;
  }

  #music {
    top: 380px;
    right: -520px;
    background-image: url("../music.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    animation: item-swing 5s;
  }

  #layout {
    top: 480px;
    left: 160px;
    background-image: url("../layout.GIF");
    background-size: cover;
    animation: item-swing 5s, layout-ring 5s;
    @apply ring-4 ring-green ring-opacity-50;
  }

  @keyframes layout-ring {
    49% {
      @apply ring-4 ring-green ring-opacity-50;
    }

    50% {
      @apply ring-0;
    }

    79% {
      @apply ring-0;
    }

    80% {
      @apply ring-4 ring-green ring-opacity-50;
    }
  }

  @keyframes word-ring {
    49% {
      @apply ring-0;
    }

    50% {
      @apply ring-4 ring-green ring-opacity-50;
    }

    79% {
      @apply ring-4 ring-green ring-opacity-50;
    }

    80% {
      @apply ring-0;
    }
  }

  @keyframes item-swing {
    0% {
      transform: translateX(0);
    }

    45% {
      transform: translateX(0);
    }

    55% {
      transform: translateX(500px);
    }

    75% {
      transform: translateX(500px);
    }

    85% {
      transform: translateX(0);
    }
  }
</style>

<div id="container">
  <div id="background">
    <img src="background2.jpg" alt="background">
  </div>
  <div class="window" id="research" />
  <div class="window" id="word" />
  <div class="window" id="music" />
  <div class="window" id="layout" />
</div>
