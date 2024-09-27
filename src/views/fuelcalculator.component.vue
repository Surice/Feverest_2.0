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
                                    <input type="number" id="hrs_dur" v-on:change="calcDuration(); calcFuel()" min="0" class="form-control  input-input text-end border-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-span border-0">hrs</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-group mb-3 border rounded shadow">
                                    <input type="number" id="min_dur" v-on:change="calcDuration(); calcFuel()" min="0" step="1" class="form-control  input-input text-end border-0">
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
                        <input type="number" id="lap_time" v-on:change="calcLaptime(); calcFuel()" class=" input-input form-control text-end border-0" min="0">
                        <div class="input-group-prepend">
                                <span class="input-group-text input-span border-0">MM.ss</span>
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <h5 class="subheadline">Lap Consumption</h5>   
                    <div class="input-group mb-3 border rounded shadow">
                        <input type="number" id="lap_cons" v-on:change="calcFuel()" class=" input-input form-control text-end border-0" min="0">
                        <div class="input-group-prepend">
                                <span class="input-group-text input-span border-0">liters</span>
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <h5 class="subheadline">Fuel Consumption</h5>   
                    <div class="input-group mb-3 border rounded shadow deactivated">
                        <input type="number" id="fuel_cons" class=" input-input form-control text-end border-0 deactivated" value="0" min="0" readonly>
                        <div class="input-group-prepend">
                                <span class="input-group-text input-span border-0 deactivated">liters</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import { toValue } from 'vue';

    export default {
        data: () => {
            return{
                race_dur: 0,
                lap_sec: 0,
                laps: 0,
                fuel: 0
            }
        },
        methods: {
            writeInput(){
                
            },
            calcDuration(){
                // calculate the race distance in secondes
                
                let hrs_dur = document.getElementById("hrs_dur").value;
                let min_dur = document.getElementById("min_dur").value;

                this.race_dur = hrs_dur * 60 * 60 + min_dur * 60;
                console.log("race distance: " + this.race_dur);
            },
            calcLaptime(){
                // calculate the input laptime in secondes

                let lap_time = document.getElementById("lap_time").value;
                const lap_time_arr = lap_time.split(".");

                if (lap_time_arr[1] == null) {
                    this.lap_sec = Number(lap_time_arr[0])
                } else {
                    this.lap_sec = Number(lap_time_arr[0] * 60) + Number(lap_time_arr[1]);
                }

                console.log("lap time in secondes: " + this.lap_sec);
            },
            calcFuel(){
                // calculate the raced laps based on duration and laptime

                let lap_cons = document.getElementById("lap_cons").value;
                const laps_floor = Math.floor(this.race_dur / this.lap_sec);
                const diff = (this.race_dur / this.lap_sec) - laps_floor;

                if (this.race_dur != 0 && this.lap_sec != 0) {
                    
                    console.log("laps: " + this.race_dur / this.lap_sec);
                    
                    if (diff >= .7) {
                        this.laps = Math.ceil(this.race_dur / this.lap_sec) + 2;
                    } else {
                        this.laps = Math.ceil(this.race_dur / this.lap_sec) + 1; 
                    }
                
                    this.fuel = lap_cons * this.laps;

                    document.getElementById("fuel_cons").value = Math.ceil(this.fuel);

                    console.log("raced laps: " + this.laps)
                    console.log("fuel per race: " + Math.ceil(this.fuel))
                }
            }
        }
    }

</script>
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
        color: #212529 !important;
    }
</style>