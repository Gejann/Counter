const increase = document.getElementById("inc");
const reset = document.getElementById("res");
const decrease = document.getElementById("dec");
const text = document.getElementById("text0");
const text01 = document.getElementById("text01");

var count = 0


decrease.onclick = function(){
    count = count - 1
    text.textContent = count


        if(count < 0) {
        count = ''
        text.textContent = "0"
        text01.style.display = 'block';
        setTimeout(() => text01.remove(), 3000)
}

    }




increase.onclick = function() {
    count = count + 1;
    text = text.textContent = count;
}

reset.onclick = function() {
    count = 0;
    text = text.textContent = count;
}

    





        
     

    





