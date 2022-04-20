function showAnswer(element) {
    element.classList.toggle("button1");
    element.parentElement.querySelector("p.answer-p").classList.toggle("answer");
  }

function addHomediv(currMenue){
    removeContents();
    changeFooterButtonColor(currMenue);
  document.querySelector("main").innerHTML=`

        <section>
            <article>
                <img id="test" src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" onclick="imgsrcToggle(this)"/>
                <p>1- For which OS can Javascript be used?</p>
                <button id="1" class="button" onclick="showAnswer(this)"></button>
                <p id="p1" class="answer-p"></p>
                <ul>
                    <li><a href="5"></a><button class="answer-buttons">Windows</button></li>
                    <li><button class="answer-buttons">Android</button></li>
                    <li><button class="answer-buttons">Web</button></li>
                    <li><button class="answer-buttons">All</button></li>
                </ul>
            </article>
            <article>
                <img src="assets/bookmarked.png" alt="bookmark_Blank" class="bookmark" onclick="imgsrcToggle(this)"/>
                <p>2- For which OS can Javascript be used?</p>
                <button id="2" class="button" onclick="showAnswer(this)"></button>
                <p id="p2" class="answer-p"></p>
                <ul>
                    <li><button class="answer-buttons">Windows</button></li>
                    <li><button class="answer-buttons">Android</button></li>
                    <li><button class="answer-buttons">Web</button></li>
                    <li><button class="answer-buttons">All</button></li>
                </ul>
            </article>
            <article>
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" onclick="imgsrcToggle(this)"/>
                <p>3- For which OS can Javascript be used?</p>
                <button id="3" class="button" onclick="showAnswer(this)"></button>
                <p id="p3" class="answer-p"></p>
                <ul>
                    <li><button class="answer-buttons">Windows</button></li>
                    <li><button class="answer-buttons">Android</button></li>
                    <li><button class="answer-buttons">Web</button></li>
                    <li><button class="answer-buttons">All</button></li>
                </ul>
            </article>
            <article>
                <img src="assets/bookmarked.png" alt="bookmarked" class="bookmark" onclick="imgsrcToggle(this)"/>
                <p>4- For which OS can Javascript be used?</p>
                <button id="4" class="button" onclick="showAnswer(this)"></button>
                <p id="p4" class="answer-p"></p>
                <ul>
                    <li><button class="answer-buttons">Windows</button></li>
                    <li><button class="answer-buttons">Android</button></li>
                    <li><button class="answer-buttons">Web</button></li>
                    <li><button class="answer-buttons">All</button></li>
                </ul>
            </article>
            <article>
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" onclick="imgsrcToggle(this)"/>
                <p>5- For which OS can Javascript be used?</p>
                <button id="5" class="button" onclick="showAnswer(this)"></button>
                <p id="p5" class="answer-p"></p>
                <ul>
                    <li><button class="answer-buttons">Windows</button></li>
                    <li><button class="answer-buttons">Android</button></li>
                    <li><button class="answer-buttons">Web</button></li>
                    <li><button class="answer-buttons">All</button></li>
                </ul>
            </article>
            <article>
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" onclick="imgsrcToggle(this)"/>
                <p>6- For which OS can Javascript be used?</p>
                <button id="6" class="button" onclick="showAnswer(this)"></button>
                <p id="p6" class="answer-p"></p>
                <ul>
                    <li><button class="answer-buttons">Windows</button></li>
                    <li><button class="answer-buttons">Android</button></li>
                    <li><button class="answer-buttons">Web</button></li>
                    <li><button class="answer-buttons">All</button></li>
                </ul>
            </article>
        </section>
  `;

}

function removeContents(){
    document.querySelector("main").innerHTML="";
}

function addBookmarks(currMenue){
  removeContents();
  changeFooterButtonColor(currMenue);
  document.querySelector("main").innerHTML=`  
  <section>
  <article>
    <img src="assets/bookmarked.png" alt="bookmark_Blank" class="bookmark" onclick="imgsrcToggle(this)">
    <p>2- For which OS can Javascript be used?</p>
    <button class="button" onclick="showAnswer(this)"></button>
    <p class="answer-p"></p>
    <ul>
      <li><button class="answer-buttons">Windows</button></li>
      <li><button class="answer-buttons">Android</button></li>
      <li><button class="answer-buttons">Web</button></li>
      <li><button class="answer-buttons">All</button></li>
    </ul>
  </article>
  <article>
    <img src="assets/bookmarked.png" alt="bookmarked" class="bookmark" onclick="imgsrcToggle(this)">
    <p>4- For which OS can Javascript be used?</p>
    <button class="button" onclick="showAnswer(this)"></button>
    <p class="answer-p"></p>
    <ul>
      <li><button class="answer-buttons">Windows</button></li>
      <li><button class="answer-buttons">Android</button></li>
      <li><button class="answer-buttons">Web</button></li>
      <li><button class="answer-buttons">All</button></li>
    </ul>
  </article>
</section>
  `
}

function addQuestiondiv(currMenue){
  removeContents();
  changeFooterButtonColor(currMenue);
  document.querySelector("main").innerHTML=`
  <section>
  <form action="">
  <p>"Write your Question here:"</p>
  <textarea id="txt1" name="" cols="30" rows="5" onkeyup="countLength(this)"></textarea>
  <p class="txt1">0</p>

  <p>"Write correct Answer here:"</p>
  <textarea id="txt2" name="" cols="30" rows="5" onkeyup="countLength(this)"></textarea>
  <p class="txt2">0</p>

  <p>"Add tags here (press enter after every tag entry):"</p>
  <textarea id="txt3" name="" cols="30" rows="5" onkeyup="countLength(this)"></textarea>
  <p class="txt3">0</p>
  <button id="" class="button" onclick="">Submit</button>
  </form> 
  </section>
  `
}
function addDatenschutz(currMenue){
  removeContents();
  changeFooterButtonColor(currMenue);
  document.querySelector("main").innerHTML=`
  Inhaltsverzeichnis
    Datenschutzerklärung.............................................................................................................................................................................................
    2 Datenschutzerklärung als
    HTML-Quellcode..............................................................................................................................................
    11
    1 / 11

    Ihre Datenschutzerklärung
    Im Folgenden finden Sie die Textdaten für Ihre persönliche Datenschutzerklärung für Ihre Website gemäß der von Ihnen
    getätigten Angaben. Sofern Sie in Ihrer Website einen Eingabe-Editor für Ihre Inhalte nutzen, können Sie den
    folgenden Text direkt herauskopieren und dort einfügen.
    Sofern Sie die Inhalte alternativ als HTML-Quellcode in Ihrem Website integrieren möchten, können Sie den
    anschließend aufgeführten HTML-Quellcode nutzen.
    Achtung: Einwilligung erforderlich
    Zahlreiche Dienste dürfen Sie nach herrschender Auffassung der Datenschutzbehörden und Gerichte nur mit Einwilligung
    einsetzen. Das betrifft v. a. Analyse- und Marketing-Tools (z. B. Google Analytics oder Facebook Pixel). Eine
    Einwilligungspflicht besteht vor allem für die folgenden von Ihnen ausgewählten Tools:
    Google Maps, Google Web Fonts
    Achtung: Einwilligung empfohlen
    Bei bestimmten Diensten ist nicht abschließend geklärt, ob sie eine Einwilligung benötigen. Angesichts der
    derzeitigen rechtlichen Entwicklung ist es aber wahrscheinlich, dass die Datenschutzbehörden und Gerichte auch für
    diese Tools eine Einwilligungspflicht bejahen werden. Wenn Sie das rechtliche Risiko einer Abmahnung oder eines
    behördlichen Verfahrens / Bußgelds vermeiden möchten, empfehlen wir Ihnen auch für folgende Dienste eine
    Einwilligung einzuholen:
    Google reCAPTCHA
    Eine Übersicht der von uns empfohlenen Consent Tools finden Sie hier:
    https://www.e-recht24.de/mitglieder/lp-cookieeinwilligung/.
    Für das Teilen von Inhalten auf Social-Media-Plattformen bietet eRecht24 außerdem das eRecht24 Safe Sharing Tool an:
    https://www.e-recht24.de/erecht24-safe-sharing.html.
    Achtung: Datentransfer in datenschutzrechtlich unsichere Drittstaaten
    Laut Ihren Eingaben verwenden nutzen Sie Dienste von Unternehmen, die aus datenschutzrechtlich nicht sichereren
    Drittstaaten stammen oder auf Server aus nicht sichereren Drittstaaten zurückgreifen. Als nicht sichere Drittstaaten
    gelten alle Staaten außer der nachfolgend aufgelisteten: Andorra, Argentinien, Faröer- Inseln, Großbritannien,
    Guernesey, Israel, Isle of Man, Japan, Jersey, Kanada (eingeschränkt), Neuseeland, Schweiz, Uruguay, Liechtenstein,
    Island, Norwegen.
    Wichtig: Auch die USA gelten als datenschutzrechtlich nicht sicherer Drittstaat.
    Die Datenübertragung in nicht sicherere Drittstaaten ist nur zulässig, wenn geeignete Garantien für die korrekte
    Datenverarbeitung im Zielland vorhanden sind. Als geeignete Garantien kommen vor allem EU- Standardvertragsklauseln
    (teilweise auch „Model Clauses“, „Standard Contractual Clauses“ oder „SCCs“ genannt) in Betracht - die
    Standardvertragsklauseln müssen zwischen Ihnen und dem Anbieter des Tools
    2 / 11

    vereinbart werden. Auch verbindliche Unternehmensregeln (auch Binding Corporate Rules oder BCRs) können eine
    geeignete Garantie für den Drittstaatentransfer darstellen, wenn diese Regeln von einer EU- Datenschutzbehörde
    genehmigt wurden.
    Folgende der von Ihnen ausgewählten Dienstleister übertragen Daten in die USA oder sonstige nicht sichere
    Drittstaaten:
    Google Maps, Google Web Fonts, Google reCAPTCHA
    Bei allen Anbietern, die Standardvertragsklauseln anbieten oder über Binding Corporate Rules verfügen, verweisen wir
    in unseren Datenschutztexten darauf. Stellen Sie daher sicher, dass die Standardvertragsklauseln zwischen Ihnen und
    dem Anbieter wirklich vereinbart wurden bzw. dass die Binding Corporate Rules für das von Ihnen verwendete Tool
    gelten. Ist dies nicht der Fall müssen Sie den jeweiligen Verweis auf die Standardvertragsklauseln / die Binding
    Corporate Rules aus der mit unserem Tool erstellten Datenschutzerklärung entfernen. In diesem Fall ist der Einsatz
    des Tools aber höchstwahrscheinlich DSGVO-widrig.
    Textversion der Datenschutzerklärung für Ihre Website
    Datenschutzerklärung
    1. Datenschutz auf einen Blick Allgemeine Hinweise
    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn
    Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
    können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
    Datenschutzerklärung.
    Datenerfassung auf dieser Website
    Wer ist verantwortlich für die Datenerfassung auf dieser Website?
    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
    Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
    Wie erfassen wir Ihre Daten?
    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
    handeln, die Sie in ein Kontaktformular eingeben.
    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT- Systeme
    erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
    Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
    Wofür nutzen wir Ihre Daten?
    3 / 11

    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
    können zur Analyse Ihres Nutzerverhaltens verwendet werden.
    Welche Rechte haben Sie bezüglich Ihrer Daten?
    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
    personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
    verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
    für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
    Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
    zuständigen Aufsichtsbehörde zu.
    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
    2. Allgemeine Hinweise und Pflichtinformationen Datenschutz
    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
    Datenschutzerklärung.
    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
    Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche
    Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
    Hinweis zur verantwortlichen Stelle
    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
    Mohammad Habibi O'Swaldstr. 31 22111 Hamburg
    Telefon: +4915739497649
    E-Mail: nimahabibi85@outlook.com
    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
    Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
    Speicherdauer
    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
    personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
    Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
    sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
    steuer- oder handelsrechtliche Aufbewahrungsfristen); im
    4 / 11

    letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
    Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
    von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
    DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in
    Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
    Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting)
    eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung
    ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
    erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir
    Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6
    Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6
    Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
    Absätzen dieser Datenschutzerklärung informiert.
    Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
    Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht
    sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten
    übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares
    Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene
    Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es
    kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen
    Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
    Verarbeitungstätigkeiten keinen Einfluss.
    Widerruf Ihrer Einwilligung zur Datenverarbeitung
    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
    erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
    bleibt vom Widerruf unberührt.
    Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
    RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
    DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
    RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH
    EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN
    ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
    ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
    (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
    WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
    5 / 11

    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
    SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
    Beschwerderecht bei der zuständigen Aufsichtsbehörde
    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
    insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
    mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
    gerichtlicher Rechtsbehelfe.
    Recht auf Datenübertragbarkeit
    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
    verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern
    Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
    technisch machbar ist.
    SSL- bzw. TLS-Verschlüsselung
    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
    Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS- Verschlüsselung. Eine
    verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
    wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von
    Dritten mitgelesen werden.
    Auskunft, Löschung und Berichtigung
    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
    Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
    ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
    personenbezogene Daten können Sie sich jederzeit an uns wenden.
    Recht auf Einschränkung der Verarbeitung
    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können
    Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel
    Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
    personenbezogenen Daten zu verlangen.
    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung
    die Einschränkung der Datenverarbeitung verlangen.
    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
    Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
    Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
    Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
    6 / 11

    zu verlangen.
    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer
    Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
    Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
    eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
    Widerspruch gegen Werbe-E-Mails
    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich
    angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich
    ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
    Spam-E-Mails, vor.
    3. Datenerfassung auf dieser Website Cookies
    Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem
    Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder
    dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
    automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder
    eine automatische Löschung durch Ihren Webbrowser erfolgt.
    Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite
    betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des
    Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
    Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen
    ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies
    dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
    Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
    erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung
    des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
    gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse
    an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
    Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
    wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und §
    25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im
    Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
    Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
    Funktionalität dieser Website eingeschränkt sein.
    Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen
    dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
    Server-Log-Dateien
    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
    7 / 11

    Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
    Browsertyp und Browserversion verwendetes Betriebssystem Referrer URL
    Hostname des zugreifenden Rechners Uhrzeit der Serveranfrage IP-Adresse
    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
    berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen
    die Server-Log-Files erfasst werden.
    Kontaktformular
    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
    von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
    gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
    Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
    übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
    gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
    diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
    Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
    Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
    unberührt.
    4. Plugins und Tools Google Web Fonts
    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google
    bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um
    Texte und Schriftarten korrekt anzuzeigen.
    Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch
    erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google
    WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
    an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung
    abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs.
    1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des
    Nutzers (z. B. Device- Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
    Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere
    Informationen zu Google Web Fonts finden Sie unter
    8 / 11

    https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google:
    https://policies.google.com/privacy?hl=de.
    Google Maps
    Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House,
    Barrow Street, Dublin 4, Irland.
    Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
    werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite
    hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
    einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser
    die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
    Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online- Angebote und an
    einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse
    im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
    Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
    Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
    Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
    Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie
    hier:
    https://privacy.google.com/businesses/gdprcontrollerterms/ und
    https://privacy.google.com/businesses/gdprcontrollerterms/sccs/.
    Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:
    https://policies.google.com/privacy?hl=de.
    Google reCAPTCHA
    Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser Website. Anbieter ist die Google Ireland Limited
    („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
    Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch
    einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des
    Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die
    Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des
    Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten
    werden an Google weitergeleitet.
    Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine
    Analyse stattfindet.
    Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
    ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu
    schützen. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
    Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
    oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
    Die Einwilligung ist jederzeit widerrufbar.
    9 / 11

    Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google
    Nutzungsbedingungen unter folgenden Links:
    https://policies.google.com/privacy?hl=de und
    https://policies.google.com/terms?hl=de.
    Quelle:
    https://www.e-recht24.de
    10 / 11

    HTML-Quellcode der Datenschutzerklärung für Ihre Website
    Den nachfolgenden Quellcode können Sie kopieren, um die Datenschutzerklärung auf Ihrer Website einzufügen.
    Hinweis: Einige Browser und PDF-Reader haben Probleme bei der vollständigen Darstellung des nachfolgenden
    HTML-Quellcodes. Wir empfehlen Ihnen für die Anzeige dieses PDF-Dokuments die Nutzung des kostenlosen Adobe Acrobat
    Reader DC (Download).
    Powered by TCPDF (www.tcpdf.org)
    11 / 11
  
  `
}

  function countLength(element) {
    document.querySelector('.'+element.id).innerHTML=element.value.length;
  };

  function findRec(){
    document.getElementById("5").scrollIntoView();
  }

  
  function imgsrcToggle(imgElement){
    
    if(imgElement.src.includes('bookmarked.png'))
    {
      imgElement.src="assets/bookmark_Blank.png"
    }
    else{
      imgElement.src="assets/bookmarked.png"
    }
  }

  function changeFooterButtonColor(currMenueBG){
    const footerbtns= currMenueBG.parentElement.querySelectorAll('.footerBtns');
    footerbtns.forEach(footerbtn => footerbtn.style.backgroundColor="White");
    currMenueBG.style.backgroundColor='gold';
  }