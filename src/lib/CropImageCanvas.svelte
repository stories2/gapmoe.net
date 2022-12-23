<script lang="ts">
    import { CropImgCanvas } from './CropImgCanvas';
	import { onMount } from 'svelte';

    let canvas;
    let cropImgCanvas;
    onMount(async () => {
        cropImgCanvas = new CropImgCanvas(canvas);
        cropImgCanvas.starter();
	});
</script>

<canvas bind:this={canvas} on:click={() => cropImgCanvas.showCropped = false}></canvas>