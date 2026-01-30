<script lang="ts">
import Social from './Social.svelte';

const socials: { [index: string]: string } = {
  github: 'nina-dk',
  linkedin: 'in/antonina-kallinteri-400093219',
};
</script>

<footer class="mt-10 mb-4">
  <div class="flex gap-x-2 mb-2">
    {#each Object.keys(socials) as platform}
      <Social platform={platform} username={socials[platform]} />
    {/each}
  </div>
  <p class="text-xs mb-1">
    <a href="https://www.flaticon.com/free-icons/checklist" title="checklist icons">
      Checklist icons created by Mohamed Mbarki - Flaticon</a>
  </p>
</footer>
