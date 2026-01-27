<script lang="ts">
import Social from './Social.svelte';

const socials: { [index: string]: string } = {
  github: 'nina-dk',
  linkedin: 'in/antonina-kallinteri-400093219',
};
</script>

<footer>
  <div class="socials">
    {#each Object.keys(socials) as platform}
      <Social platform={platform} username={socials[platform]} />
    {/each}
  </div>
  <p class="attribution">
    <a href="https://www.flaticon.com/free-icons/checklist" title="checklist icons"
      >Checklist icons created by Mohamed Mbarki - Flaticon</a>
  </p>
</footer>

<style>
  .socials {
    display: flex;
    gap: 1rem;
  }

  .attribution {
    font-size: small;
  }
</style>
