<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import neighbourhoodRecPath from '../assets/neighbourhood-rec.mp4';
  import phonebookRecPath from '../assets/phonebook-rec.mp4';
  import weatherAppRecPath from '../assets/weather-app-rec.mp4';
  import todoListRecPath from '../assets/todolist-rec.mp4';
  import portfolioRecPath from '../assets/portfolio-rec.mp4';

  export let title: string;
  export let tech: string[] = [];
  const orderClass = title.includes('Neighbourhood') ? 'order-first' : '';
  const videoPaths = [
    neighbourhoodRecPath,
    phonebookRecPath,
    weatherAppRecPath,
    todoListRecPath,
    portfolioRecPath
  ];
  const path =
    videoPaths.find(path => {
      return path.includes(title.split(' ')[0].toLowerCase());
    }) || '';

  let video: HTMLVideoElement;
  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;

        if (entry.isIntersecting) video.play();
        else video.pause();
      },
      { threshold: 0.3 },
    );

    if (video) observer.observe(video);
  });

  onDestroy(() => {
    observer?.disconnect();
  });
</script>

<article
  class="{orderClass} rounded-md shadow-lg p-6 backdrop-blur-md hover:scale-105 hover:backdrop-contrast-115"
>
  <h3 class="mb-2">{title}</h3>
  <ul class="flex flex-wrap gap-2 mb-4 list-inside">
    {#each tech as t}
      <li class="text-sm bg-gray-200 pr-2 py-1 rounded">{t}</li>
    {/each}
  </ul>

  {#if path}
    <video
      bind:this={video}
      aria-label="Short demo clip for {title} project"
      preload="metadata"
      class="m-auto mt-6 max-h-50 rounded-lg"
      playsinline
      loop
      muted
      controls
      controlsList="nofullscreen nodownload"
    >
      <source src={path} type="video/mp4" />
      <track kind="captions" />
      <p>
        Your browser doesn't support HTML video. Here is a
        <a href={path}>link to the video</a> instead.
      </p>
    </video>
  {/if}

  <div class="prose">
    <slot />
  </div>
</article>
