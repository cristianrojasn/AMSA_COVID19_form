<template>
    <div class="contacto">
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
        </md-card-content>
    </div>
</template>

<script>
import {cargos,turnos,areas} from '../variables.js'

export default {
    name: "Selcontacto",
    data() {
        return {
            cargos,
            turnos,
            areas,
            correoSup:null,
            car:null,
            turn:null,
            correo:null,
            numeroTel:null,
            area:null,
        }
    }
}

</script>


<style scoped>
.contacto{
    width: 80%;
    padding: 0 15px
}
@media screen and (max-width: 800px){
    .contacto{
    width: 100%;
    padding: 0;
}
}
</style>