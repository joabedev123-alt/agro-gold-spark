const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo-agiliza.png"
        alt="Agiliza Agromarketing"
        className="h-12 md:h-16 w-auto object-contain max-w-[160px] md:max-w-none"
      />
    </div>
  );
};

export default Logo;
