import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews: { name: string; quote: string; rating: number }[] = [
  { name: "Mustapha H.", quote: "AutoAdvance took our local ads from break-even to profitable in 60 days.", rating: 5 },
  { name: "Ahmad C.", quote: "Our socials finally reflect our brand — engagement is way up.", rating: 5 },
  { name: "Moe H.", quote: "Clear strategy, seamless execution, and results we can measure.", rating: 5 },
  { name: "Hassan H.", quote: "Professional team. They know Meta Ads inside out.", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-1" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-brand-gold" : "text-muted-foreground"}`}
        strokeWidth={1.5}
        fill={i < rating ? "currentColor" : "none"}
      />
    ))}
  </div>
);

const maskName = (name: string) => {
  const parts = (name || "").trim().split(/\s+/);
  const first = parts[0] || "Client";
  const lastInitial = parts[1] ? parts[1][0] + "." : "";
  return [first, lastInitial].filter(Boolean).join(" ");
};

const ReviewsCarousel: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [groupSize, setGroupSize] = React.useState(1);

  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setGroupSize(mq.matches ? 3 : 1);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  const handleNextGroup = React.useCallback(() => {
    if (!api) return;
    const current = api.selectedScrollSnap();
    const snaps = api.scrollSnapList();
    api.scrollTo((current + groupSize) % snaps.length);
  }, [api, groupSize]);

  const handlePrevGroup = React.useCallback(() => {
    if (!api) return;
    const current = api.selectedScrollSnap();
    const snaps = api.scrollSnapList();
    api.scrollTo((current - groupSize + snaps.length) % snaps.length);
  }, [api, groupSize]);

  return (
    <div>
      <Carousel opts={{ align: "start", loop: true }} setApi={(api) => setApi(api)}>
        <CarouselContent>
          {reviews.map((r, idx) => (
            <CarouselItem key={idx} className="basis-full md:basis-1/3">
              <article className="border rounded-lg p-6 bg-card h-full flex flex-col hover-scale">
                <div className="mb-3" aria-label={`${r.rating} out of 5 stars`}>
                  <StarRating rating={r.rating} />
                </div>
                <p className="mb-3">"{r.quote}"</p>
                <cite className="text-muted-foreground not-italic mt-auto">— {maskName(r.name)}</cite>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="hidden"
          aria-label="Previous reviews"
          onClick={handlePrevGroup}
        />
        <CarouselNext
          className="hidden"
          aria-label="Next reviews"
          onClick={handleNextGroup}
        />
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;