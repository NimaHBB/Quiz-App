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
    Datenschutzerkl??rung.............................................................................................................................................................................................
    2 Datenschutzerkl??rung als
    HTML-Quellcode..............................................................................................................................................
    11
    1 / 11

    Ihre Datenschutzerkl??rung
    Im Folgenden finden Sie die Textdaten f??r Ihre pers??nliche Datenschutzerkl??rung f??r Ihre Website gem???? der von Ihnen
    get??tigten Angaben. Sofern Sie in Ihrer Website einen Eingabe-Editor f??r Ihre Inhalte nutzen, k??nnen Sie den
    folgenden Text direkt herauskopieren und dort einf??gen.
    Sofern Sie die Inhalte alternativ als HTML-Quellcode in Ihrem Website integrieren m??chten, k??nnen Sie den
    anschlie??end aufgef??hrten HTML-Quellcode nutzen.
    Achtung: Einwilligung erforderlich
    Zahlreiche Dienste d??rfen Sie nach herrschender Auffassung der Datenschutzbeh??rden und Gerichte nur mit Einwilligung
    einsetzen. Das betrifft v. a. Analyse- und Marketing-Tools (z. B. Google Analytics oder Facebook Pixel). Eine
    Einwilligungspflicht besteht vor allem f??r die folgenden von Ihnen ausgew??hlten Tools:
    Google Maps, Google Web Fonts
    Achtung: Einwilligung empfohlen
    Bei bestimmten Diensten ist nicht abschlie??end gekl??rt, ob sie eine Einwilligung ben??tigen. Angesichts der
    derzeitigen rechtlichen Entwicklung ist es aber wahrscheinlich, dass die Datenschutzbeh??rden und Gerichte auch f??r
    diese Tools eine Einwilligungspflicht bejahen werden. Wenn Sie das rechtliche Risiko einer Abmahnung oder eines
    beh??rdlichen Verfahrens / Bu??gelds vermeiden m??chten, empfehlen wir Ihnen auch f??r folgende Dienste eine
    Einwilligung einzuholen:
    Google reCAPTCHA
    Eine ??bersicht der von uns empfohlenen Consent Tools finden Sie hier:
    https://www.e-recht24.de/mitglieder/lp-cookieeinwilligung/.
    F??r das Teilen von Inhalten auf Social-Media-Plattformen bietet eRecht24 au??erdem das eRecht24 Safe Sharing Tool an:
    https://www.e-recht24.de/erecht24-safe-sharing.html.
    Achtung: Datentransfer in datenschutzrechtlich unsichere Drittstaaten
    Laut Ihren Eingaben verwenden nutzen Sie Dienste von Unternehmen, die aus datenschutzrechtlich nicht sichereren
    Drittstaaten stammen oder auf Server aus nicht sichereren Drittstaaten zur??ckgreifen. Als nicht sichere Drittstaaten
    gelten alle Staaten au??er der nachfolgend aufgelisteten: Andorra, Argentinien, Far??er- Inseln, Gro??britannien,
    Guernesey, Israel, Isle of Man, Japan, Jersey, Kanada (eingeschr??nkt), Neuseeland, Schweiz, Uruguay, Liechtenstein,
    Island, Norwegen.
    Wichtig: Auch die USA gelten als datenschutzrechtlich nicht sicherer Drittstaat.
    Die Daten??bertragung in nicht sicherere Drittstaaten ist nur zul??ssig, wenn geeignete Garantien f??r die korrekte
    Datenverarbeitung im Zielland vorhanden sind. Als geeignete Garantien kommen vor allem EU- Standardvertragsklauseln
    (teilweise auch ???Model Clauses???, ???Standard Contractual Clauses??? oder ???SCCs??? genannt) in Betracht - die
    Standardvertragsklauseln m??ssen zwischen Ihnen und dem Anbieter des Tools
    2 / 11

    vereinbart werden. Auch verbindliche Unternehmensregeln (auch Binding Corporate Rules oder BCRs) k??nnen eine
    geeignete Garantie f??r den Drittstaatentransfer darstellen, wenn diese Regeln von einer EU- Datenschutzbeh??rde
    genehmigt wurden.
    Folgende der von Ihnen ausgew??hlten Dienstleister ??bertragen Daten in die USA oder sonstige nicht sichere
    Drittstaaten:
    Google Maps, Google Web Fonts, Google reCAPTCHA
    Bei allen Anbietern, die Standardvertragsklauseln anbieten oder ??ber Binding Corporate Rules verf??gen, verweisen wir
    in unseren Datenschutztexten darauf. Stellen Sie daher sicher, dass die Standardvertragsklauseln zwischen Ihnen und
    dem Anbieter wirklich vereinbart wurden bzw. dass die Binding Corporate Rules f??r das von Ihnen verwendete Tool
    gelten. Ist dies nicht der Fall m??ssen Sie den jeweiligen Verweis auf die Standardvertragsklauseln / die Binding
    Corporate Rules aus der mit unserem Tool erstellten Datenschutzerkl??rung entfernen. In diesem Fall ist der Einsatz
    des Tools aber h??chstwahrscheinlich DSGVO-widrig.
    Textversion der Datenschutzerkl??rung f??r Ihre Website
    Datenschutzerkl??rung
    1. Datenschutz auf einen Blick Allgemeine Hinweise
    Die folgenden Hinweise geben einen einfachen ??berblick dar??ber, was mit Ihren personenbezogenen Daten passiert, wenn
    Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers??nlich identifiziert werden
    k??nnen. Ausf??hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef??hrten
    Datenschutzerkl??rung.
    Datenerfassung auf dieser Website
    Wer ist verantwortlich f??r die Datenerfassung auf dieser Website?
    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k??nnen Sie dem
    Abschnitt ???Hinweis zur Verantwortlichen Stelle??? in dieser Datenschutzerkl??rung entnehmen.
    Wie erfassen wir Ihre Daten?
    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
    handeln, die Sie in ein Kontaktformular eingeben.
    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT- Systeme
    erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
    Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
    Wof??r nutzen wir Ihre Daten?
    3 / 11

    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew??hrleisten. Andere Daten
    k??nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
    Welche Rechte haben Sie bez??glich Ihrer Daten?
    Sie haben jederzeit das Recht, unentgeltlich Auskunft ??ber Herkunft, Empf??nger und Zweck Ihrer gespeicherten
    personenbezogenen Daten zu erhalten. Sie haben au??erdem ein Recht, die Berichtigung oder L??schung dieser Daten zu
    verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k??nnen Sie diese Einwilligung jederzeit
    f??r die Zukunft widerrufen. Au??erdem haben Sie das Recht, unter bestimmten Umst??nden die Einschr??nkung der
    Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
    zust??ndigen Aufsichtsbeh??rde zu.
    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k??nnen Sie sich jederzeit an uns wenden.
    2. Allgemeine Hinweise und Pflichtinformationen Datenschutz
    Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers??nlichen Daten sehr ernst. Wir behandeln Ihre
    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
    Datenschutzerkl??rung.
    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
    Daten, mit denen Sie pers??nlich identifiziert werden k??nnen. Die vorliegende Datenschutzerkl??rung erl??utert, welche
    Daten wir erheben und wof??r wir sie nutzen. Sie erl??utert auch, wie und zu welchem Zweck das geschieht.
    Wir weisen darauf hin, dass die Daten??bertragung im Internet (z. B. bei der Kommunikation per E-Mail)
    Sicherheitsl??cken aufweisen kann. Ein l??ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m??glich.
    Hinweis zur verantwortlichen Stelle
    Die verantwortliche Stelle f??r die Datenverarbeitung auf dieser Website ist:
    Mohammad Habibi O'Swaldstr. 31 22111 Hamburg
    Telefon: +4915739497649
    E-Mail: nimahabibi85@outlook.com
    Verantwortliche Stelle ist die nat??rliche oder juristische Person, die allein oder gemeinsam mit anderen ??ber die
    Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. ??.) entscheidet.
    Speicherdauer
    Soweit innerhalb dieser Datenschutzerkl??rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
    personenbezogenen Daten bei uns, bis der Zweck f??r die Datenverarbeitung entf??llt. Wenn Sie ein berechtigtes
    L??schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel??scht,
    sofern wir keine anderen rechtlich zul??ssigen Gr??nde f??r die Speicherung Ihrer personenbezogenen Daten haben (z. B.
    steuer- oder handelsrechtliche Aufbewahrungsfristen); im
    4 / 11

    letztgenannten Fall erfolgt die L??schung nach Fortfall dieser Gr??nde.
    Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
    von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
    DSGVO verarbeitet werden. Im Falle einer ausdr??cklichen Einwilligung in die ??bertragung personenbezogener Daten in
    Drittstaaten erfolgt die Datenverarbeitung au??erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
    Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger??t (z. B. via Device-Fingerprinting)
    eingewilligt haben, erfolgt die Datenverarbeitung zus??tzlich auf Grundlage von ?? 25 Abs. 1 TTDSG. Die Einwilligung
    ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf??llung oder zur Durchf??hrung vorvertraglicher Ma??nahmen
    erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir
    Ihre Daten, sofern diese zur Erf??llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6
    Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6
    Abs. 1 lit. f DSGVO erfolgen. ??ber die jeweils im Einzelfall einschl??gigen Rechtsgrundlagen wird in den folgenden
    Abs??tzen dieser Datenschutzerkl??rung informiert.
    Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
    Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht
    sicheren Drittstaaten. Wenn diese Tools aktiv sind, k??nnen Ihre personenbezogene Daten in diese Drittstaaten
    ??bertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen L??ndern kein mit der EU vergleichbares
    Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene
    Daten an Sicherheitsbeh??rden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen k??nnten. Es
    kann daher nicht ausgeschlossen werden, dass US-Beh??rden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen
    Daten zu ??berwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
    Verarbeitungst??tigkeiten keinen Einfluss.
    Widerruf Ihrer Einwilligung zur Datenverarbeitung
    Viele Datenverarbeitungsvorg??nge sind nur mit Ihrer ausdr??cklichen Einwilligung m??glich. Sie k??nnen eine bereits
    erteilte Einwilligung jederzeit widerrufen. Die Rechtm????igkeit der bis zum Widerruf erfolgten Datenverarbeitung
    bleibt vom Widerruf unber??hrt.
    Widerspruchsrecht gegen die Datenerhebung in besonderen F??llen sowie gegen Direktwerbung (Art. 21 DSGVO)
    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
    RECHT, AUS GR??NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
    DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F??R EIN AUF DIESE BESTIMMUNGEN GEST??TZTES PROFILING. DIE JEWEILIGE
    RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL??RUNG. WENN SIE WIDERSPRUCH
    EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K??NNEN
    ZWINGENDE SCHUTZW??RDIGE GR??NDE F??R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
    ??BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS??BUNG ODER VERTEIDIGUNG VON RECHTSANSPR??CHEN
    (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
    WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
    5 / 11

    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F??R DAS PROFILING,
    SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
    Beschwerderecht bei der zust??ndigen Aufsichtsbeh??rde
    Im Falle von Verst????en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh??rde,
    insbesondere in dem Mitgliedstaat ihres gew??hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
    mutma??lichen Versto??es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
    gerichtlicher Rechtsbehelfe.
    Recht auf Daten??bertragbarkeit
    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf??llung eines Vertrags automatisiert
    verarbeiten, an sich oder an einen Dritten in einem g??ngigen, maschinenlesbaren Format aush??ndigen zu lassen. Sofern
    Sie die direkte ??bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
    technisch machbar ist.
    SSL- bzw. TLS-Verschl??sselung
    Diese Seite nutzt aus Sicherheitsgr??nden und zum Schutz der ??bertragung vertraulicher Inhalte, wie zum Beispiel
    Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS- Verschl??sselung. Eine
    verschl??sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von ???http://??? auf ???https://???
    wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
    Wenn die SSL- bzw. TLS-Verschl??sselung aktiviert ist, k??nnen die Daten, die Sie an uns ??bermitteln, nicht von
    Dritten mitgelesen werden.
    Auskunft, L??schung und Berichtigung
    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft ??ber
    Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf??nger und den Zweck der Datenverarbeitung und
    ggf. ein Recht auf Berichtigung oder L??schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
    personenbezogene Daten k??nnen Sie sich jederzeit an uns wenden.
    Recht auf Einschr??nkung der Verarbeitung
    Sie haben das Recht, die Einschr??nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k??nnen
    Sie sich jederzeit an uns wenden. Das Recht auf Einschr??nkung der Verarbeitung besteht in folgenden F??llen:
    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben??tigen wir in der Regel
    Zeit, um dies zu ??berpr??fen. F??r die Dauer der Pr??fung haben Sie das Recht, die Einschr??nkung der Verarbeitung Ihrer
    personenbezogenen Daten zu verlangen.
    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm????ig geschah/geschieht, k??nnen Sie statt der L??schung
    die Einschr??nkung der Datenverarbeitung verlangen.
    Wenn wir Ihre personenbezogenen Daten nicht mehr ben??tigen, Sie sie jedoch zur Aus??bung, Verteidigung oder
    Geltendmachung von Rechtsanspr??chen ben??tigen, haben Sie das Recht, statt der L??schung die Einschr??nkung der
    Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw??gung zwischen Ihren und unseren
    Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen ??berwiegen, haben Sie das Recht, die
    Einschr??nkung der Verarbeitung Ihrer personenbezogenen Daten
    6 / 11

    zu verlangen.
    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr??nkt haben, d??rfen diese Daten ??? von ihrer
    Speicherung abgesehen ??? nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus??bung oder Verteidigung von
    Rechtsanspr??chen oder zum Schutz der Rechte einer anderen nat??rlichen oder juristischen Person oder aus Gr??nden
    eines wichtigen ??ffentlichen Interesses der Europ??ischen Union oder eines Mitgliedstaats verarbeitet werden.
    Widerspruch gegen Werbe-E-Mails
    Der Nutzung von im Rahmen der Impressumspflicht ver??ffentlichten Kontaktdaten zur ??bersendung von nicht ausdr??cklich
    angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich
    ausdr??cklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
    Spam-E-Mails, vor.
    3. Datenerfassung auf dieser Website Cookies
    Unsere Internetseiten verwenden so genannte ???Cookies???. Cookies sind kleine Textdateien und richten auf Ihrem
    Endger??t keinen Schaden an. Sie werden entweder vor??bergehend f??r die Dauer einer Sitzung (Session-Cookies) oder
    dauerhaft (permanente Cookies) auf Ihrem Endger??t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
    automatisch gel??scht. Permanente Cookies bleiben auf Ihrem Endger??t gespeichert, bis Sie diese selbst l??schen oder
    eine automatische L??schung durch Ihren Webbrowser erfolgt.
    Teilweise k??nnen auch Cookies von Drittunternehmen auf Ihrem Endger??t gespeichert werden, wenn Sie unsere Seite
    betreten (Third-Party-Cookies). Diese erm??glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des
    Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
    Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen
    ohne diese nicht funktionieren w??rden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies
    dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
    Cookies, die zur Durchf??hrung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
    erw??nschter Funktionen (z. B. f??r die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung
    des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
    gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse
    an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
    Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
    wurde, erfolgt die Verarbeitung ausschlie??lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und ??
    25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
    Sie k??nnen Ihren Browser so einstellen, dass Sie ??ber das Setzen von Cookies informiert werden und Cookies nur im
    Einzelfall erlauben, die Annahme von Cookies f??r bestimmte F??lle oder generell ausschlie??en sowie das automatische
    L??schen der Cookies beim Schlie??en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
    Funktionalit??t dieser Website eingeschr??nkt sein.
    Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier??ber im Rahmen
    dieser Datenschutzerkl??rung gesondert informieren und ggf. eine Einwilligung abfragen.
    Server-Log-Dateien
    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
    7 / 11

    Dateien, die Ihr Browser automatisch an uns ??bermittelt. Dies sind:
    Browsertyp und Browserversion verwendetes Betriebssystem Referrer URL
    Hostname des zugreifenden Rechners Uhrzeit der Serveranfrage IP-Adresse
    Eine Zusammenf??hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
    berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website ??? hierzu m??ssen
    die Server-Log-Files erfasst werden.
    Kontaktformular
    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
    von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f??r den Fall von Anschlussfragen bei uns
    gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
    Erf??llung eines Vertrags zusammenh??ngt oder zur Durchf??hrung vorvertraglicher Ma??nahmen erforderlich ist. In allen
    ??brigen F??llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
    gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
    diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L??schung auffordern, Ihre
    Einwilligung zur Speicherung widerrufen oder der Zweck f??r die Datenspeicherung entf??llt (z. B. nach abgeschlossener
    Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen ??? insbesondere Aufbewahrungsfristen ??? bleiben
    unber??hrt.
    4. Plugins und Tools Google Web Fonts
    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google
    bereitgestellt werden. Beim Aufruf einer Seite l??dt Ihr Browser die ben??tigten Web Fonts in ihren Browsercache, um
    Texte und Schriftarten korrekt anzuzeigen.
    Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch
    erlangt Google Kenntnis dar??ber, dass ??ber Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google
    WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
    an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung
    abgefragt wurde, erfolgt die Verarbeitung ausschlie??lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und ?? 25 Abs.
    1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger??t des
    Nutzers (z. B. Device- Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
    Wenn Ihr Browser Web Fonts nicht unterst??tzt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere
    Informationen zu Google Web Fonts finden Sie unter
    8 / 11

    https://developers.google.com/fonts/faq und in der Datenschutzerkl??rung von Google:
    https://policies.google.com/privacy?hl=de.
    Google Maps
    Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited (???Google???), Gordon House,
    Barrow Street, Dublin 4, Irland.
    Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
    werden in der Regel an einen Server von Google in den USA ??bertragen und dort gespeichert. Der Anbieter dieser Seite
    hat keinen Einfluss auf diese Daten??bertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
    einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden. Beim Aufruf von Google Maps l??dt Ihr Browser
    die ben??tigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
    Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online- Angebote und an
    einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse
    im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
    Verarbeitung ausschlie??lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und ?? 25 Abs. 1 TTDSG, soweit die
    Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger??t des Nutzers (z. B.
    Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
    Die Daten??bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest??tzt. Details finden Sie
    hier:
    https://privacy.google.com/businesses/gdprcontrollerterms/ und
    https://privacy.google.com/businesses/gdprcontrollerterms/sccs/.
    Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerkl??rung von Google:
    https://policies.google.com/privacy?hl=de.
    Google reCAPTCHA
    Wir nutzen ???Google reCAPTCHA??? (im Folgenden ???reCAPTCHA???) auf dieser Website. Anbieter ist die Google Ireland Limited
    (???Google???), Gordon House, Barrow Street, Dublin 4, Irland.
    Mit reCAPTCHA soll ??berpr??ft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch
    einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des
    Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die
    Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des
    Websitebesuchers auf der Website oder vom Nutzer get??tigte Mausbewegungen). Die bei der Analyse erfassten Daten
    werden an Google weitergeleitet.
    Die reCAPTCHA-Analysen laufen vollst??ndig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine
    Analyse stattfindet.
    Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
    ein berechtigtes Interesse daran, seine Webangebote vor missbr??uchlicher automatisierter Aussp??hung und vor SPAM zu
    sch??tzen. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie??lich auf
    Grundlage von Art. 6 Abs. 1 lit. a DSGVO und ?? 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
    oder den Zugriff auf Informationen im Endger??t des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
    Die Einwilligung ist jederzeit widerrufbar.
    9 / 11

    Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google
    Nutzungsbedingungen unter folgenden Links:
    https://policies.google.com/privacy?hl=de und
    https://policies.google.com/terms?hl=de.
    Quelle:
    https://www.e-recht24.de
    10 / 11

    HTML-Quellcode der Datenschutzerkl??rung f??r Ihre Website
    Den nachfolgenden Quellcode k??nnen Sie kopieren, um die Datenschutzerkl??rung auf Ihrer Website einzuf??gen.
    Hinweis: Einige Browser und PDF-Reader haben Probleme bei der vollst??ndigen Darstellung des nachfolgenden
    HTML-Quellcodes. Wir empfehlen Ihnen f??r die Anzeige dieses PDF-Dokuments die Nutzung des kostenlosen Adobe Acrobat
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