<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import PinIcon from '$lib/svg/pin.svelte'
  import { description, photos } from '$lib/data/photography'

  let activePhotoIndex = null

  const lockScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const unlockScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }

  const openPhoto = (index) => {
    activePhotoIndex = index
    lockScroll()
  }

  const closePhoto = () => {
    activePhotoIndex = null
    unlockScroll()
  }

  const handleLightboxKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closePhoto()
    }
  }
</script>

<Mainlayout>
  <section id="photography-page">
    <Section align="top" title="Photography" {description}>
      {#if photos.length}
        <div class="photo-grid" class:single={photos.length === 1}>
          {#each photos as photo, index}
            <figure class="photo-item">
              <button
                type="button"
                class="photo-item__button"
                on:click={() => openPhoto(index)}
                aria-label={photo.alt ?? photo.caption ?? 'Open photo'}
              >
                <img src={photo.src} alt={photo.alt ?? 'Photo'} loading="lazy" decoding="async" />
              </button>

              {#if photo.caption}
                <figcaption>{photo.caption}</figcaption>
              {/if}

              {#if photo.date}
                <div class="photo-date">{photo.date}</div>
              {/if}

              {#if photo.location}
                <div class="photo-location">
                  <span class="photo-location__icon" aria-hidden="true">
                    <PinIcon />
                  </span>
                  <span class="photo-location__text">{photo.location}</span>
                </div>
              {/if}
            </figure>
          {/each}
        </div>
      {:else}
        <p class="empty">Coming soon.</p>
      {/if}
    </Section>

    {#if activePhotoIndex !== null && photos[activePhotoIndex]}
      <div
        class="lightbox"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        on:click|self={closePhoto}
        on:keydown={handleLightboxKeydown}
      >
        <div class="lightbox__inner">
          <button class="lightbox__close" type="button" on:click={closePhoto} aria-label="Close photo"> × </button>

          <div class="lightbox__image-wrapper">
            <img
              src={photos[activePhotoIndex].src}
              alt={photos[activePhotoIndex].alt ?? 'Photo'}
              loading="lazy"
              decoding="async"
            />
            {#if photos[activePhotoIndex].caption}
              <div class="lightbox__caption">{photos[activePhotoIndex].caption}</div>
            {/if}

            {#if photos[activePhotoIndex].date}
              <div class="lightbox__date">{photos[activePhotoIndex].date}</div>
            {/if}

            {#if photos[activePhotoIndex].location}
              <div class="lightbox__location">
                <span class="lightbox__location-icon" aria-hidden="true">
                  <PinIcon />
                </span>
                <span class="lightbox__location-text">{photos[activePhotoIndex].location}</span>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </section>
</Mainlayout>

<style lang="scss">
  #photography-page {
    padding: 40px 0 60px;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
    max-width: 1100px;
    margin-inline: auto;
  }

  .photo-grid.single {
    grid-template-columns: minmax(0, 420px);
    justify-content: center;
  }

  .photo-item {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    background: var(--card-background-color);
    box-shadow: var(--card-shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .photo-item__button {
    display: block;
    width: 100%;
    height: 350px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    cursor: zoom-in;
    overflow: hidden;
  }

  .photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.25s ease, filter 0.25s ease;
  }

  .photo-item figcaption {
    padding: 8px 10px 10px;
    font-size: 0.85rem;
    color: var(--text-muted-color, var(--text-light-color));
    background: transparent;
  }

  .photo-date {
    padding: 0 10px 6px;
    font-size: 0.8rem;
    color: var(--text-muted-color, var(--text-light-color));
  }

  .photo-location {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0 10px 10px;
    font-size: 0.8rem;
    color: var(--text-light-color);
  }

  .photo-location__icon {
    width: 14px;
    height: 14px;
    display: inline-flex;
  }

  @media (hover: hover) {
    .photo-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
    }

    .photo-item:hover img {
      transform: scale(1.03);
      filter: brightness(1.03);
    }
  }

  .empty {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-light-color);
  }

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 40;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  .lightbox__inner {
    position: relative;
    max-width: min(960px, 100%);
    width: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox__image-wrapper {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .lightbox__image-wrapper img {
    width: 100%;
    max-height: calc(100vh - 160px);
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
    background: #000;
  }

  .lightbox__caption {
    padding: 4px 8px 0;
    font-size: 0.9rem;
    color: var(--text-light-color);
    text-align: center;
  }

  .lightbox__date {
    padding: 0 8px 2px;
    font-size: 0.85rem;
    color: var(--text-muted-color, var(--text-light-color));
  }

  .lightbox__location {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0 8px 4px;
    font-size: 0.85rem;
    color: var(--text-light-color);
  }

  .lightbox__location-icon {
    width: 16px;
    height: 16px;
    display: inline-flex;
  }

  .lightbox__close {
    position: absolute;
    top: 16px;
    right: 16px;
    border: none;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
