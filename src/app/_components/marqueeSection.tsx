import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";

const reviews = [
  { id: 1, body: "React" },
  { id: 2, body: "Next.js" },
  { id: 3, body: "Tailwind CSS" },
  { id: 4, body: "TypeScript" },
  { id: 5, body: "Node.js" },
  { id: 6, body: "GraphQL" },
  { id: 7, body: "Redux" },
  { id: 8, body: "Jest" },
  { id: 9, body: "Cypress" },
  { id: 10, body: "Webpack" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-[3rem] w-[6rem] cursor-pointer overflow-hidden rounded-xl border p-4 grid place-content-center",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className="mt-2 text-[0.65rem] tracking-wide font-thin text-center">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex border border-white h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
