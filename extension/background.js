chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "cognos",
        title: "Cognos",
        contexts: ["action"]
    })
    chrome.contextMenus.create({
        id: "ade",
        title: "ADE",
        contexts: ["action"]
    })
    chrome.contextMenus.create({
        id: "adeData",
        parentId: "ade",
        title: "Data Center",
        contexts: ["action"]
    })
    chrome.contextMenus.create({
        id: "courseCode",
        parentId: "ade",
        title: "Course Code Management System",
        contexts: ["action"]
    })
    chrome.contextMenus.create({
        id: "triand",
        title: "Triand",
        contexts: ["action"]
    })
    chrome.contextMenus.create({
        id: "sso",
        title: "State AD Password (Change/Reset)",
        contexts: ["action"]
    })
})

chrome.action.onClicked.addListener(function(activeTab){
    chrome.tabs.create({url: "http://eschool20.esp.k12.ar.us/"});
});

chrome.contextMenus.onClicked.addListener(function(info) {
    switch (info.menuItemId) {
        case "cognos":
            chrome.storage.sync.get({cognosDsn: null}, function(value) {
                if (value.cognosDsn != null) {
                    chrome.tabs.create({url: "https://adecognos.arkansas.gov/SPI/SPI_To_CRN.asp?dsn=" + value.cognosDsn + "&appver=20.4&theme=MSWindows&crndir=ibmcognos&appid=eSP"});
                } else {
                    chrome.runtime.openOptionsPage()
                }
            });
            break;        
        case "adeData":
            chrome.tabs.create({url: "https://adedata.arkansas.gov"});
            break;
        case "courseCode":
            chrome.tabs.create({url: "https://adedata.arkansas.gov/ccms/CourseList"});
            break;
        case "triand":
            chrome.tabs.create({url: "https://www.triand.com"});
            break;
        case "sso":
            chrome.tabs.create({url: "https://k12.ade.arkansas.gov/identity/self-service/ade/login.jsf"});
            break;
    }
});

chrome.contentSettings.popups.set(
    {
        'primaryPattern': "https://eschool20.esp.k12.ar.us/*",
        'setting': "allow"
    }
);
chrome.contentSettings.popups.set(
    {
        'primaryPattern': "https://adecognos.arkansas.gov/*",
        'setting': "allow"
    }
);
chrome.contentSettings.cookies.set(
    {
        'primaryPattern': "https://adecognos.arkansas.gov/*",
        'setting': "allow"
    }
);
chrome.contentSettings.images.set(
    {
        'primaryPattern': "https://adecognos.arkansas.gov/*",
        'setting': "allow"
    }
);
chrome.contentSettings.javascript.set(
    {
        'primaryPattern': "https://adecognos.arkansas.gov/*",
        'setting': "allow"
    }
);