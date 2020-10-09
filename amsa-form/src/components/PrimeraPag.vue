<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <b-row class="row-length">
            <!--Nombre-->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="1"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Nombre</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="nombre">Nombre</label>
                            <md-input name="nombre" id="nombre"  autocomplete="given-name" v-model="nombreSol"/>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
            <!--Apellido-->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="2"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Apellido</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="apellido">Apellido</label>
                            <md-input name="apellido" id="apellido"  autocomplete="given-name" v-model="apellidoSol"/>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
                    <!--RUT-->
            <b-col class="box-respuestas-1" cols="12" md="4">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="3"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>RUT</span>
                        </div>
                        <p class="md-caption">
                        (SIN GUION: ejemplo 123456789 - el k se reemplaza con 0)
                        </p>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                            <label for="rut">123456789</label>
                            <md-input name="rut" id="rut"  autocomplete="given-name" v-model="rut"/>
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>    
        </b-row>
        <!--Fila con correo y número de contacto-->
        <!--Datos de la empresa-->
            <!--Empresa-->
        <SelCumple/>
        <!--<SelEmpresas/>-->        
        <!--Correo-->
        <b-row class="row-length">
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="7"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-user md-size-2x"></md-icon>
                            <span>Correo electrónico</span>
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
                    <md-card-header>
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
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
        <!--Datos de la empresa-->
            <!--Empresa-->
        <SelEmpresas/>
        <!--<SelEmpresas/>-->
        
    </div>
</template>

<script>

import SelEmpresas from '../components/SelEmpresas.vue';
import SelCumple from '../components/b-day.vue';

export default {
    name: "DatosPersonales",
    data() {
        return {
            descripcion: null,
            rut: null,
            nombreSol: null,
            apellidoSol: null,
            correoSol: null,
            numeroTel: null,
        }
    },
    components: {
        SelCumple,
        SelEmpresas,
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