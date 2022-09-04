// SELURUH RUANGAN KELUARGA START
function saklarRuangKeluarga() {
    let ruang1 = document.getElementById("ruangKeluarga");

    let keluarga1 = document.getElementById("lampuKeluarga1");
    let keluarga2 = document.getElementById("lampuKeluarga2");
    let keluarga3 = document.getElementById("lampuKeluarga3");

    if (ruang1.checked) {
        keluarga1.src = "assets/images/on.gif";
        keluarga2.src = "assets/images/on.gif";
        keluarga3.src = "assets/images/on.gif";
    } else {
        keluarga1.src = "assets/images/off.gif";
        keluarga2.src = "assets/images/off.gif";
        keluarga3.src = "assets/images/off.gif";
    }

}

    // RUANG KELUARGA PER LAMPU
    function saklarKeluarga() {
        let lampuKeluarga1 = document.getElementById("keluarga1");
        let lampuKeluarga2 = document.getElementById("keluarga2");
        let lampuKeluarga3 = document.getElementById("keluarga3");

        let keluarga1 = document.getElementById("lampuKeluarga1");
        let keluarga2 = document.getElementById("lampuKeluarga2");
        let keluarga3 = document.getElementById("lampuKeluarga3");

        if (lampuKeluarga1.checked) {
            keluarga1.src = "assets/images/on.gif"
        } else {
            keluarga1.src = "assets/images/off.gif"
        }

        if (lampuKeluarga2.checked) {
            keluarga2.src = "assets/images/on.gif"
        } else {
            keluarga2.src = "assets/images/off.gif"
        }

        if (lampuKeluarga3.checked) {
            keluarga3.src = "assets/images/on.gif"
        } else {
            keluarga3.src = "assets/images/off.gif"
        }
    }
// SELURUH RUANGAN KELUARGA FINIS
