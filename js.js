function vinho1 () {
    let v1 = "Name: Podão \n Type: Red wine \n Grape varieties: Sangiovese \n  Alcohol content: 14,5% \n Review: It has a dark and intense ruby red color. A great olfactory impact for this Brunello which generously dispenses notes of small ripe fruits, leather, tobacco, aromatic herbs and very fine spiciness. The taste is really pleasant: velvet tannins caress the palate; we find balance and taste-olfactory correspondence of great consistency. An excellent glass now, an exceptional bottle in a few years. Excellent in combination with sumptuous meat and game dishes; also ideal with aged cheeses. \n Recommendations: Optimum serving temperature: Between 16ºC and 18ºC   Drinking and storing: Drink now or keep until 2045."
    document.getElementById("resp").innerHTML = v1;
}

function vinho2 () {
    let v2 = "Name: Talha \n Type: Red wine \n Grape varieties: Cabernet Sauvignon, Merlot y Syrah \n  Alcohol content: 13,5% \n Review: Appearing a dark ruby colour, Il Bruciano offers an expressive bouquet that reveals notes of forest fruits, flowers, terracotta, leather, tobacco and sweet spices. On the palate, its outstanding features are its coherence, its balance and the slight harshness of its tannins, which provides the earthy touches which we'd been able to discern on the nose. It ends with a long finish exhibiting pleasant fruity touches. \n Recommendations: Optimum serving temperature: Between 16ºC and 18ºC"
    document.getElementById("resp").innerHTML = v2;
}

function vinho3 () {
    let v3 = "Name: Rodo \n Type: Red wine \n Grape varieties: Corvina, Merlot y Rondinella \n  Alcohol content: 14% \n Review: From its intense, dark and determined purple colour with hints of violet, this Ripasso hits you with its intense, crisp and broad ripe red fruit bouquet. Then follow deeper dark fruit notes, such as blackberry, blackcurrant and ripe cherry, jammy cherry and at times cherry in alcohol. Even though it is velvety, harmonious, full-bodied and intense, it is also sprightly and sleek, which contributes to its crisp, fruity and varietal nature and the interesting flavour, which just screams out to be drunk. \n Recommendations: Optimum serving temperature: Between 16ºC and 18ºC"
    document.getElementById("resp").innerHTML = v3;
}

function sign() {
  alert("Thanks. We will contact you as soon as possible.");
}

function onDragStart(ev){ 
  ev.dataTransfer.setData('enlace', ev.target.id);
  console.log('OnDragStart element: ', ev.target.id)
}

function onDrop(event){
  event.preventDefault();
  console.log('onDrop')
  
  let data = event.dataTransfer.getData("enlace");
  event.target.appendChild(document.getElementById(data));
}

function onDragOver(event){
  event.preventDefault();
  console.log('onDrag')
}

function onDragLeave(event){
  console.log('onDragLeave')
}

function voto() {
  alert('Thanks for helping us by voting.')
}
  