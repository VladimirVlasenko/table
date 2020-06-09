document.addEventListener('DOMContentLoaded', ()=> {
    // вводные данные
    var data = [
        { id: 1, name: "Name 1", value: -1 },
        { id: 2, name: "Name 21", value: 0 },
        { id: 3, name: "Name 3", value: 1 },
        { id: 4, name: "Name 2", value: 20 },
        { id: 5, name: "Name 10", value: 10 },
        { id: 6, name: "Name 11", value: -10 },
        { id: 7, name: "Name 211", value: 2 },
        { id: 8, name: "Name 31", value: 3 },
        { id: 9, name: "Name 21", value: 21 },
        { id: 10, name: "Name 102", value: 25 },
        { id: 11, name: "Name 12", value: -110 },
        { id: 12, name: "Name 212", value: 12 },
        { id: 13, name: "Name 313", value: 13 },
        { id: 14, name: "Name 214", value: 121 },
        { id: 15, name: "Name 1025", value: 15 },
        { id: 16, name: "Name 1", value: -1 },
        { id: 17, name: "Name 21", value: 0 },
        { id: 18, name: "Name 3", value: 1 },
        { id: 19, name: "Name 2", value: 20 },
        { id: 20, name: "Name 10", value: 10 },
        { id: 21, name: "Name 11", value: -10 },
        { id: 22, name: "Name 211", value: 2 },
        { id: 23, name: "Name 31", value: 3 },
        { id: 24, name: "Name 21", value: 21 },
        { id: 25, name: "Name 102", value: 25 },
        { id: 26, name: "Name 12", value: -110 },
        { id: 27, name: "Name 212", value: 12 },
        { id: 28, name: "Name 313", value: 13 },
        { id: 29, name: "Name 214", value: 121 },
        { id: 30, name: "Name 1025", value: 15 },
        { id: 31, name: "Name 1", value: -1 },
        { id: 32, name: "Name 21", value: 0 },
        { id: 33, name: "Name 3", value: 1 },
        { id: 34, name: "Name 2", value: 20 },
        { id: 35, name: "Name 10", value: 10 },
        { id: 36, name: "Name 11", value: -10 },
        { id: 37, name: "Name 211", value: 2 },
        { id: 38, name: "Name 31", value: 3 },
        { id: 39, name: "Name 21", value: 21 },
        { id: 40, name: "Name 102", value: 25 },
        { id: 41, name: "Name 12", value: -110 },
        { id: 42, name: "Name 212", value: 12 },
        { id: 43, name: "Name 313", value: 13 },
        { id: 44, name: "Name 214", value: 121 },
        { id: 45, name: "Name 1025", value: 15 },
        { id: 46, name: "Name 313", value: 13 },
        { id: 47, name: "Name 214", value: 121 },
        { id: 48, name: "Name 1025", value: 15 },
        { id: 49, name: "Name 1025", value: 15 }

    ];
    // основные переменные и константы
    const table = document.querySelector('.table');
    const button = document.querySelector('button');
    const input = document.querySelector('input');
    let lengthD = data.length;
    let numOfRows = 5;
    const inputNumOfRows = document.querySelector('#rowsNum');
    const numOfRowsButton = document.querySelector('.setRows');
    let pageNumber = Math.ceil(lengthD/numOfRows);
    const buttonWrapper = document.querySelector('.buttonWrapper');
    const arrows = document.querySelector('.arrows');

    // пишем функцию видимости кнопок переключения страниц
    let toggleVisibleButtons = function() {
        let allButtons = document.querySelectorAll('.switchPage');
        for(i=0; i<pageNumber;i++) {
            if(!allButtons[i].classList.contains('.invisibleButton')){
                allButtons[i].classList.add('invisibleButton')
            }
            if(allButtons[i].classList.contains('.leftMargin')){
                allButtons[i].classList.remove('leftMargin')
            }
            if(allButtons[i].classList.contains('.rightMargin')){
                allButtons[i].classList.remove('rightMargin')
            }
        }
        for(let i=0; i < pageNumber; i++) {
            if(allButtons[i].classList.contains('activeButton')) {
                 if(allButtons[i-2] && allButtons[i+1]) {
                    allButtons[0].classList.remove('invisibleButton');
                    allButtons[0].classList.add('rightMargin');
                    allButtons[i-2].classList.remove('invisibleButton');
                    allButtons[i-1].classList.remove('invisibleButton');
                    allButtons[i].classList.remove('invisibleButton');
                    allButtons[i+1].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.add('leftMargin');
                } else if(allButtons[i+2] && allButtons[i-1]) {
                    allButtons[0].classList.remove('invisibleButton');
                    allButtons[0].classList.add('rightMargin');
                    allButtons[i-1].classList.remove('invisibleButton');
                    allButtons[i].classList.remove('invisibleButton');
                    allButtons[i+1].classList.remove('invisibleButton');
                    allButtons[i+2].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.add('leftMargin');
                }  else if(allButtons[i+3]) {
                    allButtons[0].classList.remove('invisibleButton');
                    allButtons[0].classList.add('rightMargin');
                    allButtons[i].classList.remove('invisibleButton');
                    allButtons[i+1].classList.remove('invisibleButton');
                    allButtons[i+2].classList.remove('invisibleButton');
                    allButtons[i+3].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.add('leftMargin');
                } else if(allButtons[i-3]) {
                    allButtons[0].classList.remove('invisibleButton');
                    allButtons[0].classList.add('rightMargin');
                    allButtons[i-3].classList.remove('invisibleButton');
                    allButtons[i-2].classList.remove('invisibleButton');
                    allButtons[i-1].classList.remove('invisibleButton');
                    allButtons[i].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.remove('invisibleButton');
                    allButtons[pageNumber-1].classList.add('leftMargin');
                }

            }
        }
    }
    // пишем функцию генерации кнопок на странице
    const generateButtons = function(){

        numOfRows = inputNumOfRows.value;
        pageNumber = Math.ceil(lengthD/numOfRows);

        for(let a=0; a < pageNumber; a++) {
            let button = document.createElement('button');
            button.classList.add('switchPage');
            button.classList.add('invisibleButton');
            button.textContent = a+1;
            buttonWrapper.appendChild(button);
            if(a===0) {
                button.classList.add('activeButton');
            }
        }
        pageNumber = Math.ceil(lengthD/numOfRows);
        let visiblePages = 6;
        arrows.style.width = visiblePages*50 + 'px';
        buttonWrapper.style.width = visiblePages*35 +'px';
        table.style.height = '140px';
        toggleVisibleButtons();
        
    }
    const clearButtons = function(){
        let pageButtons = document.querySelectorAll('.switchPage');
 
        for(let i=0; i <pageButtons.length; i++) {
            pageButtons[i].remove();
        }
    }

    generateButtons();
    
    // переключаем страницы кнопками с цифрами
    buttonWrapper.addEventListener('click', (event)=>{
        if(event.target.closest('.switchPage')) {
            let a = event.target.textContent;
            let prevActive = document.querySelector('.activeButton');
            if(prevActive) {
                prevActive.classList.remove('activeButton');
            }
            event.target.classList.add('activeButton');
            clearTable();
            createTable(a-1);
            toggleVisibleButtons();
        }

    })
            // пишем функцию, задающую число строк в таблице
            let setNumOfPages = function(){
                if(inputNumOfRows.value) {
                    clearButtons();
                    generateButtons();
                    numOfRows =  parseInt(inputNumOfRows.value.match(/\d+/));
                    pageNumber = Math.ceil(lengthD/numOfRows);
                    
                    clearTable();
                    createTable(0);
                    } else {
                        numOfRows = 5;
                    }
            }
        
    const createTable = function(b) {
        
        for(let i=b*numOfRows; i < (b * numOfRows) + parseInt(numOfRows); i++ ) {

            if(data[i]) {
                let row = document.createElement('tr');
                table.appendChild(row);
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let borderR1 = document.createElement('div');
                let borderR2 = document.createElement('div');
                let borderR3 = document.createElement('div');
    
                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
    
                td1.textContent = data[i].id;
                td2.textContent = data[i].name;
                td3.textContent = data[i].value;
    
                td1.appendChild(borderR1);
                td2.appendChild(borderR2);
                td3.appendChild(borderR3);
    
                borderR1.classList.add('borderRight1');
                borderR2.classList.add('borderRight2');
                borderR3.classList.add('borderRight3');
            } else {
                let row = document.createElement('tr');
                row.style.height = '21px';
                table.appendChild(row);
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let borderR1 = document.createElement('div');
                let borderR2 = document.createElement('div');
                let borderR3 = document.createElement('div');
    
                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
    
                td1.textContent = '';
                td2.textContent = '';
                td3.textContent = '';
    
                td1.appendChild(borderR1);
                td2.appendChild(borderR2);
                td3.appendChild(borderR3);
    
                borderR1.classList.add('borderRight1');
                borderR2.classList.add('borderRight2');
                borderR3.classList.add('borderRight3');
            }


        }

        const left = document.querySelector('.left');
        const right = document.querySelector('.right');
        if(b === 0) {
            left.style.display = 'none';
        } else {
            left.style.display = 'block'
        }
        if(b === pageNumber-1) {
            right.style.display = 'none'
        } else {
            right.style.display = 'block'
        }

    }

    createTable(0);
    
// очистка текущих значений таблицы
    const clearTable = function() {
        let rows = document.querySelectorAll('tr');
        for(let i=1; i<rows.length; i++) {
            rows[i].remove();
            // let row = document.querySelector('tr');
            // row.remove();
        }

        
    }
    // Сортируем по id
    let idSort = document.querySelector('.id');
    let idSortF = function(){
        let activeButton = document.querySelector('.activeButton');
        let numActive = activeButton.textContent - 1;

        if(!idSort.classList.contains('clicked')) {
            data.sort(function(a, b){
                return a.id-b.id;
              })
            clearTable();
            createTable(numActive);
            let idSort = document.querySelector('.id');
            idSort.classList.add('clicked');

        } else {
        data.sort(function(a, b){
            return b.id-a.id;
          })
        clearTable();
        createTable(numActive);
        let idSort = document.querySelector('.id');
        idSort.classList.remove('clicked');
        }
    };
    

    // Сортируем по имени
    let nameSort = document.querySelector('.name');

    let nameSortF = function(){
        let activeButton = document.querySelector('.activeButton');
        let numActive = activeButton.textContent - 1;
        if(!nameSort.classList.contains('clicked')) {
            data.sort(function(a, b){

                return parseInt(a.name.match(/\d+/))-parseInt(b.name.match(/\d+/));

              })
            clearTable();
            createTable(numActive);
            let nameSort = document.querySelector('.name');
            nameSort.classList.add('clicked');

        } else {
        data.sort(function(a, b){
            return parseInt(b.name.match(/\d+/))-parseInt(a.name.match(/\d+/));
          })
        clearTable();
        createTable(numActive);
        let nameSort = document.querySelector('.name');
        nameSort.classList.remove('clicked');
        }
    }
    
    //  сортируем по значению
    let valueSort = document.querySelector('.value');
    let valueSortF = function(){
        let activeButton = document.querySelector('.activeButton');
        let numActive = activeButton.textContent - 1;
        if(!valueSort.classList.contains('clicked')) {
            data.sort(function(a, b){
                return a.value-b.value;
              })
            clearTable();
            createTable(numActive);
            let valueSort = document.querySelector('.value');
            valueSort.classList.add('clicked');
        } else {
        data.sort(function(a, b){
            return b.value-a.value;
          })
        clearTable();
        createTable(numActive);
        let valueSort = document.querySelector('.value');
        valueSort.classList.remove('clicked');
        }
    }
    // Сортировка по нажатию кнопки
    let sortByButton = ()=>{
        const input = document.querySelector('input');

        if(input.value.toLowerCase() === 'id') {
            idSortF();
            return;
        } else if(input.value.toLowerCase() === 'name') {
            nameSortF();
            return;
        } else if(input.value.toLowerCase() === 'value') {
            valueSortF();
            return;
        } else {
            input.value = 'Введите "id" "name" или "value"'
        }
    }

    //сортировка по нажатию клавиши enter
    table.addEventListener('mouseover', (event)=>{
        if(event.target.classList.contains('borderRight1')) {
            event.target.closest('.borderRight1').style.cursor = 'move';
        } else if(event.target.classList.contains('borderRight2')) {
            event.target.closest('.borderRight2').style.cursor = 'move';
        } else if(event.target.classList.contains('borderRight3')) {
            event.target.closest('.borderRight3').style.cursor = 'move';
        } else return
    })

    // Изменение границ таблицы
    table.addEventListener('mousedown', (event)=>{
        table.addEventListener('mouseup', ()=> {
            table.removeEventListener('mousemove', move1);
        })
        table.addEventListener('mouseup', ()=> {
            table.removeEventListener('mousemove', move2);
        })
        let thA = document.querySelector('.id');
        let thB = document.querySelector('.name');
        let thC = document.querySelector('.value');
        let a = parseInt(thA.width);
        let b = parseInt(thB.width);
        let c = parseInt(thC.width);

        let clickX = event.clientX;

        let move1 = function(e) {
            thA.width = a + e.clientX - clickX +'px';
            thB.width = b - (e.clientX - clickX) +'px';
        }
        let move2 = function(e) {
            thB.width = b + (e.clientX - clickX) +'px';
            thC.width = c - (e.clientX - clickX) +'px';


        }
        


        if(event.target.closest('.borderRight1')) {
            table.addEventListener('mousemove', move1)
        } else if(event.target.closest('.borderRight2')) {
            let a = parseInt(thA.width);
            table.addEventListener('mousemove', move2)
        }
    })
    // Переключаем страницы стрелками
    arrows.addEventListener('click', (event)=>{
        let activeButton = document.querySelector('.activeButton');
        let numActive = activeButton.textContent;
        let numButtons = document.querySelectorAll('.switchPage');
        const leftButton = document.querySelector('.left');
        const rightButton = document.querySelector('.right');
 
        if(event.target.closest('.left')) {
            clearTable();
            createTable(numActive-2);
            let prevActive = document.querySelector('.activeButton');
            if(prevActive) {
                prevActive.classList.remove('activeButton');
            }
            numButtons[numActive-2].classList.add('activeButton');
        }
        if(event.target.closest('.right')) {
            clearTable();
            createTable(numActive);
            let prevActive = document.querySelector('.activeButton');
            if(prevActive) {
                prevActive.classList.remove('activeButton');
            }
            
            numButtons[numActive].classList.add('activeButton');

            let c = pageNumber-numActive;
            if(c===1) {
                rightButton.style.display = 'none';
            } else {
                rightButton.style.display = 'block';
            }
        }
        toggleVisibleButtons();
    })


    
    // EventListeners
    idSort.addEventListener('click', idSortF);
    nameSort.addEventListener('click', nameSortF);
    valueSort.addEventListener('click', valueSortF);
    button.addEventListener('click', sortByButton);
    input.addEventListener('click', ()=>{
        input.value='';
    })

    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          sortByButton();
        }
      });

    inputNumOfRows.addEventListener('click', ()=>{
        inputNumOfRows.value='';
    })

    numOfRowsButton.addEventListener('click', setNumOfPages);
    inputNumOfRows.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          setNumOfPages();
        }
    });

})