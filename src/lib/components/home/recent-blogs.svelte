<script>
  import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import BlogPostCard from '$lib/components/base/blog-post-card.svelte'
  import { blogsDescription } from '$lib/data/blogs-meta'
  export let blogs = []
</script>

<section id="recent-blogs">
  <Section
    align="right"
    title="Latest blogs"
    description={blogsDescription}
    buttonText="View all blogs"
    buttonUrl="/blogs"
  >
    <TwoByTwoGrid>
      {#each blogs as blog}
        <BlogPostCard {blog} showImage={false} />
      {/each}
    </TwoByTwoGrid>
  </Section>
</section>
