<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import BlogGrid from '$lib/components/layout/3-2-1-grid.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import QuotePostCard from '$lib/components/base/quote-post-card.svelte'

  import { title } from '$lib/data/quotes'

  export let data
  let { quotes } = data
</script>

<Mainlayout>
  <section id="quote">
    <Section align="top" {title}>
      <div class="container">
        <BlogGrid>
          {#each quotes as quote}
            <QuotePostCard {quote} />
          {/each}
        </BlogGrid>
      </div>
    </Section>
  </section>
</Mainlayout>
