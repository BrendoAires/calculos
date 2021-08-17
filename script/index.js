function Calcular (comprimento, largura){
	
		
		
			const comod = document.getElementById("comodo").value;
		 	var comp = document.getElementById("comprimento").value;
			var larg = document.getElementById("largura").value;
			var comboUnidade = document.getElementById("comboUnidade")			
		
			
			const calculaArea = function(){
			area = comp * larg;
			}


			
		
			
			if  (comp ==="" || larg ===""){
			alert("Insira todos os campos")
			document.getElementById("container-resultado").style.display = "none";
		document.getElementById("comodo").value = ""
		document.getElementById("comprimento").value = ""
		document.getElementById("largura").value = ""
		
}

			else {

document.getElementById("container-resultado").style.display = "block";
			
			}

			
	
	
	/*Combo box Unidades*/
	
	
	if (comboUnidade.options[comboUnidade.selectedIndex].value == ""){
				alert("Escolha uma unidade de medida")
	}
	

		else if (comboUnidade.options[comboUnidade.selectedIndex].value == "M"){
			
				areaMetros = comp * larg;
	 			console.log(areaMetros)

	 }
	
			else if (comboUnidade.options[comboUnidade.selectedIndex].value == "mm"){
			 calculaArea();
			 const x = area / 1000000;
	 			areaMetros = x.toFixed(4)
	 			console.log(areaMetros)
	 }	
					
			else	if (comboUnidade.options[comboUnidade.selectedIndex].value == "cm"){
				calculaArea();
				const x = area / 10000;
	 			areaMetros = x.toFixed(2)
	 			
	 			console.log(areaMetros)
	 }		
	 
	 
	 
	 			else if (comboUnidade.options[comboUnidade.selectedIndex].value == "pol"){
	 			calculaArea();
	 			const x = area / 1550
	 			areaMetros= x.toFixed(2)
	 			console.log(areaMetros)
	 }	
	 
	 
	
	 console.log(comboUnidade.selectedIndex);
	console.log(comboUnidade.options[comboUnidade.selectedIndex].value);
	 
	 if (areaMetros <= 6){
					
					var qtdPontoLuz = 1;
					var potLuz = 100;		
					
		}
		
		
else
						if (areaMetros > 6){
					/*	ABNT diz que em ambiente com menos de 6m2 o mínimo é 1 ponto de luz e uma potência estimada em 100VA. E a partir dos 6m2, 60VA a cada fração de 4m2. Então na prática, a partir dos 10m2 a potência aumenta para 160VA */
						
					var	qtdPontoLuz = 1;
					 var potLuz = 100;		
						
						
								if (areaMetros >= 10){
											var result = (areaMetros-6)/4;
											var qtdPontoLuz = 1;
											potLuz = (Math.trunc(result) * 60) + 100;
									
								
											
						}
								
	
		}


	 
		document.getElementById("comodo").value = ""
		document.getElementById("comprimento").value = ""
		document.getElementById("largura").value = ""
		
			
			const dados = `
				<div class="resultado">
							<ul>
					<p class="item"><li class="com">${comod}</li></p>
				<p class="item"><li >Área</li><li class="h">${areaMetros} ${" "}${"M"}<sup>2</sup></li></p>
					<p class="item"><li>Mínimo Pontos de Luz</li><li class="h">${qtdPontoLuz}</li></p>
					<p class="item"><li>Potência</li><li class="h">${potLuz}${" VA"}</li> </p>
					
				
							</ul>
				</div>
		`;
		
		const resultado = document.getElementById("container-resultado");
		resultado.innerHTML = dados;				
		
		
			
		}

/*---------------------------*/
/*---------------------------*/
/*---------------------------*/
/*---------------------------*/ 
/* Combo box começa aqui*/

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


