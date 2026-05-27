<script>
  import XIcon from '$lib/svg/socials/x.svelte'
  import GitHubIcon from '$lib/svg/socials/github.svelte'
  import LinkedInIcon from '$lib/svg/socials/linkedin.svelte'
  import EmailIcon from '$lib/svg/socials/email.svelte'
  import { profile } from '$lib/data/profile'
</script>

<div class="socials">
  <a
    href={`https://${profile.urls.linkedin}`}
    target="_blank"
    rel="noopener"
    title="Let's connect professionally on LinkedIn"
    aria-label="LinkedIn Profile"
  >
    <LinkedInIcon />
  </a>
  <a
    href={`https://${profile.urls.github}`}
    target="_blank"
    rel="noopener"
    title="Browse my code adventures on GitHub"
    aria-label="GitHub Profile"
  >
    <GitHubIcon />
  </a>
  <a
    href={`mailto:${profile.email}`}
    target="_blank"
    rel="noopener"
    title="Drop me an email - I actually reply"
    aria-label="Send me an email"
  >
    <EmailIcon />
  </a>
  <a
    href={`https://${profile.urls.x}`}
    target="_blank"
    rel="noopener"
    title="Say hello on X (formerly Twitter)"
    aria-label="X / Twitter Profile"
  >
    <XIcon />
  </a>
</div>

<style lang="scss">
  @use '../../scss/breakpoints' as *;
  .socials {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      width: 24px;
      color: var(--text-color);
      fill: var(--text-color);

      &:hover {
        color: var(--link-highlight-color);
        fill: var(--link-highlight-color);
      }
    }
  }
</style>
