(()=>{const e=document.getElementById("content");function t(e){const t=document.createElement("button");t.className="btn btn-dark m-3 text-warning fw-bold active fs-2";const n=document.createTextNode(e);return t.appendChild(n),t}e.className="bg-dark";const n=document.createElement("header");n.classList.add("d-flex","bg-dark","justify-content-center","p-2"),n.appendChild(t("Home")),n.appendChild(t("Menu")),n.appendChild(t("About")),e.appendChild(n);const a=document.createElement("div");a.className="homeDiv container-md pt-5";const d=document.createElement("h1");d.className="text-center text-warning mb-4 mt-3";const c=document.createTextNode("Quark's Bar");d.appendChild(c),a.appendChild(d);const o=document.createElement("p");o.className="text-center text-dark fw-bold fst-italic fs-3 p1";const s=document.createElement("span"),l=document.createTextNode("Open 26 hours a day");s.appendChild(l),s.className="bg-warning p-2",o.appendChild(s),a.appendChild(o);const p=document.createElement("div");p.className="d-flex justify-content-center my-5";const m=document.createElement("p");m.className="text-center text-warning fw-bold mt-5 me-3 fst-italic quote";const r=document.createTextNode('"A suit of the finest Andorian silk? A ring of pure Surax? A complete set of Tanesh pottery? How about a latinum plated bucket to sleep in?"');m.appendChild(r),e.appendChild(a);const i=document.createElement("img");i.src="./images/quark.jpg",i.className="rounded-circle ms-3 quark",p.appendChild(m),p.appendChild(i);const u=document.createElement("article");u.appendChild(a),u.appendChild(p),e.appendChild(u);const h=document.createElement("footer");h.className="bg-dark";const C=document.createElement("p");C.className="fw-bold fs-5 text-warning text-center pt-4";const f=document.createTextNode("Made by ");C.appendChild(f),C.appendChild(function(){const e=document.createElement("a");e.href="https://github.com/1v4n4",e.className=" text-warning";const t=document.createTextNode("1v4n4");return e.appendChild(t),e}());const x=document.createTextNode("  © 2021");C.appendChild(x),h.appendChild(C),e.appendChild(h)})();