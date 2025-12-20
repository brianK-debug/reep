import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Trophy, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">REEP</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-muted hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/sign-in" className="text-muted hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Remote Education <br />
            <span className="text-primary">Engagement Platform</span>
          </h1>
          <p className="text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Transform your learning experience with gamification, real-time progress tracking, and an engaging platform
            designed for remote education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark text-white transition-all hover:scale-105"
              >
                Start Learning Free
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent transition-all hover:scale-105"
              >
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose REEP?</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Everything you need to engage students and track progress in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-1 duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Interactive Courses</h3>
              <p className="text-muted leading-relaxed">
                Engaging video lessons, quizzes, and hands-on projects to master new skills
              </p>
            </div>

            <div
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-1 duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Gamification</h3>
              <p className="text-muted leading-relaxed">
                Earn points, unlock badges, and compete on leaderboards to stay motivated
              </p>
            </div>

            <div
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-1 duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Real-time Analytics</h3>
              <p className="text-muted leading-relaxed">
                Track progress, engagement, and performance with comprehensive dashboards
              </p>
            </div>

            <div
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-1 duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: "400ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Instant Feedback</h3>
              <p className="text-muted leading-relaxed">
                Get immediate results on quizzes and assignments to accelerate learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 text-center text-white shadow-2xl transition-all hover:scale-105 duration-300">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Learning?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of students and teachers already using REEP</p>
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 transition-all hover:scale-105">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-surface">
        <div className="container mx-auto px-4 text-center text-muted">
          <p>&copy; 2025 REEP - Remote Education Engagement Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
