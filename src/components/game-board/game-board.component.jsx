import React from 'react';

import Letter from '../letter/letter.component'

import "./game-board.css"

const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].sort(() => Math.random() - 0.5);
let words = ["ABCDEFIK","REN","HU","OLAK","TY","UGAUGA","BOB","YUH","HAHAHA","HEHEHE"];


function PlaceInLineWord(word2array,lnumb,finalArray, usedWords,positionsOccupied){
    let lettNumb = word2array.length;
    console.log(word2array);
    let cantcontinue=false;
    let randPos;
    let found1 = false;
    let found2 = false;
    let foundPos;
    let linha = Math.sqrt(lnumb);
    let attempts =0;

    while(!found1 || !found2){
        attempts=attempts+1;
        if(attempts>lnumb){
            return;
        }
        cantcontinue=false;
        found1 =false;
        found2 = false;

        randPos = Math.floor(Math.random()*(lnumb-1));
         /*coloca no inicio da uma linha qualquer*/
        for(let k = 0; k<positionsOccupied.length;k++){
            for(let pos=randPos; pos<randPos+word2array.length;pos++){
                if(positionsOccupied[k]==pos){
                    cantcontinue = true;
                    continue;
                }
            }
            
        }

        if(!cantcontinue && Number.isInteger(randPos/linha)){
             found1 = true;
             foundPos = randPos;
             while (!found2){
                 randPos = Math.floor(Math.random()*(linha-1));
                 if((randPos+word2array.length)<=linha){
                     found2 = true;
                     foundPos = foundPos + randPos;

                     randPos = foundPos;
                     console.log(randPos);
                     let j=0;  
                     for (let i = randPos; i < randPos+word2array.length; i++) {
                       finalArray[i] = word2array[j];
                       positionsOccupied.push(i);
                       console.log("final: "+i+finalArray[i]+" || palavra "+j+word2array[j] );
                       j++;
                     }
                     usedWords.push(word2array.join(''));


                 }
             }
         }
    }

    

    
    
    //positionsOccupied.push({randomPos: randPos,noLett: lettNumb});
    //positionsOccupied.push({randPos,lettNumb});
    console.log(positionsOccupied);
}

function PlaceInColumnWord(word2array,lnumb,finalArray, usedWords,positionsOccupied){
    let lettNumb = word2array.length;
    console.log(word2array);
    let cantcontinue=false;
    let randPos;
    let found1 = false;
    let found2 = false;
    let foundPos;
    let linha = Math.sqrt(lnumb);
    let attempts =0;
    
    while(!found1 || !found2){
        attempts=attempts+1;
        if(attempts>lnumb){
            return;
        }
        cantcontinue=false;
        found1 =false;
        found2 = false;

        randPos = Math.floor(Math.random()*(lnumb-1));
         /*coloca no inicio da uma linha qualquer*/
        
         if(randPos+linha*(word2array.length) > lnumb){
            continue;
        }
        for(let k = 0; k<positionsOccupied.length;k++){
            for(let pos=randPos; pos<randPos+linha*(word2array.length);pos=pos+linha){
                if(positionsOccupied[k]==pos){
                    cantcontinue = true;
                    continue;
                }
            }
            
        }       

        if(!cantcontinue && Number.isInteger(randPos/linha)){
             found1 = true;
             foundPos = randPos;
             while (!found2) {
               randPos = Math.floor(Math.random() * (linha - 1));
               if (randPos + word2array.length <= linha) {
                 found2 = true;
                 foundPos = foundPos + randPos;
                 randPos = foundPos;
                 console.log(randPos);
                 let j = 0;
                 for (let i = randPos;i < randPos + linha * word2array.length;i = i + linha) {
                   finalArray[i] = word2array[j];
                   positionsOccupied.push(i);
                   console.log(
                     "final: " +
                       i +
                       finalArray[i] +
                       " || palavra " +
                       j +
                       word2array[j]
                   );
                   j++;
                    }
                    usedWords.push(word2array.join(''));
             }
            
             }

             //positionsOccupied.push({randomPos: randPos,noLett: lettNumb});
             //positionsOccupied.push({randPos,lettNumb});
             console.log(positionsOccupied);
         }
    }

    
}

function checkUsedWord(word, usedWords){
    for(let i=0;i<usedWords.length;i++){
        if(word==usedWords[i]){
            return true;
        }
    }
    return false;

}

function getRandomWord(lnumb, usedWords){
    let randomword;
    let passLineCheck=false;
    while(!passLineCheck){
        randomword=words[Math.floor(Math.random()*words.length)];
        if(checkUsedWord(randomword, usedWords)){
            continue;
        }
        if(randomword.length<=Math.sqrt(lnumb)){
            passLineCheck=true;
        }
    }

    return randomword;
}

function MakeRandomBoard(lnumb,finalArray){
    for(let i=0; i<lnumb ; i++){
        finalArray.push(abc[Math.floor(Math.random()*(abc.length-1))]);
}
}

function GameBoard({lnumb}){
    let finalArray=[];
    let randomword;

    let positionsOccupied = [];
    let usedWords= [];

    let word2array;
    
    let inverse;

    MakeRandomBoard(lnumb,finalArray);

    for(let c=0; c<(Math.floor((Math.sqrt(lnumb))/2));c++){
        
        
        randomword = getRandomWord(lnumb, usedWords);
        word2array = Array.from(randomword);
        inverse = Math.floor(Math.random()*99);
        if(inverse<50){
            word2array.reverse();
        }
        inverse = Math.floor(Math.random()*99);
        if(inverse<50){
            PlaceInLineWord(word2array,lnumb,finalArray, usedWords,positionsOccupied);
        }else{
            PlaceInColumnWord(word2array,lnumb,finalArray, usedWords,positionsOccupied);
        }
        
        
    }
    
    /*PlaceInLineWord(word2array,lnumb,finalArray,positionsOccupied);
    word2array.reverse();
    PlaceInLineWord(word2array,lnumb,finalArray,positionsOccupied);*/
    /*PlaceInColumnWord(word2array,lnumb,finalArray,positionsOccupied);     WITH BUGS*/
    for(let counter=0; counter<usedWords.length;counter++){
        console.log(usedWords[counter]);
    }
    return (
      <div>
        <div
          className="board"
          style={{
            gridTemplateColumns: "repeat(" + Math.sqrt(lnumb) + ",1fr)",
            gridTemplateRows: "repeat(" + Math.sqrt(lnumb) + ",1fr)",
          }}
        >
          {finalArray.map((item) => (
            <Letter item={item} />
          ))}
          <p></p>
        </div>
        <div>
          <p>
            Used Words:
            {usedWords.map((item) => " ["+item + "] ")}{" "}
          </p>
        </div>
      </div>
    );
}

export default GameBoard;