function loadPage() {
    var msg = window.document.getElementById('msg')
    var emj = window.document.getElementById('emj')
    var day = new Date()    
    var hour = day.getHours()
    var minute = day.getMinutes()    
    msg.innerHTML = `it's currently ${hour}:${minute}`

    if (hour >= 0 && hour < 12) {
        //morning   
        emj.innerHTML = '&#127748;'
        document.body.style.background = '#ffffcc' 
    } else if (hour >= 12 && hour < 18) {
        //afternoon
        emj.innerHTML = '&#127751;'
        document.body.style.background = '#e66b19'
    } else {
        //night
        emj.innerHTML = '&#127747'
        document.body.style.background = '#336699'
    }
}
