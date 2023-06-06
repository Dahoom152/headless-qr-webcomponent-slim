<svelte:options tag="headless-qr" />

<script>
  /** Dependencies */
  import { qr } from "headless-qr";

  /** Utils */
  import Config from "../utils/config";
  import { pxConvert, generateSvg } from "../utils/helper";

  /** Props */
  export let url;
  export let color = Config.color;
  export let background = Config.backgroundColor;
  export let size = Config.size;
  export let output = Config.output;
  export let version = Config.QR.version;
  export let correction = Config.QR.correction;

  let modules;
  let svg;
  let cellSize;
  let qrWidth;

  // React to changes in url, version, or correction
  $: {
    modules = qr(url, { version, correction });
    svg = generateSvg(modules, size, color, background);
    qrWidth = modules ? modules.length : 0;  // actual number of cells
    cellSize = size / qrWidth;
  }
</script>

{#if output === "html"}
  <div class="qr" style={`width: ${pxConvert(size)}; height: ${pxConvert(size)}; --color: ${color}; grid-template-columns: repeat(${qrWidth}, ${pxConvert(cellSize)})`}>
    {#each modules as row}
      {#each row as col}
        <div class="c {col ? 'f' : ''}" style={`width: ${pxConvert(cellSize)}; height: ${pxConvert(cellSize)}`} />
      {/each}
    {/each}
  </div>
{:else}
  {@html svg}
{/if}

<style lang="scss">
  @import "../style/app.scss";
</style>
