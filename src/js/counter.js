let countDate = new Date('January 1, 2021 00:00:00').getTime()

function newYear() {
    let nowDate = new Date().getTime()
    let gap = countDate - nowDate

    let second = 1000
    let minute = second * 60
    let hour = minute *60
    let day = hour * 24

    let d = Math.floor(gap / day)
    let h = Math.floor((gap % (day)) / (hour))
    let m = Math.floor((gap % (hour)) / (minute))
    let s = Math.floor((gap % (minute)) / (second))

    document.getElementById('day').innerHTML = d
    document.getElementById('hour').innerHTML = h
    document.getElementById('minute').innerHTML = m
    document.getElementById('seconds').innerHTML = s
}
setInterval(() => {
    newYear()
}, 1000)