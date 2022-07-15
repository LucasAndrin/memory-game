<template>
    <div class="row p-3" v-if="qtdCard">

      <div class="col-lg-2 col-md-3 col-sm-4 mb-3" v-for="(card, index) in cards" :key="index">
          <div class="card bg-success">

            <div class="card-body p-5 fs-2 text-center text-light">
              <!-- <font-awesome-icon :icon="icones[card]" /> -->
              {{ card }}
            </div>

          </div>
      </div>

    </div>
</template>

<script>

export default {
    name: 'CardGroupComponent',

    props: {
      qtdCard: {
        type: Number, 
        required: true
      }
    },

    data() {
      return {
        icones: [
          "fa-solid fa-star",
          "fa-solid fa-circle",
          "fa-solid fa-shuttle-space",
          "fa-solid fa-book",
          "fa-solid fa-camera",
          "fa-solid fa-dna",
          "fa-solid fa-image",
          "fa-solid fa-eye",
          "fa-solid fa-apple-whole",
          "fa-solid fa-cube",
          "fa-solid fa-biohazard",
          "fa-solid fa-gem",
          "fa-solid fa-pen",
          "fa-solid fa-fish",
          "fa-solid fa-infinity",
          "fa-solid fa-square",
        ],
        cards: [],
      }
    },

    mounted() {
      if (this.qtdCard) {

        var iconIndex
        var continuar = true

        while (continuar) {
          if (this.cards.length == this.qtdCard * 2) {

            continuar = false

          } else {

            iconIndex = Math.floor(Math.random() * (this.qtdCard + 1) );

            var count = 0

            this.cards.every(card => {
              if (count === 2) {
                return false
              }

              if (card == iconIndex) {
                count++
              }

              return true
            })

            if (count < 2) {
              this.cards.push(iconIndex)
            }

          }
          
        }

      }
    }
}
</script>