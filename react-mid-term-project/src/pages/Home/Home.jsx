import React from 'react';
import 'tachyons';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <article data-name="article-full-bleed-background">
        <div className="cf" style={{background: "url(https://images.unsplash.com/photo-1609372332255-611485350f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80) no-repeat center ", backgroundSize: "auto 100% ",}}>
          <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
            <header className="bb b--black-70 pv4">
              <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Impressive News Website Ever</h3>
              <h4 className="f3 fw4 i lh-title mt0">Professor Oak, Kanto</h4>
            </header>
            <section className="pt5 pb4">
              <p className="times lh-copy measure f4 mt0">
              Pikachu is a fictional creature from the Pokémon franchise. It is an electric-type mouse Pokémon, characterized by its yellow fur, long ears with black tips, and a lightning bolt-shaped tail. Pikachu is the most recognizable and iconic Pokémon, appearing in various media, including video games, anime, and movies. Its special ability is static, which has a chance of paralyzing opponents that attack it physically. Pikachu is a popular and beloved character among fans of the franchise, and it has become a cultural phenomenon worldwide. Its popularity has led to various merchandise, such as plush toys, clothing, and accessories, featuring Pikachu's likeness.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* <article class="pa3 pa5-ns">
  <h1 class="f2">Title Text with Image</h1>
  <img src="https://images.unsplash.com/photo-1609372332255-611485350f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="w-100 f5 measure" alt="Photo of outer space"/>
  <p class="measure lh-copy">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <p class="measure lh-copy">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
</article> */}
    </div>
  );
}

export default Home;

