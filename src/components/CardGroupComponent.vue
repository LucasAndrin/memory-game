<template>
    <div class="row p-3" v-if="qtdCard">

      <div class="col-lg-2 col-md-3 col-sm-4 mb-3" v-for="(card, index) in cards" :key="index">
          <div class="card cursor-pointer" :class="card.found ? 'bg-semi-black' : 'bg-success'" @click="compareCards(index)">

            <div class="card-body p-5 fs-2 text-center" :class="card.found ? 'text-success' : 'text-light'">
              <font-awesome-icon v-if="card.state" :icon="icones[card.iconIndex]" />
              <!-- <span v-if="!card.state">{{ card.iconIndex }}</span> -->
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
        selectedCard: null,
        clickAble: true
      }
    },

    methods: {
      compareCards(cardIndex) {
        if (this.clickAble) {
          this.cards[cardIndex].state = true

          if (this.selectedCard === null) {

            this.selectedCard = cardIndex

          } else if (cardIndex !== this.selectedCard && !this.cards[cardIndex].found && !this.cards[this.selectedCard].found) {
            if (this.cards[cardIndex].iconIndex === this.cards[this.selectedCard].iconIndex) {

              this.cards[this.selectedCard].found = true
              this.cards[cardIndex].found = true

              this.selectedCard = null

            } else if(this.cards[cardIndex].iconIndex !== this.cards[this.selectedCard].iconIndex) {

              this.clickAble = false
              setTimeout(() => {
                this.cards[this.selectedCard].state = false
                this.cards[cardIndex].state = false
                
                this.selectedCard = null
                this.clickAble = true
              }, 1000);
              
            }
          } 
        }
      }
    },

    mounted() {
      if (this.qtdCard) {

        var index

        while (this.cards.length != this.qtdCard * 2) {
          var index = Math.floor(Math.random() * this.qtdCard);

          var count = 0

          this.cards.every(card => {
            if (count === 2) {
              return false
            }

            if (card.iconIndex == index) {
              count++
            }

            return true
          })

          if (count < 2) {
            console.log(index)
            this.cards.push({
              iconIndex: index,
              state: false,
              found: false
            })
          }
        }

      }
    }
}
</script>

<style scoped>
.card {
  height: 144px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>