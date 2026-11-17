/* Lezzet Durağı - betik.js | Mustafa Ömer Bingöl - 265308012 */

// 1) Dış sitelere giden bağlantılar yeni sekmede açılsın
for (var a of document.links) if (a.hostname) a.target = "_blank";

// 2) Tarif arama: yazılan kelimeyi tarif adlarında arar, bulursa o tarife gider
var tarifler = {
  "corbalar.html": "mercimek ezogelin domates yayla tarhana tavuk",
  "anayemekler.html": "makarna menemen pilav kurufasulye karniyarik kofte",
  "tatlilar.html": "sutlac irmik kek baklava revani kazandibi"
};
function tarifAra(form) {
  // Türkçe harfleri sadeleştir (köfte -> kofte) ve ilk kelimeyi al
  var aranan = form.q.value.toLocaleLowerCase("tr").replace(/ı/g, "i").normalize("NFD").replace(/[̀-ͯ]/g, "").trim().split(" ")[0];
  for (var sayfa in tarifler)
    for (var ad of tarifler[sayfa].split(" "))
      if (aranan && ad.includes(aranan)) { location.href = sayfa + "#" + ad; return false; }
  alert("Aradığınız tarif bulunamadı. Örnek: mercimek, köfte, baklava");
  return false;
}

// 3) Formlar: mesaj gösterir, formu temizler ve giriş penceresini kapatır
function mesaj(form, yazi) {
  alert(yazi);
  form.reset();
  location.hash = "";
  return false;
}

// 4) Koyu / açık tema: seçim tarayıcıda hatırlanır
function tema() {
  document.body.classList.toggle("koyu");
  localStorage.tema = document.body.className;
}
if (localStorage.tema == "koyu") document.body.className = "koyu";
