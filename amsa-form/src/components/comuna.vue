<!---------- Seccion Región y comuna --------->
<template>
    <div class="comuna">
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="4">
            <md-card class="md-layout-item box-respuestas-1">
                <md-badge
                id="badge-steps"
                md-content="11"
                />
                <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-location-arrow md-size-2x"></md-icon>
                    Comuna de residencia
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
            md="4"
            >
            <md-card class="md-layout-item box-respuestas-1">
                <md-badge
                id="badge-steps"
                md-content="12"
                />
                <md-card-header>
                <div class="md-title">
                    <md-icon class="fa fa-envelope md-size-2x"></md-icon>
                    Correo Supervisor 
                </div>
                </md-card-header>
                <md-card-content class="bottom">
                    <md-field>
                        <label for="correo_sup">Correo supervisor</label>
                        <md-input type="email" name="correo_sup" id="correo_sup"  autocomplete="given-name" v-model="correoSup"/>
                    </md-field>
                </md-card-content>
            </md-card>
            </b-col>
            <!---------- FIN Seccion Comuna ---------->
            <!---------- Seccion Cargo y turno ---------->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="13"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-id-badge md-size-2x"></md-icon>
                            <span style="margin-left: 10px;">Cargo y turno</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                        <!---------- Seccion Cargo ---------->    
                            <label for="puestos">Cargo</label>
                            <md-select name="puestos" id="puestos" v-model="car" md-dense>
                                <md-option v-for="cargo of cargos" :key="cargo" :value="cargo">
                                    {{ cargo }}
                                </md-option>
                            </md-select>
                        </md-field>
                        <!---------- Seccion turno ---------->
                        <md-field>
                            <label for="turno">Turno</label>
                            <md-select name="turno" id="turno" v-model="turn" md-dense>
                                <md-option v-for="tu of turnos" :key="tu" :value="tu">
                                    {{ tu }}
                                </md-option>
                            </md-select>
                        </md-field>                        
                    </md-card-content>
                </md-card>
            </b-col>
            <!---------- Fin Cargo y turno ---------->
        </b-row>
    </div>
</template>

<script>
import {comunas,cargos,turnos} from '../variables.js'

export default {
    name: "Selcomuna",
    data() {
        return {
            comunas,
            cargos,
            turnos,
            reg:null,
            com:null,
            correoSup:null,
            car:null,
            turn:null,
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