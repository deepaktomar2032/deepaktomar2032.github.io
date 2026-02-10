<script>
  import PinIcon from '$lib/svg/pin.svelte'
  import CircleIcon from '$lib/svg/circle.svelte'
  import LowAccentHighlight from '$lib/components/style/low-accent-highlight.svelte'
  import { education } from '$lib/data/education'
</script>

<div class="education">
  {#each education as entry}
    <div class="inner-education-class" class:current={entry.current}>
      <div class="timeline">
        <div class="time">
          {#if entry.current}
            <span class="current-label">Current</span>
          {/if}
          <CircleIcon />
          <span class="dates">{entry.start} - {entry.end}</span>
        </div>
        <div class="line" />
      </div>
      <div class="content">
        <div class="title">
          <div>
            <span class="degree logitix">
              <LowAccentHighlight id={entry.id}
                >{entry.degree} {entry.specialization && `(${entry.specialization})`}</LowAccentHighlight
              >
            </span>
          </div>
          <small>{entry.institution} | <span class="icon"><PinIcon /></span> {entry.location}</small>
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .education {
    .inner-education-class {
      display: flex;
      gap: 16px;

      .timeline {
        width: 90px;
        margin-bottom: -16px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .line {
          border-left: 2px dashed var(--primary-color);
          width: 2px;
          flex: 1;
        }

        .time {
          color: var(--text-light-color);
          padding: 2px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 12px;

          :global(svg) {
            width: 20px;
            height: 20px;
            color: var(--primary-color);
          }

          .current-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          .dates {
            white-space: nowrap;
          }
        }
      }

      &.current {
        .time {
          :global(svg) {
            padding: 2px;
            background: var(--card-background-color);
            border: 1px solid var(--primary-color);
            border-radius: 50%;
            fill: var(--primary-color);
          }
        }
      }

      &:not(:last-child) {
        padding-bottom: 16px;
      }

      &:last-child {
        .timeline {
          .line {
            display: none;
          }
        }
      }

      .content {
        flex: 1;
      }

      .title {
        div {
          font-size: 18px;
          display: block;
        }

        .degree {
          color: var(--text-color);
          font-size: 22px;
          font-family: var(--title-font);
          font-weight: 600;
        }

        .icon {
          :global(svg) {
            width: 14px;
            height: 14px;
          }
        }

        small {
          font-size: 14px;
          font-weight: 300;
          color: var(--text-light-color);
          fill: var(--text-light-color);
        }
      }
    }
  }
</style>
