<script>
  import { tagline, greetingHeading } from '$lib/data/profile'
  import InterestsIcon from '$lib/svg/interests.svelte'
  import ExperienceIcon from '$lib/svg/experience.svelte'
  import QuoteIcon from '$lib/svg/quote.svelte'
</script>

<section id="main">
  <h1 class="hello">{greetingHeading}</h1>
  <p class="intro">
    <span class="center">{tagline}</span>
  </p>
  <div class="ctas">
    <a id="interests-btn" href="/interests" class="button primary">
      <InterestsIcon />
      Interests
    </a>
    <a id="quote-btn" href="/quotes" class="button primary">
      <QuoteIcon />
      Quotes
    </a>
    <a id="experience-btn" href="#experience" class="button secondary-light">
      <ExperienceIcon />
      Experience
    </a>
    <a id="photography-btn" href="/photography" class="button secondary"> Photography </a>
  </div>
</section>

<style lang="scss">
  @use '../../scss/breakpoints' as *;

  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    position: relative;
    padding: 80px 0;

    @include for-phone-only {
      padding: 40px 0 50px;
    }

    .hello {
      text-align: center;
    }

    .intro {
      font-weight: 500;
      font-size: 1.4rem;
      width: min(100%, 440px);
      text-align: center;

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

      .button {
        width: auto;
        min-width: 180px;
      }
      @include for-iphone-se {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
