<script>
  import Logo from '$lib/svg/logo.svelte'
  import Socials from '$lib/components/base/socials.svelte'
  import { profile } from '$lib/data/profile'

  export let animated = true
</script>

<header>
  <nav class="container">
    <div class="left">
      <a class="logo-link" href="/" aria-label="Home">
        <Logo {animated} />
        <span class="logo-name">{profile.firstName} {profile.lastName}</span>
      </a>
      <div class="links">
        <a href="/blogs">Blog</a>
        <a href="/cv">CV</a>
        <a href="/interests">Interests</a>
        <a href="/photography">Photography</a>
      </div>
    </div>
    <div class="right">
      <Socials />
    </div>
  </nav>
</header>

<style lang="scss">
  @use '../../scss/breakpoints' as *;

  header {
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 14px 0;
    background: var(--header-background);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--header-border-color);
    transition: background 0.3s ease, border-color 0.3s ease;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include for-phone-only {
        justify-content: space-between;
      }
    }

    .left {
      display: flex;
      align-items: center;
      gap: 32px;

      @include for-phone-only {
        gap: 16px;
      }
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text-color);
      text-decoration: none;
      height: 36px;

      &:hover {
        text-decoration: none;
        opacity: 0.85;
      }

      :global(svg) {
        height: 36px;
        width: auto;
      }
    }

    .logo-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-color);
      white-space: nowrap;
      letter-spacing: -0.01em;

      @include for-phone-only {
        display: none;
      }
    }

    .links {
      display: flex;
      align-items: center;
      gap: 24px;

      @include for-phone-only {
        display: none;
      }

      a {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-light-color);
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: var(--text-color);
          text-decoration: none;
        }
      }
    }

    .right {
      @include for-phone-only {
        display: flex;
      }
    }
  }
</style>
