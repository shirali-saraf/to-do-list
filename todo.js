let butn = document.getElementById("btn");
// butn.addEventListener("click", function() {
//     document.getElementById("para").innerHTML = "Hello World";
// });

butn.addEventListener("click", function() {
    let cheating = document.querySelector("#items");
    let sent = document.getElementById("ip").value;
    if (!sent) {
        return alert("plzz enter value..");
    }
    // else {
    let pa = document.createElement("p");
    let b = document.createElement("button");
    let ndiv = document.createElement("div");
    let tx = document.createTextNode("Delete");

    b.id = 'd';
    pa.innerHTML = sent;

    b.appendChild(tx);
    document.getElementById("items").appendChild(ndiv);
    ndiv.appendChild(pa);
    ndiv.appendChild(b);

    document.getElementById("ip").innerHTML = " ";
    //}
    b.addEventListener("click", function() {
        // alert("helo");
        cheating.removeChild(ndiv);
        //mene yha use kiya tha removechid etc.... but y kaam nhii kiya toh thoda search kiya waha se cheating ki usne upr query waala
        // use kiya tha toh usko add kiya aur kaam krr gya lekin mujh query ka pakka smjh nhii aa rha ki kya kiya usne toh ab y tu bta mujh
        //first ye cheating nhi h mene bhi chize search kii h and mene bhi ye remove khub use kiya but mere se bhi nhi hua tha and rukk ye query ko samjh kr batati hu
    });

});