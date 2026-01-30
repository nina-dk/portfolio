<script lang="ts">
  export let title: string;
  export let tech: string[] = [];
</script>

<article class="rounded-sm border p-6 backdrop-blur-md hover:backdrop-contrast-110">
  <h3 class="text-xl font-semibold mb-2">{title}</h3>

  <ul class="flex flex-wrap gap-2 mb-4">
    {#each tech as t}
      <li class="text-sm bg-gray-200 px-2 py-1 rounded">{t}</li>
    {/each}
  </ul>

  <div class="prose">
    <slot />
  </div>
</article>
