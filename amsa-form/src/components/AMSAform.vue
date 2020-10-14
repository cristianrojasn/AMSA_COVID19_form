<template>
  <div class="master-form">
    <div class="personal-form" style="width:100%; margin-top:2rem; margin-bottom: 2rem;">

      <!--Se debe incluir todos los inputs del form dentro del tag form-->
      <form novalidate class="md-layout" md-large-size-100>

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
                      <b>AMSA</b> Autoevaluación COVID19
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
              <DatosPersonales/>
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
                    <h4 id="titulo-seccion3" class="md-subheading">
                      <ul>
                        <li>SI TIENE alguna o varias ENFERMEDAD(ES) CRÓNICA(S) usted <b>debe comunicarse con su jefatura</b> para recibir instrucciones.</li>
                        <li>Si usted es comunicado durante su jornada laboral que algún familiar o alguna de las personas con las que usted convive o que en su vuelo o medio de traslado al trabajo <b>presentó casos positivos</b> Covid-19 DEBE DAR <b>AVISO INMEDIATO a su supervisor</b>.</li>
                      </ul>                       
                    </h4>
                  </b-col>
                </b-row>                
              </b-container>
            </md-card-header>
            <!--Inicio del contenido de COVID-->
            <md-card-content>
              <Selpreexistencias/>
            </md-card-content>
          </md-card>
      </form>
    </div>
  </div>
</template>

<script>
import DatosPersonales from '../components/PrimeraPag.vue';
import Selpreexistencias from '../components/preexistencias.vue';

export default {
    name: 'AMSAform',
    components: {
      DatosPersonales,
      Selpreexistencias,
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
@media screen and (max-width: 1080px) {
  .master-form form {
    width: 100%;
  }
  #titulo-foro {
    text-align: center;
  }
}
</style>