  function insertValue(v) {

            var oldData = document.querySelector("#data").value;
            var t = oldData.length;
            var lastData = oldData[t-1];

            if (v=="+" || v=="-" || v=="*" || v=="/" ) {
                if(lastData=="+" || lastData=="-" || lastData=="*" || lastData=="/"){
                    var n = oldData.slice(0,-1);
                    document.querySelector("#data").value = n + v;
                }
                else {   
                    document.querySelector("#data").value = oldData + v;
                }
            }
            else {
            document.querySelector("#data").value = oldData + v;
            }
        }

        function res() {
            var n = document.querySelector("#data").value;
            document.querySelector("#data").value = eval(n);
        }

        function clearBox() {
            document.querySelector("#data").value = "";
        }

        function backSpace() {
            var oldData = document.querySelector("#data").value;
            document.querySelector("#data").value = oldData.slice(0,-1);
    }