import { format } from 'date-fns'

export default () => {
    let now = new Date()
    const formattedDateTime = computed(() =>
        format(now, 'yyyy 年 M 月 dd 日 HH:mm:ss')
    )

    setInterval(() => {
        now = new Date()
        // formattedDateTime.value = format(
        //     new Date(),
        //     'yyyy 年 M 月 dd 日 HH:mm:ss'
        // )
    }, 1000)

    return { formattedDateTime }
}
