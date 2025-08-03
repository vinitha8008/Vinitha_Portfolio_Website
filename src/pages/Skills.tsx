import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "Power BI", percentage: 70 },
    { name: "SQL", percentage: 65 },
    { name: "Python", percentage: 60 },
    { name: "Excel", percentage: 80 },
    { name: "QlikView", percentage: 50 },
    { name: "Tableau", percentage: 40 },
    { name: "Power Automate", percentage: 50 },
    { name: "Azure Data Factory", percentage: 50 },
    { name: "Snowflake", percentage: 60 },
    { name: "DAX", percentage: 60 },
    { name: "Power Query", percentage: 60 },
    { name: "SSIS", percentage: 50 },
    { name: "Data Modeling", percentage: 60 },
    { name: "Data Analytics", percentage: 60 },
    { name: "Agile Methodologies", percentage: 80 },
    { name: "Scrum", percentage: 90 },
    { name: "SAFe", percentage: 90 },
	{ name: "JIRA", percentage: 90 },
    { name: "Confluence", percentage: 90 },
	{ name: "EazyBI", percentage: 60 },
	{ name: "GIT", percentage: 50 },
    { name: "HTML", percentage: 60 },
    { name: "CSS", percentage: 50 },
    { name: "JavaScript", percentage: 50 },
    { name: "VBA", percentage: 60 },
	{ name: "C", percentage: 60 },
    { name: "Java", percentage: 60 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Technical Skills</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive expertise in data analytics and business intelligence technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm font-medium text-primary">{skill.percentage}%</span>
                </div>
                <Progress 
                  value={skill.percentage} 
                  className="h-2"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-primary mb-4">Data Analytics</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Power BI & Tableau</li>
              <li>• Data Modeling & Visualization</li>
              <li>• Statistical Analysis</li>
              <li>• EazyBI</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-primary mb-4">Programming</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Python & SQL</li>
              <li>• DAX & Power Query</li>
              <li>• JavaScript & VBA</li>
              <li>• C & Java</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-primary mb-4">Cloud & Tools</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Azure Data Factory</li>
              <li>• Snowflake & SSIS</li>
              <li>• Power Automate</li>
              <li>• QlikView</li>
            </ul>
          </Card>
		  
		  <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-primary mb-4">Project Management Tools</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• JIRA</li>
              <li>• Confluence</li>
              <li>• Microsoft Suit</li>
            </ul>
          </Card>
		  
        </div>
      </div>
    </div>
  );
};

export default Skills;