<script>
  import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import QuotePostCard from '$lib/components/base/quote-post-card.svelte'
  import { description } from '$lib/data/quotes'
  export let quotes = []
</script>

<section id="recent-quotes">
  <Section align="left" title="Inspiring Quotes" {description} buttonText="View all Quotes" buttonUrl="/quotes">
    <TwoByTwoGrid>
      {#each quotes as quote}
        <QuotePostCard {quote} showImage={false} />
      {/each}
    </TwoByTwoGrid>
  </Section>
</section>
