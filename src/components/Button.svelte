<script>
  export let activated = false;

  function click() {
    activated = !activated;
  }
</script>

<style>
  #button {
    transition: background-color 0.4s cubic-bezier(0.66, 0, 0.34, 1);
    height: 40px;
    width: 90px;
    align-self: center;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
  }

  #circle {
    transition: transform 0.4s cubic-bezier(0.66, 0, 0.34, 1);
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: white;
    align-self: center;
    margin: 5px;
  }
</style>

<div
  id="button"
  style="background-color: rgb{activated ? '(124, 166, 154)' : '(194, 125, 120)'}"
  on:click={click}>
  <div id="circle" style="transform: {activated ? 'translateX(50px)' : ''}" />
</div>
