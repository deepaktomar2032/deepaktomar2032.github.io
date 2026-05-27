<script>
  import { profile } from '$lib/data/profile'
</script>

<section id="contact">
  <div class="contact-card">
    <div class="text">
      <h2>Let's talk</h2>
      <p>Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
    </div>
    <a href={`mailto:${profile.email}`} class="button primary cta"> Send me an email → </a>
  </div>
</section>

<style lang="scss">
  @use '../../scss/breakpoints.scss' as *;

  #contact {
    padding: 20px 0 40px;
  }

  .contact-card {
    background: var(--card-background-gradient, var(--card-background-color));
    border: 1px solid rgba(var(--primary-color-rgb), 0.14);
    border-radius: 16px;
    box-shadow: var(--card-shadow);
    padding: 48px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    @include for-tablet-portrait-down {
      flex-direction: column;
      text-align: center;
      padding: 36px 28px;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 8px;

      h2 {
        margin: 0;
        letter-spacing: -0.02em;
      }

      p {
        margin: 0;
        color: var(--text-light-color);
        font-size: 1rem;
        line-height: 1.6;
        max-width: 42ch;
      }
    }

    .cta {
      white-space: nowrap;
      width: auto;
      min-width: 200px;
      flex-shrink: 0;
    }
  }
</style>
