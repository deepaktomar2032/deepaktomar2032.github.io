<script>
  import { tagline, greetingHeading } from '$lib/profile'
  import ExperienceIcon from '$lib/svg/experience.svelte'
</script>

<section id="main">
  <h1 class="hello">{greetingHeading}</h1>
  <p class="intro">
    <span class="center">{tagline}</span>
  </p>
  <div class="ctas">
    <a id="experience-btn" href="#experience" class="button secondary-light">
      <ExperienceIcon />
      Experience
    </a>
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
      @include for-iphone-se {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
