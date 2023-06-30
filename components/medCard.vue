<template>
    <div class="card" style="max-width: 40rem;">
        <img class="card-img-top" src="assets/images/capa.jpg" alt="Card image cap w-25">
        <div class="card-body">
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
</template>


<script lang="ts">
    export default {
        props: {
            text: String,
        }
    }
</script>