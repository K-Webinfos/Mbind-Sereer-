MBIND SEREER — WEBSITE

Step 8 — Reservation email backend + GET health check

Reservation flow:
Website form → Google Apps Script Web App → mbindsereer.ndiaganiao@gmail.com

Google Apps Script
------------------
The backend is in:
google-apps-script/Code.gs

It contains:
- doGet(): confirms that the Web App is online when its /exec URL is opened.
- doPost(): receives reservation form data and sends it to mbindsereer.ndiaganiao@gmail.com.
- Reply-To is set to the guest's email when provided.

Current Web App URL:
https://script.google.com/macros/s/AKfycbxixKMkAmsOQ6jdXisK3_7V5GRtm25xWlpY4ft2o8HeV2vJe1rXgffeDRGTNda0mk0w/exec

Deployment requirements:
- Deploy as Web app.
- Execute as: Me.
- Who has access: Anyone.
- After changing Code.gs, update/redeploy the existing Web App deployment.

Website
-------
The reservation form in index.html is already connected to the current /exec URL.
WhatsApp configuration is intentionally not implemented yet.

Testing
-------
1. Open the /exec URL in a browser. The doGet() health-check page should appear.
2. Open the website and submit a test reservation.
3. Check mbindsereer.ndiaganiao@gmail.com for the reservation email.
4. Reply to the email to verify that the guest's address is used as Reply-To.


Festival gallery update:
- The festival gallery now contains 16 photos (festival-01.jpg through festival-16.jpg).


Vidéo du Festival
------------------
La section « Festival » commence désormais par une vidéo YouTube intégrée, placée avant les 16 photos du Festival.
Vidéo : https://youtu.be/02DGM7F8_6U
Titre YouTube : « Hymne 1 (Officiel HD) Festival Musique Sérère - Musique Sacrée »


Festival vidéo : le clip est désormais intégré directement au site dans assets/festival/festival-video.mp4 avec le lecteur vidéo HTML5. Les 16 photos du festival restent affichées sous la vidéo.


ACTIVITÉS — Mise à jour
- Activité 01 : Visite en charrette autour du village et des lieux historiques.
- 3 photos intégrées dans un carrousel compact avec navigation et défilement automatique.


Mise à jour Step 15 : Activité 02 « Séances de danse » ajoutée avec 3 photos dans un carrousel compact.


Step 16 : Activité 03 « Séances de contes africains » est ajoutée avec 3 photos en carrousel compact.
Step 17 : Activité 04 « Animez vos événements avec Dj Ganzo » est ajoutée avec 3 photos en carrousel compact. Les deux activités sont désormais dans le bon ordre.


Step 19 : Activité 05 — espace ouvert
--------------------------------------
Titre : « Mbind Sereer met à votre disposition son espace ouvert pour toutes vos activités familiales ou professionnelles ».
4 photos intégrées dans le carrousel de l’activité 05.
Les photos ont été légèrement optimisées (contraste, couleur et netteté) avant intégration.


Étape 20 : les 10 premières photos de la galerie ont été ajoutées et optimisées en WebP. La galerie peut être complétée avec d’autres photos plus tard.

Étape 21 : 10 nouvelles photos ont été ajoutées à la galerie, portant la collection à 20 photos (gallery-01.webp à gallery-20.webp). Les nouvelles images ont été orientées correctement et optimisées en WebP.
