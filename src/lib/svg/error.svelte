<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
  <defs>
    <style>
      .bg {
        fill: #f0f4ff;
      }
      .panel {
        fill: #e1ecff;
        stroke: #1c3177;
        stroke-width: 8px;
        stroke-linejoin: round;
      }
      .shadow {
        fill: #c7dcf9;
        opacity: 0.6;
      }
      .icon-circle {
        fill: #ff97c9;
      }
      .icon-mark {
        fill: #1c3177;
      }
      .text-main {
        fill: #1c3177;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 700;
        letter-spacing: 0.12em;
      }
      .text-sub {
        fill: #99adf9;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 400;
        letter-spacing: 0.08em;
      }
    </style>
  </defs>

  <!-- soft background circle -->
  <circle class="bg" cx="540" cy="540" r="420" />

  <!-- main error panel with subtle shadow -->
  <ellipse class="shadow" cx="540" cy="760" rx="260" ry="60" />
  <rect class="panel" x="260" y="320" rx="40" ry="40" width="560" height="360" />

  <!-- error icon -->
  <circle class="icon-circle" cx="540" cy="440" r="70" />
  <rect class="icon-mark" x="532" y="390" width="16" height="60" rx="8" />
  <circle class="icon-mark" cx="540" cy="470" r="9" />

  <!-- big ERROR text -->
  <text class="text-main" x="50%" y="560" font-size="72" text-anchor="middle"> 404 </text>

  <!-- helper message -->
  <text class="text-sub" x="50%" y="615" font-size="30" text-anchor="middle"> PAGE NOT FOUND </text>
</svg>
