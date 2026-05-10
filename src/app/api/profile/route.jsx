import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0e27',
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.06) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
          color: '#e2e8f0',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '50px 60px',
        }}
      >
        {/* Animated border gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '16px',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#0a0e27, #0a0e27), linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 0 60px rgba(139, 92, 246, 0.15), inset 0 0 60px rgba(139, 92, 246, 0.03)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <h1
                style={{
                  fontSize: '64px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #60a5fa 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  margin: 0,
                  letterSpacing: '-0.03em',
                }}
              >
                Dhruv Sharma
              </h1>
              <div
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1.5px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: '20px',
                  fontSize: '17px',
                  color: '#4ade80',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '14px' }}>●</span> Building
              </div>
            </div>
            
            <p
              style={{
                fontSize: '26px',
                margin: 0,
                color: '#cbd5e1',
                fontWeight: 500,
                letterSpacing: '-0.01em',
              }}
            >
              Full-Stack Developer • AI Security Enthusiast
            </p>
          </div>

          {/* About Me Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '32px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06) 0%, rgba(59, 130, 246, 0.04) 100%)',
              borderRadius: '16px',
              border: '1.5px solid rgba(139, 92, 246, 0.2)',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                fontSize: '16px',
                color: '#a78bfa',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              About Me
            </div>
            <p
              style={{
                fontSize: '22px',
                lineHeight: 1.7,
                color: '#cbd5e1',
                margin: 0,
                fontWeight: 400,
              }}
            >
              I like building things that solve a problem, from securing AI pipelines against data leaks to crafting 
              seamless full-stack experiences. I love the intersection of security and AI, where every line of code can 
              be the difference between safe and vulnerable. When I'm not debugging late at night or experimenting with 
              latest tech trends, you'll find me exploring  APIs, diving into backend optimization, or just watching black mirror.
              I believe great software should be both powerful and secure by default.
            </p>
          </div>

          {/* What I'm Working On */}
          <div style={{ display: 'flex', gap: '24px' }}>
            {/* Current Focus */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '28px',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)',
                borderRadius: '14px',
                border: '1.5px solid rgba(236, 72, 153, 0.25)',
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '10px' }}>🚀</div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#f3f4f6',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                Currently Building
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  color: '#94a3b8',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                SecureRAG: A multi-layer defense system that keeps AI applications safe from sensitive data leakage. 
                Think FAISS meets privacy-first architecture.
              </p>
            </div>

            {/* Interests */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '28px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(34, 197, 94, 0.06) 100%)',
                borderRadius: '14px',
                border: '1.5px solid rgba(59, 130, 246, 0.25)',
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '10px' }}>💡</div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#f3f4f6',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                What Excites Me
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  color: '#94a3b8',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                API security, LLM evaluation pipelines, privacy-preserving ML, and healthcare interoperability. 
                I geek out over well-designed REST endpoints and elegant database schemas.
              </p>
            </div>
          </div>

          {/* Footer - Tech Stack */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(71, 85, 105, 0.3)',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Node.js', 'React', 'Python', 'PyTorch', 'Docker', 'MongoDB', 'REST APIs'].map((tech, i) => (
                <div
                  key={i}
                  style={{
                    padding: '6px 14px',
                    backgroundColor: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: '#c4b5fd',
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: '16px',
                color: '#64748b',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>📍</span>
              Delhi, India
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 940,
    }
  );
}