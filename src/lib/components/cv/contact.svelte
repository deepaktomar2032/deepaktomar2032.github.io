<script>
  import GitHubIcon from '$lib/svg/socials/github.svelte'
  import LinkedInIcon from '$lib/svg/socials/linkedin.svelte'
  import EmailIcon from '$lib/svg/socials/email.svelte'
  import PinIcon from '$lib/svg/pin.svelte'
  import ChatIcon from '$lib/svg/chat.svelte'
  import InternetIcon from '$lib/svg/internet.svelte'
  import ExperienceIcon from '$lib/svg/experience.svelte'
  import { yearsOfExperience } from '$lib/data/experience'
  import { profile } from '$lib/data/profile'
</script>

<ul class="cv-contact">
  <!-- Current Location -->
  <li class="location">
    <span class="icon"><PinIcon /></span>
    <span>{profile.currentLocation}</span>
  </li>

  <!-- Years of Experience -->
  <li class="experience">
    <span class="icon"><ExperienceIcon /></span>
    <span>
      {yearsOfExperience} years of experience
    </span>
  </li>

  <!-- Languages -->
  <li class="languages">
    <span class="icon"><ChatIcon /></span>
    <span>{profile.languages.join(', ')}</span>
  </li>

  <!-- Email -->
  <li class="email">
    <span class="icon"><EmailIcon /></span>
    <a href="mailto:{profile.email}">{profile.email}</a>
  </li>

  <!-- LinkedIn -->
  <li class="linkedin">
    <span class="icon"><LinkedInIcon /></span>
    <a href={`https://${profile.urls.linkedin}`} target="_blank"> LinkedIn Profile </a>
  </li>

  <!-- Portfolio -->
  <li class="portfolio">
    <span class="icon"><InternetIcon /></span>
    <a href={`https://${profile.urls.portfolio}`} target="_blank"> {profile.urls.portfolio} </a>
  </li>

  <!-- GitHub -->
  <li class="github">
    <span class="icon"><GitHubIcon /></span>
    <a href={`https://${profile.urls.github}`} target="_blank"> GitHub Profile </a>
  </li>
</ul>

<style lang="scss">
  .cv-contact {
    list-style: none;
    padding: 0;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;

    grid-template-areas:
      'location linkedin'
      'experience github'
      'languages email'
      '. portfolio';

    li {
      display: flex;
      align-items: center;
      margin: 0;

      .icon {
        margin-right: 10px;
        color: var(--primary-color);
        :global(svg) {
          width: 24px;
          height: 24px;
        }
      }

      a {
        text-decoration: none;
        color: var(--text-color);
        border-bottom: 1px dotted var(--primary-color);
        padding-bottom: 2px;

        &:hover {
          color: var(--primary-color);
          border-bottom-style: solid;
        }
      }

      &.location {
        grid-area: location;
      }
      &.experience {
        grid-area: experience;
      }
      &.email {
        grid-area: email;
        margin: 0 auto;
      }
      &.linkedin {
        grid-area: linkedin;
      }
      &.portfolio {
        grid-area: portfolio;
        display: none;
      }
      &.github {
        grid-area: github;
      }
      &.languages {
        grid-area: languages;
      }
    }

    @media (min-width: 768px), print {
      margin-left: 0;
      margin-right: 0;

      grid-gap: 5px;
      grid-template-columns: 1fr 1fr;

      grid-template-areas:
        'location linkedin'
        'experience github'
        'languages email'
        '. portfolio';

      li {
        &.email {
          margin: 0;
        }
        &.portfolio {
          display: flex;
        }
      }
    }

    @media print {
      grid-template-areas:
        'location email'
        'experience email'
        'languages email'
        'languages portfolio';

      .linkedin,
      .github {
        display: none;
      }

      a {
        border: none !important;
      }
    }
  }
</style>
