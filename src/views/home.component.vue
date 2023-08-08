<script>
    import navbar from '../components/header.vue'
</script>
<template>
    <navbar></navbar>
    <img src="../assets/tastatur.jpg" class="img-fluid w-100" style=";height: 25vh; object-fit: cover; object-position: 20% 50%;">
    <div class="container-fluid h-100 bg-dark text-white">
        <div class="row">
            <div class="col">
                <img src="../assets/coding.jpg" style="height: 42vh; width: 45vw; object-fit: cover;" class="img-fluid rounded shadow-lg d-flex justify-content-center align-content-center">
            </div>
            <div class="col">
                <div class="banner-welcome">
                    <h1>Welcome!</h1>
                </div>
                <div class="banner-phrases">
                    <p ref="typedText"></p>
                </div>
            </div>
        </div>
    </div>
</template>