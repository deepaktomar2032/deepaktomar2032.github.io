<script>
  import { headlineText, descriptionText } from '$lib/data/profile'
  import Avatar from '$lib/svg/avatar.svelte'
</script>

<section id="about">
  <div class="about-card">
    <div class="info">
      <h2>{headlineText}</h2>
      <p>{descriptionText}</p>
    </div>
    <div class="avatar">
      <div class="image">
        <Avatar />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../scss/breakpoints.scss' as *;

  #about {
    padding: 8px 0;
  }

  .about-card {
    background: var(--card-background-gradient, var(--card-background-color));
    border: 1px solid rgba(var(--primary-color-rgb), 0.12);
    border-radius: 16px;
    box-shadow: var(--card-shadow);
    padding: 36px 40px;
    display: grid;
    grid-template-columns: 1fr 200px;
    align-items: center;
    gap: 32px;

    @include for-tablet-portrait-down {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 28px 24px;
      text-align: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 8px;

      h2 {
        @include for-tablet-portrait-down {
          text-align: center;
        }
      }

      p {
        color: var(--text-light-color);
        font-size: 1rem;
        line-height: 1.65;

        @include for-tablet-portrait-down {
          text-align: center;
        }
      }
    }

    .avatar {
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include for-tablet-portrait-down {
        width: 140px;
        height: 140px;
      }

      .image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid rgba(var(--primary-color-rgb), 0.15);
        user-select: none;
        -webkit-user-select: none;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
