<script lang='ts'>
import Navigation from './Navigation.svelte';
import Menu from './Menu.svelte';

export let lang: 'en' | 'el';
</script>

<header>
  <nav class="text-end">
    <Menu />
    <Navigation lang={lang} />
  </nav>
</header>
