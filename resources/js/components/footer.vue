<template>
    <v-footer
      absolute
      class="font-weight-medium"
      id="footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — Multimedia Research Laboratory FIT
      </v-col>
    </v-footer>
</template>
<script>
export default {
    data: ()=>({
       
    })
}
</script>
<style lang="scss">
    #footer {
        background-color: #2c096e !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%232b2fff' stroke-width='66.7' stroke-opacity='0' %3E%3Ccircle fill='%232c096e' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%232a0a6a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23280b66' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23270c62' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23250d5d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23230d59' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23220d55' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23200e51' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%231f0e4d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%231e0e49' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%231c0e45' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%231b0e41' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%231a0e3d' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23190d39' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23170d35' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23170c31' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23160b2d' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23150a29' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E") !important;
        background-attachment: fixed !important;
        background-size: cover !important;
        color: #ffffff !important;

        font-family: 'Baloo Bhai', cursive;
        @media only screen and (min-width: 0) {
            font-size: 1em;
        }

        @media only screen and (min-width: 1264px){
            font-size: 1.3em;
        }
    }
</style>