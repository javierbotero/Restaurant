import wine1 from './assets/wine1.jpg';
import wine2 from './assets/wine2.jpg';
import wine3 from './assets/wine3.jpg';

export default function displayWines() {
  document.getElementById('info').innerHTML = `
  <div class="row py-3">
     <div class="card col-5 my-2 ml-1" style="width: 18rem;">
       <img class="card-img-top" src="${wine1}" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
     <div class="card col-5 my-2 ml-1" style="width: 18rem;">
     <img class="card-img-top" src="${wine2}" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
   <div class="card col-5 my-2 ml-1" style="width: 18rem;">
     <img class="card-img-top" src="${wine3}" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
</div>
  `;
}