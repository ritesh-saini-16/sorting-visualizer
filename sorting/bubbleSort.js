async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            // pink gradient
            ele[j].style.background = 'linear-gradient(to bottom, #ff7979, #e74c3c)';
            ele[j+1].style.background = 'linear-gradient(to bottom, #ff7979, #e74c3c)';
        }
        //green gradient
        ele[ele.length-1-i].style.background = 'linear-gradient(to bottom, #2ecc75, #27ae60)';
    }
    console.log("bubble sort completed!");
    ele[0].style.background = 'linear-gradient(to bottom, #2ecc75, #27ae60)';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});