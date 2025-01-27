<svelte:options customElement="swc-button"/>

<button on:click={handleClick} class={getClasses()} disabled='{disabled}'>{@html innerText}</button>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Size, ButtonType } from '../types';

    export let innerText = ''
    export let size: Size = 'medium';
    export let type: ButtonType = 'normal';
    export let disabled: string;

    const dispatch = createEventDispatcher();   

    const getClasses = () => {
        let classes = ''

        if (size) {
            classes = classes.concat(" ", size);
        }

        if (type) {
            classes = classes.concat(" ", type);
        }

        if (disabled === 'true') {
            classes = classes.concat(" ", 'disabled');
        }

        return classes;
    };

    const handleClick = () => {
        dispatch('click', { message: 'Button clicked!' });
    };
</script>

<style lang="scss">
    button {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 16px;
        cursor: pointer;
        font-weight: 600;
        border: none;
    }

    .link {
        color: #1b95e0;
        background-color: transparent;
        border: none;

        &.disabled {
            cursor: default;
            color: #9F9F9F !important;
        }
    }

    .ghost {
        border: 1px solid #aaaaaa;
        box-shadow: none;
        color: #25355b;
        border-radius: 7px;

        &.disabled {
            cursor: default;
            color: #9F9F9F !important;
        }
    }

    .normal {
        background-color: #2f8eec;
        color: white;
        border-radius: 7px;
        background-color: #2186eb;

        &.disabled {
            cursor: default;
            background-color: #DFDFDF !important;
            color: #9F9F9F !important;
        }
    }

    .large {
        padding: 30px;
    }

    .medium {
        padding: 20px;
    }

    .small {
        padding: 10px;
    }
</style>
