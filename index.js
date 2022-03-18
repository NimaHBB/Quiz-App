function showAnswer(element) {
    element.classList.toggle("button1");
  
    document.getElementById("p" + element.id).classList.toggle("answer");
  }

function addHomediv(){
    removeContents();
  document.querySelector("main").innerHTML=`

        <section>
            <article>
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" />
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
                <img src="assets/bookmarked.png" alt="bookmark_Blank" class="bookmark" />
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
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" />
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
                <img src="assets/bookmarked.png" alt="bookmarked" class="bookmark" />
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
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" />
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
                <img src="assets/bookmark_Blank.png" alt="bookmark_Blank" class="bookmark" />
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

  document.getElementById('main').appendChild();

}

function removeContents(){
    document.querySelector("main").innerHTML="";
}

function addBookmarks(){
  removeContents();
  document.querySelector("main").innerHTML=`  
  <section>
  <article>
    <img src="assets/bookmarked.png" alt="bookmark_Blank" class="bookmark">
    <p>2- For which OS can Javascript be used?</p>
    <button id="2" class="button" onclick="showAnswer(this)"></button>
    <p id="p2" class="answer-p1"></p>
    <ul>
      <li><button class="answer-buttons">Windows</button></li>
      <li><button class="answer-buttons">Android</button></li>
      <li><button class="answer-buttons">Web</button></li>
      <li><button class="answer-buttons">All</button></li>
    </ul>
  </article>
  <article>
    <img src="assets/bookmarked.png" alt="bookmarked" class="bookmark">
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
</section>
  `
  document.getElementById('main').appendChild();
}

function addQuestiondiv(){

  removeContents();
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
  document.getElementById('main').appendChild();
}
  function countLength(element) {
    document.querySelector('.'+element.id).innerHTML=element.value.length;
  };