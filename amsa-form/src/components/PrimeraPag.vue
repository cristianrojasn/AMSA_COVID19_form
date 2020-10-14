<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <b-row class="row-length">
            <!--Nombre-->
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="1"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Datos personales</span>
                        </div>
                        <p class="md-caption">
                        ( RUT SIN GUION: ejemplo 123456789 - el k se reemplaza con 0)
                        </p>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <!-- Nombre -->
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
                </md-card>
            </b-col>
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="2"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-envelope md-size-2x"></md-icon>
                            <span> Contacto y trabajo</span>
                            <p class="md-caption">
                            ¡Recuerde que correo electronico es muy importante para recibir la aprobación!
                            </p>
                        </div>
                    </md-card-header>
                    <SelContacto/>
                </md-card>
            </b-col>   
        </b-row>
        <!--Fila con correo y número de contacto-->
        <!--Datos de la empresa-->
        <!--Empresa-->
        <SelComuna/>
        <!--<SelEmpresas/>-->        
        <!--Correo-->
        <b-row class="row-length">
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="7"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-envelope md-size-2x"></md-icon>
                            <span> Correo electrónico</span>
                            <p class="md-caption">
                            ¡Su correo electronico es muy importante para recibir la aprobación!
                            </p>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="correo">Correo</label>
                            <md-input type="email" name="correo" id="correo"  autocomplete="given-name" v-model="correoSol"/>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
            <!--Número de contacto-->
            <b-col class="box-respuestas-1" cols="12" md="6">                
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="8"/>
                    <SelContacto/>
                    <!-- <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-address-book md-size-2x"></md-icon>
                            <span>Número de contacto</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="numeroTel">Número</label>
                            <span class="md-prefix">+569</span>
                            <md-input type="tel" name="numeroTel" id="numeroTel"  autocomplete="given-name" v-model="numeroTel"/>
                        </md-field>
                    </md-card-content>                     -->
                </md-card>
            </b-col>
        </b-row>
        <!--Datos de la empresa-->
            <!--Empresa-->
        <SelEmpresas/> 
    </div>
</template>

<script>

import SelEmpresas from '../components/SelEmpresas.vue';
import SelComuna from '../components/comuna.vue';
import SelContacto from '../components/contacto y trabajo.vue';

import {previsiones} from '../variables.js'
import {comunas} from '../variables.js'

export default {
    name: "DatosPersonales",
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
    },
    components: {
        SelEmpresas,
        SelComuna,
        SelContacto,
    }
    
}
</script>

<style>
.box-respuestas-1 {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    border-radius: 25px !important;
    margin-bottom: 0.5em;
}
#badge-steps {
    background-color: rgb(51, 121, 147);
    position: absolute;
    top: 0;
    right: 0;
    height: 45px;
    width: 45px;
    margin-top: -10px;
    font-size: 25px;
    font-weight: 700;
    border-style: solid;
    border-color: rgb(228, 172, 59);
    border-width: 3px;
}
.bottom {
    bottom: 0;
    position: relative;
}
.center {
    margin: 0 auto;
}
.row-length {
    width: 80%
}
@media screen and (max-width: 800px){
    .row-length {
    width: 100%;
    min-width: 325px;
    }
}
@media screen and (max-width: 565px){
    .col-md-6, .col-12 {
        padding: 0 !important;
    }
}
</style>