<template>
    <div class="b-day">
        <!--Fecha de nacimiento-->
        <b-row class="justify-content-center">
            <b-col class="box-respuestas-1" cols="12" md="6">
                <md-card class="md-layout-item box-respuestas-1">
                    <md-badge id="badge-steps" md-content="4"/>
                    <md-card-header>
                        <div class="md-title">
                            <md-icon class="fa fa-calendar md-size-2x"></md-icon>
                            <span>Fecha de nacimiento</span>
                        </div>
                    </md-card-header>
                    <md-card-content class="bottom">
                        <md-field>
                        <datepicker placeholder="Select Date" v-model="vModelExample"></datepicker>
                        <!--<md-input type="fecha" name="fecha" id="fecha"  autocomplete="given-fecha" v-model="numeroTel"/>-->
                        </md-field>
                    </md-card-content>
                </md-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>

export default {
    name: "Selcumple",
    data() {
        return {
            cumple:null,
        }
    }
}
</script>

<style scoped>
.b-day{
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