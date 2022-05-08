const renderToDom = (divId, textToRender) => {
    const happy = document.querySelector(divId);
    happy.innerHTML = textToRender;
}


const momCard = () => {
    const domString = `
    <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Happy Mothers day</h5>
    <p class="card-text">Happy mothers day to the greatest mom in the entire world. you have always been there for me no matter what and i love you so much. i hope you have enjoyed the day and i cant wait to watch a movie later. love you -Micah</p>
  </div>
</div>
    `
    renderToDom('#momsCard', domString)
}
momCard();