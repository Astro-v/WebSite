let blocks = document.getElementsByClassName('etape');
let proceed = document.getElementsByClassName('procedure');
let steps = document.getElementsByClassName('step');

let alrd = false;

let dmc_setInterval;
for (let i in steps) {
	steps[i].addEventListener('mouseenter', function() {
		if (window.innerWidth > 1000 && alrd != true) {
			alrd = true;
			let newElt = document.createElement('div');
			steps[i].insertBefore(newElt,blocks[i]);
			newElt.style.width = '0px';
			newElt.style.height = '180px';
			if (i==0) {
				newElt.style.backgroundColor = '#FF6961';
			} else if (i==1) {
				newElt.style.backgroundColor = '#FFAB72';
			} else if (i==2) {
				newElt.style.backgroundColor = '#FDFD96';
			} else {
				newElt.style.backgroundColor = '#B0F2B6';
			}
			newElt.style.marginLeft = '0px';
			newElt.style['text-align'] = 'center';
			newElt.style.paddingLeft = '10px';
			newElt.style.paddingRight = '10px';
			dmc_setInterval = setInterval(function() {
				if (parseInt(newElt.style.width, 10)<1200) {
					newElt.style.width = (parseInt(newElt.style.width, 10)+20).toString()+'px';
				} else if (parseInt(newElt.style.marginLeft, 10) < 20){
					
					if (i==0) {
						newElt.innerHTML = "<p>Vous me faite part de votre situation, l'objectif de votre site, le type d'entreprise ainsi que la raison pour laquelle vous souhaitez créer un site web.</p>";
					} else if (i==1) {
						newElt.innerHTML = "<p>Je vous présente en conséquence mes idées. Nous établissons alors une charte graphique et un cahier des charges décrivant le contenu et la structure du site web. Vous choisissez ainsi le site web qui vous plaît au regard d'un devis.</p>";
					} else if (i==2) {
						newElt.innerHTML = "<p>Je développe le site au regard du cahier des charges, de la charte graphique établie et de vos revendications. Le site vous seras présenté tout au long de la conception si vous le souhaitez jusqu'à ce que le site vous convient parfaitement.</p>";
					} else {
						newElt.innerHTML = "<p>On met en ligne le site web. J'assure ensuite un service maintenance afin de garder le site à jour. La maintenance s'assure sous forme de forfait et peut être résilier à tout moment.</p>";
					}
					newElt.style.marginLeft = (parseInt(newElt.style.marginLeft, 10)+5).toString()+'px';
				}

			},3);	
			if (parseInt(newElt.style.width, 10)>=1200) {
				clearInterval(dmc_setInterval);
			}
		}
	});
	steps[i].addEventListener('mouseleave', function() {
		if (window.innerWidth > 1000 && alrd == true) {
			alrd = false;
			let elt = blocks[i].previousElementSibling;
			elt.innerHTML = "";
			clearInterval(dmc_setInterval);
			dmc_setInterval = setInterval(function() {
				if (parseInt(elt.style.marginLeft, 10) > 0) {
					elt.style.marginLeft = (parseInt(elt.style.marginLeft, 10)-5).toString()+'px';
				} else if (parseInt(elt.style.width, 10)>0) {
					elt.style.width = (parseInt(elt.style.width, 10)-20).toString()+'px';
				} else {
					elt.remove();
				}
			},3);
		}
	});
}


