<template>
    <main style="background-color: rgb(214, 214, 214);">
        <div class="container">
            <div class="d-flex justify-content-evenly">
                <div class="py-5 my-5 px-5 bg-light rounded shadow-lg">
                    <div class="d-flex justify-content-between">
                        <h1>PreSet</h1>
                        <div class="dropdown">
                            <a class="dropdown-toggle" data-bs-toggle="dropdown"></a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item active" href="#">Pre Set</a></li>
                                <li><a class="dropdown-item" href="#">Individual</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-4">
                        <h4>Race Duration</h4>
                        <div class="list-group list-group-horizontal">
                            <a href="#" class="list-group-item list-group-item-action">20min</a>
                            <a href="#" class="list-group-item list-group-item-action">30min</a>
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">45min</a>
                            <a href="#" class="list-group-item list-group-item-action">60min</a>
                        </div>
                    </div>
                    <div class="my-4">
                        <h4>Lap Time</h4>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="e.g.: 1.09" aria-label="e.g.: 1.09" aria-describedby="basic-addon2" min="0">
                            <span class="input-group-text" id="basic-addon2">MM.SS</span>
                        </div>
                    </div>
                    <div class="my-4">
                        <h4>Lap Consumption</h4>                        
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="e.g.: 2,5" aria-label="e.g.: 2,5" aria-describedby="basic-addon2" min="0">
                            <span class="input-group-text" id="basic-addon2">Liters</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="px-5 py-2 m-5 d-flex bg-light rounded shadow-lg" style="width: 100%;">
                        <div class="pt-2" style="width: 100%;">
                            <h4 class="m-0">Fuel Consumption</h4>
                            <div class="d-flex justify-content-end align-items-end">
                                <span class="result-number">12</span>
                                <span class="result-unit">Liters</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 py-2 m-5 d-flex bg-light rounded shadow-lg" style="width: 100%;">
                        <div class="pt-2" style="width: 100%;">
                            <h4 class="m-0">Save Consumption</h4>
                            <div class="d-flex flex-row-reverse align-items-end">
                                <p>Liters</p>
                                <p class="result-number">16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </main>
</template>
<style>
    .result-number{
        font-size: 72px;
        font-weight: 600;
    }
    .result-unit{
        font-size: 16px;
    }
</style>