function addtask(){
  let input = document.getElementByid("todoinput");
  let tasktext =input.value;
  if (tasktext==="") {
    alert("my name amal adna");return;
  }
  let li =document.createElement("li");
  li.textContent=tasktext;
  document.getElementById("tasklist").appendchild(li);
  input.value="";
}
  
  