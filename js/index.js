function solve(){ 
    let weight = document.querySelector(".value-weight input").value;
    let height = document.querySelector(".value-height input").value;
    let result = weight/(0.01*height)**2;
    let rounded_result = result.toFixed(2);
        
	if (weight>30 && height>120 && weight <300 && height < 250) {
        document.getElementById("results").innerHTML = ("Twoje BMI wynosi - " + rounded_result);
        check(rounded_result);
    } else { 
        document.getElementById("results").innerHTML="Podano nieprawidłowe dane!";
        document.querySelector(".interpretation").innerHTML = "Podaj właściwe dane";
    };
}
function check(rounded_result){
    if (rounded_result < 18.5) {
        document.querySelector(".interpretation").innerHTML = "Wskazuje to na niedowagę. Konieczne jest dożywienie organizmu. Zalecana jest konsultacja z dietetykiem celem zwiększenia masy ciała."
    } else if (18.5 < rounded_result && rounded_result < 25) { 
        document.querySelector(".interpretation").innerHTML = "Wynik oznacza prawidłową masę ciała. Utrzymanie wskaźnika o takiej wartości gwarantuje atracyjny wygląd i zdrowie."
    } else if (25 <= rounded_result && rounded_result < 30) { 
        document.querySelector(".interpretation").innerHTML = "Wynik klasyfikowany jest jako nadwaga. Nie jest to powód do zmiartwień jednak zalecana jest nieznaczna redukcja masy ciała."
    } else if (30 <= rounded_result && rounded_result < 35) { 
        document.querySelector(".interpretation").innerHTML = "Oznacza to otyłość I stopnia. Zalecana jest redukcja masy ciała i wskazane są konsultacje z dietetykiem. Utrzymywanie się takiego stanu dwukrotnie zwiększa ryzyko zachorowania na choroby cywilizacyjne."
    } else if (35 <= rounded_result && rounded_result < 40) { 
        document.querySelector(".interpretation").innerHTML = "Wskazuje to na otyłość II stopnia. Należy zgłosić się do lekarza specjalisty celem ustalenia planu redukcji masy ciała. Taki stan poważnie zagraża zdrowiu!"
    } else if (rounded_result>40){
        document.querySelector(".interpretation").innerHTML = "Oznacza to otyłość III stopnia. Taki stan jest uznawany za zagrażający życiu! Zaleca się pilną konsultację z lekarzem specjalistą, aby pod jego kontrolą rozpocząć odchudzanie."
    } else {
        document.querySelector(".interpretation").innerHTML = "Podaj właściwe dane"
    };
}


