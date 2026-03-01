<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import BlogGrid from '$lib/components/layout/3-2-1-grid.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import BlogPostCard from '$lib/components/base/blog-post-card.svelte'

  export let data

  let { blogs } = data
</script>

<Mainlayout>
  <section id="blog">
    <Section align="top" title="All blogs">
      <div class="container">
        <BlogGrid>
          {#each blogs as blog}
            <BlogPostCard {blog} />
          {/each}
        </BlogGrid>
      </div>
    </Section>
  </section>
</Mainlayout>
