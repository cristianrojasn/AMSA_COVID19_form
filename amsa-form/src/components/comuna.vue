<!---------- Seccion Gerencia --------->
<template>
    <div class="comuna">
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="3">
            <md-card class="md-layout-item box-respuestas-1 rounded">
                <md-badge
                id="badge-steps"
                md-content="2"
                />
                <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-sitemap md-size-2x"></md-icon>
                    Gerencia
                </div>
                </md-card-header>
                <md-card-content class="bottom">
                <md-field :class="getValidationClass('gerencia')">
                    <label for="gerencia">Gerencia</label>
                    <md-select
                    name="gerencia"
                    id="gerencia"
                    v-model="form.gerencia"
                    :disabled="sending"
                    @md-selected="clearAfterGroup"
                    >
                    <md-option
                        v-for="op in Object.keys(opciones)"
                        :key="op"
                        :value="op"
                    >{{ op }}</md-option>
                    </md-select>
                    <span
                    class="md-error"
                    v-if="!$v.form.gerencia.required"
                    >Se requiere que ingrese la gerencia</span>
                    <span
                    class="md-error"
                    v-else-if="!$v.form.gerencia.minlength"
                    >El dato ingresado no cumple con el largo mínimo</span>
                </md-field>
                </md-card-content>
            </md-card>
            </b-col>
            <!-------- Fin Seccion Gerencia ------->
            <!---------- Seccion Periodo ---------->
            <b-col
            class="box-respuestas-1"
            cols="12"
            md="3"
            >
            <md-card class="md-layout-item box-respuestas-1 rounded">
                <md-badge
                id="badge-steps"
                md-content="3"
                />
                <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-calendar md-size-2x"></md-icon>
                    Período
                </div>
                </md-card-header>
                <md-card-content class="bottom">
                <md-field :class="getValidationClass('periodo')">
                    <label for="periodo">Periodo</label>
                    <label
                    v-if="form.gerencia === null"
                    for="periodo"
                    >Periodo</label>
                    <md-select
                    v-else
                    name="periodo"
                    id="periodo"
                    v-model="form.periodo"
                    :disabled="sending"
                    @md-selected="clearAfterPeriod"
                    >
                    <md-option
                        v-for="op in Object.keys(
                        opciones[form.gerencia]['periodicidad']
                        )"
                        :key="op"
                        :value="op"
                    >{{ op }}</md-option>
                    </md-select>
                    <span class="md-error">El periodo es requerido</span>
                </md-field>
                </md-card-content>
            </md-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
//import {previsiones} from '../variables.js'
/*
export default {
    name: "Selcomuna",
    data() {
        return {
            previsiones,
            cumple:null,
            conv:null,
            prevision:null,
        }
    }
}
*/
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