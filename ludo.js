var mainpath=[];
var dice;
var tkoenId=[];
var id=[50,51,0,49,52,1,48,53,2,47,54,3,46,55,4,48,56,5,39,40,41,42,43,44,6,7,8,9,10,11,38,67,68,69,70,71,72,61,60
    ,59,58,57,12,37,36,35,34,33,32,18,17,16,15,14,13,31,66,19,30,65,20,29,64,21,28,63,22,27,62,23,26,25,24]; 
var path=[
    {
        name:"Red",
        path:[40,41,42,43,44,45,46,47,48,49,50,51,0,1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 35, 36, 37, 38,67,68,69,70,71,72]
    },
    {
        name:"Green",
        path:[1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 
            35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51, 52, 53, 54, 55, 56,72]
    },
    {
        name:"Yellow",
        path:[14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45,
            46, 47, 48, 49,50, 51,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12,57,58,59,60,61,72] 
    },
    {
        name:"Blue",
        path:[27, 28, 29,30, 31, 32, 33, 34,35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50, 51,0,
            1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25,62,63,64,65,66,72]
       
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
                    name:'Red-1',
                    position: -1,
                    img:` <div><img src="doodles/Red.png" class="place" id=Red-1" onclick="updateposition('Red-1','red')"/></div>`
                },
                {
                    id: 2,
                    name:'Red-2',
                    position: -1,
                    img:`<div><img src="doodles/Red.png" class="place" id="Red-2" onclick="updateposition('Red-2','red')"/></div>`
                },
                {
                    id: 3,
                    name:'Red-3',
                    position: -1,
                    img:`<div><img src="doodles/Red.png" class="place" id="Red-3" onclick="updateposition('Red-3','red')"/></div>`
                },
                {
                    id: 4,
                    name:'Red-4',
                    position: -1,
                    img:`<div><img src="doodles/Red.png" class="place" id="Red-4" onclick="updateposition('Red-4','red')"/></div>`
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
                    img:` <div><img src="doodles/Green.png" class="place" id=Green-1" onclick="updateposition('Green-1','Green')"/></div>`
                     },
                {
                    id: 2,
                    name: 'Green-2',
                    position: -1,
                    img:` <div><img src="doodles/Green.png" class="place" id=Green-2" onclick="updateposition('Green-2','Green')"/></div>`
                     },
                {
                    id: 3,
                    name: 'Green-3',
                    position: -1,
                    img:` <div><img src="doodles/Green.png" class="place" id=Green-3" onclick="updateposition('Green-3','Green')"/></div>`
                     },
                {
                    id: 4,
                    name: 'Green-4',
                    position: -1,
                    img:` <div><img src="doodles/Green.png" class="place" id=Green-2" onclick="updateposition('Green-4','Green')"/></div>`
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
                   
                },
                {
                    id: 2,
                    name: 'Yellow-2',
                   position: -1,
                },
                {
                    id: 3,
                    name: 'Yellow-3',
                   position: -1,
                },
                {
                    id: 4,
                    name: 'Yellow-4',
                   position: -1,
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
                },
                {
                    id: 2,
                    name: 'Blue-2',
                    position: -1,
                },
                {
                    id: 3,
                    name: 'Blue-3',
                    position: -1,
                },
                {
                    id: 4,
                    name: 'Blue-4',
                    position: -1,
                }
            ]
        },
        ]

        function turn(){
            dice=null;
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
                for(let j=0;j<playersData[i].tokenData.length;j++){
                        if(playersData[i].tokenData[j].name==pos){
                                if( playersData[i].tokenData[j].position>=0){
                                    let index=path[i].path.indexOf(playersData[i].tokenData[j].position);
                                    console.log(path[i].path);
                                    index=index+dice;
                                    playersData[i].tokenData[j].position=path[i].path[index];
                                    index=path[i].path[index]
                                    console.log("position",playersData[i].tokenData[j].position)
                                    upadtMainPathvalueAtindex(index,pos,playersData[i].color);
                                    turn();
                            }
                           
                        else{
                            if(dice==6){
                                playersData[i].tokenData[j].position=path[i].path[0];
                                if( mainpath[path[i].path[0]]){
                                    console.log("if");
                                    mainpath[path[i].path[0]] +=`,${pos}`;
                                    document.getElementById(path[i].path[0]).innerHTML+=playersData[i].tokenData[j].img
                                }
                                else{
                                    console.log("else");
                                    mainpath[path[i].path[0]]=pos;
                                    let imgg=playersData[i].tokenData[j].img;
                                    document.getElementById(path[i].path[0]).innerHTML=imgg;
                                }
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

                
        function upadtMainPathvalueAtindex(index,value,color){
            console.log(color);
            var valueAtIndex;
                    valueAtIndex=mainpath[index];
                if (valueAtIndex) {
                        if(valueAtIndex.includes(color)){
                            console.log("add");
                            remove_elements(value)
                            mainpath[index] +=`,${value}`;

                            (mainpath[index].split(',')).forEach(element => {
                                debugger;
                                let img = document.createElement('img');
                                img.src = '/doodles/' + element.split('-')[0] + '.png';
                                img.id = element;
                                img.classList.add('place');
        
                                img.addEventListener('click', () => {
                                        let currentPlayer = playersData.find(e => { 
                                                                                    return (element).split('-')[0] == e.color
                                                                                    });
        
                                let currentToken = currentPlayer.tokenData.find(e => e.name == element);
                                console.log( currentToken.name, currentPlayer.color)
                                    updateposition( currentToken.name, currentPlayer.color)
                                })
                                let div = document.createElement('div');
                                div.appendChild(img);
                                document.getElementById(index).appendChild(div);
        
                            });
                        }
                        else{
                            remove_elements(value);
                        if(index==35||index==40||index==48||index==1||index==9||index==14||index==22||index==27){
                            (mainpath[index].split(',')).forEach(element => {
                                debugger;
                                let img = document.createElement('img');
                                img.src = '/doodles/' + element.split('-')[0] + '.png';
                                img.id = element;
                                img.classList.add('place');
        
                                img.addEventListener('click', () => {
                                        let currentPlayer = playersData.find(e => { 
                                                                                    return (element).split('-')[0] == e.color
                                                                                    });
        
                                let currentToken = currentPlayer.tokenData.find(e => e.name == element);
                                console.log( currentToken.name, currentPlayer.color)
                                    updateposition( currentToken.name, currentPlayer.color)
                                })
                                let div = document.createElement('div');
                                div.appendChild(img);
                                document.getElementById(index).appendChild(div);
        
                            });
                        }
                        else{
                            (mainpath[index].split(',')).forEach(element => {
                                debugger;
                                let img = document.createElement('img');
                                img.src = '/doodles/' + element.split('-')[0] + '.png';
                                img.id = element;
                                img.classList.add('place');
        
                                img.addEventListener('click', () => {
                                        let currentPlayer = playersData.find(e => { 
                                                                                    return (element).split('-')[0] == e.color
                                                                                    });
        
                                let currentToken = currentPlayer.tokenData.find(e => e.name == element);
                                console.log( currentToken.name, currentPlayer.color)
                                    updateposition( currentToken.name, currentPlayer.color)
                                })
                                let div = document.createElement('div');
                                div.appendChild(img);
                                document.getElementById(index).appendChild(div);
        
                            });
                        }
                    }
                        }
                    else {      
                                remove_elements(value);
                                mainpath[index]=value;
                                (mainpath[index].split(',')).forEach(element => {
                                    debugger;
                                    let img = document.createElement('img');
                                    img.src = '/doodles/' + element.split('-')[0] + '.png';
                                    img.id = element;
                                    img.classList.add('place');
            
                                    img.addEventListener('click', () => {
                                            let currentPlayer = playersData.find(e => { 
                                                                                        return (element).split('-')[0] == e.color
                                                                                        });
            
                                    let currentToken = currentPlayer.tokenData.find(e => e.name == element);
                                    console.log( currentToken.name, currentPlayer.color)
                                        updateposition( currentToken.name, currentPlayer.color)
                                    })
                                    let div = document.createElement('div');
                                    div.appendChild(img);
                                    document.getElementById(index).appendChild(div);
            
                                });
                            }  
                        }

            function remove_elements(value){
                var indexx=mainpath.findIndex(el=>  {
                        if(el)
                        return el.includes(value)
                    });
                if (indexx > -1) {
                    var ov = mainpath[indexx].split(",");
                    if(ov.length == 1 ) {
                    ov = ""

                    } else {
                    var i = ov.findIndex(el=>el==value);
                    ov.splice(i,1);
                    ov = ov.join();
                    }
        
                    console.log("ov",ov);

                    mainpath[indexx]= ov;
                    ov=ov.split(",");
                    // ov=ov.replace(" ","");
                    console.log("ov",ov);

                    document.getElementById(indexx).innerHTML = '';
                    if(ov==''){
                        document.getElementById(indexx).innerHTML = '';  
                    }
                    else{
                        ov.forEach(element => {
                            let img = document.createElement('img');
                            img.src = '/doodles/' + element.split('-')[0] + '.png';
                            img.id = element;
                            img.classList.add('place');
    
                            img.addEventListener('click', () => {
                                    let currentPlayer = playersData.find(e => { 
                                                                                return (element).split('-')[0] == e.color
                                                                                });
    
                            let currentToken = currentPlayer.tokenData.find(e => e.name == element);
                            console.log( currentToken.name, currentPlayer.color)
                                updateposition( currentToken.name, currentPlayer.color)
                            }) 
                            let div = document.createElement('div');
                            div.appendChild(img);
                            document.getElementById(indexx).appendChild(div);
    
                        });
                   
                    console.log(ov);  
                    }
                       
                }
                    return indexx;
                }
               
            function design(){
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
                        let img=document.createElement('img');
                        img.src=`doodles/${playersData[i].color}.png`;
                        console.log(playersData[i].color)
                        img.id=playersData[i].tokenData[j].name;
                        div1[j].id=playersData[i].color+"Home"+j;
                        div1[j].appendChild(img);
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
                img.innerHTML=`<img src="doodles/1.jpg" id='img' class='dice' onclick='Dice(),anim()'/>`
                maindiv.appendChild(img);
                for( let k=0;k<tkoenId.length;k++){
                    document.getElementById(tkoenId[k]).addEventListener('click',()=>{playerTokentapped(tkoenId[k])});
                }
            }
            function playerTokentapped(token,imgid){
                let tem;
                tem=token.split("-");
                tem.splice(1,1);
                tem=tem.join("");
                console.log(token);
                updateposition(token,tem);
            }
   
 
design();