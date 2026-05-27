<script>
  import { tagline, greetingHeading } from '$lib/data/profile'
  import InterestsIcon from '$lib/svg/interests.svelte'
  import ExperienceIcon from '$lib/svg/experience.svelte'
  import QuoteIcon from '$lib/svg/quote.svelte'
  import BlogIcon from '$lib/svg/blog.svelte'
</script>

<section id="main">
  <h1 class="hello">{greetingHeading}</h1>
  <p class="intro">
    <span class="center">{tagline}</span>
  </p>
  <div class="ctas">
    <a id="blog-btn" href="/blogs" class="button primary">
      <BlogIcon />
      Blog
    </a>
    <a id="experience-btn" href="/cv" class="button primary">
      <ExperienceIcon />
      CV
    </a>
    <a id="interests-btn" href="/interests" class="button primary">
      <InterestsIcon />
      Interests
    </a>
    <a id="quote-btn" href="/quotes" class="button primary">
      <QuoteIcon />
      Quotes
    </a>
    <a id="photography-btn" href="/photography" class="button primary">Photography</a>
  </div>
</section>

<style lang="scss">
  @use '../../scss/breakpoints' as *;

  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    padding: 56px 0 72px;

    @include for-phone-only {
      padding: 32px 0 48px;
    }

    .hello {
      text-align: center;
      letter-spacing: -0.03em;
    }

    .intro {
      font-weight: 400;
      font-size: 1.25rem;
      width: min(100%, 480px);
      text-align: center;
      color: var(--text-light-color);
      line-height: 1.65;

      @include for-phone-only {
        display: none;
      }
    }

    .ctas {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      margin-top: 6px;

      .button {
        width: auto;
        min-width: 140px;
      }
      @include for-phone-only {
        .button {
          min-width: unset;
          width: 100%;
        }
      }
    }
  }
</style>
