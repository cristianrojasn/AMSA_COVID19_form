<template>
    <div class="md-layout md-guttter" style="display:flex; justify-content:center;">
        <b-row class="row-length">
            <!----PREEXISTENCIAS---->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="3"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-id-card md-size-2x"></md-icon>
                            <span style="margin-left: 18px">Antecedentes de salud</span>
                            <p class="md-caption">
                            Indique si a usted le aplica alguna de las siguientes condiciones de salud. <b>EN CASO QUE NO:</b> marque la última opción!
                            </p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                            <table style="width:100%">
                                <tr v-for="(opciones) of ArrPreex" :key="opciones">
                                    <td>
                                        <md-checkbox class="md-primary"  @change="preexistencias" v-model="preex" :value="opciones">{{ opciones }}</md-checkbox>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <md-checkbox class="md-primary" @change="noPreexistencias" v-model="noPreex" value="NO TENGO ninguna de las condiciones de salud indicadas">NO TENGO ninguna de las condiciones de salud indicadas</md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <span
                            class="md-error"
                            v-if="!$v.preexFinal.validarPreex && $v.preexFinal.$dirty"
                            >Se requiere que seleccione una opción</span>
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>
        <b-row class="row-length">     
            <!----Sintomas COVID---->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="4"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-thermometer-full md-size-2x"></md-icon>
                            <span>Síntomas de COVID</span>
                            <p class="md-caption">
                            ¿En las últimas 24 horas usted o alguna de las personas con las que convive ha tenido alguno de los siguientes síntomas? - <strong>EN CASO QUE NO:</strong> marque la última opción!</p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                            <table style="width:100%">
                                <tr v-for="(itemes) of ArrSintomas" :key="itemes">
                                    <td class="celdaSintomas">
                                        <md-checkbox class="md-primary" @change="conSintomas" v-model="sintomas" :value="itemes">{{ itemes }}</md-checkbox>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <md-checkbox class="md-primary" @change="sinSintomas" v-model="noSintomas" value="NO TENGO ninguno de los síntomas indicados">
                                            NO TENGO ninguno de los síntomas indicados
                                        </md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <span
                            class="md-error"
                            v-if="!$v.sintomasFinal.validarSintomas && $v.sintomasFinal.$dirty"
                            >Se requiere que seleccione una opción</span>    
                    </md-card-content>    
                </md-card>
            </b-col>    
        </b-row>
        <b-row class="row-length">
            <!----CASOS CONFIRMADOS DE COVID O ESPERA PCR---->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="5"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-users md-size-2x"></md-icon>
                            <span style="margin-left: 18px">Casos COVID</span>
                            <p class="md-caption">
                            Para esta pregunta tenga presente que las personas que se han tomado PCR deben cumplir cuarentena obligatoria hasta que les sea notificado el resultado
                            </p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                            <table style="width:100%">
                                <tr v-for="(iteracion) of ArrCasos" :key="iteracion">
                                    <td class="celdaCasos">
                                        <md-checkbox class="md-primary" @change="updateCasos" v-model="casos" :value="iteracion">{{ iteracion }}</md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>    
                            <span
                            class="md-error"
                            v-if="!$v.casos.required && $v.casos.$dirty"
                            >Se requiere que seleccione una opción</span>
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>
        <b-row class="row-length">
            <!-------------------------VIAJES----------------------------->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="6"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-plane md-size-2x"></md-icon>
                            <span>Viajes</span>
                            <p class="md-caption">
                            Si no se identifica con alguno de los puntos, omita la pregunta - <strong>EN CASO QUE NO</strong>: marque la última opción!
                            </p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                            <table style="width:100%">
                                <tr v-for="(items) of ArrViajes" :key="items.dato">
                                    <td :style="items.estilo">
                                        <md-checkbox class="md-primary" @change="updateViajes" v-model="viajes" :value="items.dato">
                                        <span>{{ items.dato }}</span>
                                        </md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>
                            <span
                            class="md-error"
                            v-if="!$v.viajes.required && $v.viajes.$dirty"
                            >Se requiere que seleccione una opción</span>
                    </md-card-content>    
                </md-card>
            </b-col>    
        </b-row> 
        <b-row class="md-display-4">
                  <b-col>
                    <h4 id="titulo-seccion4" class="md-body-2">
                        <p>
                      <b>En relación a la siguiente pregunta, se entiende por contacto estrecho:</b><br>  
                        1. Haber mantenido más de 15 minutos de contacto cara a cara, a menos de un metro.
                        <br>
                        2. Haber compartido un espacio cerrado por 2 horas o más, en lugares tales como oficinas, trabajos, reuniones, colegios, entre otros.
                        <br>
                        3. Vivir o pernoctar en el mismo hogar o lugares similares a hogar, tales como, hostales, internados, instituciones cerradas, hogares de ancianos, hoteles, residencias, entre otros.
                        <br>
                        4. Haberse trasladado en cualquier medio de transporte cerrado a una proximidad menor de un metro con otro ocupante del medio de transporte que esté contagiado.                                            
                        </p>  
                    </h4>
                  </b-col>
        </b-row>
        <b-row class="row-length">
            <!-------------------------CONTACTO COVID----------------------------->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="7"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-handshake-o md-size-2x"></md-icon>
                            <span style="margin-left: 18px">Contacto COVID</span>
                            <p class="md-caption">
                            ¿Durante su descanso usted o alguna de las personas con las que usted 
                            convive tuvo contacto con alguna de las siguientes personas (en reuniones
                            sociales, familiares o de cualquier tipo, en medios de transporte aéreo o 
                            terrestre o de cualquier otra forma o circunstancia)?
                            </p>
                            <img
                            class="centered imagContg"
                            width="280px"
                            height="280px"
                            src="../assets/tablero.png"
                            >
                            <!-- <img :src="'../assets/AMSA-logo.png'" :alt="'Contacto COVID'" class="imagenContacto"> -->
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div>
                            <md-radio @change="updateContacto" v-model="radio" value="Si">Sí</md-radio>
                            <md-radio @change="updateContacto" v-model="radio" value="No">No</md-radio>
                        </div>
                        <span
                            class="md-error"
                            v-if="!$v.radio.required && $v.radio.$dirty"
                            >Se requiere que seleccione una opción</span>
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>
        <b-row class="row-length">
            <!-------------------------Profesionales de la salud----------------------------->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="8"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-hospital-o md-size-2x"></md-icon>
                            <span style="margin-left: 18px">¿Alguna de las personas con las que convive, trabaja o ha visitado 
                            trabaja en alguna entidad que maneje pacientes Covid-19?</span>
                            <p class="md-caption">
                            Hospitales, centros de salud, residencias sanitarias o que maneje muestras de laboratorio 
                            para procesar exámenes de diagnóstico para Covid-19 (laboratorios, clínicas, 
                            toma de pruebas en espacios públicos tipo “drive thru”, etc) 
                            </p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div>
                            <md-radio @change="updateSalud" v-model="salud" value="Si">Sí</md-radio>
                            <md-radio @change="updateSalud" v-model="salud" value="No">No</md-radio>
                        </div>
                        <span
                            class="md-error"
                            v-if="!$v.salud.required && $v.salud.$dirty"
                            >Se requiere que seleccione una opción</span>
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>                   
    </div>
</template>

<script>

import {ArrPreex,ArrSintomas,ArrCasos,ArrViajes} from '../variables.js'
import { required } from 'vuelidate/lib/validators'

//Custom validations
const validarPreex = (value) => {
    if(value.length == 0){
        return false
    }else {
        return true
    }
}
const validarSintomas = (value) => {
    if(value.length == 0){
        return false
    }else {
        return true
    }
}


export default {
    name: "Selpreexistencias",
    data() {
        return {
            ArrPreex,
            ArrSintomas,
            ArrCasos,
            ArrViajes,
            noPreex: null,
            preex:[],
            preexFinal: [],
            noSintomas: null,
            sintomas:[],
            sintomasFinal: [],
            casos:null,
            viajes:null,
            radio:null,
            salud:null,
        }
    },
    validations: {
        preexFinal: {
            validarPreex
        },
        sintomasFinal: {
            validarSintomas
        },
        casos: {
            required
        },
        viajes: {
            required,
        },
        radio: {
            required
        },
        salud: {
            required
        }
    },
    methods: {
        //Emitir datos al componente padre
        /*
        getImagesUrl('imagenContacto'){
        return require('../assets/AMSA-logo.png')
        }
        */
        updatePreexistencias(datos){
            this.$emit('updateDataPreex', {data: datos, campo: "preex"})
        },
        updateSintomas(datos){
            this.$emit('updateDataPreex', {data: datos, campo: "sintomas"})
        },
        updateCasos(){
            this.$emit('updateDataPreex', {data: this.casos, campo: "casos"})
        },
        updateViajes(){
            this.$emit('updateDataPreex', {data: this.viajes, campo: "viajes"})
        },
        updateContacto(){
            this.$emit('updateDataPreex', {data: this.radio, campo: "radio"})
        },
        updateSalud(){
            this.$emit('updateDataPreex', {data: this.salud, campo: "salud"})
        },
        preexistencias(){
            this.noPreex = null
            this.preexFinal = this.preex
            this.updatePreexistencias(this.preexFinal)
        },
        noPreexistencias(){
            this.preex = []
            this.preexFinal = [this.noPreex]
            if(this.preexFinal.includes(null)){
                this.preexFinal = []
            }
            this.updatePreexistencias(this.preexFinal)
        },
        conSintomas(){
            this.noSintomas = null
            this.sintomasFinal = this.sintomas
            this.updateSintomas(this.sintomasFinal)
        },
        sinSintomas(){
            this.sintomas = []
            this.sintomasFinal = [this.noSintomas]
            if(this.sintomasFinal.includes(null)){
                this.sintomasFinal = []
            }
            this.updateSintomas(this.sintomasFinal)
        },
        validar(){
            this.$v.$touch()
        },
        ifVal(){
            return this.$v.$invalid
        }
    },
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
    width: 100%
}

table {
    width: 100%;
    table-layout: fixed;
}

.table-selector{
    max-width: 800px;
}

tr, td {
    height: auto;
}
.centered {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
}
.imagContg {
  width: 70%;
  height: auto;
  max-width:400px;
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
    .celdaSintomas {
        padding-bottom: 24px;
    }
    .celdaCasos {
        padding-bottom: 55px;
    }
}
</style>