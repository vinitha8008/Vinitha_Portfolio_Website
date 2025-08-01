import { Card } from "@/components/ui/card";
import { Palette } from "lucide-react";
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";
import art7 from "@/assets/art7.jpg";
import art8 from "@/assets/art8.jpg";
import art9 from "@/assets/art9.jpg";
import art10 from "@/assets/art10.jpg";

const Hobbies = () => {
  const artworks = [
    { id: 1, image: art1, title: "Mandala Design 1" },
    { id: 2, image: art2, title: "Floral Mandala" },
    { id: 3, image: art3, title: "Peacock Mandala" },
    { id: 4, image: art4, title: "Lippon Art Design" },
    { id: 5, image: art5, title: "Lotus Mandala" },
    { id: 6, image: art6, title: "Rangoli Art" },
    { id: 7, image: art7, title: "Zentangle Art" },
    { id: 8, image: art8, title: "Elephant Mandala" },
    { id: 9, image: art9, title: "Henna Style Art" },
    { id: 10, image: art10, title: "Butterfly Mandala" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Hobbies</h1>
          <p className="text-lg text-muted-foreground">
            Creative pursuits and personal interests
          </p>
        </div>

        {/* Art Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Palette className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-semibold text-primary">ART</h2>
          </div>
          
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Art has always been a passionate hobby of mine. I enjoy creating intricate mandala designs 
            and traditional lippon art, finding peace and mindfulness in the detailed patterns and 
            vibrant colors. Each piece reflects cultural heritage and personal creativity.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth group">
                <div className="relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {artwork.title}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Art Description */}
          <Card className="mt-8 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-primary mb-4">About My Art</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mandala Art</h4>
                <p className="text-muted-foreground text-sm">
                  I specialize in creating intricate mandala designs that combine traditional patterns 
                  with modern artistic expression. Each mandala represents harmony, balance, and spiritual growth.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Lippon Art</h4>
                <p className="text-muted-foreground text-sm">
                  Traditional Indian folk art featuring decorative border patterns and geometric designs. 
                  This art form connects me to cultural roots while expressing contemporary creativity.
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Hobbies */}
          <Card className="mt-6 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-primary mb-4">Other Interests</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <h4 className="font-medium text-foreground mb-1">Dancing</h4>
                <p className="text-sm text-muted-foreground">Traditional and contemporary</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Acting</h4>
                <p className="text-sm text-muted-foreground">Theater and performance</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Cooking</h4>
                <p className="text-sm text-muted-foreground">Exploring cuisines</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Art Working</h4>
                <p className="text-sm text-muted-foreground">Creative projects</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;