<template>
    <main>
        <div class="container">
            <div class="d-flex justify-content-evenly">
                <div class="py-5 my-5 px-5 bg-secondary">
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
                    <div class="px-5 py-2 m-5 d-flex bg-secondary" style="width: 100%;">
                        <div class="pt-2" style="width: 100%;">
                            <h4 class="m-0">Fuel Consumption</h4>
                            <div class="d-flex flex-row-reverse align-content-end">
                                <p>Liters</p>
                                <p class="result-number">12</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 m-5 bg-secondary" style="width: 100%;">
                        <h4>Save Consumption</h4>
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
</style>