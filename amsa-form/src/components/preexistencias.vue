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
                                <tr v-for="(opciones,indice) of ArrPreex" :key="opciones">
                                    <td>
                                        <md-checkbox v-model="preex[indice]" :value="opciones">{{ opciones }}</md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>    
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>
        <b-row>     
            <!----Sintomas COVID---->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="4"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-thermometer-full md-size-2x"></md-icon>
                            <span>Síntomas de COVID</span>
                            <p class="md-caption">
                            ¿En las últimas 24 horas usted o alguna de las personas con las que convive ha tenido alguno de los siguientes síntomas? - <b>EN CASO QUE NO:</b> marque la última opción!</p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                            <table style="width:100%">
                                <tr v-for="(itemes,indice) of ArrSintomas" :key="itemes">
                                    <td>
                                        <md-checkbox v-model="sintomas[indice]" :value="itemes">{{ itemes }}</md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>    
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
                                <tr v-for="(iteracion,indice) of ArrCasos" :key="iteracion">
                                    <td>
                                        <md-checkbox v-model="casos[indice]" :value="iteracion">{{ iteracion }}</md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>    
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>
        <b-row>
            <!-------------------------VIAJES----------------------------->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="6"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-plane md-size-2x"></md-icon>
                            <span>Viajes</span>
                            <p class="md-caption">
                            Si no se identifica con alguno de los puntos, omita la pregunta - <b>EN CASO QUE NO</b>: marque la última opción!
                            </p>
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div class="md-layout table-selector" style="display:flex; justify-content:center; margin: 0 auto;">
                            <table style="width:100%">
                                <tr v-for="(items,indice) of ArrViajes" :key="items">
                                    <td>
                                        <md-checkbox v-model="viajes[indice]" :value="items">{{ items }}</md-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>    
                    </md-card-content>    
                </md-card>
            </b-col>    
        </b-row> 
        <b-row class="md-display-4">
                  <b-col>
                    <h4 id="titulo-seccion4" class="md-body-2">
                      <b>En relación a la siguiente pregunta, se entiende por contacto estrecho:</b>  
                      <ul>
                        <li>Haber mantenido más de 15 minutos de contacto cara a cara, a menos de un metro.</li>
                        <li>Haber compartido un espacio cerrado por 2 horas o más, en lugares tales como oficinas, trabajos, reuniones, colegios, entre otros.</li>
                        <li>Vivir o pernoctar en el mismo hogar o lugares similares a hogar, tales como, hostales, internados, instituciones cerradas, hogares de ancianos, hoteles, residencias, entre otros.</li>
                        <li>Haberse trasladado en cualquier medio de transporte cerrado a una proximidad menor de un metro con otro ocupante del medio de transporte que esté contagiado.</li>
                      </ul>                       
                    </h4>
                  </b-col>
        </b-row>
        <b-row>
             <!-------------------------CONTACTO COVID----------------------------->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="6"/>
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
                            class="centered"
                            width="280px"
                            height="280px"
                            src="../assets/tablero.png"
                            >
                            <!-- <img :src="'../assets/AMSA-logo.png'" :alt="'Contacto COVID'" class="imagenContacto"> -->
                        </div>
                    </md-card-header>    
                    <md-card-content>
                        <div>
                            <md-radio v-model="radio" value="Si">Sí</md-radio>
                            <md-radio v-model="radio" value="No">No</md-radio>
                        </div>
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>
        <b-row>
             <!-------------------------Profesionales de la salud----------------------------->
            <b-col class="box-respuestas-1" cols="12" md="12">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="7"/>
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
                            <md-radio v-model="salud" value="Si2">Sí</md-radio>
                            <md-radio v-model="salud" value="No2">No</md-radio>
                        </div>
                    </md-card-content>    
                </md-card>
            </b-col>
        </b-row>                   
    </div>
</template>

<script>

import {ArrPreex,ArrSintomas,ArrCasos,ArrViajes} from '../variables.js'

export default {
    name: "Selpreexistencias",
    data() {
        return {
            ArrPreex,
            ArrSintomas,
            ArrCasos,
            ArrViajes,
            preex:{},
            sintomas:{},
            casos:{},
            viajes:{},
            radio:null,
            salud:null,
        }
    }
}
/*
methods: {
    getImagesUrl('imagenContacto'){
        return require('../assets/AMSA-logo.png')
    }
*/

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

.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
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