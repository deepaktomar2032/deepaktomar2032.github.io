<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import { title, cvDescription } from '$lib/data/meta'
  import CV from '$lib/components/cv/cv.svelte'
  import DownloadIcon from '$lib/svg/download.svelte'
</script>

<svelte:head>
  <title>CV - {title}</title>
  <meta property="og:title" content="CV - {title}" />
  <meta name="twitter:title" content="CV - {title}" />
  <meta name="description" content={cvDescription} />
</svelte:head>

<Mainlayout>
  <div class="cv-wrapper">
    <div class="download-row">
      <a
        class="download-link button primary"
        href="https://drive.google.com/file/d/1YiJD-zIn3DkmpMWzHcnTklQuFcLCGcMu/view"
        target="_blank"
        rel="noopener"
      >
        <DownloadIcon />
        Download CV as PDF
      </a>
    </div>
    <CV />
  </div>
</Mainlayout>

<style lang="scss">
  .cv-wrapper {
    padding-bottom: 40px;
  }

  .download-row {
    display: flex;
    justify-content: center;
    padding: 24px 0 20px;

    .download-link {
      display: flex;
      align-items: center;
      gap: 8px;
      width: auto;
      min-width: 200px;

      :global(svg) {
        width: 18px;
        height: 18px;
        color: inherit;
      }
    }
  }

  @media print {
    .download-row {
      display: none !important;
    }

    :global(header),
    :global(footer) {
      display: none !important;
    }

    :global(body) {
      background: white !important;
    }
  }
</style>
