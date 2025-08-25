import { Play, ArrowRight, Bluetooth, Cpu, Eye, Zap, Users, Book, MapPin, Camera, Wrench, GraduationCap, Gamepad2, Menu, Phone, Mail, Github, Linkedin, AlertTriangle, Shield, Building, BookOpen, Smartphone, ChevronUp, Star, Rocket, Target, Award, Battery, Radio, Gauge, Signal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-bujji-orange to-bujji-cyan rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-bujji-orange to-bujji-cyan bg-clip-text text-transparent">
                A3Bujji Core
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('modes')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Modes
              </button>
              <button 
                onClick={() => scrollToSection('architecture')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Architecture
              </button>
              <button 
                onClick={() => scrollToSection('prototypes')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Prototypes
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection('mobile-app')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Mobile App
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('innovators')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-bujji-orange transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('hero')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Home</button>
                <button onClick={() => scrollToSection('modes')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Modes</button>
                <button onClick={() => scrollToSection('architecture')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Architecture</button>
                <button onClick={() => scrollToSection('prototypes')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Prototypes</button>
                <button onClick={() => scrollToSection('use-cases')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Use Cases</button>
                <button onClick={() => scrollToSection('mobile-app')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Mobile App</button>
                <button onClick={() => scrollToSection('demo')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Demo</button>
                <button onClick={() => scrollToSection('innovators')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Team</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Contact</button>
                <div className="px-4 py-2 flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Theme:</span>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-4 md:px-8 lg:px-16 xl:px-32 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-gradient-to-r from-bujji-orange to-bujji-pink text-white mb-4">
                  Multi-Mode Robotics Framework
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-bujji-orange via-bujji-cyan to-bujji-purple bg-clip-text text-transparent leading-tight">
                  A3Bujji Core
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mt-4">
                  Empowering Developers with a Multi-Mode Robotics Framework Foundation for <span className="text-bujji-orange font-semibold">Assistance</span>, <span className="text-bujji-cyan font-semibold">Actuation</span>, and <span className="text-bujji-yellow font-semibold">Automation</span>
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 mt-6">
                  A revolutionary robotics platform that seamlessly transitions between three operational environments, offering flexible functionality based on the level of human interaction.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-bujji-orange to-bujji-orange-light hover:from-bujji-orange-dark hover:to-bujji-orange text-white shadow-lg"
                  onClick={() => scrollToSection('demo')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button variant="outline" size="lg" className="border-bujji-cyan text-bujji-cyan hover:bg-bujji-cyan hover:text-white">
                  View Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bujji-green rounded-full animate-pulse"></div>
                  Arduino-based
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bujji-cyan rounded-full animate-pulse"></div>
                  Bluetooth Enabled
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bujji-orange rounded-full animate-pulse"></div>
                  AI-Powered
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F83275f4b209648a8926265ce560b8e2f?format=webp&width=800"
                  alt="A3Bujji Core Robot - 3D Visualization"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-bujji-orange/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-bujji-cyan/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-bujji-purple/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-bujji-purple via-bujji-pink to-bujji-orange">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm opacity-90">Operational Modes</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Arduino Compatible</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-sm opacity-90">Possibilities</div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Revolutionizing Robotics with Adaptive Intelligence
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Experience the future of robotics with A3Bujji Core's seamless mode transitions and intelligent automation capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Three Operational Modes */}
      <section id="modes" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Three Operational Environments
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A3Bujji Core adapts to your needs with three distinct operational modes, each designed for specific use cases and interaction levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-bujji-orange transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-orange to-bujji-orange-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-bujji-orange">Assistance Mode</CardTitle>
                <CardDescription className="text-lg">Human-Following & Supervision</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Active human supervision ensures precise control for complex tasks using IR and ultrasonic sensors for human detection and following.
                </p>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li>• Real-time human tracking</li>
                  <li>• Obstacle avoidance</li>
                  <li>• Supervised task execution</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-bujji-cyan transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-cyan to-bujji-cyan-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bluetooth className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-bujji-cyan">Actuation Mode</CardTitle>
                <CardDescription className="text-lg">Remote Telebotic Control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Remote human interaction through Bluetooth and mobile app interface, ideal for scenarios requiring human judgment from a distance.
                </p>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li>• Bluetooth connectivity</li>
                  <li>• Mobile app control</li>
                  <li>• Real-time feedback</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-bujji-yellow transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-yellow to-bujji-yellow-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-bujji-yellow">Automation Mode</CardTitle>
                <CardDescription className="text-lg">Autonomous AI Navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Eliminates human involvement, relying on sensors and AI algorithms for autonomous decision-making and navigation.
                </p>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li>• AI-powered decisions</li>
                  <li>• Sensor fusion</li>
                  <li>• Autonomous navigation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                System Architecture
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Built on a robust foundation of modern hardware and intelligent software design.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-orange to-bujji-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Arduino-based Control Unit</h3>
                    <p className="text-slate-600 dark:text-slate-400">Microcontroller serving as the central processing unit for all operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-cyan to-bujji-cyan-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Advanced Sensor Array</h3>
                    <p className="text-slate-600 dark:text-slate-400">Ultrasonic, IR, and object-following sensors for comprehensive spatial awareness.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-yellow to-bujji-yellow-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Precision Actuators</h3>
                    <p className="text-slate-600 dark:text-slate-400">Motors and servos for smooth motion and precise manipulation capabilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-green to-bujji-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bluetooth className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Wireless Communication</h3>
                    <p className="text-slate-600 dark:text-slate-400">Bluetooth module for seamless remote operation and real-time feedback.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F9f4d14985817478b91b5588e01f79a84?format=webp&width=800"
                alt="A3Bujji Core Circuit Diagram"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Models Gallery */}
      <section id="prototypes" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Hardware Prototypes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              From concept to reality - see our working prototypes in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F4306f2174769473385c8baf4f7c742b1?format=webp&width=800"
                  alt="A3Bujji Hardware Model 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">Prototype Model 1</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Advanced sensor integration with Arduino UNO</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F573c81fefd48473885365a9cc1437c5e?format=webp&width=800"
                  alt="A3Bujji Hardware Model 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">Prototype Model 2</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Compact design with enhanced mobility</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2Fed8cd4e4d4f9492ab9cb269ddbfc295d?format=webp&width=800"
                  alt="A3Bujji Original Hardware"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">Original Prototype</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">First working model with basic functionality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Versatile Use Cases
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
              Real-World Applications
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              From emergency response to educational research, A3Bujji Aqua serves multiple critical functions across various industries and scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-bujji-blue transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-blue to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-bujji-blue">Emergency Response</CardTitle>
                <CardDescription>Disaster Management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Deliver relief supplies in flood affected areas safely and efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-500 transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-red-600">Safety & Rescue</CardTitle>
                <CardDescription>Rescue Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Reach stranded individuals in water safely without risking human lives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-bujji-orange transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-bujji-orange">Environmental Safety</CardTitle>
                <CardDescription>Hazardous Environments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Navigate in chemical spill or risky water zones where human intervention is dangerous.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-bujji-purple transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-purple to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-bujji-purple">Security</CardTitle>
                <CardDescription>Surveillance & Monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Attach camera for security and observation in aquatic environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-bujji-green transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-bujji-green">Academia</CardTitle>
                <CardDescription>Educational & Research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Demonstrates robotics, automation, IoT, and embedded systems concepts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-bujji-cyan transition-all duration-300 group hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bujji-cyan to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-bujji-cyan">Recreation</CardTitle>
                <CardDescription>Recreational Robotics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Smart IoT boating experience for hobbyists and enthusiasts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Section - Compact */}
      <section id="mobile-app" className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative lg:order-1">
              <div className="relative z-10 max-w-xs mx-auto">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F86626ff343f34e0083c787814607f001?format=webp&width=800"
                  alt="A3Bujji Mobile App Interface"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-bujji-cyan/20 rounded-full blur-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-bujji-orange/20 rounded-full blur-lg"></div>
            </div>

            <div className="space-y-6 lg:order-2">
              <div>
                <Badge className="bg-gradient-to-r from-bujji-cyan to-bujji-blue text-white mb-3">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile Control
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Remote Control App
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                  Take full control of your A3Bujji Core robot with our intuitive mobile application.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-bujji-orange to-bujji-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bluetooth className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Wireless Bluetooth Control</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-bujji-cyan to-bujji-cyan-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Real-time Feedback</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-bujji-yellow to-bujji-yellow-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gamepad2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Intuitive Controls</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" className="bg-gradient-to-r from-bujji-cyan to-bujji-cyan-dark text-white">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Download App
                </Button>
                <Button variant="outline" size="sm" className="border-bujji-orange text-bujji-orange hover:bg-bujji-orange hover:text-white">
                  View Features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              See A3Bujji in Action
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Watch our comprehensive demonstration showcasing all three operational modes
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <video 
                controls 
                className="w-full h-full"
                poster="https://cdn.builder.io/api/v1/image/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F83275f4b209648a8926265ce560b8e2f?format=webp&width=800"
              >
                <source src="https://cdn.builder.io/o/assets%2F96844424b2fa468a8ac4a61fdf0e64fc%2F31d599c84a0f4366bc88fc579ca06ee0?alt=media&token=91c7e9bf-5dbb-41c8-b94f-fba2f6b875b2&apiKey=96844424b2fa468a8ac4a61fdf0e64fc" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Explore Section - Moved Down */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-bujji-orange via-bujji-pink to-bujji-purple">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore A3Bujji Core?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in revolutionizing robotics with our multi-mode framework. Get started with documentation, code samples, and community support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-bujji-orange hover:bg-slate-100 shadow-lg">
              <Book className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-slate-900 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-300">
              Detailed specifications and performance metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Processing Power */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-bujji-orange transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-orange to-bujji-orange-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Processing Power</h3>
                    <p className="text-bujji-orange text-sm font-medium">Arduino-based</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">16MHz ATmega328P microcontroller</p>
              </CardContent>
            </Card>

            {/* Connectivity */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-bujji-cyan transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-cyan to-bujji-cyan-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bluetooth className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Connectivity</h3>
                    <p className="text-bujji-cyan text-sm font-medium">Bluetooth 5.0</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">3km range, low energy protocol</p>
              </CardContent>
            </Card>

            {/* Sensors */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-bujji-purple transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-purple to-bujji-pink rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sensors</h3>
                    <p className="text-bujji-purple text-sm font-medium">Multi-modal</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">Ultrasonic, IR, IMU sensors</p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-bujji-yellow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-yellow to-bujji-yellow-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                    <p className="text-bujji-yellow text-sm font-medium">&lt;100ms</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">Real-time control and feedback</p>
              </CardContent>
            </Card>

            {/* Battery Life */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-bujji-green transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-green to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Battery className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Battery Life</h3>
                    <p className="text-bujji-green text-sm font-medium">4-6 hours</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">Lithium-ion rechargeable</p>
              </CardContent>
            </Card>

            {/* Operating Range */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-bujji-blue transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-blue to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Signal className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Operating Range</h3>
                    <p className="text-bujji-blue text-sm font-medium">50m radius</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">Bluetooth communication range</p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Performance Metrics</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-bujji-orange to-bujji-orange-light bg-clip-text text-transparent mb-2">
                    99.5%
                  </div>
                  <p className="text-slate-300">System Reliability</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-bujji-cyan to-bujji-cyan-light bg-clip-text text-transparent mb-2">
                    50m
                  </div>
                  <p className="text-slate-300">Operating Range</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-bujji-purple to-bujji-pink bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <p className="text-slate-300">Monitoring Capability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet the Innovators - Vishal First */}
      <section id="innovators" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-bujji-blue to-bujji-purple text-white mb-4">
              Development Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Meet the Innovators
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
              The talented team behind A3Bujji Aqua's development at Gyan Ganga Institute of Technology and Sciences
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              This project was developed as part of our robotics and embedded systems curriculum, demonstrating practical application of theoretical concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Vishal - Project Manager First */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-bujji-cyan">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-bujji-cyan to-bujji-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">VJ</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Vishal Jaiswal</h3>
                <p className="text-bujji-cyan text-sm font-medium mb-2">Project Manager</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Leading the overall project development and coordination</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-bujji-orange">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-bujji-orange to-bujji-orange-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">NP</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Nikhil Patel</h3>
                <p className="text-bujji-orange text-sm font-medium mb-2">Hardware Engineer</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Designing and implementing the hardware architecture</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-bujji-purple">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-bujji-purple to-bujji-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">SD</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Shreyansh Dubey</h3>
                <p className="text-bujji-purple text-sm font-medium mb-2">Software Developer</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Developing the control algorithms and mobile app</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-bujji-green">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-bujji-green to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">RSL</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Rahul Singh Lodhi</h3>
                <p className="text-bujji-green text-sm font-medium mb-2">Systems Integrator</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Integrating all components and testing the system</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 border-blue-200 dark:border-slate-600">
            <CardContent className="p-8 text-center">
              <Building className="h-12 w-12 text-bujji-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Gyan Ganga Institute of Technology and Sciences
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                This project was developed as part of our robotics and embedded systems curriculum, demonstrating practical application of theoretical concepts.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-bujji-orange/10 text-bujji-orange">September 2024</Badge>
                <Badge variant="secondary" className="bg-bujji-cyan/10 text-bujji-cyan">Robotics Engineering</Badge>
                <Badge variant="secondary" className="bg-bujji-purple/10 text-bujji-purple">Embedded Systems</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Have questions about A3Bujji Core? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-orange to-bujji-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">contact@a3bujjicore.com</p>
                    <p className="text-slate-600 dark:text-slate-400">team@ggits.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-cyan to-bujji-cyan-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Call Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">+91 XXX-XXX-XXXX</p>
                    <p className="text-slate-600 dark:text-slate-400">Office Hours: 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bujji-green to-bujji-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Visit Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">Gyan Ganga Institute of Technology and Sciences</p>
                    <p className="text-slate-600 dark:text-slate-400">Jabalpur, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Follow Our Development</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    type="email" 
                    className="w-full mt-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Inquiry about A3Bujji Core"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-bujji-orange to-bujji-orange-light hover:from-bujji-orange-dark hover:to-bujji-orange text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-bujji-orange to-bujji-cyan rounded-lg"></div>
                <span className="text-xl font-bold">A3Bujji Core</span>
              </div>
              <p className="text-slate-400">
                Empowering developers with multi-mode robotics framework for the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('modes')} className="hover:text-white transition-colors">Operational Modes</button></li>
                <li><button onClick={() => scrollToSection('architecture')} className="hover:text-white transition-colors">Architecture</button></li>
                <li><button onClick={() => scrollToSection('prototypes')} className="hover:text-white transition-colors">Prototypes</button></li>
                <li><button onClick={() => scrollToSection('mobile-app')} className="hover:text-white transition-colors">Mobile App</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => scrollToSection('innovators')} className="hover:text-white transition-colors">Our Team</button></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 A3Bujji Core Team. All rights reserved. | Gyan Ganga Institute of Technology and Sciences</p>
          </div>
        </div>
      </footer>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-bujji-orange to-bujji-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Go to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
