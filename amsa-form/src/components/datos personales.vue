<template>
    <div class="contacto">
        <md-card-content>
            <md-field>
                <label for="nombre">Nombre</label>
                <md-input name="nombre" id="nombre"  autocomplete="given-name" v-model="nombreSol"/>
            </md-field>
            <!-- Apellido -->
            <md-field>
                <label for="apellido">Apellido</label>
                <md-input name="apellido" id="apellido"  autocomplete="given-name" v-model="apellidoSol"/>
            </md-field>
            <!-- RUT -->
                <md-field>
                <label for="rut">RUT</label>
                <md-input name="rut" id="rut"  autocomplete="given-name" v-model="rut"/>
            </md-field>
            <!-- Fecha de nacimiento -->
            <md-datepicker v-model="cumple">
            <label>Fecha de nacimiento</label>
            </md-datepicker>
            <!-- Número de convivientes -->
            <md-field>
            <label>Número de convivientes</label>
            <md-input v-model="conv" type="number"></md-input>
            </md-field>
            <!-- Previsión -->
            <md-field>
                <label for="prevision">Previsión</label>
                <md-select name="prevision" id="prevision" v-model="prevision" md-dense>
                    <md-option v-for="prev of previsiones" :key="prev" :value="prev">
                        {{ prev }}
                    </md-option>
                </md-select>
            </md-field>    
            <md-field>
                <label>
                <md-icon class="fa fa-location-arrow md-size-1x"></md-icon>
                <span>Región</span>
                </label>
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
    </div>
</template>

<script>

import {previsiones,comunas} from '../variables.js'

export default {
    name: "Selpersonal",
    data() {
        return {
            previsiones,
            comunas,
            descripcion: null,
            rut: null,
            nombreSol: null,
            apellidoSol: null,
            correoSol: null,
            numeroTel: null,
            cumple: null,
            conv: null,
            prevision: null,
            reg:null,
            com:null,
        }
    }
}

</script>


<style scoped>
.contacto{
    width: 80%;
    padding: 0 15px
}
@media screen and (max-width: 800px){
    .contacto{
    width: 100%;
    padding: 0;
}
}
</style>