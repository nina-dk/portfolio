<script lang="ts">
  import menuIcon from '../assets/menu.png'
  let isExpanded: boolean = $state(false);

  function onclick(event: Event) {
    isExpanded = !isExpanded;
  }
</script>


<button
  aria-expanded={isExpanded}
  {onclick}
  aria-controls="main-menu"
  class="menu md:hidden m-5 mt-2 p-2 active:border-2 active:rounded-xl"
  aria-label="menu">
  <img alt="menu icon" class="h-9" src={menuIcon.src} />
</button> 
