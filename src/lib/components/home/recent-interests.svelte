<script>
  import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import InterestPostCard from '$lib/components/base/interest-post-card.svelte'
  import { interests, description } from '$lib/data/interests'

  const recentInterests = interests.slice(0, 4)
</script>

<section id="recent-interests">
  <Section title="Interests" {description} buttonText="View Interests" buttonUrl="/interests">
    <TwoByTwoGrid>
      {#each recentInterests as interest}
        <InterestPostCard {interest} showImage={false} />
      {/each}
    </TwoByTwoGrid>
  </Section>
</section>
