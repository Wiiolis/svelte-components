<svelte:options customElement="swc-accordion-item"/>

<script lang="ts">
    import { getContext } from "svelte";
    import { slide } from "svelte/transition";

    export let open = false;

    const componentId = crypto.randomUUID()
    const collapse = getContext('collapse');
    const activeComponentId = getContext('active')

    function setActive() {
        $activeComponentId = componentId;
    }

    function toggleOpen() {
        open = !open;
    }

    function handleClick() {
        collapse ? setActive() : toggleOpen();
    }

    $: open && collapse && setActive()
    $: isActive = $activeComponentId === componentId
    $: isOpen = collapse ? isActive : open
</script>

<div class="accordion-item">
    <button on:click={handleClick} class="accordion-toggle">

        <div class="accordion-title">
            <slot name="title"/>
        </div>
       
        <div class:open={isOpen} class:close={!isOpen} class="accordion-caret">
            👉 
        </div>
    </button>

    {#if isOpen}
        <div transition:slide|local class="accordion-content">
            <slot name="content"></slot>
        </div>
    {/if}
</div>

<style>
	.accordion-toggle {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, inherit);
		font: inherit;
		font-weight: 600;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: var(--accordion-radius, 4px);
		transition: background-color 0.1s ease;
	}

	.accordion-toggle:hover {
		background-color: var(--accordion-hover, hsl(220 20% 20%));
	}

	.accordion-content {
		padding: var(--accordion-content-padding, 1rem);
	}

    .accordion-caret {
		transition: rotate 0.3s ease;
	}

	.open {
		rotate: 90deg;
	}
</style>