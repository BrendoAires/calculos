			var qtdPontoLuz = 1;
			var potLuz = 100;		
			
		

function Calcular (comprimento, largura){
	
			const comod = document.getElementById("comodo").value;
		 	const comp = document.getElementById("comprimento").value;
			const larg = document.getElementById("largura").value;
			const area = comp * larg;
			
			if (comp ==="" || larg ===""){
			alert("Digite um valor");
			
			}	
			
		
		document.getElementById("comodo").value = ""
		document.getElementById("comprimento").value = ""
		document.getElementById("largura").value = ""
			
		if (area <= 6){
					
					console.log(qtdPontoLuz);
					console.log(potLuz);
		}
		
	else
						if (area > 6){
						/*A ABNT diz que em ambiente com menos de 6m2 o mínimo é 1 ponto de luz e uma potência estimada em 100VA. E a partir dos 6m2, 60VA a cada fração de 4m2. Então na prática, a partir dos 10m2 a potência aumenta para 160VA */
								if (area >= 10){
											var result = (area-6)/4;
											qtdPontoLuz;
											potLuz = (Math.trunc(result) * 60) + 100;
									
								
											
						}
								
												
		}
		
		/*document.getElementById("respComodo").innerHTML = comod;
		document.getElementById("respArea").innerHTML = area + " m2"
		document.getElementById("respPontoLuz").innerHTML = qtdPontoLuz
		document.getElementById("respPotLuz").innerHTML = potLuz + " VA"
		*/
		
		
		const dados = `
				<div class="resultado">
							<ul>
					<p class="item"><li class="com">${comod}</li></p>
					<p class="item"><li >Área</li><li class="h">${area}${" m2"}</li></p>
					<p class="item"><li>Mínimo Pontos de Luz</li><li class="h">${qtdPontoLuz}</li></p>
					<p class="item"><li>Potência</li><li class="h">${potLuz}${" VA"}</li> </p>
				
							</ul>
				</div>
		`;
		
		const resultado = document.getElementById("resultado");
		resultado.innerHTML = dados;
			
		
}

