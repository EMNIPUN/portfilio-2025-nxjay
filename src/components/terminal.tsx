import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; Full-Stack Developer | AI-Powered Web App Enthusiast</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500 mt-4">
        <span className="text-muted-foreground">🌱 BSc (Hons) in Information Technology Specialising in <br/>Software Engineering.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500 mt-2">
        <span className="text-muted-foreground">🌱 I’m self-learning
        <span className="text-green-500"> Machine Learning</span> and <span className="text-green-500">Deep Learning</span>.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500 mt-2">
        <span className="text-muted-foreground">📝 I have a strong interest in <br/> <span className="text-green-500">AI-Powered Full stack Development</span> and <span className="text-green-500">Artificial intelligence</span>.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500 mt-2">
        <span className="text-muted-foreground">
          🤔 I’m looking to collaborate with any{" "}
          <span className="text-green-500">
            Open-Source Full Stack <br /> and{" "}
            <span className="text-green-500">Machine Learning</span> or{" "}
            <span className="text-green-500">Deep Learning</span> projects.
          </span>
        </span>
      </AnimatedSpan>

      <TypingAnimation delay={6500} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>

      <TypingAnimation delay={7000} className="text-muted-foreground">
        You may now add components.
      </TypingAnimation>
    </Terminal>
  );
}




