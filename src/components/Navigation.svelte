<script lang="ts">
  export let lang: 'en' | 'el';
  const [flag, path] = lang === 'en' ? ['Ελληνικά 🇬🇷', '/el'] : ['English 🇺🇸', '/'];
</script>

<div id="main-menu" class="nav-links md:flex hidden justify-end gap-11 mr-5 mt-5 mb-10 transition transition-discrete">
  <a class="text-lg rounded-lg p-3 hover:font-bold" href="#">Home</a>
  <a class="text-lg rounded-lg p-3 hover:font-bold" href="#about">About</a>
  <a class="text-lg rounded-lg p-3 hover:font-bold" href="#projects">Projects</a>
  <a class="text-lg rounded-lg p-3 hover:font-bold" href="#contact">Contact</a>
  <a class="text-lg rounded-lg p-3 hover:font-bold" href={path}>{flag}</a>
</div>
