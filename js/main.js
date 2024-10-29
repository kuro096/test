function Time() {
     var realTime = new Date();

     var year = realTime.getFullYear();
     var monthRow = realTime.getMonth() + 1;
     var month = ('0'+monthRow).slice(-2);
     var day = ('0'+realTime.getDate()).slice(-2);
     var text2 = year + "年" + month + "月" + day+ "日";
     
     var hour = ('0'+realTime.getHours()).slice(-2);
     var minutes  = ('0'+realTime.getMinutes()).slice(-2);
     var seconds  = ('0'+realTime.getSeconds()).slice(-2);
     var text = hour + ":" + minutes + ":" + seconds;

     document.getElementById("real-time").innerHTML = text;
     document.getElementById("real-date").innerHTML = text2;
  }
  setInterval('Time()',1000);