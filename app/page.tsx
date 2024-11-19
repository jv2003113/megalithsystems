import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Globe, Mail, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100 text-stone-800">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-stone-800 text-stone-100 relative z-10">
      <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.jpg"
            alt="Megalith Systems Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="ml-2 text-lg font-bold">Megalith Systems</span>
      </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-amber-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-amber-400 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-amber-400 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('top-bg.jpg')`,
              
            }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                  Megalith Systems
                </h1>
                <p className="text-xl font-semibold text-amber-400">Revolutionizing Business with AI Agents</p>
                <p className="mx-auto max-w-[700px] text-stone-200 md:text-xl">
                  Empower your business with cutting-edge AI technology. Our intelligent agents are designed to transform your operations and drive growth.
                </p>
              </div>
              <div className="space-x-4 mt-4">
                <Button className="bg-amber-600 text-white hover:bg-amber-700">Get Started</Button>
                <Button variant="outline" className="text-amber-400 border-amber-400 hover:bg-amber-900 hover:text-amber-300">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-stone-200">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-stone-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-stone-100 border-stone-300 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Cpu className="h-6 w-6 mb-2 text-amber-600" />
                  <CardTitle className="text-stone-800">Advanced AI Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Leverage state-of-the-art machine learning models for unparalleled performance.</p>
                </CardContent>
              </Card>
              <Card className="bg-stone-100 border-stone-300 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Globe className="h-6 w-6 mb-2 text-amber-600" />
                  <CardTitle className="text-stone-800">Scalable Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Our AI agents grow with your business, adapting to your evolving needs.</p>
                </CardContent>
              </Card>
              <Card className="bg-stone-100 border-stone-300 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <MessageSquare className="h-6 w-6 mb-2 text-amber-600" />
                  <CardTitle className="text-stone-800">Natural Language Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Communicate with your AI agents using natural language for seamless interaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-stone-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-stone-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-stone-50 border-stone-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">Custom AI Agent Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Tailor-made AI agents designed to meet your specific business requirements and objectives.</p>
                </CardContent>
              </Card>
              <Card className="bg-stone-50 border-stone-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">AI Integration Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Expert guidance on integrating AI agents into your existing systems and workflows.</p>
                </CardContent>
              </Card>
              <Card className="bg-stone-50 border-stone-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">AI-Powered Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Harness the power of AI to gain deep insights from your data and drive informed decision-making.</p>
                </CardContent>
              </Card>
              <Card className="bg-stone-50 border-stone-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">Ongoing Support and Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Continuous support and updates to ensure your AI agents remain cutting-edge and effective.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-stone-800 text-stone-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business?</h2>
                <p className="mx-auto max-w-[600px] text-stone-300 md:text-xl">
                  Contact us today to learn how our AI agents can revolutionize your operations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-amber-600 text-white hover:bg-amber-700" size="lg">
                  <Mail className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-stone-300 bg-stone-100">
        <p className="text-xs text-stone-500">© 2024 Megalith Systems. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-stone-500 hover:text-stone-700" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-stone-500 hover:text-stone-700" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}