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
                    <md-card-content>
                    <!---------- Seccion Nimero telefono--------->
                        <md-field>
                            <label for="numeroTel">Número de teléfono</label>
                            <span class="md-prefix">+569</span>
                            <md-input type="tel" name="numeroTel" id="numeroTel"  autocomplete="given-name" v-model="numeroTel"/>
                        </md-field>
                    <!---------- Seccion Correo personal--------->
                        <md-field>
                            <label for="correo">Correo</label>
                            <md-input type="email" name="correo" id="correo"  autocomplete="given-name" v-model="correo"/>
                        </md-field>    
                <!---------- Seccion Correo supervisor --------->
                        <md-field>
                            <label for="correo_sup">Correo supervisor</label>
                            <md-input type="email" name="correo_sup" id="correo_sup"  autocomplete="given-name" v-model="correoSup"/>
                        </md-field>
                <!---------- Seccion Cargos --------->        
                        <md-field>
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
                <!---------- Seccion Piso ---------->        
                        <md-field>
                            <label for="area">Piso de destino</label>
                            <md-select name="area" id="area" v-model="area" md-dense>
                                <md-option v-for="ar of areas" :key="ar" :value="ar">
                                    {{ ar }}
                                </md-option>
                            </md-select>
                        </md-field>
                <!---------- Seccion VP---------->        
                        <md-autocomplete name="vp" id="vp" v-model="vicepresidencia" :md-options="vicepresidencias" md-dense>
                        <label>Vicepresidencia</label>
                        </md-autocomplete>
                <!---------- Seccion empresa---------->        
                        <md-autocomplete name="empresa" id="empresa" v-model="empresa" :md-options="empresas" md-dense>
                        <label>Empresa</label>
                        </md-autocomplete>                                                 
                    </md-card-content>
                </md-card>
            </b-col>   
        </b-row>        
    </div>
</template>

<script>
import {cargos,turnos,areas,empresas,vicepresidencias,previsiones,comunas} from '../variables.js'

export default {
    name: "DatosPersonales",
    data() {
        return {
            cargos,
            turnos,
            areas,
            empresas,
            vicepresidencias,
            previsiones,
            comunas,
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
            correoSup:null,
            car:null,
            turn:null,
            correo:null,
            area:null,
            empresa:null,
            vicepresidencia:null,    
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