function Time() {
     var realTime = new Date();

     var year = realTime.getFullYear();
     var monthRow = realTime.getMonth() + 1;
     var month = ('0'+monthRow).slice(-2);
     var day = ('0'+realTime.getDate()).slice(-2);
     var days = ["日","月","火","水","木","金","土",];
     console.log(days[realTime.getDay()]);

     var text2 = year + "年" + month + "月" + day+ "日(" + days[realTime.getDay()] + ")";
     
     var hour = ('0'+realTime.getHours()).slice(-2);
     var minutes  = ('0'+realTime.getMinutes()).slice(-2);
     var seconds  = ('0'+realTime.getSeconds()).slice(-2);
     var text = hour + ":" + minutes + ":" + seconds;

     var days = ["日","月","火","水","木","金","土",];
     console.log(days[realTime.getDay()]);


     document.getElementById("real-time").innerHTML = text;
     document.getElementById("real-date").innerHTML = text2;
  }
  setInterval('Time()',500);