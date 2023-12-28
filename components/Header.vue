<script setup>
import { format } from 'date-fns';
const currentDate = ref(new Date())
const formattedDateTime = useState('formattedDateTime', () => format(currentDate.value, 'yyyy 年 M 月 dd 日 HH:mm:ss'))

onMounted(() => {
    setInterval(() => {
        currentDate.value = new Date()
    }, 1000)
})
// const { formattedDateTime } = useCurrentTime()
</script>

<template>
    <v-app-bar color="grey-lighten-2" :height="100">
        <template v-slot:prepend>
            {{ formattedDateTime }}
        </template>
    </v-app-bar>
</template>

<style scoped lang="sass">
</style>