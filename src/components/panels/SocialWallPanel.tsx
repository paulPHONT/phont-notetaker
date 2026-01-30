import { MessageCircle, Quote, Share2, Heart, User } from "lucide-react";

export const SocialWallPanel = () => {
  const liveComments = [
    { author: "Julia M.", text: "That micro-grid prediction is huge if accurate 📊", time: "2m ago", likes: 12 },
    { author: "Tech Reporter", text: "Finally someone addressing the regulatory gap honestly", time: "5m ago", likes: 28 },
    { author: "EnergySector", text: "Dr. Vasquez bringing the fire today 🔥", time: "8m ago", likes: 45 },
    { author: "SustainableNow", text: "This is exactly the urgency we need from industry leaders", time: "12m ago", likes: 19 },
    { author: "GridWatcher", text: "The interoperability discussion needs more airtime", time: "15m ago", likes: 8 },
  ];

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Most Quoted Statement */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Most Quoted</span>
            </div>
            <div className="glass-panel-strong rounded-xl p-5 border-l-2 border-l-accent">
              <p className="text-lg font-display font-semibold leading-snug mb-3">
                "The cost of inaction now far exceeds the investment required for transformation."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20" />
                <div>
                  <p className="text-sm font-medium">Dr. Elena Vasquez</p>
                  <p className="text-xs text-muted-foreground">Shared 847 times</p>
                </div>
              </div>
            </div>
          </div>

          {/* Most Shared Post */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Most Shared</span>
            </div>
            <div className="glass-panel-strong rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">T</span>
                </div>
                <div>
                  <p className="text-sm font-medium">@TechCrunch</p>
                  <p className="text-xs text-muted-foreground">Verified • 5.2M followers</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                "40% of commercial buildings as micro-grids by 2030" — Bold prediction from Terraform CEO at #EnergyFuture25. Is this optimistic or inevitable? 🏢⚡
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>1.2K retweets</span>
                <span>3.4K likes</span>
                <span>89 comments</span>
              </div>
            </div>
          </div>

          {/* Favourite Speaker */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Audience Favourite</span>
            </div>
            <div className="glass-panel-strong rounded-xl p-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-lg font-display font-bold">Dr. Elena Vasquez</p>
                <p className="text-sm text-muted-foreground">Chief Strategy Officer, GridSync</p>
                <div className="flex items-center gap-1 mt-1">
                  <Heart className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-xs text-accent">Most engaging speaker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Comments */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '250ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Live Reactions</span>
              <span className="ml-auto phont-badge text-[10px]">Simulated</span>
            </div>
            <div className="space-y-2">
              {liveComments.map((comment, i) => (
                <div key={i} className="feed-card opacity-0 slide-up" style={{ animationDelay: `${300 + i * 50}ms` }}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.text}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Heart className="w-3 h-3" />
                    <span>{comment.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example indicator */}
          <p className="text-xs text-center text-muted-foreground pt-4">
            Example output • Curated signal feed
          </p>
        </div>
      </section>
    </div>
  );
};
