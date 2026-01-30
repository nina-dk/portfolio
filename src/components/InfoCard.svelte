<script lang="ts">
  export let title: string;
</script>

<article class="rounded-xl border p-6 hover:backdrop-contrast-110">
  <h3 class="text-xl font-semibold mb-2">{title}</h3>
  <div>
    <slot />
  </div>
</article>
