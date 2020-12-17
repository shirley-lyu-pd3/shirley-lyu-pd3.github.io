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
    position: relative;
    width: 650px;
    height: 350px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  #flex {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding-top: 170px;
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

  #standing {
    background-color: rgb(124, 163, 153);
  }

  #standing:active {
    background-color: rgb(95, 120, 110);
  }

  #sitting {
    background-color: rgb(155, 155, 155);
  }

  #sitting:active {
    background-color: rgb(135, 135, 135);
  }
</style>

<div id="container">
  <div id="background"><img src="background1.jpg" alt="background"></div>
  <div id="inner-container">
    <div id="card" />
    <div id="flex">
      <a href="static-standing" class="button" id="standing">Standing</a>
      <a href="static-sitting" class="button" id="sitting">Sitting</a>
    </div>
  </div>
</div>
