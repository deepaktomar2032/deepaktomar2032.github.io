<script>
  import Socials from '$lib/components/base/socials.svelte'
  import { profile } from '$lib/data/profile'

  let currentYear = new Date().getFullYear()
</script>

<footer>
  <div class="content">
    <div class="copyright">
      © {currentYear}
      {profile.firstName}
      {profile.lastName}.
    </div>
    <div class="credits">
      Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener">SvelteKit</a>. Icons by
      <a href="https://iconoir.com/" target="_blank" rel="noopener">Iconoir</a>.
    </div>
    <div class="socials">
      <Socials />
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    width: 100%;
    padding: 56px 0 40px;
    background: linear-gradient(
      180deg,
      rgba(var(--primary-color-rgb), 0.08) 0%,
      rgba(var(--primary-color-rgb), 0.02) 100%
    );
    border-top: 1px solid rgba(var(--primary-color-rgb), 0.15);
    backdrop-filter: blur(10px);

    .content {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      font-weight: 600;
      text-align: center;

      .credits {
        font-weight: 400;
        font-size: 90%;
        color: var(--text-light-color);
      }
    }
  }
</style>
