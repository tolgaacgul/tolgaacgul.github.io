//
var kitle = [];
var OrneklemSayisi;
var N;
var n;
var N_n;

function fncHidden(){
    document.getElementById("idInfo").style.display = "none";
}

function fncCreatPopulation(){
    kitle = [];
    var altDeger = 164;
    var ustDeger = 185;
    N = document.getElementById("idN").value;
    N = Number(N);
    for(i = 0; i<N; i++){
        var Y_i = Math.random();
        Y_i *= (ustDeger-altDeger);
        Y_i = Math.floor(Y_i)+altDeger;

        kitle.push(Y_i);
    }
    var idKitle = document.getElementById("idKitle");
    idKitle.innerHTML = kitle;
    idKitle.className = "clsKitle"
}


function fncSampleSize(){
    OrneklemSayisi = null;
    var facn = 1;
    var facN = 1;
    var facN_n = 1;

    n = document.getElementById("idn").value;
    n = Number(n)
    N_n = N - n;

    for(i=1; i<=N; i++){
        facN = facN * i;
    }
    for(i=1; i<=n; i++){
        facn *= i;
    }
    for(i=1; i<=N_n; i++){
        facN_n *= i;
    }

    OrneklemSayisi = (facN / (facn * facN_n));
    document.getElementById("idOrneklemSayisi").innerHTML = " C(N,n) = " + OrneklemSayisi + " farklı örneklem vardır.";
    fncSamples(n);

}


function fncSamples(n){
    var sayac = 1;

    //sil fncDrawSample fonk için
    const clsOrneklemler = document.querySelector(".clsOrneklemler")
    clsOrneklemler.innerHTML = "";

    if(n<1 || n>6){
        fncDrawSample(1,"Lütfen 1 ile 6 arasında bir n giriniz ki örneklem uzayı hesaplayabilelim!")
    }else{
        if(n == 1){
            for(i=0; i<N; i++){
                var orneklem = [];
                orneklem.push(kitle[i]);
                fncDrawSample(sayac,orneklem)
                sayac++;
            }
        }else if(n == 2){
            for(i=0; i<N; i++){
                for(j=i+1; j<N; j++){
                    var orneklem = [];
                    orneklem.push(kitle[i]);
                    orneklem.push(kitle[j]);
        
                    fncDrawSample(sayac,orneklem)
                    sayac++;
                }
            }
        }else if(n == 3){
            for(i=0; i<N; i++){
                for(j=i+1; j<N; j++){
                    for(k=j+1; k<N; k++){
                        var orneklem = [];
                        orneklem.push(kitle[i]);
                        orneklem.push(kitle[j]);
                        orneklem.push(kitle[k]);
            
                        fncDrawSample(sayac,orneklem)
                        sayac++;
                    }
                }
            }
        }else if(n == 4){
            for(i=0; i<N; i++){
                for(j=i+1; j<N; j++){
                    for(k=j+1; k<N; k++){
                        for(m=k+1; m<N; m++){
                            var orneklem = [];
                            orneklem.push(kitle[i]);
                            orneklem.push(kitle[j]);
                            orneklem.push(kitle[k]);
                            orneklem.push(kitle[m]);
                
                            fncDrawSample(sayac,orneklem)
                            sayac++;
                        }
                    }
                }
            }
        }else if(n == 5){
            for(i=0; i<N; i++){
                for(j=i+1; j<N; j++){
                    for(k=j+1; k<N; k++){
                        for(m=k+1; m<N; m++){
                            for(l=m+1; l<N; l++){
                                var orneklem = [];
                                orneklem.push(kitle[i]);
                                orneklem.push(kitle[j]);
                                orneklem.push(kitle[k]);
                                orneklem.push(kitle[m]);
                                orneklem.push(kitle[l]);
                    
                                fncDrawSample(sayac,orneklem)
                                sayac++;
                            }
                        }
                    }
                }
            }
        }else if(n == 6){
            for(i=0; i<N; i++){
                for(j=i+1; j<N; j++){
                    for(k=j+1; k<N; k++){
                        for(m=k+1; m<N; m++){
                            for(l=m+1; l<N; l++){
                                for(t=l+1; t<N; t++){
                                    var orneklem = [];
                                    orneklem.push(kitle[i]);
                                    orneklem.push(kitle[j]);
                                    orneklem.push(kitle[k]);
                                    orneklem.push(kitle[m]);
                                    orneklem.push(kitle[l]);
                                    orneklem.push(kitle[t]);
                        
                                    fncDrawSample(sayac,orneklem)
                                    sayac++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


}

function fncDrawSample(sayac,orneklemDizi){
    const clsOrneklemler = document.querySelector(".clsOrneklemler")
    //yarat
    const clsOrneklem = document.createElement("div");
    clsOrneklem.className = "clsOrneklem"
    clsOrneklem.id = "idSample" + sayac;
    clsOrneklem.innerText = orneklemDizi;

    //birleştir
    clsOrneklemler.appendChild(clsOrneklem);
}