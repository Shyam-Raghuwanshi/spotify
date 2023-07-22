console.log('this is script.js by shyam ');

// initialize the variable
let songIndex = 0;
let audoElement = new Audio('song1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myprogessbar = document.getElementById('myprogessbar');
let gif = document.getElementById('gif')
let container = Array.from(document.getElementsByClassName('container'))
// let bottom = Array.from(document.getElementsByClassName('bottom'))
let songitemplay = Array.from(document.getElementsByClassName('songitemplay'));
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let bottonsongname = document.getElementById('bottonsongname')
let change = document.getElementById('change')
let body = document.getElementById('body')

let song = [
    {songName: 'slameesk mare jan kabol kar lo', filePath: 'song1.mp3', coverPath: '1.jpg'},
    {songName: 'shyam ke jay ho in the world', filePath: 'song2.mp3', coverPath: 'dance.jpg'},
    {songName: 'mere mahaboob kayamat hoge', filePath: 'song3.mp3', coverPath: '5.jpg'},
    {songName: 'yad tere ayege galeyoo me', filePath: 'song4.mp3', coverPath: '6.jpg'},
    {songName: 'abhi jinda hu to jilene do', filePath: 'song5.mp3', coverPath: '7.jpg'},
    {songName: 'kon kahata hai ke bhagban hote nahi', filePath: 'song6.mp3', coverPath: '8.jpg'},
    {songName: 'leke kale kale car darleing', filePath: 'song7.mp3', coverPath: '9.jpg'}
    
]

// Array.from(container.forEach((element)=>{
//     console.log(element, i);
//     element.getElementsByTagName('img')[0].src = song.coverPath
// })
container.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = song[i].coverPath
    element.getElementsByTagName('span')[0].innerText = song[i].songName
    // element.getElementsByClassName('songname')[0].innerText = song[i].songName


})

// play or pause handle 
masterPlay.addEventListener('click', ()=>{
    if(audoElement.paused || audoElement.currentTime<=0){
        audoElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }

    else{
        audoElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }

})

// listen to evetns
audoElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audoElement.currentTime/audoElement.duration)*100);
    myprogessbar.value = progress
    if (progress === 100){
        masterPlay.classList.add('fa-play-circle');
        progress = 0;
    }
})

myprogessbar.addEventListener('change', ()=>{
    audoElement.currentTime =  (myprogessbar.value * audoElement.duration)/100
    // console.log(`audoelement.currenttime${audoElement.currentTime} = myprogessbar.value ${myprogessbar.value} * audioelement.duration ${audoElement.duration}/100`);
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        // console.log(element);
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}


songitemplay.forEach((element)=>{
    // console.log(element);
    element.addEventListener('click', (e)=>{
        makeAllPlay()
        // bottonsongname.innerText = song[songIndex].songName
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audoElement.src = `song${songIndex}.mp3`;
        // console.log(songIndex);
        audoElement.currentTime = 0
        audoElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

        })
    })


next.addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 1;
        // console.log('this is the next if index' + songIndex);
        // audoElement.src = `song${songIndex}.mp3`;
    }
    else{        
        songIndex += 1;
        audoElement.src = `song${songIndex}.mp3`;
        // bottonsongname.innerText = song[songIndex].songName
        // console.log('this is the next else index' + songIndex);
        
    }
    
    if(songIndex==7){
        songIndex = 7
        // console.log(songIndex);
        // console.log('shyam in if');
        // bottonsongname.innerText = song[songIndexs].songName
    }
    audoElement.src = `song${songIndex}.mp3`;
    // console.log(songIndex);
    audoElement.currentTime = 0;
    audoElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // bottom.forEach((element, i)=>{
    //     console.log(element);
    //     element.getElementsByTagName('span')[0].innerText = song[i].songName
    // })
    
})
let call = ()=>{
    if(songIndex==0){
        // songIndex = 1;
        // console.log('this is the previous if index' + songIndex);
        audoElement.src = `song${songIndex}.mp3`;
    }
    else{
        songIndex -= 1;
        // console.log('this is the previous else index' + songIndex);
        audoElement.src = `song${songIndex}.mp3`;
    }
}
previous.addEventListener('click', ()=>{
    
    call()
    if(songIndex==0){
        songIndex = 1
        // console.log('zero 0')
        audoElement.src = `song${songIndex}.mp3`;
        bottonsongname.innerText = song[songIndex].songName
    }
    // console.log('this is outer consle of if and else' +songIndex);
    bottonsongname.innerText = song[songIndex].songName
    audoElement.currentTime = 0;
    audoElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // bottom.forEach((element, i)=>{
    //     console.log(element);
    //     element.getElementsByTagName('span')[0].innerText = song[i].songName
    //     console.log();
    // })

})


// changing the backgound
change.addEventListener('click', ()=>{
    url = '1.jpg'
    console.log('change');
    body.style.backgroundClip = 'red'
})
