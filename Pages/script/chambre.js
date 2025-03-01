
function openImageInNewTab() {
    const images = [
        { src: "/Images/Chambre/chambre.svg", isBaseImage: true },
        { src: "/Images/Chambre/Armoire.svg", isBaseImage: false, width: "24%", top: "15%", left: "32%" },
        { src: "/Images/Chambre/Coffre.svg", isBaseImage: false, width: "12%", top: "57%", left: "10%" },
        { src: "/Images/Chambre/Etiquette.svg", isBaseImage: false, width: "17%", top: "3%", left: "5%" },
        { src: "/Images/Chambre/CadreFamille.png", isBaseImage: false, width: "6%", top: "21%", left: "8.9%" }
    ];
    

    const newTab = window.open("");


    if (newTab) {
        const body = newTab.document.body;
        body.style.position = "fixed";
        body.style.top = "0";
        body.style.left = "0";
        body.style.margin = "0px";
        body.style.padding = "0px";
        body.style.width = "100%";
        body.style.height = "100%";
        body.style.display = "flex";
        body.style.justifyContent = "center";
        body.style.alignItems = "center";
        body.style.transition = "background 15s ease-in-out";
        setTimeout(() => {
            body.style.background = "black"; 
        }, 500);
        setTimeout(() => {
            body.style.display = "white"; 
        }, 300);

        images.forEach(({ src, isBaseImage, width, top, left }) => {
            const image = new Image();
            image.src = src;
            image.style.width = isBaseImage ? "100%" : width;
            image.style.height = "auto";
            image.style.display = "block";
            image.style.position = isBaseImage ? "relative" : "absolute";
            image.style.top = top || "0";
            image.style.left = left || "0";
            image.style.zIndex = isBaseImage ? "1" : "2";

            body.appendChild(image);
            // Armoire
            if (src === "/Images/Chambre/Armoire.svg") {
                image.style.cursor = "pointer";
                image.addEventListener('click', () => {
                    const popup = newTab.document.createElement('div');
                    popup.style.position = "fixed";
                    popup.style.top = "0";
                    popup.style.left = "0";
                    popup.style.width = "100%";
                    popup.style.height = "100%";
                    popup.style.background = "rgba(0, 0, 0, 0.7)";
                    popup.style.display = "flex";
                    popup.style.justifyContent = "center";
                    popup.style.alignItems = "center";
                    popup.style.zIndex = "100";

                    const popupContent = newTab.document.createElement('div');
                    popupContent.style.position = "relative";
                    popupContent.style.width = "85%";
                    popup.appendChild(popupContent);

                    const popupImage = new Image();
                    popupImage.src = "/Images/Chambre/armoireOuverte.svg";
                    popupImage.style.width = "100%";
                    popupContent.appendChild(popupImage);



                    const objects = [
                        { src: "/Images/Chambre/kholArmoire.png", descriptionSrc: "/Images/Chambre/khol.png", width: "6%", top: "42%", left: "48%" },
                        { src: "/Images/Chambre/oud.png", descriptionSrc: "/Images/Chambre/baya.png", width: "23%", top: "29%", left: "24%" },
                        { src: "/Images/Chambre/kerdoun.png", descriptionSrc: "/Images/Chambre/kardoun.png", width: "10%", top: "89%", left: "43%" },
                        { src: "/Images/Chambre/laajar.png", descriptionSrc: "/Images/Chambre/haik-aajar.png", width: "14%", top: "53%", left: "60%" },
                        { src: "/Images/Chambre/albums.png", descriptionSrc: "/Images/Chambre/legende.png", width: "15%", top: "76%", left: "61%" },
                        { src: "/Images/Chambre/Recette.png", descriptionSrc: "/Images/Chambre/couscous.png", width: "10%", top: "7%", left: "30%" },
                        { src: "/Images/Chambre/Bracelet.png", descriptionSrc: "/Images/Chambre/Bracelet.png", width: "10%", top: "12%", left: "62%" },
                        { src: "/Images/Chambre/collier.png", descriptionSrc: "/Images/Chambre/collier.png", width: "16%", top: "23%", left: "59%"},
                        { src: "/Images/Chambre/Khalkhal.png", descriptionSrc: "/Images/Chambre/Khalkhal.png", width: "9%", top: "85%", left: "30%", rotate: "z -30deg" },
                    ];


                    objects.forEach(({ src, descriptionSrc, width, top, left, rotate}) => {
                        const objectImage = new Image();
                        objectImage.src = src;
                        objectImage.style.width = width;
                        objectImage.style.position = "absolute";
                        objectImage.style.top = top;
                        objectImage.style.left = left;
                        objectImage.style.rotate = rotate;
                        objectImage.style.cursor = "pointer";
                        objectImage.style.zIndex = "110";

                        // Ajout de l'événement "click" pour chaque objet
                        objectImage.addEventListener('click', () => {
                            const objectPopup = newTab.document.createElement('div');
                            objectPopup.style.position = "fixed";
                            objectPopup.style.top = "0px";
                            objectPopup.style.left = "0px";
                            objectPopup.style.width = "100%";
                            objectPopup.style.height = "100%";
                            objectPopup.style.background = "rgba(0, 0, 0, 0.8)";
                            objectPopup.style.display = "flex";
                            objectPopup.style.flexDirection = "row";
                            objectPopup.style.justifyContent = "center";
                            objectPopup.style.alignItems = "center";
                            objectPopup.style.zIndex = "200";

                            const fullImage = new Image();
                            fullImage.src = descriptionSrc;
                            fullImage.style.width = "50%";
                            fullImage.style.borderRadius = "10px";

                            const closePopup = newTab.document.createElement('button');
                            closePopup.textContent = "Fermer";
                            closePopup.style.marginTop = "20px";
                            closePopup.style.background = "#DEB887";
                            closePopup.style.color = "white";
                            closePopup.style.border = "none";
                            closePopup.style.padding = "10px 20px";
                            closePopup.style.cursor = "pointer";
                            closePopup.style.borderRadius = "10px";
                            closePopup.style.position = "absolute";
                            closePopup.style.top = "0%";
                            closePopup.style.left = "93.5%";

                            closePopup.addEventListener('click', () => {
                                objectPopup.style.display = "none";
                            });

                            objectPopup.appendChild(fullImage);
                            objectPopup.appendChild(closePopup);

                            newTab.document.body.appendChild(objectPopup);
                        });

                        popupContent.appendChild(objectImage);
                    });

                    const closePopup = newTab.document.createElement('button');
                    closePopup.textContent = "Fermer";
                    closePopup.style.position = "absolute";
                    closePopup.style.top = "-7px";
                    closePopup.style.right = "-100px";
                    closePopup.style.background = "#DEB887";
                    closePopup.style.color = "white";
                    closePopup.style.border = "none";
                    closePopup.style.padding = "10px 20px";
                    closePopup.style.cursor = "pointer";
                    closePopup.style.borderRadius = "10px";

                    closePopup.addEventListener('click', () => {
                        popup.style.display = "none";
                    });
                    popupContent.appendChild(closePopup);
                    newTab.document.body.appendChild(popup);
                });
            }
            //Coffre
            if (src === "/Images/Chambre/Coffre.svg") {
                image.style.cursor = "pointer";
                image.addEventListener('click', () => {
                    const popup = newTab.document.createElement('div');
                    popup.style.position = "fixed";
                    popup.style.top = "0";
                    popup.style.left = "0";
                    popup.style.width = "100%";
                    popup.style.height = "100%";
                    popup.style.background = "rgba(0, 0, 0, 0.7)";
                    popup.style.display = "flex";
                    popup.style.justifyContent = "center";
                    popup.style.alignItems = "center";
                    popup.style.zIndex = "100";

                    const fullImage = new Image();
                    fullImage.src = "/Images/Chambre/khit.png"; 
                    fullImage.style.width = "50%"; 
                    fullImage.style.borderRadius = "10px";

                    const closePopup = newTab.document.createElement('button');
                    closePopup.textContent = "Fermer";
                    closePopup.style.marginTop = "20px";
                    closePopup.style.background = "#DEB887";
                    closePopup.style.color = "white";
                    closePopup.style.border = "none";
                    closePopup.style.padding = "10px 20px";
                    closePopup.style.cursor = "pointer";
                    closePopup.style.borderRadius = "10px";
                    closePopup.style.position = "absolute";
                    closePopup.style.top = "0%";
                    closePopup.style.left = "93.5%";

                    closePopup.addEventListener('click', () => {
                        popup.style.display = "none";
                    });

                    popup.appendChild(fullImage);
                    popup.appendChild(closePopup);

                    newTab.document.body.appendChild(popup);
                });
            }   
            //Cadre
            if (src === "/Images/Chambre/CadreFamille.png") {
                image.style.cursor = "pointer";
                image.addEventListener('click', () => {
                    const popup = newTab.document.createElement('div');
                    popup.style.position = "fixed";
                    popup.style.top = "0";
                    popup.style.left = "0";
                    popup.style.width = "100%";
                    popup.style.height = "100%";
                    popup.style.background = "rgba(0, 0, 0, 0.7)";
                    popup.style.display = "flex";
                    popup.style.justifyContent = "center";
                    popup.style.alignItems = "center";
                    popup.style.zIndex = "100";

                    const fullImage = new Image();
                    fullImage.src = "/Images/Chambre/famille.png"; 
                    fullImage.style.width = "50%"; 
                    fullImage.style.borderRadius = "10px";

                    const closePopup = newTab.document.createElement('button');
                    closePopup.textContent = "Fermer";
                    closePopup.style.marginTop = "20px";
                    closePopup.style.background = "#DEB887";
                    closePopup.style.color = "white";
                    closePopup.style.border = "none";
                    closePopup.style.padding = "10px 20px";
                    closePopup.style.cursor = "pointer";
                    closePopup.style.borderRadius = "10px";
                    closePopup.style.position = "absolute";
                    closePopup.style.top = "0%";
                    closePopup.style.left = "93.5%";

                    closePopup.addEventListener('click', () => {
                        popup.style.display = "none";
                    });

                    popup.appendChild(fullImage);
                    popup.appendChild(closePopup);

                    newTab.document.body.appendChild(popup);
                });
            }

            if (src.includes("/Images/Chambre/Armoire.svg") || 
                src.includes("/Images/Chambre/Coffre.svg") ||
                src.includes("/Images/Chambre/CadreFamille.png")) {
                    image.style.filter = "drop-shadow(5px 5px 15px rgba(255, 255, 255, 0.9))";
            }

        });
    } else {
        alert("Impossible d'ouvrir la fenêtre.");
    }
}
