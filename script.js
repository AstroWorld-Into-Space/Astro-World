
    const downloadBtn = document.querySelector(".download-btn");
    const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
    const initTimer = () => {
        if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
        }
        let timer = downloadBtn.dataset.timer;
        downloadBtn.classList.add("timer");
        downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        const initCounter = setInterval(() => {
        if(timer > 0) {
        timer--;
        return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
        downloadBtn.classList.replace("timer", "disable-timer");
        downloadBtn.innerHTML = `<span class="icon material-symbolsrounded">vertical_align_bottom</span>
        <span class="text">Download Again</span>`;
        }, 3000);
        }, 1000);
     }
    downloadBtn.addEventListener("click", initTimer);


    const downloadBtnn = document.querySelector(".download-btnn");
    const fileLinkk = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
    const initTimerr = () => {
        if(downloadBtnn.classList.contains("disable-timer")) {
        return location.href = fileLinkk;
        }
        let timer = downloadBtnn.dataset.timer;
        downloadBtnn.classList.add("timer");
        downloadBtnn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        const initCounter = setInterval(() => {
        if(timer > 0) {
        timer--;
        return downloadBtnn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLinkk;
        downloadBtnn.innerText = "Your file is downloading...";
        setTimeout(() => {
        downloadBtnn.classList.replace("timer", "disable-timer");
        downloadBtnn.innerHTML = `<span class="icon material-symbolsrounded">vertical_align_bottom</span>
        <span class="text">Download Again</span>`;
        }, 3000);
        }, 1000);
     }
    downloadBtnn.addEventListener("click", initTimerr);

    const downloadBtnnn = document.querySelector(".download-btnnn");
    const fileLinkkk = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
    const initTimerrr = () => {
        if(downloadBtnn.classList.contains("disable-timer")) {
        return location.href = fileLinkkk;
        }
        let timer = downloadBtnn.dataset.timer;
        downloadBtnnn.classList.add("timer");
        downloadBtnnn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        const initCounter = setInterval(() => {
        if(timer > 0) {
        timer--;
        return downloadBtnnn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLinkkk;
        downloadBtnnn.innerText = "Your file is downloading...";
        setTimeout(() => {
        downloadBtnnn.classList.replace("timer", "disable-timer");
        downloadBtnnn.innerHTML = `<span class="icon material-symbolsrounded">vertical_align_bottom</span>
        <span class="text">Download Again</span>`;
        }, 3000);
        }, 1000);
     }
     downloadBtnnn.addEventListener("click", initTimerrr); 
 