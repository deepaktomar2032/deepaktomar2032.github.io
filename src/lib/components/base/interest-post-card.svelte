<script>
  import Card from '$lib/components/base/card.svelte'
  export let interest
</script>

{#if interest}
  <Card>
    <div slot="content">
      {#if interest.year}
        <div class="meta">{interest.year}</div>
      {/if}
      <div class="title">{interest.title}</div>
      {#if interest.description}
        <div class="text">{interest.description}</div>
      {/if}
    </div>
  </Card>
{/if}

<style lang="scss">
  .meta {
    font-size: 0.8rem;
    color: var(--text-light-color);
    margin-bottom: 0.25rem;
  }
  .title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  .text {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-light-color);
  }
</style>
