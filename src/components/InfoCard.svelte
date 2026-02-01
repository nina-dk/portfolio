<script lang="ts">
  export let title: string;
</script>

<article class="rounded-md shadow-lg border p-6 hover:backdrop-contrast-115">
  <h3 class="text-xl font-semibold mb-2">{title}</h3>
  <div>
    <slot />
  </div>
</article>
