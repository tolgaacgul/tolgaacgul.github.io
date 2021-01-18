//
var kitle = [];
var OrneklemSayisi;
var N;
var n;
var N_n;



function fncCreatPopulation(){
    kitle = [];
    N = document.getElementById("idN").value;
    N = Number(N);
    for(i = 0; i<N; i++){
        var randomSayi = Math.floor(Math.random()*10);
        kitle.push(randomSayi)
    }
    document.getElementById("idKitle").innerHTML = kitle;
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
    

    if(n<1 || n>4){
        fncDrawSample(1,"Lütfen 1 ile 4 arasında bir n giriniz ki örneklem uzayı hesaplayabilelim!")
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

