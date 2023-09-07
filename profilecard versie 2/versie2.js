// declare alle variables
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    
    // alle elementen met class="tabcontent" worden gehide
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    //alle elementen met class="tablinks" word class "active" weg gehaald
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    
    // showt huidige tab, en voegt "active" class toe aan de knop die de tab opend
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  