<script lang="ts">
  export let title: string;
</script>

<article class="lg:flex-1 rounded-2xl shadow-2xl p-6 hover:scale-105 hover:backdrop-contrast-120">
  <h3 class="text-xl font-semibold mb-2">{title}</h3>
  <div>
    <slot />
  </div>
</article>
