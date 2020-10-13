<!---------- Seccion Región y comuna --------->
<template>
    <div class="comuna">
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="6">
            <md-card class="md-layout-item box-respuestas-1 rounded">
                <md-badge
                id="badge-steps"
                md-content="11"
                />
                <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-location-arrow md-size-2x"></md-icon>
                    Comuna
                </div>
                </md-card-header>
                <md-card-content class="bottom">
                <md-field>
                    <label for="region">Región</label>
                    <md-select name="region" id="region" v-model="reg">
                    <md-option
                        v-for="(regi,index) of Object.keys(comunas)"
                        :key="regi"
                        :value="Object.keys(comunas)[index]"
                    >{{ regi }}</md-option>
                    </md-select>
                    <!-- <span
                    class="md-error"
                    v-if="!$v.form.gerencia.required"
                    >Se requiere que ingrese la región</span>
                    <span
                    class="md-error"
                    v-else-if="!$v.form.gerencia.minlength"
                    >El dato ingresado no cumple con el largo mínimo</span> -->
                </md-field>

                <md-field>
                    <label for="comuna">Comuna</label>
                    <label
                    v-if="reg === null"
                    for="comuna"
                    >Comuna</label>
                    <md-select
                    v-else
                    name="comuna"
                    id="comuna"
                    v-model="com"
                    >
                    <md-option
                        v-for="comu in comunas[reg]"
                        :key="comu"
                        :value="comu"
                    >{{ comu }}</md-option>
                    </md-select>
                </md-field>                
                </md-card-content>
            </md-card>
            </b-col>
            <!-------- Fin Seccion Región y comuna ------->
            <!---------- Seccion Comuna ---------->
            <b-col
            class="box-respuestas-1"
            cols="12"
            md="6"
            >
            <md-card class="md-layout-item box-respuestas-1 rounded">
                <md-badge
                id="badge-steps"
                md-content="12"
                />
                <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-calendar md-size-2x"></md-icon>
                    Comuna
                </div>
                </md-card-header>
                <md-card-content class="bottom">
                <md-field>
                    <label for="comuna">Comuna</label>
                    <label
                    v-if="reg === null"
                    for="comuna"
                    >Comuna</label>
                    <md-select
                    v-else
                    name="comuna"
                    id="comuna"
                    v-model="com"
                    >
                    <md-option
                        v-for="comu in comunas[reg]"
                        :key="comu"
                        :value="comu"
                    >{{ comu }}</md-option>
                    </md-select>
                </md-field>
                </md-card-content>
            </md-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {comunas} from '../variables.js'

export default {
    name: "Selcomuna",
    data() {
        return {
            comunas,
            reg:null,
            com:null,
        }
    }
}

</script>

<style scoped>
.comuna{
    width: 80%;
    padding: 0 15px
}
@media screen and (max-width: 800px){
    .b-day{
    width: 100%;
    padding: 0;
}
}
</style>