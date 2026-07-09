


const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");



button.addEventListener('click', function () {

    if (input.value.trim() != '') {

        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        deleteButton.ariaLabel = 'Close';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);
        inputElement.value = "";

    }
    else {
        input.focus();

    }

});


