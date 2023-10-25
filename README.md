# Teacher-Email-Send
If a teacher wants to hold a club meeting during ROAR, he/she can have the student fill out a google form which the student can simply fill out and the email is sent automatically to the student's teacher.

Create a new google form that asks for 2 entries. The first entry should be a short response input that asks for student's name. The second entry should be a dropdown that allows the student to select their Roar teacher's name.

![Screenshot 2023-10-12 8 14 49 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/37b526aa-076d-42c2-98d4-022add968a57)


The list of the names of all the teachers at Dunwoody High School is below. Just copy the whole list from below and paste it into the first choice of the dropdown:

```
Rose Abraham
Clarissa Adams
Demarcus Adams-England
Melissa Andrews
Katherine Andrin
Dinshaw Anklesaria
Mary Arnette
Bangalore Arunkumar
Ayda Bashiri
Adrienne Bashuk
Thomas Bass
Jacorey Battle
Brandon Beech
Kathleen Bell
Michael Berry
Ana Bilbao-Granadillo
William Blackwood
Kathy Britt
Russel Brooks
Jaisha Bruce
Daniel Buis
Amy Burrell
Bill Cefaratti
Misty Christensen
Jonathan Chriszt
Wes Chu
Richard Clark
Dalen Claytor
Joycelin Cloud
Hannah Conte
Tracy Curtis
Jamie Davis
Joseph Davis
Ethan Degeorge
Deanna deRoux
Sheldon deRoux
Tristan Drusky
Earle Dwayne
Kelly Dwyer
Kelly Elliott
William English
Edgar Flores
Kaila Flynn
Steven Fortenberry
Heidi Forth
Idris French
Douglas Friedlander
Shaaban Fundi
Araceli Gallegos
Carolyn Garber
Cary Garner
Julie Gartner
Chrystal Gates
Ryan Gause
David Gay
Roger Gay
Ingrid Gero
Edmond Gibbons
Michael Giel
Amy Goertemiller
Kelly Goodman
Emma Handziuk
Nathalie Hanlet
Briteney Harris
Kedrick Harvey
Eric Hollier
Courtney Holt-Riley
Jason Hunter
Samuel Hutcherson
Yussef Jasmine
David Johnson
Carla Jones
Rebecca Jones
Anne Jordan
Donald Keen
Angela Keiser
Oje Kendi
Kanesha King
Zoe Knight
David Kruglinski
Katelyn Kurtz
Laura Lampron
Christine Lauer
Lashonda Lawton
Shelly Levy
Gabrielle Lewis-Hardwick
Jameson Long
Vijay Madan
Ramesheon Marine
Paul Markley
Kyle Mastin
Howard Mccain
Summer Mcdonald
Beverly Mcguire
Ronny Mcmann
Luke McSorley
Kristin Mendheim
Raul Mexicano
Changa Miller
Billy Mosely
Mike Nash
Jamie Noble
Michelle O'Connor
Alison Oliver
Jennifer Ouanzin
Della Parson
LeMichael Peeples
Carolina Perez
Tamika Phillips
Catherine Preston
Wendy Puckett
Pushpa Rajan
Sara Reul
Alan Ritchey
Carter Robb
Kristen Robbins
Sarah Robberts
Tanisha Rodgers
Dalia Rojo
Taelor Rye
Mohan Sadhasivan
Talya Salus
Matthew Schmitz
Greg Seals
Jermaine Searles
Shayna Simon
Christopher Simony
Kyle Smith
Oreathia Smith
Juliana Souki
Rick Spyker
Marjorie Steinbrenner
Marydee Sturken
Montez Swinney
Tymmiah Swint
Rachel Taylor
Kevin Travis
John Tucker_Jr
Heather Van_Wyk
Tammy Wichman
Suzanne Wilcox
Christine Williams
Sonya Williams
Janee Williams
Natalie Williams
Angela Williams-Pitkonen
Paul Yoon
Claire Zimmerman
```

Now the google form part of this is done! 

Now click on "Responses" and then click "Open in Sheet" or "Create new Sheet". This will create a google sheet that automatically updates whenever a new google form is submitted. 

![Screenshot 2023-10-12 8 16 07 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/cb5ecc32-2f55-4bcc-9742-ea603bf125e0)


You can either create a whole new google sheet or link it to an existing sheet. Whatever you do, when you create the sheet, come to the bottom of the document and where is says "Form Responses 1", click on the triangle and rename the sheet to "Send Email".

![Screenshot 2023-10-12 8 12 15 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/72aeca43-7d89-49de-a580-18c5f4d651c5)


Column A of this sheet should be Timestamps, Column B should be Student Name and Column C should be teacher name. If this is not the order they are in right now, drag the columns around until they are in this order. 

For Column D, create a new title that says "Email Sent". 

![Screenshot 2023-10-12 8 08 34 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/fbeb37c7-6133-4f53-bbd9-6d153979ef58)


Now we need to do the email automation! On the google sheet, click on "Extensions" then click "Apps Script"

![Screenshot 2023-10-12 8 18 02 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/484144b6-e1db-4502-b396-a09dcf84bb78)


Replace all the code already present there with the code below:

```js
function teacherEmail() {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
  }
  catch (e) {
    console.log('Could not obtain lock after 30 seconds.');
    return;
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName('Send Email'));
  const formRange = sheet.getRange("A2:C1000");
  const formData = formRange.getValues();
  const sentRange = sheet.getRange("D2:D1000");
  const sentData = sentRange.getValues();
  console.log("Data collected");

  const teacherEmails = {
    'Rose Abraham' : 'Rose_Abraham@dekalbschoolsga.org',
    'Clarissa Adams' : 'Clarissa_Adams@dekalbschoolsga.org',
    'Demarcus Adams-England' : 'Demarcus_Adams-England@dekalbschoolsga.org',
    'Melissa Andrews' : 'Melissa_Andrews@dekalbschoolsga.org',
    'Katherine Andrin' : 'Katherine_Andrin@dekalbschoolsga.org',
    'Dinshaw Anklesaria' : 'Dinshaw_K_Anklesaria@dekalbschoolsga.org',
    'Mary Arnette' : 'Mary_Arnette@dekalbschoolsga.org',
    'Bangalore Arunkumar' : 'Bangalore_Arunkumar@dekalbschoolsga.org',
    'Ayda Bashiri' : 'Ayda_Bashiri@dekalbschoolsga.org',
    'Adrienne Bashuk' : 'Adrienne_Bashuk@dekalbschoolsga.org',
    'Thomas Bass' : 'Thomas_Bass@dekalbschoolsga.org',
    'Jacorey Battle' : 'Jacorey_Battle@dekalbschoolsga.org',
    'Brandon Beech' : 'Brandon_Beech@dekalbschoolsga.org',
    'Kathleen Bell' : 'Kathleen_Bell@dekalbschoolsga.org',
    'Michael Berry' : 'Michael_Berry@dekalbschoolsga.org',
    'Ana Bilbao-Granadillo' : 'Ana_Bilbao-Granadillo@dekalbschoolsga.org',
    'William Blackwood' : 'William_Blackwood@dekalbschoolsga.org',
    'Stacey Blake' : 'stacey_blake@dekalbschoolsga.org',
    'Kathy Britt' : 'Kathy_Britt@dekalbschoolsga.org',
    'Russel Brooks' : 'Russel_P_Brooks@dekalbschoolsga.org',
    'Jaisha Bruce' : 'Jaisha_Bruce@dekalbschoolsga.org',
    'Daniel Buis' : 'Daniel_Buis@dekalbschoolsga.org',
    'Amy Burrell' : 'Amy_Burrell@dekalbschoolsga.org',
    'Bill Cefaratti' : 'Bill_Cefaratti@dekalbschoolsga.org',
    'Misty Christensen' : 'Misty_Christensen@dekalbschoolsga.org',
    'Jonathan Chriszt' : 'Jonathan_Chriszt@dekalbschoolsga.org',
    'Wes Chu' : 'Wes_Chu@dekalbschoolsga.org',
    'Richard Clark' : 'Richard_Clark@dekalbschoolsga.org',
    'Dalen Claytor' : 'Dalen_Claytor@dekalbschoolsga.org',
    'Joycelin Cloud' : 'Joycelin_Cloud@dekalbschoolsga.org',
    'Hannah Conte' : 'Hannah_Conte@dekalbschoolsga.org',
    'Tracy Curtis' : 'Tracy_Curtis@dekalbschoolsga.org',
    'Jamie Davis' : 'Jamie_Davis@dekalbschoolsga.org',
    'Joseph Davis' : 'Joseph_Davis@dekalbschoolsga.org',
    'Ethan Degeorge' : 'Ethan_Degeorge@dekalbschoolsga.org',
    'Deanna deRoux' : 'Deanna_deRoux@dekalbschoolsga.org',
    'Sheldon deRoux' : 'Sheldon_deRoux@dekalbschoolsga.org',
    'Tristan Drusky' : 'Drusky@dekalbschoolsga.org',
    'Earle Dwayne' : 'Dwayne_Earle@dekalbschoolsga.org',
    'Kelly Dwyer' : 'Kelly_L_Dwyer@dekalbschoolsga.org',
    'Kelly Elliott' : 'Kelly_Elliott@dekalbschoolsga.org',
    'William English' : 'William_English@dekalbschoolsga.org',
    'Edgar Flores' : 'Edgar_G_Flores@dekalbschoolsga.org',
    'Kaila Flynn' : 'Kaila_Flynn@dekalbschoolsga.org',
    'Steven Fortenberry' : 'Steven_Fortenberry@dekalbschoolsga.org',
    'Heidi Forth' : 'Heidi_Forth@dekalbschoolsga.org',
    'Idris French' : 'Idris_French@dekalbschoolsga.org',
    'Douglas Friedlander' : 'Douglas_Friedlander@dekalbschoolsga.org',
    'Shaaban Fundi' : 'Shaaban_Fundi@dekalbschoolsga.org',
    'Araceli Gallegos' : 'Araceli_Gallegos@dekalbschoolsga.org',
    'Carolyn Garber' : 'Carolyn_Garber@dekalbschoolsga.org',
    'Cary Garner' : 'Cary_Garner@dekalbschoolsga.org',
    'Julie Gartner' : 'Julie_Gartner@dekalbschoolsga.org',
    'Chrystal Gates' : 'Chrystal_Parker-Gates@dekalbschoolsga.org',
    'Ryan Gause' : 'Ryan_Gause@dekalbschoolsga.org',
    'David Gay' : 'James_D_Gay@dekalbschoolsga.org',
    'Roger Gay' : 'Roger_Gay@dekalbschoolsga.org',
    'Denise George' : 'denise_george@dekalbschoolsga.org',
    'Ingrid Gero' : 'Ingrid_Gero@dekalbschoolsga.org',
    'Edmond Gibbons' : 'Edmond_Gibbons@dekalbschoolsga.org',
    'Michael Giel' : 'Michael_Giel@dekalbschoolsga.org',
    'Amy Goertemiller' : 'Amy_Goertemiller@dekalbschoolsga.org',
    'Kelly Goodman' : 'Kelly_Goodman@dekalbschoolsga.org',
    'Emma Handziuk' : 'Emma_Handziuk@dekalbschoolsga.org',
    'Nathalie Hanlet' : 'Nathalie_Hanlet@dekalbschoolsga.org',
    'Briteney Harris' : 'Briteney_Harris@dekalbschoolsga.org',
    'Larryssa Harris' : 'larryssa_harris@denise_george@dekalbschoolsga.org',
    'Kedrick Harvey' : 'Harvey@dekalbschoolsga.org',
    'Susan Hawk' : 'susan_hawk@dekalbschoolsga.org',
    'George Hill' : 'george_hill@denise_george@dekalbschoolsga.org',
    'Eric Hollier' : 'Eric_Hollier@dekalbschoolsga.org',
    'Courtney Holt-Riley' : 'Courtney_Holt-Riley@dekalbschoolsga.org',
    'Jason Hunter' : 'Jason_Hunter@dekalbschoolsga.org',
    'Samuel Hutcherson' : 'Samuel_Hutcherson@dekalbschoolsga.org',
    'Thenita Hutchinson' : 'thenita_hutchinson@denise_george@dekalbschoolsga.org',
    'Yussef Jasmine' : 'Yussef_Jasmine@dekalbschoolsga.org',
    'David Johnson' : 'David_C_Johnson@dekalbschoolsga.org',
    'Carla Jones' : 'Carla_Jones@dekalbschoolsga.org',
    'Rebecca Jones' : 'Rebecca_L_Jones@dekalbschoolsga.org',
    'Anne Jordan' : 'Anne_Jordan@dekalbschoolsga.org',
    'Donald Keen' : 'Donald_Keen@dekalbschoolsga.org',
    'Angela Keiser' : 'Angela_Keiser@dekalbschoolsga.org',
    'Oje Kendi' : 'Oje_Kendi@dekalbschoolsga.org',
    'Kanesha King' : 'Kanesha_King@dekalbschoolsga.org',
    'Zoe Knight' : 'Zoe_Knight@dekalbschoolsga.org',
    'David Kruglinski' : 'David_Kruglinski@dekalbschoolsga.org',
    'Katelyn Kurtz' : 'Katelyn_Kurtz@dekalbschoolsga.org',
    'Laura Lampron' : 'Laura_Lampron@dekalbschoolsga.org',
    'Christine Lauer' : 'Christine_Lauer@dekalbschoolsga.org',
    'Lashonda Lawton' : 'Lashonda_Lawton@dekalbschoolsga.org',
    'Shelly Levy' : 'Shelly_Levy@dekalbschoolsga.org',
    'Gabrielle Lewis-Hardwick' : 'Gabrielle_Lewis-Hardwick@dekalbschoolsga.org',
    'Jameson Long' : 'Jameson_Long@dekalbschoolsga.org',
    'Vijay Madan' : 'Vijay_B_Madan@dekalbschoolsga.org',
    'Ramesheon Marine' : 'ramesheon_marine@dekalbschoolsga.org',
    'Paul Markley' : 'Paul_Markley@dekalbschoolsga.org',
    'Kyle Mastin' : 'Kyle_Mastin@dekalbschoolsga.org',
    'Howard Mccain' : 'Howard_Mccain@dekalbschoolsga.org',
    'Summer Mcdonald' : 'Summer_Mcdonald@dekalbschoolsga.org',
    'Beverly Mcguire' : 'Beverly_Mcguire@dekalbschoolsga.org',
    'Ronny Mcmann' : 'Ronny_Mcmann@dekalbschoolsga.org',
    'Luke McSorley' : 'Luke_McSorley@dekalbschoolsga.org',
    'Kristin Mendheim' : 'Kristin_Mendheim@dekalbschoolsga.org',
    'Raul Mexicano' : 'Raul_Mexicano@dekalbschoolsga.org',
    'Changa Miller' : 'changa_h_miller@dekalbschoolsga.org',
    'Billy Mosely' : 'B_Mosely@dekalbschoolsga.org',
    'Mike Nash' : 'John_Nash@dekalbschoolsga.org',
    'Jamie Noble' : 'Jamie_Noble@dekalbschoolsga.org',
    'Michelle O'Connor' : "Michelle_O'Connor@dekalbschoolsga.org",
    'Alison Oliver' : 'Alison_Oliver@dekalbschoolsga.org',
    'Jennifer Ouanzin' : 'Jennifer_F_Ouanzin@dekalbschoolsga.org',
    'Della Parson' : 'Della_Parson@dekalbschoolsga.org',
    'LeMichael Peeples' : 'LeMichael_T_Peeples@dekalbschoolsga.org',
    'Carolina Perez' : 'Carolina_Perez@dekalbschoolsga.org',
    'Tamika Phillips' : 'Tamika_Phillips@dekalbschoolsga.org',
    'Catherine Preston' : 'Catherine_S_Preston@dekalbschoolsga.org',
    'Wendy Puckett' : 'Wendy_C_Puckett@dekalbschoolsga.org',
    'Pushpa Rajan' : 'Pushpa_Rajan@dekalbschoolsga.org',
    'Sara Reul' : 'Sara_Reul@dekalbschoolsga.org',
    'Alan Ritchey' : 'Alan_Ritchey@dekalbschoolsga.org',
    'Carter Robb' : 'Carter_Robb@dekalbschoolsga.org',
    'Kristen Robbins' : 'Kristen_Robbins@dekalbschoolsga.org',
    'Sarah Robberts' : 'Sarah_Robberts@dekalbschoolsga.org',
    'Tanisha Rodgers' : 'Tanisha_L_Rodgers@dekalbschoolsga.org',
    'Dalia Rojo' : 'Dalia_A_Rojo@dekalbschoolsga.org',
    'Taelor Rye' : 'Taelor_Rye@dekalbschoolsga.org',
    'Mohan Sadhasivan' : 'Mohan_Sadhasivan@dekalbschoolsga.org',
    'Talya Salus' : 'Talya_D_Salus@dekalbschoolsga.org',
    'Matthew Schmitz' : 'Matthew_Schmitz@dekalbschoolsga.org',
    'Greg Seals' : 'Greg_G_Seals@dekalbschoolsga.org',
    'Jermaine Searles' : 'Jermaine_Searles@dekalbschoolsga.org',
    'Shayna Simon' : 'Shayna_P_Simon@dekalbschoolsga.org',
    'Christopher Simony' : 'Christopher_Simony@dekalbschoolsga.org',
    'Kyle Smith' : 'Smith@dekalbschoolsga.org',
    'Oreathia Smith' : 'Oreathia_Smith@dekalbschoolsga.org',
    'Juliana Souki' : 'Souki@dekalbschoolsga.org',
    'Rick Spyker' : 'Rick_Spyker@dekalbschoolsga.org',
    'Marjorie Steinbrenner' : 'Marjorie_Duvall@dekalbschoolsga.org',
    'Marydee Sturken' : 'Marydee_W_Sturken@dekalbschoolsga.org',
    'Montez Swinney' : 'Montez_Swinney@dekalbschoolsga.org',
    'Tymmiah Swint' : 'Tymmiah_Swint@dekalbschoolsga.org',
    'Rachel Taylor' : 'Rachel_Taylor@dekalbschoolsga.org',
    'Kevin Travis' : 'Kevin_M_Travis@dekalbschoolsga.org',
    'John Tucker_Jr' : 'John_Tucker_Jr@dekalbschoolsga.org',
    'Heather Van_Wyk' : 'Heather_Van_Wyk@dekalbschoolsga.org',
    'Tammy Wichman' : 'Tammy_Z_Wichman@dekalbschoolsga.org',
    'Suzanne Wilcox' : 'Suzanne_Wilcox@dekalbschoolsga.org',
    'Christine Williams' : 'C_Williams@dekalbschoolsga.org',
    'Sonya Williams' : 'Sonya_L_Williams@dekalbschoolsga.org',
    'Janee Williams' : 'Janee_blake@dekalbschoolsga.org',
    'Natalie Williams' : 'Natalie_C_Williams@dekalbschoolsga.org',
    'Angela Williams-Pitkonen' : 'Angela_L_Williams@dekalbschoolsga.org',
    'Paul Yoon' : 'Paul_Yoon@dekalbschoolsga.org',
    'Claire Zimmerman' : 'Claire_S_Zimmerman@dekalbschoolsga.org'
  };

  for (let i = 0; i < formData.length; i++) {
    const row = formData[i];
    const [timestamp, studentName, teacherName] = row;
    const sent = sentData[i][0];

    if (!timestamp) {
      break;
    }

    if (sent == true) {
      continue;
    }

    const template = HtmlService.createTemplateFromFile('Email');
    const emailAddress = teacherEmails[teacherName.trim()];

    sentData[i][0] = true;

    if (!emailAddress) {
      console.log(`No email address found for ${teacherName}!`);
      continue;
    }

    template.studentName = studentName;
    const message = template.evaluate().getContent();
    MailApp.sendEmail({
      to: emailAddress,
      subject: "Student in club meeting", //This line is the email subject
      htmlBody: message
    });

    console.log(`Sent email to ${emailAddress} for ${studentName}`);
  }

  //update the spreadsheet
  sentRange.setValues(sentData);
  SpreadsheetApp.flush();

  //release the lock
  lock.releaseLock();

  return;
}
```
In the code above, near the very bottom of the code, you should see the following code:
```js
    MailApp.sendEmail({
      to: emailAddress,
      subject: "Student in club meeting",
      htmlBody: message
    });
```
You can edit the text after the `subject: ` as this will be the subject of your email. Make sure whatever the subject of the email is is still within quotation marks and there is a comma at the end of the line after you close the quotation marks.

After that, click Ctrl+S on your keyboard. Then, create a new file. Select HTML. And name it “Email” (without the quotation marks).

![Screenshot 2023-10-12 8 22 26 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/944c75f7-b942-421b-b9f6-9223fcf455f6)


Then replace all the code there with the code below:

```html
Good Morning, <br>
I have <?=studentName?> for our Club Meeting during ROAR today. Please excuse
him/her for the meeting! <br><br>
Sincerely,<br>
Teacher Name
```

You can edit the content of the email above. `<br>` specifies a line break (enter by itself does not create a new line. You have to use `<br>`). `<?=studentName?>` just gets the student name. So type that wherever you want the student name to come up in the email.
After you are satisfied with it, click Ctrl+S on your keyboard again to save your work.

Now we are almost done! We have done all the hard work. Now we just need the code to run every time someone submits the google form! To do that, on the very left of the screen, click on the symbol that looks like a stopwatch. If you hover over it, it should say "Triggers".

![Screenshot 2023-10-12 8 30 12 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/fd191680-67ce-41a2-941a-925bd78bf29d)


On the bottom right of the screen, click "Add Trigger". Then don't change any of the setting except where it says "Select event type". For that, select "On form submit".

![Screenshot 2023-10-12 8 32 10 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/778a981a-19ed-4fd0-91db-cbc86a6d8e6f)

Then click "Save". It will show a popup where you will have to select your google account:

![Screenshot 2023-10-12 8 32 29 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/b0570c8f-0eb6-41f4-aaae-6370f522d334)


When you select your google account, it will show the following message. This is normal and is completely safe because you made this yourself and is not an official app:

![Screenshot 2023-10-12 8 32 41 PM](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/810042b4-d57c-4470-a6d4-62735d2c9871)

Scroll down on this message and click "Advanced" (Do NOT click "Back to Safety") and then click "Go to Untitled project (unsafe)" and then scroll down and click "Allow".

And this is it! You are now done! Fill out the google form and try it out to make sure it works! Now whenever you host a Roar meeting, the student can just fill out the google form (You can use the same google form for attendance) and an email will automatically be sent to their Roar teacher!
