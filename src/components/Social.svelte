<script>
  import ghIcon from '../assets/github_icon.png';
  import linkedinIcon from '../assets/linkedin_icon.png';

  const { platform, username } = $props();
</script>

<a class="self-center" href={`https://www.${platform}.com/${username}`}>
  <img
    class="w-8"
    alt="{platform} icon"
    src={platform === 'github' ? ghIcon.src : linkedinIcon.src}
  />
</a>

<style>
  img[alt='github icon'] {
    max-width: 1.55em;
  }
</style>
