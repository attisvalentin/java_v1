function showName() {
    var name = document.getElementById("myText").value;
    document.getElementById("whereShowName").innerHTML = 'Szia Kedves ' + name + '!';
    document.getElementById("choose_1").classList.toggle("show");
    document.getElementsById("choose_2").classList.toggle("show");
    document.getElementsById("choose_3").classList.toggle("show");
    document.getElementsById("choose_4").classList.toggle("show");
  }
