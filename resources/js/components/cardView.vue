<template>
    <div class="cardViewContainer">
    
    <template v-if="imgPosition == 'left'">
        <div class="leftSide">
            <img :src="image"/>
        </div>
        <div class="rightSide">
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </div>
    </template>
    <template v-else-if="imgPosition == 'right'">
        <div class="rightSide">
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </div>
        <div class="leftSide">
            <img :src="image"/>
        </div>
    </template>
    <template v-else>
        <div class="leftSide full">
            <img :src="image"/>
        </div>
        <div class="rightSide">
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </div>
    </template>

    </div>
</template>
<script>
export default {
    props: {
        title: String,
        subtitle: String,
        image: String,
        imgPosition: String
    }
}
</script>
<style>
    .cardViewContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: left;
        border: 1px solid #333333;
        margin: 10px;
        padding: 10px;
        width: 100%;
    }

    .full {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .full img {
        width: 300px !important;
    }

    .leftSide img {
        width: 250px;
        margin: 25px;
    }
</style>