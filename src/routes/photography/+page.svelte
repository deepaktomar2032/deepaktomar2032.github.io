<script>
  import { onDestroy } from 'svelte'
  import Mainlayout from '$lib/layout/main.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import PinIcon from '$lib/svg/pin.svelte'
  import { description, photos } from '$lib/data/photography'

  let activePhotoIndex = null

  const lockScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    }
  }

  const unlockScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
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

  onDestroy(() => {
    unlockScroll()
  })
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
          <button class="lightbox__close" type="button" on:click={closePhoto} aria-label="Close photo">×</button>

          <div class="lightbox__image-wrapper">
            <img
              src={photos[activePhotoIndex].src}
              alt={photos[activePhotoIndex].alt ?? 'Photo'}
              loading="lazy"
              decoding="async"
            />
            {#if photos[activePhotoIndex].caption || photos[activePhotoIndex].date || photos[activePhotoIndex].location}
              <div class="lightbox__meta">
                {#if photos[activePhotoIndex].caption}
                  <div class="lightbox__caption">{photos[activePhotoIndex].caption}</div>
                {/if}
                {#if photos[activePhotoIndex].date || photos[activePhotoIndex].location}
                  <div class="lightbox__meta-row">
                    {#if photos[activePhotoIndex].date}
                      <div class="lightbox__date">{photos[activePhotoIndex].date}</div>
                    {/if}
                    {#if photos[activePhotoIndex].location}
                      <div class="lightbox__location">
                        <span class="lightbox__location-icon" aria-hidden="true"><PinIcon /></span>
                        <span class="lightbox__location-text">{photos[activePhotoIndex].location}</span>
                      </div>
                    {/if}
                  </div>
                {/if}
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
    background: rgba(8, 10, 20, 0.72);
    backdrop-filter: blur(28px) saturate(1.1);
    -webkit-backdrop-filter: blur(28px) saturate(1.1);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    padding: 60px 12px 12px;
  }

  .lightbox__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: min(98vw, 1400px);
    background: transparent;
  }

  .lightbox__close {
    position: fixed;
    top: 16px;
    right: 16px;
    border: none;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    color: #fff;
    width: 36px;
    height: 36px;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    &:hover {
      background: rgba(255, 255, 255, 0.28);
    }
  }

  .lightbox__image-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    background: transparent;
  }

  .lightbox__image-wrapper img {
    max-width: 100%;
    max-height: calc(100vh - 80px);
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 16px 60px rgba(0, 0, 0, 0.65);
    background: transparent;
    display: block;
  }

  .lightbox__meta {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0 0 12px 12px;
    padding: 32px 20px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: linear-gradient(180deg, rgba(4, 8, 16, 0) 0%, rgba(4, 8, 16, 0.72) 40%, rgba(4, 8, 16, 0.88) 100%);
  }

  .lightbox__caption {
    font-size: 1rem;
    color: rgba(244, 248, 255, 0.96);
    text-align: center;
    line-height: 1.55;
    max-width: 68ch;
    text-wrap: balance;
  }

  .lightbox__meta-row {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .lightbox__date {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(220, 231, 252, 0.9);
  }

  .lightbox__location {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: rgba(210, 225, 255, 0.85);
  }

  .lightbox__location-icon {
    width: 15px;
    height: 15px;
    display: inline-flex;
    color: rgba(193, 214, 255, 0.9);
  }
</style>
