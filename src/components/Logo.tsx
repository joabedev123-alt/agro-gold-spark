const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
          <span className="text-2xl md:text-3xl font-bold text-primary-foreground">A</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full animate-glow-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-gradient-gold tracking-tight">
          AGILIZA
        </span>
        <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-widest">
          AGROMARKETING
        </span>
      </div>
    </div>
  );
};

export default Logo;
