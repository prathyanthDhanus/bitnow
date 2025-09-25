import * as React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Ellipse from "@/assets/Ellipse 47.png";
import Typography from "../typography/Typography";

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  description: string;
  fallback?: string;
}

export const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      className,
      image,
      imageAlt,
      title,
      subtitle,
      description,
      fallback,
      ...props
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "bg-[#0f2932] text-white px-5 text-center max-w-md mx-auto border-0 rounded-2xl relative overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Ellipse in left bottom corner */}
        <img 
          src={Ellipse} 
          alt="" 
          className="absolute bottom-5 left-0 w-24 h-30 opacity-70"
          style={{ transform: 'translate(-30%, 30%)' }}
        />
        
        <div className="flex flex-col items-center space-y-4 relative z-10">
          <Avatar className="w-35 h-35">
            <AvatarImage src={image} alt={imageAlt || title} />
            <AvatarFallback className="bg-slate-600 text-white text-lg font-semibold">
              {fallback ||
                title
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-slate-300 text-sm font-medium">{subtitle}</p>
          </div>
        </div>
        
        {/* Description section aligned to left */}
        <div className="space-y-1 text-left">
          <Typography.B2R className="text-[16px]">
            Lorem ipsum dolor sit amet consectetur.
          </Typography.B2R>
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    );
  }
);

ProfileCard.displayName = "ProfileCard";