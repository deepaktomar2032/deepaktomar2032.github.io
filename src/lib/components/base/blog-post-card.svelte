<script>
  import Card from '$lib/components/base/card.svelte'
  import Image from '$lib/components/base/image.svelte'

  export let blog
  export let showImage = true
</script>

{#if blog}
  <Card url={`/blogs/${blog.slug}`}>
    <div slot="image">
      {#if showImage}
        <Image path="blogs/{blog.slug}" filename="cover" alt="Cover Image" />
      {/if}
    </div>
    <div slot="content">
      <div class="title">{blog.title}</div>
      <div class="note">{blog.readingTime}</div>
      <div class="text">{blog.excerpt}</div>
    </div>
  </Card>
{/if}
