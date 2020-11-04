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
                        <!-- <p class="md-caption">
                        ( RUT SIN GUION: ejemplo 123456789 - el k se reemplaza con 0)
                        </p> -->
                    </md-card-header>
                    <md-card-content>
                        <md-field :class="getValidationClass('nombreSol')">
                            <label for="nombre">Nombre</label>
                            <md-input ref="nombreSol" @input="updateNombreSol" name="nombre" id="nombre"  autocomplete="given-name" v-model="nombreSol"/>
                            <span
                            class="md-error"
                            v-if="!$v.nombreSol.required"
                            >Se requiere que ingrese su nombre</span>
                        </md-field>
                        <!-- Apellido -->
                        <md-field :class="getValidationClass('apellidoSol')">
                            <label for="apellido">Apellido</label>
                            <md-input ref="apellidoSol" @input="updateApellidoSol" name="apellido" id="apellido"  autocomplete="given-name" v-model="apellidoSol"/>
                            <span
                            class="md-error"
                            v-if="!$v.apellidoSol.required"
                            >Se requiere que ingrese su apellido</span>
                        </md-field>
                        
                        <!-- RUT -->
                            <md-field :class="getValidationClass('rut')">
                            <label for="rut">RUT</label>
                            <md-input ref="rut" @input="updateRut" name="rut" id="rut"  autocomplete="given-name" v-model="rut"/>
                            <span class="md-helper-text">Ejemplo: 123456789 (reemplazar 0 por k)</span>
                            <!-- <span
                            class="md-error"
                            v-if="!$v.rut.minLength || !$v.rut.maxLength"
                            >El número de dígitos del rut no es válido</span> -->
                            <span
                            class="md-error"
                            v-if="!$v.rut.numeric || !$v.rut.validarRut"
                            >Rut inválido</span>
                        </md-field>
                        
                        <!-- Fecha de nacimiento -->
                        <md-datepicker ref="cumple" :class="getValidationClass('cumple')" id="datePicker" @input="updateCumple" v-model="cumple" :md-open-on-focus="false">
                        <label>Fecha de nacimiento</label>
                        <span class="md-helper-text">Formato: dd/mm/aaaa</span>
                        <span
                            class="md-error"
                            v-if="!$v.cumple.required || $v.cumple.validarFechaNac"
                            >Ingrese su fecha de nacimiento con formato dd/mm/aaaa</span>
                        </md-datepicker>
                        <!-- Número de convivientes -->
                        <md-field :class="getValidationClass('conv')">
                        <label>Número de convivientes</label>
                        <md-input ref="conv" @input="updateConvivientes" min="0" v-model="conv" type="number"></md-input>
                        <span
                            class="md-error"
                            v-if="!$v.conv.integer || !$v.conv.minValue || !$v.conv.required"
                            >Se requiere que ingrese un N° de convivientes válido</span>
                        </md-field>
                        <!-- Previsión -->
                        <md-field :class="getValidationClass('prevision')">
                            <label for="prevision">Previsión</label>
                            <md-select ref="prevision" @input="updatePrevision" name="prevision" id="prevision" v-model="prevision" md-dense>
                                <md-option v-for="prev of previsiones" :key="prev" :value="prev">
                                    {{ prev }}
                                </md-option>
                            </md-select>
                            <span
                            class="md-error"
                            v-if="!$v.prevision.required"
                            >Se requiere que ingrese su previsión</span>
                        </md-field>    
                        <md-field :class="getValidationClass('reg')">
                            <label>
                            <md-icon class="fa fa-location-arrow md-size-1x"></md-icon>
                            <span>Región</span>
                            </label>
                            <md-select ref="reg" @input="updateRegion" name="region" id="region" v-model="reg">
                            <md-option
                                v-for="(regi,index) of Object.keys(comunas)"
                                :key="regi"
                                :value="Object.keys(comunas)[index]"
                            >{{ regi }}</md-option>
                            </md-select>
                            <span
                            class="md-error"
                            v-if="!$v.reg.required"
                            >Se requiere que ingrese la región</span>
                            <!-- <span
                            class="md-error"
                            v-else-if="!$v.form.gerencia.minlength"
                            >El dato ingresado no cumple con el largo mínimo</span> -->
                        </md-field>
                        <md-field :class="getValidationClass('com')">
                            <label for="comuna">Comuna</label>
                            <label
                            v-if="reg === null"
                            for="comuna"
                            >Comuna</label>
                            <md-select ref="com"
                            @input="updateComuna"
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
                            <span
                            class="md-error"
                            v-if="!$v.com.required"
                            >Se requiere que ingrese la comuna</span> 
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
                            <br>
                            VPACS: Asuntos Corporativos y Sustentabilidad
                            </p>
                        </div>
                    </md-card-header>
                    <md-card-content>
                    <!---------- Seccion Número telefono--------->
                        <md-field :class="getValidationClass('numeroTel')">
                            <label for="numeroTel">Número de teléfono</label>
                            <span class="md-prefix">+569</span>
                            <md-input ref="numeroTel" @input="updateNumeroTel" type="tel" name="numeroTel" id="numeroTel"  autocomplete="given-name" v-model="numeroTel"/>
                            <span
                            class="md-error"
                            v-if="!$v.numeroTel.required"
                            >Se requiere que ingrese su número de teléfono</span>
                            <span
                            class="md-error"
                            v-if="!$v.numeroTel.minLength || !$v.numeroTel.maxLength"
                            >El número de teléfono no es válido</span>
                        </md-field>
                    <!---------- Seccion Correo personal--------->
                        <md-field :class="getValidationClass('correo')">
                            <label for="correo">Correo</label>
                            <md-input ref="correo" @input="updateCorreo" type="email" name="correo" id="correo"  autocomplete="given-name" v-model="correo"/>
                            <span
                            class="md-error"
                            v-if="!$v.correo.required"
                            >Se requiere que ingrese su correo</span>
                            <span
                            class="md-error"
                            v-if="!$v.correo.email"
                            >Se requiere que ingrese un correo válido</span>
                        </md-field>    
                <!---------- Seccion Correo supervisor --------->
                        <md-field :class="getValidationClass('correoSup')">
                            <label for="correo_sup">Correo supervisor</label>
                            <md-input ref="correoSup" @input="updateCorreoResp" type="email" name="correo_sup" id="correo_sup"  autocomplete="given-name" v-model="correoSup"/>
                            <span
                            class="md-error"
                            v-if="!$v.correoSup.required"
                            >Se requiere que ingrese su correo</span>
                            <span
                            class="md-error"
                            v-if="!$v.correoSup.email"
                            >Se requiere que ingrese un correo válido</span>
                        </md-field>
                <!---------- Seccion Cargos --------->        
                        <md-field :class="getValidationClass('car')">
                            <label for="puestos">Cargo</label>
                            <md-select ref="car" @input="updateCargo" name="puestos" id="puestos" v-model="car" md-dense>
                                <md-option v-for="cargo of cargos" :key="cargo" :value="cargo">
                                    {{ cargo }}
                                </md-option>
                            </md-select>
                            <span
                            class="md-error"
                            v-if="!$v.car.required"
                            >Se requiere que ingrese su cargo</span>
                        </md-field>
                <!---------- Seccion turno ---------->
                        <md-field :class="getValidationClass('turn')">
                            <label for="turno">Turno</label>
                            <md-select ref="turn" @input="updateTurno" name="turno" id="turno" v-model="turn" md-dense>
                                <md-option v-for="tu of turnos" :key="tu" :value="tu">
                                    {{ tu }}
                                </md-option>
                            </md-select>
                            <span
                            class="md-error"
                            v-if="!$v.turn.required"
                            >Se requiere que ingrese su turno</span>
                        </md-field>
                <!---------- Seccion Piso ---------->        
                        <md-field :class="getValidationClass('area')">
                            <label for="area">Piso edificio corporativo</label>
                            <md-select ref="area" @input="updateArea" name="area" id="area" v-model="area" md-dense>
                                <md-option v-for="ar of areas" :key="ar" :value="ar">
                                    {{ ar }}
                                </md-option>
                            </md-select>
                            <span
                            class="md-error"
                            v-if="!$v.area.required"
                            >Se requiere que ingrese su piso</span>
                        </md-field>
                <!---------- Seccion VP---------->        
                        <md-autocomplete :class="getValidationClass('vicepresidencia')" ref="vicepresidencia" @input="updateVicepresidencia" name="vp" id="vp" v-model="vicepresidencia" :md-options="vicepresidencias" md-dense>
                        <label>Vicepresidencia/compañía </label>
                        <span
                            class="md-error"
                            v-if="!$v.vicepresidencia.required"
                            >Se requiere que ingrese una vicepresidencia</span>
                        </md-autocomplete>
                <!---------- Seccion empresa---------->       
                        <md-autocomplete ref="empresa" :class="getValidationClass('empresa')" @input="updateEmpresa" name="empresa" id="empresa" v-model="empresa" :md-options="empresas" md-dense>
                        <label>Empresa</label>
                        <span
                            class="md-error"
                            v-if="!$v.empresa.required"
                            >Se requiere que ingrese una empresa</span>
                        </md-autocomplete>                                                 
                    </md-card-content>
                </md-card>
            </b-col>   
        </b-row>        
    </div>
</template>

<script>
//import { validationMixin } from 'vuelidate'
import {cargos,turnos,areas,empresas,vicepresidencias,previsiones,comunas} from '../variables.js'
import { required, email, minLength, maxLength, numeric, minValue, integer } from 'vuelidate/lib/validators'

//Custom validations ---------------------------------------
//Validación del rut con el algoritmo Módulo 11
const validarRut = (value) => {
    try {
        const rutSinDV = value.split('').slice(0,length-1).reverse();
        const DV = value[value.length-1];
        let sumaRut = 0
        let num = 2;
        for (let digit of rutSinDV) {
            sumaRut+=Number(digit) * num;
            num++;
            if(num>7){
                num = 2
            }
        }
        // División por 11
        const sumaRutDiv11 = sumaRut/11;
        //Trunca, multiplica por 11, resta entre sumaRut y valor truncado por 11, resta 11
        let DVcalc = 11 - (sumaRut - Math.trunc(sumaRutDiv11) * 11);
        if(DVcalc==11 || DVcalc==10){
            DVcalc = 0;
        }
        if(DVcalc == DV){
            return true
        }else {
            return false
        }
    }catch{
        return false
    }
}

//Validación de la fecha de nacimiento
const validarFechaNac = (value) => {
    try{
        return typeof(value)=="object" //|| value.toString().includes('/')
    }catch{
        return false
    }
}

export default {
    name: "DatosPersonales",
    //mixins: [validationMixin],
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
            numeroTel: null,
            cumple: null,
            conv: null,
            prevision: null,
            reg:null,
            com:null,
            correo: null,
            correoSup:null,
            car:null,
            turn:null,
            area:null,
            empresa:null,
            vicepresidencia:null,    
        }
    },
    
    methods: {
        //Emitir datos al componente padre
        updateRut(){
            this.$emit('updateData', {data: this.rut, campo: "rut"})
        },
        updateNombreSol(){
            this.$emit('updateData', {data: this.nombreSol, campo:"nombreSol"})
        },
        updateApellidoSol(){
            this.$emit('updateData', {data: this.apellidoSol, campo: "apellidoSol"})
        },
        updateNumeroTel(){
            this.$emit('updateData', {data: this.numeroTel, campo: "numeroTel"})
        },
        updateCumple(){
            const strDate = this.cumple.getDate() + "/" + (this.cumple.getMonth() + 1) + "/" + this.cumple.getFullYear()
            this.$emit('updateData', {data: strDate, campo: "cumple"})
        },
        updateConvivientes(){
            this.$emit('updateData', {data: this.conv, campo: "conv"})
        },
        updatePrevision(){
            this.$emit('updateData', {data: this.prevision, campo: "prevision"})
        },
        updateRegion(){
            this.$emit('updateData', {data: this.reg, campo: "reg"})
        },
        updateComuna(){
            this.$emit('updateData', {data: this.com, campo: "com"})
        },
        updateCorreo(){
            this.$emit('updateData', {data: this.correo, campo: "correo"})
        },
        updateCorreoResp(){
            this.$emit('updateData', {data: this.correoSup, campo: "correoSup"})
        },
        updateCargo(){
            this.$emit('updateData', {data: this.car, campo: "car"})
        },
        updateTurno(){
            this.$emit('updateData', {data: this.turn, campo: "turn"})
        },
        updateArea(){
            this.$emit('updateData', {data: this.area, campo: "area"})
        },
        updateEmpresa(){
            this.$emit('updateData', {data: this.empresa, campo: "empresa"})
        },
        updateVicepresidencia(){
            this.$emit('updateData', {data: this.vicepresidencia, campo: "vicepresidencia"})
        },
        getValidationClass (fieldName) {
        const field = this.$v[fieldName]
        if (field) {
            return {
                'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        validar(){
            this.$v.$touch()
        },
        ifVal(){
            return this.$v.$invalid
        },
        focusOnInvalid(){
            // 1. Es necesario que cada input tenga un atributo ref con el mismo nombre de v-model
            for(let key in Object.keys(this.$v)){
                // 2. Extraer los inputs de este componente
                const input = Object.keys(this.$v)[key];
                // 3. Remover propiedades que no importan
                if (input.includes("$")) return false;

                    // 4. Chequear si hay error en algún input
                if (this.$v[input].$error) {
                    // 5. Hacer focus en el elemento que hay error
                    this.$refs[input].$el.focus();

                    // 6. Una vez encontrado el input, terminar el loop
                    break;
                }
            }
        },
        resetPrimeraPag(){
            this.$v.$reset();
            this.rut = null
            this.nombreSol = null
            this.apellidoSol = null
            this.numeroTel = null
            this.cumple = null
            this.conv = null
            this.prevision = null
            this.reg = null
            this.com = null
            this.correo = null
            this.correoSup = null
            this.car = null
            this.turn = null
            this.area = null
            this.empresa = null
            this.vicepresidencia = null
        }
    }, 
    validations: {
        rut: {
            required,
            numeric,
            validarRut
        },
        nombreSol: {
            required
        },
        apellidoSol: {
            required
        },
        numeroTel: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(8),
            numeric
        },
        conv: {
            required,
            integer,
            minValue: minValue(0)
        },
        cumple: {
            required,
            validarFechaNac
        },
        prevision: {
            required
        },
        reg: {
            required
        },
        com: {
            required
        },
        correo: {
            required,
            email
        },
        correoSup: {
            required,
            email
        },
        car: {
            required
        },
        turn: {
            required
        },
        area: {
            required
        },
        empresa: {
            required
        },
        vicepresidencia: {
            required
        },
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

/* #datePicker svg {
    fill: var(--md-theme-default-icon-on-background, rgba(252, 11, 11, 0.54)) !important;
} */
/*.md-icon.md-theme-default.md-icon-image svg*/
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