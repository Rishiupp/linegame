let a=document.querySelectorAll('.cont');
let b=document.querySelector('#score');
let t=true;
let arr=[];
let st = new Set();
let scoreblack=0;
let scoreblue=0;
let all=[
    "cont1", "cont2", "cont3", "cont4", "cont5", "cont6", "cont7", "cont8", "cont9", 
    "cont10", "cont11", "cont12", "conth1", "conth2", "conth3", "conth4", "conth5", 
    "conth6", "conth7", "conth8", "conth9", "conth10", "conth11", "conth12"
  ];  
for(con of a){
    
    con.ToggleEvent = false;
    con.addEventListener('click',function() { func(this); }); 
}
function func(con){
    st.add(con.classList[0]);
    console.log(st.size);
    if(st.size===24){
        if(scoreblack>scoreblue){
            con.style.backgroundColor="black";
            b.innerText="Player black wins"
        }
        else if(scoreblack<scoreblue){
            con.style.backgroundColor="blue";
            b.innerText="Player blue wins"
        }
        else{
            b.innerText="Draw"
        }
    }
    else{
        if(t && scoreblack+scoreblue<9){
            if(con.ToggleEvent==false){
                // console.log(con);
                arr.push(con.classList);
                
                con.style.backgroundColor="black";
                if(check(con,1)){
                    t=!t;
                    b.innerText="Player blue's turn";
                }
                else{
                    b.innerText="Player black's turn";
                }
                con.ToggleEvent=true;
            }
        }
        else if(scoreblack+scoreblue<=9){
            if(con.ToggleEvent==false){
                // console.log(con);
                arr.push(con.classList);
                con.style.backgroundColor="blue";
                con.ToggleEvent=true;
                if(check(con,2)){
                    t=!t;
                    b.innerText="Player black's turn";
                }
                else{
                    b.innerText="Player blue's turn";
                }

            }
        }
        console.log(arr);
    }
}
function check(con,aa){
        let mapp = {
            "cont1": ["conth1", "conth2", "cont4"],
            "cont2": ["conth2", "conth3", "cont5"],
            "cont3": ["conth3", "conth4", "cont6"],
            "cont4": ["conth5", "conth6", "cont7","conth1", "conth2", "cont1"],
            "cont5": ["conth6", "conth7", "cont8","conth2", "conth3", "cont2"],
            "cont6": ["conth7", "conth8", "cont9","conth3", "conth4", "cont3"],
            "cont7": ["conth9", "conth10", "cont10","conth5", "conth6", "cont4"],
            "cont8": ["conth10", "conth11", "cont11","conth7", "conth6", "cont5"],
            "cont9": ["conth11", "conth12", "cont12","conth7", "conth8", "cont6"],
            "cont10": ["conth9", "cont7", "cont11"],
            "cont11": ["conth10", "cont8", "cont12"],
            "cont12": ["conth11", "cont9", "cont10"],
            "conth1": ["cont1", "conth2", "cont4"],
            "conth2": ["cont1", "conth1", "cont4","cont5", "conth3","cont2"],
            "conth3": ["cont2", "conth2", "cont5","cont6", "conth4", "cont3"],
            "conth4": ["conth3", "cont3", "cont6"],
            "conth5": ["conth6", "cont4", "cont7",],
            "conth6": ["cont7", "cont4", "conth5","cont5", "cont8", "conth7"],
            "conth7": ["cont8", "cont5", "conth6","cont6", "conth8", "cont9"],
            "conth8": ["cont6", "cont9", "conth7"],
            "conth9": ["cont7", "cont10", "conth10"],
            "conth10": ["cont7", "cont10", "conth9","cont11", "conth11", "cont8"],
            "conth11": ["conth10", "cont8", "cont11","cont12", "cont9", "conth12"],
            "conth12": ["conth11", "cont9", "cont12"]
        };
        let clss=con.classList[0];
        let rc = mapp[clss] || [];
        let cnt1=0;
        let cnt2=0;
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<3;j++){
                if(rc[j]==arr[i][0]){
                    cnt1++;
                }
            }
            if(rc.length>3){
                for(let j=3;j<6;j++){
                    if(rc[j]==arr[i][0]){
                        cnt2++;
                    }
                }
            }
        }
        if(cnt1==3 && cnt2==3){
            if(aa%2==0){
                scoreblue+=2;
            }
            else{
                scoreblack+=2;
            }
            return false;
        }
        else if(cnt1==3 || cnt2==3){
            if(aa%2==0){
                scoreblue+=1;
            }
            else{
                scoreblack+=1;
            }
            return false;
        }
        else{
            return true;
        }
}