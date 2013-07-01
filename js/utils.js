

function onInstallClick() {
    if(navigator.mozApps) {
        var installParams = {};
        var request = navigator.mozApps.install(
            location.href + 'manifest.webapp', installParams);
        request.onsuccess = function() {
            // great - display a message, or redirect to a launch page
        };
        request.onerror = function() {
            // whoops - this.error.name has details
        };
    }
}

function setupInstallButtons() {
    var installBtn = $('#firefox-os-install-btn');
    var installedBtn = $('#firefox-os-installed-btn');
    installBtn.hide();
    installedBtn.hide();
    if(navigator.mozApps) {
        var request = navigator.mozApps.checkInstalled(
            location.href + 'manifest.webapp');
        request.onsuccess = function() {
            if (request.result) {
                // we're installed
                installedBtn.show();
            } else {
                // not installed
                installBtn.on("click", onInstallClick);
                installBtn.show();
            }
        };

        var request = navigator.mozApps.getSelf();
        request.onsuccess = function() {
            if(!request.result) {
                // TODO: find how to get installParams that we set on install
                installBtn.hide();
                installedBtn.show();
            }
        };
    }
}

$(setupInstallButtons);
