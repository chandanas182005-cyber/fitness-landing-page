import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Flame, 
  Zap, 
  TrendingUp, 
  Sparkles, 
  Shield, 
  Activity, 
  Apple, 
  Calendar, 
  Play, 
  Check, 
  ChevronDown, 
  Mail, 
  Compass, 
  User, 
  Award, 
  Clock, 
  Plus, 
  X, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Smartphone,
  Cpu,
  Tv,
  Scale,
  Smile,
  Sliders,
  Maximize2,
  RefreshCw,
  Infinity as InfinityIcon,
  ChevronRight
} from 'lucide-react';

const PARTNERS = [
  { name: 'VITALITY', icon: '⚡' },
  { name: 'STRYDE', icon: '⬢' },
  { name: 'AURA RUN', icon: '✦' },
  { name: 'ELEVATE', icon: '▲' },
  { name: 'CHRONOS', icon: '☉' }
];

const WORKOUT_CATEGORIES = [
  {
    id: 'strength',
    title: 'Hypertrophy & Strength',
    shortTitle: 'Strength',
    tagline: 'Sculpt your physique with advanced progressive overload training.',
    duration: '45-60 min',
    intensity: 'High',
    calories: '450 kcal',
    trainer: 'Marcus Vance, Elite Strength Coach',
    image: '⚡',
    color: 'from-orange-500 to-amber-600',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    metrics: { primary: 'Power Output', value: '92%', trend: '+8% this week' }
  },
  {
    id: 'yoga',
    title: 'Mind-Body Recovery',
    shortTitle: 'Yoga & Mobility',
    tagline: 'Deep restoration, flexibility, and autonomic nervous system regulation.',
    duration: '30-45 min',
    intensity: 'Low-Medium',
    calories: '220 kcal',
    trainer: 'Elena Rostova, Mindfulness Expert',
    image: '🧘',
    color: 'from-violet-500 to-indigo-600',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    metrics: { primary: 'Heart Rate Variability', value: '110 ms', trend: '+14% improvement' }
  },
  {
    id: 'cardio',
    title: 'Zone 2 Conditioning',
    shortTitle: 'Zone 2 Cardio',
    tagline: 'Optimize mitochondrial health and maximize your aerobic endurance ceiling.',
    duration: '40-80 min',
    intensity: 'Medium',
    calories: '600 kcal',
    trainer: 'Dr. Sarah Lin, Cardiovascular Scientist',
    image: '🏃',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    metrics: { primary: 'VO2 Max Est.', value: '54.2 ml/kg', trend: '+1.2 pt increase' }
  },
  {
    id: 'hiit',
    title: 'Metabolic Conditioning (HIIT)',
    shortTitle: 'HIIT',
    tagline: 'High-intensity intervals designed to trigger the EPOC calorie afterburn effect.',
    duration: '20-30 min',
    intensity: 'Elite',
    calories: '550 kcal',
    trainer: 'Jaxson Pierce, Metcon Pioneer',
    image: '🔥',
    color: 'from-rose-500 to-red-600',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    metrics: { primary: 'Anaerobic Peak', value: '185 bpm', trend: '98% performance index' }
  },
  {
    id: 'loss',
    title: 'Caloric Deficit Performance',
    shortTitle: 'Weight Control',
    tagline: 'Structured weight management matching daily energy expenditure targets.',
    duration: '35-50 min',
    intensity: 'Medium-High',
    calories: '480 kcal',
    trainer: 'Coach Brandon Roy, Metabolic Specialist',
    image: '⚖️',
    color: 'from-emerald-400 to-teal-500',
    glowColor: 'rgba(52, 211, 153, 0.25)',
    metrics: { primary: 'Fat Oxidation', value: '32g/hr', trend: 'Optimal metabolic rate' }
  },
  {
    id: 'muscle',
    title: 'Athletic Power & Powerlifting',
    shortTitle: 'Athletic Power',
    tagline: 'Explosive functional movements targeting fast-twitch muscle fibers.',
    duration: '50-70 min',
    intensity: 'High-Elite',
    calories: '500 kcal',
    trainer: 'Dmitri Kozlov, Olympic Weightlifter',
    image: '🏋️',
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    metrics: { primary: 'Explosive Index', value: '88/100', trend: 'Peak neurological drive' }
  }
];

export default function App() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [activeCategory, setActiveCategory] = useState('strength');
  const [activeDashboardTab, setActiveDashboardTab] = useState('activity'); // 'activity' | 'heart' | 'sleep'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Phone simulator dynamic metrics state
  const [heroHeartRate, setHeroHeartRate] = useState(132);
  const [heroCalories, setHeroCalories] = useState(384);

  // stress scanning simulation states
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  // Interactive Blueprint states
  const [userWeight, setUserWeight] = useState(175);
  const [targetHeartRate, setTargetHeartRate] = useState(140);
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [sleepScore, setSleepScore] = useState(82);

  // Optical Alignment state (improper vs optimal toggle)
  const [alignmentMode, setAlignmentMode] = useState('optimal'); // 'optimal' | 'improper'

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    let mouse = { x: null, y: null, radius: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Attract particles subtly towards mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            p.x += dx * 0.01;
            p.y += dy * 0.01;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();

        // Connect near particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist/90) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroHeartRate(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next > 145 ? 140 : next < 125 ? 128 : next;
      });
      setHeroCalories(prev => prev + (Math.random() > 0.65 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Sticky header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startBiometricScan = () => {
    if (scanning) return;
    setScanning(true);
    setScanResult(null);
    setScanProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 4;
      setScanProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setScanning(false);
        const randomStress = Math.floor(Math.random() * 25) + 30; // 30-55% stress
        const randomHRV = Math.floor(Math.random() * 40) + 75; // 75-115ms
        setScanResult({
          stress: randomStress,
          hrv: randomHRV,
          status: randomStress < 40 ? 'Optimal (Parasympathetic dominant)' : 'Mild Fatigue (Needs Zone 2 Recovery)'
        });
      }
    }, 120);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmailInput('');
      }, 5000);
    }
  };

  const selectedCategoryData = WORKOUT_CATEGORIES.find(cat => cat.id === activeCategory);

  // Dynamic values calculated by the blueprint tool
  const blueprintCalories = Math.round(userWeight * 14 * (daysPerWeek / 4) * (targetHeartRate / 130));
  const blueprintRecoveryTime = Math.max(12, Math.round(72 - (sleepScore * 0.6)));

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-white overflow-x-hidden antialiased">
      
      {/* Decorative Cinematic Radial Glows (More colorful, textured & deep) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[50%] left-1/5 w-[600px] h-[600px] bg-emerald-950/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/5 right-10 w-[550px] h-[550px] bg-blue-900/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#07070a]/90 backdrop-blur-md border-b border-zinc-800/70 py-4 shadow-2xl shadow-black/40' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/10">
              <div className="w-full h-full bg-[#09090b] rounded-[14px] flex items-center justify-center">
                <span className="font-black text-2xl bg-gradient-to-tr from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">F</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-500 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tight text-white leading-none">FitPulse</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-extrabold mt-0.5">Studio Elite</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors duration-200 relative group py-2">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#categories" className="hover:text-white transition-colors duration-200 relative group py-2">
              Workouts
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#blueprint" className="hover:text-white transition-colors duration-200 relative group py-2">
              Blueprint Creator
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#preview" className="hover:text-white transition-colors duration-200 relative group py-2">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200 relative group py-2">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative hidden sm:inline-flex items-center justify-center p-[1px] overflow-hidden text-xs font-semibold text-zinc-200 rounded-xl group bg-gradient-to-br from-zinc-700 to-zinc-800 hover:text-white focus:outline-none"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-950 rounded-[11px] group-hover:bg-opacity-0">
                Log In
              </span>
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-indigo-500/25 border border-indigo-300/20"
            >
              Join Premium
            </button>
          </div>
        </div>
      </header>

      {}
      <section className="relative pt-36 pb-28 md:pt-48 md:pb-40 max-w-7xl mx-auto px-6 overflow-visible">
        {/* Particle Canvas Background specifically bound to Hero */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto -z-10" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            <div className="inline-flex self-start items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-zinc-800/80 text-xs font-semibold tracking-wide text-zinc-300 shadow-xl shadow-indigo-500/5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">FitPulse Premium 4.0 is Live</span>
              <span className="text-indigo-400 font-bold ml-1.5 flex items-center">AI Kinematic Assist <ArrowRight className="w-3 h-3 ml-1" /></span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white">
              The high-end <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_4px_15px_rgba(99,102,241,0.2)]">
                scientific fitness
              </span><br />
              standard.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Experience neural-sculpted workouts, clinical bio-feedback loops, and posture-aligning kinetic tracking. Specially engineered for high-performers demanding exquisite physical optimization.
            </p>

            {/* CTAs with gorgeous interactive shadows */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
              <button 
                onClick={() => {
                  const element = document.getElementById('pricing');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-9 py-4.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-500 rounded-xl font-bold text-sm text-white shadow-2xl shadow-indigo-500/35 transition-all hover:-translate-y-1 hover:shadow-indigo-500/50 hover:brightness-110 active:translate-y-0 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Initialize System Access
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
              
              <button 
                onClick={() => setShowDemoModal(true)}
                className="group px-8 py-4 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl font-bold text-sm text-zinc-200 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-900 group-hover:bg-indigo-950/80 flex items-center justify-center transition-colors border border-zinc-800 group-hover:border-indigo-800">
                  <Play className="w-3 h-3 text-indigo-400 fill-indigo-400 translate-x-[1px]" />
                </div>
                Watch Scientific Film
              </button>
            </div>

            {/* Micro Stats */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-md border-t border-zinc-800/80">
              <div>
                <p className="text-3xl font-black text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">4.96<span className="text-indigo-400 text-lg font-bold">★</span></p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold mt-1">App Store Tier-1</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">18M+</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold mt-1">Sprints Scanned</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">99.6%</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold mt-1">Postural Accuracy</p>
              </div>
            </div>

          </div>

          {}
          <div className="lg:col-span-5 relative flex items-center justify-center py-10 lg:py-0">
            
            {/* Pulsing Back Ambient Orb */}
            <div className="absolute w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[110px] -z-10 animate-pulse" />

            {/* Smartphone Container with depth & metallic edge highlights */}
            <div className="relative w-[320px] h-[640px] rounded-[56px] border-4 border-zinc-800/90 bg-[#09090c] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-zinc-700/30 transition-all duration-500 hover:rotate-1 hover:scale-[1.02]">
              
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
                <div className="w-2.5 h-1 bg-zinc-800 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[44px] overflow-hidden bg-gradient-to-b from-[#0e0e14] to-[#050508] border border-zinc-900 px-4 py-8 flex flex-col justify-between">
                
                {/* Simulator Header */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs shadow-md">👑</div>
                    <div>
                      <p className="text-[8px] text-zinc-500 font-extrabold uppercase">ALEXANDER</p>
                      <p className="text-[10px] text-zinc-200 font-extrabold">Peak Athleticism</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-900/90 border border-zinc-800/70 flex items-center justify-center">
                    <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                  </div>
                </div>

                {/* Central Ring Analyzer */}
                <div className="my-auto py-2 flex flex-col items-center">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" stroke="rgba(39, 39, 42, 0.3)" strokeWidth="5.5" fill="none" />
                      <circle cx="50" cy="50" r="42" stroke="url(#heroPaint1)" strokeWidth="6" fill="none" strokeDasharray="264" strokeDashoffset={264 - (264 * 0.82)} strokeLinecap="round" />
                      
                      <circle cx="50" cy="50" r="33" stroke="rgba(39, 39, 42, 0.3)" strokeWidth="5.5" fill="none" />
                      <circle cx="50" cy="50" r="33" stroke="url(#heroPaint2)" strokeWidth="6" fill="none" strokeDasharray="207" strokeDashoffset={207 - (207 * 0.68)} strokeLinecap="round" />
                      
                      <defs>
                        <linearGradient id="heroPaint1" x1="0" y1="0" x2="1" y2="1">
                          <stop stopColor="#3b82f6" />
                          <stop offset="1" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient id="heroPaint2" x1="0" y1="0" x2="1" y2="1">
                          <stop stopColor="#10b981" />
                          <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute flex flex-col items-center text-center">
                      <Flame className="w-6 h-6 text-orange-500 animate-bounce mb-1" />
                      <span className="text-2xl font-black text-white tracking-tight">{heroCalories}</span>
                      <span className="text-[8px] text-zinc-500 uppercase tracking-[0.2em] font-extrabold">Kcal Burn</span>
                    </div>
                  </div>

                  {/* live Metrics Dashboard */}
                  <div className="grid grid-cols-2 gap-2 w-full mt-4">
                    <div className="bg-zinc-900/60 border border-zinc-800/60 p-2.5 rounded-2xl flex flex-col justify-between">
                      <span className="text-[8px] text-zinc-500 font-extrabold uppercase tracking-wider">Heart Rate</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-black text-rose-500">{heroHeartRate}</span>
                        <span className="text-[8px] text-zinc-400 font-bold">BPM</span>
                      </div>
                      <span className="text-[7px] text-rose-400/80 mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" /> Live tracking
                      </span>
                    </div>

                    <div className="bg-zinc-900/60 border border-zinc-800/60 p-2.5 rounded-2xl flex flex-col justify-between">
                      <span className="text-[8px] text-zinc-500 font-extrabold uppercase tracking-wider">Sleep quality</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-black text-violet-400">92%</span>
                        <span className="text-[8px] text-zinc-400 font-bold">RECOVERY</span>
                      </div>
                      <span className="text-[7px] text-emerald-400 mt-1 font-bold">Peak status index</span>
                    </div>
                  </div>
                </div>

                {/* Simulated App Navigation bar */}
                <div className="h-12 bg-zinc-950/90 border border-zinc-900 rounded-2xl flex items-center justify-around px-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center shadow-inner">
                    <TrendingUp className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400 transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400 transition-colors">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

            {/* Glowing Hover Cards Overlaying smartphone (Absolute layered positioning for depth) */}
            {/* Card 1: Streak */}
            <div className="absolute top-[15%] -left-12 sm:-left-20 bg-[#101017]/90 backdrop-blur-md border border-indigo-500/30 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-[bounce_6s_infinite] transition-transform hover:scale-105 z-20">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shadow-lg">
                <Flame className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-extrabold">STREAK SEQUENCE</p>
                <p className="text-sm font-black text-white">28 Active Days</p>
                <div className="w-20 h-1.5 bg-zinc-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-orange-400 to-rose-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Card 2: Neural Recovery */}
            <div className="absolute bottom-[22%] -right-12 sm:-right-20 bg-[#101017]/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-[bounce_5s_infinite] transition-transform hover:scale-105 z-20">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-extrabold">RECOVERY STATE</p>
                <p className="text-sm font-black text-white">96% HRV Score</p>
                <p className="text-[9px] text-emerald-400 mt-0.5 font-bold">● High Autonomic Balance</p>
              </div>
            </div>

            {/* Card 3: Live Bio feedback status */}
            <div className="absolute bottom-8 -left-8 bg-zinc-950/95 backdrop-blur-md border border-zinc-800 p-3.5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] flex items-center gap-3 transition-transform hover:scale-105 z-20">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-500 font-extrabold uppercase tracking-widest">POSTURE COMPLIANCE</span>
                <span className="text-xs font-extrabold text-zinc-200">99.4% Alignment Matrix</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="border-y border-zinc-900 bg-[#07070a]/80 py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-10">
            SECURE INTEGRATIONS WITH GOLD-STANDARD DEFI & BIOTECH PLATFORMS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-50 hover:opacity-90 transition-opacity duration-300">
            {PARTNERS.map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 group cursor-pointer">
                <span className="text-2xl group-hover:text-indigo-400 transition-colors duration-300">{partner.icon}</span>
                <span className="font-black text-sm tracking-[0.35em] text-zinc-400 group-hover:text-white transition-colors duration-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
              Live Biometrics Interactive Test
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
              Analyze your current stress level now
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Experience a micro-simulation of FitPulse’s neural analyzer directly from your browser. Click the sensor to simulate reading your stress thresholds.
            </p>

            <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl flex items-start gap-3">
              <Smile className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200">Medical Privacy Note:</strong> This simulation calculates simulated stress loads based on algorithm metrics to showcase the real-time layout. No personal cameras or biosensors are accessed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0b0b10] border border-zinc-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px]" />
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-5 mb-6">
                <div>
                  <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest">LIVE SIGNAL INTERCEPTOR</span>
                  <h3 className="text-lg font-black text-white">Dynamic Stress HRV Core</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${scanning ? 'bg-indigo-500 animate-ping' : 'bg-emerald-500'}`} />
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">{scanning ? 'CALIBRATING SIGNAL' : 'DEVICE CONNECTED'}</span>
                </div>
              </div>

              {/* Glowing Scan Viewport */}
              <div className="relative h-44 bg-[#07070a] border border-zinc-900 rounded-2xl flex flex-col items-center justify-center overflow-hidden mb-6">
                {scanning ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* SVG ECG Heart Waveform Path */}
                    <svg className="w-full h-full px-6" viewBox="0 0 400 150">
                      <path 
                        d="M 0 75 L 120 75 L 140 30 L 150 120 L 165 75 L 190 75 L 205 20 L 220 130 L 235 75 L 400 75" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        className="animate-[dash_2s_linear_infinite]"
                        style={{
                          strokeDasharray: '1000',
                          strokeDashoffset: '1000'
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent pointer-events-none animate-pulse" />
                    <span className="absolute bottom-4 text-xs font-bold text-indigo-400 uppercase tracking-widest">
                      Processing Bio-telemetry Sync ({scanProgress}%)
                    </span>
                  </div>
                ) : scanResult ? (
                  <div className="text-center space-y-3 p-6 animate-fade-in">
                    <p className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">✓ Diagnostic Assessment complete</p>
                    <div className="flex justify-center gap-8 items-center py-2">
                      <div>
                        <span className="text-3xl font-black text-white">{scanResult.stress}%</span>
                        <p className="text-[9px] text-zinc-500 font-extrabold uppercase">STRESS LOAD</p>
                      </div>
                      <div className="w-px h-10 bg-zinc-800" />
                      <div>
                        <span className="text-3xl font-black text-indigo-400">{scanResult.hrv} ms</span>
                        <p className="text-[9px] text-zinc-500 font-extrabold uppercase">HRV DYNAMIC</p>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-300 font-bold bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/20 max-w-sm mx-auto">
                      {scanResult.status}
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-2 px-6">
                    <Activity className="w-10 h-10 text-zinc-600 mx-auto animate-pulse" />
                    <p className="text-xs font-bold text-zinc-400">Press and calibrate the biomechanics reader below</p>
                    <p className="text-[10px] text-zinc-600">Takes approximately 3.5 seconds</p>
                  </div>
                )}
              </div>

              {/* Interactive Push Button sensor */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                <button 
                  onClick={startBiometricScan}
                  disabled={scanning}
                  className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                    scanning 
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:brightness-110 shadow-lg shadow-indigo-500/20'
                  }`}
                >
                  {scanning ? 'SCANNING PULSE...' : 'PRESS TO SCAN STRESS'}
                </button>

                {scanResult && (
                  <button 
                    onClick={() => setScanResult(null)}
                    className="text-xs font-bold text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Clear Results
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            System Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Designed for exquisite biological performance
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            FitPulse supplies medical-grade machine learning frameworks designed to maximize mitochondrial capacity and muscular integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-[#0d0d12] border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center mb-6 border border-indigo-500/20 shadow-md">
              <Zap className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">Cognitive Coaching Model</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Advanced machine intelligence computes nervous system loads daily to rebuild metabolic exercises matched with physical sleep indices.
            </p>
            <span className="text-xs font-bold text-indigo-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              Explore bio-adaptation <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0d0d12] border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(59,130,246,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6 border border-blue-500/20 shadow-md">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Optical Kinematic Tracker</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Access real-time kinematic evaluations on squat depths, posture symmetries, and velocity profiles through standard web cams.
            </p>
            <span className="text-xs font-bold text-blue-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              See optical alignment <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0d0d12] border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(16,185,129,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6 border border-emerald-500/20 shadow-md">
              <Apple className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Macro-Nutrient Profiler</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Capture digital photographs of nutrient components to immediately gauge caloric loads and mineral absorption suggestions.
            </p>
            <span className="text-xs font-bold text-emerald-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              Analyze cellular nutrition <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-[#0d0d12] border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(168,85,247,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 flex items-center justify-center mb-6 border border-purple-500/20 shadow-md">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Unified Bio-Telemetry</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Secure deep linking options support continuous synchronization with Apple Watch Ultra, Oura, Garmin, and WHOOP biosensors.
            </p>
            <span className="text-xs font-bold text-purple-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              Review privacy rules <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Card 5 */}
          <div className="group relative bg-[#0d0d12] border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(244,63,94,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-rose-500/15 flex items-center justify-center mb-6 border border-rose-500/20 shadow-md">
              <TrendingUp className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">Predictive Analytics</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Algorithmic forecasting builds dynamic timelines detailing targeted hydration, muscle balance and mass curves.
            </p>
            <span className="text-xs font-bold text-rose-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              Calculate projected timelines <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Card 6 */}
          <div className="group relative bg-[#0d0d12] border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(245,158,11,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6 border border-amber-500/20 shadow-md">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">Velocity Contests</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Enter competitive functional exercise leagues alongside a highly motivated global performance athletic cohort.
            </p>
            <span className="text-xs font-bold text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              Join live active challenges <ArrowRight className="w-3 h-3" />
            </span>
          </div>

        </div>
      </section>

      {}
      <section className="py-24 bg-[#0a0a0f] border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-3 py-1 rounded-full">
                Kinematic Correction Simulator
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
                AI Kinematic Posture Alignment
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tackle incorrect kinetic loads and lower back compression before injuries materialize. Standard mobile viewports compute skeletal points instantaneously.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 p-4 rounded-xl border border-zinc-800 bg-[#0d0d12]">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Spatial Vertex Scanning</h4>
                    <p className="text-xs text-zinc-400 mt-1">Monitors skeletal angle adjustments 60 times per second.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-zinc-800 bg-[#0d0d12]">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Haptic/Vocal Prompts</h4>
                    <p className="text-xs text-zinc-400 mt-1">Speaks directly to advise real-time posture amendments.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#09090c] border border-zinc-800 rounded-3xl p-6 shadow-2xl relative">
                
                {/* Control switches for alignment toggle */}
                <div className="flex bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 mb-6 max-w-sm">
                  <button 
                    onClick={() => setAlignmentMode('optimal')}
                    className={`flex-1 py-2 text-xs font-black rounded-lg transition-all ${
                      alignmentMode === 'optimal' ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Optimal Alignment
                  </button>
                  <button 
                    onClick={() => setAlignmentMode('improper')}
                    className={`flex-1 py-2 text-xs font-black rounded-lg transition-all ${
                      alignmentMode === 'improper' ? 'bg-rose-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Improper Load
                  </button>
                </div>

                {/* Simulated posture visual rendering screen */}
                <div className="relative h-72 bg-[#050508] border border-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner">
                  {/* Skeletal illustration SVG */}
                  <svg className="w-full h-full max-w-xs p-6 relative z-10" viewBox="0 0 100 120">
                    {/* Head */}
                    <circle cx="50" cy="20" r="8" fill="none" stroke={alignmentMode === 'optimal' ? '#10b981' : '#f43f5e'} strokeWidth="2.5" />
                    
                    {/* Spine */}
                    {alignmentMode === 'optimal' ? (
                      <path d="M 50 28 L 50 65" fill="none" stroke="#10b981" strokeWidth="3" />
                    ) : (
                      <path d="M 50 28 Q 58 45 50 65" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="3,3" />
                    )}

                    {/* Shoulders & Arms */}
                    <line x1="32" y1="35" x2="68" y2="35" stroke={alignmentMode === 'optimal' ? '#10b981' : '#f43f5e'} strokeWidth="2.5" />
                    <line x1="32" y1="35" x2="24" y2="58" stroke={alignmentMode === 'optimal' ? '#10b981' : '#f43f5e'} strokeWidth="2" />
                    <line x1="68" y1="35" x2="76" y2="58" stroke={alignmentMode === 'optimal' ? '#10b981' : '#f43f5e'} strokeWidth="2" />

                    {/* Pelvis */}
                    <line x1="38" y1="65" x2="62" y2="65" stroke={alignmentMode === 'optimal' ? '#10b981' : '#f43f5e'} strokeWidth="2.5" />

                    {/* Legs (Squat depth) */}
                    {alignmentMode === 'optimal' ? (
                      <>
                        <path d="M 38 65 L 26 80 L 38 102" fill="none" stroke="#10b981" strokeWidth="3" />
                        <path d="M 62 65 L 74 80 L 62 102" fill="none" stroke="#10b981" strokeWidth="3" />
                      </>
                    ) : (
                      <>
                        <path d="M 38 65 L 20 74 L 30 100" fill="none" stroke="#f43f5e" strokeWidth="3" />
                        <path d="M 62 65 L 78 78 L 72 101" fill="none" stroke="#f43f5e" strokeWidth="3" />
                      </>
                    )}

                    {/* Active Joint Nodes Overlay */}
                    <circle cx="50" cy="20" r="3.5" fill="#ffffff" />
                    <circle cx="32" cy="35" r="3.5" fill="#ffffff" />
                    <circle cx="68" cy="35" r="3.5" fill="#ffffff" />
                    <circle cx="38" cy="65" r="3.5" fill="#ffffff" />
                    <circle cx="62" cy="65" r="3.5" fill="#ffffff" />
                    
                    {/* Hip / Spine Stress highlights */}
                    {alignmentMode === 'improper' && (
                      <circle cx="53" cy="48" r="8" fill="none" stroke="#f43f5e" strokeWidth="1.5" className="animate-ping" />
                    )}
                  </svg>

                  {/* Dynamic Posture metrics overlay HUD */}
                  <div className="absolute top-4 left-4 bg-zinc-950/90 border border-zinc-800 p-3 rounded-xl text-[10px] space-y-1">
                    <p className="text-zinc-500 uppercase tracking-widest font-extrabold">VERTEX RATIO</p>
                    <p className="text-white font-black">{alignmentMode === 'optimal' ? 'Cervical Curve: 12°' : 'Cervical Curve: 24°'}</p>
                    <p className="text-white font-black">{alignmentMode === 'optimal' ? 'Hip Rotation: 0° (Aligned)' : 'Hip Rotation: 8° (Imbalance)'}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-zinc-950/90 border border-zinc-800 p-3 rounded-xl text-[10px] space-y-1">
                    <p className="text-zinc-500 uppercase tracking-widest font-extrabold">SPATIAL FEEDBACK</p>
                    <p className={`font-black uppercase tracking-wider ${alignmentMode === 'optimal' ? 'text-emerald-400' : 'text-rose-500'}`}>
                      {alignmentMode === 'optimal' ? 'Optimal Spine Load' : 'Lumbar Strain Risk!'}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="blueprint" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            Interactive Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Calculate your custom metabolic blueprint
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Adjust your biometric sliders to dynamically forecast recommended caloric expenditure targets and systemic recovery window times.
          </p>
        </div>

        <div className="bg-[#0b0b10] border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Sliders Control Pane */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-zinc-300">Target Body Weight</span>
                  <span className="text-indigo-400">{userWeight} lbs</span>
                </div>
                <input 
                  type="range" 
                  min="110" 
                  max="280" 
                  value={userWeight} 
                  onChange={(e) => setUserWeight(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-zinc-900 rounded-lg appearance-none h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-zinc-300">Target Training Heart Rate</span>
                  <span className="text-indigo-400">{targetHeartRate} BPM</span>
                </div>
                <input 
                  type="range" 
                  min="110" 
                  max="190" 
                  value={targetHeartRate} 
                  onChange={(e) => setTargetHeartRate(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-zinc-900 rounded-lg appearance-none h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-zinc-300">Target Training Days / Week</span>
                  <span className="text-indigo-400">{daysPerWeek} days</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  value={daysPerWeek} 
                  onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-zinc-900 rounded-lg appearance-none h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-zinc-300">Sleep Score</span>
                  <span className="text-indigo-400">{sleepScore}/100</span>
                </div>
                <input 
                  type="range" 
                  min="40" 
                  max="100" 
                  value={sleepScore} 
                  onChange={(e) => setSleepScore(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-zinc-900 rounded-lg appearance-none h-2"
                />
              </div>

            </div>

            {/* Simulated Live blueprint gauge feedback */}
            <div className="lg:col-span-6 bg-zinc-950/80 border border-zinc-850 p-6 rounded-2xl space-y-6">
              
              <div className="border-b border-zinc-900 pb-4">
                <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">DYNAMIC METABOLIC ESTIMATES</span>
                <h4 className="text-lg font-black text-white mt-1">Calculated Adaptive Target Metrics</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/40 border border-zinc-850 p-4 rounded-xl text-center">
                  <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">Est. Workout Burn</span>
                  <p className="text-2xl font-black text-indigo-400 mt-2">{blueprintCalories} Kcal</p>
                  <p className="text-[9px] text-zinc-500 mt-1">per exercise session</p>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-850 p-4 rounded-xl text-center">
                  <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">Recovery window</span>
                  <p className="text-2xl font-black text-emerald-400 mt-2">{blueprintRecoveryTime} Hours</p>
                  <p className="text-[9px] text-zinc-500 mt-1">recommended downtime</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 space-y-2">
                <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> Biometrics Alignment Notice
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Based on target days and weight stats, we recommend maintaining {targetHeartRate - 15} BPM active recovery zones to sustain high carbohydrate burning metrics.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {}
      <section id="categories" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Navigation switchers */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em]">
                Elite Programs catalog
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
                Architect your perfect training week
              </h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Unlock targeted workout architectures cataloged by international athletic specialists. Filter programs below to see dynamic predictive indices.
            </p>

            {/* Switch Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-4">
              {WORKOUT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                    activeCategory === cat.id 
                    ? 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-indigo-500/60 shadow-xl shadow-indigo-500/5 scale-[1.02]' 
                    : 'bg-transparent border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{cat.image}</span>
                    <span className={`text-xs font-extrabold transition-colors ${
                      activeCategory === cat.id ? 'text-white' : 'text-zinc-500'
                    }`}>
                      {cat.shortTitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic workout preview pane */}
          <div className="lg:col-span-7">
            <div 
              className="relative rounded-3xl p-8 sm:p-10 border border-zinc-800 bg-gradient-to-br from-[#0c0c11] to-[#07070a] shadow-2xl overflow-hidden transition-all duration-500"
              style={{
                boxShadow: `0 25px 50px -15px ${selectedCategoryData.glowColor}`
              }}
            >
              {/* glowing border top */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${selectedCategoryData.color}`} />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedCategoryData.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {selectedCategoryData.image}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Interactive Schedule</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-none mt-0.5">{selectedCategoryData.title}</h3>
                  </div>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 flex items-center gap-1.5 self-start sm:self-center">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" /> {selectedCategoryData.duration}
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                "{selectedCategoryData.tagline}"
              </p>

              {/* Dynamic metrics block */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-850 mb-6">
                <div>
                  <p className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">Estimated Intensity</p>
                  <p className="text-sm font-black text-white mt-1">{selectedCategoryData.intensity}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">Metabolic Cost</p>
                  <p className="text-sm font-black text-emerald-400 mt-1">{selectedCategoryData.calories}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">Biometric Monitor</p>
                  <p className="text-sm font-black text-indigo-400 mt-1">{selectedCategoryData.metrics.primary}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">Forecast Output</p>
                  <p className="text-xs font-black text-zinc-300 mt-1">{selectedCategoryData.metrics.value}</p>
                  <p className="text-[9px] text-emerald-400 font-bold mt-0.5">{selectedCategoryData.metrics.trend}</p>
                </div>
              </div>

              {/* Trainer signatures */}
              <div className="flex items-center justify-between border-t border-zinc-900 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                    {selectedCategoryData.trainer.substring(0, 2)}
                  </div>
                  <div>
                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Program Chief Architect</p>
                    <p className="text-xs font-black text-zinc-200">{selectedCategoryData.trainer}</p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 hover:border-zinc-600 rounded-xl text-xs font-bold text-white transition-all flex items-center gap-1.5"
                >
                  Configure Plan
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {}
      <section id="preview" className="py-24 bg-[#0a0a0f] border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Dashboard Simulator Block */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-800 bg-[#09090c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[70px] pointer-events-none" />
                
                {/* Simulated Web App Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-6">
                  <div>
                    <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest">FITPULSE ANALYTICS CORE</span>
                    <h3 className="text-xl font-black text-white mt-1">Unified Dynamic Bio-Metrics</h3>
                  </div>

                  {/* Dashboard Tab Selector */}
                  <div className="flex bg-zinc-900 p-1 rounded-xl">
                    <button 
                      onClick={() => setActiveDashboardTab('activity')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        activeDashboardTab === 'activity' ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Activity curve
                    </button>
                    <button 
                      onClick={() => setActiveDashboardTab('heart')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        activeDashboardTab === 'heart' ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      HRV Trend
                    </button>
                    <button 
                      onClick={() => setActiveDashboardTab('sleep')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        activeDashboardTab === 'sleep' ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Recovery Cycles
                    </button>
                  </div>
                </div>

                {/* Simulated Chart viewport */}
                <div className="h-64 flex flex-col justify-between mb-6">
                  {activeDashboardTab === 'activity' && (
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                        <span>Predicted Metabolic Load (KCAL)</span>
                        <span className="text-emerald-400 font-bold">+18.4% Efficiency Boost</span>
                      </div>
                      
                      {/* Premium SVG Line/Area Graph */}
                      <div className="relative flex-1 bg-[#09090c] border border-zinc-900 rounded-2xl p-4 flex items-end overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 500 150" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <line x1="0" y1="25" x2="500" y2="25" stroke="#1c1c24" strokeWidth="1.5" strokeDasharray="6,6" />
                          <line x1="0" y1="75" x2="500" y2="75" stroke="#1c1c24" strokeWidth="1.5" strokeDasharray="6,6" />
                          <line x1="0" y1="125" x2="500" y2="125" stroke="#1c1c24" strokeWidth="1.5" strokeDasharray="6,6" />
                          
                          <path d="M 0 150 L 0 130 Q 75 110 120 70 T 250 85 T 375 25 T 500 50 L 500 150 Z" fill="url(#chartGradient2)" />
                          <path d="M 0 130 Q 75 110 120 70 T 250 85 T 375 25 T 500 50" fill="none" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round" />
                          
                          <circle cx="120" cy="70" r="5.5" fill="#818cf8" stroke="#09090c" strokeWidth="2.5" />
                          <circle cx="375" cy="25" r="5.5" fill="#818cf8" stroke="#09090c" strokeWidth="2.5" />
                        </svg>

                        <div className="absolute bottom-1.5 left-4 right-4 flex justify-between text-[9px] text-zinc-500 font-extrabold">
                          <span>MON</span>
                          <span>TUE</span>
                          <span>WED</span>
                          <span>THU</span>
                          <span>FRI</span>
                          <span>SAT</span>
                          <span>SUN</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDashboardTab === 'heart' && (
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                        <span>Heart Rate Variability (HRV ms)</span>
                        <span className="text-violet-400 font-bold">Optimal Autonomic Curve</span>
                      </div>
                      
                      {/* Premium SVG Bar Graph */}
                      <div className="relative flex-1 bg-[#09090c] border border-zinc-900 rounded-2xl p-4 flex items-end justify-between">
                        {[58, 65, 82, 70, 94, 110, 105].map((val, idx) => (
                          <div key={idx} className="flex flex-col items-center w-[12%] h-full justify-end">
                            <div className="text-[9px] text-zinc-400 font-black mb-1">{val}</div>
                            <div 
                              className="w-full rounded-t-lg bg-gradient-to-t from-violet-600 to-indigo-400 transition-all duration-700 shadow-md" 
                              style={{ height: `${(val / 120) * 100}%` }}
                            />
                            <span className="text-[9px] text-zinc-500 font-extrabold mt-2">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDashboardTab === 'sleep' && (
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                        <span>Neurological Sleep Quality Indices</span>
                        <span className="text-cyan-400 font-bold">Target achieved 6/7 sessions</span>
                      </div>
                      
                      {/* Sleep Stats Circle Metrics */}
                      <div className="relative flex-1 bg-[#09090c] border border-zinc-900 rounded-2xl p-6 flex items-center justify-around">
                        <div className="text-center">
                          <p className="text-3xl font-black text-cyan-400">8h 12m</p>
                          <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-extrabold mt-1">Avg Duration</p>
                        </div>
                        <div className="w-px h-12 bg-zinc-850" />
                        <div className="text-center">
                          <p className="text-3xl font-black text-violet-400">92.4%</p>
                          <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-extrabold mt-1">REM Efficiency</p>
                        </div>
                        <div className="w-px h-12 bg-zinc-850" />
                        <div className="text-center">
                          <p className="text-3xl font-black text-emerald-400">18 ms</p>
                          <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-extrabold mt-1">Drop Pulse delta</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dashboard bottom metadata */}
                <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-6">
                  <div>
                    <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest">Active Heart</span>
                    <p className="text-sm font-black text-white mt-0.5">112 bpm Avg</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest">Target Recovery</span>
                    <p className="text-sm font-black text-white mt-0.5">84% Efficiency</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest">Biometric Integrity</span>
                    <p className="text-sm font-black text-white mt-0.5">Premium level</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right value statements */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em]">
                  Consolidated Ecosystem
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
                  No subscriptions scattered across different platforms
                </h2>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                Most modern systems divide physical tracking, biometric logging, nutrition, and recovery routines. FitPulse parses these divergent signals in a central intelligence unit to construct real-time predictions.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="w-5.5 h-5.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-200">Unified Machine synthesis</p>
                    <p className="text-xs text-zinc-400 mt-1">Computes biological load scores and advises restorative breaks.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5.5 h-5.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-200">Automated Micro-Nutrition alignment</p>
                    <p className="text-xs text-zinc-400 mt-1">Updates daily macronutrient limits based on energy burned.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5.5 h-5.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-200">Continuous Private Server Groups</p>
                    <p className="text-xs text-zinc-400 mt-1">Set up custom sprint tournaments and share progress curves cleanly.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Plans configured for every physical ambition
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Begin with standard AI workout mapping, or elevate to executive clinical wellness teams.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-3 bg-zinc-900/85 p-1 rounded-2xl border border-zinc-800/80 mt-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Annual Save 20%
              <span className="text-[9px] bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Save</span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1 */}
          <div className="bg-[#0c0c11] border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between transition-all hover:border-zinc-700">
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold text-zinc-500 tracking-widest">Starter Access</span>
                <h3 className="text-xl font-bold text-white mt-1">Core Access</h3>
                <p className="text-zinc-400 text-xs mt-2">Essential machine-mapped routines and device syncing features.</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">${billingCycle === 'annual' ? '12' : '15'}</span>
                <span className="text-xs text-zinc-500">/ user / mo</span>
              </div>

              <div className="space-y-4 border-t border-zinc-900 pt-6">
                <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-2">INCLUDES ALL CORE FEATURES:</p>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Biometric synchronization across 2 devices</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Daily dynamic workouts (Strength, Cardio)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Fully integrated basic diet logger</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Encrypted biosensor metrics archive</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-200 rounded-xl transition-all"
            >
              Get Core Now
            </button>
          </div>

          {/* Plan 2 */}
          <div className="relative bg-gradient-to-b from-[#11111a] to-[#07070a] border-2 border-indigo-500 p-8 rounded-3xl flex flex-col justify-between shadow-[0_20px_40px_rgba(99,102,241,0.15)] transition-all hover:scale-[1.01] z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              Most Selected Tier
            </div>

            <div>
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-widest font-bold">Pro Athlete Access</span>
                <h3 className="text-2xl font-black text-white mt-1">Biometric Pro</h3>
                <p className="text-zinc-300 text-xs mt-2">Unlimited progressive overload mapping with kinetic posture correctors.</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">${billingCycle === 'annual' ? '24' : '29'}</span>
                <span className="text-xs text-zinc-400">/ user / mo</span>
              </div>

              <div className="space-y-4 border-t border-zinc-850 pt-6">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">EVERYTHING IN CORE, PLUS:</p>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-100 font-bold">Optical Kinematic alignment correctors</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-200">Unlimited multi-device health hub syncing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-200">Comprehensive HRV stress and recovery trends</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-200">Deep macro and micro-nutrient tracking indexes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-200">Access to private server tournaments and leagues</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-xs font-extrabold text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Unlock Biometric Pro
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#0c0c11] border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between transition-all hover:border-zinc-700">
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold text-zinc-500 tracking-widest">Clinical Expert Access</span>
                <h3 className="text-xl font-bold text-white mt-1">Apex Executive</h3>
                <p className="text-zinc-400 text-xs mt-2">Bespoke performance supervision managed by real sports scientists.</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">${billingCycle === 'annual' ? '79' : '99'}</span>
                <span className="text-xs text-zinc-500">/ user / mo</span>
              </div>

              <div className="space-y-4 border-t border-zinc-900 pt-6">
                <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-2">EVERYTHING IN PRO, PLUS:</p>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Bi-weekly consulting session with certified trainer</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Complete clinical bio-metric exports for health advisors</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Tailored continuous custom hydration packages</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">Priority bypass queue for upcoming private betas</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-200 rounded-xl transition-all"
            >
              Consult Clinical Advisor
            </button>
          </div>

        </div>
      </section>

      {}
      <section className="py-24 bg-[#0a0a0f] border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Verified Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Endorsed by high-performers worldwide
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Find out how technology founders, combat personnel, and marathon runners accelerated their physiological thresholds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-[#0c0c11] border border-zinc-800 p-8 rounded-3xl relative shadow-lg">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                "Working 15-hour shifts left my nervous system completely drained. FitPulse's daily adaptive routines completely recalibrated my mornings. My VO2 max has climbed over 12% in 4 months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                  CP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Christian Pryce</h4>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">VC Founding Partner</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0c11] border border-zinc-800 p-8 rounded-3xl relative shadow-lg">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                "The optical posture assistant is extraordinary. It corrected a 5-degree pelvic drift in my deep squat, and my lower back strain disappeared. Absolute game-changer for strength athletes."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-rose-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                  KW
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Kira Westwood</h4>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Ultra-Marathon Triathlete</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0c11] border border-zinc-800 p-8 rounded-3xl relative shadow-lg">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                "FitPulse successfully unifies my smart ring metrics, carbohydrate tracking, and workout maps in one seamless environment. I consolidated 4 subscriptions into this single, sleek system."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                  DN
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Derrick Nguyen</h4>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Lead Software Architect</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm">
            Everything you need to understand about our biological algorithms and device integration rules.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How exactly does the AI coaching engine construct dynamic daily workouts?",
              a: "FitPulse syncs with your smart rings and watches to monitor parameters like Heart Rate Variability (HRV), resting pulse, and deep REM latency. If systemic nerve exhaustion indicators rise, the scheduler redirects routines into restorative mobility modules automatically."
            },
            {
              q: "Do I need special hardware to utilize the Optical Posture Alignment Corrector?",
              a: "No physical hardware is necessary. The alignment checker operates entirely via the integrated cameras on standard mobile viewports. When activating a routine, place your device to capture your structural profile, and the machine constructs postural correction vertex indices instantly."
            },
            {
              q: "How does the annual subscription and device compatibility sync function?",
              a: "Your membership includes unified sync across an unlimited number of devices—including smart tablets, personal mobile phones, televisions, and wearables. All progress syncs instantly in our secure, encrypted cloud server database."
            },
            {
              q: "Can I safely export my biomarker summaries to healthcare or coaching teams?",
              a: "Absolutely. FitPulse allows you to secure and export encrypted HIPAA-compliant clinical PDF or CSV metric packages. You can easily share these detailed logs with your nutritionist, personal trainer, or personal physician."
            },
            {
              q: "What is your satisfaction guarantee and cancellation policy?",
              a: "We offer a 100% money-back guarantee within the first 14 days of your initial onboarding sequence. You can cancel your subscription with zero hassle directly through your user panel interface or via a single message to our support team."
            }
          ].map((item, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div 
                key={index} 
                className="bg-[#0c0c11] border border-zinc-850 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-sm font-bold text-white pr-4">{item.q}</span>
                  <div className={`w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-52 border-t border-zinc-900 p-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {}
      <section className="py-12 max-w-7xl mx-auto px-6 relative">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-tr from-[#101015] to-[#07070a] p-12 md:p-16 text-center space-y-8 shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-[0.25em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            Configure Your Onboarding Profile
          </span>
          
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to experience the ultimate standard of biometric design?
          </h2>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join over 1.2M+ active athletes who leverage FitPulse’s neural trackers to systematically scale cardiovascular stamina and physical energy lines.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-2">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your premier email address"
              required
              className="bg-zinc-950 border border-zinc-800 focus:border-indigo-500 focus:outline-none rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 flex-1 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-500 hover:brightness-110 active:scale-95 text-xs font-extrabold text-white rounded-xl shadow-lg transition-all"
            >
              Get Started Free
            </button>
          </form>

          {isSubscribed && (
            <div className="text-emerald-400 text-xs font-semibold animate-pulse">
              ✓ Onboarding instructions dispatched! Check your mailbox to customize your physical parameters.
            </div>
          )}

          <div className="flex items-center justify-center gap-6 text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest pt-4">
            <span>● No credit card needed</span>
            <span>● Cancel whenever</span>
            <span>● HIPAA Secured Database</span>
          </div>

        </div>
      </section>

      {}
      <footer className="border-t border-zinc-900 bg-[#07070a] pt-20 pb-12 mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          
          <div className="col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-500 p-[1px]">
                <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center">
                  <span className="font-black text-sm bg-gradient-to-tr from-blue-400 to-violet-400 bg-clip-text text-transparent">F</span>
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">FitPulse</span>
            </a>
            
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              FitPulse provides advanced metabolic calculations and physical intelligence tracking systems designed to optimize human capacity. Engineered by Clinical Sports Scientists.
            </p>

            <div className="flex items-center gap-3 text-zinc-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">Technology</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">AI Bio-Coaching</a>
              <a href="#" className="hover:text-white transition-colors">Kinematic Analysis</a>
              <a href="#" className="hover:text-white transition-colors">Continuous HRV Sync</a>
              <a href="#" className="hover:text-white transition-colors">Device Integrations</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">Resources</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Clinical Studies</a>
              <a href="#" className="hover:text-white transition-colors">Physiology Blog</a>
              <a href="#" className="hover:text-white transition-colors">API Developer Guide</a>
              <a href="#" className="hover:text-white transition-colors">Help & Tutorials</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">Company</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">About Team</a>
              <a href="#" className="hover:text-white transition-colors">Brand Press Kit</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Framework</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
          <p>© 2026 FitPulse Technologies Inc. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed by <span className="text-zinc-400">Elite Creative Agency</span>
          </p>
        </div>
      </footer>

      {/* Simulated Cinematic Overlay Video Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative bg-[#0d0d12] border border-zinc-850 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between p-4 border-b border-zinc-900 bg-[#0c0c11]">
              <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest">FITPULSE CINEMATIC DEMO</span>
              <button 
                onClick={() => setShowDemoModal(false)}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="aspect-video bg-black flex flex-col items-center justify-center p-12 text-center space-y-4 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-30 gap-1.5 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-gradient-to-t from-indigo-500 to-violet-500 rounded-full animate-[pulse_1.5s_infinite]" 
                    style={{ 
                      height: `${Math.floor(Math.random() * 80) + 20}px`,
                      animationDelay: `${i * 120}ms`
                    }} 
                  />
                ))}
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mx-auto mb-4 animate-ping">
                  <Play className="w-6 h-6 text-indigo-400 fill-indigo-400 translate-x-[2px]" />
                </div>
                <h4 className="text-lg font-black text-white">Stream: "Dynamic Bio-Adaptive Training Environments"</h4>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Playing preview narrative... Watch how our cloud algorithm reconstructs recovery graphs instantly from smart-ring data points.
                </p>
                
                <div className="pt-2">
                  <button 
                    onClick={() => setShowDemoModal(false)}
                    className="px-6 py-2 bg-zinc-900 hover:bg-zinc-800 text-xs font-extrabold text-white rounded-lg border border-zinc-800 transition-all"
                  >
                    Close & Start Free Trial
                  </button>
                </div>
              </div>

            </div>

            <div className="p-4 bg-zinc-950/80 border-t border-zinc-900 text-[10px] text-zinc-500 text-center uppercase tracking-widest font-bold">
              Narrated by Dr. Evelyn Cross, Chief Science Officer
            </div>

          </div>
        </div>
      )}

    </div>
  );
}