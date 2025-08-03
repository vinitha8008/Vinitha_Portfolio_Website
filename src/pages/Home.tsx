import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import profileImg from "@/assets/profile_raw.png";
const Home = () => {
  return <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Vinitha Peddareddy
              </h1>
              <p className="text-data-accent mb-6 text-xl font-semibold text-slate-950 text-center">Data Analyst</p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                With over 5.4 years of IT experience, I bring a strong blend of technical expertise 
                and agile delivery skills, specialized in Data Analytics and Business Intelligence 
                solutions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src={profileImg} alt="Vinitha Peddareddy" className="w-64 h-64 rounded-full object-cover shadow-medium border-4 border-white" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Thondawada, Chandragiri Mandal, Tirupati District, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91-9487904841</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>vinipeddireddy@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Current Experience */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
            <h2 className="text-2xl font-semibold text-primary mb-4">Current Position</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-foreground">Data Analyst</h3>
              <p className="text-data-accent font-medium">Wipro Technologies</p>
              <p className="text-muted-foreground">Feb 2025 – Present</p>
              <p className="text-sm text-muted-foreground">
              Leading data analytics initiatives and developing comprehensive Business Intelligence solutions using Power BI, SQL, and advanced analytics tools. 
			  Strong experience in data modeling, performance tuning, and delivering actionable insights through interactive dashboards. 
			  Proficient in integrating data from multiple sources to support strategic business decisions.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
            <h2 className="text-2xl font-semibold text-primary mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">M.Tech Integrated Software Engineer</h3>
                <p className="text-data-accent">Vellore Institute of Technology</p>
                <p className="text-muted-foreground">2015 - 2020 | 88.3%</p>
				<p className="text-sm text-muted-foreground">
                The integrated M.Tech. (Software Engineering) program at VIT is a 5-year course combining B.Tech and M.Tech degrees. 
				It aims to provide in-depth knowledge and practical skills in software engineering, preparing students for the IT industry. 
				The program includes core foundation courses, specialized IT courses, electives, and hands-on experience through projects and internships. 
              </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Highlights */}
        <Card className="p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Professional Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-data-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">5.4+</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Years Experience</h3>
              <p className="text-sm text-muted-foreground">IT industry expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-data-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">BI</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Business Intelligence</h3>
              <p className="text-sm text-muted-foreground">Power BI & Analytics specialist</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-data-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">CSM</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Certified Scrum Master</h3>
              <p className="text-sm text-muted-foreground">Agile methodology expert</p>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default Home;