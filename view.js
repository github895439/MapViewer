//ハンドラ登録
function setEventListener()
{
    addEventListener("keydown", keydownHandler);
}

//keydownハンドラ
function keydownHandler()
{
    console.log(event.keyCode);

    //キー分岐
    switch (event.keyCode)
    {
        case 87://sキー
            {
                snapY--;
                break;
            }
        case 65://aキー
            {
                snapX--;
                break;
            }
        case 83://wキー
            {
                snapY++;
                break;
            }
        case 68://dキー
            {
                snapX++;
                break;
            }
        case 73://iキー
            {
                alert("横位置: " + snapX + ", 縦位置: " + snapY);
                break;
            }
        case 72://hキー
            {
                //ベースの横位置が設定されているか
                if (form.get("basePX") != "")
                {
                    snapX = Number(form.get("basePX"));
                }

                //ベースの縦位置が設定されているか
                if (form.get("basePY") != "")
                {
                    snapY = Number(form.get("basePY"));
                }
                break;
            }
        case 75://kキー
            {
                let tmp =
                [
                    "k: このダイアログを表示",
                    "i: 現位置を表示",
                    "h: ホームへ移動",
                    "w: 上へ移動",
                    "a: 左へ移動",
                    "s: 下へ移動",
                    "d: 右へ移動",
                    "1～0: ショートカットへ移動",
                    "zxcvb: レイヤー0～5を表示",
                ];
                alert(tmp.join("\n"));
                break;
            }
        case 49://1キー
            {
                //ショートカット1の横位置が設定されているか
                if (form.get("shortcut1PX") != "")
                {
                    snapX = Number(form.get("shortcut1PX"));
                }

                //ショートカット1の縦位置が設定されているか
                if (form.get("shortcut1PY") != "")
                {
                    snapY = Number(form.get("shortcut1PY"));
                }
                break;
            }
        case 50:
            {
                if (form.get("shortcut2PX") != "")
                {
                    snapX = Number(form.get("shortcut2PX"));
                }

                if (form.get("shortcut2PY") != "")
                {
                    snapY = Number(form.get("shortcut2PY"));
                }
                break;
            }
        case 51:
            {
                if (form.get("shortcut3PX") != "")
                {
                    snapX = Number(form.get("shortcut3PX"));
                }

                if (form.get("shortcut3PY") != "")
                {
                    snapY = Number(form.get("shortcut3PY"));
                }
                break;
            }
        case 52:
            {
                if (form.get("shortcut4PX") != "")
                {
                    snapX = Number(form.get("shortcut4PX"));
                }

                if (form.get("shortcut4PY") != "")
                {
                    snapY = Number(form.get("shortcut4PY"));
                }
                break;
            }
        case 53:
            {
                if (form.get("shortcut5PX") != "")
                {
                    snapX = Number(form.get("shortcut5PX"));
                }

                if (form.get("shortcut5PY") != "")
                {
                    snapY = Number(form.get("shortcut5PY"));
                }
                break;
            }
        case 54:
            {
                if (form.get("shortcut6PX") != "")
                {
                    snapX = Number(form.get("shortcut6PX"));
                }

                if (form.get("shortcut6PY") != "")
                {
                    snapY = Number(form.get("shortcut6PY"));
                }
                break;
            }
        case 55:
            {
                if (form.get("shortcut7PX") != "")
                {
                    snapX = Number(form.get("shortcut7PX"));
                }

                if (form.get("shortcut7PY") != "")
                {
                    snapY = Number(form.get("shortcut7PY"));
                }
                break;
            }
        case 56:
            {
                if (form.get("shortcut8PX") != "")
                {
                    snapX = Number(form.get("shortcut8PX"));
                }

                if (form.get("shortcut8PY") != "")
                {
                    snapY = Number(form.get("shortcut8PY"));
                }
                break;
            }
        case 57:
            {
                if (form.get("shortcut9PX") != "")
                {
                    snapX = Number(form.get("shortcut9PX"));
                }

                if (form.get("shortcut9PY") != "")
                {
                    snapY = Number(form.get("shortcut9PY"));
                }
                break;
            }
        case 48:
            {
                if (form.get("shortcut0PX") != "")
                {
                    snapX = Number(form.get("shortcut0PX"));
                }

                if (form.get("shortcut0PY") != "")
                {
                    snapY = Number(form.get("shortcut0PY"));
                }
                break;
            }
        case 90://zキー
            {
                //レイヤーが有効か
                if (enableLayer)
                {
                    snapLayer = 0;
                }

                break;
            }
        case 88:
            {
                if (enableLayer)
                {
                    snapLayer = 1;
                }
                
                break;
            }
        case 67:
            {
                if (enableLayer)
                {
                    snapLayer = 2;
                }
                
                break;
            }
        case 86:
            {
                if (enableLayer)
                {
                    snapLayer = 3;
                }
                
                break;
            }
        case 66:
            {
                if (enableLayer)
                {
                    snapLayer = 4;
                }
                
                break;
            }
        case 78:
            {
                if (enableLayer)
                {
                    snapLayer = 5;
                }
                
                break;
            }
        default:
            break;
    }

    //画面表示
    display();
}

//ページロード後の準備
function ready()
{
    let query = location.search.substring(1).split("&");

    //オープン時のクエリー解析ループ
    for (let index = 0; index < query.length; index++)
    {
        query[index] = decodeURI(query[index]);
        let tmp = query[index].split("=");
        form.set(tmp[0], tmp[1]);
    }

    document.getElementsByTagName("title")[0].innerText = form.get("snapPath");
    let tmp = form.get("snapPath");

    //コンテキストメニューでパスコピーした場合の「"」削除ループ
    while (tmp.includes("\""))
    {
        tmp = tmp.replace("\"", "");
    }

    snapFile = tmp;
    let tmp2 = tmp.lastIndexOf("\\");

    //ディレクトリが含まれているか
    if (tmp2 != -1)
    {
        snapDirectory = snapFile.substring(0, tmp2);
        snapFile = snapFile.substring(tmp2 + 1);
    }

    let tmp3 = snapFile.lastIndexOf(".");
    snapExtension = "";

    //拡張子があるか
    if (tmp3 != -1)
    {
        snapExtension = snapFile.substring(tmp3 + 1);
        tmp3 = snapFile.substring(0, tmp3);
    }
    else
    {
        tmp3 = snapFile;
    }

    let tmp4 = tmp3.split(",");
    enableLayer = false;

    //レイヤーデータか
    if (tmp4.length == 3)
    {
        enableLayer = true;
        snapLayer = 0;
    }

    snapX = Number(form.get("basePX"));
    snapY = Number(form.get("basePY"));

    //左上隅のスタイルシート値
    image.set("LU",
        {
            element: document.getElementById("LU"),
            relative:
            {
                x: 0,
                y: 0
            },
            top:
            {
                even: 0,
                odd: Math.round(Number(form.get("snapHeight")) / 2) * -1
            },
            left:
            {
                even: 0,
                odd: Math.round(Number(form.get("snapWidth")) / 2) * -1
            }
        });
    image.set("RU",
        {
            element: document.getElementById("RU"),
            relative:
            {
                x: 1,
                y: 0
            },
            top:
            {
                even: 0,
                odd: Math.round(Number(form.get("snapHeight")) / 2) * -1
            },
            left:
            {
                even: Number(form.get("viewSpacing")),
                odd: Number(form.get("viewSpacing")) + Math.round(Number(form.get("snapWidth")) / 2)
            }
        });
    image.set("LD",
        {
            element: document.getElementById("LD"),
            relative:
            {
                x: 0,
                y: 1
            },
            top:
            {
                even: Number(form.get("viewSpacing")),
                odd: Number(form.get("viewSpacing")) + Math.round(Number(form.get("snapHeight")) / 2)
            },
            left:
            {
                even: 0,
                odd: Math.round(Number(form.get("snapWidth")) / 2) * -1
            }
        });
    image.set("RD",
        {
            element: document.getElementById("RD"),
            relative:
            {
                x: 1,
                y: 1
            },
            top:
            {
                even: Number(form.get("viewSpacing")),
                odd: Number(form.get("viewSpacing")) + Math.round(Number(form.get("snapHeight")) / 2)
            },
            left:
            {
                even: Number(form.get("viewSpacing")),
                odd: Number(form.get("viewSpacing")) + Math.round(Number(form.get("snapWidth")) / 2)
            }
        });

    //スタイルシートの四隅共通分設定ループ
    for (const key of image.keys())
    {
        image.get(key).element.style["width"] = form.get("snapWidth") + "px";
        image.get(key).element.style["height"] = form.get("snapHeight") + "px";
        image.get(key).element.style["position"] = "absolute";
        image.get(key).element.style["object-fit"] = "cover";
    }

    //左上隅のrect引数
    rect.set("LU",
        [
            "auto",
            Math.ceil(Number(form.get("snapWidth")) / 2),
            Math.ceil(Number(form.get("snapHeight")) / 2),
            "auto"
        ]
    );
    rect.set("RU",
        [
            "auto",
            "auto",
            Math.ceil(Number(form.get("snapHeight")) / 2),
            Math.round(Number(form.get("snapWidth")) / 2)
        ]
    );
    rect.set("LD",
        [
            Math.round(Number(form.get("snapHeight")) / 2),
            Math.ceil(Number(form.get("snapWidth")) / 2),
            "auto",
            "auto"
        ]
    );
    rect.set("RD",
        [
            Math.round(Number(form.get("snapHeight")) / 2),
            "auto",
            "auto",
            Math.round(Number(form.get("snapWidth")) / 2)
        ]
    );
}

//画面表示
function display()
{
    //四隅ループ
    for (const key of image.keys())
    {
        subDisplay(key);
    }
}

//隅表示
function subDisplay(direction)
{
    let file = "";

    //スナップがディレクトリ下か
    if (snapDirectory != "")
    {
        file += snapDirectory + "\\";
    }

    let x = snapX + image.get(direction).relative.x;
    let fileX = Math.floor(x / 2);
    let y = snapY + image.get(direction).relative.y;
    let fileY = Math.floor(y / 2);
    file += String(fileX) + "," + String(fileY);

    //レイヤーが有効か
    if (enableLayer)
    {
        file += "," + String(snapLayer);
    }

    //拡張子があるか
    if (snapExtension != "")
    {
        file += "." + snapExtension;
    }

    image.get(direction).element["src"] = file;
    let halfX = x % 2;
    let halfY = y % 2;
    let directionHalf;

    //実データはスナップの左上か
    if ((halfX == 0) && (halfY == 0))
    {
        directionHalf = "LU";
    }
    //実データはスナップの右上か
    else if ((halfX == 1) && (halfY == 0))
    {
        directionHalf = "RU";
    }
    //実データはスナップの左下か
    else if ((halfX == 0) && (halfY == 1))
    {
        directionHalf = "LD";
    }
    //その他か
    else
    {
        directionHalf = "RD";
    }

    //rect引数作成配列
    let tmp =
        [
            rect.get(directionHalf)[0] == "auto" ? "auto" : rect.get(directionHalf)[0] + "px",
            rect.get(directionHalf)[1] == "auto" ? "auto" : rect.get(directionHalf)[1] + "px",
            rect.get(directionHalf)[2] == "auto" ? "auto" : rect.get(directionHalf)[2] + "px",
            rect.get(directionHalf)[3] == "auto" ? "auto" : rect.get(directionHalf)[3] + "px",
        ]
    image.get(direction).element["style"]["clip"] = "rect(" + tmp.join(",") + ")";

    //隅とスナップの位置の横成分が同じか
    if (direction.charAt(1) == directionHalf.charAt(1))
    {
        image.get(direction).element["style"]["top"] = image.get(direction).top.even + "px";
    }
    else
    {
        image.get(direction).element["style"]["top"] = image.get(direction).top.odd + "px";
    }

    //隅とスナップの位置の縦成分が同じか
    if (direction.charAt(0) == directionHalf.charAt(0))
    {
        image.get(direction).element["style"]["left"] = image.get(direction).left.even + "px";
    }
    else
    {
        image.get(direction).element["style"]["left"] = image.get(direction).left.odd + "px";
    }
}

var search;
var snapPath;
var snapFile;
var snapExtension;
var enableLayer;
var snapDirectory;
var snapX;
var snapY;
var snapLayer;
var image = new Map;
var form = new Map;
var rect = new Map;

//ハンドラ登録
setEventListener();

//ページロード後の準備
ready();

//画面表示
display();
