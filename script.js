
// объект для отправки AJAX

var user = {
    name: "Tom",
    age: 23
};

var request = new XMLHttpRequest();
function reqReadyStateChange() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            document.getElementById("output").innerHTML = request.responseText;
        }
    }
}
// строка с параметрами для отправки
var body = "name=" + user.name + "&age=" + user.age;
request.open("GET", "http://localhost:5500/postdata.php?" + body);
request.onreadystatechange = reqReadyStateChange;
request.send();
console.log(request)






















// var request = new XMLHttpRequest();

// function reqReadyStateChange() {
//     if (request.readyState == 4) {
//         var status = request.status;
//         if (status == 200) {
//             document.write(request.responseText + );
//         } else {
//             document.write("Ответ сервера " + request.statusText);
//         }
//     }
// }

// request.open("GET", "http://127.0.0.1:5500/test.txt");
// request.onreadystatechange = reqReadyStateChange;
// request.send();
// // console.log(request.statusText);
// // console.log(request.responseText);

// var req = new XMLHttpRequest();

// function responceLoad() {
//     if (req.readyState == 4) {
//         var status = req.status;
//         if (status == 200) {
//             document.write(req.responseText);
//         } else {
//             document.write("Ответ сервера " + req.statusText);
//         }
//     }
// }

// req.open("GET", "http://localhost:5500/test.txt");
// req.onload = responceLoad;
// req.send();




































// class Sellect{
//     constructor(selector) {
//         this.elem = document.querySelectorAll(selector);
//     }
//     on(event, callback) {
//         for (var i = 0; i < this.elem.length; i++) {
//             this.elem[i].addEventListener(event, callback);
//         }
//         return this;
//     }
// }

// // (new Sellect('items'))
// var sel = new Sellect('.item')
// sel.on('focus', function() {
//     this.style.border = '2px solid red';
// });
// var sel = new Sellect('.item')
// sel.on('blur', function () {
//     this.style.border = '2px solid silver';
// });
// console.log(sel)



// var nowDate = new Date();
// var i = 1; 
// // console.log(nowDate.setDate(1))
// console.log(nowDate)
// console.log(typeof(nowDate))
// nowDate



// var obj = {
//     color: 'green',
//     age: 20,
//     name: 'Masha',
//     sayHi: function(name) {
//         return console.log('hello ' + name)
//     }
// }
// console.log(obj)

// var human = {
//     head: true,
//     hand: 2
// }