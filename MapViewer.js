//ハンドラ登録
function setEventListener()
{
    document.getElementById("openView").addEventListener("click", buttonOpenViewHandler);
    document.getElementById("saveConfig").addEventListener("click", buttonSaveConfigHandler);
    document.getElementById("loadConfig").addEventListener("click", buttonLoadConfigHandler);
}

//入力チェック
function checkInput()
{
    let inputWidth = document.getElementById("snapWidth").value;

    //横サイズが入力されていないか
    if (inputWidth == "")
    {
        return "スナップサイズの横を入力して下さい。";
    }

    snapWidth = new Number(inputWidth);

    let inputHeight = document.getElementById("snapHeight").value;

    //縦サイズが入力されていないか
    if (inputHeight == "")
    {
        return "スナップサイズの縦を入力して下さい。";
    }

    snapHeight = new Number(inputHeight);

    let inputSnap = document.getElementById("snapPath").value;

    //スナップパスが入力されていないか
    if (inputSnap == "")
    {
        return "スナップパスを入力して下さい。";
    }

    snapPath = inputSnap;
    return "";
}

//「ビューオープン」ボタンハンドラ
function buttonOpenViewHandler()
{
    //ビューが作成済みか
    if (viewWindow != undefined)
    {
        //ビュー変更拒否か
        if (!confirm("ビューを変更しますか？"))
        {
            return;
        }
    }

    let rtn = checkInput();

    //入力エラーか
    if (rtn != "")
    {
        alert(rtn);
        return;
    }

    let windowWidth = snapWidth + config.viewSpacing;
    let windowHeight = snapHeight + config.viewSpacing;
    document.getElementsByTagName("title")[0].innerText = defaultTitle + " " + snapPath;

    //クエリー作成配列
    query =
    [
        "snapPath=" + document.getElementById("snapPath").value,
        "snapWidth=" + document.getElementById("snapWidth").value,
        "snapHeight=" + document.getElementById("snapHeight").value,
        "viewSpacing=" + document.getElementById("viewSpacing").value,
        "basePX=" + document.getElementById("basePX").value,
        "basePY=" + document.getElementById("basePY").value,
        "shortcut1PX=" + document.getElementById("shortcut1PX").value,
        "shortcut1PY=" + document.getElementById("shortcut1PY").value,
        "shortcut2PX=" + document.getElementById("shortcut2PX").value,
        "shortcut2PY=" + document.getElementById("shortcut2PY").value,
        "shortcut3PX=" + document.getElementById("shortcut3PX").value,
        "shortcut3PY=" + document.getElementById("shortcut3PY").value,
        "shortcut4PX=" + document.getElementById("shortcut4PX").value,
        "shortcut4PY=" + document.getElementById("shortcut4PY").value,
        "shortcut5PX=" + document.getElementById("shortcut5PX").value,
        "shortcut5PY=" + document.getElementById("shortcut5PY").value,
        "shortcut6PX=" + document.getElementById("shortcut6PX").value,
        "shortcut6PY=" + document.getElementById("shortcut6PY").value,
        "shortcut7PX=" + document.getElementById("shortcut7PX").value,
        "shortcut7PY=" + document.getElementById("shortcut7PY").value,
        "shortcut8PX=" + document.getElementById("shortcut8PX").value,
        "shortcut8PY=" + document.getElementById("shortcut8PY").value,
        "shortcut9PX=" + document.getElementById("shortcut9PX").value,
        "shortcut9PY=" + document.getElementById("shortcut9PY").value,
        "shortcut0PX=" + document.getElementById("shortcut0PX").value,
        "shortcut0PY=" + document.getElementById("shortcut0PY").value,
    ];
    viewWindow = open("./view.html?" + query.join("&"), "MapViewerView", "width=" + windowWidth + " height=" + windowHeight);
}

//「設定セーブ」ボタンハンドラ
function buttonSaveConfigHandler()
{
    config["snapWidth"] = document.getElementById("snapWidth").value;
    config["snapHeight"] = document.getElementById("snapHeight").value;
    config["snapPath"] = document.getElementById("snapPath").value;
    config["viewSpacing"] = document.getElementById("viewSpacing").value;
    config["baseP"] = {
        x: document.getElementById("basePX").value,
        y: document.getElementById("basePY").value};
    config["shortcut1P"] = {
        x: document.getElementById("shortcut1PX").value,
        y: document.getElementById("shortcut1PY").value};
    config["shortcut2P"] ={
        x: document.getElementById("shortcut2PX").value,
        y: document.getElementById("shortcut2PY").value};
    config["shortcut3P"] ={
        x: document.getElementById("shortcut3PX").value,
        y: document.getElementById("shortcut3PY").value};
    config["shortcut4P"] ={
        x: document.getElementById("shortcut4PX").value,
        y: document.getElementById("shortcut4PY").value};
    config["shortcut5P"] ={
        x: document.getElementById("shortcut5PX").value,
        y: document.getElementById("shortcut5PY").value};
    config["shortcut6P"] ={
        x: document.getElementById("shortcut6PX").value,
        y: document.getElementById("shortcut6PY").value};
    config["shortcut7P"] ={
        x: document.getElementById("shortcut7PX").value,
        y: document.getElementById("shortcut7PY").value};
    config["shortcut8P"] ={
        x: document.getElementById("shortcut8PX").value,
        y: document.getElementById("shortcut8PY").value};
    config["shortcut9P"] ={
        x: document.getElementById("shortcut9PX").value,
        y: document.getElementById("shortcut9PY").value};
    config["shortcut0P"] ={
        x: document.getElementById("shortcut0PX").value,
        y: document.getElementById("shortcut0PY").value};
    document.getElementById("config").value = "config = " + JSON.stringify(config);
}

//「設定ロード」ボタンハンドラ
function buttonLoadConfigHandler()
{
    eval(document.getElementById("config").value);

    //設定に横サイズが有り、かつ、未設定ではないか
    if ((config.hasOwnProperty("snapWidth")) && (config.snapWidth != ""))
    {
        document.getElementById("snapWidth").value = config.snapWidth;
    }

    //設定に縦サイズが有り、かつ、未設定ではないか
    if ((config.hasOwnProperty("snapHeight")) && (config.snapHeight != ""))
    {
        document.getElementById("snapHeight").value = config.snapHeight;
    }

    //設定にスナップパスが有り、かつ、未設定ではないか
    if ((config.hasOwnProperty("snapPath")) && (config.snapPath != ""))
    {
        document.getElementById("snapPath").value = config.snapPath;
    }

    //設定にスナップ間隔が有り、かつ、未設定ではないか
    if ((config.hasOwnProperty("viewSpacing")) && (config.viewSpacing != ""))
    {
        document.getElementById("viewSpacing").value = config.viewSpacing;
    }

    //設定にベース位置が有るか
    if (config.hasOwnProperty("baseP"))
    {
        //設定にベース位置の横位置が有り、かつ、未設定ではないか
        if ((config.baseP.hasOwnProperty("x")) && (config.baseP.x != ""))
        {
            document.getElementById("basePX").value = config.baseP.x;
        }

        //設定にベース位置の縦位置が有り、かつ、未設定ではないか
        if ((config.baseP.hasOwnProperty("y")) && (config.baseP.y != ""))
        {
            document.getElementById("basePY").value = config.baseP.y;
        }
    }

    //設定にショートカット1が有るか
    if (config.hasOwnProperty("shortcut1P"))
    {
        //設定にショートカット1の横位置が有り、かつ、未設定ではないか
        if ((config.shortcut1P.hasOwnProperty("x")) && (config.shortcut1P.x != ""))
        {
            document.getElementById("shortcut1PX").value = config.shortcut1P.x;
        }

        //設定にショートカット1の横位置が有り、かつ、未設定ではないか
        if ((config.shortcut1P.hasOwnProperty("y")) && (config.shortcut1P.y != ""))
        {
            document.getElementById("shortcut1PY").value = config.shortcut1P.y;
        }
    }

    if (config.hasOwnProperty("shortcut2P"))
    {
        if ((config.shortcut2P.hasOwnProperty("x")) && (config.shortcut2P.x != ""))
        {
            document.getElementById("shortcut2PX").value = config.shortcut2P.x;
        }

        if ((config.shortcut2P.hasOwnProperty("y")) && (config.shortcut2P.y != ""))
        {
            document.getElementById("shortcut2PY").value = config.shortcut2P.y;
        }
    }

    if (config.hasOwnProperty("shortcut3P"))
    {
        if ((config.shortcut3P.hasOwnProperty("x")) && (config.shortcut3P.x != ""))
        {
            document.getElementById("shortcut3PX").value = config.shortcut3P.x;
        }

        if ((config.shortcut3P.hasOwnProperty("y")) && (config.shortcut3P.y != ""))
        {
            document.getElementById("shortcut3PY").value = config.shortcut3P.y;
        }
    }

    if (config.hasOwnProperty("shortcut4P"))
    {
        if ((config.shortcut4P.hasOwnProperty("x")) && (config.shortcut4P.x != ""))
        {
            document.getElementById("shortcut4PX").value = config.shortcut4P.x;
        }

        if ((config.shortcut4P.hasOwnProperty("y")) && (config.shortcut4P.y != ""))
        {
            document.getElementById("shortcut4PY").value = config.shortcut4P.y;
        }
    }

    if (config.hasOwnProperty("shortcut5P"))
    {
        if ((config.shortcut5P.hasOwnProperty("x")) && (config.shortcut5P.x != ""))
        {
            document.getElementById("shortcut5PX").value = config.shortcut5P.x;
        }

        if ((config.shortcut5P.hasOwnProperty("y")) && (config.shortcut5P.y != ""))
        {
            document.getElementById("shortcut5PY").value = config.shortcut5P.y;
        }
    }

    if (config.hasOwnProperty("shortcut6P"))
    {
        if ((config.shortcut6P.hasOwnProperty("x")) && (config.shortcut6P.x != ""))
        {
            document.getElementById("shortcut6PX").value = config.shortcut6P.x;
        }

        if ((config.shortcut6P.hasOwnProperty("y")) && (config.shortcut6P.y != ""))
        {
            document.getElementById("shortcut6PY").value = config.shortcut6P.y;
        }
    }

    if (config.hasOwnProperty("shortcut7P"))
    {
        if ((config.shortcut7P.hasOwnProperty("x")) && (config.shortcut7P.x != ""))
        {
            document.getElementById("shortcut7PX").value = config.shortcut7P.x;
        }

        if ((config.shortcut7P.hasOwnProperty("y")) && (config.shortcut7P.y != ""))
        {
            document.getElementById("shortcut7PY").value = config.shortcut7P.y;
        }
    }

    if (config.hasOwnProperty("shortcut8P"))
    {
        if ((config.shortcut8P.hasOwnProperty("x")) && (config.shortcut8P.x != ""))
        {
            document.getElementById("shortcut8PX").value = config.shortcut8P.x;
        }

        if ((config.shortcut8P.hasOwnProperty("y")) && (config.shortcut8P.y != ""))
        {
            document.getElementById("shortcut8PY").value = config.shortcut8P.y;
        }
    }

    if (config.hasOwnProperty("shortcut9P"))
    {
        if ((config.shortcut9P.hasOwnProperty("x")) && (config.shortcut9P.x != ""))
        {
            document.getElementById("shortcut9PX").value = config.shortcut9P.x;
        }

        if ((config.shortcut9P.hasOwnProperty("y")) && (config.shortcut9P.y != ""))
        {
            document.getElementById("shortcut9PY").value = config.shortcut9P.y;
        }
    }

    if (config.hasOwnProperty("shortcut0P"))
    {
        if ((config.shortcut0P.hasOwnProperty("x")) && (config.shortcut0P.x != ""))
        {
            document.getElementById("shortcut0PX").value = config.shortcut0P.x;
        }

        if ((config.shortcut0P.hasOwnProperty("y")) && (config.shortcut0P.y != ""))
        {
            document.getElementById("shortcut0PY").value = config.shortcut0P.y;
        }
    }
}

//ページロード後の準備
function ready()
{
    document.getElementById("openView").removeAttribute("disabled");
    document.getElementById("saveConfig").removeAttribute("disabled");
    document.getElementById("loadConfig").removeAttribute("disabled");
    defaultTitle = document.getElementsByTagName("title")[0].innerText;
}

var config;
var viewWindow;
var defaultTitle;
var snapWidth;
var snapHeight;
var snapPath;

//ハンドラ登録
setEventListener();

//ページロード後の準備
ready();
