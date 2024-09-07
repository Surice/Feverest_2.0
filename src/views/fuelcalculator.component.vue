<template>
    <main style="background-color: rgb(214, 214, 214);">
        <div class="container d-flex flex-column align-items-center">
            <div class="div-width div-padding my-5 py-4 bg-light rounded shadow-lg">
                <div class="d-flex justify-content-between">
                    <h1>Input Data</h1>
                    <!-- 
                    <div class="dropdown">
                        <a class="dropdown-toggle" data-bs-toggle="dropdown"></a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item active" href="#">Pre Set</a></li>
                            <li><a class="dropdown-item" href="#">Individual</a></li>
                        </ul>
                    </div> 
                    -->
                </div>
                <hr/>
                <div class="my-4">
                    <h4>Race Duration</h4>
                    <p class="text-muted">Provide the Distance of your Race</p>
                    <div class="ms-5">
                        <div class="form-group row mb-1">
                            <label class="col-sm-2 col-form-label text-muted"><strong>Hours</strong></label>
                            <div class="col-sm-10">
                                <input type="number" class="clr-bg-input form-control-sm border border-secondary" placeholder="Hours" min="0">
                            </div>
                        </div>
                        <div class="form-group row mb-1">
                            <label class="col-sm-2 col-form-label text-muted"><strong>Minutes</strong></label>
                            <div class="col-sm-10">
                                <input type="number" class="clr-bg-input form-control-sm border border-secondary" placeholder="Minutes" min="0">
                            </div>
                        </div>
                    </div>
                    <!--
                    <div class="list-group list-group-horizontal">
                        <a href="#" class="list-group-item list-group-item-action">20min</a>
                        <a href="#" class="list-group-item list-group-item-action">30min</a>
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">45min</a>
                        <a href="#" class="list-group-item list-group-item-action">60min</a>
                    </div>
                    -->
                </div>
                <div class="my-4">
                    <h4>Lap Time</h4>
                    <p class="m-0">Provide the overall best Laptime in this Format: MM.ss</p>
                    <div class="input-group mb-3 rounded">
                        <input type="number" class="clr-bg-input form-control border border-secondary" placeholder="e.g.: 1.09" aria-label="e.g.: 1.09" aria-describedby="basic-addon2" min="0">
                        <!--
                        <span class="input-group-text" id="basic-addon2">MM.SS</span>
                        -->
                    </div>
                </div>
                <div class="my-4">
                    <h4>Lap Consumption</h4>   
                    <p class="m-0">Provide the average fuel Consumption of one Lap</p>                     
                    <div class="input-group mb-3">
                        <input type="number" class="clr-bg-input form-control border border-secondary" placeholder="e.g.: 2,5" aria-label="e.g.: 2,5" aria-describedby="basic-addon2" min="0">
                        <!--
                        <span class="input-group-text" id="basic-addon2">Liters</span>
                        -->
                    </div>
                </div>
            </div>
            <div class="div-width result-div">
                <div class=" div-width px-5 py-2 d-flex bg-light rounded shadow-lg" style="width: 100%;">
                    <div class="pt-2" style="width: 100%;">
                        <h4 class="m-0">Fuel Consumption</h4>
                        <div> 
                            <span class="result-number">12</span>
                            <span class="result-unit"> Liters</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style>
    .div-width{
        width: 35vw;
    }
    .div-padding{
        padding-right: 4rem !important;
        padding-left: 4rem !important;
    }
    .clr-bg-input{
        background-color: rgb(230, 230, 230) !important;
    }
    .clr-border-input{
        border-color: rgb(80, 80, 80) !important;
    }
    .result-div{
        margin-bottom: 12vh;
    }
    .result-number{
        font-size: 72px;
        font-weight: 600;
    }
    .result-unit{
        font-size: 18px;
    }
</style>