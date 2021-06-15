import image1 from '../../images/img1.jpg';

const PizzaTypes = () => {
    return(
        <div class="container">
     <div class="row">
        <h2 class="text-center">Pizza Types</h2>
         <div class="col-md-3">
             <div class="thumbnail">
      <img src={image1}  class="pizza" />
      <div class="caption">
        <h3>Cheesy Pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ab iure dolorum odio reprehenderit tempore accusamus ex id saepe. Et fugiat, sint similique cumque delectus laborum. Consectetur nihil hic suscipit, corrupti, sed iusto neque accusantium aliquam voluptas laboriosam at quos!</p>
                 </div>
                 </div>
         </div>
         <div class="col-md-3"><div class="thumbnail">
      <img src={image1} class="pizza" />
      <div class="caption">
        <h3>Vegetable Pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ab iure dolorum odio reprehenderit tempore accusamus ex id saepe. Et fugiat, sint similique cumque delectus laborum. Consectetur nihil hic suscipit, corrupti, sed iusto neque accusantium aliquam voluptas laboriosam at quos!</p>
                 </div>
                 </div></div>
         <div class="col-md-3"><div class="thumbnail">
      <img src={image1} class="pizza" />
      <div class="caption">
        <h3>Peperoni Pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ab iure dolorum odio reprehenderit tempore accusamus ex id saepe. Et fugiat, sint similique cumque delectus laborum. Consectetur nihil hic suscipit, corrupti, sed iusto neque accusantium aliquam voluptas laboriosam at quos!</p>
                 </div>
                 </div></div>
         <div class="col-md-3"><div class="thumbnail">
      <img src={image1} class="pizza" />
      <div class="caption">
        <h3>Pork Pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ab iure dolorum odio reprehenderit tempore accusamus ex id saepe. Et fugiat, sint similique cumque delectus laborum. Consectetur nihil hic suscipit, corrupti, sed iusto neque accusantium aliquam voluptas laboriosam at quos!</p>
                 </div>
                 </div></div>
     </div>
 </div>
    );
}

export default PizzaTypes;