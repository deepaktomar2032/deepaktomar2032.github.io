<script>
  export let alt
  export let path = null
  export let filename
  export let figcaption = null

  let imageSrc

  $: imageSrc = `/optimized-images/${path ? path + '/' : ''}${filename}`
</script>

<picture>
  <img src="{imageSrc}.png" {alt} loading="lazy" decoding="async" />

  {#if figcaption}
    <!-- svelte-ignore a11y-structure -->
    <figcaption>{@html figcaption}</figcaption>
  {/if}
</picture>

<style lang="scss">
  picture {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
