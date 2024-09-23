function getSettings() {
    var apiUrl = document.getElementById("apiUrl").value;
    var idInstance = document.getElementById("idinstance").value;
    var apiTokenInstance = document.getElementById("apitokeninstance").value;
    if (apiUrl == "" || idInstance == "" || apiTokenInstance == "") {
        alert("ERROR");
        return;
    }

    var reqUrl = apiUrl + "/waInstance" + idInstance + "/getSettings/" + apiTokenInstance;
    

    var req = new XMLHttpRequest();
    req.open("GET", reqUrl, false);
    req.send(null);
    console.log(req.status, req.statusText);

    document.getElementById("responce").value = req.response;
};

function getStateInstance() {
    var apiUrl = document.getElementById("apiUrl").value;
    var idInstance = document.getElementById("idinstance").value;
    var apiTokenInstance = document.getElementById("apitokeninstance").value;
    if (apiUrl == "" || idInstance == "" || apiTokenInstance == "") {
        alert("ERROR");
        return;
    }

    var reqUrl = apiUrl + "/waInstance" + idInstance + "/getStateInstance/" + apiTokenInstance;

    var req = new XMLHttpRequest();
    req.open("GET", reqUrl, false);
    req.send(null);
    console.log(req.status, req.statusText);

    document.getElementById("responce").value = req.response;
};

function sendMessage() {
    var apiUrl = document.getElementById("apiUrl").value;
    var idInstance = document.getElementById("idinstance").value;
    var apiTokenInstance = document.getElementById("apitokeninstance").value;
    var chatId = document.getElementById("chatId1").value;
    var message = document.getElementById("message").value;
    if (apiUrl == "" || idInstance == "" || apiTokenInstance == "" || chatId == "" || message == "") {
        alert("ERROR");
        return;
    }

    var reqUrl = apiUrl + "/waInstance" + idInstance + "/sendMessage/" + apiTokenInstance;

    var data = { "chatId": chatId + "@c.us", "message": message };

    let req = new XMLHttpRequest();
    req.open("POST", test, false);
    req.send(JSON.stringify(data));

    document.getElementById("responce").value = req.response;
};

function sendFileByUrl() {
    var apiUrl = document.getElementById("apiUrl").value;
    var idInstance = document.getElementById("idinstance").value;
    var apiTokenInstance = document.getElementById("apitokeninstance").value;
    var chatId = document.getElementById("chatId2").value;
    var urlFile = document.getElementById("urlFile").value;
    var filename = urlFile.split('/').pop();
    if (apiUrl == "" || idInstance == "" || apiTokenInstance == "" || chatId == "" || urlFile == "") {
        alert("ERROR");
        return;
    }

    var reqUrl = apiUrl + "/waInstance" + idInstance + "/sendFileByUrl/" + apiTokenInstance;

    var data = { "chatId": chatId + "@c.us", "urlFile": urlFile, "fileName": filename };

    let req = new XMLHttpRequest();
    req.open("POST", reqUrl, false);
    req.send(JSON.stringify(data));

    document.getElementById("responce").value = req.response;
};