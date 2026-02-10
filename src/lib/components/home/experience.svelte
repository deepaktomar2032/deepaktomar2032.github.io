<script>
  import Card from '$lib/components/base/card.svelte'
  import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import LowAccentHighlight from '$lib/components/style/low-accent-highlight.svelte'
  import Tag from '../base/tag.svelte'
  import { description, entries } from '$lib/experience'
</script>

<section id="experience">
  <Section
    align="right"
    title="Professional Experience"
    {description}
    buttonText="View CV"
    buttonUrl="/cv"
    buttonColor="secondary"
  >
    <TwoByTwoGrid>
      {#each entries as entry}
        <Card>
          <div slot="content">
            <div class="title">
              <LowAccentHighlight id={entry.id}>{entry.company}</LowAccentHighlight>
            </div>
            <p>{entry.jobTitle}</p>
            <div class="note location">{entry.location}</div>
            <div class="note">{entry.start} - {entry.end}</div>
            <div class="text justify">
              {entry.description}
            </div>
          </div>
          <div slot="footer">
            <div class="tags">
              {#each entry.tags as tag}
                <Tag color={tag.color}>{tag.text}</Tag>
              {/each}
            </div>
          </div>
        </Card>
      {/each}
    </TwoByTwoGrid>
  </Section>
</section>
