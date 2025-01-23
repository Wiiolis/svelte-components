<svelte:options customElement="swc-button"/>

<button class={getClasses()}>{@html innerText}</button>

<script lang="ts">
    export let innerText = ''
    export let size = 'large' | 'medium' | 'small';
    export let type = 'ghost' | 'link' | 'normal';


    const getClasses = () => {
        let classes = ''

        if (size) {
            classes = classes.concat(" ", size);
        }

        if (type) {
            classes = classes.concat(" ", type);
        }

        return classes;
    };
</script>

<style lang="scss">
    button {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
    }

    .link {
        color: #1b95e0;
        background-color: transparent;
        border: none;

    }

    .ghost {
        color: #1b95e0;
        background-color: transparent;
        border: none;
    }

    .normal {
        background-color: #2f8eec;
        color: white;
        font-weight: 600;
        border-radius: 7px;
        background-color: #2186eb;
    }

    .large {
        padding: 30px;
    }

    .small {
        padding: 10px;
    }
</style>
