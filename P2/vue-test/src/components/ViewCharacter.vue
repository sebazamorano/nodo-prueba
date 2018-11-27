<template>
    <div class="container">
        <div class="row">
            <div v-if="loading"><h3>Cargando Información</h3></div>
            <div class="col-sm-12" v-else>
                <div class="card">
                    <img class="card-img-top" :src="getImageCharacter" :alt="character.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ character.name }}</h5>
                        <p class="card-text">Sex: {{ MaleOrFemale }}</p>
                        <p class="card-text">Rank: {{ character.pageRank }}</p>
                        <p class="card-text">Books:</p>
                        <ul>
                            <li v-for="book in character.books"> {{ book }}</li>
                        </ul>
                        <p class="card-text">Titles:</p>
                        <ul>
                            <li v-for="title in character.titles"> {{ title }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getACharacter } from '../services/got.service.js'
    export default {
        name: "ViewCharacter",
        data () {
            return {
                id: this.$route.params.id,
                character: null,
                loading: true
            }
        },
        created () {
            getACharacter(this.id).then(res => {
                this.character = res.data;
                this.loading = false;
            });
        },
        computed: {
            getImageCharacter: function () {
                return 'https://api.got.show' + this.character.imageLink
            },
            MaleOrFemale: function () {
                return this.character.male? 'Male' : 'Female'
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/app.scss";
</style>
