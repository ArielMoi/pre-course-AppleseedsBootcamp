function sevenBoom(){
    for (num of [...Array(101).keys()]){
        if (num % 7 == 0 || String(num).includes('7')){
            console.log('BOOM!');
        }else {
            console.log(num);
        }
    }
}

sevenBoom();