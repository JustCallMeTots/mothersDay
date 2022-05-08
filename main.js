// console.log('Shalom yall');

const renderToDom = (divId, textToRender) => {
    const happy = document.querySelector(divId);
    happy.innerHTML = textToRender;
}




const firstForm = () => {
    const domString = `
        <h1 id="opening">PLEASE ENTER YOUR NAME</h1>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="momName" placeholder="name@example.com">
            <label for="floatingInput">Name</label>
        </div>
            <a href="second.html" type="submit" class="btn btn-secondary" id="MotherOne">Submit</button>
    `
    renderToDom('#formOne', domString)
}
firstForm();
