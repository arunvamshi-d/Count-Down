function countdownto(target, time,callback) {
    var finish = new Date(time);
    var s = 1000,
        m = s * 60,
        h = m * 60,
        d = h * 24;

    (function timer() {
        var now = new Date();
        var dist = finish - now;

        var days = Math.floor(dist / d),
            hours = Math.floor((dist % d) / h),
            minutes = Math.floor((dist % h) / m),
            seconds = Math.floor((dist % m) / s);

        var timestring = seconds;
        target.innerHTML = timestring
        
        if (dist > 0) {
            setTimeout(timer, 1000);
        } else {
            callback()
        }
        
    })()

}
var countdownel = document.getElementById('countdown')
var time = new Date()
time.setSeconds(time.getSeconds() + 10)
countdownto(countdownel, time, function(){
   countdownel.style.display = "none"
   console.log('Happy New Year')
})
