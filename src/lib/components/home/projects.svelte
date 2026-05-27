<script>
  import Section from '$lib/components/layout/section.svelte'
  import Card from '$lib/components/base/card.svelte'
</script>

<section id="side-quests">
  <Section
    align="left"
    title="Side quest"
    description="Sometimes travel frustrates you enough to actually build something."
  >
    <div class="project-card-wrapper">
      <Card>
        <div slot="content" class="project-content">
          <div class="project-header">
            <h3>Globe Access</h3>
          </div>
          <p class="summary">
            Frequent work travel across the world will do two things to you: collect passport stamps and develop a deep
            frustration with visa-requirement websites. So I built Globe Access - pick your nationality and a world map
            lights up with every country you can enter without a visa. Turns out, building the thing was considerably
            easier than reading those tables.
          </p>
          <div class="project-footer">
            <div class="tags">
              {#each ['React.js', 'Node.js', 'TypeScript', 'NestJS', 'PostgreSQL'] as tech}
                <span class="tag">{tech}</span>
              {/each}
            </div>
            <a class="visit" href="https://globeaccess.world/" target="_blank" rel="noopener noreferrer">
              Visit site →
            </a>
          </div>
        </div>
      </Card>
    </div>
  </Section>
</section>

<style lang="scss">
  #side-quests {
    padding-top: 10px;
  }

  .project-card-wrapper {
    width: 100%;

    :global(.card) {
      background: linear-gradient(
        145deg,
        var(--card-background-color) 0%,
        rgba(var(--primary-lightest-color-rgb), 0.55) 100%
      );
      border-left: 3px solid var(--primary-color);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        box-shadow: var(--card-shadow-hover);
        transform: translateY(-2px);
      }
    }
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .project-header {
    h3 {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--primary-color);
      letter-spacing: -0.01em;
    }
  }

  .summary {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.7;
  }

  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    padding-top: 12px;
    border-top: 1px solid rgba(var(--primary-color-rgb), 0.12);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    font-size: 0.72rem;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 999px;
    background-color: var(--primary-lightest-color);
    color: var(--primary-color);
    border: 1px solid rgba(var(--primary-color-rgb), 0.2);
    letter-spacing: 0.02em;
  }

  .visit {
    display: inline-flex;
    align-items: center;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary-color-contrast);
    background-color: var(--primary-color);
    padding: 6px 16px;
    border-radius: 999px;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(var(--primary-color-rgb), 0.28);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: 0 4px 18px rgba(var(--primary-color-rgb), 0.38);
      transform: translateY(-1px);
    }
  }
</style>
