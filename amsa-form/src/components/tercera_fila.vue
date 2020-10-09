<template>
    <div class="tercera_fila">
        <!--Comuna-->
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="4"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-calendar md-size-2x"></md-icon>
                            <span>Fecha de nacimiento</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-datepicker v-model="cumple">
                        <label>Ingrese fecha</label>
                        </md-datepicker>
                    </md-card-content>
                </md-card>
            </b-col>    
        </b-row>
    </div>
</template>



<script>
/*import {previsiones} from '../variables.js'*/

export default {
    name: "Sel3fila",
    data() {
        return {
            previsiones,
            cumple:null,
            conv:null,
            prevision:null,
        }
    }
}
</script>

<style scoped>
.tercera_fila{
    width: 80%;
    padding: 0 15px
}
@media screen and (max-width: 800px){
    .tercera_fila{
    width: 100%;
    padding: 0;
}
}
</style>