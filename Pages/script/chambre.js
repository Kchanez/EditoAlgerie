
function openImageInNewTab() {
    const images = [
        { src: "/Images/Chambre/chambre.svg", isBaseImage: true },
        { src: "/Images/Chambre/Armoire.svg", isBaseImage: false, width: "24%", top: "15%", left: "32%" },
        { src: "/Images/Chambre/Coffre.svg", isBaseImage: false, width: "12%", top: "57%", left: "10%" },
        { src: "/Images/Chambre/Etiquette.svg", isBaseImage: false, width: "17%", top: "3%", left: "5%" },
        { src: "/Images/Chambre/CadreFamille.svg", isBaseImage: false, width: "6%", top: "25%", left: "8.9%" }
    ];

    const newTab = window.open("");
    if (newTab) {
        const body = newTab.document.body;
        body.style.margin = "0";
        body.style.padding = "0";
        body.style.width = "100%";
        body.style.position = "relative";

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
                        { src: "/Images/Chambre/khol.png", width: "12%", top: "45%", left: "45%", description: "Le khôl, un élément important de la culture et des traditions féminines en Algérie, notamment dans des lieux emblématiques comme la Casbah d'Alger, était utilisé non seulement pour l'esthétique, mais également pour ses vertus protectrices. À l'époque ancienne, les femmes appliquaient le khôl, souvent fabriqué à base de poudre d'antimoine, pour souligner leurs yeux tout en bénéficiant de ses propriétés médicinales, telles que la prévention des infections oculaires. Ce rituel faisait partie de l'identité culturelle et était transmis de génération en génération" },
                        { src: "/Images/Chambre/kerdoun.png", width: "9%", top: "87%", left: "32%", description: "Kerdoun: Provenant du Maghreb, et plus particulièrement de Kabylie, cette technique du kardoun (aussi orthographiée cardoune) consiste à forcer l'allongement et le lissage des cheveux en enroulant un ruban assez épais tout autour de sa chevelure fraichement lavée. La traduction la plus proche en français serait cordon. yant la réputation de faire pousser les cheveux, le kardoun est considéré comme une coiffure protectrice et peut à la limite étirer un cheveux bouclé mais ne participe pas directement à la pousse des cheveux." },
                        { src: "/Images/Chambre/laajar.png", width: "14%", top: "89%", left: "42%", description: "Laajar: accessoires traditionnels." },
                        { src: "/Images/Chambre/albums.png", width: "15%", top: "74%", left: "61%", description: "Albums: albums souvenirs." },
                        { src: "/Images/Chambre/Recette.png", width: "9%", top: "83%", left: "56%", description: "Recette: anciennes recettes." },
                        { src: "/Images/Chambre/Tapis.png", width: "10%", top: "41%", left: "60%", description: "Tapis: Les tapis utilisés à la Casbah d'Alger étaient des œuvres artisanales tissées à la main, combinant des motifs symboliques et des couleurs vives. Ils servaient à la fois de décoration et de pièces fonctionnelles, reflétant l'identité culturelle locale et le savoir-faire transmis à travers les générations." },
                    ];

                    objects.forEach(({ src, width, top, left, description }) => {
                        const objectImage = new Image();
                        objectImage.src = src;
                        objectImage.style.width = width;
                        objectImage.style.position = "absolute";
                        objectImage.style.top = top;
                        objectImage.style.left = left;
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

                            const descriptionText = newTab.document.createElement('p');
                            descriptionText.textContent = description;
                            descriptionText.style.color = "white";
                            descriptionText.style.fontSize = "18px";
                            descriptionText.style.marginBottom = "20px";
                            descriptionText.style.width = "50%";

                            const fullImage = new Image();
                            fullImage.src = src;
                            fullImage.style.width = "30%";
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

                            objectPopup.appendChild(descriptionText);
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

                    const popupContent = newTab.document.createElement('div');
                    popupContent.style.position = "relative";
                    popupContent.style.width = "85%";
                    popup.appendChild(popupContent);

                    // Bijoux Section
                    const bijoux = [
                        { src: "/Images/Chambre/CollierCorail.png", width: "10%", top: "20%", left: "30%", description: "Bague : un bijou intemporel, symbole de l'amour et de l'engagement." },
                        { src: "/Images/Chambre/Bracelet.png", width: "12%", top: "30%", left: "50%", description: "Collier : accessoire qui ajoute une touche d'élégance à tout ensemble." },
                        { src: "/Images/Chambre/BagueKabyle.png", width: "15%", top: "60%", left: "35%", description: "Bracelet : accessoire porté autour du poignet, synonyme de délicatesse." }
                    ];

                    bijoux.forEach(({ src, width, top, left, description }) => {
                        const jewelryImage = new Image();
                        jewelryImage.src = src;
                        jewelryImage.style.width = width;
                        jewelryImage.style.position = "absolute";
                        jewelryImage.style.top = top;
                        jewelryImage.style.left = left;
                        jewelryImage.style.cursor = "pointer";
                        jewelryImage.style.zIndex = "110";

                        jewelryImage.addEventListener('click', () => {
                            const jewelryPopup = newTab.document.createElement('div');
                            jewelryPopup.style.position = "fixed";
                            jewelryPopup.style.top = "0px";
                            jewelryPopup.style.left = "0px";
                            jewelryPopup.style.width = "100%";
                            jewelryPopup.style.height = "100%";
                            jewelryPopup.style.background = "rgba(0, 0, 0, 0.8)";
                            jewelryPopup.style.display = "flex";
                            jewelryPopup.style.flexDirection = "row";
                            jewelryPopup.style.justifyContent = "center";
                            jewelryPopup.style.alignItems = "center";
                            jewelryPopup.style.zIndex = "200";

                            const jewelryDescription = newTab.document.createElement('p');
                            jewelryDescription.textContent = description;
                            jewelryDescription.style.color = "white";
                            jewelryDescription.style.fontSize = "18px";
                            jewelryDescription.style.marginBottom = "20px";
                            jewelryDescription.style.textAlign = "center";
                            jewelryDescription.style.width = "50%";

                            const jewelryFullImage = new Image();
                            jewelryFullImage.src = src;
                            jewelryFullImage.style.width = "30%";
                            jewelryFullImage.style.borderRadius = "10px";

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
                                jewelryPopup.style.display = "none";
                            });

                            jewelryPopup.appendChild(jewelryDescription);
                            jewelryPopup.appendChild(jewelryFullImage);
                            jewelryPopup.appendChild(closePopup);

                            newTab.document.body.appendChild(jewelryPopup);
                        });

                        popupContent.appendChild(jewelryImage);
                    });

                    const closePopup = newTab.document.createElement('button');
                    closePopup.textContent = "Fermer";
                    closePopup.style.position = "fixed";
                    closePopup.style.top = "3%";
                    closePopup.style.left = "93%";
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
        });
    } else {
        alert("Impossible d'ouvrir la fenêtre.");
    }
}
