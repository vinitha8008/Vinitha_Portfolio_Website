import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "M.Tech Integrated Software Engineer",
      institution: "Vellore Institute of Technology, Vellore",
      duration: "2015 - 2020",
      percentage: "88.3%",
      type: "Higher Education"
    },
    {
      degree: "Intermediate",
      institution: "NRI Junior College, Tirupati",
      duration: "2013 - 2015",
      percentage: "90.9%",
      type: "Higher Secondary"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Bhashyam Public School, Tirupati",
      duration: "2013",
      percentage: "85%",
      type: "Secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Education</h1>
          <p className="text-lg text-muted-foreground">
            Academic journey and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-data-secondary rounded-full flex items-center justify-center">
                    {edu.type === "Higher Education" ? (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    ) : (
                      <Award className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h2 className="text-xl font-semibold text-foreground">{edu.degree}</h2>
                    <span className="text-sm text-muted-foreground bg-data-light px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg text-data-accent font-medium mb-2">{edu.institution}</h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{edu.type}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">Score:</span>
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-semibold">
                        {edu.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Academic Info */}
        <Card className="mt-8 p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-primary mb-4">Academic Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Technical Focus</h3>
              <p className="text-muted-foreground text-sm">
                Specialized in software engineering with focus on data structures, algorithms, 
                database management, and software development methodologies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Key Subjects</h3>
              <p className="text-muted-foreground text-sm">
                Data Structures, Database Management Systems, Software Engineering, 
                Web Technologies, and Business Analytics.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Education;