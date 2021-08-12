(function(window, document, undefined) {
    // TODO : Common CSS object
    // TODO : HTML in the Template Strings
    // TODO : Append to Body
    // TODO : Keep Positioning Configurable 
    
    var appId = document.currentScript.dataset.appid;
    var appName = document.currentScript.dataset.appname;
    var source = document.currentScript.dataset.source;
    var env = document.currentScript.dataset.env;
    var lang = document.currentScript.dataset.lang;
    var L1, L2, L3;
    function getText(lang) {
    	switch(lang) {    		
    		case 'de': {
    			L1 = 'Mit dem Absenden der folgenden Nachricht stimme ich dem Erhalt von Benachrichtigungen zu';
    			L2 = 'Chatten Sie mit $BusinessName auf WhatsApp.';
    			L3 = 'Nachricht senden';
    			break;
    		}    		
    		case 'es': {
    			L1 = 'Acepto recibir notificaciones enviando el siguiente mensaje';
    			L2 = 'Chatea con $BusinessName en WhatsApp';
    			L3 = 'enviar mensaje';
    			break;
    		}    		
    		case 'pt_BR': {
    			L1 = 'Ao enviar a seguinte mensagem, eu concordo em receber notificaÃ§Ãµes.';
    			L2 = 'Converse com o $BusinessName no WhatsApp';
    			L3 = 'enviar mensagem';
    			break;
    		}    		
    		case 'ru': {
    			L1 = 'ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ, Ñ ÑÐ¾Ð³Ð»Ð°ÑˆÐ°ÑŽÑÑŒ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ.';
    			L2 = 'Ð§Ð°Ñ‚ Ñ $BusinessName Ð¿Ð¾ WhatsApp';
    			L3 = 'ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ';
    			break;
    		}
    		default: {
    			L1 = 'I agree to receive notifications by sending the following message';
    			L2 = 'Chat with $BusinessName on WhatsApp';
    			L3 = 'Send Message';
    			break;
    		}
    	}
    }
    getText(lang);
    const uiWidget = `<div class="gs_wa_widgetWrapper">
        <div class="gs_wa_widget">
            <div class="gs_wa_widgetInner">
                <div class="col w80">
                    <p><span style="text-align: left;">${(L2).replace('$BusinessName', appName)}</span>
                    </p>
                    <div class="check_wrapper">
                        <label>
                            <input type = "checkbox" id = "gsWaOptinCb">
                            <span>${L1}</span>
                        </label>
                    </div>
                </div>
                <div class="col w20">
                    <span style = "text-align: right; color:#38ae00;"><img src="https://www.buildquickbots.com/whatsapp/whatsapp_logo_stroked.png"
                    width = "30" height="30" style="text-align: right; color:#38ae00;">
                    </span>
                </div>    
            </div>
            <button class="sendMessageBtn" id="sendMessageBtn">${L3}</button>
        </div>
    </div>`;

    const styles = `<style>
    .gs_wa_widgetWrapper{
        color:#777;
        font-size: 12px;
        box-sizing: border-box;
        position:fixed;
        bottom:25px;
        right:25px;
        z-index: 9999;
    }
    .gs_wa_widgetWrapper .gs_wa_widget {
        position: relative;
        font-family: sans-serif;
        width: 320px;
        height:200px;
        background: #fff;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        box-sizing: border-box;
        -webkit-box-shadow: 5px 2px 5px 0px rgba(193, 193, 193, 0.75);
        -moz-box-shadow:    5px 2px 5px 0px rgba(193, 193, 193, 0.75);
        box-shadow:         5px 2px 5px 0px rgba(193, 193, 193, 0.75);
    }
    .gs_wa_widgetWrapper .check_wrapper{
        color: #999;
        margin: 30px auto;
    }
    .gs_wa_widgetWrapper .gs_wa_widgetInner{
        width: 100%;
        box-sizing: border-box;
    }

    .gs_wa_widgetWrapper .gs_wa_widgetInner p{
        font-size:14px;
    }

    .gs_wa_widgetWrapper .col{
        position: relative;
        display: inline-block;
        height: 155px;
        padding:10px;
        box-sizing: border-box;
    } 
    .gs_wa_widgetWrapper .w80{
        width: 80%;
        float:left;
    }
    .gs_wa_widgetWrapper .w20{
        text-align:center;
        padding-top:17px;
        width: 20%;
    }
    .gs_wa_widgetWrapper .sendMessageBtn{
        opacity: 0.4;
        background-color: #38ae00;
        color: white;
        position: absolute;
        bottom: 0px;
        appearance: none;
        outline: none;
        padding:15px;
        width: 100%;
        font-weight: 500;
        border-width:0px;
        border-bottom-left-radius: 20px;
        cursor:pointer;
    }
  </style>`;
    var primeElement = document.createElement('div');
    primeElement.innerHTML = uiWidget;
    document.body.appendChild(primeElement);

    var head = document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML('beforeend', styles);

    
    document.getElementById("gsWaOptinCb").addEventListener("click", () => {
        onCheckClick();
    }, false);
    
    function onCheckClick(){
        var checkBoxElem = document.getElementById("gsWaOptinCb");
        var sendMessageBtn = document.getElementById("sendMessageBtn");
        // If the checkbox is checked, then add click event listener
        if (checkBoxElem.checked == true) {
            sendMessageBtn.style.opacity = '1';
            sendMessageBtn.addEventListener("click", function () { sendReq(); }, false);
         } else {
            sendMessageBtn.style.opacity = '0.4';
            sendMessageBtn.removeEventListener("click", function () {}, false);
         }
    }

    function sendReq(){

        // Set up our HTTP request
        var data = `a=${appId}&s=${source}`;
        var xhr = new XMLHttpRequest();

        // Setup our listener to process completed requests
        xhr.onload = function () {

            // Process our return data
            if (xhr.status >= 200 && xhr.status < 300) {
                // What do when the request is successful
                console.log('success!', xhr);
                var response = JSON.parse(xhr.response);
                if(response.status && response.status == 'success'){
                	if(response.consent && response.consent.url){
                		window.open(response.consent.url, "_blank");		
                	}
                }
            } else {
                // What do when the request fails
                console.log('The request failed!');
            }

            // Code that should run regardless of the request status
            console.log('This always runs...');
        };
        var consentUrl;
        switch (env) {
            case 'DEV':
                consentUrl = 'http://dev-smsinbox.gupshup.io/optinmanager/consent/request';
                break;
            case 'QA':
                consentUrl = 'https://qa-smsinbox.gupshup.io/optinmanager/consent/request';
                break;
            case 'STAG':
                consentUrl = 'https://beta.gupshup.io/optinmanager/consent/request';
                break; 
            case 'PROD':
                consentUrl = 'https://whatsapp-support.gupshup.io/optinmanager/consent/request';
                break;    
            default:
                consentUrl = 'https://whatsapp-support.gupshup.io/optinmanager/consent/request';
        }

        // Create and send a GET request
        // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
        // The second argument is the endpoint URL
        xhr.open("POST", consentUrl);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
}(window, document));
