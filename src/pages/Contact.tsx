import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Me</h1>
          <p className="text-lg text-muted-foreground">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="flex justify-center"> 
		
			<Card className="p-6 shadow-soft">
				<h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
				<div className="space-y-4">
				  <div className="flex items-center gap-4">
					<Mail className="w-6 h-6 text-primary" />
					<div>
					  <p className="font-medium">Email</p>
					  <p className="text-muted-foreground">vinipeddireddy@gmail.com</p>
					</div>
				  </div>
				  <div className="flex items-center gap-4">
					<Phone className="w-6 h-6 text-primary" />
					<div>
					  <p className="font-medium">Phone</p>
					  <p className="text-muted-foreground">+91-9487904841</p>
					</div>
				  </div>
				  <div className="flex items-center gap-4">
					<MapPin className="w-6 h-6 text-primary" />
					<div>
					  <p className="font-medium">Location</p>
					  <p className="text-muted-foreground">Tirupati District, Andhra Pradesh</p>
					</div>
				  </div>
				</div>
			</Card>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;