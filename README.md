# Teacher-Email-Send
If a teacher wants to hold a club meeting during ROAR, he/she can have the student fill out a google form which the student can simply fill out and the email is sent automatically to the student's teacher.

Create a new google form that asks for 2 entries. The first entry should be a short response input that asks for student's name. The second entry should be a dropdown that allows the student to select their Roar teacher's name.

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/fc1842b9-0e2c-4556-8173-cd27c4f2b7ac)


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
Esther Bentley
Michael Berry
Ana Bilbao-Granadillo
William Blackwood
Benjamin Braaten
Kathy Britt
Russel Brooks
Lissa Brown
Jaisha Bruce
Robert Buggs
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
Paul Markley
Kyle Mastin
Howard Mccain
Summer Mcdonald
Beverly Mcguire
Ronny Mcmann
Luke McSorley
Kristin Mendheim
Raul Mexicano
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

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/3246681a-f844-4efa-8c4c-af16b33ec5b7)


You can either create a whole new google sheet or link it to an existing sheet. Whatever you do, when you create the sheet, come to the bottom of the document and where is says "Form Responses 1", click on the triangle and rename the sheet to "Send Email".

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/f78b66a4-c515-475d-94fd-bccb4ec83bc0)



Column A of this sheet should be Timestamps, Column B should be Student Name and Column C should be teacher name. If this is not the order they are in right now, drag the columns around until they are in this order. 

For Column D, create a new title that says "Email Sent". 

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/e8007643-e56b-4f59-8437-4327163a057c)

Now we need to do the email automation! On the google sheet, click on "Extensions" then click "Apps Script"

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/9e1998db-68c5-4be6-89c6-fb4e83621446)


Replace all the code already present there with the code below:

```js
function teacherEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  SpreadsheetApp.setActiveSheet(sheet.getSheetByName('Send Email')); // Change “Send Email” to name of sheet
  var Range = sheet.getRange("A2:D1000");
  var data = Range.getValues();
  const teacherEmails={
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
    'Esther Bentley' : 'Esther_Bentley@dekalbschoolsga.org',
    'Michael Berry' : 'Michael_Berry@dekalbschoolsga.org',
    'Ana Bilbao-Granadillo' : 'Ana_Bilbao-Granadillo@dekalbschoolsga.org',
    'William Blackwood' : 'William_Blackwood@dekalbschoolsga.org',
    'Benjamin Braaten' : 'Benjamin_Braaten@dekalbschoolsga.org',
    'Kathy Britt' : 'Kathy_Britt@dekalbschoolsga.org',
    'Russel Brooks' : 'Russel_P_Brooks@dekalbschoolsga.org',
    'Lissa Brown' : 'Lissa_Brown@dekalbschoolsga.org',
    'Jaisha Bruce' : 'Jaisha_Bruce@dekalbschoolsga.org',
    'Robert Buggs' : 'Robert_Buggs@dekalbschoolsga.org',
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
    'Ingrid Gero' : 'Ingrid_Gero@dekalbschoolsga.org',
    'Edmond Gibbons' : 'Edmond_Gibbons@dekalbschoolsga.org',
    'Michael Giel' : 'Michael_Giel@dekalbschoolsga.org',
    'Amy Goertemiller' : 'Amy_Goertemiller@dekalbschoolsga.org',
    'Kelly Goodman' : 'Kelly_Goodman@dekalbschoolsga.org',
    'Emma Handziuk' : 'Emma_Handziuk@dekalbschoolsga.org',
    'Nathalie Hanlet' : 'Nathalie_Hanlet@dekalbschoolsga.org',
    'Briteney Harris' : 'Briteney_Harris@dekalbschoolsga.org',
    'Kedrick Harvey' : 'Harvey@dekalbschoolsga.org',
    'Eric Hollier' : 'Eric_Hollier@dekalbschoolsga.org',
    'Courtney Holt-Riley' : 'Courtney_Holt-Riley@dekalbschoolsga.org',
    'Jason Hunter' : 'Jason_Hunter@dekalbschoolsga.org',
    'Samuel Hutcherson' : 'Samuel_Hutcherson@dekalbschoolsga.org',
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
    'Paul Markley' : 'Paul_Markley@dekalbschoolsga.org',
    'Kyle Mastin' : 'Kyle_Mastin@dekalbschoolsga.org',
    'Howard Mccain' : 'Howard_Mccain@dekalbschoolsga.org',
    'Summer Mcdonald' : 'Summer_Mcdonald@dekalbschoolsga.org',
    'Beverly Mcguire' : 'Beverly_Mcguire@dekalbschoolsga.org',
    'Ronny Mcmann' : 'Ronny_Mcmann@dekalbschoolsga.org',
    'Luke McSorley' : 'Luke_McSorley@dekalbschoolsga.org',
    'Kristin Mendheim' : 'Kristin_Mendheim@dekalbschoolsga.org',
    'Raul Mexicano' : 'Raul_Mexicano@dekalbschoolsga.org',
    'Billy Mosely' : 'B_Mosely@dekalbschoolsga.org',
    'Mike Nash' : 'John_Nash@dekalbschoolsga.org',
    'Jamie Noble' : 'Jamie_Noble@dekalbschoolsga.org',
    "Michelle O'Connor" : "Michelle_O'Connor@dekalbschoolsga.org",
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
    'Claire Zimmerman' : 'Claire_S_Zimmerman@dekalbschoolsga.org',
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
      subject: "Student in club meeting", // The line on the left is the email subject
      htmlBody: message
    });

    Range.setValues(data);

  }
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

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/96410df8-4809-4b4a-8a91-f84ed8ae4dcb)


Then replace all the code there with the code below:

```html
Good Morning, <br>
I have <?=changes.name?> for our Club Meeting during ROAR today. Please excuse
him/her for the meeting! <br><br>
Sincerely,<br>
Teacher Name
```

You can edit the content of the email above. `<br>` specifies a line break (enter by itself does not create a new line. You have to use `<br>`). `<?=changes.name?>` just gets the student name. So type that wherever you want the student name to come up in the email.
After you are satisfied with it, click Ctrl+S on your keyboard again to save your work.

Now we are almost done! We have done all the hard work. Now we just need the code to run every time someone submits the google form! To do that, on the very left of the screen, click on the symbol that looks like a stopwatch. If you hover over it, it should say "Triggers".

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/13438b85-2d00-4b42-b307-b2cb41ba52f3)

On the bottom right of the screen, click "Add Trigger". Then don't change any of the setting except where it says "Select event type". For that, select "On form submit".

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/e4a5ba66-b902-4767-ac6a-61b74c4f3d01)

When you click on ok, it will show a popup where you will have to select your google account:

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/3d1c2f84-37d5-415a-a974-5dc3924723b0)

When you select your google account, it will show the following message. This is normal and is completely safe because you made this yourself and is not an official app:

![image](https://github.com/heightcalculator/Teacher-Email-Send/assets/91100197/45c0f5eb-380b-4580-a3f9-62f629fa8e72)

Scroll down on this message and click "Advanced" (Do NOT click "Back to Safety") and then click "Go to Untitled project (unsafe)" and then scroll down and click "Allow".

And this is it! You are now done! Fill out the google form and try it out to make sure it works! Now whenever you host a Roar meeting, the student can just fill out the google form (You can use the same google form for attendance) and an email will automatically be sent to their Roar teacher!
