import { Card } from "@/components/ui/card";
import { useState } from "react";
import olaImg from "@/assets/ola.jpg";
import amazonImg from "@/assets/amazon.jpg";
import blinkitImg from "@/assets/blinkit.jpg";
import flipkartImg from "@/assets/flipkart.jpg";
import zomatoImg from "@/assets/zomato.jpg";
import nykaaImg from "@/assets/nykaa.jpg";
import dashboardImg from "@/assets/dashboard.jpg";

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const professionalProjects = [
    {
      id: "bicoe",
      title: "BICOE Optimization Initiative",
      description: "Business Intelligence Centre of Excellence project focused on enhancing performance, efficiency, and reliability of existing BI systems and processes.",
      tools: ["SQL Server", "Power BI Desktop", "Power Automate", "Power Apps"],
      database: "SQL, Snowflake"
    },
    {
      id: "migration",
      title: "BI Modernization & Optimization Initiative",
      description: "Migrating legacy BI reports from QlikView, Tableau, and Looker to Power BI, while optimizing performance and scalability.",
      tools: ["Power BI", "SQL Server", "QlikView", "Tableau", "Looker", "Snowflake", "Power Automate"],
      database: "Power Apps, DAX, Power Query"
    },
    {
      id: "tsf",
      title: "TSF Tool – Signal Analysis & Visualization Framework",
      description: "Comprehensive signal analysis and visualization framework designed for recording data validation and debugging.",
      tools: ["Python", "Matchbox", "pandas", "NCAP-compliant signal processing"],
      database: "Dynamic plotting and real-time data analysis"
    },
    {
      id: "prm",
      title: "Problem Resolution Management Process Check Tool",
      description: "Systematic and automated approach to managing and resolving production issues within the organization.",
      tools: ["Excel", "VBA (Visual Basic for Applications)"],
      database: "Structured data entry and automated tracking"
    }
  ];

  const personalProjects = [
    { id: "ola", name: "Ola", image: olaImg },
    { id: "amazon", name: "Amazon", image: amazonImg },
    { id: "blinkit", name: "Blinkit", image: blinkitImg },
    { id: "flipkart", name: "Flipkart", image: flipkartImg },
    { id: "zomato", name: "Zomato", image: zomatoImg },
    { id: "nykaa", name: "Nykaa", image: nykaaImg }
  ];

  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            Professional work and personal interest projects
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8">Professional Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalProjects.map((project) => (
              <Card key={project.id} className="p-6 shadow-soft hover:shadow-medium transition-smooth">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="bg-data-secondary text-foreground px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Database & Analysis:</h4>
                    <p className="text-sm text-muted-foreground">{project.database}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-8">Personal Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <div key={project.id} className="relative perspective-1000">
                <div 
                  className={`relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    flippedCards[project.id] ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleFlip(project.id)}
                >
                  {/* Front of card */}
                  <Card className="absolute inset-0 w-full h-full backface-hidden shadow-soft hover:shadow-medium transition-smooth">
                    <div className="p-4 h-full flex flex-col">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-center text-foreground">{project.name}</h3>
                      <p className="text-xs text-center text-muted-foreground mt-2">Click to view dashboard</p>
                    </div>
                  </Card>
                  
                  {/* Back of card */}
                  <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 shadow-soft">
                    <div className="p-4 h-full flex flex-col">
                      <img 
                        src={dashboardImg} 
                        alt="Project Dashboard"
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-center text-foreground">{project.name} Dashboard</h3>
                      <p className="text-xs text-center text-muted-foreground mt-2">Analytics & Insights</p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Click on any project card to see the dashboard view
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;