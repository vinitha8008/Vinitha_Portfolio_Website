import { Card } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";
const Experience = () => {
  const experiences = [{
    title: "Data Analyst",
    company: "Wipro Technologies",
    duration: "Feb 2025 – Present",
    location: "India",
    type: "Current Position",
    responsibilities: ["Leading data analytics initiatives and developing comprehensive Business Intelligence solutions", "Creating interactive dashboards and reports using Power BI", "Analyzing complex datasets to derive actionable business insights", "Collaborating with cross-functional teams to implement data-driven solutions"]
  }, {
    title: "Technical Specialist",
    company: "Continental Autonomous Mobility (India) Pvt Ltd",
    duration: "March 2021 – Feb 2025",
    location: "India",
    type: "Previous Role",
    responsibilities: ["Developed and optimized Power BI reports and dashboards for business intelligence", "Implemented data models and performed complex data analysis", "Collaborated with stakeholders to gather requirements and deliver analytical solutions", "Maintained and enhanced existing BI systems for improved performance"]
  }, {
    title: "Executive Engineer",
    company: "Continental Automotive Components (India) Pvt Ltd",
    duration: "April 2020 – Dec 2022",
    location: "India",
    type: "Previous Role",
    responsibilities: ["Worked on automotive component engineering projects", "Analyzed technical specifications and requirements", "Collaborated with engineering teams on product development", "Ensured quality standards and compliance in engineering processes"]
  }, {
    title: "Internship",
    company: "Continental Automotive",
    duration: "July 2019 – April 2020",
    location: "India",
    type: "Internship",
    responsibilities: ["Gained hands-on experience in automotive industry processes", "Supported various engineering and analytical projects", "Learned industry best practices and methodologies", "Contributed to team projects and technical documentation"]
  }];
  return <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">
            5.4+ years of experience in IT and Data Analytics
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-data-secondary rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h2>
                      <h3 className="text-lg text-data-accent font-medium">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-2 mt-2 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${exp.type === 'Current Position' ? 'bg-primary text-primary-foreground' : 'bg-data-light text-foreground'}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Career Summary */}
        <Card className="mt-8 p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-data-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">5+</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Years in Analytics</h3>
              <p className="text-sm text-muted-foreground">Data Analytics & BI specialization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-data-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Companies</h3>
              <p className="text-sm text-muted-foreground">Diverse industry experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-data-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">BI</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">Business Intelligence & Power BI</p>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default Experience;