<!---------- Seccion Región y comuna --------->
<template>
    <div class="comuna">
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
    </div>     
</template>

<script>
import {comunas} from '../variables.js'

export default {
    name: "Sellocacion",
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