import React from 'react';
import 'tachyons';
import './HeadlineCard.css'

const HeadlineCard = ({img, index, title, description,url,author,publishedAt}) => {
  return (
<section className="mw7 center avenir">
  
  <article className="bt bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href={url}>
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={img} class="db" alt=""/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
          <p className="f6 f5-l lh-copy">
            {description}
          </p>
          <p className="f6 lh-copy mv0">by {author}</p>
          <time class="f6 db gray">{publishedAt}</time>
        </div>
      </div>
    </a>
  </article>
  {/* <article class="bb b--black-10">
    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div class="flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="http://mrmrs.github.io/photos/warehouse.jpg" class="db" alt="Photo of a warehouse with stacked shelves.">
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <h1 class="f3 fw1 baskerville mt0 lh-title">Warehouse Prices Are Fast on the Rise</h1>
          <p class="f6 f5-l lh-copy">
            A warehouse is a commercial building for storage of goods.
            Warehouses are used by manufacturers, importers, exporters,
            wholesalers, transport businesses, customs, etc. They are
            usually large plain buildings in industrial areas of cities,
            towns and villages.
          </p>
          <p class="f6 lh-copy mv0">By Robin Darnell</p>
        </div>
      </div>
    </a>
  </article>
  <article class="bb b--black-10">
    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div class="flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="http://mrmrs.github.io/photos/whale.jpg" class="db" alt="Photo of a whale's tale coming crashing out of the water.">
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <h1 class="f3 fw1 baskerville mt0 lh-title">Giant Whale Invests Huge Money to Build a Computer Out of Plankton</h1>
          <p class="f6 f5-l lh-copy">
            Whale is the common name for a widely distributed and diverse
            group of fully aquatic placental marine mammals. They are an
            informal grouping within the infraorder Cetacea, usually
            excluding dolphins and porpoises.
          </p>
          <p class="f6 lh-copy mv0">By Robin Darnell</p>
        </div>
      </div>
    </a>
  </article> */}
</section>
    

  
  );
}

export default HeadlineCard;

