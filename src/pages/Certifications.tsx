import { Card } from "@/components/ui/card";
import { Award, Calendar, CheckCircle } from "lucide-react";
import certificate1 from "@/assets/certificate1.jpg";
import certificate2 from "@/assets/certificate2.jpg";
import certificate3 from "@/assets/certificate3.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Scrum Master Certification",
      issuer: "Scrum Alliance",
      date: "2023",
      image: certificate1,
      status: "Active"
    },
    {
      title: "Power BI Certification",
      issuer: "Microsoft",
      date: "2022",
      image: certificate2,
      status: "Active"
    },
    {
      title: "ISTQB Foundational Level Certification",
      issuer: "International Software Testing Qualifications Board",
      date: "2021",
      image: certificate3,
      status: "Active"
    }
  ];

  const achievements = [
    "Recognized as an Outstanding Performer for 3 consecutive years",
    "Internal SAFe Scrum Master Certification",
    "Awarded Spot Award for exceptional project delivery",
    "Awarded Star of the Month for outstanding performance",
    "Runner-up in the ASPICE success stories contest in Continental Technical center India",
    "Certificate for attending Red Hat Academy's workshop on 'DevOps Automation'"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Certifications & Achievements</h1>
          <p className="text-lg text-muted-foreground">
            Professional certifications and recognitions
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth">
                <div className="text-center">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-40 object-cover rounded-md mb-4 border border-border"
                  />
                  
                  <div className="flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-primary mr-2" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-data-accent font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-8">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-4 shadow-soft hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-primary mb-4">Professional Development</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm">
                Actively pursuing additional certifications in cloud technologies and advanced analytics 
                to stay current with industry trends and best practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Industry Recognition</h3>
              <p className="text-muted-foreground text-sm">
                Consistently recognized for technical excellence and leadership in data analytics projects, 
                with multiple awards for outstanding performance and innovation.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Certifications;