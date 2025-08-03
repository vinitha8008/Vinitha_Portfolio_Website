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
      description: "The BICOE (Business Intelligence Centre of Excellence) project was focused on enhancing the performance, efficiency, and reliability of existing BI systems and processes. The goal was to identify performance bottlenecks, eliminate redundancies, and implement best practices in report development and data handling.  This included query optimization, code refactoring, efficient resource allocation, and redesigning workflows to improve overall system responsiveness and user experience.",
      tools: ["SQL Server", "Power BI Desktop", "Power Automate", "Power Apps"],
      database: "SQL, Snowflake",
	  responsibilities: [
			"Analyzed existing Power BI reports and dashboards to identify and resolve performance issues such as long load times and visual lag.",
			"Simplified and optimized data models by removing redundant tables/columns, implementing star schemas, and minimizing relationship complexity.",
			"Reviewed and optimized DAX measures to improve calculation performance and efficiency.",
			"Enhanced Power Query performance by reducing transformation complexity and enabling query folding wherever possible.",
			"Assessed source systems (SQL, Snowflake, APIs) for performance issues, applying indexing and optimizing source queries as needed.",
			"Applied techniques like data filtering, aggregation, and incremental refresh to manage and improve the handling of large datasets.",
			"Selected appropriate storage modes (Import, Direct Query, Composite) based on specific use cases and performance needs.",
			"Utilized tools like Performance Analyzer and Power BI Desktop diagnostics to benchmark and track improvements.",
			"Maintained version control and documented all optimization activities for knowledge sharing and future maintenance.",
			"Collaborated with users, data engineers, and analysts to align improvements with business expectations and reporting requirements.",
			"Optimized Row-Level Security (RLS) to balance access control with report performance.",
			"Conducted validation testing to ensure optimized reports were accurate, performant, and user-friendly."
		]
    },
    {
      id: "migration",
      title: "BI Modernization & Optimization Initiative",
      description: "The BI Modernization & Optimization Initiative was aimed at migrating legacy BI reports from QlikView, Tableau, and Looker into a centralized Power BI environment, while also enhancing the performance, efficiency, and scalability of the reporting system. The project involved detailed performance tuning, data model optimization, and alignment of analytics tools to better support internal engineering, product validation, and system diagnostics teams. The focus was on building reliable, fast, and user-friendly dashboards tailored for cross-functional teams, improving reporting consistency, usability, and decision- making.",
      tools: ["Power BI", "SQL Server", "QlikView", "Tableau", "Looker", "Snowflake", "Power Automate"],
      database: "Power Apps, DAX, Power Query",
	  responsibilities: [
			"Analyzed existing Power BI reports and dashboards to identify and resolve performance issues such as long load times and visual lag.",
			"Simplified and optimized data models by removing redundant tables/columns, implementing star schemas, and minimizing relationship complexity.",
			"Reviewed and optimized DAX measures to improve calculation performance and efficiency.",
			"Enhanced Power Query performance by reducing transformation complexity and enabling query folding wherever possible.",
			"Assessed source systems (SQL, Snowflake, APIs) for performance issues, applying indexing and optimizing source queries as needed.",
			"Applied techniques like data filtering, aggregation, and incremental refresh to manage and improve the handling of large datasets.",
			"Selected appropriate storage modes (Import, Direct Query, Composite) based on specific use cases and performance needs.",
			"Utilized tools like Performance Analyzer and Power BI Desktop diagnostics to benchmark and track improvements.",
			"Maintained version control and documented all optimization activities for knowledge sharing and future maintenance.",
			"Collaborated with users, data engineers, and analysts to align improvements with business expectations and reporting requirements.",
			"Optimized Row-Level Security (RLS) to balance access control with report performance.",
			"Conducted validation testing to ensure optimized reports were accurate, performant, and user-friendly."
		]

    },
    {
      id: "tsf",
      title: "TSF Tool – Signal Analysis & Visualization Framework",
      description: "The TSF Tool (Test Strategy Framework) was developed as a comprehensive signal analysis and visualization framework, designed to offer a bird’s-eye view of recording data for validation and debugging. It was fully integrated with the Matchbox simulation environment, allowing seamless flow and visualization of simulation signals. The tool was built to handle all types of signals present in test recordings, supporting dynamic plotting and deep analysis across use cases. With a strong focus on scalability and performance, the tool enabled efficient processing of large datasets and significantly improved the debugging workflow for engineering teams.",
      tools: ["Python", "Matchbox", "pandas", "NCAP-compliant signal processing"],
      database: "Dynamic plotting and real-time data analysis",
	  responsibilities: [
			"Designed and developed the TSF Tool using Python, focusing on extensibility, performance, and ease of use.",
			"Integrated the tool with the Matchbox simulation environment to streamline simulation signal processing and visualization.",
			"Implemented dynamic plotting features for real-time visualization of key signals, improving traceability and root-cause analysis.",
			"Processed large-scale recording data using pandas and optimized memory handling for high performance.",
			"Supported NCAP-compliant signal evaluation, enabling consistent and standard-based analysis across multiple scenarios.",
			"Collaborated with stakeholders to gather feedback and iteratively refine the tool’s features and UI/UX.",
			"Created comprehensive user documentation and training materials to support tool onboarding and cross-team adoption."
		]

    },
    {
      id: "prm",
      title: "Problem Resolution Management Process Check Tool",
      description: "The Problem Resolution Management Process Check Tool was developed to provide a systematic and automated approach for managing and resolving problems within the organization. Built using VBA in Excel, the tool streamlined the end-to-end problem resolution process—from identification to closure—by enabling structured data entry, automated tracking, and report generation. It aimed to improve efficiency, consistency, and traceability in problem handling across teams.",
      tools: ["Excel", "VBA (Visual Basic for Applications)"],
      database: "Structured data entry and automated tracking",
	  responsibilities: [
			"Designed and developed the tool using VBA, creating custom macros, automated workflows, and user-defined functions tailored to problem resolution processes.",
			"Built an interactive user interface with forms, buttons, dropdowns, and navigation features to ensure ease of use and accessibility for non-technical users.",
			"Implemented features for logging issues, tracking resolution status, assigning responsibilities, and generating summaries and checklists for audits.",
			"Conducted rigorous testing and validation to ensure tool accuracy, performance, and alignment with internal process standards.",
			"Collected feedback from users and stakeholders and iteratively improved the tool’s features, structure, and usability based on real-time input.",
			"Documented the tool functionality and provided training sessions to teams for effective adoption and usage."
		]

    }
  ];

  const personalProjects = [/*
    { id: "ola", name: "Ola", image: olaImg },
    { id: "amazon", name: "Amazon", image: amazonImg },
    { id: "blinkit", name: "Blinkit", image: blinkitImg },
    { id: "flipkart", name: "Flipkart", image: flipkartImg },
    { id: "zomato", name: "Zomato", image: zomatoImg },
    { id: "nykaa", name: "Nykaa", image: nykaaImg } */
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

				  {/* Responsibilities Section */}
				  {project.responsibilities && (
					<div>
					  <h4 className="font-medium text-foreground mb-2">Responsibilities:</h4>
					  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
						{project.responsibilities.map((item, index) => (
						  <li key={index}>{item}</li>
						))}
					  </ul>
					</div>
				  )}
				</div>
			  </Card>
			))}
		  </div>
		</div>


        {/* Personal Projects */}
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-8"></h2> 
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
           
          </p> 
        </div>
      </div>
    </div>
  );

};

export default Projects;