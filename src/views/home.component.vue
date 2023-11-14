<template>
    <div class="d-flex flex-column h-100" style="flex: 1 1 auto;">
        <img src="../assets/tastatur.jpg" class="img-fluid w-100" style=";height: 25vh; object-fit: cover; object-position: 20% 50%;">
        <div class="container-fluid h-100 bg-dark text-white">
            <div class="row h-100 align-items-center">
                <div class="col-7">
                    <img src="../assets/coding.jpg" style="height: 42vh; width: 45vw;" class="img-fluid object-fit-cover rounded shadow mx-auto d-block">
                </div>
                <div class="col-5">
                    <div class="banner-welcome">
                        <h1>Welcome!</h1>
                    </div>
                    <div class="banner-phrases fs-3 ps-5">
                        <p ref="typedText"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Typed from 'typed.js';

    export default {
        name: 'App',
        mounted() {
            const options = {
                strings: ['Game on', 'Take it, or leave it!', 'Go, get it!'],
                typeSpeed: 70,
                backSpeed: 30,
                startDelay: 400,
                backDelay: 2000,
                loop: true,
                showCursor: false,
                shuffel: true,
                smartBackspace: false
            };

            const typed = new Typed(this.$refs.typedText, options);
        },
    };
</script>