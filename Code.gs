function teacherEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName('x')); // Change “x” to name of sheet
  var Range = sheet.getRange("A2:D1000");
  var data = Range.getValues();
  const teacherEmails={
    // Copy Paste all the teacher emails here
  };

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const [timestamp, studentName, teacherName, sent] = row;

    if (!timestamp) {
      break;
    }

      if (sent == true) {
      continue;
    }

    const template = HtmlService.createTemplateFromFile('Email'); //Change this to HTML name
    const emailAddress = teacherEmails[teacherName.trim()];

    data[i][3] = true;

    if (!emailAddress) {
      continue;
    }

    var changes = {
      name: studentName
    }

    template.changes = changes;
    const message = template.evaluate().getContent();

    MailApp.sendEmail({
      to: emailAddress,
      subject: `${studentName} in club meeting`, // The line on the left is the email subject
      htmlBody: message
    });

    Range.setValues(data);

  }
}
