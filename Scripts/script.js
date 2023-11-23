    const pads = document.querySelectorAll(".pad");
    console.log(pads);

    const audioMap = {};
    for (let i = 0; i < pads.length; i++) {
        const audioPath = pads[i].getAttribute(`data-audio`);
        const audio = new Audio(audioPath);
        audioMap[pads[i].innerHTML.toLowerCase()] = audio;

        pads[i].addEventListener("click", function() {
            if(audio){
                playAudio(audio)
            }
            console.log("cago en tus muertos", +pads[i].innerHTML);
            const key = pads[i].innerHTML.toLowerCase();
            // document.querySelector("#key").value = key;
            pads[i].style.background = "rgb(180, 180, 180)";
            setTimeout(function () {
                pads[i].style.background = `url(https://cdn.wallpapersafari.com/57/90/2bNPFB.gif) 50%`;
                pads[i].style.backgroundSize = "cover";
                pads[i].style.boxShadow = "0px 0px 0px black";
            }, 100);
        });
    }
    document.addEventListener("keydown", function(evento){
        const key = evento.key.toLowerCase
     document.querySelector("#key").value = key;
     const audio = audioMap[key];
     if(audio){
        playAudio(audio)
        const pad = Array.from(pads).find(pad => pad.innerHTML.toLowerCase() === key)
    }
    })
  
    let sample_aux
    function sendSample(){
        var key = document.querySelector("#key").value
        audioMap[key] = new Audio(sample)
    }


    document.querySelector("#sample_file").addEventListener("change", function(event){
        sample = URL.createObjectURL(evento.target.files[0])
        sample_aux = new Audio(sample);
        sendSample()
    })

    function playAudio(audio) {
        audio.pause();
        audio.current = 0;
        audio.play();
    }