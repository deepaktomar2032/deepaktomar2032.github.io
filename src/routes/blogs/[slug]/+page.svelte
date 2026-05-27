<script>
  import '../../../app.scss'
  import Header from '$lib/components/layout/header.svelte'
  import Footer from '$lib/components/layout/footer.svelte'
  import Image from '$lib/components/base/image.svelte'
  import Tag from '$lib/components/base/tag.svelte'
  import dateformat from 'dateformat'
  import BlogPostCard from '$lib/components/base/blog-post-card.svelte'
  import Section from '$lib/components/layout/section.svelte'
  export let data
  $: ({ blog } = data)

  import { onMount } from 'svelte'
  import { afterNavigate } from '$app/navigation'
  let BlogComponent = null
  let loadingComponent = true
  let progress = 0

  async function loadBlogComponent(slug) {
    loadingComponent = true
    const modules = import.meta.glob('/content/blogs/*.md')
    const match = Object.entries(modules).find(([path]) => path.includes(slug))
    if (match) {
      const mod = await match[1]()
      BlogComponent = mod.default
    } else {
      BlogComponent = null
    }
    loadingComponent = false
  }

  function updateMetaTags(blog) {
    if (typeof document !== 'undefined') {
      document.title = blog.title
      let desc = document.querySelector('meta[name="description"]')
      if (!desc) {
        desc = document.createElement('meta')
        desc.name = 'description'
        document.head.appendChild(desc)
      }
      desc.content = blog.excerpt
    }
  }

  function updateProgress() {
    const scrolled = window.scrollY
    const total = document.body.scrollHeight - window.innerHeight
    progress = total > 0 ? (scrolled / total) * 100 : 0
  }

  onMount(async () => {
    await loadBlogComponent(blog.slug)
    updateMetaTags(blog)
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  })

  afterNavigate(() => {
    updateMetaTags(blog)
    loadBlogComponent(blog.slug)
  })
</script>

<svelte:head>
  <meta name="keywords" content={blog.tags.join(', ')} />
</svelte:head>

<div class="progress-bar" style="width: {progress}%" />

<div class="markdown-layout">
  <Header animated={false} />
  <main>
    <article id="markdown-content">
      <a class="back-link" href="/blogs">← Back to all posts</a>
      <div class="header">
        <h1>{blog.title}</h1>
        <div class="note">Published on {dateformat(blog.date, 'UTC:dd mmmm yyyy')}</div>
        {#if blog.updated}
          <div class="note">Updated on {dateformat(blog.updated, 'UTC:dd mmmm yyyy')}</div>
        {/if}
        <div class="note">{blog.readingTime}</div>
        <div class="tags">
          {#each blog.tags as tag}
            <Tag>{tag}</Tag>
          {/each}
        </div>
      </div>
      <div class="cover-image">
        <Image path={`blogs/${blog.slug}`} filename="cover" alt="Cover Image" />
      </div>
      <div class="content">
        {#if loadingComponent}
          <div>Loading...</div>
        {:else if BlogComponent}
          <svelte:component this={BlogComponent} />
        {:else}
          <div>Blog content not found.</div>
        {/if}
      </div>
      <a class="back-link bottom" href="/blogs">← Back to all posts</a>
    </article>
    {#if blog.otherBlogs && blog.otherBlogs.length > 0}
      <div class="other-blogs container">
        <Section
          title="Other blogs"
          description="Have some time? Feel free to read some other blogs by me."
          align="top"
        >
          <div class="other-blogs-grid">
            {#each blog.otherBlogs as rel}
              <BlogPostCard blog={rel} />
            {/each}
          </div>
        </Section>
      </div>
    {/if}
  </main>
  <Footer />
</div>

<style lang="scss">
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--primary-color);
    z-index: 9999;
    transition: width 0.1s linear;
    border-radius: 0 2px 2px 0;
  }

  .back-link {
    display: inline-block;
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--text-light-color);
    text-decoration: none;
    margin-bottom: 24px;
    transition: color 0.2s;

    &:hover {
      color: var(--primary-color);
      text-decoration: none;
    }

    &.bottom {
      margin-top: 48px;
      margin-bottom: 0;
    }
  }
</style>
