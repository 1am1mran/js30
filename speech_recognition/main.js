  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    //   const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    //   p.textContent = poopScript; 
    //   const lolScript = transcript.replace(/lol|LOL|Lol/gi, '😂');
    //   p.textContent = lolScript;
    //   const yoScript = transcript.replace(/yo|awesome|cool/gi, '😎');
    //   p.textContent = yoScript; 
    //   const beautyScript = transcript.replace(/love|beauty/gi, '😍');
    //   p.textContent = beautyScript;
    //   const sleepScript = transcript.replace(/sleep|sleeping/gi, '😴');
    //   p.textContent = sleepScript; 
    //   const kissScript = transcript.replace(/kiss|flying kiss/gi, '😘');
    //   p.textContent = kissScript;
    //   const thinkScript = transcript.replace(/thinking|what is/gi, '🤔');
    //   p.textContent = thinkScript; 
    //   const cryScript = transcript.replace(/cry/gi, '😭');
    //   p.textContent = cryScript;
    //   const angryScript = transcript.replace(/angry|anger/gi, '😠');
    //   p.textContent = angryScript; 
    //   const confuseSmileScript = transcript.replace(/confused smile|grin/gi, '😅');
    //   p.textContent = confuseSmileScript;
      const wowScript = transcript.replace(/wow/gi, '😯');
      p.textContent = wowScript;
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });
  recognition.addEventListener('end', recognition.start);
  recognition.start();