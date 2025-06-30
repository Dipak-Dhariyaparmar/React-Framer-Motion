import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );

  return (
    <div>
      {/* Scroll state (status bar) */}
      <motion.div
        className="scroll-state"
        style={{
          scaleX: scrollYProgress,
          background,
        }}
      />
      <div className="scroll-animate-text">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5, ease: "easeIn" },
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum
          veniam libero soluta doloribus voluptatem cupiditate eum voluptatibus,
          labore eveniet asperiores necessitatibus consequuntur laudantium
          facilis natus quas quasi rerum quia quaerat voluptates! Molestias quod
          doloremque unde vitae culpa esse laborum sit atque dignissimos aut
          quasi hic eum aliquid reprehenderit perspiciatis repellendus vel alias
          nisi tenetur rem, fuga praesentium perferendis ipsa enim. Ratione eum
          quam voluptatem! Facere repudiandae qui eaque quasi, laborum iusto
          enim molestiae quidem, ab beatae vel aliquam sapiente alias.
          Accusantium dolores incidunt officia vitae necessitatibus provident,
          molestiae expedita impedit iure maxime architecto veritatis,
          blanditiis modi molestias aspernatur nemo, eos nobis? Quibusdam nihil,
          iusto, saepe fugit, at esse quia nostrum porro eum explicabo
          asperiores neque dolorum aut! Adipisci, laborum? Totam veritatis ea
          velit! Tenetur iusto deserunt eaque sapiente laboriosam delectus
          cumque excepturi commodi nesciunt, aspernatur suscipit sunt fuga hic
          temporibus ab mollitia dolore voluptatem dignissimos eos sit vitae
          debitis, voluptatum a? Possimus aut culpa ex, sint numquam doloribus
          libero facere molestiae, reprehenderit deleniti ratione? Corrupti esse
          quas facere et non tenetur velit officiis incidunt illum qui quis
          ratione natus quam, mollitia pariatur deserunt saepe nihil labore modi
          minima recusandae ullam. Eaque laboriosam sequi architecto doloribus
          excepturi, ipsum ducimus repellendus quibusdam neque esse dicta iusto
          quia totam molestiae? Aperiam perferendis, sint eligendi molestias
          provident nihil debitis sequi. Nulla eaque quod sed, est laboriosam
          tempore accusamus laudantium iusto, neque architecto dolorum quae
          assumenda voluptatem! Praesentium optio fugit tenetur, perspiciatis
          natus temporibus quos minima? Soluta totam in laboriosam voluptas,
          dicta fuga earum?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5, ease: "easeIn" },
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum
          veniam libero soluta doloribus voluptatem cupiditate eum voluptatibus,
          labore eveniet asperiores necessitatibus consequuntur laudantium
          facilis natus quas quasi rerum quia quaerat voluptates! Molestias quod
          doloremque unde vitae culpa esse laborum sit atque dignissimos aut
          quasi hic eum aliquid reprehenderit perspiciatis repellendus vel alias
          nisi tenetur rem, fuga praesentium perferendis ipsa enim. Ratione eum
          quam voluptatem! Facere repudiandae qui eaque quasi, laborum iusto
          enim molestiae quidem, ab beatae vel aliquam sapiente alias.
          Accusantium dolores incidunt officia vitae necessitatibus provident,
          molestiae expedita impedit iure maxime architecto veritatis,
          blanditiis modi molestias aspernatur nemo, eos nobis? Quibusdam nihil,
          iusto, saepe fugit, at esse quia nostrum porro eum explicabo
          asperiores neque dolorum aut! Adipisci, laborum? Totam veritatis ea
          velit! Tenetur iusto deserunt eaque sapiente laboriosam delectus
          cumque excepturi commodi nesciunt, aspernatur suscipit sunt fuga hic
          temporibus ab mollitia dolore voluptatem dignissimos eos sit vitae
          debitis, voluptatum a? Possimus aut culpa ex, sint numquam doloribus
          libero facere molestiae, reprehenderit deleniti ratione? Corrupti esse
          quas facere et non tenetur velit officiis incidunt illum qui quis
          ratione natus quam, mollitia pariatur deserunt saepe nihil labore modi
          minima recusandae ullam. Eaque laboriosam sequi architecto doloribus
          excepturi, ipsum ducimus repellendus quibusdam neque esse dicta iusto
          quia totam molestiae? Aperiam perferendis, sint eligendi molestias
          provident nihil debitis sequi. Nulla eaque quod sed, est laboriosam
          tempore accusamus laudantium iusto, neque architecto dolorum quae
          assumenda voluptatem! Praesentium optio fugit tenetur, perspiciatis
          natus temporibus quos minima? Soluta totam in laboriosam voluptas,
          dicta fuga earum?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5, ease: "easeIn" },
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum
          veniam libero soluta doloribus voluptatem cupiditate eum voluptatibus,
          labore eveniet asperiores necessitatibus consequuntur laudantium
          facilis natus quas quasi rerum quia quaerat voluptates! Molestias quod
          doloremque unde vitae culpa esse laborum sit atque dignissimos aut
          quasi hic eum aliquid reprehenderit perspiciatis repellendus vel alias
          nisi tenetur rem, fuga praesentium perferendis ipsa enim. Ratione eum
          quam voluptatem! Facere repudiandae qui eaque quasi, laborum iusto
          enim molestiae quidem, ab beatae vel aliquam sapiente alias.
          Accusantium dolores incidunt officia vitae necessitatibus provident,
          molestiae expedita impedit iure maxime architecto veritatis,
          blanditiis modi molestias aspernatur nemo, eos nobis? Quibusdam nihil,
          iusto, saepe fugit, at esse quia nostrum porro eum explicabo
          asperiores neque dolorum aut! Adipisci, laborum? Totam veritatis ea
          velit! Tenetur iusto deserunt eaque sapiente laboriosam delectus
          cumque excepturi commodi nesciunt, aspernatur suscipit sunt fuga hic
          temporibus ab mollitia dolore voluptatem dignissimos eos sit vitae
          debitis, voluptatum a? Possimus aut culpa ex, sint numquam doloribus
          libero facere molestiae, reprehenderit deleniti ratione? Corrupti esse
          quas facere et non tenetur velit officiis incidunt illum qui quis
          ratione natus quam, mollitia pariatur deserunt saepe nihil labore modi
          minima recusandae ullam. Eaque laboriosam sequi architecto doloribus
          excepturi, ipsum ducimus repellendus quibusdam neque esse dicta iusto
          quia totam molestiae? Aperiam perferendis, sint eligendi molestias
          provident nihil debitis sequi. Nulla eaque quod sed, est laboriosam
          tempore accusamus laudantium iusto, neque architecto dolorum quae
          assumenda voluptatem! Praesentium optio fugit tenetur, perspiciatis
          natus temporibus quos minima? Soluta totam in laboriosam voluptas,
          dicta fuga earum?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5, ease: "easeIn" },
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum
          veniam libero soluta doloribus voluptatem cupiditate eum voluptatibus,
          labore eveniet asperiores necessitatibus consequuntur laudantium
          facilis natus quas quasi rerum quia quaerat voluptates! Molestias quod
          doloremque unde vitae culpa esse laborum sit atque dignissimos aut
          quasi hic eum aliquid reprehenderit perspiciatis repellendus vel alias
          nisi tenetur rem, fuga praesentium perferendis ipsa enim. Ratione eum
          quam voluptatem! Facere repudiandae qui eaque quasi, laborum iusto
          enim molestiae quidem, ab beatae vel aliquam sapiente alias.
          Accusantium dolores incidunt officia vitae necessitatibus provident,
          molestiae expedita impedit iure maxime architecto veritatis,
          blanditiis modi molestias aspernatur nemo, eos nobis? Quibusdam nihil,
          iusto, saepe fugit, at esse quia nostrum porro eum explicabo
          asperiores neque dolorum aut! Adipisci, laborum? Totam veritatis ea
          velit! Tenetur iusto deserunt eaque sapiente laboriosam delectus
          cumque excepturi commodi nesciunt, aspernatur suscipit sunt fuga hic
          temporibus ab mollitia dolore voluptatem dignissimos eos sit vitae
          debitis, voluptatum a? Possimus aut culpa ex, sint numquam doloribus
          libero facere molestiae, reprehenderit deleniti ratione? Corrupti esse
          quas facere et non tenetur velit officiis incidunt illum qui quis
          ratione natus quam, mollitia pariatur deserunt saepe nihil labore modi
          minima recusandae ullam. Eaque laboriosam sequi architecto doloribus
          excepturi, ipsum ducimus repellendus quibusdam neque esse dicta iusto
          quia totam molestiae? Aperiam perferendis, sint eligendi molestias
          provident nihil debitis sequi. Nulla eaque quod sed, est laboriosam
          tempore accusamus laudantium iusto, neque architecto dolorum quae
          assumenda voluptatem! Praesentium optio fugit tenetur, perspiciatis
          natus temporibus quos minima? Soluta totam in laboriosam voluptas,
          dicta fuga earum?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5, ease: "easeIn" },
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum
          veniam libero soluta doloribus voluptatem cupiditate eum voluptatibus,
          labore eveniet asperiores necessitatibus consequuntur laudantium
          facilis natus quas quasi rerum quia quaerat voluptates! Molestias quod
          doloremque unde vitae culpa esse laborum sit atque dignissimos aut
          quasi hic eum aliquid reprehenderit perspiciatis repellendus vel alias
          nisi tenetur rem, fuga praesentium perferendis ipsa enim. Ratione eum
          quam voluptatem! Facere repudiandae qui eaque quasi, laborum iusto
          enim molestiae quidem, ab beatae vel aliquam sapiente alias.
          Accusantium dolores incidunt officia vitae necessitatibus provident,
          molestiae expedita impedit iure maxime architecto veritatis,
          blanditiis modi molestias aspernatur nemo, eos nobis? Quibusdam nihil,
          iusto, saepe fugit, at esse quia nostrum porro eum explicabo
          asperiores neque dolorum aut! Adipisci, laborum? Totam veritatis ea
          velit! Tenetur iusto deserunt eaque sapiente laboriosam delectus
          cumque excepturi commodi nesciunt, aspernatur suscipit sunt fuga hic
          temporibus ab mollitia dolore voluptatem dignissimos eos sit vitae
          debitis, voluptatum a? Possimus aut culpa ex, sint numquam doloribus
          libero facere molestiae, reprehenderit deleniti ratione? Corrupti esse
          quas facere et non tenetur velit officiis incidunt illum qui quis
          ratione natus quam, mollitia pariatur deserunt saepe nihil labore modi
          minima recusandae ullam. Eaque laboriosam sequi architecto doloribus
          excepturi, ipsum ducimus repellendus quibusdam neque esse dicta iusto
          quia totam molestiae? Aperiam perferendis, sint eligendi molestias
          provident nihil debitis sequi. Nulla eaque quod sed, est laboriosam
          tempore accusamus laudantium iusto, neque architecto dolorum quae
          assumenda voluptatem! Praesentium optio fugit tenetur, perspiciatis
          natus temporibus quos minima? Soluta totam in laboriosam voluptas,
          dicta fuga earum?
        </motion.p>
      </div>
    </div>
  );
};
// This component is related to scrollanimations
