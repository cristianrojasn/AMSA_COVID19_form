<template>
  <div class="master-form">
    <div class="personal-form" style="width:100%; margin-top:2rem; margin-bottom: 2rem;">

      <!--Se debe incluir todos los inputs del form dentro del tag form-->
      <form novalidate class="md-layout" md-large-size-100 @submit.prevent="validateUser">

        <!--Todo el contenido está dentro del tag md-card-->
        <md-card class="md-layout-item md-size-100 md-small-size-100 formulario">

            <!--El header contiene el nombre del formulario y el logo de la empresa-->
            <md-card-header>

              <!--Contenido del header-->
              <b-container fluid>
                <b-row class="md-title">
                  <b-col>
                    <h2
                      id="titulo-foro"
                      class="md-display-2"
                      >
                      <b>AMSA</b> Evaluación COVID19
                    </h2>
                  </b-col>
                  <b-col md="auto">
                    <img
                    class="responsive-img"
                    width="300px"
                    height="300px"
                    src="../assets/AMSA-logo.png"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </md-card-header>
            <!--Fin del header del form-->

            <md-divider></md-divider>
            
            <!--Inicio del contenido del form. Debe estar contenido en md-card-content-->
            <md-card-content>
              <DatosPersonales ref="PrimeraPagina" @updateData="update"/>
            </md-card-content>
            <md-divider></md-divider>
            <md-card-header>
              <!--Contenido del título de sección 2-->
              <b-container fluid>
                <b-row class="md-display-4">
                  <b-col>
                    <h4
                      id="titulo-seccion3"
                      class="md-headline"
                      >
                      <b>Condiciones de salud y síntomas COVID</b>
                    </h4>
                  </b-col>
                </b-row>
                <!-- Decripción -->
                <b-row class="md-display-4">
                  <b-col>
                    <h4 id="titulo-seccion4" class="md-subheading">
                      <p>
                      SI TIENE alguna o varias ENFERMEDAD(ES) CRÓNICA(S) usted <b>debe comunicarse con su jefatura</b> para recibir instrucciones.
                      <br>
                      Si usted es comunicado durante su jornada laboral que algún familiar o alguna de las personas con las que usted convive o que en su vuelo o medio de traslado al trabajo <b>presentó casos positivos</b> Covid-19 DEBE DAR <b>AVISO INMEDIATO a su supervisor</b>.                     
                      </p>
                    </h4>
                  </b-col>
                </b-row>                
              </b-container>
            </md-card-header>
            <!--Inicio del contenido de COVID-->
            <md-card-content>
              <Selpreexistencias ref="seccionPreex" @updateDataPreex="updatePreex"/>
            </md-card-content>
            <md-divider></md-divider>
            <md-card-header>
              <!--Contenido del título de sección 2-->
              <b-container fluid>
                <b-row class="md-display-4">
                  <b-col>
                    <h4
                      id="titulo-seccion3"
                      class="md-headline"
                      >
                      <b>Prevención COVID en las instalaciones</b>
                    </h4>
                  </b-col>
                </b-row>
                <!-- Decripción -->
                <b-row class="md-display-4">
                  <b-col>
                    <img
                      class="centered"
                      width="280px"
                      height="280px"
                      src="../assets/prevencion-contagio.png"
                      >
                  </b-col>
                </b-row>
                <b-row class="md-display-4">
                  <b-col>
                    <!-- <h3 id="titulo-final" class="md-subheading">
                    Prohibiciones de ingreso al lugar de trabajo por cuarentenas                      
                    </h3> -->
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>    
                    <h4 id="titulo-seccion3" class="md-subheading">
                      <p>
                        <br>
                        Si usted se encuentra en cualquiera de las siguientes situaciones, tenga presente que <b>no puede ingresar a su lugar de trabajo (faena u oficinas)</b>:
                        <br><br>
                        1. Residir en una comuna con <b>cuarentena</b> y <b>no contar con permiso</b> de la Autoridad para trasladarse desde su comuna de residencia hacia su lugar de trabajo y viceversa.
                      <br>    
                      2. Ser usted un <b>“caso confirmado con Covid-19”, un “caso probable”, un “contacto estrecho” o un “caso sospechoso”</b> y <b>no haber completado la cuarentena de 14 días</b> que es obligatoria en todos estos casos según la normativa vigente.
                      <br><br>
                      Esta prohibición de ingreso, relacionada con cuarentenas dispuestas por la Autoridad, es sin perjuicio de aquellas cuarentenas que pudieren afectarle por disposición de la Empresa, en cuyo caso tampoco podrá ingresar a su lugar de trabajo, mientras no se complete el cumplimiento de la medida.
                      </p>                    
                    </h4>                    
                  </b-col>
                </b-row>                
              </b-container>
            </md-card-header>
            <md-card-actions style="justify-content: center;">
              <md-button
              type="submit"
              style="background-color: rgb(51, 121, 147); width: 150px; border-style: solid;border-color: rgb(228, 172, 59);border-width: 2px;"
              class="md-raised md-primary"
              >Enviar</md-button>
            </md-card-actions>
          </md-card>
      </form>
    </div>
  </div>
</template>

<script>
import DatosPersonales from '../components/PrimeraPag.vue';
import Selpreexistencias from '../components/preexistencias.vue';
import Firebase from 'firebase';
import apiFire from '../config';


// Inicializamos la interacción con el servicio de firebase realtime daa base
let app = Firebase.initializeApp(apiFire); // se debe inicializar con las credenciales
let db = app.database();
let registerRef = db.ref('registers');

export default {
    name: 'AMSAform',
    components: {
      DatosPersonales,
      Selpreexistencias,
    },
    data(){
      return {
        form: {
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
          preex:[],
          sintomas:[],
          casos:null,
          viajes:null,
          radio:null,
          salud:null
        }
      }
    },  
    methods: {
      update(value){
        this.form[value.campo] = value.data
      },
      updatePreex(value){
        this.form[value.campo] = value.data
      },
      sendDataFirebase(){
        let newRef = registerRef.push();
        this.$set(this.form, 'timestamp', this.getNow())
        newRef.set(this.form);
      },
      getNow: function () {
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      return dateTime
    },

      validateUser(){
        //this.$v.$touch()
        this.$refs.seccionPreex.validar()
        this.$refs.PrimeraPagina.validar()
        if (!this.$refs.PrimeraPagina.ifVal() && !this.$refs.seccionPreex.ifVal()) {
          console.log('Datos enviados')
          this.sendDataFirebase()
        }
      }
    },
    firebase: {
    registers: registerRef,
  }
  
}
</script>

<style>
.master-form {
    display: flex;
    justify-content: center;
}
.personal-form {
    display: flex;
    justify-content: center;
}
.master-form form {
    width: 85%;
    max-width: 2500px;
}
.formulario {
padding: 2rem;
background-image: repeating-linear-gradient(
    120deg,
    #fdfbfb 30%,
    rgba(193, 222, 233, 0.623) 70%
);
/* background: linear-gradient(130deg, #fdfbfb 60%, rgb(197, 197, 197) 60%); */
}

.box-respuestas {
  min-width: 325px;
  margin-top: 30px;
  padding: 1rem;
  border-radius: 25px;
  margin: 10px;
}
.rounded {
  border-radius: 25px !important;
}
.box-100 {
  min-width: 325px;
  margin-top: 30px;
  padding: 1rem;
  border-radius: 25px;
  margin: 10px;
}

.box-100 {
  min-width: 325px;
  margin-top: 30px;
  padding: 1rem;
  border-radius: 25px;
  margin: 10px;
}
.box-compromisos {
  max-width: 1800px;
  width: 1800px;
}
.box-respuestas-1 {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  border-radius: 25px;
  margin-bottom: 0.5em;
}
#banner-red {
  background-color: red;
}
#banner-green {
  background-color: green;
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
.box-respuestas-2 {
  max-width: 800px;
  min-width: 350px;
  margin: 1rem;
  padding-top: 1rem;
  border-radius: 25px;
}
.table-selector {
  max-width: 800px;
}
.compromisos {
  margin-top: 40px;
  margin-bottom: 50px;
}
.md-error {
  color: red;
}
/*
table {
  width: 100%;
  table-layout: fixed;
  th {
    text-align: left;
  }
}
*/

@media screen and (max-width: 1080px) {
  .master-form form {
    width: 100%;
  }
  #titulo-foro {
    text-align: center;
  }
}
</style>