<template>
    <div id="header" :class="[fullHeight ? 'fullHeight' : '']">
        <h1 v-if="fullHeight != true">{{title}}</h1>
        <p v-if="fullHeight != true">{{subtitle}}</p>
    </div>
</template>
<script>
export default {
    props: {
        fullHeight: Boolean,
        title: String,
        subtitle: String
    }
}
</script>
<style lang="scss">
    #header {
        // background-color: #4433ff;
        // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%234433ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%234230f0' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23412ee2' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%233f2bd4' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%233c29c5' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%233a26b8' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%233724aa' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2335229c' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23321f8f' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%232f1d82' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%232c1b75' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23291869' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2325165c' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23221451' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%231e1245' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%231a0f39' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23170c2e' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23140624' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
        // background-attachment: fixed;
        // background-size: cover;

        // background-color: #2c096e;
        // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%232b2fff' stroke-width='66.7' stroke-opacity='0' %3E%3Ccircle fill='%232c096e' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%232a0a6a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23280b66' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23270c62' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23250d5d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23230d59' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23220d55' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23200e51' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%231f0e4d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%231e0e49' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%231c0e45' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%231b0e41' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%231a0e3d' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23190d39' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23170d35' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23170c31' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23160b2d' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23150a29' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
        
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url("../assets/vueschool_hero.svg");
        background-color: #0d0751;
        // background-attachment: fixed;
        background-size: cover;
        background-position: center;
        padding-top: 100px;
        color: #ffffff;
        // background-color: rgb(95, 5, 171);
        width: 100%;
        height: 400px !important;
        transition: 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;

        font-family: 'Baloo Bhai', cursive;
        @media only screen and (min-width: 0) {
            font-size: 1em;
        }

        @media only screen and (min-width: 1264px){
            font-size: 1.3em;
        }
    }
    #header.fullHeight {
        height: 100vh !important;
        transition: 0.3s ease-in-out;
        // background: rgb(95, 5, 171);
    }
</style>