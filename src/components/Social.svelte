<script>
const { platform, username } = $props();
</script>

<a class="self-center" href={`https://www.${platform}.com/${username}`}>
  <img class="w-8" alt="{platform} icon" src="/{platform}_icon.png" />
</a>

<style>
  img[alt='github icon'] {
    max-width: 1.55em;
  }
</style>
