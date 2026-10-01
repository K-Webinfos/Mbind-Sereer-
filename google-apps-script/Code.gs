const DESTINATION_EMAIL = 'mbindsereer.ndiaganiao@gmail.com';

function doGet(e) {
  return HtmlService.createHtmlOutput(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mbind Sereer Reservations</title>
      </head>
      <body style="font-family:Arial,sans-serif;text-align:center;padding:50px">
        <h1>✅ Mbind Sereer Reservation System</h1>
        <p>The reservation service is online and ready.</p>
      </body>
    </html>
  `);
}

function doPost(e) {
  try {
    if (!e || !e.parameter) {
      throw new Error('Aucune donnée de réservation reçue.');
    }

    // The website uses a normal HTML POST form, so Apps Script receives
    // the fields through e.parameter rather than a JSON request body.
    const data = e.parameter;

    const name = data.name || 'Non renseigné';
    const email = data.email || 'Non renseigné';
    const phone = data.phone || 'Non renseigné';
    const checkin = data.checkin || 'Non renseignée';
    const checkout = data.checkout || 'Non renseignée';
    const guests = data.guests || 'Non renseigné';
    const accommodation = data.accommodation || 'Non renseigné';
    const eventType = data.event_type || 'Non renseigné';
    const eventDate = data.event_date || 'Non renseignée';
    const eventDuration = data.event_duration || 'Non renseignée';
    const nights = data.nights || 'Non renseignée';
    const total = data.total || 'Tarif à confirmer';
    const message = data.message || 'Aucun message';

    const subject = 'Nouvelle demande de réservation — Mbind Sereer';

    const body =
      'NOUVELLE DEMANDE DE RÉSERVATION\n' +
      '================================\n\n' +
      'Nom : ' + name + '\n' +
      'Email : ' + email + '\n' +
      'Téléphone : ' + phone + '\n' +
      'Arrivée : ' + checkin + '\n' +
      'Départ : ' + checkout + '\n' +
      'Nombre de voyageurs : ' + guests + '\n' +
      'Prestation : ' + accommodation + '\n' +
      'Type d’événement : ' + eventType + '\n' +
      'Date de l’événement : ' + eventDate + '\n' +
      'Durée / séjour : ' + (eventType !== 'Non renseigné' ? eventDuration : nights) + '\n' +
      'Estimation : ' + total + '\n\n' +
      'Message :\n' + message + '\n\n' +
      '================================\n' +
      'Demande envoyée depuis le site Mbind Sereer.';

    const mailOptions = {
      to: DESTINATION_EMAIL,
      subject: subject,
      body: body
    };

    if (email && email !== 'Non renseigné') {
      mailOptions.replyTo = email;
    }

    MailApp.sendEmail(mailOptions);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Réservation envoyée avec succès.'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('ERREUR RÉSERVATION : ' + error.toString());

    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
