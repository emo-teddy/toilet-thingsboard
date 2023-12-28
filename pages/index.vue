<script setup>
const status = [
    {
        icon: 'mdi-human-male',
        avaliable: '0',
    },
    {
        icon: 'mdi-human-female',
        avaliable: '1',
    },
    {
        icon: 'mdi-wheelchair',
        avaliable: '1',
    },
]
</script>

<template>
    <div class="h-100 bg-blue-accent-3">
        <v-container fluid>
            <div class="title font-weight-bold text-center py-6">
                <p>可使用</p>
                <p>Availability</p>
            </div>
            <v-row>
                <v-col v-for="(item, index) in status" :key="index" class="d-flex flex-column align-center">
                    <v-icon class="icon">{{ item.icon }}</v-icon>
                    <span class="count" :class="item.avaliable > 0 ? 'text-light-green-lighten-1' : 'text-red-accent-2'">{{ item.avaliable }}</span>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="sass" scoped>
.title
    p
        font-size: 3em
.icon, .count
    font-size: 18em
    line-height: 1em
</style>