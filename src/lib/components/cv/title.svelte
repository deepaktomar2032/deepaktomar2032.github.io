<script>
  import { profile } from '$lib/data/profile'
</script>

<div class="cv-title">
  <h1>{profile.firstName} {profile.lastName}</h1>
  <h5>{profile.jobTitle}</h5>
</div>

<style lang="scss">
  h1 {
    font-size: 52px;
    margin: 0;
    font-weight: 700;
    color: var(--text-color);
    line-height: 1.05;
    text-align: center;
    font-family: var(--title-font);
  }

  h5 {
    color: var(--text-light-color);
    margin: 2px 0 0;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    font-family: var(--title-font);
  }

  @media (min-width: 768px), print {
    h1,
    h5 {
      text-align: left;
    }
  }
</style>
