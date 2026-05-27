<script>
  import Card from '$lib/components/base/card.svelte'
  import Tag from './tag.svelte'
  export let quote
</script>

{#if quote}
  <Card>
    <div slot="content" class="quote-content">
      <div class="quote-mark">"</div>
      <p class="excerpt">{quote.excerpt}</p>
      {#if quote.title}
        <div class="label">{quote.title}</div>
      {/if}
    </div>
    <div slot="footer">
      {#if quote.tags}
        <div class="tags">
          {#each quote.tags.slice(0, 2) as tag}
            <Tag>{tag}</Tag>
          {/each}
        </div>
      {/if}
    </div>
  </Card>
{/if}

<style lang="scss">
  .quote-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 4px;
  }

  .quote-mark {
    font-size: 2.4rem;
    line-height: 1;
    color: var(--primary-color);
    opacity: 0.4;
    font-family: Georgia, serif;
    margin-bottom: -8px;
  }

  .excerpt {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.65;
    font-style: italic;
    color: var(--text-color);
  }

  .label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-light-color);
    margin-top: 4px;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }
</style>
