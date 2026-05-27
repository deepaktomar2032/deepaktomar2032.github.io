<script>
  import Socials from '$lib/components/base/socials.svelte'
  import { profile } from '$lib/data/profile'

  let currentYear = new Date().getFullYear()

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
</script>

<footer>
  <div class="content">
    <div class="cta-row">
      <p class="cta-text">Want to work together?</p>
      <a href={`mailto:${profile.email}`} class="email-link">{profile.email} →</a>
    </div>
    <div class="divider" />
    <div class="bottom-row">
      <div class="copyright">© {currentYear} {profile.firstName} {profile.lastName}.</div>
      <div class="credits">
        Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener">SvelteKit</a>. Icons by
        <a href="https://iconoir.com/" target="_blank" rel="noopener">Iconoir</a>.
      </div>
      <div class="socials-and-top">
        <Socials />
        <button class="back-to-top" on:click={scrollToTop} aria-label="Back to top"> ↑ Top </button>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @use '../../scss/breakpoints' as *;

  footer {
    width: 100%;
    padding: 48px 0 36px;
    background: var(--footer-background);
    border-top: 1px solid rgba(var(--text-color-rgb), 0.08);
    backdrop-filter: blur(10px);

    .content {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .cta-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;

      .cta-text {
        margin: 0;
        font-weight: 600;
        font-size: 1rem;
        color: var(--text-color);
      }

      .email-link {
        font-weight: 600;
        font-size: 1rem;
        color: var(--primary-color);
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.75;
          text-decoration: none;
        }
      }
    }

    .divider {
      height: 1px;
      background: rgba(var(--text-color-rgb), 0.07);
    }

    .bottom-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      font-size: 0.85rem;

      @include for-phone-only {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .copyright {
        font-weight: 600;
        color: var(--text-color);
      }

      .credits {
        color: var(--text-light-color);
      }

      .socials-and-top {
        display: flex;
        align-items: center;
        gap: 16px;
      }
    }

    .back-to-top {
      background: transparent;
      border: 1px solid rgba(var(--text-color-rgb), 0.15);
      border-radius: 999px;
      padding: 4px 12px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-light-color);
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
    }
  }
</style>
