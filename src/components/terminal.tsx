import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { CheckCircle, Code, Coffee, Cpu, Globe, Sparkles } from "lucide-react";

export function TerminalDemo() {
  return (
    <Terminal className="bg-background/40 backdrop-blur-md border border-accent/20 shadow-lg">
      <TypingAnimation className="text-sky-400 font-mono">
        &gt; Nipun.init(2025) | Welcome to my digital space
      </TypingAnimation>

      <AnimatedSpan delay={1500} className="mt-4 flex items-start gap-2">
        <CheckCircle className="w-4 h-4 mt-1 text-teal-400" />
        <span className="text-muted-foreground">
          BSc (Hons) in Information Technology Specialising in <br />
          Software Engineering.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="mt-2 flex items-start gap-2">
        <Cpu className="w-4 h-4 mt-1 text-cyan-400" />
        <span className="text-muted-foreground">
          Actively exploring
          <span className="text-cyan-400"> Machine Learning</span> and{" "}
          <span className="text-sky-400">Deep Learning</span> <br/>technologies.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="mt-2 flex items-start gap-2">
        <Code className="w-4 h-4 mt-1 text-teal-400" />
        <span className="text-muted-foreground">
          Specialized in <br />
          <span className="text-teal-400">AI-Powered Full Stack Development</span>{" "}
          and <span className="text-cyan-400">Cloud Architecture</span>.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="mt-2 flex items-start gap-2">
        <Globe className="w-4 h-4 mt-1 text-sky-400" />
        <span className="text-muted-foreground">
          Open to collaborate on innovative{" "}
          <span className="text-teal-400">
            Full Stack Projects <br /> and{" "}
            <span className="text-cyan-400">Machine Learning</span> initiatives
            that create impact.
          </span>
        </span>
      </AnimatedSpan>

      <TypingAnimation
        delay={6500}
        className="text-emerald-400 mt-3 font-mono"
      >
        &gt; System.status: Online and Ready
      </TypingAnimation>

      <AnimatedSpan
        delay={7000}
        className="mt-1 text-sky-400 font-mono flex items-center gap-2"
      >
        <Sparkles className="w-3 h-3" />
        <span>Let's build something amazing together!</span>
      </AnimatedSpan>
    </Terminal>
  );
}




