var Osafe_box = document.getElementById('safe_box');
var OLi = Osafe_box.getElementsByTagName('li');
var Osafe_contain = document.getElementsByClassName('safe_contain')[0];
var ODiv =Osafe_contain.getElementsByTagName('div');

for (var i = 0; i < OLi.length; i++) {
    OLi[i].index = i;
    OLi[i].onclick = function () {
        for (j = 0; j < OLi.length; j++) {
            OLi[j].className = '';
            ODiv[j].style.display = 'none';
            
        }
       
        this.className ='active' ;
        ODiv[this.index].style.display = 'block';
       
    }
}



var Ohelp_box = document.getElementById('help_box');
var help_ul=document.getElementsByClassName('help_ul')[0];
var Li_help = help_ul.getElementsByTagName('li');
var Ohelp_contain = document.getElementsByClassName('help_contain')[0];
var ODiv_help =Ohelp_contain .getElementsByTagName('div');
console.log(Li_help)
for (var i = 0; i <Li_help.length; i++) {
    Li_help[i].index = i;
    Li_help[i].onclick = function () {
        for (j = 0; j <Li_help.length; j++) {
            Li_help[j].className="";
            ODiv_help[j].style.display = 'none';
            
        }
       
        this.className ='active' ;
        ODiv_help[this.index].style.display = 'block';
       
    }
}
