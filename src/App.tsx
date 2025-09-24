import { useState, useEffect } from 'react';
import { 
  User, Settings, Bot, Zap, Plus, Check, X, MessageSquare, 
  Webhook, Target, Calendar, BarChart3, Users, 
  Eye, MapPin,
  Award, Activity, Flame, Brain, Lightbulb,
  Wand2, Twitter,
  CheckCircle, Loader2, ArrowRight, Database, Hash,
  TrendingUp, Star, Trophy, BookOpen, Sparkles
} from 'lucide-react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from 'recharts';

const OurverseMVP = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedBadgeCategory, setSelectedBadgeCategory] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showWorkflowModal, setShowWorkflowModal] = useState(false);
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [profileCompleteness, setProfileCompleteness] = useState(73);
  const [selectedGoalCategory, setSelectedGoalCategory] = useState('active');
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [activityData, setActivityData] = useState<any[]>([]);
  
  // User profile data combining both identity and achievements
  const [profileData, setProfileData] = useState({
    name: "Alex Chen",
    username: "@alexchen_dev",
    title: "Senior Full-Stack Developer & AI Enthusiast",
    bio: "Building the future of human-AI collaboration through innovative digital experiences",
    location: "San Francisco, CA",
    joinedDate: "March 2024",
    careercon: "Software Development",
    
    // AI Personality Configuration
    aiPersonality: {
      tone: "Professional yet approachable",
      responseDepth: "Detailed but concise",
      expertise: "Advanced technical, intermediate business",
      interests: ["AI Ethics", "Sustainable Tech", "Mentoring"],
      communicationStyle: "Direct but friendly, prefers technical depth"
    },
    
    // Metrics
    activityMeter: 85,
    engagementMeter: 72,
    supporterCount: 247,
    completedGoals: 34,
    currentStreak: 12,
    profileViews: 1247,
    
    // Social Links
    socialLinks: {
      twitter: "@alexchen_dev",
      linkedin: "alexchen",
      github: "alexchen-dev",
      instagram: "@alex.codes"
    }
  });

  // Goals data
  const [goals, setGoals] = useState({
    active: [
      {
        id: 1,
        title: "Complete React Advanced Course",
        description: "Finish the advanced React patterns and performance optimization course",
        category: "Learning",
        progress: 75,
        deadline: "2024-04-15",
        priority: "high",
        tags: ["React", "Frontend", "Learning"],
        milestones: [
          { id: 1, title: "Complete Hooks Module", completed: true },
          { id: 2, title: "Build Performance Demo", completed: true },
          { id: 3, title: "Context API Project", completed: true },
          { id: 4, title: "Final Assessment", completed: false }
        ]
      },
      {
        id: 2,
        title: "Launch Personal Portfolio v3",
        description: "Redesign and deploy new portfolio with latest projects",
        category: "Career",
        progress: 45,
        deadline: "2024-04-30",
        priority: "medium",
        tags: ["Portfolio", "Design", "Career"],
        milestones: [
          { id: 1, title: "Design Mockups", completed: true },
          { id: 2, title: "Frontend Development", completed: false },
          { id: 3, title: "Content Writing", completed: false },
          { id: 4, title: "SEO Optimization", completed: false }
        ]
      },
      {
        id: 3,
        title: "Contribute to Open Source",
        description: "Make meaningful contributions to 3 open source projects",
        category: "Community",
        progress: 33,
        deadline: "2024-05-31",
        priority: "low",
        tags: ["Open Source", "Community", "GitHub"],
        milestones: [
          { id: 1, title: "Find suitable projects", completed: true },
          { id: 2, title: "First contribution", completed: false },
          { id: 3, title: "Second contribution", completed: false },
          { id: 4, title: "Third contribution", completed: false }
        ]
      }
    ],
    completed: [
      {
        id: 4,
        title: "Master TypeScript Fundamentals",
        description: "Complete comprehensive TypeScript course and build 3 projects",
        category: "Learning",
        progress: 100,
        completedDate: "2024-03-15",
        priority: "high",
        tags: ["TypeScript", "JavaScript", "Learning"]
      },
      {
        id: 5,
        title: "Build AI Chat Application",
        description: "Create a full-stack chat app with OpenAI integration",
        category: "Project",
        progress: 100,
        completedDate: "2024-02-28",
        priority: "medium",
        tags: ["AI", "Full-Stack", "OpenAI"]
      }
    ],
    archived: [
      {
        id: 6,
        title: "Learn Vue.js Framework",
        description: "Explore Vue.js as alternative to React",
        category: "Learning",
        progress: 20,
        archivedDate: "2024-01-15",
        reason: "Prioritizing React expertise",
        tags: ["Vue.js", "Frontend"]
      }
    ]
  });

  // Activity data for the last 30 days
  useEffect(() => {
    const generateActivityData = () => {
      const data = [];
      const today = new Date();
      
      for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // Generate realistic activity data
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        
        let baseActivity = isWeekend ? 30 : 70;
        const randomVariation = Math.random() * 40 - 20; // -20 to +20
        const activity = Math.max(0, Math.min(100, baseActivity + randomVariation));
        
        data.push({
          date: date.toISOString().split('T')[0],
          activity: Math.round(activity),
          goals: Math.floor(Math.random() * 3),
          badges: Math.floor(Math.random() * 2),
          connections: Math.floor(Math.random() * 5)
        });
      }
      
      return data;
    };
    
    setActivityData(generateActivityData());
  }, []);

  // Connected services with real integration status
  const [connectedServices, setConnectedServices] = useState({
    openai: { 
      connected: true, 
      apiKey: "sk-...hidden", 
      lastSync: "2 minutes ago",
      usage: "AI personality context, chat responses"
    },
    discord: { 
      connected: true, 
      webhook: "https://discord...", 
      lastSync: "5 minutes ago",
      usage: "Auto-introductions, event notifications"
    },
    slack: { 
      connected: true, 
      token: "xoxb-...hidden", 
      lastSync: "1 hour ago",
      usage: "Team updates, goal completions"
    },
    notion: { 
      connected: false, 
      apiKey: "", 
      lastSync: "Never",
      usage: "Goal tracking, content generation"
    },
    whatsapp: { 
      connected: false, 
      apiKey: "", 
      lastSync: "Never",
      usage: "Mobile notifications, supporter chat"
    },
    twitter: { 
      connected: true, 
      token: "...hidden", 
      lastSync: "30 minutes ago",
      usage: "Profile updates, achievement sharing"
    }
  });

  // Badge system (GOLD acronym)
  const badgeCategories = {
    G: { 
      name: "Grittiness", 
      subcategories: ["Mettle", "Ambition"], 
      color: "red",
      description: "Determination and drive to overcome challenges"
    },
    O: { 
      name: "Omnipotence", 
      subcategories: ["Nerve", "Intelligence"], 
      color: "purple",
      description: "Confidence and intellectual capability"
    },
    L: { 
      name: "Liveliness", 
      subcategories: ["Friendliness", "Engagement"], 
      color: "green",
      description: "Energy and social connection"
    },
    D: { 
      name: "Devotion", 
      subcategories: ["Sensibility", "Trust"], 
      color: "blue",
      description: "Loyalty and emotional intelligence"
    }
  };

  const userBadges = {
    Mettle: 6, Ambition: 4, Nerve: 7, Intelligence: 8,
    Friendliness: 5, Engagement: 6, Sensibility: 7, Trust: 5
  };

  // Sample workflows
  useEffect(() => {
    setWorkflows([
      {
        id: 1,
        name: "Discord to Profile Status",
        trigger: { service: "Discord", event: "Message with #status" },
        action: { service: "Profile", type: "Update status" },
        active: true,
        executions: 23
      },
      {
        id: 2,
        name: "Goal Complete → Slack",
        trigger: { service: "Ourverse", event: "Goal completed" },
        action: { service: "Slack", type: "Post message" },
        active: true,
        executions: 34
      },
      {
        id: 3,
        name: "AI Daily Summary",
        trigger: { service: "Schedule", event: "Daily at 9am" },
        action: { service: "OpenAI", type: "Generate summary" },
        active: false,
        executions: 12
      }
    ]);
  }, []);

  const generateAISummary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2500);
  };

  const connectService = (service: string) => {
    // Simulate connection process
    setConnectedServices(prev => ({
      ...prev,
      [service]: {
        ...prev[service],
        connected: true,
        lastSync: "Just now"
      }
    }));
  };

  const createGoal = (goalData: any) => {
    const newGoal = {
      id: Date.now(),
      ...goalData,
      progress: 0,
      milestones: []
    };
    
    setGoals(prev => ({
      ...prev,
      active: [...prev.active, newGoal]
    }));
    
    setShowGoalModal(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Learning': return 'text-blue-400 bg-blue-500/20';
      case 'Career': return 'text-purple-400 bg-purple-500/20';
      case 'Project': return 'text-green-400 bg-green-500/20';
      case 'Community': return 'text-orange-400 bg-orange-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getBadgeColorClasses = (color: string) => {
    const colorMap = {
      red: {
        bg: 'bg-red-500/20',
        border: 'border-red-500/50',
        text: 'text-red-400',
        progress: 'bg-red-500'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/50',
        text: 'text-purple-400',
        progress: 'bg-purple-500'
      },
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-500/50',
        text: 'text-green-400',
        progress: 'bg-green-500'
      },
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        progress: 'bg-blue-500'
      }
    };
    return colorMap[color] || colorMap.purple;
  };

  // Enhanced Badge Data for Charts
  const badgeChartData = Object.entries(userBadges).map(([skill, value]) => ({
    skill,
    value,
    maxValue: 10,
    category: Object.entries(badgeCategories).find(([, cat]) => 
      cat.subcategories.includes(skill)
    )?.[1]?.name || 'Unknown'
  }));

  const overallBadgeStats = {
    totalPoints: Object.values(userBadges).reduce((sum, val) => sum + val, 0),
    maxPoints: 80,
    strongestAreas: Object.entries(userBadges)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([skill, value]) => ({ skill, value })),
    improvementAreas: Object.entries(userBadges)
      .sort(([,a], [,b]) => a - b)
      .slice(0, 3)
      .map(([skill, value]) => ({ skill, value })),
    averageScore: Object.values(userBadges).reduce((sum, val) => sum + val, 0) / 8
  };

  // Badge recommendations based on current data
  const getBadgeRecommendations = () => {
    const recommendations = [];
    
    // Find lowest scoring categories
    Object.entries(badgeCategories).forEach(([letter, category]) => {
      const categoryAvg = category.subcategories.reduce((sum, subcat) => 
        sum + (userBadges[subcat] || 0), 0) / category.subcategories.length;
      
      if (categoryAvg < 6) {
        recommendations.push({
          category: category.name,
          letter,
          issue: `Average score of ${categoryAvg.toFixed(1)}/10`,
          suggestion: `Focus on improving ${category.subcategories.join(' and ')} through ${getRecommendationText(category.name)}`,
          color: category.color
        });
      }
    });
    
    return recommendations;
  };

  const getRecommendationText = (categoryName: string) => {
    const suggestions = {
      'Grittiness': 'setting challenging goals and persisting through obstacles',
      'Omnipotence': 'building confidence and expanding knowledge',
      'Liveliness': 'engaging more with community and practicing communication',
      'Devotion': 'developing empathy and building trust with others'
    };
    return suggestions[categoryName] || 'focused practice and reflection';
  };

  // Main Profile View
  const ProfileView = () => (
    <div className="space-y-6">
      {/* Hero Profile Section */}
      <div className="relative bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
              AC
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold text-white">{profileData.name}</h1>
              <span className="text-purple-300">{profileData.username}</span>
            </div>
            <p className="text-purple-200 text-lg mb-3">{profileData.bio}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Joined {profileData.joinedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">{profileData.supporterCount} Supporters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{profileData.profileViews} Views</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{profileCompleteness}%</div>
              <div className="text-sm text-gray-400">Profile Power</div>
            </div>
            <button 
              onClick={generateAISummary}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center space-x-2"
            >
              {isGenerating ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Wand2 className="w-4 h-4" />
              )}
              <span>AI Enhance</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{profileData.activityMeter}%</p>
              <p className="text-sm text-gray-400">Activity</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-green-500/20">
              <Users className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{profileData.engagementMeter}%</p>
              <p className="text-sm text-gray-400">Engagement</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-orange-500/20">
              <Flame className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{profileData.currentStreak}</p>
              <p className="text-sm text-gray-400">Day Streak</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Target className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{profileData.completedGoals}</p>
              <p className="text-sm text-gray-400">Goals Done</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Activity className="w-6 h-6 mr-3 text-green-400" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white">Completed milestone: "Context API Project"</p>
              <p className="text-sm text-gray-400">React Advanced Course • 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white">Connected new service: Notion</p>
              <p className="text-sm text-gray-400">Integrations • 5 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white">Earned badge: Intelligence +1</p>
              <p className="text-sm text-gray-400">Badge System • 1 day ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white">Updated AI personality settings</p>
              <p className="text-sm text-gray-400">Profile • 2 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
          30-Day Activity Heatmap
        </h3>
        <div className="grid grid-cols-10 gap-1 mb-4">
          {activityData.map((day, index) => {
            const intensity = Math.floor(day.activity / 25); // 0-4 intensity levels
            const opacityClass = intensity === 0 ? 'opacity-20' : 
                               intensity === 1 ? 'opacity-40' :
                               intensity === 2 ? 'opacity-60' :
                               intensity === 3 ? 'opacity-80' : 'opacity-100';
            
            return (
              <div
                key={index}
                className={`w-6 h-6 bg-blue-500 rounded-sm ${opacityClass} hover:scale-110 transition-transform cursor-pointer`}
                title={`${day.date}: ${day.activity}% activity`}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>Less active</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 opacity-20 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-500 opacity-40 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-500 opacity-60 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-500 opacity-80 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-500 opacity-100 rounded-sm"></div>
          </div>
          <span>More active</span>
        </div>
      </div>

      {/* Skills & Expertise */}
      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" />
          Skills & Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technical Skills</h4>
            <div className="space-y-3">
              {[
                { skill: 'React/TypeScript', level: 95 },
                { skill: 'Node.js/Express', level: 88 },
                { skill: 'Python/AI/ML', level: 82 },
                { skill: 'Database Design', level: 78 },
                { skill: 'DevOps/AWS', level: 72 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-sm text-gray-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Soft Skills</h4>
            <div className="space-y-3">
              {[
                { skill: 'Leadership', level: 85 },
                { skill: 'Communication', level: 92 },
                { skill: 'Problem Solving', level: 90 },
                { skill: 'Mentoring', level: 88 },
                { skill: 'Project Management', level: 80 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-sm text-gray-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Personality Configuration */}
      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Brain className="w-6 h-6 mr-3 text-cyan-400" />
          AI Personality Configuration
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-cyan-300 mb-2">Communication Tone</label>
            <select className="w-full bg-gray-800/70 border border-gray-600/50 rounded-lg px-4 py-2 text-white">
              <option>Professional yet approachable</option>
              <option>Casual and friendly</option>
              <option>Formal and technical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-2">Response Depth</label>
            <select className="w-full bg-gray-800/70 border border-gray-600/50 rounded-lg px-4 py-2 text-white">
              <option>Brief</option>
              <option>Detailed but concise</option>
              <option>Comprehensive</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm text-cyan-300 mb-2">AI Interests & Context</label>
          <div className="flex flex-wrap gap-2">
            {profileData.aiPersonality.interests.map((interest, idx) => (
              <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                {interest}
              </span>
            ))}
            <button className="px-3 py-1 border border-dashed border-cyan-500/50 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/10">
              <Plus className="w-3 h-3 inline mr-1" />
              Add
            </button>
          </div>
        </div>
      </div>
{/* AI Cross-Platform Preferences */}
         <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center">
             <Webhook className="w-6 h-6 mr-3 text-purple-400" />
             AI Cross-Platform Preferences
           </h3>
           <p className="text-gray-400 mb-4">These settings are used across all your connected platforms for consistent AI interactions.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <label className="block text-sm text-purple-300 mb-2">Preferred Tone</label>
               <select className="w-full bg-gray-800/70 border border-gray-600/50 rounded-lg px-4 py-2 text-white">
                 <option selected={profileData.aiPreferences.tone === 'casual'}>Casual</option>
                 <option selected={profileData.aiPreferences.tone === 'professional'}>Professional</option>
                 <option selected={profileData.aiPreferences.tone === 'friendly'}>Friendly</option>
                 <option selected={profileData.aiPreferences.tone === 'technical'}>Technical</option>
               </select>
             </div>
             <div>
               <label className="block text-sm text-purple-300 mb-2">Language</label>
               <select className="w-full bg-gray-800/70 border border-gray-600/50 rounded-lg px-4 py-2 text-white">
                 <option value="en" selected={profileData.aiPreferences.language === 'en'}>English</option>
                 <option value="es">Spanish</option>
                 <option value="fr">French</option>
                 <option value="de">German</option>
                 <option value="zh">Chinese</option>
               </select>
             </div>
             <div>
               <label className="block text-sm text-purple-300 mb-2">Response Length</label>
               <select className="w-full bg-gray-800/70 border border-gray-600/50 rounded-lg px-4 py-2 text-white">
                 <option selected={profileData.aiPreferences.responseLength === 'concise'}>Concise</option>
                 <option selected={profileData.aiPreferences.responseLength === 'moderate'}>Moderate</option>
                 <option selected={profileData.aiPreferences.responseLength === 'detailed'}>Detailed</option>
               </select>
             </div>
             <div>
               <label className="block text-sm text-purple-300 mb-2">AI Persona</label>
               <select className="w-full bg-gray-800/70 border border-gray-600/50 rounded-lg px-4 py-2 text-white">
                 <option selected={profileData.aiPreferences.persona === 'friendly'}>Friendly Assistant</option>
                 <option selected={profileData.aiPreferences.persona === 'expert'}>Expert Advisor</option>
                 <option selected={profileData.aiPreferences.persona === 'creative'}>Creative Partner</option>
                 <option selected={profileData.aiPreferences.persona === 'mentor'}>Mentor</option>
               </select>
             </div>
           </div>
           
           <div className="mt-4">
             <label className="block text-sm text-purple-300 mb-2">Preferred Topics</label>
             <div className="flex flex-wrap gap-2">
               {profileData.aiPreferences.topics && profileData.aiPreferences.topics.map((topic, idx) => (
                 <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                   {topic}
                 </span>
               ))}
               <button className="px-3 py-1 border border-dashed border-purple-500/50 text-purple-400 rounded-full text-sm hover:bg-purple-500/10">
                 <Plus className="w-3 h-3 inline mr-1" />
                 Add
               </button>
             </div>
           </div>
         </div>

         {/* Skills & Expertise */}
         <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center">
             <Award className="w-6 h-6 mr-3 text-yellow-400" />
             Skills & Expertise
           </h3>
           
           <div className="space-y-4">
             {profileData.skills && profileData.skills.map((skill, idx) => (
               <div key={idx} className="space-y-1">
                 <div className="flex justify-between">
                   <span className="text-white">{skill.name}</span>
                   <span className="text-yellow-400">{skill.level}%</span>
                 </div>
                 <div className="w-full bg-gray-800/70 rounded-full h-2">
                   <div 
                     className="bg-gradient-to-r from-yellow-500 to-yellow-300 h-2 rounded-full" 
                     style={{ width: `${skill.level}%` }}
                   ></div>
                 </div>
               </div>
             ))}
             
             <button className="mt-4 w-full py-2 border border-dashed border-yellow-500/50 text-yellow-400 rounded-lg text-sm hover:bg-yellow-500/10 flex items-center justify-center">
               <Plus className="w-4 h-4 mr-2" />
               Add New Skill
             </button>
           </div>
         </div>    </div>
    </div>
  );

  // Enhanced Badge Globe View with Spider Chart
  const BadgeGlobeView = () => {
    const recommendations = getBadgeRecommendations();
    
    return (
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-3 text-purple-400" />
            Badge Globe Analytics
          </h2>
          <p className="text-purple-200 text-lg">Master the GOLD framework to unlock your full potential</p>
        </div>

        {/* Quick Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4 text-center border border-purple-500/30">
            <div className="text-3xl font-bold text-white">{overallBadgeStats.totalPoints}</div>
            <div className="text-sm text-purple-200">Total Points</div>
            <div className="text-xs text-gray-400">/ {overallBadgeStats.maxPoints} max</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-4 text-center border border-green-500/30">
            <div className="text-3xl font-bold text-white">{overallBadgeStats.averageScore.toFixed(1)}</div>
            <div className="text-sm text-green-200">Average Score</div>
            <div className="text-xs text-gray-400">/ 10.0 max</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-4 text-center border border-yellow-500/30">
            <div className="text-3xl font-bold text-white">{Math.round((overallBadgeStats.totalPoints / overallBadgeStats.maxPoints) * 100)}%</div>
            <div className="text-sm text-yellow-200">Overall Progress</div>
            <div className="text-xs text-gray-400">completion</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 rounded-xl p-4 text-center border border-red-500/30">
            <div className="text-3xl font-bold text-white">{Object.keys(badgeCategories).length}</div>
            <div className="text-sm text-red-200">Active Categories</div>
            <div className="text-xs text-gray-400">in GOLD system</div>
          </div>
        </div>

        {/* Spider Chart Section */}
        <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-400" />
            Skills Radar Analysis
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={badgeChartData}>
                  <PolarGrid gridType="polygon" stroke="#374151" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: '#D1D5DB', fontSize: 12 }}
                    className="text-xs"
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 10]} 
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  />
                  <Radar
                    name="Current Level"
                    dataKey="value"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Max Potential"
                    dataKey="maxValue"
                    stroke="#374151"
                    fill="transparent"
                    strokeWidth={1}
                    strokeDasharray="5 5"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Strongest Areas
                </h4>
                <div className="space-y-3">
                  {overallBadgeStats.strongestAreas.map((area, index) => (
                    <div key={area.skill} className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                          {index + 1}
                        </div>
                        <span className="text-white font-medium">{area.skill}</span>
                      </div>
                      <span className="text-green-400 font-bold">{area.value}/10</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-orange-400" />
                  Growth Opportunities
                </h4>
                <div className="space-y-3">
                  {overallBadgeStats.improvementAreas.map((area, index) => (
                    <div key={area.skill} className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                          {index + 1}
                        </div>
                        <span className="text-white font-medium">{area.skill}</span>
                      </div>
                      <span className="text-orange-400 font-bold">{area.value}/10</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Recommendations */}
        {recommendations.length > 0 && (
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-purple-400" />
              AI-Powered Recommendations
            </h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const colors = getBadgeColorClasses(rec.color);
                return (
                  <div key={index} className={`p-6 rounded-xl border ${colors.bg} ${colors.border}`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                        <span className={`text-xl font-bold ${colors.text}`}>{rec.letter}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold ${colors.text} mb-2`}>{rec.category} Improvement</h4>
                        <p className="text-gray-300 mb-3">{rec.issue}</p>
                        <p className="text-white bg-gray-800/50 p-3 rounded-lg">
                          💡 <strong>Suggestion:</strong> {rec.suggestion}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Interactive GOLD Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(badgeCategories).map(([letter, category]) => {
            const categoryTotal = category.subcategories.reduce((sum, subcat) => sum + ((userBadges as any)[subcat] || 0), 0);
            const categoryMax = category.subcategories.length * 10;
            const categoryPercent = Math.round((categoryTotal / categoryMax) * 100);
            const colors = getBadgeColorClasses(category.color);

            return (
              <div 
                key={letter}
                className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedBadgeCategory({letter, category})}
              >
                <div className="text-center mb-4">
                  <div className={`w-20 h-20 mx-auto rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center mb-3 relative`}>
                    <span className={`text-3xl font-bold ${colors.text}`}>{letter}</span>
                    {categoryPercent >= 80 && (
                      <div className="absolute -top-2 -right-2">
                        <Trophy className="w-6 h-6 text-yellow-400" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-gray-400 mt-2">{category.description}</p>
                </div>

                <div className="space-y-3">
                  {category.subcategories.map(subcat => {
                    const level = (userBadges as any)[subcat] || 0;
                    return (
                      <div key={subcat} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{subcat}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{level}/10</span>
                            {level >= 8 && <Star className="w-4 h-4 text-yellow-400" />}
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`${colors.progress} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${(level / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Category Progress</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{categoryPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                    <div 
                      className={`${colors.progress} h-3 rounded-full transition-all duration-700`}
                      style={{ width: `${categoryPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Badges */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Achievement Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl border-2 text-center ${overallBadgeStats.totalPoints >= 20 ? 'border-green-500 bg-green-500/10' : 'border-gray-600 bg-gray-800/50'}`}>
              <Trophy className={`w-12 h-12 mx-auto mb-3 ${overallBadgeStats.totalPoints >= 20 ? 'text-green-400' : 'text-gray-500'}`} />
              <h4 className="text-lg font-bold text-white mb-2">Explorer</h4>
              <p className="text-sm text-gray-400">Earn 20+ badge points</p>
              <p className={`text-xs mt-2 ${overallBadgeStats.totalPoints >= 20 ? 'text-green-400' : 'text-gray-500'}`}>
                {overallBadgeStats.totalPoints >= 20 ? '✅ Unlocked!' : `${20 - overallBadgeStats.totalPoints} points to go`}
              </p>
            </div>
            <div className={`p-6 rounded-xl border-2 text-center ${overallBadgeStats.totalPoints >= 50 ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600 bg-gray-800/50'}`}>
              <Star className={`w-12 h-12 mx-auto mb-3 ${overallBadgeStats.totalPoints >= 50 ? 'text-blue-400' : 'text-gray-500'}`} />
              <h4 className="text-lg font-bold text-white mb-2">Master</h4>
              <p className="text-sm text-gray-400">Earn 50+ badge points</p>
              <p className={`text-xs mt-2 ${overallBadgeStats.totalPoints >= 50 ? 'text-blue-400' : 'text-gray-500'}`}>
                {overallBadgeStats.totalPoints >= 50 ? '✅ Unlocked!' : `${50 - overallBadgeStats.totalPoints} points to go`}
              </p>
            </div>
            <div className={`p-6 rounded-xl border-2 text-center ${overallBadgeStats.totalPoints >= 75 ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 bg-gray-800/50'}`}>
              <Sparkles className={`w-12 h-12 mx-auto mb-3 ${overallBadgeStats.totalPoints >= 75 ? 'text-purple-400' : 'text-gray-500'}`} />
              <h4 className="text-lg font-bold text-white mb-2">Legend</h4>
              <p className="text-sm text-gray-400">Earn 75+ badge points</p>
              <p className={`text-xs mt-2 ${overallBadgeStats.totalPoints >= 75 ? 'text-purple-400' : 'text-gray-500'}`}>
                {overallBadgeStats.totalPoints >= 75 ? '✅ Unlocked!' : `${75 - overallBadgeStats.totalPoints} points to go`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Goals View
  const GoalsView = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Goal Management</h2>
        <p className="text-gray-400">Track your progress and achieve your ambitions</p>
        
        {/* Goal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
            <div className="text-2xl font-bold text-green-400">{goals.active.length}</div>
            <div className="text-sm text-gray-400">Active Goals</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
            <div className="text-2xl font-bold text-blue-400">{goals.completed.length}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
            <div className="text-2xl font-bold text-purple-400">
              {Math.round(goals.active.reduce((sum, goal) => sum + goal.progress, 0) / goals.active.length)}%
            </div>
            <div className="text-sm text-gray-400">Avg Progress</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
            <div className="text-2xl font-bold text-orange-400">{profileData.currentStreak}</div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Goal Categories */}
      <div className="flex space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 mb-6 border border-gray-700/50">
        {[
          { id: 'active', label: 'Active', count: goals.active.length },
          { id: 'completed', label: 'Completed', count: goals.completed.length },
          { id: 'archived', label: 'Archived', count: goals.archived.length }
        ].map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedGoalCategory(category.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all ${
              selectedGoalCategory === category.id
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <span>{category.label}</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
          </button>
        ))}
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {goals[selectedGoalCategory].map(goal => (
          <div key={goal.id} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{goal.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getCategoryColor(goal.category)}`}>
                    {goal.category}
                  </span>
                  {goal.priority && (
                    <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(goal.priority)}`}>
                      {goal.priority}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-3">{goal.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {goal.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-white mb-1">{goal.progress}%</div>
                {goal.deadline && (
                  <div className="text-sm text-gray-400">Due: {new Date(goal.deadline).toLocaleDateString()}</div>
                )}
                {goal.completedDate && (
                  <div className="text-sm text-green-400">Completed: {new Date(goal.completedDate).toLocaleDateString()}</div>
                )}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
            
            {/* Milestones */}
            {goal.milestones && goal.milestones.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Milestones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {goal.milestones.map(milestone => (
                    <div key={milestone.id} className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        milestone.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-500'
                      }`}>
                        {milestone.completed && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span className={`text-sm ${
                        milestone.completed ? 'text-green-400 line-through' : 'text-gray-300'
                      }`}>
                        {milestone.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Create Goal Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => setShowGoalModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center space-x-2"
        >
          <Target className="w-5 h-5" />
          <span>Create New Goal</span>
        </button>
      </div>
    </div>
  );

  // Integrations View
const IntegrationsView = () => {
       const [showConfigModal, setShowConfigModal] = useState(false);
       const [selectedService, setSelectedService] = useState(null);
       
       const openConfigModal = (serviceKey) => {
         setSelectedService(serviceKey);
         setShowConfigModal(true);
       };
       
       return (
       <div className="space-y-6">
         <div className="text-center mb-8">
           <h2 className="text-3xl font-bold text-white mb-2">Connected Services</h2>
           <p className="text-gray-400">Your unified profile powers AI across all platforms</p>
         </div>
 
         {/* Integration Categories */}
         <div className="flex space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 mb-6 border border-gray-700/50">
           {[
             { id: 'all', label: 'All Services' },
             { id: 'connected', label: 'Connected' },
             { id: 'available', label: 'Available' }
           ].map(category => (
             <button
               key={category.id}
               className={`flex-1 py-2 px-4 rounded-lg text-center transition-colors ${
                 category.id === 'all' 
                   ? 'bg-purple-600 text-white' 
                   : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
               }`}
             >
               {category.label}
             </button>
           ))}
         </div>
 
         <div className="grid gap-4">
           {Object.entries(connectedServices).map(([key, service]) => (
             <div 
               key={key}
               className={`bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border transition-all ${
                 service.connected ? 'border-green-500/30' : 'border-gray-700/50'
               }`}
             >
               <div className="flex items-center justify-between">
                 <div className="flex items-center space-x-4">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                     service.connected ? 'bg-green-500/20' : 'bg-gray-700/50'
                   }`}>
                     {key === 'openai' && <Bot className="w-6 h-6 text-green-400" />}
                     {key === 'discord' && <MessageSquare className="w-6 h-6 text-indigo-400" />}
                     {key === 'slack' && <Hash className="w-6 h-6 text-purple-400" />}
                     {key === 'notion' && <Database className="w-6 h-6 text-gray-400" />}
                     {key === 'whatsapp' && <MessageSquare className="w-6 h-6 text-green-400" />}
                     {key === 'twitter' && <Twitter className="w-6 h-6 text-blue-400" />}
                     {key === 'google' && <User className="w-6 h-6 text-red-400" />}
                   </div>
                   
                   <div className="flex-1">
                     <h3 className="text-lg font-semibold text-white capitalize">{key}</h3>
                     <p className="text-sm text-gray-400">{service.usage}</p>
                     {service.connected && (
                       <p className="text-xs text-green-400 mt-1">Last sync: {service.lastSync}</p>
                     )}
                   </div>
                 </div>
 
                 <div className="flex items-center space-x-3">
                   {service.connected ? (
                     <>
                       <button 
                         onClick={() => openConfigModal(key)}
                         className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                       >
                         Configure
                       </button>
                       <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                         Disconnect
                       </button>
                     </>
                   ) : (
                     <button 
                       onClick={() => connectService(key)}
                       className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                     >
                       Connect
                     </button>
                   )}
                 </div>
               </div>
               
               {/* Service Details (expandable) */}
               {service.connected && (
                 <div className="mt-4 pt-4 border-t border-gray-700/50">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <h4 className="text-sm font-semibold text-gray-300 mb-2">Integration Status</h4>
                       <div className="flex items-center space-x-2">
                         <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                         <span className="text-sm text-gray-400">Active and working properly</span>
                       </div>
                     </div>
                     
                     <div>
                       <h4 className="text-sm font-semibold text-gray-300 mb-2">Connected Features</h4>
                       <div className="flex flex-wrap gap-2">
                         {key === 'openai' && (
                           <>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">AI Chat</span>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Profile Enhancement</span>
                           </>
                         )}
                         {key === 'discord' && (
                           <>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Notifications</span>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Chat Bot</span>
                           </>
                         )}
                         {key === 'slack' && (
                           <>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Team Updates</span>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Workflow Triggers</span>
                           </>
                         )}
                         {key === 'twitter' && (
                           <>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Profile Sync</span>
                             <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">Auto-posting</span>
                           </>
                         )}
                       </div>
                     </div>
                   </div>
                 </div>
               )}
             </div>
           ))}
         </div>
 
         {/* Add New Integration Button */}
         <div className="flex justify-center mt-8">
           <button 
             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center space-x-2"
           >
             <Plus className="w-5 h-5" />
             <span>Add New Integration</span>
           </button>
         </div>
         
         {/* Integration Configuration Modal */}
         {showConfigModal && selectedService && (
           <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
             <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xl font-bold text-white capitalize">{selectedService} Configuration</h3>
                 <button 
                   onClick={() => setShowConfigModal(false)}
                   className="text-gray-400 hover:text-white"
                 >
                   <X className="w-5 h-5" />
                 </button>
               </div>
               
               <div className="space-y-4">
                 {selectedService === 'openai' && (
                   <>
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">API Key</label>
                       <input 
                         type="password" 
                         value={connectedServices.openai.apiKey} 
                         className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                         placeholder="sk-..." 
                       />
                       <p className="text-xs text-gray-500 mt-1">Your API key is stored securely</p>
                     </div>
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Default Model</label>
                       <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                         <option>GPT-4</option>
                         <option>GPT-3.5 Turbo</option>
                         <option>Claude 3</option>
                       </select>
                     </div>
                   </>
                 )}
                 
                 {selectedService === 'discord' && (
                   <>
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Webhook URL</label>
                       <input 
                         type="text" 
                         value={connectedServices.discord.webhook} 
                         className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                         placeholder="https://discord.com/api/webhooks/..." 
                       />
                     </div>
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Default Channel</label>
                       <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                         <option>general</option>
                         <option>announcements</option>
                         <option>ai-chat</option>
                       </select>
                     </div>
                   </>
                 )}
                 
                 <div className="flex justify-end space-x-3 mt-6">
                   <button 
                     onClick={() => setShowConfigModal(false)}
                     className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                   >
                     Cancel
                   </button>
                   <button 
                     className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                   >
                     Save Changes
                   </button>
                 </div>
               </div>
             </div>
           </div>
         )}
 
         {/* Add Workflow Button */}
         <div className="flex justify-center mt-8">
           <button 
             onClick={() => setShowWorkflowModal(true)}
             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center space-x-2"
           >
             <Zap className="w-5 h-5" />
             <span>Create Automation Workflow</span>
           </button>
         </div>
       </div>
       );
     };
  // Workflows View
const WorkflowsView = () => {
       const [showWorkflowEditor, setShowWorkflowEditor] = useState(false);
       const [editingWorkflow, setEditingWorkflow] = useState(null);
       const [workflowFilter, setWorkflowFilter] = useState('all');
       
       const editWorkflow = (workflow) => {
         setEditingWorkflow(workflow);
         setShowWorkflowEditor(true);
       };
       
       const createNewWorkflow = () => {
         setEditingWorkflow({
           id: Date.now(),
           name: "New Workflow",
           trigger: { service: "", event: "" },
           action: { service: "", type: "" },
           active: true,
           executions: 0
         });
         setShowWorkflowEditor(true);
       };
       
       const toggleWorkflowStatus = (id) => {
         setWorkflows(workflows.map(w => 
           w.id === id ? {...w, active: !w.active} : w
         ));
       };
       
       const filteredWorkflows = workflowFilter === 'all' 
         ? workflows 
         : workflows.filter(w => workflowFilter === 'active' ? w.active : !w.active);
       
       return (
       <div className="space-y-6">
         <div className="text-center mb-8">
           <h2 className="text-3xl font-bold text-white mb-2">Automation Workflows</h2>
           <p className="text-gray-400">Connect your services with intelligent automation</p>
         </div>
         
         {/* Workflow Filters */}
         <div className="flex space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 mb-6 border border-gray-700/50">
           {[
             { id: 'all', label: 'All Workflows' },
             { id: 'active', label: 'Active' },
             { id: 'inactive', label: 'Inactive' }
           ].map(filter => (
             <button
               key={filter.id}
               onClick={() => setWorkflowFilter(filter.id)}
               className={`flex-1 py-2 px-4 rounded-lg text-center transition-colors ${
                 filter.id === workflowFilter 
                   ? 'bg-purple-600 text-white' 
                   : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
               }`}
             >
               {filter.label}
             </button>
           ))}
         </div>

         <div className="grid gap-4">
           {filteredWorkflows.map(workflow => (
             <div key={workflow.id} className={`bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border ${
               workflow.active ? 'border-purple-500/30' : 'border-gray-700/50'
             }`}>
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-white">{workflow.name}</h3>
                 <div className="flex items-center space-x-3">
                   <span className="text-sm text-gray-400">{workflow.executions} runs</span>
                   <button 
                     onClick={() => toggleWorkflowStatus(workflow.id)}
                     className={`w-12 h-6 rounded-full relative transition-colors ${
                       workflow.active ? 'bg-green-500' : 'bg-gray-600'
                     }`}
                   >
                     <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                       workflow.active ? 'translate-x-6' : 'translate-x-1'
                     }`} />
                   </button>
                 </div>
               </div>
               
               <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                 <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
                   <div className="text-xs text-gray-400 mb-1">TRIGGER</div>
                   <div className="flex items-center space-x-2">
                     {workflow.trigger.service === "Discord" && <MessageSquare className="w-4 h-4 text-indigo-400" />}
                     {workflow.trigger.service === "Ourverse" && <Bot className="w-4 h-4 text-purple-400" />}
                     {workflow.trigger.service === "Schedule" && <Calendar className="w-4 h-4 text-blue-400" />}
                     <div className="text-white">{workflow.trigger.service}</div>
                   </div>
                   <div className="text-sm text-gray-400">{workflow.trigger.event}</div>
                 </div>
                 
                 <ArrowRight className="hidden md:block w-5 h-5 text-purple-400 flex-shrink-0" />
                 
                 <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
                   <div className="text-xs text-gray-400 mb-1">ACTION</div>
                   <div className="flex items-center space-x-2">
                     {workflow.action.service === "Profile" && <User className="w-4 h-4 text-green-400" />}
                     {workflow.action.service === "Slack" && <Hash className="w-4 h-4 text-purple-400" />}
                     {workflow.action.service === "OpenAI" && <Bot className="w-4 h-4 text-green-400" />}
                     <div className="text-white">{workflow.action.service}</div>
                   </div>
                   <div className="text-sm text-gray-400">{workflow.action.type}</div>
                 </div>
               </div>
               
               {/* Workflow Actions */}
               <div className="flex justify-end mt-4 pt-4 border-t border-gray-700/50">
                 <button 
                   onClick={() => editWorkflow(workflow)}
                   className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                 >
                   Edit
                 </button>
               </div>
             </div>
           ))}
         </div>

         {/* Create Workflow Button */}
         <div className="flex justify-center">
           <button 
             onClick={createNewWorkflow}
             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center space-x-2"
           >
             <Plus className="w-5 h-5" />
             <span>Create New Workflow</span>
           </button>
         </div>
         
         {/* Workflow Editor Modal */}
         {showWorkflowEditor && editingWorkflow && (
           <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
             <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-2xl">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-white">
                   {editingWorkflow.executions > 0 ? 'Edit' : 'Create'} Workflow
                 </h3>
                 <button 
                   onClick={() => setShowWorkflowEditor(false)}
                   className="text-gray-400 hover:text-white"
                 >
                   <X className="w-5 h-5" />
                 </button>
               </div>
               
               <div className="space-y-6">
                 {/* Workflow Name */}
                 <div>
                   <label className="block text-sm text-gray-300 mb-2">Workflow Name</label>
                   <input 
                     type="text" 
                     value={editingWorkflow.name} 
                     className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                   />
                 </div>
                 
                 {/* Trigger Configuration */}
                 <div>
                   <h4 className="text-md font-semibold text-white mb-3">Trigger (When this happens...)</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Service</label>
                       <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                         <option value="Discord">Discord</option>
                         <option value="Slack">Slack</option>
                         <option value="Ourverse">Ourverse</option>
                         <option value="Schedule">Schedule</option>
                         <option value="OpenAI">OpenAI</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Event</label>
                       <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                         <option value="Message with #status">Message with #status</option>
                         <option value="Any message">Any message</option>
                         <option value="Goal completed">Goal completed</option>
                         <option value="Daily at 9am">Daily at 9am</option>
                         <option value="Profile viewed">Profile viewed</option>
                       </select>
                     </div>
                   </div>
                 </div>
                 
                 {/* Action Configuration */}
                 <div>
                   <h4 className="text-md font-semibold text-white mb-3">Action (Do this...)</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Service</label>
                       <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                         <option value="Profile">Profile</option>
                         <option value="Slack">Slack</option>
                         <option value="Discord">Discord</option>
                         <option value="OpenAI">OpenAI</option>
                         <option value="Notion">Notion</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm text-gray-300 mb-2">Action Type</label>
                       <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                         <option value="Update status">Update status</option>
                         <option value="Post message">Post message</option>
                         <option value="Generate summary">Generate summary</option>
                         <option value="Create note">Create note</option>
                       </select>
                     </div>
                   </div>
                   
                   {/* Action Details */}
                   <div className="mt-4">
                     <label className="block text-sm text-gray-300 mb-2">Action Details</label>
                     <textarea 
                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white h-24"
                       placeholder="Enter message template, status format, or other details..."
                     ></textarea>
                     <p className="text-xs text-gray-500 mt-1">
                       Use {{variables}} to include dynamic content from the trigger
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex justify-end space-x-3 mt-6">
                   <button 
                     onClick={() => setShowWorkflowEditor(false)}
                     className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                   >
                     Cancel
                   </button>
                   <button 
                     className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                   >
                     Save Workflow
                   </button>
                 </div>
               </div>
             </div>
           </div>
         )}
       </div>
       );
     };          <span>Create New Workflow</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.4),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Ourverse
                </h1>
                <span className="text-xs text-gray-400">MVP</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">
                    {Object.values(connectedServices).filter(s => s.connected).length} Connected
                  </span>
                </div>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  AC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 mb-8 border border-gray-700/50 overflow-x-auto">
            {[
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'badges', label: 'Badge Globe', icon: Award },
              { id: 'goals', label: 'Goals', icon: Target },
              { id: 'integrations', label: 'Integrations', icon: Webhook },
              { id: 'workflows', label: 'Workflows', icon: Zap }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'profile' && <ProfileView />}
            {activeTab === 'badges' && <BadgeGlobeView />}
            {activeTab === 'goals' && <GoalsView />}
            {activeTab === 'integrations' && <IntegrationsView />}
            {activeTab === 'workflows' && <WorkflowsView />}
          </div>
        </div>
      </div>

      {/* Workflow Modal */}
      {showWorkflowModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-gray-700">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">Create Workflow</h3>
              <button 
                onClick={() => setShowWorkflowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Workflow Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Sync Discord to Profile"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Trigger Service</label>
                  <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>Select service...</option>
                    <option>Discord</option>
                    <option>Slack</option>
                    <option>Twitter</option>
                    <option>Schedule</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Action Service</label>
                  <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>Select service...</option>
                    <option>Profile</option>
                    <option>OpenAI</option>
                    <option>Slack</option>
                    <option>Discord</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Trigger Event</label>
                <input 
                  type="text" 
                  placeholder="e.g., New message with #status"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Action Type</label>
                <input 
                  type="text" 
                  placeholder="e.g., Update profile status"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button 
                  onClick={() => setShowWorkflowModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    // Here you would add the workflow logic
                    setShowWorkflowModal(false);
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all"
                >
                  Create Workflow
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Goal Creation Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-gray-700">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">Create New Goal</h3>
              <button 
                onClick={() => setShowGoalModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Goal Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Master Machine Learning Fundamentals"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Description</label>
                <textarea 
                  placeholder="Describe your goal and what success looks like..."
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Category</label>
                  <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>Learning</option>
                    <option>Career</option>
                    <option>Project</option>
                    <option>Community</option>
                    <option>Health</option>
                    <option>Personal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Priority</label>
                  <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Deadline</label>
                <input 
                  type="date" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Tags (comma separated)</label>
                <input 
                  type="text" 
                  placeholder="e.g., Python, AI, Machine Learning"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button 
                  onClick={() => setShowGoalModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    // Here you would collect form data and create the goal
                    setShowGoalModal(false);
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all"
                >
                  Create Goal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurverseMVP;