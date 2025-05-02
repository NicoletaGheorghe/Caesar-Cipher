const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


 function encrypt(message, shiftBy, mode){
  
   let result = "";

    for( let i = 0; i < message.length; i++){
        let character = message[i];
        let letterIndex = alphabet.indexOf(character);
        if (letterIndex === -1){
         result += character;
        }
        else if(mode === "encode"){
         const outputLabel = document.getElementById("outputLabel");
        let shiftedPosition = letterIndex + shiftBy;
        shiftedPosition = shiftedPosition % alphabet.length;
        if (shiftedPosition < 0) shiftedPosition += alphabet.length;
        result += alphabet[shiftedPosition];
        outputLabel.textContent = "Encoded Text:"
        }
        else if(mode === "decode"){
         const outputLabel = document.getElementById("outputLabel");
         let shiftedPosition = letterIndex - shiftBy;
         shiftedPosition = shiftedPosition % alphabet.length;
         if (shiftedPosition < 0) shiftedPosition += alphabet.length;
         result += alphabet[shiftedPosition];
         outputLabel.textContent = "Decoded Text:"
        }
     }
     document.getElementById("output").textContent = result;
     return(result);
 }
 
function clearFields(){
   document.getElementById("userMsg").value = "";
   document.getElementById("shift").value = 0;
   document.getElementById("output").textContent = "";
   document.getElementById("encode").checked = false;
   document.getElementById("decode").checked = false;
}

 function runCipher(){
   const encodeOp = document.getElementById("encode");
  const decodeOp = document.getElementById("decode");
  let mode = "";
   if(encodeOp.checked){
      mode = "encode";
   }else if(decodeOp.checked){
      mode = "decode";
   }else{
      mode = "encode";
   }
   const userMsg = document.getElementById("userMsg");
   const userMessage = userMsg.value.trim().toLowerCase();
  const userShift = parseInt(document.getElementById("shift").value);
  encrypt(userMessage, userShift, mode);
};

module.exports = { encrypt }