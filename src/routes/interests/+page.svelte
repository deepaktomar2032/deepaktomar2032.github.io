<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import Section from '$lib/components/layout/section.svelte'
  import Image from '$lib/components/base/image.svelte'

  export let data
  let { interests, description } = data
</script>

<Mainlayout>
  <section id="interest">
    <Section align="top" title="My Interests" {description}>
      <div class="container">
        <div class="interests-timeline">
          {#each interests as interest, index}
            <article class="timeline-item">
              <div class="timeline-marker">
                <div class="dot" />
                {#if index !== interests.length - 1}
                  <div class="line" />
                {/if}
              </div>
              <div class="timeline-body">
                <div class="media">
                  <div class="image-placeholder">
                    {#if interest.hasImage}
                      <Image path="interests" filename={interest.id} alt={interest.title} />
                    {/if}
                  </div>
                </div>
                <div class="content">
                  {#if interest.year}
                    <div class="year">{interest.year}</div>
                  {/if}
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </Section>
  </section>
</Mainlayout>

<style lang="scss">
  #interest {
    padding: 40px 0 60px;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .interests-timeline {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: stretch;
    column-gap: 16px;
  }

  .timeline-marker {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .timeline-marker .dot {
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
  }

  .timeline-marker .line {
    flex: 1;
    width: 2px;
    margin-top: 4px;
    background: linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.4), rgba(var(--primary-color-rgb), 0));
  }

  .timeline-body {
    background: var(--card-background-color);
    box-shadow: var(--card-shadow);
    border-radius: 10px;
    padding: 16px 18px;
    display: grid;
    grid-template-columns: 120px minmax(0, 1fr);
    column-gap: 16px;
    row-gap: 12px;
  }

  .media {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-placeholder {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    padding: 2px 0;
    background: transparent;
    border: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .year {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-light-color);
  }

  .content h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .content p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-light-color);
  }

  @media (max-width: 599px) {
    .timeline-item {
      grid-template-columns: auto 1fr;
      column-gap: 12px;
    }

    .timeline-body {
      grid-template-columns: 1fr;
    }

    .media {
      order: -1;
    }
  }
</style>
