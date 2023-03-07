<script setup lang="ts">
import { getProducts, type  Product} from "../model/products";

const products = ref getProducts();

</script>

<template>
    <div>
        <h1 class="title">
            These will be the products
        </h1>
        <h2 class="subtitle">
            If you got here then you are logged in
        </h2>

        <div class="product-list">
            <div class="product" v-for="product in products" :key="product.id">
                <img :src="product.thumbnail" alt="product.title"/>
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }}</p>
                <p>
                        <span>$</span>
                        <i class="price">
                            {{ product.price }}
                        </i>
                </p>
                <button class=""button is-
            </div>
        </div>

    </div>
</template>


<style scoped>

    .product-list{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: blue;

    }

    .product{
        width: 10rem;
        padding: ;
        margin: ;
        background-color: ;
        border-radius: ;
        box-shadow: ;
    }
</style>