var mainpath=[];
var dice;
var tkoenId=[];
var id=[50,51,0,49,52,1,48,53,2,47,54,3,46,55,4,48,56,5,39,40,41,42,43,44,6,7,8,9,10,11,38,67,68,69,70,71,72,61,60
    ,59,58,57,12,37,36,35,34,33,32,18,17,16,15,14,13,31,66,19,30,65,20,29,64,21,28,63,22,27,62,23,26,25,24];

var Red = [40,41,42,43,44,45,46,47,48,49,50,51,0,1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 35, 36, 37, 38,67,68,69,70,71,72];
    
var Green = [0,1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 
          35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51, 52, 53, 54, 55, 56,72]; 
    
var Blue = [27, 28, 29,30, 31, 32, 33, 34,35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51,0,
          1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25,62,63,64,65,66,72]; 
    
var Yellow = [14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45,
          46, 47, 48, 49,50, 51,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12,57,58,59,60,61,72]; 

var path=[
    {
        name:"Red"
    }
]
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
                    img:`<img src="../doodles/Red.png" class="pawn" id="Red-1" ></img>`
                },
                {
                    id: 2,
                    name: 'Red-2',
                    position: -1,
                    img:`<img src="../doodles/Red.png" id="Red-2" ></img>`
                },
                {
                    id: 3,
                    name: 'Red-3',
                    position: -1,
                    img:`<img src="../doodles/Red.png" id="Red-3" ></img>`
                },
                {
                    id: 4,
                    name: 'Red-4',
                    position: -1,
                    img:`<img src="../doodles/Red.png" id="Red-4" ></img>`
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
                    img:`<img src="../doodles/Green.png" id="Green1" ></img>`
                },
                {
                    id: 2,
                    name: 'Green-2',
                    position: -1,
                    img:`<img src="../doodles/Green.png" id="Green2" ></img>`
                },
                {
                    id: 3,
                    name: 'Green-3',
                    position: -1,
                    img:`<img src="../doodles/Green.png" id="Green3" ></img>`
                },
                {
                    id: 4,
                    name: 'Green-4',
                    position: -1,
                    img:`<img src="../doodles/Green.png" id="Green4" ></img>`
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
                    img:`<img src="../doodles/Yellow.png" id="Yellow1" ></img>`
                   
                },
                {
                    id: 2,
                    name: 'Yellow-2',
                   position: -1,
                    img:`<img src="../doodles/Yellow.png" id="Yellow2" ></img>`
                },
                {
                    id: 3,
                    name: 'Yellow-3',
                   position: -1,
                    img:`<img src="../doodles/Yellow.png" id="Yellow3" ></img>`
                },
                {
                    id: 4,
                    name: 'Yellow-4',
                   position: -1,
                    img:`<img src="../doodles/Yellow.png" id="Yellow4" ></img>`
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
                    img:`<img src="../doodles/Blue.png" id="Blue1" ></img>`
                },
                {
                    id: 2,
                    name: 'Blue-2',
                    position: -1,
                    img:`<img src="../doodles/Blue.png" id="Blue2" ></img>`
                },
                {
                    id: 3,
                    name: 'Blue-3',
                    position: -1,
                    img:`<img src="../doodles/Blue.png" id="Blue3" ></img>`
                },
                {
                    id: 4,
                    name: 'Blue-4',
                    position: -1,
                    img:`<img src="../doodles/Blue.png" id="Blue4" ></img>`
                }
            ]
        },
        ]

        function turn(){
            dice=null;
            alert("shuffle dice");
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
            imgg.setAttribute("src","dice.gif");
            }

        function initmainpath(length){
            mainpath.length=(+length);
        }

        function updateposition(pos,color){
            for(let i=0;i<playersData.length;i++){
                for(let j=0;j<playersData[i].tokenData.length;j++){;
                        if(playersData[i].tokenData[j].name==pos){
                            if( playersData[i].tokenData[j].position>0){
                             let index=playersData[i].color.indexOf(playersData[i].tokenData[j].position);
                             index=index+dice;
                             playersData[i].tokenData[j].position=playersData[i].color[index];
                             upadtMainPathValueAtindex(index,pos,color);
                         }
                        else{
                            if(dice==6){
                                playersData[i].tokenData[j].position=playersData[i].color[0];
                                mainpath[playersData[i].color[0]]; 
                                debugger;
                                document.getElementById(playersData[i].color[0]).innerHTML=`<img src="../doodles/${playersData[i].color}.png" class="place"></img>`;
                                // hide("red1");
                                turn();
                                console.log("null2");
                              }
                              else{
                                turn();
                                console.log("null1");
                              }
                            }
                           }
                         }
                        }
                    }

                
        function upadtMainPathValueAtindex(index,value,color,imgid){
            var valueAtIndex='';
            console.log(color);
            debugger;
                    valueAtIndex=mainpath[index];
                    if(mainpath.includes(value)){
                    document.getElementById(mainpath.indexOf(value)).innerHTML="";
                    }
                if (valueAtIndex) {
                        if(valueAtIndex.includes(color)){
                        mainpath[index] +=`,${value}`;
                        for(i=0;i<playersData.length;i++){
                            if(playersData[i].color==color){  
                                document.getElementById(index).innerHTML+=`<img src="../doodles/${playersData[i].color}.png" class="place"></img>`;
                            };
                        }
                        
                        }
                        else{
                        if(index==35||index==40||index==48||index==1||index==9||index==14||index==22||index==27){
                            for(i=0;i<playersData.length;i++){
                            mainpath[index] +=`,${value}`;
                            if(playersData[i].color==color){
                            document.getElementById(index).innerHTML+=`<img src="../doodles/${playersData[i].color}.png" class="place"></img>`;
                            }
                          }
                        }
                        else{
                            mainpath[index]=value;
                            for(i=0;i<playersData.length;i++){
                                if(playersData[i].color==color){
                                    document.getElementById(index).innerHTML=`<img src="../doodles/${playersData[i].color}.png" class="place"></img>`;
                                };
                            }
                        }
                    }
                        }
                    else {
                                mainpath[index]=value;
                                for(i=0;i<playersData.length;i++){
                                    for(j=0;j<4;j++){
                                    if(playersData[i].color==color){
                                        document.getElementById(index).innerHTML=`<img src="../doodles/${playersData[i].color}.png" class="place"></img>`;
                                    }
                                    }
                                    
                                }
                            }  
                        }


        
function design(){
    // var img= document.createElement("img");
    var div=[];
    var step=[];
    var mainframe=document.createElement('div');
    document.body.append(mainframe);
    var maindiv=document.createElement('div');
    maindiv.classList.add("maindiv");
    mainframe.classList.add('body');
    mainframe.append(maindiv);

    for(let i=0;i<playersData.length;i++){
        div.push(document.createElement("div"));
        div[i].id=playersData[i].color;
        maindiv.appendChild(div[i]);
        div[i].classList.add(playersData[i].color);  
        var pzone=document.createElement("div");
        pzone.classList.add('playerzone');
        var div1 = [];
        for(let j=0;j<playersData.length;j++){  
            div1.push(document.createElement("div"));
            div1[j].classList.add('player');
            pzone.append(div1[j]);
            div[i].appendChild(pzone);
            div1[j].innerHTML=`<img src="../doodles/${playersData[i].color}.png" id=${playersData[i].tokenData[j].name} class="place"></img>`;
            tkoenId.push(playersData[i].tokenData[j].name);
        }
    }   
    for(i=0;i<73;i++){
        step.push(document.createElement('div'));
        step[i].classList.add('step');
        step[i].id=id[i];
        if(step[i].id==72){
            step[i].classList.add('centerbox');
        }
        if(step[i].id==1||step[i].id==52||step[i].id==53||step[i].id==54||step[i].id==55||step[i].id==56){
            step[i].classList.add('greensafe')
        }
        if(step[i].id==40||step[i].id==67||step[i].id==68||step[i].id==69||step[i].id==70||step[i].id==71){
            step[i].classList.add('redsafe')
        }
        if(step[i].id==14||step[i].id==57||step[i].id==58||step[i].id==59||step[i].id==60||step[i].id==61){
            step[i].classList.add('yellowsafe')
        }
        if(step[i].id==27||step[i].id==62||step[i].id==63||step[i].id==64||step[i].id==65||step[i].id==66){
            step[i].classList.add('bluesafe')
        }
        maindiv.appendChild(step[i]);
    }
    var img=document.createElement('div');
    img.innerHTML=`<img src="doodles/1.jpg" id='img' class='dice' onclick='Dice(),anim()'> </img>`
    maindiv.appendChild(img);
    for( let k=0;k<tkoenId.length;k++){
        document.getElementById(tkoenId[k]).addEventListener('click',()=>{playerTokentapped(tkoenId[k])});
     }
     console.log(tkoenId);
 }
   
 
design();