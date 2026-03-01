<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import { title } from '$lib/data/meta'
  import CV from '$lib/components/cv/cv.svelte'
  import DownloadIcon from '$lib/svg/download.svelte'
</script>

<svelte:head>
  <title>CV - {title}</title>
  <meta property="og:title" content="CV - {title}" />
  <meta name="twitter:title" content="CV - {title}" />
</svelte:head>

<Mainlayout>
  <div class="cv-wrapper">
    <a
      class="download-link button secondary-light"
      href="https://drive.google.com/file/d/1YiJD-zIn3DkmpMWzHcnTklQuFcLCGcMu/view"
    >
      <DownloadIcon />
      Download as PDF
    </a>

    <CV />
  </div>
</Mainlayout>

<style lang="scss">
  .cv-wrapper {
    position: relative;
    min-height: 0;

    .download-link {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      margin: 0 auto;
      width: fit-content;
      z-index: 1;
      padding: 8px 18px;

      :global(svg) {
        width: 18px;
        height: 18px;
        color: inherit;
      }
    }
  }
  @media print {
    .cv-wrapper {
      padding: 0;

      .download-link {
        display: none !important;
      }
    }

    :global(body) {
      background: var(--card-background-color);
    }
  }
</style>
