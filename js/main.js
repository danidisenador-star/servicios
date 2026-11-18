/* =====================================================================
   MAIN.JS · arma la página con lo que escribiste en js/config.js
   (normalmente no necesitas tocar este archivo)
   ===================================================================== */
(function () {
  "use strict";
  var C = window.LINK;
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function wa(t) { return "https://wa.me/" + String(C.whatsapp).replace(/\D/g, "") + "?text=" + encodeURIComponent(t); }
  function icon(n) { return '<svg class="ic"><use href="#i-' + n + '"/></svg>'; }
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Perfil */
  $("#name").textContent = C.nombre; $("#role").textContent = C.rol;
  var av = $("#avatar"), img = $("#avatarImg"); $("#avatarLetter").textContent = (C.nombre || "D").charAt(0).toUpperCase();
  img.onerror = function () { av.classList.add("no-img"); }; img.src = C.foto; img.alt = C.nombre;
  if (C.estado) $("#status span").textContent = C.estado; else $("#status").hidden = true;

  /* Titular y botones de WhatsApp */
  $("#title").textContent = C.titular; $("#sub").textContent = C.subtitular;
  $("#ctaMain").href = wa(C.mensajes.general); $("#fab").href = wa(C.mensajes.general);
  $("#ctaGift").href = wa(C.mensajes.consultoria);
  $("#giftTitle").textContent = C.regalo.titulo; $("#giftText").textContent = C.regalo.texto;
  $("#giftList").innerHTML = (C.regalo.incluye || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join(""); $("#giftBtn").textContent = C.regalo.boton;
  $("#ig").href = C.instagram; $("#igName").textContent = C.usuarioInstagram; $("#year").textContent = new Date().getFullYear();

  /* Palabra que cambia */
  $("#rotorFixed").textContent = C.palabraFija;
  var words = C.palabrasQueCambian || [], wi = 0, rw = $("#rotorWord"); rw.textContent = words[0] || "";
  if (words.length > 1 && !reduce) setInterval(function () { rw.classList.add("out"); setTimeout(function () { wi = (wi + 1) % words.length; rw.textContent = words[wi]; rw.classList.remove("out"); }, 320); }, 2600);

  /* Demos (celulares) */
  $("#demos").innerHTML = C.demos.map(function (d) {
    return '<a class="demo" href="' + esc(d.url) + '" target="_blank" rel="noopener" aria-label="Ver demo: ' + esc(d.titulo) + " (" + esc(d.sector) + ')">' +
      '<div class="phone"><div class="phone__screen"><img src="' + esc(d.img) + '" alt="Vista de la demo ' + esc(d.titulo) + '" loading="lazy"></div></div>' +
      '<div class="demo__cap"><h4>' + esc(d.titulo) + "</h4><p>" + esc(d.texto) + '</p><span class="demo__btn">Ver demo ' + icon("arrow") + "</span></div></a>";
  }).join("");

  /* Qué incluye, sectores, servicios */
  $("#feats").innerHTML = C.beneficios.map(function (b) { return '<li class="feat"><span class="feat__ic">' + icon(b.icono) + "</span><div><h4>" + esc(b.titulo) + "</h4><p>" + esc(b.texto) + "</p></div></li>"; }).join("");
  $("#h-sec").textContent = C.tituloSectores; $("#secText").textContent = C.textoSectores;
  $("#tags").innerHTML = C.sectores.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
  $("#h-serv").textContent = C.tituloServicios;
  $("#serv").innerHTML = C.servicios.map(function (s) { return '<li><a href="' + esc(wa(C.mensajes[s.mensaje] || C.mensajes.general)) + '" target="_blank" rel="noopener"><div><h4>' + esc(s.titulo) + "</h4><p>" + esc(s.texto) + "</p></div>" + icon("arrow") + "</a></li>"; }).join("");

  /* Botón flotante: aparece al pasar el botón principal; se oculta cuando ya ves el botón de la consultoría */
  var fab = $("#fab"), gift = $("#ctaGift"), mainBtn = $("#ctaMain");
  function fabUpdate() {
    var vh = window.innerHeight, m = mainBtn.getBoundingClientRect(), g = gift.getBoundingClientRect();
    fab.classList.toggle("show", m.bottom < 0 && !(g.top < vh && g.bottom > 0));
  }
  window.addEventListener("scroll", fabUpdate, { passive: true }); window.addEventListener("resize", fabUpdate); fabUpdate();
})();
