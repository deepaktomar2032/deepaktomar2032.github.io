<script>
  import Header from '$lib/components/layout/header.svelte'
  import Footer from '$lib/components/layout/footer.svelte'

  import { description, keywords, title } from '$lib/data/meta'
</script>

<svelte:head>
  <meta name="keywords" content={keywords.join(', ')} />

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta name="X:description" content={description} />

  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta name="X:title" content={title} />
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />
