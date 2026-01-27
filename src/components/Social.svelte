<script>
const { platform, username } = $props();
</script>

<a href={`https://www.${platform}.com/${username}`}>{platform}</a>

<style>
  a {
    text-decoration: none;
    text-transform: capitalize;
  }
</style>
