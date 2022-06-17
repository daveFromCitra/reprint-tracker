const lines = [
    "traffic cones make excellent megaphones",
    "can I borrow a dollar?",
    "please, don't curse while using",
    "(aim away from face)",
    "Reduced Sodium Version",
    "Now with more buttons! Can you find them all?",
    "Don't press this button. <button onclick='alert(\"what did I just say!?\")'>This button</button>",
    "Any pizza is a personal pizza if you have the courage",
    "<input type=\"text\" placeholder=\"write your own subtitle here\">"
]

let line = lines[Math.floor(Math.random() * lines.length)]

document.getElementById("alt-subtitle").innerHTML = line;