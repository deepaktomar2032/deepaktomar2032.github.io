<script>
  import { profile } from '$lib/data/profile'
</script>

<picture class="cv-photo">
  <source srcset="/images/cv-avatar-dark.png" media="(prefers-color-scheme: dark)" />
  <img src="/images/cv-avatar.png" alt={`${profile.firstName}'s Avatar`} />
</picture>

<style lang="scss">
  .cv-photo {
    img {
      border-radius: 50%;
      max-width: 100%;
      max-height: 200px;
      box-sizing: border-box;
      @media (prefers-color-scheme: dark) {
        border: 2px solid var(--primary-light-color);
      }
    }
  }
</style>
