const textarea = document.querySelector("textarea")

const intialHeight = parseInt(getComputedStyle(textarea).getPropertyValue("height"))
textarea.addEventListener("input", () => {
    textarea.style.height = `${intialHeight}px`;
    const newHeight = textarea.scrollHeight - intialHeight;
    textarea.style.height = `${newHeight}px`;
})
const butt = document.getElementById("mybutton")
const inp = document.getElementById("textarea")
const msg = document.getElementById("msg")
butt.addEventListener("click", () => {
    //console.log(inp.value)
    const ans = inp.value;
    const res = ans.length;
    let c = 1;
    // console.log(res);
    for (let i = 0; i < res; i++){
        if (ans[i] == "\n" || ans[i] == " ")
        {
            c += 1;
            }
    }
    //console.log(ans);
    if (ans[res - 1] == " ")
    {
        c--;
        }
    msg.innerHTML = `Total Number of words are : ${c}`;
})

const title = document.title
//console.log(title);
window.addEventListener("blur", () => {
    document.title = "come back please 😭"
})
window.addEventListener("focus", () => {
    document.title = title
})
