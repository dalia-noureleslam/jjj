
var quotes = [
    "“You’re off to great places, today is your day. Your mountain is waiting, so get onyour way.” "+"<br>"+"<br>"+" -- Dr. Seuss",
   " “You always pass failure on the way to success.”"+"<br>"+"<br>"+" -- Mickey Rooney",
   "“No one is perfect - that’s why pencils have erasers.”"+"<br>"+"<br>"+" -- Wolfgang Riebe",
   "“Winning doesn’t always mean being first. Winning means you’re doing better than you’vedone before.”"+"<br>"+"<br>"+" -- Bonnie Blair",
   "“You’re braver than you believe, and stronger than you seem, and smarter than you think.” "+"<br>"+"<br>"+" -- A.A. Mine",
   "“It always seems impossible until it is done.”"+"<br>"+"<br>"+" -- Nelson Mandela"
]
function newqoute() {
    var rondomnumber = Math.floor(Math.random() * (quotes.length));
   document.getElementById("quotedisplay").innerHTML=quotes[rondomnumber];
}