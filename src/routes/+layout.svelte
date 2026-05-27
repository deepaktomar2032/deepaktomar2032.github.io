<script>
  import '../app.scss'
  import { keywords, description, title, siteBaseUrl, authorName, xCreator } from '$lib/data/meta'
</script>

<svelte:head>
  <meta name="keywords" content={keywords.join(', ')} />
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteBaseUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="{siteBaseUrl}/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="{siteBaseUrl}/og-image.png" />
  <meta name="author" content={authorName} />
  <meta name="X:creator" content={xCreator} />
</svelte:head>

<slot />
