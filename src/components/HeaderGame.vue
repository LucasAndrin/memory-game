<script>
import CardGroupComponent from "./CardGroupComponent.vue";

export default {
    name: 'HeaderGame',

    components: {
        CardGroupComponent
    },

    data() {
        return {
            active: true,
            quantidadeCards: 10,
            quantidadeCardsAtivos: null,
            validation: true,
            msg: ''
        }
    },

    methods: {
        playPause() {
            console.log(this.validation, this.active)
            if (this.validation && this.active) {

                this.active = !this.active
                this.quantidadeCardsAtivos = this.quantidadeCards

            } else if (!this.active) {

                this.quantidadeCardsAtivos = null
                this.active = !this.active

            }
        }
    },

    watch: {
        quantidadeCards(newQtd, oldQtd) {
            if (newQtd > 0 && newQtd <= 15) {
                this.validation = true
            } else {
                if (newQtd <= 0) {
                    this.msg = 'É necessário um número maior que zero!'
                } else if (newQtd > 15) {
                    this.msg = 'Número máximo de pares: 15'
                }

                this.validation = false
            }
        }
    }
}
</script>

<template>
    <div>

        <!-- Cabeçário -->
        <div class="row">
            <div class=" d-flex justify-content-between mb-5 p-2 border-bottom">
                <h1 class="text-light">Memory Game</h1>
                <div class="row py-2">
                    <div class="input-group">
                        <span class="input-group-text bg-transparent border-0 text-light fw-bold">
                            Qtd de Pares:
                        </span>
                        <input type="number" class="form-control input-dark bg-semi-black text-light border-0 text-center" :class="validation ? 'is-valid' : 'is-invalid'" v-model="quantidadeCards" required>
                        <div class="invalid-tooltip">
                            {{this.msg}}
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <button class="btn btn-success text-light" @click="playPause">
                        <font-awesome-icon v-show="active" icon="fa-solid fa-play" />
                        <font-awesome-icon v-show="!active" icon="fa-solid fa-stop" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Display de cards -->
        <CardGroupComponent :qtd-card="quantidadeCardsAtivos" v-if="quantidadeCardsAtivos"/>
    </div>
</template>

<style scoped>
    input.input-dark:focus {
        background-color: var(--black);
    }
</style>