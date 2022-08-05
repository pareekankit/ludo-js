    var mainpath=[];
var dice=0;
var path=[
    {
        name:"rp",
        route: [40,41,42,43,44,45,46,47,48,49,50,51,0,1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 35, 36, 37, 38,67,68,69,70,71,72]
    },
    {
        name:"gp",
        route : [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 
            35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51, 52, 53, 54, 55, 56,72] 
    },
    {
        name:"yp",
        route: [14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45,
            46, 47, 48, 49,50, 51,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12,57,58,59,60,61,72]  
    },
    {
        name:"bp",
        route : [27, 28, 29,30, 31, 32, 33, 34,35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51,0,
            1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25,62,63,64,65,66,72] 
    }

] 
var id=[50,51,0,49,52,1,48,53,2,47,54,3,46,55,4,45,56,5,39,40,41,42, 43, 44,6, 7, 8, 9,10, 11,-69,38,67,68,69,70,71,72,61
    ,60,59,58,57,12,-11,37,36,35,34,33,32,18,17,16,15,14,13,-13,31,66,19,30,65,20,29,64,21,28,63,22,27,62,23,26,25,24];
   
var playersData = [
    {
        id: 1,
        name: 'itachi',
        color: "Red",
        tokenData: [
            {
                id: 1, 
                name: 'Red-1',
                position: -1,
                img:`<img src="doodles/Red.png" class="redp" id="red1" onclick="updateposition('Red-1','Red')"></img>`
            },
            {
                id: 2,
                name: 'Red-2',
                position: -2,
                img:`<img src="doodles/Red.png" class="redp" id="red2" onclick="updateposition('Red-2','Red')"></img>`
            },
            {
                id: 3,
                name: 'Red-3',
                position: -3,
                img:`<img src="doodles/Red.png" class="redp" id="red3" onclick="updateposition('Red-3','Red')"></img>`
            },
            {
                id: 4,
                name: 'Red-4',
                position: -4,
                img:`<img src="doodles/Red.png" class="redp" id="red4" onclick="updateposition('Red-4','Red')"></img>`
            }
        ]
    },
    {
        id: 2,
        name: 'sasuke',
        color: "Green",
        tokenData: [
            {
                id: 1,
                name: 'Green-1',
                position: -1,
                img:`<img src="doodles/Green.png" class="greenp" id="green1" onclick="updateposition('Green-1','Green')"></img>`
            },
            {
                id: 2,
                name: 'Green-2',
                position: -1,
                img:`<img src="doodles/Green.png" class="greenp" id="green2" onclick="updateposition('Green-2','Green')"> </img>`
            },
            {
                id: 3,
                name: 'Green-3',
                position: -1,
                img:`<img src="doodles/Green.png" class="greenp" id="green3" onclick="updateposition('Green-3','Green')"> </img>`
            },
            {
                id: 4,
                name: 'Green-4',
                position: -1,
                img:`<img src="doodles/Green.png" class="greenp" id="green4" onclick="updateposition('Green-4','Green')"></img>`
            }
        ]
    },
    {
        id: 3,
        name: 'Naruto',
        color: "Yellow",
        tokenData: [
            {
                id: 1,
                name: 'Yellow-1',
               position: -1,
                img:`<<img src="doodles/Yellow.png" class="yellowp" id="yellow1" onclick="updateposition('Yellow-1','Yellow')"></img>`
               
            },
            {
                id: 2,
                name: 'Yellow-2',
               position: -1,
                img:`<img src="doodles/Yellow.png" class="yellowp" id="yellow2" onclick="updateposition('Yellow-2','Yellow')"></img>`
            },
            {
                id: 3,
                name: 'Yellow-3',
               position: -1,
                img:`<img src="doodles/Yellow.png" class="yellowp" id="yellow3" onclick="updateposition('Yellow-3','Yellow')"></img>`
            },
            {
                id: 4,
                name: 'Yellow-4',
                position: -1,
                img:`<img src="doodles/Yellow.png" class="yellowp" id="yellow4" onclick="updateposition('Yellow-4','Yellow')"></img>`
            }
        ]
    },
    {
        id: 4,
        name: 'kakashi',
        color: "Blue",
        tokenData: [
            {
                id: 1,
                name: 'Blue-1',
                position: -1,
                img:`<img src="doodles/Blue.png" class="bluep" id="blue1" onclick="updateposition('Blue-1','Blue')"></img>`
            },
            {
                id: 2,
                name: 'Blue-2',
                position: -1,
                img:`<img src="doodles/Blue.png" class="bluep" id="blue2" onclick="updateposition('Blue-2','Blue')"></img>`
            },
            {
                id: 3,
                name: 'Blue-3',
                position: -1,
                img:`<img src="doodles/Blue.png" class="bluep" id="blue3" onclick="updateposition('Blue-3','Blue')"></img>`
            },
            {
                id: 4,
                name: 'Blue-4',
                position: -1,
                img:`<img src="doodles/Blue.png" class="bluep" id="blue4" onclick="updateposition('Blue-4','Blue')"></img>`
            }
        ]
    },
    ]

    function start(){
        document.getElementById("main").classList.remove('d-none');
        document.getElementById("start").classList.add('d-none'); 
    }

    function turn(){
        dice=null;
      }
    
    function small(){
      document.getElementById("main").classList.remove('d-none');
    }
    
    function Dice(){
        dice=Math.floor(Math.random() * 6)+1;
        var imgg=document.getElementById("img");
        imgg.setAttribute("src",`${dice}.jpg`);
        console.log(dice);
        return dice;
 }

    function anim(){
    setTimeout(Dice,1000);
    var imgg=document.getElementById("img");
    imgg.setAttribute("src","dice1.gif");
    }

    // function hide(img){
    // if(dice==6){
    //     console.log(img);
    //     document.getElementById(img).remove();
    // }
    // }
    function dice_sound() {
        var dc = document.getElementById("dc");
        dc.play();
    }
    
    function cut(index){
        var value=mainpath[index]
        for(let i=0;i<playersData.length;i++){
            for(let j=0;j<playersData[i].tokenData.length;j++){
                if(playersData[i].tokenData[j].name==value){
                    playersData[i].tokenData[j].position=-1;
            }
        }
    }
}
    
let tkn = [document.createElement('img')];
     function updateposition(pos,color){
        console.log(pos);
        console.log(color);
        for(let i=0;i<playersData.length;i++){
            for(let j=0;j<playersData[i].tokenData.length;j++){
                    if(playersData[i].tokenData[j].name==pos){
                        if(playersData[i].tokenData[j].position>0){
                            if(dice==null){
                                alert("please shuffle dice");
                            }
                            let temp;
                            temp=path[i].route.indexOf(playersData[i].tokenData[j].position);
                            temp=temp+dice;
                            let index = playersData[i].tokenData[j].position=path[i].route[temp];
                            console.log("if");
                            upadtMainPathValueAtindex(index,pos,color);
                            turn();
                     }
                    else{
                        if(dice==null){
                            alert("please shuffle dice");
                        }
                        if(dice==6){
                            console.log("else");
                        let temp;
                        mainpath[path[i].route[0]]=pos;
                        playersData[i].tokenData[j].position=mainpath.indexOf(pos);

                        console.log(`${playersData[i].tokenData[j].name},${playersData[i].color}`)
                        console.log(mainpath);
                        // tkn.push(src = "../doodles/" + playersData[i].color +" " +"class='onboard'"  + "id="+pos+".png");
                
                        // console.log(tkn);
                        // for(i=0;i<tkn.length;i++){
                        //     if(tkn==pos){
                        //         tkn[i].addEventListener('click', () => {
                        //             updateposition(pos,color);
                        //           });
                        //     }
                           
                        // }
                         document.getElementById(path[i].route[0]).innerHTML+=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} 
                         onclick=updateposition(${playersData[i].tokenData[j].name},${playersData[i].color}) class="onboard"></img>`
                        //=`<img src="../doodles/${playersData[i].color}.png" id="${playersData[i].tokenData[j].name}"  class="onboard"></img>`
                       
                        turn();
                        }
                        else{
                            console.log("else2");
                            turn();
                        }
                    }
                }
            }
        }   
    }

    function initMainPath(len){
        mainpath.length=(+len);
    }

    function upadtMainPathValueAtindex(index,value,color){
        var valueAtIndex='';
              valueAtIndex=mainpath[index];
            if (valueAtIndex) {
                  if(valueAtIndex.includes(color)){
                    remove_elements(value); 
                    mainpath[index] +=`,${value}`;
                    for(i=0;i<playersData.length;i++){
                        if(playersData[i].color==color){ 
                            document.getElementById(index).innerHTML+=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} 
                            onclick=updateposition(${playersData[i].tokenData[j].name},${playersData[i].color}) class="onboard"></img>`
                        };
                    }      
             }
                  else{
                    if(index==35||index==40||index==48||index==1||index==9||index==14||index==22||index==27){
                        remove_elements(value);
                        mainpath[index] +=`,${value}`;
                        for(i=0;i<playersData.length;i++){
                      if(playersData[i].color==color){
                        document.getElementById(index).innerHTML+=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} 
                        onclick=updateposition(${playersData[i].tokenData[j].name},${playersData[i].color}) class="onboard"></img>`
                      }
                   }
                 }
                    else{
                        remove_elements(value);
                        cut(index);
                        mainpath[index]=value;
                        for(i=0;i<playersData.length;i++){
                          if(playersData[i].color==color){
                              document.getElementById(index).innerHTML=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} 
                              onclick= updateposition(${playersData[i].tokenData[j].name},${playersData[i].color}) class="onboard"></img>`
                          };
                      }
                  }
                }
                  }
                else {  
                            remove_elements(value);
                            mainpath[index]=value;
                            for(let i=0;i<playersData.length;i++){
                                for(let j=0;j<4;j++){
                                if(playersData[i].color==color){
                                    document.getElementById(index).innerHTML=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} 
                                    onclick= updateposition(${playersData[i].tokenData[j].name},${playersData[i].color}) class="onboard"></img>`
                                }
                                }
                                
                            }
                      }
                      console.log(mainpath);
      
    }

    function remove_elements(val){
        var indexx=mainpath.findIndex(el=>  {
              if(el)
              return el.includes(val)
          });
        if (indexx > -1) {
          let ov = mainpath[indexx].split(",");
          if(ov.length == 1 ) {
            ov = ""

          } else {
            var i = ov.findIndex(el=>el==val);
            ov.splice(i,1);
            ov = ov.join();
          }

          mainpath[indexx]= ov;
          document.getElementById(indexx).innerHTML= ov;
          console.log("ov")
        }

         return indexx;
      }


      function initplayerHouse(){
        var temp=[];
        var board=document.createElement('div');
        board.classList.add("ludoboard");
        document.body.appendChild(board);
        for(i=0;i<playersData.length;i++){
            var maindiv=document.createElement('div');
            board.appendChild(maindiv);
            var div=[];
            maindiv.classList.add(playersData[i].color);
            var down=document.createElement('div');
            for( let j=0;j<4;j++){
                div.push(document.createElement('div'));
                div[j].classList.add('pawn',playersData[0].color+'p',)
                playersData[i].tokenData.forEach(token =>{
                })
                div[j].innerHTML=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} 
                onclick=updateposition"${playersData[i].tokenData[j].name,playersData[i].color})" class="place"></img>`
                temp.push(playersData[i].tokenData[j].name);
                }
            maindiv.appendChild(div[0]);
            maindiv.appendChild(div[1]);
            maindiv.appendChild(down);
            down.appendChild(div[2]);
            down.appendChild(div[3]);                
        }
        for(k=0;k<84;k++){
            var divv=document.createElement('div');
            divv.classList.add("step");
            divv.id=id[k];
            if(divv.id==72){
                divv.classList.add("centerbox");
            }
            if((divv.id==1)||(divv.id==52)||(divv.id==53)||(divv.id==54)||(divv.id==55)||(divv.id==56)){
                divv.classList.add("greenbc");
            } 
            if((divv.id==40)||(divv.id==67)||(divv.id==68)||(divv.id==69)||(divv.id==70)||(divv.id==71)){
                divv.classList.add("redbc");
            } 
            if((divv.id==27)||(divv.id==62)||(divv.id==63)||(divv.id==64)||(divv.id==65)||(divv.id==66)){
                divv.classList.add("bluebc");
            }  
            if((divv.id==14)||(divv.id==57)||(divv.id==58)||(divv.id==59)||(divv.id==60)||(divv.id==61)){
                divv.classList.add("yellowbc");
            }     
            board.appendChild(divv);       
      }
      
        console.log(temp);
                for( let k=0;k<temp.length;k++){
                    document.getElementById(temp[k]).addEventListener('click',()=>{playerTokentapped(temp[k])});
                 }
                 var dicee=document.createElement('div');
                 dicee.innerHTML=` <img src="1.jpg" class="img" id="img" onclick="anim();"></img>`
                 document.body.appendChild(dicee);
            } 
            function playerTokentapped(token){
                let tem;
                tem=token.split("-");
                tem.splice(1,1);
                tem=tem.join("");
                console.log(token);
                updateposition(token,tem);
            }
    initplayerHouse();
    initMainPath(72);