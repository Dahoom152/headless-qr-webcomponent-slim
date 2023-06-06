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

  // React to changes in url, version, or correction
  $: {
    modules = qr(url, { version, correction });
    svg = generateSvg(modules, size, color, background);
  }
</script>

{#if output === "html"}
  <div class="qr" style={`--size: ${pxConvert(size)}; --color: ${color}`}>
    {#each modules as row}
      {#each row as col}
        <div class="c {col ? 'f' : ''}" />
      {/each}
    {/each}
  </div>
{:else}
  {@html svg}
{/if}

<style lang="scss">
  @import "../style/app.scss";
</style>
