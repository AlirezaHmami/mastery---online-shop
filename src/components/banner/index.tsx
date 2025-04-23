import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Banner() {
  return (
    <Carousel className="w-3/4 text-center">
      <CarouselNext />
      <CarouselContent>
        {[1, 2, 3, 4].map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-80 w-full flex items-center justify-center p-6">
                  <Image
                    alt="..."
                    src={`/images/banner${item}.jpg`}
                    fill
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
    </Carousel>
  );
}
