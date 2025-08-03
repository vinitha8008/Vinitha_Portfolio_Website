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
import art11 from "@/assets/art11.jpg";
import art12 from "@/assets/art12.jpg";
import art13 from "@/assets/art13.jpg";
import art14 from "@/assets/art14.jpg";
import art15 from "@/assets/art15.jpg";
import art16 from "@/assets/art16.jpg";
import art17 from "@/assets/art17.jpg";
import art18 from "@/assets/art18.jpg";
import art19 from "@/assets/art19.jpg";
import art20 from "@/assets/art20.jpg";

const Hobbies = () => {
  const artworks = [
    { id: 1, image: art1, title: "Gomatha Lippon Art" },
    { id: 2, image: art2, title: "Puri Jgannatha Swamy" },
    { id: 3, image: art3, title: "Tree Lippon Art" },
    { id: 4, image: art4, title: "Vinayaka Lippon Art" },
    { id: 5, image: art5, title: "Evil Eye" },
    { id: 6, image: art6, title: "Dream Cathcher" },
    { id: 7, image: art7, title: "Peacock Lippon Art" },
    { id: 8, image: art8, title: "Mahadeva Mandala Art" },
    { id: 9, image: art9, title: "Jewellery Design" },
    { id: 10, image: art10, title: "Mandala Art" },
	{ id: 11, image: art11, title: "Mandala Art" },
    { id: 12, image: art12, title: "Mandala Art" },
    { id: 13, image: art13, title: "Mandala Art" },
    { id: 14, image: art14, title: "Mandala Art" },
    { id: 15, image: art15, title: "Jewellery Design" },
    { id: 16, image: art16, title: "Jewellery Design" },
    { id: 17, image: art17, title: "Jewellery Design" },
    { id: 18, image: art18, title: "Jewellery Design" },
    { id: 19, image: art19, title: "Jewellery Design" },
    { id: 20, image: art20, title: "Jewellery Design" }
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