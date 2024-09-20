<template>
    <main style="background-color: rgb(214, 214, 214);">
        <div class="container d-flex flex-column align-items-center">
            <div class="div-width div-padding my-5 py-4 rounded shadow-lg">
                <div class="d-flex justify-content-between">
                    <h1>Fuel Calculator</h1>
                </div>
                <hr/>   
                <div class="my-4">
                    <h5 class="subheadline">Race Duration</h5>
                    <form>
                        <div class="row">
                            <div class="col">
                                <div class="input-group mb-3 border rounded shadow">
                                    <input type="number" class="form-control  input-input text-end border-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-span border-0">hrs</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-group mb-3 border rounded shadow">
                                    <input type="number" class="form-control  input-input text-end border-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-span border-0">min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="my-4">
                    <h5 class="subheadline">Lap Time</h5>
                    <div class="input-group mb-3 border rounded shadow">
                        <input type="number" class=" input-input form-control text-end border-0" min="0">
                        <div class="input-group-prepend">
                                <span class="input-group-text input-span border-0">MM.ss</span>
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <h5 class="subheadline">Lap Consumption</h5>   
                    <div class="input-group mb-3 border rounded shadow">
                        <input type="number" class=" input-input form-control text-end border-0" min="0">
                        <div class="input-group-prepend">
                                <span class="input-group-text input-span border-0">liters</span>
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <h5 class="subheadline">Fuel Consumption</h5>   
                    <div class="input-group mb-3 border rounded shadow deactivated">
                        <input type="number" class=" input-input form-control text-end border-0 deactivated" placeholder="12" aria-label="e.g.: 1.09" aria-describedby="basic-addon2" min="0" readonly>
                        <div class="input-group-prepend">
                                <span class="input-group-text input-span border-0 deactivated">liters</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style>
    .div-width{
        width: 28vw;
        background-color: rgb(250, 250, 255)
    }
    .div-padding{
        padding-right: 4rem !important;
        padding-left: 4rem !important;
    }
    .subheadline{
        margin-bottom: 1rem;
    }
    .input-input{
        color: rgb(98, 98, 255) !important;
        font-weight: 500 !important;
        border-right: none !important;
        padding-right: 7px !important;
        line-height: 24px !important;
        font-size: 28px !important; 
    }
    .input-input:focus{
            box-shadow: none !important;
        }
        input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .input-group:focus-within{
        border: 2.3px solid !important;
        border-color: rgb(98, 98, 255) !important;
    }
    .input-span{
        background-color: white !important; 
        height: 100%;
        font-size: 18px !important;
        color: gray !important;
        padding-left: 0 !important;
    }
    .deactivated{
        background-color: lightgray !important;
    }
</style>