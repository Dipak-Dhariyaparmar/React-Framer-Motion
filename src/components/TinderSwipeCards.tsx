import { Dispatch, SetStateAction, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);

  return (
    <div
      className="w-screen h-screen  bg-neutral-100 m-0 p-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="grid h-[500px] w-full place-items-center">
        {cards.map((card) => {
          return (
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({
  id,
  url,
  setCards,
  cards,
}: {
  id: number;
  url: string;
  setCards: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

type Card = {
  id: number;
  url: string;
};

const cardData: Card[] = [
  {
    id: 1,
    url: "/public/assets/img2.avif",
  },
  {
    id: 2,
    url: "/public/assets/img3.avif",
  },
  {
    id: 3,
    url: "/public/assets/img4.avif",
  },
  {
    id: 4,
    url: "/public/assets/img5.avif",
  },
  {
    id: 5,
    url: "/public/assets/img6.avif",
  },
];
