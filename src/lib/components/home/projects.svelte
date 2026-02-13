<script>
  import Section from '$lib/components/layout/section.svelte'
  import Card from '$lib/components/base/card.svelte'
  import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte'

  const projects = [
    {
      id: 'portfolio-site',
      name: 'Personal Portfolio',
      period: '2024',
      summary:
        'This site you are looking at right now – a fully static, fast portfolio built with SvelteKit, tuned for readability and long-term maintainability.',
      stack: ['SvelteKit', 'TypeScript', 'SCSS']
    },
    {
      id: 'backend-apis',
      name: 'Backend APIs & Services',
      period: 'Ongoing',
      summary:
        'A collection of backend services and APIs experimented with over the years – from authentication and messaging to background jobs and observability.',
      stack: ['Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      id: 'playground',
      name: 'Experiments & Playground',
      period: 'Various',
      summary:
        'Small prototypes, learning projects, and experiments that never made it to production but taught valuable lessons about performance and DX.',
      stack: ['JavaScript', 'Tooling', 'DX']
    }
  ]
</script>

<section id="projects">
  <Section align="right" title="Projects" description="A small selection of things I tinker with outside of work.">
    <TwoByTwoGrid>
      {#each projects as project}
        <Card>
          <div slot="content" class="project-content">
            <div class="header">
              <h3>{project.name}</h3>
              <span class="period">{project.period}</span>
            </div>
            <p class="summary">{project.summary}</p>
            <div class="tags">
              {#each project.stack as tech}
                <span class="tag">{tech}</span>
              {/each}
            </div>
          </div>
        </Card>
      {/each}
    </TwoByTwoGrid>
  </Section>
</section>

<style lang="scss">
  #projects {
    padding-top: 10px;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .project-content .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
  }

  .project-content h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .project-content .period {
    font-size: 0.8rem;
    color: var(--text-light-color);
  }

  .project-content .summary {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .project-content .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .project-content .tag {
    font-size: 0.75rem;
    padding: 3px 8px;
    border-radius: 999px;
    background-color: var(--card-background-color-alt, rgba(255, 255, 255, 0.06));
    border: 1px solid rgba(var(--primary-color-rgb), 0.25);
  }
</style>
