<script>
  import { headlineText, descriptionText } from '$lib/profile'
  import Avatar from '$lib/svg/avatar.svelte'
</script>

<section id="about">
  <div class="info">
    <h2>{headlineText}</h2>
    <p>{descriptionText}</p>
  </div>
  <div class="avatar">
    <div class="image">
      <Avatar />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../scss/breakpoints.scss' as *;

  #about {
    position: relative;
    display: grid;
    grid-template-columns: 500px 250px;
    align-items: center;
    justify-content: space-between;

    @include for-phone-only {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        @include for-phone-only {
          text-align: center;
        }
      }

      p {
        @include for-phone-only {
          text-align: justify;
        }
      }
    }

    .avatar {
      width: 250px;
      height: 250px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .image {
        width: 80%;
        height: 80%;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
</style>
